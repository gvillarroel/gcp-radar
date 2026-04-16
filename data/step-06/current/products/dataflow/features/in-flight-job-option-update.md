---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.775Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "In-flight job option update"
feature_slug: "in-flight-job-option-update"
latest_feature_date: "2023-08-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes"
  - "https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3"
keywords:
  - "flight"
  - "job"
  - "option"
  - "update"
  - "dataflow"
  - "lets"
  - "users"
  - "streaming"
---

# In-flight job option update

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Dataflow lets users update streaming job options without stopping the running job.

## Extended Definition

Dataflow lets users update streaming job options without stopping the running job.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes](https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes)
- [https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines](https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3)

## Supporting Pages

### "Set the pipeline streaming mode \_|\_ Cloud Dataflow \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes](https://docs.cloud.google.com/dataflow/docs/guides/streaming-modes)
- Source ID: `site-docs-reference-2`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Java --dataflowServiceOptions=streaming mode at least once Python --dataflow service options=streaming mode at least once Go --dataflow service options=streaming mode at least once If you don't specify the streaming mode at least once option, then Dataflow uses exactly-once streaming mode.
- If you set the streaming mode at least once option, Dataflow automatically enables Streaming Engine with resource-based billing .
- Google-provided Dataflow templates automatically enable this option when you use at-least-once streaming.
- REST Use the additionalExperiments field in the FlexTemplateRuntimeEnvironment (Flex templates) or RuntimeEnvironment (classic templates) object. { addi t io nal Experime nts : [ "streaming mode at least once" ] ... } Custom templates If you create a custom template that supports at-least-once processing, add the following top-level fields to the template metadata file: { "streaming" : true , "supportsAtLeastOnce" : true , "supportsExactlyOnce" : true , "defaultStreamingMode" : "AT LEAST ONCE" } These metadata fields enable users to select the streaming mode when deploying the template in the Google Cloud console.

### Develop and test Dataflow pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines](https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines)
- Source ID: `site-docs-reference-required-3`
- Final score: 119
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you run the pipeline asynchronously, you can use the returned PipelineResult instance to cancel execution of the pipeline, as shown in the following code example: public interface StreamingIntegrationTestOptions extends DirectOptions , StreamingOptions , MyOtherPipelineOptions { ... } @Rule public final transient TestPipeline p = TestPipeline . create (); @Test @Category ( NeedsRunner . class ) public void testNonBlockingPipeline () { StreamingIntegrationTestOptions options = p . getOptions (). as ( StreamingIntegrationOptions . class ); options . setBlockOnRun ( false ); // Set non - blocking pipeline execution options . setStreaming ( true ); // Set streaming mode p . apply (...); // Apply pipeline transformations PipelineResult result = p . run (); // Run the pipeline // Generate input , verify output , etc ... // Later on , cancel the pipeline using the previously returned result . cancel (); } End-to-end tests End-to-end tests verify the correct operation of your end-to-end pipeline by running it on the Dataflow Runner under conditions that closely resemble production.
- For streaming pipelines, you can also run end-to-end tests using generated data, for example, using the Dataflow Streaming Data Generator to emulate production-like data characteristics and volumes.
- For system integration testing of streaming pipelines, you can use the setBlockOnRun method (defined in the DirectOptions interface) to have the Direct Runner run your pipeline asynchronously.
- It's important to test and verify update procedures for streaming pipelines, particularly if you need to coordinate multiple steps, such as when running parallel pipelines to avoid downtime.

### "Package com.google.dataflow.v1beta3 (0.92.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataflow/latest/com.google.dataflow.v1beta3)
- Source ID: `site-java-reference`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Topology Config Global topology of the streaming Dataflow job, including all computations and their sharded locations. com. google. dataflow. v1beta3.
- Stream Location Describes a stream of data, either as input to be processed or as output of a streaming Dataflow job. com. google. dataflow. v1beta3.
- Streaming Stage Location Identifies the location of a streaming computation stage, for stage-to-stage communication. com. google. dataflow. v1beta3.
- Pubsub Location Identifies a pubsub location to use for transferring data into or out of a streaming Dataflow job. com. google. dataflow. v1beta3.

