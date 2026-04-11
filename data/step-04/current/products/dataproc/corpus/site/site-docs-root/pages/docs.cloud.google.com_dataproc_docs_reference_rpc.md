---
title: "Cloud Dataproc API \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/dataproc/docs/reference/rpc
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/reference/rpc
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
Service: dataproc.googleapis.com
The Service name dataproc.googleapis.com is needed to create RPC client stubs.
google.cloud.dataproc.v1.AutoscalingPolicyService
Methods
CreateAutoscalingPolicy
Creates new autoscaling policy.
DeleteAutoscalingPolicy
Deletes an autoscaling policy.
GetAutoscalingPolicy
Retrieves autoscaling policy.
ListAutoscalingPolicies
Lists autoscaling policies in the project.
UpdateAutoscalingPolicy
Updates (replaces) autoscaling policy.
google.cloud.dataproc.v1.ClusterController
Methods
CreateCluster
Creates a cluster in a project.
DeleteCluster
Deletes a cluster in a project.
DiagnoseCluster
Gets cluster diagnostic information.
GetCluster
Gets the resource representation for a cluster in a project.
ListClusters
Lists all regions/{region}/clusters in a project alphabetically.
StartCluster
Starts a cluster in a project.
StopCluster
Stops a cluster in a project.
UpdateCluster
Updates a cluster in a project.
google.cloud.dataproc.v1.JobController
Methods
CancelJob
Starts a job cancellation request.
DeleteJob
Deletes the job from the project.
GetJob
Gets the resource representation for a job in a project.
ListJobs
Lists regions/{region}/jobs in a project.
SubmitJob
Submits a job to a cluster.
SubmitJobAsOperation
Submits job to a cluster.
UpdateJob
Updates a job in a project.
google.cloud.dataproc.v1.NodeGroupController
Methods
GetNodeGroup
Gets the resource representation for a node group in a cluster.
ResizeNodeGroup
Resizes a node group in a cluster.
google.cloud.dataproc.v1.WorkflowTemplateService
Methods
CreateWorkflowTemplate
Creates new workflow template.
DeleteWorkflowTemplate
Deletes a workflow template.
GetWorkflowTemplate
Retrieves the latest workflow template.
InstantiateInlineWorkflowTemplate
Instantiates a template and begins execution.
InstantiateWorkflowTemplate
Instantiates a template and begins execution.
ListWorkflowTemplates
Lists workflows that match the specified filter in the request.
UpdateWorkflowTemplate
Updates (replaces) workflow template.
google.iam.v1.IAMPolicy
Methods
GetIamPolicy
Gets the access control policy for a resource.
SetIamPolicy
Sets the access control policy on the specified resource.
TestIamPermissions
Returns permissions that a caller has on the specified resource.
google.longrunning.Operations
Methods
CancelOperation
Starts asynchronous cancellation on a long-running operation.
DeleteOperation
Deletes a long-running operation.
GetOperation
Gets the latest state of a long-running operation.
ListOperations
Lists operations that match the specified filter in the request.
WaitOperation
Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-20 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-20 UTC."],[],[]]
