---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.754Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Speculative execution for batch pipelines"
feature_slug: "speculative-execution-for-batch-pipelines"
latest_feature_date: "2025-11-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices"
  - "https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines"
  - "https://docs.cloud.google.com/dataflow/docs/guides/data-pipelines"
keywords:
  - "speculative"
  - "execution"
  - "batch"
  - "pipelines"
  - "dataflow"
  - "can"
  - "mitigate"
  - "stragglers"
---

# Speculative execution for batch pipelines

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Dataflow can mitigate stragglers in batch pipelines by launching redundant executions of slow-running tasks.

## Extended Definition

Dataflow can mitigate stragglers in batch pipelines by launching redundant executions of slow-running tasks.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices)
- [https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines](https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines)
- [https://docs.cloud.google.com/dataflow/docs/guides/data-pipelines](https://docs.cloud.google.com/dataflow/docs/guides/data-pipelines)

## Supporting Pages

### "Best practices for large batch pipelines \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices)
- Source ID: `site-docs-reference-2`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use speculative execution to avoid stragglers For batch pipelines, you can enable speculative execution , a feature to mitigate the impact of slow-running or stuck tasks.
- Speculative execution can help pipelines complete faster by providing an alternative execution path for work items that are experiencing delays due to slow worker machines or other transient issues such as nondeterministic bugs, resource throttling, or connectivity issues.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Best practices for large batch pipelines Stay organized with collections Save and categorize content based on your preferences.
- Limitations and considerations Before enabling speculative execution, consider the following: Streaming pipelines: Speculative execution is not supported for streaming pipelines.

### Develop and test Dataflow pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines](https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines)
- Source ID: `site-docs-reference-required-3`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you run the pipeline asynchronously, you can use the returned PipelineResult instance to cancel execution of the pipeline, as shown in the following code example: public interface StreamingIntegrationTestOptions extends DirectOptions , StreamingOptions , MyOtherPipelineOptions { ... } @Rule public final transient TestPipeline p = TestPipeline . create (); @Test @Category ( NeedsRunner . class ) public void testNonBlockingPipeline () { StreamingIntegrationTestOptions options = p . getOptions (). as ( StreamingIntegrationOptions . class ); options . setBlockOnRun ( false ); // Set non - blocking pipeline execution options . setStreaming ( true ); // Set streaming mode p . apply (...); // Apply pipeline transformations PipelineResult result = p . run (); // Run the pipeline // Generate input , verify output , etc ... // Later on , cancel the pipeline using the previously returned result . cancel (); } End-to-end tests End-to-end tests verify the correct operation of your end-to-end pipeline by running it on the Dataflow Runner under conditions that closely resemble production.
- Differences in end-to-end tests for batch and streaming pipelines Before you run a full end-to-end test against a large test dataset, you might want to run a test with a smaller percentage of the test data (such as one percent) and verify expected behavior in a shorter amount of time.
- For streaming pipelines, you can also run end-to-end tests using generated data, for example, using the Dataflow Streaming Data Generator to emulate production-like data characteristics and volumes.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Develop and test Dataflow pipelines Stay organized with collections Save and categorize content based on your preferences.

### Work with Dataflow data pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/data-pipelines](https://docs.cloud.google.com/dataflow/docs/guides/data-pipelines)
- Source ID: `site-docs-reference-required-3`
- Final score: 122
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can also run a batch pipeline on demand using the Run button in the Dataflow Pipelines console.
- Types of data pipelines Dataflow has two data pipeline types, streaming and batch.
- Data pipeline roles For Dataflow data pipeline operations to succeed, you need the necessary IAM roles, as follows: You need the appropriate role to perform operations: Datapipelines.admin : Can perform all data pipeline operations Datapipelines.viewer : Can view data pipelines and jobs Datapipelines.invoker : Can invoke a data pipeline job run (this role can be enabled using the API) The service account used by Cloud Scheduler needs to have the roles/iam.serviceAccountUser role, whether the service account is user-specified or the default Compute Engine service account.
- Create a data pipeline You can create a Dataflow data pipeline in two ways: Import a job , or Create a data pipeline The data pipelines setup page: When you first access the Dataflow pipelines feature in the Google Cloud console, a setup page opens.

