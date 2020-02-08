import React from 'react';
import { action } from '@storybook/addon-actions';
import { DynamicForm } from '../dynamic-form/index';
import IDynamicFormSchema, { FieldType } from '../dynamic-form/models/dynamic-form-schema';
import { OnFormChangeEventType } from '../dynamic-form/models/event-types';

export default {
  title: 'DynamicForm',
  component: DynamicForm,
};

const demoSchema: IDynamicFormSchema = {
  fields: [
    {
      id: 'name',
      label: 'First Name',
      type: 'text',
    },
    {
      id: 'lastname',
      label: 'Last Name',
      type: 'text',
    },
    {
      id: 'phone',
      label: 'Telephone',
      type: 'tel',
    },
    {
      id: 'age',
      label: 'age',
      type: 'number',
    },
  ]
}

export const Default = () => {
  const [data, setData] = React.useState({});
  return (
    <>
      <DynamicForm schema={demoSchema} onChange={(data: any) => setData(data)} />
      <textarea style={{width: '250px', height: '200px'}} value={JSON.stringify(data, null, 2)}></textarea>
    </>
  )
};


