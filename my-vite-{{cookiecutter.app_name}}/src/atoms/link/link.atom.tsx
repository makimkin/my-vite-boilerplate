import { Link as RouterLink } from "react-router-dom";

import { cn } from "📖/tailwind.utils";
// #endregion --------------------------------------------------------------------------------------
// #region LINK ATOM
// -----------------------------------------------------------------------------------------------*/
type TLinkAtomProps = {
  to: string;
  className?: string;
  children: React.ReactNode;
};

const LinkAtom: React.FC<TLinkAtomProps> = ({ to, className, ...otherProps }) => (
  <RouterLink
    draggable={false}
    className={cn(
      "flex select-none items-center justify-start gap-xs rounded-sm px-sm text-sm font-light hover:bg-background-300",
      className
    )}
    to={to}
    {...otherProps}
  />
);
LinkAtom.displayName = "LinkAtom";
// #endregion --------------------------------------------------------------------------------------
export { LinkAtom };
