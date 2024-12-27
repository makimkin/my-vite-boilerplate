// #endregion --------------------------------------------------------------------------------------
// #region API TYPES
// -----------------------------------------------------------------------------------------------*/
enum REQUEST_METHODS {
  DELETE = "DELETE",
  PATCH = "PATCH",
  POST = "POST",
  GET = "GET",
  PUT = "PUT",
}

enum REQUEST_CONTENT_TYPES {
  JSON = "application/json",
  FORM = "multipart/form-data",
}

// #endregion --------------------------------------------------------------------------------------
// #region ACCESS TOKEN
// -----------------------------------------------------------------------------------------------*/
type TAPIAccessToken = {
  accessToken: string;
};

type TAPIProtected<T> = T & TAPIAccessToken;

// #endregion --------------------------------------------------------------------------------------
// #region API PROPS
// -----------------------------------------------------------------------------------------------*/
type TAPIProps = Partial<TAPIAccessToken> & {
  url: string | URL;
};

// #endregion --------------------------------------------------------------------------------------
// #region ERROR
// -----------------------------------------------------------------------------------------------*/
type TAPIError = {
  detail: string;
  name: string;
};

// #endregion --------------------------------------------------------------------------------------
// #region POST
// -----------------------------------------------------------------------------------------------*/
type TAPIBody = Record<string, null | undefined | string | number | File | object>;

type TAPIPostProps<T extends TAPIBody> = TAPIProps & {
  body: T;
  contentType: REQUEST_CONTENT_TYPES;
};

// #endregion --------------------------------------------------------------------------------------
// #region GET
// -----------------------------------------------------------------------------------------------*/
type TAPIGetProps = TAPIProps;

// #endregion --------------------------------------------------------------------------------------
// #region PATCH
// -----------------------------------------------------------------------------------------------*/
type TAPIPatchProps<T extends TAPIBody> = TAPIProps & {
  body?: T;
  contentType: REQUEST_CONTENT_TYPES;
};

// #endregion --------------------------------------------------------------------------------------
// #region DELETE
// -----------------------------------------------------------------------------------------------*/
type TAPIDeleteProps = TAPIProps;

// #endregion --------------------------------------------------------------------------------------
export {
  REQUEST_CONTENT_TYPES,
  REQUEST_METHODS,
  //
  type TAPIAccessToken,
  type TAPIProtected,
  //
  type TAPIDeleteProps,
  type TAPIPatchProps,
  type TAPIGetProps,
  //
  type TAPIBody,
  type TAPIPostProps,
  //
  type TAPIError,
};
