import { Input } from "🍄/input";

import { cn } from "📖/tailwind.utils";
// #endregion --------------------------------------------------------------------------------------
// #region INPUT EMAIL COMPONENT
// -----------------------------------------------------------------------------------------------*/
type TInputEmailProps = {
  onChange: (value: string) => void;
  value: string;
};

const InputEmail: React.FC<TInputEmailProps> = ({ value, onChange }) => {
  // #endregion ------------------------------------------------------------------------------------
  // #region HANDLERS
  // ---------------------------------------------------------------------------------------------*/
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value);

  // #endregion ------------------------------------------------------------------------------------
  // #region RENDER
  // ---------------------------------------------------------------------------------------------*/
  return (
    <label>
      <Input
        value={value}
        onChange={handleChange}
        className={cn("")}
        type={"email"}
      />
    </label>
  );
};
InputEmail.displayName = "InputEmailComponent";
// #endregion --------------------------------------------------------------------------------------
export { InputEmail };
