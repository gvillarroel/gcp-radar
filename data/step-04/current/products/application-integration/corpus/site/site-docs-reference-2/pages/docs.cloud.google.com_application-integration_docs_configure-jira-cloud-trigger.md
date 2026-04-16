---
title: "Jira Cloud trigger \_|\_ Application Integration \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-integration/docs/configure-jira-cloud-trigger
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/application-integration/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/application-integration/docs/configure-jira-cloud-trigger
  title: "Jira Cloud trigger \_|\_ Application Integration \_|\_ Google Cloud Documentation"
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
Jira Cloud trigger
The Jira Cloud trigger is a Connector Event trigger that lets you invoke an integration based on the Jira Cloud events that you've subscribed to in your Jira Cloud connection.
Important: Integration Connectors is a billable component of Google Cloud. For information about the costs and charges of using Integration Connectors, see Integration Connectors pricing .
Before you begin
If you plan to create or configure a new connection for the Jira Cloud trigger , make sure that you have the following IAM role on the project:
Connector Admin ( roles/connectors.admin )
For information about granting roles, see Manage access .
Grant the following IAM roles to the service account that you want to use for the Jira Cloud trigger :
Application Integration Invoker ( roles/integrations.integrationInvoker )
For information about granting roles to a service account, see Manage access to service accounts .
Add the Jira Cloud trigger
To add a Jira Cloud trigger to your integration, perform the following steps:
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
Click and place the Jira Cloud trigger element in the integration editor.
To configure the Jira Cloud trigger , you can either use an existing Jira Cloud connection available in Integration Connectors, or create a new Jira Cloud connection using the inline connection creation option.
Configure Jira Cloud trigger using an existing connection
You can configure the Jira Cloud trigger using an existing Jira Cloud connection in Integration Connectors. Note that the Jira Cloud trigger is an Connector Event trigger , therefore you can only use a Jira Cloud connection with event subscription enabled to configure the trigger.
For information about how to configure a Jira Cloud trigger using a new Jira Cloud connection, See Configure Jira Cloud trigger using a new connection
To configure a Jira Cloud trigger using an existing Jira Cloud connection, perform the following steps:
Click the Jira Cloud trigger element in the integration editor to open the trigger configuration pane.
Click Configure trigger .
Provide the following configuration details in the Connector Event Trigger Editor page:
Region: Select the region of your Jira Cloud connection.
Connection: Select the Jira Cloud connection that you want to use.
Application Integration only displays those Jira Cloud connections that are active and have an event subscription enabled.
Event subscription type: Select the type of event subscription that triggers the integration. For information about the supported event subscription types for this trigger, see Supported event subscription types .
Service Account : Select a service account with the required IAM roles for the Jira Cloud trigger.
Click Done to complete the trigger configuration and close the page.
Configure Jira Cloud trigger using a new connection
To configure the Jira Cloud trigger using a new Jira Cloud connection, perform the following steps:
Click the Jira Cloud trigger element in the integration editor to open the trigger configuration pane.
Click Configure trigger .
Skip the Region field.
Click Connection and select the Create Connection option from the drop-down menu.
Complete the following steps in the Create Connection pane:
In the Location step, choose the location for the new Jira Cloud connection:
Region: Select a region from the drop-down list.
Click Next .
In the Connection Details step, provide details about the new Jira Cloud connection:
Connector version: Choose an available version of the Jira Cloud connector from the drop-down list.
Connection Name: Enter a name for the Jira Cloud connection.
Note: Connection names must meet the following criteria:
Connection names can use letters, numbers, or hyphens.
Letters must be lower-case.
Connection names must begin with a letter and end with a letter or number.
Connection names cannot exceed 63 characters.
(Optional) Description: Enter a description for the connection.
(Optional) Enable Cloud Logging: Select this checkbox to store all log data of the connection.
Service Account : Select a service account with the required IAM roles for the Jira Cloud connection.
Enable event subscription: Select to create and enable a new event subscription for the Jira Cloud connection. You can either only enable event subscriptions or also include connection entities, operations, and actions .
Note: The following additional connection configuration steps are required if you choose to enable entities, operations, and actions for the connection:
Destinations
Authentication
(Optional) Expand Advanced settings to configure the connection node settings.
For more information about the connection node settings for Jira Cloud, see the Jira Cloud connection documentation.
(Optional) Click + Add label to add a label to the connection in the form of a key-value pair.
Click Next .
In the Destinations step, provide the Jira Cloud account details:
Destination Type: Select Host address .
Host: Enter the hostname or IP address of your Jira Cloud account.
Click Next .
In the Authentication step, provide the authentication details for the Jira Cloud account:
Username: Enter the username to access the provided destination address.
API token: Select the Secret Manager secret containing the API Token associated with the Jira Cloud username.
Secret version: Select a secret version.
To know more about how to configure authentication, see Configure authentication .
Click Next .
In the Event subscription details step, provide details of the Jira Cloud account where the event subscriptions will be created.
Destination Type: Select Host address .
Host: Enter the registration URL of your Jira Cloud account. Event subscriptions will be created for this URL.
Username: Enter the username to access the provided registration URL.
API token: Select the Secret Manager secret containing the API token associated with the username.
Secret version: Select a secret version.
Click Next .
Review : Review the provided Jira Cloud connection details.
Click Create to complete creating a new Jira Cloud connection.
Event subscription type: Select the type of event subscription that triggers the integration. For information about the supported event subscription types for this trigger, see Supported event subscription types .
Click Done and close the page.
Trigger output
The Jira Cloud trigger takes a couple of minutes to complete the event subscription configuration. You can view the status of your event subscription in the trigger configuration pane under Event Subscription details .
The Jira Cloud trigger indicates the status of an event subscription using the following states:
restart_alt
Creating : Indicates that the trigger is subscribing to the event subscription.
check_circle
Active : Indicates that the trigger is successfully subscribed to an event subscription.
error
Error : Indicates that the there is an issue with the configured event subscription.
In addition to the event subscription status, the Event Subscription details section also displays other details such as connection region, connection name, event subscription name, and more.
The following image shows a sample layout of the Jira Cloud trigger configuration pane:
Trigger output variable
For each event, the Jira Cloud trigger generates a ConnectorEventPayload output variable which you can use in your downstream tasks. The output variable is in JSON format containing the output Jira Cloud payload schema.
View event subscriptions
To view and manage all the event subscriptions associated with a connection in Integration Connectors, do the following:
Go to Integration Connectors > Connections page.
Go to the Connections page
Click the connection for which you want to view the subscriptions.
Click the Event subscriptions tab.
This displays all the event subscriptions for the connection.
Edit Jira Cloud trigger
You can edit a Jira Cloud trigger to change or update the connection configuration and event subscription details.
Important: When you edit or modify a Jira Cloud trigger, you can either retain the previously configured event subscription that is attached to the trigger, or you can delete it. Deleting an event subscription will affect all the published integrations using that event subscription.
To edit a Jira Cloud trigger, perform the following steps:
Click the Jira Cloud trigger element in the integration editor to open the trigger configuration pane.
Click Configure Jira Cloud trigger .
Do the following in the Connector Event Trigger Editor page:
To retain the previously configured event subscription, click Retain , else click Delete .
Warning: Deleting an event subscription will affect all the published integrations using the event subscription. This task cannot be undone.
Update the connection configuration and event subscription details as desired.
Click Done .
You can view the updated connection and event subscription details in the trigger configuration pane under Event Subscription details .
Supported event subscription types
You can use the Jira Cloud trigger to invoke an integration for the following event subscription types:
Event subscription types
Description
attachment_created
An attachment is created for a Jira ticket.
attachment_deleted
The attachment assiciated with a Jira ticket is deleted.
board_created
A new Jira board is created.
board_deleted
A Jira board is deleted.
comment_created
A comment is added to the Jira ticket.
comment_deleted
A comment in a Jira ticket is deleted.
comment_updated
An existing comment in a Jira ticket is updated.
filter_created
A new Jira filter is created.
filter_deleted
A Jira filter is deleted.
filter_updated
An existing Jira filter is updated.
issue_created
A new Jira issue is created.
issue_deleted
A Jira issue is deleted.
issue_updated
An existing Jira issue is updated.
issuelink_created
A new issue link is created for a Jira instance.
issuelink_deleted
The issue link for a Jira instance is deleted.
option_issuelinks_changed
An existing issue link for a Jira instance is changed or updated.
option_subtasks_changed
The subtasks for an issue is updated or changed.
option_voting_changed
The number of votes for a Jira issue is changed.
option_watching_changed
The watchers or list of users who are added to watch a Jira issue have changed.
project_created
A new project is created.
project_deleted
A project is deleted.
project_restored_deleted
A deleted project is restored.
project_soft_deleted
A project is deleted such that it is not visible to any users, including admins using either the product interface or the API.
project_updated
The project details are updated.
sprint_closed
The sprint is closed.
sprint_created
A sprint is created.
sprint_deleted
A sprint is deleted.
sprint_updated
The details of a sprint are changed or updated.
user_created
A user is created.
user_updated
The details of a user are changed or updated.
worklog_created
A worklog entry is added.
worklog_deleted
A worklog entry is deleted.
worklog_updated
A worklog entry is changed or updated.
Quotas and limits
For information about quotas and limits, see Quotas and limits .
What's next
Learn about all tasks and triggers .
Learn how to test and publish an integration .
Learn about error handling .
Learn about integration execution logs .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
