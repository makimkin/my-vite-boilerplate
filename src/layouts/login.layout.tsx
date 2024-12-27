import { cn } from "📖/tailwind.utils";

import { LoginForm } from "🚀/login-form";
// #endregion --------------------------------------------------------------------------------------
// #region LOGIN LAYOUT
// -----------------------------------------------------------------------------------------------*/
const LoginLayout: React.FC = () => (
  <div className={cn("h-svh flex w-svw items-center justify-center")}>
    <LoginForm />
  </div>
);
LoginLayout.displayName = "LoginLayout";
// #endregion --------------------------------------------------------------------------------------
export { LoginLayout };
