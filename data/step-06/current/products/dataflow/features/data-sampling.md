---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.779Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Data sampling"
feature_slug: "data-sampling"
latest_feature_date: "2023-05-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/data-sampling"
  - "https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3"
keywords:
  - "sampling"
  - "dataflow"
  - "lets"
  - "users"
  - "observe"
  - "each"
  - "step"
  - "pipeline"
---

# Data sampling

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Dataflow data sampling lets users observe the data at each step of a pipeline.

## Extended Definition

Dataflow data sampling lets users observe the data at each step of a pipeline.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/data-sampling](https://docs.cloud.google.com/dataflow/docs/guides/data-sampling)
- [https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines](https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3)

## Supporting Pages

### "Use data sampling to observe pipeline data \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/data-sampling](https://docs.cloud.google.com/dataflow/docs/guides/data-sampling)
- Source ID: `site-docs-reference-2`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data sampling lets you observe the data at each step of a Dataflow pipeline.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Use data sampling to observe pipeline data Stay organized with collections Save and categorize content based on your preferences.
- When running a Dataflow template, use the additional-experiments flag to enable data sampling: --additional-experiments=enable data sampling When periodic sampling is enabled, Dataflow collects samples from each PCollection in the job graph.
- With this type of sampling, Dataflow collects samples if a pipeline throws an exception.

### Develop and test Dataflow pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines](https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines)
- Source ID: `site-docs-reference-required-3`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data sampling To observe the data at each step of a Dataflow pipeline, enable data sampling during testing.
- For example, ad hoc pipeline execution lets developers do the following: Observe the effect of code changes on scaling behavior.
- If you run the pipeline asynchronously, you can use the returned PipelineResult instance to cancel execution of the pipeline, as shown in the following code example: public interface StreamingIntegrationTestOptions extends DirectOptions , StreamingOptions , MyOtherPipelineOptions { ... } @Rule public final transient TestPipeline p = TestPipeline . create (); @Test @Category ( NeedsRunner . class ) public void testNonBlockingPipeline () { StreamingIntegrationTestOptions options = p . getOptions (). as ( StreamingIntegrationOptions . class ); options . setBlockOnRun ( false ); // Set non - blocking pipeline execution options . setStreaming ( true ); // Set streaming mode p . apply (...); // Apply pipeline transformations PipelineResult result = p . run (); // Run the pipeline // Generate input , verify output , etc ... // Later on , cancel the pipeline using the previously returned result . cancel (); } End-to-end tests End-to-end tests verify the correct operation of your end-to-end pipeline by running it on the Dataflow Runner under conditions that closely resemble production.
- You can use TestPipeline on a Apache Beam pipeline runner such as the Direct Runner or the Dataflow Runner to apply assertions on the contents of PCollection objects using PAssert , as shown in the following code snippet of a JUnit test class : @Rule public final transient TestPipeline p = TestPipeline . create (); @Test @Category ( NeedsRunner . class ) public void myPipelineTest () throws Exception { final PCollection<String> pcol = p . apply (...) PAssert . that ( pcol ). containsInAnyOrder (...); p . run (); } Unit tests for individual transforms By factoring your code into reusable transforms, for example, as top-level or static nested classes, you can create targeted tests for different parts of your pipeline.

### "Package com.google.dataflow.v1beta3 (0.92.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3)
- Source ID: `site-java-reference`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A job consists of multiple steps, each of which performs some com. google. dataflow. v1beta3.
- A job consists of multiple steps, each of which performs some com. google. dataflow. v1beta3.
- Package The packages that must be installed in order for a worker to run the steps of the Cloud Dataflow job that will be assigned to its worker pool. com. google. dataflow. v1beta3.
- Builder The packages that must be installed in order for a worker to run the steps of the Cloud Dataflow job that will be assigned to its worker pool. com. google. dataflow. v1beta3.

