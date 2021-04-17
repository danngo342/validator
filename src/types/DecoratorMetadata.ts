type Target = Record<string, unknown>;
type PropertyKey = string | symbol;
type ParameterIndex = number;

export type DecoratorMetadata = [Target, PropertyKey, ParameterIndex];
