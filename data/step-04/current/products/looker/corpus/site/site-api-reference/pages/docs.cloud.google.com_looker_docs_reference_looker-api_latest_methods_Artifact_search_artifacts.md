---
title: "Search artifacts \_|\_ Looker \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/search_artifacts
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/looker/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/search_artifacts
  title: "Search artifacts \_|\_ Looker \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Looker
API Reference
Send feedback
Search artifacts
Stay organized with collections
Save and categorize content based on your preferences.
Version 4.0.26.6 (latest)
Search all key/value pairs in a namespace for matching criteria.
Returns an array of artifacts matching the specified search criteria.
Key search patterns use case-insensitive matching and can contain % and _ as SQL LIKE pattern match wildcard expressions.
The parameters min_size and max_size can be used individually or together.
min_size finds artifacts with sizes greater than or equal to its value
max_size finds artifacts with sizes less than or equal to its value
using both parameters restricts the minimum and maximum size range for artifacts
NOTE : Artifacts are always returned in alphanumeric order by key.
Get a single artifact by namespace and key with artifact
Note : The artifact storage API can only be used by Looker-built extensions.
Request
GET
/artifact/{namespace}/search
Datatype
Description
Request
HTTP Request
path
HTTP Path
Expand HTTP Path definition...
namespace
string
Artifact storage namespace
query
HTTP Query
Expand HTTP Query definition...
fields
string
Comma-delimited names of fields to return in responses. Omit for all fields
key
string
Key pattern to match
user_ids
string
Ids of users who created or updated the artifact (comma-delimited list)
min_size
integer
Minimum storage size of the artifact
max_size
integer
Maximum storage size of the artifact
limit
integer
Number of results to return. (used with offset)
offset
integer
Number of results to skip before returning any. (used with limit)
tally
boolean
Return the full count of results in the X-Total-Count response header. (Slight performance hit.)
Response
200: Artifacts
Datatype
Description
(array)
Artifact []
key
string
Key of value to store. Namespace + Key must be unique.
value
string
Value to store.
content_type
string
MIME type of content. This can only be used to override content that is detected as text/plain. Needed to set application/json content types, which are analyzed as plain text.
version
lock
integer
Version number of the stored value. The version must be provided for any updates to an existing artifact.
namespace
lock
string
Artifact storage namespace.
created_at
lock
string
Timestamp when this artifact was created.
updated_at
lock
string
Timestamp when this artifact was updated.
value_size
lock
integer
Size (in bytes) of the stored value.
created_by_userid
lock
string
User id of the artifact creator.
updated_by_userid
lock
string
User id of the artifact updater.
400: Bad Request
Datatype
Description
(object)
Error
message
lock
string
Error details
documentation_url
lock
string
Documentation link
404: Not Found
Datatype
Description
(object)
Error
message
lock
string
Error details
documentation_url
lock
string
Documentation link
422: Validation Error
Datatype
Description
(object)
ValidationError
message
lock
string
Error details
errors
ValidationErrorDetail []
Expand ValidationErrorDetail definition...
field
lock
string
Field with error
code
lock
string
Error code
message
lock
string
Error info message
documentation_url
lock
string
Documentation link
documentation_url
lock
string
Documentation link
429: Too Many Requests
Datatype
Description
(object)
Error
message
lock
string
Error details
documentation_url
lock
string
Documentation link
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-25 UTC."],[],[]]
