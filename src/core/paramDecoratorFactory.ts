import "reflect-metadata";
import { VALIDATE } from "../constants/metadataKeys";
import { DecoratorMetadata } from "../types/DecoratorMetadata";
import { Parameter } from "../types/Parameter";
import { ParamValidator } from "../types/Validator";

/**
 * Base function for parameter validators (to be
 * used by the ts compiler to evaulate decorator
 * annotations after having jumped here from the
 * entry function, which would be the function of
 * the same name as the decorator annotation in
 * the client application).
 *
 * Decorator arguments (that are not directly passed
 * in by the client developer, but rather, the compiler):
 *
 * target: Either the constructor function of the class
 * for a static member, or the prototype of the class
 * for an instance member.
 *
 * propertyKey: The name of the member.
 *
 * parameterIndex: The ordinal index of the parameter
 * in the function’s parameter list.
 */
const paramValidatorBuilder = <T>(
  decoratorName: string | symbol,
  validator: ParamValidator<T>,
  metaData: DecoratorMetadata
): void => {
  const [target, propertyKey, parameterIndex] = metaData;

  const params: Parameter<T>[] =
    Reflect.getOwnMetadata(VALIDATE, target, propertyKey) || [];

  params.push({
    decoratorName,
    propertyKey,
    parameterIndex,
    validator,
  });

  Reflect.defineMetadata(VALIDATE, params, target, propertyKey);
};

export const paramDecoratorFactory = <T>(validator: ParamValidator<T>) =>
  // Returned function is the decorator, and is invoked
  // by ts compiler after the client invokes @decorator()
  (...metaData: DecoratorMetadata): void =>
    paramValidatorBuilder<T>(validator.name, validator, metaData);
