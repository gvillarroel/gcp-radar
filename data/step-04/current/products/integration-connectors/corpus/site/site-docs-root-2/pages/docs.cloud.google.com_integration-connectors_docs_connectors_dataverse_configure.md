---
title: "Dataverse \_|\_ Integration Connectors \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/integration-connectors/docs/connectors/dataverse/configure
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/integration-connectors/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/integration-connectors/docs/connectors/dataverse/configure
  title: "Dataverse \_|\_ Integration Connectors \_|\_ Google Cloud Documentation"
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
Dataverse
The Dataverse connector lets you perform insert, delete, update, and read operations on Custom Tables.
Before you begin
Before using the Dataverse connector, do the following tasks:
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
Connector : Select Dataverse from the drop down list of available Connectors.
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
Azure Tenant : The Microsoft Online tenant being used to access data. If not specified, your default tentant will be used.
Organization URL : The URL to your Microsoft Dataverse data. For instance, https://abc123.crm.dynamics.com/.
Tenant : The Microsoft tenant being used to access data. If not specified, your default tenant is used.
Optionally, in the API version field, specify the API version to use. If a new version of the API is released, you can specify that version in this field.
Optionally, to enable the provider to use display names for operations, select Use Display Names .
Schema : Select the schema to use.
Optionally, click + Add label to add a label to the Connection in the form of a key/value pair.
In the SSL Configuration section, select a trust model:
Public : Public certificates picked from the default trust store.
Private : Self-signed certificates or certificates issued by private certificate authorities
Insecure Connection : Trust all certificates. We recommend using either a public or private trust model.
In the Authentication section, enter the authentication details.
To understand how to configure these authentication types, see Configure authentication .
Click Next .
Review : Review your connection and authentication details.
Click Create .
Configure authentication
Enter the details based on the authentication you want to use.
Client ID : The client ID used for requesting access tokens.
Scope : A comma-separated list of desired scopes.
Client secret : The client secret used for requesting access tokens.
Authorization URL : Authorization URL generated when creating client.
System limitations
The Dataverse connector can process 25 transactions per second,
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
Actions
The Dataverse connector provides actions such as ListAssociations and ListNavigationProperties. To understand how to configure the
actions, see Action examples .
Action examples
This section describes how to perform some of the actions in this connector.
Example - ListAssociations
In the Configure connector task dialog, click Actions .
Select the ListAssociations action, and then click Done .
In the Task Input section of the Connectors task, click
connectorInputPayload and then enter a value similar to the following in the
Default Value field:
{
FromId : "etywe325632io100" ,
FromTable : "Customers" ,
"NavigationProperty" : "asyncoperations"
}
Entity operation examples
Example - List all the Custom Table Records
This example lists all the Records in the User defined Table.
In the Configure connector task dialog, click Entities .
Select Custome Table Name from the Entity list.
Select the LIST operation, and then click
Done .
Example - Get User based on Id
This example gets the User having newTableId as 568ea947-e03d-ef11-8409-7c1e5217e912 from the Users entity.
In the Configure connector task dialog, click Entities .
Select Custom Table from the Entity list.
Select the GET operation, and then click
Done .
In the Task Input section of the Connectors task, click entityId and
then enter 568ea947-e03d-ef11-8409-7c1e5217e912 in the Default Value field.
Here, newTableId is the primary key value of the Custom Table entity.
Click Done .
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
database
STRING
False
The name of the SAP HANA database.
browsable_schemas
STRING
False
This property restricts the schemas reported to a subset of the available schemas. For example, BrowsableSchemas=SchemaA,SchemaB,SchemaC.
include_system_objects
BOOLEAN
False
Set IncludeSystemObjects to True to fetch Hana System schema and tables.
include_table_types
BOOLEAN
False
If set to true, the provider will report the types of individual tables and views.
session_variables
STRING
False
A comma-separated list of session variables to set on the current connection.
enable_logging
ENUM
False
Enables verbosity for logging during a connection by selecting a level between 1 (least verbose) and 5 (most verbose). This feature can aid in troubleshooting error messages or other unexpected behavior. However, please be aware that this option will log all communication details, including requests, responses, and SSL certificates, between the connector and backend. Therefore, it is not advisable to utilize this function in a live production environment. Supported values are: 1, 2, 3, 4, 5
Use the Dataverse connection in an integration
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
