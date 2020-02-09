import React from 'react';
import { DynamicForm } from '../dynamic-form/index';
import IDynamicFormSchema from '../dynamic-form/models/dynamic-form-schema';

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
    {
      id: 'title',
      label: 'Title',
      type: 'options',
      options: {
        type: 'single-selection',
        items: [
          {
            id: 'mr',
            label: 'Mr.',
            value: 'mr',
          },
          {
            id: 'mrsmss',
            label: 'Mrs./Mss.',
            value: 'mrsmss',
          },
        ],
      },
    },
    {
      id: 'pets',
      label: 'Owned Pets',
      type: 'options',
      options: {
        type: 'multiple-selection',
        items: [
          {
            id: 'cat',
            label: 'Cat',
            value: 'cat',
          },
          {
            id: 'dog',
            label: 'Dog',
            value: 'dog',
          },
          {
            id: 'ferret',
            label: 'Ferret',
            value: 'ferret',
          },
        ],
      },
    },
  ],
};

export const Default = () => {
  const [data, setData] = React.useState({});
  const onChange = React.useCallback((newData: any) => setData(newData), []);
  return (
    <>
      <DynamicForm schema={demoSchema} onChange={onChange} />
      <textarea style={{ width: '250px', height: '200px' }} value={JSON.stringify(data, null, 2)} />
    </>
  );
};
