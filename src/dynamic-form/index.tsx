import React from 'react';
import IDynamicFormSchema, { IFieldConfiguration } from './models/dynamic-form-schema.int';

interface IProps {
  schema: IDynamicFormSchema,
}

const DynamicForm: React.FunctionComponent<IProps> = (props) => {
  const {
    schema
  } = props;

  return (
    <>
      {schema.fields.map((field: IFieldConfiguration) =>
        <div>
          <label>{field.label}</label>
        </div>
      )}
    </>
  )
}

export { DynamicForm };
