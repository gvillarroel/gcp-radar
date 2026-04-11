---
title: "Video Stitcher API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/video-stitcher/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/video-stitcher/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/video-stitcher/docs/reference/rest
  title: "Video Stitcher API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

To enable the Video Stitcher API for your project, please reach out to your Account Representative or contact Sales to learn more.
Home
Documentation
AI and ML
Video Stitcher API
Reference
Send feedback
Video Stitcher API
Stay organized with collections
Save and categorize content based on your preferences.
REST Resource: v1.projects.locations.cdnKeys
REST Resource: v1.projects.locations.liveConfigs
REST Resource: v1.projects.locations.liveSessions
REST Resource: v1.projects.locations.liveSessions.liveAdMetadata
REST Resource: v1.projects.locations.liveSessions.liveAdTagDetails
REST Resource: v1.projects.locations.operations
REST Resource: v1.projects.locations.slates
REST Resource: v1.projects.locations.vodConfigs
REST Resource: v1.projects.locations.vodSessions
REST Resource: v1.projects.locations.vodSessions.vodAdTagDetails
REST Resource: v1.projects.locations.vodSessions.vodStitchDetails
Service: videostitcher.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://videostitcher.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://videostitcher.googleapis.com
REST Resource: v1.projects.locations.cdnKeys
Methods
create
POST /v1/{parent=projects/*/locations/*}/cdnKeys
Creates a new CDN key.
delete
DELETE /v1/{name=projects/*/locations/*/cdnKeys/*}
Deletes the specified CDN key.
get
GET /v1/{name=projects/*/locations/*/cdnKeys/*}
Returns the specified CDN key.
list
GET /v1/{parent=projects/*/locations/*}/cdnKeys
Lists all CDN keys in the specified project and location.
patch
PATCH /v1/{cdnKey.name=projects/*/locations/*/cdnKeys/*}
Updates the specified CDN key.
REST Resource: v1.projects.locations.liveConfigs
Methods
create
POST /v1/{parent=projects/*/locations/*}/liveConfigs
Registers the live config with the provided unique ID in the specified region.
delete
DELETE /v1/{name=projects/*/locations/*/liveConfigs/*}
Deletes the specified live config.
get
GET /v1/{name=projects/*/locations/*/liveConfigs/*}
Returns the specified live config managed by the Video Stitcher service.
list
GET /v1/{parent=projects/*/locations/*}/liveConfigs
Lists all live configs managed by the Video Stitcher that belong to the specified project and region.
patch
PATCH /v1/{liveConfig.name=projects/*/locations/*/liveConfigs/*}
Updates the specified LiveConfig.
REST Resource: v1.projects.locations.liveSessions
Methods
create
POST /v1/{parent=projects/*/locations/*}/liveSessions
Creates a new live session.
get
GET /v1/{name=projects/*/locations/*/liveSessions/*}
Returns the details for the specified live session.
REST Resource: v1.projects.locations.liveSessions.liveAdMetadata
Methods
get
GET /v1/{name=projects/*/locations/*/liveSessions/*/liveAdMetadata/*}
Returns the specified ad metadata for the specified live session.
REST Resource: v1.projects.locations.liveSessions.liveAdTagDetails
Methods
get
GET /v1/{name=projects/*/locations/*/liveSessions/*/liveAdTagDetails/*}
Returns the specified ad tag detail for the specified live session.
list
GET /v1/{parent=projects/*/locations/*/liveSessions/*}/liveAdTagDetails
Return the list of ad tag details for the specified live session.
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
REST Resource: v1.projects.locations.slates
Methods
create
POST /v1/{parent=projects/*/locations/*}/slates
Creates a slate.
delete
DELETE /v1/{name=projects/*/locations/*/slates/*}
Deletes the specified slate.
get
GET /v1/{name=projects/*/locations/*/slates/*}
Returns the specified slate.
list
GET /v1/{parent=projects/*/locations/*}/slates
Lists all slates in the specified project and location.
patch
PATCH /v1/{slate.name=projects/*/locations/*/slates/*}
Updates the specified slate.
REST Resource: v1.projects.locations.vodConfigs
Methods
create
POST /v1/{parent=projects/*/locations/*}/vodConfigs
Registers the VOD config with the provided unique ID in the specified region.
delete
DELETE /v1/{name=projects/*/locations/*/vodConfigs/*}
Deletes the specified VOD config.
get
GET /v1/{name=projects/*/locations/*/vodConfigs/*}
Returns the specified VOD config managed by the Video Stitcher API service.
list
GET /v1/{parent=projects/*/locations/*}/vodConfigs
Lists all VOD configs managed by the Video Stitcher API that belong to the specified project and region.
patch
PATCH /v1/{vodConfig.name=projects/*/locations/*/vodConfigs/*}
Updates the specified VOD config.
REST Resource: v1.projects.locations.vodSessions
Methods
create
POST /v1/{parent=projects/*/locations/*}/vodSessions
Creates a client side playback VOD session and returns the full tracking and playback metadata of the session.
get
GET /v1/{name=projects/*/locations/*/vodSessions/*}
Returns the full tracking, playback metadata, and relevant ad-ops logs for the specified VOD session.
REST Resource: v1.projects.locations.vodSessions.vodAdTagDetails
Methods
get
GET /v1/{name=projects/*/locations/*/vodSessions/*/vodAdTagDetails/*}
Returns the specified ad tag detail for the specified VOD session.
list
GET /v1/{parent=projects/*/locations/*/vodSessions/*}/vodAdTagDetails
Return the list of ad tag details for the specified VOD session.
REST Resource: v1.projects.locations.vodSessions.vodStitchDetails
Methods
get
GET /v1/{name=projects/*/locations/*/vodSessions/*/vodStitchDetails/*}
Returns the specified stitching information for the specified VOD session.
list
GET /v1/{parent=projects/*/locations/*/vodSessions/*}/vodStitchDetails
Returns a list of detailed stitching information of the specified VOD session.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-14 UTC."],[],[]]
