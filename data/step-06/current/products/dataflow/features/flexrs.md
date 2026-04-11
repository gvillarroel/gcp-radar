---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.837Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "FlexRS"
feature_slug: "flexrs"
latest_feature_date: "2021-02-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/flexrs"
  - "https://docs.cloud.google.com/dataflow/docs/release-notes"
  - "https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance"
  - "https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline"
keywords:
  - "flexrs"
  - "is"
  - "flexible"
  - "resource"
  - "scheduling"
  - "for"
  - "reducing"
  - "dataflow"
---

# FlexRS

Product: Dataflow
Coverage: LOW

## Step 02 Summary

FlexRS is a flexible resource scheduling feature for reducing Dataflow job cost; FlexRS is a flexible resource scheduling feature for reducing Dataflow job cost.

## Extended Definition

FlexRS is a flexible resource scheduling feature for reducing Dataflow job cost; FlexRS is a flexible resource scheduling feature for reducing Dataflow job cost.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/flexrs](https://docs.cloud.google.com/dataflow/docs/guides/flexrs)
- [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- [https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance](https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance)
- [https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline)

## Supporting Pages

### Use Flexible Resource Scheduling in Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/flexrs](https://docs.cloud.google.com/dataflow/docs/guides/flexrs)
- Source ID: `site-docs-root-2`
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This page explains how to enable Flexible Resource Scheduling (FlexRS) for autoscaled batch pipelines in Dataflow.
- Pricing FlexRS jobs are billed for the following resources: Regular and preemptible CPUs Memory resources Dataflow Shuffle resources 25 GB per worker of Persistent Disk resources While Dataflow uses both preemptible and regular workers to execute your FlexRS job, you are billed a uniform discounted rate compared to regular Dataflow prices regardless of the worker type.
- Pipeline options Java To enable a FlexRS job, use the following pipeline option: --flexRSGoal=COST OPTIMIZED , where the cost-optimized goal means that the Dataflow service chooses any available discounted resources. --flexRSGoal=SPEED OPTIMIZED , where it optimizes for lower execution time.
- Python To enable a FlexRS job, use the following pipeline option: --flexrs goal=COST OPTIMIZED , where the cost-optimized goal means that the Dataflow service chooses any available discounted resources. --flexrs goal=SPEED OPTIMIZED , where it optimizes for lower execution time.

### Dataflow release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Feature Cloud Dataflow Shuffle is now available in two additional regions: asia-northeast1 (Tokyo) europe-west4 (Netherlands) Feature Cloud Dataflow provides beta support for Flexible Resource Scheduling (FlexRS) in the us-central1 and europe-west1 regions .
- Feature Cloud Dataflow provides beta support for Flexible Resource Scheduling (FlexRS) in the us-central1 and europe-west1 regions .
- November 18, 2019 Feature Flexible Resource Scheduling (FlexRS) in Cloud Dataflow is generally available.
- May 12, 2025 Libraries Go 0.11.0 (2025-05-06) Features dataflow: A new enum StreamingMode is added ( 2f22244 ) dataflow: A new field bugs is added to message .google.dataflow.v1beta3.SdkVersion ( 2f22244 ) dataflow: A new field data sampling is added to message .google.dataflow.v1beta3.DebugOptions ( 2f22244 ) dataflow: A new field default streaming mode is added to message .google.dataflow.v1beta3.TemplateMetadata ( 2f22244 ) dataflow: A new field default value is added to message .google.dataflow.v1beta3.ParameterMetadata ( 2f22244 ) dataflow: A new field disk size gb is added to message .google.dataflow.v1beta3.RuntimeEnvironment ( 2f22244 ) dataflow: A new field dynamic destinations is added to message .google.dataflow.v1beta3.PubsubLocation ( 2f22244 ) dataflow: A new field enable launcher vm serial port logging is added to message .google.dataflow.v1beta3.FlexTemplateRuntimeEnvironment ( 2f22244 ) dataflow: A new field enum options is added to message .google.dataflow.v1beta3.ParameterMetadata ( 2f22244 ) dataflow: A new field group name is added to message .google.dataflow.v1beta3.ParameterMetadata ( 2f22244 ) dataflow: A new field hidden ui is added to message .google.dataflow.v1beta3.ParameterMetadata ( 2f22244 ) dataflow: A new field image repository cert path is added to message .google.dataflow.v1beta3.ContainerSpec ( 2f22244 ) dataflow: A new field image repository password secret id is added to message .google.dataflow.v1beta3.ContainerSpec ( 2f22244 ) dataflow: A new field image repository username secret id is added to message .google.dataflow.v1beta3.ContainerSpec ( 2f22244 ) dataflow: A new field name is added to message .google.dataflow.v1beta3.ListJobsRequest ( 2f22244 ) dataflow: A new field parent name is added to message .google.dataflow.v1beta3.ParameterMetadata ( 2f22244 ) dataflow: A new field parent trigger values is added to message .google.dataflow.v1beta3.ParameterMetadata ( 2f22244 ) dataflow: A new field runtime updatable params is added to message .google.dataflow.v1beta3.Job ( 2f22244 ) dataflow: A new field satisfies pzi is added to message .google.dataflow.v1beta3.Job ( 2f22244 ) dataflow: A new field service resources is added to message .google.dataflow.v1beta3.Job ( 2f22244 ) dataflow: A new field step names hash is added to message .google.dataflow.v1beta3.PipelineDescription ( 2f22244 ) dataflow: A new field straggler info is added to message .google.dataflow.v1beta3.WorkItemDetails ( 2f22244 ) dataflow: A new field straggler summary is added to message .google.dataflow.v1beta3.StageSummary ( 2f22244 ) dataflow: A new field streaming mode is added to message .google.dataflow.v1beta3.Environment ( 2f22244 ) dataflow: A new field streaming mode is added to message .google.dataflow.v1beta3.FlexTemplateRuntimeEnvironment ( 2f22244 ) dataflow: A new field streaming mode is added to message .google.dataflow.v1beta3.RuntimeEnvironment ( 2f22244 ) dataflow: A new field streaming is added to message .google.dataflow.v1beta3.TemplateMetadata ( 2f22244 ) dataflow: A new field supports at least once is added to message .google.dataflow.v1beta3.TemplateMetadata ( 2f22244 ) dataflow: A new field supports exactly once is added to message .google.dataflow.v1beta3.TemplateMetadata ( 2f22244 ) dataflow: A new field trie is added to message .google.dataflow.v1beta3.MetricUpdate ( 2f22244 ) dataflow: A new field update mask is added to message .google.dataflow.v1beta3.UpdateJobRequest ( 2f22244 ) dataflow: A new field use streaming engine resource based billing is added to message .google.dataflow.v1beta3.Environment ( 2f22244 ) dataflow: A new field user display properties is added to message .google.dataflow.v1beta3.JobMetadata ( 2f22244 ) dataflow: A new message DataSamplingConfig is added ( 2f22244 ) dataflow: A new message HotKeyDebuggingInfo is added ( 2f22244 ) dataflow: A new message ParameterMetadataEnumOption is added ( 2f22244 ) dataflow: A new message RuntimeUpdatableParams is added ( 2f22244 ) dataflow: A new message SdkBug is added ( 2f22244 ) dataflow: A new message ServiceResources is added ( 2f22244 ) dataflow: A new message Straggler is added ( 2f22244 ) dataflow: A new message StragglerInfo is added ( 2f22244 ) dataflow: A new message StragglerSummary is added ( 2f22244 ) dataflow: A new message StreamingStragglerInfo is added ( 2f22244 ) dataflow: A new method signature job,update mask is added to method UpdateJob in service JobsV1Beta3 ( 2f22244 ) dataflow: A new value BIGQUERY TABLE is added to enum ParameterType ( 2f22244 ) dataflow: A new value BOOLEAN is added to enum ParameterType ( 2f22244 ) dataflow: A new value ENUM is added to enum ParameterType ( 2f22244 ) dataflow: A new value GO is added to enum Language ( 2f22244 ) dataflow: A new value JAVASCRIPT UDF FILE is added to enum ParameterType ( 2f22244 ) dataflow: A new value KAFKA READ TOPIC is added to enum ParameterType ( 2f22244 ) dataflow: A new value KAFKA TOPIC is added to enum ParameterType ( 2f22244 ) dataflow: A new value KAFKA WRITE TOPIC is added to enum ParameterType ( 2f22244 ) dataflow: A new value KMS KEY NAME is added to enum ParameterType ( 2f22244 ) dataflow: A new value MACHINE TYPE is added to enum ParameterType ( 2f22244 ) dataflow: A new value NUMBER is added to enum ParameterType ( 2f22244 ) dataflow: A new value SERVICE ACCOUNT is added to enum ParameterType ( 2f22244 ) dataflow: A new value WORKER REGION is added to enum ParameterType ( 2f22244 ) dataflow: A new value WORKER ZONE is added to enum ParameterType ( 2f22244 ) Bug Fixes dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) Documentation dataflow: A comment for enum JobState is changed ( 2f22244 ) dataflow: A comment for enum WorkerIPAddressConfiguration is changed ( 2f22244 ) dataflow: A comment for enum value JOB VIEW ALL in enum JobView is changed ( 2f22244 ) dataflow: A comment for field additional experiments in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field additional user labels in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field bypass temp dir validation in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field capabilities in message .google.dataflow.v1beta3.SdkHarnessContainerImage is changed ( 2f22244 ) dataflow: A comment for field current state in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field dataset in message .google.dataflow.v1beta3.Environment is changed ( 2f22244 ) dataflow: A comment for field debug options in message .google.dataflow.v1beta3.Environment is changed ( 2f22244 ) dataflow: A comment for field dump heap on oom in message .google.dataflow.v1beta3.FlexTemplateRuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field dynamic template in message .google.dataflow.v1beta3.LaunchTemplateRequest is changed ( 2f22244 ) dataflow: A comment for field enable hot key logging in message .google.dataflow.v1beta3.DebugOptions is changed ( 2f22244 ) dataflow: A comment for field enable streaming engine in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field environment in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field flex resource scheduling goal in message .google.dataflow.v1beta3.Environment is changed ( 2f22244 ) dataflow: A comment for field gcs path in message .google.dataflow.v1beta3.DynamicTemplateLaunchParams is changed ( 2f22244 ) dataflow: A comment for field gcs path in message .google.dataflow.v1beta3.LaunchTemplateRequest is changed ( 2f22244 ) dataflow: A comment for field id in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field ip configuration in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field job name in message .google.dataflow.v1beta3.LaunchTemplateParameters is changed ( 2f22244 ) dataflow: A comment for field kms key name in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field launch parameters in message .google.dataflow.v1beta3.LaunchTemplateRequest is changed ( 2f22244 ) dataflow: A comment for field location in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field machine type in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field max workers in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field name in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field network in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field num workers in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field project id in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field requested state in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field save heap dumps to gcs path in message .google.dataflow.v1beta3.FlexTemplateRuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field service account email in message .google.dataflow.v1beta3.Environment is changed ( 2f22244 ) dataflow: A comment for field service account email in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field service kms key name in message .google.dataflow.v1beta3.Environment is changed ( 2f22244 ) dataflow: A comment for field service options in message .google.dataflow.v1beta3.Environment is changed ( 2f22244 ) dataflow: A comment for field set in message .google.dataflow.v1beta3.MetricUpdate is changed ( 2f22244 ) dataflow: A comment for field subnetwork in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field temp location in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field transform name mapping in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field type in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field worker region in message .google.dataflow.v1beta3.Environment is changed ( 2f22244 ) dataflow: A comment for field worker region in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field worker zone in message .google.dataflow.v1beta3.Environment is changed ( 2f22244 ) dataflow: A comment for field worker zone in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field zone in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for message DynamicTemplateLaunchParams is changed ( 2f22244 ) dataflow: A comment for message Job is changed ( 2f22244 ) dataflow: A comment for message JobExecutionStageInfo is changed ( 2f22244 ) dataflow: A comment for message JobMetrics is changed ( 2f22244 ) dataflow: A comment for message LaunchTemplateParameters is changed ( 2f22244 ) dataflow: A comment for message MetricUpdate is changed ( 2f22244 ) dataflow: A comment for message SdkHarnessContainerImage is changed ( 2f22244 ) dataflow: A comment for message Step is changed ( 2f22244 ) dataflow: A comment for method AggregatedListJobs in service JobsV1Beta3 is changed ( 2f22244 ) dataflow: A comment for method CreateJob in service JobsV1Beta3 is changed ( 2f22244 ) dataflow: A comment for method CreateJobFromTemplate in service TemplatesService is changed ( 2f22244 ) dataflow: A comment for method GetTemplate in service TemplatesService is changed ( 2f22244 ) dataflow: A comment for method LaunchTemplate in service TemplatesService is changed ( 2f22244 ) dataflow: A comment for method ListJobs in service JobsV1Beta3 is changed ( 2f22244 ) dataflow: A comment for service FlexTemplatesService is changed ( 2f22244 ) April 21, 2025 Libraries Go 0.10.6 (2025-04-15) Bug Fixes dataflow: Update google.golang.org/api to 0.229.0 ( 3319672 ) March 17, 2025 Libraries Go 0.10.5 (2025-03-13) Bug Fixes dataflow: Update golang.org/x/net to 0.37.0 ( 1144978 ) March 13, 2025 Feature Dataflow now supports data lineage.

### "Performance characteristics of Kafka to BigQuery pipelines \_|\_ Cloud Dataflow\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance](https://docs.cloud.google.com/dataflow/docs/guides/kafka-bigquery-performance)
- Source ID: `site-docs-root-2`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- BQ TABLE NAME dlq" , \ numStorageWriteApiStreams = 400 At-least-once mode gcloud dataflow flex-template run JOB NAME \ --project = PROJECT ID \ --template-file-gcs-location = gs://dataflow-templates-us-central1/latest/flex/Kafka to BigQuery Flex \ --enable-streaming-engine \ --additional-experiments = streaming mode at least once \ --parameters \ readBootstrapServerAndTopic = " KAFKA BOOTSTRAP ADDRESS ; KAFKA TOPIC " , \ kafkaReadAuthenticationMode = APPLICATION DEFAULT CREDENTIALS, \ messageFormat = JSON, \ writeMode = SINGLE TABLE NAME, \ outputTableSpec = " PROJECT ID : BQ DATASET .
- The benchmark tests used a message schema similar to the following: { "logStreamId" : "{{integer(1000001,2000000)}}" , "message" : "{{alphaNumeric(962)}}" } Next steps Use the Dataflow job monitoring interface Best practices for Dataflow cost optimization Troubleshoot slow or stuck streaming jobs Read from Apache Kafka to Dataflow Write from Dataflow to BigQuery Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Based on the benchmark results for a 1 GiB/s pipeline, you can estimate the resource requirements as follows: Scaling Factor: (100 MiB/s) / (1 GiB/s) = 0.1 Projected worker nodes: 63 workers × 0.1 = 6.3 workers Projected number of Streaming Engine Compute Units per hour: 58 × 0.1 = 5.8 units per hour This value should only be used as an initial estimate.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Performance characteristics of Kafka to BigQuery pipelines Stay organized with collections Save and categorize content based on your preferences.

### Deploy Dataflow pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/deploying-a-pipeline)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- For more information about FlexRS, see Using Flexible Resource Scheduling in Dataflow .
- Dataflow Flexible Resource Scheduling Dataflow FlexRS reduces batch processing costs by using advanced scheduling techniques , the Dataflow Shuffle service, and a combination of preemptible virtual machine (VM) instances and regular VMs.
- If the Cloud Resource Manager API is enabled for your project, the pipeline validation tests check whether you have the project-level configurations needed to run your Dataflow job.
- Job optimizations In addition to managing Google Cloud resources, Dataflow automatically performs and optimizes many aspects of distributed parallel processing for you.

