import { ModuleContext } from './module-context.js';

export class Module {
  protected readonly context: ModuleContext;

  constructor(context: ModuleContext) {
    this.context = context;
  }
}
