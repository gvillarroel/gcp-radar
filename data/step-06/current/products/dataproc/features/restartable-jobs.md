---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.685Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Restartable jobs"
feature_slug: "restartable-jobs"
latest_feature_date: "2017-03-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerClient"
keywords:
  - "restartable"
  - "jobs"
  - "let"
  - "users"
  - "configure"
  - "failed"
  - "dataproc"
  - "retry"
---

# Restartable jobs

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Restartable jobs let users configure failed Dataproc jobs to retry automatically up to a specified number of times per hour.

## Extended Definition

Restartable jobs let users configure failed Dataproc jobs to retry automatically up to a specified number of times per hour.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerClient)

## Supporting Pages

### "Class JobControllerAsyncClient (5.26.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 async def sample list jobs(): Create a client client = dataproc v1 .
- ListJobsRequest ( project id="project id value", region="region value", ) Make the request page result = client. list jobs (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.dataproc v1.types.ListJobsRequest , dict]] The request object.
- To access the job resource after cancellation, call regions/{region}/jobs.list <https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/list> or regions/{region}/jobs.get <https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/get> .
- Returns Type Description google.cloud.dataproc v1.services.job controller.pagers.ListJobsAsyncPager A list of jobs in a project.

### "Class JobControllerClient (5.26.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.job_controller.JobControllerClient)
- Source ID: `site-python-reference`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataproc v1 def sample list jobs(): Create a client client = dataproc v1 .
- ListJobsRequest ( project id="project id value", region="region value", ) Make the request page result = client. list jobs (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.dataproc v1.types.ListJobsRequest , dict] The request object.
- To access the job resource after cancellation, call regions/{region}/jobs.list <https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/list> or regions/{region}/jobs.get <https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/get> .
- Returns Type Description google.cloud.dataproc v1.services.job controller.pagers.ListJobsPager A list of jobs in a project.

### "Configure Kerberos for Dataproc Metastore gRPC endpoints \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos-grpc)
- Source ID: `site-docs-root-2`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure Managed Service for Apache Spark before submitting jobs To run your Managed Service for Apache Spark jobs , you must add the hive user to the allowed.system.users property in the Hadoop container-executor.cfg file.
- Required Roles To get the permission that you need to create a Dataproc Metastore configured with Kerberos , ask your administrator to grant you the following IAM roles on your project, based on the principle of least privilege: Grant full control of Dataproc Metastore resources ( roles/metastore.editor ) Grant full access to all Dataproc Metastore resources, including IAM policy administration ( roles/metastore.admin ) Grant gRPC read-write access to Dataproc Metastore metadata ( roles/metastore.metadataEditor ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Create a Dataproc Metastore service with the gRPC endpoint To create a Dataproc Metastore that uses the gRPC endpoint, run the following gcloud metastore services create command: gcloud gcloud metastore services create SERVICE \ --instance-size=medium \ --endpoint-protocol=grpc Replace: SERVICE : The name of your Dataproc Metastore service Create a Managed Service for Apache Spark cluster and connect to your service To create a Managed Service for Apache Spark configured with Kerberos, run the following gcloud dataproc clusters create command.
- Home Documentation Data analytics Dataproc Metastore Guides Send feedback Configure Kerberos for Dataproc Metastore gRPC endpoints Stay organized with collections Save and categorize content based on your preferences.

