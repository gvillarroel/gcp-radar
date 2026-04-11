---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:59:26.819Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Hot key detection and logging"
feature_slug: "hot-key-detection-and-logging"
latest_feature_date: "2022-03-31"
deprecation_date: "2022-03-31"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/common-errors"
  - "https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys"
  - "https://docs.cloud.google.com/dataflow/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.snapshots_v1_beta3.SnapshotsV1Beta3AsyncClient"
keywords:
  - "hot"
  - "key"
  - "detection"
  - "and"
  - "logging"
  - "identifies"
  - "records"
  - "keys"
---

# Hot key detection and logging

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Hot key detection and logging identifies and records hot keys in streaming pipelines for debugging; deprecated on 2022-03-31.

## Extended Definition

Hot key detection and logging identifies and records hot keys in streaming pipelines for debugging; deprecated on 2022-03-31.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- [https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys](https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys)
- [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.snapshots_v1_beta3.SnapshotsV1Beta3AsyncClient](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.snapshots_v1_beta3.SnapshotsV1Beta3AsyncClient)

## Supporting Pages

### Troubleshoot Dataflow errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/common-errors](https://docs.cloud.google.com/dataflow/docs/guides/common-errors)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- A hot key ... was detected Note: Hot key detection and logging is disabled for streaming pipelines as of March 2022.
- For more information about hot keys and possible solutions, see Writing Dataflow pipelines with scalability in mind .
- For example, for Apache Beam SDK for Java, adjust numStreamingKeys to match the maximum number of workers and consider increasing insertBundleParallelism to configure BigQuery connector to write to BigQuery using more parallel threads.
- Rewrite the pipeline to detect keys like this and only emit an output indicating the key was frequently present in that window.

### "Use customer-managed encryption keys \_|\_ Cloud Dataflow \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys](https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Job metadata includes the following: User-supplied data, such as Job Names, Job Parameter values, and Pipeline Graph System-generated data, such as Job IDs and IP addresses of workers Encryption of pipeline state locations The following storage locations are protected with Cloud KMS keys: Persistent Disks attached to Dataflow workers and used for Persistent Disk-based shuffle and streaming state storage.
- Support and limitations Cloud KMS is supported in the following Apache Beam SDK versions: Java SDK versions 2.13.0 and later Python SDK versions 2.13.0 and later Go SDK versions 2.40.0 and later Cloud KMS with Dataflow supports regional keys .
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Use customer-managed encryption keys Stay organized with collections Save and categorize content based on your preferences.
- Service agents that use the keys for encrypt and decrypt operations are created if they don't already exist and are granted the required Identity and Access Management (IAM) roles.

