import { IKeyValue } from "./IKeyValue";

export interface IDropDownListProps {
    name: string;
    label: string;
    selectedValue: string;
    options: IKeyValue[];
    onChange: (fieldName: string, value: string) => void;
    error?: string;
}