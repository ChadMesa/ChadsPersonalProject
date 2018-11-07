import * as React from "react";
import { ILoginEntity, ILoginForm } from "../../interfaces";
import { Button, Input, Password } from "../../common/components/form";

export const LoginForm: React.StatelessComponent<ILoginForm> = (props: ILoginForm) => {
    return (
        <form>
            <div className="panel panel-default">
                <div className="panel-header">Login</div>
                <div className="panel-body">
                    <Input
                        label="Email"
                        name="email"
                        value={props.loginEntity.email}
                        onChange={props.onChange}
                        placeholder="Email"
                        error={props.emailErrorMessage} />
                    <Password
                        label="Password"
                        name="password"
                        value={props.loginEntity.password}
                        onChange={props.onChange}
                        placeholder="Password"
                        error={props.passwordErrorMessage}/>
                    <Button
                        className="btn btn-default"
                        onClick={props.onSave}
                        label="Login"
                        disabled={false} />
                </div>
            </div>
        </form>
    );
}
