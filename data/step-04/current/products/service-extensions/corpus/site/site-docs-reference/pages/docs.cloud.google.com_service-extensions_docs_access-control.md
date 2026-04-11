---
title: "Roles and permissions \_|\_ Service Extensions \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-extensions/docs/access-control
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-extensions/docs/plugins-overview
source_metadata:
  url: https://docs.cloud.google.com/service-extensions/docs/access-control
  title: "Roles and permissions \_|\_ Service Extensions \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Service Extensions
Guides
Send feedback
Roles and permissions
Stay organized with collections
Save and categorize content based on your preferences.
Google Cloud offers Identity and Access Management (IAM) to let you provide
more granular access to specific Google Cloud resources and prevent
access to other resources. This page describes the roles and permissions for
Service Extensions.
IAM lets you adopt the
security principle of least privilege
so that you need to grant only the necessary access to your resources.
Roles are collections of IAM permissions. To make permissions
available to principals, including users, groups, and service accounts, you
grant roles to the principals. You can control who has what permissions to
which resources by setting IAM policies. IAM
policies grant specific roles to principals, thereby giving them certain
permissions.
For detailed information about IAM roles, see Roles and permissions .
Predefined roles and permissions for Service Extensions
Service Extensions supports IAM permissions at the
project level.
The following table lists Service Extensions IAM
roles and the permissions that each role includes.
Roles
Permissions
Service Extensions Admin
( roles/ networkservices.serviceExtensionsAdmin )
Permissions to create, updated, list, view, and delete extensions.
networkservices.authzExtensions.create
networkservices.authzExtensions.delete
networkservices.authzExtensions.get
networkservices.authzExtensions.list
networkservices.authzExtensions.update
networkservices.authzExtensions.use
networkservices.lbEdgeExtensions.create
networkservices.lbEdgeExtensions.delete
networkservices.lbEdgeExtensions.get
networkservices.lbEdgeExtensions.list
networkservices.lbEdgeExtensions.update
networkservices.lbRouteExtensions.create
networkservices.lbRouteExtensions.delete
networkservices.lbRouteExtensions.get
networkservices.lbRouteExtensions.list
networkservices.lbRouteExtensions.update
networkservices.lbTrafficExtensions.create
networkservices.lbTrafficExtensions.delete
networkservices.lbTrafficExtensions.get
networkservices.lbTrafficExtensions.list
networkservices.lbTrafficExtensions.update
networkservices.wasmActions.get
networkservices.wasmActions.list
networkservices.wasmActions.create
networkservices.wasmActions.delete
networkservices.wasmPlugins.get
networkservices.wasmPlugins.list
networkservices.wasmPlugins.create
networkservices.wasmPlugins.update
networkservices.wasmPlugins.delete
networkservices.wasmPlugins.use
Service Extensions Viewer
( roles/ networkservices.serviceExtensionsViewer )
Permissions to list and view extensions.
networkservices.authzExtensions.get
networkservices.authzExtensions.list
networkservices.lbEdgeExtensions.get
networkservices.lbEdgeExtensions.list
networkservices.lbRouteExtensions.get
networkservices.lbRouteExtensions.list
networkservices.lbTrafficExtensions.get
networkservices.lbTrafficExtensions.list
networkservices.wasmActions.get
networkservices.wasmActions.list
networkservices.wasmPlugins.get
networkservices.wasmPlugins.list
The following table lists IAM roles that you need
for other services and the permissions that each role includes.
Roles
Permissions
Compute Load Balancer Admin
( roles/ compute.loadBalancerAdmin )
Permissions to update forwarding rules. Required while creating and updating
extensions that attach to forwarding rules.
compute.forwardingRules.update
compute.globalForwardingRules.update
Compute Load Balancer Services User
( roles/ compute.loadBalancerServiceUser )
Permissions to use backend services. Required while creating and updating
extensions that use backend services as extension services.
compute.backendServices.use
compute.regionBackendBuckets.use
Manage access control
To set access controls at the project level, follow these steps:
In the Google Cloud console, go to the IAM page.
Go to IAM
Select your project.
Click Add .
In New principals , enter the email address of a new principal.
Select the required role.
Click Save .
Verify that the principal is listed with the role that you granted.
Identify the permissions in a role
To determine whether one or more permissions are included in a role, you can use
one of the following methods:
The IAM permissions search reference
The gcloud iam roles describe command
The roles.get() method in the
IAM API
What's next
See the Service Extensions overview .
Learn how to prepare the plugin code
to create plugins.
Learn how to create a plugin .
Learn how to manage plugins .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
