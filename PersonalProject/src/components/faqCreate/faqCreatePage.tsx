import * as React from "react";
import { IFaqCreateForm } from "../../interfaces";
import { FaqCreateForm } from "./faqCreateForm";

export const FaqCreatePage: React.StatelessComponent<IFaqCreateForm> = (props: IFaqCreateForm) => {
    return (
        <FaqCreateForm
            onChange={props.onChange}
            onSave={props.onSave}
            buttonDisabled={props.buttonDisabled}
            categoryErrorMessage={props.categoryErrorMessage}
            questionErrorMessage={props.questionErrorMessage}
            dropDownOptions={props.dropDownOptions}
            faqEntity={props.faqEntity}
            answerErrorMessage={props.answerErrorMessage}
            displayOrderErrorMessage={props.displayOrderErrorMessage}
        />
    );
}