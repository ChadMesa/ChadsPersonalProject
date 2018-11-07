import * as React from "react";
import { Button, Input, DropDownList } from "../../common/components/form";
export const fakeCategories = [
    {
        key: 1,
        value: "General"
    },
    {
        key: 2,
        value: "Guard"
    },
    {
        key: 3,
        value: "VIP"
    }
];
export const FaqCreateForm = (props) => {
    return (React.createElement("form", null,
        React.createElement("div", { className: "panel panel-default" },
            React.createElement("div", { className: "panel-header" }, "FAQ Create"),
            React.createElement("div", { className: "panel-body" },
                React.createElement(DropDownList, { label: "Category", name: "category", selectedValue: props.faqEntity.category, options: props.dropDownOptions, onChange: props.onChange, error: props.categoryErrorMessage }),
                React.createElement(Input, { label: "Question", name: "question", value: props.faqEntity.question, onChange: props.onChange, error: props.questionErrorMessage, placeholder: "Question" }),
                React.createElement(Input, { label: "Answer", name: "answer", value: props.faqEntity.answer, onChange: props.onChange, error: props.answerErrorMessage, placeholder: "Answer" }),
                React.createElement(Input, { label: "Display Order", name: "displayOrder", value: props.faqEntity.question, onChange: props.onChange, error: props.displayOrderErrorMessage, placeholder: "Display Order" }),
                React.createElement(Button, { className: "btn btn-default", onClick: props.onSave, label: "Create", disabled: false })))));
};
//# sourceMappingURL=faqCreateForm.js.map