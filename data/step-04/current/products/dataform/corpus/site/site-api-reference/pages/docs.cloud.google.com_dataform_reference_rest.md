---
title: "Dataform API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataform/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataform/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/dataform/reference/rest
  title: "Dataform API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Dataform
Reference
Send feedback
Dataform API
Stay organized with collections
Save and categorize content based on your preferences.
Service to develop, version control, and operationalize SQL pipelines in BigQuery.
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.folders
REST Resource: v1.projects.locations.operations
REST Resource: v1.projects.locations.repositories
REST Resource: v1.projects.locations.repositories.compilationResults
REST Resource: v1.projects.locations.repositories.releaseConfigs
REST Resource: v1.projects.locations.repositories.workflowConfigs
REST Resource: v1.projects.locations.repositories.workflowInvocations
REST Resource: v1.projects.locations.repositories.workspaces
REST Resource: v1.projects.locations.teamFolders
REST Resource: v1beta1.projects.locations
REST Resource: v1beta1.projects.locations.folders
REST Resource: v1beta1.projects.locations.operations
REST Resource: v1beta1.projects.locations.repositories
REST Resource: v1beta1.projects.locations.repositories.compilationResults
REST Resource: v1beta1.projects.locations.repositories.releaseConfigs
REST Resource: v1beta1.projects.locations.repositories.workflowConfigs
REST Resource: v1beta1.projects.locations.repositories.workflowInvocations
REST Resource: v1beta1.projects.locations.repositories.workspaces
REST Resource: v1beta1.projects.locations.teamFolders
Service: dataform.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://dataform.googleapis.com/$discovery/rest?version=v1
https://dataform.googleapis.com/$discovery/rest?version=v1beta1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://dataform.googleapis.com
REST Resource: v1.projects.locations
Methods
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
getConfig
GET /v1/{name=projects/*/locations/*/config}
Get default config for a given project and location.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
queryUserRootContents
GET /v1/{location=projects/*/locations/*}:queryUserRootContents
Returns the contents of a caller's root folder in a given location.
updateConfig
PATCH /v1/{config.name=projects/*/locations/*/config}
Update default config for a given project and location.
REST Resource: v1.projects.locations.folders
Methods
create
POST /v1/{parent=projects/*/locations/*}/folders
Creates a new Folder in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/folders/*}
Deletes a single Folder.
deleteTree
POST /v1/{name=projects/*/locations/*/folders/*}:deleteTree
Deletes a Folder with its contents (Folders, Repositories, Workspaces, ReleaseConfigs, and WorkflowConfigs).
get
GET /v1/{name=projects/*/locations/*/folders/*}
Fetches a single Folder.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/folders/*}:getIamPolicy
Gets the access control policy for a resource.
move
POST /v1/{name=projects/*/locations/*/folders/*}:move
Moves a Folder to a new Folder, TeamFolder, or the root location.
patch
PATCH /v1/{folder.name=projects/*/locations/*/folders/*}
Updates a single Folder.
queryFolderContents
GET /v1/{folder=projects/*/locations/*/folders/*}:queryFolderContents
Returns the contents of a given Folder.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/folders/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/folders/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
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
REST Resource: v1.projects.locations.repositories
Methods
commit
POST /v1/{name=projects/*/locations/*/repositories/*}:commit
Applies a Git commit to a Repository.
computeAccessTokenStatus
GET /v1/{name=projects/*/locations/*/repositories/*}:computeAccessTokenStatus
Computes a Repository's Git access token status.
create
POST /v1/{parent=projects/*/locations/*}/repositories
Creates a new Repository in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/repositories/*}
Deletes a single Repository.
fetchHistory
GET /v1/{name=projects/*/locations/*/repositories/*}:fetchHistory
Fetches a Repository's history of commits.
fetchRemoteBranches
GET /v1/{name=projects/*/locations/*/repositories/*}:fetchRemoteBranches
Fetches a Repository's remote branches.
get
GET /v1/{name=projects/*/locations/*/repositories/*}
Fetches a single Repository.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/repositories/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*}/repositories
Lists Repositories in a given project and location.
move
POST /v1/{name=projects/*/locations/*/repositories/*}:move
Moves a Repository to a new location.
patch
PATCH /v1/{repository.name=projects/*/locations/*/repositories/*}
Updates a single Repository.
queryDirectoryContents
GET /v1/{name=projects/*/locations/*/repositories/*}:queryDirectoryContents
Returns the contents of a given Repository directory.
readFile
GET /v1/{name=projects/*/locations/*/repositories/*}:readFile
Returns the contents of a file (inside a Repository).
setIamPolicy
POST /v1/{resource=projects/*/locations/*/repositories/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/repositories/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.repositories.compilationResults
Methods
create
POST /v1/{parent=projects/*/locations/*/repositories/*}/compilationResults
Creates a new CompilationResult in a given project and location.
get
GET /v1/{name=projects/*/locations/*/repositories/*/compilationResults/*}
Fetches a single CompilationResult.
list
GET /v1/{parent=projects/*/locations/*/repositories/*}/compilationResults
Lists CompilationResults in a given Repository.
query
GET /v1/{name=projects/*/locations/*/repositories/*/compilationResults/*}:query
Returns CompilationResultActions in a given CompilationResult.
REST Resource: v1.projects.locations.repositories.releaseConfigs
Methods
create
POST /v1/{parent=projects/*/locations/*/repositories/*}/releaseConfigs
Creates a new ReleaseConfig in a given Repository.
delete
DELETE /v1/{name=projects/*/locations/*/repositories/*/releaseConfigs/*}
Deletes a single ReleaseConfig.
get
GET /v1/{name=projects/*/locations/*/repositories/*/releaseConfigs/*}
Fetches a single ReleaseConfig.
list
GET /v1/{parent=projects/*/locations/*/repositories/*}/releaseConfigs
Lists ReleaseConfigs in a given Repository.
patch
PATCH /v1/{releaseConfig.name=projects/*/locations/*/repositories/*/releaseConfigs/*}
Updates a single ReleaseConfig.
REST Resource: v1.projects.locations.repositories.workflowConfigs
Methods
create
POST /v1/{parent=projects/*/locations/*/repositories/*}/workflowConfigs
Creates a new WorkflowConfig in a given Repository.
delete
DELETE /v1/{name=projects/*/locations/*/repositories/*/workflowConfigs/*}
Deletes a single WorkflowConfig.
get
GET /v1/{name=projects/*/locations/*/repositories/*/workflowConfigs/*}
Fetches a single WorkflowConfig.
list
GET /v1/{parent=projects/*/locations/*/repositories/*}/workflowConfigs
Lists WorkflowConfigs in a given Repository.
patch
PATCH /v1/{workflowConfig.name=projects/*/locations/*/repositories/*/workflowConfigs/*}
Updates a single WorkflowConfig.
REST Resource: v1.projects.locations.repositories.workflowInvocations
Methods
cancel
POST /v1/{name=projects/*/locations/*/repositories/*/workflowInvocations/*}:cancel
Requests cancellation of a running WorkflowInvocation.
create
POST /v1/{parent=projects/*/locations/*/repositories/*}/workflowInvocations
Creates a new WorkflowInvocation in a given Repository.
delete
DELETE /v1/{name=projects/*/locations/*/repositories/*/workflowInvocations/*}
Deletes a single WorkflowInvocation.
get
GET /v1/{name=projects/*/locations/*/repositories/*/workflowInvocations/*}
Fetches a single WorkflowInvocation.
list
GET /v1/{parent=projects/*/locations/*/repositories/*}/workflowInvocations
Lists WorkflowInvocations in a given Repository.
query
GET /v1/{name=projects/*/locations/*/repositories/*/workflowInvocations/*}:query
Returns WorkflowInvocationActions in a given WorkflowInvocation.
REST Resource: v1.projects.locations.repositories.workspaces
Methods
commit
POST /v1/{name=projects/*/locations/*/repositories/*/workspaces/*}:commit
Applies a Git commit for uncommitted files in a Workspace.
create
POST /v1/{parent=projects/*/locations/*/repositories/*}/workspaces
Creates a new Workspace in a given Repository.
delete
DELETE /v1/{name=projects/*/locations/*/repositories/*/workspaces/*}
Deletes a single Workspace.
fetchFileDiff
GET /v1/{workspace=projects/*/locations/*/repositories/*/workspaces/*}:fetchFileDiff
Fetches Git diff for an uncommitted file in a Workspace.
fetchFileGitStatuses
GET /v1/{name=projects/*/locations/*/repositories/*/workspaces/*}:fetchFileGitStatuses
Fetches Git statuses for the files in a Workspace.
fetchGitAheadBehind
GET /v1/{name=projects/*/locations/*/repositories/*/workspaces/*}:fetchGitAheadBehind
Fetches Git ahead/behind against a remote branch.
get
GET /v1/{name=projects/*/locations/*/repositories/*/workspaces/*}
Fetches a single Workspace.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/repositories/*/workspaces/*}:getIamPolicy
Gets the access control policy for a resource.
installNpmPackages
POST /v1/{workspace=projects/*/locations/*/repositories/*/workspaces/*}:installNpmPackages
Installs dependency NPM packages (inside a Workspace).
list
GET /v1/{parent=projects/*/locations/*/repositories/*}/workspaces
Lists Workspaces in a given Repository.
makeDirectory
POST /v1/{workspace=projects/*/locations/*/repositories/*/workspaces/*}:makeDirectory
Creates a directory inside a Workspace.
moveDirectory
POST /v1/{workspace=projects/*/locations/*/repositories/*/workspaces/*}:moveDirectory
Moves a directory (inside a Workspace), and all of its contents, to a new location.
moveFile
POST /v1/{workspace=projects/*/locations/*/repositories/*/workspaces/*}:moveFile
Moves a file (inside a Workspace) to a new location.
pull
POST /v1/{name=projects/*/locations/*/repositories/*/workspaces/*}:pull
Pulls Git commits from the Repository's remote into a Workspace.
push
POST /v1/{name=projects/*/locations/*/repositories/*/workspaces/*}:push
Pushes Git commits from a Workspace to the Repository's remote.
queryDirectoryContents
GET /v1/{workspace=projects/*/locations/*/repositories/*/workspaces/*}:queryDirectoryContents
Returns the contents of a given Workspace directory.
readFile
GET /v1/{workspace=projects/*/locations/*/repositories/*/workspaces/*}:readFile
Returns the contents of a file (inside a Workspace).
removeDirectory
POST /v1/{workspace=projects/*/locations/*/repositories/*/workspaces/*}:removeDirectory
Deletes a directory (inside a Workspace) and all of its contents.
removeFile
POST /v1/{workspace=projects/*/locations/*/repositories/*/workspaces/*}:removeFile
Deletes a file (inside a Workspace).
reset
POST /v1/{name=projects/*/locations/*/repositories/*/workspaces/*}:reset
Performs a Git reset for uncommitted files in a Workspace.
searchFiles
GET /v1/{workspace=projects/*/locations/*/repositories/*/workspaces/*}:searchFiles
Finds the contents of a given Workspace directory by filter.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/repositories/*/workspaces/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/repositories/*/workspaces/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
writeFile
POST /v1/{workspace=projects/*/locations/*/repositories/*/workspaces/*}:writeFile
Writes to a file (inside a Workspace).
REST Resource: v1.projects.locations.teamFolders
Methods
create
POST /v1/{parent=projects/*/locations/*}/teamFolders
Creates a new TeamFolder in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/teamFolders/*}
Deletes a single TeamFolder.
deleteTree
POST /v1/{name=projects/*/locations/*/teamFolders/*}:deleteTree
Deletes a TeamFolder with its contents (Folders, Repositories, Workspaces, ReleaseConfigs, and WorkflowConfigs).
get
GET /v1/{name=projects/*/locations/*/teamFolders/*}
Fetches a single TeamFolder.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/teamFolders/*}:getIamPolicy
Gets the access control policy for a resource.
patch
PATCH /v1/{teamFolder.name=projects/*/locations/*/teamFolders/*}
Updates a single TeamFolder.
queryContents
GET /v1/{teamFolder=projects/*/locations/*/teamFolders/*}:queryContents
Returns the contents of a given TeamFolder.
search
GET /v1/{location=projects/*/locations/*}/teamFolders:search
Returns all TeamFolders in a given location that the caller has access to and match the provided filter.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/teamFolders/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/teamFolders/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1beta1.projects.locations
Methods
get
GET /v1beta1/{name=projects/*/locations/*}
Gets information about a location.
getConfig
GET /v1beta1/{name=projects/*/locations/*/config}
Get default config for a given project and location.
list
GET /v1beta1/{name=projects/*}/locations
Lists information about the supported locations for this service.
queryUserRootContents
GET /v1beta1/{location=projects/*/locations/*}:queryUserRootContents
Returns the contents of a caller's root folder in a given location.
updateConfig
PATCH /v1beta1/{config.name=projects/*/locations/*/config}
Update default config for a given project and location.
REST Resource: v1beta1.projects.locations.folders
Methods
create
POST /v1beta1/{parent=projects/*/locations/*}/folders
Creates a new Folder in a given project and location.
delete
DELETE /v1beta1/{name=projects/*/locations/*/folders/*}
Deletes a single Folder.
deleteTree
POST /v1beta1/{name=projects/*/locations/*/folders/*}:deleteTree
Deletes a Folder with its contents (Folders, Repositories, Workspaces, ReleaseConfigs, and WorkflowConfigs).
get
GET /v1beta1/{name=projects/*/locations/*/folders/*}
Fetches a single Folder.
getIamPolicy
GET /v1beta1/{resource=projects/*/locations/*/folders/*}:getIamPolicy
Gets the access control policy for a resource.
move
POST /v1beta1/{name=projects/*/locations/*/folders/*}:move
Moves a Folder to a new Folder, TeamFolder, or the root location.
patch
PATCH /v1beta1/{folder.name=projects/*/locations/*/folders/*}
Updates a single Folder.
queryFolderContents
GET /v1beta1/{folder=projects/*/locations/*/folders/*}:queryFolderContents
Returns the contents of a given Folder.
setIamPolicy
POST /v1beta1/{resource=projects/*/locations/*/folders/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1beta1/{resource=projects/*/locations/*/folders/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1beta1.projects.locations.operations
Methods
cancel
POST /v1beta1/{name=projects/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1beta1/{name=projects/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v1beta1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1beta1/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1beta1.projects.locations.repositories
Methods
commit
POST /v1beta1/{name=projects/*/locations/*/repositories/*}:commit
Applies a Git commit to a Repository.
computeAccessTokenStatus
GET /v1beta1/{name=projects/*/locations/*/repositories/*}:computeAccessTokenStatus
Computes a Repository's Git access token status.
create
POST /v1beta1/{parent=projects/*/locations/*}/repositories
Creates a new Repository in a given project and location.
delete
DELETE /v1beta1/{name=projects/*/locations/*/repositories/*}
Deletes a single Repository.
fetchHistory
GET /v1beta1/{name=projects/*/locations/*/repositories/*}:fetchHistory
Fetches a Repository's history of commits.
fetchRemoteBranches
GET /v1beta1/{name=projects/*/locations/*/repositories/*}:fetchRemoteBranches
Fetches a Repository's remote branches.
get
GET /v1beta1/{name=projects/*/locations/*/repositories/*}
Fetches a single Repository.
getIamPolicy
GET /v1beta1/{resource=projects/*/locations/*/repositories/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1beta1/{parent=projects/*/locations/*}/repositories
Lists Repositories in a given project and location.
move
POST /v1beta1/{name=projects/*/locations/*/repositories/*}:move
Moves a Repository to a new location.
patch
PATCH /v1beta1/{repository.name=projects/*/locations/*/repositories/*}
Updates a single Repository.
queryDirectoryContents
GET /v1beta1/{name=projects/*/locations/*/repositories/*}:queryDirectoryContents
Returns the contents of a given Repository directory.
readFile
GET /v1beta1/{name=projects/*/locations/*/repositories/*}:readFile
Returns the contents of a file (inside a Repository).
setIamPolicy
POST /v1beta1/{resource=projects/*/locations/*/repositories/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1beta1/{resource=projects/*/locations/*/repositories/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1beta1.projects.locations.repositories.compilationResults
Methods
create
POST /v1beta1/{parent=projects/*/locations/*/repositories/*}/compilationResults
Creates a new CompilationResult in a given project and location.
get
GET /v1beta1/{name=projects/*/locations/*/repositories/*/compilationResults/*}
Fetches a single CompilationResult.
list
GET /v1beta1/{parent=projects/*/locations/*/repositories/*}/compilationResults
Lists CompilationResults in a given Repository.
query
GET /v1beta1/{name=projects/*/locations/*/repositories/*/compilationResults/*}:query
Returns CompilationResultActions in a given CompilationResult.
REST Resource: v1beta1.projects.locations.repositories.releaseConfigs
Methods
create
POST /v1beta1/{parent=projects/*/locations/*/repositories/*}/releaseConfigs
Creates a new ReleaseConfig in a given Repository.
delete
DELETE /v1beta1/{name=projects/*/locations/*/repositories/*/releaseConfigs/*}
Deletes a single ReleaseConfig.
get
GET /v1beta1/{name=projects/*/locations/*/repositories/*/releaseConfigs/*}
Fetches a single ReleaseConfig.
list
GET /v1beta1/{parent=projects/*/locations/*/repositories/*}/releaseConfigs
Lists ReleaseConfigs in a given Repository.
patch
PATCH /v1beta1/{releaseConfig.name=projects/*/locations/*/repositories/*/releaseConfigs/*}
Updates a single ReleaseConfig.
REST Resource: v1beta1.projects.locations.repositories.workflowConfigs
Methods
create
POST /v1beta1/{parent=projects/*/locations/*/repositories/*}/workflowConfigs
Creates a new WorkflowConfig in a given Repository.
delete
DELETE /v1beta1/{name=projects/*/locations/*/repositories/*/workflowConfigs/*}
Deletes a single WorkflowConfig.
get
GET /v1beta1/{name=projects/*/locations/*/repositories/*/workflowConfigs/*}
Fetches a single WorkflowConfig.
list
GET /v1beta1/{parent=projects/*/locations/*/repositories/*}/workflowConfigs
Lists WorkflowConfigs in a given Repository.
patch
PATCH /v1beta1/{workflowConfig.name=projects/*/locations/*/repositories/*/workflowConfigs/*}
Updates a single WorkflowConfig.
REST Resource: v1beta1.projects.locations.repositories.workflowInvocations
Methods
cancel
POST /v1beta1/{name=projects/*/locations/*/repositories/*/workflowInvocations/*}:cancel
Requests cancellation of a running WorkflowInvocation.
create
POST /v1beta1/{parent=projects/*/locations/*/repositories/*}/workflowInvocations
Creates a new WorkflowInvocation in a given Repository.
delete
DELETE /v1beta1/{name=projects/*/locations/*/repositories/*/workflowInvocations/*}
Deletes a single WorkflowInvocation.
get
GET /v1beta1/{name=projects/*/locations/*/repositories/*/workflowInvocations/*}
Fetches a single WorkflowInvocation.
list
GET /v1beta1/{parent=projects/*/locations/*/repositories/*}/workflowInvocations
Lists WorkflowInvocations in a given Repository.
query
GET /v1beta1/{name=projects/*/locations/*/repositories/*/workflowInvocations/*}:query
Returns WorkflowInvocationActions in a given WorkflowInvocation.
REST Resource: v1beta1.projects.locations.repositories.workspaces
Methods
commit
POST /v1beta1/{name=projects/*/locations/*/repositories/*/workspaces/*}:commit
Applies a Git commit for uncommitted files in a Workspace.
create
POST /v1beta1/{parent=projects/*/locations/*/repositories/*}/workspaces
Creates a new Workspace in a given Repository.
delete
DELETE /v1beta1/{name=projects/*/locations/*/repositories/*/workspaces/*}
Deletes a single Workspace.
fetchFileDiff
GET /v1beta1/{workspace=projects/*/locations/*/repositories/*/workspaces/*}:fetchFileDiff
Fetches Git diff for an uncommitted file in a Workspace.
fetchFileGitStatuses
GET /v1beta1/{name=projects/*/locations/*/repositories/*/workspaces/*}:fetchFileGitStatuses
Fetches Git statuses for the files in a Workspace.
fetchGitAheadBehind
GET /v1beta1/{name=projects/*/locations/*/repositories/*/workspaces/*}:fetchGitAheadBehind
Fetches Git ahead/behind against a remote branch.
get
GET /v1beta1/{name=projects/*/locations/*/repositories/*/workspaces/*}
Fetches a single Workspace.
getIamPolicy
GET /v1beta1/{resource=projects/*/locations/*/repositories/*/workspaces/*}:getIamPolicy
Gets the access control policy for a resource.
installNpmPackages
POST /v1beta1/{workspace=projects/*/locations/*/repositories/*/workspaces/*}:installNpmPackages
Installs dependency NPM packages (inside a Workspace).
list
GET /v1beta1/{parent=projects/*/locations/*/repositories/*}/workspaces
Lists Workspaces in a given Repository.
makeDirectory
POST /v1beta1/{workspace=projects/*/locations/*/repositories/*/workspaces/*}:makeDirectory
Creates a directory inside a Workspace.
moveDirectory
POST /v1beta1/{workspace=projects/*/locations/*/repositories/*/workspaces/*}:moveDirectory
Moves a directory (inside a Workspace), and all of its contents, to a new location.
moveFile
POST /v1beta1/{workspace=projects/*/locations/*/repositories/*/workspaces/*}:moveFile
Moves a file (inside a Workspace) to a new location.
pull
POST /v1beta1/{name=projects/*/locations/*/repositories/*/workspaces/*}:pull
Pulls Git commits from the Repository's remote into a Workspace.
push
POST /v1beta1/{name=projects/*/locations/*/repositories/*/workspaces/*}:push
Pushes Git commits from a Workspace to the Repository's remote.
queryDirectoryContents
GET /v1beta1/{workspace=projects/*/locations/*/repositories/*/workspaces/*}:queryDirectoryContents
Returns the contents of a given Workspace directory.
readFile
GET /v1beta1/{workspace=projects/*/locations/*/repositories/*/workspaces/*}:readFile
Returns the contents of a file (inside a Workspace).
removeDirectory
POST /v1beta1/{workspace=projects/*/locations/*/repositories/*/workspaces/*}:removeDirectory
Deletes a directory (inside a Workspace) and all of its contents.
removeFile
POST /v1beta1/{workspace=projects/*/locations/*/repositories/*/workspaces/*}:removeFile
Deletes a file (inside a Workspace).
reset
POST /v1beta1/{name=projects/*/locations/*/repositories/*/workspaces/*}:reset
Performs a Git reset for uncommitted files in a Workspace.
searchFiles
GET /v1beta1/{workspace=projects/*/locations/*/repositories/*/workspaces/*}:searchFiles
Finds the contents of a given Workspace directory by filter.
setIamPolicy
POST /v1beta1/{resource=projects/*/locations/*/repositories/*/workspaces/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1beta1/{resource=projects/*/locations/*/repositories/*/workspaces/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
writeFile
POST /v1beta1/{workspace=projects/*/locations/*/repositories/*/workspaces/*}:writeFile
Writes to a file (inside a Workspace).
REST Resource: v1beta1.projects.locations.teamFolders
Methods
create
POST /v1beta1/{parent=projects/*/locations/*}/teamFolders
Creates a new TeamFolder in a given project and location.
delete
DELETE /v1beta1/{name=projects/*/locations/*/teamFolders/*}
Deletes a single TeamFolder.
deleteTree
POST /v1beta1/{name=projects/*/locations/*/teamFolders/*}:deleteTree
Deletes a TeamFolder with its contents (Folders, Repositories, Workspaces, ReleaseConfigs, and WorkflowConfigs).
get
GET /v1beta1/{name=projects/*/locations/*/teamFolders/*}
Fetches a single TeamFolder.
getIamPolicy
GET /v1beta1/{resource=projects/*/locations/*/teamFolders/*}:getIamPolicy
Gets the access control policy for a resource.
patch
PATCH /v1beta1/{teamFolder.name=projects/*/locations/*/teamFolders/*}
Updates a single TeamFolder.
queryContents
GET /v1beta1/{teamFolder=projects/*/locations/*/teamFolders/*}:queryContents
Returns the contents of a given TeamFolder.
search
GET /v1beta1/{location=projects/*/locations/*}/teamFolders:search
Returns all TeamFolders in a given location that the caller has access to and match the provided filter.
setIamPolicy
POST /v1beta1/{resource=projects/*/locations/*/teamFolders/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1beta1/{resource=projects/*/locations/*/teamFolders/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
