---
title: "Create Embed Secret \_|\_ Looker \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_embed_secret
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/looker/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/create_embed_secret
  title: "Create Embed Secret \_|\_ Looker \_|\_ Google Cloud Documentation"
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
Create Embed Secret
Stay organized with collections
Save and categorize content based on your preferences.
Version 4.0.26.6 (latest)
Create an embed secret using the specified information.
The value of the secret field will be set by Looker and returned.
NOTE : Calls to this endpoint require Embedding to be enabled. Usage of this endpoint is not authorized for Looker Core Standard and Looker Core Enterprise.
Request
POST
/embed_config/secrets
Datatype
Description
Request
HTTP Request
body
HTTP Body
Expand HTTP Body definition...
body
EmbedSecret
embed secret
Expand EmbedSecret definition...
algorithm
string
Signing algorithm to use with this secret. Either `hmac/sha-256`(default) or `hmac/sha-1`
created_at
lock
string
When secret was created
enabled
boolean
Is this secret currently enabled
id
lock
string
Unique Id
secret
lock
string
Secret for use with SSO embedding
user_id
lock
string
Id of user who created this secret
secret_type
string
Field to distinguish between SSO secrets and JWT secrets Valid values are: "SSO", "JWT".
Response
200: embed secret
Datatype
Description
(object)
EmbedSecret
algorithm
string
Signing algorithm to use with this secret. Either `hmac/sha-256`(default) or `hmac/sha-1`
created_at
lock
string
When secret was created
enabled
boolean
Is this secret currently enabled
id
lock
string
Unique Id
secret
lock
string
Secret for use with SSO embedding
user_id
lock
string
Id of user who created this secret
secret_type
string
Field to distinguish between SSO secrets and JWT secrets Valid values are: "SSO", "JWT".
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
403: Permission Denied
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
409: Resource Already Exists
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
