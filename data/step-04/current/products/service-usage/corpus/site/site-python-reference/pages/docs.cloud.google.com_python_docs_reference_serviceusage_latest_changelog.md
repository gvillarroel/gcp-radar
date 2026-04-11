---
title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/serviceusage/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/serviceusage/latest/changelog
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
1.13.0
1.12.0
1.11.1
1.10.5
1.9.0
1.7.2
1.6.1
1.5.0
1.4.3
1.3.2
1.2.1
1.1.0
1.0.1
0.2.2
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
1.15.0 (2026-01-09)
Features
auto-enable mTLS when supported certificates are detected ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
check Python and dependency versions in generated GAPICs ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
1.14.0 (2025-10-20)
Features
Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Bug Fixes
Deprecate credentials_file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def )
1.13.1 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( 784a3ca )
remove setup.cfg configuration for creating universal wheels ( #13659 ) ( 59bfd42 )
1.13.0 (2025-02-12)
Features
Add REST Interceptors which support reading metadata ( 87b5382 )
Add support for reading selective GAPIC generation methods from service YAML ( 87b5382 )
1.12.0 (2024-12-12)
Features
Add support for opt-in debug logging ( 856e0f0 )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( 856e0f0 )
1.11.1 (2024-10-31)
Bug Fixes
disable universe-domain validation ( 59c4287 )
1.11.0 (2024-10-24)
Features
Add support for Python 3.13 ( #13202 ) ( 5b1f2f3 )
1.10.5 (2024-07-30)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( 42c4d04 )
1.10.4 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12869 ) ( e42edbc )
1.10.3 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12387 ) ( 12ce658 )
1.10.2 (2024-02-22)
Bug Fixes
[Many APIs] fix ValueError in test__validate_universe_domain ( #12283 ) ( f20b41a )
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12309 ) ( c23398a )
1.10.1 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( 9e8d039 )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( 9e8d039 )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( 9e8d039 )
1.10.0 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( #12243 ) ( e14d4b1 )
1.9.0 (2023-12-07)
Features
Add support for python 3.12 ( e9655df )
Introduce compatibility with native namespace packages ( e9655df )
Bug Fixes
Require proto-plus >= 1.22.3 ( e9655df )
Use retry_async instead of retry in async client ( e9655df )
1.8.0 (2023-09-19)
Features
added ConsumerQuotaLimit.supported_locations ( be7f5e4 )
added ProducerQuotaPolicy message and QuotaBucket.producer_quota_policy field ( be7f5e4 )
introduce resource class serviceusage.googleapis.com/Service ( be7f5e4 )
Documentation
Minor formatting ( 025219f )
1.7.2 (2023-07-05)
Bug Fixes
Add async context manager return types ( #11449 ) ( 3885820 )
1.7.1 (2023-03-23)
Documentation
Fix formatting of request arg in docstring ( #170 ) ( f730be6 )
1.7.0 (2023-02-28)
Features
Enable “rest” transport in Python for services supporting numeric enums ( #166 ) ( 3dcb482 )
1.6.1 (2023-01-23)
Bug Fixes
Add context manager return types ( d7c14ed )
Documentation
Add documentation for enums ( d7c14ed )
1.6.0 (2023-01-10)
Features
Add support for python 3.11 ( #158 ) ( c61468e )
1.5.0 (2022-12-14)
Features
Add support for google.cloud.service_usage.__version__ ( c13d3f6 )
Add typing to proto.Message based class attributes ( c13d3f6 )
Bug Fixes
Add dict typing for client_options ( c13d3f6 )
deps: Require google-api-core >=1.34.0, >=2.11.0 ( a2eb0d7 )
Drop usage of pkg_resources ( a2eb0d7 )
Fix timeout default values ( a2eb0d7 )
Documentation
samples: Snippetgen handling of repeated enum field ( c13d3f6 )
samples: Snippetgen should call await on the operation coroutine before calling result ( a2eb0d7 )
1.4.3 (2022-10-07)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #148 ) ( b8cc381 )
1.4.2 (2022-10-03)
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #146 ) ( 99d8d9e )
1.4.1 (2022-08-11)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #133 ) ( 586a7f9 )
deps: require proto-plus >= 1.22.0 ( 586a7f9 )
1.4.0 (2022-07-16)
Features
add audience parameter ( c0745b9 )
Bug Fixes
deps: require google-api-core>=1.32.0,>=2.8.0 ( #127 ) ( 90975b7 )
require python 3.7+ ( #125 ) ( c9de01e )
1.3.2 (2022-06-03)
Bug Fixes
deps: require protobuf <4.0.0dev ( #115 ) ( fc546f2 )
Documentation
fix changelog header to consistent size ( #116 ) ( 1c9df92 )
1.3.1 (2022-03-05)
Bug Fixes
deps: require google-api-core>=1.31.5, >=2.3.2 ( #88 ) ( bee9ae0 )
1.3.0 (2022-02-26)
Features
add api key support ( #74 ) ( c9cf774 )
Bug Fixes
resolve DuplicateCredentialArgs error when using credentials_file ( 27fb0c2 )
Documentation
add generated snippets ( #79 ) ( dee08f1 )
1.2.1 (2021-11-01)
Bug Fixes
deps: drop packaging dependency ( 57a982c )
deps: require google-api-core >= 1.28.0 ( 57a982c )
Documentation
list oneofs in docstring ( 57a982c )
1.2.0 (2021-10-18)
Features
add support for python 3.10 ( #53 ) ( 9f235a8 )
1.1.0 (2021-10-07)
Features
add context manager support in client ( #49 ) ( b50e7cb )
Bug Fixes
improper types in pagers generation ( b230f5f )
1.0.1 (2021-09-24)
Bug Fixes
add ‘dict’ annotation type to ‘request’ ( 172ba0d )
1.0.0 (2021-08-03)
Features
bump release level to production/stable ( #28 ) ( 6627d2d )
0.2.2 (2021-07-29)
Bug Fixes
enable self signed jwt for grpc ( #24 ) ( cb9bed0 )
Documentation
add Samples section to CONTRIBUTING.rst ( #20 ) ( 394ed1a )
Miscellaneous Chores
release as 0.2.2 ( #25 ) ( 4f1ab38 )
0.2.1 (2021-07-21)
Bug Fixes
deps: pin ‘google-{api,cloud}-core’, ‘google-auth’ to allow 2.x versions ( #19 ) ( 599eee0 )
0.2.0 (2021-07-14)
Features
add always_use_jwt_access ( #10 ) ( 87d2c40 )
Bug Fixes
disable always_use_jwt_access ( #14 ) ( 2f90720 )
Documentation
omit mention of Python 2.7 in ‘CONTRIBUTING.rst’ ( #1127 ) ( #5 ) ( c8bbbcb )
0.1.0 (2021-06-14)
Features
generate v1 ( b468d1b )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
