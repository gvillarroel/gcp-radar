---
title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/dataproc/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/dataproc/latest/changelog
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
5.26.0 (latest)
5.25.0
5.24.0
5.23.0
5.22.0
5.21.0
5.20.0
5.18.1
5.17.1
5.16.0
5.15.1
5.14.0
5.13.0
5.12.0
5.10.2
5.9.3
5.8.0
5.7.0
5.6.0
5.5.1
5.4.3
5.3.0
5.2.0
5.1.0
5.0.3
4.0.3
3.3.2
3.2.0
3.1.1
3.0.0
2.6.2
2.5.0
2.4.0
2.3.1
2.2.0
2.0.2
1.1.3
1.0.1
0.8.2
0.7.0
0.6.1
0.5.0
PyPI History
5.26.0 (2026-03-26)
Features
Allow Protobuf 7.x ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Bug Fixes
Require Python 3.9 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Require google-api-core >= 2.11.0 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Improve type checking ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
5.25.0 (2026-02-19)
Features
Add ClusterType to support creating Zero-Scale clusters ( 4ca6f9e2f825c185d092f9879c05098659b1a871 )
5.24.0 (2026-01-08)
Features
auto-enable mTLS when supported certificates are detected ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
check Python and dependency versions in generated GAPICs ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
5.23.0 (2025-10-16)
Features
Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Bug Fixes
Deprecate credentials_file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def )
5.22.0 (2025-09-24)
Features
[google-cloud-dataproc] Added support for JUPYTER_KERNEL_GATEWAY component ( #14516 ) ( 741d1c5 )
5.21.0 (2025-07-02)
Features
[google-cloud-dataproc] Add cluster_tier to support creating premium clusters ( #14047 ) ( 5a27ea2 )
5.20.0 (2025-06-11)
Features
Added support for DELTA, ICEBERG, PIG components ( #13982 ) ( 5e57d1c )
5.19.0 (2025-06-05)
Features
[google-cloud-dataproc] add scenarios AUTO/NONE to autotuning config ( #13969 ) ( 134af69 )
5.18.1 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( feb5353 )
remove setup.cfg configuration for creating universal wheels ( #13659 ) ( 59bfd42 )
5.18.0 (2025-02-24)
Features
Added support for the AuthenticationConfig field to Dataproc serverless workload configurations ( 4c96416 )
5.17.1 (2025-02-18)
Bug Fixes
deps: Require grpc-google-iam-v1>=0.14.0 ( 16e14c8 )
5.17.0 (2025-02-12)
Features
Add REST Interceptors which support reading metadata ( e92d527 )
Add support for reading selective GAPIC generation methods from service YAML ( e92d527 )
5.16.0 (2024-12-12)
Features
Add support for opt-in debug logging ( 19ed3be )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( 19ed3be )
5.15.1 (2024-10-31)
Bug Fixes
disable universe-domain validation ( 53c951e )
5.15.0 (2024-10-24)
Features
Add support for Python 3.13 ( #13202 ) ( 5b1f2f3 )
5.14.0 (2024-10-23)
Features
[google-cloud-dataproc] Add ProvisioningModelMix to support mixing of spot and standard instances for secondary workers ( #13169 ) ( 3fe76c8 )
Add support for configuration of bootdisk IOPS and throughput when ( 3fe76c8 )
5.13.0 (2024-09-30)
Features
add support for Spark Connect sessions in Dataproc Serverless for Spark ( 0d35003 )
Documentation
update docs for filter field in ListSessionsRequest ( 0d35003 )
5.12.0 (2024-09-16)
Features
[google-cloud-dataproc] Add FLINK metric source for Dataproc Metric Source ( 2402404 )
[google-cloud-dataproc] Add kms key input for create cluster API ( 2402404 )
[google-cloud-dataproc] add resource reference for KMS keys and fix comments ( 2402404 )
[google-cloud-dataproc] Add unreachable output field for LIST batch templates API ( 2402404 )
[google-cloud-dataproc] Add unreachable output field for LIST jobs API ( 2402404 )
[google-cloud-dataproc] Add unreachable output field for LIST workflow template API ( 2402404 )
[google-cloud-dataproc] Allow flink and trino job support for workflow templates API ( 2402404 )
[google-cloud-dataproc] Allow flink job support for jobs ( 2402404 )
5.11.0 (2024-09-03)
Features
add optional parameters (tarball-access) in DiagnoseClusterRequest ( 127e5c0 )
5.10.2 (2024-07-30)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( ba1064f )
5.10.1 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12866 ) ( 40e1810 )
5.10.0 (2024-06-27)
Features
[google-cloud-dataproc] add the cohort and auto tuning configuration to the batch’s RuntimeConfig ( #12823 ) ( bbd627b )
5.9.3 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12383 ) ( 305f43f )
5.9.2 (2024-02-22)
Bug Fixes
[Many APIs] fix ValueError in test__validate_universe_domain ( #12282 ) ( b985096 )
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12306 ) ( 1e787f2 )
5.9.1 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( c721248 )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( c721248 )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( c721248 )
5.9.0 (2024-02-01)
Features
[google-cloud-dataproc] add session and session_template controllers ( #12228 ) ( aefb948 )
Allow users to explicitly configure universe domain ( #12239 ) ( 8004d15 )
5.8.0 (2023-12-07)
Features
Add support for python 3.12 ( b96013d )
Introduce compatibility with native namespace packages ( b96013d )
Bug Fixes
Require proto-plus >= 1.22.3 ( b96013d )
Use retry_async instead of retry in async client ( b96013d )
5.7.0 (2023-11-02)
Features
support required_registration_fraction for secondary workers ( #11970 ) ( 52d4558 )
5.6.0 (2023-09-15)
Features
Add optional parameters (tarball_gcs_dir, diagnosis_interval, jobs, yarn_application_ids) in DiagnoseClusterRequest ( #560 ) ( 59b00aa )
5.5.1 (2023-09-13)
Documentation
Minor formatting ( c3c65bc )
5.5.0 (2023-08-23)
Features
Support min_num_instances for primary worker and InstanceFlexibilityPolicy for secondary worker ( #555 ) ( 8ab7c71 )
5.4.3 (2023-08-02)
Documentation
Minor formatting ( #551 ) ( c480e55 )
5.4.2 (2023-07-04)
Bug Fixes
Add async context manager return types ( #539 ) ( 7c081a6 )
5.4.1 (2023-03-23)
Documentation
Fix formatting of request arg in docstring ( #528 ) ( c7806f5 )
5.4.0 (2023-02-17)
Features
Add support for new Dataproc features ( 67bc8a2 )
Add TrinoJob ( 67bc8a2 )
Add UsageMetrics ( 67bc8a2 )
Add UsageSnapshot ( 67bc8a2 )
Enable “rest” transport in Python for services supporting numeric enums ( #519 ) ( f1a9ba7 )
5.3.0 (2023-01-23)
Features
Add SPOT to Preemptibility enum ( 8d5e6d8 )
Bug Fixes
Add context manager return types ( 8d5e6d8 )
Documentation
Add documentation for enums ( 8d5e6d8 )
5.2.0 (2023-01-10)
Features
Add support for python 3.11 ( #510 ) ( d1ed81d )
5.1.0 (2023-01-07)
Features
Add support for google.cloud.dataproc.__version__ ( b3b13c4 )
Add typing to proto.Message based class attributes ( b3b13c4 )
Added node groups API protos ( b3b13c4 )
Bug Fixes
Add dict typing for client_options ( b3b13c4 )
deps: Require google-api-core >=1.34.0, >=2.11.0 ( b3b13c4 )
Drop usage of pkg_resources ( b3b13c4 )
Fix timeout default values ( b3b13c4 )
Documentation
samples: Snippetgen handling of repeated enum field ( b3b13c4 )
samples: Snippetgen should call await on the operation coroutine before calling result ( b3b13c4 )
5.0.3 (2022-10-07)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #490 ) ( 5142ab0 )
5.0.2 (2022-10-03)
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #486 ) ( d7674f4 )
5.0.1 (2022-08-11)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #456 ) ( a446937 )
deps: require proto-plus >= 1.22.0 ( a446937 )
5.0.0 (2022-07-19)
⚠ BREAKING CHANGES
Move yarn_config into a oneof
Remove temp_bucket from VirtualClusterConfig, as its value was not used
Features
add audience parameter ( 61a23fa )
Bug Fixes
deps: require google-api-core>=1.32.0,>=2.8.0 ( #400 ) ( 61a23fa )
Move yarn_config into a oneof ( 61a23fa )
Remove temp_bucket from VirtualClusterConfig, as its value was not used ( 61a23fa )
require python 3.7+ ( #442 ) ( 9862ff7 )
4.0.3 (2022-06-03)
Bug Fixes
deps: require protobuf <4.0.0dev ( #423 ) ( 5d1a263 )
Documentation
fix changelog header to consistent size ( #424 ) ( 00162f0 )
4.0.2 (2022-04-06)
Bug Fixes
resource quotas ( #377 ) ( 122c2f7 )
updating submit_job_to_cluster.py ( #387 ) ( 0719d2b )
4.0.1 (2022-03-05)
Bug Fixes
deps: require google-api-core>=1.31.5, >=2.3.2 ( #357 ) ( 3c66f42 )
deps: require proto-plus>=1.15.0 ( 3c66f42 )
4.0.0 (2022-02-26)
⚠ BREAKING CHANGES
add support for Virtual Dataproc cluster running on GKE cluster (#344)
Features
add support for Virtual Dataproc cluster running on GKE cluster ( #344 ) ( 116077b )
Bug Fixes
move GkeClusterConfig to google.cloud.dataproc_v1.types.shared ( 116077b )
remove namespaced_gke_deployment_target ( 116077b )
3.3.0 (2022-02-18)
Features
add api key support ( #336 ) ( ac22d7e )
Bug Fixes
resolve DuplicateCredentialArgs error when using credentials_file ( 452460f )
Documentation
add generated snippets ( #342 ) ( 98810a9 )
3.2.0 (2022-01-17)
Features
add Spark runtime versioning for Spark batches ( #318 ) ( f2e35d9 )
auto-diagnostic of failed Spark batches ( f2e35d9 )
custom image containers for Spark batches ( f2e35d9 )
local SSD NVME interface support for GCE clusters ( f2e35d9 )
3.1.1 (2021-11-01)
Bug Fixes
deps: drop packaging dependency ( d4919c0 )
deps: require google-api-core >= 1.28.0 ( d4919c0 )
Documentation
list oneofs in docstring ( d4919c0 )
3.1.0 (2021-10-26)
Features
add context manager support in client ( #285 ) ( b54fb76 )
add Dataproc Serverless for Spark Batches API ( #290 ) ( f0ed26c )
Add support for dataproc BatchController service ( #291 ) ( 24a6f7d )
add support for python 3.10 ( #289 ) ( 229f919 )
3.0.0 (2021-10-04)
Features
delete deprecated Dataproc v1beta2 API client ( 3bdeaa7 )
Bug Fixes
add ‘dict’ annotation type to ‘request’ ( be5c115 )
improper types in pagers generation ( 1ae784b )
Miscellaneous Chores
release as 3.0.0 ( #273 ) ( 3bdeaa7 )
Documentation
update cluster sample ( 3bdeaa7 )
2.6.0 (2021-09-21)
Features
delete deprecated Dataproc v1beta2 API client ( #253 ) ( b0db6da )
Documentation
update cluster sample ( #218 ) ( 80706f9 )
2.5.0 (2021-07-24)
Features
add always_use_jwt_access ( #209 ) ( 6aec13c )
Bug Fixes
Attribute error Name while executing the sample code ( #205 ) ( cb0328f )
deps: pin ‘google-{api,cloud}-core’, ‘google-auth’ to allow 2.x versions ( #227 ) ( 5acfcd0 )
disable always_use_jwt_access ( #215 ) ( a57e253 )
enable self signed jwt for grpc ( #233 ) ( 7df4fef )
Documentation
omit mention of Python 2.7 in ‘CONTRIBUTING.rst’ ( #1127 ) ( #201 ) ( feea064 )
add Samples section to CONTRIBUTING.rst ( #228 ) ( 3e248c2 )
2.4.0 (2021-05-20)
Features
add ‘from_service_account_info’ factory to clients ( 6525f86 )
support self-signed JWT flow for service accounts ( 5137a6f )
update the Dataproc V1 API client library ( 5137a6f )
Bug Fixes
add async client to %name_%version/init.py ( 5137a6f )
fix sphinx identifiers ( 6525f86 )
use correct retry deadlines ( #122 ) ( 6525f86 )
2.3.1 (2021-03-27)
Bug Fixes
(samples) fixing samples for new machine types ( #150 ) ( 3343665 )
Documentation
adding backoff to quickstart test ( #135 ) ( a22df4c )
2.3.0 (2021-03-01)
Features
v1beta1: BREAKING CHANGE: remove DOCKER/FLINK from Component enum; adds HBASE ( #108 ) ( ee093a8 )
Bug Fixes
remove gRPC send/recv limits; expose client transport ( #117 ) ( 6f27109 )
2.2.0 (2020-11-16)
Features
add common resource paths, expose client transport ( #87 ) ( 7ec92b7 ), closes /github.com/googleapis/python-talent/blob/ef045e8eb348db36d7a2a611e6f26b11530d273b/samples/snippets/noxfile_config.py#L27-L32 #792
2.0.2 (2020-09-16)
Documentation
add submit_job samples ( #88 ) ( e7379b5 )
2.0.1 (2020-09-14)
Documentation
remove example usage from README ( #77 ) ( 66c7af1 )
2.0.0 (2020-08-10)
⚠ BREAKING CHANGES
migrate to use microgen (#71)
Features
migrate to use microgen ( #71 ) ( 108d6ff )
1.1.1 (2020-08-10)
Documentation
change relative URLs to absolute URLs to fix broken links ( #65 ) ( 65c2771 )
1.1.0 (2020-07-31)
Features
add support for temp_bucket, endpoint_config in clusters; add preemptibility for instance group configs ( #60 ) ( a80fc72 )
1.0.1 (2020-07-16)
Bug Fixes
correct protobuf type for diagnose_cluster, update retry configs ( #55 ) ( 822315e )
1.0.0 (2020-06-17)
Features
release as production/stable ( #44 ) ( 58f8c87 )
0.8.1 (2020-06-05)
Bug Fixes
increase timeout for ClusterController in v1 ( #36 ) ( 3137bee )
0.8.0 (2020-05-19)
Features
add SparkR and Presto jobs to WorkflowTemplates; add new optional components; add submit_job_as_operation to v1 (via synth) ( #21 ) ( 1cf10b6 )
0.7.0 (2020-03-05)
Features
add lifecycle config and reservation affinity support to v1 (via synth) ( #10 ) ( bb36194 )
0.6.1
11-12-2019 08:24 PST
Documentation
Add python 2 sunset banner to documentation. ( #9036 )
0.6.0
11-07-2019 16:34 PST
Implementation Changes
Tweak proto annotations (via synth). ( #9466 )
Remove send/recv msg size limit (via synth). ( #8951 )
New Features
Add V1 autoscaling policy support; annotate protos (via synth). ( #9402 )
Documentation
Fix intersphinx reference to requests. ( #9294 )
Remove CI for gh-pages, use googleapis.dev for api_core refs. ( #9085 )
Remove compatibility badges from READMEs. ( #9035 )
Update intersphinx mapping for requests. ( #8805 )
0.5.0
07-24-2019 16:02 PDT
Implementation Changes
Allow kwargs to be passed to create_channel (via synth). ( #8387 )
New Features
Add ‘client_options’ support, update list method docstrings (via synth). ( #8505 )
Dependencies
Bump minimum version for google-api-core to 1.14.0. ( #8709 )
Documentation
Link to googleapis.dev documentation in READMEs. ( #8705 )
Add compatibility check badges to READMEs. ( #8288 )
Internal / Testing Changes
Pin black version (via synth). ( #8579 )
Add docs job to publish to googleapis.dev. ( #8464 )
Declare encoding as utf-8 in pb2 files (via synth). ( #8349 )
Add disclaimer to auto-generated template files (via synth). ( #8311 )
Supress checking ‘cov-fail-under’ in nox default session (via synth). ( #8237 )
0.4.0
05-30-2019 05:52 PDT
Implementation Changes
Update docs/conf.py, add routing header to method metadata, fix docstrings (via synth). ( #7924 )
New Features
Add new service features for v1, including autoscaling (via synth). ( #8152 )
Add new service features for v1beta2, including autoscaling (via synth). ( #8119 )
Documentation
Add nox session docs ( #7429 )
Add clarifying comment to blacken nox target. ( #7388 )
Internal / Testing Changes
Re-add import of ‘operations.proto’ to V1 ‘clusters.proto’ (via synth). ( #8188 )
Add empty lines (via synth). ( #8054 )
Remove classifier for Python 3.4 for end-of-life. ( #7535 )
Copy lintified proto files (via synth). ( #7465 )
0.3.1
02-15-2019 12:36 PST
Implementation Changes
Remove unused message exports. ( #7266 )
Protoc-generated serialization update.. ( #7079 )
Trivial housekeeping change to .proto files. ( #7067 )
Documentation
Updated client library documentation URLs. ( #7307 )
Pick up stub docstring fix in GAPIC generator. ( #6967 )
Internal / Testing Changes
Copy proto files alongside protoc versions.
Add protos as an artifact to library ( #7205 )
Update copyright headers
0.3.0
12-17-2018 18:20 PST
Implementation Changes
Import iam.policy from google.api_core . ( #6741 )
Update cluster_controller_client GAPIC config (via synth). ( #6659 )
Add ‘WorkflowTemplateServiceClient’, optional args; update timeouts (via synth). ( #6655 )
Pick up enum fixes in the GAPIC generator. ( #6609 )
Pick up fixes in GAPIC generator. ( #6493 )
Fix client_info bug, update docstrings. ( #6408 )
Re-generate library using dataproc/synth.py ( #6056 )
Re-generate library using dataproc/synth.py ( #5975 )
Re-generate library using dataproc/synth.py ( #5949 )
Dependencies
Bump minimum api_core version for all GAPIC libs to 1.4.1. ( #6391 )
Documentation
Document Python 2 deprecation ( #6910 )
Update Dataproc docs URL ( #6455 )
Docs: fix GAX fossils ( #6264 )
Docs: normalize use of support level badges ( #6159 )
Dataproc: harmonize / DRY ‘README.rst’ / ‘docs/index.rst’. ( #6019 )
Internal / Testing Changes
Update noxfile.
Blacken all gen’d libs ( #6792 )
Omit local deps ( #6701 )
Run black at end of synth.py ( #6698 )
Unblack dataproc gapic and protos.
Run Black on Generated libraries ( #6666 )
Add templates for flake8, coveragerc, noxfile, and black. ( #6642 )
Add synth metadata. ( #6563 )
Use new Nox ( #6175 )
0.2.0
New Features
Regenerate v1 endpoint. Add v1beta2 endpoint (#5717)
0.1.2
Implementation Changes
Avoid overwriting ‘ module ’ of messages from shared modules. (#5364)
Internal / Testing Changes
Modify system tests to use prerelease versions of grpcio (#5304)
Add Test runs for Python 3.7 and remove 3.4 (#5295)
Re-enable lint for tests, remove usage of pylint (#4921)
0.1.1
Dependencies
Update dependency range for api-core to include v1.0.0 releases (#4944)
Testing and internal changes
Re-enable lint for tests, remove usage of pylint (#4921)
Normalize all setup.py files (#4909)
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
