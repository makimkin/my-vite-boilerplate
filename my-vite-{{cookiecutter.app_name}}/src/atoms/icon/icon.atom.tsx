import { cn } from "📖/tailwind.utils";

import type { TIcon } from "🔩/component.types";
// #endregion --------------------------------------------------------------------------------------
// #region ICON ATOM
// -----------------------------------------------------------------------------------------------*/
type TIconProps = {
  icon: TIcon;
} & Omit<React.SVGAttributes<SVGSVGElement>, "children">;

const IconAtom: React.FC<TIconProps> = ({ icon, className, ...otherProps }) => (
  <svg
    className={cn("aspect-square size-icon stroke-[1.5]", className)}
    {...otherProps}
  >
    <use xlinkHref={`/src/assets/sprite.svg##${icon}`} />
  </svg>
);

IconAtom.displayName = "IconAtom";
// #endregion --------------------------------------------------------------------------------------
export { IconAtom };
