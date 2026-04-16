---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.818Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Dataflow snapshots"
feature_slug: "dataflow-snapshots"
latest_feature_date: "2021-06-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/stopping-a-pipeline"
  - "https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development"
  - "https://docs.cloud.google.com/dataflow/docs/guides/logging"
keywords:
  - "dataflow"
  - "snapshots"
  - "let"
  - "you"
  - "capture"
  - "pipeline"
  - "state"
  - "later"
---

# Dataflow snapshots

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Dataflow snapshots let you capture pipeline state for later recovery or analysis; Dataflow snapshots let you capture pipeline state for later recovery or analysis.

## Extended Definition

Dataflow snapshots let you capture pipeline state for later recovery or analysis; Dataflow snapshots let you capture pipeline state for later recovery or analysis.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/stopping-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/stopping-a-pipeline)
- [https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development](https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development)
- [https://docs.cloud.google.com/dataflow/docs/guides/logging](https://docs.cloud.google.com/dataflow/docs/guides/logging)

## Supporting Pages

### Stop a running Dataflow pipeline \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/stopping-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/stopping-a-pipeline)
- Source ID: `site-docs-reference-2`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dataflow snapshots save the state of a streaming pipeline, so you can start a new version of your Dataflow job without losing state.
- Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud dataflow jobs archive JOB ID --region = REGION ID Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud dataflow jobs archive JOB ID --region = REGION ID Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud dataflow jobs archive JOB ID --region = REGION ID You should receive a response similar to the following: Archived job [ JOB ID ]. createTime: ' 2025-06-29T11:00:02.432552Z ' currentState: JOB STATE DONE currentStateTime: ' 2025-06-29T11:04:25.125921Z ' id: JOB ID jobMetadata: userDisplayProperties: archived: 'true' projectId: PROJECT ID startTime: ' 2025-06-29T11:00:02.432552Z ' View and restore archived jobs Follow these steps to view archived jobs or to restore archived jobs to the main jobs list on the Dataflow Jobs page.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PUT -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://dataflow.googleapis.com/v1b3/projects/ PROJECT ID /locations/ REGION /jobs/ JOB ID /?updateMask=job metadata.user display properties.archived" Select-Object -Expand Content You should receive a JSON response similar to the following: { "id": " JOB ID ", "projectId": " PROJECT ID ", "currentState": "JOB STATE DONE", "currentStateTime": " 2025-05-20T20:54:41.651442Z ", "createTime": " 2025-05-20T20:51:06.031248Z ", "jobMetadata": { "userDisplayProperties": { "archived": "false" } }, "startTime": " 2025-05-20T20:51:06.031248Z " } What's next Explore the Dataflow REST API .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PUT -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://dataflow.googleapis.com/v1b3/projects/ PROJECT ID /locations/ REGION /jobs/ JOB ID /?updateMask=job metadata.user display properties.archived" Select-Object -Expand Content You should receive a JSON response similar to the following: { "id": " JOB ID ", "projectId": " PROJECT ID ", "currentState": "JOB STATE DONE", "currentStateTime": " 2025-05-20T20:54:41.651442Z ", "createTime": " 2025-05-20T20:51:06.031248Z ", "jobMetadata": { "userDisplayProperties": { "archived": "true" } }, "startTime": " 2025-05-20T20:51:06.031248Z " } gcloud This command archives a single job.

### "Develop Apache Beam notebooks with the interactive runner \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development](https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development)
- Source ID: `site-docs-reference-2`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Add the following import statement: from apache beam.runners import DataflowRunner Pass in your pipeline options .
- Apache Beam is installed on your notebook instance, so include the interactive runner and interactive beam modules in your notebook. import apache beam as beam from apache beam.runners.interactive.interactive runner import InteractiveRunner import apache beam.runners.interactive.interactive beam as ib If your notebook uses other Google APIs, add the following import statements: from apache beam.options import pipeline options from apache beam.options.pipeline options import GoogleCloudOptions import google.auth Set interactivity options The following line sets the amount of time the InteractiveRunner records data from an unbounded source.
- Leave the parameter list empty to return the recording status of all pipelines. ib . recordings . describe ( p ) The describe() method provides the following details: Total size (in bytes) of all of the recordings for the pipeline on disk Start time of when the background recording job started (in seconds from Unix epoch) Current pipeline status of the background recording job Python variable for the pipeline Launch Dataflow jobs from a pipeline created in your notebook Optional: Before using your notebook to run Dataflow jobs, restart the kernel, rerun all cells, and verify the output.
- The following notebooks are available: Word Count Streaming Word Count Streaming NYC Taxi Ride Data Apache Beam SQL in notebooks with comparisons to pipelines Apache Beam SQL in notebooks with the Dataflow Runner Apache Beam SQL in notebooks Dataflow Word Count Interactive Flink at Scale RunInference Use GPUs with Apache Beam Visualize Data The Tutorials folder contains additional tutorials that explain the fundamentals of Apache Beam.

### Work with pipeline logs \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/logging](https://docs.cloud.google.com/dataflow/docs/guides/logging)
- Source ID: `site-docs-root-2`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Dataflow MDC integration When you enable MDC for your Dataflow pipeline, the Dataflow runner automatically captures the MDC context at the time a log message is generated and forwards it to Logging.
- Enable and use MDC To enable MDC, add the following pipeline option when you launch your job: --logMdc = true The following code sample shows how to use MDC to add a messageId to the logs of a Dataflow job that reads messages from Pub/Sub. import org.apache.beam.sdk.Pipeline ; import org.apache.beam.sdk.io.gcp.pubsub.PubsubMessage ; import org.apache.beam.sdk.io.gcp.pubsub.PubsubIO ; import org.apache.beam.sdk.options.Description ; import org.apache.beam.sdk.options.PipelineOptionsFactory ; import org.apache.beam.sdk.options.SdkHarnessOptions ; import org.apache.beam.sdk.transforms.DoFn ; import org.apache.beam.sdk.transforms.ParDo ; import org.slf4j.Logger ; import org.slf4j.LoggerFactory ; import org.slf4j.MDC ; public class SimpleDataflowJobMDC { public interface SimpleDataflowJobOptions extends SdkHarnessOptions { @Description ( "The Pub/Sub subscription to read from." ) String getInputSubscription (); void setInputSubscription ( String value ); } public static class MessageReaderFn extends DoFn<PubsubMessage , Void > { private transient Logger logger ; @Setup public void setup () { logger = LoggerFactory . getLogger ( MessageReaderFn . class ); } @ProcessElement public void processElement ( ProcessContext c ) { PubsubMessage message = c . element (); String messageId = message . getMessageId (); try ( MDC .
- MDCCloseable ignored = MDC . putCloseable ( "messageId" , messageId )) { String payload = new String ( message . getPayload ()); logger . info ( "Received message with payload: " + payload ); // This is the example task logger . info ( "Executing example task..." ); } catch ( Exception e ) { logger . info ( "failure" ); } } } public static void main ( String [] args ) { SimpleDataflowJobOptions options = PipelineOptionsFactory . fromArgs ( args ). withValidation (). as ( SimpleDataflowJobOptions . class ); // options.setRunner(DirectRunner.class); options . setLogMdc ( true ); Pipeline p = Pipeline . create ( options ); p . apply ( "Read Messages from Pub/Sub" , PubsubIO . readMessagesWithAttributes (). fromSubscription ( options . getInputSubscription ())) . apply ( "Process Message" , ParDo . of ( new MessageReaderFn ())); p . run (); } } The following mvn command shows how to execute the pipeline with the --logMdc=true argument: mvn -Pdataflow-runner compile exec:java \ -Dexec.mainClass = com.sample.SimpleDataflowJobMDC \ -Dexec.args = " \ [...] \ --logMdc=true \ [...] Control log volume You can also reduce the volume of logs generated by changing the pipeline log levels .
- The following example uses the WorkerOptions class to programmatically set pipeline logging options that can be overridden from the command line: from apache beam.options.pipeline options import PipelineOptions , WorkerOptions pipeline args = [ '--project= PROJECT NAME ' , '--job name= JOB NAME ' , '--staging location=gs:// STORAGE BUCKET /staging/' , '--temp location=gs:// STORAGE BUCKET /tmp/' , '--region= DATAFLOW REGION ' , '--runner=DataflowRunner' ] pipeline options = PipelineOptions ( pipeline args ) worker options = pipeline options . view as ( WorkerOptions ) worker options . default sdk harness log level = 'WARNING' Note: In Apache Beam SDK 2.42.0 and earlier versions, use ['{"apache beam.runners.dataflow":"WARNING"}'] worker options . sdk harness log level overrides = { "apache beam.runners.dataflow" : "WARNING" } Pass in pipeline options during pipeline creation. with beam .

