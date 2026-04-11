---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.797Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Streaming bottleneck detection"
feature_slug: "streaming-bottleneck-detection"
latest_feature_date: "2025-08-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/release-notes"
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
  - "https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance"
  - "https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices"
keywords:
  - "streaming"
  - "bottleneck"
  - "detection"
  - "dataflow"
  - "automatically"
  - "detects"
  - "performance"
  - "bottlenecks"
---

# Streaming bottleneck detection

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Dataflow automatically detects performance bottlenecks in streaming jobs and surfaces their causes in the Step Info panel.

## Extended Definition

Dataflow automatically detects performance bottlenecks in streaming jobs and surfaces their causes in the Step Info panel.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- [https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance](https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance)
- [https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices)

## Supporting Pages

### Dataflow release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- August 11, 2025 Feature Dataflow now automatically detects performance bottlenecks in streaming jobs.
- October 07, 2019 Feature Cloud Dataflow Shuffle and Streaming Engine are now available in two additional regions: us-west1 (Oregon) asia-east1 (Taiwan) September 03, 2019 Feature Automatic hot key detection is now enabled in batch pipelines for Apache Beam SDK 2.15.0 or higher.
- April 11, 2017 Change The Cloud Dataflow service will now automatically shut down a streaming job if all steps have reached the maximum watermark.
- May 12, 2025 Libraries Go 0.11.0 (2025-05-06) Features dataflow: A new enum StreamingMode is added ( 2f22244 ) dataflow: A new field bugs is added to message .google.dataflow.v1beta3.SdkVersion ( 2f22244 ) dataflow: A new field data sampling is added to message .google.dataflow.v1beta3.DebugOptions ( 2f22244 ) dataflow: A new field default streaming mode is added to message .google.dataflow.v1beta3.TemplateMetadata ( 2f22244 ) dataflow: A new field default value is added to message .google.dataflow.v1beta3.ParameterMetadata ( 2f22244 ) dataflow: A new field disk size gb is added to message .google.dataflow.v1beta3.RuntimeEnvironment ( 2f22244 ) dataflow: A new field dynamic destinations is added to message .google.dataflow.v1beta3.PubsubLocation ( 2f22244 ) dataflow: A new field enable launcher vm serial port logging is added to message .google.dataflow.v1beta3.FlexTemplateRuntimeEnvironment ( 2f22244 ) dataflow: A new field enum options is added to message .google.dataflow.v1beta3.ParameterMetadata ( 2f22244 ) dataflow: A new field group name is added to message .google.dataflow.v1beta3.ParameterMetadata ( 2f22244 ) dataflow: A new field hidden ui is added to message .google.dataflow.v1beta3.ParameterMetadata ( 2f22244 ) dataflow: A new field image repository cert path is added to message .google.dataflow.v1beta3.ContainerSpec ( 2f22244 ) dataflow: A new field image repository password secret id is added to message .google.dataflow.v1beta3.ContainerSpec ( 2f22244 ) dataflow: A new field image repository username secret id is added to message .google.dataflow.v1beta3.ContainerSpec ( 2f22244 ) dataflow: A new field name is added to message .google.dataflow.v1beta3.ListJobsRequest ( 2f22244 ) dataflow: A new field parent name is added to message .google.dataflow.v1beta3.ParameterMetadata ( 2f22244 ) dataflow: A new field parent trigger values is added to message .google.dataflow.v1beta3.ParameterMetadata ( 2f22244 ) dataflow: A new field runtime updatable params is added to message .google.dataflow.v1beta3.Job ( 2f22244 ) dataflow: A new field satisfies pzi is added to message .google.dataflow.v1beta3.Job ( 2f22244 ) dataflow: A new field service resources is added to message .google.dataflow.v1beta3.Job ( 2f22244 ) dataflow: A new field step names hash is added to message .google.dataflow.v1beta3.PipelineDescription ( 2f22244 ) dataflow: A new field straggler info is added to message .google.dataflow.v1beta3.WorkItemDetails ( 2f22244 ) dataflow: A new field straggler summary is added to message .google.dataflow.v1beta3.StageSummary ( 2f22244 ) dataflow: A new field streaming mode is added to message .google.dataflow.v1beta3.Environment ( 2f22244 ) dataflow: A new field streaming mode is added to message .google.dataflow.v1beta3.FlexTemplateRuntimeEnvironment ( 2f22244 ) dataflow: A new field streaming mode is added to message .google.dataflow.v1beta3.RuntimeEnvironment ( 2f22244 ) dataflow: A new field streaming is added to message .google.dataflow.v1beta3.TemplateMetadata ( 2f22244 ) dataflow: A new field supports at least once is added to message .google.dataflow.v1beta3.TemplateMetadata ( 2f22244 ) dataflow: A new field supports exactly once is added to message .google.dataflow.v1beta3.TemplateMetadata ( 2f22244 ) dataflow: A new field trie is added to message .google.dataflow.v1beta3.MetricUpdate ( 2f22244 ) dataflow: A new field update mask is added to message .google.dataflow.v1beta3.UpdateJobRequest ( 2f22244 ) dataflow: A new field use streaming engine resource based billing is added to message .google.dataflow.v1beta3.Environment ( 2f22244 ) dataflow: A new field user display properties is added to message .google.dataflow.v1beta3.JobMetadata ( 2f22244 ) dataflow: A new message DataSamplingConfig is added ( 2f22244 ) dataflow: A new message HotKeyDebuggingInfo is added ( 2f22244 ) dataflow: A new message ParameterMetadataEnumOption is added ( 2f22244 ) dataflow: A new message RuntimeUpdatableParams is added ( 2f22244 ) dataflow: A new message SdkBug is added ( 2f22244 ) dataflow: A new message ServiceResources is added ( 2f22244 ) dataflow: A new message Straggler is added ( 2f22244 ) dataflow: A new message StragglerInfo is added ( 2f22244 ) dataflow: A new message StragglerSummary is added ( 2f22244 ) dataflow: A new message StreamingStragglerInfo is added ( 2f22244 ) dataflow: A new method signature job,update mask is added to method UpdateJob in service JobsV1Beta3 ( 2f22244 ) dataflow: A new value BIGQUERY TABLE is added to enum ParameterType ( 2f22244 ) dataflow: A new value BOOLEAN is added to enum ParameterType ( 2f22244 ) dataflow: A new value ENUM is added to enum ParameterType ( 2f22244 ) dataflow: A new value GO is added to enum Language ( 2f22244 ) dataflow: A new value JAVASCRIPT UDF FILE is added to enum ParameterType ( 2f22244 ) dataflow: A new value KAFKA READ TOPIC is added to enum ParameterType ( 2f22244 ) dataflow: A new value KAFKA TOPIC is added to enum ParameterType ( 2f22244 ) dataflow: A new value KAFKA WRITE TOPIC is added to enum ParameterType ( 2f22244 ) dataflow: A new value KMS KEY NAME is added to enum ParameterType ( 2f22244 ) dataflow: A new value MACHINE TYPE is added to enum ParameterType ( 2f22244 ) dataflow: A new value NUMBER is added to enum ParameterType ( 2f22244 ) dataflow: A new value SERVICE ACCOUNT is added to enum ParameterType ( 2f22244 ) dataflow: A new value WORKER REGION is added to enum ParameterType ( 2f22244 ) dataflow: A new value WORKER ZONE is added to enum ParameterType ( 2f22244 ) Bug Fixes dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) Documentation dataflow: A comment for enum JobState is changed ( 2f22244 ) dataflow: A comment for enum WorkerIPAddressConfiguration is changed ( 2f22244 ) dataflow: A comment for enum value JOB VIEW ALL in enum JobView is changed ( 2f22244 ) dataflow: A comment for field additional experiments in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field additional user labels in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field bypass temp dir validation in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field capabilities in message .google.dataflow.v1beta3.SdkHarnessContainerImage is changed ( 2f22244 ) dataflow: A comment for field current state in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field dataset in message .google.dataflow.v1beta3.Environment is changed ( 2f22244 ) dataflow: A comment for field debug options in message .google.dataflow.v1beta3.Environment is changed ( 2f22244 ) dataflow: A comment for field dump heap on oom in message .google.dataflow.v1beta3.FlexTemplateRuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field dynamic template in message .google.dataflow.v1beta3.LaunchTemplateRequest is changed ( 2f22244 ) dataflow: A comment for field enable hot key logging in message .google.dataflow.v1beta3.DebugOptions is changed ( 2f22244 ) dataflow: A comment for field enable streaming engine in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field environment in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field flex resource scheduling goal in message .google.dataflow.v1beta3.Environment is changed ( 2f22244 ) dataflow: A comment for field gcs path in message .google.dataflow.v1beta3.DynamicTemplateLaunchParams is changed ( 2f22244 ) dataflow: A comment for field gcs path in message .google.dataflow.v1beta3.LaunchTemplateRequest is changed ( 2f22244 ) dataflow: A comment for field id in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field ip configuration in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field job name in message .google.dataflow.v1beta3.LaunchTemplateParameters is changed ( 2f22244 ) dataflow: A comment for field kms key name in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field launch parameters in message .google.dataflow.v1beta3.LaunchTemplateRequest is changed ( 2f22244 ) dataflow: A comment for field location in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field machine type in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field max workers in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field name in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field network in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field num workers in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field project id in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field requested state in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field save heap dumps to gcs path in message .google.dataflow.v1beta3.FlexTemplateRuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field service account email in message .google.dataflow.v1beta3.Environment is changed ( 2f22244 ) dataflow: A comment for field service account email in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field service kms key name in message .google.dataflow.v1beta3.Environment is changed ( 2f22244 ) dataflow: A comment for field service options in message .google.dataflow.v1beta3.Environment is changed ( 2f22244 ) dataflow: A comment for field set in message .google.dataflow.v1beta3.MetricUpdate is changed ( 2f22244 ) dataflow: A comment for field subnetwork in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field temp location in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field transform name mapping in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field type in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field worker region in message .google.dataflow.v1beta3.Environment is changed ( 2f22244 ) dataflow: A comment for field worker region in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field worker zone in message .google.dataflow.v1beta3.Environment is changed ( 2f22244 ) dataflow: A comment for field worker zone in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field zone in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for message DynamicTemplateLaunchParams is changed ( 2f22244 ) dataflow: A comment for message Job is changed ( 2f22244 ) dataflow: A comment for message JobExecutionStageInfo is changed ( 2f22244 ) dataflow: A comment for message JobMetrics is changed ( 2f22244 ) dataflow: A comment for message LaunchTemplateParameters is changed ( 2f22244 ) dataflow: A comment for message MetricUpdate is changed ( 2f22244 ) dataflow: A comment for message SdkHarnessContainerImage is changed ( 2f22244 ) dataflow: A comment for message Step is changed ( 2f22244 ) dataflow: A comment for method AggregatedListJobs in service JobsV1Beta3 is changed ( 2f22244 ) dataflow: A comment for method CreateJob in service JobsV1Beta3 is changed ( 2f22244 ) dataflow: A comment for method CreateJobFromTemplate in service TemplatesService is changed ( 2f22244 ) dataflow: A comment for method GetTemplate in service TemplatesService is changed ( 2f22244 ) dataflow: A comment for method LaunchTemplate in service TemplatesService is changed ( 2f22244 ) dataflow: A comment for method ListJobs in service JobsV1Beta3 is changed ( 2f22244 ) dataflow: A comment for service FlexTemplatesService is changed ( 2f22244 ) April 21, 2025 Libraries Go 0.10.6 (2025-04-15) Bug Fixes dataflow: Update google.golang.org/api to 0.229.0 ( 3319672 ) March 17, 2025 Libraries Go 0.10.5 (2025-03-13) Bug Fixes dataflow: Update golang.org/x/net to 0.37.0 ( 1144978 ) March 13, 2025 Feature Dataflow now supports data lineage.

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- You can adjust several Dataflow BigQuery connector related configurations to achieve the expected performance when writing to BigQuery using streaming inserts.
- Dataflow is unable to determine backlog When running a streaming pipeline from Pub/Sub, the following warning occurs: Dataflow is unable to determine the backlog for Pub/Sub subscription When a Dataflow pipeline pulls data from Pub/Sub, Dataflow needs to repeatedly request information from Pub/Sub.
- When you run a Dataflow job that doesn't use Dataflow Shuffle or Streaming Engine, workers need to communicate with each other using TCP ports 12345 and 12346 within the VPC network.
- Or: Invalid extensions name: googclient deliveryattempt This error occurs when your Dataflow job has the following characteristics: The Dataflow job uses Streaming Engine.

