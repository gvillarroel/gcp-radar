---
title: "Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/changelog
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
1.18.0 (latest)
1.17.0
1.16.3
1.15.0
1.14.1
1.13.6
1.12.1
1.11.5
1.10.1
1.9.1
1.8.0
1.7.3
1.6.1
1.5.1
1.4.1
1.3.4
1.2.1
1.1.1
1.0.0
0.1.0
Changelog
PyPI History
1.18.0 (2026-01-08)
Features
auto-enable mTLS when supported certificates are detected ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
check Python and dependency versions in generated GAPICs ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
1.17.0 (2025-10-16)
Features
Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Bug Fixes
Deprecate credentials_file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def )
1.16.3 (2025-06-11)
Documentation
Update import statement example in README ( 8697120 )
1.16.2 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( 1e43e75 )
remove setup.cfg configuration for creating universal wheels ( #13659 ) ( 59bfd42 )
1.16.1 (2025-02-18)
Bug Fixes
deps: Require grpc-google-iam-v1>=0.14.0 ( 4571dff )
1.16.0 (2025-02-12)
Features
Add REST Interceptors which support reading metadata ( e22e2bd )
Add support for reading selective GAPIC generation methods from service YAML ( e22e2bd )
1.15.0 (2024-12-12)
Features
Add support for opt-in debug logging ( e31cbb0 )
added currency field to billing account message ( 89157d6 )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( e31cbb0 )
1.14.1 (2024-10-31)
Bug Fixes
disable universe-domain validation ( 4ed4108 )
1.14.0 (2024-10-24)
Features
Add support for Python 3.13 ( 6252476 )
1.13.6 (2024-07-30)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( a6f7356 )
1.13.5 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12864 ) ( 728b307 )
1.13.4 (2024-06-24)
Documentation
Genereal documentation improvements ( 73dd30d )
1.13.3 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12382 ) ( d5db265 )
1.13.2 (2024-02-22)
Bug Fixes
[Many APIs] fix ValueError in test__validate_universe_domain ( #12281 ) ( 62cf934 )
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12304 ) ( c52e0cd )
Documentation
[google-cloud-billing] Clarify that the parent field in the CreateBillingAccountRequest must be a billing account ( #12299 ) ( 1ff477c )
1.13.1 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( 8465244 )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( 8465244 )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( 8465244 )
1.13.0 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( #12238 ) ( 8701267 )
1.12.1 (2024-01-19)
Documentation
[google-cloud-billing] update comments ( #12202 ) ( 9acf675 )
1.12.0 (2023-12-07)
Features
Add support for python 3.12 ( 0d1a592 )
added field BillingAccount.parent ( facc8ef )
added the MoveBillingAccount method, which allows changing which organization a billing account belongs to ( facc8ef )
Introduce compatibility with native namespace packages ( 0d1a592 )
Bug Fixes
Require proto-plus >= 1.22.3 ( 0d1a592 )
Use retry_async instead of retry in async client ( 0d1a592 )
1.11.5 (2023-09-21)
Documentation
update service documentation ( #11686 ) ( 3c1d20c )
1.11.4 (2023-09-19)
Documentation
Minor formatting ( 9487380 )
1.11.3 (2023-08-31)
Documentation
update comments ( #11598 ) ( aaa652e )
1.11.2 (2023-08-03)
Documentation
Minor formatting ( #11543 ) ( 8cc031e )
1.11.1 (2023-07-05)
Bug Fixes
Add async context manager return types ( #11445 ) ( 98bddda )
1.11.0 (2023-06-19)
Features
added resource_reference for name in GetProjectBillingInfoRequest message ( #11409 ) ( 1ec86ce )
1.10.1 (2023-03-23)
Documentation
Fix formatting of request arg in docstring ( #244 ) ( 4f0ec70 )
1.10.0 (2023-02-27)
Features
Enable “rest” transport in Python for services supporting numeric enums ( #237 ) ( 872e1dd )
1.9.1 (2023-01-20)
Bug Fixes
Add context manager return types ( 7923a86 )
Documentation
Add documentation for enums ( 7923a86 )
1.9.0 (2023-01-10)
Features
Add support for python 3.11 ( #228 ) ( 5e14095 )
1.8.0 (2022-12-15)
Features
Add support for google.cloud.billing.__version__ ( 76f87d4 )
Add typing to proto.Message based class attributes ( 76f87d4 )
Added Sku.geo_taxonomy ( 76f87d4 )
Bug Fixes
Add dict typing for client_options ( 76f87d4 )
deps: Require google-api-core >=1.34.0, >=2.11.0 ( 4119740 )
Drop usage of pkg_resources ( 4119740 )
Fix timeout default values ( 4119740 )
More oauth scopes ( 76f87d4 )
Documentation
samples: Snippetgen handling of repeated enum field ( 76f87d4 )
samples: Snippetgen should call await on the operation coroutine before calling result ( 4119740 )
1.7.3 (2022-10-07)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #217 ) ( d974efc )
1.7.2 (2022-09-29)
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #215 ) ( 153eeb3 )
1.7.1 (2022-08-11)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #201 ) ( 2b31ba8 )
deps: require proto-plus >= 1.22.0 ( 2b31ba8 )
1.7.0 (2022-07-16)
Features
add audience parameter ( d159208 )
Bug Fixes
deps: require google-api-core>=1.32.0,>=2.8.0 ( #193 ) ( d159208 )
require python 3.7+ ( #195 ) ( 025f324 )
1.6.1 (2022-06-06)
Bug Fixes
deps: require protobuf <4.0.0dev ( #185 ) ( 2542e90 )
Documentation
fix changelog header to consistent size ( #186 ) ( 0b7c05e )
1.6.0 (2022-05-05)
Features
AuditConfig for IAM v1 ( 6ce587c )
Bug Fixes
deps: require grpc-google-iam-v1 >=0.12.4 ( 6ce587c )
Documentation
fix type in docstring for map fields ( 6ce587c )
1.5.1 (2022-03-05)
Bug Fixes
deps: require google-api-core>=1.31.5, >=2.3.2 ( #159 ) ( d5511db )
deps: require proto-plus>=1.15.0 ( d5511db )
1.5.0 (2022-02-26)
Features
add api key support ( #145 ) ( a434c2e )
Bug Fixes
resolve DuplicateCredentialArgs error when using credentials_file ( 7b94621 )
1.4.1 (2021-11-01)
Bug Fixes
deps: drop packaging dependency ( 11ee1bf )
deps: require google-api-core >= 1.28.0 ( 11ee1bf )
Documentation
list oneofs in docstring ( 11ee1bf )
1.4.0 (2021-10-11)
Features
add context manager support in client ( #122 ) ( 9ec2297 )
add trove classifier for python 3.10 ( #125 ) ( 6b93726 )
1.3.4 (2021-10-04)
Bug Fixes
improper types in pagers generation ( 578aeef )
1.3.3 (2021-09-24)
Bug Fixes
add ‘dict’ annotation type to ‘request’ ( 51f7055 )
1.3.2 (2021-07-27)
Bug Fixes
enable self signed jwt for grpc ( #101 ) ( 261507e )
Documentation
add Samples section to CONTRIBUTING.rst ( #97 ) ( 05b63b3 )
Miscellaneous Chores
release as 1.3.2 ( #102 ) ( da74027 )
1.3.1 (2021-07-20)
Bug Fixes
deps: pin ‘google-{api,cloud}-core’, ‘google-auth’ to allow 2.x versions ( #96 ) ( a9e5368 )
1.3.0 (2021-07-01)
Features
add always_use_jwt_access ( #86 ) ( 7ff02d6 )
Bug Fixes
disable always_use_jwt_access ( cff1d3e )
disable always_use_jwt_access ( #93 ) ( cff1d3e )
Documentation
include client library documentation in README.rst ( #91 ) ( 3a6999d )
omit mention of Python 2.7 in ‘CONTRIBUTING.rst’ ( #1127 ) ( #82 ) ( 634d7b0 )
1.2.1 (2021-06-16)
Bug Fixes
exclude docs and tests from package ( #79 ) ( f2fc441 )
1.2.0 (2021-05-28)
Features
add from_service_account_info factory and fix sphinx identifiers ( #42 ) ( 95ba269 )
support self-signed JWT flow for service accounts ( a2a6aaf )
Bug Fixes
add async client to %name_%version/init.py ( a2a6aaf )
deps: add packaging requirement ( #75 ) ( 73d8957 )
1.1.1 (2021-02-11)
Bug Fixes
update retry and timeout settings ( #38 ) ( 8dbad86 )
1.1.0 (2020-11-17)
Features
add async client, support credentials_file and scopes client options ( #29 ) ( 4177eb5 )
add mtls support ( #19 ) ( fef622a )
1.0.0 (2020-05-18)
Features
release as production/stable ( #15 ) ( 80a4fed )
Bug Fixes
correct link to docs ( #5 ) ( 3d87965 )
0.1.0 (2020-02-28)
Features
generate v1 ( 61db762 )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
