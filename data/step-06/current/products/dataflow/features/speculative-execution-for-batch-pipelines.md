---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.794Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Speculative execution for batch pipelines"
feature_slug: "speculative-execution-for-batch-pipelines"
latest_feature_date: "2025-11-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices"
  - "https://docs.cloud.google.com/dataflow/docs/release-notes"
  - "https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines"
  - "https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline"
keywords:
  - "speculative"
  - "execution"
  - "for"
  - "batch"
  - "pipelines"
  - "dataflow"
  - "can"
  - "mitigate"
---

# Speculative execution for batch pipelines

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Dataflow can mitigate stragglers in batch pipelines by launching redundant executions of slow-running tasks.

## Extended Definition

Dataflow can mitigate stragglers in batch pipelines by launching redundant executions of slow-running tasks.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices)
- [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- [https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines](https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines)
- [https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline)

## Supporting Pages

### "Best practices for large batch pipelines \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices)
- Source ID: `site-docs-root-2`
- Final score: 220
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use speculative execution to avoid stragglers For batch pipelines, you can enable speculative execution , a feature to mitigate the impact of slow-running or stuck tasks.
- Speculative execution can help pipelines complete faster by providing an alternative execution path for work items that are experiencing delays due to slow worker machines or other transient issues such as nondeterministic bugs, resource throttling, or connectivity issues.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Best practices for large batch pipelines Stay organized with collections Save and categorize content based on your preferences.
- Limitations and considerations Before enabling speculative execution, consider the following: Streaming pipelines: Speculative execution is not supported for streaming pipelines.

### Dataflow release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- November 21, 2025 Feature Dataflow now supports speculative execution for batch pipelines.
- March 17, 2022 Feature Dataflow now supports the following Google-provided templates in GA: Pub/Sub Subscription to BigQuery Pub/Sub Topic to BigQuery Pub/Sub Avro to BigQuery Pub/Sub Proto to BigQuery Pub/Sub to Pub/Sub Pub/Sub to Cloud Storage Avro Pub/Sub to Cloud Storage Text Cloud Storage Text to BigQuery (Stream) Cloud Storage Text to Pub/Sub (Stream) Change Data Capture to BigQuery (Stream) Apache Kafka to BigQuery BigQuery export to Parquet (via Storage API) Firestore to Cloud Storage Text Cloud Spanner to Cloud Storage Text Cloud Storage Text to BigQuery Cloud Storage Text to Firestore Cloud Storage Text to Pub/Sub (Batch) Apache Cassandra to Bigtable Datastream to Cloud Spanner File Format Conversion Bulk Compress Cloud Storage Files Bulk Decompress Cloud Storage Files Firestore Bulk Delete Streaming Data Generator to Pub/Sub, BigQuery, and Cloud Storage March 04, 2022 Feature You can now use the Apache Beam SDK for Go to create batch Dataflow pipelines .
- July 11, 2022 Feature You can use the Apache Beam SDK for Go to create batch and streaming Dataflow pipelines .
- October 07, 2019 Feature Cloud Dataflow Shuffle and Streaming Engine are now available in two additional regions: us-west1 (Oregon) asia-east1 (Taiwan) September 03, 2019 Feature Automatic hot key detection is now enabled in batch pipelines for Apache Beam SDK 2.15.0 or higher.

### Develop and test Dataflow pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines](https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- If you run the pipeline asynchronously, you can use the returned PipelineResult instance to cancel execution of the pipeline, as shown in the following code example: public interface StreamingIntegrationTestOptions extends DirectOptions , StreamingOptions , MyOtherPipelineOptions { ... } @Rule public final transient TestPipeline p = TestPipeline . create (); @Test @Category ( NeedsRunner . class ) public void testNonBlockingPipeline () { StreamingIntegrationTestOptions options = p . getOptions (). as ( StreamingIntegrationOptions . class ); options . setBlockOnRun ( false ); // Set non - blocking pipeline execution options . setStreaming ( true ); // Set streaming mode p . apply (...); // Apply pipeline transformations PipelineResult result = p . run (); // Run the pipeline // Generate input , verify output , etc ... // Later on , cancel the pipeline using the previously returned result . cancel (); } End-to-end tests End-to-end tests verify the correct operation of your end-to-end pipeline by running it on the Dataflow Runner under conditions that closely resemble production.
- For streaming pipelines, you can also run end-to-end tests using generated data, for example, using the Dataflow Streaming Data Generator to emulate production-like data characteristics and volumes.
- Builder () . withAverageTemp ( 21 ) . withMaxTemp ( 24 ) . withMinTemp ( 20 ) . build ()); p . run (); } To test windowing behavior, you can also use the Create transform to create elements with timestamps, as shown in the following code snippet: private static final Duration WINDOW DURATION = Duration . standardMinutes ( 3 ); @Rule public final transient TestPipeline p = TestPipeline . create (); @Test @Category ( NeedsRunner . class ) public void testWindowedData () { PCollection<String> input = p . apply ( Create . timestamped ( TimestampedValue . of ( "a" , new Instant ( 0 L )), TimestampedValue . of ( "a" , new Instant ( 0 L )), TimestampedValue . of ( "b" , new Instant ( 0 L )), TimestampedValue . of ( "c" , new Instant ( 0 L )), TimestampedValue . of ( "c" , new Instant ( 0 L ). plus ( WINDOW DURATION ))) . withCoder ( StringUtf8Coder . of ())); PCollection<KV<String , Long >> windowedCount = input . apply ( Window . into ( FixedWindows . of ( WINDOW DURATION ))) . apply ( Count . perElement ()); PAssert . that ( windowedCount ) . containsInAnyOrder ( // Output from first window KV . of ( "a" , 2 L ), KV . of ( "b" , 1 L ), KV . of ( "c" , 1 L ), // Output from second window KV . of ( "c" , 1 L )); p . run (); } Test streaming pipelines Streaming pipelines contain assumptions that define how to handle unbounded data.
- You can use TestPipeline on a Apache Beam pipeline runner such as the Direct Runner or the Dataflow Runner to apply assertions on the contents of PCollection objects using PAssert , as shown in the following code snippet of a JUnit test class : @Rule public final transient TestPipeline p = TestPipeline . create (); @Test @Category ( NeedsRunner . class ) public void myPipelineTest () throws Exception { final PCollection<String> pcol = p . apply (...) PAssert . that ( pcol ). containsInAnyOrder (...); p . run (); } Unit tests for individual transforms By factoring your code into reusable transforms, for example, as top-level or static nested classes, you can create targeted tests for different parts of your pipeline.

### Troubleshoot and debug Dataflow pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Detect graph or pipeline construction errors A graph construction error can occur when Dataflow is building the execution graph for your pipeline from the code in your Dataflow program.
- File ".../apache beam/examples/wordcount.runfiles/py/apache beam/examples/wordcount.py", line 73, in <lambda> ValueError: invalid literal for int() with base 10: 'www' Note: The Dataflow service retries failed tasks up to 4 times in batch mode, and an unlimited number of times in streaming mode.
- Dataflow provides real-time feedback about your job, and there is a basic set of steps you can use to check the error messages, logs, and for conditions such as your job's progress having stalled.
- When you select a job, you can view key charts for your pipeline, the execution graph, the Job info panel, and the Logs panel with Job logs , Worker logs , Diagnostics , and Recommendations tabs.

