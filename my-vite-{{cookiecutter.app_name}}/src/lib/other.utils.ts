// #endregion --------------------------------------------------------------------------------------
// #region OTHER UTILITIES
// -----------------------------------------------------------------------------------------------*/
export const sleep = async (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const randomSleep = async () => sleep(Math.round(Math.random() * 100 + 2900));

// #endregion --------------------------------------------------------------------------------------
