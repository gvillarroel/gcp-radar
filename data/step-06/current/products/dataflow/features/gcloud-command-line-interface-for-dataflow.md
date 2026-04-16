---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.871Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "gcloud command-line interface for Dataflow"
feature_slug: "gcloud-command-line-interface-for-dataflow"
latest_feature_date: "2015-04-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
  - "https://docs.cloud.google.com/dataflow/docs/guides/logging"
  - "https://docs.cloud.google.com/dataflow/docs/guides/stopping-a-pipeline"
keywords:
  - "gcloud"
  - "command"
  - "line"
  - "interface"
  - "dataflow"
  - "available"
  - "through"
  - "alpha"
---

# gcloud command-line interface for Dataflow

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Dataflow is available through the gcloud alpha command-line interface.

## Extended Definition

Dataflow is available through the gcloud alpha command-line interface.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- [https://docs.cloud.google.com/dataflow/docs/guides/logging](https://docs.cloud.google.com/dataflow/docs/guides/logging)
- [https://docs.cloud.google.com/dataflow/docs/guides/stopping-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/stopping-a-pipeline)

## Supporting Pages

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-reference-2`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CONTAINER ID = nerdctl ps grep sdk-0-0 awk '{print $1}' Start a shell in the running container. nerdctl exec --privileged -it $CONTAINER ID /bin/bash Inspect python processes in the running container. ps -A grep python PYTHON PID = $( ps -A grep python head -1 awk '{print $1}' ) Use pystack to retrieve stacktraces from the python process. pip install pystack pystack remote --native $PYTHON PID Find which thread holds the GIL and inspect the stacktrace. pystack remote --native $PYTHON PID grep -iF "Has the GIL" -A 100 Alternately, use inspect with gdb. apt update && apt install -y gdb gdb --quiet \ --eval-command = "set pagination off" \ --eval-command = "thread apply all bt" \ --eval-command "set confirm off" \ --eval-command = "quit" -p $PYTHON PID In Python pipelines, in the default configuration, Dataflow assumes that each Python process running on the workers efficiently uses one vCPU core.
- A fatal error has been detected by the Java Runtime Environment The following error occurs during worker startup: A fatal error has been detected by the Java Runtime Environment This error occurs if the pipeline is using Java Native Interface (JNI) to run non-Java code and that code or the JNI bindings contain an error. googclient deliveryattempt attribute key error Your Dataflow job fails with one of the following errors: The request contains an attribute key that is not valid (key=googclient deliveryattempt).
- BigQuery connector errors The following sections contain common BigQuery connector errors that you might encounter and steps for resolving or troubleshooting the errors. quotaExceeded When using the BigQuery connector to write to BigQuery using streaming inserts, write throughput is lower than expected, and the following error might occur: quotaExceeded Slow throughput might be due to your pipeline exceeding the available BigQuery streaming insert quota.
- Check your usage of Compute Engine quotas To view Compute Engine resource usage compared to Dataflow quotas for the zone you're targeting, run the following command: gcloud compute regions describe [REGION] Review the results for the following resources to see if any are exceeding quota: CPUS DISKS TOTAL GB IN USE ADDRESSES INSTANCE GROUPS INSTANCES REGIONAL INSTANCE GROUP MANAGERS If needed, request a quota change .

### Work with pipeline logs \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/logging](https://docs.cloud.google.com/dataflow/docs/guides/logging)
- Source ID: `site-docs-root-2`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the modal window for the command line, copy the bq jobs describe command and run it locally or in Cloud Shell. gcloud alpha bq jobs describe BIGQUERY JOB ID The bq jobs describe command outputs JobStatistics , which provide further details that are useful when diagnosing a slow or stuck BigQuery job.
- Enable and use MDC To enable MDC, add the following pipeline option when you launch your job: --logMdc = true The following code sample shows how to use MDC to add a messageId to the logs of a Dataflow job that reads messages from Pub/Sub. import org.apache.beam.sdk.Pipeline ; import org.apache.beam.sdk.io.gcp.pubsub.PubsubMessage ; import org.apache.beam.sdk.io.gcp.pubsub.PubsubIO ; import org.apache.beam.sdk.options.Description ; import org.apache.beam.sdk.options.PipelineOptionsFactory ; import org.apache.beam.sdk.options.SdkHarnessOptions ; import org.apache.beam.sdk.transforms.DoFn ; import org.apache.beam.sdk.transforms.ParDo ; import org.slf4j.Logger ; import org.slf4j.LoggerFactory ; import org.slf4j.MDC ; public class SimpleDataflowJobMDC { public interface SimpleDataflowJobOptions extends SdkHarnessOptions { @Description ( "The Pub/Sub subscription to read from." ) String getInputSubscription (); void setInputSubscription ( String value ); } public static class MessageReaderFn extends DoFn<PubsubMessage , Void > { private transient Logger logger ; @Setup public void setup () { logger = LoggerFactory . getLogger ( MessageReaderFn . class ); } @ProcessElement public void processElement ( ProcessContext c ) { PubsubMessage message = c . element (); String messageId = message . getMessageId (); try ( MDC .
- MDCCloseable ignored = MDC . putCloseable ( "messageId" , messageId )) { String payload = new String ( message . getPayload ()); logger . info ( "Received message with payload: " + payload ); // This is the example task logger . info ( "Executing example task..." ); } catch ( Exception e ) { logger . info ( "failure" ); } } } public static void main ( String [] args ) { SimpleDataflowJobOptions options = PipelineOptionsFactory . fromArgs ( args ). withValidation (). as ( SimpleDataflowJobOptions . class ); // options.setRunner(DirectRunner.class); options . setLogMdc ( true ); Pipeline p = Pipeline . create ( options ); p . apply ( "Read Messages from Pub/Sub" , PubsubIO . readMessagesWithAttributes (). fromSubscription ( options . getInputSubscription ())) . apply ( "Process Message" , ParDo . of ( new MessageReaderFn ())); p . run (); } } The following mvn command shows how to execute the pipeline with the --logMdc=true argument: mvn -Pdataflow-runner compile exec:java \ -Dexec.mainClass = com.sample.SimpleDataflowJobMDC \ -Dexec.args = " \ [...] \ --logMdc=true \ [...] Control log volume You can also reduce the volume of logs generated by changing the pipeline log levels .
- The following example uses the WorkerOptions class to programmatically set pipeline logging options that can be overridden from the command line: from apache beam.options.pipeline options import PipelineOptions , WorkerOptions pipeline args = [ '--project= PROJECT NAME ' , '--job name= JOB NAME ' , '--staging location=gs:// STORAGE BUCKET /staging/' , '--temp location=gs:// STORAGE BUCKET /tmp/' , '--region= DATAFLOW REGION ' , '--runner=DataflowRunner' ] pipeline options = PipelineOptions ( pipeline args ) worker options = pipeline options . view as ( WorkerOptions ) worker options . default sdk harness log level = 'WARNING' Note: In Apache Beam SDK 2.42.0 and earlier versions, use ['{"apache beam.runners.dataflow":"WARNING"}'] worker options . sdk harness log level overrides = { "apache beam.runners.dataflow" : "WARNING" } Pass in pipeline options during pipeline creation. with beam .

### Stop a running Dataflow pipeline \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/stopping-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/stopping-a-pipeline)
- Source ID: `site-docs-reference-2`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Execute the following command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud dataflow jobs archive JOB ID --region = REGION ID Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud dataflow jobs archive JOB ID --region = REGION ID Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud dataflow jobs archive JOB ID --region = REGION ID You should receive a response similar to the following: Archived job [ JOB ID ]. createTime: ' 2025-06-29T11:00:02.432552Z ' currentState: JOB STATE DONE currentStateTime: ' 2025-06-29T11:04:25.125921Z ' id: JOB ID jobMetadata: userDisplayProperties: archived: 'true' projectId: PROJECT ID startTime: ' 2025-06-29T11:00:02.432552Z ' View and restore archived jobs Follow these steps to view archived jobs or to restore archived jobs to the main jobs list on the Dataflow Jobs page.
- In addition to the updated JobMetadata object, your API request must also include the updateMask query parameter in the request URL: https://dataflow.googleapis.com/v1b3/ [...] /jobs/ JOB ID / ?updateMask=job metadata.user display properties.archived Before using any of the request data, make the following replacements: PROJECT ID : your project ID REGION : a Dataflow region JOB ID : the ID of your Dataflow job HTTP method and URL: PUT https://dataflow.googleapis.com/v1b3/projects/ PROJECT ID /locations/ REGION /jobs/ JOB ID /?updateMask=job metadata.user display properties.archived Request JSON body: { "job metadata": { "userDisplayProperties": { "archived": "false" } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- In addition to the updated JobMetadata object, your API request must also include the updateMask query parameter in the request URL: https://dataflow.googleapis.com/v1b3/ [...] /jobs/ JOB ID / ?updateMask=job metadata.user display properties.archived Before using any of the request data, make the following replacements: PROJECT ID : your project ID REGION : a Dataflow region JOB ID : the ID of your Dataflow job HTTP method and URL: PUT https://dataflow.googleapis.com/v1b3/projects/ PROJECT ID /locations/ REGION /jobs/ JOB ID /?updateMask=job metadata.user display properties.archived Request JSON body: { "job metadata": { "userDisplayProperties": { "archived": "true" } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PUT -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://dataflow.googleapis.com/v1b3/projects/ PROJECT ID /locations/ REGION /jobs/ JOB ID /?updateMask=job metadata.user display properties.archived" Select-Object -Expand Content You should receive a JSON response similar to the following: { "id": " JOB ID ", "projectId": " PROJECT ID ", "currentState": "JOB STATE DONE", "currentStateTime": " 2025-05-20T20:54:41.651442Z ", "createTime": " 2025-05-20T20:51:06.031248Z ", "jobMetadata": { "userDisplayProperties": { "archived": "false" } }, "startTime": " 2025-05-20T20:51:06.031248Z " } What's next Explore the Dataflow REST API .

