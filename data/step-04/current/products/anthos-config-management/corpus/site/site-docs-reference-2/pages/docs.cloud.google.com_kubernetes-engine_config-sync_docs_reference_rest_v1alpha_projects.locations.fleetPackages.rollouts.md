---
title: "REST Resource: projects.locations.fleetPackages.rollouts \_|\_ Config Sync\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.fleetPackages.rollouts
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/projects.locations.fleetPackages.rollouts
  title: "REST Resource: projects.locations.fleetPackages.rollouts \_|\_ Config Sync\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Config Sync
Reference
Send feedback
REST Resource: projects.locations.fleetPackages.rollouts
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Rollout
JSON representation
RolloutInfo
JSON representation
State
RolloutStrategyInfo
JSON representation
AllAtOnceStrategyInfo
JSON representation
ClusterInfo
JSON representation
ResourceBundleDeploymentInfo
JSON representation
SyncState
State
RollingStrategyInfo
JSON representation
Methods
Resource: Rollout
Rollout resource represents an instance of FleetPackage rollout operation across a fleet. This is a system generated resource and will be read only for end-users. It will be primarily used by the service to process the changes in the FleetPackage and other changes in the environment.
JSON representation
{
"name" : string ,
"release" : string ,
"rolloutStrategy" : {
object ( RolloutStrategy )
} ,
"info" : {
object ( RolloutInfo )
} ,
"deletionPropagationPolicy" : enum ( DeletionPropagationPolicy ) ,
"createTime" : string ,
"updateTime" : string
}
Fields
name
string
Identifier. Name of the Rollout. Format is projects/{project}/locations/{location}/fleetPackages/{fleetPackage}/rollouts/[a-z][a-z0-9\-]{0,62} .
release
string
Reference to the Release being rolled out.
rolloutStrategy
object ( RolloutStrategy )
Rollout strategy for rolling out FleetPackage to clusters.
info
object ( RolloutInfo )
Current details of the rollout.
deletionPropagationPolicy
enum ( DeletionPropagationPolicy )
Deletion propagation policy of the rollout.
createTime
string ( Timestamp format)
Output only. The time the rollout was created.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. The time the rollout was most recently updated.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
RolloutInfo
RolloutInfo represents the state of the FleetPackage at all the clusters the rollout is targeting.
JSON representation
{
"state" : enum ( State ) ,
"startTime" : string ,
"endTime" : string ,
"message" : string ,
"rolloutStrategyInfo" : {
object ( RolloutStrategyInfo )
}
}
Fields
state
enum ( State )
Output only. State contains the overall status of the Rollout.
startTime
string ( Timestamp format)
Output only. Time when the rollout started.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
endTime
string ( Timestamp format)
Output only. Time when the rollout completed.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
message
string
Output only. Message containing additional information related to the rollout.
rolloutStrategyInfo
object ( RolloutStrategyInfo )
Output only. Rollout strategy info represents the status of execution of rollout strategy.
State
State of the rollout
Enums
STATE_UNSPECIFIED
Unspecified state.
COMPLETED
Rollout completed.
SUSPENDED
Rollout suspended.
ABORTED
Rollout aborted. A rollout that was already running was stopped because the fleet memberships changed, or the fleet package was deleted.
IN_PROGRESS
Rollout in progress.
STALLED
Rollout stalled.
CANCELLED
Rollout cancelled. The proposed rollout was deemed invalid or impossible to execute from the start due to issues with the package, release, or variant configuration.
ABORTING
Rollout aborting.
RolloutStrategyInfo
RolloutStrategyInfo represents the status of execution of different types of rollout strategies. Only the field corresponding to the rollout strategy specified at the rollout resource will be populated.
JSON representation
{
// Union field strategy can be only one of the following:
"allAtOnceStrategyInfo" : {
object ( AllAtOnceStrategyInfo )
} ,
"rollingStrategyInfo" : {
object ( RollingStrategyInfo )
}
// End of list of possible types for union field strategy .
}
Fields
Union field strategy . Strategy represents result of applying one of the rollout strategies. strategy can be only one of the following:
allAtOnceStrategyInfo
object ( AllAtOnceStrategyInfo )
AllAtOnceStrategyInfo represents the status of AllAtOnce rollout strategy execution.
rollingStrategyInfo
object ( RollingStrategyInfo )
RollingStrategyInfo represents the status of Rolling rollout strategy execution.
AllAtOnceStrategyInfo
AllAtOnceStrategyInfo represents the status of execution of AllAtOnce rollout strategy.
JSON representation
{
"clusters" : [
{
object ( ClusterInfo )
}
]
}
Fields
clusters[]
object ( ClusterInfo )
Unordered list. Resource bundle's deployment status for all targeted clusters.
ClusterInfo
ClusterInfo represents status of a resource bundle rollout for a cluster.
JSON representation
{
"membership" : string ,
"desired" : {
object ( ResourceBundleDeploymentInfo )
} ,
"initial" : {
object ( ResourceBundleDeploymentInfo )
} ,
"current" : {
object ( ResourceBundleDeploymentInfo )
} ,
"state" : enum ( State ) ,
"messages" : [
string
] ,
"startTime" : string ,
"endTime" : string
}
Fields
membership
string
Output only. gkehub membership of target cluster
desired
object ( ResourceBundleDeploymentInfo )
Output only. Desired state for the resource bundle.
initial
object ( ResourceBundleDeploymentInfo )
Output only. Initial state of the resource bundle prior to the deployment.
current
object ( ResourceBundleDeploymentInfo )
Output only. Current state of the resource bundle.
state
enum ( State )
Output only. State of the rollout for the cluster.
messages[]
string
Output only. Unordered list. Messages convey additional information related to the deployment.
startTime
string ( Timestamp format)
Output only. Timestamp when reconciliation starts.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
endTime
string ( Timestamp format)
Output only. Timestamp when reconciliation ends.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
ResourceBundleDeploymentInfo
ResourceBundleDeploymentInfo represents the status of a resource bundle deployment.
JSON representation
{
"release" : string ,
"version" : string ,
"variant" : string ,
"syncState" : enum ( SyncState ) ,
"messages" : [
string
]
}
Fields
release
string
Output only. Refers to a ResourceBundle release.
version
string
Output only. Refers to a version of the ResourceBundle release.
variant
string
Output only. Refers to a variant in a ResourceBundle release.
syncState
enum ( SyncState )
Output only. Synchronization state of the ResourceBundle deployment.
messages[]
string
Output only. Unordered list. Messages contain information related to the ResourceBundle deployment. For example, in case of an error, indicate the reason for the error. In case of a pending deployment, messages will contain the reason why the deployment of new release is pending.
SyncState
Synchronization state of the resource bundle deployment.
Enums
SYNC_STATE_UNSPECIFIED
Unspecified state.
RECONCILING
Reconciling state.
STALLED
Stalled state.
SYNCED
Synced state.
PENDING
Pending state.
ERROR
Error state.
DELETION_PENDING
Deletion pending state.
DELETING
Deleting state.
DELETED
Deleted state.
State
State of the rollout for the cluster.
Enums
STATE_UNSPECIFIED
Unspecified state.
WAITING
Waiting state.
IN_PROGRESS
In progress state.
STALLED
Stalled state.
COMPLETED
Completed state.
ABORTED
Aborted state. A rollout that was already running was stopped because the fleet memberships changed, or the fleet package was deleted.
CANCELLED
Cancelled state. The proposed rollout was deemed invalid or impossible to execute from the start due to issues with the package, release, or variant configuration.
ERROR
Error state.
UNCHANGED
Unchanged state.
SKIPPED
Skipped state.
RollingStrategyInfo
RollingStrategyInfo represents the status of execution of Rolling rollout strategy.
JSON representation
{
"clusters" : [
{
object ( ClusterInfo )
}
]
}
Fields
clusters[]
object ( ClusterInfo )
Unordered list. Resource bundle's deployment status for all targeted clusters.
Methods
abort
Abort a Rollout.
get
Gets details of a single Rollout.
list
Lists Rollouts in a given project, location, and Fleet Package.
resume
Resume a Rollout.
suspend
Suspend a Rollout.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-28 UTC."],[],[]]
