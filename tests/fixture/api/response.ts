import * as Joi from 'joi';
import { expect } from '@playwright/test';

export const petResponse = {
  validateResponse: (responseBody, schema) => {
    const { error } = schema.validate(responseBody);
    expect(error).toBeNull();
  },
  petSchema: Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required(),
    status: Joi.string().required(),
    category: Joi.object({
      id: Joi.number().required(),
      name: Joi.string().required()
    }).unknown(true), 
  }).unknown(true), 
};