### "Performance characteristics of Kafka to BigQuery pipelines \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance](https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance)
- Source ID: `site-docs-root-2`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- This page describes performance characteristics for Dataflow streaming jobs that read from Apache Kafka and write to BigQuery.
- BQ TABLE NAME dlq" , \ numStorageWriteApiStreams = 400 , \ useStorageWriteApiAtLeastOnce = true Replace the following: JOB NAME : the Dataflow job name PROJECT ID : the project ID KAFKA BOOTSTRAP ADDRESS : the bootstrap address of the Apache Kafka cluster KAFKA TOPIC : the name of the Kafka topic BQ DATASET : the name of the BigQuery dataset BQ TABLE NAME : the name of the BigQuery table Generate test data To generate test data, use the following command to run the Streaming Data Generator template : gcloud dataflow flex-template run JOB NAME \ --project = PROJECT ID \ --template-file-gcs-location = gs://dataflow-templates-us-central1/latest/flex/Streaming Data Generator \ --max-workers = 140 \ --parameters \ schemaLocation = SCHEMA LOCATION , \ qps = 1000000 , \ sinkType = KAFKA, \ bootstrapServer = KAFKA BOOTSTRAP ADDRESS , \ kafkaTopic = KAFKA TOPIC , \ outputType = JSON Replace the following: JOB NAME : the Dataflow job name PROJECT ID : the project ID SCHEMA LOCATION : the path to a schema file in Cloud Storage KAFKA BOOTSTRAP ADDRESS : the bootstrap address of the Apache Kafka cluster KAFKA TOPIC : the name of the Kafka topic The Streaming Data Generator template uses a JSON Data Generator file to define the message schema.
- BQ TABLE NAME dlq" , \ numStorageWriteApiStreams = 400 At-least-once mode gcloud dataflow flex-template run JOB NAME \ --project = PROJECT ID \ --template-file-gcs-location = gs://dataflow-templates-us-central1/latest/flex/Kafka to BigQuery Flex \ --enable-streaming-engine \ --additional-experiments = streaming mode at least once \ --parameters \ readBootstrapServerAndTopic = " KAFKA BOOTSTRAP ADDRESS ; KAFKA TOPIC " , \ kafkaReadAuthenticationMode = APPLICATION DEFAULT CREDENTIALS, \ messageFormat = JSON, \ writeMode = SINGLE TABLE NAME, \ outputTableSpec = " PROJECT ID : BQ DATASET .
- The benchmark tests used a message schema similar to the following: { "logStreamId" : "{{integer(1000001,2000000)}}" , "message" : "{{alphaNumeric(962)}}" } Next steps Use the Dataflow job monitoring interface Best practices for Dataflow cost optimization Troubleshoot slow or stuck streaming jobs Read from Apache Kafka to Dataflow Write from Dataflow to BigQuery Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Best practices for large batch pipelines \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices](https://docs.cloud.google.com/dataflow/docs/guides/large-pipeline-best-practices)
- Source ID: `site-docs-root-2`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- For example, if you're getting the same throughput with eight cores on Dataflow as you are with one core locally, the job might be bottlenecked on contention for a resource.
- By default, Dataflow retries these failed tasks four times in batch mode and an unlimited number of times in streaming mode.
- If your pipeline has any Dataflow recommendations, follow them to improve performance.
- Inspect your code to find potential bottlenecks when deploying at scale.

