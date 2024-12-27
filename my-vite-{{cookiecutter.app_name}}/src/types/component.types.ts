// #endregion --------------------------------------------------------------------------------------
// #region COMPONENT TYPES
// -----------------------------------------------------------------------------------------------*/
type TIcon = "book";

type TSize = "small" | "medium" | "large";

type TBreadcrumbItem = {
  id: number | string;
  label: string;
  to?: string;
};

// #endregion --------------------------------------------------------------------------------------
export type { TSize, TIcon, TBreadcrumbItem };
