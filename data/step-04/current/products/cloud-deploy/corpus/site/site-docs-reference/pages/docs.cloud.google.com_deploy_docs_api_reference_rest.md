---
title: "Cloud Deploy API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/deploy/docs/api/reference/rest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/deploy/docs/api
source_metadata:
  url: https://docs.cloud.google.com/deploy/docs/api/reference/rest
  title: "Cloud Deploy API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Deploy
Reference
Send feedback
Cloud Deploy API
Stay organized with collections
Save and categorize content based on your preferences.
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.customTargetTypes
REST Resource: v1.projects.locations.deliveryPipelines
REST Resource: v1.projects.locations.deliveryPipelines.automationRuns
REST Resource: v1.projects.locations.deliveryPipelines.automations
REST Resource: v1.projects.locations.deliveryPipelines.releases
REST Resource: v1.projects.locations.deliveryPipelines.releases.rollouts
REST Resource:
v1.projects.locations.deliveryPipelines.releases.rollouts.jobRuns
REST Resource: v1.projects.locations.deployPolicies
REST Resource: v1.projects.locations.operations
REST Resource: v1.projects.locations.targets
Service: clouddeploy.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://clouddeploy.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://clouddeploy.googleapis.com
REST Resource: v1.projects.locations
Methods
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
getConfig
GET /v1/{name=projects/*/locations/*/config}
Gets the configuration for a location.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.customTargetTypes
Methods
create
POST /v1/{parent=projects/*/locations/*}/customTargetTypes
Creates a new CustomTargetType in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/customTargetTypes/*}
Deletes a single CustomTargetType.
get
GET /v1/{name=projects/*/locations/*/customTargetTypes/*}
Gets details of a single CustomTargetType.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/customTargetTypes/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*}/customTargetTypes
Lists CustomTargetTypes in a given project and location.
patch
PATCH /v1/{customTargetType.name=projects/*/locations/*/customTargetTypes/*}
Updates a single CustomTargetType.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/customTargetTypes/*}:setIamPolicy
Sets the access control policy on the specified resource.
REST Resource: v1.projects.locations.deliveryPipelines
Methods
create
POST /v1/{parent=projects/*/locations/*}/deliveryPipelines
Creates a new DeliveryPipeline in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/deliveryPipelines/*}
Deletes a single DeliveryPipeline.
get
GET /v1/{name=projects/*/locations/*/deliveryPipelines/*}
Gets details of a single DeliveryPipeline.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/deliveryPipelines/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*}/deliveryPipelines
Lists DeliveryPipelines in a given project and location.
patch
PATCH /v1/{deliveryPipeline.name=projects/*/locations/*/deliveryPipelines/*}
Updates the parameters of a single DeliveryPipeline.
rollbackTarget
POST /v1/{name=projects/*/locations/*/deliveryPipelines/*}:rollbackTarget
Creates a Rollout to roll back the specified target.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/deliveryPipelines/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/deliveryPipelines/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.deliveryPipelines.automationRuns
Methods
cancel
POST /v1/{name=projects/*/locations/*/deliveryPipelines/*/automationRuns/*}:cancel
Cancels an AutomationRun.
get
GET /v1/{name=projects/*/locations/*/deliveryPipelines/*/automationRuns/*}
Gets details of a single AutomationRun.
list
GET /v1/{parent=projects/*/locations/*/deliveryPipelines/*}/automationRuns
Lists AutomationRuns in a given project and location.
REST Resource: v1.projects.locations.deliveryPipelines.automations
Methods
create
POST /v1/{parent=projects/*/locations/*/deliveryPipelines/*}/automations
Creates a new Automation in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/deliveryPipelines/*/automations/*}
Deletes a single Automation resource.
get
GET /v1/{name=projects/*/locations/*/deliveryPipelines/*/automations/*}
Gets details of a single Automation.
list
GET /v1/{parent=projects/*/locations/*/deliveryPipelines/*}/automations
Lists Automations in a given project and location.
patch
PATCH /v1/{automation.name=projects/*/locations/*/deliveryPipelines/*/automations/*}
Updates the parameters of a single Automation resource.
REST Resource: v1.projects.locations.deliveryPipelines.releases
Methods
abandon
POST /v1/{name=projects/*/locations/*/deliveryPipelines/*/releases/*}:abandon
Abandons a Release in the Delivery Pipeline.
create
POST /v1/{parent=projects/*/locations/*/deliveryPipelines/*}/releases
Creates a new Release in a given project and location.
get
GET /v1/{name=projects/*/locations/*/deliveryPipelines/*/releases/*}
Gets details of a single Release.
list
GET /v1/{parent=projects/*/locations/*/deliveryPipelines/*}/releases
Lists Releases in a given project and location.
REST Resource: v1.projects.locations.deliveryPipelines.releases.rollouts
Methods
advance
POST /v1/{name=projects/*/locations/*/deliveryPipelines/*/releases/*/rollouts/*}:advance
Advances a Rollout in a given project and location.
approve
POST /v1/{name=projects/*/locations/*/deliveryPipelines/*/releases/*/rollouts/*}:approve
Approves a Rollout.
cancel
POST /v1/{name=projects/*/locations/*/deliveryPipelines/*/releases/*/rollouts/*}:cancel
Cancels a Rollout in a given project and location.
create
POST /v1/{parent=projects/*/locations/*/deliveryPipelines/*/releases/*}/rollouts
Creates a new Rollout in a given project and location.
get
GET /v1/{name=projects/*/locations/*/deliveryPipelines/*/releases/*/rollouts/*}
Gets details of a single Rollout.
ignoreJob
POST /v1/{rollout=projects/*/locations/*/deliveryPipelines/*/releases/*/rollouts/*}:ignoreJob
Ignores the specified Job in a Rollout.
list
GET /v1/{parent=projects/*/locations/*/deliveryPipelines/*/releases/*}/rollouts
Lists Rollouts in a given project and location.
retryJob
POST /v1/{rollout=projects/*/locations/*/deliveryPipelines/*/releases/*/rollouts/*}:retryJob
Retries the specified Job in a Rollout.
REST Resource: v1.projects.locations.deliveryPipelines.releases.rollouts.jobRuns
Methods
get
GET /v1/{name=projects/*/locations/*/deliveryPipelines/*/releases/*/rollouts/*/jobRuns/*}
Gets details of a single JobRun.
list
GET /v1/{parent=projects/*/locations/*/deliveryPipelines/*/releases/*/rollouts/*}/jobRuns
Lists JobRuns in a given project and location.
terminate
POST /v1/{name=projects/*/locations/*/deliveryPipelines/*/releases/*/rollouts/*/jobRuns/*}:terminate
Terminates a Job Run in a given project and location.
REST Resource: v1.projects.locations.deployPolicies
Methods
create
POST /v1/{parent=projects/*/locations/*}/deployPolicies
Creates a new DeployPolicy in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/deployPolicies/*}
Deletes a single DeployPolicy.
get
GET /v1/{name=projects/*/locations/*/deployPolicies/*}
Gets details of a single DeployPolicy.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/deployPolicies/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*}/deployPolicies
Lists DeployPolicies in a given project and location.
patch
PATCH /v1/{deployPolicy.name=projects/*/locations/*/deployPolicies/*}
Updates the parameters of a single DeployPolicy.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/deployPolicies/*}:setIamPolicy
Sets the access control policy on the specified resource.
REST Resource: v1.projects.locations.operations
Methods
cancel
POST /v1/{name=projects/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1/{name=projects/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1.projects.locations.targets
Methods
create
POST /v1/{parent=projects/*/locations/*}/targets
Creates a new Target in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/targets/*}
Deletes a single Target.
get
GET /v1/{name=projects/*/locations/*/targets/*}
Gets details of a single Target.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/targets/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*}/targets
Lists Targets in a given project and location.
patch
PATCH /v1/{target.name=projects/*/locations/*/targets/*}
Updates the parameters of a single Target.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/targets/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/targets/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-13 UTC."],[],[]]
