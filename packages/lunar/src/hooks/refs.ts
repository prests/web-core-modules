import { useCallback, type RefCallback, type RefObject } from 'react';

/**
 * Merges an internal ref with a forwarded ref, handling both callback and object refs.
 * This is useful for components that need their own internal ref while also allowing
 * consumers to pass their own ref.
 *
 * @param internalRef - The component's internal ref object
 * @param forwardedRef - The ref passed by the consumer (can be callback or object ref)
 * @returns A callback ref that updates both internal and forwarded refs
 */
const useMergedRef = <T>(
  internalRef: RefObject<T | null>,
  forwardedRef?: RefCallback<T | null> | RefObject<T | null> | null
): RefCallback<T | null> => {
  return useCallback(
    (node: T | null) => {
      internalRef.current = node;

      if (forwardedRef) {
        if (typeof forwardedRef === 'function') {
          // Handle callback ref
          forwardedRef(node);
        } else {
          // Handle ref object
          forwardedRef.current = node;
        }
      }
    },
    [internalRef, forwardedRef]
  );
};

export { useMergedRef };
