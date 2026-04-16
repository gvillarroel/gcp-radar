---
title: "CloudDeployDeliveryPipeline \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/clouddeploy/clouddeploydeliverypipeline
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/clouddeploy/clouddeploydeliverypipeline
  title: "CloudDeployDeliveryPipeline \_|\_ Config Connector \_|\_ Google Cloud Documentation"
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
CloudDeployDeliveryPipeline
Property
Value
Google Cloud Service Name
Cloud Deploy
Google Cloud Service Documentation
/deploy/docs/
Google Cloud REST Resource Name
projects.locations.deliveryPipelines
Google Cloud REST Resource Documentation
/deploy/docs/api/reference/rest/v1/projects.locations.deliveryPipelines
Config Connector Resource Short Names
gcpdeploydeliverypipeline gcpdeploydeliverypipelines clouddeploydeliverypipeline
Config Connector Service Name
clouddeploy.googleapis.com
Config Connector Resource Fully Qualified Name
clouddeploydeliverypipelines.clouddeploy.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Spec
Schema
annotations :
string : string
description : string
location : string
projectRef :
external : string
kind : string
name : string
namespace : string
resourceID : string
serialPipeline :
stages :
- deployParameters :
- matchTargetLabels :
string : string
values :
string : string
profiles :
- string
strategy :
canary :
canaryDeployment :
percentages :
- integer
postdeploy :
actions :
- string
predeploy :
actions :
- string
verify : boolean
customCanaryDeployment :
phaseConfigs :
- percentage : integer
phaseID : string
postdeploy :
actions :
- string
predeploy :
actions :
- string
profiles :
- string
verify : boolean
runtimeConfig :
cloudRun :
automaticTrafficControl : boolean
canaryRevisionTags :
- string
priorRevisionTags :
- string
stableRevisionTags :
- string
kubernetes :
gatewayServiceMesh :
deployment : string
httpRoute : string
podSelectorLabel : string
routeDestinations :
destinationIDs :
- string
propagateService : boolean
routeUpdateWaitTime : string
service : string
stableCutbackDuration : string
serviceNetworking :
deployment : string
disablePodOverprovisioning : boolean
podSelectorLabel : string
service : string
standard :
postdeploy :
actions :
- string
predeploy :
actions :
- string
verify : boolean
targetID : string
suspended : boolean
Fields
annotations
Optional
map (key: string, value: string)
User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy.
description
Optional
string
Description of the `DeliveryPipeline`. Max length is 255 characters.
location
Required
string
Immutable. The location where the DeliveryPipeline should reside.
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
resourceID
Optional
string
The Google Cloud resource identifier. If not given, the metadata.name will be used.
serialPipeline
Optional
object
SerialPipeline defines a sequential set of stages for a `DeliveryPipeline`.
serialPipeline.stages
Optional
list (object)
Optional. Each stage specifies configuration for a `Target`. The ordering of this list defines the promotion flow.
serialPipeline.stages[]
Optional
object
serialPipeline.stages[].deployParameters
Optional
list (object)
Optional. The deploy parameters to use for the target in this stage.
serialPipeline.stages[].deployParameters[]
Optional
object
serialPipeline.stages[].deployParameters[].matchTargetLabels
Optional
map (key: string, value: string)
Optional. Deploy parameters are applied to targets with match labels. If unspecified, deploy parameters are applied to all targets (including child targets of a multi-target).
serialPipeline.stages[].deployParameters[].values
Optional
map (key: string, value: string)
Required. Values are deploy parameters in key-value pairs.
serialPipeline.stages[].profiles
Optional
list (string)
Optional. Skaffold profiles to use when rendering the manifest for this stage's `Target`.
serialPipeline.stages[].profiles[]
Optional
string
serialPipeline.stages[].strategy
Optional
object
Optional. The strategy to use for a `Rollout` to this stage.
serialPipeline.stages[].strategy.canary
Optional
object
Optional. Canary deployment strategy provides progressive percentage based deployments to a Target.
serialPipeline.stages[].strategy.canary.canaryDeployment
Optional
object
Optional. Configures the progressive based deployment for a Target.
serialPipeline.stages[].strategy.canary.canaryDeployment.percentages
Optional
list (integer)
Required. The percentage-based deployments to occur in a Rollout. Provide a list of integers in ascending order. Each integer n must satisfy 0
serialPipeline.stages[].strategy.canary.canaryDeployment.percentages[]
Optional
integer
serialPipeline.stages[].strategy.canary.canaryDeployment.postdeploy
Optional
object
Optional. Configuration for the postdeploy job of the last phase. If this is not configured, there will be no postdeploy job for this phase.
serialPipeline.stages[].strategy.canary.canaryDeployment.postdeploy.actions
Optional
list (string)
Optional. A sequence of Skaffold custom actions to invoke during execution of the postdeploy job.
serialPipeline.stages[].strategy.canary.canaryDeployment.postdeploy.actions[]
Optional
string
serialPipeline.stages[].strategy.canary.canaryDeployment.predeploy
Optional
object
Optional. Configuration for the predeploy job of the first phase. If this is not configured, there will be no predeploy job for this phase.
serialPipeline.stages[].strategy.canary.canaryDeployment.predeploy.actions
Optional
list (string)
Optional. A sequence of Skaffold custom actions to invoke during execution of the predeploy job.
serialPipeline.stages[].strategy.canary.canaryDeployment.predeploy.actions[]
Optional
string
serialPipeline.stages[].strategy.canary.canaryDeployment.verify
Optional
boolean
Optional. Whether to run verify tests after each percentage deployment via `skaffold verify`.
serialPipeline.stages[].strategy.canary.customCanaryDeployment
Optional
object
Optional. Configures the progressive based deployment for a Target, but allows customizing at the phase level where a phase represents each of the percentage deployments.
serialPipeline.stages[].strategy.canary.customCanaryDeployment.phaseConfigs
Optional
list (object)
Required. Configuration for each phase in the canary deployment in the order executed.
serialPipeline.stages[].strategy.canary.customCanaryDeployment.phaseConfigs[]
Optional
object
serialPipeline.stages[].strategy.canary.customCanaryDeployment.phaseConfigs[].percentage
Optional
integer
Required. Percentage deployment for the phase.
serialPipeline.stages[].strategy.canary.customCanaryDeployment.phaseConfigs[].phaseID
Optional
string
Required. The ID to assign to the `Rollout` phase. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`.
serialPipeline.stages[].strategy.canary.customCanaryDeployment.phaseConfigs[].postdeploy
Optional
object
Optional. Configuration for the postdeploy job of this phase. If this is not configured, there will be no postdeploy job for this phase.
serialPipeline.stages[].strategy.canary.customCanaryDeployment.phaseConfigs[].postdeploy.actions
Optional
list (string)
Optional. A sequence of Skaffold custom actions to invoke during execution of the postdeploy job.
serialPipeline.stages[].strategy.canary.customCanaryDeployment.phaseConfigs[].postdeploy.actions[]
Optional
string
serialPipeline.stages[].strategy.canary.customCanaryDeployment.phaseConfigs[].predeploy
Optional
object
Optional. Configuration for the predeploy job of this phase. If this is not configured, there will be no predeploy job for this phase.
serialPipeline.stages[].strategy.canary.customCanaryDeployment.phaseConfigs[].predeploy.actions
Optional
list (string)
Optional. A sequence of Skaffold custom actions to invoke during execution of the predeploy job.
serialPipeline.stages[].strategy.canary.customCanaryDeployment.phaseConfigs[].predeploy.actions[]
Optional
string
serialPipeline.stages[].strategy.canary.customCanaryDeployment.phaseConfigs[].profiles
Optional
list (string)
Optional. Skaffold profiles to use when rendering the manifest for this phase. These are in addition to the profiles list specified in the `DeliveryPipeline` stage.
serialPipeline.stages[].strategy.canary.customCanaryDeployment.phaseConfigs[].profiles[]
Optional
string
serialPipeline.stages[].strategy.canary.customCanaryDeployment.phaseConfigs[].verify
Optional
boolean
Optional. Whether to run verify tests after the deployment via `skaffold verify`.
serialPipeline.stages[].strategy.canary.runtimeConfig
Optional
object
Optional. Runtime specific configurations for the deployment strategy. The runtime configuration is used to determine how Cloud Deploy will split traffic to enable a progressive deployment.
serialPipeline.stages[].strategy.canary.runtimeConfig.cloudRun
Optional
object
Optional. Cloud Run runtime configuration.
serialPipeline.stages[].strategy.canary.runtimeConfig.cloudRun.automaticTrafficControl
Optional
boolean
Optional. Whether Cloud Deploy should update the traffic stanza in a Cloud Run Service on the user's behalf to facilitate traffic splitting. This is required to be true for CanaryDeployments, but optional for CustomCanaryDeployments.
serialPipeline.stages[].strategy.canary.runtimeConfig.cloudRun.canaryRevisionTags
Optional
list (string)
Optional. A list of tags that are added to the canary revision while the canary phase is in progress.
serialPipeline.stages[].strategy.canary.runtimeConfig.cloudRun.canaryRevisionTags[]
Optional
string
serialPipeline.stages[].strategy.canary.runtimeConfig.cloudRun.priorRevisionTags
Optional
list (string)
Optional. A list of tags that are added to the prior revision while the canary phase is in progress.
serialPipeline.stages[].strategy.canary.runtimeConfig.cloudRun.priorRevisionTags[]
Optional
string
serialPipeline.stages[].strategy.canary.runtimeConfig.cloudRun.stableRevisionTags
Optional
list (string)
Optional. A list of tags that are added to the final stable revision when the stable phase is applied.
serialPipeline.stages[].strategy.canary.runtimeConfig.cloudRun.stableRevisionTags[]
Optional
string
serialPipeline.stages[].strategy.canary.runtimeConfig.kubernetes
Optional
object
Optional. Kubernetes runtime configuration.
serialPipeline.stages[].strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh
Optional
object
Optional. Kubernetes Gateway API service mesh configuration.
serialPipeline.stages[].strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.deployment
Optional
string
Required. Name of the Kubernetes Deployment whose traffic is managed by the specified HTTPRoute and Service.
serialPipeline.stages[].strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.httpRoute
Optional
string
Required. Name of the Gateway API HTTPRoute.
serialPipeline.stages[].strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.podSelectorLabel
Optional
string
Optional. The label to use when selecting Pods for the Deployment and Service resources. This label must already be present in both resources.
serialPipeline.stages[].strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.routeDestinations
Optional
object
Optional. Route destinations allow configuring the Gateway API HTTPRoute to be deployed to additional clusters. This option is available for multi-cluster service mesh set ups that require the route to exist in the clusters that call the service. If unspecified, the HTTPRoute will only be deployed to the Target cluster.
serialPipeline.stages[].strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.routeDestinations.destinationIDs
Optional
list (string)
Required. The clusters where the Gateway API HTTPRoute resource will be deployed to. Valid entries include the associated entities IDs configured in the Target resource and "@self" to include the Target cluster.
serialPipeline.stages[].strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.routeDestinations.destinationIDs[]
Optional
string
serialPipeline.stages[].strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.routeDestinations.propagateService
Optional
boolean
Optional. Whether to propagate the Kubernetes Service to the route destination clusters. The Service will always be deployed to the Target cluster even if the HTTPRoute is not. This option may be used to facilitate successful DNS lookup in the route destination clusters. Can only be set to true if destinations are specified.
serialPipeline.stages[].strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.routeUpdateWaitTime
Optional
string
Optional. The time to wait for route updates to propagate. The maximum configurable time is 3 hours, in seconds format. If unspecified, there is no wait time.
serialPipeline.stages[].strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.service
Optional
string
Required. Name of the Kubernetes Service.
serialPipeline.stages[].strategy.canary.runtimeConfig.kubernetes.gatewayServiceMesh.stableCutbackDuration
Optional
string
Optional. The amount of time to migrate traffic back from the canary Service to the original Service during the stable phase deployment. If specified, must be between 15s and 3600s. If unspecified, there is no cutback time.
serialPipeline.stages[].strategy.canary.runtimeConfig.kubernetes.serviceNetworking
Optional
object
Optional. Kubernetes Service networking configuration.
serialPipeline.stages[].strategy.canary.runtimeConfig.kubernetes.serviceNetworking.deployment
Optional
string
Required. Name of the Kubernetes Deployment whose traffic is managed by the specified Service.
serialPipeline.stages[].strategy.canary.runtimeConfig.kubernetes.serviceNetworking.disablePodOverprovisioning
Optional
boolean
Optional. Whether to disable Pod overprovisioning. If Pod overprovisioning is disabled then Cloud Deploy will limit the number of total Pods used for the deployment strategy to the number of Pods the Deployment has on the cluster.
serialPipeline.stages[].strategy.canary.runtimeConfig.kubernetes.serviceNetworking.podSelectorLabel
Optional
string
Optional. The label to use when selecting Pods for the Deployment resource. This label must already be present in the Deployment.
serialPipeline.stages[].strategy.canary.runtimeConfig.kubernetes.serviceNetworking.service
Optional
string
Required. Name of the Kubernetes Service.
serialPipeline.stages[].strategy.standard
Optional
object
Optional. Standard deployment strategy executes a single deploy and allows verifying the deployment.
serialPipeline.stages[].strategy.standard.postdeploy
Optional
object
Optional. Configuration for the postdeploy job. If this is not configured, the postdeploy job will not be present.
serialPipeline.stages[].strategy.standard.postdeploy.actions
Optional
list (string)
Optional. A sequence of Skaffold custom actions to invoke during execution of the postdeploy job.
serialPipeline.stages[].strategy.standard.postdeploy.actions[]
Optional
string
serialPipeline.stages[].strategy.standard.predeploy
Optional
object
Optional. Configuration for the predeploy job. If this is not configured, the predeploy job will not be present.
serialPipeline.stages[].strategy.standard.predeploy.actions
Optional
list (string)
Optional. A sequence of Skaffold custom actions to invoke during execution of the predeploy job.
serialPipeline.stages[].strategy.standard.predeploy.actions[]
Optional
string
serialPipeline.stages[].strategy.standard.verify
Optional
boolean
Optional. Whether to verify a deployment via `skaffold verify`.
serialPipeline.stages[].targetID
Optional
string
Optional. The target_id to which this stage points. This field refers exclusively to the last segment of a target name. For example, this field would just be `my-target` (rather than `projects/project/locations/location/targets/my-target`). The location of the `Target` is inferred to be the same as the location of the `DeliveryPipeline` that contains this `Stage`.
suspended
Optional
boolean
When suspended, no new releases or rollouts can be created, but in-progress ones will complete.
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
condition :
pipelineReadyCondition :
status : boolean
updateTime : string
targetsPresentCondition :
missingTargets :
- string
status : boolean
updateTime : string
targetsTypeCondition :
errorDetails : string
status : boolean
createTime : string
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
externalRef
string
A unique specifier for the DeployDeliveryPipeline resource in Google Cloud.
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
observedState
object
ObservedState is the state of the resource as most recently observed in Google Cloud.
observedState.condition
object
Output only. Information around the state of the Delivery Pipeline.
observedState.condition.pipelineReadyCondition
object
Details around the Pipeline's overall status.
observedState.condition.pipelineReadyCondition.status
boolean
True if the Pipeline is in a valid state. Otherwise at least one condition in `PipelineCondition` is in an invalid state. Iterate over those conditions and see which condition(s) has status = false to find out what is wrong with the Pipeline.
observedState.condition.pipelineReadyCondition.updateTime
string
Last time the condition was updated.
observedState.condition.targetsPresentCondition
object
Details around targets enumerated in the pipeline.
observedState.condition.targetsPresentCondition.missingTargets
list (string)
The list of Target names that do not exist. For example, `projects/{project_id}/locations/{location_name}/targets/{target_name}`.
observedState.condition.targetsPresentCondition.missingTargets[]
string
observedState.condition.targetsPresentCondition.status
boolean
True if there aren't any missing Targets.
observedState.condition.targetsPresentCondition.updateTime
string
Last time the condition was updated.
observedState.condition.targetsTypeCondition
object
Details on the whether the targets enumerated in the pipeline are of the same type.
observedState.condition.targetsTypeCondition.errorDetails
string
Human readable error message.
observedState.condition.targetsTypeCondition.status
boolean
True if the targets are all a comparable type. For example this is true if all targets are GKE clusters. This is false if some targets are Cloud Run targets and others are GKE clusters.
observedState.createTime
string
Output only. Time at which the pipeline was created.
observedState.uid
string
Output only. Unique identifier of the `DeliveryPipeline`.
observedState.updateTime
string
Output only. Most recent time at which the pipeline was updated.
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
