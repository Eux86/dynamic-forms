import React from 'react';
import './playground.css';
import DynamicForm, { IDynamicFormSchema, ValidationType } from '..';

const demoSchema: IDynamicFormSchema = {
  fields: [
    {
      id: 'name',
      label: 'First Name',
      placeholder: 'Morty',
      type: 'text',
      validations: [
        {
          type: ValidationType.minLength,
          data: '5',
          errorMessage: 'The string should have at least 5 characters',
        },
      ],
    },
    {
      id: 'lastname',
      label: 'Last Name',
      placeholder: 'Sanchez',
      type: 'text',
      validations: [
        {
          type: ValidationType.required,
          errorMessage: 'The field is required',
        },
      ],
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
      defaultValue: '14',
    },
    {
      id: 'title',
      label: 'Title',
      type: 'single-selection',
      defaultValue: 'mr',
      options: {
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
          {
            id: 'other',
            label: 'Other',
            value: 'other',
          },
        ],
      },
    },
    {
      id: 'othertitle',
      label: 'Custom Title',
      type: 'text',
      conditions: [
        {
          fieldId: 'title',
          type: 'field-value',
          value: 'other',
        },
      ],
    },
    {
      id: 'pets',
      label: 'Owned Pets',
      type: 'multiple-selection',
      defaultValue: "\"['cat']\"",
      options: {
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
    {
      id: 'ilikethis',
      label: 'I like DynamicForms',
      type: 'boolean',
      defaultValue: 'true',
      validations: [
        {
          type: ValidationType.required,
          errorMessage: 'You must like this project :o',
        },
      ],
    },
  ],
};

export const Playground: React.FunctionComponent = () => {
  const [schemaString, setSchemaString] = React.useState(JSON.stringify(demoSchema, null, 2));
  const [schema, setSchema] = React.useState();
  const [formData, setFormData] = React.useState();
  const [formErrors, setFormErrors] = React.useState();
  const [sourceHasError, setSourceHasError] = React.useState(false);

  React.useEffect(() => {
    try {
      setSchema(JSON.parse(schemaString));
      setSourceHasError(false);
    } catch (_) {
      setSourceHasError(true);
    }
  }, [schemaString]);

  return (
    <div className="wrapper">
      <div className="first-container">
        <div className="schema-container col">
          <textarea className={sourceHasError ? 'error' : ''} value={schemaString} onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setSchemaString(event.target.value)} />
        </div>
        <div className="schema-source col">
          <DynamicForm
            schema={schema}
            onChange={(data: any, errors: any) => { setFormData(data); setFormErrors(errors); }}
          />
        </div>
      </div>
      <div className="second-container">
        <div className="data-container col">
          <textarea className={sourceHasError ? 'error' : ''} value={JSON.stringify(formData, null, 2)} />
        </div>
        <div className="errors-container col">
          <textarea className={sourceHasError ? 'error' : ''} value={JSON.stringify(formErrors, null, 2)} />
        </div>
      </div>
    </div>
  );
};
