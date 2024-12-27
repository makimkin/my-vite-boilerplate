// #endregion --------------------------------------------------------------------------------------
// #region NUMBER UTILS
// -----------------------------------------------------------------------------------------------*/

/**
 * Check if a value is a number
 * @param value - The value to check
 * @returns - True if the value is a number
 */
export const isNumber = (value: unknown): value is number => {
  if (typeof value === "number") {
    return value - value === 0;
  }

  if (typeof value === "string" && value.trim() !== "") {
    return Number.isFinite ? Number.isFinite(+value) : isFinite(+value);
  }

  return false;
};

// #endregion --------------------------------------------------------------------------------------
