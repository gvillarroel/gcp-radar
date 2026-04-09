---
title: "Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/apigateway/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/apigateway/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/apigateway/latest/changelog
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
1.14.0 (latest)
1.13.0
1.12.2
1.11.0
1.10.1
1.9.5
1.8.0
1.7.3
1.6.1
1.5.1
1.4.0
1.3.3
1.2.2
1.1.1
1.0.4
0.2.0
0.1.0
Changelog
PyPI History
1.14.0 (2026-01-08)
Features
auto-enable mTLS when supported certificates are detected ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
check Python and dependency versions in generated GAPICs ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
1.13.0 (2025-10-16)
Features
Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Bug Fixes
Deprecate credentials_file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def )
1.12.2 (2025-06-11)
Documentation
Update import statement example in README ( 1562bb7 )
1.12.1 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( a1b9294 )
remove setup.cfg configuration for creating universal wheels ( #13659 ) ( 59bfd42 )
1.12.0 (2025-02-12)
Features
Add REST Interceptors which support reading metadata ( a961bc0 )
Add support for reading selective GAPIC generation methods from service YAML ( a961bc0 )
1.11.0 (2024-12-12)
Features
Add support for opt-in debug logging ( b1dfc55 )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( b1dfc55 )
1.10.1 (2024-10-31)
Bug Fixes
disable universe-domain validation ( 85c7512 )
1.10.0 (2024-10-24)
Features
Add support for Python 3.13 ( #13199 ) ( 2fc3726 )
1.9.5 (2024-07-30)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( c6eeae0 )
1.9.4 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12863 ) ( 3e6e423 )
1.9.3 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12381 ) ( 48ae8ab )
1.9.2 (2024-02-22)
Bug Fixes
[Many APIs] fix ValueError in test__validate_universe_domain ( #12280 ) ( 2d75d0e )
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12303 ) ( fbb80c3 )
1.9.1 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( 780c5f1 )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( 780c5f1 )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( 780c5f1 )
1.9.0 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( a0392ee )
1.8.0 (2023-12-07)
Features
Add support for python 3.12 ( ea6cfc2 )
Introduce compatibility with native namespace packages ( ea6cfc2 )
Bug Fixes
Require proto-plus >= 1.22.3 ( ea6cfc2 )
Use retry_async instead of retry in async client ( ea6cfc2 )
1.7.3 (2023-09-30)
Documentation
Minor formatting ( #11630 ) ( b176996 )
1.7.2 (2023-07-05)
Bug Fixes
Add async context manager return types ( #11444 ) ( 9aa301a )
1.7.1 (2023-03-23)
Documentation
Fix formatting of request arg in docstring ( #208 ) ( f2254d6 )
1.7.0 (2023-02-27)
Features
Enable “rest” transport in Python for services supporting numeric enums ( #202 ) ( bff081a )
1.6.1 (2023-01-20)
Bug Fixes
Add context manager return types ( 9288267 )
Documentation
Add documentation for enums ( 9288267 )
1.6.0 (2023-01-10)
Features
Add support for python 3.11 ( #194 ) ( f38c7c9 )
1.5.1 (2022-12-08)
Bug Fixes
deps: Require google-api-core >=1.34.0, >=2.11.0 ( 19703a5 )
Drop usage of pkg_resources ( 19703a5 )
Fix timeout default values ( 19703a5 )
Documentation
samples: Snippetgen should call await on the operation coroutine before calling result ( 19703a5 )
1.5.0 (2022-11-16)
Features
Add typing to proto.Message based class attributes ( 7b87c92 )
Documentation
samples: Snippetgen handling of repeated enum field ( 7b87c92 )
1.4.0 (2022-11-07)
Features
add support for google.cloud.apigateway.__version__ ( e9e9c31 )
Bug Fixes
Add dict typing for client_options ( e9e9c31 )
deps: require google-api-core >=1.33.2 ( e9e9c31 )
1.3.3 (2022-10-07)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #179 ) ( 787b0a6 )
1.3.2 (2022-09-29)
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #177 ) ( d43f7af )
1.3.1 (2022-08-11)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #164 ) ( 4953359 )
deps: require proto-plus >= 1.22.0 ( 4953359 )
1.3.0 (2022-07-16)
Features
add audience parameter ( af598f0 )
Bug Fixes
deps: require google-api-core>=1.32.0,>=2.8.0 ( #158 ) ( d36cf27 )
require python 3.7+ ( #156 ) ( 57b848a )
1.2.2 (2022-06-03)
Bug Fixes
deps: require protobuf <4.0.0dev ( #146 ) ( c1c7fbf )
Documentation
fix changelog header to consistent size ( #147 ) ( 6e7f4f1 )
1.2.1 (2022-03-05)
Bug Fixes
deps: require google-api-core>=1.31.5, >=2.3.2 ( #113 ) ( 729cc99 )
deps: require proto-plus>=1.15.0 ( 729cc99 )
1.2.0 (2022-02-11)
Features
add api key support ( #99 ) ( 72f55a7 )
Bug Fixes
resolve DuplicateCredentialArgs error when using credentials_file ( dd8ce9f )
Documentation
add autogenerated code snippets ( 033bbc4 )
1.1.1 (2021-11-01)
Bug Fixes
deps: drop packaging dependency ( ddf46fa )
deps: require google-api-core >= 1.28.0 ( ddf46fa )
Documentation
list oneofs in docstring ( ddf46fa )
1.1.0 (2021-10-11)
Features
add context manager support in client ( #74 ) ( 5b43933 )
add trove classifier for python 3.9 and python 3.10 ( #77 ) ( 394dd62 )
Bug Fixes
improper types in pagers generation ( fc86cd1 )
1.0.4 (2021-09-24)
Bug Fixes
add ‘dict’ annotation type to ‘request’ ( 39ee308 )
1.0.3 (2021-07-27)
Bug Fixes
enable self signed jwt for grpc ( #52 ) ( 55a8883 )
Documentation
add Samples section to CONTRIBUTING.rst ( #48 ) ( 4e791d2 )
Miscellaneous Chores
release as 1.0.3 ( #53 ) ( aa6e493 )
1.0.2 (2021-07-21)
Bug Fixes
deps: pin ‘google-{api,cloud}-core’, ‘google-auth’ to allow 2.x versions ( #47 ) ( 17aed88 )
1.0.1 (2021-07-12)
Bug Fixes
disable always_use_jwt_access ( b2869e6 )
disable always_use_jwt_access ( #41 ) ( b2869e6 )
1.0.1 (2021-06-30)
Bug Fixes
disable always_use_jwt_access ( b2869e6 )
disable always_use_jwt_access ( #41 ) ( b2869e6 )
1.0.0 (2021-06-24)
Features
add always_use_jwt_access ( #38 ) ( 3ffe025 )
bump release level to production/stable ( #25 ) ( 0eadb82 )
Bug Fixes
exclude docs and tests from package ( #32 ) ( 8b176e5 )
Miscellaneous Chores
release as 1.0.0 ( #30 ) ( 4289246 )
Documentation
omit mention of Python 2.7 in ‘CONTRIBUTING.rst’ ( #1127 ) ( #35 ) ( 2f3c1cc )
0.2.0 (2021-05-28)
Features
support self-signed JWT flow for service accounts ( 94695fe )
Bug Fixes
add async client to %name_%version/init.py ( 94695fe )
deps: add packaging requirement ( #21 ) ( 80d7f64 )
use correct retry deadline ( #3 ) ( 688cde1 )
0.1.0 (2021-03-23)
Features
generate v1 ( 7a83fd6 )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
