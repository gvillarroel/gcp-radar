---
title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/redis/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/redis/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/redis/latest/changelog
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
2.18.0
2.17.0
2.16.1
2.15.5
2.14.0
2.13.1
2.12.1
2.11.1
2.10.0
2.9.3
2.8.1
2.7.1
2.6.0
2.5.1
2.4.1
2.3.0
2.2.4
2.1.1
2.0.0
1.0.2
0.4.0
0.3.0
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
2.18.1 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( 784a3ca )
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
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12387 ) ( 12ce658 )
2.15.2 (2024-02-22)
Bug Fixes
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12309 ) ( c23398a )
fix ValueError in test__validate_universe_domain ( 89c1b05 )
2.15.1 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( 9e8d039 )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( 9e8d039 )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( 9e8d039 )
2.15.0 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( 4368029 )
2.14.0 (2023-12-07)
Features
Add support for python 3.12 ( e9655df )
Introduce compatibility with native namespace packages ( e9655df )
Bug Fixes
Require proto-plus >= 1.22.3 ( e9655df )
Use retry_async instead of retry in async client ( e9655df )
2.13.2 (2023-09-19)
Documentation
Minor formatting ( 025219f )
2.13.1 (2023-07-05)
Bug Fixes
Add async context manager return types ( #11448 ) ( 4d2c35a )
2.13.0 (2023-05-25)
Features
Add CMEK key field ( 1c47bee )
Add persistence support ( 1c47bee )
Add self service update maintenance version support ( 1c47bee )
Add suspension_reasons field ( 1c47bee )
2.12.1 (2023-03-23)
Documentation
Fix formatting of request arg in docstring ( #255 ) ( 7586aa5 )
2.12.0 (2023-02-28)
Features
Enable “rest” transport in Python for services supporting numeric enums ( #251 ) ( 6d3c767 )
2.11.1 (2023-01-20)
Bug Fixes
Add context manager return types ( 650c291 )
Documentation
Add documentation for enums ( 650c291 )
2.11.0 (2023-01-10)
Features
Add support for python 3.11 ( #242 ) ( 052d0f3 )
2.10.0 (2022-12-08)
Features
add support for google.cloud.redis.__version__ ( 6572d29 )
Add typing to proto.Message based class attributes ( 6572d29 )
Bug Fixes
Add dict typing for client_options ( 6572d29 )
deps: Require google-api-core >=1.34.0, >=2.11.0 ( f9d3238 )
Drop usage of pkg_resources ( f9d3238 )
Fix timeout default values ( f9d3238 )
Documentation
samples: Snippetgen handling of repeated enum field ( 6572d29 )
samples: Snippetgen should call await on the operation coroutine before calling result ( f9d3238 )
2.9.3 (2022-10-07)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #232 ) ( ba28603 )
2.9.2 (2022-10-03)
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #230 ) ( e1b59a4 )
2.9.1 (2022-08-11)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #216 ) ( 1fccb35 )
deps: require proto-plus >= 1.22.0 ( 1fccb35 )
2.9.0 (2022-07-13)
Features
add audience parameter ( 0bc27ec )
Bug Fixes
deps: require google-api-core>=1.32.0,>=2.8.0 ( #210 ) ( 74a944f )
require python 3.7+ ( #208 ) ( 668735f )
2.8.1 (2022-06-06)
Bug Fixes
deps: require protobuf <4.0.0dev ( #195 ) ( b764fa8 )
Documentation
fix changelog header to consistent size ( #196 ) ( 6939feb )
2.8.0 (2022-03-15)
Features
add secondary_ip_range field ( d08e3b5 )
add support for AUTH functionality ( d08e3b5 )
add support for TLS functionality ( d08e3b5 )
add Support Maintenance Window ( #172 ) ( d08e3b5 )
2.7.1 (2022-03-05)
Bug Fixes
deps: require google-api-core>=1.31.5, >=2.3.2 ( #168 ) ( 2fd9d9e )
deps: require proto-plus>=1.15.0 ( 2fd9d9e )
2.7.0 (2022-02-24)
Features
add secondary_ip_range field ( #157 ) ( dd310d5 )
2.6.0 (2022-02-03)
Features
add api key support ( #151 ) ( 044d0b5 )
add automated RDB, also known as persistence ( #153 ) ( 30d3fc6 )
Bug Fixes
resolve DuplicateCredentialArgs error when using credentials_file ( 73a5057 )
2.5.1 (2022-01-14)
Bug Fixes
Add missing fields for TLS and Maintenance Window features ( #147 ) ( f04a02e )
2.5.0 (2021-11-09)
Features
v1beta1: Support Multiple Read Replicas when creating Instance ( #136 ) ( d7146eb )
v1: Support Multiple Read Replicas when creating Instance ( #135 ) ( 27dfdca )
2.4.1 (2021-11-01)
Bug Fixes
deps: drop packaging dependency ( 2069ea6 )
deps: require google-api-core >= 1.28.0 ( 2069ea6 )
Documentation
list oneofs in docstring ( 2069ea6 )
2.4.0 (2021-10-14)
Features
add support for python 3.10 ( #127 ) ( 1b53f97 )
2.3.0 (2021-10-08)
Features
add context manager support in client ( #123 ) ( 4324911 )
2.2.4 (2021-09-30)
Bug Fixes
improper types in pagers generation ( 7b93deb )
2.2.3 (2021-09-24)
Bug Fixes
add ‘dict’ annotation type to ‘request’ ( cf0a714 )
2.2.2 (2021-07-28)
Bug Fixes
enable self signed jwt for grpc ( #102 ) ( dd8b006 )
Documentation
add Samples section to CONTRIBUTING.rst ( #98 ) ( 923f6dc )
Miscellaneous Chores
release as 2.2.2 ( #103 ) ( 6fad3b8 )
2.2.1 (2021-07-20)
Bug Fixes
deps: pin ‘google-{api,cloud}-core’, ‘google-auth’ to allow 2.x versions ( #97 ) ( 5fcec51 )
2.2.0 (2021-07-01)
Features
add always_use_jwt_access ( #88 ) ( 223cac0 )
Bug Fixes
disable always_use_jwt_access ( #92 ) ( 1f0b236 )
Documentation
omit mention of Python 2.7 in ‘CONTRIBUTING.rst’ ( #1127 ) ( #83 ) ( 3a64290 )
2.1.1 (2021-05-28)
Bug Fixes
deps: add packaging requirement ( #76 ) ( 7d53117 )
remove libcst from requirements ( #54 ) ( 6a10fff )
2.1.0 (2021-01-29)
Features
add common resource helpers; expose client transport; remove send/recv gRPC limits ( #38 ) ( f3f1a86 )
2.0.0 (2020-09-14)
⚠ BREAKING CHANGES
migrate to microgen (#30)
Features
migrate to microgen ( #30 ) ( a17c1a8 )
Bug Fixes
update retry config ( #24 ) ( 0b3f2c0 )
Documentation
add multiprocessing note (via synth) ( #17 ) ( fb04673 )
1.0.0 (2020-05-12)
Features
set release_status to production/stable ( #11 ) ( effc368 )
0.4.0 (2020-02-12)
Features
redis: undeprecate resource name helper methods, add 2.7 deprecation warning (via synth) ( #10049 ) ( b8a8c24 )
add ConnectMode and upgrade_instance ( #5 ) ( e55220b )
Bug Fixes
redis: deprecate resource name helper methods (via synth) ( #9840 ) ( 75342ef )
0.3.0
07-24-2019 17:15 PDT
Implementation Changes
Allow kwargs to be passed to create_channel (via synth). ( #8400 )
Remove classifier for Python 3.4 for end-of-life. ( #7535 )
Remove unused message exports. ( #7272 )
Protoc-generated serialization update. ( #7092 )
Pick up stub docstring fix in GAPIC generator. ( #6979 )
New Features
Add ‘client_options’ support, update list method docstrings (via synth). ( #8519 )
Add ‘import_instance’ / ‘export_instance’ support (via synth). ( #8220 )
Remove v1 ‘import_instance’ / ‘export_instance’; add v1beta1 ‘failover_instance’ (via synth). ( #7937 )
Add support for instance import / export / failover (via synth). ( #7423 )
Dependencies
Bump minimum version for google-api-core to 1.14.0. ( #8709 )
Pin black version (via synth). ( #8592 )
Documentation
Link to googleapis.dev documentation in READMEs. ( #8705 )
Add compatibility check badges to READMEs. ( #8288 )
Updated client library documentation URLs. ( #7307 )
Update year: 2018 -> 2019. ( #7154 )
Internal / Testing Changes
Add docs job to publish to googleapis.dev. ( #8464 )
Declare encoding as utf-8 in pb2 files (via synth). ( #8360 )
Add disclaimer to auto-generated template files (via synth). ( #8324 )
Suppress checking ‘cov-fail-under’ in nox default session (via synth). ( #8249 )
Fix coverage in ‘types.py’ (via synth). ( #8161 )
Blacken noxfile.py, setup.py (via synth). ( #8129 )
Add empty lines (via synth). ( #8068 )
Finsh setup for ‘docs’ session in nox. ( #8101 )
Use alabaster theme everwhere. ( #8021 )
Copy lintified proto files (via synth).
Add clarifying comment to blacken nox target. ( #7400 )
Copy proto files alongside protoc versions.
Add protos as an artifact to library ( #7205 )
0.2.1
12-18-2018 09:40 PST
Implementation Changes
Import iam.policy from google.api_core . ( #6741 )
Pick up fixes to GAPIC generator. ( #6504 )
Assorted synth fixups / cleanups ( #6400 )
Fix client_info bug, update docstrings. ( #6419 )
Re-generate library using redis/synth.py ( #6016 )
Re-generate library using redis/synth.py ( #5993 )
Dependencies
Bump minimum api_core version for all GAPIC libs to 1.4.1. ( #6391 )
Documentation
Document Python 2 deprecation ( #6910 )
Normalize use of support level badges ( #6159 )
Internal / Testing Changes
Add baseline for synth.metadata
Update noxfile.
Blacken all gen’d libs ( #6792 )
Omit local deps ( #6701 )
Run black at end of synth.py ( #6698 )
Run Black on Generated libraries ( #6666 )
Add templates for flake8, coveragerc, noxfile, and black. ( #6642 )
Don’t synth ‘README.rst’. ( #6262 )
Add / fix badges for PyPI / versions. ( #6158 )
Use new Nox ( #6175 )
0.2.0
New Features
Add the v1 API client library. ( #5945 )
Documentation
Docs: Replace links to ‘/stable/’ with ‘/latest/’. ( #5901 )
Redis: Fix README.md links ( #5745 )
Add redis documentation to main index.rst ( #5405 )
Internal / Testing Changes
Nox: use inplace installs ( #5865 )
Avoid overwriting ‘ module ’ of messages from shared modules. ( #5364 )
Unit tests require grpcio. ( #5363 )
0.1.0
New Features
Initial version of Redis client library v1beta1.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
