// #endregion --------------------------------------------------------------------------------------
// #region TAILWIND UTILITY
// -----------------------------------------------------------------------------------------------*/
import { type ClassValue, clsx } from "clsx";

import { twMerge } from "tailwind-merge";

/**
 * Tailwind CSS utility function.
 * @param inputs - The class names to merge.
 * @returns The merged class names.
 */
const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
// #endregion --------------------------------------------------------------------------------------

export { cn };
