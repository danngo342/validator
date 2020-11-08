import { VALIDATE } from "../constants/metadataKeys";
import { Parameter } from "../types/Parameter";

/**
 * Validator decorator that runs all param decorators
 */
export function validate(
  target: any,
  propertyName: string,
  descriptor: TypedPropertyDescriptor<Function>
) {
  // reference to descriptor value
  let method = descriptor.value;
  descriptor.value = function () {
    const params: Parameter[] = Reflect.getOwnMetadata(
      VALIDATE,
      target,
      propertyName
    );

    params
      .filter(param => {
        const { validator, parameterIndex } = param;
        const failed = !validator(arguments[parameterIndex]);
        return failed;
      })
      .forEach(param => {
        const { decoratorName, parameterIndex } = param;
        console.error(`${decoratorName} detected failed parameter at index: ${parameterIndex}`);
      });

    // This is why we have the method variable reference
    // So that we can bind this to the descriptor
    return method?.apply(this, arguments);
  }
}