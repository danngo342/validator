A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter. Decorators use the form @expression, where expression must evaluate to a function that will be called at runtime with information about the decorated declaration.

method signatures of varius types of decorators
class decorators:
  function decorator(constructor: Function) {
    // do something with constructor
  }

  // overriding constructor
  function decorator<T extends { new (...args: any[]): {} >(
    constructor: T
  ) {
    return class extends constructor {
      newProperty = "new property";
      hello = "override";
    };
  }
  @classDecorator
  class Greeter {
    property = "property";
    hello: string;
    constructor(m: string) {
      this.hello = m;
    }
  }
  console.log(new Greeter("world"));

method decorators:
