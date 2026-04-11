---
title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/metastore/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/metastore/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/metastore/latest/changelog
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
1.22.0 (latest)
1.21.0
1.20.0
1.19.0
1.18.3
1.17.0
1.16.1
1.15.5
1.14.0
1.13.0
1.12.0
1.11.0
1.10.1
1.9.1
1.8.0
1.7.0
1.6.3
1.5.1
1.4.1
1.3.1
1.2.0
1.1.2
1.0.0
0.3.3
0.2.2
0.1.0
PyPI History
1.22.0 (2026-03-26)
Features
Allow Protobuf 7.x ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
update image to us-central1-docker.pkg.dev/cloud-sdk-librarian-prod/images-prod/python-librarian-generator@sha256:f5426423676c75008c2135037e7b98f78cbb99f78b3c46fe043b6897be92d836 ( 3654fe76d755dd8db62ece81d5770ec58b3624df )
Bug Fixes
Require Python 3.9 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Require google-api-core >= 2.11.0 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Improve type checking ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
1.21.0 (2026-01-08)
Features
auto-enable mTLS when supported certificates are detected ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
check Python and dependency versions in generated GAPICs ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
1.20.0 (2025-10-16)
Features
Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Bug Fixes
Deprecate credentials_file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def )
1.19.0 (2025-08-06)
Features
add a FooBar API ( 2f16fa5 )
add the VeoTuningSpec ( 2f16fa5 )
Remove private preview label from Model Armor protos ( 2f16fa5 )
Documentation
update comments for rpc BatchCreatePullRequestComments, ResolvePullRequestComments and UnresolvePullRequestComments ( 2f16fa5 )
1.18.3 (2025-06-11)
Documentation
Update import statement example in README ( 3d5bc37 )
1.18.2 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( feb5353 )
remove setup.cfg configuration for creating universal wheels ( #13659 ) ( 59bfd42 )
1.18.1 (2025-02-18)
Bug Fixes
deps: Require grpc-google-iam-v1>=0.14.0 ( 16e14c8 )
1.18.0 (2025-02-12)
Features
Add REST Interceptors which support reading metadata ( e92d527 )
Add support for reading selective GAPIC generation methods from service YAML ( e92d527 )
1.17.0 (2024-12-12)
Features
Add support for opt-in debug logging ( 19ed3be )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( 19ed3be )
1.16.1 (2024-11-11)
Bug Fixes
disable universe-domain validation ( #13242 ) ( b479ff8 )
1.16.0 (2024-10-24)
Features
Add support for Python 3.13 ( #13206 ) ( eb980d5 )
1.15.5 (2024-07-30)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( ba1064f )
1.15.4 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12866 ) ( 40e1810 )
1.15.3 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12383 ) ( 305f43f )
1.15.2 (2024-02-22)
Bug Fixes
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12306 ) ( 1e787f2 )
fix ValueError in test__validate_universe_domain ( dd749df )
1.15.1 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( c721248 )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( c721248 )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( c721248 )
1.15.0 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( #12239 ) ( 8004d15 )
1.14.0 (2023-12-07)
Features
Add support for python 3.12 ( b96013d )
Introduce compatibility with native namespace packages ( b96013d )
Bug Fixes
Require proto-plus >= 1.22.3 ( b96013d )
Use retry_async instead of retry in async client ( b96013d )
1.13.0 (2023-09-30)
Features
added EndpointLocation (v1, v1beta, v1alpha) ( b254665 )
1.12.1 (2023-09-19)
Documentation
Minor formatting ( #11632 ) ( dbee08f )
1.12.0 (2023-07-05)
Features
added Admin Interface (v1) ( 2311f9e )
added BigQuery as a backend metastore (v1) ( 2311f9e )
added gRPC endpoint protocol (v1) ( 2311f9e )
Bug Fixes
Add async context manager return types ( #11445 ) ( 98bddda )
1.11.0 (2023-04-15)
Features
v1: Added Auxiliary Versions Config ( 3035b4c )
v1: Added ScalingConfig ( 3035b4c )
v1alpa: Added Dataplex and BQ metastore types for federation ( 3035b4c )
v1beta: Added Dataplex and BQ metastore types for federation ( 3035b4c )
1.10.1 (2023-03-23)
Bug Fixes
Add service_yaml_parameters to metastore preview Python GAPICs ( #210 ) ( 876451f )
Documentation
Fix formatting of request arg in docstring ( #213 ) ( 9c1d92c )
1.10.0 (2023-03-02)
Features
Enable “rest” transport in Python for services supporting numeric enums ( #205 ) ( b053c20 )
Bug Fixes
Add service_yaml parameters to metastore_py_gapic ( #209 ) ( a395340 )
1.9.1 (2023-01-20)
Bug Fixes
Add context manager return types ( ba28751 )
Documentation
Add documentation for enums ( ba28751 )
1.9.0 (2023-01-10)
Features
Add support for python 3.11 ( #197 ) ( 2a06432 )
1.8.0 (2023-01-04)
Features
Added AlterMetadataResourceLocation API ( d8606c5 )
Added MoveTableToDatabase API ( d8606c5 )
Added QueryMetadata API ( d8606c5 )
Added RemoveIamPolicy API ( d8606c5 )
1.7.0 (2022-12-15)
Features
Add support for google.cloud.metastore.__version__ ( 1c64e1a )
Add typing to proto.Message based class attributes ( 1c64e1a )
Added DatabaseType field ( 1c64e1a )
Added EncryptionConfig field ( 1c64e1a )
Added federation API ( 1c64e1a )
Added NetworkConfig field ( 1c64e1a )
Added TelemetryConfiguration field ( 1c64e1a )
Bug Fixes
Add dict typing for client_options ( 1c64e1a )
deps: Require google-api-core >=1.34.0, >=2.11.0 ( 8cd4a8e )
Drop usage of pkg_resources ( 8cd4a8e )
Fix timeout default values ( 8cd4a8e )
Documentation
Fix formatting for subnetwork field pattern ( #190 ) ( 5527625 )
Fix formatting for subnetwork field pattern ( #191 ) ( ed78105 )
samples: Snippetgen handling of repeated enum field ( 1c64e1a )
samples: Snippetgen should call await on the operation coroutine before calling result ( 8cd4a8e )
1.6.3 (2022-10-07)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #183 ) ( 5a40ff8 )
1.6.2 (2022-09-29)
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #180 ) ( 13d5731 )
1.6.1 (2022-08-11)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #166 ) ( 6851e9f )
deps: require proto-plus >= 1.22.0 ( 6851e9f )
1.6.0 (2022-07-15)
Features
add audience parameter ( ee4c91e )
Bug Fixes
deps: require google-api-core>=1.32.0,>=2.8.0 ( #157 ) ( ee4c91e )
require python 3.7+ ( #159 ) ( 09468bb )
1.5.1 (2022-06-03)
Bug Fixes
deps: require protobuf <4.0.0dev ( #147 ) ( 776fe97 )
Documentation
fix changelog header to consistent size ( #148 ) ( 0f93c4e )
1.5.0 (2022-03-21)
Features
Added additional endTime field for MetadataImports ( 0a768dd )
Added AuxiliaryVersionConfig for configuring the auxiliary hive versions during creation or update of the DPMS instance ( 0a768dd )
Added AVRO DatabaseDumpSpec for importing and exporting Avro files ( 0a768dd )
Added configuration for Dataplex integration ( 0a768dd )
Added DatabaseType field for the type of backing store used ( #122 ) ( 0a768dd )
Added EncryptionConfig which contains information used to configure the Dataproc Metastore service to encrypt customer data at rest (CMEK) ( 0a768dd )
Added NetworkConfig for exposing the DPMS endpoint in multiple subnetworks using PSC (this skips the need for VPC peering) ( 0a768dd )
Added RESTORING status on Backups ( 0a768dd )
Added support for IAM management for metadata resources ( 0a768dd )
Added support to record the services that are restoring the backup ( 0a768dd )
Documentation
formatting improvements ( 0a768dd )
1.4.1 (2022-03-05)
Bug Fixes
deps: require google-api-core>=1.31.5, >=2.3.2 ( #119 ) ( e079039 )
deps: require proto-plus>=1.15.0 ( e079039 )
1.4.0 (2022-02-26)
Features
add api key support ( #105 ) ( f8d7bb8 )
Bug Fixes
resolve DuplicateCredentialArgs error when using credentials_file ( 61baf5c )
Documentation
add generated snippets ( #110 ) ( 30373ff )
1.3.1 (2021-11-01)
Bug Fixes
deps: drop packaging dependency ( 7abadeb )
deps: require google-api-core >= 1.28.0 ( 7abadeb )
Documentation
list oneofs in docstring ( 7abadeb )
1.3.0 (2021-10-13)
Features
add support for python 3.10 ( #86 ) ( 1ef7b30 )
1.2.0 (2021-10-08)
Features
add context manager support in client ( #83 ) ( d6b8569 )
1.1.2 (2021-10-05)
Bug Fixes
improper types in pagers generation ( fd7978b )
1.1.1 (2021-09-24)
Bug Fixes
add ‘dict’ annotation type to ‘request’ ( 63a6c45 )
1.1.0 (2021-08-17)
Features
Added the Backup resource and Backup resource GetIamPolicy/SetIamPolicy to V1 feat: Added the RestoreService method to V1 ( #63 ) ( 483cc6e )
1.0.0 (2021-08-03)
Features
bump release level to production/stable ( #59 ) ( 434ca20 )
0.3.1 (2021-07-26)
Bug Fixes
deps: pin ‘google-{api,cloud}-core’, ‘google-auth’ to allow 2.x versions ( #50 ) ( 091ff2f )
enable self signed jwt for grpc ( #56 ) ( 3f94f5a )
Documentation
add Samples section to CONTRIBUTING.rst ( #51 ) ( c093c12 )
Miscellaneous Chores
release 0.3.1 ( #55 ) ( 2a846dd )
0.3.0 (2021-07-01)
Features
add always_use_jwt_access ( #43 ) ( 75cf2ee )
Bug Fixes
disable always_use_jwt_access ( #47 ) ( 903b08e )
Documentation
omit mention of Python 2.7 in ‘CONTRIBUTING.rst’ ( #1127 ) ( #38 ) ( 9b8c147 ), closes #1126
0.2.2 (2021-06-16)
Bug Fixes
deps: add packaging requirement ( #35 ) ( 922536c )
0.2.1 (2021-06-16)
Bug Fixes
exclude docs and tests from package ( #33 ) ( dfaec68 )
0.2.0 (2021-06-02)
Features
add v1 ( #28 ) ( 4d054d9 )
0.1.0 (2021-03-15)
Features
generate v1alpha ( 2c025f8 )
generate v1beta ( 942ddcd )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
