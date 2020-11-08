import { isDefinedValidator } from "../core/paramValidators";
import { paramValidateBuilder } from "../core/paramValidateBuilder";

/**
 * Parameter decorator that gives error
 * message if parameter were undefined
 * 
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
export function isDefined(
  target: Object,
  propertyKey: string | symbol,
  parameterIndex: number
) {
  paramValidateBuilder(
    "isDefined",
    isDefinedValidator,
    target,
    propertyKey,
    parameterIndex,
  );
}