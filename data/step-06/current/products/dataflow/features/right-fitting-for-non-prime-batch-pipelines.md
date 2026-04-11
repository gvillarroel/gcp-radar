---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.802Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Right fitting for non-Prime batch pipelines"
feature_slug: "right-fitting-for-non-prime-batch-pipelines"
latest_feature_date: "2024-03-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime"
  - "https://docs.cloud.google.com/dataflow/docs/release-notes"
  - "https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices"
  - "https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines"
keywords:
  - "right"
  - "fitting"
  - "for"
  - "non"
  - "prime"
  - "batch"
  - "pipelines"
  - "dataflow"
---

# Right fitting for non-Prime batch pipelines

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Dataflow right fitting is supported for non-Prime batch pipelines.

## Extended Definition

Dataflow right fitting is supported for non-Prime batch pipelines.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime](https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime)
- [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- [https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices)
- [https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines](https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines)

## Supporting Pages

### Use Dataflow Prime \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime](https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Feature Dataflow Prime Dataflow Runner v2 Default feature with no option to turn off for batch jobs and optional for streaming jobs Default feature with an option to turn off for batch jobs and optional for streaming jobs Dataflow Shuffle for batch jobs Default feature with an option to turn off Default feature with an option to turn off Streaming Engine for streaming jobs Optional feature for Java pipelines and always on for Python pipelines Optional feature for Java pipelines and always on for Python pipelines since 2.45.0 Horizontal Autoscaling Default feature with option to turn off Default feature with option to turn off Vertical Autoscaling Default feature with option to turn off Not applicable Right fitting Optional feature Optional feature Billing Serverless billing Standard billing What's next Read about Dataflow quotas .
- The features Job Visualizer, Smart Recommendations, and Data Pipelines are also supported for non-Dataflow Prime jobs.
- By default, Dataflow Prime uses Dataflow Shuffle and Dataflow Runner v2 for batch pipelines.
- Java pipelines that meet the following requirements can use the MapState and SetState classes: use Streaming Engine use Apache Beam SDK versions 2.58.0 and later don't use Runner v2 All pipeline options not explicitly mentioned previously or in the feature comparison table work the same for Dataflow and Dataflow Prime.

### Dataflow release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- April 26, 2024 Feature The following Dataflow templates now support user-defined functions (UDFs) written in Python: Cloud Storage Text to BigQuery Cloud Storage Text to BigQuery (Stream) Pub/Sub to BigQuery Pub/Sub Proto to BigQuery April 05, 2024 Feature The following Dataflow templates are generally available ( GA ): Google Cloud to Neo4j Pub/Sub to Datadog March 28, 2024 Feature The Dataflow right fitting feature is now supported by non-Prime batch pipelines.
- Previously, right fitting was only supported for batch pipelines.
- March 17, 2022 Feature Dataflow now supports the following Google-provided templates in GA: Pub/Sub Subscription to BigQuery Pub/Sub Topic to BigQuery Pub/Sub Avro to BigQuery Pub/Sub Proto to BigQuery Pub/Sub to Pub/Sub Pub/Sub to Cloud Storage Avro Pub/Sub to Cloud Storage Text Cloud Storage Text to BigQuery (Stream) Cloud Storage Text to Pub/Sub (Stream) Change Data Capture to BigQuery (Stream) Apache Kafka to BigQuery BigQuery export to Parquet (via Storage API) Firestore to Cloud Storage Text Cloud Spanner to Cloud Storage Text Cloud Storage Text to BigQuery Cloud Storage Text to Firestore Cloud Storage Text to Pub/Sub (Batch) Apache Cassandra to Bigtable Datastream to Cloud Spanner File Format Conversion Bulk Compress Cloud Storage Files Bulk Decompress Cloud Storage Files Firestore Bulk Delete Streaming Data Generator to Pub/Sub, BigQuery, and Cloud Storage March 04, 2022 Feature You can now use the Apache Beam SDK for Go to create batch Dataflow pipelines .
- October 07, 2019 Feature Cloud Dataflow Shuffle and Streaming Engine are now available in two additional regions: us-west1 (Oregon) asia-east1 (Taiwan) September 03, 2019 Feature Automatic hot key detection is now enabled in batch pipelines for Apache Beam SDK 2.15.0 or higher.

### "Best practices for large batch pipelines \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices)
- Source ID: `site-docs-root-2`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Best practices for large batch pipelines Stay organized with collections Save and categorize content based on your preferences.
- Speculative execution can help pipelines complete faster by providing an alternative execution path for work items that are experiencing delays due to slow worker machines or other transient issues such as nondeterministic bugs, resource throttling, or connectivity issues.
- Use speculative execution to avoid stragglers For batch pipelines, you can enable speculative execution , a feature to mitigate the impact of slow-running or stuck tasks.
- This document explains how to minimize the impact of job failures for large batch pipelines.

### Develop and test Dataflow pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines](https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- If you run the pipeline asynchronously, you can use the returned PipelineResult instance to cancel execution of the pipeline, as shown in the following code example: public interface StreamingIntegrationTestOptions extends DirectOptions , StreamingOptions , MyOtherPipelineOptions { ... } @Rule public final transient TestPipeline p = TestPipeline . create (); @Test @Category ( NeedsRunner . class ) public void testNonBlockingPipeline () { StreamingIntegrationTestOptions options = p . getOptions (). as ( StreamingIntegrationOptions . class ); options . setBlockOnRun ( false ); // Set non - blocking pipeline execution options . setStreaming ( true ); // Set streaming mode p . apply (...); // Apply pipeline transformations PipelineResult result = p . run (); // Run the pipeline // Generate input , verify output , etc ... // Later on , cancel the pipeline using the previously returned result . cancel (); } End-to-end tests End-to-end tests verify the correct operation of your end-to-end pipeline by running it on the Dataflow Runner under conditions that closely resemble production.
- Differences in end-to-end tests for batch and streaming pipelines Before you run a full end-to-end test against a large test dataset, you might want to run a test with a smaller percentage of the test data (such as one percent) and verify expected behavior in a shorter amount of time.
- For streaming pipelines, you can also run end-to-end tests using generated data, for example, using the Dataflow Streaming Data Generator to emulate production-like data characteristics and volumes.
- Test batch pipelines For batch pipelines, use the Create transform to create a PCollection object of your input test data out of a standard in-memory collection, such as a Java List object.

