---
title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/tpu/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/tpu/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/tpu/latest/changelog
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
1.26.0 (latest)
1.25.0
1.24.0
1.23.2
1.22.0
1.21.0
1.20.0
1.19.1
1.18.5
1.17.0
1.16.0
1.15.0
1.14.0
1.13.0
1.12.0
1.11.2
1.10.1
1.9.0
1.8.0
1.7.2
1.6.0
1.5.2
1.4.1
1.3.4
1.2.1
1.1.0
1.0.2
0.2.2
0.1.0
PyPI History
1.26.0 (2026-03-26)
Features
Allow Protobuf 7.x ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
update image to us-central1-docker.pkg.dev/cloud-sdk-librarian-prod/images-prod/python-librarian-generator@sha256:f5426423676c75008c2135037e7b98f78cbb99f78b3c46fe043b6897be92d836 ( 3654fe76d755dd8db62ece81d5770ec58b3624df )
Bug Fixes
Require Python 3.9 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Require google-api-core >= 2.11.0 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Improve type checking ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
1.25.0 (2026-01-09)
Features
auto-enable mTLS when supported certificates are detected ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
check Python and dependency versions in generated GAPICs ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
1.24.0 (2025-10-20)
Features
Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Bug Fixes
Deprecate credentials_file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def )
1.23.2 (2025-06-11)
Documentation
Update import statement example in README ( 0131a33 )
1.23.1 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( 4757dae )
remove setup.cfg configuration for creating universal wheels ( #13659 ) ( 59bfd42 )
1.23.0 (2025-02-12)
Features
Add REST Interceptors which support reading metadata ( 87b5382 )
Add support for reading selective GAPIC generation methods from service YAML ( 87b5382 )
1.22.0 (2025-01-16)
Features
v2alpha1: A new enum State is added ( c7e1d21 )
v2alpha1: add creation timestamp to queued resources ( c7e1d21 )
v2alpha1: add repeated networks ( c7e1d21 )
v2alpha1: Add reservation_name field ( c7e1d21 )
v2alpha1: Add UNKNOWN to TPU node state, This state will be used to prevent a node from being marked as READY during diagnose after it has failed repair ( c7e1d21 )
v2alpha1: add Usage to CLH getreservations API ( c7e1d21 )
v2alpha1: add workload_type field ( c7e1d21 )
v2alpha1: Introduce PerformMaintenance API ( c7e1d21 )
v2alpha1: Make V5Litepod accelerator config available ( c7e1d21 )
v2alpha1: Make v6e available for public preview ( c7e1d21 )
v2alpha1: Promote spot to v2alpha1 API ( c7e1d21 )
v2alpha1: provide WAITING_FOR_CAPACITY state for queued resource, when the session is waiting to be provisioned ( c7e1d21 )
v2alpha1: publish boot_disk_config to support CHD with KMS ( c7e1d21 )
v2alpha1: v5p available for public review ( c7e1d21 )
Documentation
v2alpha1: A comment for field network_config in message .google.cloud.tpu.v2alpha1.Node is changed ( c7e1d21 )
v2alpha1: A comment for field state_initiator in message .google.cloud.tpu.v2alpha1.QueuedResourceState is changed ( c7e1d21 )
1.21.0 (2025-01-13)
Features
[google-cloud-tpu] Add UNKNOWN to TPU node state, This state will be used to prevent a node from being marked as READY during diagnose after it has failed repair ( #13429 ) ( 9adc081 )
Add UNKNOWN to TPU node state, This state will be used to prevent a node from being marked as READY during diagnose after it has failed repair ( ad5c169 )
Make V5Litepod accelerator config available for v2 ( ad5c169 )
Make v5p available for GA ( ad5c169 )
Make v6e available for GA ( ad5c169 )
Promote network_configs field to v2 API ( ad5c169 )
Documentation
A comment for field network_config in message .google.cloud.tpu.v2.Node is changed ( ad5c169 )
1.20.0 (2024-12-12)
Features
Add support for opt-in debug logging ( cf4d0e0 )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( cf4d0e0 )
1.19.1 (2024-11-11)
Bug Fixes
disable universe-domain validation ( #13246 ) ( bcad563 )
1.19.0 (2024-10-24)
Features
Add support for Python 3.13 ( #13210 ) ( 0b62ac6 )
1.18.5 (2024-07-30)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( 9cdac77 )
1.18.4 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12870 ) ( 4d16761 )
1.18.3 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12388 ) ( d2cd4ff )
1.18.2 (2024-02-22)
Bug Fixes
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12310 ) ( 41821da )
fix ValueError in test__validate_universe_domain ( 2451e88 )
1.18.1 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( e16032f )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( e16032f )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( e16032f )
1.18.0 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( #12243 ) ( e14d4b1 )
1.17.0 (2023-12-07)
Features
Add support for python 3.12 ( e9655df )
Introduce compatibility with native namespace packages ( e9655df )
Bug Fixes
Require proto-plus >= 1.22.3 ( e9655df )
Use retry_async instead of retry in async client ( e9655df )
1.16.0 (2023-09-20)
Features
v2alpha1: added new WAITING_FOR_RESOURCES state for QueuedResourceState ( #11673 ) ( f108e9b )
1.15.1 (2023-09-19)
Documentation
Minor formatting ( 025219f )
1.15.0 (2023-08-31)
Features
Add MultiNodeParams in TPU ( ee2ea0d )
Add ResetQueueResource to the TPU service ( ee2ea0d )
publish boot_disk_config to support CHD with KMS ( #11622 ) ( 050b5c1 )
1.14.0 (2023-08-10)
Features
v2alpha1: Add state_initiator to QueuedResourceState ( #11557 ) ( 315e949 )
1.13.0 (2023-08-03)
Features
Add spot tier in v2alpha Create QueuedResource API request ( #11526 ) ( 5ad269d )
1.12.0 (2023-07-25)
Features
add multislice_node flag ( 4ccdde0 )
enable QueuedResources in us-east5 ( 4ccdde0 )
1.11.2 (2023-07-06)
Documentation
minor updates in comments ( #11465 ) ( 2164070 )
1.11.1 (2023-07-05)
Bug Fixes
Add async context manager return types ( #11449 ) ( 3885820 )
1.11.0 (2023-06-01)
Features
v2alpha1: Add MultisliceNode ( df85e2c )
v2alpha1: Enable Force on DeleteQueuedResource ( df85e2c )
1.10.1 (2023-05-04)
Bug Fixes
tpu_v2alpha1: Restrict the visibility of API ResetQueuedResource ( #226 ) ( 06f1647 )
1.10.0 (2023-04-15)
Features
v2alpha1: Add reset_queued_resource ( 45b85f2 )
v2alpha1: Make reservation_name parameter generally visible in QueuedResource message ( 45b85f2 )
1.9.0 (2023-03-24)
Features
Add AcceleratorConfig to ListAcceleratorTypesResponse ( #220 ) ( 495fbad )
Documentation
Fix formatting of request arg in docstring ( #223 ) ( 58839c4 )
1.8.0 (2023-02-17)
Features
v2alpha1: Add AcceleratorConfig ( #214 ) ( 77b7f38 )
Bug Fixes
Add service_yaml_parameters to py_gapic_library BUILD.bazel targets ( #216 ) ( b45515e )
1.7.2 (2023-01-30)
Bug Fixes
Proper http bindings for v2 API ( #209 ) ( e549185 )
1.7.1 (2023-01-20)
Bug Fixes
Add context manager return types ( 3b28ff9 )
Documentation
Add documentation for enums ( 3b28ff9 )
1.7.0 (2023-01-10)
Features
Add support for python 3.11 ( #205 ) ( 9590ec0 )
1.6.0 (2022-12-15)
Features
Add support for google.cloud.tpu.__version__ ( 7bb593a )
Add typing to proto.Message based class attributes ( 7bb593a )
Publishing TPU v2 API ( ac1bc46 )
Bug Fixes
Add dict typing for client_options ( 7bb593a )
deps: Require google-api-core >=1.34.0, >=2.11.0 ( ac1bc46 )
Drop usage of pkg_resources ( ac1bc46 )
Fix incorrect resource annotations for TPU v2alpha1 API ( ac1bc46 )
Fix timeout default values ( ac1bc46 )
Documentation
Minor updates in comments ( #201 ) ( 0519c68 )
samples: Snippetgen handling of repeated enum field ( 7bb593a )
samples: Snippetgen should call await on the operation coroutine before calling result ( ac1bc46 )
1.5.2 (2022-10-07)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #194 ) ( 8f61064 )
1.5.1 (2022-10-03)
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #192 ) ( e65bac8 )
1.5.0 (2022-09-16)
Features
Add Secure Boot support to TPU v2alpha1 API ( #190 ) ( 955e3db )
1.4.1 (2022-08-11)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #175 ) ( a7b60dc )
deps: require proto-plus >= 1.22.0 ( a7b60dc )
1.4.0 (2022-07-16)
Features
add audience parameter ( 3ba29bf )
Bug Fixes
deps: require google-api-core>=1.32.0,>=2.8.0 ( #170 ) ( 8bdcce8 )
require python 3.7+ ( #168 ) ( e08415b )
1.3.4 (2022-06-03)
Bug Fixes
deps: require protobuf <4.0.0dev ( #158 ) ( 1d789e5 )
Documentation
fix changelog header to consistent size ( #159 ) ( 1788016 )
1.3.3 (2022-05-05)
Documentation
fix docstring for map fields ( 5c230d6 )
1.3.2 (2022-03-05)
Bug Fixes
deps: require google-api-core>=1.31.5, >=2.3.2 ( #89 ) ( 07b8c1a )
1.3.1 (2022-02-11)
Documentation
add generated snippets ( #79 ) ( c09c807 )
1.3.0 (2022-02-03)
Features
add api key support ( #74 ) ( c6b1bfa )
Bug Fixes
resolve DuplicateCredentialArgs error when using credentials_file ( 776dbea )
1.2.1 (2021-11-01)
Bug Fixes
deps: drop packaging dependency ( 6b3efb3 )
deps: require google-api-core >= 1.28.0 ( 6b3efb3 )
Documentation
list oneofs in docstring ( 6b3efb3 )
1.2.0 (2021-10-15)
Features
add support for python 3.10 ( #52 ) ( 18b9ee0 )
add TPU v2alpha1 ( #55 ) ( 72e3e8b )
1.1.0 (2021-10-07)
Features
add context manager support in client ( #48 ) ( f51a651 )
1.0.2 (2021-09-30)
Bug Fixes
improper types in pagers generation ( 306f0f7 )
1.0.1 (2021-09-24)
Bug Fixes
add ‘dict’ annotation type to ‘request’ ( 2487395 )
1.0.0 (2021-08-03)
Features
bump release level to production/stable ( #28 ) ( 64818bf )
0.2.2 (2021-07-29)
Bug Fixes
enable self signed jwt for grpc ( #24 ) ( 4285625 )
Documentation
add Samples section to CONTRIBUTING.rst ( #20 ) ( 2724d46 )
Miscellaneous Chores
release as 0.2.2 ( #25 ) ( 53e254f )
0.2.1 (2021-07-21)
Bug Fixes
deps: pin ‘google-{api,cloud}-core’, ‘google-auth’ to allow 2.x versions ( #19 ) ( 6128053 )
0.2.0 (2021-07-14)
Features
add always_use_jwt_access ( #11 ) ( 5ed6734 )
Bug Fixes
disable always_use_jwt_access ( b03acdf )
disable always_use_jwt_access ( #15 ) ( b03acdf )
Documentation
omit mention of Python 2.7 in ‘CONTRIBUTING.rst’ ( #1127 ) ( #6 ) ( e2c8018 ), closes #1126
0.1.0 (2021-06-13)
Features
generate v1 ( 7e1096c )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
