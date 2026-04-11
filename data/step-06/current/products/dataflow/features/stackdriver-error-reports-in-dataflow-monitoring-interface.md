---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.862Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Stackdriver error reports in Dataflow monitoring interface"
feature_slug: "stackdriver-error-reports-in-dataflow-monitoring-interface"
latest_feature_date: "2017-07-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline"
  - "https://docs.cloud.google.com/dataflow/docs/guides/logging"
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
  - "https://docs.cloud.google.com/dataflow/docs/release-notes"
keywords:
  - "stackdriver"
  - "error"
  - "reports"
  - "in"
  - "dataflow"
  - "monitoring"
  - "interface"
  - "provides"
---

# Stackdriver error reports in Dataflow monitoring interface

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Dataflow provides direct access to Stackdriver error reports from the monitoring interface.

## Extended Definition

Dataflow provides direct access to Stackdriver error reports from the monitoring interface.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline)
- [https://docs.cloud.google.com/dataflow/docs/guides/logging](https://docs.cloud.google.com/dataflow/docs/guides/logging)
- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)

## Supporting Pages

### Troubleshoot and debug Dataflow pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- If your job fails the validation process, an error message appears in the Dataflow monitoring interface, as well as in your console or terminal window if you are using blocking execution.
- Check your pipeline's status You can detect any errors in your pipeline runs by using the Dataflow monitoring interface .
- If you run your pipeline with blocking execution, error messages are printed in your console or terminal window, such as the following: Java INFO: To access the Dataflow monitoring console, please navigate to https://console.developers.google.com/project/example project/dataflow/job/2017-05-23 14 02 46-1117850763061203461 Submitted job: 2017-05-23 14 02 46-1117850763061203461 ... ...
- The error message looks similar to the following: Java INFO: To access the Dataflow monitoring console, please navigate to https://console.developers.google.com/project/google.com%3Aclouddfe/dataflow/job/2016-03-08 18 59 25-16868399470801620798 Submitted job: 2016-03-08 18 59 25-16868399470801620798 ... ...

### Work with pipeline logs \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/logging](https://docs.cloud.google.com/dataflow/docs/guides/logging)
- Source ID: `site-docs-root-2`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- After the job starts, a link to the Google Cloud console page is output to the console, followed by the pipeline job ID: INFO: To access the Dataflow monitoring console, please navigate to https://console.developers.google.com/dataflow/job/2017-04-13 13 58 10-6217777367720337669 Submitted job: 2017-04-13 13 58 10-6217777367720337669 The console URL leads to the Dataflow monitoring interface with a summary page for the submitted job.
- Monitor and view pipeline logs When you run your pipeline on the Dataflow service , you can use the Dataflow monitoring interface to view logs emitted by your pipeline.
- For troubleshooting and monitoring purposes, the Dataflow monitoring interface has additional information on these BigQuery jobs available in the Logs panel.
- The Dataflow monitoring interface showing the expanded logs panel with options to filter logs.

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Request payload size exceeds the limit: 20971520 bytes When you run a pipeline, the job might fail with the following error: com.google.api.client.googleapis.json.GoogleJsonResponseException: 400 Bad Request POST https://dataflow.googleapis.com/v1b3/projects/PROJECT ID/locations/REGION/jobs/JOB ID/workItems:reportStatus { "code": 400, "errors": [ { "domain": "global", "message": "Request payload size exceeds the limit: 20971520 bytes.", "reason": "badRequest" } ], "message": "Request payload size exceeds the limit: 20971520 bytes.", "status": "INVALID ARGUMENT" } This error can occur when a job using the Dataflow runner has a very large job graph.
- A fatal error has been detected by the Java Runtime Environment The following error occurs during worker startup: A fatal error has been detected by the Java Runtime Environment This error occurs if the pipeline is using Java Native Interface (JNI) to run non-Java code and that code or the JNI bindings contain an error. googclient deliveryattempt attribute key error Your Dataflow job fails with one of the following errors: The request contains an attribute key that is not valid (key=googclient deliveryattempt).
- Bad request When you run a Dataflow job, Cloud Monitoring logs display a series of warnings similar to the following: Unable to update setup work item STEP ID error: generic::invalid argument: Http(400) Bad Request Update range task returned 'invalid argument'.
- If you run into problems with your Dataflow pipeline or job, this page lists error messages that you might see and provides suggestions for how to fix each error.

### Dataflow release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- July 20, 2017 Feature You can now access the Stackdriver error report for your pipeline directly from the Dataflow monitoring interface.
- Change Monitoring changes: Added JOB STATE CANCELLED as a possible state value for Cloud Dataflow jobs in the Monitoring UI and command-line interface.
- December 05, 2023 Feature The Dataflow web-based monitoring interface now includes a dashboard that monitors your Dataflow jobs at the project level.
- February 25, 2019 Feature You can now view system latency and data freshness metrics for your pipeline in the Cloud Dataflow monitoring interface.

