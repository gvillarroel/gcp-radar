---
title: "SyncRepoMetadata \_|\_ Cloud Source Repositories \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/SyncRepoMetadata
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/source-repositories/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/SyncRepoMetadata
  title: "SyncRepoMetadata \_|\_ Cloud Source Repositories \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Effective June 17, 2024, Cloud Source Repositories isn't available to new customers. For alternative source hosting options, Secure Source Manager is a regionally deployed, single tenant, managed source code repository hosted on Google Cloud.
If your organization hasn't previously used Cloud Source Repositories, you can't enable the API or use Cloud Source Repositories. New projects not connected to an organization can't enable the Cloud Source Repositories API. Organizations that have used Cloud Source Repositories prior to June 17, 2024 are not affected by this change.
Home
Documentation
Application development
Cloud Source Repositories
Reference
Send feedback
SyncRepoMetadata
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Metadata of repos.sync.
This message is in the metadata field of Operation.
JSON representation
{
"name" : string ,
"statusMessage" : string ,
"startTime" : string ,
"updateTime" : string
}
Fields
name
string
The name of the repo being synchronized. Values are of the form projects/<project>/repos/<repo> .
statusMessage
string
The latest status message on syncing the repository.
startTime
string ( Timestamp format)
The time this operation is started.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
updateTime
string ( Timestamp format)
The time this operation's status message is updated.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
