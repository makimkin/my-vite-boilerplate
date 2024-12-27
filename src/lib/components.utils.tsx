import { Suspense, lazy } from "react";

import { SpinnerDefault } from "🔥/spinner";
// #endregion --------------------------------------------------------------------------------------
// #region DYNAMIC LOAD
// -----------------------------------------------------------------------------------------------*/
const dynamic = <T extends object>(
  importFunc: () => Promise<{ default: React.ComponentType<T> }>
) => {
  const LazyComponent = lazy(importFunc);

  return (props: T) => (
    <Suspense fallback={<SpinnerDefault />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// #endregion --------------------------------------------------------------------------------------
export { dynamic };
