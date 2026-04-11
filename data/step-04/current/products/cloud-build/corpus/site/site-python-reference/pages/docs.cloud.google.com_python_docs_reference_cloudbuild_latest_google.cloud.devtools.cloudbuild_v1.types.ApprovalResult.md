---
title: "Class ApprovalResult (3.35.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.ApprovalResult
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.ApprovalResult
  title: "Class ApprovalResult (3.35.0) \_|\_ Python client libraries \_|\_ Google\
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
Class ApprovalResult (3.35.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
3.35.0 (latest)
3.34.0
3.33.0
3.32.0
3.31.3
3.30.0
3.29.0
3.28.0
3.27.1
3.26.0
3.25.0
3.24.2
3.23.3
3.22.0
3.21.0
3.20.1
3.19.0
3.18.0
3.17.1
3.16.0
3.15.0
3.14.0
3.13.0
3.12.0
3.11.1
3.10.0
3.9.3
3.8.3
3.7.1
3.6.0
3.5.2
3.4.0
3.3.2
3.2.1
3.1.1
3.0.2
2.0.2
1.1.2
1.0.0
0.1.0
ApprovalResult ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
ApprovalResult describes the decision and associated metadata
of a manual approval of a build.
Attributes
Name
Description
approver_account
str
Output only. Email of the user that called
the ApproveBuild API to approve or reject a
build at the time that the API was called.
approval_time
google.protobuf.timestamp_pb2.Timestamp
Output only. The time when the approval
decision was made.
decision
google.cloud.devtools.cloudbuild_v1.types.ApprovalResult.Decision
Required. The decision of this manual
approval.
comment
str
Optional. An optional comment for this manual
approval result.
url
str
Optional. An optional URL tied to this manual
approval result. This field is essentially the
same as comment, except that it will be rendered
by the UI differently. An example use case is a
link to an external job that approved this
Build.
Classes
Decision
Decision ( value )
Specifies whether or not this manual approval result is to
approve or reject a build.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
