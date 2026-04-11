---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.813Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Confidential VM worker support"
feature_slug: "confidential-vm-worker-support"
latest_feature_date: "2023-06-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm"
  - "https://docs.cloud.google.com/dataflow/docs/release-notes"
  - "https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime"
  - "https://docs.cloud.google.com/dataflow/docs/guides/flexrs"
keywords:
  - "confidential"
  - "vm"
  - "worker"
  - "dataflow"
  - "supports"
  - "vms"
  - "for"
---

# Confidential VM worker support

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Dataflow supports Confidential VMs for worker VMs.

## Extended Definition

Dataflow supports Confidential VMs for worker VMs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm](https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm)
- [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- [https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime](https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime)
- [https://docs.cloud.google.com/dataflow/docs/guides/flexrs](https://docs.cloud.google.com/dataflow/docs/guides/flexrs)

## Supporting Pages

### Configure Dataflow worker VMs \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm](https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To verify that the Dataflow worker VMs are created with the specified minimum CPU platform, check the Cloud Logging entries for the job as follows: Navigate to the Cloud Logging console in the Google Cloud console.
- By default, Dataflow selects the machine type for the worker VMs that run your job, along with the size and type of Persistent Disk.
- This document describes how to configure the worker VMs for a Dataflow job.
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Configure Dataflow worker VMs Stay organized with collections Save and categorize content based on your preferences.

### Dataflow release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- June 13, 2023 Feature Dataflow now supports Confidential VMs for Dataflow worker VMs.
- May 12, 2025 Libraries Go 0.11.0 (2025-05-06) Features dataflow: A new enum StreamingMode is added ( 2f22244 ) dataflow: A new field bugs is added to message .google.dataflow.v1beta3.SdkVersion ( 2f22244 ) dataflow: A new field data sampling is added to message .google.dataflow.v1beta3.DebugOptions ( 2f22244 ) dataflow: A new field default streaming mode is added to message .google.dataflow.v1beta3.TemplateMetadata ( 2f22244 ) dataflow: A new field default value is added to message .google.dataflow.v1beta3.ParameterMetadata ( 2f22244 ) dataflow: A new field disk size gb is added to message .google.dataflow.v1beta3.RuntimeEnvironment ( 2f22244 ) dataflow: A new field dynamic destinations is added to message .google.dataflow.v1beta3.PubsubLocation ( 2f22244 ) dataflow: A new field enable launcher vm serial port logging is added to message .google.dataflow.v1beta3.FlexTemplateRuntimeEnvironment ( 2f22244 ) dataflow: A new field enum options is added to message .google.dataflow.v1beta3.ParameterMetadata ( 2f22244 ) dataflow: A new field group name is added to message .google.dataflow.v1beta3.ParameterMetadata ( 2f22244 ) dataflow: A new field hidden ui is added to message .google.dataflow.v1beta3.ParameterMetadata ( 2f22244 ) dataflow: A new field image repository cert path is added to message .google.dataflow.v1beta3.ContainerSpec ( 2f22244 ) dataflow: A new field image repository password secret id is added to message .google.dataflow.v1beta3.ContainerSpec ( 2f22244 ) dataflow: A new field image repository username secret id is added to message .google.dataflow.v1beta3.ContainerSpec ( 2f22244 ) dataflow: A new field name is added to message .google.dataflow.v1beta3.ListJobsRequest ( 2f22244 ) dataflow: A new field parent name is added to message .google.dataflow.v1beta3.ParameterMetadata ( 2f22244 ) dataflow: A new field parent trigger values is added to message .google.dataflow.v1beta3.ParameterMetadata ( 2f22244 ) dataflow: A new field runtime updatable params is added to message .google.dataflow.v1beta3.Job ( 2f22244 ) dataflow: A new field satisfies pzi is added to message .google.dataflow.v1beta3.Job ( 2f22244 ) dataflow: A new field service resources is added to message .google.dataflow.v1beta3.Job ( 2f22244 ) dataflow: A new field step names hash is added to message .google.dataflow.v1beta3.PipelineDescription ( 2f22244 ) dataflow: A new field straggler info is added to message .google.dataflow.v1beta3.WorkItemDetails ( 2f22244 ) dataflow: A new field straggler summary is added to message .google.dataflow.v1beta3.StageSummary ( 2f22244 ) dataflow: A new field streaming mode is added to message .google.dataflow.v1beta3.Environment ( 2f22244 ) dataflow: A new field streaming mode is added to message .google.dataflow.v1beta3.FlexTemplateRuntimeEnvironment ( 2f22244 ) dataflow: A new field streaming mode is added to message .google.dataflow.v1beta3.RuntimeEnvironment ( 2f22244 ) dataflow: A new field streaming is added to message .google.dataflow.v1beta3.TemplateMetadata ( 2f22244 ) dataflow: A new field supports at least once is added to message .google.dataflow.v1beta3.TemplateMetadata ( 2f22244 ) dataflow: A new field supports exactly once is added to message .google.dataflow.v1beta3.TemplateMetadata ( 2f22244 ) dataflow: A new field trie is added to message .google.dataflow.v1beta3.MetricUpdate ( 2f22244 ) dataflow: A new field update mask is added to message .google.dataflow.v1beta3.UpdateJobRequest ( 2f22244 ) dataflow: A new field use streaming engine resource based billing is added to message .google.dataflow.v1beta3.Environment ( 2f22244 ) dataflow: A new field user display properties is added to message .google.dataflow.v1beta3.JobMetadata ( 2f22244 ) dataflow: A new message DataSamplingConfig is added ( 2f22244 ) dataflow: A new message HotKeyDebuggingInfo is added ( 2f22244 ) dataflow: A new message ParameterMetadataEnumOption is added ( 2f22244 ) dataflow: A new message RuntimeUpdatableParams is added ( 2f22244 ) dataflow: A new message SdkBug is added ( 2f22244 ) dataflow: A new message ServiceResources is added ( 2f22244 ) dataflow: A new message Straggler is added ( 2f22244 ) dataflow: A new message StragglerInfo is added ( 2f22244 ) dataflow: A new message StragglerSummary is added ( 2f22244 ) dataflow: A new message StreamingStragglerInfo is added ( 2f22244 ) dataflow: A new method signature job,update mask is added to method UpdateJob in service JobsV1Beta3 ( 2f22244 ) dataflow: A new value BIGQUERY TABLE is added to enum ParameterType ( 2f22244 ) dataflow: A new value BOOLEAN is added to enum ParameterType ( 2f22244 ) dataflow: A new value ENUM is added to enum ParameterType ( 2f22244 ) dataflow: A new value GO is added to enum Language ( 2f22244 ) dataflow: A new value JAVASCRIPT UDF FILE is added to enum ParameterType ( 2f22244 ) dataflow: A new value KAFKA READ TOPIC is added to enum ParameterType ( 2f22244 ) dataflow: A new value KAFKA TOPIC is added to enum ParameterType ( 2f22244 ) dataflow: A new value KAFKA WRITE TOPIC is added to enum ParameterType ( 2f22244 ) dataflow: A new value KMS KEY NAME is added to enum ParameterType ( 2f22244 ) dataflow: A new value MACHINE TYPE is added to enum ParameterType ( 2f22244 ) dataflow: A new value NUMBER is added to enum ParameterType ( 2f22244 ) dataflow: A new value SERVICE ACCOUNT is added to enum ParameterType ( 2f22244 ) dataflow: A new value WORKER REGION is added to enum ParameterType ( 2f22244 ) dataflow: A new value WORKER ZONE is added to enum ParameterType ( 2f22244 ) Bug Fixes dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) Documentation dataflow: A comment for enum JobState is changed ( 2f22244 ) dataflow: A comment for enum WorkerIPAddressConfiguration is changed ( 2f22244 ) dataflow: A comment for enum value JOB VIEW ALL in enum JobView is changed ( 2f22244 ) dataflow: A comment for field additional experiments in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field additional user labels in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field bypass temp dir validation in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field capabilities in message .google.dataflow.v1beta3.SdkHarnessContainerImage is changed ( 2f22244 ) dataflow: A comment for field current state in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field dataset in message .google.dataflow.v1beta3.Environment is changed ( 2f22244 ) dataflow: A comment for field debug options in message .google.dataflow.v1beta3.Environment is changed ( 2f22244 ) dataflow: A comment for field dump heap on oom in message .google.dataflow.v1beta3.FlexTemplateRuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field dynamic template in message .google.dataflow.v1beta3.LaunchTemplateRequest is changed ( 2f22244 ) dataflow: A comment for field enable hot key logging in message .google.dataflow.v1beta3.DebugOptions is changed ( 2f22244 ) dataflow: A comment for field enable streaming engine in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field environment in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field flex resource scheduling goal in message .google.dataflow.v1beta3.Environment is changed ( 2f22244 ) dataflow: A comment for field gcs path in message .google.dataflow.v1beta3.DynamicTemplateLaunchParams is changed ( 2f22244 ) dataflow: A comment for field gcs path in message .google.dataflow.v1beta3.LaunchTemplateRequest is changed ( 2f22244 ) dataflow: A comment for field id in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field ip configuration in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field job name in message .google.dataflow.v1beta3.LaunchTemplateParameters is changed ( 2f22244 ) dataflow: A comment for field kms key name in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field launch parameters in message .google.dataflow.v1beta3.LaunchTemplateRequest is changed ( 2f22244 ) dataflow: A comment for field location in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field machine type in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field max workers in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field name in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field network in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field num workers in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field project id in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field requested state in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field save heap dumps to gcs path in message .google.dataflow.v1beta3.FlexTemplateRuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field service account email in message .google.dataflow.v1beta3.Environment is changed ( 2f22244 ) dataflow: A comment for field service account email in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field service kms key name in message .google.dataflow.v1beta3.Environment is changed ( 2f22244 ) dataflow: A comment for field service options in message .google.dataflow.v1beta3.Environment is changed ( 2f22244 ) dataflow: A comment for field set in message .google.dataflow.v1beta3.MetricUpdate is changed ( 2f22244 ) dataflow: A comment for field subnetwork in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field temp location in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field transform name mapping in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field type in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field worker region in message .google.dataflow.v1beta3.Environment is changed ( 2f22244 ) dataflow: A comment for field worker region in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field worker zone in message .google.dataflow.v1beta3.Environment is changed ( 2f22244 ) dataflow: A comment for field worker zone in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field zone in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for message DynamicTemplateLaunchParams is changed ( 2f22244 ) dataflow: A comment for message Job is changed ( 2f22244 ) dataflow: A comment for message JobExecutionStageInfo is changed ( 2f22244 ) dataflow: A comment for message JobMetrics is changed ( 2f22244 ) dataflow: A comment for message LaunchTemplateParameters is changed ( 2f22244 ) dataflow: A comment for message MetricUpdate is changed ( 2f22244 ) dataflow: A comment for message SdkHarnessContainerImage is changed ( 2f22244 ) dataflow: A comment for message Step is changed ( 2f22244 ) dataflow: A comment for method AggregatedListJobs in service JobsV1Beta3 is changed ( 2f22244 ) dataflow: A comment for method CreateJob in service JobsV1Beta3 is changed ( 2f22244 ) dataflow: A comment for method CreateJobFromTemplate in service TemplatesService is changed ( 2f22244 ) dataflow: A comment for method GetTemplate in service TemplatesService is changed ( 2f22244 ) dataflow: A comment for method LaunchTemplate in service TemplatesService is changed ( 2f22244 ) dataflow: A comment for method ListJobs in service JobsV1Beta3 is changed ( 2f22244 ) dataflow: A comment for service FlexTemplatesService is changed ( 2f22244 ) April 21, 2025 Libraries Go 0.10.6 (2025-04-15) Bug Fixes dataflow: Update google.golang.org/api to 0.229.0 ( 3319672 ) March 17, 2025 Libraries Go 0.10.5 (2025-03-13) Bug Fixes dataflow: Update golang.org/x/net to 0.37.0 ( 1144978 ) March 13, 2025 Feature Dataflow now supports data lineage.
- September 15, 2016 Change The default autoscaling ceiling for batch pipelines using the Cloud Dataflow SDK for Java 1.6 or newer has been raised to 10 worker VMs.
- September 08, 2025 Feature Dataflow now supports using secure tags to set firewall rules on worker VMs.

### Use Dataflow Prime \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime](https://docs.cloud.google.com/dataflow/docs/guides/enable-dataflow-prime)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Unsupported features Dataflow Prime doesn't support the following: Designating specific VM types by using the flag --worker machine type or --machine type for Python pipelines and --workerMachineType for Java pipelines.
- Vertical Autoscaling This feature automatically adjusts the memory available to the Dataflow worker VMs to fit the needs of the pipeline and help prevent out-of-memory errors.
- Viewing or using SSH to log into worker VMs.
- Feature Dataflow Prime Dataflow Runner v2 Default feature with no option to turn off for batch jobs and optional for streaming jobs Default feature with an option to turn off for batch jobs and optional for streaming jobs Dataflow Shuffle for batch jobs Default feature with an option to turn off Default feature with an option to turn off Streaming Engine for streaming jobs Optional feature for Java pipelines and always on for Python pipelines Optional feature for Java pipelines and always on for Python pipelines since 2.45.0 Horizontal Autoscaling Default feature with option to turn off Default feature with option to turn off Vertical Autoscaling Default feature with option to turn off Not applicable Right fitting Optional feature Optional feature Billing Serverless billing Standard billing What's next Read about Dataflow quotas .

### Use Flexible Resource Scheduling in Cloud Dataflow \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/flexrs](https://docs.cloud.google.com/dataflow/docs/guides/flexrs)
- Source ID: `site-docs-root-2`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Dataflow selects preemptible VMs for 90% of workers in the worker pool by default.
- Pricing FlexRS jobs are billed for the following resources: Regular and preemptible CPUs Memory resources Dataflow Shuffle resources 25 GB per worker of Persistent Disk resources While Dataflow uses both preemptible and regular workers to execute your FlexRS job, you are billed a uniform discounted rate compared to regular Dataflow prices regardless of the worker type.
- FlexRS reduces batch processing costs by using advanced scheduling techniques , the Dataflow Shuffle service, and a combination of preemptible virtual machine (VM) instances and regular VMs.
- Using Dataflow Shuffle allows FlexRS to handle the preemption of a worker VM better, because the Dataflow service doesn't have to redistribute data to the remaining workers.

