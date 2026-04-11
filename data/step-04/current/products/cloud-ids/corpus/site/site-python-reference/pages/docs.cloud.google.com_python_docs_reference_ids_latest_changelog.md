---
title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/ids/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/ids/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/ids/latest/changelog
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
1.2.4
1.1.2
1.0.0
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
Update import statement example in README ( 821bdb1 )
1.10.1 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( e06ee32 )
remove setup.cfg configuration for creating universal wheels ( #13659 ) ( 59bfd42 )
1.10.0 (2025-02-12)
Features
Add REST Interceptors which support reading metadata ( 908d742 )
Add support for reading selective GAPIC generation methods from service YAML ( 908d742 )
1.9.0 (2024-12-12)
Features
Add support for opt-in debug logging ( feb5c03 )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( feb5c03 )
1.8.1 (2024-11-11)
Bug Fixes
disable universe-domain validation ( #13243 ) ( d794dec )
1.8.0 (2024-10-24)
Features
Add support for Python 3.13 ( #13207 ) ( ceb9be8 )
1.7.5 (2024-07-30)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( 189922a )
1.7.4 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12867 ) ( 3362176 )
1.7.3 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12385 ) ( d50f4d0 )
1.7.2 (2024-02-22)
Bug Fixes
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12307 ) ( be87bc4 )
fix ValueError in test__validate_universe_domain ( dd749df )
1.7.1 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( 27dceb9 )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( 27dceb9 )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( 27dceb9 )
1.7.0 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( #12241 ) ( aae72f5 )
1.6.0 (2023-12-07)
Features
Add support for python 3.12 ( 5cd98aa )
Introduce compatibility with native namespace packages ( 5cd98aa )
Bug Fixes
Require proto-plus >= 1.22.3 ( 5cd98aa )
Use retry_async instead of retry in async client ( 5cd98aa )
1.5.3 (2023-09-19)
Documentation
Minor formatting ( #11632 ) ( dbee08f )
1.5.2 (2023-07-05)
Bug Fixes
Add async context manager return types ( #11446 ) ( 37682b7 )
1.5.1 (2023-04-21)
Documentation
Update api description for google-cloud-ids ( 23aeafc )
1.5.0 (2023-02-17)
Features
Enable “rest” transport in Python for services supporting numeric enums ( #105 ) ( f51b4b3 )
Bug Fixes
Add service_yaml_parameters to py_gapic_library BUILD.bazel targets ( #107 ) ( d34c23c )
1.4.1 (2023-01-20)
Bug Fixes
Add context manager return types ( b6d8eab )
Documentation
Add documentation for enums ( b6d8eab )
1.4.0 (2023-01-10)
Features
Add support for python 3.11 ( #97 ) ( 4d3ebb9 )
1.3.0 (2022-12-14)
Features
Add support for google.cloud.ids.__version__ ( fd8cfa4 )
Add typing to proto.Message based class attributes ( fd8cfa4 )
Bug Fixes
Add dict typing for client_options ( fd8cfa4 )
deps: Require google-api-core >=1.34.0, >=2.11.0 ( 3e1b599 )
Drop usage of pkg_resources ( 3e1b599 )
Fix timeout default values ( 3e1b599 )
Documentation
samples: Snippetgen handling of repeated enum field ( fd8cfa4 )
samples: Snippetgen should call await on the operation coroutine before calling result ( 3e1b599 )
1.2.4 (2022-10-07)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #87 ) ( c11db6b )
1.2.3 (2022-09-29)
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #85 ) ( 4fdbbe8 )
1.2.2 (2022-08-11)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #70 ) ( 3c4ea60 )
deps: require proto-plus >= 1.22.0 ( 3c4ea60 )
1.2.1 (2022-07-13)
Bug Fixes
deps: require google-api-core>=1.32.0,>=2.8.0 ( #63 ) ( f664641 )
1.2.0 (2022-07-12)
Features
add audience parameter ( 6f977e1 )
Bug Fixes
deps: require google-api-core >= 2.8.0 ( #59 ) ( 6f977e1 )
require python 3.7+ ( #61 ) ( 62079cc )
1.1.2 (2022-06-03)
Bug Fixes
deps: require protobuf <4.0.0dev ( #52 ) ( cde8a52 )
Documentation
fix changelog header to consistent size ( #51 ) ( 24267af )
1.1.1 (2022-03-05)
Bug Fixes
deps: require google-api-core>=1.31.5, >=2.3.2 ( #29 ) ( b006c4d )
1.1.0 (2022-02-26)
Features
add api key support ( #15 ) ( 8e562db )
Bug Fixes
resolve DuplicateCredentialArgs error when using credentials_file ( 31be484 )
1.0.0 (2022-01-24)
Features
bump release level to production/stable ( #5 ) ( ad90dd9 )
0.1.0 (2021-11-12)
Features
generate v1 ( 12a0363 )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
