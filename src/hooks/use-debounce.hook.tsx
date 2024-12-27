import { useEffect, useMemo, useRef } from "react";

import { debounce, DebouncedFunc } from "lodash";
// #endregion --------------------------------------------------------------------------------------
// #region DEBOUNCE HOOK
// -----------------------------------------------------------------------------------------------*/
const useDebounce = <T, K>(
  callback: (props: T) => K,
  wait: number
): DebouncedFunc<(props: T) => K | undefined> => {
  const callbackRef = useRef<(props: T) => K>(undefined);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo(() => {
    const f = (props: T) => callbackRef.current?.(props);

    return debounce(f, wait);
  }, [wait]);

  return debouncedCallback;
};

// #endregion --------------------------------------------------------------------------------------
export { useDebounce };
