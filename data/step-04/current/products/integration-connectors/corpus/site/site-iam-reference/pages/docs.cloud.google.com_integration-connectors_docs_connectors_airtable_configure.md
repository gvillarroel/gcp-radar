---
title: "Airtable \_|\_ Integration Connectors \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/integration-connectors/docs/add-connector-iam-conditions
source_metadata:
  url: https://docs.cloud.google.com/integration-connectors/docs/connectors/airtable/configure
  title: "Airtable \_|\_ Integration Connectors \_|\_ Google Cloud Documentation"
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
Airtable
The Airtable connector lets you perform insert, delete, update, and read operations on Airtable data.
Supported versions
This connector supports Airtable API version v0.
Before you begin
Before using the Airtable connector, do the following tasks:
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
For information about how to create an Airtable workspace, see Getting started with Airtable .
For information about Airtable API, see Airtable API Reference .
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
Connector : Select Airtable from the drop down list of available Connectors.
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
Base Id : ID of the Airtable base. If a Base ID is specified, only the associated metadata is retrieved. If the Airtable Metadata API is enabled, you needn't specify the Base ID.
Base Name : The schema to use that corresponds to the Airtable base. Use this field only if the Airtable Metadata API is enabled.
Display Object Ids : Select this option to replace schema, table, view and column names with their corresponding internal ID.
Path Delimiter : Specify the character to use as the delimiter for building column names based on paths.
User Defined Views : Specify the filepath of the JSON configuration file that contains your custom views.
Value Delimiter : Specify the separator to use for values of an array as a single string.
Optionally, click + ADD LABEL to add a label to the connection in the form of a key/value pair.
Click NEXT .
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
In the Authentication section, enter the authentication details.
Select an Authentication type and enter the relevant details.
The following authentication type is supported by the Airtable connection:
Personal Access Token
To understand how to configure these authentication types, see Configure authentication .
Click NEXT .
Review : Review your connection and authentication details.
Click Create .
Configure authentication
Enter the details based on the authentication you want to use.
Personal Access Token : Secret manager secret containing the personal access token.
Secret version : Secret version for the secret selected.
Connection configuration samples
This section lists the sample values for the various
fields that you configure when creating the connection.
Personal Access Token connection type
Field name
Details
Location
europe-west1
Connector
Airtable
Connector version
1
Connection Name
airtable-connection-new
Enable Cloud Logging
Yes
Service Account
SERVICE_ACCOUNT_NAME@PROJECT_ID.iam.gserviceaccount.com
Base Id
appK32XeZXReEQzja
Base Name
Automobile Test Data
Path Delimiter
NA
User Defined Views
NA
Value Delimiter
NA
Minimum number of nodes
2
Maximum number of nodes
50
Personal Access Token
Yes
Personal Access Token
projects/617888XXXX/secrets/airtable-new-conn/versions/3
Secret version
3
System limitations
The Airtable connector can process a maximum of 3 transactions per second,
per node , and throttles any transactions beyond this limit.
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
Use the Airtable connection in an integration
After you create the connection, it becomes available in both
Apigee Integration and Application Integration. You can use the connection
in an integration through the Connectors task.
To understand how to create and use the Connectors task in Apigee Integration, see Connectors task .
To understand how to create and use the Connectors task in Application Integration, see Connectors task .
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
Entity operation examples
This section shows how to perform some of the entity operations in this connector.
Example - List operation for the Contact Data (Records) entity
In the Configure connector task dialog, click Entities .
Select Contact Data from the Entity list.
Select the List operation, and then click
Done .
Task Input section of the Connectors task, you can set the
filterClause as per the customer requirement.
Always specify the filter clause value within the single quotes (').
You can perform list operation on the following entities as well:
Contacts Data.Main View, Contacts Data.Calendar, Contacts Data.Kanban, Contacts Data.Gallery, Contacts Data.List, and Contacts Data_Collaborators
Example - Get record for the Contact Data (Records) entity
In the Configure connector task dialog, click Entities .
Select Contact Data from the Entity list.
Select the GET operation, and then click
Done .
Set the entity ID to "recg7qjPRMa7DBwIb" which is the Key to be passed. To set the entity ID, in
the Data Mapper section of the Data Mapping , click Open Data Mapping Editor and
then enter "recg7qjPRMa7DBwIb" in the Input Value field and choose the EntityId as local variable.
Here, Entity Id: "recg7qjPRMa7DBwIb" is the unique primary key value and it must be passed directly.
If the entity has a composite primary key, you can specify
a filter clause .
You can perform the get operation on the following entities as well:
Contacts Data.Main View, Contacts Data.Calendar, Contacts Data.Kanban, Contacts Data.Gallery, Contacts Data.List, and Contacts Data_Collaborators.
Example - Delete a record of the Contact Data (Records) entity
In the Configure connector task dialog, click Entities .
Select Contact Data from the Entity list.
Select the Delete operation, and then click
Done .
Set the entity ID to "recg7qjPRMa7DBwIb" which is the Key to be passed.To set the entity ID, in
the Data Mapper section of the Data Mapping , click Open Data Mapping Editor and
then enter "recg7qjPRMa7DBwIb" in the Input Value field and choose the EntityId as Local variable.
If the entity has a composite primary key, you can specify
a filter clause .
Example - Create operation for the Contact Data (Records) entity
In the Configure connector task dialog, click Entities .
Select Contact Data from the Entity list.
Select the Create operation, and then click Done .
In the Data Mapper section of the Data Mapping task, click
Open Data Mapping Editor and then enter a value similar to the following in the
Input Value field and choose the EntityId/ConnectorInputPayload as Local variable.
{
"First Name": "Demo4",
"Last Name": "Alex",
"Email": "cloudysanfrancisco@gmail.com",
"DOB": "2000-04-14",
"Office": "Denver",
"Phone Number": "1-175-432-1437",
"Current Brand": "Mercedes"
}
If the integration is successful, your connector task's connectorOutputPayload response
parameter will have a value similar to the following:
{
"Internal_Id": "recg7qjPRMa7DBwIb"
}
<pre>
function helloWorld() {
alert('Hello, world! This sentence is so long that it wraps onto a second
line.');
}
/n
<h3>Example title</h3>
</pre>
Example - Update operation for the Contact Data (Records) entity
In the Configure connector task dialog, click Entities .
Select ContactData from the Entity list.
Select the Update operation, and then click Done .
In the Data Mapper section of the Data Mapping task, click
Open Data Mapping Editor and then enter a value similar to the following in the
Input Value field and choose the EntityId/ConnectorInputPayload/FilterClause as Local variable.
{
"Phone Number": "1-175-432-4312",
"Current Brand": "Honda"
}
Instead of specifying the entityId , you can also set the
filterClause to Internal_Id='reckqGnFusjDlnmvs' .
If the integration is successful, your connector task's connectorOutputPayload output variable:
{
"Internal_Id": "reckqGnFusjDlnmvs"
}
Example - Update operation for the Contact Data (Attachment) entity
In the Configure connector task dialog, click Entities .
Select Contact Data from the Entity list.
Select the Update operation, and then click Done .
In the Data Mapper section of the Data Mapping task, click
Open Data Mapping Editor and then enter a value similar to the following in the
Input Value field and choose the EntityId/ConnectorInputPayload/FilterClause as Local variable.
{
"Attachment": "[{\"url\":\"https://media.istockphoto.com/id/2086323995/photo/global-communication-east-asia.jpg?s=2048x2048&w=is&k=20&c=Z50lesspQQzxWug0m11QrPZMOUzMeTufgnLHh_3COy4=\",\"filename\":\"BMW\"}]"
}
Instead of specifying the entityId , you can also set the
filterClause to Internal_Id='reckqGnFusjDlnmvs' .
If the integration is successful, your connector task's connectorOutputPayload output variable:
{
"Internal_Id": "recoGHHp8y11aSx0E"
}
Example - Update operation for the Contact Data (Checkbox) entity
In the Configure connector task dialog, click Entities .
Select Contact Data from the Entity list.
Select the Update operation, and then click Done .
In the Data Mapper section of the Data Mapping task, click
Open Data Mapping Editor and then enter a value similar to the following in the
Input Value field and choose the EntityId/ConnectorInputPayload/FilterClause as Local variable.
{
"Checkbox": true
}
Instead of specifying the entityId , you can also set the
filterClause to Internal_Id='reckqGnFusjDlnmvs' .
If the integration is successful, your connector task's connectorOutputPayload output variable:
{
"Internal_Id": "recoGHHp8y11aSx0E"
}
Example - Update operation for the Contact Data (Number) entity
In the Configure connector task dialog, click Entities .
Select ContactData from the Entity list.
Select the Update operation, and then click Done .
In the Data Mapper section of the Data Mapping task, click
Open Data Mapping Editor and then enter a value similar to the following in the
Input Value field and choose the EntityId/ConnectorInputPayload/FilterClause as Local variable.
{
"Number": 1001.0
}
Instead of specifying the entityId , you can also set the
filterClause to Internal_Id='reckqGnFusjDlnmvs' .
If the integration is successful, your connector task's connectorOutputPayload output variable:
{
"Internal_Id": "recoGHHp8y11aSx0E"
}
Example - Update operation for the Contact Data (DateField) entity
In the Configure connector task dialog, click Entities .
Select ContactData from the Entity list.
Select the Update operation, and then click Done .
In the Data Mapper section of the Data Mapping task, click
Open Data Mapping Editor and then enter a value similar to the following in the
Input Value field and choose the EntityId/ConnectorInputPayload/FilterClause as Local variable.
{
"DOB": "2000-04-14"
}
Instead of specifying the entityId , you can also set the
filterClause to Internal_Id='reckqGnFusjDlnmvs' .
If the integration is successful, your connector task's connectorOutputPayload output variable:
{
"Internal_Id": "recoGHHp8y11aSx0E"
}
Example - Update operation for the Contact Data (Text) entity
In the Configure connector task dialog, click Entities .
Select ContactData from the Entity list.
Select the Update operation, and then click Done .
In the Data Mapper section of the Data Mapping task, click
Open Data Mapping Editor and then enter a value similar to the following in the
Input Value field and choose the EntityId/ConnectorInputPayload/FilterClause as Local variable.
{
"Singlelinetext": "Airtable Application",
"Long text": "Airtable is a cloud-based collaboration platform that combines the features of a spreadsheet with the capabilities of a database. "
}
Instead of specifying the entityId , you can also set the
filterClause to Internal_Id='reckqGnFusjDlnmvs' .
If the integration is successful, your connector task's connectorOutputPayload output variable:
{
"Internal_Id": "recoGHHp8y11aSx0E"
}
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
