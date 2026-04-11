---
title: "Roles and permissions \_|\_ Service Directory \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-directory/docs/access-control
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-directory/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/service-directory/docs/access-control
  title: "Roles and permissions \_|\_ Service Directory \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Distributed, hybrid, and multicloud
Service Directory
Guides
Send feedback
Roles and permissions
Stay organized with collections
Save and categorize content based on your preferences.
Google Cloud offers Identity and Access Management (IAM),
which enables you to give more granular access to specific
Google Cloud resources and prevents unwanted access to other
resources. This page describes the Service Directory API roles. For a detailed
description of IAM, read the IAM documentation .
IAM enables you to adopt the
security principle of least privilege ,
so you grant only the necessary access to your resources.
IAM enables you to control who has what permissions to
which resources by setting IAM policies. IAM
policies grant specific roles to a user, giving the user certain
permissions.
Permissions and Roles
Every Service Directory API method requires the caller to have the necessary
IAM permissions. You can assign permissions by granting roles to
a user, group, or service account. In addition to the basic Owner,
Editor, and Viewer roles, you can grant Service Directory API roles to the users
of your project.
Permissions
You can find out which permissions are required for each method in the
Service Directory
API reference documentation .
Roles
Role
Permissions
Service Directory Admin
( roles/ servicedirectory.admin )
Full control of all Service Directory resources and permissions.
resourcemanager.projects.get
resourcemanager.projects.list
servicedirectory.endpoints.*
servicedirectory. endpoints. create
servicedirectory. endpoints. delete
servicedirectory.endpoints.get
servicedirectory. endpoints. getIamPolicy
servicedirectory. endpoints. list
servicedirectory. endpoints. setIamPolicy
servicedirectory. endpoints. update
servicedirectory.locations.*
servicedirectory.locations.get
servicedirectory. locations. list
servicedirectory.namespaces.*
servicedirectory. namespaces. associatePrivateZone
servicedirectory. namespaces. create
servicedirectory. namespaces. delete
servicedirectory. namespaces. get
servicedirectory. namespaces. getIamPolicy
servicedirectory. namespaces. list
servicedirectory. namespaces. setIamPolicy
servicedirectory. namespaces. update
servicedirectory. networks. attach
servicedirectory.services.*
servicedirectory.services.bind
servicedirectory. services. create
servicedirectory. services. delete
servicedirectory.services.get
servicedirectory. services. getIamPolicy
servicedirectory.services.list
servicedirectory. services. resolve
servicedirectory. services. setIamPolicy
servicedirectory. services. update
Service Directory Editor
( roles/ servicedirectory.editor )
Edit Service Directory resources.
resourcemanager.projects.get
resourcemanager.projects.list
servicedirectory. endpoints. create
servicedirectory. endpoints. delete
servicedirectory.endpoints.get
servicedirectory. endpoints. getIamPolicy
servicedirectory. endpoints. list
servicedirectory. endpoints. update
servicedirectory.locations.*
servicedirectory.locations.get
servicedirectory. locations. list
servicedirectory. namespaces. associatePrivateZone
servicedirectory. namespaces. create
servicedirectory. namespaces. delete
servicedirectory. namespaces. get
servicedirectory. namespaces. getIamPolicy
servicedirectory. namespaces. list
servicedirectory. namespaces. update
servicedirectory. networks. attach
servicedirectory.services.bind
servicedirectory. services. create
servicedirectory. services. delete
servicedirectory.services.get
servicedirectory. services. getIamPolicy
servicedirectory.services.list
servicedirectory. services. resolve
servicedirectory. services. update
Service Directory Viewer
( roles/ servicedirectory.viewer )
View Service Directory resources.
resourcemanager.projects.get
resourcemanager.projects.list
servicedirectory.endpoints.get
servicedirectory. endpoints. getIamPolicy
servicedirectory. endpoints. list
servicedirectory.locations.*
servicedirectory.locations.get
servicedirectory. locations. list
servicedirectory. namespaces. get
servicedirectory. namespaces. getIamPolicy
servicedirectory. namespaces. list
servicedirectory.services.get
servicedirectory. services. getIamPolicy
servicedirectory.services.list
servicedirectory. services. resolve
Service Directory Network Attacher
( roles/ servicedirectory.networkAttacher )
Gives access to attach VPC Networks to Service Directory Endpoints
resourcemanager.projects.get
resourcemanager.projects.list
servicedirectory. networks. attach
Private Service Connect Authorized Service
( roles/ servicedirectory.pscAuthorizedService )
Gives access to VPC Networks via Service Directory
resourcemanager.projects.get
resourcemanager.projects.list
servicedirectory. networks. access
Service agent roles
Service agent roles should only be granted to service agents .
Role
Permissions
Service Directory Service Agent
( roles/ servicedirectory.serviceAgent )
Give the Service Directory service agent access to Cloud Platform resources.
Warning: Do not grant service agent roles to any principals except
service agents .
container.clusters.get
gkehub.features.get
gkehub.gateway.delete
gkehub. gateway. generateCredentials
gkehub.gateway.get
gkehub.gateway.patch
gkehub.gateway.post
gkehub.gateway.put
gkehub.locations.*
gkehub.locations.get
gkehub.locations.list
gkehub.memberships.get
gkehub.memberships.list
resourcemanager.projects.get
resourcemanager.projects.list
servicedirectory. endpoints. create
servicedirectory. endpoints. delete
servicedirectory.endpoints.get
servicedirectory. endpoints. getIamPolicy
servicedirectory. endpoints. list
servicedirectory. endpoints. update
servicedirectory.locations.*
servicedirectory.locations.get
servicedirectory. locations. list
servicedirectory. namespaces. associatePrivateZone
servicedirectory. namespaces. create
servicedirectory. namespaces. delete
servicedirectory. namespaces. get
servicedirectory. namespaces. getIamPolicy
servicedirectory. namespaces. list
servicedirectory. namespaces. update
servicedirectory. networks. attach
servicedirectory.services.bind
servicedirectory. services. create
servicedirectory. services. delete
servicedirectory.services.get
servicedirectory. services. getIamPolicy
servicedirectory.services.list
servicedirectory. services. resolve
servicedirectory. services. update
Access Control using the Google Cloud console
You can use the Google Cloud console to manage access control for your
registry.
To set access controls at the project level:
Console
In the Google Cloud console, go to the IAM page.
Go to IAM
Select your project from the top pull-down menu.
Click Add .
In New principals , enter the email address of a new principal.
Select the desired role from the drop-down menu: servicedirectory.admin ,
servicedirectory.editor , or servicedirectory.viewer
Click Save .
Verify that the principal is listed with the role that you granted.
Service Directory zones override IAM restrictions
When assigning a namespace to a Service Directory zone, the service names
become visible to all clients on any networks that are authorized to
query the private zone. There is no IAM access control for DNS as
the DNS protocol does not provide authentication capability.
What's next
See the IAM documentation for details on Identity
and Access Management
See the Overview
for an understanding of Service Directory.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
