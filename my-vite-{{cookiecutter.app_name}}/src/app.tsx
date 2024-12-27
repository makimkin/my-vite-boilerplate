import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { ROUTES } from "./routes";

import { dynamic } from "📖/components.utils";

// #endregion --------------------------------------------------------------------------------------
// #region PAGES
// -----------------------------------------------------------------------------------------------*/
const BasePageLazy = dynamic(async () => import("./pages/base.page"));
const LoginPageLazy = dynamic(async () => import("./pages/login.page"));

const FourZeroFourPageLazy = dynamic(async () => import("./pages/404.page"));

// #endregion --------------------------------------------------------------------------------------
// #region APP
// -----------------------------------------------------------------------------------------------*/
const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: ROUTES._404,
      element: <FourZeroFourPageLazy />,
    },
    {
      path: ROUTES.LOGIN,
      element: <LoginPageLazy />,
    },
    {
      path: ROUTES.BASE,
      element: <BasePageLazy />,
      children: [],
    },
    {
      path: "*",
      element: <FourZeroFourPageLazy />,
    },
  ]);

  return <RouterProvider router={router} />;
};
// #endregion --------------------------------------------------------------------------------------

export default App;
