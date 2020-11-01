import "reflect-metadata";

const validateMetadataKey = Symbol("custom:validate");

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
  const params: number[] = Reflect.getOwnMetadata(
    validateMetadataKey,
    target,
    propertyKey
  ) || [];

  params.push(parameterIndex)

  Reflect.defineMetadata(
    validateMetadataKey,
    params,
    target,
    propertyKey
  );

  console.log('params:', params);
}

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
  descriptor.value = function() {
    const paramsIndices: number[] = Reflect.getOwnMetadata(
      validateMetadataKey,
      target,
      propertyName
    ) || [];

    const undefinedParams = paramsIndices.filter(
      parameterIndex => !arguments[parameterIndex]
    );
    if (undefinedParams.length > 0) {
      throw new Error(`Argument undefined at indices: ${undefinedParams}`);
    }

    /*
    paramsIndices.forEach(parameterIndex => {
      const methodParam: any = arguments[parameterIndex];
      if (!methodParam) {
        throw new Error(`Argument undefined at index: ${parameterIndex}`);
      }
    });
    */

    // This is why we have the method variable reference
    // So that we can bind this to the descriptor
    return method?.apply(this, arguments);
  }
}

/**
 * Parameter decorator factory that invokes specified
 * function error handler if parameter were undefined
 */

// export function ifUndefined()