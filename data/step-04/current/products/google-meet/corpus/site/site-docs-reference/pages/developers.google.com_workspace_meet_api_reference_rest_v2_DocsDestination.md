---
title: "DocsDestination \_|\_ Google Meet \_|\_ Google for Developers"
url: https://developers.google.com/workspace/meet/api/reference/rest/v2/DocsDestination
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/meet/api/reference/rest/v2
source_metadata:
  url: https://developers.google.com/workspace/meet/api/reference/rest/v2/DocsDestination
  title: "DocsDestination \_|\_ Google Meet \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Meet
Reference
Send feedback
DocsDestination
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Google Docs location where the transcript file is saved.
JSON representation
{
"document" : string ,
"exportUri" : string
}
Fields
document
string
Output only. The document ID for the underlying Google Docs transcript file. For example, "1kuceFZohVoCh6FulBHxwy6I15Ogpc4hP". Use the documents.get method of the Google Docs API ( https://developers.google.com/docs/api/reference/rest/v1/documents/get ) to fetch the content.
exportUri
string
Output only. URI for the Google Docs transcript file. Use https://docs.google.com/document/d/{$DocumentId}/view to browse the transcript in the browser.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
