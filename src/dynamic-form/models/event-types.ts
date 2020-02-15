import { IFieldConfiguration } from './dynamic-form-schema';

export type OnInputChangeEventType = (data: any, configuration: IFieldConfiguration) => void;
export type OnInputTouchedEventType = (configuration: IFieldConfiguration) => void;
export type OnFormChangeEventType = (data: any, errors?: { [key: string]: string[] }) => void;
