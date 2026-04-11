---
title: "Class Instance (1.15.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/memcache/latest/google.cloud.memcache_v1.types.Instance
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/memcache/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/memcache/latest/google.cloud.memcache_v1.types.Instance
  title: "Class Instance (1.15.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Class Instance (1.15.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.15.0 (latest)
1.14.0
1.13.0
1.12.2
1.11.0
1.10.1
1.9.5
1.8.0
1.7.2
1.6.1
1.5.0
1.4.4
1.3.2
1.2.1
1.1.3
1.0.0
0.3.2
0.2.0
0.1.0
Instance ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
A Memorystore for Memcached instance
Attributes
Name
Description
name
str
Required. Unique name of the resource in this scope
including project and location using the form:
projects/{project_id}/locations/{location_id}/instances/{instance_id}
Note: Memcached instances are managed and addressed at the
regional level so location_id here refers to a Google
Cloud region; however, users may choose which zones
Memcached nodes should be provisioned in within an instance.
Refer to zones
field for more details.
display_name
str
User provided name for the instance, which is
only used for display purposes. Cannot be more
than 80 characters.
labels
MutableMapping[str, str]
Resource labels to represent user-provided
metadata. Refer to cloud documentation on labels
for more details.
https://cloud.google.com/compute/docs/labeling-resources
authorized_network
str
The full name of the Google Compute Engine
network __
to which the instance is connected. If left unspecified, the
default network will be used.
zones
MutableSequence[str]
Zones in which Memcached nodes should be
provisioned. Memcached nodes will be equally
distributed across these zones. If not provided,
the service will by default create nodes in all
zones in the region for the instance.
node_count
int
Required. Number of nodes in the Memcached
instance.
node_config
google.cloud.memcache_v1.types.Instance.NodeConfig
Required. Configuration for Memcached nodes.
memcache_version
google.cloud.memcache_v1.types.MemcacheVersion
The major version of Memcached software. If not provided,
latest supported version will be used. Currently the latest
supported major version is MEMCACHE_1_5 . The minor
version will be automatically determined by our system based
on the latest supported minor version.
parameters
google.cloud.memcache_v1.types.MemcacheParameters
User defined parameters to apply to the
memcached process on each node.
memcache_nodes
MutableSequence[ google.cloud.memcache_v1.types.Instance.Node ]
Output only. List of Memcached nodes. Refer to
Node message for
more details.
create_time
google.protobuf.timestamp_pb2.Timestamp
Output only. The time the instance was
created.
update_time
google.protobuf.timestamp_pb2.Timestamp
Output only. The time the instance was
updated.
state
google.cloud.memcache_v1.types.Instance.State
Output only. The state of this Memcached
instance.
memcache_full_version
str
Output only. The full version of memcached
server running on this instance. System
automatically determines the full memcached
version for an instance based on the input
MemcacheVersion.
The full version format will be
"memcached-1.5.16".
instance_messages
MutableSequence[ google.cloud.memcache_v1.types.Instance.InstanceMessage ]
List of messages that describe the current
state of the Memcached instance.
discovery_endpoint
str
Output only. Endpoint for the Discovery API.
maintenance_policy
google.cloud.memcache_v1.types.MaintenancePolicy
The maintenance policy for the instance. If
not provided, the maintenance event will be
performed based on Memorystore internal rollout
schedule.
maintenance_schedule
google.cloud.memcache_v1.types.MaintenanceSchedule
Output only. Published maintenance schedule.
Classes
InstanceMessage
InstanceMessage ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
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
Node
Node ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
NodeConfig
NodeConfig ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Configuration for a Memcached Node.
State
State ( value )
Different states of a Memcached instance.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
