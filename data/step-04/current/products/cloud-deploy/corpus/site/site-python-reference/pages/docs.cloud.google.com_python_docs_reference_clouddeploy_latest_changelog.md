---
title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/clouddeploy/latest/changelog
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
2.10.0 (latest)
2.9.0
2.8.0
2.7.1
2.6.3
2.5.0
2.4.1
2.3.0
2.2.0
2.1.0
2.0.0
1.19.1
1.18.1
1.17.3
1.16.0
1.15.0
1.14.0
1.13.0
1.12.0
1.11.1
1.10.1
1.9.0
1.8.0
1.7.0
1.6.1
1.5.0
1.4.1
1.3.1
1.2.1
1.1.1
1.0.0
0.3.2
0.2.0
0.1.1
PyPI History
2.10.0 (2026-03-26)
Features
Allow Protobuf 7.x ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
update image to us-central1-docker.pkg.dev/cloud-sdk-librarian-prod/images-prod/python-librarian-generator@sha256:f5426423676c75008c2135037e7b98f78cbb99f78b3c46fe043b6897be92d836 ( 3654fe76d755dd8db62ece81d5770ec58b3624df )
Bug Fixes
Require Python 3.9 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Require google-api-core >= 2.11.0 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Improve type checking ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
2.9.0 (2026-01-08)
Features
auto-enable mTLS when supported certificates are detected ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
check Python and dependency versions in generated GAPICs ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
2.8.0 (2025-10-16)
Features
Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Bug Fixes
Deprecate credentials_file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def )
2.7.1 (2025-05-08)
Bug Fixes
correct pattern of unused resource definition, Revision ( fe6f95f )
Documentation
Comments updated for fields in several different resources ( fe6f95f )
2.7.0 (2025-04-12)
Features
Add resource definition for Revision ( 831dd1d )
Documentation
Typos fixes and small improvements ( 831dd1d )
2.6.3 (2025-03-21)
Documentation
[google-cloud-deploy] fix typo in comments ( #13694 ) ( 00baa06 )
2.6.2 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( feb5353 )
remove setup.cfg configuration for creating universal wheels ( #13659 ) ( 59bfd42 )
2.6.1 (2025-02-18)
Bug Fixes
deps: Require grpc-google-iam-v1>=0.14.0 ( 16e14c8 )
2.6.0 (2025-02-12)
Features
Add REST Interceptors which support reading metadata ( e92d527 )
Add support for reading selective GAPIC generation methods from service YAML ( e92d527 )
Documentation
Minor documentation improvements ( 3e64234 )
2.5.0 (2024-12-12)
Features
A new field dns_endpoint is added to message .google.cloud.deploy.v1.GkeCluster ( a33d01b )
Add support for opt-in debug logging ( 19ed3be )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( 19ed3be )
Documentation
skaffold_version field is no longer explicitly marked as optional ( d26c55b )
A comment for field internal_ip in message .google.cloud.deploy.v1.GkeCluster is changed ( a33d01b )
A comment for field requested_cancellation in message .google.cloud.deploy.v1.OperationMetadata is changed ( a33d01b )
A comment for field skaffold_version in message .google.cloud.deploy.v1.Release is changed ( a33d01b )
documentation improvements ( d26c55b )
2.4.1 (2024-11-21)
Documentation
minor documentation updates ( d64e75a )
2.4.0 (2024-11-14)
Features
A new field timed_promote_release_condition is added to message .google.cloud.deploy.v1.AutomationRuleCondition ( f7470ad )
A new field timed_promote_release_operation is added to message .google.cloud.deploy.v1.AutomationRun ( f7470ad )
A new field timed_promote_release_rule is added to message .google.cloud.deploy.v1.AutomationRule ( f7470ad )
A new message TimedPromoteReleaseCondition is added ( f7470ad )
A new message TimedPromoteReleaseOperation is added ( f7470ad )
A new message TimedPromoteReleaseRule is added ( f7470ad )
Documentation
A comment for field target_id in message .google.cloud.deploy.v1.AutomationRun is changed ( f7470ad )
2.3.0 (2024-10-31)
Features
added new fields for the Automation Repair rule ( 5bad720 )
added route destination related fields to Gateway service mesh message ( 5bad720 )
Bug Fixes
disable universe-domain validation ( 53c951e )
2.2.0 (2024-10-24)
Features
Add support for Python 3.13 ( #13202 ) ( 5b1f2f3 )
2.1.0 (2024-10-08)
Features
added support for deploy policies ( bbe5daf )
Documentation
Minor documentation updates ( bbe5daf )
2.0.1 (2024-08-08)
Documentation
very minor documentation updates ( 477c8e4 )
2.0.0 (2024-07-30)
⚠ BREAKING CHANGES
Remove an API that was mistakenly made public
Features
[google-cloud-deploy] added support for deploy policies ( 40a5c2a )
[google-cloud-deploy] added support for new custom target type and deploy policy platform logs ( 40a5c2a )
Add support for different Pod selector labels when doing canaries ( cf7022d )
added support for configuring a proxy_url to a Kubernetes server ( 40a5c2a )
Bug Fixes
Remove an API that was mistakenly made public ( cf7022d )
Retry and timeout values do not propagate in requests during pagination ( 52db52e )
Retry and timeout values do not propagate in requests during pagination ( ba1064f )
Documentation
small corrections to Cloud Deploy API documentation ( 40a5c2a )
1.19.1 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12866 ) ( 40e1810 )
1.19.0 (2024-05-16)
Features
[google-cloud-deploy] add Skaffold verbose support to Execution Environment properties ( #12701 ) ( 03c7b0c )
1.18.1 (2024-05-07)
Documentation
small corrections to Cloud Deploy API documentation ( dbe7988 )
1.18.0 (2024-04-22)
Features
add Skaffold remote config support for GCB repos ( bd918e6 )
Documentation
clarified related comments ( bd918e6 )
1.17.3 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12384 ) ( c69966f )
1.17.2 (2024-02-22)
Bug Fixes
[Many APIs] fix ValueError in test__validate_universe_domain ( #12282 ) ( b985096 )
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12306 ) ( 1e787f2 )
1.17.1 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( c721248 )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( c721248 )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( c721248 )
1.17.0 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( #12239 ) ( 8004d15 )
1.16.0 (2024-01-12)
Features
Add stable cutback duration configuration to the k8s gateway service mesh deployment strategy ( e68b735 )
Updated logging protos with new fields ( e68b735 )
Documentation
Fixed a number of comments ( e68b735 )
1.15.0 (2023-12-07)
Features
Add custom target type support ( f4938c0 )
Add revision tagging for one of the Cloud Run deployment strategies ( f4938c0 )
Add support for python 3.12 ( b96013d )
Introduce compatibility with native namespace packages ( b96013d )
Bug Fixes
Require proto-plus >= 1.22.3 ( b96013d )
Use retry_async instead of retry in async client ( b96013d )
Documentation
Fixed a number of comments. ( f4938c0 )
1.14.0 (2023-11-02)
Features
add Automation API and Rollback API ( 9748909 )
Documentation
small documentation updates ( 9748909 )
1.13.0 (2023-11-02)
Features
added platform log RolloutUpdateEvent ( #11853 ) ( b709075 )
1.12.1 (2023-09-19)
Documentation
Minor formatting ( #11632 ) ( dbee08f )
1.12.0 (2023-08-03)
Features
added support for predeploy and postdeploy actions ( #11529 ) ( cd98cdb )
1.11.1 (2023-07-20)
Documentation
small documentation updates ( #11499 ) ( cca7184 )
1.11.0 (2023-07-11)
Features
added support routeUpdateWaitTime field for Deployment Strategies ( #11478 ) ( c1ebd34 )
1.10.1 (2023-07-05)
Bug Fixes
Add async context manager return types ( #11445 ) ( 98bddda )
1.10.0 (2023-06-21)
Features
Add deploy parameters for cloud deploy ( 1fcd772 )
Add support for disabling Pod overprovisioning in the progressive deployment strategy configuration for a Kubernetes Target ( 1fcd772 )
1.9.0 (2023-05-25)
Features
Added support for DeployArtifacts ( 3c6733e )
Added support for in cluster verification ( 3c6733e )
1.8.0 (2023-03-24)
Features
Added supported for Cloud Deploy Progressive Deployment Strategy ( f8f2a5e )
Documentation
Deprecate TYPE_RENDER_STATUES_CHANGE, use RELEASE_RENDER log type instead ( f8f2a5e )
Fix formatting of request arg in docstring ( f8f2a5e )
1.7.0 (2023-02-16)
Features
Enable “rest” transport in Python for services supporting numeric enums ( #155 ) ( 3d6d5fe )
1.6.1 (2023-01-20)
Bug Fixes
Add context manager return types ( 24facad )
Documentation
Add documentation for enums ( 24facad )
1.6.0 (2023-01-10)
Features
Add support for python 3.11 ( #147 ) ( 13de673 )
1.5.0 (2022-12-15)
Features
Add support for google.cloud.deploy.__version__ ( 7e8512a )
Add typing to proto.Message based class attributes ( 7e8512a )
Bug Fixes
Add dict typing for client_options ( 7e8512a )
deps: Require google-api-core >=1.34.0, >=2.11.0 ( 2e193c3 )
Drop usage of pkg_resources ( 2e193c3 )
Fix timeout default values ( 2e193c3 )
Documentation
samples: Snippetgen handling of repeated enum field ( 7e8512a )
samples: Snippetgen should call await on the operation coroutine before calling result ( 2e193c3 )
1.4.1 (2022-10-07)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #137 ) ( 045381a )
1.4.0 (2022-09-29)
Features
Publish new JobRun resource and associated methods for Google Cloud Deploy ( #133 ) ( 03ab410 )
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #135 ) ( c271ac1 )
1.3.1 (2022-08-11)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #118 ) ( 8afd6d3 )
deps: require proto-plus >= 1.22.0 ( 8afd6d3 )
1.3.0 (2022-07-14)
Features
add audience parameter ( 580906e )
Bug Fixes
deps: require google-api-core>=1.32.0,>=2.8.0 ( #109 ) ( 580906e )
require python 3.7+ ( #111 ) ( 5d60fe9 )
1.2.1 (2022-06-03)
Bug Fixes
deps: require protobuf <4.0.0dev ( #99 ) ( 5f58f57 )
Documentation
fix changelog header to consistent size ( #100 ) ( d13fd2d )
1.2.0 (2022-05-06)
Features
Add support for Anthos worker pool ( #61 ) ( f5105a4 )
1.1.1 (2022-03-05)
Bug Fixes
deps: require google-api-core>=1.31.5, >=2.3.2 ( #49 ) ( 248b59b )
1.1.0 (2022-02-26)
Features
add api key support ( #35 ) ( aaa957f )
Bug Fixes
resolve DuplicateCredentialArgs error when using credentials_file ( 9bd690d )
1.0.0 (2021-11-01)
Features
bump release level to production/stable ( #3 ) ( 8bf3167 )
Bug Fixes
deps: drop packaging dependency ( 17baf34 )
deps: require google-api-core >= 1.28.0 ( 17baf34 )
Documentation
list oneofs in docstring ( 17baf34 )
0.3.0 (2021-10-18)
Features
add trove classifier for python 3.10 ( #12 ) ( 4838541 )
Documentation
fix docstring formatting ( #16 ) ( 27d0cbe )
0.2.0 (2021-10-08)
Features
add context manager support in client ( #9 ) ( bdcf454 )
0.1.1 (2021-09-30)
Bug Fixes
improper types in pagers generation ( 699cbdc )
0.1.0 (2021-09-27)
Features
generate v1 ( 7435abf )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
