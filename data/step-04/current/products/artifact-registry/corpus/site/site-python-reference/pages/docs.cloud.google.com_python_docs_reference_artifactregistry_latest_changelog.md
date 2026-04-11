---
title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/changelog
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
Version latest keyboard_arrow_down
1.20.0 (latest)
1.19.0
1.18.0
1.17.0
1.16.1
1.15.2
1.14.0
1.13.1
1.12.0
1.11.5
1.10.0
1.9.0
1.8.4
1.7.0
1.6.1
1.5.0
1.4.1
1.3.3
1.2.1
1.1.2
1.0.2
0.5.0
0.4.1
0.3.3
0.2.2
0.1.0
PyPI History
1.20.0 (2026-02-12)
Features
add DIRSUM_SHA256 hash type ( 5371e8e931dfba1d504ac2ffbd48a7f4abdcc158 )
1.19.0 (2026-01-08)
Documentation
update the description of ExportArtifact ( 17cc12897e6afdf3f3131531c50a8226a3f57c0f )
Features
add Fingerprint to Artifact Registry Version resource ( 17cc12897e6afdf3f3131531c50a8226a3f57c0f )
auto-enable mTLS when supported certificates are detected ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
check Python and dependency versions in generated GAPICs ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
1.18.0 (2025-12-04)
Documentation
A comment for enum value ENABLEMENT_CONFIG_UNSPECIFIED in enum EnablementConfig is changed ( 03e69912a61695deefca6ffaae1add8119f026e4 )
A comment for field name in message .google.devtools.artifactregistry.v1.DockerImage is changed ( 03e69912a61695deefca6ffaae1add8119f026e4 )
A comment for field satisfies_pzs in message .google.devtools.artifactregistry.v1.Repository is changed ( 03e69912a61695deefca6ffaae1add8119f026e4 )
A comment for field satisfies_pzi in message .google.devtools.artifactregistry.v1.Repository is changed ( 03e69912a61695deefca6ffaae1add8119f026e4 )
Features
add ExportArtifact API ( 2da5c2afe0241e6dcb33aa9a0e5032012bf63df4 )
add artifact_type field in DockerImage ( 03e69912a61695deefca6ffaae1add8119f026e4 )
add image_manifest field in DockerImage ( 03e69912a61695deefca6ffaae1add8119f026e4 )
add Ruby format in VulnerabilityScanningConfig ( 03e69912a61695deefca6ffaae1add8119f026e4 )
1.17.0 (2025-10-16)
Features
Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Bug Fixes
Deprecate credentials_file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def )
1.16.1 (2025-06-11)
Documentation
Update import statement example in README ( eea9e6f )
1.16.0 (2025-04-12)
Features
add the GoModule and KfpArtifact resources ( 33b1d93 )
Documentation
remove the restriction of the maximum numbers of versions that can be deleted in one BatchDeleteVersions call ( 33b1d93 )
1.15.2 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( 3a85796 )
remove setup.cfg configuration for creating universal wheels ( #13659 ) ( 59bfd42 )
1.15.1 (2025-02-18)
Bug Fixes
deps: Require grpc-google-iam-v1>=0.14.0 ( 4571dff )
1.15.0 (2025-02-12)
Features
Add REST Interceptors which support reading metadata ( b1c3ce8 )
Add support for reading selective GAPIC generation methods from service YAML ( b1c3ce8 )
1.14.0 (2024-12-12)
Features
Add support for opt-in debug logging ( b1dfc55 )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( b1dfc55 )
1.13.1 (2024-11-11)
Bug Fixes
disable universe-domain validation ( #13242 ) ( b479ff8 )
1.13.0 (2024-10-28)
Features
Add Artifact Registry attachment API ( c2d1df7 )
Add Artifact Registry custom remote support ( c2d1df7 )
Add Artifact Registry generic repository support ( c2d1df7 )
Add Artifact Registry rule APIs ( c2d1df7 )
Add Artifact Registry server side resource filtering and sorting ( c2d1df7 )
Add Artifact Registry UpdateFile and DeleteFile APIs ( c2d1df7 )
Documentation
Include max page size for all Artifact Registry APIs ( c2d1df7 )
1.12.0 (2024-10-24)
Features
Add support for Python 3.13 ( #13206 ) ( eb980d5 )
1.11.5 (2024-07-30)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( 6e83a37 )
1.11.4 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12863 ) ( 3e6e423 )
1.11.3 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12381 ) ( 48ae8ab )
1.11.2 (2024-02-22)
Bug Fixes
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12303 ) ( fbb80c3 )
fix ValueError in test__validate_universe_domain ( dd749df )
1.11.1 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( 780c5f1 )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( 780c5f1 )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( 780c5f1 )
1.11.0 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( a0392ee )
1.10.0 (2023-12-07)
Features
Add support for python 3.12 ( ea6cfc2 )
Introduce compatibility with native namespace packages ( ea6cfc2 )
Bug Fixes
Require proto-plus >= 1.22.3 ( ea6cfc2 )
Use retry_async instead of retry in async client ( ea6cfc2 )
1.9.0 (2023-11-02)
Features
add support for cleanup policies ( b9fa436 )
add support for Docker immutable tags ( b9fa436 )
add support for Go and KFP repositories ( b9fa436 )
add support for Physical Zone Separation ( b9fa436 )
add support for virtual and remote repositories ( b9fa436 )
expose the size of the Repository resource ( b9fa436 )
Documentation
mark the create_time and update_time in the Repository resource as output only fields ( b9fa436 )
mark the repository_id and repository fields in the CreateRepository request as required fields ( b9fa436 )
use code font for resource name references ( b9fa436 )
1.8.4 (2023-09-30)
Bug Fixes
make repository and repository_id in CreateRepository required ( 3b8ea3e )
1.8.3 (2023-08-03)
Documentation
Minor formatting ( #11543 ) ( 8cc031e )
1.8.2 (2023-07-05)
Bug Fixes
Add async context manager return types ( #11444 ) ( 9aa301a )
1.8.1 (2023-03-23)
Documentation
Fix formatting of request arg in docstring ( #231 ) ( 5433de8 )
1.8.0 (2023-02-27)
Features
Enable “rest” transport in Python for services supporting numeric enums ( #224 ) ( c06b139 )
1.7.0 (2023-02-04)
Features
Add BatchDeleteVersionMetadata to return version that failed to delete ( bed057d )
Add order_by to ListDockerImages ( bed057d )
Add an API to get and update VPCSC config ( bed057d )
Add format-specific resources MavenArtifact , NpmPackage , KfpArtifact and PythonPackage ( bed057d )
Bug Fixes
Deprecate REDIRECTION_FROM_GCR_IO_FINALIZED ( bed057d )
Make GetFileRequest.name and ListFilesRequest.parent required ( bed057d )
Make Package a resource ( bed057d )
1.6.1 (2023-01-20)
Bug Fixes
Add context manager return types ( 62d61be )
Documentation
Add documentation for enums ( 62d61be )
1.6.0 (2023-01-10)
Features
Add support for python 3.11 ( #214 ) ( 1b68d31 )
1.5.0 (2023-01-03)
Features
Add location methods ( #211 ) ( 2458b5e )
1.4.1 (2022-12-08)
Bug Fixes
deps: Require google-api-core >=1.34.0, >=2.11.0 ( c6e2c56 )
Drop usage of pkg_resources ( c6e2c56 )
Fix timeout default values ( c6e2c56 )
Documentation
samples: Snippetgen should call await on the operation coroutine before calling result ( c6e2c56 )
1.4.0 (2022-11-16)
Features
add support for google.cloud.artifactregistry.__version__ ( 93a383f )
Add typing to proto.Message based class attributes ( 9d151b1 )
Bug Fixes
Add dict typing for client_options ( 93a383f )
deps: require google-api-core >=1.33.2 ( 93a383f )
Documentation
samples: Snippetgen handling of repeated enum field ( 9d151b1 )
1.3.3 (2022-10-07)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #196 ) ( ebb9234 )
1.3.2 (2022-10-03)
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #194 ) ( 903c755 )
1.3.1 (2022-08-11)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #181 ) ( 3a857d7 )
deps: require proto-plus >= 1.22.0 ( 3a857d7 )
1.3.0 (2022-07-16)
Features
add audience parameter ( 340303e )
Bug Fixes
deps: require google-api-core>=1.32.0,>=2.8.0 ( #172 ) ( 340303e )
require python 3.7+ ( #174 ) ( 0c8a55c )
1.2.1 (2022-06-03)
Bug Fixes
deps: require protobuf <4.0.0dev ( #164 ) ( 3f57f9a )
Documentation
fix changelog header to consistent size ( #165 ) ( 57f37c9 )
1.2.0 (2022-04-21)
Features
AuditConfig for IAM v1 ( c22893b )
promote v1beta2 features to v1 ( #138 ) ( 842c107 )
Bug Fixes
deps: require grpc-google-iam-v1 >=0.12.4 ( c22893b )
1.1.2 (2022-03-05)
Bug Fixes
deps: require google-api-core>=1.31.5, >=2.3.2 ( #136 ) ( 9bc4ec5 )
deps: require proto-plus>=1.15.0 ( 9bc4ec5 )
Documentation
more details for ListFilesRequest parent field ( #133 ) ( f4ef78b )
1.1.1 (2022-02-15)
Bug Fixes
deps: remove unused dependency libcst ( #125 ) ( 9980b1e )
resolve DuplicateCredentialArgs error when using credentials_file ( d4329aa )
Documentation
add autogenerated code snippets ( ef8af7a )
add autogenerated code snippets ( #123 ) ( ef8af7a ), closes #65
1.1.0 (2022-01-25)
Features
add api key support ( #119 ) ( d22f2d9 )
add APIs for importing and uploading Apt and Yum artifacts ( #116 ) ( a86d4f1 )
add order_by support for listing versions ( a86d4f1 )
add version policy support for Maven repositories ( a86d4f1 )
Bug Fixes
mark a few resource name fields as required ( a86d4f1 )
1.0.2 (2022-01-07)
Bug Fixes
fix resource pattern ID segment name ( #107 ) ( 254dc73 )
1.0.1 (2021-11-01)
Bug Fixes
deps: drop packaging dependency ( 90e3313 )
deps: require google-api-core >= 1.28.0 ( 90e3313 )
Documentation
list oneofs in docstring ( 90e3313 )
1.0.0 (2021-10-22)
Features
bump release level to production/stable ( #82 ) ( d3705c1 )
Documentation
fix docstring formatting ( #93 ) ( e6c2084 )
0.5.0 (2021-10-11)
Features
add context manager support in client ( #88 ) ( 0f631cc )
add trove classifier for python 3.10 ( #91 ) ( e392f56 )
0.4.1 (2021-09-30)
Bug Fixes
improper types in pagers generation ( 8a6b687 )
0.4.0 (2021-09-24)
Features
add Artifact Registry v1 ( #80 ) ( 43413eb )
set artifactregistry_v1 as the default import ( 43413eb )
Bug Fixes
add ‘dict’ annotation type to ‘request’ ( 43413eb )
0.3.3 (2021-07-27)
Bug Fixes
enable self signed jwt for grpc ( #59 ) ( bb98a8c )
Documentation
add Samples section to CONTRIBUTING.rst ( #55 ) ( 55773fe )
Miscellaneous Chores
release as 0.3.3 ( #60 ) ( b8d7865 )
0.3.2 (2021-07-20)
Bug Fixes
deps: pin ‘google-{api,cloud}-core’, ‘google-auth’ to allow 2.x versions ( #54 ) ( b171295 )
0.3.1 (2021-06-30)
Bug Fixes
disable always_use_jwt_access ( ce910f4 )
disable always_use_jwt_access ( #50 ) ( ce910f4 )
0.3.0 (2021-06-23)
Features
add always_use_jwt_access ( #46 ) ( 247d779 )
Documentation
omit mention of Python 2.7 in ‘CONTRIBUTING.rst’ ( #1127 ) ( #41 ) ( 7ae05ed ), closes #1126
0.2.2 (2021-06-16)
Bug Fixes
exclude docs and tests from package ( #38 ) ( 345496f )
0.2.1 (2021-06-01)
Bug Fixes
deps: add packaging requirement ( #33 ) ( ca2907e )
0.2.0 (2021-05-25)
Features
support self-signed JWT flow for service accounts ( #25 ) ( fade594 )
0.1.0 (2021-03-15)
Features
generate v1beta2 ( 87afc6d )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-10 UTC."],[],[]]
