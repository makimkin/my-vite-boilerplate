import { useMemo } from "react";

import { cn } from "📖/tailwind.utils";

import { type TSize } from "🔩/component.types";
// #endregion --------------------------------------------------------------------------------------
// #region HEADING COMPONENT
// -----------------------------------------------------------------------------------------------*/
type THeadingAtomComponentProps = React.HTMLAttributes<HTMLHeadingElement>;

type THeadingAtomProps = {
  size: TSize;
} & THeadingAtomComponentProps;

const HeadingAtom: React.FC<THeadingAtomProps> = ({ size, ...otherProps }) => {
  // #endregion ------------------------------------------------------------------------------------
  // #region MEMOS
  // ---------------------------------------------------------------------------------------------*/
  const Component = useMemo(() => {
    switch (size) {
      case "small":
        return ({ className, children, ...props }: THeadingAtomComponentProps) => (
          <h5
            className={cn("text-2xl", className)}
            {...props}
          >
            {children}
          </h5>
        );

      case "medium":
        return ({ className, children, ...props }: THeadingAtomComponentProps) => (
          <h3
            className={cn("text-4xl", className)}
            {...props}
          >
            {children}
          </h3>
        );

      case "large":
        return ({ className, children, ...props }: THeadingAtomComponentProps) => (
          <h1
            className={cn("text-6xl", className)}
            {...props}
          >
            {children}
          </h1>
        );
    }
  }, [size]);

  // #endregion ------------------------------------------------------------------------------------
  // #region RENDER
  // ---------------------------------------------------------------------------------------------*/
  return <Component {...otherProps} />;
};
HeadingAtom.displayName = "HeadingAtomComponent";
// #endregion --------------------------------------------------------------------------------------
export { HeadingAtom };
