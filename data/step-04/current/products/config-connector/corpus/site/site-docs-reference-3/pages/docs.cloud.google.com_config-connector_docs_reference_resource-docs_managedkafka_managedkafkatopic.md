---
title: "ManagedKafkaTopic \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/managedkafka/managedkafkatopic
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/managedkafka/managedkafkatopic
  title: "ManagedKafkaTopic \_|\_ Config Connector \_|\_ Google Cloud Documentation"
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
ManagedKafkaTopic
Property
Value
Google Cloud Service Name
Managed Kafka
Google Cloud Service Documentation
/managed-service-for-apache-kafka/docs/
Google Cloud REST Resource Name
v1beta1.projects.locations.clusters.topics
Google Cloud REST Resource Documentation
/managed-service-for-apache-kafka/docs/reference/rest/v1/projects.locations.clusters.topics
Config Connector Resource Short Names
gcpmanagedkafkatopic gcpmanagedkafkatopics managedkafkatopic
Config Connector Service Name
managedkafka.googleapis.com
Config Connector Resource Fully Qualified Name
managedkafkatopics.managedkafka.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Spec
Schema
clusterRef :
external : string
name : string
namespace : string
configs :
string : string
location : string
partitionCount : integer
projectRef :
external : string
kind : string
name : string
namespace : string
replicationFactor : integer
resourceID : string
Fields
clusterRef
Required
object
Required. Reference to the Kafka cluster to create the topic in.
clusterRef.external
Optional
string
A reference to an externally managed ManagedKafkaCluster resource. Should be in the format "projects/{{projectID}}/locations/{{location}}/clusters/{{clusterID}}".
clusterRef.name
Optional
string
The name of a ManagedKafkaCluster resource.
clusterRef.namespace
Optional
string
The namespace of a ManagedKafkaCluster resource.
configs
Optional
map (key: string, value: string)
Optional. Configurations for the topic that are overridden from the cluster defaults. The key of the map is a Kafka topic property name, for example: `cleanup.policy`, `compression.type`.
location
Required
string
Required. the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.
partitionCount
Required
integer
Required. The number of partitions this topic has. The partition count can only be increased, not decreased. Please note that if partitions are increased for a topic that has a key, the partitioning logic or the ordering of the messages will be affected.
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
replicationFactor
Required
integer
Required. Immutable. The number of replicas of each partition. A replication factor of 3 is recommended for high availability.
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
A unique specifier for the ManagedKafkaTopic resource in GCP.
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
Sample YAML(s)
Typical Use Case
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
kind : ManagedKafkaTopic
metadata :
name : managedkafkatopic-sample
spec :
projectRef :
# Replace ${PROJECT_ID?} with your project ID
external : ${PROJECT_ID?}
location : us-central1
clusterRef :
name : managedkafkatopic-dep
partitionCount : 2
replicationFactor : 3
configs :
cleanup.policy : compact
---
apiVersion : compute.cnrm.cloud.google.com/v1beta1
kind : ComputeNetwork
metadata :
name : managedkafkatopic-dep
spec :
autoCreateSubnetworks : false
---
apiVersion : compute.cnrm.cloud.google.com/v1beta1
kind : ComputeSubnetwork
metadata :
name : managedkafkatopic-dep
spec :
region : us-central1
networkRef :
name : managedkafkatopic-dep
ipCidrRange : 10.0.0.0/24
---
apiVersion : managedkafka.cnrm.cloud.google.com/v1beta1
kind : ManagedKafkaCluster
metadata :
name : managedkafkatopic-dep
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
name : managedkafkatopic-dep
rebalanceConfig :
mode : NO_REBALANCE
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
