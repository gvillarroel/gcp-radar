---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.813Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Data sampling"
feature_slug: "data-sampling"
latest_feature_date: "2023-05-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/data-sampling"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3"
  - "https://docs.cloud.google.com/dataflow/docs/release-notes"
  - "https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines"
keywords:
  - "sampling"
  - "dataflow"
  - "lets"
  - "users"
  - "observe"
  - "the"
  - "at"
  - "each"
---

# Data sampling

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Dataflow data sampling lets users observe the data at each step of a pipeline.

## Extended Definition

Dataflow data sampling lets users observe the data at each step of a pipeline.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/data-sampling](https://docs.cloud.google.com/dataflow/docs/guides/data-sampling)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3)
- [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- [https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines](https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines)

## Supporting Pages

### "Use data sampling to observe pipeline data \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/data-sampling](https://docs.cloud.google.com/dataflow/docs/guides/data-sampling)
- Source ID: `site-docs-root`
- Final score: 272
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Data sampling lets you observe the data at each step of a Dataflow pipeline.
- When running a Dataflow template, use the additional-experiments flag to enable data sampling: --additional-experiments=enable data sampling When periodic sampling is enabled, Dataflow collects samples from each PCollection in the job graph.
- When running a Dataflow template, use the additional-experiments flag to disable exception sampling: --additional-experiments=disable always on exception sampling Security considerations Dataflow writes the sampled data to a Cloud Storage bucket that you create and manage.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Use data sampling to observe pipeline data Stay organized with collections Save and categorize content based on your preferences.

### "Package com.google.dataflow.v1beta3 (0.92.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3)
- Source ID: `site-java-reference`
- Final score: 220
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- MetricsV1 Beta3 Grpc The Dataflow Metrics API lets you monitor the progress of Dataflow jobs. com. google. dataflow. v1beta3.
- Async Service The Dataflow Metrics API lets you monitor the progress of Dataflow jobs. com. google. dataflow. v1beta3.
- MetricsV1 Beta3 Client Service Description: The Dataflow Metrics API lets you monitor the progress of Dataflow jobs.
- Data Sampling Behavior The following enum defines what to sample for a running job. com. google. dataflow. v1beta3.

### Dataflow release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Data sampling lets you observe the data at each step of a pipeline.
- April 21, 2023 Feature Dataflow ML now supports the Automatic Model Refresh feature, which lets you update your machine learning model without stopping your Apache Beam pipeline.
- April 11, 2017 Change The Cloud Dataflow service will now automatically shut down a streaming job if all steps have reached the maximum watermark.
- Cloud Dataflow SQL lets you use SQL queries to develop and run Cloud Dataflow jobs from the BigQuery web UI.

### Develop and test Dataflow pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines](https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Data sampling To observe the data at each step of a Dataflow pipeline, enable data sampling during testing.
- If you run the pipeline asynchronously, you can use the returned PipelineResult instance to cancel execution of the pipeline, as shown in the following code example: public interface StreamingIntegrationTestOptions extends DirectOptions , StreamingOptions , MyOtherPipelineOptions { ... } @Rule public final transient TestPipeline p = TestPipeline . create (); @Test @Category ( NeedsRunner . class ) public void testNonBlockingPipeline () { StreamingIntegrationTestOptions options = p . getOptions (). as ( StreamingIntegrationOptions . class ); options . setBlockOnRun ( false ); // Set non - blocking pipeline execution options . setStreaming ( true ); // Set streaming mode p . apply (...); // Apply pipeline transformations PipelineResult result = p . run (); // Run the pipeline // Generate input , verify output , etc ... // Later on , cancel the pipeline using the previously returned result . cancel (); } End-to-end tests End-to-end tests verify the correct operation of your end-to-end pipeline by running it on the Dataflow Runner under conditions that closely resemble production.
- You can use TestPipeline on a Apache Beam pipeline runner such as the Direct Runner or the Dataflow Runner to apply assertions on the contents of PCollection objects using PAssert , as shown in the following code snippet of a JUnit test class : @Rule public final transient TestPipeline p = TestPipeline . create (); @Test @Category ( NeedsRunner . class ) public void myPipelineTest () throws Exception { final PCollection<String> pcol = p . apply (...) PAssert . that ( pcol ). containsInAnyOrder (...); p . run (); } Unit tests for individual transforms By factoring your code into reusable transforms, for example, as top-level or static nested classes, you can create targeted tests for different parts of your pipeline.
- The end-to-end test uses the Dataflow Runner and a small test dataset to verify that the complete pipeline functions correctly, including its integration with data sources, data sinks, and other external systems.

