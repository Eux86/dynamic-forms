import React from 'react';
import { action } from '@storybook/addon-actions';
import { DynamicForm } from '../dynamic-form/index';
import IDynamicFormSchema, { FieldType } from '../dynamic-form/models/dynamic-form-schema.int';

export default {
  title: 'DynamicForm',
  component: DynamicForm,
};

const demoSchema: IDynamicFormSchema = {
  fields: [
    {
      id: 'name',
      label: 'Name: ',
      type: FieldType.text,
    }
  ]
}

export const Default = () => <DynamicForm schema={demoSchema} />;


