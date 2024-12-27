import { cn } from "📖/tailwind.utils";
// #endregion --------------------------------------------------------------------------------------
// #region BUTTON ATOM
// -----------------------------------------------------------------------------------------------*/
type TButtonAtomProps = {
  label: string;
  className?: string;
  children: React.ReactNode;
} & Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "type">;

const ButtonAtom: React.FC<TButtonAtomProps> = ({ label, className, ...otherProps }) => (
  <button
    type={"button"}
    aria-label={label}
    className={cn(className)}
    {...otherProps}
  />
);
ButtonAtom.displayName = "ButtonAtom";
// #endregion --------------------------------------------------------------------------------------
export { ButtonAtom };
