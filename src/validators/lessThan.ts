import { paramValidateBuilder } from "../core/paramValidateBuilder";
import { lessThanValidator } from "../core/paramValidators";
import { DecoratorMetadata } from "../types/DecoratorMetadata";

/** * 
 * NOTE: return value of the decorator function 
 * is ignored. With this in mind, how in the world can
 * we create parameter decorator factories?
 * 
 * Decorator arguments:
 * target: Either the constructor function of the class 
 * for a static member, or the prototype of the class 
 * for an instance member.
 * 
 * propertyKey: The name of the member.
 * 
 * parameterIndex: The ordinal index of the parameter 
 * in the function’s parameter list.
 */
export function lessThan(threshold: number) {
  return function (...config: DecoratorMetadata) {
    paramValidateBuilder(
      "lessThan",
      lessThanValidator(threshold),
      config,
    );
  }
}
