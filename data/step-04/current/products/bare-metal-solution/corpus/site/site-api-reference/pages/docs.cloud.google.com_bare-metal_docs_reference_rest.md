---
title: "Bare Metal Solution API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bare-metal/docs/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/bare-metal/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/bare-metal/docs/reference/rest
  title: "Bare Metal Solution API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The availability of Bare Metal Solution is transitioning to a specialized, allowlist-only model. If you are an existing customer, please contact your Google account team to explore the value of migrating to new Oracle and Google Cloud strategic partnership offerings .
Home
Documentation
Distributed, hybrid, and multicloud
Bare Metal
Reference
Send feedback
Bare Metal Solution API
Stay organized with collections
Save and categorize content based on your preferences.
Provides ways to manage Bare Metal Solution hardware installed in a regional extension located near a Google Cloud data center.
REST Resource: v2.projects.locations
REST Resource: v2.projects.locations.instances
REST Resource: v2.projects.locations.networks
REST Resource: v2.projects.locations.nfsShares
REST Resource: v2.projects.locations.operations
REST Resource: v2.projects.locations.volumes
REST Resource: v2.projects.locations.volumes.luns
REST Resource: v2.projects.locations.volumes.snapshots
Service: baremetalsolution.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://baremetalsolution.googleapis.com/$discovery/rest?version=v2
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://baremetalsolution.googleapis.com
REST Resource: v2.projects.locations
Methods
get
GET /v2/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v2/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v2.projects.locations.instances
Methods
create
POST /v2/{parent=projects/*/locations/*}/instances
Create an Instance.
detachLun
POST /v2/{instance=projects/*/locations/*/instances/*}:detachLun
Detach LUN from Instance.
get
GET /v2/{name=projects/*/locations/*/instances/*}
Get details about a single server.
list
GET /v2/{parent=projects/*/locations/*}/instances
List servers in a given project and location.
patch
PATCH /v2/{instance.name=projects/*/locations/*/instances/*}
Update details of a single server.
rename
POST /v2/{name=projects/*/locations/*/instances/*}:rename
RenameInstance sets a new name for an instance.
reset
POST /v2/{name=projects/*/locations/*/instances/*}:reset
Perform an ungraceful, hard reset on a server.
start
POST /v2/{name=projects/*/locations/*/instances/*}:start
Starts a server that was shutdown.
stop
POST /v2/{name=projects/*/locations/*/instances/*}:stop
Stop a running server.
REST Resource: v2.projects.locations.networks
Methods
get
GET /v2/{name=projects/*/locations/*/networks/*}
Get details of a single network.
list
GET /v2/{parent=projects/*/locations/*}/networks
List network in a given project and location.
patch
PATCH /v2/{network.name=projects/*/locations/*/networks/*}
Update details of a single network.
REST Resource: v2.projects.locations.nfsShares
Methods
create
POST /v2/{parent=projects/*/locations/*}/nfsShares
Create an NFS share.
delete
DELETE /v2/{name=projects/*/locations/*/nfsShares/*}
Delete an NFS share.
get
GET /v2/{name=projects/*/locations/*/nfsShares/*}
Get details of a single NFS share.
list
GET /v2/{parent=projects/*/locations/*}/nfsShares
List NFS shares.
patch
PATCH /v2/{nfsShare.name=projects/*/locations/*/nfsShares/*}
Update details of a single NFS share.
REST Resource: v2.projects.locations.operations
Methods
get
GET /v2/{name=projects/*/locations/*/operations/**}
Get details about an operation.
REST Resource: v2.projects.locations.volumes
Methods
evict
POST /v2/{name=projects/*/locations/*/volumes/*}:evict
Skips volume's cooloff and deletes it now.
get
GET /v2/{name=projects/*/locations/*/volumes/*}
Get details of a single storage volume.
list
GET /v2/{parent=projects/*/locations/*}/volumes
List storage volumes in a given project and location.
patch
PATCH /v2/{volume.name=projects/*/locations/*/volumes/*}
Update details of a single storage volume.
REST Resource: v2.projects.locations.volumes.luns
Methods
evict
POST /v2/{name=projects/*/locations/*/volumes/*/luns/*}:evict
Skips lun's cooloff and deletes it now.
get
GET /v2/{name=projects/*/locations/*/volumes/*/luns/*}
Get details of a single storage logical unit number(LUN).
list
GET /v2/{parent=projects/*/locations/*/volumes/*}/luns
List storage volume luns for given storage volume.
REST Resource: v2.projects.locations.volumes.snapshots
Methods
create
POST /v2/{parent=projects/*/locations/*/volumes/*}/snapshots
Takes a snapshot of a boot volume.
delete
DELETE /v2/{name=projects/*/locations/*/volumes/*/snapshots/*}
Deletes a volume snapshot.
get
GET /v2/{name=projects/*/locations/*/volumes/*/snapshots/*}
Returns the specified snapshot resource.
list
GET /v2/{parent=projects/*/locations/*/volumes/*}/snapshots
Retrieves the list of snapshots for the specified volume.
restoreVolumeSnapshot
POST /v2/{volumeSnapshot=projects/*/locations/*/volumes/*/snapshots/*}:restoreVolumeSnapshot
Uses the specified snapshot to restore its parent volume.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
