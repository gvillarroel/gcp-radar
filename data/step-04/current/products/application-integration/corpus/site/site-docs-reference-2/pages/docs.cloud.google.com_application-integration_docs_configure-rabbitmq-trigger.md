---
title: "Rabbit MQ trigger \_|\_ Application Integration \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-integration/docs/configure-rabbitmq-trigger
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/application-integration/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/application-integration/docs/configure-rabbitmq-trigger
  title: "Rabbit MQ trigger \_|\_ Application Integration \_|\_ Google Cloud Documentation"
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
Rabbit MQ trigger
The Rabbit MQ trigger is a Connector Event trigger that lets you invoke an integration based on the Rabbit MQ events that you've subscribed to in your Rabbit MQ connection.
Important: Integration Connectors is a billable component of Google Cloud. For information about the costs and charges of using Integration Connectors, see Integration Connectors pricing .
Before you begin
If you plan to create or configure a new connection for the Rabbit MQ trigger , make sure that you have the following IAM role on the project:
Connector Admin ( roles/connectors.admin )
For information about granting roles, see Manage access .
Grant the following IAM roles to the service account that you want to use for the Rabbit MQ trigger :
Application Integration Invoker ( roles/integrations.integrationInvoker )
For information about granting roles to a service account, see Manage access to service accounts .
Add the Rabbit MQ trigger
To add a Rabbit MQ trigger to your integration, perform the following steps:
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
Click and place the Rabbit MQ trigger element in the integration editor.
To configure the Rabbit MQ trigger , you can either use an existing Rabbit MQ connection available in Integration Connectors, or create a new Rabbit MQ connection using the inline connection creation option.
Configure Rabbit MQ trigger using an existing connection
You can configure the Rabbit MQ trigger using an existing Rabbit MQ connection in Integration Connectors. Note that the Rabbit MQ trigger is an Connector Event trigger , therefore you can only use a Rabbit MQ connection with event subscription enabled to configure the trigger.
For information about how to configure a Rabbit MQ trigger using a new Rabbit MQ connection, See Configure Rabbit MQ trigger using a new connection
To configure a Rabbit MQ trigger using an existing Rabbit MQ connection, perform the following steps:
Click the Rabbit MQ trigger element in the integration editor to open the trigger configuration pane.
Click Configure trigger .
Provide the following configuration details in the Connector Event Trigger Editor page:
Region: Select the region of your Rabbit MQ connection.
Connection: Select the Rabbit MQ connection that you want to use.
Application Integration only displays those Rabbit MQ connections that are active and have an event subscription enabled.
Select Queue or Topic as the JMS Source Type .
If you select Queue , provide the Rabbit MQ queue name in the JMS Source Name column.
If you select Topic , provide the Rabbit MQ topic name in the JMS Source Name column.
Service Account : Select a service account with the required IAM roles for the Rabbit MQ trigger.
Click Done to complete the trigger configuration and close the page.
Configure Rabbit MQ trigger using a new connection
To configure the Rabbit MQ trigger using a new Rabbit MQ connection, perform the following steps:
Click the Rabbit MQ trigger element in the integration editor to open the trigger configuration pane.
Click Configure trigger .
Skip the Region field.
Click Connection and select the Create Connection option from the drop-down menu.
Complete the following steps in the Create Connection pane:
In the Location step, choose the location for the new Rabbit MQ connection:
Region: Select a region from the drop-down list.
Click Next .
In the Connection Details step, provide details about the new Rabbit MQ connection:
Connector version: Choose an available version of the Rabbit MQ connector from the drop-down list.
Connection Name: Enter a name for the Rabbit MQ connection.
Note: Connection names must meet the following criteria:
Connection names can use letters, numbers, or hyphens.
Letters must be lower-case.
Connection names must begin with a letter and end with a letter or number.
Connection names cannot exceed 63 characters.
(Optional) Description: Enter a description for the connection.
(Optional) Enable Cloud Logging: Select this checkbox to store all log data of the connection.
Service Account : Select a service account with the required IAM roles for the Rabbit MQ connection.
Enable event subscription: Select this option to enable the event subscription for the Rabbit MQ connection.
Note: This connector doesn't support the
Enable only event subscription option.
(Optional) Expand Advanced settings to configure the connection node settings.
For more information about the connection node settings for Rabbit MQ, see the Rabbit MQ connection documentation.
(Optional) Click + Add label to add a label to the connection in the form of a key-value pair.
Click Next .
In the Destinations step, provide the Rabbit MQ instance details:
Destination Type: Select Host address .
Host: Enter the hostname or IP address of your Rabbit MQ instance.
Click Next .
Optionally, if you want to use SSL, select Enable SSL . This displays the SSL configuration details.
Select a trust store type. It can be either Public , Private , or Insecure Connection .
Select the certificates as displayed based on your trust store selection.
If you are using mTLS, select the key store certificates in the Key Store section.
Optionally, select the TLS version.
Enter the supported cipher suite. Enter multiple cipher suites, as
comma separated values. For more information, see Supported cipher suites .
Note:
All your certificates must be X.509 certificates and must be in PEM (Privacy Enhanced Mail) format.
You can't directly select a certificate when configuring SSL. You must store all
your certificates and private keys as a Secret Manager Secret, and then
select the required secret during SSL configuration.
In the Authentication step, provide the authentication details for the Rabbit MQ instance:
Select your desired authentication type and enter the relevant details to access the provided Rabbit MQ host URL.
To understand how to configure these authentication types, see Configure authentication .
Click Next .
Review : Review the provided Rabbit MQ connection details.
Click Create to complete creating a new Rabbit MQ connection.
Click Done and close the page.
Supported cipher suites
TLS version
Supported cipher suites
1.2
TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384
TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
TLS_DHE_RSA_WITH_AES_128_GCM_SHA256
TLS_DHE_RSA_WITH_AES_256_GCM_SHA384
TLS_DHE_RSA_WITH_AES_128_CBC_SHA
TLS_DHE_RSA_WITH_AES_256_CBC_SHA
TLS_DHE_RSA_WITH_AES_128_CBC_SHA256
TLS_DHE_RSA_WITH_AES_256_CBC_SHA256
1.3
TLS_AES_256_GCM_SHA384
TLS_CHACHA20_POLY1305_SHA256
TLS_AES_128_GCM_SHA256
Trigger output
The Rabbit MQ trigger takes a couple of minutes to complete the event subscription configuration. You can view the status
of your event subscription in the trigger configuration pane under Event Subscription details .
The Rabbit MQ trigger indicates the status of an event subscription using the following states:
restart_alt
Creating : Indicates that the trigger is subscribing to the event subscription.
check_circle
Active : Indicates that the trigger is successfully subscribed to an event subscription.
error
Error : Indicates that the there is an issue with the configured event subscription.
In addition to the event subscription status, the Event Subscription details section also
displays other details such as connection region, connection name, and event subscription name.
The following image shows a sample layout of the Rabbit MQ trigger configuration pane:
Trigger output variable
For each event, the Rabbit MQ trigger generates a ConnectorEventPayload
output variable (in JSON format) which you can use in your downstream tasks. The output
variable will have the payload from your Rabbit MQ event. For example:
{
"message" : "Hello world" ,
"messageContentType" : "Text"
}
View event subscriptions
To view and manage all the event subscriptions associated with a connection in Integration Connectors, do the following:
Go to Integration Connectors > Connections page.
Go to the Connections page
Click the connection for which you want to view the subscriptions.
Click the Event subscriptions tab.
This displays all the event subscriptions for the connection.
Edit Rabbit MQ trigger
You can edit a Rabbit MQ trigger to change or update the connection configuration and event subscription details.
Important: When you edit or modify a Rabbit MQ trigger, you can either retain the previously configured event subscription that is attached to the trigger, or you can delete it. Deleting an event subscription will affect all the published integrations using that event subscription.
To edit a Rabbit MQ trigger, perform the following steps:
Click the Rabbit MQ trigger element in the integration editor to open the trigger configuration pane.
Click Configure Rabbit MQ trigger .
Do the following in the Connector Event Trigger Editor page:
To retain the previously configured event subscription, click Retain , else click Delete .
Warning: Deleting an event subscription will affect all the published integrations using the event subscription. This task cannot be undone.
Update the connection configuration and event subscription details as desired.
Click Done .
You can view the updated connection and event subscription details in the trigger configuration pane under Event Subscription details .
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
