---
title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/datafusion/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/datafusion/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/datafusion/latest/changelog
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
1.16.0 (latest)
1.15.0
1.14.0
1.13.3
1.12.0
1.11.1
1.10.5
1.9.0
1.8.2
1.7.1
1.6.0
1.5.3
1.4.2
1.3.0
1.2.1
1.1.0
1.0.2
0.1.2
PyPI History
1.16.0 (2026-03-26)
Features
Allow Protobuf 7.x ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
update image to us-central1-docker.pkg.dev/cloud-sdk-librarian-prod/images-prod/python-librarian-generator@sha256:f5426423676c75008c2135037e7b98f78cbb99f78b3c46fe043b6897be92d836 ( 3654fe76d755dd8db62ece81d5770ec58b3624df )
Bug Fixes
Require Python 3.9 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Require google-api-core >= 2.11.0 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Improve type checking ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
1.15.0 (2026-01-08)
Features
auto-enable mTLS when supported certificates are detected ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
check Python and dependency versions in generated GAPICs ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
1.14.0 (2025-10-16)
Features
Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Bug Fixes
Deprecate credentials_file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def )
1.13.3 (2025-06-11)
Documentation
Update import statement example in README ( 3d5bc37 )
1.13.2 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( feb5353 )
remove setup.cfg configuration for creating universal wheels ( #13659 ) ( 59bfd42 )
1.13.1 (2025-02-18)
Bug Fixes
deps: Require grpc-google-iam-v1>=0.14.0 ( 16e14c8 )
1.13.0 (2025-02-12)
Features
Add REST Interceptors which support reading metadata ( e22e2bd )
Add support for reading selective GAPIC generation methods from service YAML ( e22e2bd )
1.12.0 (2024-12-12)
Features
Add support for opt-in debug logging ( 19ed3be )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( 19ed3be )
1.11.1 (2024-10-31)
Bug Fixes
disable universe-domain validation ( 53c951e )
1.11.0 (2024-10-24)
Features
Add support for Python 3.13 ( 6252476 )
1.10.5 (2024-07-30)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( a6f7356 )
1.10.4 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12865 ) ( 7f9dedb )
1.10.3 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12383 ) ( 305f43f )
1.10.2 (2024-02-22)
Bug Fixes
[Many APIs] fix ValueError in test__validate_universe_domain ( #12282 ) ( b985096 )
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12305 ) ( 2aa7f17 )
1.10.1 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( f3db074 )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( f3db074 )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( f3db074 )
1.10.0 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( #12239 ) ( 8004d15 )
1.9.0 (2023-12-07)
Features
Add support for python 3.12 ( b96013d )
Introduce compatibility with native namespace packages ( b96013d )
Bug Fixes
Require proto-plus >= 1.22.3 ( b96013d )
Use retry_async instead of retry in async client ( b96013d )
1.8.3 (2023-09-19)
Documentation
Minor formatting ( 9487380 )
1.8.2 (2023-07-05)
Bug Fixes
Add async context manager return types ( #11445 ) ( 98bddda )
1.8.1 (2023-03-23)
Documentation
Fix formatting of request arg in docstring ( #172 ) ( 6f3a379 )
1.8.0 (2023-02-27)
Features
Enable “rest” transport in Python for services supporting numeric enums ( #165 ) ( c39e35c )
1.7.1 (2023-01-20)
Bug Fixes
Add context manager return types ( bf54384 )
Documentation
Add documentation for enums ( bf54384 )
1.7.0 (2023-01-10)
Features
Add support for python 3.11 ( #157 ) ( d0ee1e9 )
1.6.0 (2022-12-15)
Features
Add support for google.cloud.data_fusion.__version__ ( 7088952 )
Add typing to proto.Message based class attributes ( 7088952 )
Bug Fixes
Add dict typing for client_options ( 7088952 )
deps: Require google-api-core >=1.34.0, >=2.11.0 ( d164752 )
Drop usage of pkg_resources ( d164752 )
Fix timeout default values ( d164752 )
Documentation
samples: Snippetgen handling of repeated enum field ( 7088952 )
samples: Snippetgen should call await on the operation coroutine before calling result ( d164752 )
1.5.3 (2022-10-07)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #147 ) ( 85ca39f )
1.5.2 (2022-09-29)
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #145 ) ( 04c9fb1 )
1.5.1 (2022-08-11)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #129 ) ( ed5dd30 )
deps: require proto-plus >= 1.22.0 ( ed5dd30 )
1.5.0 (2022-07-16)
Features
add audience parameter ( e6903eb )
Bug Fixes
deps: require google-api-core>=1.32.0,>=2.8.0 ( #120 ) ( e6903eb )
require python 3.7+ ( #122 ) ( 3d38102 )
1.4.2 (2022-06-03)
Bug Fixes
deps: require protobuf <4.0.0dev ( #112 ) ( adc00c1 )
Documentation
fix changelog header to consistent size ( #113 ) ( 2ec8e36 )
1.4.1 (2022-03-05)
Bug Fixes
deps: require google-api-core>=1.31.5, >=2.3.2 ( #78 ) ( c5bed57 )
1.4.0 (2022-02-26)
Features
add api key support ( #63 ) ( d57bee2 )
Bug Fixes
resolve DuplicateCredentialArgs error when using credentials_file ( 65159ba )
1.3.0 (2022-01-14)
Features
update definitions for cloud/datafusion/v1 and cloud/datafusion/v1beta1 ( #58 ) ( 6b38819 )
1.2.1 (2021-11-01)
Bug Fixes
deps: drop packaging dependency ( b4d2c35 )
deps: require google-api-core >= 1.28.0 ( b4d2c35 )
Documentation
list oneofs in docstring ( b4d2c35 )
1.2.0 (2021-10-15)
Features
add support for python 3.10 ( #39 ) ( 09aefb0 )
1.1.0 (2021-10-08)
Features
add context manager support in client ( #36 ) ( 3c238d5 )
1.0.2 (2021-10-04)
Bug Fixes
improper types in pagers generation ( b278e83 )
1.0.1 (2021-09-24)
Bug Fixes
add ‘dict’ annotation type to ‘request’ ( 73e18c4 )
1.0.0 (2021-08-24)
Features
bump release level to production/stable ( #14 ) ( 26f5506 )
Documentation
migrate to main branch ( #20 ) ( 7edab48 )
0.1.2 (2021-07-29)
Bug Fixes
enable self signed jwt for grpc ( #10 ) ( 0ec8226 )
Documentation
add Samples section to CONTRIBUTING.rst ( #6 ) ( f97a1a8 )
Miscellaneous Chores
release as 0.1.2 ( #11 ) ( 6b418a0 )
0.1.1 (2021-07-21)
Bug Fixes
deps: pin ‘google-{api,cloud}-core’, ‘google-auth’ to allow 2.x versions ( #5 ) ( bcc8d82 )
0.1.0 (2021-07-06)
Features
generate v1 ( 8dff153 )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
