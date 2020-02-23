import React from 'react';
import DynamicForm from '../..';
import { IDynamicFormSchema } from '../../dynamic-form/models/dynamic-form-schema';
import { OnFormChangeEventType } from '../../dynamic-form/models/event-types';

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

const onChangeHandler: OnFormChangeEventType = (data: any) => {
  if (data) {
    window.localStorage.setItem('storedToLocalStorageDemo', JSON.stringify(data));
  }
};

const getData = () => {
  const string = window.localStorage.getItem('storedToLocalStorageDemo');
  if (string) {
    try {
      return JSON.parse(string);
    } catch (_) {
      return undefined;
    }
  }
  return undefined;
};

export default {
  title: 'Main Doc',
  component: DynamicForm,
};

export const StoredToLocalstorage = () => (
  <DynamicForm
    schema={demoSchema}
    onChange={onChangeHandler}
    values={getData()}
  />
);
