import React from 'react';
import IDynamicFormSchema, { IFieldConfiguration } from './models/dynamic-form-schema';
import { OnInputChangeEventType, OnFormChangeEventType } from './models/event-types';
import { DynamicInput } from './dynamic-input';

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

  const onFieldChanged: OnInputChangeEventType = React.useCallback((data: string, configuration: IFieldConfiguration) => {
    setFormData({
      ...formData,
      [configuration.id]: data,
    });
  }, [formData]);

  React.useEffect(() => {
    if (onChange) {
      onChange(formData);
    }
  }, [formData, onChange]);

  return (
    <>
      {schema.fields.map((field: IFieldConfiguration) => (
        <div key={field.id}>
          <label htmlFor={field.id}>{field.label}</label>
          <DynamicInput configuration={field} onChange={onFieldChanged} />
          <FieldValidator configuration={field} data={formData[field.id]}>
            {(errors: any) => errors.map((error: any) => (
              <ValidationError message={error.message} />
            )}
          </FieldValidator>
        </div>
      ))}
    </>
  );
};

export { DynamicForm };
