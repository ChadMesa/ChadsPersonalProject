import * as React from "react";
import { Textarea, Button, Input } from "../../common/components/form";
export const CommentsForm = (props) => {
    return (React.createElement("div", { className: "well", style: { background: '#edebe8' } },
        React.createElement("h3", null, "Leave ideas for videos!"),
        React.createElement("form", null,
            React.createElement("fieldset", null,
                React.createElement("div", { className: "form-group" },
                    React.createElement(Input, { onChange: props.onChange, placeholder: "UserName", name: "Username", label: "", value: props.commentsEntity.Username })),
                React.createElement("div", { className: "form-group" },
                    React.createElement(Textarea, { label: "", name: "CommentText", value: props.commentsEntity.CommentText, onChange: props.onChange, onBlur: props.onChange, placeholder: "Add a comment", error: props.commentsErrorMessage })),
                React.createElement("div", { className: "form-group" },
                    React.createElement(Button, { className: "btn btn-primary", disabled: props.buttonDisabled, label: "Submit", onClick: props.onSave }))))));
};
//# sourceMappingURL=commentsForm.js.map