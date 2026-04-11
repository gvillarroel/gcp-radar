---
title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/accessapproval/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/changelog
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
1.19.0 (latest)
1.18.0
1.17.0
1.16.2
1.15.0
1.14.1
1.13.5
1.12.0
1.11.3
1.10.1
1.9.1
1.8.0
1.7.5
1.6.1
1.5.1
1.4.1
1.3.5
1.2.0
1.1.1
1.0.0
0.2.2
0.1.0
PyPI History
1.19.0 (2026-03-26)
Features
Allow Protobuf 7.x ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
update image to us-central1-docker.pkg.dev/cloud-sdk-librarian-prod/images-prod/python-librarian-generator@sha256:f5426423676c75008c2135037e7b98f78cbb99f78b3c46fe043b6897be92d836 ( 3654fe76d755dd8db62ece81d5770ec58b3624df )
Bug Fixes
Require Python 3.9 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Require google-api-core >= 2.11.0 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Improve type checking ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
1.18.0 (2026-01-08)
Features
auto-enable mTLS when supported certificates are detected ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
check Python and dependency versions in generated GAPICs ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
1.17.0 (2025-10-16)
Features
Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Bug Fixes
Deprecate credentials_file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def )
1.16.2 (2025-06-11)
Documentation
Update import statement example in README ( 1562bb7 )
1.16.1 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( a1b9294 )
remove setup.cfg configuration for creating universal wheels ( #13659 ) ( 59bfd42 )
1.16.0 (2025-02-12)
Features
Add REST Interceptors which support reading metadata ( a961bc0 )
Add support for reading selective GAPIC generation methods from service YAML ( a961bc0 )
1.15.0 (2024-12-12)
Features
Add support for opt-in debug logging ( b1dfc55 )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( b1dfc55 )
1.14.1 (2024-10-31)
Bug Fixes
disable universe-domain validation ( 85c7512 )
1.14.0 (2024-10-24)
Features
Add support for Python 3.13 ( #13199 ) ( 2fc3726 )
1.13.5 (2024-07-30)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( c6eeae0 )
1.13.4 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12863 ) ( 3e6e423 )
1.13.3 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12381 ) ( 48ae8ab )
1.13.2 (2024-02-22)
Bug Fixes
[Many APIs] fix ValueError in test__validate_universe_domain ( #12280 ) ( 2d75d0e )
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12303 ) ( fbb80c3 )
1.13.1 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( 780c5f1 )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( 780c5f1 )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( 780c5f1 )
1.13.0 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( a0392ee )
1.12.0 (2023-12-07)
Features
Add support for python 3.12 ( ea6cfc2 )
Introduce compatibility with native namespace packages ( ea6cfc2 )
Bug Fixes
Require proto-plus >= 1.22.3 ( ea6cfc2 )
Use retry_async instead of retry in async client ( ea6cfc2 )
1.11.3 (2023-09-30)
Documentation
Minor formatting ( #11630 ) ( b176996 )
1.11.2 (2023-07-05)
Bug Fixes
Add async context manager return types ( #11444 ) ( 9aa301a )
1.11.1 (2023-03-23)
Documentation
Fix formatting of request arg in docstring ( #277 ) ( 7ed0221 )
1.11.0 (2023-02-27)
Features
Enable “rest” transport in Python for services supporting numeric enums ( #272 ) ( cac87bc )
1.10.1 (2023-01-20)
Bug Fixes
Add context manager return types ( 77e882b )
Documentation
Add documentation for enums ( 77e882b )
1.10.0 (2023-01-10)
Features
Add support for python 3.11 ( #263 ) ( c7e602d )
1.9.1 (2022-12-06)
Bug Fixes
deps: Require google-api-core >=1.34.0, >=2.11.0 ( 22f6b87 )
Drop usage of pkg_resources ( 22f6b87 )
Fix timeout default values ( 22f6b87 )
Documentation
samples: Snippetgen should call await on the operation coroutine before calling result ( 22f6b87 )
1.9.0 (2022-11-14)
Features
Add typing to proto.Message based class attributes ( 6661f4f )
Documentation
samples: Snippetgen handling of repeated enum field ( 6661f4f )
1.8.0 (2022-11-04)
Features
Add support for google.cloud.accessapproval.__version__ ( #249 ) ( 6fdeb64 )
Bug Fixes
Add dict typing for client_options ( 6fdeb64 )
deps: require google-api-core >=1.33.2 ( 6fdeb64 )
1.7.5 (2022-10-07)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #247 ) ( 679c5b7 )
1.7.4 (2022-10-03)
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #245 ) ( 83bf5bd )
1.7.3 (2022-08-29)
Documentation
added Cloud Dataproc and Secret Manager to the list of supported services ( #233 ) ( ece1b9c )
1.7.2 (2022-08-11)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #228 ) ( 6cc9cbd )
deps: require proto-plus >= 1.22.0 ( 6cc9cbd )
1.7.1 (2022-07-13)
Bug Fixes
deps: require google-api-core>=1.32.0,>=2.8.0 ( #221 ) ( 0f07e6d )
1.7.0 (2022-07-07)
Features
add audience parameter ( b3c2d7a )
Bug Fixes
deps: require google-api-core >= 2.8.0 ( #217 ) ( b3c2d7a )
require python 3.7+ ( #219 ) ( 461fef4 )
1.6.1 (2022-06-03)
Bug Fixes
deps: require protobuf <4.0.0dev ( #207 ) ( 7829ed3 )
Documentation
fix changelog header to consistent size ( #205 ) ( 5aa1022 )
1.6.0 (2022-05-19)
Features
update protos to include InvalidateApprovalRequest and GetAccessApprovalServiceAccount APIs ( #199 ) ( 908cdc3 )
1.5.1 (2022-03-05)
Bug Fixes
deps: require google-api-core>=1.31.5, >=2.3.2 ( #170 ) ( 721487c )
deps: require proto-plus>=1.15.0 ( 721487c )
1.5.0 (2022-02-17)
Features
add api key support ( #156 ) ( 5fcfe00 )
Bug Fixes
resolve DuplicateCredentialArgs error when using credentials_file ( 9286ef0 )
Documentation
add autogenerated code snippets ( 8ca51b3 )
added resource annotations ( #161 ) ( de63e9e )
1.4.1 (2021-11-01)
Bug Fixes
deps: drop packaging dependency ( d6e1bd6 )
deps: require google-api-core >= 1.28.0 ( d6e1bd6 )
fix extras_require typo in setup.py ( d6e1bd6 )
Documentation
list oneofs in docstring ( d6e1bd6 )
1.4.0 (2021-10-11)
Features
add context manager support in client ( #126 ) ( 372628b )
add trove classifier for python 3.9 and python 3.10 ( #129 ) ( 2bb4981 )
1.3.5 (2021-09-30)
Bug Fixes
improper types in pagers generation ( a73b1e0 )
1.3.4 (2021-09-24)
Bug Fixes
add ‘dict’ annotation type to ‘request’ ( 0585562 )
1.3.3 (2021-07-27)
Bug Fixes
enable self signed jwt for grpc ( #102 ) ( a7a1fc2 )
Documentation
add Samples section to CONTRIBUTING.rst ( #98 ) ( 4fda4f9 )
Miscellaneous Chores
release as 1.3.3 ( #103 ) ( 0b964c6 )
1.3.2 (2021-07-20)
Bug Fixes
deps: pin ‘google-{api,cloud}-core’, ‘google-auth’ to allow 2.x versions ( #97 ) ( 9400ffe )
1.3.1 (2021-06-30)
Bug Fixes
disable always_use_jwt_access ( e4e04a0 )
disable always_use_jwt_access ( #93 ) ( e4e04a0 )
1.3.0 (2021-06-23)
Features
add always_use_jwt_access ( #88 ) ( 73dce43 )
Documentation
omit mention of Python 2.7 in ‘CONTRIBUTING.rst’ ( #1127 ) ( #83 ) ( 8c56c88 ), closes #1126
1.2.0 (2021-05-28)
Features
add from_service_account_info ( 8f6833a )
support self-signed JWT flow for service accounts ( e761cff )
Bug Fixes
add async client to %name_%version/init.py ( e761cff )
deps: add packaging requirement ( #78 ) ( fd1417b )
use correct retry deadlines ( #57 ) ( 8f6833a )
1.1.1 (2021-02-12)
Bug Fixes
remove client recv msg limit and add enums to types/__init__.py ( #40 ) ( 2333089 )
1.1.0 (2020-11-16)
Features
add common resource helpers, expose client transport ( #33 ) ( 2c07916 )
1.0.0 (2020-08-05)
⚠ BREAKING CHANGES
migrate to use microgen (#23)
Features
migrate to use microgen ( #23 ) ( 537de3d )
0.2.0 (2020-05-13)
Bug Fixes
update readme ( #11 ) ( 4315c46 )
0.1.0 (2020-02-10)
Features
generate v1 ( 88003fe )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
