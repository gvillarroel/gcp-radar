---
title: "Data Lineage API \_|\_ Dataplex Universal Catalog \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataplex/docs/reference/data-lineage/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataplex/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/dataplex/docs/reference/data-lineage/rest
  title: "Data Lineage API \_|\_ Dataplex Universal Catalog \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Dataplex Universal Catalog
Reference
Send feedback
Data Lineage API
Stay organized with collections
Save and categorize content based on your preferences.
REST Resource: v1.folders.locations.config
REST Resource: v1.organizations.locations.config
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.config
REST Resource: v1.projects.locations.operations
REST Resource: v1.projects.locations.processes
REST Resource: v1.projects.locations.processes.runs
REST Resource: v1.projects.locations.processes.runs.lineageEvents
Service: datalineage.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://datalineage.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://datalineage.googleapis.com
REST Resource: v1.folders.locations.config
Methods
get
GET /v1/{name}
Get the Config for a given resource.
patch
PATCH /v1/{config.name}
Update the Config for a given resource.
REST Resource: v1.organizations.locations.config
Methods
get
GET /v1/{name}
Get the Config for a given resource.
patch
PATCH /v1/{config.name}
Update the Config for a given resource.
REST Resource: v1.projects.locations
Methods
batchSearchLinkProcesses
POST /v1/{parent}:batchSearchLinkProcesses
Retrieve information about LineageProcesses associated with specific links.
processOpenLineageRunEvent
POST /v1/{parent}:processOpenLineageRunEvent
Creates new lineage events together with their parents: process and run.
searchLinks
POST /v1/{parent}:searchLinks
Retrieve a list of links connected to a specific asset.
REST Resource: v1.projects.locations.config
Methods
get
GET /v1/{name}
Get the Config for a given resource.
patch
PATCH /v1/{config.name}
Update the Config for a given resource.
REST Resource: v1.projects.locations.operations
Methods
cancel
POST /v1/{name}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1/{name}
Deletes a long-running operation.
get
GET /v1/{name}
Gets the latest state of a long-running operation.
list
GET /v1/{name}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1.projects.locations.processes
Methods
create
POST /v1/{parent}/processes
Creates a new process.
delete
DELETE /v1/{name}
Deletes the process with the specified name.
get
GET /v1/{name}
Gets the details of the specified process.
list
GET /v1/{parent}/processes
List processes in the given project and location.
patch
PATCH /v1/{process.name}
Updates a process.
REST Resource: v1.projects.locations.processes.runs
Methods
create
POST /v1/{parent}/runs
Creates a new run.
delete
DELETE /v1/{name}
Deletes the run with the specified name.
get
GET /v1/{name}
Gets the details of the specified run.
list
GET /v1/{parent}/runs
Lists runs in the given project and location.
patch
PATCH /v1/{run.name}
Updates a run.
REST Resource: v1.projects.locations.processes.runs.lineageEvents
Methods
create
POST /v1/{parent}/lineageEvents
Creates a new lineage event.
delete
DELETE /v1/{name}
Deletes the lineage event with the specified name.
get
GET /v1/{name}
Gets details of a specified lineage event.
list
GET /v1/{parent}/lineageEvents
Lists lineage events in the given project and location.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-01-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-01-29 UTC."],[],[]]
