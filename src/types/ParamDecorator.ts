import { DecoratorMetadata } from "../types/DecoratorMetadata";

export type ParamDecorator = (...config: DecoratorMetadata) => void;
