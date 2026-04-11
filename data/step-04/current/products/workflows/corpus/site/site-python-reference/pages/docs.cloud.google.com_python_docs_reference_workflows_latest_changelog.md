---
title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/workflows/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/workflows/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/workflows/latest/changelog
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
1.21.0 (latest)
1.20.0
1.19.0
1.18.1
1.17.0
1.16.0
1.15.1
1.14.5
1.13.0
1.12.0
1.11.0
1.10.2
1.9.1
1.8.0
1.7.4
1.6.3
1.5.0
1.4.1
1.3.0
1.2.3
1.1.0
1.0.0
0.3.2
0.2.0
0.1.0
PyPI History
1.21.0 (2026-03-26)
Features
Allow Protobuf 7.x ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
update image to us-central1-docker.pkg.dev/cloud-sdk-librarian-prod/images-prod/python-librarian-generator@sha256:f5426423676c75008c2135037e7b98f78cbb99f78b3c46fe043b6897be92d836 ( 3654fe76d755dd8db62ece81d5770ec58b3624df )
Bug Fixes
Require Python 3.9 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Require google-api-core >= 2.11.0 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Improve type checking ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
1.20.0 (2026-01-09)
Features
auto-enable mTLS when supported certificates are detected ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
check Python and dependency versions in generated GAPICs ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
1.19.0 (2025-10-20)
Features
Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Bug Fixes
Deprecate credentials_file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def )
1.18.2 (2025-06-11)
Documentation
Update import statement example in README ( 8066d24 )
1.18.1 (2025-04-12)
Documentation
A comment for field revision_id in message .google.cloud.workflows.v1beta.Workflow is changed ( 0868067 )
A comment for field service_account in message .google.cloud.workflows.v1beta.Workflow is changed ( 0868067 )
A comment for field source_contents in message .google.cloud.workflows.v1beta.Workflow is changed ( 0868067 )
1.18.0 (2025-03-19)
Features
add crypto key config to Workflow ( 036658f )
add ExecutionHistoryLevel enum ( 036658f )
add ExecutionHistoryLevel to Workflow ( 036658f )
add ListWorkflowRevisions method ( 036658f )
add tags to Workflow ( 036658f )
Documentation
update Workflow some standard field docs ( 036658f )
1.17.1 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( 4757dae )
remove setup.cfg configuration for creating universal wheels ( #13659 ) ( 59bfd42 )
1.17.0 (2025-02-12)
Features
Add REST Interceptors which support reading metadata ( 5cdcc9d )
Add support for reading selective GAPIC generation methods from service YAML ( 5cdcc9d )
1.16.0 (2024-12-12)
Features
Add support for opt-in debug logging ( cf4d0e0 )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( cf4d0e0 )
1.15.1 (2024-11-11)
Bug Fixes
disable universe-domain validation ( #13247 ) ( 5adc8b7 )
1.15.0 (2024-10-24)
Features
Add support for Python 3.13 ( #13211 ) ( f712162 )
1.14.5 (2024-07-30)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( 4adddf4 )
1.14.4 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12871 ) ( 73b35d5 )
1.14.3 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12388 ) ( d2cd4ff )
1.14.2 (2024-02-22)
Bug Fixes
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12310 ) ( 41821da )
fix ValueError in test__validate_universe_domain ( f3974d4 )
1.14.1 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( e16032f )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( e16032f )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( e16032f )
1.14.0 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( #12244 ) ( 8d6b772 )
1.13.0 (2023-12-07)
Features
Add support for python 3.12 ( f920d22 )
Introduce compatibility with native namespace packages ( f920d22 )
Bug Fixes
Require proto-plus >= 1.22.3 ( f920d22 )
Use retry_async instead of retry in async client ( f920d22 )
1.12.1 (2023-09-19)
Documentation
Minor formatting ( 77bf61a )
1.12.0 (2023-08-31)
Features
add filter and order_by fields to ListExecutionsRequest ( 541d296 )
add LOG_NONE to call_log_level ( 541d296 )
add status, labels, duration and state_error fields to Execution ( 541d296 )
add UNAVAILABLE and QUEUED to state enum ( 541d296 )
1.11.0 (2023-08-16)
Features
add call_log_level field to Workflow ( 9372c15 )
add revision_id to GetWorkflowRequest ( 9372c15 )
add state_error field to Workflow ( 9372c15 )
add UNAVAILABLE to state enum of workflow deployment ( 9372c15 )
add user_env_vars field to Workflow ( 9372c15 )
1.10.2 (2023-07-04)
Bug Fixes
Add async context manager return types ( #255 ) ( 6c2f727 )
1.10.1 (2023-03-23)
Documentation
Fix formatting of request arg in docstring ( #248 ) ( 20f6578 )
1.10.0 (2023-02-17)
Features
Enable “rest” transport in Python for services supporting numeric enums ( #241 ) ( 3fc33a3 )
1.9.1 (2023-01-23)
Bug Fixes
Add context manager return types ( 4424b89 )
Documentation
Add documentation for enums ( 4424b89 )
1.9.0 (2023-01-10)
Features
Add support for python 3.11 ( #233 ) ( 6b7931b )
1.8.0 (2022-12-08)
Features
add support for google.cloud.workflows.__version__ ( f234644 )
Add typing to proto.Message based class attributes ( f234644 )
Bug Fixes
Add dict typing for client_options ( f234644 )
deps: Require google-api-core >=1.34.0, >=2.11.0 ( 566af4a )
Drop usage of pkg_resources ( 566af4a )
Fix timeout default values ( 566af4a )
Documentation
samples: Snippetgen handling of repeated enum field ( f234644 )
samples: Snippetgen should call await on the operation coroutine before calling result ( 566af4a )
1.7.4 (2022-10-07)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #223 ) ( cb3f23b )
1.7.3 (2022-09-29)
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #221 ) ( f2f0c01 )
1.7.2 (2022-08-11)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #206 ) ( 012a6e1 )
deps: require proto-plus >= 1.22.0 ( 012a6e1 )
1.7.1 (2022-07-13)
Bug Fixes
deps: require google-api-core>=1.32.0,>=2.8.0 ( #198 ) ( cbd80e8 )
1.7.0 (2022-07-06)
Features
add audience parameter ( c4a8a8d )
Bug Fixes
deps: require google-api-core >= 2.8.0 ( c4a8a8d )
require python >= 3.7 ( #195 ) ( 6315169 )
1.6.3 (2022-06-03)
Bug Fixes
deps: require protobuf>=3.19.0, <4.0.0dev ( #183 ) ( d58f508 )
Documentation
fix changelog header to consistent size ( #184 ) ( 0578027 )
1.6.2 (2022-05-05)
Documentation
fix type in docstring for map fields ( f3ec9da )
1.6.1 (2022-03-05)
Bug Fixes
deps: require google-api-core>=1.31.5, >2.3.0 ( #142 ) ( 0a0280a )
deps: require proto-plus>=1.15.0 ( 0a0280a )
1.6.0 (2022-02-15)
Features
add api key support ( #127 ) ( 9db415f )
Bug Fixes
deps: remove unused dependency libcst ( #133 ) ( bfadb79 )
resolve DuplicateCredentialArgs error when using credentials_file ( 57614ee )
1.5.0 (2021-11-05)
Features
add a stack_trace field to the Error messages specifying where the error occurred ( #113 ) ( 22f55d3 )
add call_log_level field to Execution messages ( 22f55d3 )
1.4.1 (2021-11-01)
Bug Fixes
deps: drop packaging dependency ( a294177 )
deps: require google-api-core >= 1.28.0 ( a294177 )
Documentation
list oneofs in docstring ( a294177 )
1.4.0 (2021-10-19)
Features
add support for python 3.10 ( #106 ) ( 7eac117 )
1.3.0 (2021-10-08)
Features
add context manager support in client ( #102 ) ( 090c723 )
1.2.3 (2021-09-30)
Bug Fixes
improper types in pagers generation ( f33a1b9 )
1.2.2 (2021-09-24)
Bug Fixes
add ‘dict’ annotation type to ‘request’ ( 8e778a3 )
1.2.1 (2021-07-26)
Bug Fixes
deps: pin ‘google-{api,cloud}-core’, ‘google-auth’ to allow 2.x versions ( #75 ) ( cd2684f )
enable self signed jwt for grpc ( #81 ) ( 5abf2bc )
Documentation
add Samples section to CONTRIBUTING.rst ( #76 ) ( 8eb851b )
Miscellaneous Chores
release as 1.2.1 ( #80 ) ( b3ece19 )
1.2.0 (2021-07-01)
Features
add always_use_jwt_access ( #68 ) ( a88f246 )
Bug Fixes
disable always_use_jwt_access ( #72 ) ( 2085463 )
exclude docs and tests from package ( #63 ) ( ff68d16 )
Documentation
omit mention of Python 2.7 in ‘CONTRIBUTING.rst’ ( #1127 ) ( #65 ) ( 10341d6 )
1.1.0 (2021-06-16)
Features
support self-signed JWT flow for service accounts ( 1165c47 )
Bug Fixes
add async client to %name_%version/init.py ( 1165c47 )
1.0.0 (2021-06-02)
Features
bump release level to production/stable ( #54 ) ( 3cd61a5 )
0.3.0 (2021-04-30)
Features
add v1 ( #36 ) ( a843aae )
0.2.0 (2021-01-21)
Features
add ‘from_service_account_info’ factory to clients ( 887df00 )
add common resource path helpers; expose client transport; remove gRPC send/recv limit ( #12 ) ( 672d821 )
Bug Fixes
fix sphinx identifiers ( 887df00 )
Documentation
fix type annotations ( #4 ) ( 60d3930 )
remove note on editable installs ( #5 ) ( 4dddd59 )
0.1.0 (2020-09-24)
Features
add workflows v1beta ( 8ec2882 )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
