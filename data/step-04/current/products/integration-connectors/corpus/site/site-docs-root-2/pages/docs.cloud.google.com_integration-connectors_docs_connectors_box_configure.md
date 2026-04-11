---
title: "Box \_|\_ Integration Connectors \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/integration-connectors/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/integration-connectors/docs/connectors/box/configure
  title: "Box \_|\_ Integration Connectors \_|\_ Google Cloud Documentation"
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
Box
The Box connector lets you connect to a Box backend and use SQL to retrieve and update Box data.
Supported versions
This connector supports Box Content API version 2.0 .
Before you begin
Before using the Box connector, do the following tasks:
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
Connector : Select Box from the drop down list of available Connectors.
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
Impersonate User Mode : Specify the type of the user impersonation. It should be whether the User mode or the Admin mode.
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
Optionally, click + ADD LABEL to add a label to the Connection in the form of a key/value pair.
Click NEXT .
In the Authentication section, enter the authentication details.
Select an Authentication type and enter the relevant details.
The following authentication types are supported by the Box connection:
JWT authentication
OAuth 2.0 - Authorization code
Box JSON
OAuth 2.0 - Client credentials
To understand how to configure these authentication types, see Configure authentication .
Click NEXT .
Review : Review your connection and authentication details.
Click Create .
Configure authentication
Enter the details based on the authentication you want to use.
JWT authentication
Client ID : The client ID provided by Box for the app you created.
Client Secret : Secret Manager Secret containing the client secret for the app you created.
Secret version : The version of the client secret.
Private Key : Secret Manager Secret containing the contents of the private key file. The private key should match the public key/certificate provided to Connector.
Secret version : The version of the private key secret.
Private Key Password : The Secret Manager secret containing the password (paraphrase) of the private key file.
Secret version : The version of the private key password.
Box Application Access Level : The Application Access level for the Box app.
Enterprise Id/User Id : Enterprise Id if App level is enterprise and User Id if App Level is user
OAuth JWT Public Key Id : The Id of the public key for JWT.
Auth Scheme : Auth Scheme for the Box connector.
Initiate OAuth : Initiate the OAuth parameter for the Box connector.
OAuth JWT Cert Type : The OAuth JWT certificate type for the Box connector.
OAuth 2.0 - Authorization code
Client ID: The client ID provided by Box for the app you created.
Scopes: Permission scopes. For example, root_readonly . To understand
how the scopes work and to view all the available scopes for Box,
see Scopes .
Client secret: Select the Secret Manager secret .
Before you configure this authorization, you must create the Secret Manager secret.
Secret version: Secret Manager secret version for client secret.
Box JSON
Box JSON for JWT Auth : The secret that contains the contents of the JSON file provided by Box.
Secret version : The version of the JSON file secret.
OAuth 2.0 - Client credentials
OAuth Client ID : The client id provided by Box for the app you created.
Client Secret : Secret Manager Secret containing the client secret for the app you created.
Secret version : The version of the client secret.
Subject ID : The user subject for which the application is requesting delegated access.
Box Application Access Level : The application access level for the Box app.
For the Authorization code authentication type, after creating the connection, you
must perform a few additional steps for configuring authentication. For more information,
see Additional steps after connection creation .
Note: If you are using Authorization code authentication
type and have made any cofiguration changes in your Box application, you must re-authorize your
Box connection. To understand how to re-authorize, see
Re-authorization for Authorization code .
Connection configuration samples
Note: Before you create a Box connection, you must create a Box account. For more information, see Create a Box Account . After you create a Box account, you can create an application in the Box account and then use the parameters in the connection. For more information, see Create your first OAuth application .
This section lists the sample values for the various
fields that you configure when creating the connection.
OAuth JWT token method connection type
Field name
Details
Location
us-central1
Connector
Box
Connector version
1
Connection Name
box-conn
Enable Cloud Logging
yes
Service Account
XXXX@serviceaccount
Impersonate User Mode
User
Minimum number of nodes
2
Maximum number of nodes
2
Authentication
JWT Authentication
Client ID
XXXX
Client Secret
XXXX
Secret Version
1
Private key
XXXX
Secret Version
1
Private key Password
XXXX
Secret Version
1
Box Application Access level
Enterprise
Enterprise ID/User Id
XXXX
OAuth JWT Public Key Id
XXXX
Auth Scheme
OAuthJWT
Initiatiate OAuth
GETANDREFRESH
OAuth JWT Cert Type
PEMKEY_BLOB
You can access the Client ID, Client Secret, Box Application Access Level, and Enterprise Id/User Id from the Box account.
You can access the Private Key and Private Key Password from the Private keypair.json file that you downloaded. For
more information, see Public and Private keypair Information . Also, before you pass the private key password, replace the \n in the json file with a new line.
OAuth authorization code connection type
Field name
Details
Location
us-central1
Connector
Box
Connector version
1
Connection Name
box-conn
Enable Cloud Logging
yes
Service Account
XXXX@serviceaccount
Impersonate User Mode
User
Authorization
OAuth 2.0 - Authorization code
Minimum number of nodes
2
Maximum number of nodes
2
Client ID
XXXX
Scopes
root_readwrite
Client Secret
XXXX
Secret Version
1
For information about Box OAuth configuration, see Create your OAuth application .
Box Json for JWT Auth method connection type
Field name
Details
Location
us-central1
Connector
Box
Connector version
1
Connection Name
gcp-box-conn-new
Enable Cloud Logging
yes
Service Account
XXXX@serviceaccount
Impersonate User Mode
User
As User Id
XXXX
Minimum number of nodes
2
Maximum number of nodes
2
Authentication
Box JSON
Box JSON for JWT Auth
XXXX
Secret Version
1
You can use the Box account to set up Box Json for JWT auth. For information about how to set up Box Json for JWT, see
JWT token creation steps
Access the Box Json for JWT auth value from the Private keypair.json file that you downloaded. file. For more information, see Public and Private keypair Information . You must pass the complete contents of the .json file in the Box Json for JWT Auth field.
OAuth Client Credentials connection type
Field name
Details
Location
us-central1
Connector
Box
Connector version
1
Connection Name
oauth-clientcred-conn
Enable Cloud Logging
yes
Service Account
XXXX@serviceaccount
Impersonate User Mode
User
As User Id
XXXX
Minimum number of nodes
2
Maximum number of nodes
2
Authentication
OAuth Client Credentials
OAuth Client ID
XXXX
OAuth Client Secret
XXXX
Secret Version
1
Subject ID
XXXX
Box Application Access Level
enterprise
You can access Client ID, Client Secret, Box Application Access Level, and Enterprise Id/User Id from the Box account.
Re-authorization for authorization code
If you are using Authorization code authentication type and have made any cofiguration changes in your Box application,
you must re-authorize your Box connection. To re-authorize a connection, perform the following steps:
Click on the required connection in the Connections page .
This opens the connection details page.
Click Edit to edit the connection details.
Verify the OAuth 2.0 - Authorization code details in the Authentication section.
If required, make the necessary changes.
Click Save . This takes you to the connection details page.
Click Edit authorization in the Authentication section. This shows the Authorize pane.
Click Authorize .
If the authorization is successful, the connection status will be set to Active in the Connections page .
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
This section lists all the actions supported by the Box connection.
DownloadFile action
This action lets you download a file from your Box instance.
Input parameters of the DownloadFile action
Parameter Name
Data Type
Required
Description
FileID
String
Yes
The ID of the file to download.
HasBytes
Boolean
Yes
Specifies whether do download the file as a string or as a Base64 encoded string.
Output parameters of the DownloadFile action
This action returns the status 200 (OK) with a response body indicating the results.
Parameter Name
Data Type
Description
Success
String
Specifies whether fhe file download was successful.
ContentBytes
String
The file content as a Base64 encoded string.
For example on how to configure the DownloadFile action,
see Action examples .
UploadFile action
This action lets you upload a file to your Box instance.
Input parameters of the UploadFile action
Parameter Name
Data Type
Required
Description
ParentID
String
Yes
ID of the folder in which you want to upload the file. If this parameter isn't specified,
the file will be uploaded to the root of the Box account. The default value is 0.
Content
String
Yes
The file content to be uploaded.
Output parameters of the UploadFile action
This action returns the status 200 (OK) with a response body indicating the results.
Parameter Name
Data Type
Description
Success
String
Specifies whether fhe file upload was successful.
ID
String
ID of the newly created file.
VersionID
String
ID of a specific version of the file.
Hash
String
The SHA1 hash of the file.
Etag
String
Etag value of the file or the folder. The default value is 0.
For example on how to configure the UploadFile action,
see Action examples .
CopyFile action
This action lets you copy a file from your Box instance.
Input parameters of the CopyFile action
Parameter Name
Data Type
Required
Description
FileID
String
Yes
ID of the file you want to copy.
DestinationFolderId
String
No
ID of the destination folder where you want to copy the file. If you don't specify
any value, the latest version of the file is copied.
NewName
String
Yes
New file name for the copied file.
Output parameters of the CopyFile action
This action returns the status 200 (OK) with a response body indicating the results.
Parameter Name
Data Type
Description
Success
String
Specifies whether fhe file copy was successful.
ID
String
ID of the copied file.
For example on how to configure the CopyFile action,
see Action examples .
CopyFolder action
This action lets you copy an entire folder from your Box instance.
Input parameters of the CopyFolder action
Parameter Name
Data Type
Required
Description
FolderID
String
Yes
ID of the folder you want to copy.
DestinationFolderId
String
Yes
ID of the destination folder where you want to copy the folder.
NewName
String
No
New file name for the copied folder.
Output parameters of the CopyFolder action
This action returns the status 200 (OK) with a response body indicating the results.
Parameter Name
Data Type
Description
Success
String
Specifies whether the folder copy was successful.
ID
String
ID of the copied folder.
For example on how to configure the CopyFolder action,
see Action examples .
Action examples
This section describes how to perform some of the actions in this connector.
Example - Download a file
In the Configure connector task dialog, click Actions .
Select the DownloadFile action, and then click Done .
In the Task Input section of the Connectors task, click
connectorInputPayload and then enter a value similar to the following in the
Default Value field:
{
"FileID" : "1283194869422" ,
"HasBytes" : true
}
This example downloads a file as a Base64 encoded string. If the action is successful, your
connector task's connectorOutputPayload response
parameter will have a value similar to the following:
[
{ "Success" : "True" },
{ "ContentBytes" : "JVBERi0xLjQKJcfl9OXwCjIgMCBvYmoKJSBbMjRdIAo8PAovRmlsdGVy" }
]
Note: If you want to download a non-binary file, set
the HasBytes value to false .
Example - Upload a file
In the Configure connector task dialog, click Actions .
Select the UploadFile action, and then click Done .
In the Task Input section of the Connectors task, click
connectorInputPayload and then enter a value similar to the following in the
Default Value field:
{
"ParentId" : "0" ,
"Content" : "12345"
}
This example uploads string content as a file. If the action is successful, your
connector task's connectorOutputPayload response
parameter will have a value similar to the following:
[{
"Success" : "true" ,
"ID" : "1283902965389" ,
"VersionID" : "1403546001389" ,
"Hash" : "8cb2237d0679ca88db6464eac60da96345513964" ,
"Etag" : "0"
}]
Example - Copy a file
In the Configure connector task dialog, click Actions .
Select the CopyFile action, and then click Done .
In the Task Input section of the Connectors task, click
connectorInputPayload and then enter a value similar to the following in the
Default Value field:
{
"FileID" : "1288751886061" ,
"DestinationFolderId" : "219105724517" ,
"NewName" : "NewCopiedFile"
}
This example copies the file with ID 1288751886061
to the folder with ID 219105724517 . If the action is successful, your
connector task's connectorOutputPayload response
parameter will have a value similar to the following:
[{
"Success" : "true" ,
"ID" : "1308006018536"
}]
Example - Copy a folder
In the Configure connector task dialog, click Actions .
Select the CopyFolder action, and then click Done .
In the Task Input section of the Connectors task, click
connectorInputPayload and then enter a value similar to the following in the
Default Value field:
{
"FolderID" : "218475301279" ,
"DestinationFolderId" : "0" ,
"NewName" : "NewCopiedFolder"
}
This example copies the folder with ID 218475301279
to the folder with ID 219105724517 . If the action is successful, your
connector task's connectorOutputPayload response
parameter will have a value similar to the following:
[{
"Success" : "true" ,
"ID" : "226312444517"
}]
Entity operation examples
Example - List all the files
In the Configure connector task dialog, click Entities .
Select Files from the Entity List.
Select the LIST operation, and then click
Done .
You can perform the LIST operation on the following entities: Folders, TrashedItems, SharedItems, Collaborations, TaskAssignments, and Tasks
Example - Get the files
In the Configure connector task dialog, click Entities .
Select Files from the Entity list.
Select the GET operation, and then click
Done .
Set the entity ID to 1262397830475 which is the Key is to be passed. To set the entity ID, in
the Task Input section of the Connectors task, click EntityId and
then enter 1262397830475 in the Default Value field.
The Value for Entity Id must be passed directly such as, 1262397830475. Where 1262397830475 is the unique primary key value.
You can perform the GET operation on the following entities: Folders, SharedItems, Collaborations, TaskAssignments, and Tasks
Example - Delete files
In the Configure connector task dialog, click Entities .
Select Files from the Entity list.
Select the DELETE operation, and then click
Done .
Set the entity ID to 1258725940971 which is the Key is to be passed.. To set the entity ID, in
the Task Input section of the Connectors task, click EntityId and
then enter 1258725940971 in the Default Value field.
Alternately, if Entity has two Composite Business or Primary Keys instead of specifying the entityId , you can also set the
filterClause to Id='1258725940971' .
You can perform the DELETE operation on the following entities: Folders, Tasks, Collaborations, SharedItems, and TaskAssignments
Example - Create folders
In the Configure connector task dialog, click Entities .
Select Folders from the Entity list.
Select the Create operation, and then click Done .
In the Task Input section of the Connectors task, click
connectorInputPayload and then enter a value similar to the following in the
Default Value field:
{
"Name" : "Google Cloud Platforms_created_folders" ,
"ParentId" : "0"
}
If the integration is successful, the
Folder task's connectorOutputPayload response
parameter will have a value similar to the following:
{
"Id" : "222269371053"
}
Example - Create collaborations
In the Configure connector task dialog, click Entities .
Select Collaborations from the Entity list.
Select the Create operation, and then click Done .
In the Task Input section of the Connectors task, click
connectorInputPayload and then enter a value similar to the following in the
Default Value field:
{
"ItemId" : "216592737829" ,
"ItemType" : "folder" ,
"AccessibleById" : "27370766275" ,
"AccessibleByType" : "user" ,
"AccessibleByLogin" : "baklavainthebalkans@gmail.com" ,
"Role" : "editor"
}
If the integration is successful, the
Folder task's connectorOutputPayload response
parameter will have a value similar to the :
{
"Success" : false
}
Example - Create tasks
In the Configure connector task dialog, click Entities .
Select Tasks from the Entity list.
Select the Create operation, and then click Done .
In the Task Input section of the Connectors task, click
connectorInputPayload and then enter a value similar to the following in the
Default Value field:
{
"ItemId" : "1253997361112" ,
"ItemType" : "file" ,
"Action" : "review" ,
"Message" : "Creating a task from Google Cloud Platform" ,
"DueAt" : "2023-12-12 09:01:15.0" ,
"CompletionRule" : "all_assignees"
}
If the integration is successful, the
Folder task's connectorOutputPayload response
parameter will have a value similar to the following:
{
"Id" : "1253997361112"
}
Example - Create taskassignments
In the Configure connector task dialog, click Entities .
Select TaskAssignments from the Entity list.
Select the Create operation, and then click Done .
In the Task Input section of the Connectors task, click
connectorInputPayload and then enter a value similar to the following in the
Default Value field:
{
"TaskId" : "21507516872" ,
"AssignedToId" : "27370766275"
}
If the integration is successful, the
Folder task's connectorOutputPayload response
parameter will have a value similar to the following:
{
"Id" : "50804351753"
}
Example - Update Files
In the Configure connector task dialog, click Entities .
Select Files from the Entity list.
Select the Update operation, and then click Done .
In the Task Input section of the Connectors task, click
connectorInputPayload and then enter a value similar to the following in the
Default Value field:
{
"Name" : "Get Started with Box Files.pdf"
}
Set the entity ID to 1253997361112. To set the entity ID,
click entityId and then enter 1253997361112 in the Default Value
field.
Alternately, instead of specifying the entityId , you can also set the
filterClause to 1253997361112 .
Running this example, returns a response smiliar to the following in the Connector
task's connectorOutputPayload output variable:
{
"Id" : "1253997361112"
}
You can perform the UPDATE operation on the following entities: Folders, Tasks, Collaborations, SharedItems, and TaskAssignments
Example - Update folders
In the Configure connector task dialog, click Entities .
Select Folders from the Entity list.
Select the Update operation, and then click Done .
In the Task Input section of the Connectors task, click
connectorInputPayload and then enter a value similar to the following in the
Default Value field:
{
"Name" : "Demo Update"
}
Set the entity ID to 216457668125. To set the entity ID,
click entityId and then enter 216457668125 in the Default Value
field.
Alternately, instead of specifying the entityId , you can also set the
filterClause to 216457668125 .
Running this example, returns a response smiliar to the following in the Connector
task's connectorOutputPayload output variable:
{
"Id" : "216457668125"
}
Example - Update collaborations
In the Configure connector task dialog, click Entities .
Select Collaborations from the Entity list.
Select the Update operation, and then click Done .
In the Task Input section of the Connectors task, click
connectorInputPayload and then enter a value similar to the following in the
Default Value field:
{
"Role" : "Viewer"
}
Set the entity ID to 46685648757. To set the entity ID,
click entityId and then enter 46685648757 in the Default Value
field.
Alternately, instead of specifying the entityId , you can also set the
filterClause to 46685648757 .
Running this example, returns a response smiliar to the following in the Connector
task's connectorOutputPayload output variable:
{
}
Example - Update tasks
In the Configure connector task dialog, click Entities .
Select Tasks from the Entity list.
Select the Update operation, and then click Done .
In the Task Input section of the Connectors task, click
connectorInputPayload and then enter a value similar to the following in the
Default Value field:
{
"Message" : "This is a new task is updated and assigned to you by me"
}
Set the entity ID to 21507516872. To set the entity ID,
click entityId and then enter 21507516872 in the Default Value
field.
Alternately, instead of specifying the entityId , you can also set the
filterClause to 21507516872 .
Running this example, returns a response smiliar to the following in the Connector
task's connectorOutputPayload output variable:
{
"Id" : "21507516872"
}
Example - Update taskassignments
In the Configure connector task dialog, click Entities .
Select TaskAssignments from the Entity list.
Select the Update operation, and then click Done .
In the Task Input section of the Connectors task, click
connectorInputPayload and then enter a value similar to the following in the
Default Value field:
{
"Message" : "Looks good to me" ,
"ResolutionState" : "completed"
}
Set the entity ID to 49542929469. To set the entity ID,
click entityId and then enter 49542929469 in the Default Value
field.
Alternately, instead of specifying the entityId , you can also set the
filterClause to 49542929469 .
Running this example, returns a response smiliar to the following in the Connector
task's connectorOutputPayload output variable:
{
"Id" : "49542929469"
}
Example - Update Transferfolders
In the Configure connector task dialog, click Entities .
Select Folders from the Entity list.
Select the Update operation, and then click Done .
In the Task Input section of the Connectors task, click
connectorInputPayload and then enter a value similar to the following in the
Default Value field:
{
"Name" : "Demo Update"
"ParentId" : "216596059374"
}
Set the entity ID to 216457668125. To set the entity ID,
click entityId and then enter 216457668125 in the Default Value
field.
Running this example, returns a response smiliar to the following in the Connector
task's connectorOutputPayload output variable:
{
"Id" : "216457668125"
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
impersonate_user_mode
ENUM
True
Specify the type of the user impersonation. It should be whether the User mode or the Admin mode. Supported values are: User, Admin
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
proxy_ssltype
ENUM
False
The SSL type to use when connecting to the ProxyServer proxy. Supported values are: AUTO, ALWAYS, NEVER, TUNNEL
Use the Box connection in an integration
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
