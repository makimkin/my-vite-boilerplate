import {
  API_BASE_URL,
  //
  APIEndpoint,
  //
  handleResponse,
  post,
} from "📖/api.utils";

import {
  type TAuthSignInResponse,
  type TAuthSignInRequest,
  //
} from "🔩/auth.types";

import { REQUEST_CONTENT_TYPES } from "🔩/api.types";

// #endregion --------------------------------------------------------------------------------------
// #region AUTH API
// -----------------------------------------------------------------------------------------------*/
const URL_V1_AUTH = `${API_BASE_URL}/v1/auth`;

// #endregion --------------------------------------------------------------------------------------
// #region SIGN IN
// -----------------------------------------------------------------------------------------------*/
const AUTH_SIGN_IN_ENDPOINT = new APIEndpoint(URL_V1_AUTH, "/sign/in");

const authSignIn = async (request: TAuthSignInRequest): Promise<TAuthSignInResponse> => {
  const { ...body } = request;

  const url = AUTH_SIGN_IN_ENDPOINT.url();

  const response = await post({ url, body, contentType: REQUEST_CONTENT_TYPES.FORM });

  return handleResponse(response);
};

// #endregion --------------------------------------------------------------------------------------
export { authSignIn };
