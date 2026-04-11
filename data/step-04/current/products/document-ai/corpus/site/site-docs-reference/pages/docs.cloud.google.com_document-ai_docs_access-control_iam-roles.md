---
title: "IAM roles for Document AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/document-ai/docs/access-control/iam-roles
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/document-ai/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/document-ai/docs/access-control/iam-roles
  title: "IAM roles for Document AI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Document AI
Reference
Send feedback
IAM roles for Document AI
Stay organized with collections
Save and categorize content based on your preferences.
Predefined roles
The following table describes Identity and Access Management (IAM) roles
that are associated with Document AI and lists the permissions that are
contained in each role. Unless otherwise noted, these roles can be applied
either to entire projects or specific processors.
Role
Description
Permissions
Document AI Administrator
( roles/documentai.admin )
Grants full access to all resources in Document AI.
Role: roles/documentai.editor
Document AI Editor
( roles/documentai.editor )
Grants access to use all resources in Document AI.
Role: roles/documentai.viewer
Permissions: documentai.labelerPools.create
documentai.labelerPools.update
documentai.labelerPools.delete -->
documentai.processors.create
documentai.processors.update
documentai.processors.delete
documentai.humanReviewConfigs.update
documentai.processorVersions.create
documentai.processorVersions.delete -->
Document AI Viewer
( roles/documentai.viewer )
Grants access to view all resources and process documents in
Document AI
Role: roles/documentai.apiUser
Permissions: resourcemanager.projects.get
resourcemanager.projects.list
documentai.locations.get
documentai.locations.list
documentai.processorTypes.list
documentai.labelerPools.get
documentai.labelerPools.list -->
documentai.processors.get
documentai.processors.list
documentai.processors.fetchHumanReviewDetails
documentai.humanReviewConfigs.get
documentai.processorVersions.get
documentai.processorVersions.list -->
Document AI API User
( roles/documentai.apiUser )
Grants access to process documents in Document AI
Permissions: documentai.operations.getLegacy
documentai.processors.processOnline
documentai.processors.processBatch
documentai.humanReviewConfigs.review -->
Basic roles
Basic roles are roles that existed prior to IAM. These roles have
unique characteristics:
Basic roles can only be granted for an entire project, not for individual
buckets within the project. Like other roles that you grant for a project,
basic roles apply to all buckets and objects in the project.
Basic roles contain additional permissions for other Google Cloud
services that are not covered in this section. See basic roles for a
general discussion of the permissions that basic roles grant.
In some cases, basic roles can be used as if they were groups, which causes
any principal that has the basic role to get additional access for some
resources.
A basic role can be used as if it were a group when granting roles for
buckets.
A basic role can be used as if it were a group when setting ACLs on
objects.
For a discussion of additional access that principals with basic roles
typically gain due to this behavior, see
modifiable behavior .
Custom roles
You may wish to define your own roles which contain bundles of permissions that
you specify. To support this, IAM offers custom roles .
What's next
Learn about each IAM permission for Document AI .
For a reference of other Google Cloud roles, see Understanding Roles .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
