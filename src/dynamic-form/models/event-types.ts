import { IFieldConfiguration, IValidationError } from './dynamic-form-schema';

export type OnInputChangeEventType = (data: string, configuration: IFieldConfiguration) => void;
export type OnFormChangeEventType = (data: any, errors?: IValidationError[]) => void;
