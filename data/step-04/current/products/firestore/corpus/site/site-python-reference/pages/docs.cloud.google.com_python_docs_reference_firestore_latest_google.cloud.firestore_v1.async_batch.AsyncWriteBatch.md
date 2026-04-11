---
title: "Class AsyncWriteBatch (2.23.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_v1.async_batch.AsyncWriteBatch
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/firestore/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/firestore/latest/google.cloud.firestore_v1.async_batch.AsyncWriteBatch
  title: "Class AsyncWriteBatch (2.23.0) \_|\_ Python client libraries \_|\_ Google\
    \ Cloud Documentation"
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
Class AsyncWriteBatch (2.23.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
2.23.0 (latest)
2.22.0
2.21.0
2.20.2
2.19.0
2.18.0
2.17.2
2.16.1
2.15.0
2.14.0
2.13.1
2.12.0
2.11.1
2.10.1
2.9.1
2.8.0
2.7.3
2.6.1
2.5.3
2.4.0
2.3.4
2.2.0
2.1.3
2.0.2
1.9.2
1.8.1
1.7.0
1.6.2
1.5.0
1.4.0
1.3.0
AsyncWriteBatch ( client )
Accumulate write operations to be sent in a batch.
This has the same set of methods for write operations that
xref_AsyncDocumentReference does,
e.g. xref_create.
Parameter
Name
Description
client
AsyncClient
The client that created this batch.
Methods
commit
commit (
retry : (
google . api_core . retry . retry_unary_async . AsyncRetry | object | None
) = _MethodDefault . _DEFAULT_VALUE ,
timeout : typing . Optional [ float ] = None ,
) - > list [ google . cloud . firestore_v1 . types . write . WriteResult ]
Commit the changes accumulated in this batch.
Parameters
Name
Description
retry
google.api_core.retry.Retry
Designation of what errors, if any, should be retried. Defaults to a system-specified policy.
timeout
float
The timeout for this request. Defaults to a system-specified value.
Returns
Type
Description
List[ WriteResult , ...]
The write results corresponding to the changes committed, returned in the same order as the changes were applied to this batch. A write result contains an update_time field.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
