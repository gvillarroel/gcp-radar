---
title: "Gemini for Google Cloud API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/docs/api/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/docs/api/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/gemini/docs/api/reference/rest
  title: "Gemini for Google Cloud API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Gemini for Google Cloud
API and references
Send feedback
Gemini for Google Cloud API
Stay organized with collections
Save and categorize content based on your preferences.
The AI-powered assistant for Google Cloud.
REST Resource: v1
REST Resource: v1.projects
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.codeRepositoryIndexes
REST Resource: v1.projects.locations.codeRepositoryIndexes.repositoryGroups
REST Resource: v1.projects.locations.codeToolsSettings
REST Resource: v1.projects.locations.codeToolsSettings.settingBindings
REST Resource: v1.projects.locations.dataSharingWithGoogleSettings
REST Resource:
v1.projects.locations.dataSharingWithGoogleSettings.settingBindings
REST Resource: v1.projects.locations.geminiGcpEnablementSettings
REST Resource:
v1.projects.locations.geminiGcpEnablementSettings.settingBindings
REST Resource: v1.projects.locations.operations
REST Resource: v1.projects.locations.loggingSettings
REST Resource: v1.projects.locations.loggingSettings.settingBindings
REST Resource: v1.projects.locations.releaseChannelSettings
REST Resource: v1.projects.locations.releaseChannelSettings.settingBindings
Service: cloudaicompanion.googleapis.com
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://cloudaicompanion.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://cloudaicompanion.googleapis.com
REST Resource: v1.projects.locations
Methods
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.codeRepositoryIndexes
Methods
create
POST /v1/{parent=projects/*/locations/*}/codeRepositoryIndexes
Creates a new CodeRepositoryIndex in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/codeRepositoryIndexes/*}
Deletes a single CodeRepositoryIndex.
get
GET /v1/{name=projects/*/locations/*/codeRepositoryIndexes/*}
Gets details of a single CodeRepositoryIndex.
list
GET /v1/{parent=projects/*/locations/*}/codeRepositoryIndexes
Lists CodeRepositoryIndexes in a given project and location.
patch
PATCH /v1/{codeRepositoryIndex.name=projects/*/locations/*/codeRepositoryIndexes/*}
Updates the parameters of a single CodeRepositoryIndex.
REST Resource: v1.projects.locations.codeRepositoryIndexes.repositoryGroups
Methods
create
POST /v1/{parent=projects/*/locations/*/codeRepositoryIndexes/*}/repositoryGroups
Creates a new RepositoryGroup in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/codeRepositoryIndexes/*/repositoryGroups/*}
Deletes a single RepositoryGroup.
get
GET /v1/{name=projects/*/locations/*/codeRepositoryIndexes/*/repositoryGroups/*}
Gets details of a single RepositoryGroup.
getIamPolicy
GET /v1/{resource=projects/*/locations/*/codeRepositoryIndexes/*/repositoryGroups/*}:getIamPolicy
Gets the access control policy for a resource.
list
GET /v1/{parent=projects/*/locations/*/codeRepositoryIndexes/*}/repositoryGroups
Lists RepositoryGroups in a given project and location.
patch
PATCH /v1/{repositoryGroup.name=projects/*/locations/*/codeRepositoryIndexes/*/repositoryGroups/*}
Updates the parameters of a single RepositoryGroup.
setIamPolicy
POST /v1/{resource=projects/*/locations/*/codeRepositoryIndexes/*/repositoryGroups/*}:setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/codeRepositoryIndexes/*/repositoryGroups/*}:testIamPermissions
Returns permissions that a caller has on the specified resource.
REST Resource: v1.projects.locations.codeToolsSettings
Methods
create
POST /v1/{parent=projects/*/locations/*}/codeToolsSettings
Creates a new CodeToolsSetting in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/codeToolsSettings/*}
Deletes a single CodeToolsSetting.
get
GET /v1/{name=projects/*/locations/*/codeToolsSettings/*}
Gets details of a single CodeToolsSetting.
list
GET /v1/{parent=projects/*/locations/*}/codeToolsSettings
Lists CodeToolsSettings in a given project and location.
patch
PATCH /v1/{codeToolsSetting.name=projects/*/locations/*/codeToolsSettings/*}
Updates the parameters of a single CodeToolsSetting.
REST Resource: v1.projects.locations.codeToolsSettings.settingBindings
Methods
create
POST /v1/{parent=projects/*/locations/*/codeToolsSettings/*}/settingBindings
Creates a new SettingBinding in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/codeToolsSettings/*/settingBindings/*}
Deletes a single SettingBinding.
get
GET /v1/{name=projects/*/locations/*/codeToolsSettings/*/settingBindings/*}
Gets details of a single SettingBinding.
list
GET /v1/{parent=projects/*/locations/*/codeToolsSettings/*}/settingBindings
Lists SettingBindings in a given project and location.
patch
PATCH /v1/{settingBinding.name=projects/*/locations/*/codeToolsSettings/*/settingBindings/*}
Updates the parameters of a single SettingBinding.
REST Resource: v1.projects.locations.dataSharingWithGoogleSettings
Methods
create
POST /v1/{parent=projects/*/locations/*}/dataSharingWithGoogleSettings
Creates a new DataSharingWithGoogleSetting in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/dataSharingWithGoogleSettings/*}
Deletes a single DataSharingWithGoogleSetting.
get
GET /v1/{name=projects/*/locations/*/dataSharingWithGoogleSettings/*}
Gets details of a single DataSharingWithGoogleSetting.
list
GET /v1/{parent=projects/*/locations/*}/dataSharingWithGoogleSettings
Lists DataSharingWithGoogleSettings in a given project and location.
patch
PATCH /v1/{dataSharingWithGoogleSetting.name=projects/*/locations/*/dataSharingWithGoogleSettings/*}
Updates the parameters of a single DataSharingWithGoogleSetting.
REST Resource: v1.projects.locations.dataSharingWithGoogleSettings.settingBindings
Methods
create
POST /v1/{parent=projects/*/locations/*/dataSharingWithGoogleSettings/*}/settingBindings
Creates a new SettingBinding in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/dataSharingWithGoogleSettings/*/settingBindings/*}
Deletes a single SettingBinding.
get
GET /v1/{name=projects/*/locations/*/dataSharingWithGoogleSettings/*/settingBindings/*}
Gets details of a single SettingBinding.
list
GET /v1/{parent=projects/*/locations/*/dataSharingWithGoogleSettings/*}/settingBindings
Lists SettingBindings in a given project and location.
patch
PATCH /v1/{settingBinding.name=projects/*/locations/*/dataSharingWithGoogleSettings/*/settingBindings/*}
Updates the parameters of a single SettingBinding.
REST Resource: v1.projects.locations.geminiGcpEnablementSettings
Methods
create
POST /v1/{parent=projects/*/locations/*}/geminiGcpEnablementSettings
Creates a new GeminiGcpEnablementSetting in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/geminiGcpEnablementSettings/*}
Deletes a single GeminiGcpEnablementSetting.
get
GET /v1/{name=projects/*/locations/*/geminiGcpEnablementSettings/*}
Gets details of a single GeminiGcpEnablementSetting.
list
GET /v1/{parent=projects/*/locations/*}/geminiGcpEnablementSettings
Lists GeminiGcpEnablementSettings in a given project and location.
patch
PATCH /v1/{geminiGcpEnablementSetting.name=projects/*/locations/*/geminiGcpEnablementSettings/*}
Updates the parameters of a single GeminiGcpEnablementSetting.
REST Resource: v1.projects.locations.geminiGcpEnablementSettings.settingBindings
Methods
create
POST /v1/{parent=projects/*/locations/*/geminiGcpEnablementSettings/*}/settingBindings
Creates a new SettingBinding in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/geminiGcpEnablementSettings/*/settingBindings/*}
Deletes a single SettingBinding.
get
GET /v1/{name=projects/*/locations/*/geminiGcpEnablementSettings/*/settingBindings/*}
Gets details of a single SettingBinding.
list
GET /v1/{parent=projects/*/locations/*/geminiGcpEnablementSettings/*}/settingBindings
Lists SettingBindings in a given project and location.
patch
PATCH /v1/{settingBinding.name=projects/*/locations/*/geminiGcpEnablementSettings/*/settingBindings/*}
Updates the parameters of a single SettingBinding.
REST Resource: v1.projects.locations.loggingSettings
Methods
create
POST /v1/{parent=projects/*/locations/*}/loggingSettings
Creates a new LoggingSetting in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/loggingSettings/*}
Deletes a single LoggingSetting.
get
GET /v1/{name=projects/*/locations/*/loggingSettings/*}
Gets details of a single LoggingSetting.
list
GET /v1/{parent=projects/*/locations/*}/loggingSettings
Lists LoggingSettings in a given project and location.
patch
PATCH /v1/{loggingSetting.name=projects/*/locations/*/loggingSettings/*}
Updates the parameters of a single LoggingSetting.
REST Resource: v1.projects.locations.loggingSettings.settingBindings
Methods
create
POST /v1/{parent=projects/*/locations/*/loggingSettings/*}/settingBindings
Creates a new SettingBinding in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/loggingSettings/*/settingBindings/*}
Deletes a single SettingBinding.
get
GET /v1/{name=projects/*/locations/*/loggingSettings/*/settingBindings/*}
Gets details of a single SettingBinding.
list
GET /v1/{parent=projects/*/locations/*/loggingSettings/*}/settingBindings
Lists SettingBindings in a given project and location.
patch
PATCH /v1/{settingBinding.name=projects/*/locations/*/loggingSettings/*/settingBindings/*}
Updates the parameters of a single SettingBinding.
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
REST Resource: v1.projects.locations.releaseChannelSettings
Methods
create
POST /v1/{parent=projects/*/locations/*}/releaseChannelSettings
Creates a new ReleaseChannelSetting in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/releaseChannelSettings/*}
Deletes a single ReleaseChannelSetting.
get
GET /v1/{name=projects/*/locations/*/releaseChannelSettings/*}
Gets details of a single ReleaseChannelSetting.
list
GET /v1/{parent=projects/*/locations/*}/releaseChannelSettings
Lists ReleaseChannelSettings in a given project and location.
patch
PATCH /v1/{releaseChannelSetting.name=projects/*/locations/*/releaseChannelSettings/*}
Updates the parameters of a single ReleaseChannelSetting.
REST Resource: v1.projects.locations.releaseChannelSettings.settingBindings
Methods
create
POST /v1/{parent=projects/*/locations/*/releaseChannelSettings/*}/settingBindings
Creates a new SettingBinding in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/releaseChannelSettings/*/settingBindings/*}
Deletes a single SettingBinding.
get
GET /v1/{name=projects/*/locations/*/releaseChannelSettings/*/settingBindings/*}
Gets details of a single SettingBinding.
list
GET /v1/{parent=projects/*/locations/*/releaseChannelSettings/*}/settingBindings
Lists SettingBindings in a given project and location.
patch
PATCH /v1/{settingBinding.name=projects/*/locations/*/releaseChannelSettings/*/settingBindings/*}
Updates the parameters of a single SettingBinding.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-12 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-12 UTC."],[],[]]
