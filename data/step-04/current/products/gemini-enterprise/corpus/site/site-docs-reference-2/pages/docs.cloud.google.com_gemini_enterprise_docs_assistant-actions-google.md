---
title: "Manage actions \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/enterprise/docs/assistant-actions-google
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/enterprise/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/gemini/enterprise/docs/assistant-actions-google
  title: "Manage actions \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Note: This documentation applies to the Standard, Plus, and Frontline editions of Gemini Enterprise. For information about the Business edition, see the Gemini Enterprise - Business edition Help Center .
Home
Documentation
AI and ML
Gemini Enterprise
Send feedback
Manage actions
Stay organized with collections
Save and categorize content based on your preferences.
You can add actions either during data store creation or later. This document provides steps to add new actions after data store creation, and manage the list of actions.
Add actions
Console
To add new actions to the data store, follow these steps:
In the Google Cloud console, go to the Gemini Enterprise page.
Gemini Enterprise
In the navigation menu, click Data Stores .
Select a data store of your choice.
From the navigation menu, select Actions .
On the Actions page:
If actions were not added during data store creation, click Enable actions . Then, on the Enable actions page, to add new actions, do the following:
For a federated data store:
Select the actions from the list.
Click Enable actions .
For an ingestion data store:
Expand the Authentication settings section and provide the authentication details.
Click Login and sign in to the data store to verify your account.
Click Continue .
Optional: Expand the Advanced settings and provide the necessary details.
Select the actions to enable.
Click Enable actions .
To add additional actions to the existing list, do the following:
Select the actions from the list.
Click Enable actions .
To reauthenticate using different credentials than those used for creating the data store, do the following:
Click Re-authenticate on the Actions page.
Provide the authentication details.
Click Login to authorize Gemini Enterprise to access the data store.
Click Update to update the new authentication details.
To view or edit the data store parameters for actions, do the following:
Click View/Edit parameters to edit connector-specific details. For example, for Microsoft Outlook, SharePoint, OneDrive, provide the Tenant ID.
Click Save to update the parameter details.
View actions
Console
To view the list of actions for a data store, do the following:
In the Google Cloud console, go to the Gemini Enterprise page.
Gemini Enterprise
In the navigation menu, click Data Stores .
Select the data store of your choice.
From the navigation menu, select Actions . The actions you enabled during data store creation appear as a table on the Actions page.
Disable actions
Console
To disable actions, do the following:
In the Google Cloud console, go to the Gemini Enterprise page.
Gemini Enterprise
In the navigation menu, click Data Stores .
Select the data store of your choice.
Select Actions from the navigation menu.
Select the actions to disable from the table.
Click Disable actions .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
