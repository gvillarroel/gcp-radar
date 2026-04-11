---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.847Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Parameterized queries in Dataflow SQL UI"
feature_slug: "parameterized-queries-in-dataflow-sql-ui"
latest_feature_date: "2020-04-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template"
  - "https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development"
  - "https://docs.cloud.google.com/dataflow/docs/guides/job-builder"
  - "https://docs.cloud.google.com/dataflow/docs/guides/job-builder-custom-job"
keywords:
  - "parameterized"
  - "queries"
  - "in"
  - "dataflow"
  - "sql"
  - "ui"
  - "the"
  - "supports"
---

# Parameterized queries in Dataflow SQL UI

Product: Dataflow
Coverage: LOW

## Step 02 Summary

The Dataflow SQL UI supports running parameterized SQL queries.

## Extended Definition

The Dataflow SQL UI supports running parameterized SQL queries.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)
- [https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development](https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development)
- [https://docs.cloud.google.com/dataflow/docs/guides/job-builder](https://docs.cloud.google.com/dataflow/docs/guides/job-builder)
- [https://docs.cloud.google.com/dataflow/docs/guides/job-builder-custom-job](https://docs.cloud.google.com/dataflow/docs/guides/job-builder-custom-job)

## Supporting Pages

### "Quickstart: Create a streaming pipeline using a Dataflow template \_|\_\

- URL: [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- To get the permissions that you need to complete this quickstart, ask your administrator to grant you the following IAM roles on your project: BigQuery User ( roles/bigquery.user ) Dataflow Admin ( roles/dataflow.admin ) Service Account User ( roles/iam.serviceAccountUser ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Delete the individual resources If you want to keep the Google Cloud project that you used in this quickstart, then delete the individual resources: Go to the Dataflow Jobs page.
- To ensure that the Compute Engine default service account has the necessary permissions to run the Dataflow job, ask your administrator to grant the following IAM roles to the Compute Engine default service account on your project: Important: You must grant these roles to the Compute Engine default service account, not to your user account.
- What's next Dataflow templates overview Creating classic templates Running classic templates Google-provided templates Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Develop Apache Beam notebooks with the interactive runner \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development](https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following notebooks are available: Word Count Streaming Word Count Streaming NYC Taxi Ride Data Apache Beam SQL in notebooks with comparisons to pipelines Apache Beam SQL in notebooks with the Dataflow Runner Apache Beam SQL in notebooks Dataflow Word Count Interactive Flink at Scale RunInference Use GPUs with Apache Beam Visualize Data The Tutorials folder contains additional tutorials that explain the fundamentals of Apache Beam.
- Advanced features include the following workflows: Use Interactive FlinkRunner on notebook-managed clusters Use Beam SQL and beam sql magic Accelerate using JIT compiler and GPU Build a custom container Disable external IP addresses Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- This location is used to store temporary files or intermediate results before outputting to the sink. options . view as ( GoogleCloudOptions ) . temp location = ' %s /temp' % dataflow gcs location If and only if you are using Apache Beam SDK built from source code, set the SDK location.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Develop Apache Beam notebooks with the interactive runner Stay organized with collections Save and categorize content based on your preferences.

### Job builder UI overview \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/job-builder](https://docs.cloud.google.com/dataflow/docs/guides/job-builder)
- Source ID: `site-docs-root-2`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In this image, the user is creating a pipeline to read from Pub/Sub to BigQuery: Overview The job builder supports reading and writing the following types of data: Pub/Sub messages BigQuery table data CSV files, JSON files, and text files in Cloud Storage PostgreSQL, MySQL, Oracle, and SQL Server table data It supports pipeline transforms including filter, map, SQL, group-by, join, and explode (array flatten).
- With the job builder you can: Stream from Pub/Sub to BigQuery with transforms and windowed aggregation Write data from Cloud Storage to BigQuery Use error handling to filter erroneous data (dead-letter queue) Manipulate or aggregate data using SQL with the SQL transform Add, modify, or drop fields from data with mapping transforms Schedule recurring batch jobs The job builder can also save pipelines as Apache Beam YAML files and load pipeline definitions from Beam YAML files.
- The job builder is a visual UI for building and running Dataflow pipelines in the Google Cloud console, without writing code.
- By using this feature, you can design your pipeline in the job builder and then store the YAML file in Cloud Storage or a source control repository for reuse.

### "Create a custom job with the job builder \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/job-builder-custom-job](https://docs.cloud.google.com/dataflow/docs/guides/job-builder-custom-job)
- Source ID: `site-docs-root-2`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Run the following command in your shell or terminal: gcloud dataflow yaml run my-job-builder-job --yaml-pipeline-file = YAML FILE PATH Replace YAML FILE PATH with the path of your YAML file, either locally or in Cloud Storage.
- Run the pipeline To run a pipeline from the job builder, perform the following steps: Optional: Set Dataflow job options.
- The job builder lets you create custom batch and streaming Dataflow jobs.
- Validate the pipeline before launching For pipelines with complex configuration, such as Python filters and SQL expressions, it can be helpful to check the pipeline configuration for syntax errors before launching.

