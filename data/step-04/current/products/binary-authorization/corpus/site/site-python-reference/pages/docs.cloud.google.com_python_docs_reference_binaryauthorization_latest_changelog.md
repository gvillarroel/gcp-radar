---
title: "Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/binaryauthorization/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/binaryauthorization/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/binaryauthorization/latest/changelog
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
1.15.0 (latest)
1.14.0
1.13.2
1.12.0
1.11.1
1.10.5
1.9.0
1.8.0
1.7.0
1.6.2
1.5.1
1.4.0
1.3.3
1.2.3
1.1.0
1.0.1
0.6.0
0.5.0
0.4.1
0.3.1
0.2.2
0.1.1
Changelog
PyPI History
1.15.0 (2026-01-08)
Features
auto-enable mTLS when supported certificates are detected ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
check Python and dependency versions in generated GAPICs ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
1.14.0 (2025-10-16)
Features
Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Bug Fixes
Deprecate credentials_file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def )
1.13.2 (2025-06-11)
Documentation
Update import statement example in README ( 8697120 )
1.13.1 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( 1e43e75 )
remove setup.cfg configuration for creating universal wheels ( #13659 ) ( 59bfd42 )
1.13.0 (2025-02-12)
Features
Add REST Interceptors which support reading metadata ( e22e2bd )
Add support for reading selective GAPIC generation methods from service YAML ( e22e2bd )
1.12.0 (2024-12-12)
Features
Add support for opt-in debug logging ( e31cbb0 )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( e31cbb0 )
1.11.1 (2024-10-31)
Bug Fixes
disable universe-domain validation ( 4ed4108 )
1.11.0 (2024-10-24)
Features
Add support for Python 3.13 ( 6252476 )
1.10.5 (2024-07-30)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( a6f7356 )
1.10.4 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12864 ) ( 728b307 )
1.10.3 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12382 ) ( d5db265 )
1.10.2 (2024-02-22)
Bug Fixes
[Many APIs] fix ValueError in test__validate_universe_domain ( #12281 ) ( 62cf934 )
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12304 ) ( c52e0cd )
1.10.1 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( 8465244 )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( 8465244 )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( 8465244 )
1.10.0 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( #12238 ) ( 8701267 )
1.9.0 (2023-12-07)
Features
Add support for python 3.12 ( 0d1a592 )
Introduce compatibility with native namespace packages ( 0d1a592 )
Bug Fixes
Require proto-plus >= 1.22.3 ( 0d1a592 )
Use retry_async instead of retry in async client ( 0d1a592 )
1.8.0 (2023-11-29)
Features
[google-cloud-binary-authorization] add container_name, container_type fields to Continuous Validation Logs ( #12051 ) ( b063395 )
1.7.0 (2023-10-09)
Features
Adds support for check-based platform policy evaluation to Binary Authorization Continuous Validation logs ( #225 ) ( 7982787 )
Documentation
Minor formatting ( #228 ) ( 27ea2c0 )
1.6.2 (2023-07-04)
Bug Fixes
Add async context manager return types ( #215 ) ( bb5e71d )
1.6.1 (2023-03-23)
Documentation
Fix formatting of request arg in docstring ( #209 ) ( c5bc464 )
1.6.0 (2023-02-27)
Features
Enable “rest” transport in Python for services supporting numeric enums ( #204 ) ( 3ef88ce )
1.5.1 (2023-01-20)
Bug Fixes
Add context manager return types ( 27c4e7c )
Documentation
Add documentation for enums ( 27c4e7c )
1.5.0 (2023-01-10)
Features
Add support for python 3.11 ( #196 ) ( f5f7c77 )
1.4.0 (2022-12-15)
Features
Add support for google.cloud.binaryauthorization.__version__ ( 2df0de1 )
Add typing to proto.Message based class attributes ( 2df0de1 )
Bug Fixes
Add dict typing for client_options ( 2df0de1 )
deps: Require google-api-core >=1.34.0, >=2.11.0 ( b3128a5 )
Drop usage of pkg_resources ( b3128a5 )
Fix timeout default values ( b3128a5 )
Documentation
samples: Snippetgen handling of repeated enum field ( 2df0de1 )
samples: Snippetgen should call await on the operation coroutine before calling result ( b3128a5 )
1.3.3 (2022-10-07)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #184 ) ( cd27c70 )
1.3.2 (2022-09-29)
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #182 ) ( c469fcc )
1.3.1 (2022-08-11)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #165 ) ( 48c10da )
deps: require proto-plus >= 1.22.0 ( 48c10da )
1.3.0 (2022-07-16)
Features
add audience parameter ( eef72ac )
Adds a pod_namespace field to pod events created by Continuous Validation, to distinguish pods with the same name that run in different namespaces ( #156 ) ( 218bad8 )
Bug Fixes
deps: require google-api-core>=1.32.0,>=2.8.0 ( #158 ) ( eef72ac )
require python 3.7+ ( #160 ) ( fe8d429 )
1.2.3 (2022-06-03)
Bug Fixes
deps: require protobuf <4.0.0dev ( #148 ) ( 2768020 )
Documentation
fix changelog header to consistent size ( #149 ) ( 3d3d7e4 )
1.2.2 (2022-03-05)
Bug Fixes
deps: require google-api-core>=1.31.5, >=2.3.2 ( #126 ) ( 2b7e982 )
1.2.1 (2022-02-11)
Bug Fixes
resolve DuplicateCredentialArgs error when using credentials_file ( 1f500f5 )
1.2.0 (2022-01-25)
Features
add api key support ( #110 ) ( e4b39f0 )
1.1.0 (2021-11-09)
Features
v1beta1: add new admission rule types to Policy ( #95 ) ( f25d17a )
v1beta1: add SystemPolicyV1Beta1 service ( f25d17a )
v1beta1: update SignatureAlgorithm enum to match algorithm names in KMS ( f25d17a )
1.0.1 (2021-11-01)
Bug Fixes
deps: drop packaging dependency ( d02c2fd )
deps: require google-api-core >= 1.28.0 ( d02c2fd )
Documentation
list oneofs in docstring ( d02c2fd )
1.0.0 (2021-10-22)
Features
bump release level to production/stable ( #77 ) ( f893ce0 )
0.6.0 (2021-10-13)
Features
add trove classifier for python 3.9 and python 3.10 ( #87 ) ( 73acd98 )
0.5.0 (2021-10-08)
Features
add context manager support in client ( #84 ) ( 0991f56 )
0.4.1 (2021-09-30)
Bug Fixes
improper types in pagers generation ( 789e8c5 )
0.4.0 (2021-09-24)
Features
add binaryauthorization v1 ( #74 ) ( cd828ec )
set binaryauthorization_v1 as the default version ( cd828ec )
Bug Fixes
add ‘dict’ annotation type to ‘request’ ( 7045df0 )
require grafeas>=1.1.2, proto-plus>=1.15.0 ( cd828ec )
Documentation
fix broken links in README ( cd828ec )
0.3.1 (2021-07-26)
Bug Fixes
deps: pin ‘google-{api,cloud}-core’, ‘google-auth’ to allow 2.x versions ( #55 ) ( 0ca0dc2 )
enable self signed jwt for grpc ( #61 ) ( 1a65f17 )
Documentation
add Samples section to CONTRIBUTING.rst ( #56 ) ( c641b6c )
Miscellaneous Chores
release 0.3.1 ( #60 ) ( e2b54b5 )
0.3.0 (2021-06-30)
Features
add always_use_jwt_access ( #48 ) ( 63a3c9a )
Bug Fixes
disable always_use_jwt_access ( #52 ) ( b840980 )
Documentation
omit mention of Python 2.7 in ‘CONTRIBUTING.rst’ ( #1127 ) ( #43 ) ( 726d589 ), closes #1126
0.2.2 (2021-06-16)
Bug Fixes
exclude docs and tests from package ( #39 ) ( a90d7f4 )
0.2.1 (2021-05-25)
Bug Fixes
deps: add packaging requirement ( #34 ) ( 59752a5 )
0.2.0 (2021-05-20)
Features
Publish Binary Authorization ContinuousValidationEvent proto ( #31 ) ( d3d2abe )
0.1.1 (2021-04-01)
Bug Fixes
use correct retry deadline ( #7 ) ( 3f9bfc2 )
Documentation
update python contributing guide ( #9 ) ( b6e095f )
0.1.0 (2021-01-08)
Features
generate v1beta1 ( 06c43f2 )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
