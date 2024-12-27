import { cn } from "📖/tailwind.utils";
// #endregion --------------------------------------------------------------------------------------
// #region SPINNER COMPONENT
// -----------------------------------------------------------------------------------------------*/
type TSpinnerProps = { className?: string };

const Spinner: React.FC<TSpinnerProps> = ({ className }) => (
  <div
    className={cn(
      "mx-auto size-lg animate-spin rounded-full border-2 border-t-transparent",
      className
    )}
  />
);
Spinner.displayName = "SpinnerComponent";
// #endregion --------------------------------------------------------------------------------------
export { Spinner };
