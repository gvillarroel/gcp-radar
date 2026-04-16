---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.808Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Cloud Profiler integration"
feature_slug: "cloud-profiler-integration"
latest_feature_date: "2022-02-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/profiling-a-pipeline"
  - "https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines"
  - "https://docs.cloud.google.com/dataflow/docs/guides/monitoring-overview"
keywords:
  - "profiler"
  - "integration"
  - "lets"
  - "you"
  - "profile"
  - "dataflow"
  - "pipelines"
  - "monitor"
---

# Cloud Profiler integration

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Cloud Profiler integration lets you profile Dataflow pipelines to monitor performance.

## Extended Definition

Cloud Profiler integration lets you profile Dataflow pipelines to monitor performance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/profiling-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/profiling-a-pipeline)
- [https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines](https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines)
- [https://docs.cloud.google.com/dataflow/docs/guides/monitoring-overview](https://docs.cloud.google.com/dataflow/docs/guides/monitoring-overview)

## Supporting Pages

### "Monitoring pipeline performance using Cloud Profiler \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/profiling-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/profiling-a-pipeline)
- Source ID: `site-docs-reference-2`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To troubleshoot or monitor pipeline performance, use Dataflow integration with Cloud Profiler to identify the parts of the pipeline code consuming the most resources.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Monitoring pipeline performance using Cloud Profiler Stay organized with collections Save and categorize content based on your preferences.
- If you deploy your pipelines from Dataflow templates and want to enable Cloud Profiler, specify the enable google cloud profiler and enable google cloud heap sampling flags as additional experiments.
- Enable Cloud Profiler for Dataflow pipelines Cloud Profiler is available for Dataflow pipelines written in Apache Beam SDK for Java and Python, version 2.33.0 or later.

### Develop and test Dataflow pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines](https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines)
- Source ID: `site-docs-reference-required-3`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- Like with integration tests using the Direct Runner, you can use PAssert on PCollection objects when you run pipelines using the Dataflow Runner.
- If you run the pipeline asynchronously, you can use the returned PipelineResult instance to cancel execution of the pipeline, as shown in the following code example: public interface StreamingIntegrationTestOptions extends DirectOptions , StreamingOptions , MyOtherPipelineOptions { ... } @Rule public final transient TestPipeline p = TestPipeline . create (); @Test @Category ( NeedsRunner . class ) public void testNonBlockingPipeline () { StreamingIntegrationTestOptions options = p . getOptions (). as ( StreamingIntegrationOptions . class ); options . setBlockOnRun ( false ); // Set non - blocking pipeline execution options . setStreaming ( true ); // Set streaming mode p . apply (...); // Apply pipeline transformations PipelineResult result = p . run (); // Run the pipeline // Generate input , verify output , etc ... // Later on , cancel the pipeline using the previously returned result . cancel (); } End-to-end tests End-to-end tests verify the correct operation of your end-to-end pipeline by running it on the Dataflow Runner under conditions that closely resemble production.
- The end-to-end test uses the Dataflow Runner and a small test dataset to verify that the complete pipeline functions correctly, including its integration with data sources, data sinks, and other external systems.
- By using the Direct Runner to run system integration tests, you quickly verify the integration between your pipeline and other systems without needing to submit a Dataflow job and wait for it to finish.

### Use the Dataflow job monitoring interface \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/monitoring-overview](https://docs.cloud.google.com/dataflow/docs/guides/monitoring-overview)
- Source ID: `site-docs-reference-2`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next Use Cloud Monitoring to create alerts and view Dataflow metrics, including custom metrics Learn more about building production-ready data pipelines Learn how to troubleshoot your pipeline Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The monitoring interface lets you see and interact with your Dataflow jobs.
- Monitoring interface components The monitoring interface contains the following visualizers and charts: Project monitoring dashboard A dashboard that monitors your Dataflow jobs at the project level.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Use the Dataflow job monitoring interface Stay organized with collections Save and categorize content based on your preferences.

