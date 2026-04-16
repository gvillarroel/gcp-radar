---
title: "Apache Kafka trigger \_|\_ Application Integration \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-integration/docs/configure-apache-kafka-trigger
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/application-integration/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/application-integration/docs/configure-apache-kafka-trigger
  title: "Apache Kafka trigger \_|\_ Application Integration \_|\_ Google Cloud Documentation"
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
Apache Kafka trigger
Preview
— Apache Kafka trigger
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
The Apache Kafka trigger is a Connector Event trigger that lets you invoke an integration based on the Apache Kafka events that you've subscribed to in your Apache Kafka connection.
Important: Integration Connectors is a billable component of Google Cloud. For information about the costs and charges of using Integration Connectors, see Integration Connectors pricing .
Before you begin
If you plan to create or configure a new connection for the Apache Kafka trigger , make sure that you have the following Identity and Access Management (IAM) role on the project:
Connector Admin ( roles/connectors.admin )
For information about granting roles, see Manage access .
Grant the following IAM roles to the service account that you want to use for the Apache Kafka trigger :
Application Integration Invoker ( roles/integrations.integrationInvoker )
For information about granting roles to a service account, see Manage access to service accounts .
Add the Apache Kafka trigger
To add a Apache Kafka trigger to your integration, perform the following steps:
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
Click and place the Apache Kafka trigger element in the integration editor.
To configure the Apache Kafka trigger , you can either use an existing Apache Kafka connection available in Integration Connectors, or create a new Apache Kafka connection using the inline connection creation option.
Configure Apache Kafka trigger using an existing connection
You can configure the Apache Kafka trigger using an existing Apache Kafka connection in Integration Connectors. Note that the Apache Kafka trigger is an Connector Event trigger , therefore you can only use a Apache Kafka connection with event subscription enabled to configure the trigger.
For information about how to configure a Apache Kafka trigger using a new Apache Kafka connection, see Configure Apache Kafka trigger using a new connection
To configure a Apache Kafka trigger using an existing Apache Kafka connection, perform the following steps:
Click the Apache Kafka trigger element in the integration editor to open the trigger configuration pane.
Click Configure trigger .
Provide the following configuration details in the Connector Event Trigger Editor page:
Region: Select the region of your Apache Kafka connection.
Connection: Select the Apache Kafka connection that you want to use.
Application Integration only displays those Apache Kafka connections that are active and have an event subscription enabled.
Topic name : Enter the topic name. Note: As per Apache Kafka documentation, the maximum length for a topic name is 249 characters.
Consumer group ID : Optionally, enter the consumer group ID that specifies the name of the consumer group to which the Kafka consumer belongs. The maximum length for a consumer group ID is generally 255 characters.
Partition : Enter the partition if you want to subscribe to a particular partition. Partitions are a way to break up a topic into multiple parts and store each part on a different node in the cluster.
Initial Offset : Select the offset reset strategy :
If you select earliest , your connection consumes unconsumed messages including any messages produced before the lifetime of the consumer group.
If you select latest , your connection consumes messages that are produced after the consumer group is created.
Service Account : Select a service account with the required IAM roles for the Apache Kafka trigger.
Click Done .
Configure Apache Kafka trigger using a new connection
To configure the Apache Kafka trigger using a new Apache Kafka connection, perform the following steps:
Click the Apache Kafka trigger element in the integration editor to open the trigger configuration pane.
Click Configure Apache Kafka trigger .
Skip the Region field.
Click Connection and select the Create Connection option from the list. The Create Connection pane appears.
In the Location step, choose the location for the new Apache Kafka connection:
Region: Select a region from the list.
Click Next .
In the Connection Details step, provide details about the new Apache Kafka connection:
Connector version: Choose an available version of the Apache Kafka connector from the list.
Connection Name: Enter a name for the Apache Kafka connection.
Note: Connection names must meet the following criteria:
Connection names can use letters, numbers, or hyphens.
Letters must be lower-case.
Connection names must begin with a letter and end with a letter or number.
Connection names cannot exceed 49 characters.
For connectors that support event subscription , the connection names cannot begin with the "goog" prefix.
(Optional) Description: Enter a description for the connection.
(Optional) Enable Cloud Logging: Select this checkbox to store all log data of the connection.
Service Account : Select a service account with the required IAM roles for the Apache Kafka connection.
The Enable event subscription, entity and actions option is selected by default for the Apache Kafka connection.
Note: This connector doesn't support the
Enable only event subscription option.
Type Detection Scheme: Select MessageOnly .
Registry Service : The Schema Registry service used for working with topic schemas.
Registry Type : Type of the schema specified for the a specific topic.
Registry Version : Version of the schema read from RegistryUrl for the specified topic.
Registry User : Username or Access Key value to authorize with the server specified in RegistryUrl .
Registry Password : Secret Manager Secret containing the password/secret Key value to authorize with the server specified in RegistryUrl .
Optionally, configure the Connection node settings :
Minimum number of nodes : Enter the minimum number of connection nodes.
Maximum number of nodes : Enter the maximum number of connection nodes.
A node is a unit (or replica) of a connection that processes transactions.
More nodes are required to process more transactions for a connection and conversely,
fewer nodes are required to process fewer transactions.
To understand how the nodes affect your connector pricing, see
Pricing for connection nodes . If you don't enter any values, by default
the minimum nodes are set to 2 (for better availability) and the maximum nodes are set to 50.
Note: You can customize the connection node values only if you are
a Pay-as-you-go customer.
Optionally, click + ADD LABEL to add a label to the Connection in the form of a key and value pair.
Enable SSL : This field sets whether SSL is enabled.
Click Next .
In the Destinations section, enter details of the Kafka bootstrap server you want to connect to.
Destination Type : Select a Destination Type .
To specify the destination hostname or IP address, select Host address and
enter the address in the Host 1 field.
To establish a private connection, select Host Address and add the endpoint attachment created for the SAP Gateway using the HTTPS protocol.
Note: To understand how to create an endpoint attachment, see
PSC service attachment
and endpoint attachment . After you
have created the endpoint attachment, it will be visible in the Endpoint Attachment list.
If you want to establish a public connection to your backend systems with additional security, you can
consider configuring static outbound
IP addresses for your connections , and then configure
your firewall rules to allowlist only the specific static IP addresses.
To specify additional Kafka bootstrap servers, click + ADD DESTINATION .
Click Next .
In the Authentication section, enter the authentication details.
Select an Authentication type and enter the relevant details.
The following authentication types are supported by the Apache Kafka connection:
Username and password
Username : The Apache Kafka username to use for the connection.
Password : Secret Manager Secret containing the password associated with the Apache Kafka username.
Auth Scheme : The scheme used for authentication.
The following Auth Schemes are supported by the Apache Kafka connection:
Plain
SCRAM-SHA-1
SCRAM-SHA-256
Not Available
If you want to use anonymous login, select Not Available .
Click Next .
Enter the dead-letter configuration. If you configure dead-letter, the connection writes
the unprocessed events to the specified Pub/Sub topic . Enter the following details:
Dead-letter project ID: The Google Cloud project ID where you have configured the dead-letter Pub/Sub topic.
Dead-letter topic: The Pub/Sub topic where you want to write the details of the unprocessed event.
Click Next .
Review : Review your connection and authentication details.
Click Create .
Trigger output
The Apache Kafka trigger takes a couple of minutes to complete the event subscription configuration. You can view the status
of your event subscription in the trigger configuration pane under Event Subscription details .
The Apache Kafka trigger indicates the status of an event subscription using the following states:
restart_alt
Creating : Indicates that the trigger is subscribing to the event subscription.
check_circle
Active : Indicates that the trigger is successfully subscribed to an event subscription.
error
Error : Indicates that the there is an issue with the configured event subscription.
In addition to the event subscription status, the Event Subscription details section also
displays other details such as connection region, connection name, and event subscription name.
Trigger output variable
For each event, the Apache Kafka trigger generates a ConnectorEventPayload
output variable (in JSON format) which you can use in your downstream tasks. The output
variable will have the payload from your Apache Kafka event. For example:
{
"message" : "{\"key\":\"18\",\"topic\":\"test\",\"value\":\"hello world\",\"partition\":0,\"offset\":12,\"headers\":\"{}\",\"timestamp\":1712755076824,\"serializedMessagesize\":14}" ,
"contentType" : "text/plain"
}
View event subscriptions
To view and manage all the event subscriptions associated with a connection in Integration Connectors, do the following:
Go to Integration Connectors > Connections page.
Go to the Connections page
Click the connection for which you want to view the subscriptions.
Click the Event subscriptions tab.
This displays all the event subscriptions for the connection.
Edit Apache Kafka trigger
You can edit a Apache Kafka trigger to change or update the connection configuration and event subscription details.
Important: When you edit or modify a Apache Kafka trigger, you can either retain the previously configured event subscription that is attached to the trigger, or you can delete it. Deleting an event subscription will affect all the published integrations using that event subscription.
To edit a Apache Kafka trigger, perform the following steps:
Click the Apache Kafka trigger element in the integration editor to open the trigger configuration pane.
Click Configure Apache Kafka trigger .
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
