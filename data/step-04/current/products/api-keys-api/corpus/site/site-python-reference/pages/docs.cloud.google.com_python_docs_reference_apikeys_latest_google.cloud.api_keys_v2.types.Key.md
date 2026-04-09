---
title: "Class Key (0.7.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/apikeys/latest/google.cloud.api_keys_v2.types.Key
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/apikeys/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/apikeys/latest/google.cloud.api_keys_v2.types.Key
  title: "Class Key (0.7.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
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
Class Key (0.7.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
0.7.0 (latest)
0.6.0
0.5.17
0.4.1
0.3.0
0.2.2
0.1.0
Key ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
The representation of a key managed by the API Keys API.
Attributes
Name
Description
name
str
Output only. The resource name of the key. The name has
the form:
projects/ .
For example:
projects/123456867718/locations/global/keys/b7ff1f9f-8275-410a-94dd-3855ee9b5dd2
NOTE: Key is a global resource; hence the only supported
value for location is global .
uid
str
Output only. Unique id in UUID4 format.
display_name
str
Human-readable display name of this key that
you can modify. The maximum length is 63
characters.
key_string
str
Output only. An encrypted and signed value held by this key.
This field can be accessed only through the GetKeyString
method.
create_time
google.protobuf.timestamp_pb2.Timestamp
Output only. A timestamp identifying the time
this key was originally created.
update_time
google.protobuf.timestamp_pb2.Timestamp
Output only. A timestamp identifying the time
this key was last updated.
delete_time
google.protobuf.timestamp_pb2.Timestamp
Output only. A timestamp when this key was
deleted. If the resource is not deleted, this
must be empty.
annotations
MutableMapping[str, str]
Annotations is an unstructured key-value map
stored with a policy that may be set by external
tools to store and retrieve arbitrary metadata.
They are not queryable and should be preserved
when modifying objects.
restrictions
google.cloud.api_keys_v2.types.Restrictions
Key restrictions.
etag
str
Output only. A checksum computed by the
server based on the current value of the Key
resource. This may be sent on update and delete
requests to ensure the client has an up-to-date
value before proceeding. See
https://google.aip.dev/154.
Classes
AnnotationsEntry
AnnotationsEntry ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
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
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
