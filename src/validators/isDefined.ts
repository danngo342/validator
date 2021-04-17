import { isDefinedValidator } from "../core/paramValidators";
import { paramDecoratorFactory } from "../core/paramDecoratorFactory";
import { ParamDecorator } from "../types/ParamDecorator";

/**
 * Parameter decorator that gives error
 * message if parameter were undefined
 *
 * NOTE: return value of the decorator function
 * is ignored. With this in mind, how in the world can
 * we create parameter decorator factories?
 */
export const isDefined: ParamDecorator = paramDecoratorFactory(
  isDefinedValidator
);
