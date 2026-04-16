---
title: "RepoSource \_|\_ Cloud Build \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/build/docs/api/reference/rest/v1/RepoSource
knowledge_key: corpus
source_id: site-api-reference-required-1
source_type: site
entrypoint: https://docs.cloud.google.com/build/docs/api/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/build/docs/api/reference/rest/v1/RepoSource
  title: "RepoSource \_|\_ Cloud Build \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Build
Reference
Send feedback
RepoSource
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Location of the source in a Google Cloud Source Repository.
JSON representation
{
"projectId" : string ,
"repoName" : string ,
"dir" : string ,
"invertRegex" : boolean ,
"substitutions" : {
string : string ,
...
} ,
// Union field revision can be only one of the following:
"branchName" : string ,
"tagName" : string ,
"commitSha" : string
// End of list of possible types for union field revision .
}
Fields
projectId
string
Optional. ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed.
repoName
string
Required. Name of the Cloud Source Repository.
dir
string
Optional. Directory, relative to the source root, in which to run the build.
This must be a relative path. If a step's dir is specified and is an absolute path, this value is ignored for that step's execution.
invertRegex
boolean
Optional. Only trigger a build if the revision regex does NOT match the revision regex.
substitutions
map (key: string, value: string)
Optional. Substitutions to use in a triggered build. Should only be used with triggers.run
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
Union field revision . A revision within the Cloud Source Repository must be specified in one of these ways. revision can be only one of the following:
branchName
string
Regex matching branches to build.
The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax
tagName
string
Regex matching tags to build.
The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax
commitSha
string
Explicit commit SHA to build.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-17 UTC."],[],[]]
