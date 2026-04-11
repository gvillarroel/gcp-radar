---
title: "View or edit Google Cloud projects \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/guides/admin/view-cloud-projects
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/apps-script
source_metadata:
  url: https://developers.google.com/apps-script/guides/admin/view-cloud-projects
  title: "View or edit Google Cloud projects \_|\_ Apps Script \_|\_ Google for Developers"
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
View or edit Google Cloud projects
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Every Apps Script project is associated with one of two types of Cloud projects: Default or Standard.
Default Cloud projects are automatically created and managed by Apps Script.
Standard Cloud projects are created and managed by users for advanced use cases.
Viewing or editing Cloud projects in the Cloud console requires specific resourcemanager permissions.
Default Cloud projects are located within specific folders in the Cloud resource hierarchy that should not be deleted.
Every Google Apps Script project is associated with a project in
Google Cloud. There are 2 types of Cloud projects for
Apps Script:
Default Cloud projects : Apps Script automatically
creates and manages a Google Cloud project each time someone creates and runs an
Apps Script project. To learn more, refer to
Default Cloud projects .
Standard Cloud projects : Users can create and manage their own
Cloud projects for advanced Apps Script use cases. To learn
more, see
Standard Cloud projects .
To view your organization's default and standard Cloud projects in the
Cloud console, obtain the resourcemanager.projects.list permission for your
organization. To view standard and default projects separately, obtain
resourcemanager.folders.list permission. To set view permissions for
projects in your organization, see Assign view permission for all Cloud
projects in an organization .
To edit your organization's standard and default Cloud projects in the
Cloud console, obtain the resourcemanager.projects.update permission for your
organization. To set edit permissions for projects in your organization, see
Assign edit permission for all Cloud projects in an organization .
View or edit default Cloud projects
Default projects are in the Organization root > system-gsuite > apps-script
folder in the Cloud resource hierarchy. Don't delete these folders. If you do,
Apps Script cannot create default projects and won't execute
scripts properly.
To view the system-gsuite and apps-script folders, obtain
resourcemanager.folders.list permission. If you only have
resourcemanager.projects.list permission, standard and default projects show
up together in one list. Default project IDs start with sys- .
To view or edit the default projects in your organization, follow these steps:
Open the Cloud console at console.cloud.google.com .
Click Menu menu
> IAM & Admin
> Manage Resources .
Next to your organization, click Expand node
arrow_drop_down .
Next to the system-gsuite folder, click Expand node
arrow_drop_down .
Next to the apps-script folder, copy the ID.
Click Filter > Parent ID .
Paste the Apps Script folder ID and press Enter .
Next to the project you want to view or edit, click
More more_vert
> Settings . The project opens in the
Cloud console, where you can modify it.
View or edit standard Cloud projects
To view or edit the standard projects in your organization, follow these steps:
Open the Cloud console at console.cloud.google.com .
Click Menu menu
> IAM & Admin
> Manage Resources .
Next to your organization, click Expand node
arrow_drop_down . The list of projects
includes all standard Cloud projects whether or not they have
Apps Script projects associated with them.
If you don't have resourcemanager.folders.list permission, default
Cloud projects might appear in the same list as standard Cloud projects.
To tell the difference, default project IDs start with sys- .
Next to the project you want to view or edit, click
More more_vert
> Settings . The project opens in the
Cloud console, where you can modify it.
Related resources
Creating and managing projects
Turn Google Cloud on or off for users
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
