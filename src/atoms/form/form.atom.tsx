import { cn } from "📖/tailwind.utils";
// #endregion --------------------------------------------------------------------------------------
// #region FORM ATOM
// -----------------------------------------------------------------------------------------------*/
type TFormProps = {
  onSubmit: () => void;
  className?: string;
  children: React.ReactNode;
};

const Form: React.FC<TFormProps> = ({ onSubmit, className, ...otherProps }) => {
  // #endregion ------------------------------------------------------------------------------------
  // #region HANDLERS
  // ---------------------------------------------------------------------------------------------*/
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit();
  };

  // #endregion ------------------------------------------------------------------------------------
  // #region RENDER
  // ---------------------------------------------------------------------------------------------*/
  return (
    <form
      className={cn(className)}
      onSubmit={handleSubmit}
      {...otherProps}
    />
  );
};
Form.displayName = "FormAtom";
// #endregion --------------------------------------------------------------------------------------
export { Form };
