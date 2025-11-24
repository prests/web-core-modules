const createUnitializedProviderError = (contextName: string): Error => new Error(`${contextName} is unitialized`);

export { createUnitializedProviderError };
