---
title: "REST Resource: projects.versions \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/apps-script/api/reference/rest
source_metadata:
  url: https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions
  title: "REST Resource: projects.versions \_|\_ Apps Script \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Apps Script
Reference
Send feedback
REST Resource: projects.versions
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
A Version is a snapshot of a script project, similar to a read-only branched release, used when creating deployments.
The JSON representation of a Version includes scriptId , versionNumber , description , and createTime .
Key fields include scriptId (the project's Drive ID), versionNumber (a system-assigned incremental ID), description , and createTime (when the version was created).
Available methods for Versions include create (to make a new version), get (to retrieve a specific version), and list (to list project versions).
Resource: Version
JSON representation
Methods
Resource: Version
A resource representing a script project version. A version is a "snapshot" of a script project and is similar to a read-only branched release. When creating deployments, the version to use must be specified.
JSON representation
{
"scriptId" : string ,
"versionNumber" : integer ,
"description" : string ,
"createTime" : string
}
Fields
scriptId
string
The script project's Drive ID.
versionNumber
integer
The incremental ID that is created by Apps Script when a version is created. This is system assigned number and is immutable once created.
description
string
The description for this version.
createTime
string ( Timestamp format)
When the version was created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
Methods
create
Creates a new immutable version using the current code, with a unique version number.
get
Gets a version of a script project.
list
List the versions of a script project.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-10-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-31 UTC."],[],[]]
