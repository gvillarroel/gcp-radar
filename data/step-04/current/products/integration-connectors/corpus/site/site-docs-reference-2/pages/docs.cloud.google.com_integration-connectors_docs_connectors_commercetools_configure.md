---
title: "Commercetools \_|\_ Integration Connectors \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/integration-connectors/docs/connectors/commercetools/configure
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/integration-connectors/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/integration-connectors/docs/connectors/commercetools/configure
  title: "Commercetools \_|\_ Integration Connectors \_|\_ Google Cloud Documentation"
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
Preview
— BigQuery Connector
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Commercetools
The Commercetools connector lets you connect to a commercetools project and perform the supported
actions on the commercetools entities.
Before you begin
Before using the Commercetools connector, do the following tasks:
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
For the list of all the supported regions, see Locations .
Click Next .
In the Connection Details section, complete the following:
Connector : Select Commercetools from the drop down list of available Connectors.
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
In the Destinations section, enter details of the remote host (backend system) you want to connect to.
Auth server address - In the Host address field, specify the hostname
of the auth destination of your commercetools instance. For example, https://auth. REGION .gcp.commercetools.com
.
Service URL - In the Host address field, specify the hostname
of your commercetools instance. For example, https://api. REGION .gcp.commercetools.com
.
If you want to establish a private connection to your backend systems, follow these steps:
Create a PSC service attachment .
Create an endpoint attachment and
then enter the details of the endpoint attachment in the Host address field.
If you want to establish a public connection to your backend systems with additional security, you can
consider configuring static outbound
IP addresses for your connections , and then configure
your firewall rules to allowlist only the specific static IP addresses.
Optionally, click + Add label to add a label to the connection in the form of a key-value pair.
Click Next .
In the Authentication section, enter the authentication details.
Enter your commercetools Client ID found on the API Client you create on the commercetool interface.
Create a secret with your commercetools client secret.
Set up the scope. For example, manage_project: PROJECT_NAME
Set up the request format for the access token as header.
Set up the token request paths for oauth or token.
Click Next .
Review : Review your connection and authentication details.
Click Create .
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
Use the Commercetools connection in an integration
After you create the connection, it becomes available in both
Apigee Integration and Application Integration. You can use the connection
in an integration through the Connectors task.
Go through the Commercetools API reference documentation .
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
