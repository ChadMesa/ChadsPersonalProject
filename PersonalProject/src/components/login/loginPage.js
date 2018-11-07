import * as React from "react";
import { LoginForm } from "./loginForm";
export const LoginPage = (props) => {
    return (React.createElement(LoginForm, { onChange: props.onChange, onSave: props.onSave, loginEntity: props.loginEntity, buttonDisabled: props.buttonDisabled, emailErrorMessage: props.emailErrorMessage, passwordErrorMessage: props.passwordErrorMessage }));
};
//# sourceMappingURL=loginPage.js.map