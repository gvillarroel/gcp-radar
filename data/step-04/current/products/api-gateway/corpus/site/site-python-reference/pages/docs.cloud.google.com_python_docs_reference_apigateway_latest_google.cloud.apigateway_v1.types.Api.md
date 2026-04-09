---
title: "Class Api (1.14.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/apigateway/latest/google.cloud.apigateway_v1.types.Api
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/apigateway/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/apigateway/latest/google.cloud.apigateway_v1.types.Api
  title: "Class Api (1.14.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
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
Class Api (1.14.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
1.14.0 (latest)
1.13.0
1.12.2
1.11.0
1.10.1
1.9.5
1.8.0
1.7.3
1.6.1
1.5.1
1.4.0
1.3.3
1.2.2
1.1.1
1.0.4
0.2.0
0.1.0
Api ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
An API that can be served by one or more Gateways.
Attributes
Name
Description
name
str
Output only. Resource name of the API.
Format:
projects/{project}/locations/global/apis/{api}
create_time
google.protobuf.timestamp_pb2.Timestamp
Output only. Created time.
update_time
google.protobuf.timestamp_pb2.Timestamp
Output only. Updated time.
labels
MutableMapping[str, str]
Optional. Resource labels to represent
user-provided metadata. Refer to cloud
documentation on labels for more details.
https://cloud.google.com/compute/docs/labeling-resources
display_name
str
Optional. Display name.
managed_service
str
Optional. Immutable. The name of a Google
Managed Service (
https://cloud.google.com/service-infrastructure/docs/glossary#managed).
If not specified, a new Service will
automatically be created in the same project as
this API.
state
google.cloud.apigateway_v1.types.Api.State
Output only. State of the API.
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
State
State ( value )
All the possible API states.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
