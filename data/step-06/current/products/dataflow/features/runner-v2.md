---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.795Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Runner v2"
feature_slug: "runner-v2"
latest_feature_date: "2022-04-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
  - "https://docs.cloud.google.com/dataflow/docs/guides/logging"
  - "https://docs.cloud.google.com/dataflow/docs/guides/build-container-image"
keywords:
  - "runner"
  - "v2"
  - "next"
  - "generation"
  - "dataflow"
  - "architecture"
  - "executing"
  - "pipelines"
---

# Runner v2

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Runner v2 is the next-generation Dataflow runner architecture for executing pipelines.

## Extended Definition

Runner v2 is the next-generation Dataflow runner architecture for executing pipelines.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- [https://docs.cloud.google.com/dataflow/docs/guides/logging](https://docs.cloud.google.com/dataflow/docs/guides/logging)
- [https://docs.cloud.google.com/dataflow/docs/guides/build-container-image](https://docs.cloud.google.com/dataflow/docs/guides/build-container-image)

## Supporting Pages

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-reference-2`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Error reporting workitem progress For Java pipelines, if you are not using Runner V2, you might see the following error: Error reporting workitem progress update to Dataflow service: ...
- CONTAINER ID = nerdctl ps grep sdk-0-0 awk '{print $1}' Start a shell in the running container. nerdctl exec --privileged -it $CONTAINER ID /bin/bash Inspect python processes in the running container. ps -A grep python PYTHON PID = $( ps -A grep python head -1 awk '{print $1}' ) Use pystack to retrieve stacktraces from the python process. pip install pystack pystack remote --native $PYTHON PID Find which thread holds the GIL and inspect the stacktrace. pystack remote --native $PYTHON PID grep -iF "Has the GIL" -A 100 Alternately, use inspect with gdb. apt update && apt install -y gdb gdb --quiet \ --eval-command = "set pagination off" \ --eval-command = "thread apply all bt" \ --eval-command "set confirm off" \ --eval-command = "quit" -p $PYTHON PID In Python pipelines, in the default configuration, Dataflow assumes that each Python process running on the workers efficiently uses one vCPU core.
- Request payload size exceeds the limit: 20971520 bytes When you run a pipeline, the job might fail with the following error: com.google.api.client.googleapis.json.GoogleJsonResponseException: 400 Bad Request POST https://dataflow.googleapis.com/v1b3/projects/PROJECT ID/locations/REGION/jobs/JOB ID/workItems:reportStatus { "code": 400, "errors": [ { "domain": "global", "message": "Request payload size exceeds the limit: 20971520 bytes.", "reason": "badRequest" } ], "message": "Request payload size exceeds the limit: 20971520 bytes.", "status": "INVALID ARGUMENT" } This error can occur when a job using the Dataflow runner has a very large job graph.
- NameError When you execute your pipeline using the Dataflow service, the following error occurs: NameError This error does not occur when you execute locally, such as when you execute using the DirectRunner .

### Work with pipeline logs \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/logging](https://docs.cloud.google.com/dataflow/docs/guides/logging)
- Source ID: `site-docs-root-2`
- Final score: 119
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- MDCCloseable ignored = MDC . putCloseable ( "messageId" , messageId )) { String payload = new String ( message . getPayload ()); logger . info ( "Received message with payload: " + payload ); // This is the example task logger . info ( "Executing example task..." ); } catch ( Exception e ) { logger . info ( "failure" ); } } } public static void main ( String [] args ) { SimpleDataflowJobOptions options = PipelineOptionsFactory . fromArgs ( args ). withValidation (). as ( SimpleDataflowJobOptions . class ); // options.setRunner(DirectRunner.class); options . setLogMdc ( true ); Pipeline p = Pipeline . create ( options ); p . apply ( "Read Messages from Pub/Sub" , PubsubIO . readMessagesWithAttributes (). fromSubscription ( options . getInputSubscription ())) . apply ( "Process Message" , ParDo . of ( new MessageReaderFn ())); p . run (); } } The following mvn command shows how to execute the pipeline with the --logMdc=true argument: mvn -Pdataflow-runner compile exec:java \ -Dexec.mainClass = com.sample.SimpleDataflowJobMDC \ -Dexec.args = " \ [...] \ --logMdc=true \ [...] Control log volume You can also reduce the volume of logs generated by changing the pipeline log levels .
- The following example uses the WorkerOptions class to programmatically set pipeline logging options that can be overridden from the command line: from apache beam.options.pipeline options import PipelineOptions , WorkerOptions pipeline args = [ '--project= PROJECT NAME ' , '--job name= JOB NAME ' , '--staging location=gs:// STORAGE BUCKET /staging/' , '--temp location=gs:// STORAGE BUCKET /tmp/' , '--region= DATAFLOW REGION ' , '--runner=DataflowRunner' ] pipeline options = PipelineOptions ( pipeline args ) worker options = pipeline options . view as ( WorkerOptions ) worker options . default sdk harness log level = 'WARNING' Note: In Apache Beam SDK 2.42.0 and earlier versions, use ['{"apache beam.runners.dataflow":"WARNING"}'] worker options . sdk harness log level overrides = { "apache beam.runners.dataflow" : "WARNING" } Pass in pipeline options during pipeline creation. with beam .
- Dataflow worker log example The modified WordCount pipeline can be run in the cloud with the following options: Java -- project = WordCountExample -- output = gs : //<bucket-name>/counts -- runner = DataflowRunner -- tempLocation = gs : //<bucket-name>/temp -- stagingLocation = gs : //<bucket-name>/binaries Python -- project = WordCountExample -- output = gs : // < bucket - name > / counts -- runner = DataflowRunner -- staging location = gs : // < bucket - name > / binaries Go -- project = WordCountExample -- output = gs : //<bucket-name>/counts -- runner = DataflowRunner -- staging location = gs : //<bucket-name>/binaries View logs Because the WordCount cloud pipeline uses blocking execution, console messages are output during pipeline execution.
- For example, to override the default pipeline log level for the org.apache.beam.runners.dataflow package, and set it to TRACE : --sdkHarnessLogLevelOverrides='{"org.apache.beam.runners.dataflow":"TRACE"}' To make multiple overrides, provide a JSON map: ( --sdkHarnessLogLevelOverrides={"<package/class>":"<level>","<package/class>":"<level>",...} ).

### Build custom container images for Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/build-container-image](https://docs.cloud.google.com/dataflow/docs/guides/build-container-image)
- Source ID: `site-docs-reference-required-3`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example runs the wordcount example pipeline : python -m apache beam.examples.wordcount \ --input = INPUT FILE \ --output = OUTPUT FILE \ --project = PROJECT ID \ --region = REGION \ --temp location = TEMP LOCATION \ --runner = DataflowRunner \ --experiments = use runner v2 \ --sdk container image = IMAGE URI --sdk location = container Replace the following: INPUT FILE : an input file for the pipeline OUTPUT FILE : a path to write output to PROJECT ID : the Google Cloud project ID REGION : the region to deploy your Dataflow job in TEMP LOCATION : the Cloud Storage path for Dataflow to stage temporary job files IMAGE URI : the custom container image URI Pre-build a container image when submitting the job Pre-building a container image lets you to pre-install the pipeline dependencies before job startup.
- The following example uses Cloud Build to pre-build the image: python -m apache beam.examples.wordcount \ --input = INPUT FILE \ --output = OUTPUT FILE \ --project = PROJECT ID \ --region = REGION \ --temp location = TEMP LOCATION \ --runner = DataflowRunner \ --disk size gb = DISK SIZE GB \ --experiments = use runner v2 \ --requirements file = ./requirements.txt \ --prebuild sdk container engine = cloud build \ --docker registry push url = IMAGE PATH \ --sdk location = container The pre-build feature requires the Apache Beam SDK for Python version 2.25.0 or later.
- Your container image must support the architecture of the worker VMs for your Dataflow job.
- As a workaround, disable this behavior in Beam 2.48.0 and later by setting the following environment variable in your container image: ENV RUN PYTHON SDK IN DEFAULT ENVIRONMENT=1 What's next For more information about writing Dockerfiles, see Best practices for writing Dockerfiles .

