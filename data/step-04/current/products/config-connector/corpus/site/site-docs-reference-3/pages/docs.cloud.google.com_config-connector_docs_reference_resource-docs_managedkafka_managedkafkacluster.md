---
title: "ManagedKafkaCluster \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/managedkafka/managedkafkacluster
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/managedkafka/managedkafkacluster
  title: "ManagedKafkaCluster \_|\_ Config Connector \_|\_ Google Cloud Documentation"
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
ManagedKafkaCluster
Property
Value
Google Cloud Service Name
Managed Kafka
Google Cloud Service Documentation
/managed-service-for-apache-kafka/docs/
Google Cloud REST Resource Name
v1beta1.projects.locations.clusters
Google Cloud REST Resource Documentation
/managed-service-for-apache-kafka/docs/reference/rest/v1/projects.locations.clusters
Config Connector Resource Short Names
gcpmanagedkafkacluster gcpmanagedkafkaclusters managedkafkacluster
Config Connector Service Name
managedkafka.googleapis.com
Config Connector Resource Fully Qualified Name
managedkafkaclusters.managedkafka.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Spec
Schema
capacityConfig :
memoryBytes : integer
vcpuCount : integer
gcpConfig :
accessConfig :
networkConfigs :
- subnetworkRef :
external : string
name : string
namespace : string
kmsKeyRef :
external : string
name : string
namespace : string
labels :
string : string
location : string
projectRef :
external : string
kind : string
name : string
namespace : string
rebalanceConfig :
mode : string
resourceID : string
Fields
capacityConfig
Required
object
Required. Capacity configuration for the Kafka cluster.
capacityConfig.memoryBytes
Required
integer
Required. The memory to provision for the cluster in bytes. The CPU:memory ratio (vCPU:GiB) must be between 1:1 and 1:8. Minimum: 3221225472 (3 GiB).
capacityConfig.vcpuCount
Required
integer
Required. The number of vCPUs to provision for the cluster. Minimum: 3.
gcpConfig
Required
object
Required. Configuration properties for a Kafka cluster deployed to Google Cloud Platform.
gcpConfig.accessConfig
Required
object
Required. Access configuration for the Kafka cluster.
gcpConfig.accessConfig.networkConfigs
Required
list (object)
Required. Virtual Private Cloud (VPC) networks that must be granted direct access to the Kafka cluster. Minimum of 1 network is required. Maximum 10 networks can be specified.
gcpConfig.accessConfig.networkConfigs[]
Required
object
gcpConfig.accessConfig.networkConfigs[].subnetworkRef
Required
object
Required. Reference to the VPC subnet in which to create Private Service Connect
(PSC) endpoints for the Kafka brokers and bootstrap address.
The subnet must be located in the same region as the Kafka cluster. The
project may differ. Multiple subnets from the same parent network must not
be specified.
The CIDR range of the subnet must be within the IPv4 address ranges for
private networks, as specified in RFC 1918.
gcpConfig.accessConfig.networkConfigs[].subnetworkRef.external
Optional
string
The ComputeSubnetwork selflink of form "projects/{{project}}/regions/{{region}}/subnetworks/{{name}}", when not managed by Config Connector.
gcpConfig.accessConfig.networkConfigs[].subnetworkRef.name
Optional
string
The `name` field of a `ComputeSubnetwork` resource.
gcpConfig.accessConfig.networkConfigs[].subnetworkRef.namespace
Optional
string
The `namespace` field of a `ComputeSubnetwork` resource.
gcpConfig.kmsKeyRef
Optional
object
Optional. Immutable. The Cloud KMS Key name to use for encryption. The key must be located in the same region as the cluster and cannot be changed.
gcpConfig.kmsKeyRef.external
Optional
string
A reference to an externally managed KMSCryptoKey. Should be in the format `projects/[kms_project_id]/locations/[region]/keyRings/[key_ring_id]/cryptoKeys/[key]`.
gcpConfig.kmsKeyRef.name
Optional
string
The `name` of a `KMSCryptoKey` resource.
gcpConfig.kmsKeyRef.namespace
Optional
string
The `namespace` of a `KMSCryptoKey` resource.
labels
Optional
map (key: string, value: string)
Optional. Labels as key value pairs.
location
Required
string
projectRef
Required
object
The Project that this resource belongs to.
projectRef.external
Optional
string
The `projectID` field of a project, when not managed by Config Connector.
projectRef.kind
Optional
string
The kind of the Project resource; optional but must be `Project` if provided.
projectRef.name
Optional
string
The `name` field of a `Project` resource.
projectRef.namespace
Optional
string
The `namespace` field of a `Project` resource.
rebalanceConfig
Optional
object
Optional. Rebalance configuration for the Kafka cluster.
rebalanceConfig.mode
Optional
string
Optional. The rebalance behavior for the cluster. When not specified, defaults to `NO_REBALANCE`.
resourceID
Optional
string
The GCP resource identifier. If not given, the metadata.name will be used.
Status
Schema
conditions :
- lastTransitionTime : string
message : string
reason : string
status : string
type : string
externalRef : string
observedGeneration : integer
observedState :
createTime : string
state : string
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
externalRef
string
A unique specifier for the ManagedKafkaCluster resource in GCP.
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
observedState
object
ObservedState is the state of the resource as most recently observed in GCP.
observedState.createTime
string
Output only. The time when the cluster was created.
observedState.state
string
Output only. The current state of the cluster.
observedState.updateTime
string
Output only. The time when the cluster was last updated.
Sample YAML(s)
ManagedKafkaCluster Basic
# Copyright 2025 Google LLC
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
apiVersion : managedkafka.cnrm.cloud.google.com/v1beta1
kind : ManagedKafkaCluster
metadata :
name : managedkafkacluster-sample
spec :
projectRef :
# Replace ${PROJECT_ID?} with your project ID.
external : ${PROJECT_ID?}
location : us-central1
capacityConfig :
vcpuCount : 3
memoryBytes : 3221225472 # 3GB
gcpConfig :
accessConfig :
networkConfigs :
- subnetworkRef :
name : managedkafkacluster-dep
rebalanceConfig :
mode : NO_REBALANCE
---
apiVersion : compute.cnrm.cloud.google.com/v1beta1
kind : ComputeNetwork
metadata :
name : managedkafkacluster-dep
spec :
autoCreateSubnetworks : false
---
apiVersion : compute.cnrm.cloud.google.com/v1beta1
kind : ComputeSubnetwork
metadata :
name : managedkafkacluster-dep
spec :
region : us-central1
networkRef :
name : managedkafkacluster-dep
ipCidrRange : 10.0.0.0/24
ManagedKafkaCluster Cmek
# Copyright 2025 Google LLC
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
apiVersion : managedkafka.cnrm.cloud.google.com/v1beta1
kind : ManagedKafkaCluster
metadata :
name : managedkafkacluster-sample-cmek
spec :
projectRef :
# Replace ${PROJECT_ID?} with your project ID
external : ${PROJECT_ID?}
location : us-central1
capacityConfig :
vcpuCount : 3
memoryBytes : 3221225472 # 3GB
gcpConfig :
accessConfig :
networkConfigs :
- subnetworkRef :
name : managedkafkacluster-dep-cmek
kmsKeyRef :
name : managedkafkacluster-dep-cmek
rebalanceConfig :
mode : NO_REBALANCE
---
apiVersion : compute.cnrm.cloud.google.com/v1beta1
kind : ComputeNetwork
metadata :
name : managedkafkacluster-dep-cmek
spec :
autoCreateSubnetworks : false
---
apiVersion : compute.cnrm.cloud.google.com/v1beta1
kind : ComputeSubnetwork
metadata :
name : managedkafkacluster-dep-cmek
spec :
region : us-central1
networkRef :
name : managedkafkacluster-dep-cmek
ipCidrRange : 10.0.0.0/24
---
# Replace ${PROJECT_ID?} and ${PROJECT_NUMBER?} below with your desired project
# ID and project number.
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMPolicyMember
metadata :
name : managedkafkacluster-dep-cmek
spec :
resourceRef :
apiVersion : kms.cnrm.cloud.google.com/v1beta1
kind : KMSCryptoKey
name : managedkafkacluster-dep-cmek
memberFrom :
serviceIdentityRef :
name : managedkafkacluster-dep-cmek
role : roles/cloudkms.cryptoKeyEncrypterDecrypter # required by managedkafka service agent to access KMS keys
---
apiVersion : kms.cnrm.cloud.google.com/v1beta1
kind : KMSCryptoKey
metadata :
annotations :
# Replace ${PROJECT_ID?} with your project ID.
cnrm.cloud.google.com/project-id : ${PROJECT_ID?}
name : managedkafkacluster-dep-cmek
spec :
keyRingRef :
name : managedkafkacluster-dep-cmek
purpose : ENCRYPT_DECRYPT
---
apiVersion : kms.cnrm.cloud.google.com/v1beta1
kind : KMSKeyRing
metadata :
annotations :
# Replace ${PROJECT_ID?} with your project ID.
cnrm.cloud.google.com/project-id : ${PROJECT_ID?}
name : managedkafkacluster-dep-cmek
spec :
location : us-central1
---
apiVersion : serviceusage.cnrm.cloud.google.com/v1beta1
kind : ServiceIdentity
metadata :
name : managedkafkacluster-dep-cmek
annotations :
cnrm.cloud.google.com/deletion-policy : "abandon"
spec :
projectRef :
# Replace ${PROJECT_ID?} with your project ID.
external : ${PROJECT_ID?}
resourceID : managedkafka.googleapis.com
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
