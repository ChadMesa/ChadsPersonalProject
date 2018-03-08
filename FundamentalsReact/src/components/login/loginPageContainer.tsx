import * as React from "react";
import { LoginPage } from "./";
import * as toastr from "toastr";
import { UserApi } from "../../api/users";
import { ILoginEntity } from "../../interfaces";
import { IRegisterEntity } from "../../interfaces";
import { browserHistory } from "react-router";

interface IFormErrors {
    password: string;
    email: string;
}

interface ILoginState {
    loginEntity: ILoginEntity;
    formErrors: IFormErrors;
    isEmailValid: boolean;
    isPasswordValid: boolean;
    isFormValid: boolean;
}

const FormErrors: React.StatelessComponent<IFormErrors> = (props) => {
    return (
        <div className="formErrors">
            {Object.keys(props).map((fieldName, i) => {
                if (props[fieldName].length > 0)
                    return <p key={i}>{fieldName} {props[fieldName]} </p>
            })}
        </div>
    );
}

export class LoginPageContainer extends React.Component<{}, ILoginState> {
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
    private onFieldChange(fieldName: string, fieldValue: string) {
        const nextState = {
            ...this.state,
            loginEntity: {
                ...this.state.loginEntity,
                [fieldName]: fieldValue
            }
        }
        this.setState(nextState, () => { this.validateField(fieldName, fieldValue) });
    }

    private validateField(fieldName: string, fieldValue: string) {
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
    private validateForm() {
        this.setState({ isFormValid: this.state.isEmailValid && this.state.isPasswordValid })
    }
    private onSave() {
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
    public render() {
        return (
            <div>
                <LoginPage onChange={this.onFieldChange}
                    onSave={this.onSave}
                    buttonDisabled={!this.state.isFormValid}
                    loginEntity={this.state.loginEntity}
                    emailErrorMessage={this.state.formErrors.email}
                    passwordErrorMessage={this.state.formErrors.password} />

                <p> Not a member, <a href="#" onClick={() => { browserHistory.push("/register") }}>Register Here</a></p>
            </div>
        )
    }
}
