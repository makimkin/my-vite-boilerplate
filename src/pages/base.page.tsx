import { BaseLayout } from "@/layouts/base.layout";

import { withProtection } from "💊/protected.hoc";
// #endregion --------------------------------------------------------------------------------------
// #region BASE PAGE
// -----------------------------------------------------------------------------------------------*/
const BasePage: React.FC = withProtection(() => <BaseLayout />);
BasePage.displayName = "BasePage";

// #endregion --------------------------------------------------------------------------------------
export default BasePage;
