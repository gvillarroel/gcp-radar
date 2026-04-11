---
title: "Class Backup (1.16.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.types.Backup
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/file/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/file/latest/google.cloud.filestore_v1.types.Backup
  title: "Class Backup (1.16.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
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
Class Backup (1.16.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.16.0 (latest)
1.15.0
1.14.0
1.13.2
1.12.0
1.11.0
1.10.1
1.9.5
1.8.0
1.7.0
1.6.2
1.5.1
1.4.1
1.3.0
1.2.3
1.1.3
1.0.0
0.2.3
0.1.0
Backup ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
A Filestore backup.
Attributes
Name
Description
name
str
Output only. The resource name of the backup, in the format
projects/{project_number}/locations/{location_id}/backups/{backup_id} .
description
str
A description of the backup with 2048
characters or less. Requests with longer
descriptions will be rejected.
state
google.cloud.filestore_v1.types.Backup.State
Output only. The backup state.
create_time
google.protobuf.timestamp_pb2.Timestamp
Output only. The time when the backup was
created.
labels
MutableMapping[str, str]
Resource labels to represent user provided
metadata.
capacity_gb
int
Output only. Capacity of the source file
share when the backup was created.
storage_bytes
int
Output only. The size of the storage used by
the backup. As backups share storage, this
number is expected to change with backup
creation/deletion.
source_instance
str
The resource name of the source Filestore instance, in the
format
projects/{project_number}/locations/{location_id}/instances/{instance_id} ,
used to create this backup.
source_file_share
str
Name of the file share in the source
Filestore instance that the backup is created
from.
source_instance_tier
google.cloud.filestore_v1.types.Instance.Tier
Output only. The service tier of the source
Filestore instance that this backup is created
from.
download_bytes
int
Output only. Amount of bytes that will be
downloaded if the backup is restored. This may
be different than storage bytes, since
sequential backups of the same disk will share
storage.
satisfies_pzs
google.protobuf.wrappers_pb2.BoolValue
Output only. Reserved for future use.
satisfies_pzi
bool
Output only. Reserved for future use.
kms_key
str
Immutable. KMS key name used for data
encryption.
tags
MutableMapping[str, str]
Optional. Input only. Immutable. Tag key-value pairs bound
to this resource. Each key must be a namespaced name and
each value a short name. Example: "123456789012/environment"
: "production", "123456789013/costCenter" : "marketing" See
the documentation for more information:
- Namespaced name:
https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing#retrieving_tag_key
- Short name:
https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing#retrieving_tag_value
file_system_protocol
google.cloud.filestore_v1.types.Instance.FileProtocol
Output only. The file system protocol of the
source Filestore instance that this backup is
created from.
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
The backup state.
TagsEntry
TagsEntry ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
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
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
