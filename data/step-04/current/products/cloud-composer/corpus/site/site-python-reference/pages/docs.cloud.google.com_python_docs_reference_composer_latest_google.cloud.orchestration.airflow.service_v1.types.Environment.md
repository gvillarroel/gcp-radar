---
title: "Class Environment (1.19.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.Environment
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/composer/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/composer/latest/google.cloud.orchestration.airflow.service_v1.types.Environment
  title: "Class Environment (1.19.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Class Environment (1.19.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
1.19.0 (latest)
1.18.0
1.17.5
1.16.1
1.15.1
1.14.0
1.13.1
1.12.2
1.11.1
1.10.0
1.9.1
1.8.0
1.7.1
1.6.1
1.5.0
1.4.4
1.3.2
1.2.1
1.1.0
1.0.0
0.1.3
Environment ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
An environment for running orchestration tasks.
Attributes
Name
Description
name
str
Identifier. The resource name of the
environment, in the form:
"projects/{projectId}/locations/{locationId}/environments/{environmentId}"
EnvironmentId must start with a lowercase letter
followed by up to 63 lowercase letters, numbers,
or hyphens, and cannot end with a hyphen.
config
google.cloud.orchestration.airflow.service_v1.types.EnvironmentConfig
Optional. Configuration parameters for this
environment.
uuid
str
Output only. The UUID (Universally Unique
IDentifier) associated with this environment.
This value is generated when the environment is
created.
state
google.cloud.orchestration.airflow.service_v1.types.Environment.State
The current state of the environment.
create_time
google.protobuf.timestamp_pb2.Timestamp
Output only. The time at which this
environment was created.
update_time
google.protobuf.timestamp_pb2.Timestamp
Output only. The time at which this
environment was last modified.
labels
MutableMapping[str, str]
Optional. User-defined labels for this environment. The
labels map can contain no more than 64 entries. Entries of
the labels map are UTF8 strings that comply with the
following restrictions:
- Keys must conform to regexp:
[\\p{Ll}\\p{Lo}][\\p{Ll}\\p{Lo}\\p{N}\_-]{0,62}
- Values must conform to regexp:
[\\p{Ll}\\p{Lo}\\p{N}\_-]{0,63}
- Both keys and values are additionally constrained to be <= 128="" bytes="" in="" size.="">
satisfies_pzs
bool
Output only. Reserved for future use.
satisfies_pzi
bool
Output only. Reserved for future use.
storage_config
google.cloud.orchestration.airflow.service_v1.types.StorageConfig
Optional. Storage configuration for this
environment.
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
State of the environment.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-10 UTC."],[],[]]
