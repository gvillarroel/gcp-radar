---
title: "Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/changelog
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
3.35.0 (latest)
3.34.0
3.33.0
3.32.0
3.31.3
3.30.0
3.29.0
3.28.0
3.27.1
3.26.0
3.25.0
3.24.2
3.23.3
3.22.0
3.21.0
3.20.1
3.19.0
3.18.0
3.17.1
3.16.0
3.15.0
3.14.0
3.13.0
3.12.0
3.11.1
3.10.0
3.9.3
3.8.3
3.7.1
3.6.0
3.5.2
3.4.0
3.3.2
3.2.1
3.1.1
3.0.2
2.0.2
1.1.2
1.0.0
0.1.0
Changelog
PyPI History
3.35.0 (2026-01-08)
Features
auto-enable mTLS when supported certificates are detected ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
check Python and dependency versions in generated GAPICs ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
3.34.0 (2025-12-04)
Features
Update GCB with latest proto changes ( 2da5c2afe0241e6dcb33aa9a0e5032012bf63df4 )
3.33.0 (2025-10-16)
Features
Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Bug Fixes
Deprecate credentials_file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def )
3.32.0 (2025-08-29)
Features
Add option to enable nested virtualization if available ( 47981a8 )
Documentation
Update comments for machine_type and disk_size_gb ( 47981a8 )
3.31.3 (2025-07-26)
Documentation
[google-cloud-build] Updated Private Service Connect IP ranges when route_all_traffic is false ( #14149 ) ( 7bbeba4 )
3.31.2 (2025-06-11)
Documentation
Update import statement example in README ( 8697120 )
3.31.1 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( 1e43e75 )
remove setup.cfg configuration for creating universal wheels ( #13659 ) ( 59bfd42 )
3.31.0 (2025-02-18)
Features
Add option to enable fetching dependencies ( 3fe8899 )
Support for git proxy setup ( 3fe8899 )
Bug Fixes
deps: Require grpc-google-iam-v1>=0.14.0 ( 3fe8899 )
Documentation
Updates to proto message comments ( 3fe8899 )
3.30.0 (2025-02-12)
Features
Add REST Interceptors which support reading metadata ( e22e2bd )
Add support for reading selective GAPIC generation methods from service YAML ( e22e2bd )
3.29.0 (2025-01-13)
Features
[google-cloud-build] Add GoModule to Artifact and Results messages and new GO_MODULE_H1 hash type ( #13416 ) ( 8a3a6d6 )
[google-cloud-build] Add option to enable structured logging ( #13430 ) ( dc7d7f2 )
3.28.0 (2024-12-12)
Features
Add support for opt-in debug logging ( e31cbb0 )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( e31cbb0 )
3.27.1 (2024-11-11)
Bug Fixes
disable universe-domain validation ( #13242 ) ( b479ff8 )
3.27.0 (2024-10-28)
Features
[google-cloud-build] Add PrivateServiceConnect option to WorkerPool ( #13221 ) ( 629b927 )
3.26.0 (2024-10-24)
Features
Add support for Python 3.13 ( #13206 ) ( eb980d5 )
3.25.0 (2024-09-23)
Features
Add LEGACY_BUCKET option to DefaultLogsBucketBehavior ( e889809 )
Documentation
Sanitize docs ( e889809 )
3.24.2 (2024-07-30)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( a6f7356 )
3.24.1 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12865 ) ( 7f9dedb )
3.24.0 (2024-03-22)
Features
Add Bitbucket Data Center Config and Bitbucket Cloud config for Cloud Build Repositories ( 6994587 )
3.23.3 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12382 ) ( d5db265 )
3.23.2 (2024-02-22)
Bug Fixes
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12304 ) ( c52e0cd )
fix ValueError in test__validate_universe_domain ( dd749df )
3.23.1 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( 8465244 )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( 8465244 )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( 8465244 )
3.23.0 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( #12238 ) ( 8701267 )
3.22.0 (2023-12-07)
Features
Add support for python 3.12 ( 0d1a592 )
Introduce compatibility with native namespace packages ( 0d1a592 )
Bug Fixes
Require proto-plus >= 1.22.3 ( 0d1a592 )
Use retry_async instead of retry in async client ( 0d1a592 )
3.21.0 (2023-11-02)
Features
Add optional field “SourceFetcher” to choose source fetcher tool ( #11965 ) ( bf00c56 )
3.20.1 (2023-10-09)
Documentation
Minor formatting ( #433 ) ( 165c6e7 )
3.20.0 (2023-08-08)
Features
Add automap_substitutions flag to use substitutions as envs in Cloud Build ( a1e03be )
Add git_file_source and git_repo_source to build_trigger ( a1e03be )
Add update_mask to UpdateBuildTriggerRequest proto ( a1e03be )
3.19.0 (2023-07-17)
Features
Add routing information in Cloud Build GRPC clients ( #419 ) ( d94aabd )
3.18.0 (2023-07-10)
Features
Added e2-medium machine type ( #415 ) ( 9880460 )
3.17.1 (2023-07-04)
Bug Fixes
Add async context manager return types ( #413 ) ( 794de7a )
3.17.0 (2023-06-29)
Features
Add GitLabConfig and fetchGitRefs for Cloud Build Repositories ( #412 ) ( f5b1b42 )
Add repositoryevent to buildtrigger ( #409 ) ( a7d5ed3 )
3.16.0 (2023-04-18)
Features
Add NpmPackages to Artifact and Results messages and new SHA512 hash type ( 95ebbce )
Add PeeredNetworkIpRange to NetworkConfigs message ( 95ebbce )
Documentation
Various doc updates ( 95ebbce )
3.15.0 (2023-04-17)
Features
v1: Update third party clodubuild.proto library to include git_source ( #400 ) ( 4ae6238 )
3.14.0 (2023-03-23)
Features
Add DefaultLogsBucketBehavior to BuildOptions ( #391 ) ( 599c938 )
Documentation
Fix formatting of request arg in docstring ( #397 ) ( 1c7725f )
3.13.0 (2023-02-17)
Features
Enable “rest” transport in Python for services supporting numeric enums ( 0c4d84f )
Bug Fixes
Remove empty v2.CloudBuild definition ( 0c4d84f )
3.12.0 (2023-02-04)
Features
Client libraries for Cloud Build Repositories (preview) ( #376 ) ( 9b53646 )
3.11.1 (2023-01-20)
Bug Fixes
Add context manager return types ( 51b64ba )
Documentation
Add documentation for enums ( 51b64ba )
3.11.0 (2023-01-10)
Features
Add support for python 3.11 ( #367 ) ( 40e3315 )
3.10.0 (2022-12-15)
Features
Add allow_failure, exit_code, and allow_exit_code to BuildStep message ( #351 ) ( 0ef62e5 )
Add support for google.cloud.devtools.cloudbuild.__version__ ( f2962f8 )
Add typing to proto.Message based class attributes ( f2962f8 )
Integration of Cloud Build with Artifact Registry ( f2962f8 )
Bug Fixes
Add dict typing for client_options ( f2962f8 )
deps: Require google-api-core >=1.34.0, >=2.11.0 ( 601b46c )
Drop usage of pkg_resources ( 601b46c )
Fix timeout default values ( 601b46c )
Documentation
samples: Snippetgen handling of repeated enum field ( f2962f8 )
samples: Snippetgen should call await on the operation coroutine before calling result ( 601b46c )
3.9.3 (2022-10-07)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #346 ) ( ea6537c )
3.9.2 (2022-10-03)
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #342 ) ( c43b994 )
3.9.1 (2022-08-11)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #319 ) ( db1e8be )
deps: require proto-plus >= 1.22.0 ( db1e8be )
3.9.0 (2022-07-16)
Features
add audience parameter ( f019b54 )
Bug Fixes
deps: require google-api-core>=1.32.0,>=2.8.0 ( #306 ) ( f019b54 )
require python 3.7+ ( #308 ) ( 5e52f5c )
3.8.3 (2022-06-03)
Bug Fixes
deps: require protobuf <4.0.0dev ( #293 ) ( cc1bd84 )
Documentation
fix changelog header to consistent size ( #294 ) ( 057a06d )
3.8.2 (2022-05-05)
Documentation
fix type in docstring for map fields ( 3a4be49 )
3.8.1 (2022-03-05)
Bug Fixes
deps: require google-api-core>=1.31.5, >=2.3.2 ( #239 ) ( d2d9c83 )
deps: require proto-plus>=1.15.0 ( d2d9c83 )
3.8.0 (2022-02-14)
Features
add api key support ( #222 ) ( 9c62e7e )
Bug Fixes
resolve DuplicateCredentialArgs error when using credentials_file ( 2af2b18 )
3.7.1 (2021-11-05)
Bug Fixes
deps: require google-api-core >= 1.28.0, drop packaging dep ( f3fb436 )
Documentation
list oneofs in docstring ( f3fb436 )
3.7.0 (2021-10-13)
Features
add support for python 3.10 ( #189 ) ( 0f2e580 )
3.6.0 (2021-10-11)
Features
add context manager support in client ( #184 ) ( 7ac092c )
3.5.2 (2021-09-30)
Bug Fixes
improper types in pagers generation ( f56eed5 )
3.5.1 (2021-09-24)
Bug Fixes
add ‘dict’ annotation type to ‘request’ ( 925a436 )
3.5.0 (2021-08-27)
Features
add script field to BuildStep message ( #154 ) ( 8336413 )
Update cloudbuild proto with the service_account for BYOSA Triggers. ( #155 ) ( e18dbee )
3.4.0 (2021-08-20)
Features
Add ability to configure BuildTriggers to create Builds that require approval before executing and ApproveBuild API to approve or reject pending Builds ( #147 ) ( 0ba4e0d )
3.3.2 (2021-07-28)
Documentation
Add a new build phase SETUPBUILD for timing information ( #142 ) ( eb23c8d )
3.3.1 (2021-07-24)
Features
add a WorkerPools API ( #129 ) ( 2ea98bd )
add Samples section to CONTRIBUTING.rst ( #131 ) ( 7593c96 )
Implementation of Build Failure Info: - Added message FailureInfo field ( #132 ) ( 76564e8 )
Bug Fixes
deps: pin ‘google-{api,cloud}-core’, ‘google-auth’ to allow 2.x versions ( #130 ) ( e92b7a2 )
enable self signed jwt for grpc ( #139 ) ( 89f7931 )
Miscellaneous Chores
release as 3.3.1 ( #136 ) ( 5d6e342 )
3.3.0 (2021-06-30)
Features
add always_use_jwt_access ( #118 ) ( 6414a3b )
Bug Fixes
disable always_use_jwt_access ( #123 ) ( c1c9608 )
Documentation
omit mention of Python 2.7 in ‘CONTRIBUTING.rst’ ( #1127 ) ( #112 ) ( e2420f8 ), closes #1126
3.2.1 (2021-05-16)
Bug Fixes
deps: add packaging requirement ( #101 ) ( 9563889 )
3.2.0 (2021-04-01)
Features
Add COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY for corresponding comment control behavior with triggered builds. ( df8ddd0 )
Add E2_HIGHCPU_8 and E2_HIGHCPU_32 machine types. ( df8ddd0 )
Add ReceiveTriggerWebhook for webhooks activating specific triggers. ( df8ddd0 )
Add SecretManager -related resources and messages for corresponding integration. ( #73 ) ( df8ddd0 )
Bug Fixes
Specify build as the body of a CreateBuild call. The Cloud Build API has always assumed this, but now we are actually specifying it. ( df8ddd0 )
Documentation
Add $PROJECT_NUMBER as a substitution variable. ( df8ddd0 )
Clarify lifetime/expiration behavior around ListBuilds page tokens. ( df8ddd0 )
Update field docs on required-ness behavior and fix typos. ( df8ddd0 )
3.1.1 (2021-03-26)
Documentation
Adding samples ( #69 ) ( 9f35e43 )
3.1.0 (2021-03-23)
Features
add from_service_account_info ( #52 ) ( 580a959 )
3.0.2 (2021-02-19)
Documentation
update python contributing guide ( #63 ) ( f199171 )
3.0.1 (2021-02-08)
Bug Fixes
remove client recv msg limit ( a1727c3 )
3.0.0 (2020-11-04)
⚠ BREAKING CHANGES
rename fields that conflict with builtins ( #29 ) ( 3b27cc3 )
StorageSource.object -> StorageSource.object_
RepoSource.dir -> RepoSource.dir_
BuildStep.dir -> BuildStep.dir_
Hash.type -> Hash.type_
Features
add new build message fields ( #29 ) ( 3b27cc3 )
service_account , which is available to members of our closed alpha
STACKDRIVER_ONLY and CLOUD_LOGGING_ONLY logging modes
dynamic_substitutions option
2.0.0 (2020-07-23)
⚠ BREAKING CHANGES
migrate to use microgenerator (#23)
Features
migrate to use microgenerator ( #23 ) ( f52a799 )
1.1.0 (2020-06-30)
Features
add time-to-live in a queue for builds ( #19 ) ( d30aba7 )
1.0.0 (2020-02-28)
Features
bump library release level to GA ( #8 ) ( f6e5c3b )
0.1.0
11-07-2019 10:48 PST
Note : This library is incompatible with google-cloud-containeranalysis<0.3.1 . Please upgrade to google-cloud-containeranalysis>=0.3.1 to use this library.
New Features
Initial generation of Cloud Build v1 ( #9510 ).
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
