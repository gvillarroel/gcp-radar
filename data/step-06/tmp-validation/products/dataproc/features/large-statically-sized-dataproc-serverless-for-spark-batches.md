---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:49:39.120Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Large statically sized Dataproc Serverless for Spark batches"
feature_slug: "large-statically-sized-dataproc-serverless-for-spark-batches"
latest_feature_date: "2023-02-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage"
  - "https://docs.cloud.google.com/dataproc/docs/guides/audit-logging"
  - "https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob"
keywords:
  - "statically"
  - "large"
  - "sized"
  - "batches"
  - "serverless"
  - "supports"
  - "spark"
---

# Large statically sized Dataproc Serverless for Spark batches

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc Serverless for Spark supports statically sized batch workloads with more than 500 executors.

## Extended Definition

Dataproc Serverless for Spark supports statically sized batch workloads with more than 500 executors.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage](https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage)
- [https://docs.cloud.google.com/dataproc/docs/guides/audit-logging](https://docs.cloud.google.com/dataproc/docs/guides/audit-logging)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob)

## Supporting Pages

### "Using Spark data lineage \_|\_ Managed Service for Apache Spark \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage](https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage)
- Source ID: `site-iam-reference`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Data lineage is available for all Managed Service for Apache Spark Spark jobs except SparkR and Spark streaming jobs, and supports BigQuery and Cloud Storage data sources.
- Disable Spark data lineage on a job If Spark data lineage is enabled on a cluster, you can disable Spark data lineage on a job by passing the spark.extraListeners property with an empty value ("") when you submit the job. gcloud dataproc jobs submit spark \ --cluster = CLUSTER NAME \ --project PROJECT ID \ --region REGION \ --class CLASS \ --jars = gs:// APPLICATION BUCKET /spark-application.jar \ --properties = spark.extraListeners = '' Submit a Spark job When you submit a supported Spark job on a Managed Service for Apache Spark cluster that was created with Spark data lineage enabled, Managed Service for Apache Spark captures and reports the data lineage information to the Data Lineage API. gcloud dataproc jobs submit spark \ --cluster = CLUSTER NAME \ --project PROJECT ID \ --region REGION \ --class CLASS \ --jars = gs:// APPLICATION BUCKET /spark-application.jar \ --properties = spark.openlineage.namespace = CUSTOM NAMESPACE ,spark.openlineage.appName = CUSTOM APPNAME Notes: Adding the spark.openlineage.namespace and spark.openlineage.appName properties, which are used to uniquely identify the job, is optional.
- It uses a Cloud Storage bucket for temporary storage. #!/usr/bin/env python from pyspark.sql import SparkSession import sys spark = SparkSession \ . builder \ . appName ( 'LINEAGE BQ TO BQ' ) \ . getOrCreate () bucket = 'gs:// BUCKET ` spark . conf . set ( 'temporaryCloudStorageBucket' , bucket ) source = 'bigquery-public-data:samples.shakespeare' words = spark . read . format ( 'bigquery' ) \ . option ( 'table' , source ) \ . load () words . createOrReplaceTempView ( 'words' ) word count = spark . sql ( 'SELECT word, SUM(word count) AS word count FROM words GROUP BY word' ) destination table = ' PROJECT ID : DATASET .

### Managed Service for Apache Spark \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/guides/audit-logging](https://docs.cloud.google.com/dataproc/docs/guides/audit-logging)
- Source ID: `site-docs-root`
- Final score: 86
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Permission type Methods ADMIN READ google.cloud.dataproc.v1.AutoscalingPolicyService.GetAutoscalingPolicy google.cloud.dataproc.v1.AutoscalingPolicyService.ListAutoscalingPolicies google.cloud.dataproc.v1.BatchController.GetBatch google.cloud.dataproc.v1.BatchController.ListBatches google.cloud.dataproc.v1.ClusterController.GetCluster google.cloud.dataproc.v1.ClusterController.ListClusters google.cloud.dataproc.v1.JobController.GetJob google.cloud.dataproc.v1.JobController.ListJobs google.cloud.dataproc.v1.NodeGroupController.GetNodeGroup google.cloud.dataproc.v1.SessionController.GetSession google.cloud.dataproc.v1.SessionController.ListSessions google.cloud.dataproc.v1.SessionTemplateController.GetSessionTemplate google.cloud.dataproc.v1.SessionTemplateController.ListSessionTemplates google.cloud.dataproc.v1.WorkflowTemplateService.GetWorkflowTemplate google.cloud.dataproc.v1.WorkflowTemplateService.ListWorkflowTemplates google.cloud.dataproc.v1beta2.AutoscalingPolicyService.GetAutoscalingPolicy google.cloud.dataproc.v1beta2.ClusterController.GetCluster google.cloud.dataproc.v1beta2.ClusterController.ListClusters google.cloud.dataproc.v1beta2.JobController.GetJob google.cloud.dataproc.v1beta2.JobController.ListJobs google.cloud.dataproc.v1beta2.WorkflowTemplateService.GetWorkflowTemplate google.iam.v1.IAMPolicy.GetIamPolicy google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations ADMIN WRITE google.cloud.dataproc.v1.AnalysisService.AnalyzeBatch (LRO) google.cloud.dataproc.v1.AutoscalingPolicyService.CreateAutoscalingPolicy google.cloud.dataproc.v1.AutoscalingPolicyService.DeleteAutoscalingPolicy google.cloud.dataproc.v1.AutoscalingPolicyService.UpdateAutoscalingPolicy google.cloud.dataproc.v1.BatchController.CreateBatch (LRO) google.cloud.dataproc.v1.BatchController.DeleteBatch google.cloud.dataproc.v1.ClusterController.CreateCluster (LRO) google.cloud.dataproc.v1.ClusterController.DeleteCluster (LRO) google.cloud.dataproc.v1.ClusterController.DiagnoseCluster (LRO) google.cloud.dataproc.v1.ClusterController.InjectCredentials (LRO) google.cloud.dataproc.v1.ClusterController.RepairCluster (LRO) google.cloud.dataproc.v1.ClusterController.StartCluster (LRO) google.cloud.dataproc.v1.ClusterController.StopCluster (LRO) google.cloud.dataproc.v1.ClusterController.UpdateCluster (LRO) google.cloud.dataproc.v1.JobController.CancelJob google.cloud.dataproc.v1.JobController.DeleteJob google.cloud.dataproc.v1.JobController.SubmitJob (LRO) google.cloud.dataproc.v1.JobController.SubmitJobAsOperation (LRO) google.cloud.dataproc.v1.JobController.UpdateJob google.cloud.dataproc.v1.NodeGroupController.CreateNodeGroup (LRO) google.cloud.dataproc.v1.NodeGroupController.RepairNodeGroup (LRO) google.cloud.dataproc.v1.NodeGroupController.ResizeNodeGroup (LRO) google.cloud.dataproc.v1.SessionController.CreateSession (LRO) google.cloud.dataproc.v1.SessionController.DeleteSession (LRO) google.cloud.dataproc.v1.SessionController.TerminateSession (LRO) google.cloud.dataproc.v1.SessionTemplateController.CreateSessionTemplate google.cloud.dataproc.v1.SessionTemplateController.DeleteSessionTemplate google.cloud.dataproc.v1.SessionTemplateController.UpdateSessionTemplate google.cloud.dataproc.v1.WorkflowTemplateService.CreateWorkflowTemplate google.cloud.dataproc.v1.WorkflowTemplateService.DeleteWorkflowTemplate google.cloud.dataproc.v1.WorkflowTemplateService.InstantiateInlineWorkflowTemplate (LRO) google.cloud.dataproc.v1.WorkflowTemplateService.InstantiateWorkflowTemplate (LRO) google.cloud.dataproc.v1.WorkflowTemplateService.UpdateWorkflowTemplate google.cloud.dataproc.v1beta2.AutoscalingPolicyService.CreateAutoscalingPolicy google.cloud.dataproc.v1beta2.AutoscalingPolicyService.DeleteAutoscalingPolicy google.cloud.dataproc.v1beta2.AutoscalingPolicyService.UpdateAutoscalingPolicy google.cloud.dataproc.v1beta2.ClusterController.CreateCluster (LRO) google.cloud.dataproc.v1beta2.ClusterController.DeleteCluster (LRO) google.cloud.dataproc.v1beta2.ClusterController.DiagnoseCluster (LRO) google.cloud.dataproc.v1beta2.ClusterController.StartCluster (LRO) google.cloud.dataproc.v1beta2.ClusterController.StopCluster (LRO) google.cloud.dataproc.v1beta2.ClusterController.UpdateCluster (LRO) google.cloud.dataproc.v1beta2.JobController.CancelJob google.cloud.dataproc.v1beta2.JobController.SubmitJob google.cloud.dataproc.v1beta2.JobController.SubmitJobAsOperation (LRO) google.cloud.dataproc.v1beta2.WorkflowTemplateService.CreateWorkflowTemplate google.cloud.dataproc.v1beta2.WorkflowTemplateService.DeleteWorkflowTemplate google.cloud.dataproc.v1beta2.WorkflowTemplateService.InstantiateInlineWorkflowTemplate (LRO) google.cloud.dataproc.v1beta2.WorkflowTemplateService.InstantiateWorkflowTemplate (LRO) google.cloud.dataproc.v1beta2.WorkflowTemplateService.UpdateWorkflowTemplate google.iam.v1.IAMPolicy.SetIamPolicy google.longrunning.Operations.CancelOperation google.longrunning.Operations.DeleteOperation DATA READ google.cloud.dataproc.v1.BatchController.AccessSparkApplication google.cloud.dataproc.v1.BatchController.AccessSparkApplicationEnvironmentInfo google.cloud.dataproc.v1.BatchController.AccessSparkApplicationJob google.cloud.dataproc.v1.BatchController.AccessSparkApplicationSqlQuery google.cloud.dataproc.v1.BatchController.AccessSparkApplicationStageAttempt google.cloud.dataproc.v1.BatchController.SearchSparkApplicationExecutors google.cloud.dataproc.v1.BatchController.SearchSparkApplicationJobs google.cloud.dataproc.v1.BatchController.SearchSparkApplicationSqlQueries google.cloud.dataproc.v1.BatchController.SearchSparkApplicationStageAttemptTasks google.cloud.dataproc.v1.BatchController.SearchSparkApplicationStageAttempts google.cloud.dataproc.v1.BatchController.SearchSparkApplicationStages google.cloud.dataproc.v1.BatchController.SearchSparkApplications google.cloud.dataproc.v1.SessionController.AccessSessionSparkApplication google.cloud.dataproc.v1.SessionController.AccessSessionSparkApplicationEnvironmentInfo google.cloud.dataproc.v1.SessionController.AccessSessionSparkApplicationJob google.cloud.dataproc.v1.SessionController.AccessSessionSparkApplicationSqlQuery google.cloud.dataproc.v1.SessionController.AccessSessionSparkApplicationSqlSparkPlanGraph google.cloud.dataproc.v1.SessionController.AccessSessionSparkApplicationStageAttempt google.cloud.dataproc.v1.SessionController.AccessSessionSparkApplicationStageRddOperationGraph google.cloud.dataproc.v1.SessionController.SearchSessionSparkApplicationExecutorStageSummary google.cloud.dataproc.v1.SessionController.SearchSessionSparkApplicationExecutors google.cloud.dataproc.v1.SessionController.SearchSessionSparkApplicationJobs google.cloud.dataproc.v1.SessionController.SearchSessionSparkApplicationSqlQueries google.cloud.dataproc.v1.SessionController.SearchSessionSparkApplicationStageAttemptTasks google.cloud.dataproc.v1.SessionController.SearchSessionSparkApplicationStageAttempts google.cloud.dataproc.v1.SessionController.SearchSessionSparkApplicationStages google.cloud.dataproc.v1.SessionController.SearchSessionSparkApplications google.cloud.dataproc.v1.SessionController.SummarizeSessionSparkApplicationExecutors google.cloud.dataproc.v1.SessionController.SummarizeSessionSparkApplicationJobs google.cloud.dataproc.v1.SessionController.SummarizeSessionSparkApplicationStageAttemptTasks google.cloud.dataproc.v1.SessionController.SummarizeSessionSparkApplicationStages DATA WRITE google.cloud.dataproc.v1.BatchController.WriteSparkApplicationContext google.cloud.dataproc.v1.SessionController.WriteSessionSparkApplicationContext API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Managed Service for Apache Spark and Managed Service for Apache Spark. google.cloud.dataproc.v1.AnalysisService The following audit logs are associated with methods belonging to google.cloud.dataproc.v1.AnalysisService .
- Filter for this method : protoPayload.methodName="google.cloud.dataproc.v1.BatchController.AccessSparkApplicationStageAttempt" CreateBatch Method : google.cloud.dataproc.v1.BatchController.CreateBatch Audit log type : Admin activity Permissions : dataproc.batches.create - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.dataproc.v1.BatchController.CreateBatch" DeleteBatch Method : google.cloud.dataproc.v1.BatchController.DeleteBatch Audit log type : Admin activity Permissions : dataproc.batches.delete - ADMIN WRITE Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.dataproc.v1.BatchController.SearchSparkApplicationSqlQueries" SearchSparkApplicationStageAttemptTasks Method : google.cloud.dataproc.v1.BatchController.SearchSparkApplicationStageAttemptTasks Audit log type : Data access Permissions : dataproc.batches.sparkApplicationRead - DATA READ Method is a long-running or streaming operation : No.
- Filter for this method : protoPayload.methodName="google.cloud.dataproc.v1.BatchController.SearchSparkApplicationStageAttemptTasks" SearchSparkApplicationStageAttempts Method : google.cloud.dataproc.v1.BatchController.SearchSparkApplicationStageAttempts Audit log type : Data access Permissions : dataproc.batches.sparkApplicationRead - DATA READ Method is a long-running or streaming operation : No.

### PySparkJob \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/PySparkJob)
- Source ID: `site-docs-reference`
- Final score: 85
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- "Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
- Home Documentation Data analytics Managed Service for Apache Spark Reference Send feedback PySparkJob Stay organized with collections Save and categorize content based on your preferences.
- Note: Spark applications must be deployed in cluster mode for correct environment propagation. properties map (key: string, value: string) Optional.
- Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.

