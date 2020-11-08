NOTE: This is just a hobby project of mine. If you want to use a library for validators, whether for classes or functions, then you should prob look elsewhere, bc there are prob a billion other similar libraries for js and/or ts.

Plans
- feature: Dynamically generate validator functions
- feature: implement validators for functional programming paradigm (would also have to learn Haskell to be more familiar with this coding style)
- feature: use invariant.js (however, this does not necessarily need to be used in every validator. Honestly, this may just be more perfectly suited to be user-specific, by having client developers pass in the logging mechanism, such as invariant.js instead)
- refactor: if i'm feeling really crazy, then perhaps i can dynamically generate functions via the Function (captial 'F') constructor with interpolated template strings 

A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter. Decorators use the form @expression, where expression must evaluate to a function that will be called at runtime with information about the decorated declaration.

method signatures of varius types of decorators
class decorators:
  ```typescript
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
  ```

method decorators:
