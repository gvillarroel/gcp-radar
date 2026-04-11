---
title: "Active Directory \_|\_ Integration Connectors \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/integration-connectors/docs/connectors/activedirectory/configure
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/integration-connectors/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/integration-connectors/docs/connectors/activedirectory/configure
  title: "Active Directory \_|\_ Integration Connectors \_|\_ Google Cloud Documentation"
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
Active Directory
The Active Directory connector lets you connect to Microsoft's Active Directory and perform read, write, and update operations on the Active Directory objects.
Before you begin
Before using the Active Directory connector, do the following tasks:
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
For information about how to install and configure Active Directory, see Active Directory Installation .
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
Connector : Select Active Directory from the drop down list of available Connectors.
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
Base DN : The base portion of the distinguished name, used for limiting results to specific subtrees.
Auth Mechanism : The authentication mechanism to be used when connecting to the Active Directory server.
Follow Referrals : Whether or not to follow referrals returned by the Active Directory server.
Friendly GUID : Whether to return GUID attribute values in a human readable format.
Friendly SID : Whether to return SID attribute values in a human readable format.
LDAP Version : The LDAP version used to connect to and communicate with the server.
Scope : Whether to limit the scope of the search to the whole subtree (BaseDN and all of its descendants), a single level (BaseDN and its direct descendants), or the base object (BaseDN only).
Optionally, click + ADD LABEL to add a label to the Connection in the form of a key/value pair.
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
The following authentication types are supported by the Active Directory connection:
Username and password
To understand how to configure these authentication types, see Configure authentication .
Click NEXT .
Review : Review your connection and authentication details.
Click Create .
Configure authentication
Enter the details based on the authentication you want to use.
Username and password
Username : Username for connector
Password : Secret Manager Secret containing the password associated with the connector.
Connection configuration samples
This section lists the sample values for the various fields that you configure when you create an Active Directory connection.
Username password connection type
Field name
Details
Location
us-central1
Connector
Active Directory
Connector version
1
Connection Name
active-directory-google-cloud-vm-users-conn
Enable Cloud Logging
Yes
Service Account
SERVICE_ACCOUNT_NAME@PROJECT_ID.iam.gserviceaccount.com
Base DN
BASE_DN
Auth Mechanism
SIMPLE
LDAP Version
3
Scope
WHOLESUBTREE
Verbosity level
5
Minimum number of nodes
2
Maximum number of nodes
50
Destination Type(Server)
Host address
Host address
192.0.2.0
Port
PORT
Username
USERNAME
Password
PASSWORD
Secret version
1
SSL connection type
Field name
Details
Location
us-central1
Connector
Active Directory
Connector version
1
Connection Name
active-directory-google-cloud-vm-ssl-conn
Enable Cloud Logging
Yes
Service Account
SERVICE_ACCOUNT_NAME@PROJECT_ID.iam.gserviceaccount.com
Base DN
BASE_DN
Auth Mechanism
SIMPLE
LDAP Version
3
Scope
WHOLESUBTREE
Verbosity level
5
Minimum number of nodes
2
Maximum number of nodes
50
Enable SSL
Yes
Trust store Private Connection
Yes
Destination Type(Server)
Host address
Host address
192.0.2.0
Port
PORT
Username
USERNAME
Password
PASSWORD
Secret version
2
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
The Active Directory connector can process 4 transactions per second,
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
This section lists the actions supported by the connector. To understand how to configure the
actions, see Action examples .
Note: The results of all the actions will be available as a
JSON response in the Connectors task's connectorOutputPayload
response parameter after you run your integration.
MoveToDN action
This action moves an object from one DN to another.
Input parameters of the MoveToDN action
Parameter name
Data type
Required
Description
DN
String
Yes
The current DN of the object to be moved on the server (for example, cn=Bob F,ou=Employees,dc=Domain).
NewParentDN
String
Yes
The new parent DN of the object(for example ou=Test Org,dc=Domain).
For example on how to configure the MoveToDN action,
see Action examples .
GetAttributes action
This action gets attributes of the specified object.
Input parameters of the GetAttributes action
Parameter name
Data type
Required
Description
DN
String
Yes
Distinguished name of the desired LDAP object. If unspecified, the BaseDN from the connection string will be used.
For example on how to configure the GetAttributes action,
see Action examples .
AddMembersToGroup action
This action adds members to a group.
Input parameters of the AddMembersToGroup action
Parameter name
Data type
Required
Description
GroupId
String
Yes
The GroupId that you want to add the users to. Should be the Id of the Group record.
UserDNs
String
Yes
The UserDNs aggregate or temp table that contains the DN of the users to add to the Group. Should be the DN of the User record.
For example on how to configure the AddMembersToGroup action,
see Action examples .
RemoveMembersFromGroup action
This action removes members from a group.
Input parameters of the RemoveMembersFromGroup action
Parameter name
Data type
Required
Description
GroupId
String
Yes
The GroupId of the Group you want to remove users from. Should be the Id of the Group record.
UserDNs
String
Yes
The UserDNs aggregate or temp table that contains the DN of the users to remove from a Group. Should be the DN of the User record.
For example on how to configure the RemoveMembersFromGroup action,
see Action examples .
ResetPassword action
This action resets password.
Input parameters of the ResetPassword action
Parameter name
Data type
Required
Description
User
String
Yes
The DN of the account to be modified on the server (for example, Domain\\BobF or cn=BobF,ou=Employees,dc=Domain)
NewPassword
String
Yes
The new password for the user specified by DN.
AdminUser
String
Yes
An administrator account or DN with which to bind to the server(for example, Domain\\BobF or cn=BobF,ou=Employees,dc=Domain).
AdminPassword
String
Yes
An administrator account password used to authenticate to the LDAP server.
For example on how to configure the ResetPassword action,
see Action examples .
ChangePassword action
This action changes password.
Input parameters of the ChangePassword action
Parameter name
Data type
Required
Description
NewPassword
String
Yes
The new password for the user specified by DN.
For example on how to configure the ChangePassword action,
see Action examples .
Action examples
This section describes how to perform some of the actions in this connector.
Example - Move an object from one DN to another
In the Configure connector task dialog, click Actions .
Select the MoveToDN action, and then click Done .
In the Task Input section of the Connectors task, click
connectorInputPayload and then enter a value similar to the following in the
Default Value field:
{
"NewParentDN": "CN=Users,DC=gcpad,DC=local",
"DN": "CN=GoogleAdmin,CN=Computers,DC=gcpad,DC=local"
}
If the action is successful, the
MoveToDN task's connectorOutputPayload response
parameter will have a value similar to the following:
[{
"Success": null,
"result": "[ok]",
"modified": "true",
"rss:title": "The movement was successful.",
"resultcode": "0"
}]
Example - Get attributes of a DN
In the Configure connector task dialog, click Actions .
Select the GetAttributes action, and then click Done .
In the Task Input section of the Connectors task, click
connectorInputPayload and then enter a value similar to the following in the
Default Value field:
{
"DN": "CN=admin,CN=Users,DC=test-ldap,DC=com"
}
If the action is successful, the
GetAttributes task's connectorOutputPayload response
parameter will have a value similar to the following:
[{
"AttributeName": "_op",
"AttributeValue": "ldapadoGetAttributes"
},
{
"AttributeName": "msds-supportedencryptiontypes",
"AttributeValue": "24"
},
{
"AttributeName": "usncreated",
"AttributeValue": "12775"
},
{
"AttributeName": "objectclass",
"AttributeValue": "organizationalPerson"
},
{
"AttributeName": "objectclass",
"AttributeValue": "user"
},
{
"AttributeName": "accountexpires",
"AttributeValue": "9223372036854775807"
},
{
"AttributeName": "name",
"AttributeValue": "admin"
},
{
"AttributeName": "objectcategory",
"AttributeValue": "CN=Person,CN=Schema,CN=Configuration,DC=test-ldap,DC=com"
},
{
"AttributeName": null,
"AttributeValue": null
}]
Example - Add members to a group
In the Configure connector task dialog, click Actions .
Select the AddMembersToGroup action, and then click Done .
In the Task Input section of the Connectors task, click
connectorInputPayload and then enter a value similar to the following in the
Default Value field:
{
"GroupId": "1|CN=GoogleGRP1fa2,CN=Users,DC=gcpad,DC=local",
"UserDNs": "[{\"DN\":\"CN=GoogleAI,CN=Users,DC=gcpad,DC=local;CN=Guest,CN=Users,DC=gcpad,DC=local\"}]"
}
If the action is successful, the
AddMembersToGroup task's connectorOutputPayload response
parameter will have a value similar to the following:
[{
"Success": "True"
}]
Example - Remove members from a group
In the Configure connector task dialog, click Actions .
Select the RemoveMembersFromGroup action, and then click Done .
In the Task Input section of the Connectors task, click
connectorInputPayload and then enter a value similar to the following in the
Default Value field:
{
"GroupId": "1|CN=GoogleGRP1fa2,CN=Users,DC=gcpad,DC=local",
"UserDNs": "[{\"DN\":\"CN=GoogleAI,CN=Users,DC=gcpad,DC=local;CN=Guest,CN=Users,DC=gcpad,DC=local\"}]"
}
If the action is successful, the
RemoveMembersFromGroup task's connectorOutputPayload response
parameter will have a value similar to the following:
[{
"Success": "True"
}]
Example - Reset password
In the Configure connector task dialog, click Actions .
Select the ResetPassword action, and then click Done .
In the Task Input section of the Connectors task, click
connectorInputPayload and then enter a value similar to the following in the
Default Value field:
{
"AdminPassword": "XXXX=",
"User": "CN=GCP_Admin,CN=Users,DC=gcpad,DC=local",
"NewPassword": "XXXX",
"AdminUser": "CN=admin,CN=Users,DC=gcpad,DC=local"
}
If the action is successful, the
ResetPassword task's connectorOutputPayload response
parameter will have a value similar to the following:
[{
"Success": "true",
"result": "[ok]",
"rss:title": "Password modified successfully",
"resultcode": "0"
}]
Example - Change password
In the Configure connector task dialog, click Actions .
Select the ChangePassword action, and then click Done .
In the Task Input section of the Connectors task, click
connectorInputPayload and then enter a value similar to the following in the
Default Value field:
{
"NewPassword": "XXXX"
}
If the action is successful, the
ChangePassword task's connectorOutputPayload response
parameter will have a value similar to the following:
[{
"Success": "true",
"result": "[ok]",
"rss:title": "Password modified successfully.",
"resultcode": "0"
}]
Entity operation examples
This section shows how to perform some of the entity operations in this connector.
Example - List all Users
In the Configure connector task dialog, click Entities .
Select User from the Entity list.
Select the List operation, and then click
Done .
Optionally, in Task Input section of the Connectors task, you can
filter your result set by specifying a filter clause .
Specify the filter clause value always within the single quotes (').
You can perform List operation on the following entities:
Group, User Membership, Group Membership, OrganizationalPerson, Person, Top, Organization, OrganizationalRole, DomainPolicy, Contact, Computer, DnsNode, SecurityObject, OrganizationalUnit, Domain, and Account
Example - Get a User record
In the Configure connector task dialog, click Entities .
Select User from the Entity list.
Select the Get operation, and then click
Done .
In the Task Input section of the Connectors task, click EntityId and
then enter 1|CN=Active Directory User,DC=test-ldap,DC=com in the Default Value field.
Here, 41|CN=Active Directory User,DC=test-ldap,DC=com is a unique record ID in the User entity.
You can perform Get operation on the following entities:
Group, User Membership, Group Membership, OrganizationalPerson, Person, Top, SecurityPrincipal, Organization, OrganizationalRole, DomainPolicy, Contact, Computer, DnsNode, SecurityObject, OrganizationalUnit, Domain, and Account
Note:
If your entity has a composite primary key, you can specify a filter clause .
Example - Create a User record
In the Configure connector task dialog, click Entities .
Select User from the Entity list.
Select the Create operation, and then click Done .
In the Task Input section of the Connectors task, click
connectorInputPayload and then enter a value similar to the following in the
Default Value field:
{
"RDN": "CN= Active Directory User ",
"ObjectClass": "top;person;organizationalPerson;user"
}
Running this example, returns a response similar to the following in the connector
task's connectorOutputPayload output variable:
{
"Id": "1|CN=Administrator,CN=Users,DC=test-ldap,DC=com"
}
Example - Create a Computer record
In the Configure connector task dialog, click Entities .
Select Computer from the Entity list.
Select the Create operation, and then click Done .
In the Data Mapper section of the Data Mapping task, click
Open Data Mapping Editor and then enter a value similar to the following in the
Input Value field and choose the EntityId/ConnectorInputPayload as Local variable.
{
"RDN": "CN=DELVM04S03",
"ObjectClass": "top;person;organizationalPerson;user;computer"
}
If the integration is successful, the
Computer task's connectorOutputPayload response
parameter will have a value similar to the following:
{
"Id": "1|CN=DELVM04S03,CN=Computers,DC=gcpad,DC=local"
}
Example - Create a Group (DomainLocal) record
In the Configure connector task dialog, click Entities .
Select Group from the Entity list.
Select the Create operation, and then click Done .
In the Data Mapper section of the Data Mapping task, click
Open Data Mapping Editor and then enter a value similar to the following in the
Input Value field and choose the EntityId/ConnectorInputPayload as Local variable.
{
"RDN": "CN=DomainLocala496",
"ObjectClass": "group",
"GroupType": "4"
}
If the integration is successful, the
Group task's connectorOutputPayload response
parameter will have a value similar to the following:
{
"Id": "1|CN=DomainLocala496,CN=Users,DC=test-ldap,DC=com"
}
Example - Create a Group (Global) record
In the Configure connector task dialog, click Entities .
Select Group from the Entity list.
Select the Create operation, and then click Done .
In the Data Mapper section of the Data Mapping task, click
Open Data Mapping Editor and then enter a value similar to the following in the
Input Value field and choose the EntityId/ConnectorInputPayload as Local variable.
{
"RDN": "CN=Globalf862",
"ObjectClass": "group",
"GroupType": "-2147483646"
}
If the integration is successful, the
Group task's connectorOutputPayload response
parameter will have a value similar to the following:
{
"Id": "1|CN=Globalf862,CN=Users,DC=test-ldap,DC=com"
}
Example - Create a Group (Universal) record
In the Configure connector task dialog, click Entities .
Select Group from the Entity list.
Select the Create operation, and then click Done .
In the Data Mapper section of the Data Mapping task, click
Open Data Mapping Editor and then enter a value similar to the following in the
Input Value field and choose the EntityId/ConnectorInputPayload as Local variable.
{
"RDN": "CN=UniversalGRP20e5",
"ObjectClass": "group",
"GroupType": "8"
}
If the integration is successful, the
Group task's connectorOutputPayload response
parameter will have a value similar to the following:
{
"Id": "1|CN=UniversalGRP20e5,CN=Users,DC=test-ldap,DC=com"
}
Example - Create a Group (Universal Security) record
In the Configure connector task dialog, click Entities .
Select Group from the Entity list.
Select the Create operation, and then click Done .
In the Data Mapper section of the Data Mapping task, click
Open Data Mapping Editor and then enter a value similar to the following in the
Input Value field and choose the EntityId/ConnectorInputPayload as Local variable.
{
"RDN": "CN=UniversalSecurity3f5a",
"ObjectClass": "group",
"GroupType": "-2147483640"
}
If the integration is successful, the
Group task's connectorOutputPayload response
parameter will have a value similar to the following:
{
"Id": "1|CN=UniversalSecurity3f5a,CN=Users,DC=test-ldap,DC=com"
}
Example - Create a OrganizationPerson record
In the Configure connector task dialog, click Entities .
Select OrganizationPerson from the Entity list.
Select the Create operation, and then click Done .
In the Data Mapper section of the Data Mapping task, click
Open Data Mapping Editor and then enter a value similar to the following in the
Input Value field and choose the EntityId/ConnectorInputPayload as Local variable.
{
"RDN": "CN=OrgP_AD45237",
"ObjectClass": "top;person;organizationalPerson;user;inetOrgPerson"
}
If the integration is successful, the
OrganizationPerson task's connectorOutputPayload response
parameter will have a value similar to the following:
{
"Id": "1|CN=OrgP_AD45237,CN=Users,DC=gcpad,DC=local"
}
Example - Create a Person record
In the Configure connector task dialog, click Entities .
Select Person from the Entity list.
Select the Create operation, and then click Done .
In the Data Mapper section of the Data Mapping task, click
Open Data Mapping Editor and then enter a value similar to the following in the
Input Value field and choose the EntityId/ConnectorInputPayload as Local variable.
{
"RDN": "CN=Personc3a",
"ObjectClass": "top;person;organizationalPerson;user"
}
If the integration is successful, the
Person task's connectorOutputPayload response
parameter will have a value similar to the following:
{
"Id": "1|CN=Personc3a,CN=Users,DC=gcpad,DC=local"
}
Example - Create a Top record
In the Configure connector task dialog, click Entities .
Select Top from the Entity list.
Select the Create operation, and then click Done .
In the Data Mapper section of the Data Mapping task, click
Open Data Mapping Editor and then enter a value similar to the following in the
Input Value field and choose the EntityId/ConnectorInputPayload as Local variable.
{
"RDN": "CN=Top49b88",
"ObjectClass": "top;person;organizationalPerson;user;inetOrgPerson"
}
If the integration is successful, the
Top task's connectorOutputPayload response
parameter will have a value similar to the following:
{
"Id": "1|CN=Top49b88,CN=Users,DC=gcpad,DC=local"
}
Example - Update a User record
In the Configure connector task dialog, click Entities .
Select User from the Entity list.
Select the Update operation, and then click Done .
In the Task Input section of the Connectors task, click
connectorInputPayload and then enter a value similar to the following in the
Default Value field:
{
"PostalCode": "560048"
}
Instead of specifying the entityId , you can also set the
filterClause to 1|CN=Active Directory User,DC=test-ldap,DC=com .
Running this example, returns a response similar to the following in the connector
task's connectorOutputPayload output variable:
{
"Id": "1|CN=Active Directory User,DC=test-ldap,DC=com"
}
Example - Update a Group record
In the Configure connector task dialog, click Entities .
Select Group from the Entity list.
Select the Update operation, and then click Done .
In the Data Mapper section of the Data Mapping task, click
Open Data Mapping Editor and then enter a value similar to the following in the
Input Value field and choose the EntityId/ConnectorInputPayload/FilterClause as Local variable.
{
"Member": "CN=admin,CN=Users,DC=test-ldap,DC=com;CN=Administrator,CN=Users,DC=test-ldap,DC=com"
}
Instead of specifying the entityId , you can also set the
filterClause to 1|CN=ADGroup9bff,DC=test-ldap,DC=com .
Running this example, returns a response similar to the following in the connector
task's connectorOutputPayload output variable:
{
"Id": "1|CN=ADGroup9bff,DC=test-ldap,DC=com"
}
Example - Update a Group (GroupType) record
In the Configure connector task dialog, click Entities .
Select Group from the Entity list.
Select the Update operation, and then click Done .
In the Data Mapper section of the Data Mapping task, click
Open Data Mapping Editor and then enter a value similar to the following in the
Input Value field and choose the EntityId/ConnectorInputPayload/FilterClause as Local variable.
{
"GroupType": "4"
}
Instead of specifying the entityId , you can also set the
filterClause to 1|CN=UniversalGRP20e5,CN=Users,DC=test-ldap,DC=com .
Running this example, returns a response similar to the following in the connector
task's connectorOutputPayload output variable:
{
"Id": "1|CN=UniversalGRP20e5,CN=Users,DC=test-ldap,DC=com"
}
Example - Update a OrganizationPerson record
In the Configure connector task dialog, click Entities .
Select OrganizationPerson from the Entity list.
Select the Update operation, and then click Done .
In the Data Mapper section of the Data Mapping task, click
Open Data Mapping Editor and then enter a value similar to the following in the
Input Value field and choose the EntityId/ConnectorInputPayload/FilterClause as Local variable.
{
"Title": "Test Engineer"
}
Instead of specifying the entityId , you can also set the
filterClause to 1|CN=OrgP_ADa022f,DC=test-ldap,DC=com .
Running this example, returns a response similar to the following in the connector
task's connectorOutputPayload output variable:
{
"Id": "1|CN=OrgP_ADa022f,DC=test-ldap,DC=com"
}
Example - Update a Person record
In the Configure connector task dialog, click Entities .
Select Person from the Entity list.
Select the Update operation, and then click Done .
In the Data Mapper section of the Data Mapping task, click
Open Data Mapping Editor and then enter a value similar to the following in the
Input Value field and choose the EntityId/ConnectorInputPayload/FilterClause as Local variable.
{
"TelephoneNumber": "7764942992"
}
Instead of specifying the entityId , you can also set the
filterClause to 1|CN=Person2e6,DC=test-ldap,DC=com .
Running this example, returns a response similar to the following in the connector
task's connectorOutputPayload output variable:
{
"Id": "1|CN=Person2e6,DC=test-ldap,DC=com"
}
Example - Update a Top record
In the Configure connector task dialog, click Entities .
Select Top from the Entity list.
Select the Update operation, and then click Done .
In the Data Mapper section of the Data Mapping task, click
Open Data Mapping Editor and then enter a value similar to the following in the
Input Value field and choose the EntityId/ConnectorInputPayload/FilterClause as Local variable.
{
"Description": "Top Testing GOOGLECLOUD"
}
Instead of specifying the entityId , you can also set the
filterClause to 1|CN=Top3b6bc,DC=test-ldap,DC=com .
Running this example, returns a response similar to the following in the connector
task's connectorOutputPayload output variable:
{
"Id": "1|CN=Top3b6bc,DC=test-ldap,DC=com"
}
Example - Update a Computer record
In the Configure connector task dialog, click Entities .
Select Computer from the Entity list.
Select the Update operation, and then click Done .
In the Data Mapper section of the Data Mapping task, click
Open Data Mapping Editor and then enter a value similar to the following in the
Input Value field and choose the EntityId/ConnectorInputPayload/FilterClause as Local variable.
{
"Description": "This is Windows 2019 Server."
}
Instead of specifying the entityId , you can also set the
filterClause to 1|CN=DELVM04S02,CN=Computers,DC=gcpad,DC=local .
Running this example, returns a response similar to the following in the connector
task's connectorOutputPayload output variable:
{
"Id": "1|CN=DELVM04S02,CN=Computers,DC=gcpad,DC=local"
}
Example - Delete a User record
In the Configure connector task dialog, click Entities .
Select User from the Entity list.
Select the Delete operation, and then click
Done .
In the Task Input section of the Connectors task, click entityId and
then enter 1|CN=Active Directory User,DC=test-ldap,DC=com in the Default Value field.
You can perform Delete operation on the following entities:
Group, User Membership, Group Membership, OrganizationalPerson, Person, Top, Organization, OrganizationalRole, DomainPolicy, Contact, Computer, DnsNode, SecurityObject, OrganizationalUnit, Domain, and Account
Note:
If your entity has a composite primary key, you can specify
a filter clause .
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
base_dn
STRING
True
The base portion of the distinguished name, used for limiting results to specific subtrees.
auth_mechanism
ENUM
True
The authentication mechanism to be used when connecting to the Active Directory server. Supported values are: SIMPLE, DIGESTMD5, NEGOTIATE
follow_referrals
BOOLEAN
False
Whether or not to follow referrals returned by the Active Directory server.
friendly_guid
BOOLEAN
False
Whether to return GUID attribute values in a human readable format.
friendly_sid
BOOLEAN
False
Whether to return SID attribute values in a human readable format.
ldapversion
STRING
True
The LDAP version used to connect to and communicate with the server.
scope
ENUM
True
Whether to limit the scope of the search to the whole subtree (BaseDN and all of its descendants), a single level (BaseDN and its direct descendants), or the base object (BaseDN only). Supported values are: WHOLESUBTREE, SINGLELEVEL, BASEOBJECT
Use the Active Directory connection in an integration
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
