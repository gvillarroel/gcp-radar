---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.849Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Pipeline options in Dataflow SQL UI"
feature_slug: "pipeline-options-in-dataflow-sql-ui"
latest_feature_date: "2020-03-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template"
  - "https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development"
  - "https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines"
  - "https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline"
keywords:
  - "pipeline"
  - "options"
  - "in"
  - "dataflow"
  - "sql"
  - "ui"
  - "the"
  - "lets"
---

# Pipeline options in Dataflow SQL UI

Product: Dataflow
Coverage: LOW

## Step 02 Summary

The Dataflow SQL UI lets users set pipeline execution options.

## Extended Definition

The Dataflow SQL UI lets users set pipeline execution options.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)
- [https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development](https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development)
- [https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines](https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines)
- [https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline)

## Supporting Pages

### "Quickstart: Create a streaming pipeline using a Dataflow template \_|\_\

- URL: [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)
- Source ID: `site-docs-root`
- Final score: 248
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To get the permissions that you need to complete this quickstart, ask your administrator to grant you the following IAM roles on your project: BigQuery User ( roles/bigquery.user ) Dataflow Admin ( roles/dataflow.admin ) Service Account User ( roles/iam.serviceAccountUser ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- To follow step-by-step guidance for this task directly in the Google Cloud console, click Guide me : Guide me Before you begin Complete the following steps before running your pipeline.
- Delete the individual resources If you want to keep the Google Cloud project that you used in this quickstart, then delete the individual resources: Go to the Dataflow Jobs page.
- Create a streaming pipeline using a Dataflow template This quickstart shows you how to create a streaming pipeline using a Google-provided Dataflow template.

### "Develop Apache Beam notebooks with the interactive runner \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development](https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development)
- Source ID: `site-docs-root`
- Final score: 244
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following notebooks are available: Word Count Streaming Word Count Streaming NYC Taxi Ride Data Apache Beam SQL in notebooks with comparisons to pipelines Apache Beam SQL in notebooks with the Dataflow Runner Apache Beam SQL in notebooks Dataflow Word Count Interactive Flink at Scale RunInference Use GPUs with Apache Beam Visualize Data The Tutorials folder contains additional tutorials that explain the fundamentals of Apache Beam.
- PipelineOptions () Set the project to the default project in your current Google Cloud environment. , options . view as ( GoogleCloudOptions ) . project = google . auth . default () Set the Google Cloud region to run Dataflow. options . view as ( GoogleCloudOptions ) . region = 'us-central1' Choose a Cloud Storage location. dataflow gcs location = 'gs://<change me>/dataflow' Set the staging location.
- This location is used to store temporary files or intermediate results before outputting to the sink. options . view as ( GoogleCloudOptions ) . temp location = ' %s /temp' % dataflow gcs location If and only if you are using Apache Beam SDK built from source code, set the SDK location.
- This location is used to stage the Dataflow pipeline and SDK binary. options . view as ( GoogleCloudOptions ) . staging location = ' %s /staging' % dataflow gcs location Set the temporary location.

### Develop and test Dataflow pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines](https://docs.cloud.google.com/dataflow/docs/guides/develop-and-test-pipelines)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you run the pipeline asynchronously, you can use the returned PipelineResult instance to cancel execution of the pipeline, as shown in the following code example: public interface StreamingIntegrationTestOptions extends DirectOptions , StreamingOptions , MyOtherPipelineOptions { ... } @Rule public final transient TestPipeline p = TestPipeline . create (); @Test @Category ( NeedsRunner . class ) public void testNonBlockingPipeline () { StreamingIntegrationTestOptions options = p . getOptions (). as ( StreamingIntegrationOptions . class ); options . setBlockOnRun ( false ); // Set non - blocking pipeline execution options . setStreaming ( true ); // Set streaming mode p . apply (...); // Apply pipeline transformations PipelineResult result = p . run (); // Run the pipeline // Generate input , verify output , etc ... // Later on , cancel the pipeline using the previously returned result . cancel (); } End-to-end tests End-to-end tests verify the correct operation of your end-to-end pipeline by running it on the Dataflow Runner under conditions that closely resemble production.
- By using the Direct Runner to run system integration tests, you quickly verify the integration between your pipeline and other systems without needing to submit a Dataflow job and wait for it to finish.
- Although this page focuses on running pipelines built using the Apache Beam Java SDK, Dataflow also supports Apache Beam pipelines that were developed using Python and Go.
- Builder () . withAverageTemp ( 21 ) . withMaxTemp ( 24 ) . withMinTemp ( 20 ) . build ()); p . run (); } To test windowing behavior, you can also use the Create transform to create elements with timestamps, as shown in the following code snippet: private static final Duration WINDOW DURATION = Duration . standardMinutes ( 3 ); @Rule public final transient TestPipeline p = TestPipeline . create (); @Test @Category ( NeedsRunner . class ) public void testWindowedData () { PCollection<String> input = p . apply ( Create . timestamped ( TimestampedValue . of ( "a" , new Instant ( 0 L )), TimestampedValue . of ( "a" , new Instant ( 0 L )), TimestampedValue . of ( "b" , new Instant ( 0 L )), TimestampedValue . of ( "c" , new Instant ( 0 L )), TimestampedValue . of ( "c" , new Instant ( 0 L ). plus ( WINDOW DURATION ))) . withCoder ( StringUtf8Coder . of ())); PCollection<KV<String , Long >> windowedCount = input . apply ( Window . into ( FixedWindows . of ( WINDOW DURATION ))) . apply ( Count . perElement ()); PAssert . that ( windowedCount ) . containsInAnyOrder ( // Output from first window KV . of ( "a" , 2 L ), KV . of ( "b" , 1 L ), KV . of ( "c" , 1 L ), // Output from second window KV . of ( "c" , 1 L )); p . run (); } Test streaming pipelines Streaming pipelines contain assumptions that define how to handle unbounded data.

### Deploy Dataflow pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In your terminal, run the following command (from your word-count-beam directory): mvn -Pdataflow-runner compile exec:java \ -Dexec.mainClass=org.apache.beam.examples.WordCount \ -Dexec.args="--project= PROJECT ID \ --gcpTempLocation=gs:// BUCKET NAME /temp/ \ --output=gs:// BUCKET NAME /output \ --runner=DataflowRunner \ --region= REGION " Replace the following: PROJECT ID : your Google Cloud project ID BUCKET NAME : the name of your Cloud Storage bucket REGION : a Dataflow region , like us-central1 Python The following example code, taken from the quickstart, shows how to run the WordCount pipeline on Dataflow.
- If you want to override the pipeline validation and launch your job with validation errors, use the following pipeline service option : Java --dataflowServiceOptions = enable preflight validation = false Python --dataflow service options = enable preflight validation = false Go --dataflow service options = enable preflight validation = false Set pipeline options You can control some aspects of how Dataflow runs your job by setting pipeline options in your Apache Beam pipeline code.
- Run your pipeline If you want to learn how to create your first pipeline and deploy it locally and on Dataflow, you can follow one of the Dataflow quickstarts: Run a Java pipeline Run a Python pipeline Run a Go pipeline Run a streaming pipeline from a template --> After you create and test your Apache Beam pipeline, run your pipeline.
- STORAGE BUCKET : the Cloud Storage name that you copied earlier PROJECT ID : the Google Cloud project ID that you copied earlier Go The following example code, taken from the quickstart, shows how to run the WordCount pipeline on Dataflow.

