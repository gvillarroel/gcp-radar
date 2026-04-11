---
title: "Access control with IAM \_|\_ Service Usage \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-usage/docs/access-control
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/service-usage/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/service-usage/docs/access-control
  title: "Access control with IAM \_|\_ Service Usage \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Service Usage
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Access control with IAM
Service Usage uses Identity and Access Management (IAM) to
control access to services. This page explains the IAM roles and
permissions related to Service Usage and how to use them to control
access.
Resource model
For Service Usage, there are three relevant resources:
The service you are using.
The project from which you are using the service.
The operation or long-running operation returned by certain methods.
Each Service Usage method requires a permission on one or more of these
resources.
IAM permissions
The following table shows the required permissions for each
Service Usage API method. You can also find this information in the
API reference .
Method
Required permissions
services.batchEnable
On the project: serviceusage.services.enable
On the services: servicemanagement.services.bind
services.enable
On the project: serviceusage.services.enable
On the service: servicemanagement.services.bind
services.disable
On the project: serviceusage.services.disable
services.get
On the project: serviceusage.services.get
services.list
On the project: serviceusage.services.list
services.consumerQuotaMetrics.list
services.consumerQuotaMetrics.get
services.consumerQuotaMetrics.limits.get
services.consumerQuotaMetrics.limits.consumerOverrides.list
services.consumerQuotaMetrics.limits.adminOverrides.list
On the project: serviceusage.quota.get
On the service: servicemanagement.services.bind
services.consumerQuotaMetrics.limits.consumerOverrides.create
services.consumerQuotaMetrics.limits.consumerOverrides.patch
services.consumerQuotaMetrics.limits.consumerOverrides.delete
services.consumerQuotaMetrics.limits.adminOverrides.create
services.consumerQuotaMetrics.limits.adminOverrides.patch
services.consumerQuotaMetrics.limits.adminOverrides.delete
On the project: serviceusage.quota.update
On the service: servicemanagement.services.bind
To use a project for quota and billing purposes. For more information,
see System parameters .
On the project: serviceusage.services.use
IAM roles
With IAM, you give users permission by granting them a role. The
following tables list IAM basic and predefined roles, and the
permissions related to Service Usage that those roles include.
For more information about roles, see
Roles and permissions .
Basic roles
Name
Title
Permissions
roles/viewer
Viewer
serviceusage.services.get
serviceusage.services.list
serviceusage.quotas.get
roles/editor
roles/owner
Editor
Owner
serviceusage.services.get
serviceusage.services.list
serviceusage.services.disable
serviceusage.services.enable
serviceusage.services.use
serviceusage.quotas.get
serviceusage.quotas.update
Predefined roles
Role
Permissions
API Keys Admin
( roles/ serviceusage.apiKeysAdmin )
Ability to create, delete, update, get and list API keys for a project.
apikeys.*
apikeys.keys.create
apikeys.keys.delete
apikeys.keys.get
apikeys.keys.getKeyString
apikeys.keys.list
apikeys.keys.lookup
apikeys.keys.undelete
apikeys.keys.update
orgpolicy.policy.get
serviceusage.apiKeys.*
serviceusage. apiKeys. regenerate
serviceusage.apiKeys.revert
serviceusage.operations.get
Service Usage Admin
( roles/ serviceusage.serviceUsageAdmin )
Ability to enable, disable, and inspect service states, inspect operations, and consume quota and billing for a consumer project.
cloudquotas.*
cloudquotas.quotas.get
cloudquotas.quotas.update
monitoring.timeSeries.list
serviceusage.consumerpolicy.*
serviceusage. consumerpolicy. analyze
serviceusage. consumerpolicy. get
serviceusage. consumerpolicy. update
serviceusage. contentsecuritypolicy.*
serviceusage. contentsecuritypolicy. get
serviceusage. contentsecuritypolicy. update
serviceusage. effectivemcppolicy. get
serviceusage. effectivepolicy. get
serviceusage.groups.*
serviceusage.groups.list
serviceusage. groups. listExpandedMembers
serviceusage. groups. listMembers
serviceusage.mcppolicy.*
serviceusage.mcppolicy.get
serviceusage.mcppolicy.update
serviceusage.operations.get
serviceusage.quotas.*
serviceusage.quotas.get
serviceusage.quotas.update
serviceusage.services.*
serviceusage.services.disable
serviceusage.services.enable
serviceusage.services.get
serviceusage.services.list
serviceusage.services.use
serviceusage.values.test
Service Usage Consumer
( roles/ serviceusage.serviceUsageConsumer )
Ability to inspect service states and operations, and consume quota and billing for a consumer project.
monitoring.timeSeries.list
serviceusage. consumerpolicy. analyze
serviceusage. consumerpolicy. get
serviceusage. contentsecuritypolicy. get
serviceusage. effectivemcppolicy. get
serviceusage. effectivepolicy. get
serviceusage.groups.*
serviceusage.groups.list
serviceusage. groups. listExpandedMembers
serviceusage. groups. listMembers
serviceusage.mcppolicy.get
serviceusage.operations.get
serviceusage.quotas.get
serviceusage.services.get
serviceusage.services.list
serviceusage.services.use
serviceusage.values.test
Service Usage Viewer
( roles/ serviceusage.serviceUsageViewer )
Ability to inspect service states and operations for a consumer project.
monitoring.timeSeries.list
serviceusage. consumerpolicy. analyze
serviceusage. consumerpolicy. get
serviceusage. contentsecuritypolicy. get
serviceusage. effectivemcppolicy. get
serviceusage. effectivepolicy. get
serviceusage.groups.*
serviceusage.groups.list
serviceusage. groups. listExpandedMembers
serviceusage. groups. listMembers
serviceusage.mcppolicy.get
serviceusage.operations.get
serviceusage.quotas.get
serviceusage.services.get
serviceusage.services.list
serviceusage.values.test
API Keys Viewer
( roles/ serviceusage.apiKeysViewer )
Ability to get and list API keys for a project.
apikeys.keys.get
apikeys.keys.getKeyString
apikeys.keys.list
apikeys.keys.lookup
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
