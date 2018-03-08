import * as React from "react";
import { Button, Input, Password } from "../../common/components/form";
export const LoginForm = (props) => {
    return (React.createElement("form", null,
        React.createElement("div", { className: "panel panel-default" },
            React.createElement("div", { className: "panel-header" }, "Login"),
            React.createElement("div", { className: "panel-body" },
                React.createElement(Input, { label: "Email", name: "email", value: props.loginEntity.email, onChange: props.onChange, placeholder: "Email", error: props.emailErrorMessage }),
                React.createElement(Password, { label: "Password", name: "password", value: props.loginEntity.password, onChange: props.onChange, placeholder: "Password", error: props.passwordErrorMessage }),
                React.createElement(Button, { className: "btn btn-default", onClick: props.onSave, label: "Login", disabled: false })))));
};
//# sourceMappingURL=loginForm.js.map