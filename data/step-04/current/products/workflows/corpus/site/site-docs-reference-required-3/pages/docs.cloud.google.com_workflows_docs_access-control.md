---
title: "Workflows roles and permissions \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/access-control
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/authentication
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/access-control
  title: "Workflows roles and permissions \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Workflows
Guides
Send feedback
Workflows roles and permissions
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the Identity and Access Management (IAM) roles and permissions available to
control access to Workflows resources.
Overview
Workflows uses IAM
for access control.
To learn more about using IAM for access control, see
Manage access to projects, folders, and organizations .
Every Workflows method requires the caller to have the necessary
permissions. For a list of the roles Workflows supports and their
corresponding permissions, in this document, see the Workflows roles
section.
Workflows permissions
This table describes the permissions available in Workflows.
Permission
Definition
workflows.callbacks.list
List callbacks for a workflow execution.
workflows.callbacks.send
Trigger a workflow execution callback.
workflows.executions.cancel
Cancel a workflow execution, without deleting traces.
workflows.executions.create
Trigger a workflow execution.
workflows.executions.get
Get the latest state of workflow execution operations.
workflows.executions.list
List the workflow's execution operations.
workflows.locations.get
Get the location of a workflow.
workflows.locations.list
List the locations where the service is available.
workflows.operations.cancel
Cancel long-running operations.
workflows.operations.get
Get details of long-running operations.
workflows.operations.list
Get a list of long-running operations.
workflows.stepEntries.get
Get a step entry for a workflow execution.
workflows.stepEntries.list
List step entries for a workflow execution.
workflows.workflows.create
Create and deploy a new workflow.
workflows.workflows.delete
Delete an existing workflow.
workflows.workflows.get
Get a workflow's settings, including source code, labels, and
description.
workflows.workflows.list
List the workflows in a project.
workflows.workflows.listRevision
List a workflow's revisions.
workflows.workflows.update
Update a workflow's settings, including its source code, labels, and
description.
Workflows roles
The following table lists the Workflows predefined IAM
roles with a corresponding list of all the permissions each role includes.
The available roles address most typical use cases. If your use case isn't
covered by the available roles, you can
create an IAM custom role .
Role
Permissions
Workflows Admin
( roles/ workflows.admin )
Full access to workflows and related resources.
Lowest-level resources where you can grant this role:
Project
resourcemanager.projects.get
resourcemanager.projects.list
workflows.*
workflows.callbacks.list
workflows.callbacks.send
workflows.executions.cancel
workflows.executions.create
workflows.executions.get
workflows.executions.list
workflows.locations.get
workflows.locations.list
workflows.operations.cancel
workflows.operations.get
workflows.operations.list
workflows.stepEntries.get
workflows.stepEntries.list
workflows.workflows.create
workflows. workflows. createTagBinding
workflows.workflows.delete
workflows. workflows. deleteTagBinding
workflows.workflows.get
workflows.workflows.list
workflows. workflows. listEffectiveTags
workflows. workflows. listRevision
workflows. workflows. listTagBindings
workflows.workflows.update
Workflows Editor
( roles/ workflows.editor )
Read and write access to workflows and related resources, including development and debugging of workflows.
Lowest-level resources where you can grant this role:
Project
resourcemanager.projects.get
resourcemanager.projects.list
workflows.*
workflows.callbacks.list
workflows.callbacks.send
workflows.executions.cancel
workflows.executions.create
workflows.executions.get
workflows.executions.list
workflows.locations.get
workflows.locations.list
workflows.operations.cancel
workflows.operations.get
workflows.operations.list
workflows.stepEntries.get
workflows.stepEntries.list
workflows.workflows.create
workflows. workflows. createTagBinding
workflows.workflows.delete
workflows. workflows. deleteTagBinding
workflows.workflows.get
workflows.workflows.list
workflows. workflows. listEffectiveTags
workflows. workflows. listRevision
workflows. workflows. listTagBindings
workflows.workflows.update
Workflows Viewer
( roles/ workflows.viewer )
Read-only access to workflows and related resources.
Lowest-level resources where you can grant this role:
Project
resourcemanager.projects.get
resourcemanager.projects.list
workflows.callbacks.list
workflows.executions.get
workflows.executions.list
workflows.locations.*
workflows.locations.get
workflows.locations.list
workflows.operations.get
workflows.operations.list
workflows.stepEntries.*
workflows.stepEntries.get
workflows.stepEntries.list
workflows.workflows.get
workflows.workflows.list
workflows. workflows. listEffectiveTags
workflows. workflows. listRevision
workflows. workflows. listTagBindings
Workflows Invoker
( roles/ workflows.invoker )
Access to execute workflows and manage the executions using the API. Does not provide access to develop and debug workflows.
Lowest-level resources where you can grant this role:
Project
resourcemanager.projects.get
resourcemanager.projects.list
workflows.callbacks.*
workflows.callbacks.list
workflows.callbacks.send
workflows.executions.*
workflows.executions.cancel
workflows.executions.create
workflows.executions.get
workflows.executions.list
workflows.stepEntries.*
workflows.stepEntries.get
workflows.stepEntries.list
Service agent roles
Service agent roles should only be granted to service agents .
Role
Permissions
Cloud Workflows Service Agent
( roles/ workflows.serviceAgent )
Gives Cloud Workflows service account access to managed resources.
Warning: Do not grant service agent roles to any principals except
service agents .
container.clusters.connect
iam.serviceAccounts.get
iam. serviceAccounts. getAccessToken
iam. serviceAccounts. getOpenIdToken
serviceusage.services.use
What's next
Create and manage custom roles
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
