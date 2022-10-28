import * as getAll from './getAll';
import * as getById from './getById';

import { INodeProperties } from 'n8n-workflow';

export { getAll, getById };

export const descriptions: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['agents'],
            },
        },
        options: [
            {
                name: 'Get All Agents',
                value: 'getAll',
                description: 'Retrieve all agents',
                action: 'Get all agents',
            },
            {
                name: 'Get By ID',
                value: 'getById',
                description: 'Get a agent by ID',
                action: 'Get an agent by ID',
            },
        ],
        default: '',
    },
    ...getAll.description,
    ...getById.description,
];
