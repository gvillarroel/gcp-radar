---
title: "Overview \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/enterprise/docs
source_metadata:
  url: https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-dc
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
Public preview: The federated search is in public preview. This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms . Pre-GA features are available "as is" and might have limited support. For more information, see the launch stage descriptions .
The Confluence Data Center data store for Gemini Enterprise lets you search and perform actions on page content, attachments, and comments.
Supported Confluence Data Center versions
The Confluence Data Center data store supports Confluence Data Center version 7.19.0 and later.
Supported actions
When the Confluence Data Center connector is enabled, the end user can use natural language commands in Gemini Enterprise to perform the following actions.
Action
Description
Upload attachment
Add an attachment to a Confluence Data Center page.
Download attachment
Download an attachment from a Confluence Data Center page.
Note: Additional read-only actions are also available.
Required permissions
To enable Gemini Enterprise to perform necessary search, actions, and data ingestion, the following permissions are required:
Connection mode
Permissions
Purpose
Data ingestion
Read
Required to ingest Confluence page content, attachments, and comments.
Federated search and actions
Write
Required to search Confluence page content, attachments, and comments, and to upload attachments.
For information about how to configure these permissions, see Set up OAuth 2.0
authentication and add permissions .
Limitations
Enforcing a VPC Service Controls perimeter on existing Confluence Data Center data stores is not supported. To enforce VPC Service Controls, you must delete and recreate the data stores. For more information on VPC Service Controls and how to use actions after enabling VPC Service Controls, see Secure your app with VPC Service Controls .
When creating a new application or adding a data store to an existing application, it's recommended that you add a data store with actions belonging to a single connector type. For example, don't associate two Confluence Data Center data stores with actions enabled to the same application.
The Confluence Data Center data store is supported only in Global, US, and EU locations.
What's next
To create and configure a data store with Confluence Data Center, see Set up a Confluence Data Center data store .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
