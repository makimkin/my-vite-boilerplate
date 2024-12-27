import { useDispatch } from "react-redux";
import { useState } from "react";

import { authSignIn } from "📦/auth";

import { Button } from "🍄/button";
import { Form } from "🍄/form";
import { Icon } from "🍄/icon";

import { InputEmail, InputPassword } from "🔥/input";

import { cn } from "📖/tailwind.utils";

import { type TAuthSignInRequest } from "🔩/auth.types";
// #endregion --------------------------------------------------------------------------------------
// #region LOGIN FORM COMPONENT
// -----------------------------------------------------------------------------------------------*/
type TLoginFormProps = {};

const LoginForm: React.FC<TLoginFormProps> = () => {
  // #endregion ------------------------------------------------------------------------------------
  // #region STATES
  // ---------------------------------------------------------------------------------------------*/
  const [request, setRequest] = useState<TAuthSignInRequest>({ email: "", password: "" });

  // #endregion ------------------------------------------------------------------------------------
  // #region REDUX
  // ---------------------------------------------------------------------------------------------*/
  const dispatch = useDispatch();

  const signIn = (email: string, password: string) => dispatch(authSignIn({ email, password }));

  // #endregion ------------------------------------------------------------------------------------
  // #region HANDLERS
  // ---------------------------------------------------------------------------------------------*/
  const handleSubmit = () => signIn(request.email, request.password);

  const handleEmailChange = (email: string) => setRequest((prev) => ({ ...prev, email }));

  const handlePasswordChange = (password: string) => setRequest((prev) => ({ ...prev, password }));

  // #endregion ------------------------------------------------------------------------------------
  // #region RENDER
  // ---------------------------------------------------------------------------------------------*/
  return (
    <Form
      onSubmit={handleSubmit}
      className={cn("flex flex-col items-center gap-sm rounded-lg border bg-background-200 p-xs")}
    >
      <div className={cn("flex flex-col gap-xs")}>
        <InputEmail.Container
          onChange={handleEmailChange}
          value={request.email}
        />
        <InputPassword.Container
          onChange={handlePasswordChange}
          value={request.password}
        />
      </div>
      <Button
        className={cn("ml-auto aspect-square justify-center")}
        type={"submit"}
        label={"submit-sign-in-button"}
      >
        <Icon
          className={cn("size-md")}
          icon={"check"}
        />
      </Button>
    </Form>
  );
};
LoginForm.displayName = "LoginFormComponent";
// #endregion --------------------------------------------------------------------------------------
export { LoginForm };
