---
title: "Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/changelog
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
1.12.0 (latest)
1.11.0
1.10.2
1.9.0
1.8.1
1.7.2
1.6.3
1.5.0
1.4.3
1.3.1
1.2.0
1.1.1
1.0.1
0.2.1
0.1.3
Changelog
PyPI History
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
Update import statement example in README ( 8697120 )
1.10.1 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( 1e43e75 )
remove setup.cfg configuration for creating universal wheels ( #13659 ) ( 59bfd42 )
1.10.0 (2025-02-12)
Features
Add REST Interceptors which support reading metadata ( e22e2bd )
Add support for reading selective GAPIC generation methods from service YAML ( e22e2bd )
1.9.0 (2024-12-12)
Features
Add support for opt-in debug logging ( e31cbb0 )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( e31cbb0 )
1.8.1 (2024-10-31)
Bug Fixes
disable universe-domain validation ( 53c951e )
1.8.0 (2024-10-24)
Features
Add support for Python 3.13 ( 6252476 )
1.7.2 (2024-07-30)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( a6f7356 )
1.7.1 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12865 ) ( 7f9dedb )
1.7.0 (2024-03-22)
Features
[google-cloud-certificate-manager] Added Trust Configs and DnsAuthorization.Type to Certificate Manager ( #12470 ) ( 915faee )
1.6.3 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12383 ) ( 305f43f )
1.6.2 (2024-02-22)
Bug Fixes
[Many APIs] fix ValueError in test__validate_universe_domain ( #12281 ) ( 62cf934 )
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12305 ) ( 2aa7f17 )
1.6.1 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( f3db074 )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( f3db074 )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( f3db074 )
1.6.0 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( #12238 ) ( 8701267 )
1.5.0 (2023-12-07)
Features
Add support for python 3.12 ( 0d1a592 )
Introduce compatibility with native namespace packages ( 0d1a592 )
Bug Fixes
Require proto-plus >= 1.22.3 ( 0d1a592 )
Use retry_async instead of retry in async client ( 0d1a592 )
1.4.4 (2023-09-19)
Documentation
Minor formatting ( 9487380 )
1.4.3 (2023-07-05)
Bug Fixes
Add async context manager return types ( #11445 ) ( 98bddda )
1.4.2 (2023-03-23)
Documentation
Fix formatting of request arg in docstring ( #116 ) ( 7507e2a )
1.4.1 (2023-03-01)
Documentation
Corrected information about the limit of certificates that can be attached to a Certificate Map Entry ( #113 ) ( 415b36a )
1.4.0 (2023-02-27)
Features
Enable “rest” transport in Python for services supporting numeric enums ( #109 ) ( d63d706 )
1.3.1 (2023-01-20)
Bug Fixes
Add context manager return types ( 81cfbf9 )
Documentation
Add documentation for enums ( 81cfbf9 )
1.3.0 (2023-01-10)
Features
Add support for python 3.11 ( #101 ) ( 4e38d00 )
1.2.0 (2022-12-15)
Features
Add support for google.cloud.certificate_manager.__version__ ( 7ba10a7 )
Add typing to proto.Message based class attributes ( 7ba10a7 )
Bug Fixes
Add dict typing for client_options ( 7ba10a7 )
deps: Require google-api-core >=1.34.0, >=2.11.0 ( 2cb2cff )
Drop usage of pkg_resources ( 2cb2cff )
Fix timeout default values ( 2cb2cff )
Documentation
samples: Snippetgen handling of repeated enum field ( 7ba10a7 )
samples: Snippetgen should call await on the operation coroutine before calling result ( 2cb2cff )
1.1.1 (2022-10-07)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #90 ) ( b934abd )
1.1.0 (2022-10-03)
Features
Added support for Private Trust to Certificate Manager API ( #88 ) ( 5cf35e2 )
1.0.1 (2022-09-29)
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #86 ) ( fa93aa2 )
1.0.0 (2022-08-15)
Features
bump release level to production/stable ( #68 ) ( dfdfff8 )
0.2.1 (2022-08-15)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #72 ) ( 414f5c5 )
deps: require proto-plus >= 1.22.0 ( 414f5c5 )
0.2.0 (2022-07-16)
Features
add audience parameter ( 72eba35 )
Bug Fixes
deps: require google-api-core>=1.32.0,>=2.8.0 ( 72eba35 )
Removed resource definition of Compute API resources and incorrect resource references that used them ( #62 ) ( 72eba35 )
require python 3.7+ ( #64 ) ( 62b2303 )
0.1.3 (2022-06-03)
Bug Fixes
deps: require protobuf <4.0.0dev ( #55 ) ( 14a09d2 )
0.1.2 (2022-03-30)
Bug Fixes
Updated resource patterns to comply with https://google.aip.dev/123#annotating-resource-types ( #17 ) ( 71f74bf )
0.1.1 (2022-03-05)
Bug Fixes
deps: require google-api-core>=1.31.5, >=2.3.2 ( 4565ece )
0.1.0 (2022-02-16)
Features
generate v1 ( 695fff9 )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
