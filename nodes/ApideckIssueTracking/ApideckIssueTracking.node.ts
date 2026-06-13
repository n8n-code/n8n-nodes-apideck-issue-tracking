import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { ticketsDescription } from './resources/tickets';
import { collectionsDescription } from './resources/collections';
import { usersDescription } from './resources/users';
import { commentsDescription } from './resources/comments';
import { tagsDescription } from './resources/tags';

export class ApideckIssueTracking implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Apideck Issue Tracking',
                name: 'N8nDevApideckIssueTracking',
                icon: { light: 'file:./apideck-issue-tracking.png', dark: 'file:./apideck-issue-tracking.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Issue Tracking API.',
                defaults: { name: 'Apideck Issue Tracking' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevApideckIssueTrackingApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Tickets",
					"value": "Tickets",
					"description": ""
				},
				{
					"name": "Collections",
					"value": "Collections",
					"description": ""
				},
				{
					"name": "Users",
					"value": "Users",
					"description": ""
				},
				{
					"name": "Comments",
					"value": "Comments",
					"description": ""
				},
				{
					"name": "Tags",
					"value": "Tags",
					"description": ""
				}
			],
			"default": ""
		},
		...ticketsDescription,
		...collectionsDescription,
		...usersDescription,
		...commentsDescription,
		...tagsDescription
                ],
        };
}
