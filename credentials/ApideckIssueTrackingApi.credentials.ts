import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApideckIssueTrackingApi implements ICredentialType {
        name = 'N8nDevApideckIssueTrackingApi';

        displayName = 'Apideck Issue Tracking API';

        icon: Icon = { light: 'file:../nodes/ApideckIssueTracking/apideck-issue-tracking.png', dark: 'file:../nodes/ApideckIssueTracking/apideck-issue-tracking.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://unify.apideck.com',
                        required: true,
                        placeholder: 'https://unify.apideck.com',
                        description: 'The base URL of your Apideck Issue Tracking API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
