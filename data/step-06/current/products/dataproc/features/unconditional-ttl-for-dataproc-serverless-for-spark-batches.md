---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.601Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Unconditional TTL for Dataproc Serverless for Spark batches"
feature_slug: "unconditional-ttl-for-dataproc-serverless-for-spark-batches"
latest_feature_date: "2023-02-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/audit-logging"
  - "https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob"
keywords:
  - "unconditional"
  - "ttl"
  - "dataproc"
  - "serverless"
  - "spark"
  - "batches"
  - "terminates"
  - "workloads"
---

# Unconditional TTL for Dataproc Serverless for Spark batches

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc Serverless for Spark batches support an unconditional TTL that terminates workloads when the TTL expires.

## Extended Definition

Dataproc Serverless for Spark batches support an unconditional TTL that terminates workloads when the TTL expires.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/audit-logging](https://docs.cloud.google.com/dataproc/docs/guides/audit-logging)
- [https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark](https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob)

## Supporting Pages

### Managed Service for Apache Spark \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/audit-logging](https://docs.cloud.google.com/dataproc/docs/guides/audit-logging)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods ADMIN READ google.cloud.dataproc.v1.AutoscalingPolicyService.GetAutoscalingPolicy google.cloud.dataproc.v1.AutoscalingPolicyService.ListAutoscalingPolicies google.cloud.dataproc.v1.BatchController.GetBatch google.cloud.dataproc.v1.BatchController.ListBatches google.cloud.dataproc.v1.ClusterController.GetCluster google.cloud.dataproc.v1.ClusterController.ListClusters google.cloud.dataproc.v1.JobController.GetJob google.cloud.dataproc.v1.JobController.ListJobs google.cloud.dataproc.v1.NodeGroupController.GetNodeGroup google.cloud.dataproc.v1.SessionController.GetSession google.cloud.dataproc.v1.SessionController.ListSessions google.cloud.dataproc.v1.SessionTemplateController.GetSessionTemplate google.cloud.dataproc.v1.SessionTemplateController.ListSessionTemplates google.cloud.dataproc.v1.WorkflowTemplateService.GetWorkflowTemplate google.cloud.dataproc.v1.WorkflowTemplateService.ListWorkflowTemplates google.cloud.dataproc.v1beta2.AutoscalingPolicyService.GetAutoscalingPolicy google.cloud.dataproc.v1beta2.ClusterController.GetCluster google.cloud.dataproc.v1beta2.ClusterController.ListClusters google.cloud.dataproc.v1beta2.JobController.GetJob google.cloud.dataproc.v1beta2.JobController.ListJobs google.cloud.dataproc.v1beta2.WorkflowTemplateService.GetWorkflowTemplate google.iam.v1.IAMPolicy.GetIamPolicy google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations ADMIN WRITE google.cloud.dataproc.v1.AnalysisService.AnalyzeBatch (LRO) google.cloud.dataproc.v1.AutoscalingPolicyService.CreateAutoscalingPolicy google.cloud.dataproc.v1.AutoscalingPolicyService.DeleteAutoscalingPolicy google.cloud.dataproc.v1.AutoscalingPolicyService.UpdateAutoscalingPolicy google.cloud.dataproc.v1.BatchController.CreateBatch (LRO) google.cloud.dataproc.v1.BatchController.DeleteBatch google.cloud.dataproc.v1.ClusterController.CreateCluster (LRO) google.cloud.dataproc.v1.ClusterController.DeleteCluster (LRO) google.cloud.dataproc.v1.ClusterController.DiagnoseCluster (LRO) google.cloud.dataproc.v1.ClusterController.InjectCredentials (LRO) google.cloud.dataproc.v1.ClusterController.RepairCluster (LRO) google.cloud.dataproc.v1.ClusterController.StartCluster (LRO) google.cloud.dataproc.v1.ClusterController.StopCluster (LRO) google.cloud.dataproc.v1.ClusterController.UpdateCluster (LRO) google.cloud.dataproc.v1.JobController.CancelJob google.cloud.dataproc.v1.JobController.DeleteJob google.cloud.dataproc.v1.JobController.SubmitJob (LRO) google.cloud.dataproc.v1.JobController.SubmitJobAsOperation (LRO) google.cloud.dataproc.v1.JobController.UpdateJob google.cloud.dataproc.v1.NodeGroupController.CreateNodeGroup (LRO) google.cloud.dataproc.v1.NodeGroupController.RepairNodeGroup (LRO) google.cloud.dataproc.v1.NodeGroupController.ResizeNodeGroup (LRO) google.cloud.dataproc.v1.SessionController.CreateSession (LRO) google.cloud.dataproc.v1.SessionController.DeleteSession (LRO) google.cloud.dataproc.v1.SessionController.TerminateSession (LRO) google.cloud.dataproc.v1.SessionTemplateController.CreateSessionTemplate google.cloud.dataproc.v1.SessionTemplateController.DeleteSessionTemplate google.cloud.dataproc.v1.SessionTemplateController.UpdateSessionTemplate google.cloud.dataproc.v1.WorkflowTemplateService.CreateWorkflowTemplate google.cloud.dataproc.v1.WorkflowTemplateService.DeleteWorkflowTemplate google.cloud.dataproc.v1.WorkflowTemplateService.InstantiateInlineWorkflowTemplate (LRO) google.cloud.dataproc.v1.WorkflowTemplateService.InstantiateWorkflowTemplate (LRO) google.cloud.dataproc.v1.WorkflowTemplateService.UpdateWorkflowTemplate google.cloud.dataproc.v1beta2.AutoscalingPolicyService.CreateAutoscalingPolicy google.cloud.dataproc.v1beta2.AutoscalingPolicyService.DeleteAutoscalingPolicy google.cloud.dataproc.v1beta2.AutoscalingPolicyService.UpdateAutoscalingPolicy google.cloud.dataproc.v1beta2.ClusterController.CreateCluster (LRO) google.cloud.dataproc.v1beta2.ClusterController.DeleteCluster (LRO) google.cloud.dataproc.v1beta2.ClusterController.DiagnoseCluster (LRO) google.cloud.dataproc.v1beta2.ClusterController.StartCluster (LRO) google.cloud.dataproc.v1beta2.ClusterController.StopCluster (LRO) google.cloud.dataproc.v1beta2.ClusterController.UpdateCluster (LRO) google.cloud.dataproc.v1beta2.JobController.CancelJob google.cloud.dataproc.v1beta2.JobController.SubmitJob google.cloud.dataproc.v1beta2.JobController.SubmitJobAsOperation (LRO) google.cloud.dataproc.v1beta2.WorkflowTemplateService.CreateWorkflowTemplate google.cloud.dataproc.v1beta2.WorkflowTemplateService.DeleteWorkflowTemplate google.cloud.dataproc.v1beta2.WorkflowTemplateService.InstantiateInlineWorkflowTemplate (LRO) google.cloud.dataproc.v1beta2.WorkflowTemplateService.InstantiateWorkflowTemplate (LRO) google.cloud.dataproc.v1beta2.WorkflowTemplateService.UpdateWorkflowTemplate google.iam.v1.IAMPolicy.SetIamPolicy google.longrunning.Operations.CancelOperation google.longrunning.Operations.DeleteOperation DATA READ google.cloud.dataproc.v1.BatchController.AccessSparkApplication google.cloud.dataproc.v1.BatchController.AccessSparkApplicationEnvironmentInfo google.cloud.dataproc.v1.BatchController.AccessSparkApplicationJob google.cloud.dataproc.v1.BatchController.AccessSparkApplicationSqlQuery google.cloud.dataproc.v1.BatchController.AccessSparkApplicationStageAttempt google.cloud.dataproc.v1.BatchController.SearchSparkApplicationExecutors google.cloud.dataproc.v1.BatchController.SearchSparkApplicationJobs google.cloud.dataproc.v1.BatchController.SearchSparkApplicationSqlQueries google.cloud.dataproc.v1.BatchController.SearchSparkApplicationStageAttemptTasks google.cloud.dataproc.v1.BatchController.SearchSparkApplicationStageAttempts google.cloud.dataproc.v1.BatchController.SearchSparkApplicationStages google.cloud.dataproc.v1.BatchController.SearchSparkApplications google.cloud.dataproc.v1.SessionController.AccessSessionSparkApplication google.cloud.dataproc.v1.SessionController.AccessSessionSparkApplicationEnvironmentInfo google.cloud.dataproc.v1.SessionController.AccessSessionSparkApplicationJob google.cloud.dataproc.v1.SessionController.AccessSessionSparkApplicationSqlQuery google.cloud.dataproc.v1.SessionController.AccessSessionSparkApplicationSqlSparkPlanGraph google.cloud.dataproc.v1.SessionController.AccessSessionSparkApplicationStageAttempt google.cloud.dataproc.v1.SessionController.AccessSessionSparkApplicationStageRddOperationGraph google.cloud.dataproc.v1.SessionController.SearchSessionSparkApplicationExecutorStageSummary google.cloud.dataproc.v1.SessionController.SearchSessionSparkApplicationExecutors google.cloud.dataproc.v1.SessionController.SearchSessionSparkApplicationJobs google.cloud.dataproc.v1.SessionController.SearchSessionSparkApplicationSqlQueries google.cloud.dataproc.v1.SessionController.SearchSessionSparkApplicationStageAttemptTasks google.cloud.dataproc.v1.SessionController.SearchSessionSparkApplicationStageAttempts google.cloud.dataproc.v1.SessionController.SearchSessionSparkApplicationStages google.cloud.dataproc.v1.SessionController.SearchSessionSparkApplications google.cloud.dataproc.v1.SessionController.SummarizeSessionSparkApplicationExecutors google.cloud.dataproc.v1.SessionController.SummarizeSessionSparkApplicationJobs google.cloud.dataproc.v1.SessionController.SummarizeSessionSparkApplicationStageAttemptTasks google.cloud.dataproc.v1.SessionController.SummarizeSessionSparkApplicationStages DATA WRITE google.cloud.dataproc.v1.BatchController.WriteSparkApplicationContext google.cloud.dataproc.v1.SessionController.WriteSessionSparkApplicationContext API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Managed Service for Apache Spark and Managed Service for Apache Spark. google.cloud.dataproc.v1.AnalysisService The following audit logs are associated with methods belonging to google.cloud.dataproc.v1.AnalysisService .
- Filter for this method : protoPayload.methodName="google.cloud.dataproc.v1.SessionController.SummarizeSessionSparkApplicationStages" TerminateSession Method : google.cloud.dataproc.v1.SessionController.TerminateSession Audit log type : Admin activity Permissions : dataproc.sessions.terminate - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.dataproc.v1.SessionController.TerminateSession" WriteSessionSparkApplicationContext Method : google.cloud.dataproc.v1.SessionController.WriteSessionSparkApplicationContext Audit log type : Data access Permissions : dataproc.sessions.sparkApplicationWrite - DATA WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.dataproc.v1.BatchController.AccessSparkApplicationStageAttempt" CreateBatch Method : google.cloud.dataproc.v1.BatchController.CreateBatch Audit log type : Admin activity Permissions : dataproc.batches.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.dataproc.v1.BatchController.CreateBatch" DeleteBatch Method : google.cloud.dataproc.v1.BatchController.DeleteBatch Audit log type : Admin activity Permissions : dataproc.batches.delete - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.dataproc.v1.BatchController.SearchSparkApplicationSqlQueries" SearchSparkApplicationStageAttemptTasks Method : google.cloud.dataproc.v1.BatchController.SearchSparkApplicationStageAttemptTasks Audit log type : Data access Permissions : dataproc.batches.sparkApplicationRead - DATA READ Method is a long-running or streaming operation : No.

### Managed Service for Apache Spark \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark](https://docs.cloud.google.com/dataproc/docs/guides/gemini-spark)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- User roles To get the permissions that you need to use the Managed Service for Apache Spark service, ask your administrator to grant you the following IAM roles: Dataproc Editor ( roles/dataproc.editor ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the Compute Engine default service account Service account roles To ensure that the Compute Engine default service account has the necessary permissions to submit Managed Service for Apache Spark jobs and access secrets, ask your administrator to grant the following IAM roles to the Compute Engine default service account on the project: Important: You must grant these roles to the Compute Engine default service account, not to your user account.
- Run the following command to submit the job to your Managed Service for Apache Spark cluster: gcloud dataproc jobs submit spark --cluster = CLUSTER NAME --class = com.customer.app.PostgresToMySql \ --jars = BUCKET /postgres-to-mysql-migration- VERSION .jar \ -- POSTGRES TABLE MYSQL-TABLE \ POSTGRES SECRET MYSQL-SECRET COLUMN BATCH SIZE Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Run the following command to submit the job to a Managed Service for Apache Spark cluster: gcloud dataproc jobs submit pyspark gs:// BUCKET NAME /transform hive to bigquery.py \ --cluster = CLUSTER NAME --py-files = gs:// BUCKET NAME /data transformer.py \ --properties = spark.hadoop.hive.metastore.uris = METASTORE URI \ -- --hive database = HIVE DATABASE --hive table = HIVE TABLE --bq table = BQ DATASET .

### PySparkJob \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- JSON representation A Dataproc job for running Apache PySpark applications on YARN.
- Home Documentation Data analytics Managed Service for Apache Spark Reference Send feedback PySparkJob Stay organized with collections Save and categorize content based on your preferences.
- Note: Spark applications must be deployed in cluster mode for correct environment propagation. properties map (key: string, value: string) Optional.

