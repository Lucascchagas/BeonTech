import * as Joi from 'joi';

export {};

declare global {
  namespace PlaywrightTest {
    interface Matchers<R> {
      toBeValidSchema(schema: Joi.AnySchema): R;
    }
  }
}
