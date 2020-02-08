import React from 'react';
import { GenericText } from './generic-text';
import { IFieldConfiguration } from '../models/dynamic-form-schema';
import { OnInputChangeEventType } from '../models/event-types';

export const inputTypeSelector = (configuration: IFieldConfiguration, onChange: OnInputChangeEventType) => {
    switch (configuration.type) {
        case 'text':
        case 'number':
        case 'date':
        case 'datetime-local':
        case 'tel':
        case 'password':
        case 'email':
            return <GenericText configuration={configuration} onChange={onChange} />;
        default:
            return <GenericText configuration={configuration} onChange={onChange} />;
    }
}