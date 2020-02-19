import React from 'react';
import {
  IDynamicFormSchema,
  IFieldConfiguration,
  IValidation,
  ValidationType,
  ConditionFunctionType,
} from './models/dynamic-form-schema';
import { OnInputChangeEventType, OnFormChangeEventType } from './models/event-types';
import { DynamicInput } from './dynamic-input';
import { FieldValidator } from './field-validator';
import { ValidationError } from './validation-error';
import {
  IFormState,
  ISetValueAction,
  ISetErrorsAction,
  reducer,
  ISetTouchedAction,
} from './form-state-reducer';
import conditions from './conditions';

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

  const onFieldTouched = React.useCallback((configuratin: IFieldConfiguration) => {
    dispatch({ type: 'set-touched', payload: { fieldId: configuratin.id } } as ISetTouchedAction);
  }, []);

  React.useEffect(() => {
    if (onChange) {
      onChange(formData.values, formData.errors);
    }
  }, [formData, onChange]);

  const isRequired = (configuration: IFieldConfiguration) => (
    configuration.validations && configuration.validations.find((validation: IValidation) => validation.type === ValidationType.required)
  );
  return (
    <>
      {schema.fields.map((field: IFieldConfiguration) => (
        conditions.map((condition: ConditionFunctionType) => condition(field, formData.values) && (
          <div key={field.id}>
            <label htmlFor={field.id}>
              {field.label}
              {isRequired(field) ? '*' : ''}
            </label>
            <DynamicInput configuration={field} onChange={onFieldChanged} onTouched={onFieldTouched} />
            {formData?.touched && formData?.touched[field.id] && (
              <FieldValidator
                configuration={field}
                data={formData?.values && formData?.values[field.id]}
                onFieldErrors={onFieldErrors}
              >
                {ValidationError}
              </FieldValidator>
            )}
          </div>
        ))
      ))}
      { // Debugging help
      /* <br />
      <div>
        Touched:
        <pre>
          {JSON.stringify(formData.touched, null, 2)}
        </pre>
      </div> */}
    </>
  );
};

export { DynamicForm };
