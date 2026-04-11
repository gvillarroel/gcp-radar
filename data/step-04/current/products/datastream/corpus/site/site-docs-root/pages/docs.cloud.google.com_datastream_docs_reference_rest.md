---
title: "Datastream API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastream/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/datastream/docs
source_metadata:
  url: https://docs.cloud.google.com/datastream/docs/reference/rest
  title: "Datastream API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Datastream
Reference
Send feedback
Datastream API
Stay organized with collections
Save and categorize content based on your preferences.
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.connectionProfiles
REST Resource: v1.projects.locations.operations
REST Resource: v1.projects.locations.privateConnections
REST Resource: v1.projects.locations.privateConnections.routes
REST Resource: v1.projects.locations.streams
REST Resource: v1.projects.locations.streams.objects
Service: datastream.googleapis.com
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://datastream.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://datastream.googleapis.com
REST Resource: v1.projects.locations
Methods
fetchStaticIps
GET /v1/{name}:fetchStaticIps
The FetchStaticIps API call exposes the static IP addresses used by Datastream.
get
GET /v1/{name}
Gets information about a location.
list
GET /v1/{name}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.connectionProfiles
Methods
create
POST /v1/{parent}/connectionProfiles
Use this method to create a connection profile in a project and location.
delete
DELETE /v1/{name}
Use this method to delete a connection profile.
discover
POST /v1/{parent}/connectionProfiles:discover
Use this method to discover a connection profile.
get
GET /v1/{name}
Use this method to get details about a connection profile.
list
GET /v1/{parent}/connectionProfiles
Use this method to list connection profiles created in a project and location.
patch
PATCH /v1/{connectionProfile.name}
Use this method to update the parameters of a connection profile.
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
REST Resource: v1.projects.locations.privateConnections
Methods
create
POST /v1/{parent}/privateConnections
Use this method to create a private connectivity configuration.
delete
DELETE /v1/{name}
Use this method to delete a private connectivity configuration.
get
GET /v1/{name}
Use this method to get details about a private connectivity configuration.
list
GET /v1/{parent}/privateConnections
Use this method to list private connectivity configurations in a project and location.
REST Resource: v1.projects.locations.privateConnections.routes
Methods
create
POST /v1/{parent}/routes
Use this method to create a route for a private connectivity configuration in a project and location.
delete
DELETE /v1/{name}
Use this method to delete a route.
get
GET /v1/{name}
Use this method to get details about a route.
list
GET /v1/{parent}/routes
Use this method to list routes created for a private connectivity configuration in a project and location.
REST Resource: v1.projects.locations.streams
Methods
create
POST /v1/{parent}/streams
Use this method to create a stream.
delete
DELETE /v1/{name}
Use this method to delete a stream.
get
GET /v1/{name}
Use this method to get details about a stream.
list
GET /v1/{parent}/streams
Use this method to list streams in a project and location.
patch
PATCH /v1/{stream.name}
Use this method to update the configuration of a stream.
run
POST /v1/{name}:run
Use this method to start, resume or recover a stream with a non default CDC strategy.
REST Resource: v1.projects.locations.streams.objects
Methods
get
GET /v1/{name}
Use this method to get details about a stream object.
list
GET /v1/{parent}/objects
Use this method to list the objects of a specific stream.
lookup
POST /v1/{parent}/objects:lookup
Use this method to look up a stream object by its source object identifier.
startBackfillJob
POST /v1/{object}:startBackfillJob
Use this method to start a backfill job for the specified stream object.
stopBackfillJob
POST /v1/{object}:stopBackfillJob
Use this method to stop a backfill job for the specified stream object.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-13 UTC."],[],[]]
