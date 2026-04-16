---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.865Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Stackdriver error reports in Dataflow monitoring interface"
feature_slug: "stackdriver-error-reports-in-dataflow-monitoring-interface"
latest_feature_date: "2017-07-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
  - "https://docs.cloud.google.com/dataflow/docs/guides/monitoring-overview"
  - "https://docs.cloud.google.com/dataflow/docs/guides/logging"
keywords:
  - "stackdriver"
  - "error"
  - "reports"
  - "dataflow"
  - "monitoring"
  - "interface"
  - "provides"
  - "direct"
---

# Stackdriver error reports in Dataflow monitoring interface

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Dataflow provides direct access to Stackdriver error reports from the monitoring interface.

## Extended Definition

Dataflow provides direct access to Stackdriver error reports from the monitoring interface.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- [https://docs.cloud.google.com/dataflow/docs/guides/monitoring-overview](https://docs.cloud.google.com/dataflow/docs/guides/monitoring-overview)
- [https://docs.cloud.google.com/dataflow/docs/guides/logging](https://docs.cloud.google.com/dataflow/docs/guides/logging)

## Supporting Pages

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-reference-2`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Request payload size exceeds the limit: 20971520 bytes When you run a pipeline, the job might fail with the following error: com.google.api.client.googleapis.json.GoogleJsonResponseException: 400 Bad Request POST https://dataflow.googleapis.com/v1b3/projects/PROJECT ID/locations/REGION/jobs/JOB ID/workItems:reportStatus { "code": 400, "errors": [ { "domain": "global", "message": "Request payload size exceeds the limit: 20971520 bytes.", "reason": "badRequest" } ], "message": "Request payload size exceeds the limit: 20971520 bytes.", "status": "INVALID ARGUMENT" } This error can occur when a job using the Dataflow runner has a very large job graph.
- A fatal error has been detected by the Java Runtime Environment The following error occurs during worker startup: A fatal error has been detected by the Java Runtime Environment This error occurs if the pipeline is using Java Native Interface (JNI) to run non-Java code and that code or the JNI bindings contain an error. googclient deliveryattempt attribute key error Your Dataflow job fails with one of the following errors: The request contains an attribute key that is not valid (key=googclient deliveryattempt).
- Bad request When you run a Dataflow job, Cloud Monitoring logs display a series of warnings similar to the following: Unable to update setup work item STEP ID error: generic::invalid argument: Http(400) Bad Request Update range task returned 'invalid argument'.
- NameError When you execute your pipeline using the Dataflow service, the following error occurs: NameError This error does not occur when you execute locally, such as when you execute using the DirectRunner .

### Use the Dataflow job monitoring interface \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/monitoring-overview](https://docs.cloud.google.com/dataflow/docs/guides/monitoring-overview)
- Source ID: `site-docs-reference-2`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Monitoring interface components The monitoring interface contains the following visualizers and charts: Project monitoring dashboard A dashboard that monitors your Dataflow jobs at the project level.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Use the Dataflow job monitoring interface Stay organized with collections Save and categorize content based on your preferences.
- When you run your pipeline by using Dataflow, you can view that job and any others by using the Dataflow monitoring interface.
- You can access the Dataflow monitoring interface in the Google Cloud console .

### Work with pipeline logs \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/logging](https://docs.cloud.google.com/dataflow/docs/guides/logging)
- Source ID: `site-docs-root-2`
- Final score: 135
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- After the job starts, a link to the Google Cloud console page is output to the console, followed by the pipeline job ID: INFO: To access the Dataflow monitoring console, please navigate to https://console.developers.google.com/dataflow/job/2017-04-13 13 58 10-6217777367720337669 Submitted job: 2017-04-13 13 58 10-6217777367720337669 The console URL leads to the Dataflow monitoring interface with a summary page for the submitted job.
- Monitor and view pipeline logs When you run your pipeline on the Dataflow service , you can use the Dataflow monitoring interface to view logs emitted by your pipeline.
- For troubleshooting and monitoring purposes, the Dataflow monitoring interface has additional information on these BigQuery jobs available in the Logs panel.
- The Dataflow monitoring interface showing the expanded logs panel with options to filter logs.

