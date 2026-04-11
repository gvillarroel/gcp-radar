---
title: "Class BatchProcessMetadata (3.14.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.types.BatchProcessMetadata
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/documentai/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/documentai/latest/google.cloud.documentai_v1.types.BatchProcessMetadata
  title: "Class BatchProcessMetadata (3.14.0) \_|\_ Python client libraries \_|\_\
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
Class BatchProcessMetadata (3.14.0)
Stay organized with collections
Save and categorize content based on your preferences.
3.14.0 (latest)
3.13.0
3.12.0
3.10.0
3.9.0
3.8.0
3.7.0
3.6.0
3.5.0
3.4.0
3.3.0
3.2.0
3.1.0
3.0.1
2.35.0
2.34.0
2.33.0
2.32.0
2.30.0
2.29.3
2.28.0
2.27.1
2.26.0
2.25.0
2.24.2
2.23.0
2.22.0
2.21.1
2.20.2
2.19.0
2.18.0
2.17.0
2.16.1
2.15.0
2.14.0
2.13.0
2.12.0
2.11.0
2.10.0
2.9.1
2.8.0
2.7.0
2.6.0
2.5.0
2.4.1
2.3.0
2.2.0
2.1.0
2.0.3
1.5.1
1.4.2
1.3.0
1.2.1
1.1.0
1.0.0
0.5.2
0.4.0
0.3.0
0.2.0
0.1.0
BatchProcessMetadata ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
The long-running operation metadata for
BatchProcessDocuments .
Attributes
Name
Description
state
google.cloud.documentai_v1.types.BatchProcessMetadata.State
The state of the current batch processing.
state_message
str
A message providing more details about the
current state of processing. For example, the
error message if the operation is failed.
create_time
google.protobuf.timestamp_pb2.Timestamp
The creation time of the operation.
update_time
google.protobuf.timestamp_pb2.Timestamp
The last update time of the operation.
individual_process_statuses
MutableSequence[ google.cloud.documentai_v1.types.BatchProcessMetadata.IndividualProcessStatus ]
The list of response details of each
document.
Classes
IndividualProcessStatus
IndividualProcessStatus ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
The status of a each individual document in the batch
process.
State
State ( value )
Possible states of the batch processing operation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-03 UTC."],[],[]]
