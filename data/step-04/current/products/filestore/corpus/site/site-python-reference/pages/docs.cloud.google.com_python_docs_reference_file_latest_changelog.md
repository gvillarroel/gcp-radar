---
title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/file/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/file/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/file/latest/changelog
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
1.13.2
1.12.0
1.11.0
1.10.1
1.9.5
1.8.0
1.7.0
1.6.2
1.5.1
1.4.1
1.3.0
1.2.3
1.1.3
1.0.0
0.2.3
0.1.0
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
1.13.2 (2025-06-11)
Documentation
Update import statement example in README ( 821bdb1 )
1.13.1 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( e06ee32 )
remove setup.cfg configuration for creating universal wheels ( #13659 ) ( 59bfd42 )
1.13.0 (2025-03-06)
Features
Added REGIONAL tier support in the v1 API ( 675aaad )
1.12.0 (2025-02-12)
Features
Add REST Interceptors which support reading metadata ( 908d742 )
Add support for reading selective GAPIC generation methods from service YAML ( 908d742 )
1.11.0 (2024-12-12)
Features
Add support for opt-in debug logging ( 819e8fb )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( 819e8fb )
1.10.1 (2024-11-11)
Bug Fixes
disable universe-domain validation ( #13243 ) ( d794dec )
1.10.0 (2024-10-24)
Features
Add support for Python 3.13 ( #13206 ) ( eb980d5 )
1.9.5 (2024-07-30)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( 189922a )
1.9.4 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12866 ) ( 40e1810 )
1.9.3 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12384 ) ( c69966f )
1.9.2 (2024-02-22)
Bug Fixes
[Many APIs] fix ValueError in test__validate_universe_domain ( #12283 ) ( f20b41a )
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12306 ) ( 1e787f2 )
1.9.1 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( c721248 )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( c721248 )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( c721248 )
1.9.0 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( #12240 ) ( d51f832 )
1.8.0 (2023-12-07)
Features
Add support for python 3.12 ( fb6f9db )
Introduce compatibility with native namespace packages ( fb6f9db )
Bug Fixes
Require proto-plus >= 1.22.3 ( fb6f9db )
Use retry_async instead of retry in async client ( fb6f9db )
1.7.0 (2023-11-15)
Features
[google-cloud-filestore] Added REGIONAL tier support in the v1 API ( #12022 ) ( d3ae94d )
1.6.2 (2023-10-09)
Documentation
Minor formatting ( #157 ) ( 65b3d25 )
1.6.1 (2023-07-04)
Bug Fixes
Add async context manager return types ( #148 ) ( 8c826d1 )
1.6.0 (2023-03-23)
Features
Add support for Snapshot ( fe698b2 )
Updating the client to match the latest v1 API ( fe698b2 )
Documentation
Fix formatting of request arg in docstring ( #142 ) ( 475baaf )
1.5.1 (2023-02-17)
Bug Fixes
Add service_yaml_parameters to py_gapic_library BUILD.bazel targets ( #133 ) ( 029b59d )
1.5.0 (2023-02-09)
Features
Enable “rest” transport in Python for services supporting numeric enums ( #131 ) ( 3e2f28c )
1.4.1 (2023-01-20)
Bug Fixes
Add context manager return types ( 0ac5913 )
Documentation
Add documentation for enums ( 0ac5913 )
1.4.0 (2023-01-10)
Features
Add support for python 3.11 ( #123 ) ( 1fc907a )
1.3.0 (2022-12-15)
Features
Add support for google.cloud.filestore.__version__ ( b427d60 )
Add typing to proto.Message based class attributes ( b427d60 )
Bug Fixes
Add dict typing for client_options ( b427d60 )
deps: Require google-api-core >=1.34.0, >=2.11.0 ( e7f87de )
Drop usage of pkg_resources ( e7f87de )
Fix timeout default values ( e7f87de )
Documentation
samples: Snippetgen handling of repeated enum field ( b427d60 )
samples: Snippetgen should call await on the operation coroutine before calling result ( e7f87de )
1.2.3 (2022-10-07)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #113 ) ( 44b1f4b )
1.2.2 (2022-09-29)
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #111 ) ( 1b98932 )
1.2.1 (2022-08-11)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #96 ) ( d53e446 )
deps: require proto-plus >= 1.22.0 ( d53e446 )
1.2.0 (2022-07-14)
Features
add audience parameter ( 061c4e6 )
Bug Fixes
deps: require google-api-core>=1.32.0,>=2.8.0 ( #86 ) ( 061c4e6 )
require python 3.7+ ( #88 ) ( 990fe7a )
1.1.3 (2022-06-03)
Bug Fixes
deps: require protobuf <4.0.0dev ( #77 ) ( 4f8b600 )
Documentation
fix changelog header to consistent size ( #76 ) ( 07f57aa )
1.1.2 (2022-05-06)
Documentation
fix type in docstring for map fields ( ce8c731 )
1.1.1 (2022-03-05)
Bug Fixes
deps: require google-api-core>=1.31.5, >=2.3.2 ( #43 ) ( 4f5dd38 )
1.1.0 (2022-02-26)
Features
add api key support ( #29 ) ( a72a4fe )
Bug Fixes
resolve DuplicateCredentialArgs error when using credentials_file ( 314d78e )
1.0.0 (2021-11-03)
Features
bump release level to production/stable ( #7 ) ( 7b30a52 )
0.2.1 (2021-11-01)
Bug Fixes
deps: drop packaging dependency ( c98e3ab )
deps: require google-api-core >= 1.28.0 ( c98e3ab )
Documentation
list oneofs in docstring ( c98e3ab )
0.2.0 (2021-10-08)
Features
add context manager support in client ( #11 ) ( c1fbdff )
0.1.0 (2021-10-02)
Features
generate v1 ( c95b948 )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
