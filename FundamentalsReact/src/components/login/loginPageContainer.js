import * as React from "react";
import { LoginPage } from "./";
import * as toastr from "toastr";
import { UserApi } from "../../api/users";
import { browserHistory } from "react-router";
const FormErrors = (props) => {
    return (React.createElement("div", { className: "formErrors" }, Object.keys(props).map((fieldName, i) => {
        if (props[fieldName].length > 0)
            return React.createElement("p", { key: i },
                fieldName,
                " ",
                props[fieldName],
                " ");
    })));
};
export class LoginPageContainer extends React.Component {
    //constructor is the starting point of your class
    //"extends" adds functionality to your class 
    constructor(props) {
        super(props);
        this.state = {
            loginEntity: {
                email: "",
                password: ""
            },
            isEmailValid: false,
            isFormValid: false,
            isPasswordValid: false,
            formErrors: { email: "", password: "" }
        };
        this.onFieldChange = this.onFieldChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }
    onFieldChange(fieldName, fieldValue) {
        const nextState = Object.assign({}, this.state, { loginEntity: Object.assign({}, this.state.loginEntity, { [fieldName]: fieldValue }) });
        this.setState(nextState, () => { this.validateField(fieldName, fieldValue); });
    }
    validateField(fieldName, fieldValue) {
        let errorMessages = this.state.formErrors;
        let isEmailValid = this.state.isEmailValid;
        let isPasswordValid = this.state.isPasswordValid;
        switch (fieldName) {
            case "email":
                console.log(isEmailValid);
                isEmailValid = fieldValue.length > 6;
                errorMessages.email = isEmailValid ? "" : "Email is too short";
                break;
            case "password":
                isPasswordValid = fieldValue.length > 6;
                errorMessages.password = isPasswordValid ? "" : "Password is too short";
                break;
            default:
                break;
        }
        this.setState({ formErrors: errorMessages, isPasswordValid: isPasswordValid, isEmailValid: isEmailValid }, this.validateForm);
    }
    validateForm() {
        this.setState({ isFormValid: this.state.isEmailValid && this.state.isPasswordValid });
    }
    onSave() {
        UserApi.loginUser(this.state.loginEntity)
            .then((response) => {
            toastr.success("Login Success");
            browserHistory.push("/memberHome");
        }, (err) => {
            toastr.error("Login Failed");
        })
            .catch((err) => {
            toastr.error("Login Failed");
        });
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(LoginPage, { onChange: this.onFieldChange, onSave: this.onSave, buttonDisabled: !this.state.isFormValid, loginEntity: this.state.loginEntity, emailErrorMessage: this.state.formErrors.email, passwordErrorMessage: this.state.formErrors.password }),
            React.createElement("p", null,
                " Not a member, ",
                React.createElement("a", { href: "#", onClick: () => { browserHistory.push("/register"); } }, "Register Here"))));
    }
}
//# sourceMappingURL=loginPageContainer.js.map