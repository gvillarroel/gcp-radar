---
title: "Class EntityReconciliationJob (0.6.0) \_|\_ Python client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/enterpriseknowledgegraph/latest/google.cloud.enterpriseknowledgegraph_v1.types.EntityReconciliationJob
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/enterpriseknowledgegraph/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/enterpriseknowledgegraph/latest/google.cloud.enterpriseknowledgegraph_v1.types.EntityReconciliationJob
  title: "Class EntityReconciliationJob (0.6.0) \_|\_ Python client libraries \_|\_\
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
Class EntityReconciliationJob (0.6.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.6.0 (latest)
0.5.0
0.4.0
0.3.17
0.2.1
0.1.0
EntityReconciliationJob ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Entity reconciliation job message.
Attributes
Name
Description
name
str
Output only. Resource name of the
EntityReconciliationJob.
input_config
google.cloud.enterpriseknowledgegraph_v1.types.InputConfig
Required. Information about the input
BigQuery tables.
output_config
google.cloud.enterpriseknowledgegraph_v1.types.OutputConfig
Required. The desired output location.
state
google.cloud.enterpriseknowledgegraph_v1.types.JobState
Output only. The detailed state of the job.
error
google.rpc.status_pb2.Status
Output only. Only populated when the job's state is
JOB_STATE_FAILED or JOB_STATE_CANCELLED.
create_time
google.protobuf.timestamp_pb2.Timestamp
Output only. Time when the
EntityReconciliationJob was created.
end_time
google.protobuf.timestamp_pb2.Timestamp
Output only. Time when the EntityReconciliationJob entered
any of the following states: JOB_STATE_SUCCEEDED ,
JOB_STATE_FAILED , JOB_STATE_CANCELLED .
update_time
google.protobuf.timestamp_pb2.Timestamp
Output only. Time when the
EntityReconciliationJob was most recently
updated.
recon_config
google.cloud.enterpriseknowledgegraph_v1.types.ReconConfig
Optional. Recon configs to adjust the
clustering behavior.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
