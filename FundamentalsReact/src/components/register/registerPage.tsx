import * as React from "react";
import { IRegisterForm } from "../../interfaces";
import { RegisterForm } from "./registerForm";

export const RegisterPage: React.StatelessComponent<IRegisterForm> = (props: IRegisterForm) => {
    return (
        <RegisterForm
            onChange={props.onChange}
            onSave={props.onSave}
            registerEntity={props.registerEntity}
            buttonDisabled={props.buttonDisabled}
            emailErrorMessage={props.emailErrorMessage}
            passwordErrorMessage={props.passwordErrorMessage}
            firstNameErrorMessage={props.firstNameErrorMessage}
            lastNameErrorMessage={props.lastNameErrorMessage} />
    );
}
