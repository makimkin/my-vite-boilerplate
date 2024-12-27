import { cn } from "📖/tailwind.utils";
// #endregion --------------------------------------------------------------------------------------
// #region INPUT ATOM
// -----------------------------------------------------------------------------------------------*/
type TInputAtomProps = React.InputHTMLAttributes<HTMLInputElement>;

const InputAtom: React.FC<TInputAtomProps> = ({ className, ...otherProps }) => (
  <input
    className={cn(
      "h-lg w-full rounded-sm border bg-background-200 p-xs text-sm font-light focus:bg-background-100 focus:outline-none",
      className
    )}
    {...otherProps}
  />
);
InputAtom.displayName = "InputAtom";
// #endregion --------------------------------------------------------------------------------------
export { InputAtom };
