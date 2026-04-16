---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.842Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Pipeline options in Dataflow SQL UI"
feature_slug: "pipeline-options-in-dataflow-sql-ui"
latest_feature_date: "2020-03-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines"
  - "https://docs.cloud.google.com/dataflow/docs/guides/specifying-exec-params"
  - "https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices"
keywords:
  - "pipeline"
  - "options"
  - "dataflow"
  - "sql"
  - "ui"
  - "lets"
  - "users"
  - "set"
---

# Pipeline options in Dataflow SQL UI

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

The Dataflow SQL UI lets users set pipeline execution options.

## Extended Definition

The Dataflow SQL UI lets users set pipeline execution options.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines](https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines)
- [https://docs.cloud.google.com/dataflow/docs/guides/specifying-exec-params](https://docs.cloud.google.com/dataflow/docs/guides/specifying-exec-params)
- [https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices)

## Supporting Pages

### Develop and test Dataflow pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines](https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines)
- Source ID: `site-docs-reference-required-3`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you run the pipeline asynchronously, you can use the returned PipelineResult instance to cancel execution of the pipeline, as shown in the following code example: public interface StreamingIntegrationTestOptions extends DirectOptions , StreamingOptions , MyOtherPipelineOptions { ... } @Rule public final transient TestPipeline p = TestPipeline . create (); @Test @Category ( NeedsRunner . class ) public void testNonBlockingPipeline () { StreamingIntegrationTestOptions options = p . getOptions (). as ( StreamingIntegrationOptions . class ); options . setBlockOnRun ( false ); // Set non - blocking pipeline execution options . setStreaming ( true ); // Set streaming mode p . apply (...); // Apply pipeline transformations PipelineResult result = p . run (); // Run the pipeline // Generate input , verify output , etc ... // Later on , cancel the pipeline using the previously returned result . cancel (); } End-to-end tests End-to-end tests verify the correct operation of your end-to-end pipeline by running it on the Dataflow Runner under conditions that closely resemble production.
- You can use TestPipeline on a Apache Beam pipeline runner such as the Direct Runner or the Dataflow Runner to apply assertions on the contents of PCollection objects using PAssert , as shown in the following code snippet of a JUnit test class : @Rule public final transient TestPipeline p = TestPipeline . create (); @Test @Category ( NeedsRunner . class ) public void myPipelineTest () throws Exception { final PCollection<String> pcol = p . apply (...) PAssert . that ( pcol ). containsInAnyOrder (...); p . run (); } Unit tests for individual transforms By factoring your code into reusable transforms, for example, as top-level or static nested classes, you can create targeted tests for different parts of your pipeline.
- PipelineOptions options = PipelineOptionsFactory.create(); Pipeline p = Pipeline.create(options) PCollection<Integer> output = p.apply("Read from text", TextIO.Read.from(...)) .apply("Split words", ParDo.of(new DoFn() { // Untestable anonymous transform 1 })) .apply("Generate anagrams", ParDo.of(new DoFn() { // Untestable anonymous transform 2 })) .apply("Count words", Count.perElement()); Compare the previous example with the following one, where the anonymous inner classes are refactored into named concrete DoFn subclasses.
- PipelineOptions options = PipelineOptionsFactory.create(); Pipeline p = Pipeline.create(options) PCollection<Integer> output = p.apply("Read from text", TextIO.Read.from(...)) .apply("Split words", ParDo.of(new SplitIntoWordsFn())) .apply("Generate anagrams", ParDo.of(new GenerateAnagramsFn())) .apply("Count words", Count.perElement()); Testing each DoFn subclass is similar to unit testing a batch pipeline that contains a single transform.

### "Best practices for large batch pipelines \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices)
- Source ID: `site-docs-reference-2`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- There are two modes available: Java --dataflowServiceOptions= map task backup mode=ON --dataflowServiceOptions= map task backup mode=CAUTIOUS Python / Go --dataflow service options= map task backup mode=ON --dataflow service options= map task backup mode=CAUTIOUS In ON mode, a backup task is scheduled if the original task's expected runtime is about 20% longer than a new task's expected runtime.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Best practices for large batch pipelines Stay organized with collections Save and categorize content based on your preferences.
- If your pipeline performs much worse on a task on Dataflow than it does locally, examine your pipeline logic to figure out why.
- If your pipeline has any Dataflow recommendations, follow them to improve performance.

### Set Dataflow pipeline options \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/specifying-exec-params](https://docs.cloud.google.com/dataflow/docs/guides/specifying-exec-params)
- Source ID: `site-docs-reference-2`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Python You set the description and default value as follows: from apache beam.options.pipeline options import PipelineOptions class MyOptions ( PipelineOptions ): @classmethod def add argparse args ( cls , parser ): parser . add argument ( '--input' , default = 'gs://dataflow-samples/shakespeare/kinglear.txt' , help = 'The file path for the input text to process.' ) parser . add argument ( '--output' , required = True , help = 'The path prefix for output files.' ) Go You set the description and default value as follows: var ( input = flag .
- For more information about regions, check: https://cloud.google.com/dataflow/docs/concepts/regional-endpoints beam options = PipelineOptions ( beam args , runner = 'DataflowRunner' , project = 'my-project-id' , job name = 'unique-job-name' , temp location = 'gs://my-bucket/temp' , region = 'us-central1' ) Note: Repeatable options like dataflow service options or experiments must be specified as a list of string(s). e.g. dataflow service options=['enable prime'] Create the Pipeline with the specified options. with beam .
- ArgumentParser () parser . add argument ( '--input-file' , default = 'gs://dataflow-samples/shakespeare/kinglear.txt' , help = 'The file path for the input text to process.' ) parser . add argument ( '--output-path' , required = True , help = 'The path prefix for output files.' ) args , beam args = parser . parse known args () Create the Pipeline with remaining arguments. beam options = PipelineOptions ( beam args ) with beam .
- DataflowPipelineOptions options = PipelineOptionsFactory . as ( DataflowPipelineOptions . class ); // For cloud execution, set the Google Cloud project, staging location, // and set DataflowRunner. options . setProject ( "my-project-id" ); options . setStagingLocation ( "gs://my-bucket/binaries" ); options . setRunner ( DataflowRunner . class ); // Create the Pipeline with the specified options.

