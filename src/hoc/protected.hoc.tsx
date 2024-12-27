import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectAuth } from "📦/auth";

import { ROUTES } from "@/routes";
// #endregion --------------------------------------------------------------------------------------
// #region PROTECTED COMPONENT
// -----------------------------------------------------------------------------------------------*/
const withProtection =
  <T extends object>(WrappedComponent: React.FC<T>) =>
  (props: T) => {
    const auth = useSelector(selectAuth);

    if (!auth) {
      return (
        <Navigate
          to={ROUTES.LOGIN}
          replace={true}
        />
      );
    }

    return <WrappedComponent {...props} />;
  };

// #endregion --------------------------------------------------------------------------------------
export { withProtection };
