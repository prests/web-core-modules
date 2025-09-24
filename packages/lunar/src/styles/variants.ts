const parseVariant = <T>(variant: T | undefined) => {
  return variant ?? ({} as T);
};

export { parseVariant };
