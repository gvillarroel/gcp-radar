---
title: "Assign permissions for Google Cloud projects \_|\_ Apps Script \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/apps-script/guides/admin/assign-cloud-permissions
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/apps-script/overview
source_metadata:
  url: https://developers.google.com/apps-script/guides/admin/assign-cloud-permissions
  title: "Assign permissions for Google Cloud projects \_|\_ Apps Script \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Apps Script
Guides
Send feedback
Assign permissions for Google Cloud projects
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This guide explains how to assign predefined roles to view and manage all Google Cloud projects in an organization.
To assign permissions, you must be signed in to Google Workspace as a super administrator.
Steps are provided for assigning view, edit, and delete permissions for all Cloud projects in an organization using the Cloud console.
Specific Resource Manager roles like Folder Viewer, Project Mover, and Project Deleter are used to grant different levels of access.
To manage add-on projects across your organization,
view and manage their associated Google Cloud projects. This guide describes how to
assign predefined roles that allow the role to view and manage all
Google Cloud projects in an organization. To learn more about available
permissions in Google Cloud, refer to IAM basic and predefined roles
reference .
Prerequisites
To assign permissions in Google Cloud, sign in to Google Workspace as a
super administrator .
Assign view permission for all Cloud projects in an organization
To give someone view permission for all Cloud projects in your organization
as a super administrator, follow these steps:
Open the Cloud console at console.cloud.google.com .
Click Menu menu
> IAM & Admin
> Manage Resources .
Select your organization.
At the right, click Add Principal .
In New principals , add the users or groups to let view projects.
In Select a role , in the first list, select Resource Manager . In the
second list, select Folder Viewer .
Click Save .
Assign edit permission for all Cloud projects in an organization
To give someone edit permission for all Cloud projects in an organization
as a super administrator, follow these steps:
Open the Cloud console at console.cloud.google.com .
Click Menu menu
> IAM & Admin
> Manage Resources .
Select your organization.
At the right, click Add Principal .
In New principals , add the users or groups to let edit projects.
In Select a role , in the first list, select Resource Manager . In the
second list, select Folder Viewer .
Click Add Another Role .
In Select a role , in the first list, select Resource Manager . In the
second list, select Project Mover .
Optionally, to allow someone to turn APIs on or off in
Cloud projects:
Click Add Another Role .
In Select a role , in the first list select Service Usage . In the
second list, select Service Usage Admin .
Click Save .
Assign delete permission for all Cloud projects in an organization
To give someone delete permission for all Cloud projects in an
organization as a super administrator, follow these steps:
Open the Google Cloud console at console.cloud.google.com .
Click Menu menu
> IAM & Admin
> Manage Resources .
Select your organization.
At the right, click Add Principal .
In New principals , add the users or groups to let delete projects.
In Select a role , in the first list, select Resource Manager . In the
second list, select Folder Viewer .
Click Add Another Role .
In Select a role , in the first list, select Resource Manager . In the
second list, select Project Deleter .
Click Save .
Related resources
IAM overview
Roles and permissions
IAM basic and predefined roles reference
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
