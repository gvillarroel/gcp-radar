---
title: "Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/assuredworkloads/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/assuredworkloads/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/assuredworkloads/latest/changelog
  title: "Python client libraries \_|\_ Google Cloud Documentation"
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
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
2.2.0 (latest)
2.1.0
2.0.0
1.15.2
1.14.0
1.13.1
1.12.5
1.11.0
1.10.3
1.9.1
1.8.1
1.7.0
1.6.1
1.5.0
1.4.2
1.3.0
1.2.3
1.1.0
1.0.0
0.8.0
0.7.2
0.6.0
0.5.0
0.4.2
0.3.1
0.2.1
0.1.0
Changelog
PyPI History
2.2.0 (2026-01-08)
Features
auto-enable mTLS when supported certificates are detected ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
check Python and dependency versions in generated GAPICs ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
2.1.0 (2025-10-16)
Features
Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Bug Fixes
Deprecate credentials_file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def )
2.0.0 (2025-10-07)
Bug Fixes
remove google.cloud.assuredworkloads_v1beta1.types.assuredworkloads_v1beta1 (#14572) Remove
google.cloud.assuredworkloads_v1beta1.types.assuredworkloads_v1beta1
which doesn’t exist in googleapis or googleapis-gen ( 03311730cef9630b31cf35f4213c8c597e538db2 )
1.15.2 (2025-06-11)
Documentation
Update import statement example in README ( eea9e6f )
1.15.1 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( 3a85796 )
remove setup.cfg configuration for creating universal wheels ( #13659 ) ( 59bfd42 )
1.15.0 (2025-02-12)
Features
Add REST Interceptors which support reading metadata ( b1c3ce8 )
Add support for reading selective GAPIC generation methods from service YAML ( b1c3ce8 )
1.14.0 (2024-12-12)
Features
Add support for opt-in debug logging ( b1dfc55 )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( b1dfc55 )
1.13.1 (2024-10-31)
Bug Fixes
disable universe-domain validation ( 85c7512 )
1.13.0 (2024-10-24)
Features
Add support for Python 3.13 ( #13200 ) ( 19dc048 )
1.12.5 (2024-07-30)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( 6e83a37 )
1.12.4 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12863 ) ( 3e6e423 )
1.12.3 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12381 ) ( 48ae8ab )
1.12.2 (2024-02-22)
Bug Fixes
[Many APIs] fix ValueError in test__validate_universe_domain ( #12280 ) ( 2d75d0e )
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12303 ) ( fbb80c3 )
1.12.1 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( 780c5f1 )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( 780c5f1 )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( 780c5f1 )
1.12.0 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( a0392ee )
1.11.0 (2023-12-07)
Features
Add support for python 3.12 ( ea6cfc2 )
Introduce compatibility with native namespace packages ( ea6cfc2 )
Bug Fixes
Require proto-plus >= 1.22.3 ( ea6cfc2 )
Use retry_async instead of retry in async client ( ea6cfc2 )
1.10.3 (2023-09-13)
Documentation
Minor formatting ( #256 ) ( c73576e )
1.10.2 (2023-07-04)
Bug Fixes
Add async context manager return types ( #246 ) ( 04dbd20 )
1.10.1 (2023-03-23)
Documentation
Fix formatting of request arg in docstring ( #239 ) ( 448999e )
1.10.0 (2023-02-09)
Features
Enable “rest” transport in Python for services supporting numeric enums ( #233 ) ( 5acc49a )
1.9.1 (2023-01-20)
Bug Fixes
Add context manager return types ( 764fbd9 )
Documentation
Add documentation for enums ( 764fbd9 )
1.9.0 (2023-01-10)
Features
Add support for python 3.11 ( #225 ) ( 36aab41 )
1.8.1 (2022-12-08)
Bug Fixes
deps: Require google-api-core >=1.34.0, >=2.11.0 ( 6a0ac97 )
Drop usage of pkg_resources ( 6a0ac97 )
Fix timeout default values ( 6a0ac97 )
Documentation
samples: Snippetgen should call await on the operation coroutine before calling result ( 6a0ac97 )
1.8.0 (2022-11-16)
Features
add support for google.cloud.assuredworkloads.__version__ ( 58b4377 )
Add typing to proto.Message based class attributes ( 3f09fb8 )
Bug Fixes
Add dict typing for client_options ( 58b4377 )
deps: require google-api-core >=1.33.2 ( 58b4377 )
Documentation
samples: Snippetgen handling of repeated enum field ( 3f09fb8 )
1.7.0 (2022-10-14)
Features
Add new field for exception audit log link ( #211 ) ( 9fafdd4 )
1.6.1 (2022-10-07)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #209 ) ( a420318 )
1.6.0 (2022-10-03)
Features
Add apis for AssuredWorkload monitoring feature and to restrict allowed resources ( #207 ) ( a38f6af )
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #206 ) ( daf4770 )
1.5.0 (2022-09-02)
Features
Add compliant_but_disallowed_services field to the v1beta1 Workload proto ( #201 ) ( a8c4a1a )
1.4.2 (2022-08-24)
Bug Fixes
v1beta1: Removed restrict_allowed_services , RestrictAllowedServicesRequest , RestrictAllowedServicesResponse ( b07a36a )
Documentation
v1beta1: Update analyzeWorkloadMove documentation ( b07a36a )
1.4.1 (2022-08-15)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #186 ) ( ae92f13 )
deps: require proto-plus >= 1.22.0 ( ae92f13 )
1.4.0 (2022-07-19)
Features
v1beta1: AnalyzeWorkloadMove returns information about org policy differences between the project and target folder ( 7afe126 )
v1beta1: Update method signature of analyzeWorkloadMove to accept project as source ( #182 ) ( 7afe126 )
1.3.0 (2022-07-16)
Features
add audience parameter ( ea32aaa )
ITAR June Preview Launch ( ea32aaa )
v1beta1: Removed _v1beta1 suffix from proto file names ( #174 ) ( 03d456b )
Bug Fixes
deps: require google-api-core>=1.32.0,>=2.8.0 ( #177 ) ( ea32aaa )
require python 3.7+ ( #179 ) ( 5a92db8 )
1.2.3 (2022-06-03)
Bug Fixes
deps: require protobuf <4.0.0dev ( #166 ) ( 8395361 )
Documentation
fix changelog header to consistent size ( #167 ) ( ace4d91 )
1.2.2 (2022-03-05)
Bug Fixes
deps: require google-api-core>=1.31.5, >=2.3.2 ( #136 ) ( a287c38 )
deps: require proto-plus>=1.15.0 ( a287c38 )
1.2.1 (2022-02-26)
Documentation
add autogenerated code snippets ( 70e74a3 )
1.2.0 (2022-02-04)
Features
add api key support ( #120 ) ( 4826ab9 )
1.1.0 (2022-01-13)
Features
EU Regions and Support With Sovereign Controls ( #110 ) ( a0676ef )
1.0.0 (2021-11-01)
Features
bump release level to production/stable ( #92 ) ( c346fbb )
Bug Fixes
deps: drop packaging dependency ( 2bc0174 )
deps: require google-api-core >= 1.28.0 ( 2bc0174 )
Documentation
list oneofs in docstring ( 2bc0174 )
0.8.0 (2021-10-11)
Features
add context manager support in client ( #94 ) ( 1dd0e98 )
add trove classifier for python 3.10 ( #97 ) ( 4db7fe0 )
0.7.2 (2021-09-30)
Bug Fixes
improper types in pagers generation ( a78556b )
0.7.1 (2021-09-24)
Bug Fixes
add ‘dict’ annotation type to ‘request’ ( 5c4dd09 )
0.7.0 (2021-09-20)
Features
assuredworkloads v1 public protos ( #82 ) ( 04dd627 )
0.6.0 (2021-08-30)
Features
Add Canada regions and support compliance regime ( #73 ) ( b62f7c7 )
display_name is added to ResourceSettings ( b62f7c7 )
resource_settings is added to CreateWorkloadOperationMetadata ( b62f7c7 )
ResourceType CONSUMER_FOLDER and KEYRING are added ( b62f7c7 )
Bug Fixes
billing_account is now optional in Workload ( b62f7c7 )
ResourceType CONSUMER_PROJECT is deprecated ( b62f7c7 )
0.5.0 (2021-07-28)
Features
Add EU Regions And Support compliance regime ( #67 ) ( a370ad5 )
0.4.2 (2021-07-27)
Bug Fixes
enable self signed jwt for grpc ( #64 ) ( c7e4331 )
Documentation
add Samples section to CONTRIBUTING.rst ( #60 ) ( b161d65 )
Miscellaneous Chores
release as 0.4.2 ( #65 ) ( 8f8f538 )
0.4.1 (2021-07-20)
Bug Fixes
deps: pin ‘google-{api,cloud}-core’, ‘google-auth’ to allow 2.x versions ( #59 ) ( 5113968 )
0.4.0 (2021-06-30)
Features
add always_use_jwt_access ( #52 ) ( 9533d55 )
Bug Fixes
disable always_use_jwt_access ( efac3ed )
disable always_use_jwt_access ( #56 ) ( efac3ed )
Documentation
fix typo in docs/index.rst ( #43 ) ( df2ea64 )
omit mention of Python 2.7 in ‘CONTRIBUTING.rst’ ( #1127 ) ( #47 ) ( 0f28736 )
0.3.1 (2021-06-16)
Bug Fixes
exclude docs and tests from package ( #44 ) ( d3dda4c )
0.3.0 (2021-05-28)
Features
Add ‘resource_settings’ field to provide custom properties (ids) for the provisioned projects ( 6ff8af6 )
add HIPAA and HITRUST compliance regimes ( #13 ) ( 6ff8af6 )
support self-signed JWT flow for service accounts ( a28c728 )
Bug Fixes
add async client to %name_%version/init.py ( a28c728 )
deps: add packaging requirement ( #37 ) ( ae6197c )
fix retry deadlines ( 6ff8af6 )
0.2.1 (2021-02-11)
Bug Fixes
remove client recv msg limit fix: add enums to types/__init__.py ( #9 ) ( ebd9505 )
0.2.0 (2020-11-17)
Features
add provisioned_resources_parent and kms_settings ; add common resource path helper methods ( daaff1f )
0.1.0 (2020-10-02)
Features
generate v1beta1 ( 999fa05 )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
