import { useLocation } from "react-router-dom";

import { useMemo } from "react";

// #endregion --------------------------------------------------------------------------------------
// #region LOCATION IS CURRENT HOOK
// -----------------------------------------------------------------------------------------------*/
const useLocationIsCurrent = (path: string) => {
  const location = useLocation();

  return useMemo(() => {
    const regex = new RegExp(`^${path}`);

    return !!location.pathname.match(regex);
  }, [location.pathname, path]);
};

// #endregion --------------------------------------------------------------------------------------
export { useLocationIsCurrent };
