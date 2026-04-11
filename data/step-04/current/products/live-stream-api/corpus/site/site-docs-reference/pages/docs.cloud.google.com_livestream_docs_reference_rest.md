---
title: "Live Stream API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/livestream/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/livestream/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/livestream/docs/reference/rest
  title: "Live Stream API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Live Stream API
Reference
Send feedback
Live Stream API
Stay organized with collections
Save and categorize content based on your preferences.
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.assets
REST Resource: v1.projects.locations.channels
REST Resource: v1.projects.locations.channels.clips
REST Resource: v1.projects.locations.channels.dvrSessions
REST Resource: v1.projects.locations.channels.events
REST Resource: v1.projects.locations.inputs
REST Resource: v1.projects.locations.operations
REST Resource: v1.projects.locations.pools
Service: livestream.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://livestream.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://livestream.googleapis.com
REST Resource: v1.projects.locations
Methods
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.assets
Methods
create
POST /v1/{parent=projects/*/locations/*}/assets
Creates a Asset with the provided unique ID in the specified region.
delete
DELETE /v1/{name=projects/*/locations/*/assets/*}
Deletes the specified asset if it is not used.
get
GET /v1/{name=projects/*/locations/*/assets/*}
Returns the specified asset.
list
GET /v1/{parent=projects/*/locations/*}/assets
Returns a list of all assets in the specified region.
REST Resource: v1.projects.locations.channels
Methods
create
POST /v1/{parent=projects/*/locations/*}/channels
Creates a channel with the provided unique ID in the specified region.
delete
DELETE /v1/{name=projects/*/locations/*/channels/*}
Deletes the specified channel.
get
GET /v1/{name=projects/*/locations/*/channels/*}
Returns the specified channel.
list
GET /v1/{parent=projects/*/locations/*}/channels
Returns a list of all channels in the specified region.
patch
PATCH /v1/{channel.name=projects/*/locations/*/channels/*}
Updates the specified channel.
start
POST /v1/{name=projects/*/locations/*/channels/*}:start
Starts the specified channel.
startdistribution
POST /v1/{name=projects/*/locations/*/channels/*}:startdistribution
Starts distribution which delivers outputs to the destination indicated by the Distribution configuration.
stop
POST /v1/{name=projects/*/locations/*/channels/*}:stop
Stops the specified channel.
stopdistribution
POST /v1/{name=projects/*/locations/*/channels/*}:stopdistribution
Stops the specified distribution.
REST Resource: v1.projects.locations.channels.clips
Methods
create
POST /v1/{parent=projects/*/locations/*/channels/*}/clips
Creates a clip with the provided clip ID in the specified channel.
delete
DELETE /v1/{name=projects/*/locations/*/channels/*/clips/*}
Deletes the specified clip job resource.
get
GET /v1/{name=projects/*/locations/*/channels/*/clips/*}
Returns the specified clip.
list
GET /v1/{parent=projects/*/locations/*/channels/*}/clips
Returns a list of all clips in the specified channel.
REST Resource: v1.projects.locations.channels.dvrSessions
Methods
create
POST /v1/{parent=projects/*/locations/*/channels/*}/dvrSessions
Creates a DVR session with the provided unique ID in the specified channel.
delete
DELETE /v1/{name=projects/*/locations/*/channels/*/dvrSessions/*}
Deletes the specified DVR session.
get
GET /v1/{name=projects/*/locations/*/channels/*/dvrSessions/*}
Returns the specified DVR session.
list
GET /v1/{parent=projects/*/locations/*/channels/*}/dvrSessions
Returns a list of all DVR sessions in the specified channel.
patch
PATCH /v1/{dvrSession.name=projects/*/locations/*/channels/*/dvrSessions/*}
Updates the specified DVR session.
REST Resource: v1.projects.locations.channels.events
Methods
create
POST /v1/{parent=projects/*/locations/*/channels/*}/events
Creates an event with the provided unique ID in the specified channel.
delete
DELETE /v1/{name=projects/*/locations/*/channels/*/events/*}
Deletes the specified event.
get
GET /v1/{name=projects/*/locations/*/channels/*/events/*}
Returns the specified event.
list
GET /v1/{parent=projects/*/locations/*/channels/*}/events
Returns a list of all events in the specified channel.
REST Resource: v1.projects.locations.inputs
Methods
create
POST /v1/{parent=projects/*/locations/*}/inputs
Creates an input with the provided unique ID in the specified region.
delete
DELETE /v1/{name=projects/*/locations/*/inputs/*}
Deletes the specified input.
get
GET /v1/{name=projects/*/locations/*/inputs/*}
Returns the specified input.
list
GET /v1/{parent=projects/*/locations/*}/inputs
Returns a list of all inputs in the specified region.
patch
PATCH /v1/{input.name=projects/*/locations/*/inputs/*}
Updates the specified input.
preview
POST /v1/{name=projects/*/locations/*/inputs/*}:preview
Preview the streaming content of the specified input.
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
REST Resource: v1.projects.locations.pools
Methods
get
GET /v1/{name=projects/*/locations/*/pools/*}
Returns the specified pool.
patch
PATCH /v1/{pool.name=projects/*/locations/*/pools/*}
Updates the specified pool.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-10 UTC."],[],[]]
