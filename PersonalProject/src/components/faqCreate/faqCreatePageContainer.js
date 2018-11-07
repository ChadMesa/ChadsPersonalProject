import * as React from "react";
import * as toastr from "toastr";
import { UserApi } from "../../api/users";
import { Validator } from "../../common/validation";
import { FaqCreatePage } from "../faqCreate/faqCreatePage";
const FormErrors = (props) => {
    return (React.createElement("div", { className: "formErrors" }, Object.keys(props).map((fieldName, i) => {
        if (props[fieldName].length > 0)
            return React.createElement("p", { key: i },
                " ",
                props[fieldName],
                " ");
    })));
};
export class FaqCreatePageContainer extends React.Component {
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
    onFieldChange(fieldName, fieldValue) {
        const nextState = Object.assign({}, this.state, { faqEntity: Object.assign({}, this.state.faqEntity, { [fieldName]: fieldValue }) });
        this.setState(nextState, () => { this.validateField(fieldName, fieldValue); });
    }
    validateField(fieldName, fieldValue) {
        let errorMessages = this.state.formErrors;
        let isCategoryValid = this.state.isCategoryValid;
        let isQuestionValid = this.state.isQuestionValid;
        let isAnswerValid = this.state.isAnswerValid;
        let isDisplayOrderValid = this.state.isDisplayOrderValid;
        switch (fieldName) {
            case "question":
                isQuestionValid = Validator.MinLength(fieldValue, 3);
                errorMessages.question = isQuestionValid ? "Question is too short." : "";
                break;
            case "answer":
                isAnswerValid = Validator.MinLength(fieldValue, 3);
                errorMessages.question = isAnswerValid ? "Answer is too short." : "";
                break;
            case "display order":
                isDisplayOrderValid = Validator.MinLength(fieldValue, 3);
                errorMessages.displayOrder = isDisplayOrderValid ? "Please enter a number." : "";
                break;
            default:
                break;
        }
        this.setState({ formErrors: errorMessages, isQuestionValid: isQuestionValid });
    }
    validateForm() {
        this.setState({ isFormValid: this.state.isQuestionValid });
    }
    onSave() {
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
    com() {
        UserApi.FaqCategories()
            .then((response => {
            let categories = response.items.map((index) => {
                return { key: index.id, value: index.name };
            });
            this.setState({ ddllOptions: categories });
        }));
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(FaqCreatePage, { onChange: this.onFieldChange, onSave: this.onSave, buttonDisabled: false, categoryErrorMessage: this.state.formErrors.category, questionErrorMessage: this.state.formErrors.question, answerErrorMessage: this.state.formErrors.answer, displayOrderErrorMessage: this.state.formErrors.displayOrder, dropDownOptions: this.state.ddllOptions, faqEntity: this.state.faqEntity })));
    }
}
//# sourceMappingURL=faqCreatePageContainer.js.map