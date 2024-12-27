import { Link } from "🍄/link";

import { useLocationIsCurrent } from "🪝/use-location-is-current.hook";

import { cn } from "📖/tailwind.utils";
// #endregion --------------------------------------------------------------------------------------
// #region LINK NAV COMPONENT
// -----------------------------------------------------------------------------------------------*/
type TLinkNavProps = React.ComponentProps<typeof Link>;

const LinkNav: React.FC<TLinkNavProps> = ({ to, className, ...otherProps }) => {
  // #endregion ------------------------------------------------------------------------------------
  // #region ROUTER
  // ---------------------------------------------------------------------------------------------*/
  const locationIsCurrent = useLocationIsCurrent(to);

  // #endregion ------------------------------------------------------------------------------------
  // #region RENDER
  // ---------------------------------------------------------------------------------------------*/
  return (
    <Link
      to={to}
      data-is-current={locationIsCurrent}
      className={cn("data-current:bg-background-300 data-current:font-medium", className)}
      {...otherProps}
    />
  );
};
LinkNav.displayName = "LinkNavComponent";
// #endregion --------------------------------------------------------------------------------------
export { LinkNav };
