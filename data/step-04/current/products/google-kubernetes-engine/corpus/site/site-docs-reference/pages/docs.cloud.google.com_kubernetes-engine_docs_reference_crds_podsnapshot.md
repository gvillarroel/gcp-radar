---
title: "Pod snapshot CRDs \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/podsnapshot
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/podsnapshot
  title: "Pod snapshot CRDs \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Reference
Send feedback
Pod snapshot CRDs
Stay organized with collections
Save and categorize content based on your preferences.
GKE Pod snapshots are configured with two custom resource definitions (CRDs):
PodSnapshotStorageConfig
PodSnapshotPolicy
When snapshots are taken, the Pod state is represented by a PodSnapshot resource.
Each resource includes status fields that update when snapshots are taken,
which helps monitor operation success or failure.
To learn more about Pod snapshots, see About Pod snapshots .
PodSnapshotStorageConfig specification
PodSnapshotStorageConfig defines where Pod snapshots are stored.
spec :
snapshotStorageConfig :
gcs :
bucket : string
path : string
Fields
spec.snapshotStorageConfig
required
object
Defines the configuration for the snapshot's underlying storage.
spec.snapshotStorageConfig.gcs
required
object
Contains the configuration for Cloud Storage setups.
spec.snapshotStorageConfig.gcs.bucket
required
string
Defines the bucket name to be used for storing Pod snapshots.
spec.snapshotStorageConfig.gcs.path
optional
string
Defines the path within the bucket to be used as a child directory for storing Pod snapshots.
Status
The status section indicates the observed state of the PodSnapshotStorageConfig resource.
Fields
status.conditions
array (object)
List of status conditions for the storage configuration.
status.observedGeneration
integer
The most recent generation observed by the controller.
PodSnapshotPolicy specification
PodSnapshotPolicy configures the Pod snapshot feature, such as the matching
conditions to trigger checkpoints for selected workloads.
spec :
selector :
matchExpressions :
- key : string
operator : string
values : [] string
matchLabels :
additionalProperties : string
storageConfigName : string
triggerConfig :
postCheckpoint : string
type : string
retentionConfig :
lastAccessTimeout : string
snapshotGroupingRules :
groupByLabelValue :
labels : [] string
groupRetentionPolicy :
maxSnapshotCountPerGroup : int
Fields
spec.selector
required
object
Defines the set of Pods managed by this policy. The policy's checkpoint and restore settings will apply to all Pods that match the policy's label selector.
spec.selector.matchExpressions
optional
[]object
A list of label selector requirements. The requirements are combined by using an AND statement.
spec.selector.matchExpressions[].key
required
string
The label key that the selector applies to.
spec.selector.matchExpressions[].operator
required
string
Represents a key's relationship to a set of values. Valid operators are In , NotIn , Exists , and DoesNotExist .
spec.selector.matchExpressions[].values
optional
[]string
An array of string values. If the operator is In or NotIn , the values array must be non-empty. If the operator is Exists or DoesNotExist , the values array must be empty.
spec.selector.matchLabels
optional
object
A map of key-value pairs. A single key-value pair in the map is equivalent to an element of matchExpressions , whose key field is "key", the operator is In , and the values array contains only "value". The requirements are combined by using an AND statement.
spec.storageConfigName
required
string
Name of the PodSnapshotStorageConfig this policy depends on.
spec.triggerConfig
required
object
Configuration for checkpoint triggers.
spec.triggerConfig.postCheckpoint
optional
string
Defines Pod behavior after a checkpoint is taken. stop : the Pod turns to completed status. resume : the workload resumes after being checkpointed. Default is resume .
spec.triggerConfig.type
required
string
Type of checkpoint trigger. The following values are supported:
workload : triggered by the application inside the Pod signaling to the GKE agent.
manual : triggered by the creation of a PodSnapshotManualTrigger custom resource.
spec.retentionConfig
optional
object
Configuration for Pod snapshot retention policy. If not set, the Pod snapshot will always persist unless manually deleted.
spec.retentionConfig.lastAccessTimeout
required
string
Duration after which a Pod snapshot will be considered stale and deleted automatically. Supported units are y , mo , d , h , and min .
spec.snapshotGroupingRules
optional
object
Configuration for defining the Pod snapshot groups. This field is available in GKE version 1.35.0-gke.3047000 and later.
spec.snapshotGroupingRules.groupByLabelValue
required
object
Configuration for defining the grouping mechanism for Pod snapshots.
spec.snapshotGroupingRules.groupByLabelValue.labels
required
[]string
An array of string values indicating the Pod labels used for grouping.
Labels defined in this field must be present on the workload Pod when the snapshot is taken or restored.
spec.snapshotGroupingRules.groupByLabelValue.groupRetentionPolicy
optional
object
Configuration for defining the snapshot retention configuration per group.
spec.snapshotGroupingRules.groupByLabelValue.groupRetentionPolicy.maxSnapshotCountPerGroup
required
int
The maximum number of snapshots retained per group. If the number of Pod snapshots in a group exceed this number, they are automatically deleted, starting with the oldest snapshot, until the count reaches this number.
Setting 0 as the value for this option lifts the restriction on snapshot retention.
Status
The status section indicates the observed state of the PodSnapshotPolicy resource.
Fields
status.conditions
array (object)
List of status conditions for the snapshot policy.
status.observedGeneration
integer
The most recent generation observed by the controller.
PodSnapshotManualTrigger specification
PodSnapshotManualTrigger signals when to take a snapshot of a specified Pod.
spec :
targetPod : string
Fields
spec.targetPod
required
string
Name of the Pod to take a snapshot of.
Status
The status section indicates the state of the manual trigger operation.
Fields
status.conditions
array (object)
List of status conditions for the manual trigger, such as whether the checkpoint was successful.
status.observedGeneration
integer
The most recent generation observed by the controller.
status.snapshotCreated
string
The name of the PodSnapshot resource created as a result of this trigger.
PodSnapshot specification
PodSnapshot represents a point-in-time snapshot of a Pod's state.
It is governed by the PodSnapshotPolicy.
spec :
policyName : string
Fields
spec.policyName
required
string
The name of the PodSnapshotPolicy in the same namespace that governs the behavior of this snapshot. This field is immutable.
Status
The status section indicates whether a snapshot operation succeeded or failed
and provides metadata about the snapshot.
Fields
status.conditions
array (object)
List of status conditions for the snapshot operation.
status.lastAccessTime
string
The last time this snapshot was used to restore a Pod.
status.observedCheckpointRetryCount
integer
The current retry attempt count for this snapshotting operation.
status.observedGeneration
integer
The most recent generation observed by the controller.
status.storageStatus.gcs.observedGCSPath
string
The Cloud Storage path where the snapshot data resides.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
