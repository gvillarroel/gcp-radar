---
title: "Migration Center API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/migration-center/docs/reference/rest/v1
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/migration-center/docs/api
source_metadata:
  url: https://docs.cloud.google.com/migration-center/docs/reference/rest/v1
  title: "Migration Center API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Migration Center
Reference
Send feedback
Migration Center API
Stay organized with collections
Save and categorize content based on your preferences.
A unified platform that helps you accelerate your end-to-end cloud journey from your current on-premises or cloud environments to Google Cloud.
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.assets
REST Resource: v1.projects.locations.discoveryClients
REST Resource: v1.projects.locations.groups
REST Resource: v1.projects.locations.importJobs
REST Resource: v1.projects.locations.importJobs.importDataFiles
REST Resource: v1.projects.locations.operations
REST Resource: v1.projects.locations.preferenceSets
REST Resource: v1.projects.locations.reportConfigs
REST Resource: v1.projects.locations.reportConfigs.reports
REST Resource: v1.projects.locations.sources
REST Resource: v1.projects.locations.sources.errorFrames
Service: migrationcenter.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://migrationcenter.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://migrationcenter.googleapis.com
REST Resource: v1.projects.locations
Methods
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
get Settings
GET /v1/{name=projects/*/locations/*/settings}
Gets the details of regional settings.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
update Settings
PATCH /v1/{settings.name=projects/*/locations/*/settings}
Updates the regional-level project settings.
REST Resource: v1.projects.locations.assets
Methods
aggregate Values
POST /v1/{parent=projects/*/locations/*}/assets:aggregateValues
Aggregates the requested fields based on provided function.
batch Delete
POST /v1/{parent=projects/*/locations/*}/assets:batchDelete
Deletes list of Assets.
batch Update
POST /v1/{parent=projects/*/locations/*}/assets:batchUpdate
Updates the parameters of a list of assets.
delete
DELETE /v1/{name=projects/*/locations/*/assets/*}
Deletes an asset.
get
GET /v1/{name=projects/*/locations/*/assets/*}
Gets the details of an asset.
list
GET /v1/{parent=projects/*/locations/*}/assets
Lists all the assets in a given project and location.
patch
PATCH /v1/{asset.name=projects/*/locations/*/assets/*}
Updates the parameters of an asset.
report Asset Frames
POST /v1/{parent=projects/*/locations/*}/assets:reportAssetFrames
Reports a set of frames.
REST Resource: v1.projects.locations.discoveryClients
Methods
create
POST /v1/{parent=projects/*/locations/*}/discoveryClients
Creates a new discovery client.
delete
DELETE /v1/{name=projects/*/locations/*/discoveryClients/*}
Deletes a discovery client.
get
GET /v1/{name=projects/*/locations/*/discoveryClients/*}
Gets the details of a discovery client.
list
GET /v1/{parent=projects/*/locations/*}/discoveryClients
Lists all the discovery clients in a given project and location.
patch
PATCH /v1/{discoveryClient.name=projects/*/locations/*/discoveryClients/*}
Updates a discovery client.
send Heartbeat
POST /v1/{name=projects/*/locations/*/discoveryClients/*}:sendHeartbeat
Sends a discovery client heartbeat.
REST Resource: v1.projects.locations.groups
Methods
add Assets
POST /v1/{group=projects/*/locations/*/groups/*}:addAssets
Adds assets to a group.
create
POST /v1/{parent=projects/*/locations/*}/groups
Creates a new group in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/groups/*}
Deletes a group.
get
GET /v1/{name=projects/*/locations/*/groups/*}
Gets the details of a group.
list
GET /v1/{parent=projects/*/locations/*}/groups
Lists all groups in a given project and location.
patch
PATCH /v1/{group.name=projects/*/locations/*/groups/*}
Updates the parameters of a group.
remove Assets
POST /v1/{group=projects/*/locations/*/groups/*}:removeAssets
Removes assets from a group.
REST Resource: v1.projects.locations.importJobs
Methods
create
POST /v1/{parent=projects/*/locations/*}/importJobs
Creates an import job.
delete
DELETE /v1/{name=projects/*/locations/*/importJobs/*}
Deletes an import job.
get
GET /v1/{name=projects/*/locations/*/importJobs/*}
Gets the details of an import job.
list
GET /v1/{parent=projects/*/locations/*}/importJobs
Lists all import jobs.
patch
PATCH /v1/{importJob.name=projects/*/locations/*/importJobs/*}
Updates an import job.
run
POST /v1/{name=projects/*/locations/*/importJobs/*}:run
Runs an import job.
validate
POST /v1/{name=projects/*/locations/*/importJobs/*}:validate
Validates an import job.
REST Resource: v1.projects.locations.importJobs.importDataFiles
Methods
create
POST /v1/{parent=projects/*/locations/*/importJobs/*}/importDataFiles
Creates an import data file.
delete
DELETE /v1/{name=projects/*/locations/*/importJobs/*/importDataFiles/*}
Delete an import data file.
get
GET /v1/{name=projects/*/locations/*/importJobs/*/importDataFiles/*}
Gets an import data file.
list
GET /v1/{parent=projects/*/locations/*/importJobs/*}/importDataFiles
List import data files.
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
REST Resource: v1.projects.locations.preferenceSets
Methods
create
POST /v1/{parent=projects/*/locations/*}/preferenceSets
Creates a new preference set in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/preferenceSets/*}
Deletes a preference set.
get
GET /v1/{name=projects/*/locations/*/preferenceSets/*}
Gets the details of a preference set.
list
GET /v1/{parent=projects/*/locations/*}/preferenceSets
Lists all the preference sets in a given project and location.
patch
PATCH /v1/{preferenceSet.name=projects/*/locations/*/preferenceSets/*}
Updates the parameters of a preference set.
REST Resource: v1.projects.locations.reportConfigs
Methods
create
POST /v1/{parent=projects/*/locations/*}/reportConfigs
Creates a report configuration.
delete
DELETE /v1/{name=projects/*/locations/*/reportConfigs/*}
Deletes a ReportConfig.
get
GET /v1/{name=projects/*/locations/*/reportConfigs/*}
Gets details of a single ReportConfig.
list
GET /v1/{parent=projects/*/locations/*}/reportConfigs
Lists ReportConfigs in a given project and location.
REST Resource: v1.projects.locations.reportConfigs.reports
Methods
create
POST /v1/{parent=projects/*/locations/*/reportConfigs/*}/reports
Creates a report.
delete
DELETE /v1/{name=projects/*/locations/*/reportConfigs/*/reports/*}
Deletes a Report.
get
GET /v1/{name=projects/*/locations/*/reportConfigs/*/reports/*}
Gets details of a single Report.
list
GET /v1/{parent=projects/*/locations/*/reportConfigs/*}/reports
Lists Reports in a given ReportConfig.
REST Resource: v1.projects.locations.sources
Methods
create
POST /v1/{parent=projects/*/locations/*}/sources
Creates a new source in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/sources/*}
Deletes a source.
get
GET /v1/{name=projects/*/locations/*/sources/*}
Gets the details of a source.
list
GET /v1/{parent=projects/*/locations/*}/sources
Lists all the sources in a given project and location.
patch
PATCH /v1/{source.name=projects/*/locations/*/sources/*}
Updates the parameters of a source.
REST Resource: v1.projects.locations.sources.errorFrames
Methods
get
GET /v1/{name=projects/*/locations/*/sources/*/errorFrames/*}
Gets the details of an error frame.
list
GET /v1/{parent=projects/*/locations/*/sources/*}/errorFrames
Lists all error frames in a given source and location.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-17 UTC."],[],[]]
