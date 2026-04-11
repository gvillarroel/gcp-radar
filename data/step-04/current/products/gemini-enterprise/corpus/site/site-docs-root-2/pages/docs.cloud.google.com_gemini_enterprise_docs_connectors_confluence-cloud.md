---
title: "Overview \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/enterprise/docs/concepts
source_metadata:
  url: https://docs.cloud.google.com/gemini/enterprise/docs/connectors/confluence-cloud
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
The Confluence Cloud data store for Gemini Enterprise lets you search and perform actions on your spaces, pages, and user information.
Supported Confluence Cloud versions
The Confluence Cloud data store supports Confluence REST API versions v1.
Supported actions
When the Confluence Cloud data store is enabled, end users can use natural language commands in Gemini Enterprise to perform the following actions.
Action
Description
Create page
Creates a new Confluence page in a specified space with content and a title.
Download attachment
Downloads an attachment from a Confluence page.
Upload attachment
Uploads an attachment to a Confluence page.
Note: Additional read-only actions are also available.
Required scopes
To enable Gemini Enterprise to perform search and data ingestion using the Confluence Cloud data store, you need the following scopes:
Usage reason
Permission
Description
Data ingestion
read:content-details:confluence
Allows the data store to read content details in Confluence.
read:attachment:confluence
Allows the data store to download and read attachments.
read:comment:confluence
Allows the data store to read comments.
read:page:confluence
Allows the data store to read pages.
read:whiteboard:confluence
Allows the data store to read whiteboards.
read:space:confluence
Allows the data store to read spaces.
read:group:confluence
Allows the data store to read groups.
read:user:confluence
Allows the data store to read users.
read:content.metadata:confluence
Allows the data store to read content metadata.
read:configuration:confluence
Allows the data store to read configurations.
Federated search
search:confluence
Allows the data store to perform search queries in Confluence.
Actions
write:page:confluence
Allows the data store to create pages in Confluence.
write:attachment:confluence
Allows the data store to upload attachments to Confluence pages.
write:confluence-content
Allows the data store to write content in Confluence.
write:confluence-file
Allows the data store to upload attachments to Confluence.
read:attachment:confluence
Allows the data store to download and read attachments.
read:comment:confluence
Allows the data store to read comments.
read:configuration:confluence
Allows the data store to read configurations.
read:confluence-content.all
Allows the data store to read all Confluence content.
read:confluence-space.summary
Allows the data store to read space summaries.
read:content-details:confluence
Allows the data store to read content details in Confluence.
read:content.metadata:confluence
Allows the data store to read content metadata.
read:group:confluence
Allows the data store to read groups.
read:me
Allows the data store to read current user information.
read:page:confluence
Allows the data store to read pages.
read:space:confluence
Allows the data store to read spaces.
read:space-details:confluence
Allows the data store to read space details.
read:task:confluence
Allows the data store to read tasks.
read:user:confluence
Allows the data store to read users.
search:confluence
Allows the data store to perform search queries in Confluence.
For information on how to configure these scopes, see Enable OAuth 2.0 and configure scopes .
Rate limits for data ingestion
The Confluence Cloud data store supports a default rate limit of 20 queries per second (QPS) for data ingestion. These rate limits apply exclusively to the ingestion of data from the Confluence Cloud data store.
Limitations
This section outlines known issues and limitations that may affect your use of the Confluence Cloud data store.
When creating a new app or adding a data store to an existing one, it's recommended to associate only one data store with actions belonging to a single connector type.
Enforcing a VPC Service Controls perimeter on existing Confluence Cloud data stores is not supported.
To enforce VPC Service Controls, you must delete and recreate the data stores. For more information on VPC Service Controls
and how to use actions after enabling VPC Service Controls, see Secure your app with VPC Service Controls .
The Confluence Cloud data store is supported only in the
global , us , and eu
locations.
The following are the limitations for the Confluence Cloud ingestion data store:
The legacy user management model is not supported for integration with Confluence Cloud. Only the centralized user management model is supported. For more information, see Atlassian organization consolidation guide
The appearance of the macros that you added on Confluence pages might differ from user to user based on their access permissions.
The data store doesn't support incremental sync for the spaces entity.
You can't use a Google Cloud service account to authenticate to Confluence Cloud.
The data store doesn't include archived pages in a full sync operation, and those pages are indexed as deleted.
The data store doesn't support spaces and entities shared using anonymous access, guest links, or public URLs.
What's next
To create and configure a data store with Confluence Cloud, see Set up a Confluence Cloud data store .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
