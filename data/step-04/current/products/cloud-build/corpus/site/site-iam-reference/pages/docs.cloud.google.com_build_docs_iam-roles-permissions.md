---
title: "IAM roles and permissions \_|\_ Cloud Build \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/build/docs/iam-roles-permissions
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/build/docs/iam-roles-permissions
source_metadata:
  url: https://docs.cloud.google.com/build/docs/iam-roles-permissions
  title: "IAM roles and permissions \_|\_ Cloud Build \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Build
Guides
Send feedback
IAM roles and permissions
Stay organized with collections
Save and categorize content based on your preferences.
Access control in Cloud Build is controlled using
Identity and Access Management (IAM) .
IAM lets you create and manage
permissions for Google Cloud resources. Cloud Build provides a specific
set of predefined IAM roles
where each role contains a set of permissions. You can use these roles to give
more granular access to specific Google Cloud resources and prevent unwanted
access to other resources. IAM lets you adopt the
security principle of least privilege ,
so you grant only the necessary access to your resources.
This page describes Cloud Build roles and permissions.
Predefined Cloud Build roles
With IAM, every API method in Cloud Build API requires
that the identity making the API request has the appropriate permissions to use
the resource. Permissions are granted by setting policies that grant roles to a
principal (user, group, or service account). You can grant multiple roles to a
principal on the same resource.
The following table lists the Cloud Build IAM roles
and the permissions that they include:
Role
Description
Permissions
Name : roles/cloudbuild.builds.viewer Title : Cloud Build Viewer
Can view Cloud Build
resources
cloudbuild.builds.get
cloudbuild.builds.list
cloudbuild.locations.get
cloudbuild.locations.list
cloudbuild.operations.get
cloudbuild.operations.list
remotebuildexecution.blobs.get
resourcemanager.projects.get
resourcemanager.projects.list
Name : roles/cloudbuild.builds.editor Title : Cloud Build Editor
Full control of Cloud Build
resources
cloudbuild.builds.create
cloudbuild.builds.get
cloudbuild.builds.list
cloudbuild.builds.update
remotebuildexecution.blobs.get
resourcemanager.projects.get
resourcemanager.projects.list
Name : roles/cloudbuild.builds.approver Title : Cloud Build Approver
Provide access to approve or
reject pending builds
cloudbuild.builds.approve
cloudbuild.builds.get
cloudbuild.builds.list
remotebuildexecution.blobs.get
resourcemanager.projects.get
resourcemanager.projects.list
Name : roles/cloudbuild.builds.builder Title : Cloud Build Legacy Service Account
When you enable the
Cloud Build API for a project,
the Cloud Build legacy service account
is automatically created in the project
and is granted this role for the resources
in the project. The Cloud Build
legacy service account uses this role only as
required to perform actions when
executing your build.
For a list of permissions
that this role contains,
see Default Cloud Build service account .
Name : roles/cloudbuild.integrationsViewer Title : Cloud Build Integrations Viewer
Can view Cloud Build
host connections
cloudbuild.integrations.get
cloudbuild.integrations.list
resourcemanager.projects.get
resourcemanager.projects.list
Name : roles/cloudbuild.integrationsEditor Title : Cloud Build Integrations Editor
Edit control of Cloud Build
host connections
cloudbuild.integrations.get
cloudbuild.integrations.list
cloudbuild.integrations.update
resourcemanager.projects.get
resourcemanager.projects.list
Name : roles/cloudbuild.integrationsOwner Title : Cloud Build Integrations Owner
Full control of Cloud Build
host connections
cloudbuild.integrations.create
cloudbuild.integrations.delete
cloudbuild.integrations.get
cloudbuild.integrations.list
cloudbuild.integrations.update
compute.firewalls.create
compute.firewalls.get
compute.firewalls.list
compute.networks.get
compute.networks.updatePolicy
compute.regions.get
compute.subnetworks.get
compute.subnetworks.list
resourcemanager.projects.get
resourcemanager.projects.list
Name : roles/cloudbuild.connectionViewer Title : Cloud Build Connection Viewer
Can view and list connections
and repositories
resourcemanager.projects.get
resourcemanager.projects.list
cloudbuild.connections.get
cloudbuild.connections.fetchLinkableRepositories
cloudbuild.connections.list
cloudbuild.connections.getIamPolicy
cloudbuild.repositories.get
cloudbuild.repositories.list
Name : roles/cloudbuild.connectionAdmin Title : Cloud Build Connection Admin
Can manage connections
and repositories
resourcemanager.projects.get
resourcemanager.projects.list
cloudbuild.connections.get
cloudbuild.connections.fetchLinkableRepositories
cloudbuild.connections.list
cloudbuild.connections.create
cloudbuild.connections.update
cloudbuild.connections.delete
cloudbuild.connections.getIamPolicy
cloudbuild.connections.setIamPolicy
cloudbuild.repositories.get
cloudbuild.repositories.list
cloudbuild.repositories.create
cloudbuild.repositories.delete
Name : roles/cloudbuild.readTokenAccessor Title : Cloud Build Read Only Token Accessor
Can view the connection, its repositories,
and access their read-only token
cloudbuild.connections.get
cloudbuild.repositories.get
cloudbuild.repositories.accessReadToken
Name : roles/cloudbuild.tokenAccessor Title : Cloud Build Token Accessor
Can view the connection, its repositories,
and access their read-only and read/write token
cloudbuild.connections.get
cloudbuild.repositories.get
cloudbuild.repositories.accessReadToken
cloudbuild.repositories.accessReadWriteToken
Name : roles/cloudbuild.workerPoolOwner Title : Cloud Build WorkerPool Owner
Full control of the private pool
cloudbuild.workerpools.create
cloudbuild.workerpools.delete
cloudbuild.workerpools.get
cloudbuild.workerpools.list
cloudbuild.workerpools.update
resourcemanager.projects.get
resourcemanager.projects.list
Name : roles/cloudbuild.workerPoolEditor Title : Cloud Build WorkerPool Editor
Can update private pools
cloudbuild.workerpools.get
cloudbuild.workerpools.list
cloudbuild.workerpools.update
resourcemanager.projects.get
resourcemanager.projects.list
Name : roles/cloudbuild.workerPoolViewer Title : Cloud Build WorkerPool Viewer
Can view private pools
cloudbuild.workerpools.get
cloudbuild.workerpools.list
resourcemanager.projects.get
resourcemanager.projects.list
Name : roles/cloudbuild.workerPoolUser Title : Cloud Build WorkerPool User
Can run builds in the private pool
cloudbuild.workerpools.use
In addition to the previous Cloud Build predefined roles, the
basic Viewer,
Editor, and Owner roles also include permissions related to Cloud Build.
However, we recommend that you grant predefined roles where possible to comply with the
security principle of least privilege .
The following table lists the basic roles and the Cloud Build
IAM roles
that they include.
Role
includes role
roles/viewer
roles/cloudbuild.builds.viewer , roles/cloudbuild.integrations.viewer
roles/editor
roles/cloudbuild.builds.editor , roles/cloudbuild.integrations.editor
roles/owner
roles/cloudbuild.integrations.owner
Note: Owner, Editor, and Viewer include permissions for many other Google Cloud
services. The Owner role is automatically granted to the original
project creator.
Permissions
The following table lists the permissions that the caller must have to call each method:
API Method
Required Permission
Role Title
builds.create() triggers.create() triggers.patch() triggers.delete() triggers.run()
cloudbuild.builds.create
Cloud Build Editor
builds.cancel()
cloudbuild.builds.update
Cloud Build Editor
builds.get() triggers.get()
cloudbuild.builds.get
Cloud Build Editor, Cloud Build Viewer
builds.list() triggers.list()
cloudbuild.builds.list
Cloud Build Editor, Cloud Build Viewer
Caution: cloudbuild.builds.create permission enables the user to run builds as
the
Cloud Build legacy service account .
This permission is included in Cloud Build Editor, Project Owner, and
Project Editor roles. Granting a user any of these roles will enable them to run
builds as the Cloud Build legacy service account. Depending on the
IAM permissions granted to the user and the permissions of the
Cloud Build legacy service account, this could enable the user
escalated build-time privileges.
Permissions to view build logs
To view build logs, you require additional permissions depending on whether
you're storing your build logs in the default Cloud Storage bucket or in
a user-specified Cloud Storage bucket. For more information on permissions
required to view build logs, see Storing and viewing build logs .
What's next
Learn about the default Cloud Build service account .
Learn how to configure access to Cloud Build resources .
Learn how to configure access for Cloud Build service account .
Learn about IAM .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
