---
title: "Overview \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/enterprise/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box
  title: "Overview \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
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
Overview
Stay organized with collections
Save and categorize content based on your preferences.
Private preview: Creating and using a data store using data ingestion is in private preview. You need to be on the allowlist to use the data ingestion data store. To be added to the allowlist, contact your account team or the
sales team .
Public preview: The federated search and actions features are in public preview. This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms . Pre-GA features are available "as is" and might have limited support. For more information, see the launch stage descriptions .
The Box data store for Gemini Enterprise lets you search and perform actions on your Box data and records.
Supported Box versions
The Box data store supports Box API version 2024.0 .
Supported actions
When the Box data store is enabled, end users can use natural language commands in Gemini Enterprise to perform the following action.
Action
Description
Copy file
Creates a duplicate of a file within a destination folder while leaving the original file unchanged.
Upload file
Uploads a file to a specified folder in Box.
Download file
Downloads a file from Box.
Note: Additional read-only actions are also available.
Required scopes
To enable Gemini Enterprise to perform search, actions and data ingestion using the Box data store, you need the following scopes:
Connection mode
Scope
Purpose
Federated search
Read all files and folders stored in Box
Required to fetch comments and tasks, and to preview files for search.
Federated search and actions
Write all files and folders stored in Box
Required to copy, upload, and download files, and also to fetch comments and tasks, and to preview files for search.
Data ingestion
Read all files and folders stored in Box
Required for data ingestion.
Manage users
Required to fetch the list of users, enabling retrieval of files, comments, and tasks from individual user accounts for ingestion. The administrator service account does not inherently possess access to all user-owned files. The as-user header enables the system to make API requests as the specific user to access their data.
Manage enterprise properties
Necessary for incremental sync functionality, as it facilitates the use of the Enterprise event stream to track changes for ingestion.
Manage groups
Required to fetch the list of groups and their members. This is critical for access control during ingestion.
For information about how to add these permissions for Box, see Configure Box and set the necessary permissions .
Limitations
The Box data store for Gemini Enterprise has the following limitations:
When creating a new app or adding a data store to an existing one, it's recommended to associate only one data store with actions belonging to a single connector type.
Enforcing a VPC Service Controls perimeter on existing Box data stores is not supported.
To enforce VPC Service Controls, you must delete and recreate the data stores. For more information on VPC Service Controls
and how to use actions after enabling VPC Service Controls, see Secure your app with VPC Service Controls .
The Box data store is supported only in the
global , us , and eu
locations.
The Box federated data store uses Box APIs for search. Consequently, search quality depends on the results provided by Box search. This can result in limitations in search quality for non-English languages, because Box APIs might not be fully optimized for them. To achieve better search quality in these scenarios, use the ingestion data store instead.
What's next
To create and configure a data store with Box, see Set up a Box data store .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
