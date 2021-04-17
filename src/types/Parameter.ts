import { ParamValidator } from "./Validator";

export interface Parameter<T = unknown> {
  readonly decoratorName: string | Symbol;
  readonly propertyKey: string | Symbol;
  readonly parameterIndex: number;
  readonly validator: ParamValidator<T>;
}
