---
title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/networksecurity/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/networksecurity/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/networksecurity/latest/changelog
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
0.13.0 (latest)
0.12.0
0.11.0
0.10.0
0.9.21
0.8.0
0.7.2
0.6.1
0.5.0
0.4.2
0.3.2
0.2.0
0.1.5
PyPI History
0.13.0 (2026-04-02)
Documentation
Update and cleanup docs ( c36aa6169035fdb14bf84b0e56e4f81291600b5a )
Features
Publish proto definitions for Intercept, Mirroring and SecurityProfileGroup ( c36aa6169035fdb14bf84b0e56e4f81291600b5a )
Publish proto definitions for AuthzPolicy, TlsInspectionPolicy, GatewaySecurityPolicy, GatewaySecurityPolicyRule, and UrlList ( c36aa6169035fdb14bf84b0e56e4f81291600b5a )
Publish proto definitions for SSG ( c36aa6169035fdb14bf84b0e56e4f81291600b5a )
0.12.0 (2026-03-26)
Features
Allow Protobuf 7.x ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
update image to us-central1-docker.pkg.dev/cloud-sdk-librarian-prod/images-prod/python-librarian-generator@sha256:f5426423676c75008c2135037e7b98f78cbb99f78b3c46fe043b6897be92d836 ( 3654fe76d755dd8db62ece81d5770ec58b3624df )
Bug Fixes
Require Python 3.9 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Require google-api-core >= 2.11.0 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Improve type checking ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
0.11.0 (2026-01-08)
Features
auto-enable mTLS when supported certificates are detected ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
check Python and dependency versions in generated GAPICs ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
0.10.0 (2025-12-04)
Features
publish networksecurity v1beta1 api ( 2da5c2afe0241e6dcb33aa9a0e5032012bf63df4 )
publish networksecurity v1alpha1 api ( d4e6a4ab7b428e821a59b053c689343b5f5511f9 )
0.9.21 (2025-10-14)
Features
[google-cloud-network-security] Update networksecurity/v1beta1 Python GAPIC to support REST transport ( #14702 ) ( accb1e5 )
0.9.20 (2025-10-14)
Features
Add support for Python 3.14 ( 4763aa7 )
Bug Fixes
Deprecate credentials_file argument ( 4763aa7 )
0.9.19 (2025-09-04)
Features
[google-cloud-network-security] add address groups API ( #14332 ) ( 9ff9ff6 )
0.9.18 (2025-06-11)
Documentation
Update import statement example in README ( 868b006 )
0.9.17 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( c8bbf32 )
remove setup.cfg configuration for creating universal wheels ( #13659 ) ( 59bfd42 )
0.9.16 (2025-02-18)
Bug Fixes
deps: Require grpc-google-iam-v1>=0.14.0 ( 770cf0f )
0.9.15 (2025-02-12)
Features
Add REST Interceptors which support reading metadata ( a0910dd )
Add support for reading selective GAPIC generation methods from service YAML ( a0910dd )
0.9.14 (2024-12-12)
Features
Add support for opt-in debug logging ( feb5c03 )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( feb5c03 )
0.9.13 (2024-11-11)
Bug Fixes
disable universe-domain validation ( #13244 ) ( ae1f471 )
0.9.12 (2024-10-24)
Features
Add support for Python 3.13 ( #13208 ) ( a019409 )
0.9.11 (2024-07-30)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( d95af77 )
0.9.10 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12868 ) ( 0e39c1a )
0.9.9 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12386 ) ( edcad16 )
0.9.8 (2024-02-22)
Bug Fixes
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12308 ) ( 74dabeb )
fix ValueError in test__validate_universe_domain ( 7c2f2c2 )
0.9.7 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( e75fcf6 )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( e75fcf6 )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( e75fcf6 )
0.9.6 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( #12241 ) ( aae72f5 )
0.9.5 (2023-12-07)
Features
Add support for python 3.12 ( 5cd98aa )
Introduce compatibility with native namespace packages ( 5cd98aa )
Bug Fixes
Require proto-plus >= 1.22.3 ( 5cd98aa )
Use retry_async instead of retry in async client ( 5cd98aa )
0.9.4 (2023-09-19)
Documentation
Minor formatting ( 1ae610b )
0.9.3 (2023-07-05)
Bug Fixes
Add async context manager return types ( #11448 ) ( 4d2c35a )
0.9.2 (2023-03-23)
Bug Fixes
Add service_yaml_parameters to networksecurity_py_gapic ( #166 ) ( dce340d )
Documentation
Fix formatting of request arg in docstring ( #170 ) ( d1db2c2 )
0.9.1 (2023-01-20)
Bug Fixes
Add context manager return types ( 28f193c )
Documentation
Add documentation for enums ( 28f193c )
0.9.0 (2023-01-10)
Features
Add support for python 3.11 ( #156 ) ( 5233d61 )
0.8.0 (2022-12-14)
Features
Add support for google.cloud.network_security.__version__ ( c5d13c9 )
Add typing to proto.Message based class attributes ( c5d13c9 )
Bug Fixes
Add dict typing for client_options ( c5d13c9 )
deps: Require google-api-core >=1.34.0, >=2.11.0 ( 9e9e394 )
Drop usage of pkg_resources ( 9e9e394 )
Fix timeout default values ( 9e9e394 )
Documentation
samples: Snippetgen handling of repeated enum field ( c5d13c9 )
samples: Snippetgen should call await on the operation coroutine before calling result ( 9e9e394 )
0.7.2 (2022-10-10)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #145 ) ( 78f436a )
deps: require google-api-core>=1.33.2 ( 78f436a )
0.7.1 (2022-09-29)
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #142 ) ( 5c7446f )
0.7.0 (2022-09-16)
Features
Add support for REST transport ( #136 ) ( e17eff4 )
Bug Fixes
deps: require google-api-core>=1.33.1,>=2.8.0 ( e17eff4 )
deps: require protobuf >= 3.20.1 ( e17eff4 )
0.6.1 (2022-08-15)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #121 ) ( 1558980 )
deps: require proto-plus >= 1.22.0 ( 1558980 )
fix annotation of parent in Create*Request ( f53ca2d )
Documentation
update the comments of various networksecurity resources ( #115 ) ( f53ca2d )
0.6.0 (2022-07-16)
Features
add network_security_v1 ( c2694d8 )
Bug Fixes
update default import for network_security to network_security_v1 ( c2694d8 )
0.5.0 (2022-07-13)
Features
add audience parameter ( 5e99e7e )
Bug Fixes
deps: require google-api-core>=1.32.0,>=2.8.0 ( #110 ) ( a700dc2 )
require python 3.7+ ( #108 ) ( dea6632 )
0.4.2 (2022-06-03)
Bug Fixes
deps: require protobuf <4.0.0dev ( #98 ) ( dfdc5c7 )
Documentation
fix changelog header to consistent size ( #99 ) ( 86bc9e4 )
0.4.1 (2022-03-05)
Bug Fixes
deps: require google-api-core>=1.31.5, >=2.3.2 ( #77 ) ( 6f0a9cb )
0.4.0 (2022-02-26)
Features
add api key support ( #63 ) ( 3f15e76 )
Bug Fixes
resolve DuplicateCredentialArgs error when using credentials_file ( a531e63 )
0.3.2 (2022-01-09)
Bug Fixes
updating metadata messages for all long running operations ( #57 ) ( 7adc601 )
0.3.1 (2021-11-02)
Bug Fixes
deps: drop packaging dependency ( 518f32b )
deps: require google-api-core >= 1.28.0 ( 518f32b )
Documentation
list oneofs in docstring ( 518f32b )
0.3.0 (2021-10-14)
Features
add support for python 3.10 ( #41 ) ( 7bfb72f )
0.2.0 (2021-10-08)
Features
add context manager support in client ( #37 ) ( 173b3db )
0.1.5 (2021-09-30)
Bug Fixes
improper types in pagers generation ( 90b83d6 )
0.1.4 (2021-09-24)
Bug Fixes
add ‘dict’ annotation type to ‘request’ ( dcefd7e )
0.1.3 (2021-07-29)
Bug Fixes
enable self signed jwt for grpc ( #15 ) ( 1cea5e5 )
Documentation
add Samples section to CONTRIBUTING.rst ( #11 ) ( 4b62e92 )
Miscellaneous Chores
release as 0.1.3 ( #16 ) ( 7d742bc )
0.1.2 (2021-07-21)
Bug Fixes
deps: pin ‘google-{api,cloud}-core’, ‘google-auth’ to allow 2.x versions ( #10 ) ( 070273d )
0.1.1 (2021-07-14)
Bug Fixes
disable always_use_jwt_access ( #5 ) ( 9a14561 )
0.1.0 (2021-06-28)
Features
generate v1beta1 ( 90eea75 )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-03 UTC."],[],[]]
