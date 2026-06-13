import type { INodeProperties } from 'n8n-workflow';

export const ticketsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					]
				}
			},
			"options": [
				{
					"name": "Collection Tickets All",
					"value": "Collection Tickets All",
					"action": "List Tickets",
					"description": "List Tickets",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/issue-tracking/collections/{{$parameter[\"collection_id\"]}}/tickets"
						}
					}
				},
				{
					"name": "Collection Tickets Add",
					"value": "Collection Tickets Add",
					"action": "Create Ticket",
					"description": "Create Ticket",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/issue-tracking/collections/{{$parameter[\"collection_id\"]}}/tickets"
						}
					}
				},
				{
					"name": "Collection Tickets Delete",
					"value": "Collection Tickets Delete",
					"action": "Delete Ticket",
					"description": "Delete Ticket",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/issue-tracking/collections/{{$parameter[\"collection_id\"]}}/tickets/{{$parameter[\"ticket_id\"]}}"
						}
					}
				},
				{
					"name": "Collection Tickets One",
					"value": "Collection Tickets One",
					"action": "Get Ticket",
					"description": "Get Ticket",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/issue-tracking/collections/{{$parameter[\"collection_id\"]}}/tickets/{{$parameter[\"ticket_id\"]}}"
						}
					}
				},
				{
					"name": "Collection Tickets Update",
					"value": "Collection Tickets Update",
					"action": "Update Ticket",
					"description": "Update Ticket",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/issue-tracking/collections/{{$parameter[\"collection_id\"]}}/tickets/{{$parameter[\"ticket_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /issue-tracking/collections/{collection_id}/tickets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets All"
					]
				}
			}
		},
		{
			"displayName": "Raw",
			"name": "raw",
			"description": "Include raw response. Mostly used for debugging purposes",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "raw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets All"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Consumer ID",
			"name": "x-apideck-consumer-id",
			"required": true,
			"description": "ID of the consumer which you want to get or push data from",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-consumer-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets All"
					]
				}
			}
		},
		{
			"displayName": "X Apideck App ID",
			"name": "x-apideck-app-id",
			"required": true,
			"description": "The ID of your Unify application",
			"default": "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-app-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets All"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Service ID",
			"name": "x-apideck-service-id",
			"description": "Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-service-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets All"
					]
				}
			}
		},
		{
			"displayName": "Cursor",
			"name": "cursor",
			"description": "Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cursor",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets All"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Number of results to return. Minimum 1, Maximum 200, Default 20",
			"default": 20,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets All"
					]
				}
			}
		},
		{
			"displayName": "Collection ID",
			"name": "collection_id",
			"required": true,
			"description": "The collection ID",
			"default": "apideck-io",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets All"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"description": "Apply sorting",
			"default": "{\n  \"by\": \"created_at\",\n  \"direction\": \"desc\"\n}",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets All"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"description": "Apply filters",
			"default": "{\n  \"status\": [\n    \"open\"\n  ]\n}",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets All"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields \"name\", \"email\" and \"addresses.city\". If any other fields are available, they will be excluded.",
			"default": "id,updated_at",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets All"
					]
				}
			}
		},
		{
			"displayName": "API Key API Key",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "To use API you have to sign up and get your own API key. Unify API accounts have sandbox mode and live mode API keys. \nTo change modes just use the appropriate key to get a live or test object. You can find your API keys on the unify settings of your Apideck app.\nYour Apideck application_id can also be found on the same page.\n\nAuthenticate your API requests by including your test or live secret API key in the request header. \n\n- Bearer authorization header: `Authorization: Bearer <your-apideck-api-key>`\n- Application id header: `x-apideck-app-id: <your-apideck-app-id>`\n\nYou should use the public keys on the SDKs and the secret keys to authenticate API requests.\n\n**Do not share or include your secret API keys on client side code.** Your API keys carry significant privileges. Please ensure to keep them 100% secure and be sure to not share your secret API keys in areas that are publicly accessible like GitHub.\n\nLearn how to set the Authorization header inside Postman https://learning.postman.com/docs/postman/sending-api-requests/authorization/#api-key\n\nGo to Unify to grab your API KEY https://app.apideck.com/unify/api-keys\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets All"
					]
				}
			}
		},
		{
			"displayName": "POST /issue-tracking/collections/{collection_id}/tickets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Add"
					]
				}
			}
		},
		{
			"displayName": "Raw",
			"name": "raw",
			"description": "Include raw response. Mostly used for debugging purposes",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "raw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Add"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Consumer ID",
			"name": "x-apideck-consumer-id",
			"required": true,
			"description": "ID of the consumer which you want to get or push data from",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-consumer-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Add"
					]
				}
			}
		},
		{
			"displayName": "X Apideck App ID",
			"name": "x-apideck-app-id",
			"required": true,
			"description": "The ID of your Unify application",
			"default": "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-app-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Add"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Service ID",
			"name": "x-apideck-service-id",
			"description": "Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-service-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Add"
					]
				}
			}
		},
		{
			"displayName": "Collection ID",
			"name": "collection_id",
			"required": true,
			"description": "The collection ID",
			"default": "apideck-io",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Add"
					]
				}
			}
		},
		{
			"displayName": "Assignees",
			"name": "assignees",
			"type": "json",
			"default": "[\n  {\n    \"id\": \"12345\",\n    \"username\": \"Cocoa\"\n  }\n]",
			"routing": {
				"send": {
					"property": "assignees",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Add"
					]
				}
			}
		},
		{
			"displayName": "Collection ID",
			"name": "collection_id",
			"type": "string",
			"default": "12345",
			"description": "The ticket's collection ID",
			"routing": {
				"send": {
					"property": "collection_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Add"
					]
				}
			}
		},
		{
			"displayName": "Completed At",
			"name": "completed_at",
			"type": "string",
			"default": "2020-09-30T07:43:32.000Z",
			"description": "When the ticket was completed",
			"routing": {
				"send": {
					"property": "completed_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Add"
					]
				}
			}
		},
		{
			"displayName": "Created At",
			"name": "created_at",
			"type": "string",
			"default": "2020-09-30T07:43:32.000Z",
			"description": "The date and time when the object was created.",
			"routing": {
				"send": {
					"property": "created_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Add"
					]
				}
			}
		},
		{
			"displayName": "Created By",
			"name": "created_by",
			"type": "string",
			"default": "12345",
			"description": "The user who created the object.",
			"routing": {
				"send": {
					"property": "created_by",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Add"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "I am facing issues with my internet connection",
			"description": "The ticket's description. HTML version of description is mapped if supported by the third-party platform",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Add"
					]
				}
			}
		},
		{
			"displayName": "Due Date",
			"name": "due_date",
			"type": "string",
			"default": "2020-09-30T07:43:32.000Z",
			"description": "Due date of the ticket",
			"routing": {
				"send": {
					"property": "due_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Add"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "12345",
			"description": "A unique identifier for an object.",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Add"
					]
				}
			}
		},
		{
			"displayName": "Parent ID",
			"name": "parent_id",
			"type": "string",
			"default": "12345",
			"description": "The ticket's parent ID",
			"routing": {
				"send": {
					"property": "parent_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Add"
					]
				}
			}
		},
		{
			"displayName": "Priority",
			"name": "priority",
			"type": "options",
			"default": "high",
			"description": "Priority of the ticket",
			"options": [
				{
					"name": "Low",
					"value": "low"
				},
				{
					"name": "Normal",
					"value": "normal"
				},
				{
					"name": "High",
					"value": "high"
				},
				{
					"name": "Urgent",
					"value": "urgent"
				}
			],
			"routing": {
				"send": {
					"property": "priority",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Add"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "string",
			"default": "open",
			"description": "The current status of the ticket. Possible values include: open, in_progress, closed, or - in cases where there is no clear mapping - the original value passed through.",
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Add"
					]
				}
			}
		},
		{
			"displayName": "Subject",
			"name": "subject",
			"type": "string",
			"default": "Technical Support Request",
			"description": "Subject of the ticket",
			"routing": {
				"send": {
					"property": "subject",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Add"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {\n    \"id\": \"12345\",\n    \"name\": \"User Experience\"\n  }\n]",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Add"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "Technical",
			"description": "The ticket's type",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Add"
					]
				}
			}
		},
		{
			"displayName": "Updated At",
			"name": "updated_at",
			"type": "string",
			"default": "2020-09-30T07:43:32.000Z",
			"description": "The date and time when the object was last updated.",
			"routing": {
				"send": {
					"property": "updated_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Add"
					]
				}
			}
		},
		{
			"displayName": "API Key API Key",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "To use API you have to sign up and get your own API key. Unify API accounts have sandbox mode and live mode API keys. \nTo change modes just use the appropriate key to get a live or test object. You can find your API keys on the unify settings of your Apideck app.\nYour Apideck application_id can also be found on the same page.\n\nAuthenticate your API requests by including your test or live secret API key in the request header. \n\n- Bearer authorization header: `Authorization: Bearer <your-apideck-api-key>`\n- Application id header: `x-apideck-app-id: <your-apideck-app-id>`\n\nYou should use the public keys on the SDKs and the secret keys to authenticate API requests.\n\n**Do not share or include your secret API keys on client side code.** Your API keys carry significant privileges. Please ensure to keep them 100% secure and be sure to not share your secret API keys in areas that are publicly accessible like GitHub.\n\nLearn how to set the Authorization header inside Postman https://learning.postman.com/docs/postman/sending-api-requests/authorization/#api-key\n\nGo to Unify to grab your API KEY https://app.apideck.com/unify/api-keys\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Add"
					]
				}
			}
		},
		{
			"displayName": "DELETE /issue-tracking/collections/{collection_id}/tickets/{ticket_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Delete"
					]
				}
			}
		},
		{
			"displayName": "Ticket ID",
			"name": "ticket_id",
			"required": true,
			"description": "ID of the ticket you are acting upon.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Delete"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Consumer ID",
			"name": "x-apideck-consumer-id",
			"required": true,
			"description": "ID of the consumer which you want to get or push data from",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-consumer-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Delete"
					]
				}
			}
		},
		{
			"displayName": "X Apideck App ID",
			"name": "x-apideck-app-id",
			"required": true,
			"description": "The ID of your Unify application",
			"default": "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-app-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Delete"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Service ID",
			"name": "x-apideck-service-id",
			"description": "Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-service-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Delete"
					]
				}
			}
		},
		{
			"displayName": "Raw",
			"name": "raw",
			"description": "Include raw response. Mostly used for debugging purposes",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "raw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Delete"
					]
				}
			}
		},
		{
			"displayName": "Collection ID",
			"name": "collection_id",
			"required": true,
			"description": "The collection ID",
			"default": "apideck-io",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Delete"
					]
				}
			}
		},
		{
			"displayName": "API Key API Key",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "To use API you have to sign up and get your own API key. Unify API accounts have sandbox mode and live mode API keys. \nTo change modes just use the appropriate key to get a live or test object. You can find your API keys on the unify settings of your Apideck app.\nYour Apideck application_id can also be found on the same page.\n\nAuthenticate your API requests by including your test or live secret API key in the request header. \n\n- Bearer authorization header: `Authorization: Bearer <your-apideck-api-key>`\n- Application id header: `x-apideck-app-id: <your-apideck-app-id>`\n\nYou should use the public keys on the SDKs and the secret keys to authenticate API requests.\n\n**Do not share or include your secret API keys on client side code.** Your API keys carry significant privileges. Please ensure to keep them 100% secure and be sure to not share your secret API keys in areas that are publicly accessible like GitHub.\n\nLearn how to set the Authorization header inside Postman https://learning.postman.com/docs/postman/sending-api-requests/authorization/#api-key\n\nGo to Unify to grab your API KEY https://app.apideck.com/unify/api-keys\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /issue-tracking/collections/{collection_id}/tickets/{ticket_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets One"
					]
				}
			}
		},
		{
			"displayName": "Ticket ID",
			"name": "ticket_id",
			"required": true,
			"description": "ID of the ticket you are acting upon.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets One"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Consumer ID",
			"name": "x-apideck-consumer-id",
			"required": true,
			"description": "ID of the consumer which you want to get or push data from",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-consumer-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets One"
					]
				}
			}
		},
		{
			"displayName": "X Apideck App ID",
			"name": "x-apideck-app-id",
			"required": true,
			"description": "The ID of your Unify application",
			"default": "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-app-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets One"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Service ID",
			"name": "x-apideck-service-id",
			"description": "Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-service-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets One"
					]
				}
			}
		},
		{
			"displayName": "Raw",
			"name": "raw",
			"description": "Include raw response. Mostly used for debugging purposes",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "raw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets One"
					]
				}
			}
		},
		{
			"displayName": "Collection ID",
			"name": "collection_id",
			"required": true,
			"description": "The collection ID",
			"default": "apideck-io",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets One"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields \"name\", \"email\" and \"addresses.city\". If any other fields are available, they will be excluded.",
			"default": "id,updated_at",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets One"
					]
				}
			}
		},
		{
			"displayName": "API Key API Key",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "To use API you have to sign up and get your own API key. Unify API accounts have sandbox mode and live mode API keys. \nTo change modes just use the appropriate key to get a live or test object. You can find your API keys on the unify settings of your Apideck app.\nYour Apideck application_id can also be found on the same page.\n\nAuthenticate your API requests by including your test or live secret API key in the request header. \n\n- Bearer authorization header: `Authorization: Bearer <your-apideck-api-key>`\n- Application id header: `x-apideck-app-id: <your-apideck-app-id>`\n\nYou should use the public keys on the SDKs and the secret keys to authenticate API requests.\n\n**Do not share or include your secret API keys on client side code.** Your API keys carry significant privileges. Please ensure to keep them 100% secure and be sure to not share your secret API keys in areas that are publicly accessible like GitHub.\n\nLearn how to set the Authorization header inside Postman https://learning.postman.com/docs/postman/sending-api-requests/authorization/#api-key\n\nGo to Unify to grab your API KEY https://app.apideck.com/unify/api-keys\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets One"
					]
				}
			}
		},
		{
			"displayName": "PATCH /issue-tracking/collections/{collection_id}/tickets/{ticket_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Update"
					]
				}
			}
		},
		{
			"displayName": "Ticket ID",
			"name": "ticket_id",
			"required": true,
			"description": "ID of the ticket you are acting upon.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Update"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Consumer ID",
			"name": "x-apideck-consumer-id",
			"required": true,
			"description": "ID of the consumer which you want to get or push data from",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-consumer-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Update"
					]
				}
			}
		},
		{
			"displayName": "X Apideck App ID",
			"name": "x-apideck-app-id",
			"required": true,
			"description": "The ID of your Unify application",
			"default": "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-app-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Update"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Service ID",
			"name": "x-apideck-service-id",
			"description": "Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-service-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Update"
					]
				}
			}
		},
		{
			"displayName": "Raw",
			"name": "raw",
			"description": "Include raw response. Mostly used for debugging purposes",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "raw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Update"
					]
				}
			}
		},
		{
			"displayName": "Collection ID",
			"name": "collection_id",
			"required": true,
			"description": "The collection ID",
			"default": "apideck-io",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Update"
					]
				}
			}
		},
		{
			"displayName": "Assignees",
			"name": "assignees",
			"type": "json",
			"default": "[\n  {\n    \"id\": \"12345\",\n    \"username\": \"Cocoa\"\n  }\n]",
			"routing": {
				"send": {
					"property": "assignees",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Update"
					]
				}
			}
		},
		{
			"displayName": "Collection ID",
			"name": "collection_id",
			"type": "string",
			"default": "12345",
			"description": "The ticket's collection ID",
			"routing": {
				"send": {
					"property": "collection_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Update"
					]
				}
			}
		},
		{
			"displayName": "Completed At",
			"name": "completed_at",
			"type": "string",
			"default": "2020-09-30T07:43:32.000Z",
			"description": "When the ticket was completed",
			"routing": {
				"send": {
					"property": "completed_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Update"
					]
				}
			}
		},
		{
			"displayName": "Created At",
			"name": "created_at",
			"type": "string",
			"default": "2020-09-30T07:43:32.000Z",
			"description": "The date and time when the object was created.",
			"routing": {
				"send": {
					"property": "created_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Update"
					]
				}
			}
		},
		{
			"displayName": "Created By",
			"name": "created_by",
			"type": "string",
			"default": "12345",
			"description": "The user who created the object.",
			"routing": {
				"send": {
					"property": "created_by",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Update"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "I am facing issues with my internet connection",
			"description": "The ticket's description. HTML version of description is mapped if supported by the third-party platform",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Update"
					]
				}
			}
		},
		{
			"displayName": "Due Date",
			"name": "due_date",
			"type": "string",
			"default": "2020-09-30T07:43:32.000Z",
			"description": "Due date of the ticket",
			"routing": {
				"send": {
					"property": "due_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "12345",
			"description": "A unique identifier for an object.",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Update"
					]
				}
			}
		},
		{
			"displayName": "Parent ID",
			"name": "parent_id",
			"type": "string",
			"default": "12345",
			"description": "The ticket's parent ID",
			"routing": {
				"send": {
					"property": "parent_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Update"
					]
				}
			}
		},
		{
			"displayName": "Priority",
			"name": "priority",
			"type": "options",
			"default": "high",
			"description": "Priority of the ticket",
			"options": [
				{
					"name": "Low",
					"value": "low"
				},
				{
					"name": "Normal",
					"value": "normal"
				},
				{
					"name": "High",
					"value": "high"
				},
				{
					"name": "Urgent",
					"value": "urgent"
				}
			],
			"routing": {
				"send": {
					"property": "priority",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Update"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "string",
			"default": "open",
			"description": "The current status of the ticket. Possible values include: open, in_progress, closed, or - in cases where there is no clear mapping - the original value passed through.",
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Update"
					]
				}
			}
		},
		{
			"displayName": "Subject",
			"name": "subject",
			"type": "string",
			"default": "Technical Support Request",
			"description": "Subject of the ticket",
			"routing": {
				"send": {
					"property": "subject",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Update"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {\n    \"id\": \"12345\",\n    \"name\": \"User Experience\"\n  }\n]",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Update"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "string",
			"default": "Technical",
			"description": "The ticket's type",
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Update"
					]
				}
			}
		},
		{
			"displayName": "Updated At",
			"name": "updated_at",
			"type": "string",
			"default": "2020-09-30T07:43:32.000Z",
			"description": "The date and time when the object was last updated.",
			"routing": {
				"send": {
					"property": "updated_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Update"
					]
				}
			}
		},
		{
			"displayName": "API Key API Key",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "To use API you have to sign up and get your own API key. Unify API accounts have sandbox mode and live mode API keys. \nTo change modes just use the appropriate key to get a live or test object. You can find your API keys on the unify settings of your Apideck app.\nYour Apideck application_id can also be found on the same page.\n\nAuthenticate your API requests by including your test or live secret API key in the request header. \n\n- Bearer authorization header: `Authorization: Bearer <your-apideck-api-key>`\n- Application id header: `x-apideck-app-id: <your-apideck-app-id>`\n\nYou should use the public keys on the SDKs and the secret keys to authenticate API requests.\n\n**Do not share or include your secret API keys on client side code.** Your API keys carry significant privileges. Please ensure to keep them 100% secure and be sure to not share your secret API keys in areas that are publicly accessible like GitHub.\n\nLearn how to set the Authorization header inside Postman https://learning.postman.com/docs/postman/sending-api-requests/authorization/#api-key\n\nGo to Unify to grab your API KEY https://app.apideck.com/unify/api-keys\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tickets"
					],
					"operation": [
						"Collection Tickets Update"
					]
				}
			}
		},
];
