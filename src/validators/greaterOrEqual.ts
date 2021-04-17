import { ParamDecorator } from "../types/ParamDecorator";
import { paramDecoratorFactory } from "../core/paramDecoratorFactory";
import { greaterOrEqualFactory } from "../core/paramValidators";

/**
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
export const greaterOrEqual = (threshold: number): ParamDecorator => {
  const greaterOrEqualValidator = greaterOrEqualFactory(threshold);
  return paramDecoratorFactory<number>(greaterOrEqualValidator);
};
