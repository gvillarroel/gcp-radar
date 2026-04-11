---
title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/memcache/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/memcache/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/memcache/latest/changelog
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
1.15.0 (latest)
1.14.0
1.13.0
1.12.2
1.11.0
1.10.1
1.9.5
1.8.0
1.7.2
1.6.1
1.5.0
1.4.4
1.3.2
1.2.1
1.1.3
1.0.0
0.3.2
0.2.0
0.1.0
PyPI History
1.15.0 (2026-03-26)
Features
Allow Protobuf 7.x ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
update image to us-central1-docker.pkg.dev/cloud-sdk-librarian-prod/images-prod/python-librarian-generator@sha256:f5426423676c75008c2135037e7b98f78cbb99f78b3c46fe043b6897be92d836 ( 3654fe76d755dd8db62ece81d5770ec58b3624df )
Bug Fixes
Require Python 3.9 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Require google-api-core >= 2.11.0 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Improve type checking ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
1.14.0 (2026-01-09)
Features
auto-enable mTLS when supported certificates are detected ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
check Python and dependency versions in generated GAPICs ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
1.13.0 (2025-10-20)
Features
Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Bug Fixes
Deprecate credentials_file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def )
1.12.2 (2025-06-11)
Documentation
Update import statement example in README ( 868b006 )
1.12.1 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( c8bbf32 )
remove setup.cfg configuration for creating universal wheels ( #13659 ) ( 59bfd42 )
1.12.0 (2025-02-12)
Features
Add REST Interceptors which support reading metadata ( a0910dd )
Add support for reading selective GAPIC generation methods from service YAML ( a0910dd )
1.11.0 (2024-12-12)
Features
Add support for opt-in debug logging ( feb5c03 )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( feb5c03 )
1.10.1 (2024-11-11)
Bug Fixes
disable universe-domain validation ( #13243 ) ( d794dec )
1.10.0 (2024-10-24)
Features
Add support for Python 3.13 ( #13207 ) ( ceb9be8 )
1.9.5 (2024-07-30)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( d95af77 )
1.9.4 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12867 ) ( 3362176 )
1.9.3 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12385 ) ( d50f4d0 )
1.9.2 (2024-02-22)
Bug Fixes
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12307 ) ( be87bc4 )
fix ValueError in test__validate_universe_domain ( 7c2f2c2 )
1.9.1 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( 27dceb9 )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( 27dceb9 )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( 27dceb9 )
1.9.0 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( #12241 ) ( aae72f5 )
1.8.0 (2023-12-07)
Features
Add support for python 3.12 ( f46b37f )
Introduce compatibility with native namespace packages ( f46b37f )
Bug Fixes
Require proto-plus >= 1.22.3 ( f46b37f )
Use retry_async instead of retry in async client ( f46b37f )
1.7.3 (2023-09-19)
Documentation
Minor formatting ( 1ae610b )
1.7.2 (2023-07-05)
Bug Fixes
Add async context manager return types ( #11446 ) ( 37682b7 )
1.7.1 (2023-03-23)
Documentation
Fix formatting of request arg in docstring ( #251 ) ( dac4ef6 )
1.7.0 (2023-02-16)
Features
Enable “rest” transport in Python for services supporting numeric enums ( #245 ) ( f702f7a )
1.6.1 (2023-01-20)
Bug Fixes
Add context manager return types ( 29246d4 )
Documentation
Add documentation for enums ( 29246d4 )
1.6.0 (2023-01-10)
Features
Add support for python 3.11 ( #236 ) ( 36b98c5 )
1.5.0 (2022-12-14)
Features
Add support for google.cloud.memcache.__version__ ( c9c771a )
Add typing to proto.Message based class attributes ( c9c771a )
Maintenance schedules ( c9c771a )
Bug Fixes
Add dict typing for client_options ( c9c771a )
deps: Require google-api-core >=1.34.0, >=2.11.0 ( b1f7a36 )
Drop usage of pkg_resources ( b1f7a36 )
Fix timeout default values ( b1f7a36 )
Documentation
samples: Snippetgen handling of repeated enum field ( c9c771a )
samples: Snippetgen should call await on the operation coroutine before calling result ( b1f7a36 )
1.4.4 (2022-10-07)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #224 ) ( 90a04d3 )
1.4.3 (2022-09-29)
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #222 ) ( 2394f74 )
1.4.2 (2022-08-11)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #207 ) ( 8a21a06 )
deps: require proto-plus >= 1.22.0 ( 8a21a06 )
1.4.1 (2022-07-13)
Bug Fixes
deps: require google-api-core>=1.32.0,>=2.8.0 ( #199 ) ( aa7978e )
1.4.0 (2022-07-06)
Features
add audience parameter ( 9ef3f98 )
Bug Fixes
deps: require google-api-core >= 2.8.0 ( #194 ) ( 9ef3f98 )
exclude tests directory in packaging ( #195 ) ( bfc330b )
require python 3.7+ ( #198 ) ( a792592 )
1.3.2 (2022-06-06)
Bug Fixes
deps: require protobuf <4.0.0dev ( #184 ) ( acc06a7 )
Documentation
fix changelog header to consistent size ( #183 ) ( 3647e5f )
1.3.1 (2022-03-05)
Bug Fixes
deps: require google-api-core>=1.31.5, >=2.3.2 ( #150 ) ( fba1303 )
deps: require proto-plus>=1.15.0 ( fba1303 )
1.3.0 (2022-02-26)
Features
add api key support ( #135 ) ( ef5104e )
Bug Fixes
resolve DuplicateCredentialArgs error when using credentials_file ( 5f8a2b4 )
1.2.1 (2021-11-01)
Bug Fixes
deps: drop packaging dependency ( 5159fe9 )
deps: require google-api-core >= 1.28.0 ( 5159fe9 )
Documentation
list oneofs in docstring ( 5159fe9 )
1.2.0 (2021-10-12)
Features
add context manager support in client ( #111 ) ( a385b99 )
1.1.3 (2021-09-30)
Bug Fixes
improper types in pagers generation ( 3680bac )
1.1.2 (2021-09-24)
Bug Fixes
add ‘dict’ annotation type to ‘request’ ( c56fbee )
1.1.1 (2021-07-26)
Bug Fixes
deps: pin ‘google-{api,cloud}-core’, ‘google-auth’ to allow 2.x versions ( #82 ) ( d4f2c96 )
enable self signed jwt for grpc ( #88 ) ( 0ddd8eb )
Documentation
add Samples section to CONTRIBUTING.rst ( #83 ) ( 9471485 )
Miscellaneous Chores
release as 1.1.1 ( #87 ) ( 3182207 )
1.1.0 (2021-06-30)
Features
add always_use_jwt_access ( #79 ) ( e7f03bb )
support self-signed JWT flow for service accounts ( 2d1aaf4 )
Bug Fixes
add async client to %name_%version/init.py ( 2d1aaf4 )
Documentation
omit mention of Python 2.7 in ‘CONTRIBUTING.rst’ ( #1127 ) ( #70 ) ( f273025 )
1.0.0 (2021-05-28)
Features
bump release level to production/stable ( #59 ) ( b8d9394 )
support self-signed JWT flow for service accounts ( 2ad1bfb )
Bug Fixes
add async client to %name_%version/init.py ( 2ad1bfb )
Miscellaneous Chores
release 1.0.0 ( #62 ) ( 829a7b7 )
0.3.0 (2021-02-10)
Features
add async client ( #26 ) ( 0bbc337 )
generate v1 ( #37 ) ( 7945daf )
0.2.0 (2020-05-28)
Features
add mtls support ( #7 ) ( 669d2a9 )
0.1.0 (2020-03-03)
Features
generate v1beta2 ( 8b4b6d8 )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
