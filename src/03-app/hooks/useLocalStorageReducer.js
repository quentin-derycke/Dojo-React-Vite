import { useReducer, useEffect } from "react";

export function useLocalStorageReducer(key, reducer, initialState) {
    const [state, dispatch] = useReducer(reducer, initialState, () => {
      try {
        const stored = JSON.parse(localStorage.getItem(key));
        return stored && typeof stored === 'object'
          ? { ...initialState, ...stored }
          : initialState;
      } catch (e) {
        return initialState;
      }
    });
  
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);
  
    return [state, dispatch];
  }
  