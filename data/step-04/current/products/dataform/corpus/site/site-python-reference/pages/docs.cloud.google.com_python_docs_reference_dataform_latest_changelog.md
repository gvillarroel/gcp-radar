---
title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/dataform/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/dataform/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/dataform/latest/changelog
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
0.10.0 (latest)
0.9.0
0.8.0
0.7.0
0.6.2
0.5.16
0.4.1
0.3.0
0.2.3
0.1.0
PyPI History
0.10.0 (2026-03-26)
Documentation
A comment for field force in message .google.cloud.dataform.v1.DeleteRepositoryRequest is changed ( 397ae5384b5fa2741d0f479ba7efc1612e1195da )
Features
add folders and teamFolders related changes to v1 ( 397ae5384b5fa2741d0f479ba7efc1612e1195da )
Allow Protobuf 7.x ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Bug Fixes
Require Python 3.9 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Require google-api-core >= 2.11.0 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Improve type checking ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
0.9.0 (2026-02-12)
Documentation
A comment for field force in message .google.cloud.dataform.v1beta1.DeleteRepositoryRequest is changed PiperOrigin-RevId: 868182714 ( 5371e8e931dfba1d504ac2ffbd48a7f4abdcc158 )
Features
Update GCP Client Libraries in v1beta1 to support Folders, TeamFolders, and other relevant APIs The v1beta1 API now includes support for Folders and TeamFolders, allowing users to organize repositories and files hierarchically and manage access controls. New Features: - Added TeamFolder resource and methods: CreateTeamFolder, GetTeamFolder, UpdateTeamFolder, DeleteTeamFolder QueryTeamFolderContents to list folder contents. SearchTeamFolders to search for TeamFolders. - Added Folder resource and methods: CreateFolder, GetFolder, UpdateFolder, DeleteFolder QueryFolderContents to list folder contents. Added MoveFolder to move Folders between TeamFolders, other Folders, or the user root folder. - Added MoveRepository to move Repositories between TeamFolders, Folders, or the user root folder. - Added QueryUserRootContents to list contents of a user’s root folder. Repository resource now includes containing_folder and team_folder_name fields to indicate its location within the folder hierarchy. - IAM methods (GetIamPolicy, SetIamPolicy, TestIamPermissions) now support Folder and TeamFolder resources for access control management ( 5371e8e931dfba1d504ac2ffbd48a7f4abdcc158 )
0.8.0 (2026-01-08)
Features
auto-enable mTLS when supported certificates are detected ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
check Python and dependency versions in generated GAPICs ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
0.7.0 (2025-10-16)
Features
Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Bug Fixes
Deprecate credentials_file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def )
0.6.2 (2025-05-20)
Features
Support adding a workflow action to execute a Data Preparation node ( 8f95f78 )
Documentation
Updated the formatting in some comments in multiple services ( 8f95f78 )
0.6.1 (2025-03-15)
Features
[google-cloud-dataform] Dataform V1 Public APIs ( #13639 ) ( 7828c61 )
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( feb5353 )
remove setup.cfg configuration for creating universal wheels ( #13659 ) ( 59bfd42 )
0.6.0 (2025-03-03)
⚠ BREAKING CHANGES
v1beta1: Response type of method CommitRepositoryChanges is changed from .google.protobuf.Empty to .google.cloud.dataform.v1beta1.CommitRepositoryChangesResponse in service Dataform
v1beta1: Response type of method PullGitCommits is changed from .google.protobuf.Empty to .google.cloud.dataform.v1beta1.PullGitCommitsResponse in service Dataform
v1beta1: Response type of method PushGitCommits is changed from .google.protobuf.Empty to .google.cloud.dataform.v1beta1.PushGitCommitsResponse in service Dataform
v1beta1: Response type of method CommitWorkspaceChanges is changed from .google.protobuf.Empty to .google.cloud.dataform.v1beta1.CommitWorkspaceChangesResponse in service Dataform
v1beta1: Response type of method ResetWorkspaceChanges is changed from .google.protobuf.Empty to .google.cloud.dataform.v1beta1.ResetWorkspaceChangesResponse in service Dataform
v1beta1: Response type of method RemoveDirectory is changed from .google.protobuf.Empty to .google.cloud.dataform.v1beta1.RemoveDirectoryResponse in service Dataform
v1beta1: Response type of method RemoveFileRequest is changed from .google.protobuf.Empty to .google.cloud.dataform.v1beta1.RemoveFileResponse in service Dataform
v1beta1: Response type of method CancelWorkflowInvocation is changed from .google.protobuf.Empty to .google.cloud.dataform.v1beta1.CancelWorkflowInvocationResponse in service Dataform
v1beta1: An existing field bigquery_action is moved in to oneof in message .google.cloud.dataform.v1beta1.WorkflowInvocationAction
Features
v1beta1: Added new field internal_metadata to all resources to export all the metadata information that is used internally to serve the resource ( 4aaf903 )
v1beta1: Moving existing field bigquery_action to oneof in message .google.cloud.dataform.v1beta1.WorkflowInvocationAction to allow adding more actions types such as notebook_action ( 4aaf903 )
v1beta1: Returning commit_sha in the response of method CommitRepositoryChanges ( 4aaf903 )
Bug Fixes
v1beta1: An existing field bigquery_action is moved in to oneof in message .google.cloud.dataform.v1beta1.WorkflowInvocationAction ( 4aaf903 )
v1beta1: Response type of method CancelWorkflowInvocation is changed from .google.protobuf.Empty to .google.cloud.dataform.v1beta1.CancelWorkflowInvocationResponse in service Dataform ( 4aaf903 )
v1beta1: Response type of method CommitRepositoryChanges is changed from .google.protobuf.Empty to .google.cloud.dataform.v1beta1.CommitRepositoryChangesResponse in service Dataform ( 4aaf903 )
v1beta1: Response type of method CommitWorkspaceChanges is changed from .google.protobuf.Empty to .google.cloud.dataform.v1beta1.CommitWorkspaceChangesResponse in service Dataform ( 4aaf903 )
v1beta1: Response type of method PullGitCommits is changed from .google.protobuf.Empty to .google.cloud.dataform.v1beta1.PullGitCommitsResponse in service Dataform ( 4aaf903 )
v1beta1: Response type of method PushGitCommits is changed from .google.protobuf.Empty to .google.cloud.dataform.v1beta1.PushGitCommitsResponse in service Dataform ( 4aaf903 )
v1beta1: Response type of method RemoveDirectory is changed from .google.protobuf.Empty to .google.cloud.dataform.v1beta1.RemoveDirectoryResponse in service Dataform ( 4aaf903 )
v1beta1: Response type of method RemoveFileRequest is changed from .google.protobuf.Empty to .google.cloud.dataform.v1beta1.RemoveFileResponse in service Dataform ( 4aaf903 )
v1beta1: Response type of method ResetWorkspaceChanges is changed from .google.protobuf.Empty to .google.cloud.dataform.v1beta1.ResetWorkspaceChangesResponse in service Dataform ( 4aaf903 )
Documentation
v1beta1: Adds known limitations on several methods such as UpdateRepository , UpdateReleaseConfig and UpdateWorkflowConfig ( 4aaf903 )
v1beta1: Explained the effect of field page_token on the pagination in several messages ( 4aaf903 )
v1beta1: several comments reformatted ( 4aaf903 )
0.5.16 (2025-02-18)
Bug Fixes
deps: Require grpc-google-iam-v1>=0.14.0 ( 16e14c8 )
0.5.15 (2025-02-12)
Features
Add REST Interceptors which support reading metadata ( e92d527 )
Add support for reading selective GAPIC generation methods from service YAML ( e92d527 )
0.5.14 (2024-12-12)
Features
Add support for opt-in debug logging ( 19ed3be )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( 19ed3be )
0.5.13 (2024-10-31)
Bug Fixes
disable universe-domain validation ( 53c951e )
0.5.12 (2024-10-24)
Features
Add support for Python 3.13 ( 6252476 )
0.5.11 (2024-07-30)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( ba1064f )
0.5.10 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12865 ) ( 7f9dedb )
0.5.9 (2024-03-05)
Bug Fixes
deps: Exclude google-auth 2.24.0 and 2.25.0 ( #12383 ) ( 305f43f )
0.5.8 (2024-02-22)
Bug Fixes
[Many APIs] fix ValueError in test__validate_universe_domain ( #12282 ) ( b985096 )
deps: [Many APIs] Require google-api-core&gt;=1.34.1 ( #12305 ) ( 2aa7f17 )
0.5.7 (2024-02-06)
Bug Fixes
Add google-auth as a direct dependency ( f3db074 )
Add staticmethod decorator to _get_client_cert_source and _get_api_endpoint ( f3db074 )
Resolve AttributeError ‘Credentials’ object has no attribute ‘universe_domain’ ( f3db074 )
0.5.6 (2024-02-01)
Features
Allow users to explicitly configure universe domain ( #12239 ) ( 8004d15 )
0.5.5 (2023-12-07)
Features
Add support for python 3.12 ( b96013d )
Introduce compatibility with native namespace packages ( b96013d )
Bug Fixes
Require proto-plus >= 1.22.3 ( b96013d )
Use retry_async instead of retry in async client ( b96013d )
0.5.4 (2023-11-02)
Features
Support custom service account repository configuration ( 13b57e4 )
Support for ReleaseConfigs ( 13b57e4 )
Support for WorkflowConfigs ( 13b57e4 )
Support labels on repositories ( 13b57e4 )
Support new ComputeRepositoryAccessTokenStatus repository method ( 13b57e4 )
Support new first-party repository methods for committing, listing/reading files, and fetching history ( 13b57e4 )
Support NPMRC environment variables ( 13b57e4 )
Support SSH based git authentication configuration ( 13b57e4 )
Support workspace compilation override fields ( 13b57e4 )
Bug Fixes
rearrange several messages, thus changing field types ( 13b57e4 )
Documentation
several comments reformatted ( 13b57e4 )
0.5.3 (2023-09-19)
Documentation
Minor formatting ( 9487380 )
0.5.2 (2023-07-05)
Bug Fixes
Add async context manager return types ( #11445 ) ( 98bddda )
0.5.1 (2023-03-23)
Documentation
Fix formatting of request arg in docstring ( #54 ) ( c38ec22 )
0.5.0 (2023-02-27)
Features
Enable “rest” transport in Python for services supporting numeric enums ( #49 ) ( 403b246 )
0.4.1 (2023-01-20)
Bug Fixes
Add context manager return types ( c546812 )
Documentation
Add documentation for enums ( c546812 )
0.4.0 (2023-01-10)
Features
Add support for python 3.11 ( #40 ) ( b8f6d78 )
0.3.0 (2022-12-15)
Features
Add support for google.cloud.dataform.__version__ ( fef5a2c )
Add typing to proto.Message based class attributes ( fef5a2c )
Bug Fixes
Add dict typing for client_options ( fef5a2c )
deps: Require google-api-core >=1.34.0, >=2.11.0 ( b64c01a )
Drop usage of pkg_resources ( b64c01a )
Fix timeout default values ( b64c01a )
Documentation
samples: Snippetgen handling of repeated enum field ( fef5a2c )
samples: Snippetgen should call await on the operation coroutine before calling result ( b64c01a )
0.2.3 (2022-10-07)
Bug Fixes
deps: Allow protobuf 3.19.5 ( #30 ) ( b070f6e )
0.2.2 (2022-09-29)
Bug Fixes
deps: Require protobuf >= 3.20.2 ( #28 ) ( fb846e5 )
0.2.1 (2022-08-15)
Bug Fixes
deps: allow protobuf < 5.0.0 ( #12 ) ( ddde619 )
deps: require proto-plus >= 1.22.0 ( ddde619 )
0.2.0 (2022-07-26)
Features
generate v1beta1 ( 63b545e )
Bug Fixes
remove v1alpha2 ( 63b545e )
0.1.0 (2022-07-08)
Features
generate v1alpha2 ( bb0d40d )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
