import React from 'react';
import DynamicForm from '..';
import { IDynamicFormSchema, ValidationType } from '../dynamic-form/models/dynamic-form-schema';

const demoSchema: IDynamicFormSchema = {
  fields: [
    {
      id: 'username',
      type: 'text',
      label: 'Username',
      validations: [
        {
          type: ValidationType.required,
          errorMessage: 'This field is required',
        },
      ],
    },
    {
      id: 'password',
      type: 'password',
      label: 'Password',
      validations: [
        {
          type: ValidationType.required,
          errorMessage: 'This field is required',
        },
      ],
    },
    {
      id: 'termsAndConditions',
      type: 'boolean',
      label: 'Accept terms and conditions',
      validations: [
        {
          type: ValidationType.required,
          errorMessage: 'This field is required',
        },
      ],
    },
  ],
};

export const SimpleForm:React.FunctionComponent = () => (
  <DynamicForm
    schema={demoSchema}
  />
);
