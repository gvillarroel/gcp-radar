---
title: "Cloud Dataproc API \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/dataproc/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/reference/rest
  title: "Cloud Dataproc API \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

"Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
Home
Documentation
Data analytics
Managed Service for Apache Spark
Reference
Send feedback
Cloud Dataproc API
Stay organized with collections
Save and categorize content based on your preferences.
Manages Hadoop-based clusters and jobs on Google Cloud Platform.
REST Resource: v1.projects.locations.autoscalingPolicies
REST Resource: v1.projects.locations.operations
REST Resource: v1.projects.locations.workflowTemplates
REST Resource: v1.projects.regions.autoscalingPolicies
REST Resource: v1.projects.regions.clusters
REST Resource: v1.projects.regions.clusters.nodeGroups
REST Resource: v1.projects.regions.jobs
REST Resource: v1.projects.regions.operations
REST Resource: v1.projects.regions.workflowTemplates
Service: dataproc.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://dataproc.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://dataproc.googleapis.com
REST Resource: v1.projects.locations.autoscalingPolicies
Methods
create
POST /v1/{parent=projects/*/locations/*}/autoscalingPolicies
Creates new autoscaling policy.
delete
DELETE /v1/{name=projects/*/locations/*/autoscalingPolicies/*}
Deletes an autoscaling policy.
get
GET /v1/{name=projects/*/locations/*/autoscalingPolicies/*}
Retrieves autoscaling policy.
getIamPolicy
POST /v1/{resource=projects/*/locations/*/autoscalingPolicies/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*}/autoscalingPolicies
Lists autoscaling policies in the project.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/autoscalingPolicies/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/autoscalingPolicies/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
update
PUT /v1/{policy.name=projects/*/locations/*/autoscalingPolicies/*}
Updates (replaces) autoscaling policy.
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
GET /v1/{name=projects/*/locations/*/operations}
Lists operations that match the specified filter in the request.
REST Resource: v1.projects.locations.workflowTemplates
Methods
create
POST /v1/{parent=projects/*/locations/*}/workflowTemplates
Creates new workflow template.
delete
DELETE /v1/{name=projects/*/locations/*/workflowTemplates/*}
Deletes a workflow template.
get
GET /v1/{name=projects/*/locations/*/workflowTemplates/*}
Retrieves the latest workflow template.
getIamPolicy
POST /v1/{resource=projects/*/locations/*/workflowTemplates/*}:getIamPolicy
Gets the access control policy for a resource.
instantiate
POST /v1/{name=projects/*/locations/*/workflowTemplates/*}:instantiate
Instantiates a template and begins execution.
instantiateInline
POST /v1/{parent=projects/*/locations/*}/workflowTemplates:instantiateInline
Instantiates a template and begins execution.
list
GET /v1/{parent=projects/*/locations/*}/workflowTemplates
Lists workflows that match the specified filter in the request.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/workflowTemplates/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/workflowTemplates/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
update
PUT /v1/{template.name=projects/*/locations/*/workflowTemplates/*}
Updates (replaces) workflow template.
REST Resource: v1.projects.regions.autoscalingPolicies
Methods
create
POST /v1/{parent=projects/*/regions/*}/autoscalingPolicies
Creates new autoscaling policy.
delete
DELETE /v1/{name=projects/*/regions/*/autoscalingPolicies/*}
Deletes an autoscaling policy.
get
GET /v1/{name=projects/*/regions/*/autoscalingPolicies/*}
Retrieves autoscaling policy.
getIamPolicy
POST /v1/{resource=projects/*/regions/*/autoscalingPolicies/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/regions/*}/autoscalingPolicies
Lists autoscaling policies in the project.
setIamPolicy
POST /v1/{resource=projects/*/regions/*/autoscalingPolicies/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/regions/*/autoscalingPolicies/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
update
PUT /v1/{policy.name=projects/*/regions/*/autoscalingPolicies/*}
Updates (replaces) autoscaling policy.
REST Resource: v1.projects.regions.clusters
Methods
create
POST /v1/projects/{projectId}/regions/{region}/clusters
Creates a cluster in a project.
delete
DELETE /v1/projects/{projectId}/regions/{region}/clusters/{clusterName}
Deletes a cluster in a project.
diagnose
POST /v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:diagnose
Gets cluster diagnostic information.
get
GET /v1/projects/{projectId}/regions/{region}/clusters/{clusterName}
Gets the resource representation for a cluster in a project.
getIamPolicy
POST /v1/{resource=projects/*/regions/*/clusters/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/projects/{projectId}/regions/{region}/clusters
Lists all regions/{region}/clusters in a project alphabetically.
patch
PATCH /v1/projects/{projectId}/regions/{region}/clusters/{clusterName}
Updates a cluster in a project.
setIamPolicy
POST /v1/{resource=projects/*/regions/*/clusters/*}:setIamPolicy
Sets the access control policy on the specified resource.
start
POST /v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:start
Starts a cluster in a project.
stop
POST /v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:stop
Stops a cluster in a project.
testIamPermissions
POST /v1/{resource=projects/*/regions/*/clusters/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.regions.clusters.nodeGroups
Methods
get
GET /v1/{name=projects/*/regions/*/clusters/*/nodeGroups/*}
Gets the resource representation for a node group in a cluster.
resize
POST /v1/{name=projects/*/regions/*/clusters/*/nodeGroups/*}:resize
Resizes a node group in a cluster.
REST Resource: v1.projects.regions.jobs
Methods
cancel
POST /v1/projects/{projectId}/regions/{region}/jobs/{jobId}:cancel
Starts a job cancellation request.
delete
DELETE /v1/projects/{projectId}/regions/{region}/jobs/{jobId}
Deletes the job from the project.
get
GET /v1/projects/{projectId}/regions/{region}/jobs/{jobId}
Gets the resource representation for a job in a project.
getIamPolicy
POST /v1/{resource=projects/*/regions/*/jobs/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/projects/{projectId}/regions/{region}/jobs
Lists regions/{region}/jobs in a project.
patch
PATCH /v1/projects/{projectId}/regions/{region}/jobs/{jobId}
Updates a job in a project.
setIamPolicy
POST /v1/{resource=projects/*/regions/*/jobs/*}:setIamPolicy
Sets the access control policy on the specified resource.
submit
POST /v1/projects/{projectId}/regions/{region}/jobs:submit
Submits a job to a cluster.
submitAsOperation
POST /v1/projects/{projectId}/regions/{region}/jobs:submitAsOperation
Submits job to a cluster.
testIamPermissions
POST /v1/{resource=projects/*/regions/*/jobs/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.regions.operations
Methods
cancel
POST /v1/{name=projects/*/regions/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1/{name=projects/*/regions/*/operations/*}
Deletes a long-running operation.
get
GET /v1/{name=projects/*/regions/*/operations/*}
Gets the latest state of a long-running operation.
getIamPolicy
POST /v1/{resource=projects/*/regions/*/operations/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{name=projects/*/regions/*/operations}
Lists operations that match the specified filter in the request.
setIamPolicy
POST /v1/{resource=projects/*/regions/*/operations/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/regions/*/operations/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.regions.workflowTemplates
Methods
create
POST /v1/{parent=projects/*/regions/*}/workflowTemplates
Creates new workflow template.
delete
DELETE /v1/{name=projects/*/regions/*/workflowTemplates/*}
Deletes a workflow template.
get
GET /v1/{name=projects/*/regions/*/workflowTemplates/*}
Retrieves the latest workflow template.
getIamPolicy
POST /v1/{resource=projects/*/regions/*/workflowTemplates/*}:getIamPolicy
Gets the access control policy for a resource.
instantiate
POST /v1/{name=projects/*/regions/*/workflowTemplates/*}:instantiate
Instantiates a template and begins execution.
instantiateInline
POST /v1/{parent=projects/*/regions/*}/workflowTemplates:instantiateInline
Instantiates a template and begins execution.
list
GET /v1/{parent=projects/*/regions/*}/workflowTemplates
Lists workflows that match the specified filter in the request.
setIamPolicy
POST /v1/{resource=projects/*/regions/*/workflowTemplates/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/regions/*/workflowTemplates/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
update
PUT /v1/{template.name=projects/*/regions/*/workflowTemplates/*}
Updates (replaces) workflow template.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-20 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-20 UTC."],[],[]]
