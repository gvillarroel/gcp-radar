---
title: "Class Violation (2.2.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/assuredworkloads/latest/google.cloud.assuredworkloads_v1.types.Violation
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/assuredworkloads/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/assuredworkloads/latest/google.cloud.assuredworkloads_v1.types.Violation
  title: "Class Violation (2.2.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Class Violation (2.2.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
2.2.0 (latest)
2.1.0
2.0.0
1.15.2
1.14.0
1.13.1
1.12.5
1.11.0
1.10.3
1.9.1
1.8.1
1.7.0
1.6.1
1.5.0
1.4.2
1.3.0
1.2.3
1.1.0
1.0.0
0.8.0
0.7.2
0.6.0
0.5.0
0.4.2
0.3.1
0.2.1
0.1.0
Violation ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Workload monitoring Violation.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Attributes
Name
Description
name
str
Output only. Immutable. Name of the Violation. Format:
organizations/{organization}/locations/{location}/workloads/{workload_id}/violations/{violations_id}
description
str
Output only. Description for the Violation.
e.g. OrgPolicy gcp.resourceLocations has non
compliant value.
begin_time
google.protobuf.timestamp_pb2.Timestamp
Output only. Time of the event which
triggered the Violation.
update_time
google.protobuf.timestamp_pb2.Timestamp
Output only. The last time when the Violation
record was updated.
resolve_time
google.protobuf.timestamp_pb2.Timestamp
Output only. Time of the event which fixed
the Violation. If the violation is ACTIVE this
will be empty.
category
str
Output only. Category under which this
violation is mapped. e.g. Location, Service
Usage, Access, Encryption, etc.
state
google.cloud.assuredworkloads_v1.types.Violation.State
Output only. State of the violation
org_policy_constraint
str
Output only. Immutable. The
org-policy-constraint that was incorrectly
changed, which resulted in this violation.
audit_log_link
str
Output only. Immutable. Audit Log Link for
violated resource Format:
https://console.cloud.google.com/logs/query;query={logName}{protoPayload.resourceName}{timeRange}{folder}
non_compliant_org_policy
str
Output only. Immutable. Name of the OrgPolicy which was
modified with non-compliant change and resulted this
violation. Format:
projects/{project_number}/policies/{constraint_name}
folders/{folder_id}/policies/{constraint_name}
organizations/{organization_id}/policies/{constraint_name}
remediation
google.cloud.assuredworkloads_v1.types.Violation.Remediation
Output only. Compliance violation remediation
acknowledged
bool
Output only. A boolean that indicates if the
violation is acknowledged
acknowledgement_time
google.protobuf.timestamp_pb2.Timestamp
Optional. Timestamp when this violation was
acknowledged last. This will be absent when
acknowledged field is marked as false.
This field is a member of oneof _ _acknowledgement_time .
exception_audit_log_link
str
Output only. Immutable. Audit Log link to
find business justification provided for
violation exception. Format:
https://console.cloud.google.com/logs/query;query={logName}{protoPayload.resourceName}{protoPayload.methodName}{timeRange}{organization}
Classes
Remediation
Remediation ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Represents remediation guidance to resolve compliance
violation for AssuredWorkload
State
State ( value )
Violation State Values
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
