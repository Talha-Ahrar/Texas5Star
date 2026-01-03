import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';

/**
 * Pass 'context' as the third argument to bootstrapApplication.
 * This satisfies the NG0401 requirement without breaking TypeScript types.
 */
const bootstrap = (context: BootstrapContext) =>
  bootstrapApplication(App, config, context);

export default bootstrap;
