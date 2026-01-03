import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import morgan from 'morgan'; // optional: request logger

// Directories
const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

// Optional: log requests for debugging
app.use(morgan('dev'));

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  })
);

/**
 * Handle all other requests by rendering the Angular application.
 * Added a 60-second timeout to prevent SSR prerender timeouts.
 */
app.use((req, res, next) => {
  // Set timeout per request (60s)
  res.setTimeout(60000, () => {
    console.error(`⚠️ Request timed out: ${req.url}`);
    res.status(504).send('Request timed out');
  });

  angularApp
    .handle(req)
    .then((response) => {
      if (response) {
        writeResponseToNodeResponse(response, res);
      } else {
        next();
      }
    })
    .catch((err) => {
      console.error(`❌ Error rendering route ${req.url}:`, err);
      res.status(500).send('Internal server error');
    });
});

/**
 * Start the server if this module is the main entry point.
 */
if (isMainModule(import.meta.url)) {
  const port = Number(process.env['PORT'] ?? 4000);

  const server = app.listen(port, () => {
    console.log(`✅ Node Express server listening on http://localhost:${port}`);
  });

  // Handle server errors
  server.on('error', (err) => {
    console.error('❌ Server startup error:', err);
  });

  // Graceful shutdown
  process.on('SIGINT', () => {
    console.log('🛑 Server shutting down...');
    server.close(() => process.exit(0));
  });
  process.on('SIGTERM', () => {
    console.log('🛑 Server terminating...');
    server.close(() => process.exit(0));
  });
}

/**
 * Request handler used by Angular CLI or serverless platforms
 */
export const reqHandler = createNodeRequestHandler(app);
