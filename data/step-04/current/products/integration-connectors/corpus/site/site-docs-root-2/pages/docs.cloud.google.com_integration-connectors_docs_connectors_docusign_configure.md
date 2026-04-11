---
title: "DocuSign \_|\_ Integration Connectors \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/integration-connectors/docs/connectors/docusign/configure
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/integration-connectors/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/integration-connectors/docs/connectors/docusign/configure
  title: "DocuSign \_|\_ Integration Connectors \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Integration Connectors
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
DocuSign
Use DocuSign connector to perform read operations on DocuSign.
Before you begin
Before using the DocuSign connector, do the following tasks:
In your Google Cloud project:
Ensure that network connectivity is set up. For information about network patterns, see Network connectivity .
Grant the roles/connectors.admin IAM role to the user
configuring the connector.
Grant the following IAM roles to the service account that you want to use for the connector:
roles/secretmanager.viewer
roles/secretmanager.secretAccessor
A service account is a special type of Google account intended to represent a non-human
user that needs to authenticate and be authorized to access data in Google APIs.
If you don't have a service account, you must create a service account. The connector and the service account must belong to the same project. For more
information, see
Creating a service account .
Enable the following services:
secretmanager.googleapis.com (Secret Manager API)
connectors.googleapis.com (Connectors API)
To understand how to enable services, see Enabling services .
If these services or permissions have not been enabled for your project previously, you are prompted to enable them
when configuring the connector.
Configure the connector
A connection is specific to a data source. It
means that if you have many data sources, you must create a separate connection
for each data source. To create a connection, do the following:
In the Cloud console , go to the Integration Connectors > Connections page
and then select or create a Google Cloud project.
Go to the Connections page
Click + CREATE NEW to open the Create Connection page.
In the Location section, choose the location for the connection.
Region : Select a location from the drop-down list.
For the list of all the supported regions, see Locations .
Click NEXT .
In the Connection Details section, complete the following:
Connector : Select DocuSign from the drop down list of available Connectors.
Connector version : Select the Connector version from the drop down list of available versions.
In the Connection Name field, enter a name for the Connection instance.
Connection names must meet the following criteria:
Connection names can use letters, numbers, or hyphens.
Letters must be lower-case.
Connection names must begin with a letter and end with a letter or number.
Connection names cannot exceed 49 characters.
Optionally, enter a Description for the connection instance.
Optionally, enable Cloud logging ,
and then select a log level. By default, the log level is set to Error .
Service Account : Select a service account that has the required roles .
Optionally, select UseSandbox if you use a DocuSign sandbox account.
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
Optionally, click + ADD LABEL to add a label to the Connection in the form of a key/value pair.
Click NEXT .
In the Authentication section, enter the authentication details.
Select an Authentication type and enter the relevant details.
The following authentication types are supported by the DocuSign connection:
OAUTH 2.0 - Authorization Code
OAuth 2.0 - JWT Bearer
To understand how to configure these authentication types, see Configure authentication .
Click NEXT .
Review : Review your connection and authentication details.
Click Create .
Configure authentication
Enter the details based on the authentication you want to use.
OAUTH 2.0 - Authorization Code
Client ID : The client ID used for requesting access tokens.
Scopes : A comma-separated list of desired scopes.
Client Secret : Secret Manager Secret containing the client secret for the connected app you created.
Authorization URL : Enter the URL for authorization, such as https://account.docusign.com/oauth/auth for production account or https://account-d.docusign.com/oauth/auth for sandbox account.
OAuth 2.0 - JWT Bearer
Connected App Consumer Key :The consumer key provided for the connected app you created.
Username : The username associated with the connected app you created.
Private Key : Secret Manager Secret containing the contents of the private key file. The private key should match the public key/certificate provided to Connector.
Connection configuration samples
This section lists the sample values for the various
fields that you configure when creating the connection.
OAUTH 2.0 - Authorization Code connection type
Field name
Details
Location
us-central1
Connector
DocuSign
Connector version
1
Connection Name
gcp-docusign-new-auth
Enable Cloud Logging
No
UseSandbox
Yes
Service Account
123456789012-compute@developer.gserviceaccount.com
Authentication
OAuth 2.0 - Authorization code
Client Id
67dxxxxx-xxxx-xxxx-xxxx-xxxxxxxcb79
Scopes
signature
Client secret
CLIENT_SECRET
Secret Version
1
Authorization URL
https://account-d.docusign.com/oauth/auth
OAuth 2.0 - JWT Bearer connection type
Field name
Details
Location
us-central1
Connector
DocuSign
Connector version
1
Connection Name
gcp-docusign-token
Enable Cloud Logging
No
UseSandbox
Yes
Service Account
123456789012-compute@developer.gserviceaccount.com
Authentication
OAuth 2.0 - JWT Bearer
Connected App Consumer Key
67dxxxxx-xxxx-xxxx-xxxx-xxxxxxxcb79
Username
USER_NAME
Private Key
PRIVATE_KEY
Secret Version
1
Entities, operations, and actions
All the Integration Connectors provide a layer of abstraction for the objects of
the connected application. You can access an application's objects only through
this abstraction. The abstraction is exposed to you as entities, operations, and actions.
Note: You can view the entities, operations, and actions of a
connector in the Connectors task .
Entity: An entity can be thought of as an object, or a collection of properties, in the
connected application or service. The definition of an entity differs from a connector to a
connector. For example, in a database connector, tables are the entities, in a
file server connector, folders are the entities, and in a messaging system connector,
queues are the entities.
However, it is possible that a connector doesn't support or have any entities, in which case the
Entities list will be empty.
Operation: An operation is the activity that you can perform on an entity. You can perform
any of the following operations on an entity:
List
Get
Create
Update
Delete
Selecting an entity from the available list, generates a list of
operations available for the entity. For a detailed description of the operations, see the Connectors task's
entity operations .
However, if a connector doesn't support any of the entity operations, such unsupported
operations aren't listed in the Operations list.
Action: An action is a first class function that is made available to the integration
through the connector interface. An action lets you make changes to an entity or entities, and
vary from connector to connector. Normally, an action will have some input parameters, and an output
parameter. However, it is possible
that a connector doesn't support any action, in which case the Actions list will be empty.
Note: All entities and actions will have a schema associated with them. For example, an action schema will have the parameter details such as; the parameter
names, and its corresponding data type. The schema (metadata) for entities and actions is fetched by the connection at
runtime from your backend. If there are any updates to the schema, such updates won't be
automatically reflected in your existing connections; you must manually refresh the schema. To refresh
the schema for a connection, open the Connection details page of the connection, and then click
Refresh connection schema .
System limitations
The DocuSign connector can process 3 transactions per second,
per node ,
and throttles any transactions
beyond this limit.
By default, Integration Connectors allocates 2 nodes (for better availability) for a connection.
For information on the limits applicable to Integration Connectors, see Limits .
Note: The number of Integration Connectors nodes will autoscale dynamically
based on your usage. However, if you want to reserve capacity for large volumes without
waiting for autoscaling, you can adjust the minimum node value for a connection. More
nodes are required to process more transactions for a connection. Conversely, fewer nodes
are required if a connection processes fewer transactions. To configure the node
values, do the following:
If you are a pay-as-you-go customer, configure the minimum and maximum node value
in the edit connection page.
If you are a subscription based
customer, contact support .
The maximum transactions that a node can handle depends on various factors. So, before adjusting the minimum nodes for better throughput,
it is recommended you check if your backend systems are set up optimally to handle the required traffic.
Actions
This section lists all the actions supported by the DocuSign connection.
CreateAndSendEnvelope action
Creates and sends an envelope or creates a draft envelope.
Input parameters of the CreateAndSendEnvelope action
Parameter name
Data type
Required
Description
FileName
String
Yes
The name of the document.
DocumentId
String
Yes
ID for the document.
EmailSubject
String
Yes
The subject line for the email.
Content
String
Yes
The content in the file.
SignersEmail
String
No
The Email IDs of the document signers.
SignersRecipientId
String
No
The Recipient IDs of the signers.
CcRecipientId
String
No
The Recipient IDs of the recipents who are copied in the email.
CcEmail
String
No
The Email IDs of the recipents who are copied in the email.
Status
String
No
The status of the envelope. Set the status to "sent" to send the envelope to recipients.
CustomFieldAggregate
String
No
You can use the following coloumns: CustomFieldName, CustomFieldId, CustomFieldShow, CustomFieldRequired, CustomFieldValue, CustomFieldConfiguration, and CustomFieldListItems.
SignersName
String
No
Name of the document signers.
CcName
String
No
Name of the Cc recipients.
For example on how to configure the CreateAndSendEnvelope action,
see Examples .
Action examples
This section describes how to perform some of the actions in this connector.
Example - CreateAndSendEnvelope
This action creates and sends an envelope or creates a draft envelope.
In the Configure connector task dialog, click Actions .
Select the CreateAndSendEnvelope action, and then click Done .
In the Task Input section of the Connectors task, click
connectorInputPayload and then enter a value similar to the following in the
Default Value field:
{
"EmailSubject": "Please Sign this Document",
"FileName": "test.txt\ntest.pdf",
"SignersEmail": "cloudysanfrancisco@gmail.com",
"SignersRecipientId": "53386460",
"CcRecipientId": "67173451",
"CcEmail": "baklavainthebalkans@gmail.com",
"DocumentId": "1",
"Status": "sent",
"CustomFieldAggregate": "CustomFieldName",
"ContentBytes": "abcd***",
"HasBytes": true,
"SignersName": "\"test\"",
"CcName": "\"test\"",
"Content": "test content in file"
}
If the action is successful, the
connector task's connectorOutputPayload response
parameter will have a value similar to the following:
[{
"Success":"true",
"envelopeid":"542a77ff-b533-4b39-9d82-e397ef5a70c9",
"uri":"/envelopes/542a77ff-b533-4b39-9d82-e397ef5a70c9",
"statusdatetime":"2025-04-09T12:33:47.1130000Z",
"status":"sent",
"customfieldaggregate": "CustomFieldName"
}]
Entity operation examples
This section shows how to perform some of the entity operations in this connector.
The value for an Entity ID should be passed directly, such as 16ab549b-95d7-47cb-b557-c2476ef62d9d . The ID 16ab549b-95d7-47cb-b557-c2476ef62d9d is the unique primary key value that must be passed.
Example - LIST Operation for Entity "Accounts"
In the Configure connector task dialog, click Entities .
Select Accounts from the Entity list.
Select the LIST operation, and then click
Done .
Task Input section of the Connectors task, you can set the
filterClause as per your requirement.
Example - LIST Operation for Entity "Documents"
In the Configure connector task dialog, click Entities .
Select Documents from the Entity list.
Select the LIST operation, and then click
Done .
Task Input section of the Connectors task, you can set the
filterClause as per your requirement.
Example - LIST Operation for Entity "Envelopes"
In the Configure connector task dialog, click Entities .
Select Envelopes from the Entity list.
Select the LIST operation, and then click
Done .
Task Input section of the Connectors task, you can set the
filterClause as per your requirement.
Example - LIST Operation for Entity "Folders"
In the Configure connector task dialog, click Entities .
Select Folders from the Entity list.
Select the LIST operation, and then click
Done .
Task Input section of the Connectors task, you can set the
filterClause as per your requirement.
Example - LIST Operation for Entity "Groups"
In the Configure connector task dialog, click Entities .
Select Groups from the Entity list.
Select the LIST operation, and then click
Done .
Task Input section of the Connectors task, you can set the
filterClause as per your requirement.
Example - LIST Operation for Entity "Users"
In the Configure connector task dialog, click Entities .
Select Users from the Entity list.
Select the LIST operation, and then click
Done .
Task Input section of the Connectors task, you can set the
filterClause as per your requirement.
You can perform LIST operations on the following entities as well:
UserInfo
UserSignatures
Workspaces
Recipients
AccountBrands
AccountCustomFields
EnvelopeTemplates
EnvelopeAttachments
EnvelopeConsumerDisclosures
CloudStorageProviders
CustomTabs
Locks
GroupBrands
GroupUsers
PowerForms
RecipientTabs
SigningGroups
SigningGroupUsers
Templates
Example - GET single record for Entity "Accounts"
In the Configure connector task dialog, click Entities .
Select Accounts from the Entity list.
Select the GET operation, and then click
Done .
To set the entity ID, in
the Data Mapper section of the Data Mapping , click on Open Data Mapping Editor and
then enter 2.4578824E7 in the Input Value field and choose the EntityId as Local variable.
Example - GET single record for Entity "Documents"
In the Configure connector task dialog, click Entities .
Select Documents from the Entity list.
Select the LIST operation, and then click
Done .
To set the Filter Clause, in
the Data Mapper section of the Data Mapping , click on Open Data Mapping Editor and
then enter Type='envelopes' AND Id='8e18be14-3254-4cbe-947d-f0d1cd62f5f8' in the Input Value field and choose the Filter Clause as Local variable.
Example - GET single record for Entity "Envelopes"
In the Configure connector task dialog, click Entities .
Select Envelopes from the Entity list.
Select the GET operation, and then click
Done .
To set the entity ID, in
the Data Mapper section of the Data Mapping , click on Open Data Mapping Editor and
then enter 8e18be14-3254-4cbe-947d-f0d1cd62f5f87 in the Input Value field and choose the EntityId as Local variable.
Example - GET single record for Entity "Folders"
In the Configure connector task dialog, click Entities .
Select Folders from the Entity list.
Select the GET operation, and then click
Done .
To set the entity ID, in
the Data Mapper section of the Data Mapping , click on Open Data Mapping Editor and
then enter 05f76d13-a513-492b-8c58-176702768db0 in the Input Value field and choose the EntityId as Local variable.
Example - GET single record for Entity "Groups"
In the Configure connector task dialog, click Entities .
Select Groups from the Entity list.
Select the GET operation, and then click
Done .
To set the entity ID, in
the Data Mapper section of the Data Mapping , click on Open Data Mapping Editor and
then enter 1.4167231E7 in the Input Value field and choose the EntityId as Local variable.
Example - GET single record for Entity "Users"
In the Configure connector task dialog, click Entities .
Select Users from the Entity list.
Select the GET operation, and then click
Done .
To set the entity ID, in
the Data Mapper section of the Data Mapping , click on Open Data Mapping Editor and
then enter 16ab549b-95d7-47cb-b557-c2476ef62d9d in the Input Value field and choose the EntityId as Local variable.
You can perform GET operations on the following entities as well:
UserInfo
UserSignatures
Workspaces
Recipients
AccountBrands
AccountCustomFields
EnvelopeTemplates
EnvelopeAttachments
EnvelopeConsumerDisclosures
CloudStorageProviders
CustomTabs
Locks
GroupBrands
GroupUsers
RecipientTabs
SigningGroups
SigningGroupUsers
Templates
Create connections using Terraform
You can use the Terraform
resource to create a new connection.
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
To view a sample terraform template for connection creation, see sample template .
When creating this connection by using Terraform, you must set the following variables in your Terraform configuration file:
Parameter name
Data type
Required
Description
proxy_enabled
BOOLEAN
False
Select this checkbox to configure a proxy server for the connection.
proxy_auth_scheme
ENUM
False
The authentication type to use to authenticate to the ProxyServer proxy. Supported values are: BASIC, DIGEST, NONE
proxy_user
STRING
False
A user name to be used to authenticate to the ProxyServer proxy.
proxy_password
SECRET
False
A password to be used to authenticate to the ProxyServer proxy.
Use the DocuSign connection in an integration
After you create the connection, it becomes available in both
Apigee Integration and Application Integration. You can use the connection
in an integration through the Connectors task.
To understand how to create and use the Connectors task in Apigee Integration, see Connectors task .
To understand how to create and use the Connectors task in Application Integration, see Connectors task .
Get help from the Google Cloud community
You can post your questions and discuss this connector in the Google Cloud
community at Cloud Forums .
What's next
Understand how to suspend and resume a connection .
Understand how to monitor connector usage .
Understand how to view connector logs .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
