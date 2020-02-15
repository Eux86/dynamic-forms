import React from 'react';
import IDynamicFormSchema, { IFieldConfiguration } from './models/dynamic-form-schema';
import { OnInputChangeEventType, OnFormChangeEventType } from './models/event-types';
import { DynamicInput } from './dynamic-input';
import { FieldValidator } from './field-validator';
import { ValidationError } from './validation-error';

interface IProps {
  onChange?: OnFormChangeEventType,
  schema: IDynamicFormSchema,
}

const DynamicForm: React.FunctionComponent<IProps> = (props) => {
  const {
    schema,
    onChange,
  } = props;

  const [formData, setFormData] = React.useState({} as any);
  const [formErrors, setFormErrors] = React.useState({} as any);

  const onFieldChanged: OnInputChangeEventType = React.useCallback((data: string, configuration: IFieldConfiguration) => {
    setFormData({
      ...formData,
      [configuration.id]: data,
    });
  }, [formData]);

  const onFieldErrors = React.useCallback((fieldId: string, errors: string[]) => {
    setFormErrors({
      ...formErrors,
      [fieldId]: errors,
    });
  }, [formErrors]);

  React.useEffect(() => {
    if (onChange) {
      onChange(formData, formErrors);
    }
  }, [formData, formErrors, onChange]);

  return (
    <>
      {schema.fields.map((field: IFieldConfiguration) => (
        <div key={field.id}>
          <label htmlFor={field.id}>{field.label}</label>
          <DynamicInput configuration={field} onChange={onFieldChanged} />
          <FieldValidator configuration={field} data={formData[field.id]} onFieldErrors={onFieldErrors}>
            {ValidationError}
          </FieldValidator>
        </div>
      ))}
    </>
  );
};

export { DynamicForm };
