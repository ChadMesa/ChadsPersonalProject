import { IFaqCreateEntity } from "./IFaqCreateEntity"
import { IKeyValue } from "./IKeyValue";


export interface IFaqCreateForm {
  faqCreateEntity: IFaqCreateEntity;
    onChange: (fieldName: string, value: string) => void;
    onSave: () => void;
    buttonDisabled: boolean;
    dropDownOptions: IKeyValue[];
};

