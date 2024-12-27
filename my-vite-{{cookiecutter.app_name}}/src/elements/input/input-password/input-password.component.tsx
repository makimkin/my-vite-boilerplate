import { useState } from "react";

import { cn } from "📖/tailwind.utils";

import { Button } from "🍄/button";
import { Input } from "🍄/input";
import { Icon } from "🍄/icon";

import { type TIcon } from "🔩/component.types";
// #endregion --------------------------------------------------------------------------------------
// #region INPUT PASSWORD COMPONENT
// -----------------------------------------------------------------------------------------------*/
type TInputPasswordProps = {
  value: string;
  onChange: (value: string) => void;
};

const InputPassword: React.FC<TInputPasswordProps> = ({ value, onChange }) => {
  // #endregion ------------------------------------------------------------------------------------
  // #region STATE
  // ---------------------------------------------------------------------------------------------*/
  const [isShown, setIsShown] = useState(false);

  // #endregion ------------------------------------------------------------------------------------
  // #region HANDLERS
  // ---------------------------------------------------------------------------------------------*/
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value);

  const handleClick = () => setIsShown((prev) => !prev);

  // #endregion ------------------------------------------------------------------------------------
  // #region VARS
  // ---------------------------------------------------------------------------------------------*/
  const icon: TIcon = isShown ? "eye/" : "eye";

  const type = isShown ? "text" : "password";

  // #endregion ------------------------------------------------------------------------------------
  // #region RENDER
  // ---------------------------------------------------------------------------------------------*/
  return (
    <label className={cn("flex gap-xs")}>
      <Input
        onChange={handleChange}
        value={value}
        type={type}
      />
      <Button
        onClick={handleClick}
        className={cn("aspect-square justify-center")}
        label={"toggle-password-visibility-button"}
      >
        <Icon
          className={cn("size-md")}
          icon={icon}
        />
      </Button>
    </label>
  );
};
InputPassword.displayName = "InputPasswordComponent";
// #endregion --------------------------------------------------------------------------------------
export { InputPassword };
