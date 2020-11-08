import { ParamValidator } from "./Validator";

export interface Parameter {
  readonly decoratorName: string | Symbol;
  readonly propertyKey: string | Symbol;
  readonly parameterIndex: number;
  readonly validator: ParamValidator<any>;
}