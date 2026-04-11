---
title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/recommender/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/recommender/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/recommender/latest/changelog
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
2.21.0 (latest)
2.20.0
2.19.0
2.18.2
2.17.0
2.16.1
2.15.5
2.14.0
2.13.0
2.12.0
2.11.2
2.10.1
2.9.0
2.8.3
2.7.4
2.6.0
2.5.1
2.4.0
2.3.4
2.2.0
2.1.0
2.0.0
1.1.3
1.0.0
0.3.0
0.2.0
0.1.0
PyPI History
2.21.0 (2026-03-26)
Features
Allow Protobuf 7.x ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
update image to us-central1-docker.pkg.dev/cloud-sdk-librarian-prod/images-prod/python-librarian-generator@sha256:f5426423676c75008c2135037e7b98f78cbb99f78b3c46fe043b6897be92d836 ( 3654fe76d755dd8db62ece81d5770ec58b3624df )
Bug Fixes
Require Python 3.9 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Require google-api-core >= 2.11.0 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Improve type checking ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
2.20.0 (2026-01-09)
Features
auto-enable mTLS when supported certificates are detected ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
check Python and dependency versions in generated GAPICs ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
2.19.0 (2025-10-20)
Features
Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Bug Fixes
Deprecate credentials_file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def )
2.18.2 (2025-06-11)
Documentation
Update import statement example in README ( dfc2cd6 )
2.18.1 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( 7295cbb )
remove setup.cfg configuration for creating universal wheels ( #13659 ) ( 59bfd42 )
2.18.0 (2025-02-18)
Features
Add REST Interceptors which support reading metadata ( c8e0760 )
Add support for reading selective GAPIC generation methods from service YAML ( c8e0760 )
2.17.0 (2024-12-12)
Features
Add support for opt-in debug logging ( 8e6b0cc )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( 8e6b0cc )
2.16.1 (2024-11-11)
Bug Fixes
disable universe-domain validation ( #13245 ) ( 875f712 )
2.16.0 (2024-10-24)
Features
Add support for Python 3.13 ( #13209 ) ( 5f2e30d )
2.15.5 (2024-07-30)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( 42c4d04 )
2.15.4 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12869 ) ( e42edbc )
2.15.3 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12386 ) ( edcad16 )
2.15.2 (2024-02-22)
Bug Fixes
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12308 ) ( 74dabeb )
fix ValueError in test__validate_universe_domain ( 89c1b05 )
2.15.1 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( e75fcf6 )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( e75fcf6 )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( e75fcf6 )
2.15.0 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( 4368029 )
2.14.0 (2023-12-12)
Features
Support cost_in_local_currency field in the cost projection ( 8832a03 )
Documentation
Add comment for targetResources ( 8832a03 )
Fix typo for the comment of reliability_projection ( 8832a03 )
2.13.0 (2023-12-07)
Features
Add support for python 3.12 ( e9655df )
Introduce compatibility with native namespace packages ( e9655df )
Bug Fixes
Require proto-plus >= 1.22.3 ( e9655df )
Use retry_async instead of retry in async client ( e9655df )
2.12.1 (2023-09-19)
Documentation
Minor formatting ( 025219f )
2.12.0 (2023-08-31)
Features
Add MarkRecommendationDismissed method ( 6a1b00f )
Add Sustainability and Reliability impact ( 6a1b00f )
Billing account scoped Recommender/InsightType config ( 6a1b00f )
ListRecommenders and ListInsightTypes RPC methods ( #11623 ) ( 200e07d )
2.11.2 (2023-07-05)
Bug Fixes
Add async context manager return types ( #11448 ) ( 4d2c35a )
2.11.1 (2023-03-23)
Documentation
Fix formatting of request arg in docstring ( #268 ) ( 17b64b8 )
2.11.0 (2023-02-28)
Features
Enable “rest” transport in Python for services supporting numeric enums ( d5153be )
2.10.1 (2023-01-20)
Bug Fixes
Add context manager return types ( 0b364be )
Documentation
Add documentation for enums ( 0b364be )
2.10.0 (2023-01-10)
Features
Add support for python 3.11 ( #255 ) ( bbf6353 )
2.9.0 (2022-12-14)
Features
Add support for google.cloud.recommender.__version__ ( e0fa41b )
Add typing to proto.Message based class attributes ( e0fa41b )
Bug Fixes
Add dict typing for client_options ( e0fa41b )
deps: Require google-api-core >=1.34.0, >=2.11.0 ( 5856985 )
Drop usage of pkg_resources ( 5856985 )
Fix timeout default values ( 5856985 )
Documentation
samples: Snippetgen handling of repeated enum field ( e0fa41b )
samples: Snippetgen should call await on the operation coroutine before calling result ( 5856985 )
2.8.3 (2022-10-07)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #244 ) ( c865d0e )
2.8.2 (2022-09-29)
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #242 ) ( b908be3 )
2.8.1 (2022-08-11)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #225 ) ( 97ea95b )
deps: require proto-plus >= 1.22.0 ( 97ea95b )
2.8.0 (2022-07-16)
Features
add audience parameter ( 5d2e042 )
Implement configurable recommenders and update .bazel files ( 5d2e042 )
Bug Fixes
deps: require google-api-core>=1.32.0,>=2.8.0 ( #217 ) ( 5d2e042 )
require python 3.7+ ( #219 ) ( e3eef01 )
2.7.4 (2022-06-06)
Bug Fixes
deps: require protobuf <4.0.0dev ( #207 ) ( 7e8c1a1 )
Documentation
fix changelog header to consistent size ( #208 ) ( 355c612 )
2.7.3 (2022-05-05)
Documentation
fix type in docstring for map fields ( 9749c44 )
2.7.2 (2022-03-05)
Bug Fixes
deps: require google-api-core>=1.31.5, >=2.3.2 ( #180 ) ( 9e4b8fb )
deps: require proto-plus>=1.15.0 ( 9e4b8fb )
2.7.1 (2022-02-11)
Bug Fixes
resolve DuplicateCredentialArgs error when using credentials_file ( 7d26e56 )
2.7.0 (2022-01-26)
Features
v1: add recommendation priority / insight severity ( #165 ) ( 7c578fe )
v1: add recommendation security projection ( 7c578fe )
v1: add recommendation xor_group_id ( 7c578fe )
2.6.0 (2022-01-25)
Features
add api key support ( #162 ) ( a857b33 )
add configurable recommenders ( 9157aed )
add recommendation priority / insight severity ( #164 ) ( 9157aed )
add recommendation security projection ( 9157aed )
add recommendation xor_group_id ( 9157aed )
2.5.1 (2021-11-02)
Bug Fixes
deps: drop packaging dependency ( 55a42ff )
deps: require google-api-core >= 1.28.0 ( 55a42ff )
Documentation
fix docstring formatting ( #147 ) ( bb0fc1a )
list oneofs in docstring ( 55a42ff )
2.5.0 (2021-10-14)
Features
add support for python 3.10 ( #140 ) ( 0156978 )
2.4.0 (2021-10-08)
Features
add context manager support in client ( #136 ) ( 815739b )
2.3.4 (2021-09-30)
Bug Fixes
improper types in pagers generation ( a9bba5f )
2.3.3 (2021-09-24)
Bug Fixes
add ‘dict’ annotation type to ‘request’ ( 99b111d )
2.3.2 (2021-07-28)
Bug Fixes
enable self signed jwt for grpc ( #114 ) ( 63d3fc9 )
Documentation
add Samples section to CONTRIBUTING.rst ( #110 ) ( 23a901b )
Miscellaneous Chores
release as 2.3.2 ( #115 ) ( 6e177d4 )
2.3.1 (2021-07-20)
Bug Fixes
deps: pin ‘google-{api,cloud}-core’, ‘google-auth’ to allow 2.x versions ( #109 ) ( c0979ca )
2.3.0 (2021-07-01)
Features
add always_use_jwt_access ( #102 ) ( facf208 )
Bug Fixes
disable always_use_jwt_access ( #106 ) ( b823493 )
Documentation
omit mention of Python 2.7 in ‘CONTRIBUTING.rst’ ( #1127 ) ( #97 ) ( f00fab2 ), closes #1126
2.2.0 (2021-05-28)
Features
add from_service_account_info ( 94a006e )
Bug Fixes
deps: add packaging requirement ( #91 ) ( bf202ab )
fix retry deadlines ( #74 ) ( 94a006e )
2.1.0 (2021-01-29)
Features
add support for billingAccounts as another parent resource ( #59 ) ( 61d2c7b )
Bug Fixes
remove client side gRPC receive limit ( #56 ) ( 10043cc )
Documentation
python: document adding Python 3.9 support, dropping 3.5 support ( #63 ) ( 5bb9b2c ), closes #787
2.0.0 (2020-11-19)
⚠ BREAKING CHANGES
use microgenerator (#54)
Features
use microgenerator ( #54 ) ( 63b8a43 ). See Migration Guide .
1.1.1 (2020-10-29)
Bug Fixes
tweak retry params for ‘ListInsights’/’GetInsight’/’MarkInsightAccepted’ API calls (via synth) ( #49 ) ( 0d2baaf )
1.1.0 (2020-07-13)
Features
add methods for interacting with insights ( #35 ) ( 940a3fb )
Bug Fixes
update retry config ( #31 ) ( 5c497e2 )
1.0.0 (2020-05-21)
Features
release as production/stable ( #17 ) ( b6f0a19 )
0.3.0 (2020-03-14)
Features
add insight support; undeprecate resource name helper methods (via synth) ( #7 ) ( 876c383 )
0.2.0
01-24-2020 14:03 PST
Implementation Changes
Deprecate resource name helper methods (via synth). ( #9863 )
New Features
Add v1, set release level to beta. ( #10170 )
Documentation
Add Python 2 sunset banner to documentation. ( #9036 )
Change requests intersphinx url (via synth). ( #9408 )
Fix library reference doc link. ( #9338 )
Internal / Testing Changes
Correct config path in synth file for recommender. ( #10076 )
0.1.0
09-27-2019 12:20 PDT
New Features
initial release of v1beta1 ( #9257 )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
