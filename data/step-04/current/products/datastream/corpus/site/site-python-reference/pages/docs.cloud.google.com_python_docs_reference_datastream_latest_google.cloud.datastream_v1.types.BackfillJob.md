---
title: "Class BackfillJob (1.18.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.types.BackfillJob
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/datastream/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/datastream/latest/google.cloud.datastream_v1.types.BackfillJob
  title: "Class BackfillJob (1.18.0) \_|\_ Python client libraries \_|\_ Google Cloud\
    \ Documentation"
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
Class BackfillJob (1.18.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.18.0 (latest)
1.17.0
1.16.0
1.15.0
1.14.1
1.13.2
1.12.0
1.11.0
1.10.1
1.9.5
1.8.0
1.7.0
1.6.1
1.5.1
1.4.1
1.3.0
1.2.2
1.1.1
1.0.2
0.4.3
0.3.1
0.2.0
0.1.3
BackfillJob ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Represents a backfill job on a specific stream object.
Attributes
Name
Description
state
google.cloud.datastream_v1.types.BackfillJob.State
Output only. Backfill job state.
trigger
google.cloud.datastream_v1.types.BackfillJob.Trigger
Backfill job's triggering reason.
last_start_time
google.protobuf.timestamp_pb2.Timestamp
Output only. Backfill job's start time.
last_end_time
google.protobuf.timestamp_pb2.Timestamp
Output only. Backfill job's end time.
errors
MutableSequence[ google.cloud.datastream_v1.types.Error ]
Output only. Errors which caused the backfill
job to fail.
Classes
State
State ( value )
State of the stream object's backfill job.
Trigger
Trigger ( value )
Triggering reason for a backfill job.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
