---
title: "Package apps.extensions.markup \_|\_ Google Chat \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/api/reference/rpc/apps.extensions.markup
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/chat/api/reference/rpc/google.chat.v1
source_metadata:
  url: https://developers.google.com/workspace/chat/api/reference/rpc/apps.extensions.markup
  title: "Package apps.extensions.markup \_|\_ Google Chat \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Chat
Reference
Send feedback
Package apps.extensions.markup
Stay organized with collections
Save and categorize content based on your preferences.
Index
ChatClientDataSourceMarkup (message)
ChatClientDataSourceMarkup.SpaceDataSource (message)
HostAppDataSourceMarkup (message)
ChatClientDataSourceMarkup
For a SelectionInput widget that uses a multiselect menu, a data source from Google Chat. The data source populates selection items for the multiselect menu. For example, a user can select Google Chat spaces that they're a member of.
Available for Google Chat apps and unavailable for Google Workspace add-ons.
Fields
Union field source . The Google Chat data source. source can be only one of the following:
space_data_source
SpaceDataSource
Google Chat spaces that the user is a member of.
SpaceDataSource
A data source that populates Google Chat spaces as selection items for a multiselect menu. Only populates spaces that the user is a member of.
Available for Google Chat apps and unavailable for Google Workspace add-ons.
Fields
default_to_current_space
bool
If set to true , the multiselect menu selects the current Google Chat space as an item by default.
HostAppDataSourceMarkup
For a SelectionInput widget that uses a multiselect menu, a data source from a Google Workspace application. The data source populates selection items for the multiselect menu.
Available for Google Chat apps and unavailable for Google Workspace add-ons.
Fields
Union field data_source . The Google Workspace application that populates items for a multiselect menu. data_source can be only one of the following:
chat_data_source
ChatClientDataSourceMarkup
A data source from Google Chat.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-06 UTC."],[],[]]
