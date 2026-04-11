---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.850Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Enhanced observability in monitoring UI"
feature_slug: "enhanced-observability-in-monitoring-ui"
latest_feature_date: "2020-02-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template"
  - "https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard"
  - "https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline"
  - "https://docs.cloud.google.com/dataflow/docs/guides/logging"
keywords:
  - "enhanced"
  - "observability"
  - "in"
  - "monitoring"
  - "ui"
  - "the"
  - "dataflow"
  - "includes"
---

# Enhanced observability in monitoring UI

Product: Dataflow
Coverage: LOW

## Step 02 Summary

The Dataflow monitoring UI includes enhanced observability features for troubleshooting batch and streaming pipelines.

## Extended Definition

The Dataflow monitoring UI includes enhanced observability features for troubleshooting batch and streaming pipelines.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)
- [https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard](https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard)
- [https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline)
- [https://docs.cloud.google.com/dataflow/docs/guides/logging](https://docs.cloud.google.com/dataflow/docs/guides/logging)

## Supporting Pages

### "Quickstart: Create a streaming pipeline using a Dataflow template \_|\_\

- URL: [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- To get the permissions that you need to complete this quickstart, ask your administrator to grant you the following IAM roles on your project: BigQuery User ( roles/bigquery.user ) Dataflow Admin ( roles/dataflow.admin ) Service Account User ( roles/iam.serviceAccountUser ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Delete the individual resources If you want to keep the Google Cloud project that you used in this quickstart, then delete the individual resources: Go to the Dataflow Jobs page.
- To ensure that the Compute Engine default service account has the necessary permissions to run the Dataflow job, ask your administrator to grant the following IAM roles to the Compute Engine default service account on your project: Important: You must grant these roles to the Compute Engine default service account, not to your user account.
- What's next Dataflow templates overview Creating classic templates Running classic templates Google-provided templates Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Customize the Dataflow monitoring dashboard \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard](https://docs.cloud.google.com/dataflow/docs/guides/customize-monitoring-dashboard)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Customize the Dataflow monitoring dashboard Stay organized with collections Save and categorize content based on your preferences.
- Map metric names to PromQL strings To use Monitoring metrics in PromQL queries, you must map the metric name to a PromQL string, as follows: Metric name PromQL string job/total vcpu time dataflow googleapis com:job total vcpu time job/total memory usage time dataflow googleapis com:job total memory usage time job/total streaming data processed dataflow googleapis com:job total streaming data processed job/total pd usage time dataflow googleapis com:job total pd usage time For more information, see Mapping Cloud Monitoring metrics to PromQL .
- CPU PRICE : CPU price, per vCPU per hour MEMORY PRICE : Memory price, per GB per hour SHUFFLE PRICE : Shuffle price, per GB STANDARD PD PRICE : Standard Persistent Disk price, per GB per hour SSD PD PRICE : SSD Persistent Disk price, per GB per hour Edit the dashboard If you didn't previously create a custom dashboard for Dataflow in this project, create one as follows: In the Google Cloud console, go to the Dataflow Monitoring page.
- If you previously created a custom dashboard, perform the following steps to edit the dashboard: In the Google Cloud console, go to the Dataflow Monitoring page.

### Troubleshoot and debug Dataflow pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- If you run your pipeline with blocking execution, error messages are printed in your console or terminal window, such as the following: Java INFO: To access the Dataflow monitoring console, please navigate to https://console.developers.google.com/project/example project/dataflow/job/2017-05-23 14 02 46-1117850763061203461 Submitted job: 2017-05-23 14 02 46-1117850763061203461 ... ...
- The error message looks similar to the following: Java INFO: To access the Dataflow monitoring console, please navigate to https://console.developers.google.com/project/google.com%3Aclouddfe/dataflow/job/2016-03-08 18 59 25-16868399470801620798 Submitted job: 2016-03-08 18 59 25-16868399470801620798 ... ...
- If your job fails the validation process, an error message appears in the Dataflow monitoring interface, as well as in your console or terminal window if you are using blocking execution.
- Detect graph or pipeline construction errors A graph construction error can occur when Dataflow is building the execution graph for your pipeline from the code in your Dataflow program.

### Work with pipeline logs \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/logging](https://docs.cloud.google.com/dataflow/docs/guides/logging)
- Source ID: `site-docs-root-2`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- After the job starts, a link to the Google Cloud console page is output to the console, followed by the pipeline job ID: INFO: To access the Dataflow monitoring console, please navigate to https://console.developers.google.com/dataflow/job/2017-04-13 13 58 10-6217777367720337669 Submitted job: 2017-04-13 13 58 10-6217777367720337669 The console URL leads to the Dataflow monitoring interface with a summary page for the submitted job.
- Here is an example of a log entry with custom data from MDC: { "jsonPayload" : { "custom data" : { "messageId" : " 232323232 " }, "message" : " LOG MESSAGE " , "pipelineName" : " PIPELINE NAME " , [ ... ] } } Prerequisites A Dataflow pipeline using the Apache Beam SDK for Java .
- Customers who are subject to the requirements of the Health Insurance Portability and Accountability Act (known as HIPAA), note that Dataflow is eligible to be included on business associate agreements (BAA) with Google.
- Monitor and view pipeline logs When you run your pipeline on the Dataflow service , you can use the Dataflow monitoring interface to view logs emitted by your pipeline.

