---
title: "AlloyDBInstance \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/reference/overview
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbinstance
  title: "AlloyDBInstance \_|\_ Config Connector \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Config Connector
API and reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
AlloyDBInstance
Note: Secondary instances should only be created once the associated primary
instance is ready and up to date.
Property
Value
Google Cloud Service Name
AlloyDB for PostgreSQL
Google Cloud Service Documentation
/alloydb/docs/
Google Cloud REST Resource Name
v1.projects.locations.clusters.instances
Google Cloud REST Resource Documentation
/alloydb/docs/reference/rest/v1/projects.locations.clusters.instances
Config Connector Resource Short Names
gcpalloydbinstance gcpalloydbinstances alloydbinstance
Config Connector Service Name
alloydb.googleapis.com
Config Connector Resource Fully Qualified Name
alloydbinstances.alloydb.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Spec
Schema
annotations :
string : string
availabilityType : string
clusterRef :
external : string
name : string
namespace : string
connectionPoolConfig :
enabled : boolean
flags :
string : string
databaseFlags :
string : string
displayName : string
gceZone : string
instanceType : string
instanceTypeRef :
external : string
name : string
namespace : string
machineConfig :
cpuCount : integer
machineType : string
networkConfig :
authorizedExternalNetworks :
- cidrRange : string
enableOutboundPublicIp : boolean
enablePublicIp : boolean
observabilityConfig :
assistiveExperiencesEnabled : boolean
enabled : boolean
maxQueryStringLength : integer
preserveComments : boolean
queryPlansPerMinute : integer
recordApplicationTags : boolean
trackActiveQueries : boolean
trackClientAddress : boolean
trackWaitEvents : boolean
queryInsightsConfig :
queryPlansPerMinute : integer
queryStringLength : integer
recordApplicationTags : boolean
recordClientAddress : boolean
readPoolConfig :
nodeCount : integer
resourceID : string
Fields
annotations
Optional
map (key: string, value: string)
Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels.
availabilityType
Optional
string
Availability type of an Instance. If empty, defaults to REGIONAL for primary instances.
For read pools, availabilityType is always UNSPECIFIED. Instances in the
read pools are evenly distributed across available zones within the region
(i.e. read pools with more than one node will have a node in at least two zones).
Possible values: ["AVAILABILITY_TYPE_UNSPECIFIED", "ZONAL", "REGIONAL"].
clusterRef
Required
object
The AlloyDBInstance cluster that this resource belongs to.
clusterRef.external
Optional
string
If provided must be in the format `projects/[projectId]/locations/[location]/clusters/[clusterId]`.
clusterRef.name
Optional
string
The `metadata.name` field of a `AlloyDBCluster` resource.
clusterRef.namespace
Optional
string
The `metadata.namespace` field of a `AlloyDBCluster` resource.
connectionPoolConfig
Optional
object
Configuration for Managed Connection Pool.
connectionPoolConfig.enabled
Optional
boolean
Optional. Whether to enable Managed Connection Pool (MCP).
connectionPoolConfig.flags
Optional
map (key: string, value: string)
Optional. Connection Pool flags, as a list of "key": "value" pairs.
databaseFlags
Optional
map (key: string, value: string)
Database flags. Set at instance level. * They are copied from primary instance on read instance creation. * Read instances can set new or override existing flags that are relevant for reads, e.g. for enabling columnar cache on a read instance. Flags set on read instance may or may not be present on primary.
displayName
Optional
string
User-settable and human-readable display name for the Instance.
gceZone
Optional
string
The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances. If present for a REGIONAL instance, an error will be thrown. If this is absent for a ZONAL instance, instance is created in a random zone with available capacity.
instanceType
Optional
string
Not recommended. We recommend that you use `instanceTypeRef` instead. The type of the instance. Possible values: [PRIMARY, READ_POOL, SECONDARY]
instanceTypeRef
Optional
object
The type of instance.
Possible values: ["PRIMARY", "READ_POOL", "SECONDARY"]
For PRIMARY and SECONDARY instances, set the value to refer to the name of the associated cluster.
This is recommended because the instance type of primary and secondary instances is tied to the cluster type of the associated cluster.
If the secondary cluster is promoted to primary cluster, then the associated secondary instance also becomes primary instance.
Example:
instanceTypeRef:
name: clusterName
For instances of type READ_POOL, set the value using external keyword.
Example:
instanceTypeRef:
external: READ_POOL
If the instance type is SECONDARY, the delete instance operation does not delete the secondary instance but abandons it instead.
Use deletionPolicy = "FORCE" in the associated secondary cluster and delete the cluster forcefully to delete the secondary cluster as well its associated secondary instance.
instanceTypeRef.external
Optional
string
The type of instance. Possible values: ["PRIMARY", "READ_POOL", "SECONDARY"]
instanceTypeRef.name
Optional
string
The `metadata.name` field of a `AlloyDBCluster` resource.
instanceTypeRef.namespace
Optional
string
The `metadata.namespace` field of a `AlloyDBCluster` resource.
machineConfig
Optional
object
Configurations for the machines that host the underlying database engine.
machineConfig.cpuCount
Optional
integer
The number of CPU's in the VM instance.
machineConfig.machineType
Optional
string
Machine type of the VM instance. E.g. "n2-highmem-4", "n2-highmem-8", "c4a-highmem-4-lssd". cpu_count must match the number of vCPUs in the machine type.
networkConfig
Optional
object
Instance level network configuration.
networkConfig.authorizedExternalNetworks
Optional
list (object)
Optional. A list of external network authorized to access this instance. This field is only allowed to be set when 'enablePublicIp' is set to true.
networkConfig.authorizedExternalNetworks[]
Optional
object
networkConfig.authorizedExternalNetworks[].cidrRange
Optional
string
CIDR range for one authorzied network of the instance.
networkConfig.enableOutboundPublicIp
Optional
boolean
Optional. Enabling an outbound public IP address to support a database server sending requests out into the internet.
networkConfig.enablePublicIp
Optional
boolean
Optional. Enabling public ip for the instance. If a user wishes to disable this, please also clear the list of the authorized external networks set on the same instance.
observabilityConfig
Optional
object
observabilityConfig.assistiveExperiencesEnabled
Optional
boolean
Whether assistive experiences are enabled for this AlloyDB instance.
observabilityConfig.enabled
Optional
boolean
Observability feature status for an instance. This flag is turned "off" by default.
observabilityConfig.maxQueryStringLength
Optional
integer
Query string length. The default value is 10k.
observabilityConfig.preserveComments
Optional
boolean
Preserve comments in query string for an instance. This flag is turned "off" by default.
observabilityConfig.queryPlansPerMinute
Optional
integer
Number of query execution plans captured by Insights per minute for all queries combined. The default value is 200. Any integer between 0 to 200 is considered valid.
observabilityConfig.recordApplicationTags
Optional
boolean
Record application tags for an instance. This flag is turned "off" by default.
observabilityConfig.trackActiveQueries
Optional
boolean
Track actively running queries on the instance. If not set, this flag is "off" by default.
observabilityConfig.trackClientAddress
Optional
boolean
Track client address for an instance. If not set, default value is "off".
observabilityConfig.trackWaitEvents
Optional
boolean
Track wait events during query execution for an instance. This flag is turned "on" by default but tracking is enabled only after observability enabled flag is also turned on.
queryInsightsConfig
Optional
object
queryInsightsConfig.queryPlansPerMinute
Optional
integer
Number of query execution plans captured by Insights per minute for all queries combined. The default value is 5. Any integer between 0 and 20 is considered valid.
queryInsightsConfig.queryStringLength
Optional
integer
Query string length. The default value is 1024. Any integer between 256 and 4500 is considered valid.
queryInsightsConfig.recordApplicationTags
Optional
boolean
Record application tags for an instance. This flag is turned "on" by default.
queryInsightsConfig.recordClientAddress
Optional
boolean
Record client address for an instance. Client address is PII information. This flag is turned "on" by default.
readPoolConfig
Optional
object
Read pool specific config. If the instance type is READ_POOL, this configuration must be provided.
readPoolConfig.nodeCount
Optional
integer
Read capacity, i.e. number of nodes in a read pool instance.
resourceID
Optional
string
Optional. The instanceId of the resource. If not given, the metadata.name will be used.
Status
Schema
conditions :
- lastTransitionTime : string
message : string
reason : string
status : string
type : string
createTime : string
externalRef : string
ipAddress : string
name : string
observedGeneration : integer
observedState :
connectionPoolConfig :
poolerCount : integer
observabilityConfig :
trackWaitEventTypes : boolean
outboundPublicIpAddresses :
- string
publicIpAddress : string
reconciling : boolean
state : string
uid : string
updateTime : string
Fields
conditions
list (object)
Conditions represent the latest available observations of the object's current state.
conditions[]
object
conditions[].lastTransitionTime
string
Last time the condition transitioned from one status to another.
conditions[].message
string
Human-readable message indicating details about last transition.
conditions[].reason
string
Unique, one-word, CamelCase reason for the condition's last transition.
conditions[].status
string
Status is the status of the condition. Can be True, False, Unknown.
conditions[].type
string
Type is the type of the condition.
createTime
string
Time the Instance was created in UTC.
externalRef
string
A unique specifier for the AlloyDBInstance resource in GCP.
ipAddress
string
The IP address for the Instance. This is the connection endpoint for an end-user application.
name
string
The name of the instance resource.
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
observedState
object
ObservedState is the state of the resource as most recently observed in GCP.
observedState.connectionPoolConfig
object
Output for Managed Connection Pool (MCP).
observedState.connectionPoolConfig.poolerCount
integer
Output only. The number of running poolers per instance.
observedState.observabilityConfig
object
Observability feature status for an instance.
observedState.observabilityConfig.trackWaitEventTypes
boolean
Output only. Track wait event types during query execution for an instance. This flag is turned "on" by default but tracking is enabled only after observability enabled flag is also turned on. This is read-only flag and only modifiable by internal API.
outboundPublicIpAddresses
list (string)
The outbound public IP addresses for the instance. This is available ONLY when networkConfig.enableOutboundPublicIp is set to true. These IP addresses are used for outbound connections.
outboundPublicIpAddresses[]
string
publicIpAddress
string
The public IP addresses for the Instance. This is available ONLY when networkConfig.enablePublicIp is set to true. This is the connection endpoint for an end-user application.
reconciling
boolean
Set to true if the current state of Instance does not match the user's intended state, and the service is actively updating the resource to reconcile them. This can happen due to user-triggered updates or system actions like failover or maintenance.
state
string
The current state of the alloydb instance.
uid
string
The system-generated UID of the resource.
updateTime
string
Time the Instance was updated in UTC.
Sample YAML(s)
Primary Instance
# Copyright 2023 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
apiVersion : alloydb.cnrm.cloud.google.com/v1beta1
kind : AlloyDBInstance
metadata :
name : alloydbinstance-sample-primary
spec :
clusterRef :
name : alloydbinstance-dep-primary
instanceTypeRef :
name : alloydbinstance-dep-primary
databaseFlags :
enable_google_adaptive_autovacuum : "off"
password.enforce_complexity : "on"
machineConfig :
cpuCount : 2
networkConfig :
enablePublicIp : true
enableOutboundPublicIp : true
authorizedExternalNetworks :
- cidrRange : 8.8.8.8/30
- cidrRange : 8.8.4.4/30
---
apiVersion : alloydb.cnrm.cloud.google.com/v1beta1
kind : AlloyDBCluster
metadata :
name : alloydbinstance-dep-primary
spec :
location : asia-east1
networkConfig :
networkRef :
name : alloydbinstance-dep-primary
projectRef :
external : ${PROJECT_ID?}
---
apiVersion : compute.cnrm.cloud.google.com/v1beta1
kind : ComputeAddress
metadata :
name : alloydbinstance-dep-primary
spec :
location : global
addressType : INTERNAL
networkRef :
name : alloydbinstance-dep-primary
prefixLength : 16
purpose : VPC_PEERING
---
apiVersion : compute.cnrm.cloud.google.com/v1beta1
kind : ComputeNetwork
metadata :
name : alloydbinstance-dep-primary
---
apiVersion : servicenetworking.cnrm.cloud.google.com/v1beta1
kind : ServiceNetworkingConnection
metadata :
name : alloydbinstance-dep-primary
spec :
networkRef :
name : alloydbinstance-dep-primary
reservedPeeringRanges :
- external : alloydbinstance-dep-primary
service : servicenetworking.googleapis.com
Read Instance
# Copyright 2023 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
apiVersion : alloydb.cnrm.cloud.google.com/v1beta1
kind : AlloyDBInstance
metadata :
name : alloydbinstance-dep-read
spec :
clusterRef :
name : alloydbinstance-dep-read
instanceTypeRef :
name : alloydbinstance-dep-read
---
apiVersion : alloydb.cnrm.cloud.google.com/v1beta1
kind : AlloyDBInstance
metadata :
name : alloydbinstance-sample-read
spec :
clusterRef :
name : alloydbinstance-dep-read
instanceTypeRef :
external : READ_POOL
databaseFlags :
google_columnar_engine.enabled : "on"
machineConfig :
cpuCount : 2
readPoolConfig :
nodeCount : 3
---
apiVersion : alloydb.cnrm.cloud.google.com/v1beta1
kind : AlloyDBCluster
metadata :
name : alloydbinstance-dep-read
spec :
location : asia-east2
networkConfig :
networkRef :
name : alloydbinstance-dep-read
projectRef :
external : ${PROJECT_ID?}
---
apiVersion : compute.cnrm.cloud.google.com/v1beta1
kind : ComputeAddress
metadata :
name : alloydbinstance-dep-read
spec :
location : global
addressType : INTERNAL
networkRef :
name : alloydbinstance-dep-read
prefixLength : 16
purpose : VPC_PEERING
---
apiVersion : compute.cnrm.cloud.google.com/v1beta1
kind : ComputeNetwork
metadata :
name : alloydbinstance-dep-read
---
apiVersion : servicenetworking.cnrm.cloud.google.com/v1beta1
kind : ServiceNetworkingConnection
metadata :
name : alloydbinstance-dep-read
spec :
networkRef :
name : alloydbinstance-dep-read
reservedPeeringRanges :
- name : alloydbinstance-dep-read
service : servicenetworking.googleapis.com
Secondary Instance
# Copyright 2024 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
apiVersion : alloydb.cnrm.cloud.google.com/v1beta1
kind : AlloyDBInstance
metadata :
name : alloydbinstance-dep-secondary
spec :
clusterRef :
name : alloydbinstance-dep1-secondary
instanceTypeRef :
name : alloydbinstance-dep1-secondary
---
apiVersion : alloydb.cnrm.cloud.google.com/v1beta1
kind : AlloyDBInstance
metadata :
name : alloydbinstance-sample-secondary
spec :
clusterRef :
name : alloydbinstance-dep2-secondary
instanceTypeRef :
name : alloydbinstance-dep2-secondary
---
apiVersion : alloydb.cnrm.cloud.google.com/v1beta1
kind : AlloyDBCluster
metadata :
name : alloydbinstance-dep1-secondary
spec :
location : asia-northeast1
networkConfig :
networkRef :
name : alloydbinstance-dep-secondary
projectRef :
external : ${PROJECT_ID?}
initialUser :
user : "postgres"
password :
value : "postgres"
---
apiVersion : alloydb.cnrm.cloud.google.com/v1beta1
kind : AlloyDBCluster
metadata :
name : alloydbinstance-dep2-secondary
spec :
location : asia-northeast2
networkConfig :
networkRef :
name : alloydbinstance-dep-secondary
projectRef :
external : ${PROJECT_ID?}
clusterType : "SECONDARY"
secondaryConfig :
primaryClusterNameRef :
name : alloydbinstance-dep1-secondary
deletionPolicy : "FORCE"
---
apiVersion : compute.cnrm.cloud.google.com/v1beta1
kind : ComputeAddress
metadata :
name : alloydbinstance-dep-secondary
spec :
location : global
addressType : INTERNAL
networkRef :
name : alloydbinstance-dep-secondary
prefixLength : 16
purpose : VPC_PEERING
---
apiVersion : compute.cnrm.cloud.google.com/v1beta1
kind : ComputeNetwork
metadata :
name : alloydbinstance-dep-secondary
---
apiVersion : servicenetworking.cnrm.cloud.google.com/v1beta1
kind : ServiceNetworkingConnection
metadata :
name : alloydbinstance-dep-secondary
spec :
networkRef :
name : alloydbinstance-dep-secondary
reservedPeeringRanges :
- name : alloydbinstance-dep-secondary
service : servicenetworking.googleapis.com
Zonal Instance
# Copyright 2023 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
apiVersion : alloydb.cnrm.cloud.google.com/v1beta1
kind : AlloyDBInstance
metadata :
name : alloydbinstance-sample-zonal
spec :
clusterRef :
name : alloydbinstance-dep-zonal
availabilityType : ZONAL
instanceTypeRef :
name : alloydbinstance-dep-zonal
machineConfig :
cpuCount : 2
---
apiVersion : alloydb.cnrm.cloud.google.com/v1beta1
kind : AlloyDBCluster
metadata :
name : alloydbinstance-dep-zonal
spec :
location : asia-northeast3
networkConfig :
networkRef :
name : alloydbinstance-dep-zonal
projectRef :
external : ${PROJECT_ID?}
---
apiVersion : compute.cnrm.cloud.google.com/v1beta1
kind : ComputeAddress
metadata :
name : alloydbinstance-dep-zonal
spec :
location : global
addressType : INTERNAL
networkRef :
name : alloydbinstance-dep-zonal
prefixLength : 16
purpose : VPC_PEERING
---
apiVersion : compute.cnrm.cloud.google.com/v1beta1
kind : ComputeNetwork
metadata :
name : alloydbinstance-dep-zonal
---
apiVersion : servicenetworking.cnrm.cloud.google.com/v1beta1
kind : ServiceNetworkingConnection
metadata :
name : alloydbinstance-dep-zonal
spec :
networkRef :
name : alloydbinstance-dep-zonal
reservedPeeringRanges :
- external : alloydbinstance-dep-zonal
service : servicenetworking.googleapis.com
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
