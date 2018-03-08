import * as React from "react";
import { RegisterForm } from "./registerForm";
export const RegisterPage = (props) => {
    return (React.createElement(RegisterForm, { onChange: props.onChange, onSave: props.onSave, registerEntity: props.registerEntity, buttonDisabled: props.buttonDisabled, emailErrorMessage: props.emailErrorMessage, passwordErrorMessage: props.passwordErrorMessage, firstNameErrorMessage: props.firstNameErrorMessage, lastNameErrorMessage: props.lastNameErrorMessage }));
};
//# sourceMappingURL=registerPage.js.map