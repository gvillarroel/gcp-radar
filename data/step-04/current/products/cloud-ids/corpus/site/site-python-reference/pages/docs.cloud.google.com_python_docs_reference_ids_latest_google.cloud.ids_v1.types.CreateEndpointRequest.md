---
title: "Class CreateEndpointRequest (1.13.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/ids/latest/google.cloud.ids_v1.types.CreateEndpointRequest
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/ids/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/ids/latest/google.cloud.ids_v1.types.CreateEndpointRequest
  title: "Class CreateEndpointRequest (1.13.0) \_|\_ Python client libraries \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Class CreateEndpointRequest (1.13.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.13.0 (latest)
1.12.0
1.11.0
1.10.2
1.9.0
1.8.1
1.7.5
1.6.0
1.5.2
1.4.1
1.3.0
1.2.4
1.1.2
1.0.0
0.1.0
CreateEndpointRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Attributes
Name
Description
parent
str
Required. The endpoint's parent.
endpoint_id
str
Required. The endpoint identifier. This will be part of the
endpoint's resource name. This value must start with a
lowercase letter followed by up to 62 lowercase letters,
numbers, or hyphens, and cannot end with a hyphen. Values
that do not match this pattern will trigger an
INVALID_ARGUMENT error.
endpoint
google.cloud.ids_v1.types.Endpoint
Required. The endpoint to create.
request_id
str
An optional request ID to identify requests.
Specify a unique request ID so that if you must
retry your request, the server will know to
ignore the request if it has already been
completed. The server will guarantee that for at
least 60 minutes since the first request.
For example, consider a situation where you make
an initial request and t he request times out.
If you make the request again with the same
request ID, the server can check if original
operation with the same request ID was received,
and if so, will ignore the second request. This
prevents clients from accidentally creating
duplicate commitments.
The request ID must be a valid UUID with the
exception that zero UUID is not supported
(00000000-0000-0000-0000-000000000000).
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
