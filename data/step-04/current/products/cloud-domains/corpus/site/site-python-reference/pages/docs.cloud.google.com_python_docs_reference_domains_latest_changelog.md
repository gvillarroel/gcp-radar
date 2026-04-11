---
title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/domains/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/domains/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/domains/latest/changelog
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
1.13.0 (latest)
1.12.0
1.11.0
1.10.2
1.9.0
1.8.1
1.7.5
1.6.0
1.5.2
1.4.1
1.3.0
1.2.3
1.1.3
1.0.0
0.4.3
0.3.0
0.2.3
0.1.0
PyPI History
1.13.0 (2026-03-26)
Features
Allow Protobuf 7.x ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
update image to us-central1-docker.pkg.dev/cloud-sdk-librarian-prod/images-prod/python-librarian-generator@sha256:f5426423676c75008c2135037e7b98f78cbb99f78b3c46fe043b6897be92d836 ( 3654fe76d755dd8db62ece81d5770ec58b3624df )
Bug Fixes
Require Python 3.9 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Require google-api-core >= 2.11.0 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Improve type checking ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
1.12.0 (2026-01-08)
Features
auto-enable mTLS when supported certificates are detected ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
check Python and dependency versions in generated GAPICs ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
1.11.0 (2025-10-16)
Features
Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Bug Fixes
Deprecate credentials_file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def )
1.10.2 (2025-06-11)
Documentation
Update import statement example in README ( 3d5bc37 )
1.10.1 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( feb5353 )
remove setup.cfg configuration for creating universal wheels ( #13659 ) ( 59bfd42 )
1.10.0 (2025-02-12)
Features
Add REST Interceptors which support reading metadata ( e92d527 )
Add support for reading selective GAPIC generation methods from service YAML ( e92d527 )
1.9.0 (2024-12-12)
Features
Add support for opt-in debug logging ( 819e8fb )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( 819e8fb )
1.8.1 (2024-11-11)
Bug Fixes
disable universe-domain validation ( #13242 ) ( b479ff8 )
1.8.0 (2024-10-24)
Features
Add support for Python 3.13 ( #13204 ) ( 2605ae0 )
1.7.5 (2024-07-30)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( ba1064f )
1.7.4 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12866 ) ( 40e1810 )
1.7.3 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12384 ) ( c69966f )
1.7.2 (2024-02-22)
Bug Fixes
[Many APIs] fix ValueError in test__validate_universe_domain ( #12283 ) ( f20b41a )
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12306 ) ( 1e787f2 )
1.7.1 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( c721248 )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( c721248 )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( c721248 )
1.7.0 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( #12240 ) ( d51f832 )
1.6.0 (2023-12-07)
Features
Add support for python 3.12 ( fb6f9db )
Introduce compatibility with native namespace packages ( fb6f9db )
Bug Fixes
Require proto-plus >= 1.22.3 ( fb6f9db )
Use retry_async instead of retry in async client ( fb6f9db )
1.5.3 (2023-09-19)
Documentation
Minor formatting ( #11632 ) ( dbee08f )
1.5.2 (2023-07-05)
Bug Fixes
Add async context manager return types ( #11446 ) ( 37682b7 )
1.5.1 (2023-03-23)
Documentation
Fix formatting of request arg in docstring ( #201 ) ( 3054d9f )
1.5.0 (2023-02-19)
Features
Enable “rest” transport in Python for services supporting numeric enums ( #195 ) ( 69b69a0 )
1.4.1 (2023-01-20)
Bug Fixes
Add context manager return types ( 16f4c42 )
Documentation
Add documentation for enums ( 16f4c42 )
1.4.0 (2023-01-10)
Features
Add support for python 3.11 ( #187 ) ( 2369d69 )
1.3.0 (2022-12-15)
Features
Add support for google.cloud.domains.__version__ ( 91b157d )
Add typing to proto.Message based class attributes ( 91b157d )
Bug Fixes
Add dict typing for client_options ( 91b157d )
deps: Require google-api-core >=1.34.0, >=2.11.0 ( dd3c0d7 )
Drop usage of pkg_resources ( dd3c0d7 )
Fix timeout default values ( dd3c0d7 )
Documentation
samples: Snippetgen handling of repeated enum field ( 91b157d )
samples: Snippetgen should call await on the operation coroutine before calling result ( dd3c0d7 )
1.2.3 (2022-10-07)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #177 ) ( 8ef1ff7 )
1.2.2 (2022-09-29)
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #175 ) ( b96d9f9 )
1.2.1 (2022-08-11)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #162 ) ( 38cb2a7 )
deps: require proto-plus >= 1.22.0 ( 38cb2a7 )
1.2.0 (2022-07-14)
Features
add audience parameter ( 1f81100 )
Bug Fixes
deps: require google-api-core>=1.32.0,>=2.8.0 ( #153 ) ( 1f81100 )
require python 3.7+ ( #155 ) ( c072c18 )
1.1.3 (2022-06-03)
Bug Fixes
deps: require protobuf <4.0.0dev ( #144 ) ( 672ff97 )
Documentation
fix changelog header to consistent size ( #143 ) ( 00a732d )
1.1.2 (2022-05-05)
Documentation
fix type in docstring for map fields ( b12a2cd )
1.1.1 (2022-03-05)
Bug Fixes
deps: require google-api-core>=1.31.5, >=2.3.2 ( #117 ) ( e42d933 )
1.1.0 (2022-02-11)
Features
add api key support ( #103 ) ( 2494a6f )
Bug Fixes
resolve DuplicateCredentialArgs error when using credentials_file ( b0b1620 )
1.0.0 (2021-12-03)
Features
bump release level to production/stable ( #82 ) ( 24606e7 )
0.4.1 (2021-11-01)
Bug Fixes
deps: drop packaging dependency ( 2375457 )
deps: require google-api-core >= 1.28.0 ( 2375457 )
Documentation
list oneofs in docstring ( 2375457 )
0.4.0 (2021-10-21)
Features
add support for python 3.10 ( #74 ) ( 320b3a0 )
add v1 API, plus v1b1 methods for domain transfers ( #77 ) ( 47434a1 )
set v1 as the default import ( #79 ) ( 4e2691e )
Bug Fixes
deps: require proto-plus 1.15.0 ( #81 ) ( 1c72855 )
0.3.0 (2021-10-08)
Features
add context manager support in client ( #71 ) ( 9b49d70 )
0.2.3 (2021-09-30)
Bug Fixes
improper types in pagers generation ( 17d4bed )
0.2.2 (2021-09-24)
Bug Fixes
add ‘dict’ annotation type to ‘request’ ( fa12c9b )
0.2.1 (2021-07-28)
Bug Fixes
deps: pin ‘google-{api,cloud}-core’, ‘google-auth’ to allow 2.x versions ( #42 ) ( 8c7a8cc )
enable self signed jwt for grpc ( #47 ) ( d4b8730 )
Documentation
add Samples section to CONTRIBUTING.rst ( #43 ) ( 2718d3b )
Miscellaneous Chores
release as 0.2.1 ( #48 ) ( 3567065 )
0.2.0 (2021-07-01)
Features
add always_use_jwt_access ( #36 ) ( a7d1670 )
support self-signed JWT flow for service accounts ( 4b24611 )
Bug Fixes
add async client to %name_%version/init.py ( 4b24611 )
deps: add packaging requirement ( #31 ) ( 942b7da )
disable always_use_jwt_access ( #39 ) ( 7830b84 )
exclude docs and tests from package ( #30 ) ( 20ebc47 )
Documentation
omit mention of Python 2.7 in ‘CONTRIBUTING.rst’ ( #1127 ) ( #33 ) ( 5b9e3d5 ), closes #1126
0.1.0 (2021-02-01)
Features
generate v1beta1 ( dfa1750 )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
