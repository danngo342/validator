import { ParamValidator } from "../types/Validator";

export const isDefinedValidator: ParamValidator<any> = (param) => param;

export const greaterThanValidator = (threshold: number): ParamValidator<number> =>
  (param: number) => param > threshold;