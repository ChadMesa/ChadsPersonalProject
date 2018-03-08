import * as React from "react";
import { RegisterPage } from "./";
import * as toastr from "toastr";
import { NewUserApi } from "../../api/users";
import { Validator } from "../../common/validation";
const FormErrors = (props) => {
    return (React.createElement("div", { className: "formErrors" }, Object.keys(props).map((fieldName, i) => {
        if (props[fieldName].length > 0)
            return React.createElement("p", { key: i },
                " ",
                props[fieldName],
                " ");
    })));
};
export class RegisterPageContainer extends React.Component {
    //constructor is the starting point of your class
    //"extends" adds functionality to your class 
    constructor(props) {
        super(props);
        this.state = {
            registerEntity: {
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            },
            isFirstNameValid: false,
            isLastNameValid: false,
            isEmailValid: false,
            isPasswordValid: false,
            isFormValid: false,
            formErrors: { firstName: "", lastName: "", email: "", password: "" }
        };
        this.onFieldChange = this.onFieldChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }
    onFieldChange(fieldName, fieldValue) {
        const nextState = Object.assign({}, this.state, { registerEntity: Object.assign({}, this.state.registerEntity, { [fieldName]: fieldValue }) });
        this.setState(nextState, () => { this.validateField(fieldName, fieldValue); });
    }
    validateField(fieldName, fieldValue) {
        let errorMessages = this.state.formErrors;
        let isFirstNameValid = this.state.isFirstNameValid;
        let isLastNameValid = this.state.isLastNameValid;
        let isEmailValid = this.state.isEmailValid;
        let isPasswordValid = this.state.isPasswordValid;
        switch (fieldName) {
            case "firstName":
                console.log("isfirstname", isFirstNameValid);
                isFirstNameValid = Validator.MinLength(fieldValue, 2);
                errorMessages.firstName = isFirstNameValid ? "First Name is too short" : "";
                break;
            case "lastName":
                isLastNameValid = Validator.MinLength(fieldValue, 2);
                errorMessages.lastName = isLastNameValid ? "Last Name is too short" : "";
                break;
            case "email":
                let emailErrorMessage = Validator.emailValid(fieldValue, 6);
                isEmailValid = Validator.MinLength(fieldValue, 2);
                errorMessages.email = emailErrorMessage.errorMsg;
                break;
            case "password":
                let passwordErrorMessage = Validator.passwordValid(fieldValue, 6);
                isPasswordValid = Validator.MinLength(fieldValue, 6);
                errorMessages.password = passwordErrorMessage.errorMsg;
                break;
            default:
                break;
        }
        this.setState({ formErrors: errorMessages, isFirstNameValid: isFirstNameValid, isLastNameValid: isLastNameValid, isEmailValid: isEmailValid, isPasswordValid: isPasswordValid });
    }
    validateForm() {
        this.setState({ isFormValid: this.state.isFirstNameValid && this.state.isLastNameValid && this.state.isEmailValid && this.state.isPasswordValid });
    }
    onSave() {
        NewUserApi.registerUser(this.state.registerEntity)
            .then((response) => {
            toastr.success("Register Success");
        }, (err) => {
            toastr.error("Register Failed");
        })
            .catch((err) => {
            toastr.error("Register Failed");
        });
    }
    // <FormErrors
    //firstName={this.state.formErrors.firstName}
    //lastName={this.state.formErrors.lastName}
    //email={this.state.formErrors.email}
    //password={this.state.formErrors.password} />
    render() {
        return (React.createElement("div", null,
            React.createElement(RegisterPage, { onChange: this.onFieldChange, onSave: this.onSave, buttonDisabled: !this.state.isFormValid, registerEntity: this.state.registerEntity, firstNameErrorMessage: this.state.formErrors.firstName, lastNameErrorMessage: this.state.formErrors.lastName, emailErrorMessage: this.state.formErrors.email, passwordErrorMessage: this.state.formErrors.password })));
    }
}
//# sourceMappingURL=registerPageContainer.js.map