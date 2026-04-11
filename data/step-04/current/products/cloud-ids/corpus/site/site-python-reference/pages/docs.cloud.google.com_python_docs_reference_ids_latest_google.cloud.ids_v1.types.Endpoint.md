---
title: "Class Endpoint (1.13.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/ids/latest/google.cloud.ids_v1.types.Endpoint
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/ids/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/ids/latest/google.cloud.ids_v1.types.Endpoint
  title: "Class Endpoint (1.13.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Class Endpoint (1.13.0)
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
Endpoint ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Endpoint describes a single IDS endpoint. It defines a
forwarding rule to which packets can be sent for IDS inspection.
Attributes
Name
Description
name
str
Output only. The name of the endpoint.
create_time
google.protobuf.timestamp_pb2.Timestamp
Output only. The create time timestamp.
update_time
google.protobuf.timestamp_pb2.Timestamp
Output only. The update time timestamp.
labels
MutableMapping[str, str]
The labels of the endpoint.
network
str
Required. The fully qualified URL of the
network to which the IDS Endpoint is attached.
endpoint_forwarding_rule
str
Output only. The fully qualified URL of the
endpoint's ILB Forwarding Rule.
endpoint_ip
str
Output only. The IP address of the IDS
Endpoint's ILB.
description
str
User-provided description of the endpoint
severity
google.cloud.ids_v1.types.Endpoint.Severity
Required. Lowest threat severity that this
endpoint will alert on.
state
google.cloud.ids_v1.types.Endpoint.State
Output only. Current state of the endpoint.
traffic_logs
bool
Whether the endpoint should report traffic
logs in addition to threat logs.
Classes
LabelsEntry
LabelsEntry ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
The abstract base class for a message.
Parameters
Name
Description
kwargs
dict
Keys and values corresponding to the fields of the message.
mapping
Union[dict, .Message ]
A dictionary or message to be used to determine the values for this message.
ignore_unknown_fields
Optional(bool)
If True, do not raise errors for unknown fields. Only applied if mapping is a mapping type or there are keyword parameters.
Severity
Severity ( value )
Threat severity levels.
State
State ( value )
Endpoint state
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
