import * as React from "react";
import * as toastr from "toastr";
import { UserApi } from "../../api/users";
import { FaqCreateForm } from "../faqCreate/faqCreateForm";
import { IFaqEntity, IKeyValue } from "../../interfaces";
import { Validator } from "../../common/validation";
import { IError } from "../../interfaces/IError";
import { FaqCreatePage } from "../faqCreate/faqCreatePage";

interface IFormErrors {
    category: string;
    question: string;
    answer: string;
    displayOrder: string;
}

interface IFaqCreateState {
    faqEntity: IFaqEntity;
    formErrors: IFormErrors;
    isCategoryValid: boolean;
    isQuestionValid: boolean;
    isAnswerValid: boolean;
    isDisplayOrderValid: boolean;
    isFormValid: boolean;
    ddllOptions: IKeyValue[];
}

const FormErrors: React.StatelessComponent<IFormErrors> = (props) => {
    return (
        <div className="formErrors">
            {Object.keys(props).map((fieldName, i) => {
                if (props[fieldName].length > 0)
                    return <p key={i}> {props[fieldName]} </p>
            })}
        </div>
    );
}

export class FaqCreatePageContainer extends React.Component<{}, IFaqCreateState> {
    constructor(props) {
        super(props);
        this.state = {
            faqEntity: {
                category: "",
                question: "",
                answer: "",
                displayOrder: "",
                faqCategoryId: 0,
                id: 0
            },
            ddllOptions: [],
            isCategoryValid: false,
            isQuestionValid: false,
            isAnswerValid: false,
            isDisplayOrderValid: false,
            isFormValid: false,
            formErrors: { category: "", question: "", answer: "", displayOrder: "" }
        };
        this.onFieldChange = this.onFieldChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }
    private onFieldChange(fieldName: string, fieldValue: string) {
        const nextState = {
            ...this.state,
            faqEntity: {
                ...this.state.faqEntity,
                [fieldName]: fieldValue
            }
        }
        this.setState(nextState, () => { this.validateField(fieldName, fieldValue) });
    }

    private validateField(fieldName: string, fieldValue: string) {
        let errorMessages = this.state.formErrors;
        let isCategoryValid = this.state.isCategoryValid
        let isQuestionValid = this.state.isQuestionValid;
        let isAnswerValid = this.state.isAnswerValid;
        let isDisplayOrderValid = this.state.isDisplayOrderValid;
        switch (fieldName) {
            case "question":
                isQuestionValid = Validator.MinLength(fieldValue, 3)
                errorMessages.question = isQuestionValid ? "Question is too short." : ""
                break;
            case "answer":
                isAnswerValid = Validator.MinLength(fieldValue, 3)
                errorMessages.question = isAnswerValid ? "Answer is too short." : ""
                break;
            case "display order":
                isDisplayOrderValid = Validator.MinLength(fieldValue, 3)
                errorMessages.displayOrder = isDisplayOrderValid ? "Please enter a number." : ""
                break;
            default:
                break;
        }
        this.setState({ formErrors: errorMessages, isQuestionValid: isQuestionValid })
    }
    private validateForm() {
        this.setState({ isFormValid: this.state.isQuestionValid })
    }
    private onSave() {
        UserApi.FaqCreate(this.state.faqEntity)
            .then((response) => {
                toastr.success("FAQ Created!");
            }, (err) => {
                toastr.error("Failed to create FAQ.");
            })
            .catch((err) => {
                toastr.error("Failed to create FAQ.");
            });
    }
    public com() {
        UserApi.FaqCategories()
            .then((response => {
                let categories = response.items.map((index) => {
                   return {key: index.id, value: index.name }
                })
                this.setState({ ddllOptions: categories })
            }))
    }
    public render() {
        return (

            <div>
                <FaqCreatePage
                    onChange={this.onFieldChange}
                    onSave={this.onSave}
                    buttonDisabled={false}
                    categoryErrorMessage={this.state.formErrors.category}
                    questionErrorMessage={this.state.formErrors.question}
                    answerErrorMessage={this.state.formErrors.answer}
                    displayOrderErrorMessage={this.state.formErrors.displayOrder}
                    dropDownOptions={this.state.ddllOptions}
                    faqEntity={this.state.faqEntity} />
            </div>
        )
    }
}