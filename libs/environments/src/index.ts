export * from './lib/environments.module';
import { environment as devEnvironment } from './lib/environment.dev';
import { environment as prodEnvironment } from './lib/environment.prod';

export { devEnvironment, prodEnvironment };
