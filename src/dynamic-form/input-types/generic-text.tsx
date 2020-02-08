import React from 'react';
import { IFieldConfiguration } from '../models/dynamic-form-schema';
import { OnInputChangeEventType } from '../models/event-types';

interface IProps {
    onChange: OnInputChangeEventType;
    configuration: IFieldConfiguration;
}

export const GenericText: React.FunctionComponent<IProps> = (props) => {
    const {
        configuration,
        onChange,
    } = props;

    const onChangeInternal = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value, configuration);
    };

    return (
        <input
            id={configuration.id}
            type={configuration.type}
            placeholder={configuration.placeholder}
            value={configuration.defaultValue}
            onChange={onChangeInternal}
        />
    )
}