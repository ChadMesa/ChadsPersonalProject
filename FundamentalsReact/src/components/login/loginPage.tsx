import * as React from "react";
import { ILoginForm } from "../../interfaces";
import { LoginForm } from "./loginForm";

export const LoginPage: React.StatelessComponent<ILoginForm> = (props: ILoginForm) => {
    return (
        <LoginForm
            onChange={props.onChange}
            onSave={props.onSave}
            loginEntity={props.loginEntity}
            buttonDisabled={props.buttonDisabled}
            emailErrorMessage={props.emailErrorMessage}
            passwordErrorMessage={props.passwordErrorMessage}
        />
    );
}

