---
title: "Class Attempt (2.22.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest/google.cloud.tasks_v2.types.Attempt
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest/google.cloud.tasks_v2.types.Attempt
  title: "Class Attempt (2.22.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Class Attempt (2.22.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.22.0 (latest)
2.21.0
2.20.0
2.19.3
2.18.0
2.17.1
2.16.5
2.15.1
2.14.2
2.13.2
2.12.1
2.11.0
2.10.4
2.9.1
2.8.1
2.7.2
2.6.0
2.5.3
2.4.0
2.3.0
2.2.0
2.1.0
2.0.0
1.5.2
1.4.0
1.3.0
1.2.1
Attempt ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
The status of a task attempt.
Attributes
Name
Description
schedule_time
google.protobuf.timestamp_pb2.Timestamp
Output only. The time that this attempt was scheduled.
schedule_time will be truncated to the nearest
microsecond.
dispatch_time
google.protobuf.timestamp_pb2.Timestamp
Output only. The time that this attempt was dispatched.
dispatch_time will be truncated to the nearest
microsecond.
response_time
google.protobuf.timestamp_pb2.Timestamp
Output only. The time that this attempt response was
received.
response_time will be truncated to the nearest
microsecond.
response_status
google.rpc.status_pb2.Status
Output only. The response from the worker for this attempt.
If response_time is unset, then the task has not been
attempted or is currently running and the
response_status field is meaningless.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
