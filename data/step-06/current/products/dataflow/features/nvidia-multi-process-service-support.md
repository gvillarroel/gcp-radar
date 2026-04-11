---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.812Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "NVIDIA Multi-Process Service support"
feature_slug: "nvidia-multi-process-service-support"
latest_feature_date: "2023-07-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/release-notes"
  - "https://docs.cloud.google.com/dataflow/docs/machine-learning"
  - "https://docs.cloud.google.com/dataflow/docs/guides/logging"
  - "https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime"
keywords:
  - "nvidia"
  - "multi"
  - "process"
  - "dataflow"
  - "gpu"
  - "workloads"
  - "can"
  - "use"
---

# NVIDIA Multi-Process Service support

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Dataflow GPU workloads can use NVIDIA Multi-Process Service to improve GPU efficiency and utilization when running multiple SDK processes on a shared GPU.

## Extended Definition

Dataflow GPU workloads can use NVIDIA Multi-Process Service to improve GPU efficiency and utilization when running multiple SDK processes on a shared GPU.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- [https://docs.cloud.google.com/dataflow/docs/machine-learning](https://docs.cloud.google.com/dataflow/docs/machine-learning)
- [https://docs.cloud.google.com/dataflow/docs/guides/logging](https://docs.cloud.google.com/dataflow/docs/guides/logging)
- [https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime](https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime)

## Supporting Pages

### Dataflow release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- July 25, 2023 Feature When you run multiple SDK processes on a shared Dataflow GPU, you can improve GPU efficiency and utilization by enabling the NVIDIA Multi-Process Service (MPS) .
- Feature Added new autoscaling metrics : Autoscaling rationale chart : explains the factors driving autoscaling decisions Worker CPU utilization chart : shows current user worker CPU utilization and customer autoscaling hint value Timer backlog per stage : shows an estimate of time needed to materialize the output for windows whose timer has expired Parallel processing : the number of keys available for parallel processing March 11, 2024 Feature You can now use committed use discounts (CUDs) with Dataflow streaming jobs.
- March 17, 2022 Feature Dataflow now supports the following Google-provided templates in GA: Pub/Sub Subscription to BigQuery Pub/Sub Topic to BigQuery Pub/Sub Avro to BigQuery Pub/Sub Proto to BigQuery Pub/Sub to Pub/Sub Pub/Sub to Cloud Storage Avro Pub/Sub to Cloud Storage Text Cloud Storage Text to BigQuery (Stream) Cloud Storage Text to Pub/Sub (Stream) Change Data Capture to BigQuery (Stream) Apache Kafka to BigQuery BigQuery export to Parquet (via Storage API) Firestore to Cloud Storage Text Cloud Spanner to Cloud Storage Text Cloud Storage Text to BigQuery Cloud Storage Text to Firestore Cloud Storage Text to Pub/Sub (Batch) Apache Cassandra to Bigtable Datastream to Cloud Spanner File Format Conversion Bulk Compress Cloud Storage Files Bulk Decompress Cloud Storage Files Firestore Bulk Delete Streaming Data Generator to Pub/Sub, BigQuery, and Cloud Storage March 04, 2022 Feature You can now use the Apache Beam SDK for Go to create batch Dataflow pipelines .
- The service is available in five additional regions: us-east1 (South Carolina) us-west1 (Oregon) asia-east1 (Taiwan) asia-northeast1 (Tokyo) europe-west4 (Netherlands) Feature You can now do the following in Cloud Dataflow SQL : Use Cloud Storage filesets as a data source Assign schemas to data sources in the Cloud Dataflow SQL UI Preview the content of Cloud Pub/Sub messages from the Cloud Dataflow SQL UI October 31, 2019 Feature Cloud Dataflow Shuffle and Streaming Engine are now available in us-east1 (South Carolina).

### Dataflow ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/machine-learning](https://docs.cloud.google.com/dataflow/docs/machine-learning)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Additional features Use accelerators (GPUs/TPUs) Using accelerators like GPUs and TPUs in Dataflow jobs can significantly speed up data processing tasks frequently used in machine learning and image processing use cases.
- MLTransform wraps multiple data processing transforms in one class, letting you use one class for a variety of preprocessing tasks.
- Prediction and inference with hub models I want to do sentiment analysis and summarization You can use Gemma models in your inference pipelines to gauge the sentiment of a conversation, summarize that conversation's content, and draft a reply for a difficult conversation.
- ML workflow orchestration I want to use Dataflow with Vertex AI Pipelines Vertex AI Pipelines helps you to automate, monitor, and govern your ML systems by orchestrating your ML workflows in a serverless manner.

### Work with pipeline logs \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/logging](https://docs.cloud.google.com/dataflow/docs/guides/logging)
- Source ID: `site-docs-root-2`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- In some scenarios, they might capture process crashes or out-of-memory (OOM) events. docker and kubelet logs contain messages related to these public technologies, which are used on Dataflow workers. nvidia-mps logs contain messages about NVIDIA Multi-Process Service (MPS) operations .
- Enable and use MDC To enable MDC, add the following pipeline option when you launch your job: --logMdc = true The following code sample shows how to use MDC to add a messageId to the logs of a Dataflow job that reads messages from Pub/Sub. import org.apache.beam.sdk.Pipeline ; import org.apache.beam.sdk.io.gcp.pubsub.PubsubMessage ; import org.apache.beam.sdk.io.gcp.pubsub.PubsubIO ; import org.apache.beam.sdk.options.Description ; import org.apache.beam.sdk.options.PipelineOptionsFactory ; import org.apache.beam.sdk.options.SdkHarnessOptions ; import org.apache.beam.sdk.transforms.DoFn ; import org.apache.beam.sdk.transforms.ParDo ; import org.slf4j.Logger ; import org.slf4j.LoggerFactory ; import org.slf4j.MDC ; public class SimpleDataflowJobMDC { public interface SimpleDataflowJobOptions extends SdkHarnessOptions { @Description ( "The Pub/Sub subscription to read from." ) String getInputSubscription (); void setInputSubscription ( String value ); } public static class MessageReaderFn extends DoFn<PubsubMessage , Void > { private transient Logger logger ; @Setup public void setup () { logger = LoggerFactory . getLogger ( MessageReaderFn . class ); } @ProcessElement public void processElement ( ProcessContext c ) { PubsubMessage message = c . element (); String messageId = message . getMessageId (); try ( MDC .
- MDCCloseable ignored = MDC . putCloseable ( "messageId" , messageId )) { String payload = new String ( message . getPayload ()); logger . info ( "Received message with payload: " + payload ); // This is the example task logger . info ( "Executing example task..." ); } catch ( Exception e ) { logger . info ( "failure" ); } } } public static void main ( String [] args ) { SimpleDataflowJobOptions options = PipelineOptionsFactory . fromArgs ( args ). withValidation (). as ( SimpleDataflowJobOptions . class ); // options.setRunner(DirectRunner.class); options . setLogMdc ( true ); Pipeline p = Pipeline . create ( options ); p . apply ( "Read Messages from Pub/Sub" , PubsubIO . readMessagesWithAttributes (). fromSubscription ( options . getInputSubscription ())) . apply ( "Process Message" , ParDo . of ( new MessageReaderFn ())); p . run (); } } The following mvn command shows how to execute the pipeline with the --logMdc=true argument: mvn -Pdataflow-runner compile exec:java \ -Dexec.mainClass = com.sample.SimpleDataflowJobMDC \ -Dexec.args = " \ [...] \ --logMdc=true \ [...] Control log volume You can also reduce the volume of logs generated by changing the pipeline log levels .
- The following example uses the WorkerOptions class to programmatically set pipeline logging options that can be overridden from the command line: from apache beam.options.pipeline options import PipelineOptions , WorkerOptions pipeline args = [ '--project= PROJECT NAME ' , '--job name= JOB NAME ' , '--staging location=gs:// STORAGE BUCKET /staging/' , '--temp location=gs:// STORAGE BUCKET /tmp/' , '--region= DATAFLOW REGION ' , '--runner=DataflowRunner' ] pipeline options = PipelineOptions ( pipeline args ) worker options = pipeline options . view as ( WorkerOptions ) worker options . default sdk harness log level = 'WARNING' Note: In Apache Beam SDK 2.42.0 and earlier versions, use ['{"apache beam.runners.dataflow":"WARNING"}'] worker options . sdk harness log level overrides = { "apache beam.runners.dataflow" : "WARNING" } Pass in pipeline options during pipeline creation. with beam .

### Use Dataflow Prime \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime](https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Java --dataflowServiceOptions = enable prime = false Python Apache Beam Python SDK version 2.29.0 or later: --dataflow service options = enable prime = false Apache Beam Python SDK version 2.21.0 to 2.28.0: --experiments = enable prime = false Go --dataflow service options = enable prime = false Use Dataflow Prime with templates If you're using Dataflow templates, you can choose to enable Dataflow Prime in one of the following ways: For jobs launched from the Create job from template page: Go to the Create job from template page.
- Java pipelines that meet the following requirements can use the MapState and SetState classes: use Streaming Engine use Apache Beam SDK versions 2.58.0 and later don't use Runner v2 All pipeline options not explicitly mentioned previously or in the feature comparison table work the same for Dataflow and Dataflow Prime.
- Use Dataflow Prime in Apache Beam notebooks If you're using an Apache Beam notebook , you can enable Dataflow Prime programmatically using PipelineOptions : options = pipeline options .
- Before using Dataflow Prime To use Dataflow Prime, you can reuse your existing pipeline code and also enable the Dataflow Prime option either through Cloud Shell or programmatically.

