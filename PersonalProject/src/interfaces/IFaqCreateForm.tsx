import { IFaqEntity } from "./IFaqEntity"
import { IKeyValue } from "./IKeyValue";


export interface IFaqCreateForm {
  faqEntity: IFaqEntity;
    onChange: (fieldName: string, value: string) => void;
    onSave: () => void;
    buttonDisabled: boolean;
    dropDownOptions: IKeyValue[];
    categoryErrorMessage?: string;
    questionErrorMessage?: string;
    answerErrorMessage?: string;
    displayOrderErrorMessage?: string;
};

