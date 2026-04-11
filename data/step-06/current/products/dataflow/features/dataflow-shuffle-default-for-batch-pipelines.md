---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.834Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Dataflow Shuffle default for batch pipelines"
feature_slug: "dataflow-shuffle-default-for-batch-pipelines"
latest_feature_date: "2021-05-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices"
  - "https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime"
  - "https://docs.cloud.google.com/dataflow/docs/guides/data-pipelines"
  - "https://docs.cloud.google.com/dataflow/docs/release-notes"
keywords:
  - "dataflow"
  - "shuffle"
  - "default"
  - "for"
  - "batch"
  - "pipelines"
  - "this"
  - "makes"
---

# Dataflow Shuffle default for batch pipelines

Product: Dataflow
Coverage: LOW

## Step 02 Summary

This feature makes Dataflow Shuffle the default execution mode for batch pipelines.

## Extended Definition

This feature makes Dataflow Shuffle the default execution mode for batch pipelines.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices)
- [https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime](https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime)
- [https://docs.cloud.google.com/dataflow/docs/guides/data-pipelines](https://docs.cloud.google.com/dataflow/docs/guides/data-pipelines)
- [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)

## Supporting Pages

### "Best practices for large batch pipelines \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices)
- Source ID: `site-docs-root-2`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Best practices for large batch pipelines Stay organized with collections Save and categorize content based on your preferences.
- This document explains how to minimize the impact of job failures for large batch pipelines.
- Use speculative execution to avoid stragglers For batch pipelines, you can enable speculative execution , a feature to mitigate the impact of slow-running or stuck tasks.
- By default, Dataflow retries these failed tasks four times in batch mode and an unlimited number of times in streaming mode.

### Use Dataflow Prime \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime](https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Feature Dataflow Prime Dataflow Runner v2 Default feature with no option to turn off for batch jobs and optional for streaming jobs Default feature with an option to turn off for batch jobs and optional for streaming jobs Dataflow Shuffle for batch jobs Default feature with an option to turn off Default feature with an option to turn off Streaming Engine for streaming jobs Optional feature for Java pipelines and always on for Python pipelines Optional feature for Java pipelines and always on for Python pipelines since 2.45.0 Horizontal Autoscaling Default feature with option to turn off Default feature with option to turn off Vertical Autoscaling Default feature with option to turn off Not applicable Right fitting Optional feature Optional feature Billing Serverless billing Standard billing What's next Read about Dataflow quotas .
- By default, Dataflow Prime uses Dataflow Shuffle and Dataflow Runner v2 for batch pipelines.
- For supported Apache Beam SDK versions , enable the following flag: Java --dataflowServiceOptions = enable prime Python Apache Beam Python SDK version 2.29.0 or later: --dataflow service options = enable prime Apache Beam Python SDK version 2.21.0 to 2.28.0: --experiments = enable prime Go --dataflow service options = enable prime Disable Dataflow Prime Sometimes, such as with certain Google-provided templates, Dataflow Prime might be enabled by default.
- Java pipelines that meet the following requirements can use the MapState and SetState classes: use Streaming Engine use Apache Beam SDK versions 2.58.0 and later don't use Runner v2 All pipeline options not explicitly mentioned previously or in the feature comparison table work the same for Dataflow and Dataflow Prime.

### Work with Dataflow data pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/data-pipelines](https://docs.cloud.google.com/dataflow/docs/guides/data-pipelines)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Data pipeline roles For Dataflow data pipeline operations to succeed, you need the necessary IAM roles, as follows: You need the appropriate role to perform operations: Datapipelines.admin : Can perform all data pipeline operations Datapipelines.viewer : Can view data pipelines and jobs Datapipelines.invoker : Can invoke a data pipeline job run (this role can be enabled using the API) The service account used by Cloud Scheduler needs to have the roles/iam.serviceAccountUser role, whether the service account is user-specified or the default Compute Engine service account.
- For Worker machine type , the pipeline processes the initial set of files matching the gs:// BUCKET ID /inputs/file01.csv pattern and any additional files matching this pattern that you upload to the inputs/ folder If the size of CSV files exceeds several GB, to avoid possible out-of-memory errors, select a machine type with higher memory than the default 4 vCPU machine type, such as an 8 vCPU high-memory machine type (for example, n4-highmem-8 ).
- Note: You can report Dataflow data pipelines issues and request new features at google-data-pipelines-feedback ." Overview You can use Dataflow data pipelines for the following tasks: Create recurrent job schedules.
- Recurring batch pipelines For an initial analysis of the health of your pipeline, on the Pipeline info page in the Google Cloud console, use the Individual job status and Thread time per step graphs.

### Dataflow release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- May 11, 2021 Feature Dataflow Shuffle is now the default mode for all batch pipelines.
- October 07, 2019 Feature Cloud Dataflow Shuffle and Streaming Engine are now available in two additional regions: us-west1 (Oregon) asia-east1 (Taiwan) September 03, 2019 Feature Automatic hot key detection is now enabled in batch pipelines for Apache Beam SDK 2.15.0 or higher.
- September 15, 2016 Change The default autoscaling ceiling for batch pipelines using the Cloud Dataflow SDK for Java 1.6 or newer has been raised to 10 worker VMs.
- August 18, 2016 Change Autoscaling for batch pipelines using the Cloud Dataflow SDK for Java 1.6 or higher is now being enabled by default.

