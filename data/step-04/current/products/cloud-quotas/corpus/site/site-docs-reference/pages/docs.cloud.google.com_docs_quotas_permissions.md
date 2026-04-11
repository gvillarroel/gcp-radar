---
title: "Quota permissions \_|\_ Cloud Quotas \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/docs/quotas/permissions
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/docs/quotas/api-overview
source_metadata:
  url: https://docs.cloud.google.com/docs/quotas/permissions
  title: "Quota permissions \_|\_ Cloud Quotas \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Cloud Quotas
Guides
Send feedback
Quota permissions
Stay organized with collections
Save and categorize content based on your preferences.
The predefined
Identity and Access Management (IAM)
role for permissions is named Quota Administrator. This role can be assigned at
the project, folder, and organization levels.
If granted at the project level, the user will have permission to perform
project-level operations.
If granted at the folder level, the user will have permission to perform
project-level operations for all projects in that folder.
If granted at the organization level, the user will have permission to
perform organization level operations. Because IAM permissions
are inherited from the top level, this user will also be granted project and
folder level permissions.
Users who are part of the Project Owners role can assign the Quota Administrator
role to other users at the project level. Users in the Organization Owner role
can assign the Quota Administrator role at the organization level.
Permissions for viewing quota
To view your project quota in the Google Cloud console or to access your project
quota programmatically using the Cloud Quotas API, you must have the
following IAM permissions:
resourcemanager.projects.get
resourcemanager.folders.get if you want to view quota for an entire
Folder.
resourcemanager.organizations.get if you want to view quota for an entire
Organization.
monitoring.timeSeries.list
serviceusage.services.list
cloudquotas.quotas.get
To learn which roles include
these permissions by default, see the
IAM permissions reference .
Cloud Quotas can also be viewed programmatically by using the
Service Usage API . To learn about the
IAM roles and permissions required for this approach, see
Access control with IAM in the
Service Usage documentation.
Permissions for changing quota
To change your quota at the project level, folder level, or organization level,
you must have the following IAM permissions:
serviceusage.quotas.update
cloudquotas.quotas.update
These permissions are included by default for the following
roles : Owner, Editor, Quota
Administrator, and Service Usage Admin.
Permissions for viewing quota increase requests
To view quota increase requests in the Google Cloud console, you must have the
following IAM permissions :
resourcemanager.projects.get
serviceusage.services.list
serviceusage.quotas.get
Permissions for creating an alert policy for a quota
To set up quota alerts , you must have the
following permission:
monitoring.alertPolicies.create
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
