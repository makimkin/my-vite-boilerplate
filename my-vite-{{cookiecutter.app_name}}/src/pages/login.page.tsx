import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectAuth } from "📦/auth";

import { LoginLayout } from "@/layouts/login.layout";

import { ROUTES } from "@/routes";
// #endregion --------------------------------------------------------------------------------------
// #region LOGIN PAGE
// -----------------------------------------------------------------------------------------------*/
const LoginPage: React.FC = () => {
  // #endregion ------------------------------------------------------------------------------------
  // #region REDUX
  // ---------------------------------------------------------------------------------------------*/
  const auth = useSelector(selectAuth);

  // #endregion ------------------------------------------------------------------------------------
  // #region RENDER
  // ---------------------------------------------------------------------------------------------*/
  if (auth) return <Navigate to={ROUTES.QUOTES} />;

  return <LoginLayout />;
};
LoginPage.displayName = "LoginPage";
// #endregion --------------------------------------------------------------------------------------
export default LoginPage;
