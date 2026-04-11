---
title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/changelog
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
2.19.0 (latest)
2.18.0
2.17.0
2.16.0
2.15.1
2.14.1
2.13.5
2.12.0
2.11.3
2.10.0
2.9.1
2.8.0
2.7.3
2.6.4
2.5.1
2.4.0
2.3.4
2.2.0
2.1.1
2.0.0
1.3.2
1.2.1
PyPI History
2.19.0 (2026-03-26)
Features
Allow Protobuf 7.x ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
update image to us-central1-docker.pkg.dev/cloud-sdk-librarian-prod/images-prod/python-librarian-generator@sha256:f5426423676c75008c2135037e7b98f78cbb99f78b3c46fe043b6897be92d836 ( 3654fe76d755dd8db62ece81d5770ec58b3624df )
Bug Fixes
Require Python 3.9 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Require google-api-core >= 2.11.0 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Improve type checking ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
2.18.0 (2026-01-09)
Features
auto-enable mTLS when supported certificates are detected ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
check Python and dependency versions in generated GAPICs ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
2.17.0 (2025-10-20)
Features
Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Bug Fixes
Deprecate credentials_file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def )
2.16.1 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( 784a3ca )
remove setup.cfg configuration for creating universal wheels ( #13659 ) ( 59bfd42 )
2.16.0 (2025-02-18)
Features
Add REST Interceptors which support reading metadata ( c8e0760 )
Add support for reading selective GAPIC generation methods from service YAML ( c8e0760 )
2.15.1 (2025-01-27)
Documentation
annotate output-only fields as such ( 6707477 )
update comments ( 6707477 )
2.15.0 (2024-12-12)
Features
Add support for opt-in debug logging ( 856e0f0 )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( 856e0f0 )
2.14.1 (2024-11-11)
Bug Fixes
disable universe-domain validation ( #13245 ) ( 875f712 )
2.14.0 (2024-10-24)
Features
Add support for Python 3.13 ( #13209 ) ( 5f2e30d )
2.13.5 (2024-07-30)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( 52db52e )
2.13.4 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12869 ) ( e42edbc )
2.13.3 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12387 ) ( 12ce658 )
2.13.2 (2024-02-22)
Bug Fixes
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12309 ) ( c23398a )
fix ValueError in test__validate_universe_domain ( 89c1b05 )
2.13.1 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( 9e8d039 )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( 9e8d039 )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( 9e8d039 )
2.13.0 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( #12243 ) ( e14d4b1 )
2.12.0 (2023-12-07)
Features
Add support for python 3.12 ( e9655df )
Introduce compatibility with native namespace packages ( e9655df )
Bug Fixes
Require proto-plus >= 1.22.3 ( e9655df )
Use retry_async instead of retry in async client ( e9655df )
2.11.3 (2023-11-13)
Documentation
[google-cloud-scheduler] correct timezone/offset information for Cloud Scheduler headers ( #12007 ) ( dd04e8f )
2.11.2 (2023-09-30)
Documentation
Minor formatting ( #353 ) ( 951433b )
2.11.1 (2023-07-04)
Bug Fixes
Add async context manager return types ( #340 ) ( 7e65978 )
2.11.0 (2023-03-23)
Features
Location API methods ( #324 ) ( 662e648 )
Documentation
Fix formatting of request arg in docstring ( #328 ) ( 94e406e )
2.10.0 (2023-02-28)
Features
Enable “rest” transport in Python for services supporting numeric enums ( 3de2adb )
2.9.1 (2023-01-20)
Bug Fixes
Add context manager return types ( 1ebe016 )
Documentation
Add documentation for enums ( 1ebe016 )
2.9.0 (2023-01-10)
Features
Add support for python 3.11 ( #307 ) ( 455fa74 )
2.8.0 (2022-12-14)
Features
Add support for google.cloud.scheduler.__version__ ( ab1a908 )
Add typing to proto.Message based class attributes ( ab1a908 )
Updated Client Libraries for Cloud Scheduler ( #304 ) ( a6cad2f )
Bug Fixes
Add dict typing for client_options ( ab1a908 )
deps: Require google-api-core >=1.34.0, >=2.11.0 ( 75a677a )
Drop usage of pkg_resources ( 75a677a )
Fix timeout default values ( 75a677a )
Documentation
samples: Snippetgen handling of repeated enum field ( ab1a908 )
samples: Snippetgen should call await on the operation coroutine before calling result ( 75a677a )
2.7.3 (2022-10-07)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #291 ) ( f0195d0 )
2.7.2 (2022-10-03)
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #288 ) ( c8357fe )
2.7.1 (2022-08-11)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #268 ) ( 7081d77 )
deps: require proto-plus >= 1.22.0 ( 7081d77 )
2.7.0 (2022-07-16)
Features
add audience parameter ( c8adf9c )
Bug Fixes
deps: require google-api-core>=1.32.0,>=2.8.0 ( #258 ) ( a57f965 )
require python 3.7+ ( #256 ) ( 6b0faa0 )
2.6.4 (2022-06-06)
Bug Fixes
deps: require protobuf <4.0.0dev ( #243 ) ( 72b64ad )
Documentation
fix changelog header to consistent size ( #244 ) ( b6b6fd1 )
2.6.3 (2022-04-14)
Bug Fixes
fix type in docstring for map fields ( #223 ) ( 34d7478 )
2.6.2 (2022-03-05)
Bug Fixes
deps: require google-api-core>=1.31.5, >=2.3.2 ( #203 ) ( 3e68808 )
deps: require proto-plus>=1.15.0 ( 3e68808 )
2.6.1 (2022-02-26)
Bug Fixes
resolve DuplicateCredentialArgs error when using credentials_file ( 993ac1a )
Documentation
add generated snippets ( #189 ) ( eccf8c6 )
2.6.0 (2022-01-25)
Features
add api key support ( #180 ) ( 74eaf8b )
2.5.1 (2021-11-01)
Bug Fixes
deps: drop packaging dependency ( 240c125 )
deps: require google-api-core >= 1.28.0 ( 240c125 )
Documentation
list oneofs in docstring ( 240c125 )
2.5.0 (2021-10-25)
Features
add support for python 3.10 ( #149 ) ( 8c671d9 )
2.4.0 (2021-10-08)
Features
add context manager support in client ( #144 ) ( 4bb0fb6 )
2.3.4 (2021-09-30)
Bug Fixes
improper types in pagers generation ( a24ad41 )
2.3.3 (2021-09-24)
Bug Fixes
add ‘dict’ annotation type to ‘request’ ( b8b77d1 )
2.3.2 (2021-07-28)
Bug Fixes
enable self signed jwt for grpc ( #116 ) ( a18fe2a )
Documentation
add Samples section to CONTRIBUTING.rst ( #111 ) ( ed91668 )
Miscellaneous Chores
release as 2.3.2 ( #117 ) ( f06e90b )
2.3.1 (2021-07-20)
Bug Fixes
deps: pin ‘google-{api,cloud}-core’, ‘google-auth’ to allow 2.x versions ( #110 ) ( 2b68578 )
2.3.0 (2021-07-01)
Features
add always_use_jwt_access ( #102 ) ( bd5550b )
Bug Fixes
deps: add packaging requirement ( #89 ) ( 8966559 )
disable always_use_jwt_access ( #106 ) ( c8dd497 )
Documentation
omit mention of Python 2.7 in ‘CONTRIBUTING.rst’ ( #1127 ) ( #99 ) ( 2dcbcdf ), closes #1126
2.2.0 (2021-03-31)
Features
add from_service_account_info ( #67 ) ( bd21900 )
2.1.1 (2021-02-08)
Bug Fixes
remove client recv msg limit and add enums to types/__init__.py ( #46 ) ( b6a9feb )
2.1.0 (2020-12-08)
Features
add common resource helpers; expose client transport ( #41 ) ( f9fc0f9 )
2.0.0 (2020-08-27)
⚠ BREAKING CHANGES
migrate to microgenerator (#29)
Features
migrate to microgenerator ( #29 ) ( 82f66ed )
Bug Fixes
update retry configs ( #20 ) ( 7f82c9f )
1.3.0 (2020-04-21)
⚠ BREAKING CHANGES
scheduler: remove project_path method, update docstrings (via synth) (#9522)
Bug Fixes
scheduler: remove project_path method, update docstrings (via synth) ( #9522 ) ( 36c611b )
add python 2.7 deprecation warning (via synth) ( #9 ) ( d17f5ff )
1.2.1
08-12-2019 13:53 PDT
Implementation Changes
Remove send/recv msg size limit (via synth). ( #8966 )
Documentation
Fix links to googleapis.dev ( #8998 )
Update intersphinx mapping for requests. ( #8805 )
1.2.0
07-24-2019 17:27 PDT
Implementation Changes
Allow kwargs to be passed to create_channel (via synth). ( #8401 )
New Features
Add ‘client_options’ support, update list method docstrings (via synth). ( #8520 )
Dependencies
Bump minimum version for google-api-core to 1.14.0. ( #8709 )
Pin black version (via synth). ( #8593 )
Documentation
Link to googleapis.dev documentation in READMEs. ( #8705 )
Add compatibility check badges to READMEs. ( #8288 )
Internal / Testing Changes
Add docs job to publish to googleapis.dev. ( #8464 )
Declare encoding as utf-8 in pb2 files (via synth). ( #8361 )
Add disclaimer to auto-generated template (via synth). ( #8325 )
Suppress checking ‘cov-fail-under’ in nox default session (via synth). ( #8250 )
Fix coverage in ‘types.py’ (via synth). ( #8162 )
Blacken noxfile.py, setup.py (via synth). ( #8130 )
Add empty lines (via synth). ( #8069 )
1.1.0
05-13-2019 13:15 PDT
New Features
Add authorization headers and deadline for job attempts (via synth). ( #7938 )
Internal / Testing Changes
Add nox session docs , reorder methods (via synth). ( #7779 )
1.0.0
05-03-2019 10:04 PDT
Internal / Testing Changes
Add smoke test for scheduler. ( #7854 )
0.3.0
04-15-2019 10:32 PDT
New Features
add auth and configurable timeouts to v1beta1 (via synth). ( #7665 )
0.2.0
04-01-2019 15:39 PDT
Implementation Changes
Add routing header to method metadata (via synth). ( #7599 )
Remove classifier for Python 3.4 for end-of-life. ( #7535 )
Remove unused message exports. ( #7273 )
Protoc-generated serialization update. ( #7093 )
Protoc-generated serialization update. ( #7055 )
Use moved iam.policy now at google.api_core.iam.policy. ( #6741 )
New Features
Add v1. ( #7608 )
Pick up fixes to GAPIC generator. ( #6505 )
Documentation
googlecloudplatform –> googleapis in READMEs. ( #7411 )
Updated client library documentation URLs. ( #7307 )
Update copyright year. ( #7155 )
Correct a link in a documentation string. ( #7119 )
Pick up stub docstring fix in GAPIC generator. ( #6980 )
Document Python 2 deprecation. ( #6910 )
Update link for Scheduler Docs. ( #6925 )
Internal / Testing Changes
Copy lintified proto files (via synth). ( #7469 )
Add clarifying comment to blacken nox target. ( #7401 )
Add protos as an artifact to library. ( #7205 )
Add baseline for synth.metadata. ( #6792 )
Update noxfile. ( #6814 )
Blacken all gen’d libs. ( #6792 )
Omit local deps. ( #6701 )
Run black at end of synth.py. ( #6698 )
Run Black on Generated libraries. ( #6666 )
Add templates for flake8, coveragerc, noxfile, and black. ( #6642 )
0.1.0
11-13-2018 11:03 PST
New Features
Initial release of Cloud Scheduler library. ( #6482 )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
