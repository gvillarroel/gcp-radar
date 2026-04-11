---
title: "Access control \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/valkey/access-control
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/valkey/access-control
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/valkey/access-control
  title: "Access control \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Memorystore
Memorystore for Valkey
Guides
Send feedback
Access control
Stay organized with collections
Save and categorize content based on your preferences.
This page explains the Identity and Access Management roles available for Memorystore for Valkey,
and the associated permissions for those roles.
To learn how to grant the role to a user in your project, see Grant or revoke a single role .
Note: Modifications to IAM settings for
Memorystore for Valkey take on the order of minutes to take effect.
Predefined roles
The following predefined roles are available for Memorystore for Valkey. If you update a role for an Identity and Access Management principal , the change takes several minutes to take effect .
Role
Name
Memorystore permissions
Description
roles/owner
Owner
memorystore.*
Full access and control for all Google Cloud resources; manage
user access
roles/editor
Editor
All memorystore permissions except for *.getIamPolicy &
.setIamPolicy
Read-write access to all Google Cloud and Valkey resources (full
control except for the ability to modify permissions)
roles/viewer
Viewer
memorystore.*.get
memorystore.*.list
Read-only access to all Google Cloud resources, including Valkey
resources
roles/memorystore.admin
Memorystore Admin
memorystore.*
Full control for all Memorystore for Valkey resources.
roles/memorystore.editor
Memorystore Editor
All memorystore permissions except for
memorystore.instances.create
memorystore.instances.delete
memorystore.instances.connect
Manage Memorystore for Valkey instances. Can't create or delete
instances.
roles/memorystore.viewer
Memorystore Viewer
All memorystore permissions except for
memorystore.instances.create
memorystore.instances.delete
memorystore.instances.update
memorystore.instances.connect
memorystore.operations.delete
Read-only access to all Memorystore for Valkey resources.
roles/memorystore.dbConnectionUser
Memorystore Database Connection User
memorystore.instances.connect
A role that you can assign to users who need to authenticate with IAM authentication.
Permissions and their roles
The following table lists each permission that Memorystore for Valkey supports
and the Memorystore for Valkey roles that include it:
Permission
Memorystore role
Basic role
memorystore.instances.list
Memorystore Admin
Memorystore Editor
Memorystore Viewer
Viewer
memorystore.instances.get
Memorystore Admin
Memorystore Editor
Memorystore Viewer
Viewer
memorystore.instances.create
Memorystore Admin
Owner
memorystore.instances.update
Memorystore Admin
Memorystore Editor
Editor
memorystore.instances.connect
Memorystore Admin
Memorystore Database Connection User
Owner
memorystore.instances.rescheduleMaintenance
Memorystore Admin
Owner
Custom roles
If the predefined roles do not address your unique business requirements, you
can define your own custom roles with permissions that you specify. To support
this, IAM offers custom roles . When you create custom roles
for Memorystore for Valkey, make sure that you include
both resourcemanager.projects.get and resourcemanager.projects.list .
Otherwise, the Google Cloud console will not function correctly
for Memorystore for Valkey. For more information, see
Permission dependencies .
To learn how to create a custom role, see Creating a custom role .
In-transit encryption permissions
The table below shows permissions required for enabling and managing In-transit encryption
for Memorystore for Valkey.
Permissions needed
Create a Memorystore instance with in-transit encryption
Download the Certificate Authority
memorystore.instances.create
✓
X
memorystore.instances.get
X
✓
Network connectivity policy creation role
The permissions described in this section are needed for the Network Admin who
is establishing a service connection policy for Memorystore for Valkey, as
described in the Networking page.
To establish the policy required for Memorystore for Valkey instance creation,
the Network Admin must have the networkconnectivity.consumerNetworkAdmin
role, which grants the following permissions:
networkconnectivity.serviceconnectionpolicies.create
networkconnectivity.serviceconnectionpolicies.list
networkconnectivity.serviceconnectionpolicies.get
networkconnectivity.serviceconnectionpolicies.delete
networkconnectivity.serviceconnectionpolicies.update
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
