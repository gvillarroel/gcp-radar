---
title: "Cloud Build API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/build/docs/api/reference/rest
knowledge_key: corpus
source_id: site-api-reference-required-1
source_type: site
entrypoint: https://docs.cloud.google.com/build/docs/api/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/build/docs/api/reference/rest
  title: "Cloud Build API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Build
Reference
Send feedback
Cloud Build API
Stay organized with collections
Save and categorize content based on your preferences.
Creates and manages builds on Google Cloud Platform.
REST Resource: v2.projects.locations
REST Resource: v2.projects.locations.connections
REST Resource: v2.projects.locations.connections.repositories
REST Resource: v2.projects.locations.operations
REST Resource: v1
REST Resource: v1.githubDotComWebhook
REST Resource: v1.locations
REST Resource: v1.operations
REST Resource: v1.projects.builds
REST Resource: v1.projects.githubEnterpriseConfigs
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.bitbucketServerConfigs
REST Resource:
v1.projects.locations.bitbucketServerConfigs.connectedRepositories
REST Resource: v1.projects.locations.bitbucketServerConfigs.repos
REST Resource: v1.projects.locations.builds
REST Resource: v1.projects.locations.gitLabConfigs
REST Resource: v1.projects.locations.gitLabConfigs.connectedRepositories
REST Resource: v1.projects.locations.gitLabConfigs.repos
REST Resource: v1.projects.locations.githubEnterpriseConfigs
REST Resource: v1.projects.locations.operations
REST Resource: v1.projects.locations.triggers
REST Resource: v1.projects.locations.workerPools
REST Resource: v1.projects.triggers
Service: cloudbuild.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://cloudbuild.googleapis.com/$discovery/rest?version=v2
https://cloudbuild.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://cloudbuild.googleapis.com
REST Resource: v2.projects.locations
Methods
get
GET /v2/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v2/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v2.projects.locations.connections
Methods
create
POST /v2/{parent=projects/*/locations/*}/connections
Creates a Connection.
delete
DELETE /v2/{name=projects/*/locations/*/connections/*}
Deletes a single connection.
fetchLinkableRepositories
GET /v2/{connection=projects/*/locations/*/connections/*}:fetchLinkableRepositories
FetchLinkableRepositories get repositories from SCM that are accessible and could be added to the connection.
get
GET /v2/{name=projects/*/locations/*/connections/*}
Gets details of a single connection.
getIamPolicy
GET /v2/{resource=projects/*/locations/*/connections/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v2/{parent=projects/*/locations/*}/connections
Lists Connections in a given project and location.
patch
PATCH /v2/{connection.name=projects/*/locations/*/connections/*}
Updates a single connection.
processWebhook
POST /v2/{parent=projects/*/locations/*}/connections:processWebhook
ProcessWebhook is called by the external SCM for notifying of events.
setIamPolicy
POST /v2/{resource=projects/*/locations/*/connections/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v2/{resource=projects/*/locations/*/connections/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v2.projects.locations.connections.repositories
Methods
accessReadToken
POST /v2/{repository=projects/*/locations/*/connections/*/repositories/*}:accessReadToken
Fetches read token of a given repository.
accessReadWriteToken
POST /v2/{repository=projects/*/locations/*/connections/*/repositories/*}:accessReadWriteToken
Fetches read/write token of a given repository.
batchCreate
POST /v2/{parent=projects/*/locations/*/connections/*}/repositories:batchCreate
Creates multiple repositories inside a connection.
create
POST /v2/{parent=projects/*/locations/*/connections/*}/repositories
Creates a Repository.
delete
DELETE /v2/{name=projects/*/locations/*/connections/*/repositories/*}
Deletes a single repository.
fetchGitRefs
GET /v2/{repository=projects/*/locations/*/connections/*/repositories/*}:fetchGitRefs
Fetch the list of branches or tags for a given repository.
get
GET /v2/{name=projects/*/locations/*/connections/*/repositories/*}
Gets details of a single repository.
list
GET /v2/{parent=projects/*/locations/*/connections/*}/repositories
Lists Repositories in a given connection.
REST Resource: v2.projects.locations.operations
Methods
cancel
POST /v2/{name=projects/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
get
GET /v2/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
REST Resource: v1
Methods
webhook
POST /v1/webhook
ReceiveWebhook is called when the API receives a GitHub webhook.
REST Resource: v1.githubDotComWebhook
Methods
receive
POST /v1/githubDotComWebhook:receive
ReceiveGitHubDotComWebhook is called when the API receives a github.com webhook.
REST Resource: v1.locations
Methods
regionalWebhook
POST /v1/{location=locations/*}/regionalWebhook
ReceiveRegionalWebhook is called when the API receives a regional GitHub webhook.
REST Resource: v1.operations
Methods
cancel
POST /v1/{name=operations/**}:cancel
Starts asynchronous cancellation on a long-running operation.
get
GET /v1/{name=operations/**}
Gets the latest state of a long-running operation.
REST Resource: v1.projects.builds
Methods
approve
POST /v1/{name=projects/*/builds/*}:approve
Approves or rejects a pending build.
cancel
POST /v1/projects/{projectId}/builds/{id}:cancel
Cancels a build in progress.
create
POST /v1/projects/{projectId}/builds
Starts a build with the specified configuration.
get
GET /v1/projects/{projectId}/builds/{id}
Returns information about a previously requested build.
list
GET /v1/projects/{projectId}/builds
Lists previously requested builds.
retry
POST /v1/projects/{projectId}/builds/{id}:retry
Creates a new build based on the specified build.
REST Resource: v1.projects.githubEnterpriseConfigs
Methods
create
POST /v1/{parent=projects/*}/githubEnterpriseConfigs
Create an association between a GCP project and a GitHub Enterprise server.
delete
DELETE /v1/{name=projects/*/githubEnterpriseConfigs/*}
Delete an association between a GCP project and a GitHub Enterprise server.
get
GET /v1/{name=projects/*/githubEnterpriseConfigs/*}
Retrieve a GitHubEnterpriseConfig.
list
GET /v1/{parent=projects/*}/githubEnterpriseConfigs
List all GitHubEnterpriseConfigs for a given project.
patch
PATCH /v1/{githubEnterpriseConfig.name=projects/*/githubEnterpriseConfigs/*}
Update an association between a GCP project and a GitHub Enterprise server.
REST Resource: v1.projects.locations
Methods
getDefaultServiceAccount
GET /v1/{name=projects/*/locations/*/defaultServiceAccount}
Returns the DefaultServiceAccount used by the project.
REST Resource: v1.projects.locations.bitbucketServerConfigs
Methods
create
POST /v1/{parent=projects/*/locations/*}/bitbucketServerConfigs
Creates a new BitbucketServerConfig .
delete
DELETE /v1/{name=projects/*/locations/*/bitbucketServerConfigs/*}
Delete a BitbucketServerConfig .
get
GET /v1/{name=projects/*/locations/*/bitbucketServerConfigs/*}
Retrieve a BitbucketServerConfig .
list
GET /v1/{parent=projects/*/locations/*}/bitbucketServerConfigs
List all BitbucketServerConfigs for a given project.
patch
PATCH /v1/{bitbucketServerConfig.name=projects/*/locations/*/bitbucketServerConfigs/*}
Updates an existing BitbucketServerConfig .
removeBitbucketServerConnectedRepository
POST /v1/{config=projects/*/locations/*/bitbucketServerConfigs/*}:removeBitbucketServerConnectedRepository
Remove a Bitbucket Server repository from a given BitbucketServerConfig's connected repositories.
REST Resource: v1.projects.locations.bitbucketServerConfigs.connectedRepositories
Methods
batchCreate
POST /v1/{parent=projects/*/locations/*/bitbucketServerConfigs/*}/connectedRepositories:batchCreate
Batch connecting Bitbucket Server repositories to Cloud Build.
REST Resource: v1.projects.locations.bitbucketServerConfigs.repos
Methods
list
GET /v1/{parent=projects/*/locations/*/bitbucketServerConfigs/*}/repos
List all repositories for a given BitbucketServerConfig .
REST Resource: v1.projects.locations.builds
Methods
approve
POST /v1/{name=projects/*/locations/*/builds/*}:approve
Approves or rejects a pending build.
cancel
POST /v1/{name=projects/*/locations/*/builds/*}:cancel
Cancels a build in progress.
create
POST /v1/{parent=projects/*/locations/*}/builds
Starts a build with the specified configuration.
get
GET /v1/{name=projects/*/locations/*/builds/*}
Returns information about a previously requested build.
list
GET /v1/{parent=projects/*/locations/*}/builds
Lists previously requested builds.
retry
POST /v1/{name=projects/*/locations/*/builds/*}:retry
Creates a new build based on the specified build.
REST Resource: v1.projects.locations.gitLabConfigs
Methods
create
POST /v1/{parent=projects/*/locations/*}/gitLabConfigs
Creates a new GitLabConfig .
delete
DELETE /v1/{name=projects/*/locations/*/gitLabConfigs/*}
Delete a GitLabConfig .
get
GET /v1/{name=projects/*/locations/*/gitLabConfigs/*}
Retrieves a GitLabConfig .
list
GET /v1/{parent=projects/*/locations/*}/gitLabConfigs
List all GitLabConfigs for a given project.
patch
PATCH /v1/{gitlabConfig.name=projects/*/locations/*/gitLabConfigs/*}
Updates an existing GitLabConfig .
removeGitLabConnectedRepository
POST /v1/{config=projects/*/locations/*/gitLabConfigs/*}:removeGitLabConnectedRepository
Remove a GitLab repository from a given GitLabConfig's connected repositories.
REST Resource: v1.projects.locations.gitLabConfigs.connectedRepositories
Methods
batchCreate
POST /v1/{parent=projects/*/locations/*/gitLabConfigs/*}/connectedRepositories:batchCreate
Batch connecting GitLab repositories to Cloud Build.
REST Resource: v1.projects.locations.gitLabConfigs.repos
Methods
list
GET /v1/{parent=projects/*/locations/*/gitLabConfigs/*}/repos
List all repositories for a given GitLabConfig .
REST Resource: v1.projects.locations.githubEnterpriseConfigs
Methods
create
POST /v1/{parent=projects/*/locations/*}/githubEnterpriseConfigs
Create an association between a GCP project and a GitHub Enterprise server.
delete
DELETE /v1/{name=projects/*/locations/*/githubEnterpriseConfigs/*}
Delete an association between a GCP project and a GitHub Enterprise server.
get
GET /v1/{name=projects/*/locations/*/githubEnterpriseConfigs/*}
Retrieve a GitHubEnterpriseConfig.
list
GET /v1/{parent=projects/*/locations/*}/githubEnterpriseConfigs
List all GitHubEnterpriseConfigs for a given project.
patch
PATCH /v1/{githubEnterpriseConfig.name=projects/*/locations/*/githubEnterpriseConfigs/*}
Update an association between a GCP project and a GitHub Enterprise server.
REST Resource: v1.projects.locations.operations
Methods
cancel
POST /v1/{name=projects/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
get
GET /v1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
REST Resource: v1.projects.locations.triggers
Methods
create
POST /v1/{parent=projects/*/locations/*}/triggers
Creates a new BuildTrigger .
delete
DELETE /v1/{name=projects/*/locations/*/triggers/*}
Deletes a BuildTrigger by its project ID and trigger ID.
get
GET /v1/{name=projects/*/locations/*/triggers/*}
Returns information about a BuildTrigger .
list
GET /v1/{parent=projects/*/locations/*}/triggers
Lists existing BuildTrigger s.
patch
PATCH /v1/{trigger.resourceName=projects/*/locations/*/triggers/*}
Updates a BuildTrigger by its project ID and trigger ID.
run
POST /v1/{name=projects/*/locations/*/triggers/*}:run
Runs a BuildTrigger at a particular source revision.
webhook
POST /v1/{name=projects/*/locations/*/triggers/*}:webhook
ReceiveTriggerWebhook [Experimental] is called when the API receives a webhook request targeted at a specific trigger.
REST Resource: v1.projects.locations.workerPools
Methods
create
POST /v1/{parent=projects/*/locations/*}/workerPools
Creates a WorkerPool .
delete
DELETE /v1/{name=projects/*/locations/*/workerPools/*}
Deletes a WorkerPool .
get
GET /v1/{name=projects/*/locations/*/workerPools/*}
Returns details of a WorkerPool .
list
GET /v1/{parent=projects/*/locations/*}/workerPools
Lists WorkerPool s.
patch
PATCH /v1/{workerPool.name=projects/*/locations/*/workerPools/*}
Updates a WorkerPool .
REST Resource: v1.projects.triggers
Methods
create
POST /v1/projects/{projectId}/triggers
Creates a new BuildTrigger .
delete
DELETE /v1/projects/{projectId}/triggers/{triggerId}
Deletes a BuildTrigger by its project ID and trigger ID.
get
GET /v1/projects/{projectId}/triggers/{triggerId}
Returns information about a BuildTrigger .
list
GET /v1/projects/{projectId}/triggers
Lists existing BuildTrigger s.
patch
PATCH /v1/projects/{projectId}/triggers/{triggerId}
Updates a BuildTrigger by its project ID and trigger ID.
run
POST /v1/projects/{projectId}/triggers/{triggerId}:run
Runs a BuildTrigger at a particular source revision.
webhook
POST /v1/projects/{projectId}/triggers/{trigger}:webhook
ReceiveTriggerWebhook [Experimental] is called when the API receives a webhook request targeted at a specific trigger.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-17 UTC."],[],[]]
