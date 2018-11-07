import * as React from "react";
import { Textarea, Button, Input } from "../../common/components/form"

export interface ICommentsEntity {
    Id: number,
    CommentText: string,
    Username: string,
    CreatedDate: Date,
    ModifiedDate?: Date
}

export interface ICommentsForm {
    commentsEntity?: ICommentsEntity;
    onChange: (fieldName: string, value: string) => void;
    buttonDisabled: boolean;
    commentsErrorMessage?: string;
    onSave?: () => void;
}
export const CommentsForm: React.StatelessComponent<ICommentsForm> = (props: ICommentsForm) => {
    return (
        <div className="well" style={{ background: '#edebe8' }}>
            <h3>Leave ideas for videos!</h3>
            <form>
                <fieldset>
                    <div className="form-group">
                        <Input
                            onChange={props.onChange}
                            placeholder="UserName"
                            name="Username"
                            label=""
                            value={props.commentsEntity.Username}
                        />
                    </div>
                    <div className="form-group">
                        <Textarea
                            label=""
                            name="CommentText"
                            value={props.commentsEntity.CommentText}
                            onChange={props.onChange}
                            onBlur={props.onChange}
                            placeholder="Add a comment"
                            error={props.commentsErrorMessage} />
                    </div>
                    <div className="form-group">
                        <Button
                            className="btn btn-primary"
                            disabled={props.buttonDisabled}
                            label="Submit"
                            onClick={props.onSave} />
                    </div>
                </fieldset>
            </form>
        </div>
    )
}