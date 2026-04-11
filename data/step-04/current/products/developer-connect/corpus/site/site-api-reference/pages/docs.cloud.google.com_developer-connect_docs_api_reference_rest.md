---
title: "Developer Connect API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/developer-connect/docs/api/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/developer-connect/docs/api/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/developer-connect/docs/api/reference/rest
  title: "Developer Connect API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Developer Connect
Reference
Send feedback
Developer Connect API
Stay organized with collections
Save and categorize content based on your preferences.
Connect third-party source code management to Google
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.accountConnectors
REST Resource: v1.projects.locations.accountConnectors.users
REST Resource: v1.projects.locations.connections
REST Resource: v1.projects.locations.connections.gitRepositoryLinks
REST Resource: v1.projects.locations.insightsConfigs
REST Resource: v1.projects.locations.insightsConfigs.deploymentEvents
REST Resource: v1.projects.locations.operations
Service: developerconnect.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://developerconnect.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://developerconnect.googleapis.com
REST Resource: v1.projects.locations
Methods
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.accountConnectors
Methods
create
POST /v1/{parent=projects/*/locations/*}/accountConnectors
Creates a new AccountConnector in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/accountConnectors/*}
Deletes a single AccountConnector.
get
GET /v1/{name=projects/*/locations/*/accountConnectors/*}
Gets details of a single AccountConnector.
list
GET /v1/{parent=projects/*/locations/*}/accountConnectors
Lists AccountConnectors in a given project and location.
patch
PATCH /v1/{accountConnector.name=projects/*/locations/*/accountConnectors/*}
Updates the parameters of a single AccountConnector.
REST Resource: v1.projects.locations.accountConnectors.users
Methods
delete
DELETE /v1/{name=projects/*/locations/*/accountConnectors/*/users/*}
Deletes a single User.
deleteSelf
DELETE /v1/{name=projects/*/locations/*/accountConnectors/*}/users:deleteSelf
Delete the User based on the user credentials.
fetchAccessToken
POST /v1/{accountConnector=projects/*/locations/*/accountConnectors/*}/users:fetchAccessToken
Fetches OAuth access token based on end user credentials.
fetchSelf
GET /v1/{name=projects/*/locations/*/accountConnectors/*}/users:fetchSelf
Fetch the User based on the user credentials.
finishOAuthFlow
GET /v1/{accountConnector=projects/*/locations/*/accountConnectors/*}/users:finishOAuthFlow
Finishes OAuth flow for an account connector.
list
GET /v1/{parent=projects/*/locations/*/accountConnectors/*}/users
Lists Users in a given project, location, and account_connector.
startOAuthFlow
GET /v1/{accountConnector=projects/*/locations/*/accountConnectors/*}/users:startOAuthFlow
Starts OAuth flow for an account connector.
REST Resource: v1.projects.locations.connections
Methods
create
POST /v1/{parent=projects/*/locations/*}/connections
Creates a new Connection in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/connections/*}
Deletes a single Connection.
fetchGitHubInstallations
GET /v1/{connection=projects/*/locations/*/connections/*}:fetchGitHubInstallations
FetchGitHubInstallations returns the list of GitHub Installations that are available to be added to a Connection.
fetchLinkableGitRepositories
GET /v1/{connection=projects/*/locations/*/connections/*}:fetchLinkableGitRepositories
FetchLinkableGitRepositories returns a list of git repositories from an SCM that are available to be added to a Connection.
get
GET /v1/{name=projects/*/locations/*/connections/*}
Gets details of a single Connection.
list
GET /v1/{parent=projects/*/locations/*}/connections
Lists Connections in a given project and location.
patch
PATCH /v1/{connection.name=projects/*/locations/*/connections/*}
Updates the parameters of a single Connection.
processGitHubEnterpriseWebhook
POST /v1/{parent=projects/*/locations/*}/connections:processGitHubEnterpriseWebhook
ProcessGitHubEnterpriseWebhook is called by the external GitHub Enterprise instances for notifying events.
REST Resource: v1.projects.locations.connections.gitRepositoryLinks
Methods
create
POST /v1/{parent=projects/*/locations/*/connections/*}/gitRepositoryLinks
Creates a GitRepositoryLink.
delete
DELETE /v1/{name=projects/*/locations/*/connections/*/gitRepositoryLinks/*}
Deletes a single GitRepositoryLink.
fetchGitRefs
GET /v1/{gitRepositoryLink=projects/*/locations/*/connections/*/gitRepositoryLinks/*}:fetchGitRefs
Fetch the list of branches or tags for a given repository.
fetchReadToken
POST /v1/{gitRepositoryLink=projects/*/locations/*/connections/*/gitRepositoryLinks/*}:fetchReadToken
Fetches read token of a given gitRepositoryLink.
fetchReadWriteToken
POST /v1/{gitRepositoryLink=projects/*/locations/*/connections/*/gitRepositoryLinks/*}:fetchReadWriteToken
Fetches read/write token of a given gitRepositoryLink.
get
GET /v1/{name=projects/*/locations/*/connections/*/gitRepositoryLinks/*}
Gets details of a single GitRepositoryLink.
list
GET /v1/{parent=projects/*/locations/*/connections/*}/gitRepositoryLinks
Lists GitRepositoryLinks in a given project, location, and connection.
processBitbucketCloudWebhook
POST /v1/{name=projects/*/locations/*/connections/*/gitRepositoryLinks/*}:processBitbucketCloudWebhook
ProcessBitbucketCloudWebhook is called by the external Bitbucket Cloud instances for notifying events.
processBitbucketDataCenterWebhook
POST /v1/{name=projects/*/locations/*/connections/*/gitRepositoryLinks/*}:processBitbucketDataCenterWebhook
ProcessBitbucketDataCenterWebhook is called by the external Bitbucket Data Center instances for notifying events.
processGitLabEnterpriseWebhook
POST /v1/{name=projects/*/locations/*/connections/*/gitRepositoryLinks/*}:processGitLabEnterpriseWebhook
ProcessGitLabEnterpriseWebhook is called by the external GitLab Enterprise instances for notifying events.
processGitLabWebhook
POST /v1/{name=projects/*/locations/*/connections/*/gitRepositoryLinks/*}:processGitLabWebhook
ProcessGitLabWebhook is called by the GitLab.com for notifying events.
REST Resource: v1.projects.locations.insightsConfigs
Methods
create
POST /v1/{parent=projects/*/locations/*}/insightsConfigs
Creates a new InsightsConfig in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/insightsConfigs/*}
Deletes a single Insight.
get
GET /v1/{name=projects/*/locations/*/insightsConfigs/*}
Gets details of a single Insight.
list
GET /v1/{parent=projects/*/locations/*}/insightsConfigs
Lists InsightsConfigs in a given project and location.
patch
PATCH /v1/{insightsConfig.name=projects/*/locations/*/insightsConfigs/*}
Updates the parameters of a single InsightsConfig.
REST Resource: v1.projects.locations.insightsConfigs.deploymentEvents
Methods
get
GET /v1/{name=projects/*/locations/*/insightsConfigs/*/deploymentEvents/*}
Gets a single Deployment Event.
list
GET /v1/{parent=projects/*/locations/*/insightsConfigs/*}/deploymentEvents
Lists Deployment Events in a given insights config.
REST Resource: v1.projects.locations.operations
Methods
cancel
POST /v1/{name=projects/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1/{name=projects/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-12-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-18 UTC."],[],[]]
