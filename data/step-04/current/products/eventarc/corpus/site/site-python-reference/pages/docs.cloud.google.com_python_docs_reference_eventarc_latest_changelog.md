---
title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/eventarc/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/eventarc/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/eventarc/latest/changelog
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
1.20.0 (latest)
1.19.0
1.18.0
1.17.0
1.16.0
1.15.3
1.14.0
1.13.2
1.12.0
1.11.5
1.10.0
1.9.2
1.8.1
1.7.0
1.6.3
1.5.1
1.4.2
1.3.0
1.2.1
1.1.0
1.0.2
0.2.4
0.1.0
PyPI History
1.20.0 (2026-03-26)
Features
Allow Protobuf 7.x ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
update image to us-central1-docker.pkg.dev/cloud-sdk-librarian-prod/images-prod/python-librarian-generator@sha256:f5426423676c75008c2135037e7b98f78cbb99f78b3c46fe043b6897be92d836 ( 3654fe76d755dd8db62ece81d5770ec58b3624df )
Bug Fixes
Require Python 3.9 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Require google-api-core >= 2.11.0 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Improve type checking ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
1.19.0 (2026-01-08)
Features
auto-enable mTLS when supported certificates are detected ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
check Python and dependency versions in generated GAPICs ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
1.18.0 (2025-12-04)
Features
add wide-scope Eventarc GoogleApiSource flags ( d4e6a4ab7b428e821a59b053c689343b5f5511f9 )
add Eventarc Trigger RetryPolicy ( d4e6a4ab7b428e821a59b053c689343b5f5511f9 )
1.17.0 (2025-10-16)
Features
Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Bug Fixes
Deprecate credentials_file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def )
1.16.0 (2025-09-24)
Documentation
[google-cloud-eventarc] correct some comments ( 26730096e491346f02af2a82138224a110485e74 )
Features
[google-cloud-eventarc] add new fields to Eventarc resources ( 26730096e491346f02af2a82138224a110485e74 )
Bug Fixes
[google-cloud-eventarc] upgrade gRPC service registration func An update to Go gRPC Protobuf generation will change service
registration function signatures to use an interface instead of a
concrete type in generated .pb.go service files. This change should
affect very few client library users. See release notes advisories in
https://github.com/googleapis/google-cloud-go/pull/11025 . ( 26730096e491346f02af2a82138224a110485e74 )
1.15.3 (2025-06-11)
Documentation
Update import statement example in README ( 821bdb1 )
1.15.2 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( e06ee32 )
remove setup.cfg configuration for creating universal wheels ( #13659 ) ( 59bfd42 )
1.15.1 (2025-02-18)
Bug Fixes
deps: Require grpc-google-iam-v1>=0.14.0 ( 16e14c8 )
1.15.0 (2025-02-12)
Features
Add REST Interceptors which support reading metadata ( 908d742 )
Add support for reading selective GAPIC generation methods from service YAML ( 908d742 )
1.14.0 (2024-12-12)
Features
Add support for opt-in debug logging ( 819e8fb )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( 819e8fb )
1.13.2 (2024-11-14)
Documentation
Fixed typo in comments in Eventarc protos ( #13271 ) ( 0dc1fc9 )
1.13.1 (2024-11-11)
Bug Fixes
disable universe-domain validation ( #13242 ) ( b479ff8 )
1.13.0 (2024-10-31)
Features
Publish Eventarc Advanced protos ( e90120b )
Documentation
Clarified multiple comments in Eventarc Standard protos ( e90120b )
1.12.0 (2024-10-24)
Features
Add support for Python 3.13 ( #13206 ) ( eb980d5 )
1.11.5 (2024-07-30)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( 189922a )
1.11.4 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12866 ) ( 40e1810 )
1.11.3 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12384 ) ( c69966f )
1.11.2 (2024-02-22)
Bug Fixes
[Many APIs] fix ValueError in test__validate_universe_domain ( #12283 ) ( f20b41a )
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12306 ) ( 1e787f2 )
1.11.1 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( c721248 )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( c721248 )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( c721248 )
1.11.0 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( #12240 ) ( d51f832 )
1.10.0 (2023-12-07)
Features
Add support for python 3.12 ( fb6f9db )
Introduce compatibility with native namespace packages ( fb6f9db )
Bug Fixes
Require proto-plus >= 1.22.3 ( fb6f9db )
Use retry_async instead of retry in async client ( fb6f9db )
1.9.3 (2023-09-19)
Documentation
Minor formatting ( #11632 ) ( dbee08f )
1.9.2 (2023-07-05)
Bug Fixes
Add async context manager return types ( #11446 ) ( 37682b7 )
1.9.1 (2023-03-23)
Documentation
Fix formatting of request arg in docstring ( #200 ) ( b0be428 )
1.9.0 (2023-02-09)
Features
Enable “rest” transport in Python for services supporting numeric enums ( #194 ) ( 1b7840c )
1.8.1 (2023-01-20)
Bug Fixes
Add context manager return types ( 2c7b15b )
Documentation
Add documentation for enums ( 2c7b15b )
1.8.0 (2023-01-10)
Features
Add support for python 3.11 ( #186 ) ( 2e3ef53 )
1.7.0 (2022-12-15)
Features
Add CMEK support to Eventarc client library ( 6ba2726 )
Add support for google.cloud.eventarc.__version__ ( 6ba2726 )
Add typing to proto.Message based class attributes ( 6ba2726 )
Update Eventarc Channel to support custom events ( 6ba2726 )
Bug Fixes
Add dict typing for client_options ( 6ba2726 )
deps: Require google-api-core >=1.34.0, >=2.11.0 ( cc353d1 )
Drop usage of pkg_resources ( cc353d1 )
Fix timeout default values ( cc353d1 )
Documentation
samples: Snippetgen handling of repeated enum field ( 6ba2726 )
samples: Snippetgen should call await on the operation coroutine before calling result ( cc353d1 )
1.6.3 (2022-10-07)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #176 ) ( 1a1a64d )
1.6.2 (2022-09-29)
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #174 ) ( 0dcf87b )
1.6.1 (2022-08-11)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #159 ) ( 44962a0 )
deps: require proto-plus >= 1.22.0 ( 44962a0 )
1.6.0 (2022-07-14)
Features
add audience parameter ( 535338c )
Bug Fixes
deps: require google-api-core>=1.32.0,>=2.8.0 ( #150 ) ( 535338c )
require python 3.7+ ( #152 ) ( 0db4414 )
1.5.1 (2022-06-03)
Bug Fixes
deps: require protobuf <4.0.0dev ( #142 ) ( 75a17a9 )
Documentation
fix changelog header to consistent size ( #141 ) ( 8a7b8b1 )
1.5.0 (2022-05-19)
Features
Add Provider resources ( #109 ) ( 11be2a5 )
1.4.2 (2022-04-14)
Bug Fixes
fix type in docstring for map fields ( #97 ) ( 2865664 )
1.4.1 (2022-03-05)
Bug Fixes
deps: require google-api-core>=1.31.5, >=2.3.2 ( #84 ) ( 988eff8 )
1.4.0 (2022-02-04)
Features
Add Channel and ChannelConnection resources ( #72 ) ( 4d89018 )
1.3.0 (2022-02-03)
Features
add api key support ( #68 ) ( 96e07bb )
Bug Fixes
resolve DuplicateCredentialArgs error when using credentials_file ( 6bffd75 )
1.2.1 (2021-11-01)
Bug Fixes
deps: drop packaging dependency ( f509558 )
deps: require google-api-core >= 1.28.0 ( f509558 )
Documentation
list oneofs in docstring ( f509558 )
1.2.0 (2021-10-14)
Features
add support for python 3.10 ( #47 ) ( 987360c )
1.1.0 (2021-10-08)
Features
add context manager support in client ( #44 ) ( d732a44 )
1.0.2 (2021-09-30)
Bug Fixes
improper types in pagers generation ( 406ac83 )
1.0.1 (2021-09-24)
Bug Fixes
add ‘dict’ annotation type to ‘request’ ( d940eea )
1.0.0 (2021-08-03)
Features
bump release level to production/stable ( #25 ) ( bf70c36 )
0.2.2 (2021-07-30)
Features
add Samples section to CONTRIBUTING.rst ( #17 ) ( 7e2cd4a )
Bug Fixes
enable self signed jwt for grpc ( #21 ) ( c9af910 )
Miscellaneous Chores
release as 0.2.2 ( #22 ) ( 0b26e99 )
0.2.1 (2021-07-21)
Bug Fixes
deps: pin ‘google-{api,cloud}-core’, ‘google-auth’ to allow 2.x versions ( #16 ) ( 74277de )
0.2.0 (2021-07-14)
Features
add always_use_jwt_access ( #9 ) ( 2ce20e8 )
Bug Fixes
disable always_use_jwt_access ( #13 ) ( d4db355 )
Documentation
omit mention of Python 2.7 in ‘CONTRIBUTING.rst’ ( #1127 ) ( #4 ) ( 18a491d )
0.1.0 (2021-06-15)
Features
generate v1 ( bb2fbd0 )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
