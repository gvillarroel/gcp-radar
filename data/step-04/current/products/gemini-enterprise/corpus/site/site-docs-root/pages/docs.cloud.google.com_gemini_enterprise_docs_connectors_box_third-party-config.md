---
title: "Box configuration \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/third-party-config
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/enterprise/docs
source_metadata:
  url: https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/third-party-config
  title: "Box configuration \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
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
Box configuration
Stay organized with collections
Save and categorize content based on your preferences.
Private preview: Creating and using a data store using data ingestion is in private preview. You need to be on the allowlist to use the data ingestion data store. To be added to the allowlist, contact your account team or the
sales team .
Public preview: The federated search and actions features are in public preview. This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms . Pre-GA features are available "as is" and might have limited support. For more information, see the launch stage descriptions .
This page describes how to set up and configure a third-party configuration before creating the Box data store.
Create a Box app
Sign in to the Box Developer Console
with your administrator account.
Click Create platform app .
Select App type as Custom app .
Enter the App name .
Set the following properties:
Purpose: Integration.
Categories: AI.
External system: Google Cloud Gemini Enterprise.
Select Authentication method as Server Auth - JWT .
Click Create App .
Configure the Box app
In the Box Developer Console , select the
Platform app from the My Platform Apps page.
My Platform Apps page in the Box Developer Console.
In the Configuration tab, do the following:
In the App access level section, select App + Enterprise access .
Note: App + Enterprise access is required to fetch files, comments, and tasks
from individual user accounts. Furthermore, this access level is necessary
for incremental sync functionality. The Enterprise event stream relies on this level to identify and
retrieve new and modified files, comments, and tasks efficiently.
Configure the Box app.
In the Application scopes section, select the scopes based on the connection mode from the following table:
Connection mode
Scope
Purpose
Federated search
Read all files and folders stored in Box
Required to fetch comments and tasks, and to preview files for search.
Federated search and actions
Write all files and folders stored in Box
Required to copy files, upload files and download files, fetch comments and tasks, and to preview files for search.
Data ingestion
Read all files and folders stored in Box
Required for data ingestion.
Manage users
Required to fetch the list of users, enabling retrieval of files, comments, and tasks from individual user accounts for ingestion. The administrator service account does not inherently possess access to all user-owned files. The as-user header enables the system to make API requests as the specific user to access their data.
Manage enterprise properties
Necessary for incremental sync functionality, as it facilitates the use of the Enterprise event stream to track changes for ingestion.
Manage groups
Required to fetch the list of groups and their members. This is critical for access control during ingestion.
Note: If you only intend to use the data store for search and not to
perform any actions that modify content in Box, you can
limit the scope to Read all files and folders stored in Box . The
Write all files and folders stored in Box scope is required for
actions that involve updating content in
Box. For more information, see actions
In the Add and manage public keys section, click
Generate a public/private keypair .
The public key is automatically uploaded to the console with an
ID, used when creating a connection.
You can download a configuration file with the private key and passphrase. Be sure to keep this file for later use.
Optionally, to generate your own key, see the Box keypair setup guide .
Click Save changes .
Authorize the Box app
To authorize the Box app from the Developer console, do the following:
In the Box Developer Console , select the
Platform app, and then go to the Authorization tab.
Click Review and submit .
In the Review app authorization submission dialog, click Submit .
If the authorization request is submitted successfully, the following
confirmation message is shown:
Authorization request is successfully sent.
To authorize the Box app from the Box admin platform apps manager, do the following:
Sign in to the Box admin platform apps manager
with your administrator account.
Choose the Platform app that you have configured.
Click the three dots ( ... ) in the corresponding row.
Select Authorize app from the drop-down list.
In the Authorize app dialog, click Authorize to complete the
authorization process.
Obtain Box authentication information
To obtain the Box authentication information, do the following:
In the Box Developer Console , select the
Platform app from the My Platform Apps page.
Enterprise ID : Obtain it from the General settings tab.
Obtain the Enterprise ID.
Client ID and Client secret : Obtain it from the Configuration
tab under OAuth 2.0 credentials .
Obtain the client configuration.
Private key , Key ID , and Passphrase : These parameters were
generated and downloaded to a local file from the
Configuration tab under Add and manage public keys while
configuring the app.
Add and manage public keys.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
