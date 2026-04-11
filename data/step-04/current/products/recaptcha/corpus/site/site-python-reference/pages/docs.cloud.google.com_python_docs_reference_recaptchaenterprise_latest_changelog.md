---
title: "Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/changelog
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
1.29.0 (latest)
1.28.2
1.27.0
1.26.1
1.25.0
1.24.1
1.23.0
1.22.0
1.21.2
1.20.0
1.19.1
1.18.1
1.17.1
1.16.1
1.15.0
1.14.0
1.13.0
1.12.1
1.11.1
1.10.0
1.9.0
1.8.3
1.7.1
1.6.1
1.5.0
1.4.1
1.3.1
1.2.0
1.1.2
1.0.0
0.4.2
0.3.3
0.2.1
0.1.0
Changelog
PyPI History
1.29.0 (2025-10-20)
Features
Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Bug Fixes
Deprecate credentials_file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def )
1.28.2 (2025-06-11)
Documentation
Update import statement example in README ( dfc2cd6 )
1.28.1 (2025-03-19)
Documentation
[google-cloud-recaptcha-enterprise] fix typo in ( 4247899 )
1.28.0 (2025-03-15)
Features
[google-cloud-recaptcha-enterprise] A new field ja4 is added to message Event ( #13645 ) ( 885dc9c )
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( 7295cbb )
remove setup.cfg configuration for creating universal wheels ( #13659 ) ( 59bfd42 )
Documentation
update documentation ( 885dc9c )
1.27.0 (2025-02-18)
Features
Add REST Interceptors which support reading metadata ( c8e0760 )
Add support for reading selective GAPIC generation methods from service YAML ( c8e0760 )
1.26.1 (2025-01-13)
Documentation
[google-cloud-recaptcha-enterprise] Update docs for FraudPrevention field in CreateAssessment ( #13403 ) ( ee59d69 )
challenge is also returned for INVISIBLE keys ( ee59d69 )
1.26.0 (2024-12-12)
Features
Add support for opt-in debug logging ( 8e6b0cc )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( 8e6b0cc )
Documentation
[google-cloud-recaptcha-enterprise] challenge is also returned for INVISIBLE keys ( #13312 ) ( adea041 )
1.25.0 (2024-11-14)
Features
A new enum Challenge is added ( 511d7cc )
A new field challenge is added to message .google.cloud.recaptchaenterprise.v1.RiskAnalysis ( 511d7cc )
1.24.1 (2024-11-11)
Bug Fixes
disable universe-domain validation ( #13245 ) ( 875f712 )
1.24.0 (2024-10-31)
Features
enable Akamai web application firewall ( 81bf6fe )
support for ListIpOverrides and RemoveIpOverride ( 81bf6fe )
Documentation
minor updates to reference documentation ( 81bf6fe )
1.23.0 (2024-10-24)
Features
Add support for Python 3.13 ( #13209 ) ( 5f2e30d )
1.22.1 (2024-09-03)
Documentation
minor doc fixes ( 7e40c8c )
1.22.0 (2024-08-22)
Features
add express_settings to Key ( 0b90478 )
add AddIpOverride RPC ( 0b90478 )
Documentation
clarify Event.express field ( 0b90478 )
fix billing, quota, and usecase links ( 0b90478 )
1.21.2 (2024-07-30)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( 42c4d04 )
1.21.1 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12869 ) ( e42edbc )
1.21.0 (2024-06-27)
Features
[google-cloud-recaptcha-enterprise] added SMS Toll Fraud assessment ( #12838 ) ( 386499f )
1.20.0 (2024-04-24)
Features
Add Fraud Prevention settings field ( 5c373f6 )
1.19.1 (2024-04-17)
Documentation
[google-cloud-recaptcha-enterprise] fixed the description of ListFirewallPoliciesResponse ( #12580 ) ( acdcb90 )
1.19.0 (2024-03-25)
Features
Add CLOUDFLARE enum to WafService message of firewalls supported by reCAPTCHA Enterprise ( #12498 ) ( ca58b4d )
1.18.1 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12386 ) ( edcad16 )
1.18.0 (2024-02-22)
Features
[google-cloud-recaptcha-enterprise] Add an API method for reordering firewall policies ( #12302 ) ( c48819c )
Bug Fixes
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12308 ) ( 74dabeb )
fix ValueError in test__validate_universe_domain ( 89c1b05 )
1.17.1 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( e75fcf6 )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( e75fcf6 )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( e75fcf6 )
1.17.0 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( 4368029 )
1.16.1 (2024-01-19)
Documentation
[google-cloud-recaptcha-enterprise] update comment for AccountVerificationInfo.username ( #12201 ) ( f7cd400 )
1.16.0 (2023-12-07)
Features
Add support for python 3.12 ( 9a629e1 )
added stable account identifier to related group membership resources, and deprecated hashed identifier field ( f942e71 )
Introduce compatibility with native namespace packages ( 9a629e1 )
Bug Fixes
Require proto-plus >= 1.22.3 ( 9a629e1 )
Use retry_async instead of retry in async client ( 9a629e1 )
Documentation
noted applicable fields as resource identifiers ( f942e71 )
1.15.0 (2023-11-29)
Features
Added AnnotateAssessmentRequest.account_id ( 7d6ce5b )
Added Event.user_info ( 7d6ce5b )
1.14.0 (2023-11-13)
⚠ BREAKING CHANGES
Added required annotations
Bug Fixes
Added required annotations ( e8a00c4 )
Documentation
CreateKeyRequest.display_name and PrivatePasswordLeakVerification.lookup_hash_prefix are now required ( e8a00c4 )
Updated comments explaining if a field is optional or required ( e8a00c4 )
1.13.0 (2023-10-05)
Features
added AndroidKeySettings.support_non_google_app_store_distribution ( 84f4480 )
added Assessment.firewall_policy_assessment, fraud_signals ( 84f4480 )
added FraudPreventionAssessment.behavioral_trust_verdict ( 84f4480 )
added FraudPreventionAssessment.behavioral_trust_verdict ( 84f4480 )
added IOSKeySettings.apple_developer_id ( 84f4480 )
added new fields to Event message ( 84f4480 )
added RiskAnalysis.extended_verdict_reasons ( 84f4480 )
added WafFeature.EXPRESS enum value ( 84f4480 )
added WafService.FASTLY enum value ( 84f4480 )
FirewallPolicy CRUD API ( 84f4480 )
Documentation
formatting of resource names ( 84f4480 )
1.12.2 (2023-09-19)
Documentation
Minor formatting ( 025219f )
1.12.1 (2023-07-05)
Bug Fixes
Add async context manager return types ( #11448 ) ( 4d2c35a )
1.12.0 (2023-03-23)
Features
Add reCAPTCHA Enterprise Fraud Prevention API ( #350 ) ( 5f841d7 )
Documentation
Fix formatting of request arg in docstring ( #352 ) ( a0ab5c3 )
1.11.1 (2023-01-20)
Bug Fixes
Add context manager return types ( 54613d7 )
Documentation
Add documentation for enums ( 54613d7 )
1.11.0 (2023-01-10)
Features
Add support for python 3.11 ( #330 ) ( ed41bb8 )
1.10.0 (2022-12-14)
Features
Add account_verification field to Assessment for MFA ( 2e8b6f2 )
Add support for google.cloud.recaptchaenterprise.__version__ ( faccae1 )
Add typing to proto.Message based class attributes ( faccae1 )
Bug Fixes
Add dict typing for client_options ( faccae1 )
deps: Require google-api-core >=1.34.0, >=2.11.0 ( 2e8b6f2 )
Drop usage of pkg_resources ( 2e8b6f2 )
Fix timeout default values ( 2e8b6f2 )
Documentation
samples: Snippetgen handling of repeated enum field ( faccae1 )
samples: Snippetgen should call await on the operation coroutine before calling result ( 2e8b6f2 )
1.9.0 (2022-10-26)
Features
add annotation reasons REFUND, REFUND_FRAUD, TRANSACTION_ACCEPTED, TRANSACTION_DECLINED and SOCIAL_SPAM ( 1d254d0 )
Add RetrieveLegacySecretKey method ( #311 ) ( 1d254d0 )
1.8.3 (2022-10-07)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #308 ) ( c772e63 )
1.8.2 (2022-10-03)
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #304 ) ( 20ce864 )
1.8.1 (2022-08-11)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #282 ) ( 0499b5a )
deps: require proto-plus >= 1.22.0 ( 0499b5a )
1.8.0 (2022-07-14)
Features
add audience parameter ( b833a31 )
Bug Fixes
deps: require google-api-core>=1.32.0,>=2.8.0 ( #271 ) ( 90479fc )
require python 3.7+ ( #270 ) ( a370851 )
set the right field number for reCAPTCHA private password leak ( #266 ) ( 6632149 )
1.7.1 (2022-06-06)
Bug Fixes
deps: require protobuf <4.0.0dev ( #258 ) ( 56b014a )
Documentation
fix changelog header to consistent size ( #259 ) ( ad6402b )
1.7.0 (2022-05-19)
Features
Add support for Password Check through the private_password_leak_verification field in Assessment ( #233 ) ( 38c7a96 )
introduced WafSettings ( 86096a4 )
Bug Fixes
rename parent to project in SearchRelatedAccountGroupMembershipsRequest ( #227 ) ( 86096a4 )
1.6.1 (2022-03-05)
Bug Fixes
deps: require google-api-core>=1.31.5, >=2.3.2 ( #198 ) ( beee21d )
deps: require proto-plus>=1.15.0 ( beee21d )
1.6.0 (2022-02-28)
Features
add api key support ( #181 ) ( e9935ce )
Bug Fixes
resolve DuplicateCredentialArgs error when using credentials_file ( d5cc843 )
1.5.0 (2022-01-14)
Features
add new reCAPTCHA Enterprise fraud annotations ( #163 ) ( 3c638f9 )
1.4.1 (2021-11-16)
Documentation
samples: added sample and tests for annotate assessment API ( #155 ) ( 353f0ff )
1.4.0 (2021-11-03)
Features
add reCAPTCHA Enterprise account defender API methods ( #146 ) ( 8149df9 )
Documentation
samples: removed assessment name in create_assessment sample ( #147 ) ( f11134d )
1.3.1 (2021-11-01)
Bug Fixes
deps: drop packaging dependency ( 22ed89d )
deps: require google-api-core >= 1.28.0 ( 22ed89d )
Documentation
list oneofs in docstring ( 22ed89d )
1.3.0 (2021-10-14)
Features
add support for python 3.10 ( #137 ) ( fda16a4 )
Documentation
samples: add reCAPTCHA Enterprise code samples ( #112 ) ( 879acf1 )
1.2.0 (2021-10-08)
Features
add context manager support in client ( #131 ) ( 69d2b34 )
1.1.2 (2021-09-30)
Bug Fixes
improper types in pagers generation ( cab9a71 )
1.1.1 (2021-09-24)
Bug Fixes
add ‘dict’ annotation type to ‘request’ ( 7d49e68 )
1.1.0 (2021-09-16)
Features
add GetMetrics and MigrateKey methods to reCAPTCHA enterprise API ( #119 ) ( 6c8bf2f )
1.0.0 (2021-08-03)
Features
bump release level to production/stable ( #105 ) ( fab3e48 )
0.4.2 (2021-07-28)
Bug Fixes
enable self signed jwt for grpc ( #101 ) ( 2a9cba8 )
Documentation
add Samples section to CONTRIBUTING.rst ( #97 ) ( ffcc165 )
Miscellaneous Chores
release as 0.4.2 ( #102 ) ( ff137b0 )
0.4.1 (2021-07-20)
Bug Fixes
deps: pin ‘google-{api,cloud}-core’, ‘google-auth’ to allow 2.x versions ( #96 ) ( dafb540 )
0.4.0 (2021-07-12)
Features
add always_use_jwt_access ( #87 ) ( d0851c8 )
Bug Fixes
disable always_use_jwt_access ( #91 ) ( de8c214 )
Documentation
omit mention of Python 2.7 in ‘CONTRIBUTING.rst’ ( #1127 ) ( #82 ) ( fd4b1b4 ), closes #1126
0.4.0 (2021-07-01)
Features
add always_use_jwt_access ( #87 ) ( d0851c8 )
Bug Fixes
disable always_use_jwt_access ( #91 ) ( de8c214 )
Documentation
omit mention of Python 2.7 in ‘CONTRIBUTING.rst’ ( #1127 ) ( #82 ) ( fd4b1b4 ), closes #1126
0.3.3 (2021-06-16)
Bug Fixes
exclude docs and tests from package ( #79 ) ( 1d39b4b ), closes #74
0.3.2 (2021-06-09)
Documentation
fix package name ( #78 ) ( 6de2981 )
fix package name and package info in README ( #76 ) ( 0e719bb )
0.3.1 (2021-05-28)
Bug Fixes
deps: add packaging requirement ( #68 ) ( 176bbe9 )
0.3.0 (2021-02-08)
Features
add async client, add common resource helpers, add from_service_account_info factory ( #30 ) ( 7f9db72 )
0.2.1 (2020-06-01)
Bug Fixes
corrects link to client library documentation ( #13 ) ( 1ea5be7 ), closes #12
0.2.0 (2020-05-28)
Features
add mtls support and resource path parse methods (via synth) ( #4 ) ( c20fa3f )
0.1.0 (2020-04-20)
Features
generate v1 ( a7da83d )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
