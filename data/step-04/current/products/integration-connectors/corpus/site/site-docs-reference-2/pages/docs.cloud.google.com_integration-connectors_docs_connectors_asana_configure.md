---
title: "Asana \_|\_ Integration Connectors \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/integration-connectors/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/integration-connectors/docs/connectors/asana/configure
  title: "Asana \_|\_ Integration Connectors \_|\_ Google Cloud Documentation"
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
Asana
Use the Asana connector to perform insert, delete, update, and read operations on Asana.
Before you begin
Before using the Asana connector, do the following tasks:
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
Click + Create new to open the Create Connection page.
In the Location section, choose the location for the connection.
Region : Select a location from the drop-down list.
Supported regions for connectors include:
For the list of all the supported regions, see Locations .
Click Next .
In the Connection Details section, complete the following:
Connector : Select Asana from the drop down list of available Connectors.
Connector version :Select the Connector version from the drop down list of available versions.
In the Connection Name field, enter a name for the Connection instance.
Connection names must meet the following criteria:
Connection names can use letters, numbers, or hyphens.
Letters must be lower-case.
Connection names must begin with a letter and end with a letter or number.
Connection names cannot exceed 49 characters.
Optionally, enter a Description for the connection instance.
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
(Optional) In the Advanced settings section, select the Use proxy checkbox to configure a proxy server for the connection and configure the following values:
Proxy Auth Scheme : Select the authentication type to authenticate with the proxy server. The following authentication types are supported:
Basic : Basic HTTP authentication.
Digest : Digest HTTP authentication.
Proxy User : A user name to be used to authenticate with the proxy server.
Proxy Password : The Secret manager secret of the user's password.
Proxy SSL Type : The SSL type to use when connecting to the proxy server. The following authentication types are supported:
Auto : Default setting. If the URL is an HTTPS URL, then the Tunnel option is used. If the URL is an HTTP URL, then the NEVER option is used.
Always : The connection is always SSL enabled.
Never : The connection is not SSL enabled.
Tunnel : The connection is through a tunneling proxy. The proxy server opens a connection to the remote host and traffic flows back and forth through the proxy.
In the Proxy Server section, enter details of the proxy server.
Click + Add destination .
Select a Destination Type .
Host address : Specify the hostname or IP address of the destination.
If you want to establish a private connection to your backend system, do the following:
Create a PSC service attachment .
Create an endpoint attachment and
then enter the details of the endpoint attachment in the Host address field.
Optionally, click + Add label to add a label to the Connection in the form of a key/value pair.
Click Next .
In the Authentication section, enter the authentication details.
Select an Authentication type and enter the relevant details.
The following authentication types are supported by the Asana connection:
Personal Access Token
OAuth 2.0 Authorization code
To understand how to configure these authentication types, see Configure authentication .
Click Next .
Review : Review your connection and authentication details.
Click Create .
Configure authentication
Enter the details based on the authentication you want to use.
Personal Access Token
Personal Access Token : A Personal Access Token (PAT) allows you to access Asana platform. For more information, see Personal access token .
Secret version: Secret Manager secret version for the PAT secret.
OAuth 2.0 Auth Code Grant
Client ID: The client ID to authenticate with Asana.
OAuth scopes: A comma-separated list of OAuth scopes. Provides access to all endpoints documented in the Asana API reference documentation. For information about the available scopes, see OAuth scopes in the Asana documentation.
Client secret: Select the Secret Manager secret .
You must create the Secret Manager secret before configuring this authorization.
Secret version: Secret Manager secret version for client secret.
For the Authorization code authentication type, after creating the connection, you
must perform a few additional steps for configuring authentication. For more information,
see Additional steps after connection creation .
Note: If you are using Authorization code authentication
type and have made any configuration changes in your Asana application, you must re-authorize your
Asana connection. To understand how to re-authorize, see
Re-authorization for Authorization code .
Additional steps after connection creation
If you selected OAuth 2.0 - Authorization code for
authentication, you must do the following additional steps after creating the connection:
In the Connections page ,
locate the newly created connection.
Notice that the Status for the new connector will be Authorization required .
Click Authorization required .
This shows the Edit authorization pane.
Copy the Redirect URI value to your external application.
Verify the authorization details.
Click Authorize .
If the authorization is successful, the connection status will be set to Active in the
Connections page .
Re-authorization for authorization code
If you are using Authorization code authentication type and have made any configuration changes in your Asana application,
you must re-authorize your Asana connection. To re-authorize a connection, perform the following steps:
Click on the required connection in the Connections page .
This opens the connection details page.
Click Edit to edit the connection details.
Verify the OAuth 2.0 - Authorization code details in the Authentication section.
If required, make the necessary changes.
Click Save . This takes you to the connection details page.
Click Edit authorization in the Authentication section. This shows the Authorize pane.
Click Authorize .
If the authorization is successful, the connection status will be set to Active in the Connections page .
System limitations
The Asana connector can process 90 transactions per minute ,
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
Use the Asana connection in an integration
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
Actions
The Asana connector supports actions, such as the following: AddDependenciesToTask, AddDependentsToTask, AddFollowers, AddProjectToTask, AddTagsToTask, AddTaskToSection, DownloadAttachment, DuplicateProject, DuplicateTask, RemoveDependenciesFromTask, RemoveDependentsFromTask, RemoveFollowers, RemoveProjectsFromTask, RemoveTagsFromTask, SetParentofTask, and UploadAttachment.
To understand how to configure the
actions, see Action examples .
Action examples
This section describes how to perform some of the actions in this connector.
Example - Add dependencies to a task
This example adds a dependency to a task.
In the Configure connector task dialog, click Actions .
Select the AddDependenciesToTask action, and then click Done .
In the Task Input section of the Connectors task, click
connectorInputPayload and then enter a value similar to the following in the
Default Value field:
{
"TaskId" : "12345678" ,
"Dependencies" : "12345678"
}
Entity operation examples
Example - List all the tasks
This example lists all the tasks in the Tasks entity.
In the Configure connector task dialog, click Entities .
Select Tasks from the Entity list.
Select the LIST operation, and then click
Done .
Example - Get tasks based on a project ID
This example gets the tasks with that match the project ID "xyz" from the Tasks entity.
In the Configure connector task dialog, click Entities .
Select Tasks from the Entity list.
Select the LIST operation, and then click
Done .
In the Task Input section of the Connectors task, click filterClause and
then enter ProjectId='xyz' in the Default Value field.
Example - Create a task
This example creates a task in the Tasks entity.
In the Configure connector task dialog, click Entities .
Select Tasks from the Entity list.
Select the Create operation, and then click Done .
In the Task Input section of the Connectors task, click
connectorInputPayload and then enter a value similar to the following in the
Default Value field:
{
"Name" : "Testing" ,
"ProjectId" : "1208019929422674"
}
If the integration is successful, your connector task's connectorOutputPayload field will have a
value similar to the following:
{
"Id" : "10032"
}
Example - Update a task in an entity
This example updates a task in the Tasks entity.
In the Configure connector task dialog, click Entities .
Select Tasks from the Entity list.
Select the Update operation, and then click Done .
In the Task Input section of the Connectors task, click
connectorInputPayload and then enter a value similar to the following in the
Default Value field:
{
"Assignee" : "1206551913340659"
}
In the Task Input section of the Connectors task, click entityId and
then enter 1010 in the Default Value field.
If the integration is successful, the connector task's connectorOutputPayload field will
have the response of the update operation.
{
"Id" : 1010
}
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
Configures a proxy server for the connection.
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
proxy_ssltype
ENUM
False
The SSL type to use when connecting to the ProxyServer proxy. Supported values are: AUTO, ALWAYS, NEVER, TUNNEL
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
