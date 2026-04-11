---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.862Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Dataflow worker support in europe-west3"
feature_slug: "dataflow-worker-support-in-europe-west3"
latest_feature_date: "2017-08-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/data-sampling"
  - "https://docs.cloud.google.com/dataflow/docs/release-notes"
  - "https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template"
  - "https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline"
keywords:
  - "dataflow"
  - "worker"
  - "in"
  - "europe"
  - "west3"
  - "can"
  - "run"
  - "workers"
---

# Dataflow worker support in europe-west3

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Dataflow can run workers in zones within the europe-west3 region.

## Extended Definition

Dataflow can run workers in zones within the europe-west3 region.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/data-sampling](https://docs.cloud.google.com/dataflow/docs/guides/data-sampling)
- [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)
- [https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline)

## Supporting Pages

### "Use data sampling to observe pipeline data \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/data-sampling](https://docs.cloud.google.com/dataflow/docs/guides/data-sampling)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Ensure that you are using Runner v2 Make sure the workers have started.
- Data sampling is executed by the Dataflow workers.
- When running a Dataflow template, use the additional-experiments flag to disable exception sampling: --additional-experiments=disable always on exception sampling Security considerations Dataflow writes the sampled data to a Cloud Storage bucket that you create and manage.
- When running a Dataflow template, use the additional-experiments flag to enable data sampling: --additional-experiments=enable data sampling When periodic sampling is enabled, Dataflow collects samples from each PCollection in the job graph.

### Dataflow release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- August 01, 2017 Feature Cloud Dataflow is now able to use workers in zones in the europe-west3 region (Frankfurt).
- May 12, 2025 Libraries Go 0.11.0 (2025-05-06) Features dataflow: A new enum StreamingMode is added ( 2f22244 ) dataflow: A new field bugs is added to message .google.dataflow.v1beta3.SdkVersion ( 2f22244 ) dataflow: A new field data sampling is added to message .google.dataflow.v1beta3.DebugOptions ( 2f22244 ) dataflow: A new field default streaming mode is added to message .google.dataflow.v1beta3.TemplateMetadata ( 2f22244 ) dataflow: A new field default value is added to message .google.dataflow.v1beta3.ParameterMetadata ( 2f22244 ) dataflow: A new field disk size gb is added to message .google.dataflow.v1beta3.RuntimeEnvironment ( 2f22244 ) dataflow: A new field dynamic destinations is added to message .google.dataflow.v1beta3.PubsubLocation ( 2f22244 ) dataflow: A new field enable launcher vm serial port logging is added to message .google.dataflow.v1beta3.FlexTemplateRuntimeEnvironment ( 2f22244 ) dataflow: A new field enum options is added to message .google.dataflow.v1beta3.ParameterMetadata ( 2f22244 ) dataflow: A new field group name is added to message .google.dataflow.v1beta3.ParameterMetadata ( 2f22244 ) dataflow: A new field hidden ui is added to message .google.dataflow.v1beta3.ParameterMetadata ( 2f22244 ) dataflow: A new field image repository cert path is added to message .google.dataflow.v1beta3.ContainerSpec ( 2f22244 ) dataflow: A new field image repository password secret id is added to message .google.dataflow.v1beta3.ContainerSpec ( 2f22244 ) dataflow: A new field image repository username secret id is added to message .google.dataflow.v1beta3.ContainerSpec ( 2f22244 ) dataflow: A new field name is added to message .google.dataflow.v1beta3.ListJobsRequest ( 2f22244 ) dataflow: A new field parent name is added to message .google.dataflow.v1beta3.ParameterMetadata ( 2f22244 ) dataflow: A new field parent trigger values is added to message .google.dataflow.v1beta3.ParameterMetadata ( 2f22244 ) dataflow: A new field runtime updatable params is added to message .google.dataflow.v1beta3.Job ( 2f22244 ) dataflow: A new field satisfies pzi is added to message .google.dataflow.v1beta3.Job ( 2f22244 ) dataflow: A new field service resources is added to message .google.dataflow.v1beta3.Job ( 2f22244 ) dataflow: A new field step names hash is added to message .google.dataflow.v1beta3.PipelineDescription ( 2f22244 ) dataflow: A new field straggler info is added to message .google.dataflow.v1beta3.WorkItemDetails ( 2f22244 ) dataflow: A new field straggler summary is added to message .google.dataflow.v1beta3.StageSummary ( 2f22244 ) dataflow: A new field streaming mode is added to message .google.dataflow.v1beta3.Environment ( 2f22244 ) dataflow: A new field streaming mode is added to message .google.dataflow.v1beta3.FlexTemplateRuntimeEnvironment ( 2f22244 ) dataflow: A new field streaming mode is added to message .google.dataflow.v1beta3.RuntimeEnvironment ( 2f22244 ) dataflow: A new field streaming is added to message .google.dataflow.v1beta3.TemplateMetadata ( 2f22244 ) dataflow: A new field supports at least once is added to message .google.dataflow.v1beta3.TemplateMetadata ( 2f22244 ) dataflow: A new field supports exactly once is added to message .google.dataflow.v1beta3.TemplateMetadata ( 2f22244 ) dataflow: A new field trie is added to message .google.dataflow.v1beta3.MetricUpdate ( 2f22244 ) dataflow: A new field update mask is added to message .google.dataflow.v1beta3.UpdateJobRequest ( 2f22244 ) dataflow: A new field use streaming engine resource based billing is added to message .google.dataflow.v1beta3.Environment ( 2f22244 ) dataflow: A new field user display properties is added to message .google.dataflow.v1beta3.JobMetadata ( 2f22244 ) dataflow: A new message DataSamplingConfig is added ( 2f22244 ) dataflow: A new message HotKeyDebuggingInfo is added ( 2f22244 ) dataflow: A new message ParameterMetadataEnumOption is added ( 2f22244 ) dataflow: A new message RuntimeUpdatableParams is added ( 2f22244 ) dataflow: A new message SdkBug is added ( 2f22244 ) dataflow: A new message ServiceResources is added ( 2f22244 ) dataflow: A new message Straggler is added ( 2f22244 ) dataflow: A new message StragglerInfo is added ( 2f22244 ) dataflow: A new message StragglerSummary is added ( 2f22244 ) dataflow: A new message StreamingStragglerInfo is added ( 2f22244 ) dataflow: A new method signature job,update mask is added to method UpdateJob in service JobsV1Beta3 ( 2f22244 ) dataflow: A new value BIGQUERY TABLE is added to enum ParameterType ( 2f22244 ) dataflow: A new value BOOLEAN is added to enum ParameterType ( 2f22244 ) dataflow: A new value ENUM is added to enum ParameterType ( 2f22244 ) dataflow: A new value GO is added to enum Language ( 2f22244 ) dataflow: A new value JAVASCRIPT UDF FILE is added to enum ParameterType ( 2f22244 ) dataflow: A new value KAFKA READ TOPIC is added to enum ParameterType ( 2f22244 ) dataflow: A new value KAFKA TOPIC is added to enum ParameterType ( 2f22244 ) dataflow: A new value KAFKA WRITE TOPIC is added to enum ParameterType ( 2f22244 ) dataflow: A new value KMS KEY NAME is added to enum ParameterType ( 2f22244 ) dataflow: A new value MACHINE TYPE is added to enum ParameterType ( 2f22244 ) dataflow: A new value NUMBER is added to enum ParameterType ( 2f22244 ) dataflow: A new value SERVICE ACCOUNT is added to enum ParameterType ( 2f22244 ) dataflow: A new value WORKER REGION is added to enum ParameterType ( 2f22244 ) dataflow: A new value WORKER ZONE is added to enum ParameterType ( 2f22244 ) Bug Fixes dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) Documentation dataflow: A comment for enum JobState is changed ( 2f22244 ) dataflow: A comment for enum WorkerIPAddressConfiguration is changed ( 2f22244 ) dataflow: A comment for enum value JOB VIEW ALL in enum JobView is changed ( 2f22244 ) dataflow: A comment for field additional experiments in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field additional user labels in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field bypass temp dir validation in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field capabilities in message .google.dataflow.v1beta3.SdkHarnessContainerImage is changed ( 2f22244 ) dataflow: A comment for field current state in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field dataset in message .google.dataflow.v1beta3.Environment is changed ( 2f22244 ) dataflow: A comment for field debug options in message .google.dataflow.v1beta3.Environment is changed ( 2f22244 ) dataflow: A comment for field dump heap on oom in message .google.dataflow.v1beta3.FlexTemplateRuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field dynamic template in message .google.dataflow.v1beta3.LaunchTemplateRequest is changed ( 2f22244 ) dataflow: A comment for field enable hot key logging in message .google.dataflow.v1beta3.DebugOptions is changed ( 2f22244 ) dataflow: A comment for field enable streaming engine in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field environment in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field flex resource scheduling goal in message .google.dataflow.v1beta3.Environment is changed ( 2f22244 ) dataflow: A comment for field gcs path in message .google.dataflow.v1beta3.DynamicTemplateLaunchParams is changed ( 2f22244 ) dataflow: A comment for field gcs path in message .google.dataflow.v1beta3.LaunchTemplateRequest is changed ( 2f22244 ) dataflow: A comment for field id in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field ip configuration in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field job name in message .google.dataflow.v1beta3.LaunchTemplateParameters is changed ( 2f22244 ) dataflow: A comment for field kms key name in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field launch parameters in message .google.dataflow.v1beta3.LaunchTemplateRequest is changed ( 2f22244 ) dataflow: A comment for field location in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field machine type in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field max workers in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field name in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field network in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field num workers in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field project id in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field requested state in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field save heap dumps to gcs path in message .google.dataflow.v1beta3.FlexTemplateRuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field service account email in message .google.dataflow.v1beta3.Environment is changed ( 2f22244 ) dataflow: A comment for field service account email in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field service kms key name in message .google.dataflow.v1beta3.Environment is changed ( 2f22244 ) dataflow: A comment for field service options in message .google.dataflow.v1beta3.Environment is changed ( 2f22244 ) dataflow: A comment for field set in message .google.dataflow.v1beta3.MetricUpdate is changed ( 2f22244 ) dataflow: A comment for field subnetwork in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field temp location in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field transform name mapping in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field type in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field worker region in message .google.dataflow.v1beta3.Environment is changed ( 2f22244 ) dataflow: A comment for field worker region in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field worker zone in message .google.dataflow.v1beta3.Environment is changed ( 2f22244 ) dataflow: A comment for field worker zone in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field zone in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for message DynamicTemplateLaunchParams is changed ( 2f22244 ) dataflow: A comment for message Job is changed ( 2f22244 ) dataflow: A comment for message JobExecutionStageInfo is changed ( 2f22244 ) dataflow: A comment for message JobMetrics is changed ( 2f22244 ) dataflow: A comment for message LaunchTemplateParameters is changed ( 2f22244 ) dataflow: A comment for message MetricUpdate is changed ( 2f22244 ) dataflow: A comment for message SdkHarnessContainerImage is changed ( 2f22244 ) dataflow: A comment for message Step is changed ( 2f22244 ) dataflow: A comment for method AggregatedListJobs in service JobsV1Beta3 is changed ( 2f22244 ) dataflow: A comment for method CreateJob in service JobsV1Beta3 is changed ( 2f22244 ) dataflow: A comment for method CreateJobFromTemplate in service TemplatesService is changed ( 2f22244 ) dataflow: A comment for method GetTemplate in service TemplatesService is changed ( 2f22244 ) dataflow: A comment for method LaunchTemplate in service TemplatesService is changed ( 2f22244 ) dataflow: A comment for method ListJobs in service JobsV1Beta3 is changed ( 2f22244 ) dataflow: A comment for service FlexTemplatesService is changed ( 2f22244 ) April 21, 2025 Libraries Go 0.10.6 (2025-04-15) Bug Fixes dataflow: Update google.golang.org/api to 0.229.0 ( 3319672 ) March 17, 2025 Libraries Go 0.10.5 (2025-03-13) Bug Fixes dataflow: Update golang.org/x/net to 0.37.0 ( 1144978 ) March 13, 2025 Feature Dataflow now supports data lineage.
- December 27, 2022 Change Starting with Beam SDK version 2.44.0, Dataflow will not support running Dataflow jobs with workers in a region that is different from the Dataflow regional endpoint .
- January 29, 2016 Change Changes to the runtime environment for streaming jobs: Files uploaded with --filesToStage were previously downloaded to: /dataflow/packages on the workers.

