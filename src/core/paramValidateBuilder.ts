import "reflect-metadata";
import { VALIDATE } from "../constants/metadataKeys";
import { Parameter } from "../types/Parameter";
import { ParamValidator } from "../types/Validator";

/**
 * 
 */
export function paramValidateBuilder(
  decoratorName: string | Symbol = "validateWith",
  validator: ParamValidator<any>,
  target: Object,
  propertyKey: string | symbol,
  parameterIndex: number,
) {
  const params: Parameter[] = Reflect.getOwnMetadata(
    VALIDATE,
    target,
    propertyKey
  ) || [];

  params.push({
    decoratorName,
    propertyKey,
    parameterIndex,
    validator,
  });

  Reflect.defineMetadata(
    VALIDATE,
    params,
    target,
    propertyKey,
  );
}