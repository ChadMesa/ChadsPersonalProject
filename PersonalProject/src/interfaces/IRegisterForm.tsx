import { IRegisterEntity } from "./IRegisterEntity"; 

export interface IRegisterForm {
    registerEntity: IRegisterEntity;
    onChange: (fieldName: string, value: string) => void;
    onSave: () => void;
    buttonDisabled: boolean;
    firstNameErrorMessage: string;
    lastNameErrorMessage: string;
    emailErrorMessage: string;
    passwordErrorMessage: string;
};