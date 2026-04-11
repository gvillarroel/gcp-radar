---
title: "Class Instance (1.16.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.types.Instance
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/datafusion/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/datafusion/latest/google.cloud.data_fusion_v1.types.Instance
  title: "Class Instance (1.16.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Class Instance (1.16.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.16.0 (latest)
1.15.0
1.14.0
1.13.3
1.12.0
1.11.1
1.10.5
1.9.0
1.8.2
1.7.1
1.6.0
1.5.3
1.4.2
1.3.0
1.2.1
1.1.0
1.0.2
0.1.2
Instance ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Represents a Data Fusion instance.
Attributes
Name
Description
name
str
Output only. The name of this instance is in
the form of
projects/{project}/locations/{location}/instances/{instance}.
description
str
A description of this instance.
type_
google.cloud.data_fusion_v1.types.Instance.Type
Required. Instance type.
enable_stackdriver_logging
bool
Option to enable Stackdriver Logging.
enable_stackdriver_monitoring
bool
Option to enable Stackdriver Monitoring.
private_instance
bool
Specifies whether the Data Fusion instance
should be private. If set to true, all Data
Fusion nodes will have private IP addresses and
will not be able to access the public internet.
network_config
google.cloud.data_fusion_v1.types.NetworkConfig
Network configuration options. These are
required when a private Data Fusion instance is
to be created.
labels
MutableMapping[str, str]
The resource labels for instance to use to
annotate any related underlying resources such
as Compute Engine VMs. The character '=' is not
allowed to be used within the labels.
options
MutableMapping[str, str]
Map of additional options used to configure
the behavior of Data Fusion instance.
create_time
google.protobuf.timestamp_pb2.Timestamp
Output only. The time the instance was
created.
update_time
google.protobuf.timestamp_pb2.Timestamp
Output only. The time the instance was last
updated.
state
google.cloud.data_fusion_v1.types.Instance.State
Output only. The current state of this Data
Fusion instance.
state_message
str
Output only. Additional information about the
current state of this Data Fusion instance if
available.
service_endpoint
str
Output only. Endpoint on which the Data
Fusion UI is accessible.
zone
str
Name of the zone in which the Data Fusion
instance will be created. Only DEVELOPER
instances use this field.
version
str
Current version of the Data Fusion. Only
specifiable in Update.
service_account
str
Output only. Deprecated. Use tenant_project_id instead to
extract the tenant project ID.
display_name
str
Display name for an instance.
available_version
MutableSequence[ google.cloud.data_fusion_v1.types.Version ]
Available versions that the instance can be
upgraded to using UpdateInstanceRequest.
api_endpoint
str
Output only. Endpoint on which the REST APIs
is accessible.
gcs_bucket
str
Output only. Cloud Storage bucket generated
by Data Fusion in the customer project.
accelerators
MutableSequence[ google.cloud.data_fusion_v1.types.Accelerator ]
List of accelerators enabled for this CDF
instance.
p4_service_account
str
Output only. P4 service account for the
customer project.
tenant_project_id
str
Output only. The name of the tenant project.
dataproc_service_account
str
User-managed service account to set on
Dataproc when Cloud Data Fusion creates Dataproc
to run data processing pipelines.
This allows users to have fine-grained access
control on Dataproc's accesses to cloud
resources.
enable_rbac
bool
Option to enable granular role-based access
control.
crypto_key_config
google.cloud.data_fusion_v1.types.CryptoKeyConfig
The crypto key configuration. This field is
used by the Customer-Managed Encryption Keys
(CMEK) feature.
disabled_reason
MutableSequence[ google.cloud.data_fusion_v1.types.Instance.DisabledReason ]
Output only. If the instance state is
DISABLED, the reason for disabling the instance.
Classes
DisabledReason
DisabledReason ( value )
The reason for disabling the instance if the state is
DISABLED.
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
OptionsEntry
OptionsEntry ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
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
Represents the state of a Data Fusion instance
Type
Type ( value )
Represents the type of Data Fusion instance. Each type is
configured with the default settings for processing and memory.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
