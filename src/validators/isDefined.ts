import { isDefinedValidator } from "../core/paramValidators";
import { paramValidateBuilder } from "../core/paramValidateBuilder";
import { DecoratorMetadata } from "../types/DecoratorMetadata";

/**
 * Parameter decorator that gives error
 * message if parameter were undefined
 * 
 * NOTE: return value of the decorator function 
 * is ignored. With this in mind, how in the world can
 * we create parameter decorator factories?
 */
export function isDefined(...config: DecoratorMetadata) {
  paramValidateBuilder(
    "isDefined",
    isDefinedValidator,
    config,
  );
}
