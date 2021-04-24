import { ParamValidator } from "../types/Validator";

/*
 * If multiple parameters are needed, then functions
 * should be curried
 */

export const isDefinedValidator: ParamValidator<any> = (param) => !!param;

export const greaterThanFactory = (
  threshold: number
): ParamValidator<number> => (param: number) => param > threshold;

export const greaterOrEqualFactory = (
  threshold: number
): ParamValidator<number> => (param: number) => param >= threshold;

export const lessThanFactory = (threshold: number): ParamValidator<number> => (
  param: number
) => param < threshold;

export const lessOrEqualFactory = (
  threshold: number
): ParamValidator<number> => (param: number) => param <= threshold;

export const equalsStrictValidator = (
  threshold: any
): ParamValidator<number> => (param: number) => param == threshold;

export const deepEqualsValidator = (threshold: any): ParamValidator<number> => (
  param: number
) => param === threshold;
