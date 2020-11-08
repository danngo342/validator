import { ParamValidator } from "../types/Validator";

/*
 * If multiple parameters are needed, then functions
 * should be curried over monads (functions with
 * only one parameter each)
 */

export const isDefinedValidator: ParamValidator<any> = (param) => param;

export const greaterThanValidator = (
  threshold: number
): ParamValidator<number> => (param: number) => param > threshold;

export const greaterOrEqualValidator = (
  threshold: number
): ParamValidator<number> => (param: number) => param >= threshold;

export const lessThanValidator = (
  threshold: number
): ParamValidator<number> => (param: number) => param < threshold;

export const lessOrEqualValidator = (
  threshold: number
): ParamValidator<number> => (param: number) => param <= threshold;

export const equalsStrictValidator = (
  threshold: any
): ParamValidator<number> => (param: number) => param == threshold;

export const deepEqualsValidator = (threshold: any): ParamValidator<number> => (
  param: number
) => param === threshold;
