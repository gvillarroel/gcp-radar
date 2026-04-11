---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.849Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Multiple output destinations in Dataflow SQL"
feature_slug: "multiple-output-destinations-in-dataflow-sql"
latest_feature_date: "2020-03-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development"
  - "https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template"
  - "https://docs.cloud.google.com/dataflow/docs/guides/data-sampling"
  - "https://docs.cloud.google.com/dataflow/docs/guides/logging"
keywords:
  - "multiple"
  - "output"
  - "destinations"
  - "in"
  - "dataflow"
  - "sql"
  - "can"
  - "write"
---

# Multiple output destinations in Dataflow SQL

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Dataflow SQL can write query results to two destinations, including Pub/Sub.

## Extended Definition

Dataflow SQL can write query results to two destinations, including Pub/Sub.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development](https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development)
- [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)
- [https://docs.cloud.google.com/dataflow/docs/guides/data-sampling](https://docs.cloud.google.com/dataflow/docs/guides/data-sampling)
- [https://docs.cloud.google.com/dataflow/docs/guides/logging](https://docs.cloud.google.com/dataflow/docs/guides/logging)

## Supporting Pages

### "Develop Apache Beam notebooks with the interactive runner \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development](https://docs.cloud.google.com/dataflow/docs/guides/interactive-pipeline-development)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Leave the parameter list empty to return the recording status of all pipelines. ib . recordings . describe ( p ) The describe() method provides the following details: Total size (in bytes) of all of the recordings for the pipeline on disk Start time of when the background recording job started (in seconds from Unix epoch) Current pipeline status of the background recording job Python variable for the pipeline Launch Dataflow jobs from a pipeline created in your notebook Optional: Before using your notebook to run Dataflow jobs, restart the kernel, rerun all cells, and verify the output.
- The following notebooks are available: Word Count Streaming Word Count Streaming NYC Taxi Ride Data Apache Beam SQL in notebooks with comparisons to pipelines Apache Beam SQL in notebooks with the Dataflow Runner Apache Beam SQL in notebooks Dataflow Word Count Interactive Flink at Scale RunInference Use GPUs with Apache Beam Visualize Data The Tutorials folder contains additional tutorials that explain the fundamentals of Apache Beam.
- This location is used to store temporary files or intermediate results before outputting to the sink. options . view as ( GoogleCloudOptions ) . temp location = ' %s /temp' % dataflow gcs location If and only if you are using Apache Beam SDK built from source code, set the SDK location.
- Alternatively, you can export your notebook as an executable script, modify the generated .py file using the previous steps, and then deploy your pipeline to the Dataflow service.

### "Quickstart: Create a streaming pipeline using a Dataflow template \_|\_\

- URL: [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- The Pub/Sub to BigQuery template is a streaming pipeline that can read JSON-formatted messages from a Pub/Sub topic and write them to a BigQuery table.
- If you plan to explore multiple architectures, tutorials, or quickstarts, reusing projects can help you avoid exceeding project quota limits.
- You can also run queries using standard SQL.
- To get the permissions that you need to complete this quickstart, ask your administrator to grant you the following IAM roles on your project: BigQuery User ( roles/bigquery.user ) Dataflow Admin ( roles/dataflow.admin ) Service Account User ( roles/iam.serviceAccountUser ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .

### "Use data sampling to observe pipeline data \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/data-sampling](https://docs.cloud.google.com/dataflow/docs/guides/data-sampling)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- When running a Dataflow template, use the additional-experiments flag to disable exception sampling: --additional-experiments=disable always on exception sampling Security considerations Dataflow writes the sampled data to a Cloud Storage bucket that you create and manage.
- You can use the sampled data to check whether your pipeline processes elements as expected, and to diagnose runtime issues such as hot keys or incorrect output.
- Dataflow writes the sampled elements to the Cloud Storage path specified by the gcpTempLocation pipeline option for Java and temp location for Python and Go.
- Billing When Dataflow performs data sampling, you are charged for the Cloud Storage data storage and for the read and write operations on Cloud Storage.

### Work with pipeline logs \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/logging](https://docs.cloud.google.com/dataflow/docs/guides/logging)
- Source ID: `site-docs-root-2`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Dataflow worker log example The modified WordCount pipeline can be run in the cloud with the following options: Java -- project = WordCountExample -- output = gs : //<bucket-name>/counts -- runner = DataflowRunner -- tempLocation = gs : //<bucket-name>/temp -- stagingLocation = gs : //<bucket-name>/binaries Python -- project = WordCountExample -- output = gs : // < bucket - name > / counts -- runner = DataflowRunner -- staging location = gs : // < bucket - name > / binaries Go -- project = WordCountExample -- output = gs : //<bucket-name>/counts -- runner = DataflowRunner -- staging location = gs : //<bucket-name>/binaries View logs Because the WordCount cloud pipeline uses blocking execution, console messages are output during pipeline execution.
- MDCCloseable ignored = MDC . putCloseable ( "messageId" , messageId )) { String payload = new String ( message . getPayload ()); logger . info ( "Received message with payload: " + payload ); // This is the example task logger . info ( "Executing example task..." ); } catch ( Exception e ) { logger . info ( "failure" ); } } } public static void main ( String [] args ) { SimpleDataflowJobOptions options = PipelineOptionsFactory . fromArgs ( args ). withValidation (). as ( SimpleDataflowJobOptions . class ); // options.setRunner(DirectRunner.class); options . setLogMdc ( true ); Pipeline p = Pipeline . create ( options ); p . apply ( "Read Messages from Pub/Sub" , PubsubIO . readMessagesWithAttributes (). fromSubscription ( options . getInputSubscription ())) . apply ( "Process Message" , ParDo . of ( new MessageReaderFn ())); p . run (); } } The following mvn command shows how to execute the pipeline with the --logMdc=true argument: mvn -Pdataflow-runner compile exec:java \ -Dexec.mainClass = com.sample.SimpleDataflowJobMDC \ -Dexec.args = " \ [...] \ --logMdc=true \ [...] Control log volume You can also reduce the volume of logs generated by changing the pipeline log levels .
- The following example uses the WorkerOptions class to programmatically set pipeline logging options that can be overridden from the command line: from apache beam.options.pipeline options import PipelineOptions , WorkerOptions pipeline args = [ '--project= PROJECT NAME ' , '--job name= JOB NAME ' , '--staging location=gs:// STORAGE BUCKET /staging/' , '--temp location=gs:// STORAGE BUCKET /tmp/' , '--region= DATAFLOW REGION ' , '--runner=DataflowRunner' ] pipeline options = PipelineOptions ( pipeline args ) worker options = pipeline options . view as ( WorkerOptions ) worker options . default sdk harness log level = 'WARNING' Note: In Apache Beam SDK 2.42.0 and earlier versions, use ['{"apache beam.runners.dataflow":"WARNING"}'] worker options . sdk harness log level overrides = { "apache beam.runners.dataflow" : "WARNING" } Pass in pipeline options during pipeline creation. with beam .
- After the job starts, a link to the Google Cloud console page is output to the console, followed by the pipeline job ID: INFO: To access the Dataflow monitoring console, please navigate to https://console.developers.google.com/dataflow/job/2017-04-13 13 58 10-6217777367720337669 Submitted job: 2017-04-13 13 58 10-6217777367720337669 The console URL leads to the Dataflow monitoring interface with a summary page for the submitted job.

