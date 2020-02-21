import React from 'react';
import {
  IDynamicFormSchema,
  IFieldConfiguration,
  ConditionFunctionType,
  ValidationFunctionType,
  IDynamicFieldInputs,
  IFieldTemplate,
} from './models/dynamic-form-schema';
import { OnInputChangeEventType, OnFormChangeEventType } from './models/event-types';
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
import { FieldTemplate as DefaultFieldTemplate } from './field-template';
import { CheckboxControl } from './controls/checkbox';

interface IProps {
  onChange?: OnFormChangeEventType,
  schema: IDynamicFormSchema,
  validations?: ValidationFunctionType[],
  conditions?: ConditionFunctionType[],
  customInputs?: IDynamicFieldInputs,
  customFieldTemplate?: React.FunctionComponent<IFieldTemplate>,
  values?: { [key: string]: string },
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
  boolean: CheckboxControl,
};

const formInitialState: IFormState = {} as IFormState;

const DynamicForm: React.FunctionComponent<IProps> = (props) => {
  const {
    schema,
    onChange,
    conditions: customConditions,
    validations: customValidations,
    customInputs,
    customFieldTemplate,
    values,
  } = props;

  const conditions = React.useMemo(() => [...defaultConditions, ...customConditions ?? []], [customConditions]);
  const validations = React.useMemo(() => [...defaultValidations, ...customValidations ?? []], [customValidations]);
  const inputMapping = React.useMemo(() => ({ ...defaultInputMapping, ...customInputs ?? {} }), [customInputs]);
  const FieldTemplate = React.useMemo(() => customFieldTemplate ?? DefaultFieldTemplate, [customFieldTemplate]);

  const [formData, dispatch] = React.useReducer(reducer, formInitialState);

  const onFieldChanged: OnInputChangeEventType = React.useCallback((value: string, configuration: IFieldConfiguration) => {
    dispatch({ type: 'set-value', payload: { value, fieldId: configuration.id } } as ISetValueAction);
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

  React.useEffect(() => {
    dispatch({ type: 'set-values', payload: values } as ISetValueAction);
  }, [values]);

  return (
    <>
      {schema && schema.fields && schema.fields.map((field: IFieldConfiguration) => (
        conditions && conditions.map((condition: ConditionFunctionType) => condition(field, formData.values) && (
          <div key={field.id}>
            <FieldTemplate
              field={field}
              value={formData?.values && formData?.values[field.id]}
              inputMapping={inputMapping}
              onFieldChanged={onFieldChanged}
              onFieldTouched={onFieldTouched}
            />
            <FieldValidator
              formData={formData}
              configuration={field}
              data={formData?.values && formData?.values[field.id]}
              onFieldErrors={onFieldErrors}
              validations={validations}
            >
              {ValidationError}
            </FieldValidator>
          </div>
        ))
      ))}
    </>
  );
};

export { DynamicForm };
