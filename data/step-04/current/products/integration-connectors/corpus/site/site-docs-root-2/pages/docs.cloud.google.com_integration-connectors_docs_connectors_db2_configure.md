---
title: "IBM Db2 \_|\_ Integration Connectors \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/integration-connectors/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/integration-connectors/docs/connectors/db2/configure
  title: "IBM Db2 \_|\_ Integration Connectors \_|\_ Google Cloud Documentation"
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
IBM Db2
The IBM DB2 connector lets you perform insert, delete, update, and read operations on an IBM Db2 database.
Supported versions
The minimum supported version for this connector is IBM Db2 version 8. This connector supports IBM Db2 for LUW (Linux, Unix, and Windows) and IBM Db2 for iSeries (AS/400) but does not support IBM Db2 for z/OS.
Before you begin
Before using the IBM DB2 connector, do the following tasks:
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
Connector : Select IBM DB2 from the drop down list of available Connectors.
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
Database : The name of the DB2 database.
Browsable Schemas : This property restricts the schemas reported to a subset of the available schemas. For example, BrowsableSchemas=SchemaA,SchemaB,SchemaC.
Switch Mode : This property allows you to specify a switching mode to select a server from AlternateServers as the active server.
Switch Strategy : This property allows you to specify a switching strategy to select a server from AlternateServers as the active server.
Optionally, click + ADD LABEL to add a label to the Connection in the form of a key/value pair.
Optionally, if you want to use SSL, select Enable SSL . This displays the SSL configuration details.
Select a trust store type. It can be either Public , Private , or Insecure Connection .
Select the certificates as displayed based on your trust store selection.
If you are using mTLS, select the key store certificates in the Key Store section.
Note:
All your certificates must be X.509 certificates and must be in PEM (Privacy Enhanced Mail) format.
You can't directly select a certificate when configuring SSL. You must store all
your certificates and private keys as a Secret Manager Secret, and then
select the required secret during SSL configuration.
Click NEXT .
In the Destinations section, enter details of the remote host (backend system) you want to connect to.
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
To enter additional destinations, click +ADD DESTINATION .
Click NEXT .
In the Authentication section, enter the authentication details.
Select an Authentication type and enter the relevant details.
The following authentication types are supported by the DB2 connection:
Username and password
To understand how to configure these authentication types, see Configure authentication .
Click NEXT .
Review : Review your connection and authentication details.
Click Create .
Configure authentication
Enter the details based on the authentication you want to use.
Username and password
Username : The username to authenticate to the connector.
Password : Secret Manager Secret containing the password associated with the connector.
Secret version : The version of the secret that contains the password.
Auth Scheme : Secret Manager Secret containing the password associated with the connector.
Select USRIDPWD to use user id and password to authenticate.
Select EUSRIDPWD to use an encrypted user id and password to authenticate.
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
The IBM DB2 connector can process 40 transactions per second,
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
Supported data types
The following are the data types supported by the IBM DB2 connector:
DOUBLE
LONGVARCHAR(n)
TIME
SMALLINT
DECIMAL(p, s)
INTEGER
TIMESTAMP
DATE
FLOAT
BLOB
CHAR(n)
VARCHAR(n)
REAL
VARBINARY
BOOLEAN
GRAPHIC
VARGRAPHIC
BIGINT
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
True
The name of the DB2 database.
browsable_schemas
STRING
False
This property restricts the schemas reported to a subset of the available schemas. For example, BrowsableSchemas=SchemaA,SchemaB,SchemaC.
switch_mode
ENUM
False
This property allows you to specify a switching mode to select a server from AlternateServers as the active server. Supported values are: None, Failover, LoadBalance
switch_strategy
ENUM
False
This property allows you to specify a switching strategy to select a server from AlternateServers as the active server. Supported values are: Sequence, Random, BestResponse
use_ssl
BOOLEAN
False
This field sets whether SSL is enabled.
auth_scheme
ENUM
False
This field sets the authentication mechanism that the provider will use to authenticate with DB2.
Actions
This connector supports execution of the following actions:
User-defined stored procedures and functions. If you have any stored procedures and functions in your backend, those are listed
in the Actions column of the Configure connector task dialog.
Custom SQL queries. To execute custom SQL queries, the connector provides the Execute custom query action.
To create a custom query, follow these steps:
Follow the detailed instructions to add a connectors task .
When you configure the connector task , in the type of action you want to perform, select Actions .
In the Action list, select Execute custom query , and then click Done .
Expand the Task input section, and then do the following:
In the Timeout after field, enter the number of seconds to wait till the query executes. Default value: 180 seconds.
In the Maximum number of rows field, enter the maximum number of rows to be returned from the database. Default value: 25 .
To update the custom query, click Edit Custom Script . The Script editor dialog opens.
In the Script editor dialog, enter the SQL query and click Save .
You can use a question mark (?) in a SQL statement to represent a single parameter that must be specified in the query parameters list. For example, the following SQL query selects all rows from the Employees table that matches the values specified for the LastName column:
SELECT * FROM Employees where LastName=?
Note: Data manipulation language (DML) and data definition language (DDL) statements are supported.
If you've used question marks in your SQL query, you must add the parameter by clicking + Add Parameter Name for each question mark. While executing the integration, these parameters replace the question marks (?) in the SQL query sequentially. For example, if you have added three question marks (?), then you must add three parameters in order of sequence.
To add query parameters, do the following:
From the Type list, select the data type of the parameter.
In the Value field, enter the value of the parameter.
To add multiple parameters, click + Add Query Parameter .
The Execute custom query action does not support array variables.
Action examples
Example - Find the greater value
This example shows how to execute a user-defined function. The find_greater
function in this example, compares two integers and returns the integer which is greater.
In the Configure connector task dialog, click Actions .
Select the find_greater action, and then click Done .
In the Task Input section of the Connectors task, click
connectorInputPayload and then enter a value similar to the following in the
Default Value field:
{
"$1" : 1.0 ,
"$2" : 5.0
}
If the action execution is successful, the connector task's connectorOutputPayload
field will have a value similar to the following:
[{
"bignum" : 5.0
}]
Entity operation examples
Example - List records of an entity
This example lists the records of the Users entity.
In the Configure connector task dialog, click Entities .
Select Users from the Entity list.
Select the List operation, and then click
Done .
In the Task Input section of the Connectors task, you can set the
filterClause as per your requirement.
For example, setting the filter clause to
employeeCode='5100' and startDate='2010-01-01 00:00:00' , lists only those records
whose employeeCode is 5100 and startDate is 2010-01-01 00:00:00.
Example - Get a single record from an entity
This example fetches a record from the Users entity.
In the Configure connector task dialog, click Entities .
Select User from the Entity list.
Select the Get operation, and then click
Done .
In the Task Input section of the Connectors task, click entityId and
then enter 103032 in the Default Value field.
Here, 103032 is the primary key value of the Users entity.
Example - Delete a record from an entity
This example deletes a record from the Users entity.
In the Configure connector task dialog, click Entities .
Select Users from the Entity list.
Select the Delete operation, and then click
Done .
In the Task Input section of the Connectors task, click entityId and
then enter 113132 in the Default Value field.
Alternately, if the entity has composite primary keys instead of specifying the entityId , you can
set the filterClause . For example, employeeCode='5100' and startDate='2010-01-01 00:00:00' .
Example - Create a record in an entity
This example creates a record in the Users entity.
In the Configure connector task dialog, click Entities .
Select Users from the Entity list.
Select the Create operation, and then click Done .
In the Task Input section of the Connectors task, click
connectorInputPayload and then enter a value similar to the following in the
Default Value field:
{
"employeeCode" : "5100" ,
"startDate" : "2010-01-01 00:00:00.0" ,
"country" : "US"
}
If the integration is successful, the connector task's connectorOutputPayload field will
have the response of the create operation.
Example - Update a record in an entity
This example updates a record in the Users entity.
In the Configure connector task dialog, click Entities .
Select Users from the Entity list.
Select the Update operation, and then click Done .
In the Task Input section of the Connectors task, click
connectorInputPayload and then enter a value similar to the following in the
Default Value field:
{
"country" : "IN"
}
In the Task Input section of the Connectors task, click entityId and
then enter 113132 in the Default Value field.
Alternately, if the entity has composite primary keys instead of specifying the entityId , you can
set the filterClause . For example, employeeCode='5100' and startDate='2010-01-01 00:00:00' .
If the integration is successful, the connector task's connectorOutputPayload field will
have the response of the update operation.
Use the IBM DB2 connection in an integration
After you create the connection, it becomes available in both
Apigee Integration and Application Integration. You can use the connection
in an integration through the Connectors task.
To understand how to create and use the Connectors task in Apigee Integration, see Connectors task .
To understand how to create and use the Connectors task in Application Integration, see Connectors task .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
