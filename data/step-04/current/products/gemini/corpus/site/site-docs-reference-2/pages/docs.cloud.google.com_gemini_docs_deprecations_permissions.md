---
title: "Deprecated IAM permissions \_|\_ Gemini for Google Cloud \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/gemini/docs/deprecations/permissions
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/gemini/docs/deprecations/permissions
  title: "Deprecated IAM permissions \_|\_ Gemini for Google Cloud \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Gemini for Google Cloud
Resources
Send feedback
Deprecated IAM permissions
Stay organized with collections
Save and categorize content based on your preferences.
The following Identity and Access Management (IAM) permissions will be deprecated February
1, 2026:
cloudaicompanion.companions.generateChat
cloudaicompanion.companions.generateCode
To prepare for this change, take the following steps:
Identify any custom IAM roles that you have that control
access to the Gemini for Google Cloud API:
In the Google Cloud console, go to the Roles page.
Go to Roles
In the Google Cloud console toolbar, select your organization or
project from the list.
To view role permissions, select the checkbox for one or more roles.
An adjacent pane displays any permissions contained in the roles.
The icons in the Type column indicate if it's a custom role
("factory" icon) or a predefined role
(hexagon icon).
If you want to find all the roles that include a specific permission,
type the permission name in the Filter field at the beginning of the
Roles list.
Add new permissions. Before February 1, 2026, add the following new
permissions to your custom roles:
cloudaicompanion.instances.completeCode
cloudaicompanion.instances.completeTask
cloudaicompanion.instances.generateCode
cloudaicompanion.instances.generateText
Retain old permissions. Until February 1, 2026, keep the following
permissions in your custom roles:
cloudaicompanion.companions.generateChat
cloudaicompanion.companions.generateCode
After February 1, 2026, you can safely remove the old permissions from your
custom roles.
For more information about updating custom roles, see
Create and manage custom roles .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
