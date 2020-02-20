import React from 'react';
import {
  IDynamicFormSchema,
  IFieldConfiguration,
  IValidation,
  ValidationType,
  ConditionFunctionType,
  ValidationFunctionType,
  IDynamicFieldInputs,
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
import defaultConditions from './conditions';
import defaultValidations from './validations';
import { GenericTextControl } from './controls/generic-text';
import { SelectControl } from './controls/select';
import { CheckboxGroup } from './controls/checkbox-group';

interface IProps {
  onChange?: OnFormChangeEventType,
  schema: IDynamicFormSchema,
  validations?: ValidationFunctionType[],
  conditions?: ConditionFunctionType[],
  customInputs?: IDynamicFieldInputs,
}

const defaultInputMapping: IDynamicFieldInputs = {
  text: GenericTextControl,
  number: GenericTextControl,
  date: GenericTextControl,
  'datetime-local': GenericTextControl,
  tel: GenericTextControl,
  password: GenericTextControl,
  email: GenericTextControl,
  'single-selection': SelectControl,
  'multiple-selection': CheckboxGroup,
};

const formInitialState: IFormState = {} as IFormState;

const DynamicForm: React.FunctionComponent<IProps> = (props) => {
  const {
    schema,
    onChange,
    conditions: customConditions,
    validations: customValidations,
    customInputs,
  } = props;
  const conditions = [...defaultConditions, ...customConditions ?? []];
  const validations = [...defaultValidations, ...customValidations ?? []];
  const inputMapping = { ...defaultInputMapping, ...customInputs };

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
      {schema && schema.fields && schema.fields.map((field: IFieldConfiguration) => (
        conditions && conditions.map((condition: ConditionFunctionType) => condition(field, formData.values) && (
          <div key={field.id}>
            <label htmlFor={field.id}>
              {field.label}
              {isRequired(field) ? '*' : ''}
            </label>
            <DynamicInput
              inputMapping={inputMapping}
              configuration={field}
              onChange={onFieldChanged}
              onTouched={onFieldTouched}
            />
            {formData?.touched && formData?.touched[field.id] && (
              <FieldValidator
                configuration={field}
                data={formData?.values && formData?.values[field.id]}
                onFieldErrors={onFieldErrors}
                validations={validations}
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
