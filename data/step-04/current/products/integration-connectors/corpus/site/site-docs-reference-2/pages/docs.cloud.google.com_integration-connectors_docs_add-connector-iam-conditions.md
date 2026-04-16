---
title: "IAM Conditions for fine-grained access \_|\_ Integration Connectors \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/integration-connectors/docs/add-connector-iam-conditions
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/integration-connectors/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/integration-connectors/docs/add-connector-iam-conditions
  title: "IAM Conditions for fine-grained access \_|\_ Integration Connectors \_|\_\
    \ Google Cloud Documentation"
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
IAM Conditions for fine-grained access
This page describes how to restrict access to your connections by using IAM Conditions.
An IAM condition
lets you have granular control over your Integration Connectors resources. By default,
an Integration Connectors user or a role
can perform all the supported operations on a connection. By using IAM Conditions, you can
restrict a specific user or a role to do only selected operations on a connection. For example, you can restrict a user
such that the user can only modify the connections whose name begins with
test-connection , and will not have other permissions on the connections such as
subscribing to events, or viewing the schema metadata.
Before you begin
Integration Connectors uses Google Cloud's Identity and Access Management (IAM)
to manage roles and permissions for Integration Connectors resources. Therefore, before you specify or
modify conditions in IAM for your Integration Connectors resources, familiarize yourself with the following IAM concepts:
Resource
Resource hierarchy
Roles
Custom roles
Permissions
Parent-only permissions
Adding IAM Conditions
To add an IAM condition to an Integration Connectors resource, you need the following information:
Named Resource URI - Every resource in Integration Connectors has a unique
resource URI. For example, URI for the connection resource is
projects/ PROJECT_ID /locations/ CONNECTION_LOCATION /connections/{connection_name} .
For the complete list of all the available URIs, see Integration Connectors REST resources .
To control access permissions for a resource at a granular level, you must name
your resource according to a naming convention. Based on your requirements, you can
decide the naming convention you want to use. For example, you can prefix the word
marketing- for all the connections owned by the marketing team. In this example, the resource
URI for the marketing team's connections, will begin with
projects/ PROJECT_ID /locations/ CONNECTION_LOCATION /connections/marketing- .
Parent only permissions - Check if a resource or any of its child resource(s)
require the parent-only permission. For more information,
see Parent-only permissions .
Resource type - You can further narrow the scope of the resources by filtering for a
resource type in the condition. Integration Connectors supports conditions for the following resources:
Resource name
Resource type
Connection
connectors.googleapis.com/Connection
ManagedZone
connectors.googleapis.com/ManagedZone
EndpointAttachment
connectors.googleapis.com/EndpointAttachment
EventSubscription
connectors.googleapis.com/EventSubscription
ConnectionSchemaMetadata
connectors.googleapis.com/ConnectionSchemaMetadata
Note: Google Cloud's resources have a hierarchical structure, and
the permissions that you apply to a parent resource doesn't propagate
to the parent's child resource(s), and conversely the permissions that
you apply to a child resource(s) don't apply to the child's parent. For example,
if you have restricted a user to access only the connections whose
name begins with marketing- , the user can still list (view) all
the connections because the list permission is available on
the connection's parent resource (location). However, the user can perform get,
create, update, and delete operations only on the connections whose name begins with
marketing- .
Examples
The following table lists the sample resource conditions that you can apply for an Integration Connectors user or a role.
IAM resource condition
Description
(resource.name.startsWith
("projects/ PROJECT_ID /locations/ CONNECTION_LOCATION /
connections/marketing-") && resource.type == "connectors.googleapis.com/Connection"))
|| resource.type != "connectors.googleapis.com/Connection"
A user or a role to whom you apply this condition, can only do the following operations:
List all the connections.
Perform get, create, update, and delete operations on connections whose name starts with marketing- .
(resource.name.startsWith
("projects/ PROJECT_ID /locations/ CONNECTION_LOCATION /
connections/marketing-") && resource.type == "connectors.googleapis.com/Connection") ||
(resource.name.startsWith ("projects/ PROJECT_ID /locations/ CONNECTION_LOCATION /
connections/marketing-") && resource.type == "connectors.googleapis.com/ConnectionSchemaMetadata")
|| (resource.type != "connectors.googleapis.com/Connection"
&& resource.type != "connectors.googleapis.com/ConnectionSchemaMetadata")
A user or a role to whom you apply this condition, can only do the following operations:
List all connections.
Perform get, create, update, and delete operations only for connections whose name starts with marketing- .
Get connection schema metadata only for connections whose name starts with marketing- .
Adding IAM Conditions for Application Integration service accounts
You can apply IAM Conditions to the Application Integration service account, which lets you restrict the connections
the service account can access during integration execution. For example, you can restrict a
service account such that it can access only connections whose name begin with marketing- .
For more information, see Apply IAM Conditions
to a service account .
The following table lists the sample resource conditions that you can apply for an Application Integration service account.
IAM resource condition
Description
resource.name.startsWith
("projects/ PROJECT_ID /locations/ CONNECTION_LOCATION /
connections/marketing-")
The service account to which you apply this condition, can run only those connections whose name starts with marketing- .
Note: Currently, Integration Connectors supports only the startsWith constraint for a service account resource condition.
What's next
Go through the following information in the IAM documentation:
Adding a conditional role binding to a policy
Modify an existing conditional role binding
Removing a conditional role binding
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
