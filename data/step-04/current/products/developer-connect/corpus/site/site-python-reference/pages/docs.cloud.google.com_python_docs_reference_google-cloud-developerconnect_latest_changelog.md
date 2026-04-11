---
title: "Changelog \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/changelog
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/google-cloud-developerconnect/latest/changelog
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
0.5.0 (latest)
0.4.0
0.3.0
0.2.0
0.1.10
PyPI History
0.5.0 (2026-03-26)
Features
Allow Protobuf 7.x ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Bug Fixes
Require Python 3.9 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Require google-api-core >= 2.11.0 ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
Improve type checking ( 1eb7c268482e55971966e284dac2cbeb903adcbb )
0.4.0 (2026-02-26)
Documentation
Updated description for google.cloud.location.Locations.ListLocations in YAML ( e40bfd4df5e3ddfcc9d9b187f39cfadf58aafe0c )
Corrected typos in comments for google.cloud.developerconnect.v1.insights.InsightsConfig and google.cloud.developerconnect.v1.insights.ArtifactConfig ( e40bfd4df5e3ddfcc9d9b187f39cfadf58aafe0c )
Updated comments to include regional secret patterns for SecretManager fields in GitHubConfig , OAuthCredential , UserCredential , GitLabConfig , GitLabEnterpriseConfig , BitbucketDataCenterConfig , and BitbucketCloudConfig ( e40bfd4df5e3ddfcc9d9b187f39cfadf58aafe0c )
Updated comment for CreateGitRepositoryLink RPC in google.cloud.developerconnect.v1.DeveloperConnect ( e40bfd4df5e3ddfcc9d9b187f39cfadf58aafe0c )
Features
Add Secure Source Manager and Generic HTTP Endpoint connection types ( e40bfd4df5e3ddfcc9d9b187f39cfadf58aafe0c )
A new message google.cloud.developerconnect.v1.insights.DeploymentEvent is added ( e40bfd4df5e3ddfcc9d9b187f39cfadf58aafe0c )
A new message google.cloud.developerconnect.v1.GenericHTTPEndpointConfig is added ( e40bfd4df5e3ddfcc9d9b187f39cfadf58aafe0c )
A new message google.cloud.developerconnect.v1.FinishOAuthRequest is added ( e40bfd4df5e3ddfcc9d9b187f39cfadf58aafe0c )
A new message google.cloud.developerconnect.v1.insights.GoogleCloudRun is added ( e40bfd4df5e3ddfcc9d9b187f39cfadf58aafe0c )
A new enum value GEMINI_CODE_ASSIST is added to enum google.cloud.developerconnect.v1.GitHubConfig.GitHubApp ( e40bfd4df5e3ddfcc9d9b187f39cfadf58aafe0c )
Add HTTP Proxy base URI field ( e40bfd4df5e3ddfcc9d9b187f39cfadf58aafe0c )
A new field projects is added to message google.cloud.developerconnect.v1.insights.InsightsConfig ( e40bfd4df5e3ddfcc9d9b187f39cfadf58aafe0c )
Add Cloud Run and App Hub Service runtimes to InsightsConfig ( e40bfd4df5e3ddfcc9d9b187f39cfadf58aafe0c )
A new field organization is added to message google.cloud.developerconnect.v1.GitHubEnterpriseConfig ( e40bfd4df5e3ddfcc9d9b187f39cfadf58aafe0c )
A new field app_hub_service is added to message google.cloud.developerconnect.v1.insights.RuntimeConfig ( e40bfd4df5e3ddfcc9d9b187f39cfadf58aafe0c )
A new message google.cloud.developerconnect.v1.SecureSourceManagerInstanceConfig is added ( e40bfd4df5e3ddfcc9d9b187f39cfadf58aafe0c )
Add Deployment Events to Insights API (GetDeploymentEvent, ListDeploymentEvents) ( e40bfd4df5e3ddfcc9d9b187f39cfadf58aafe0c )
A new field http_proxy_base_uri is added to message google.cloud.developerconnect.v1.HTTPProxyConfig ( e40bfd4df5e3ddfcc9d9b187f39cfadf58aafe0c )
A new message google.cloud.developerconnect.v1.insights.GetDeploymentEventRequest is added ( e40bfd4df5e3ddfcc9d9b187f39cfadf58aafe0c )
A new message google.cloud.developerconnect.v1.FinishOAuthResponse is added ( e40bfd4df5e3ddfcc9d9b187f39cfadf58aafe0c )
Add Gemini Code Assist GitHub App type ( e40bfd4df5e3ddfcc9d9b187f39cfadf58aafe0c )
A new field google_cloud_run is added to message google.cloud.developerconnect.v1.insights.RuntimeConfig ( e40bfd4df5e3ddfcc9d9b187f39cfadf58aafe0c )
A new field secure_source_manager_instance_config is added to message google.cloud.developerconnect.v1.Connection ( e40bfd4df5e3ddfcc9d9b187f39cfadf58aafe0c )
Add Projects field to InsightsConfig for project tracking ( e40bfd4df5e3ddfcc9d9b187f39cfadf58aafe0c )
A new message google.cloud.developerconnect.v1.insights.ListDeploymentEventsRequest is added ( e40bfd4df5e3ddfcc9d9b187f39cfadf58aafe0c )
Add OAuth flow RPCs (StartOAuth, FinishOAuth) ( e40bfd4df5e3ddfcc9d9b187f39cfadf58aafe0c )
A new message google.cloud.developerconnect.v1.StartOAuthRequest is added ( e40bfd4df5e3ddfcc9d9b187f39cfadf58aafe0c )
A new message google.cloud.developerconnect.v1.insights.ListDeploymentEventsResponse is added ( e40bfd4df5e3ddfcc9d9b187f39cfadf58aafe0c )
A new message google.cloud.developerconnect.v1.StartOAuthResponse is added ( e40bfd4df5e3ddfcc9d9b187f39cfadf58aafe0c )
A new message google.cloud.developerconnect.v1.insights.AppHubService is added ( e40bfd4df5e3ddfcc9d9b187f39cfadf58aafe0c )
A new message google.cloud.developerconnect.v1.insights.ArtifactDeployment is added ( e40bfd4df5e3ddfcc9d9b187f39cfadf58aafe0c )
A new field http_config is added to message google.cloud.developerconnect.v1.Connection ( e40bfd4df5e3ddfcc9d9b187f39cfadf58aafe0c )
A new message google.cloud.developerconnect.v1.insights.Projects is added ( e40bfd4df5e3ddfcc9d9b187f39cfadf58aafe0c )
0.3.0 (2026-01-08)
Features
auto-enable mTLS when supported certificates are detected ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
check Python and dependency versions in generated GAPICs ( c353aa5bcc937ef9399c8efc90492dadbcf01aa2 )
0.2.0 (2025-10-16)
Features
Add support for Python 3.14 ( 98ee71abc0f97c88239b50bf0e0827df19630def )
Bug Fixes
Deprecate credentials_file argument ( 98ee71abc0f97c88239b50bf0e0827df19630def )
0.1.10 (2025-07-02)
Features
a new enum google.cloud.developerconnect.v1.SystemProvider is added ( 717d9b9 )
a new field bitbucket_cloud_config is added to message google.cloud.developerconnect.v1.Connection ( 717d9b9 )
a new field bitbucket_data_center_config is added to message google.cloud.developerconnect.v1.Connection ( 717d9b9 )
a new field oauth_start_uri is added to message google.cloud.developerconnect.v1.AccountConnector ( 717d9b9 )
a new field provider_oauth_config is added to message google.cloud.developerconnect.v1.AccountConnector ( 717d9b9 )
a new message google.cloud.developerconnect.v1.AccountConnector is added ( 717d9b9 )
a new message google.cloud.developerconnect.v1.GitProxyConfig is added ( 717d9b9 )
a new message google.cloud.developerconnect.v1.User is added ( 717d9b9 )
add DCI insights config proto ( 717d9b9 )
Documentation
A comment for field uid in message .google.cloud.developerconnect.v1.Connection is changed ( 717d9b9 )
A comment for field uid in message .google.cloud.developerconnect.v1.GitRepositoryLink is changed ( 717d9b9 )
0.1.9 (2025-06-11)
Documentation
Update import statement example in README ( 3d5bc37 )
0.1.8 (2025-03-15)
Bug Fixes
[Many APIs] Allow Protobuf 6.x ( feb5353 )
0.1.7 (2025-02-12)
Features
Add REST Interceptors which support reading metadata ( e92d527 )
Add support for reading selective GAPIC generation methods from service YAML ( e92d527 )
0.1.6 (2024-12-12)
Features
Add support for opt-in debug logging ( 819e8fb )
Bug Fixes
Fix typing issue with gRPC metadata when key ends in -bin ( 819e8fb )
0.1.5 (2024-11-21)
Features
A new field crypto_key_config is added to message .google.cloud.developerconnect.v1.Connection ( 48f25db )
A new field github_enterprise_config is added to message .google.cloud.developerconnect.v1.Connection ( 48f25db )
A new field gitlab_config is added to message .google.cloud.developerconnect.v1.Connection ( 48f25db )
A new field gitlab_enterprise_config is added to message .google.cloud.developerconnect.v1.Connection ( 48f25db )
A new field webhook_id is added to message .google.cloud.developerconnect.v1.GitRepositoryLink ( 48f25db )
A new message CryptoKeyConfig is added ( 48f25db )
A new message GitHubEnterpriseConfig is added ( 48f25db )
A new message GitLabConfig is added ( 48f25db )
A new message GitLabEnterpriseConfig is added ( 48f25db )
A new message ServiceDirectoryConfig is added ( 48f25db )
A new message UserCredential is added ( 48f25db )
A new resource_definition [cloudkms.googleapis.com/CryptoKey](https://www.google.com/url?sa=D&q=http%3A%2F%2Fcloudkms.googleapis.com%2FCryptoKey) is added ( 48f25db )
A new resource_definition [servicedirectory.googleapis.com/Service](https://www.google.com/url?sa=D&q=http%3A%2F%2Fservicedirectory.googleapis.com%2FService) is added ( 48f25db )
Documentation
A comment for field requested_cancellation in message .google.cloud.developerconnect.v1.OperationMetadata is changed ( 48f25db )
0.1.4 (2024-10-31)
Bug Fixes
disable universe-domain validation ( 53c951e )
0.1.3 (2024-10-24)
Features
Add support for Python 3.13 ( #13202 ) ( 5b1f2f3 )
0.1.2 (2024-07-30)
Bug Fixes
Retry and timeout values do not propagate in requests during pagination ( ba1064f )
0.1.1 (2024-07-08)
Bug Fixes
Allow Protobuf 5.x ( #12866 ) ( 40e1810 )
0.1.0 (2024-06-05)
Features
add initial files for google.cloud.developerconnect.v1 ( #12777 ) ( 3deb6c7 )
Changelog
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
