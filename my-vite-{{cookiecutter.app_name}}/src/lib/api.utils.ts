import {
  type TAPIError,
  type TAPIGetProps,
  type TAPIPatchProps,
  type TAPIDeleteProps,
  //
  type TAPIBody,
  type TAPIPostProps,
  //
  REQUEST_METHODS,
  REQUEST_CONTENT_TYPES,
} from "🔩/api.types";
// #endregion --------------------------------------------------------------------------------------
// #region API UTILITY
// -----------------------------------------------------------------------------------------------*/
const API_BASE_URL = import.meta.env.VITE_APP_API_URL;

const API_LIMIT_READ_MANY = 10;
// #endregion --------------------------------------------------------------------------------------
// #region RESPONSE
// -----------------------------------------------------------------------------------------------*/
const handleResponse = async <T>(response: Response): Promise<T> => {
  const data: T = response.status !== 204 ? await response.json() : {};

  if (response.ok) return data;

  const error = data as TAPIError;

  throw new Error(error.detail);
};

const handleBlob = async (response: Response): Promise<Blob> => {
  const data = await response.blob();

  if (response.ok) return data;

  const error = (await response.json()) as TAPIError;

  throw new Error(error.detail);
};

// #endregion --------------------------------------------------------------------------------------
// #region POST
// -----------------------------------------------------------------------------------------------*/
const post = async <T extends TAPIBody>({
  url,
  body,
  accessToken,
  contentType,
}: TAPIPostProps<T>): Promise<Response> => {
  const options: RequestInit = {
    method: REQUEST_METHODS.POST,
  };

  const optionsBody: BodyInit = getBody(body, contentType);

  const optionsHeaders = getHeaders(contentType, accessToken);

  return await fetch(url, {
    ...options,
    body: optionsBody,
    headers: optionsHeaders,
  });
};

// #endregion --------------------------------------------------------------------------------------
// #region GET
// -----------------------------------------------------------------------------------------------*/
const get = async ({ url, accessToken }: TAPIGetProps) => {
  const options: RequestInit = {
    method: REQUEST_METHODS.GET,
  };

  const optionsHeaders = getHeaders(REQUEST_CONTENT_TYPES.JSON, accessToken);

  return await fetch(url, {
    ...options,
    headers: optionsHeaders,
  });
};

// #endregion --------------------------------------------------------------------------------------
// #region PATCH
// -----------------------------------------------------------------------------------------------*/
const patch = async <T extends TAPIBody>({
  url,
  body,
  accessToken,
  contentType = REQUEST_CONTENT_TYPES.JSON,
}: TAPIPatchProps<T>) => {
  const options: RequestInit = {
    method: REQUEST_METHODS.PATCH,
  };

  const optionsBody = body ? getBody(body, contentType) : undefined;

  const optionsHeaders = getHeaders(contentType, accessToken);

  return await fetch(url, {
    ...options,
    headers: optionsHeaders,
    body: optionsBody,
  });
};

// #endregion --------------------------------------------------------------------------------------
// #region DELETE
// -----------------------------------------------------------------------------------------------*/
const del = async ({ url, accessToken }: TAPIDeleteProps) => {
  const options: RequestInit = {
    method: REQUEST_METHODS.DELETE,
  };

  const optionsHeaders = getHeaders(REQUEST_CONTENT_TYPES.JSON, accessToken);

  return await fetch(url, { ...options, headers: optionsHeaders });
};

// #endregion --------------------------------------------------------------------------------------
// #region HEADERS
// -----------------------------------------------------------------------------------------------*/
const getHeaders = (contentType: REQUEST_CONTENT_TYPES, accessToken?: string): HeadersInit => ({
  ...(contentType === REQUEST_CONTENT_TYPES.FORM ? {} : { "Content-Type": contentType }),
  ...(accessToken === undefined ? {} : { Authorization: `Bearer ${accessToken}` }),
});

// #endregion --------------------------------------------------------------------------------------
// #region BODY
// -----------------------------------------------------------------------------------------------*/
const getBody = (body: TAPIBody, contentType: REQUEST_CONTENT_TYPES): BodyInit => {
  switch (contentType) {
    case REQUEST_CONTENT_TYPES.JSON:
      return getBodyJson(body);
    case REQUEST_CONTENT_TYPES.FORM:
      return getBodyFormData(body);
  }
};

const getBodyJson = (body: TAPIBody) => JSON.stringify(body);

const getBodyFormData = (body: TAPIBody) => {
  const formData = new FormData();

  Object.entries(body).forEach(([key, value]) => {
    if (value === undefined || value === null) return;

    if (value instanceof File) {
      formData.append(key, value, value.name);
      return;
    }

    if (typeof value === "object") {
      formData.append(key, JSON.stringify(value));
      return;
    }

    formData.append(key, value.toString());
  });

  return formData;
};

// #endregion --------------------------------------------------------------------------------------
// #region ENDPOINT
// -----------------------------------------------------------------------------------------------*/
type TAPIEndpointQueryItem = boolean | string | number | undefined | null | string[] | number[];

type TAPIEndpointQuery = Record<string, TAPIEndpointQueryItem>;

class APIEndpoint {
  path: string;
  route: string;

  constructor(route: string, path: string) {
    this.path = path;
    this.route = route;
  }

  url = (query: TAPIEndpointQuery = {}, ...params: (number | string)[]) => {
    return `${this.route}${this.getPath(...params)}${this.getQuery(query)}`;
  };

  getPath = (...params: (number | string)[]) => {
    let e = this.path;

    let [index, left, right, leftPart, rightPart] = [0, e.indexOf("["), e.indexOf("]"), "", ""];

    while (left > -1 && right > -1) {
      [leftPart, rightPart] = [e.substring(0, left), e.substring(right + 1)];

      e = `${leftPart}${params[index] ?? ""}${rightPart}`;

      [left, right] = [e.indexOf("["), e.indexOf("]")];
      index++;
    }

    return e;
  };

  getQuery = (query: TAPIEndpointQuery): string => {
    if (Object.keys(query).length === 0) return "";

    return Object.keys(query)
      .reduce((a, queryKey) => {
        const queryValue = query[queryKey];

        if (queryValue === undefined || queryValue === null) return a;

        if (Array.isArray(queryValue)) {
          return `${a}${queryValue.reduce((acc, v) => `${acc}${queryKey}=${v}&`, "")}`;
        }

        return `${a}${queryKey}=${queryValue}&`;
      }, "?")
      .slice(0, -1);
  };

  toString = () => this.url;
}

// #endregion --------------------------------------------------------------------------------------
// #region HELPERS
// -----------------------------------------------------------------------------------------------*/

// #endregion --------------------------------------------------------------------------------------

export {
  get,
  del,
  //
  post,
  //
  patch,
  handleBlob,
  handleResponse,
  //
  APIEndpoint,
  //
  API_BASE_URL,
  API_LIMIT_READ_MANY,
};
