import * as React from "react";
import { FaqCreateForm } from "./faqCreateForm";
export const FaqCreatePage = (props) => {
    return (React.createElement(FaqCreateForm, { onChange: props.onChange, onSave: props.onSave, buttonDisabled: props.buttonDisabled, categoryErrorMessage: props.categoryErrorMessage, questionErrorMessage: props.questionErrorMessage, dropDownOptions: props.dropDownOptions, faqEntity: props.faqEntity, answerErrorMessage: props.answerErrorMessage, displayOrderErrorMessage: props.displayOrderErrorMessage }));
};
//# sourceMappingURL=faqCreatePage.js.map