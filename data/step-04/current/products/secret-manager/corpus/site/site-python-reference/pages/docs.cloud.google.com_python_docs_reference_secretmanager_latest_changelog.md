---
title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/secretmanager/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/changelog
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
2.27.0 (latest)
2.26.0
2.25.0
2.23.3
2.22.1
2.21.1
2.20.2
2.19.0
2.18.3
2.17.0
2.16.3
2.15.1
2.14.0
2.13.0
2.12.6
2.11.1
2.10.0
2.9.2
2.8.0
2.7.3
2.6.0
2.5.0
2.4.0
2.3.0
2.2.0
2.1.0
2.0.0
1.0.2
0.2.0
0.1.1
PyPI History
2.27.0 (2026-03-26)
Features
Allow Protobuf 7.x ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
update image to us-central1-docker.pkg.dev/cloud-sdk-librarian-prod/images-prod/python-librarian-generator@sha256:f5426423676c75008c2135037e7b98f78cbb99f78b3c46fe043b6897be92d836 ( 3654fe76d755dd8db62ece81d5770ec58b3624df )
Bug Fixes
Require Python 3.9 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Require google-api-core >= 2.11.0 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Improve type checking ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
2.26.0 (2025-12-17)
Features
auto-enable mTLS when supported certificates are detected ( d2b35b25342bfa389b472f9ce49922e630019fe6 )
check Python and dependency versions in generated GAPICs ( d2b35b25342bfa389b472f9ce49922e630019fe6 )
2.25.0 (2025-10-14)
Features
Add support for Python 3.14 ( 4763aa7 )
Bug Fixes
Deprecate credentials_file argument ( 4763aa7 )
2.24.0 (2025-06-05)
Features
[google-cloud-secret-manager] update secret manager protos for tags ( #13976 ) ( 998c300 )
2.23.3 (2025-04-17)
Documentation
[google-cloud-secret-manager] various documentation clarifications ( #13796 ) ( 5f6227b )
2.23.2 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( 784a3ca )
remove setup.cfg configuration for creating universal wheels ( #13659 ) ( 59bfd42 )
2.23.1 (2025-02-18)
Bug Fixes
deps: Require grpc-google-iam-v1>=0.14.0 ( 770cf0f )
2.23.0 (2025-02-12)
Features
Add REST Interceptors which support reading metadata ( 87b5382 )
Add support for reading selective GAPIC generation methods from service YAML ( 87b5382 )
2.22.1 (2025-01-16)
Documentation
fix link in Markdown comments ( aae987b )
updated comment for customer_managed_encryption in message .google.cloud.secretmanager.v1.Secret ( aae987b )
updated comment for customer_managed_encryption in message .google.cloud.secretmanager.v1.SecretVersion ( aae987b )
updated comment for name in message .google.cloud.secretmanager.v1.Topic ( aae987b )
updated comment for Replication ( aae987b )
updated comment for scheduled_destroy_time in message .google.cloud.secretmanager.v1.SecretVersion ( aae987b )
2.22.0 (2024-12-12)
Features
Add support for opt-in debug logging ( 856e0f0 )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( 856e0f0 )
2.21.1 (2024-11-11)
Bug Fixes
disable universe-domain validation ( #13245 ) ( 875f712 )
2.21.0 (2024-10-24)
Features
Add support for Python 3.13 ( #13209 ) ( 5f2e30d )
2.20.2 (2024-07-30)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( 52db52e )
2.20.1 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12869 ) ( e42edbc )
2.20.0 (2024-04-22)
Features
Add Secret Version Delayed Destroy changes for client libraries ( bfb8a34 )
Documentation
Users can now enable secret version delayed destruction ( bfb8a34 )
2.19.0 (2024-03-22)
Features
[google-cloud-secret-manager] clients for SecretManager API v1beta2 ( #12437 ) ( 8abb150 )
2.18.3 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12387 ) ( 12ce658 )
2.18.2 (2024-02-22)
Bug Fixes
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12309 ) ( c23398a )
fix ValueError in test__validate_universe_domain ( 89c1b05 )
2.18.1 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( 9e8d039 )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( 9e8d039 )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( 9e8d039 )
2.18.0 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( #12243 ) ( e14d4b1 )
2.17.0 (2023-12-07)
Features
Add support for python 3.12 ( e9655df )
Introduce compatibility with native namespace packages ( e9655df )
Bug Fixes
Require proto-plus >= 1.22.3 ( e9655df )
Use retry_async instead of retry in async client ( e9655df )
2.16.4 (2023-09-19)
Documentation
Minor formatting ( 025219f )
2.16.3 (2023-08-03)
Documentation
Minor formatting ( #11543 ) ( 8cc031e )
2.16.2 (2023-07-05)
Bug Fixes
Add async context manager return types ( #11448 ) ( 4d2c35a )
2.16.1 (2023-03-23)
Documentation
Fix formatting of request arg in docstring ( #409 ) ( 925d05a )
2.16.0 (2023-02-28)
Features
Enable “rest” transport in Python for services supporting numeric enums ( 10c02e5 )
2.15.1 (2023-01-20)
Bug Fixes
Add context manager return types ( 2b85fae )
Documentation
Add documentation for enums ( 2b85fae )
2.15.0 (2023-01-10)
Features
Add support for python 3.11 ( #386 ) ( 0c68091 )
2.14.0 (2023-01-04)
Features
Update public API to include annotation support ( #381 ) ( 68bbbe5 )
2.13.0 (2022-12-14)
Features
Add support for google.cloud.secretmanager.__version__ ( 5530112 )
Add typing to proto.Message based class attributes ( 5530112 )
Regenerate client for v1beta1 ( dc9b1e3 )
Bug Fixes
Add dict typing for client_options ( 5530112 )
deps: Require google-api-core >=1.34.0, >=2.11.0 ( dc9b1e3 )
Drop usage of pkg_resources ( dc9b1e3 )
Fix timeout default values ( dc9b1e3 )
Documentation
samples: Snippetgen handling of repeated enum field ( 5530112 )
samples: Snippetgen should call await on the operation coroutine before calling result ( dc9b1e3 )
2.12.6 (2022-10-10)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #364 ) ( 4042d9e )
2.12.5 (2022-09-29)
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #361 ) ( 4758816 )
2.12.4 (2022-08-24)
Documentation
samples: Added sample for creating Secret with UserManaged replication ( #328 ) ( c5fe7ff )
2.12.3 (2022-08-11)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #335 ) ( 34c5858 )
deps: require proto-plus >= 1.22.0 ( 34c5858 )
2.12.2 (2022-08-08)
Documentation
samples: add sample to update secret with alias ( #307 ) ( dab8e16 )
2.12.1 (2022-07-26)
Bug Fixes
wrong package name google-cloud-secretmanager ( #325 ) ( 1693fd1 )
2.12.0 (2022-07-16)
Features
add audience parameter ( bf4130e )
Bug Fixes
deps: require google-api-core>=1.32.0,>=2.8.0 ( #320 ) ( 311a877 )
require python 3.7+ ( #317 ) ( 971a802 )
2.11.1 (2022-06-06)
Bug Fixes
deps: require protobuf <4.0.0dev ( #303 ) ( f5cb81d )
Documentation
fix changelog header to consistent size ( #304 ) ( f4437f6 )
2.11.0 (2022-05-05)
Features
AuditConfig for IAM v1 ( d7742de )
Bug Fixes
deps: require grpc-google-iam-v1 >=0.12.4 ( d7742de )
Documentation
fix type in docstring for map fields ( d7742de )
2.10.0 (2022-04-04)
Features
Added support for accessing secret versions by alias ( #281 ) ( 6c5cd29 )
2.9.2 (2022-03-13)
Documentation
samples: add checksum snippets ( #255 ) ( 2095a04 )
2.9.1 (2022-03-05)
Bug Fixes
deps: require google-api-core>=1.31.5, >=2.3.2 ( #260 ) ( b6b800b )
deps: require proto-plus>=1.15.0 ( b6b800b )
2.9.0 (2022-02-26)
Features
add api key support ( #240 ) ( 4056e97 )
add checksums in Secret Manager ( #244 ) ( 6c24f70 )
Bug Fixes
deps: move libcst to extras ( #248 ) ( 9acb791 )
resolve DuplicateCredentialArgs error when using credentials_file ( 6c24f70 )
Documentation
add generated snippets ( #247 ) ( a84c252 )
2.8.0 (2021-11-08)
Features
add context manager support in client ( #210 ) ( 8d247d4 )
add support for python 3.10 ( #214 ) ( 5e3cc7e )
Bug Fixes
deps: drop packaging dependency ( 6aac11f )
deps: require google-api-core >= 1.28.0 ( 6aac11f )
Documentation
list oneofs in docstring ( 6aac11f )
samples: Add filtered listing samples ( #209 ) ( 316de2d )
2.7.3 (2021-09-30)
Bug Fixes
improper types in pagers generation ( 59c557f )
2.7.2 (2021-09-24)
Bug Fixes
add ‘dict’ annotation type to ‘request’ ( b5e0c81 )
2.7.1 (2021-09-13)
Bug Fixes
add ‘dict’ type annotation to ‘request’ ( #193 ) ( 1d5fee4 )
2.7.0 (2021-08-03)
Features
add filter to customize the output of ListSecrets/ListSecretVersions calls ( #161 ) ( c09615c )
Bug Fixes
deps: pin ‘google-{api,cloud}-core’, ‘google-auth’ to allow 2.x versions ( #153 ) ( 1e8a4aa )
enable self signed jwt for grpc ( #158 ) ( 9ebe2b3 )
Documentation
secretmanager: add sample code for receiving a Pub/Sub message ( #138 ) ( 51f743d )
Miscellaneous Chores
release as 2.6.1 ( #159 ) ( b686310 )
release as 2.7.0 ( #163 ) ( b1c148b )
2.6.0 (2021-07-09)
Features
add always_use_jwt_access ( #137 ) ( e1ee4c7 )
Tune Secret Manager auto retry parameters ( #144 ) ( 494f3f6 )
Bug Fixes
disable always_use_jwt_access ( #143 ) ( 47cdda9 )
Documentation
omit mention of Python 2.7 in ‘CONTRIBUTING.rst’ ( #1127 ) ( #132 ) ( 6a10592 ), closes #1126
2.5.0 (2021-06-07)
Features
Etags in Secret Manager ( #116 ) ( 6ec898e )
Bug Fixes
deps: add packaging requirement ( #119 ) ( 0937207 )
2.4.0 (2021-03-31)
Features
Rotation for Secrets ( #95 ) ( c0aea0f )
Bug Fixes
use correct retry deadline ( #92 ) ( 5f57e66 )
2.3.0 (2021-03-11)
Features
add topic field to Secret ( #80 ) ( f83c035 )
2.2.0 (2021-01-20)
Features
added expire_time and ttl fields to Secret ( #70 ) ( 92c4a98 )
Bug Fixes
remove client side recv limits ( #65 ) ( 383bde5 )
2.1.0 (2020-12-03)
Features
add common resource helper methods; expose client transport; add shebang to fixup scripts ( #57 ) ( b5c022b )
2.0.0 (2020-09-15)
⚠ BREAKING CHANGES
migrate to use microgen. See Migration Guide (#44)
Features
migrate to use microgen ( #44 ) ( 4196032 )
Bug Fixes
update default retry configs ( #31 ) ( 5f8689c )
1.0.0 (2020-05-20)
Features
release as production/stable ( #24 ) ( 39a8cc8 )
0.2.0 (2020-03-06)
Features
add support for v1 ( #15 ) ( cc97391 )
0.1.1 (2020-01-06)
Bug Fixes
remove deprecations from path helpers ( #9 ) ( 723ef9f )
0.1.0 (2019-12-20)
Features
initial generation of secret manager ( 1c193f8 )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
