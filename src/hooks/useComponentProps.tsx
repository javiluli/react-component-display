import { useCallback, useMemo, useRef, useState } from "react";

export function useComponentProps<T extends object>(defaultProps: T) {
  const defaultPropsRef = useRef<T>(defaultProps);

  // Estado interno: solo guarda diferencias respecto al default
  const [state, setState] = useState<Partial<T>>({});

  const props = useMemo(() => {
    return {
      ...defaultPropsRef.current,
      ...state,
    };
  }, [state]);

  const hasChanges = useMemo(() => {
    return Object.keys(state).length > 0;
  }, [state]);

  const updateProp = useCallback(<K extends keyof T>(name: K, value: T[K]) => {
    setState((prev) => {
      // Si vuelve al valor por defecto, se elimina del estado
      if (value === defaultPropsRef.current[name]) {
        const { [name]: _, ...rest } = prev;
        return rest as Partial<T>;
      }

      return {
        ...prev,
        [name]: value,
      };
    });
  }, []);

  const updateProps = useCallback((updates: Partial<T>) => {
    setState((prev) => {
      const next = { ...prev };

      for (const key in updates) {
        const value = updates[key];

        if (value === undefined) continue;

        if (value === defaultPropsRef.current[key]) {
          delete next[key];
        } else {
          next[key] = value;
        }
      }

      return next;
    });
  }, []);

  const resetProps = useCallback(() => {
    setState({});
  }, []);

  return {
    props,
    defaultProps: defaultPropsRef.current,
    updateProp,
    updateProps,
    resetProps,
    hasChanges,
  };
}
