---
title: "Azure AD trigger \_|\_ Application Integration \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-integration/docs/configure-azuread-trigger
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/application-integration/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/application-integration/docs/configure-azuread-trigger
  title: "Azure AD trigger \_|\_ Application Integration \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Application Integration
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Azure AD trigger
Preview
— Azure AD trigger
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
The Azure AD trigger is a Connector Event trigger that lets you invoke an integration based on the Azure AD events that you've subscribed to in your Azure AD connection.
Important: Integration Connectors is a billable component of Google Cloud. For information about the costs and charges of using Integration Connectors, see Integration Connectors pricing .
Before you begin
If you plan to create or configure a new connection for the Azure AD trigger , make sure that you have the following IAM role on the project:
Connector Admin ( roles/connectors.admin )
For information about granting roles, see Manage access .
Grant the following IAM roles to the service account that you want to use for the Azure AD trigger :
Application Integration Invoker ( roles/integrations.integrationInvoker )
For information about granting roles to a service account, see Manage access to service accounts .
Add the Azure AD trigger
To add a Azure AD trigger to your integration, perform the following steps:
In the Google Cloud console, go to the Application Integration page.
Go to Application Integration
In the navigation menu, click Integrations
The Integrations List page appears listing all the integrations available in the Google Cloud project.
Select an existing integration or click Create integration to create a new one.
If you are creating a new integration:
Enter a name and description in the Create Integration pane.
Select a region for the integration.
Note: The Regions dropdown only lists the regions provisioned in your Google Cloud project. To provision a new region, Click Enable Region . See Enable new region for more information.
Select a service account for the integration. You can change or update the service account details of an integration any time from the info Integration summary pane in the integration toolbar.
Note: The option to select a service account is displayed only if you have enabled integration governance for the selected region.
Click Create .
The newly created integration opens in the integration editor .
In the integration editor navigation bar, click Triggers to view the list of available triggers.
Click and place the Azure AD trigger element in the integration editor.
To configure the Azure AD trigger , you can either use an existing Azure AD connection available in Integration Connectors, or create a new Azure AD connection using the inline connection creation option.
Configure Azure AD trigger using an existing connection
You can configure the Azure AD trigger using an existing Azure AD connection in Integration Connectors. Note that the Azure AD trigger is an Connector Event trigger , therefore you can only use an Azure AD connection with event subscription enabled to configure the trigger.
For information about how to configure a Azure AD trigger using a new Azure AD connection, See Configure Azure AD trigger using a new connection
To configure a Azure AD trigger using an existing Azure AD connection, perform the following steps:
Click the Azure AD trigger element in the integration editor to open the trigger configuration pane.
Click Configure trigger .
Provide the following configuration details in the Connector Event Trigger Editor page:
Region: Select the region of your Azure AD connection.
Connection: Select the Azure AD connection that you want to use.
Application Integration only displays those Azure AD connections that are active and have an event subscription enabled.
Event subscription type: Select the type of event subscription that triggers the integration. For information about the supported event subscription types for this trigger, see Supported event subscription types .
Service Account : Select a service account with the required IAM roles for the Azure AD trigger.
Click Done to complete the trigger configuration and close the page.
Configure Azure AD trigger using a new connection
To configure the Azure AD trigger using a new Azure AD connection, perform the following steps:
Click the Azure AD trigger element in the integration editor to open the trigger configuration pane.
Click Configure trigger .
Skip the Region field.
Click Connection and select the Create Connection option from the drop-down menu.
Complete the following steps in the Create Connection pane:
In the Location step, choose the location for the new Azure AD connection:
Region: Select a region from the drop-down list.
Click Next .
In the Connection Details step, provide details about the new Azure AD connection:
Connector version: Choose an available version of the Azure AD connector from the drop-down list.
Connection Name: Enter a name for the Azure AD connection.
Note: Connection names must meet the following criteria:
Connection names can use letters, numbers, or hyphens.
Letters must be lower-case.
Connection names must begin with a letter and end with a letter or number.
Connection names cannot exceed 49 characters.
(Optional) Description: Enter a description for the connection.
(Optional) Enable Cloud Logging: Select this checkbox to store all log data of the connection.
Service Account : Select a service account with the required IAM roles for the Azure AD connection.
Enable event subscription: Select to create and enable a new event subscription for the Azure AD connection. You can either enable only event subscriptions or also include connection entities, operations, and actions .
Note: The following additional connection configuration steps are required if you choose to enable entities, operations, and actions for the connection:
Azure Tenant : The Microsoft Online tenant being used to access data. If you don't specify a tenant, your default tenant is used.
Destinations
Authentication
(Optional) Expand Advanced settings to configure the connection node settings.
For more information about the connection node settings for Azure AD, see the Azure AD connection documentation.
(Optional) Click + Add label to add a label to the connection in the form of a key-value pair.
Click Next .
In the Destinations step, provide the Azure AD instance details:
Destination Type: Select Host address .
Host: Enter the hostname or IP address of your Azure AD instance.
Click Next .
In the Authentication step, provide the authentication details for the Azure AD instance:
Select your desired authentication type and enter the relevant details.
To understand how to configure these authentication types, see Configure authentication .
Click Next .
In the Event subscription details step, provide details of the Azure AD instance where the event subscriptions will be created.
Client ID : The client ID used for requesting access tokens.
Client secret : The client secret used for requesting access tokens.
Secret version: Select a secret version.
Client state : The Secret Manager Secret containing the client state. This is used for change notifications authentication.
Azure Tenant : The Microsoft Online tenant being used to access data. If you don't specify a tenant, your default tenant is used.
Optionally, select Enable data enrichment if you want additional information
to be appended to the backend system's response.
The additional information is specific to the entity for which you have configured the event. For more information,
see Data enrichment in event notifications .
Note: If you have configured this connection for only event subscription, you can't
enable this option. To enable data enrichment, you must configure the connection for
both event subscription and connector operations (entities and actions).
Select Enable private connectivity for secured connectivity between your backend application
and your connection. If you select this option, you must perform additional configuration steps
after creating the connection. For more information, see Private connectivity for event subscription .
Enter the dead-letter configuration. If you configure dead-letter, the connection writes
the unprocessed events to the specified Pub/Sub topic . Enter the following details:
Dead-letter project ID: The Google Cloud project ID where you have configured the dead-letter Pub/Sub topic.
Dead-letter topic: The Pub/Sub topic where you want to write the details of the unprocessed event.
If you want to use a proxy to connect to your backend (for event subscription), enter the following details:
Proxy SSL Type : The SSL type to use when connecting to the proxy server. Select any
of the following authentication types:
Always : The connection is always SSL enabled for event subscription.
Never : The connection is not SSL enabled for event subscription.
Proxy Auth Scheme : Select the authentication type to authenticate with the proxy server.
The following authentication types are supported:
Basic : Basic HTTP authentication.
Proxy User : Enter the user name to be used to authenticate with the proxy server.
Proxy Password : Select the Secret Manager secret of the user's password.
Secret version : Select the secret version.
In the Proxy Server section, enter details of the proxy server.
Click + Add destination , and then select the Destination Type
as Host address .
Enter the proxy server's hostname or IP address, and the proxy server's port number.
Click Next .
Review : Review the provided Azure AD connection details.
Click Create to complete creating a new Azure AD connection.
Event type ID: Select the type of event subscription that triggers the integration. For information about the supported event subscription types for this trigger, see Supported event subscription types .
Click Done and close the page.
Trigger output
The Azure AD trigger takes a couple of minutes to complete the event subscription configuration. You can view the status of your event subscription in the trigger configuration pane under Event Subscription details .
The Azure AD trigger indicates the status of an event subscription using the following states:
restart_alt
Creating : Indicates that the trigger is subscribing to the event subscription.
check_circle
Active : Indicates that the trigger is successfully subscribed to an event subscription.
error
Error : Indicates that the there is an issue with the configured event subscription.
In addition to the event subscription status, the Event Subscription details section also displays other details such as connection region, connection name, event subscription name, and more.
Trigger output variable
For each event, the Azure AD trigger generates a ConnectorEventPayload output variable which you can use in your downstream tasks. The output variable is in JSON format containing the output Azure AD payload schema.
Example 1: Output payload for the Azure AD event: User updated
{
"type" : "object" ,
"properties" : {
"changeType" : {
"type" : "string"
},
"clientState" : {
"type" : "string"
},
"resource" : {
"type" : "string"
},
"resourceData" : {
"type" : "object" ,
"properties" : {}
},
"subscriptionExpirationDateTime" : {
"type" : "string"
},
"subscriptionId" : {
"type" : "string"
},
"tenantId" : {
"type" : "string"
}
}
}
Example 2: Data enriched output payload for the Azure AD event: User updated
{
"type" : "object" ,
"properties" : {
"changeType" : {
"type" : "string"
},
"clientState" : {
"type" : "string"
},
"context-data" : {
"type" : "object" ,
"properties" : {}
},
"resource" : {
"type" : "string"
},
"resourceData" : {
"type" : "object" ,
"properties" : {}
},
"subscriptionExpirationDateTime" : {
"type" : "string"
},
"subscriptionId" : {
"type" : "string"
},
"tenantId" : {
"type" : "string"
}
}
}
The context-data field contains enriched data about the entity.
View event subscriptions
To view and manage all the event subscriptions associated with a connection in Integration Connectors, do the following:
Go to Integration Connectors > Connections page.
Go to the Connections page
Click the connection for which you want to view the subscriptions.
Click the Event subscriptions tab.
This displays all the event subscriptions for the connection.
Edit Azure AD trigger
You can edit a Azure AD trigger to change or update the connection configuration and event subscription details.
Important: When you edit or modify an Azure AD trigger, you can either retain the previously configured event subscription that is attached to the trigger, or you can delete it. Deleting an event subscription will affect all the published integrations using that event subscription.
To edit an Azure AD trigger, perform the following steps:
Click the Azure AD trigger element in the integration editor to open the trigger configuration pane.
Click Configure Azure AD trigger .
Do the following in the Connector Event Trigger Editor page:
To retain the previously configured event subscription, click Retain , else click Delete .
Warning: Deleting an event subscription will affect all the published integrations using the event subscription. This task cannot be undone.
Update the connection configuration and event subscription details as desired.
Click Done .
You can view the updated connection and event subscription details in the trigger configuration pane under Event Subscription details .
Supported event subscription types
You can use the Azure AD trigger to invoke an integration for the following event subscription types:
Event subscription types
Description
Userprofiles
A user is added, deleted, updated or permanently deleted.
Users.updated
A user is created, updated or soft-deleted. Creation and deletion of users triggers an updated event type.
Users.deleted
A user is permanently deleted.
Quotas and limits
For information about quotas and limits, see Quotas and limits .
What's next
Learn about all tasks and triggers .
Learn how to test and publish an integration .
Learn about error handling .
Learn about integration execution logs .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
