---
title: "Package types (2.10.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.types
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/google.cloud.deploy_v1.types
  title: "Package types (2.10.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Package types (2.10.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.10.0 (latest)
2.9.0
2.8.0
2.7.1
2.6.3
2.5.0
2.4.1
2.3.0
2.2.0
2.1.0
2.0.0
1.19.1
1.18.1
1.17.3
1.16.0
1.15.0
1.14.0
1.13.0
1.12.0
1.11.1
1.10.1
1.9.0
1.8.0
1.7.0
1.6.1
1.5.0
1.4.1
1.3.1
1.2.1
1.1.1
1.0.0
0.3.2
0.2.0
0.1.1
API documentation for deploy_v1.types package.
Classes
AbandonReleaseRequest
The request object used by AbandonRelease .
AbandonReleaseResponse
The response object for AbandonRelease .
AdvanceChildRolloutJob
An advanceChildRollout Job.
AdvanceChildRolloutJobRun
AdvanceChildRolloutJobRun contains information specific to a
advanceChildRollout JobRun .
AdvanceRolloutOperation
Contains the information of an automated advance-rollout
operation.
AdvanceRolloutRequest
The request object used by AdvanceRollout .
AdvanceRolloutResponse
The response object from AdvanceRollout .
AdvanceRolloutRule
The AdvanceRollout automation rule will automatically advance a
successful Rollout to the next phase.
AnthosCluster
Information specifying an Anthos Cluster.
ApproveRolloutRequest
The request object used by ApproveRollout .
ApproveRolloutResponse
The response object from ApproveRollout .
AssociatedEntities
Information about entities associated with a Target .
Automation
An Automation resource in the Cloud Deploy API.
An Automation enables the automation of manually driven actions
for a Delivery Pipeline, which includes Release promotion among
Targets, Rollout repair and Rollout deployment strategy advancement.
The intention of Automation is to reduce manual intervention in the
continuous delivery process.
AutomationEvent
Payload proto for "clouddeploy.googleapis.com/automation"
Platform Log event that describes the Automation related events.
AutomationResourceSelector
AutomationResourceSelector contains the information to select
the resources to which an Automation is going to be applied.
AutomationRolloutMetadata
AutomationRolloutMetadata contains Automation-related actions
that were performed on a rollout.
AutomationRule
AutomationRule defines the automation activities.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
AutomationRuleCondition
AutomationRuleCondition contains conditions relevant to an
Automation rule.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
AutomationRun
An AutomationRun resource in the Cloud Deploy API.
An AutomationRun represents an execution instance of an
automation rule.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
AutomationRunEvent
Payload proto for "clouddeploy.googleapis.com/automation_run"
Platform Log event that describes the AutomationRun related events.
BackoffMode
The pattern of how wait time is increased.
BuildArtifact
Description of an a image to use during Skaffold rendering.
Canary
Canary represents the canary deployment strategy.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
CanaryDeployment
CanaryDeployment represents the canary deployment
configuration
CancelAutomationRunRequest
The request object used by CancelAutomationRun .
CancelAutomationRunResponse
The response object from CancelAutomationRun .
CancelRolloutRequest
The request object used by CancelRollout .
CancelRolloutResponse
The response object from CancelRollout .
ChildRolloutJobs
ChildRollouts job composition
CloudRunConfig
CloudRunConfig contains the Cloud Run runtime configuration.
CloudRunLocation
Information specifying where to deploy a Cloud Run Service.
CloudRunMetadata
CloudRunMetadata contains information from a Cloud Run
deployment.
CloudRunRenderMetadata
CloudRunRenderMetadata contains Cloud Run information associated
with a Release render.
Config
Service-wide configuration.
CreateAutomationRequest
The request object for CreateAutomation .
CreateChildRolloutJob
A createChildRollout Job.
CreateChildRolloutJobRun
CreateChildRolloutJobRun contains information specific to a
createChildRollout JobRun .
CreateCustomTargetTypeRequest
The request object for CreateCustomTargetType .
CreateDeliveryPipelineRequest
The request object for CreateDeliveryPipeline .
CreateDeployPolicyRequest
The request object for CreateDeployPolicy .
CreateReleaseRequest
The request object for CreateRelease ,
CreateRolloutRequest
CreateRolloutRequest is the request object used by
CreateRollout .
CreateTargetRequest
The request object for CreateTarget .
CustomCanaryDeployment
CustomCanaryDeployment represents the custom canary
deployment configuration.
CustomMetadata
CustomMetadata contains information from a user-defined
operation.
CustomTarget
Information specifying a Custom Target.
CustomTargetDeployMetadata
CustomTargetDeployMetadata contains information from a Custom
Target deploy operation.
CustomTargetSkaffoldActions
CustomTargetSkaffoldActions represents the CustomTargetType
configuration using Skaffold custom actions.
CustomTargetType
A CustomTargetType resource in the Cloud Deploy API.
A CustomTargetType defines a type of custom target that can be
referenced in a Target in order to facilitate deploying to other
systems besides the supported runtimes.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
CustomTargetTypeNotificationEvent
Payload proto for
"clouddeploy.googleapis.com/customtargettype_notification" Platform
Log event that describes the failure to send a custom target type
status change Pub/Sub notification.
DefaultPool
Execution using the default Cloud Build pool.
DeleteAutomationRequest
The request object for DeleteAutomation .
DeleteCustomTargetTypeRequest
The request object for DeleteCustomTargetType .
DeleteDeliveryPipelineRequest
The request object for DeleteDeliveryPipeline .
DeleteDeployPolicyRequest
The request object for DeleteDeployPolicy .
DeleteTargetRequest
The request object for DeleteTarget .
DeliveryPipeline
A DeliveryPipeline resource in the Cloud Deploy API.
A DeliveryPipeline defines a pipeline through which a Skaffold
configuration can progress.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
DeliveryPipelineAttribute
Contains criteria for selecting DeliveryPipelines.
DeliveryPipelineNotificationEvent
Payload proto for
"clouddeploy.googleapis.com/deliverypipeline_notification" Platform
Log event that describes the failure to send delivery pipeline
status change Pub/Sub notification.
DeployArtifact
The artifacts produced by a deploy operation.
DeployJob
A deploy Job.
DeployJobRun
DeployJobRun contains information specific to a deploy JobRun .
DeployJobRunMetadata
DeployJobRunMetadata surfaces information associated with a
DeployJobRun to the user.
DeployParameters
DeployParameters contains deploy parameters information.
DeployPolicy
A DeployPolicy resource in the Cloud Deploy API.
A DeployPolicy inhibits manual or automation-driven actions
within a Delivery Pipeline or Target.
DeployPolicyEvaluationEvent
Payload proto for
"clouddeploy.googleapis.com/deploypolicy_evaluation" Platform Log
event that describes the deploy policy evaluation event.
DeployPolicyNotificationEvent
Payload proto for
"clouddeploy.googleapis.com/deploypolicy_notification". Platform Log
event that describes the failure to send a pub/sub notification when
there is a DeployPolicy status change.
DeployPolicyResourceSelector
Contains information on the resources to select for a deploy
policy. Attributes provided must all match the resource in order
for policy restrictions to apply. For example, if delivery
pipelines attributes given are an id "prod" and labels "foo:
bar", a delivery pipeline resource must match both that id and
have that label in order to be subject to the policy.
DeploymentJobs
Deployment job composition.
ExecutionConfig
Configuration of the environment to use when calling
Skaffold.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
GetAutomationRequest
The request object for GetAutomation
GetAutomationRunRequest
The request object for GetAutomationRun
GetConfigRequest
Request to get a configuration.
GetCustomTargetTypeRequest
The request object for GetCustomTargetType .
GetDeliveryPipelineRequest
The request object for GetDeliveryPipeline
GetDeployPolicyRequest
The request object for GetDeployPolicy
GetJobRunRequest
GetJobRunRequest is the request object used by GetJobRun .
GetReleaseRequest
The request object for GetRelease .
GetRolloutRequest
GetRolloutRequest is the request object used by GetRollout .
GetTargetRequest
The request object for GetTarget .
GkeCluster
Information specifying a GKE Cluster.
IgnoreJobRequest
The request object used by IgnoreJob .
IgnoreJobResponse
The response object from IgnoreJob .
Job
Job represents an operation for a Rollout .
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
JobRun
A JobRun resource in the Cloud Deploy API.
A JobRun contains information of a single Rollout job
evaluation.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
JobRunNotificationEvent
Payload proto for "clouddeploy.googleapis.com/jobrun_notification"
Platform Log event that describes the failure to send JobRun
resource update Pub/Sub notification.
KubernetesConfig
KubernetesConfig contains the Kubernetes runtime
configuration.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
ListAutomationRunsRequest
The request object for ListAutomationRuns .
ListAutomationRunsResponse
The response object from ListAutomationRuns .
ListAutomationsRequest
The request object for ListAutomations .
ListAutomationsResponse
The response object from ListAutomations .
ListCustomTargetTypesRequest
The request object for ListCustomTargetTypes .
ListCustomTargetTypesResponse
The response object from ListCustomTargetTypes.
ListDeliveryPipelinesRequest
The request object for ListDeliveryPipelines .
ListDeliveryPipelinesResponse
The response object from ListDeliveryPipelines .
ListDeployPoliciesRequest
The request object for ListDeployPolicies .
ListDeployPoliciesResponse
The response object from ListDeployPolicies .
ListJobRunsRequest
ListJobRunsRequest is the request object used by ListJobRuns .
ListJobRunsResponse
ListJobRunsResponse is the response object returned by
ListJobRuns .
ListReleasesRequest
The request object for ListReleases .
ListReleasesResponse
The response object from ListReleases .
ListRolloutsRequest
ListRolloutsRequest is the request object used by ListRollouts .
ListRolloutsResponse
ListRolloutsResponse is the response object returned by
ListRollouts .
ListTargetsRequest
The request object for ListTargets .
ListTargetsResponse
The response object from ListTargets .
Metadata
Metadata includes information associated with a Rollout .
MultiTarget
Information specifying a multiTarget.
OneTimeWindow
One-time window within which actions are restricted. For
example, blocking actions over New Year's Eve from December 31st
at 5pm to January 1st at 9am.
OperationMetadata
Represents the metadata of the long-running operation.
Phase
Phase represents a collection of jobs that are logically grouped
together for a Rollout .
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
PipelineCondition
PipelineCondition contains all conditions relevant to a
Delivery Pipeline.
PipelineReadyCondition
PipelineReadyCondition contains information around the status
of the Pipeline.
PolicyRule
Deploy Policy rule.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
PolicyViolation
Returned from an action if one or more policies were
violated, and therefore the action was prevented. Contains
information about what policies were violated and why.
PolicyViolationDetails
Policy violation details.
Postdeploy
Postdeploy contains the postdeploy job configuration
information.
PostdeployJob
A postdeploy Job.
PostdeployJobRun
PostdeployJobRun contains information specific to a postdeploy
JobRun .
Predeploy
Predeploy contains the predeploy job configuration
information.
PredeployJob
A predeploy Job.
PredeployJobRun
PredeployJobRun contains information specific to a predeploy
JobRun .
PrivatePool
Execution using a private Cloud Build pool.
PromoteReleaseOperation
Contains the information of an automated promote-release
operation.
PromoteReleaseRule
The PromoteRelease rule will automatically promote a release
from the current target to a specified target.
Release
A Release resource in the Cloud Deploy API.
A Release defines a specific Skaffold configuration instance
that can be deployed.
ReleaseNotificationEvent
Payload proto for "clouddeploy.googleapis.com/release_notification"
Platform Log event that describes the failure to send release status
change Pub/Sub notification.
ReleaseRenderEvent
Payload proto for "clouddeploy.googleapis.com/release_render"
Platform Log event that describes the render status change.
RenderMetadata
RenderMetadata includes information associated with a Release
render.
RepairPhase
RepairPhase tracks the repair attempts that have been made for each
RepairPhaseConfig specified in the Automation resource.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
RepairPhaseConfig
Configuration of the repair phase.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
RepairRolloutOperation
Contains the information for an automated repair rollout
operation.
RepairRolloutRule
The RepairRolloutRule automation rule will automatically repair
a failed Rollout .
RepairState
Valid state of a repair attempt.
Retry
Retries the failed job.
RetryAttempt
RetryAttempt represents an action of retrying the failed
Cloud Deploy job.
RetryJobRequest
RetryJobRequest is the request object used by RetryJob .
RetryJobResponse
The response object from 'RetryJob'.
RetryPhase
RetryPhase contains the retry attempts and the metadata for
initiating a new attempt.
Rollback
Rolls back a Rollout .
RollbackAttempt
RollbackAttempt represents an action of rolling back a Cloud
Deploy 'Target'.
RollbackTargetConfig
Configs for the Rollback rollout.
RollbackTargetRequest
The request object for RollbackTarget .
RollbackTargetResponse
The response object from RollbackTarget .
Rollout
A Rollout resource in the Cloud Deploy API.
A Rollout contains information around a specific deployment to a
Target .
RolloutNotificationEvent
Payload proto for "clouddeploy.googleapis.com/rollout_notification"
Platform Log event that describes the failure to send rollout status
change Pub/Sub notification.
RolloutRestriction
Rollout restrictions.
RolloutUpdateEvent
Payload proto for "clouddeploy.googleapis.com/rollout_update"
Platform Log event that describes the rollout update event.
RuntimeConfig
RuntimeConfig contains the runtime specific configurations
for a deployment strategy.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
SerialPipeline
SerialPipeline defines a sequential set of stages for a
DeliveryPipeline .
SkaffoldModules
Skaffold Config modules and their remote source.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
SkaffoldSupportState
The support state of a specific Skaffold version.
SkaffoldVersion
Details of a supported Skaffold version.
Stage
Stage specifies a location to which to deploy.
Standard
Standard represents the standard deployment strategy.
Strategy
Strategy contains deployment strategy information.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Target
A Target resource in the Cloud Deploy API.
A Target defines a location to which a Skaffold configuration
can be deployed.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
TargetArtifact
The artifacts produced by a target render operation.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
TargetAttribute
Contains criteria for selecting Targets. This could be used
to select targets for a Deploy Policy or for an Automation.
TargetNotificationEvent
Payload proto for "clouddeploy.googleapis.com/target_notification"
Platform Log event that describes the failure to send target status
change Pub/Sub notification.
TargetsPresentCondition
TargetsPresentCondition contains information on any Targets
referenced in the Delivery Pipeline that do not actually exist.
TargetsTypeCondition
TargetsTypeCondition contains information on whether the
Targets defined in the Delivery Pipeline are of the same type.
TerminateJobRunRequest
The request object used by TerminateJobRun .
TerminateJobRunResponse
The response object from TerminateJobRun .
TimeWindows
Time windows within which actions are restricted. See the
documentation <https://cloud.google.com/deploy/docs/deploy-policy#dates_times> __
for more information on how to configure dates/times.
TimedPromoteReleaseCondition
TimedPromoteReleaseCondition contains conditions specific to an
Automation with a Timed Promote Release rule defined.
TimedPromoteReleaseOperation
Contains the information of an automated timed
promote-release operation.
TimedPromoteReleaseRule
The TimedPromoteReleaseRule will automatically promote a release
from the current target(s) to the specified target(s) on a
configured schedule.
Type
Type indicates the type of the log entry and can be used as a
filter.
UpdateAutomationRequest
The request object for UpdateAutomation .
UpdateCustomTargetTypeRequest
The request object for UpdateCustomTargetType .
UpdateDeliveryPipelineRequest
The request object for UpdateDeliveryPipeline .
UpdateDeployPolicyRequest
The request object for UpdateDeployPolicy .
UpdateTargetRequest
The request object for UpdateTarget .
VerifyJob
A verify Job.
VerifyJobRun
VerifyJobRun contains information specific to a verify JobRun .
WeeklyWindow
Weekly windows. For example, blocking actions every Saturday
and Sunday. Another example would be blocking actions every
weekday from 5pm to midnight.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
