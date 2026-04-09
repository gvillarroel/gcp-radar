---
title: "Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/apikeys/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/apikeys/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/apikeys/latest/changelog
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
0.7.0 (latest)
0.6.0
0.5.17
0.4.1
0.3.0
0.2.2
0.1.0
Changelog
PyPI History
0.7.0 (2026-01-08)
Features
auto-enable mTLS when supported certificates are detected ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
check Python and dependency versions in generated GAPICs ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
0.6.0 (2025-10-16)
Features
Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Bug Fixes
Deprecate credentials_file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def )
0.5.17 (2025-06-11)
Documentation
Update import statement example in README ( 1562bb7 )
0.5.16 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( a1b9294 )
remove setup.cfg configuration for creating universal wheels ( #13659 ) ( 59bfd42 )
0.5.15 (2025-02-12)
Features
Add REST Interceptors which support reading metadata ( a961bc0 )
Add support for reading selective GAPIC generation methods from service YAML ( a961bc0 )
0.5.14 (2024-12-12)
Features
Add support for opt-in debug logging ( b1dfc55 )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( b1dfc55 )
0.5.13 (2024-10-31)
Bug Fixes
disable universe-domain validation ( 85c7512 )
0.5.12 (2024-10-24)
Features
Add support for Python 3.13 ( #13199 ) ( 2fc3726 )
0.5.11 (2024-07-30)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( c6eeae0 )
0.5.10 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12863 ) ( 3e6e423 )
0.5.9 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12381 ) ( 48ae8ab )
0.5.8 (2024-02-22)
Bug Fixes
[Many APIs] fix ValueError in test__validate_universe_domain ( #12280 ) ( 2d75d0e )
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12303 ) ( fbb80c3 )
0.5.7 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( 780c5f1 )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( 780c5f1 )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( 780c5f1 )
0.5.6 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( a0392ee )
0.5.5 (2023-12-07)
Features
Add support for python 3.12 ( ea6cfc2 )
Introduce compatibility with native namespace packages ( ea6cfc2 )
Bug Fixes
Require proto-plus >= 1.22.3 ( ea6cfc2 )
Use retry_async instead of retry in async client ( ea6cfc2 )
0.5.4 (2023-09-30)
Documentation
Minor formatting ( #11630 ) ( b176996 )
0.5.3 (2023-07-05)
Bug Fixes
Add async context manager return types ( #11444 ) ( 9aa301a )
0.5.2 (2023-03-23)
Documentation
Fix formatting of request arg in docstring ( #53 ) ( 7f7fae9 )
0.5.1 (2023-01-20)
Bug Fixes
Add context manager return types ( #43 ) ( 9fc82bd )
0.5.0 (2023-01-10)
Features
Add support for python 3.11 ( #41 ) ( 0e03896 )
0.4.1 (2022-12-14)
Bug Fixes
deps: Require google-api-core >=1.34.0, >=2.11.0 ( 7ad93f1 )
Drop usage of pkg_resources ( 7ad93f1 )
Fix timeout default values ( 7ad93f1 )
Documentation
samples: Snippetgen should call await on the operation coroutine before calling result ( 7ad93f1 )
0.4.0 (2022-11-16)
Features
Add typing to proto.Message based class attributes ( d336d7d )
Documentation
samples: Snippetgen handling of repeated enum field ( d336d7d )
0.3.0 (2022-11-08)
Features
add support for google.cloud.api_keys.__version__ ( cabe55d )
Bug Fixes
Add dict typing for client_options ( cabe55d )
0.2.2 (2022-10-10)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #22 ) ( b8024ae )
deps: require google-api-core>=1.33.2 ( b8024ae )
0.2.1 (2022-10-03)
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #18 ) ( d46af8a )
0.2.0 (2022-09-16)
Features
Add support for REST transport ( #12 ) ( 41d903b )
Bug Fixes
deps: require google-api-core>=1.33.1,>=2.8.0 ( 41d903b )
deps: require protobuf >= 3.20.1 ( 41d903b )
0.1.0 (2022-08-26)
Features
generate v2 ( 0d8bd5f )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
