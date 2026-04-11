---
title: "REST Resource: projects.locations.codeRepositoryIndexes \_|\_ Gemini for Google\
  \ Cloud \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeRepositoryIndexes
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/docs/api/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.codeRepositoryIndexes
  title: "REST Resource: projects.locations.codeRepositoryIndexes \_|\_ Gemini for\
    \ Google Cloud \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Gemini for Google Cloud
API and references
Send feedback
REST Resource: projects.locations.codeRepositoryIndexes
Stay organized with collections
Save and categorize content based on your preferences.
Resource: CodeRepositoryIndex
JSON representation
State
Methods
Resource: CodeRepositoryIndex
Message describing CodeRepositoryIndex object
JSON representation
{
"name" : string ,
"createTime" : string ,
"updateTime" : string ,
"state" : enum ( State ) ,
"labels" : {
string : string ,
...
} ,
"kmsKey" : string
}
Fields
name
string
Immutable. Identifier. name of resource
createTime
string ( Timestamp format)
Output only. Create time stamp
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. Update time stamp
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
state
enum ( State )
Output only. Code Repository Index instance State
labels
map (key: string, value: string)
Optional. Labels as key value pairs
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
kmsKey
string
Optional. Immutable. Customer-managed encryption key name, in the format projects/*/locations/*/keyRings/*/cryptoKeys/*.
State
Code Repository Index instance state.
Enums
STATE_UNSPECIFIED
Not set.
CREATING
Instance is being created.
ACTIVE
Instance is active.
DELETING
Instance is being deleted.
SUSPENDED
Instance is suspended.
Methods
create
Creates a new CodeRepositoryIndex in a given project and location.
delete
Deletes a single CodeRepositoryIndex.
get
Gets details of a single CodeRepositoryIndex.
list
Lists CodeRepositoryIndexes in a given project and location.
patch
Updates the parameters of a single CodeRepositoryIndex.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-12 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-12 UTC."],[],[]]
