---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.040Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Auto diagnostics for Dataproc Serverless for Spark batch failures"
feature_slug: "auto-diagnostics-for-dataproc-serverless-for-spark-batch-failures"
latest_feature_date: "2022-10-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/release-notes"
  - "https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements"
  - "https://docs.cloud.google.com/dataproc/docs/guides/audit-logging"
keywords:
  - "auto"
  - "diagnostics"
  - "for"
  - "dataproc"
  - "serverless"
  - "spark"
  - "batch"
  - "failures"
---

# Auto diagnostics for Dataproc Serverless for Spark batch failures

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Dataproc Serverless for Spark supports automatic diagnostics on batch failure through the spark.dataproc.diagnostics.enabled property.

## Extended Definition

Dataproc Serverless for Spark supports automatic diagnostics on batch failure through the spark.dataproc.diagnostics.enabled property.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- [https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements](https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements)
- [https://docs.cloud.google.com/dataproc/docs/guides/audit-logging](https://docs.cloud.google.com/dataproc/docs/guides/audit-logging)

## Supporting Pages

### Managed Service for Apache Spark release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/release-notes](https://docs.cloud.google.com/dataproc/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- October 24, 2022 Feature Dataproc Serverless for Spark now supports spark.dataproc.diagnostics.enabled property that enables auto diagnostics on Batch failure.
- February 04, 2026 Announcement Upcoming Spark data lineage changes See the upcoming May, 2026 Dataproc and Serverless for Apache Spark release notes for an announcement of a change that will automatically enable Dataproc Spark data lineage and Serverless for Apache Spark data lineage when you enable the Data Lineage API (see Control lineage ingestion for a service ) without requiring additional project, cluster, batch workload, or interactive session settings.
- Change Dataproc Serverless for Spark: Private Google Access is now automatically enabled in the configured subnetwork when running batch workloads and interactive sessions.
- Change New Dataproc on Compute Engine subminor image versions : 2.0.142-debian10, 2.0.142-rocky8, 2.0.142-ubuntu18 2.1.90-debian11, 2.1.90-rocky8, 2.1.90-ubuntu20, 2.1.90-ubuntu20-arm 2.2.58-debian12, 2.2.58-rocky9, 2.2.58-ubuntu22 May 22, 2025 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.104 1.2.48 2.2.48 May 15, 2025 Change New Dataproc on Compute Engine subminor image versions : 2.0.141-debian10, 2.0.141-rocky8, 2.0.141-ubuntu18 2.1.89-debian11, 2.1.89-rocky8, 2.1.89-ubuntu20, 2.1.89-ubuntu20-arm 2.2.57-debian12, 2.2.57-rocky9, 2.2.57-ubuntu22 Announcement New Dataproc Serverless for Spark runtime versions : 1.1.103 1.2.47 2.2.47 May 12, 2025 Feature Dataproc Serverless for Spark: Spark UI for Dataproc Serverless batches and interactive sessions , which lets you monitor and debug your serverless Spark workloads, now features Event Timeline and Task Quantile views for enhanced troubleshooting.

### "Managed Service for Apache Spark Spark performance enhancements \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements](https://docs.cloud.google.com/dataproc/docs/guides/performance-enhancements)
- Source ID: `site-iam-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- PROPERTIES : To enable Spark optimization enhancements, specify: spark.dataproc.enhanced.optimizer.enabled = true To enable Spark execution enhancements, specify: spark.dataproc.enhanced.execution.enabled = true To enable Spark optimization and execution enhancements, specify: spark.dataproc.enhanced.optimizer.enabled = true,spark.dataproc.enhanced.execution.enabled = true API Specify the following properties for a SparkJob , PySparkJob , SparkSqlJob , or SparkRJob as part of a jobs.submit request: To enable Spark optimization enhancements, specify: "spark.dataproc.enhanced.optimizer.enabled=true" To enable Spark execution enhancements, specify: "spark.dataproc.enhanced.execution.enabled=true" To enable Spark optimization and execution enhancements, specify: "spark.dataproc.enhanced.execution.enabled=true,spark.dataproc.enhanced.optimizer.enabled=true" Note: You can click Equivalent Command Line or Equivalent REST at the bottom of the left panel of the Create a Managed Service for Apache Spark cluster page in the Google Cloud console to have the console construct an equivalent gcloud tool command or API REST request that you can use from the command line or in your code to create a cluster.
- PROPERTIES : To enable Spark optimization enhancements, specify: spark:spark.dataproc.enhanced.optimizer.enabled = true To enable Spark execution enhancements, specify: spark:spark.dataproc.enhanced.execution.enabled = true To enable Spark optimization and execution enhancements, specify: spark:spark.dataproc.enhanced.optimizer.enabled = true,spark:spark.dataproc.enhanced.execution.enabled = true API Specify the following SoftwareConfig.properties as part of a clusters.create request: To enable Spark optimization enhancements, specify: "spark:spark.dataproc.enhanced.optimizer.enabled" : "true" To enable Spark execution enhancements, specify: "spark:spark.dataproc.enhanced.execution.enabled" : "true" To enable Spark optimization and execution enhancements, specify: "spark:spark.dataproc.enhanced.optimizer.enabled" : "true" , "spark:spark.dataproc.enhanced.execution.enabled" : "true" Enable or disable enhancements at job submission You can use the Google Cloud console, Google Cloud CLI, and the Managed Service for Apache Spark API to enable or disable Spark performance enhancements on a Spark job submitted to Managed Service for Apache Spark.
- If you do not specify a zone, the Managed Service for Apache Spark autozone placement feature selects a zone with the specified region.

### Managed Service for Apache Spark \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/audit-logging](https://docs.cloud.google.com/dataproc/docs/guides/audit-logging)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Permission type Methods ADMIN READ google.cloud.dataproc.v1.AutoscalingPolicyService.GetAutoscalingPolicy google.cloud.dataproc.v1.AutoscalingPolicyService.ListAutoscalingPolicies google.cloud.dataproc.v1.BatchController.GetBatch google.cloud.dataproc.v1.BatchController.ListBatches google.cloud.dataproc.v1.ClusterController.GetCluster google.cloud.dataproc.v1.ClusterController.ListClusters google.cloud.dataproc.v1.JobController.GetJob google.cloud.dataproc.v1.JobController.ListJobs google.cloud.dataproc.v1.NodeGroupController.GetNodeGroup google.cloud.dataproc.v1.SessionController.GetSession google.cloud.dataproc.v1.SessionController.ListSessions google.cloud.dataproc.v1.SessionTemplateController.GetSessionTemplate google.cloud.dataproc.v1.SessionTemplateController.ListSessionTemplates google.cloud.dataproc.v1.WorkflowTemplateService.GetWorkflowTemplate google.cloud.dataproc.v1.WorkflowTemplateService.ListWorkflowTemplates google.cloud.dataproc.v1beta2.AutoscalingPolicyService.GetAutoscalingPolicy google.cloud.dataproc.v1beta2.ClusterController.GetCluster google.cloud.dataproc.v1beta2.ClusterController.ListClusters google.cloud.dataproc.v1beta2.JobController.GetJob google.cloud.dataproc.v1beta2.JobController.ListJobs google.cloud.dataproc.v1beta2.WorkflowTemplateService.GetWorkflowTemplate google.iam.v1.IAMPolicy.GetIamPolicy google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations ADMIN WRITE google.cloud.dataproc.v1.AnalysisService.AnalyzeBatch (LRO) google.cloud.dataproc.v1.AutoscalingPolicyService.CreateAutoscalingPolicy google.cloud.dataproc.v1.AutoscalingPolicyService.DeleteAutoscalingPolicy google.cloud.dataproc.v1.AutoscalingPolicyService.UpdateAutoscalingPolicy google.cloud.dataproc.v1.BatchController.CreateBatch (LRO) google.cloud.dataproc.v1.BatchController.DeleteBatch google.cloud.dataproc.v1.ClusterController.CreateCluster (LRO) google.cloud.dataproc.v1.ClusterController.DeleteCluster (LRO) google.cloud.dataproc.v1.ClusterController.DiagnoseCluster (LRO) google.cloud.dataproc.v1.ClusterController.InjectCredentials (LRO) google.cloud.dataproc.v1.ClusterController.RepairCluster (LRO) google.cloud.dataproc.v1.ClusterController.StartCluster (LRO) google.cloud.dataproc.v1.ClusterController.StopCluster (LRO) google.cloud.dataproc.v1.ClusterController.UpdateCluster (LRO) google.cloud.dataproc.v1.JobController.CancelJob google.cloud.dataproc.v1.JobController.DeleteJob google.cloud.dataproc.v1.JobController.SubmitJob (LRO) google.cloud.dataproc.v1.JobController.SubmitJobAsOperation (LRO) google.cloud.dataproc.v1.JobController.UpdateJob google.cloud.dataproc.v1.NodeGroupController.CreateNodeGroup (LRO) google.cloud.dataproc.v1.NodeGroupController.RepairNodeGroup (LRO) google.cloud.dataproc.v1.NodeGroupController.ResizeNodeGroup (LRO) google.cloud.dataproc.v1.SessionController.CreateSession (LRO) google.cloud.dataproc.v1.SessionController.DeleteSession (LRO) google.cloud.dataproc.v1.SessionController.TerminateSession (LRO) google.cloud.dataproc.v1.SessionTemplateController.CreateSessionTemplate google.cloud.dataproc.v1.SessionTemplateController.DeleteSessionTemplate google.cloud.dataproc.v1.SessionTemplateController.UpdateSessionTemplate google.cloud.dataproc.v1.WorkflowTemplateService.CreateWorkflowTemplate google.cloud.dataproc.v1.WorkflowTemplateService.DeleteWorkflowTemplate google.cloud.dataproc.v1.WorkflowTemplateService.InstantiateInlineWorkflowTemplate (LRO) google.cloud.dataproc.v1.WorkflowTemplateService.InstantiateWorkflowTemplate (LRO) google.cloud.dataproc.v1.WorkflowTemplateService.UpdateWorkflowTemplate google.cloud.dataproc.v1beta2.AutoscalingPolicyService.CreateAutoscalingPolicy google.cloud.dataproc.v1beta2.AutoscalingPolicyService.DeleteAutoscalingPolicy google.cloud.dataproc.v1beta2.AutoscalingPolicyService.UpdateAutoscalingPolicy google.cloud.dataproc.v1beta2.ClusterController.CreateCluster (LRO) google.cloud.dataproc.v1beta2.ClusterController.DeleteCluster (LRO) google.cloud.dataproc.v1beta2.ClusterController.DiagnoseCluster (LRO) google.cloud.dataproc.v1beta2.ClusterController.StartCluster (LRO) google.cloud.dataproc.v1beta2.ClusterController.StopCluster (LRO) google.cloud.dataproc.v1beta2.ClusterController.UpdateCluster (LRO) google.cloud.dataproc.v1beta2.JobController.CancelJob google.cloud.dataproc.v1beta2.JobController.SubmitJob google.cloud.dataproc.v1beta2.JobController.SubmitJobAsOperation (LRO) google.cloud.dataproc.v1beta2.WorkflowTemplateService.CreateWorkflowTemplate google.cloud.dataproc.v1beta2.WorkflowTemplateService.DeleteWorkflowTemplate google.cloud.dataproc.v1beta2.WorkflowTemplateService.InstantiateInlineWorkflowTemplate (LRO) google.cloud.dataproc.v1beta2.WorkflowTemplateService.InstantiateWorkflowTemplate (LRO) google.cloud.dataproc.v1beta2.WorkflowTemplateService.UpdateWorkflowTemplate google.iam.v1.IAMPolicy.SetIamPolicy google.longrunning.Operations.CancelOperation google.longrunning.Operations.DeleteOperation DATA READ google.cloud.dataproc.v1.BatchController.AccessSparkApplication google.cloud.dataproc.v1.BatchController.AccessSparkApplicationEnvironmentInfo google.cloud.dataproc.v1.BatchController.AccessSparkApplicationJob google.cloud.dataproc.v1.BatchController.AccessSparkApplicationSqlQuery google.cloud.dataproc.v1.BatchController.AccessSparkApplicationStageAttempt google.cloud.dataproc.v1.BatchController.SearchSparkApplicationExecutors google.cloud.dataproc.v1.BatchController.SearchSparkApplicationJobs google.cloud.dataproc.v1.BatchController.SearchSparkApplicationSqlQueries google.cloud.dataproc.v1.BatchController.SearchSparkApplicationStageAttemptTasks google.cloud.dataproc.v1.BatchController.SearchSparkApplicationStageAttempts google.cloud.dataproc.v1.BatchController.SearchSparkApplicationStages google.cloud.dataproc.v1.BatchController.SearchSparkApplications google.cloud.dataproc.v1.SessionController.AccessSessionSparkApplication google.cloud.dataproc.v1.SessionController.AccessSessionSparkApplicationEnvironmentInfo google.cloud.dataproc.v1.SessionController.AccessSessionSparkApplicationJob google.cloud.dataproc.v1.SessionController.AccessSessionSparkApplicationSqlQuery google.cloud.dataproc.v1.SessionController.AccessSessionSparkApplicationSqlSparkPlanGraph google.cloud.dataproc.v1.SessionController.AccessSessionSparkApplicationStageAttempt google.cloud.dataproc.v1.SessionController.AccessSessionSparkApplicationStageRddOperationGraph google.cloud.dataproc.v1.SessionController.SearchSessionSparkApplicationExecutorStageSummary google.cloud.dataproc.v1.SessionController.SearchSessionSparkApplicationExecutors google.cloud.dataproc.v1.SessionController.SearchSessionSparkApplicationJobs google.cloud.dataproc.v1.SessionController.SearchSessionSparkApplicationSqlQueries google.cloud.dataproc.v1.SessionController.SearchSessionSparkApplicationStageAttemptTasks google.cloud.dataproc.v1.SessionController.SearchSessionSparkApplicationStageAttempts google.cloud.dataproc.v1.SessionController.SearchSessionSparkApplicationStages google.cloud.dataproc.v1.SessionController.SearchSessionSparkApplications google.cloud.dataproc.v1.SessionController.SummarizeSessionSparkApplicationExecutors google.cloud.dataproc.v1.SessionController.SummarizeSessionSparkApplicationJobs google.cloud.dataproc.v1.SessionController.SummarizeSessionSparkApplicationStageAttemptTasks google.cloud.dataproc.v1.SessionController.SummarizeSessionSparkApplicationStages DATA WRITE google.cloud.dataproc.v1.BatchController.WriteSparkApplicationContext google.cloud.dataproc.v1.SessionController.WriteSessionSparkApplicationContext API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Managed Service for Apache Spark and Managed Service for Apache Spark. google.cloud.dataproc.v1.AnalysisService The following audit logs are associated with methods belonging to google.cloud.dataproc.v1.AnalysisService .
- Filter for this method : protoPayload.methodName="google.cloud.dataproc.v1.BatchController.AccessSparkApplicationStageAttempt" CreateBatch Method : google.cloud.dataproc.v1.BatchController.CreateBatch Audit log type : Admin activity Permissions : dataproc.batches.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.dataproc.v1.BatchController.CreateBatch" DeleteBatch Method : google.cloud.dataproc.v1.BatchController.DeleteBatch Audit log type : Admin activity Permissions : dataproc.batches.delete - ADMIN WRITE Method is a long-running or streaming operation : No.
- AnalyzeBatch Method : google.cloud.dataproc.v1.AnalysisService.AnalyzeBatch Audit log type : Admin activity Permissions : dataproc.batches.analyze - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.dataproc.v1.AnalysisService.AnalyzeBatch" google.cloud.dataproc.v1.AutoscalingPolicyService The following audit logs are associated with methods belonging to google.cloud.dataproc.v1.AutoscalingPolicyService .
- Filter for this method : protoPayload.methodName="google.cloud.dataproc.v1.BatchController.SearchSparkApplicationSqlQueries" SearchSparkApplicationStageAttemptTasks Method : google.cloud.dataproc.v1.BatchController.SearchSparkApplicationStageAttemptTasks Audit log type : Data access Permissions : dataproc.batches.sparkApplicationRead - DATA READ Method is a long-running or streaming operation : No.

