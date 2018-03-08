import * as React from "react";
import { Button, Input, Password } from "../../common/components/form";
export const RegisterForm = (props) => {
    return (React.createElement("form", null,
        React.createElement("div", { className: "panel panel-default" },
            React.createElement("div", { className: "panel-header" }, "Register"),
            React.createElement("div", { className: "panel-body" },
                React.createElement(Input, { label: "First Name", name: "firstName", value: props.registerEntity.firstName, onChange: props.onChange, error: props.firstNameErrorMessage, placeholder: "First Name" }),
                React.createElement(Input, { label: "Last Name", name: "lastName", value: props.registerEntity.lastName, onChange: props.onChange, error: props.lastNameErrorMessage, placeholder: "Last Name" }),
                React.createElement(Input, { label: "Email", name: "email", value: props.registerEntity.email, onChange: props.onChange, error: props.emailErrorMessage, placeholder: "Email" }),
                React.createElement(Password, { label: "Password", name: "password", value: props.registerEntity.password, onChange: props.onChange, error: props.passwordErrorMessage, placeholder: "Password" }),
                React.createElement(Button, { className: "btn btn-default", onClick: props.onSave, label: "Register", disabled: false })))));
};
//# sourceMappingURL=registerForm.js.map