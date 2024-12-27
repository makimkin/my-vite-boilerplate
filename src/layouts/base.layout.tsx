import { Outlet } from "react-router-dom";

import { cn } from "📖/tailwind.utils";

// #endregion --------------------------------------------------------------------------------------
// #region BASE LAYOUT
// -----------------------------------------------------------------------------------------------*/
const BaseLayout: React.FC = () => (
  <>
    <header></header>
    <main
      className={cn(
        "mt-sm grid grid-cols-[minmax(0,1fr),minmax(80svw,50rem),minmax(0,1fr)] *:col-start-2 *:col-end-3"
      )}
    >
      <Outlet />
    </main>
  </>
);
BaseLayout.displayName = "BaseLayout";

// #endregion --------------------------------------------------------------------------------------
export { BaseLayout };
