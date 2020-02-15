import React from 'react';
import IDynamicFormSchema, { IFieldConfiguration } from './models/dynamic-form-schema';
import { OnInputChangeEventType, OnFormChangeEventType } from './models/event-types';
import { DynamicInput } from './dynamic-input';
import { FieldValidator } from './field-validator';
import { ValidationError } from './validation-error';
import {
  IFormState,
  ISetValueAction,
  ISetErrorsAction,
  reducer,
} from '../form-state-reducer';

interface IProps {
  onChange?: OnFormChangeEventType,
  schema: IDynamicFormSchema,
}

const formInitialState: IFormState = {} as IFormState;

const DynamicForm: React.FunctionComponent<IProps> = (props) => {
  const {
    schema,
    onChange,
  } = props;

  const [formData, dispatch] = React.useReducer(reducer, formInitialState);

  const onFieldChanged: OnInputChangeEventType = React.useCallback((value: string, configuration: IFieldConfiguration) => {
    dispatch({ type: 'set-values', payload: { value, fieldId: configuration.id } } as ISetValueAction);
  }, []);

  const onFieldErrors = React.useCallback((configuratin: IFieldConfiguration, errors: string[]) => {
    dispatch({ type: 'set-errors', payload: { errors, fieldId: configuratin.id } } as ISetErrorsAction);
  }, []);

  React.useEffect(() => {
    if (onChange) {
      onChange(formData.values, formData.errors);
    }
  }, [formData, onChange]);

  return (
    <>
      {schema.fields.map((field: IFieldConfiguration) => (
        <div key={field.id}>
          <label htmlFor={field.id}>{field.label}</label>
          <DynamicInput configuration={field} onChange={onFieldChanged} />
          <FieldValidator
            configuration={field}
            data={formData?.values && formData?.values[field.id]}
            onFieldErrors={onFieldErrors}
          >
            {ValidationError}
          </FieldValidator>
        </div>
      ))}
    </>
  );
};

export { DynamicForm };
