---
title: "Confluence Data Center configuration \_|\_ Gemini Enterprise \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/confluence-datacenter-configuration
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/enterprise/docs
source_metadata:
  url: https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc/confluence-datacenter-configuration
  title: "Confluence Data Center configuration \_|\_ Gemini Enterprise \_|\_ Google\
    \ Cloud Documentation"
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
Confluence Data Center configuration
Stay organized with collections
Save and categorize content based on your preferences.
Private preview: Creating and using a data store using data ingestion is in private preview. You need to be on the allowlist to use the data ingestion data store. To be added to the allowlist, contact your account team or the
sales team .
Public preview: The federated search is in public preview. This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms . Pre-GA features are available "as is" and might have limited support. For more information, see the launch stage descriptions .
To connect Gemini Enterprise to your Confluence Data Center instance, complete the following configuration steps.
Create a user and grant administrator access
To create a new user and add the user to the administrator group, do the following:
Sign in to your Confluence Data Center instance at the base URL with administrator credentials. The base URL is typically in the format https://confluence.yourcompany.com .
To create a new user, follow these steps:
Click the settings icon settings and select User management from the list.
Enter the administrator credentials, if prompted.
In the Administration page, click Create user .
Enter the email address, full name, username, and password.
Click Create user .
To add the newly created user to the administrators group, follow these steps:
Click Groups from the navigation menu.
Search for the confluence-administrators group and open it.
Click Add/Remove Users and add the newly created user to this group.
Set up OAuth 2.0 authentication and add permissions
To set up an incoming external application link using OAuth 2.0 in Confluence Data Center and obtain the client ID and client secret, follow these steps. You must have administrator privilege or the help of a Confluence Data Center administrator to complete this step.
Sign in to your Confluence Data Center instance at the base URL with administrator credentials. The base URL is typically in the format https://confluence.yourcompany.com .
Click the settings icon and select Applications from the list.
In the navigation menu, click Application links .
On the Application links page, click Create link .
In the Create link modal, configure the following:
Application type : Select External application .
Direction : Select Incoming .
Click Continue .
Configure the OAuth 2.0 details:
Name : Enter a name for the application link.
Redirect URL : Enter the following redirect URI:
https://vertexaisearch.cloud.google.com/oauth-redirect
Application permissions : Select Read or Write based on your specific connection mode:
Connection mode
Permissions
Purpose
Data ingestion
Read
Required to ingest Confluence page content, attachments, and comments.
Federated search and actions
Write
Required to search Confluence page content, attachments, and comments, and to upload attachments.
Click Continue . The client ID and client secret are automatically generated and displayed.
Client ID (Consumer Key) : Copy the unique ID provided.
Client Secret (Shared Secret) : Copy the client secret and store it securely, for example, in a password manager. The secret is displayed only once. If lost, you must create a new application link to generate new credentials.
Click Save . The newly created application link will appear in the list on the Application links page.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
