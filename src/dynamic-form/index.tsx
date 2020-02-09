import React from 'react';
import IDynamicFormSchema, { IFieldConfiguration } from './models/dynamic-form-schema';
import { OnInputChangeEventType, OnFormChangeEventType } from './models/event-types';
import { inputTypeSelector } from './input-types';

interface IProps {
  onChange?: OnFormChangeEventType,
  schema: IDynamicFormSchema,
}

const DynamicForm: React.FunctionComponent<IProps> = (props) => {
  const {
    schema,
    onChange,
  } = props;

  const [formData, setFormData] = React.useState({});

  const onFieldChanged: OnInputChangeEventType = (data: string, configuration: IFieldConfiguration) => {
    setFormData({
      ...formData,
      [configuration.id]: data,
    });
  };

  React.useEffect(() => {
    if (onChange) {
      onChange(formData);
    }
  }, [formData]);

  return (
    <>
      {schema.fields.map((field: IFieldConfiguration) => (
        <div key={field.id}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>{field.label}</label>
          {inputTypeSelector(field, onFieldChanged)}
        </div>
      ))}
    </>
  );
};

export { DynamicForm };
