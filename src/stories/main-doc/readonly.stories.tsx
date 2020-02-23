import React from 'react';
import DynamicForm from '../..';
import { IDynamicFormSchema } from '../../dynamic-form/models/dynamic-form-schema';

const demoSchema: IDynamicFormSchema = {
  fields: [
    {
      id: 'name',
      type: 'text',
      label: 'Firstname',
    },
    {
      id: 'lastname',
      type: 'text',
      label: 'Lastname',
    },
    {
      id: 'age',
      type: 'number',
      label: 'Age',
    },
  ],
};

export default {
  title: 'Main Doc',
  component: DynamicForm,
};

export const Readonly = () => (
  <DynamicForm
    readonly
    schema={demoSchema}
    values={{
      name: 'Rick',
      lastname: 'Sanchez',
      age: '70',
    }}
  />
);
