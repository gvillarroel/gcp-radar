---
title: "Control access with IAM \_|\_ Error Reporting \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/error-reporting/docs/iam
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/error-reporting/docs/setup/compute-engine
source_metadata:
  url: https://docs.cloud.google.com/error-reporting/docs/iam
  title: "Control access with IAM \_|\_ Error Reporting \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Error Reporting
Guides
Send feedback
Control access with IAM
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how you use
Identity and Access Management (IAM) roles and permissions to
control access to Error Reporting data in Google Cloud resources.
Overview
IAM permissions and
roles determine your ability to access data through
the Error Reporting API and the
Google Cloud console.
To use Error Reporting within a Google Cloud resource, such
as a Google Cloud project, folder, or organization, you must be granted an
IAM role on that resource. This role must contain the appropriate
permissions.
A role is a collection of permissions. You can't grant a principal permissions
directly; instead, you grant them a role. When you grant a role to a
principal, you grant them all the permissions that the role contains. You can
grant multiple roles to the same principal.
Predefined roles
IAM provides predefined roles to give granular access to
specific Google Cloud resources. Google Cloud creates and maintains these
roles and automatically updates their permissions as necessary, such as when
Error Reporting adds new features.
The following table lists the Error Reporting roles, the roles'
titles, their descriptions, contained permissions, and the lowest-level resource
type where the roles can be set. A particular role can be granted on this
resource type or, in most cases, any type above it in the
Google Cloud hierarchy .
To get a list of each individual permission contained in a role, see
Getting the role metadata .
Role
Permissions
Error Reporting Admin
Beta
( roles/ errorreporting.admin )
Provides full access to Error Reporting data.
Lowest-level resources where you can grant this role:
Project
cloudnotifications. activities. list
errorreporting.*
errorreporting. applications. list
errorreporting. errorEvents. create
errorreporting. errorEvents. delete
errorreporting. errorEvents. list
errorreporting. groupMetadata. get
errorreporting. groupMetadata. update
errorreporting.groups.list
logging.notificationRules.*
logging. notificationRules. create
logging. notificationRules. delete
logging.notificationRules.get
logging.notificationRules.list
logging. notificationRules. update
resourcemanager.projects.get
resourcemanager.projects.list
stackdriver.projects.get
Error Reporting User
Beta
( roles/ errorreporting.user )
Provides the permissions to read and write Error Reporting data, except
for sending new error events.
Lowest-level resources where you can grant this role:
Project
cloudnotifications. activities. list
errorreporting. applications. list
errorreporting. errorEvents. delete
errorreporting. errorEvents. list
errorreporting.groupMetadata.*
errorreporting. groupMetadata. get
errorreporting. groupMetadata. update
errorreporting.groups.list
logging.notificationRules.*
logging. notificationRules. create
logging. notificationRules. delete
logging.notificationRules.get
logging.notificationRules.list
logging. notificationRules. update
resourcemanager.projects.get
resourcemanager.projects.list
stackdriver.projects.get
Error Reporting Viewer
Beta
( roles/ errorreporting.viewer )
Provides read-only access to Error Reporting data.
Lowest-level resources where you can grant this role:
Project
cloudnotifications. activities. list
errorreporting. applications. list
errorreporting. errorEvents. list
errorreporting. groupMetadata. get
errorreporting.groups.list
logging.notificationRules.get
logging.notificationRules.list
resourcemanager.projects.get
resourcemanager.projects.list
stackdriver.projects.get
Error Reporting Writer
Beta
( roles/ errorreporting.writer )
Provides the permissions to send error events to Error Reporting.
Lowest-level resources where you can grant this role:
Service Account
errorreporting. errorEvents. create
API permissions
Error Reporting API methods require specific IAM
permissions. The following table lists and describes the permissions needed by
the API methods.
Method
Required permission(s)
Description
deleteEvents
errorreporting.errorEvents.delete
Delete error events.
events.list
errorreporting.errorEvents.list
List error events.
events.report
errorreporting.errorEvents.create
Create or update error events.
groupStats.list
errorreporting.groups.list
List ErrorGroupStats .
groups.get
errorreporting.groupMetadata.get
Retrieve error group information.
groups.update
errorreporting.groupMetadata.update errorreporting.applications.list
Update and mute error group information. Change error resolution status. List services and versions for a project.
Further considerations
When deciding which permissions and roles apply to
a principal's use cases, consider the following summary of
Error Reporting activities and required permissions:
Activities
Required permissions
Have read-only access to the Error Reporting Google Cloud console page.
errorreporting.applications.list errorreporting.groupMetadata.get errorreporting.groups.list
See group details in the Google Cloud console.
Permissions for read-only access plus: errorreporting.errorEvents.list
Change metadata in the Google Cloud console. Change error resolution status, including muting errors.
Permissions for read-only access plus: errorreporting.groupMetadata.update
Delete errors in the Google Cloud console.
Permissions for read-only access plus: errorreporting.errorEvents.delete
Create errors (no Google Cloud console permissions needed).
errorreporting.errorEvents.create
Subscribe to notifications.
Permissions for read-only access plus: cloudnotifications.activities.list
Grant and manage roles
You can grant and manage IAM roles using the
Google Cloud console, the IAM API methods, or the
Google Cloud CLI. For instructions on granting and managing roles, see
Granting, changing, and revoking access .
You can grant multiple roles to the same user. To get a list of the permissions
contained in a role, see
Getting the role metadata .
If you're trying to access a Google Cloud resource and lack the necessary
permissions, contact the user who is listed as the Owner for the resource.
Custom roles
To create a custom role with Error Reporting permissions, choose
permissions from API permissions , then follow the
instructions to
create a custom role .
Role change latency
Error Reporting caches IAM permissions for 5
minutes, so it will take up to 5 minutes for a role change to become effective.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
