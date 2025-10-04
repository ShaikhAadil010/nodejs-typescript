import type { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import type { Schema, ValidationError } from 'joi';

function formatErrorMessage(errors: ValidationError) {
  return errors.details.map((error) => error.message);
}
// Middleware to validate request body against a Joi schema
export function verifySchema(schema: Schema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      res.status(StatusCodes.BAD_REQUEST).json({
        message: 'Validation error',
        error: formatErrorMessage(error),
      });
      return;
    }
    next();
  };
}
