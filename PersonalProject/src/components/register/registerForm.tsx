import * as React from "react";
import { IRegisterEntity, IRegisterForm } from "../../interfaces";
import { Button, Input, Password } from "../../common/components/form";

export const RegisterForm: React.StatelessComponent<IRegisterForm> = (props: IRegisterForm) => {
    return (
        <form>
            <div className="panel panel-default">
                <div className="panel-header">Register</div>
                <div className="panel-body">
                    <Input
                        label="First Name"
                        name="firstName"
                        value={props.registerEntity.firstName}
                        onChange={props.onChange}
                        error={props.firstNameErrorMessage}
                        placeholder="First Name" />
                    <Input
                        label="Last Name"
                        name="lastName"
                        value={props.registerEntity.lastName}
                        onChange={props.onChange}
                        error={props.lastNameErrorMessage}
                        placeholder="Last Name" />
                    <Input
                        label="Email"
                        name="email"
                        value={props.registerEntity.email}
                        onChange={props.onChange}
                        error={props.emailErrorMessage}
                        placeholder="Email"/>
                    <Password label="Password"
                        name="password"
                        value={props.registerEntity.password}
                        onChange={props.onChange}
                        error={props.passwordErrorMessage}
                        placeholder="Password" />
                    <Button
                        className="btn btn-default"
                        onClick={props.onSave}
                        label="Register"
                        disabled={false} />
                </div>
            </div>
        </form>
    );
}