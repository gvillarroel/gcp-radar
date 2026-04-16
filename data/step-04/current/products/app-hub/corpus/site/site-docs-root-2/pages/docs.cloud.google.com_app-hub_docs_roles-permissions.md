---
title: "App Hub IAM roles and permissions \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/app-hub/docs/roles-permissions
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/app-hub/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/app-hub/docs/roles-permissions
  title: "App Hub IAM roles and permissions \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
App Hub
Guides
Send feedback
App Hub IAM roles and permissions
Stay organized with collections
Save and categorize content based on your preferences.
App Hub provides the following
Identity and Access Management (IAM) roles:
App Hub Admin ( roles/apphub.admin ): get full access to
App Hub settings.
App Hub Editor ( roles/apphub.editor ): create and manage applications,
services, and workloads.
App Hub Viewer ( roles/apphub.viewer ): view applications, services, and
workloads.
Grant appropriate App Hub IAM roles to users or
groups who will manage or view applications within the
application management boundary . To grant
roles, you can use the IAM page in the Google Cloud console or the
Google Cloud CLI. For detailed instructions, see
Manage access to projects, folders, and organizations .
App Hub roles
The following table describes App Hub IAM roles and
their typical responsibilities:
Role
Description
Purpose
App Hub Admin
Use projects or folders to create applications, attach service
projects to a host project, update application attributes, register
services and workloads, update service and workload attributes, and
delegate application control to the App Hub Editor.
Manage the full lifecycle of an application.
Get administrative permissions and complete visibility of the
end-to-end application architecture.
App Hub Editor
Create and update applications, register and unregister services and
workloads, and update attributes.
Scale the capability to create, update, or delete services and
workloads.
Manage application deployments.
App Hub Viewer
View services, workloads, applications, and their attributes.
Visualize the status of services, workloads, applications, and their
dependencies.
Obtain visibility into applications as an App Hub user.
App Hub permissions
The following table lists the permissions that each App Hub
IAM role has:
App Hub Admin
App Hub Editor
App Hub Viewer
Clear all
App Hub Admin
( roles/ apphub.admin )
Full access to App Hub resources.
apphub.*
apphub.applications.create
apphub.applications.delete
apphub.applications.get
apphub. applications. getIamPolicy
apphub.applications.list
apphub. applications. setIamPolicy
apphub.applications.update
apphub.boundaries.attach
apphub.boundaries.get
apphub.boundaries.update
apphub.discoveredServices.get
apphub.discoveredServices.list
apphub. discoveredServices. register
apphub.discoveredWorkloads.get
apphub. discoveredWorkloads. list
apphub. discoveredWorkloads. register
apphub. extendedMetadataSchemas. get
apphub. extendedMetadataSchemas. list
apphub.locations.get
apphub.locations.list
apphub.operations.cancel
apphub.operations.delete
apphub.operations.get
apphub.operations.list
apphub. serviceProjectAttachments. attach
apphub. serviceProjectAttachments. create
apphub. serviceProjectAttachments. delete
apphub. serviceProjectAttachments. detach
apphub. serviceProjectAttachments. get
apphub. serviceProjectAttachments. list
apphub. serviceProjectAttachments. lookup
apphub.services.create
apphub.services.delete
apphub.services.get
apphub.services.list
apphub.services.update
apphub.workloads.create
apphub.workloads.delete
apphub.workloads.get
apphub.workloads.list
apphub.workloads.update
resourcemanager.projects.get
resourcemanager.projects.list
App Hub Editor
( roles/ apphub.editor )
Edit access to App Hub resources.
apphub.applications.create
apphub.applications.delete
apphub.applications.get
apphub.applications.list
apphub.applications.update
apphub.boundaries.get
apphub.discoveredServices.*
apphub.discoveredServices.get
apphub.discoveredServices.list
apphub. discoveredServices. register
apphub.discoveredWorkloads.*
apphub.discoveredWorkloads.get
apphub. discoveredWorkloads. list
apphub. discoveredWorkloads. register
apphub. extendedMetadataSchemas.*
apphub. extendedMetadataSchemas. get
apphub. extendedMetadataSchemas. list
apphub.locations.*
apphub.locations.get
apphub.locations.list
apphub.operations.*
apphub.operations.cancel
apphub.operations.delete
apphub.operations.get
apphub.operations.list
apphub. serviceProjectAttachments. lookup
apphub.services.*
apphub.services.create
apphub.services.delete
apphub.services.get
apphub.services.list
apphub.services.update
apphub.workloads.*
apphub.workloads.create
apphub.workloads.delete
apphub.workloads.get
apphub.workloads.list
apphub.workloads.update
resourcemanager.projects.get
resourcemanager.projects.list
App Hub Viewer
( roles/ apphub.viewer )
View access to App Hub resources.
apphub.applications.get
apphub.applications.list
apphub.boundaries.get
apphub.discoveredServices.get
apphub.discoveredServices.list
apphub.discoveredWorkloads.get
apphub. discoveredWorkloads. list
apphub. extendedMetadataSchemas.*
apphub. extendedMetadataSchemas. get
apphub. extendedMetadataSchemas. list
apphub.locations.*
apphub.locations.get
apphub.locations.list
apphub.operations.get
apphub.operations.list
apphub. serviceProjectAttachments. lookup
apphub.services.get
apphub.services.list
apphub.workloads.get
apphub.workloads.list
resourcemanager.projects.get
resourcemanager.projects.list
For more information about IAM permissions, see
Find the right predefined roles
and
IAM roles and permissions index .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
