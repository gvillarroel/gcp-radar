---
title: "Create or update artifacts \_|\_ Looker \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/looker/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Artifact/update_artifacts
  title: "Create or update artifacts \_|\_ Looker \_|\_ Google Cloud Documentation"
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
Create or update artifacts
Stay organized with collections
Save and categorize content based on your preferences.
Version 4.0.26.6 (latest)
Create or update one or more artifacts
Only key and value are required to create an artifact.
To update an artifact, its current version value must be provided.
In the following example body payload, one and two are existing artifacts, and three is new:
[
{ "key": "one", "value": "[ \"updating\", \"existing\", \"one\" ]", "version": 10, "content_type": "application/json" },
{ "key": "two", "value": "updating existing two", "version": 20 },
{ "key": "three", "value": "creating new three" },
]
Notes for this body:
The value for key one is a JSON payload, so a content_type override is needed. This override must be done every time a JSON value is set.
The version values for one and two mean they have been saved 10 and 20 times, respectively.
If version is not provided for an existing artifact, the entire request will be refused and a Bad Request response will be sent.
If version is provided for an artifact, it is only used for helping to prevent inadvertent data overwrites. It cannot be used to set the version of an artifact. The Looker server controls version .
We suggest encoding binary values as base64. Because the MIME content type for base64 is detected as plain text, also provide content_type to correctly indicate the value's type for retrieval and client-side processing.
Because artifacts are stored encrypted, the same value can be written multiple times (provided the correct version number is used). Looker does not examine any values stored in the artifact store, and only decrypts when sending artifacts back in an API response.
Note : The artifact storage API can only be used by Looker-built extensions.
Request
PUT
/artifacts/{namespace}
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
body
HTTP Body
Expand HTTP Body definition...
body
UpdateArtifact []
Expand UpdateArtifact definition...
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
query
HTTP Query
Expand HTTP Query definition...
fields
string
Comma-delimited names of fields to return in responses. Omit for all fields
Response
200: Created or updated artifacts
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
