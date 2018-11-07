import * as React from "react";
import { IFaqEntity } from "../../interfaces";
import { IFaqCreateForm, IKeyValue } from "../../interfaces";
import { Button, Input, DropDownList } from "../../common/components/form";

export const fakeCategories: IKeyValue[] = [
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
]
export const FaqCreateForm: React.StatelessComponent<IFaqCreateForm> = (props: IFaqCreateForm) => {
    return (
        <form>
            <div className="panel panel-default">
                <div className="panel-header">FAQ Create</div>
                <div className="panel-body">
                    <DropDownList
                        label="Category"
                        name="category"
                        selectedValue={props.faqEntity.category}
                        options={props.dropDownOptions}
                        onChange={props.onChange}
                        error={props.categoryErrorMessage} />
                    <Input
                        label="Question"
                        name="question"
                        value={props.faqEntity.question}
                        onChange={props.onChange}
                        error={props.questionErrorMessage}
                        placeholder="Question" />
                    <Input
                        label="Answer"
                        name="answer"
                        value={props.faqEntity.answer}
                        onChange={props.onChange}
                        error={props.answerErrorMessage}
                        placeholder="Answer" />
                    <Input
                        label="Display Order"
                        name="displayOrder"
                        value={props.faqEntity.question}
                        onChange={props.onChange}
                        error={props.displayOrderErrorMessage}
                        placeholder="Display Order" />
                    <Button
                        className="btn btn-default"
                        onClick={props.onSave}
                        label="Create"
                        disabled={false} />
                </div>
            </div>
        </form>
    );
}
