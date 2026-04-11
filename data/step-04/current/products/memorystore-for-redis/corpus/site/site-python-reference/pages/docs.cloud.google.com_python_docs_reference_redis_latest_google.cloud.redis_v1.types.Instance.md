---
title: "Class Instance (2.21.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/redis/latest/google.cloud.redis_v1.types.Instance
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/redis/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/redis/latest/google.cloud.redis_v1.types.Instance
  title: "Class Instance (2.21.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Class Instance (2.21.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.21.0 (latest)
2.20.0
2.19.0
2.18.0
2.17.0
2.16.1
2.15.5
2.14.0
2.13.1
2.12.1
2.11.1
2.10.0
2.9.3
2.8.1
2.7.1
2.6.0
2.5.1
2.4.1
2.3.0
2.2.4
2.1.1
2.0.0
1.0.2
0.4.0
0.3.0
Instance ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
A Memorystore for Redis instance.
Attributes
Name
Description
name
str
Required. Unique name of the resource in this scope
including project and location using the form:
projects/{project_id}/locations/{location_id}/instances/{instance_id}
Note: Redis instances are managed and addressed at regional
level so location_id here refers to a GCP region; however,
users may choose which specific zone (or collection of zones
for cross-zone instances) an instance should be provisioned
in. Refer to
location_id
and
alternative_location_id
fields for more details.
display_name
str
An arbitrary and optional user-provided name
for the instance.
labels
MutableMapping[str, str]
Resource labels to represent user provided
metadata
location_id
str
Optional. The zone where the instance will be
provisioned. If not provided, the service will
choose a zone from the specified region for the
instance. For standard tier, additional nodes
will be added across multiple zones for
protection against zonal failures. If specified,
at least one node will be provisioned in this
zone.
alternative_location_id
str
Optional. If specified, at least one node will be
provisioned in this zone in addition to the zone specified
in location_id. Only applicable to standard tier. If
provided, it must be a different zone from the one provided
in [location_id]. Additional nodes beyond the first 2 will
be placed in zones selected by the service.
redis_version
str
Optional. The version of Redis software. If not provided,
latest supported version will be used. Currently, the
supported values are:
- REDIS_3_2 for Redis 3.2 compatibility
- REDIS_4_0 for Redis 4.0 compatibility (default)
- REDIS_5_0 for Redis 5.0 compatibility
- REDIS_6_X for Redis 6.x compatibility
reserved_ip_range
str
Optional. For DIRECT_PEERING mode, the CIDR range of
internal addresses that are reserved for this instance.
Range must be unique and non-overlapping with existing
subnets in an authorized network. For PRIVATE_SERVICE_ACCESS
mode, the name of one allocated IP address ranges associated
with this private service access connection. If not
provided, the service will choose an unused /29 block, for
example, 10.0.0.0/29 or 192.168.0.0/29. For
READ_REPLICAS_ENABLED the default block size is /28.
secondary_ip_range
str
Optional. Additional IP range for node placement. Required
when enabling read replicas on an existing instance. For
DIRECT_PEERING mode value must be a CIDR range of size /28,
or "auto". For PRIVATE_SERVICE_ACCESS mode value must be the
name of an allocated address range associated with the
private service access connection, or "auto".
host
str
Output only. Hostname or IP address of the
exposed Redis endpoint used by clients to
connect to the service.
port
int
Output only. The port number of the exposed
Redis endpoint.
current_location_id
str
Output only. The current zone where the Redis primary node
is located. In basic tier, this will always be the same as
[location_id]. In standard tier, this can be the zone of any
node in the instance.
create_time
google.protobuf.timestamp_pb2.Timestamp
Output only. The time the instance was
created.
state
google.cloud.redis_v1.types.Instance.State
Output only. The current state of this
instance.
status_message
str
Output only. Additional information about the
current status of this instance, if available.
redis_configs
MutableMapping[str, str]
Optional. Redis configuration parameters, according to
http://redis.io/topics/config. Currently, the only supported
parameters are:
Redis version 3.2 and newer:
- maxmemory-policy
- notify-keyspace-events
Redis version 4.0 and newer:
- activedefrag
- lfu-decay-time
- lfu-log-factor
- maxmemory-gb
Redis version 5.0 and newer:
- stream-node-max-bytes
- stream-node-max-entries
tier
google.cloud.redis_v1.types.Instance.Tier
Required. The service tier of the instance.
memory_size_gb
int
Required. Redis memory size in GiB.
authorized_network
str
Optional. The full name of the Google Compute Engine
network __ to which
the instance is connected. If left unspecified, the
default network will be used.
persistence_iam_identity
str
Output only. Cloud IAM identity used by import / export
operations to transfer data to/from Cloud Storage. Format is
"serviceAccount:
connect_mode
google.cloud.redis_v1.types.Instance.ConnectMode
Optional. The network connect mode of the Redis instance. If
not provided, the connect mode defaults to DIRECT_PEERING.
auth_enabled
bool
Optional. Indicates whether OSS Redis AUTH is
enabled for the instance. If set to "true" AUTH
is enabled on the instance. Default value is
"false" meaning AUTH is disabled.
server_ca_certs
MutableSequence[ google.cloud.redis_v1.types.TlsCertificate ]
Output only. List of server CA certificates
for the instance.
transit_encryption_mode
google.cloud.redis_v1.types.Instance.TransitEncryptionMode
Optional. The TLS mode of the Redis instance.
If not provided, TLS is disabled for the
instance.
maintenance_policy
google.cloud.redis_v1.types.MaintenancePolicy
Optional. The maintenance policy for the
instance. If not provided, maintenance events
can be performed at any time.
maintenance_schedule
google.cloud.redis_v1.types.MaintenanceSchedule
Output only. Date and time of upcoming
maintenance events which have been scheduled.
replica_count
int
Optional. The number of replica nodes. The valid range for
the Standard Tier with read replicas enabled is [1-5] and
defaults to 2. If read replicas are not enabled for a
Standard Tier instance, the only valid value is 1 and the
default is 1. The valid value for basic tier is 0 and the
default is also 0.
nodes
MutableSequence[ google.cloud.redis_v1.types.NodeInfo ]
Output only. Info per node.
read_endpoint
str
Output only. Hostname or IP address of the
exposed readonly Redis endpoint. Standard tier
only. Targets all healthy replica nodes in
instance. Replication is asynchronous and
replica nodes will exhibit some lag behind the
primary. Write requests must target 'host'.
read_endpoint_port
int
Output only. The port number of the exposed
readonly redis endpoint. Standard tier only.
Write requests should target 'port'.
read_replicas_mode
google.cloud.redis_v1.types.Instance.ReadReplicasMode
Optional. Read replicas mode for the instance. Defaults to
READ_REPLICAS_DISABLED.
customer_managed_key
str
Optional. The KMS key reference that the
customer provides when trying to create the
instance.
persistence_config
google.cloud.redis_v1.types.PersistenceConfig
Optional. Persistence configuration
parameters
suspension_reasons
MutableSequence[ google.cloud.redis_v1.types.Instance.SuspensionReason ]
Optional. reasons that causes instance in
"SUSPENDED" state.
maintenance_version
str
Optional. The self service update maintenance version. The
version is date based such as "20210712_00_00".
available_maintenance_versions
MutableSequence[str]
Optional. The available maintenance versions
that an instance could update to.
Classes
ConnectMode
ConnectMode ( value )
Available connection modes.
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
ReadReplicasMode
ReadReplicasMode ( value )
Read replicas mode.
RedisConfigsEntry
RedisConfigsEntry ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
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
Represents the different states of a Redis instance.
SuspensionReason
SuspensionReason ( value )
Possible reasons for the instance to be in a "SUSPENDED"
state.
Tier
Tier ( value )
Available service tiers to choose from
TransitEncryptionMode
TransitEncryptionMode ( value )
Available TLS modes.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
