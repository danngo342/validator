import { ParamValidator } from "../types/Validator";
import { VALIDATE } from "../constants/metadataKeys";
import { Parameter } from "../types/Parameter";

// type func<T = unknown, R = unknown> = (args?: T) => R;
/**
 * Validator decorator that runs all param decorators
 *
 * descriptor: descriptor is the object that makes up the
 * functionality of an instance field's reference (note
 * that i am also referring to functions as a subset of fields).
 * Descriptors are what you see in ts when directly printing a
 * reference to a function.
 *
 * Mainly, descriptors overload the setter and getter properties
 * of the instance field.
 *
 * For example: for a function ClassTest.asdf() , let us say
 * that we overwrite the descriptor of asdf to have a setter
 * to print "hello world" every time asdf is set.
 * This essentially results in:
 *
 * ClassTest.asdf = 10;   // "Hello World" is printed, instead of asdf being assigned to 10
 */
export function validate(
  target: Object,
  propertyName: string,
  descriptor: TypedPropertyDescriptor<any>
): void {
  // reference to descriptor value
  const method = descriptor.value;
  descriptor.value = function (...targetParams: unknown[]) {
    const params: Parameter[] = Reflect.getOwnMetadata(
      VALIDATE,
      target,
      propertyName
    );

    params
      .filter((param) => {
        const { validator, parameterIndex } = param;
        const failed = !validator(targetParams[parameterIndex]);
        return failed;
      })
      .forEach((param) => {
        const { decoratorName, parameterIndex } = param;
        console.error(
          `${decoratorName} detected failed parameter at index: ${parameterIndex}`
        );
      });

    // This is why we have the method variable reference
    // So that we can bind this to the descriptor
    return method?.apply(this, targetParams);
  };
}