### "Quickstart: Create a streaming pipeline using a Dataflow template \_|\_\

- URL: [https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template](https://docs.cloud.google.com/dataflow/docs/quickstarts/create-streaming-pipeline-template)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- To ensure that the Compute Engine default service account has the necessary permissions to run the Dataflow job, ask your administrator to grant the following IAM roles to the Compute Engine default service account on your project: Important: You must grant these roles to the Compute Engine default service account, not to your user account.
- What's next Dataflow templates overview Creating classic templates Running classic templates Google-provided templates Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- BigQuery Data Editor ( roles/bigquery.dataEditor ) Dataflow Worker ( roles/dataflow.worker ) Pub/Sub Editor ( roles/pubsub.editor ) Storage Object Admin ( roles/storage.objectAdmin ) Viewer ( roles/viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Note: Unless specified through the network option, the Dataflow runner runs jobs in the default Virtual Private Cloud network.

### Troubleshoot and debug Dataflow pipelines \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline](https://docs.cloud.google.com/dataflow/docs/guides/troubleshooting-your-pipeline)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Workers have started successfully. ... ... org.apache.beam.runners.dataflow.util.MonitoringUtil$LoggingHandler process SEVERE: 2017-05-23T21:06:33.711Z: (c14bab21d699a182): java.lang.RuntimeException: org.apache.beam.sdk.util.UserCodeException: java.lang.ArithmeticException: / by zero at com.google.cloud.dataflow.worker.runners.worker.GroupAlsoByWindowsParDoFn$1.output(GroupAlsoByWindowsParDoFn.java:146) at com.google.cloud.dataflow.worker.runners.worker.GroupAlsoByWindowFnRunner$1.outputWindowedValue(GroupAlsoByWindowFnRunner.java:104) at com.google.cloud.dataflow.worker.util.BatchGroupAlsoByWindowAndCombineFn.closeWindow(BatchGroupAlsoByWindowAndCombineFn.java:191) ... ...
- Worker pool stopped. ... com.google.cloud.dataflow.sdk.runners.BlockingDataflowPipelineRunner run INFO: Job finished with status FAILED Exception in thread "main" com.google.cloud.dataflow.sdk.runners.DataflowJobExecutionException: Job 2016-03-08 18 59 25-16868399470801620798 failed with status FAILED at com.google.cloud.dataflow.sdk.runners.DataflowRunner.run(DataflowRunner.java:155) at com.google.cloud.dataflow.sdk.runners.DataflowRunner.run(DataflowRunner.java:56) at com.google.cloud.dataflow.sdk.Pipeline.run(Pipeline.java:180) at com.google.cloud.dataflow.integration.BigQueryCopyTableExample.main(BigQueryCopyTableExample.java:74) Python INFO:root:Created job with id: [2016-03-08 14 12 01-2117248033993412477] ...
- You can see the jobs' status at a glance in the Status field: "Running," "Succeeded," or "Failed." Figure 1: A list of Dataflow jobs in the Google Cloud console with jobs in the running, succeeded, and failed states.
- These errors occur when there are errors or bugs in the user-provided code that Dataflow distributes to parallel workers, such as the DoFn instances of a ParDo transform.

