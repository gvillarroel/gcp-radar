---
title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/dataflow/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/dataflow/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/dataflow/latest/changelog
  title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Changelog
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
0.11.0 (latest)
0.10.0
0.9.0
0.8.17
0.7.0
0.6.2
0.5.5
0.4.1
0.3.1
0.2.0
0.1.5
PyPI History
0.13.0 (2026-04-02)
Features
add sha256 field to Package proto ( c36aa6169035fdb14bf84b0e56e4f81291600b5a )
Add Pausing/Yaml capabilities to public protos ( c36aa6169035fdb14bf84b0e56e4f81291600b5a )
0.12.0 (2026-03-26)
Features
Allow Protobuf 7.x ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
update image to us-central1-docker.pkg.dev/cloud-sdk-librarian-prod/images-prod/python-librarian-generator@sha256:f5426423676c75008c2135037e7b98f78cbb99f78b3c46fe043b6897be92d836 ( 3654fe76d755dd8db62ece81d5770ec58b3624df )
Bug Fixes
Require Python 3.9 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Require google-api-core >= 2.11.0 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Improve type checking ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
0.11.0 (2026-01-08)
Features
auto-enable mTLS when supported certificates are detected ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
check Python and dependency versions in generated GAPICs ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
0.10.0 (2025-10-16)
Features
Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Bug Fixes
Deprecate credentials_file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def )
0.9.0 (2025-05-08)
⚠ BREAKING CHANGES
An existing oauth_scope https://www.googleapis.com/auth/userinfo.email is removed from service JobsV1Beta3
An existing oauth_scope https://www.googleapis.com/auth/compute.readonly is removed from service MessagesV1Beta3
An existing oauth_scope https://www.googleapis.com/auth/userinfo.email is removed from service MessagesV1Beta3
An existing oauth_scope https://www.googleapis.com/auth/compute.readonly is removed from service MetricsV1Beta3
An existing oauth_scope https://www.googleapis.com/auth/userinfo.email is removed from service MetricsV1Beta3
An existing oauth_scope https://www.googleapis.com/auth/compute.readonly is removed from service SnapshotsV1Beta3
An existing oauth_scope https://www.googleapis.com/auth/userinfo.email is removed from service SnapshotsV1Beta3
An existing oauth_scope https://www.googleapis.com/auth/compute.readonly is removed from service TemplatesService
An existing oauth_scope https://www.googleapis.com/auth/userinfo.email is removed from service TemplatesService
An existing oauth_scope https://www.googleapis.com/auth/compute.readonly is removed from service FlexTemplatesService
An existing oauth_scope https://www.googleapis.com/auth/userinfo.email is removed from service FlexTemplatesService
An existing oauth_scope https://www.googleapis.com/auth/compute.readonly is removed from service JobsV1Beta3
Features
A new enum StreamingMode is added ( 487aa54 )
A new field bugs is added to message .google.dataflow.v1beta3.SdkVersion ( 487aa54 )
A new field data_sampling is added to message .google.dataflow.v1beta3.DebugOptions ( 487aa54 )
A new field default_streaming_mode is added to message .google.dataflow.v1beta3.TemplateMetadata ( 487aa54 )
A new field default_value is added to message .google.dataflow.v1beta3.ParameterMetadata ( 487aa54 )
A new field disk_size_gb is added to message .google.dataflow.v1beta3.RuntimeEnvironment ( 487aa54 )
A new field dynamic_destinations is added to message .google.dataflow.v1beta3.PubsubLocation ( 487aa54 )
A new field enable_launcher_vm_serial_port_logging is added to message .google.dataflow.v1beta3.FlexTemplateRuntimeEnvironment ( 487aa54 )
A new field enum_options is added to message .google.dataflow.v1beta3.ParameterMetadata ( 487aa54 )
A new field group_name is added to message .google.dataflow.v1beta3.ParameterMetadata ( 487aa54 )
A new field hidden_ui is added to message .google.dataflow.v1beta3.ParameterMetadata ( 487aa54 )
A new field image_repository_cert_path is added to message .google.dataflow.v1beta3.ContainerSpec ( 487aa54 )
A new field image_repository_password_secret_id is added to message .google.dataflow.v1beta3.ContainerSpec ( 487aa54 )
A new field image_repository_username_secret_id is added to message .google.dataflow.v1beta3.ContainerSpec ( 487aa54 )
A new field name is added to message .google.dataflow.v1beta3.ListJobsRequest ( 487aa54 )
A new field parent_name is added to message .google.dataflow.v1beta3.ParameterMetadata ( 487aa54 )
A new field parent_trigger_values is added to message .google.dataflow.v1beta3.ParameterMetadata ( 487aa54 )
A new field runtime_updatable_params is added to message .google.dataflow.v1beta3.Job ( 487aa54 )
A new field satisfies_pzi is added to message .google.dataflow.v1beta3.Job ( 487aa54 )
A new field service_resources is added to message .google.dataflow.v1beta3.Job ( 487aa54 )
A new field step_names_hash is added to message .google.dataflow.v1beta3.PipelineDescription ( 487aa54 )
A new field straggler_info is added to message .google.dataflow.v1beta3.WorkItemDetails ( 487aa54 )
A new field straggler_summary is added to message .google.dataflow.v1beta3.StageSummary ( 487aa54 )
A new field streaming_mode is added to message .google.dataflow.v1beta3.Environment ( 487aa54 )
A new field streaming_mode is added to message .google.dataflow.v1beta3.FlexTemplateRuntimeEnvironment ( 487aa54 )
A new field streaming_mode is added to message .google.dataflow.v1beta3.RuntimeEnvironment ( 487aa54 )
A new field streaming is added to message .google.dataflow.v1beta3.TemplateMetadata ( 487aa54 )
A new field supports_at_least_once is added to message .google.dataflow.v1beta3.TemplateMetadata ( 487aa54 )
A new field supports_exactly_once is added to message .google.dataflow.v1beta3.TemplateMetadata ( 487aa54 )
A new field trie is added to message .google.dataflow.v1beta3.MetricUpdate ( 487aa54 )
A new field update_mask is added to message .google.dataflow.v1beta3.UpdateJobRequest ( 487aa54 )
A new field use_streaming_engine_resource_based_billing is added to message .google.dataflow.v1beta3.Environment ( 487aa54 )
A new field user_display_properties is added to message .google.dataflow.v1beta3.JobMetadata ( 487aa54 )
A new message DataSamplingConfig is added ( 487aa54 )
A new message HotKeyDebuggingInfo is added ( 487aa54 )
A new message ParameterMetadataEnumOption is added ( 487aa54 )
A new message RuntimeUpdatableParams is added ( 487aa54 )
A new message SdkBug is added ( 487aa54 )
A new message ServiceResources is added ( 487aa54 )
A new message Straggler is added ( 487aa54 )
A new message StragglerInfo is added ( 487aa54 )
A new message StragglerSummary is added ( 487aa54 )
A new message StreamingStragglerInfo is added ( 487aa54 )
A new method_signature job,update_mask is added to method UpdateJob in service JobsV1Beta3 ( 487aa54 )
A new value BIGQUERY_TABLE is added to enum ParameterType ( 487aa54 )
A new value BOOLEAN is added to enum ParameterType ( 487aa54 )
A new value ENUM is added to enum ParameterType ( 487aa54 )
A new value GO is added to enum Language ( 487aa54 )
A new value JAVASCRIPT_UDF_FILE is added to enum ParameterType ( 487aa54 )
A new value KAFKA_READ_TOPIC is added to enum ParameterType ( 487aa54 )
A new value KAFKA_TOPIC is added to enum ParameterType ( 487aa54 )
A new value KAFKA_WRITE_TOPIC is added to enum ParameterType ( 487aa54 )
A new value KMS_KEY_NAME is added to enum ParameterType ( 487aa54 )
A new value MACHINE_TYPE is added to enum ParameterType ( 487aa54 )
A new value NUMBER is added to enum ParameterType ( 487aa54 )
A new value SERVICE_ACCOUNT is added to enum ParameterType ( 487aa54 )
A new value WORKER_REGION is added to enum ParameterType ( 487aa54 )
A new value WORKER_ZONE is added to enum ParameterType ( 487aa54 )
Bug Fixes
An existing oauth_scope https://www.googleapis.com/auth/compute.readonly is removed from service FlexTemplatesService ( 487aa54 )
An existing oauth_scope https://www.googleapis.com/auth/compute.readonly is removed from service JobsV1Beta3 ( 487aa54 )
An existing oauth_scope https://www.googleapis.com/auth/compute.readonly is removed from service MessagesV1Beta3 ( 487aa54 )
An existing oauth_scope https://www.googleapis.com/auth/compute.readonly is removed from service MetricsV1Beta3 ( 487aa54 )
An existing oauth_scope https://www.googleapis.com/auth/compute.readonly is removed from service SnapshotsV1Beta3 ( 487aa54 )
An existing oauth_scope https://www.googleapis.com/auth/compute.readonly is removed from service TemplatesService ( 487aa54 )
An existing oauth_scope https://www.googleapis.com/auth/userinfo.email is removed from service FlexTemplatesService ( 487aa54 )
An existing oauth_scope https://www.googleapis.com/auth/userinfo.email is removed from service JobsV1Beta3 ( 487aa54 )
An existing oauth_scope https://www.googleapis.com/auth/userinfo.email is removed from service MessagesV1Beta3 ( 487aa54 )
An existing oauth_scope https://www.googleapis.com/auth/userinfo.email is removed from service MetricsV1Beta3 ( 487aa54 )
An existing oauth_scope https://www.googleapis.com/auth/userinfo.email is removed from service SnapshotsV1Beta3 ( 487aa54 )
An existing oauth_scope https://www.googleapis.com/auth/userinfo.email is removed from service TemplatesService ( 487aa54 )
Documentation
A comment for enum JobState is changed ( 487aa54 )
A comment for enum WorkerIPAddressConfiguration is changed ( 487aa54 )
A comment for enum value JOB_VIEW_ALL in enum JobView is changed ( 487aa54 )
A comment for field additional_experiments in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 487aa54 )
A comment for field additional_user_labels in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 487aa54 )
A comment for field bypass_temp_dir_validation in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 487aa54 )
A comment for field capabilities in message .google.dataflow.v1beta3.SdkHarnessContainerImage is changed ( 487aa54 )
A comment for field current_state in message .google.dataflow.v1beta3.Job is changed ( 487aa54 )
A comment for field dataset in message .google.dataflow.v1beta3.Environment is changed ( 487aa54 )
A comment for field debug_options in message .google.dataflow.v1beta3.Environment is changed ( 487aa54 )
A comment for field dump_heap_on_oom in message .google.dataflow.v1beta3.FlexTemplateRuntimeEnvironment is changed ( 487aa54 )
A comment for field dynamic_template in message .google.dataflow.v1beta3.LaunchTemplateRequest is changed ( 487aa54 )
A comment for field enable_hot_key_logging in message .google.dataflow.v1beta3.DebugOptions is changed ( 487aa54 )
A comment for field enable_streaming_engine in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 487aa54 )
A comment for field environment in message .google.dataflow.v1beta3.Job is changed ( 487aa54 )
A comment for field flex_resource_scheduling_goal in message .google.dataflow.v1beta3.Environment is changed ( 487aa54 )
A comment for field gcs_path in message .google.dataflow.v1beta3.DynamicTemplateLaunchParams is changed ( 487aa54 )
A comment for field gcs_path in message .google.dataflow.v1beta3.LaunchTemplateRequest is changed ( 487aa54 )
A comment for field id in message .google.dataflow.v1beta3.Job is changed ( 487aa54 )
A comment for field ip_configuration in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 487aa54 )
A comment for field job_name in message .google.dataflow.v1beta3.LaunchTemplateParameters is changed ( 487aa54 )
A comment for field kms_key_name in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 487aa54 )
A comment for field launch_parameters in message .google.dataflow.v1beta3.LaunchTemplateRequest is changed ( 487aa54 )
A comment for field location in message .google.dataflow.v1beta3.Job is changed ( 487aa54 )
A comment for field machine_type in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 487aa54 )
A comment for field max_workers in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 487aa54 )
A comment for field name in message .google.dataflow.v1beta3.Job is changed ( 487aa54 )
A comment for field network in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 487aa54 )
A comment for field num_workers in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 487aa54 )
A comment for field project_id in message .google.dataflow.v1beta3.Job is changed ( 487aa54 )
A comment for field requested_state in message .google.dataflow.v1beta3.Job is changed ( 487aa54 )
A comment for field save_heap_dumps_to_gcs_path in message .google.dataflow.v1beta3.FlexTemplateRuntimeEnvironment is changed ( 487aa54 )
A comment for field service_account_email in message .google.dataflow.v1beta3.Environment is changed ( 487aa54 )
A comment for field service_account_email in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 487aa54 )
A comment for field service_kms_key_name in message .google.dataflow.v1beta3.Environment is changed ( 487aa54 )
A comment for field service_options in message .google.dataflow.v1beta3.Environment is changed ( 487aa54 )
A comment for field set in message .google.dataflow.v1beta3.MetricUpdate is changed ( 487aa54 )
A comment for field subnetwork in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 487aa54 )
A comment for field temp_location in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 487aa54 )
A comment for field transform_name_mapping in message .google.dataflow.v1beta3.Job is changed ( 487aa54 )
A comment for field type in message .google.dataflow.v1beta3.Job is changed ( 487aa54 )
A comment for field worker_region in message .google.dataflow.v1beta3.Environment is changed ( 487aa54 )
A comment for field worker_region in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 487aa54 )
A comment for field worker_zone in message .google.dataflow.v1beta3.Environment is changed ( 487aa54 )
A comment for field worker_zone in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 487aa54 )
A comment for field zone in message .google.dataflow.v1beta3.RuntimeEnvironment is changed ( 487aa54 )
A comment for message DynamicTemplateLaunchParams is changed ( 487aa54 )
A comment for message Job is changed ( 487aa54 )
A comment for message JobExecutionStageInfo is changed ( 487aa54 )
A comment for message JobMetrics is changed ( 487aa54 )
A comment for message LaunchTemplateParameters is changed ( 487aa54 )
A comment for message MetricUpdate is changed ( 487aa54 )
A comment for message SdkHarnessContainerImage is changed ( 487aa54 )
A comment for message Step is changed ( 487aa54 )
A comment for method AggregatedListJobs in service JobsV1Beta3 is changed ( 487aa54 )
A comment for method CreateJob in service JobsV1Beta3 is changed ( 487aa54 )
A comment for method CreateJobFromTemplate in service TemplatesService is changed ( 487aa54 )
A comment for method GetTemplate in service TemplatesService is changed ( 487aa54 )
A comment for method LaunchTemplate in service TemplatesService is changed ( 487aa54 )
A comment for method ListJobs in service JobsV1Beta3 is changed ( 487aa54 )
A comment for service FlexTemplatesService is changed ( 487aa54 )
0.8.17 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( feb5353 )
remove setup.cfg configuration for creating universal wheels ( #13659 ) ( 59bfd42 )
0.8.16 (2025-02-12)
Features
Add REST Interceptors which support reading metadata ( e92d527 )
Add support for reading selective GAPIC generation methods from service YAML ( e92d527 )
0.8.15 (2024-12-12)
Features
Add support for opt-in debug logging ( 19ed3be )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( 19ed3be )
0.8.14 (2024-11-11)
Bug Fixes
disable universe-domain validation ( #13242 ) ( b479ff8 )
0.8.13 (2024-10-24)
Features
Add support for Python 3.13 ( #13206 ) ( eb980d5 )
0.8.12 (2024-07-30)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( ba1064f )
0.8.11 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12865 ) ( 7f9dedb )
0.8.10 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12383 ) ( 305f43f )
0.8.9 (2024-02-22)
Bug Fixes
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12305 ) ( 2aa7f17 )
fix ValueError in test__validate_universe_domain ( dd749df )
0.8.8 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( f3db074 )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( f3db074 )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( f3db074 )
0.8.7 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( #12239 ) ( 8004d15 )
0.8.6 (2023-12-07)
Features
Add support for python 3.12 ( b96013d )
Introduce compatibility with native namespace packages ( b96013d )
Bug Fixes
Require proto-plus >= 1.22.3 ( b96013d )
Use retry_async instead of retry in async client ( b96013d )
0.8.5 (2023-10-09)
Documentation
Minor formatting ( 94b4f73 )
0.8.4 (2023-07-04)
Bug Fixes
Add async context manager return types ( #184 ) ( 355b8b4 )
0.8.3 (2023-03-23)
Documentation
Fix formatting of request arg in docstring ( #177 ) ( 22668f6 )
0.8.2 (2023-02-07)
Bug Fixes
Raise not implemented error when REST transport is not supported ( #170 ) ( 44651ca )
0.8.1 (2023-01-20)
Bug Fixes
Add context manager return types ( 63d369a )
Documentation
Add documentation for enums ( 63d369a )
0.8.0 (2023-01-10)
Features
Add support for python 3.11 ( #164 ) ( 97fa32f )
0.7.0 (2022-12-15)
Features
Add support for google.cloud.dataflow.__version__ ( 5f36251 )
Add typing to proto.Message based class attributes ( 5f36251 )
Bug Fixes
Add dict typing for client_options ( 5f36251 )
deps: Require google-api-core >=1.34.0, >=2.11.0 ( 9b9083c )
Drop usage of pkg_resources ( 9b9083c )
Fix timeout default values ( 9b9083c )
Documentation
samples: Snippetgen handling of repeated enum field ( 5f36251 )
samples: Snippetgen should call await on the operation coroutine before calling result ( 9b9083c )
0.6.2 (2022-10-10)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #150 ) ( 216c6e2 )
deps: require google-api-core>=1.33.2 ( 216c6e2 )
0.6.1 (2022-10-03)
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #146 ) ( 52466db )
0.6.0 (2022-09-13)
Features
Enable REST transport support ( #139 ) ( e8a64ff )
0.5.5 (2022-08-11)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #126 ) ( 16b89c0 )
deps: require proto-plus >= 1.22.0 ( 16b89c0 )
0.5.4 (2022-07-14)
Bug Fixes
deps: require google-api-core>=1.32.0,>=2.8.0 ( #120 ) ( f981454 )
0.5.3 (2022-07-12)
Bug Fixes
deps: require google-api-core >= 2.8.0 ( #115 ) ( 75376d4 )
require python 3.7+ ( #117 ) ( 7123255 )
0.5.2 (2022-06-03)
Bug Fixes
deps: require protobuf <4.0.0dev ( #106 ) ( 3170fe7 )
Documentation
fix changelog header to consistent size ( #107 ) ( df80541 )
0.5.1 (2022-05-05)
Documentation
fix type in docstring for map fields ( e775e1f )
0.5.0 (2022-03-16)
Features
Add capabilities field to SdkHarnessContainerImage ( #84 ) ( 3d86713 )
0.4.1 (2022-03-05)
Bug Fixes
deps: require google-api-core>=1.31.5, >=2.3.2 ( #81 ) ( 9783339 )
0.4.0 (2022-02-26)
Features
add api key support ( #65 ) ( 888664b )
new parameters in FlexTemplateRuntimeEnvironment ( #69 ) ( f8bd373 )
Bug Fixes
resolve DuplicateCredentialArgs error when using credentials_file ( f8bd373 )
Documentation
remove typo in docstring ( #72 ) ( db91cc2 )
0.3.1 (2021-11-01)
Bug Fixes
deps: drop packaging dependency ( 89dbf65 )
deps: require google-api-core >= 1.28.0 ( 89dbf65 )
Documentation
list oneofs in docstring ( 89dbf65 )
0.3.0 (2021-10-15)
Features
add support for python 3.10 ( #44 ) ( ff87f99 )
0.2.0 (2021-10-08)
Features
add context manager support in client ( #41 ) ( 2d8fbd5 )
0.1.5 (2021-09-30)
Bug Fixes
improper types in pagers generation ( ce0077b )
0.1.4 (2021-09-24)
Bug Fixes
add ‘dict’ annotation type to ‘request’ ( db5d966 )
0.1.3 (2021-08-18)
Features
add Samples section to CONTRIBUTING.rst ( #14 ) ( 998adbe )
Bug Fixes
enable self signed jwt for grpc ( #18 ) ( 0a69423 )
Miscellaneous Chores
release as 0.1.3 ( #19 ) ( 5fa4e3f )
0.1.2 (2021-07-21)
Bug Fixes
deps: pin ‘google-{api,cloud}-core’, ‘google-auth’ to allow 2.x versions ( #13 ) ( a85e8aa )
0.1.1 (2021-06-30)
Miscellaneous Chores
release 0.1.1 ( #9 ) ( db3ece7 )
0.1.0 (2021-06-25)
Features
generate v1beta3 ( ce2226e )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-03 UTC."],[],[]]
