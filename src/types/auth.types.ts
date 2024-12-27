import { type TAPIAccessToken } from "./api.types";
// #endregion --------------------------------------------------------------------------------------
// #region AUTH TYPES
// -----------------------------------------------------------------------------------------------*/
type TAuthId = number;

type TAuth = TAPIAccessToken & {
  id: TAuthId;
};

// #endregion --------------------------------------------------------------------------------------
// #region SIGN IN
// -----------------------------------------------------------------------------------------------*/
type TAuthSignInRequest = {
  email: string;
  password: string;
};

type TAuthSignInResponse = TAuth;

// #endregion --------------------------------------------------------------------------------------
export {
  type TAuth,
  //
  type TAuthSignInRequest,
  type TAuthSignInResponse,
};
