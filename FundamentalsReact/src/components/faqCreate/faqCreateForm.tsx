import * as React from "react";
import { IFaqCreateEntity } from "../../interfaces";
import { IFaqCreateForm} from "../../interfaces";
import { Button, Input, DropDownList } from "../../common/components/form"

export const FaqCreateForm: React.StatelessComponent<IFaqCreateForm> = (props: IFaqCreateForm) => {
    return (
        <form>
            <div className="panel panel-default">
                <div className="panel-header">Login</div>
                <div className="panel-body">
                    <Input
                        label="Questions"
                        name="questions"
                        value={props.faqCreateEntity.Question}
                        onChange={props.onChange}
                        placeholder="Question" />
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
