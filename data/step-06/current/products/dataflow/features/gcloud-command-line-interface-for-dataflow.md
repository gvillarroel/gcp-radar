---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.865Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "gcloud command-line interface for Dataflow"
feature_slug: "gcloud-command-line-interface-for-dataflow"
latest_feature_date: "2015-04-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance"
  - "https://docs.cloud.google.com/dataflow/docs/guides/logging"
  - "https://docs.cloud.google.com/dataflow/docs/guides/jobs-list"
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
keywords:
  - "gcloud"
  - "command"
  - "line"
  - "interface"
  - "for"
  - "dataflow"
  - "is"
  - "available"
---

# gcloud command-line interface for Dataflow

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Dataflow is available through the gcloud alpha command-line interface.

## Extended Definition

Dataflow is available through the gcloud alpha command-line interface.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance](https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance)
- [https://docs.cloud.google.com/dataflow/docs/guides/logging](https://docs.cloud.google.com/dataflow/docs/guides/logging)
- [https://docs.cloud.google.com/dataflow/docs/guides/jobs-list](https://docs.cloud.google.com/dataflow/docs/guides/jobs-list)
- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)

## Supporting Pages

### "Performance characteristics of Kafka to BigQuery pipelines \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance](https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance)
- Source ID: `site-docs-root-2`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Run a test pipeline This section shows the gcloud dataflow flex-template run commands that were used to run the map-only pipeline.
- BQ TABLE NAME dlq" , \ numStorageWriteApiStreams = 400 , \ useStorageWriteApiAtLeastOnce = true Replace the following: JOB NAME : the Dataflow job name PROJECT ID : the project ID KAFKA BOOTSTRAP ADDRESS : the bootstrap address of the Apache Kafka cluster KAFKA TOPIC : the name of the Kafka topic BQ DATASET : the name of the BigQuery dataset BQ TABLE NAME : the name of the BigQuery table Generate test data To generate test data, use the following command to run the Streaming Data Generator template : gcloud dataflow flex-template run JOB NAME \ --project = PROJECT ID \ --template-file-gcs-location = gs://dataflow-templates-us-central1/latest/flex/Streaming Data Generator \ --max-workers = 140 \ --parameters \ schemaLocation = SCHEMA LOCATION , \ qps = 1000000 , \ sinkType = KAFKA, \ bootstrapServer = KAFKA BOOTSTRAP ADDRESS , \ kafkaTopic = KAFKA TOPIC , \ outputType = JSON Replace the following: JOB NAME : the Dataflow job name PROJECT ID : the project ID SCHEMA LOCATION : the path to a schema file in Cloud Storage KAFKA BOOTSTRAP ADDRESS : the bootstrap address of the Apache Kafka cluster KAFKA TOPIC : the name of the Kafka topic The Streaming Data Generator template uses a JSON Data Generator file to define the message schema.
- BQ TABLE NAME dlq" , \ numStorageWriteApiStreams = 400 At-least-once mode gcloud dataflow flex-template run JOB NAME \ --project = PROJECT ID \ --template-file-gcs-location = gs://dataflow-templates-us-central1/latest/flex/Kafka to BigQuery Flex \ --enable-streaming-engine \ --additional-experiments = streaming mode at least once \ --parameters \ readBootstrapServerAndTopic = " KAFKA BOOTSTRAP ADDRESS ; KAFKA TOPIC " , \ kafkaReadAuthenticationMode = APPLICATION DEFAULT CREDENTIALS, \ messageFormat = JSON, \ writeMode = SINGLE TABLE NAME, \ outputTableSpec = " PROJECT ID : BQ DATASET .
- The benchmark tests used a message schema similar to the following: { "logStreamId" : "{{integer(1000001,2000000)}}" , "message" : "{{alphaNumeric(962)}}" } Next steps Use the Dataflow job monitoring interface Best practices for Dataflow cost optimization Troubleshoot slow or stuck streaming jobs Read from Apache Kafka to Dataflow Write from Dataflow to BigQuery Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Work with pipeline logs \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/logging](https://docs.cloud.google.com/dataflow/docs/guides/logging)
- Source ID: `site-docs-root-2`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- After the job starts, a link to the Google Cloud console page is output to the console, followed by the pipeline job ID: INFO: To access the Dataflow monitoring console, please navigate to https://console.developers.google.com/dataflow/job/2017-04-13 13 58 10-6217777367720337669 Submitted job: 2017-04-13 13 58 10-6217777367720337669 The console URL leads to the Dataflow monitoring interface with a summary page for the submitted job.
- In the modal window for the command line, copy the bq jobs describe command and run it locally or in Cloud Shell. gcloud alpha bq jobs describe BIGQUERY JOB ID The bq jobs describe command outputs JobStatistics , which provide further details that are useful when diagnosing a slow or stuck BigQuery job.
- For example, the following command-line option will override the default Dataflow INFO log level, and set it to DEBUG : --defaultSdkHarnessLogLevel=DEBUG --sdkHarnessLogLevelOverrides={"<package or class>":"<level>"} : use this option to set the logging level for specified packages or classes.
- For example, the following command-line option overrides the default Dataflow INFO log level, and sets it to DEBUG : --default sdk harness log level=DEBUG --sdk harness log level overrides={\"<module>\":\"<level>\"} : use this option to set the logging level for specified modules.

### Dataflow jobs list \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/jobs-list](https://docs.cloud.google.com/dataflow/docs/guides/jobs-list)
- Source ID: `site-docs-root-2`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following is a sample output: ID NAME TYPE CREATION TIME STATE REGION 2015-06-03 16 39 22-4020553808241078833 wordcount-janedoe-0603233849 Batch 2015-06-03 16:39:22 Done us-central1 2015-06-03 16 38 28-4363652261786938862 wordcount-johndoe-0603233820 Batch 2015-06-03 16:38:28 Done us-central1 2015-05-21 16 24 11-17823098268333533078 bigquerytornadoes-johndoe-0521232402 Batch 2015-05-21 16:24:11 Done europe-west1 2015-05-21 13 38 06-16409850040969261121 bigquerytornadoes-johndoe-0521203801 Batch 2015-05-21 13:38:06 Done us-central1 2015-05-21 13 17 18-18349574013243942260 bigquerytornadoes-johndoe-0521201710 Batch 2015-05-21 13:17:18 Done europe-west1 2015-05-21 12 49 37-9791290545307959963 wordcount-johndoe-0521194928 Batch 2015-05-21 12:49:37 Done us-central1 2015-05-20 15 54 51-15905022415025455887 wordcount-johndoe-0520225444 Batch 2015-05-20 15:54:51 Failed us-central1 2015-05-20 15 47 02-14774624590029708464 wordcount-johndoe-0520224637 Batch 2015-05-20 15:47:02 Done us-central1 To display more information about a job, use the dataflow jobs describe command: gcloud dataflow jobs describe JOB ID Replace JOB ID with the job ID .
- In addition to the updated JobMetadata object, your API request must also include the updateMask query parameter in the request URL: https://dataflow.googleapis.com/v1b3/ [...] /jobs/ JOB ID / ?updateMask=job metadata.user display properties.archived Before using any of the request data, make the following replacements: PROJECT ID : your project ID REGION : a Dataflow region JOB ID : the ID of your Dataflow job HTTP method and URL: PUT https://dataflow.googleapis.com/v1b3/projects/ PROJECT ID /locations/ REGION /jobs/ JOB ID /?updateMask=job metadata.user display properties.archived Request JSON body: { "job metadata": { "userDisplayProperties": { "archived": "false" } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- In addition to the updated JobMetadata object, your API request must also include the updateMask query parameter in the request URL: https://dataflow.googleapis.com/v1b3/ [...] /jobs/ JOB ID / ?updateMask=job metadata.user display properties.archived Before using any of the request data, make the following replacements: PROJECT ID : your project ID REGION : a Dataflow region JOB ID : the ID of your Dataflow job HTTP method and URL: PUT https://dataflow.googleapis.com/v1b3/projects/ PROJECT ID /locations/ REGION /jobs/ JOB ID /?updateMask=job metadata.user display properties.archived Request JSON body: { "job metadata": { "userDisplayProperties": { "archived": "true" } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- The output from this command looks similar to following: createTime: '2015-02-09T19:39:41.140Z' currentState: JOB STATE DONE currentStateTime: '2015-02-09T19:56:39.510Z' id: 2015-02-09 11 39 40-15635991037808002875 name: tfidf-bchambers-0209193926 projectId: google.com:clouddfe type: JOB TYPE BATCH To format the result into JSON, run the command with the --format=json option: gcloud --format=json dataflow jobs describe JOB ID Archive (hide) Dataflow jobs from a list When you archive a Dataflow job, the job is removed from the list of jobs in the Dataflow Jobs page in the console.

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Check your usage of Compute Engine quotas To view Compute Engine resource usage compared to Dataflow quotas for the zone you're targeting, run the following command: gcloud compute regions describe [REGION] Review the results for the following resources to see if any are exceeding quota: CPUS DISKS TOTAL GB IN USE ADDRESSES INSTANCE GROUPS INSTANCES REGIONAL INSTANCE GROUP MANAGERS If needed, request a quota change .
- It might be possible to retrieve stacktraces of a thread that is holding the GIL on a running Dataflow worker as follows: SSH into a running Dataflow worker VM that is currently a straggler, for example: gcloud compute ssh --zone "us-central1-a" "worker-that-emits-unable-to-retrieve-status-messages" --project "project-id" Install nerdctl to inspect a running container with ptrace privileges. wget https://github.com/containerd/nerdctl/releases/download/v2.0.2/nerdctl-2.0.2-linux-amd64.tar.gz sudo tar Cxzvvf /var/lib/toolbox nerdctl-2.0.2-linux-amd64.tar.gz alias nerdctl = "sudo /var/lib/toolbox/nerdctl -n k8s.io" Find a container running the Python SDK harness.
- Run the following command: curl http://localhost:8081/threadz Operation ongoing in bundle When you run a pipeline reading from JdbcIO , the partitioned reads from JdbcIO are slow, and the following message appears in the worker log files: Operation ongoing in bundle process bundle-[0-9-] for PTransform{id=Read from JDBC with Partitions\/JdbcIO.Read\/JdbcIO.ReadAll\/ParDo\(Read\)\/ParMultiDo\(Read\). , state=process} for at least (0[1-9]h[0-5][0-9]m[0-5][0-9]s) without outputting or completing: To resolve this issue, make one or more of the following changes to your pipeline: Use partitions to increase the job parallelism.
- A fatal error has been detected by the Java Runtime Environment The following error occurs during worker startup: A fatal error has been detected by the Java Runtime Environment This error occurs if the pipeline is using Java Native Interface (JNI) to run non-Java code and that code or the JNI bindings contain an error. googclient deliveryattempt attribute key error Your Dataflow job fails with one of the following errors: The request contains an attribute key that is not valid (key=googclient deliveryattempt).

