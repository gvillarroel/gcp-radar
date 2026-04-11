---
title: "Class AddAssetsToGroupRequest (0.4.0) \_|\_ Python client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.types.AddAssetsToGroupRequest
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/migrationcenter/latest/google.cloud.migrationcenter_v1.types.AddAssetsToGroupRequest
  title: "Class AddAssetsToGroupRequest (0.4.0) \_|\_ Python client libraries \_|\_\
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
Class AddAssetsToGroupRequest (0.4.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.4.0 (latest)
0.3.0
0.2.0
0.1.15
AddAssetsToGroupRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
A request to add assets to a group.
Attributes
Name
Description
group
str
Required. Group reference.
request_id
str
Optional. An optional request ID to identify
requests. Specify a unique request ID so that if
you must retry your request, the server will
know to ignore the request if it has already
been completed. The server will guarantee that
for at least 60 minutes after the first request.
For example, consider a situation where you make
an initial request and the request times out. If
you make the request again with the same request
ID, the server can check if original operation
with the same request ID was received, and if
so, will ignore the second request. This
prevents clients from accidentally creating
duplicate commitments.
The request ID must be a valid UUID with the
exception that zero UUID is not supported
(00000000-0000-0000-0000-000000000000).
assets
google.cloud.migrationcenter_v1.types.AssetList
Required. List of assets to be added.
The maximum number of assets that can be added
in a single request is 1000.
allow_existing
bool
Optional. When this value is set to false and one of the
given assets is already an existing member of the group, the
operation fails with an Already Exists error. When set
to true this situation is silently ignored by the
server.
Default value is false .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
