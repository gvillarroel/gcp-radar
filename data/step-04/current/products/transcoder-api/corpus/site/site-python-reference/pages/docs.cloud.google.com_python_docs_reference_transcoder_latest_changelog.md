---
title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/transcoder/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/transcoder/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/transcoder/latest/changelog
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
1.15.2
1.14.0
1.13.1
1.12.5
1.11.0
1.10.1
1.9.1
1.8.2
1.7.0
1.6.1
1.5.0
1.4.3
1.3.2
1.2.1
1.1.0
1.0.1
0.5.1
0.4.1
0.3.1
0.2.1
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
1.19.0 (2026-01-09)
Features
auto-enable mTLS when supported certificates are detected ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
check Python and dependency versions in generated GAPICs ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
1.18.0 (2025-10-20)
Features
Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Bug Fixes
Deprecate credentials_file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def )
1.17.0 (2025-08-29)
Features
[google-cloud-video-transcoder] add support for automatically generating subtitle for input videos ( #14286 ) ( 35069f7 )
1.16.0 (2025-07-23)
Features
added support for converting the input video to a supported high dynamic range (HDR) formats ( dad1378 )
added support for DROP_DUPLICATE frame rate conversion strategy to achieve the exact frame rate on the output video ( dad1378 )
added support for fill_content_gaps field to allow processing inputs with significant number of missing frames ( dad1378 )
added support for specifying HEVC codec tag ( dad1378 )
Documentation
improve comment formatting, add links, add references ( dad1378 )
1.15.2 (2025-06-11)
Documentation
Update import statement example in README ( 0131a33 )
1.15.1 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( 4757dae )
remove setup.cfg configuration for creating universal wheels ( #13659 ) ( 59bfd42 )
1.15.0 (2025-02-12)
Features
Add REST Interceptors which support reading metadata ( 5cdcc9d )
Add support for reading selective GAPIC generation methods from service YAML ( 5cdcc9d )
1.14.0 (2024-12-12)
Features
Add support for opt-in debug logging ( cf4d0e0 )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( cf4d0e0 )
1.13.1 (2024-11-11)
Bug Fixes
disable universe-domain validation ( #13246 ) ( bcad563 )
1.13.0 (2024-10-24)
Features
Add support for Python 3.13 ( #13210 ) ( 0b62ac6 )
1.12.5 (2024-07-30)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( 9cdac77 )
1.12.4 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12870 ) ( 4d16761 )
1.12.3 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12388 ) ( d2cd4ff )
1.12.2 (2024-02-22)
Bug Fixes
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12310 ) ( 41821da )
fix ValueError in test__validate_universe_domain ( 2451e88 )
1.12.1 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( e16032f )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( e16032f )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( e16032f )
1.12.0 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( #12244 ) ( 8d6b772 )
1.11.0 (2023-12-07)
Features
Add support for python 3.12 ( 31d043d )
Introduce compatibility with native namespace packages ( 31d043d )
Bug Fixes
Require proto-plus >= 1.22.3 ( 31d043d )
Use retry_async instead of retry in async client ( 31d043d )
1.10.1 (2023-09-18)
Documentation
Minor formatting ( 180aca1 )
Remove migrated samples ( #333 ) ( 27b99fb )
1.10.0 (2023-07-11)
Features
Added support for batch mode priority ( 1c4f0fe )
Added support for content encryption (DRM) ( 1c4f0fe )
Added support for disabling job processing optimizations ( 1c4f0fe )
Added support for segment template manifest generation with DASH ( 1c4f0fe )
1.9.1 (2023-07-04)
Bug Fixes
Add async context manager return types ( #314 ) ( a56cebc )
1.9.0 (2023-04-13)
Features
Add support for batch processing mode ( #300 ) ( b1bbc0d )
1.8.2 (2023-04-12)
Documentation
samples: Remove restriction of JPEGs only for overlay images ( #299 ) ( a73bdbb )
samples: Update captions code samples for display name and language ( 10adada )
1.8.1 (2023-03-23)
Documentation
Fix formatting of request arg in docstring ( #296 ) ( ced945e )
1.8.0 (2023-03-01)
Features
Specifying language code and display name for text and audio streams is now supported ( #288 ) ( 9a47aa7 )
1.7.0 (2023-02-28)
Features
Enable “rest” transport in Python for services supporting numeric enums ( #283 ) ( 3c36813 )
1.6.1 (2023-01-23)
Bug Fixes
Add context manager return types ( 37abda1 )
Documentation
Add documentation for enums ( 37abda1 )
1.6.0 (2023-01-10)
Features
Add support for python 3.11 ( #265 ) ( a1f708a )
1.5.0 (2022-12-15)
Features
Add PreprocessingConfig.deinterlace ( 227a759 )
Add support for google.cloud.video.transcoder.__version__ ( 227a759 )
Add typing to proto.Message based class attributes ( 227a759 )
Bug Fixes
Add dict typing for client_options ( 227a759 )
deps: Require google-api-core >=1.34.0, >=2.11.0 ( 0d53a7b )
Drop usage of pkg_resources ( 0d53a7b )
Fix timeout default values ( 0d53a7b )
Documentation
Minor documentation changes ( 227a759 )
samples: Snippetgen handling of repeated enum field ( 227a759 )
samples: Snippetgen should call await on the operation coroutine before calling result ( 0d53a7b )
1.4.3 (2022-10-07)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #246 ) ( 34fdac8 )
1.4.2 (2022-09-29)
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #241 ) ( e7dafea )
1.4.1 (2022-08-11)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #217 ) ( 150b732 )
deps: require proto-plus >= 1.22.0 ( 150b732 )
1.4.0 (2022-07-16)
Features
add audience parameter ( 63e75a3 )
add support for user labels for job and job template ( #203 ) ( a0d7927 )
Bug Fixes
deps: require google-api-core>=1.32.0,>=2.8.0 ( #205 ) ( 63e75a3 )
require python 3.7+ ( #208 ) ( 8b4aa48 )
1.3.2 (2022-06-03)
Bug Fixes
deps: require protobuf <4.0.0dev ( #195 ) ( 8d9c679 )
Documentation
fix changelog header to consistent size ( #196 ) ( 04ee631 )
1.3.1 (2022-03-05)
Bug Fixes
deps: require google-api-core>=1.31.5, >=2.3.2 ( #153 ) ( 03ba693 )
1.3.0 (2022-02-24)
Features
add api key support ( #127 ) ( ac6a403 ), closes #140
Bug Fixes
deps: require proto-plus >= 1.20.3 ( ac6a403 )
Remove deprecated v1beta1 API that is no longer available ( #138 ) ( e8a85da )
rename mapping attribute of AudioStream to mapping_ ( c14695b )
resolve DuplicateCredentialArgs error when using credentials_file ( 6774bd3 )
resolve issue where mapping attribute of AudioStream could not be set ( c14695b )
Documentation
add generated snippets ( e8a85da )
samples: update samples to use mapping_ attribute of AudioStream ( #142 ) ( 7fbc619 )
samples: add samples and tests for adding captions to a job ( #131 ) ( e30431f )
1.2.1 (2021-11-04)
Bug Fixes
deps: drop packaging dependency ( 9850614 )
deps: require google-api-core >= 1.28.0 ( 9850614 )
Documentation
list oneofs in docstring ( 9850614 )
1.2.0 (2021-10-14)
Features
add support for python 3.10 ( #108 ) ( e9c1c22 )
1.1.0 (2021-10-08)
Features
add context manager support in client ( #104 ) ( 2c5f07d )
Bug Fixes
remove Encryption settings that were published erroneously ( #102 ) ( 824009a )
1.0.1 (2021-09-30)
Bug Fixes
improper types in pagers generation ( 34391dc )
1.0.0 (2021-09-29)
Features
bump release level to production/stable ( #79 ) ( 45ba870 )
0.5.1 (2021-09-24)
Bug Fixes
add ‘dict’ annotation type to ‘request’ ( 81b1273 )
0.5.0 (2021-08-07)
Features
Add ttl_after_completion_days field to Job ( d862900 )
Add video cropping feature ( #81 ) ( d862900 )
Add video padding feature ( d862900 )
Documentation
Indicate v1beta1 deprecation ( d862900 )
Update proto documentation ( d862900 )
0.4.1 (2021-07-27)
Bug Fixes
deps: pin ‘google-{api,cloud}-core’, ‘google-auth’ to allow 2.x versions ( #70 ) ( 37d076a )
enable self signed jwt for grpc ( #75 ) ( af5ecd9 )
Documentation
add Samples section to CONTRIBUTING.rst ( #71 ) ( 0b67055 )
Miscellaneous Chores
release as 0.4.1 ( #76 ) ( 4173cf3 )
0.4.0 (2021-07-09)
Features
add always_use_jwt_access ( #62 ) ( d43c40e )
Add Transcoder V1 ( #67 ) ( 721d28e )
Bug Fixes
disable always_use_jwt_access ( #66 ) ( 98d8b86 )
Documentation
omit mention of Python 2.7 in ‘CONTRIBUTING.rst’ ( #1127 ) ( #58 ) ( 1659ce8 ), closes #1126
0.3.1 (2021-05-28)
Bug Fixes
deps: add packaging requirement ( #52 ) ( 7ffa13c )
0.3.0 (2021-03-31)
Features
add from_service_account_info ( #32 ) ( 4076914 )
0.2.1 (2021-02-12)
Bug Fixes
remove gRPC send/recv limits ( #18 ) ( 03332a4 )
0.2.0 (2020-11-14)
Features
add create_time, start_time, and end_time to jobs ( #10 ) ( a5a210e )
0.1.0 (2020-08-24)
Features
generate v1beta1 ( 06cfb30 )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
