import * as React from "react";
import { Button, Input } from "../../common/components/form";
export const FaqCreateForm = (props) => {
    return (React.createElement("form", null,
        React.createElement("div", { className: "panel panel-default" },
            React.createElement("div", { className: "panel-header" }, "Login"),
            React.createElement("div", { className: "panel-body" },
                React.createElement(Input, { label: "Questions", name: "questions", value: props.faqCreateEntity.Question, onChange: props.onChange, placeholder: "Question" }),
                React.createElement(Button, { className: "btn btn-default", onClick: props.onSave, label: "Login", disabled: false })))));
};
//# sourceMappingURL=faqCreateForm.js.map