### Dataflow release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/release-notes](https://docs.cloud.google.com/dataflow/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- March 31, 2022 Deprecated Hot key detection and logging is deprecated for streaming pipelines.
- October 07, 2019 Feature Cloud Dataflow Shuffle and Streaming Engine are now available in two additional regions: us-west1 (Oregon) asia-east1 (Taiwan) September 03, 2019 Feature Automatic hot key detection is now enabled in batch pipelines for Apache Beam SDK 2.15.0 or higher.
- May 14, 2021 Feature You can now enable logging of human-readable hot keys.
- May 12, 2025 Libraries Go 0.11.0 (2025-05-06) Features dataflow: A new enum StreamingMode is added ( 2f22244 ) dataflow: A new field bugs is added to message .google.dataflow.v1beta3.SdkVersion ( 2f22244 ) dataflow: A new field data sampling is added to message .google.dataflow.v1beta3.DebugOptions ( 2f22244 ) dataflow: A new field default streaming mode is added to message .google.dataflow.v1beta3.TemplateMetadata ( 2f22244 ) dataflow: A new field default value is added to message .google.dataflow.v1beta3.ParameterMetadata ( 2f22244 ) dataflow: A new field disk size gb is added to message .google.dataflow.v1beta3.RuntimeEnvironment ( 2f22244 ) dataflow: A new field dynamic destinations is added to message .google.dataflow.v1beta3.PubsubLocation ( 2f22244 ) dataflow: A new field enable launcher vm serial port logging is added to message .google.dataflow.v1beta3.FlexTemplateRuntimeEnvironment ( 2f22244 ) dataflow: A new field enum options is added to message .google.dataflow.v1beta3.ParameterMetadata ( 2f22244 ) dataflow: A new field group name is added to message .google.dataflow.v1beta3.ParameterMetadata ( 2f22244 ) dataflow: A new field hidden ui is added to message .google.dataflow.v1beta3.ParameterMetadata ( 2f22244 ) dataflow: A new field image repository cert path is added to message .google.dataflow.v1beta3.ContainerSpec ( 2f22244 ) dataflow: A new field image repository password secret id is added to message .google.dataflow.v1beta3.ContainerSpec ( 2f22244 ) dataflow: A new field image repository username secret id is added to message .google.dataflow.v1beta3.ContainerSpec ( 2f22244 ) dataflow: A new field name is added to message .google.dataflow.v1beta3.ListJobsRequest ( 2f22244 ) dataflow: A new field parent name is added to message .google.dataflow.v1beta3.ParameterMetadata ( 2f22244 ) dataflow: A new field parent trigger values is added to message .google.dataflow.v1beta3.ParameterMetadata ( 2f22244 ) dataflow: A new field runtime updatable params is added to message .google.dataflow.v1beta3.Job ( 2f22244 ) dataflow: A new field satisfies pzi is added to message .google.dataflow.v1beta3.Job ( 2f22244 ) dataflow: A new field service resources is added to message .google.dataflow.v1beta3.Job ( 2f22244 ) dataflow: A new field step names hash is added to message .google.dataflow.v1beta3.PipelineDescription ( 2f22244 ) dataflow: A new field straggler info is added to message .google.dataflow.v1beta3.WorkItemDetails ( 2f22244 ) dataflow: A new field straggler summary is added to message .google.dataflow.v1beta3.StageSummary ( 2f22244 ) dataflow: A new field streaming mode is added to message .google.dataflow.v1beta3.Environment ( 2f22244 ) dataflow: A new field streaming mode is added to message .google.dataflow.v1beta3.FlexTemplateRuntimeEnvironment ( 2f22244 ) dataflow: A new field streaming mode is added to message .google.dataflow.v1beta3.RuntimeEnvironment ( 2f22244 ) dataflow: A new field streaming is added to message .google.dataflow.v1beta3.TemplateMetadata ( 2f22244 ) dataflow: A new field supports at least once is added to message .google.dataflow.v1beta3.TemplateMetadata ( 2f22244 ) dataflow: A new field supports exactly once is added to message .google.dataflow.v1beta3.TemplateMetadata ( 2f22244 ) dataflow: A new field trie is added to message .google.dataflow.v1beta3.MetricUpdate ( 2f22244 ) dataflow: A new field update mask is added to message .google.dataflow.v1beta3.UpdateJobRequest ( 2f22244 ) dataflow: A new field use streaming engine resource based billing is added to message .google.dataflow.v1beta3.Environment ( 2f22244 ) dataflow: A new field user display properties is added to message .google.dataflow.v1beta3.JobMetadata ( 2f22244 ) dataflow: A new message DataSamplingConfig is added ( 2f22244 ) dataflow: A new message HotKeyDebuggingInfo is added ( 2f22244 ) dataflow: A new message ParameterMetadataEnumOption is added ( 2f22244 ) dataflow: A new message RuntimeUpdatableParams is added ( 2f22244 ) dataflow: A new message SdkBug is added ( 2f22244 ) dataflow: A new message ServiceResources is added ( 2f22244 ) dataflow: A new message Straggler is added ( 2f22244 ) dataflow: A new message StragglerInfo is added ( 2f22244 ) dataflow: A new message StragglerSummary is added ( 2f22244 ) dataflow: A new message StreamingStragglerInfo is added ( 2f22244 ) dataflow: A new method signature job,update mask is added to method UpdateJob in service JobsV1Beta3 ( 2f22244 ) dataflow: A new value BIGQUERY TABLE is added to enum ParameterType ( 2f22244 ) dataflow: A new value BOOLEAN is added to enum ParameterType ( 2f22244 ) dataflow: A new value ENUM is added to enum ParameterType ( 2f22244 ) dataflow: A new value GO is added to enum Language ( 2f22244 ) dataflow: A new value JAVASCRIPT UDF FILE is added to enum ParameterType ( 2f22244 ) dataflow: A new value KAFKA READ TOPIC is added to enum ParameterType ( 2f22244 ) dataflow: A new value KAFKA TOPIC is added to enum ParameterType ( 2f22244 ) dataflow: A new value KAFKA WRITE TOPIC is added to enum ParameterType ( 2f22244 ) dataflow: A new value KMS KEY NAME is added to enum ParameterType ( 2f22244 ) dataflow: A new value MACHINE TYPE is added to enum ParameterType ( 2f22244 ) dataflow: A new value NUMBER is added to enum ParameterType ( 2f22244 ) dataflow: A new value SERVICE ACCOUNT is added to enum ParameterType ( 2f22244 ) dataflow: A new value WORKER REGION is added to enum ParameterType ( 2f22244 ) dataflow: A new value WORKER ZONE is added to enum ParameterType ( 2f22244 ) Bug Fixes dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) dataflow: An existing oauth scope https ( 2f22244 ) Documentation dataflow: A comment for enum JobState is changed ( 2f22244 ) dataflow: A comment for enum WorkerIPAddressConfiguration is changed ( 2f22244 ) dataflow: A comment for enum value JOB VIEW ALL in enum JobView is changed ( 2f22244 ) dataflow: A comment for field additional experiments in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field additional user labels in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field bypass temp dir validation in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field capabilities in message .google.dataflow.v1beta3.SdkHarnessContainerImage is changed ( 2f22244 ) dataflow: A comment for field current state in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field dataset in message .google.dataflow.v1beta3.Environment is changed ( 2f22244 ) dataflow: A comment for field debug options in message .google.dataflow.v1beta3.Environment is changed ( 2f22244 ) dataflow: A comment for field dump heap on oom in message .google.dataflow.v1beta3.FlexTemplateRuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field dynamic template in message .google.dataflow.v1beta3.LaunchTemplateRequest is changed ( 2f22244 ) dataflow: A comment for field enable hot key logging in message .google.dataflow.v1beta3.DebugOptions is changed ( 2f22244 ) dataflow: A comment for field enable streaming engine in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field environment in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field flex resource scheduling goal in message .google.dataflow.v1beta3.Environment is changed ( 2f22244 ) dataflow: A comment for field gcs path in message .google.dataflow.v1beta3.DynamicTemplateLaunchParams is changed ( 2f22244 ) dataflow: A comment for field gcs path in message .google.dataflow.v1beta3.LaunchTemplateRequest is changed ( 2f22244 ) dataflow: A comment for field id in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field ip configuration in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field job name in message .google.dataflow.v1beta3.LaunchTemplateParameters is changed ( 2f22244 ) dataflow: A comment for field kms key name in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field launch parameters in message .google.dataflow.v1beta3.LaunchTemplateRequest is changed ( 2f22244 ) dataflow: A comment for field location in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field machine type in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field max workers in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field name in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field network in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field num workers in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field project id in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field requested state in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field save heap dumps to gcs path in message .google.dataflow.v1beta3.FlexTemplateRuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field service account email in message .google.dataflow.v1beta3.Environment is changed ( 2f22244 ) dataflow: A comment for field service account email in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field service kms key name in message .google.dataflow.v1beta3.Environment is changed ( 2f22244 ) dataflow: A comment for field service options in message .google.dataflow.v1beta3.Environment is changed ( 2f22244 ) dataflow: A comment for field set in message .google.dataflow.v1beta3.MetricUpdate is changed ( 2f22244 ) dataflow: A comment for field subnetwork in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field temp location in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field transform name mapping in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field type in message .google.dataflow.v1beta3.Job is changed ( 2f22244 ) dataflow: A comment for field worker region in message .google.dataflow.v1beta3.Environment is changed ( 2f22244 ) dataflow: A comment for field worker region in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field worker zone in message .google.dataflow.v1beta3.Environment is changed ( 2f22244 ) dataflow: A comment for field worker zone in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for field zone in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 2f22244 ) dataflow: A comment for message DynamicTemplateLaunchParams is changed ( 2f22244 ) dataflow: A comment for message Job is changed ( 2f22244 ) dataflow: A comment for message JobExecutionStageInfo is changed ( 2f22244 ) dataflow: A comment for message JobMetrics is changed ( 2f22244 ) dataflow: A comment for message LaunchTemplateParameters is changed ( 2f22244 ) dataflow: A comment for message MetricUpdate is changed ( 2f22244 ) dataflow: A comment for message SdkHarnessContainerImage is changed ( 2f22244 ) dataflow: A comment for message Step is changed ( 2f22244 ) dataflow: A comment for method AggregatedListJobs in service JobsV1Beta3 is changed ( 2f22244 ) dataflow: A comment for method CreateJob in service JobsV1Beta3 is changed ( 2f22244 ) dataflow: A comment for method CreateJobFromTemplate in service TemplatesService is changed ( 2f22244 ) dataflow: A comment for method GetTemplate in service TemplatesService is changed ( 2f22244 ) dataflow: A comment for method LaunchTemplate in service TemplatesService is changed ( 2f22244 ) dataflow: A comment for method ListJobs in service JobsV1Beta3 is changed ( 2f22244 ) dataflow: A comment for service FlexTemplatesService is changed ( 2f22244 ) April 21, 2025 Libraries Go 0.10.6 (2025-04-15) Bug Fixes dataflow: Update google.golang.org/api to 0.229.0 ( 3319672 ) March 17, 2025 Libraries Go 0.10.5 (2025-03-13) Bug Fixes dataflow: Update golang.org/x/net to 0.37.0 ( 1144978 ) March 13, 2025 Feature Dataflow now supports data lineage.

### "Class SnapshotsV1Beta3AsyncClient (0.13.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.snapshots_v1_beta3.SnapshotsV1Beta3AsyncClient](https://docs.cloud.google.com/python/docs/reference/dataflow/latest/google.cloud.dataflow_v1beta3.services.snapshots_v1_beta3.SnapshotsV1Beta3AsyncClient)
- Source ID: `site-python-reference`
- Final score: 112
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment. transport Optional[Union[str,SnapshotsV1Beta3Transport,Callable[..., SnapshotsV1Beta3Transport]]] The transport to use, or a Callable that constructs and returns a new transport to use.
- Request to get information about a snapshot retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Request to delete a snapshot. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Request to list snapshots. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

