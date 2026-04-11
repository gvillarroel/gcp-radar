---
title: "Google Cloud Memorystore for Redis API \_|\_ Memorystore for Redis Cluster\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/cluster/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/cluster/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/cluster/reference/rest
  title: "Google Cloud Memorystore for Redis API \_|\_ Memorystore for Redis Cluster\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Memorystore
Memorystore for Redis Cluster
Reference
Send feedback
Google Cloud Memorystore for Redis API
Stay organized with collections
Save and categorize content based on your preferences.
Creates and manages Redis instances on the Google Cloud Platform.
REST Resource: v1beta1.projects.locations
REST Resource: v1beta1.projects.locations.backupCollections
REST Resource: v1beta1.projects.locations.backupCollections.backups
REST Resource: v1beta1.projects.locations.clusters
REST Resource: v1beta1.projects.locations.operations
REST Resource: v1alpha1.projects.locations
REST Resource: v1alpha1.projects.locations.backupCollections
REST Resource: v1alpha1.projects.locations.backupCollections.backups
REST Resource: v1alpha1.projects.locations.clusters
REST Resource: v1alpha1.projects.locations.operations
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.backupCollections
REST Resource: v1.projects.locations.backupCollections.backups
REST Resource: v1.projects.locations.clusters
REST Resource: v1.projects.locations.operations
Service: redis.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://redis.googleapis.com/$discovery/rest?version=v1
https://redis.googleapis.com/$discovery/rest?version=v1beta1
https://redis.googleapis.com/$discovery/rest?version=v1alpha1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://redis.googleapis.com
REST Resource: v1beta1.projects.locations
Methods
get
GET /v1beta1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1beta1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1beta1.projects.locations.backupCollections
Methods
get
GET /v1beta1/{name=projects/*/locations/*/backupCollections/*}
Get a backup collection.
list
GET /v1beta1/{parent=projects/*/locations/*}/backupCollections
Lists all backup collections owned by a consumer project in either the specified location (region) or all locations.
REST Resource: v1beta1.projects.locations.backupCollections.backups
Methods
delete
DELETE /v1beta1/{name=projects/*/locations/*/backupCollections/*/backups/*}
Deletes a specific backup.
export
POST /v1beta1/{name=projects/*/locations/*/backupCollections/*/backups/*}:export
Exports a specific backup to a customer target Cloud Storage URI.
get
GET /v1beta1/{name=projects/*/locations/*/backupCollections/*/backups/*}
Gets the details of a specific backup.
list
GET /v1beta1/{parent=projects/*/locations/*/backupCollections/*}/backups
Lists all backups owned by a backup collection.
REST Resource: v1beta1.projects.locations.clusters
Methods
backup
POST /v1beta1/{name=projects/*/locations/*/clusters/*}:backup
Backup Redis Cluster.
create
POST /v1beta1/{parent=projects/*/locations/*}/clusters
Creates a Redis cluster based on the specified properties.
delete
DELETE /v1beta1/{name=projects/*/locations/*/clusters/*}
Deletes a specific Redis cluster.
get
GET /v1beta1/{name=projects/*/locations/*/clusters/*}
Gets the details of a specific Redis cluster.
getCertificateAuthority
GET /v1beta1/{name=projects/*/locations/*/clusters/*/certificateAuthority}
Gets the details of certificate authority information for Redis cluster.
list
GET /v1beta1/{parent=projects/*/locations/*}/clusters
Lists all Redis clusters owned by a project in either the specified location (region) or all locations.
patch
PATCH /v1beta1/{cluster.name=projects/*/locations/*/clusters/*}
Updates the metadata and configuration of a specific Redis cluster.
rescheduleClusterMaintenance
POST /v1beta1/{name=projects/*/locations/*/clusters/*}:rescheduleClusterMaintenance
Reschedules upcoming maintenance event.
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
REST Resource: v1alpha1.projects.locations
Methods
get
GET /v1alpha1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1alpha1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1alpha1.projects.locations.backupCollections
Methods
get
GET /v1alpha1/{name=projects/*/locations/*/backupCollections/*}
Get a backup collection.
list
GET /v1alpha1/{parent=projects/*/locations/*}/backupCollections
Lists all backup collections owned by a consumer project in either the specified location (region) or all locations.
REST Resource: v1alpha1.projects.locations.backupCollections.backups
Methods
delete
DELETE /v1alpha1/{name=projects/*/locations/*/backupCollections/*/backups/*}
Deletes a specific backup.
export
POST /v1alpha1/{name=projects/*/locations/*/backupCollections/*/backups/*}:export
Exports a specific backup to a customer target Cloud Storage URI.
get
GET /v1alpha1/{name=projects/*/locations/*/backupCollections/*/backups/*}
Gets the details of a specific backup.
list
GET /v1alpha1/{parent=projects/*/locations/*/backupCollections/*}/backups
Lists all backups owned by a backup collection.
REST Resource: v1alpha1.projects.locations.clusters
Methods
backup
POST /v1alpha1/{name=projects/*/locations/*/clusters/*}:backup
Backup Redis Cluster.
create
POST /v1alpha1/{parent=projects/*/locations/*}/clusters
Creates a Redis cluster based on the specified properties.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/clusters/*}
Deletes a specific Redis cluster.
get
GET /v1alpha1/{name=projects/*/locations/*/clusters/*}
Gets the details of a specific Redis cluster.
getCertificateAuthority
GET /v1alpha1/{name=projects/*/locations/*/clusters/*/certificateAuthority}
Gets the details of certificate authority information for Redis cluster.
list
GET /v1alpha1/{parent=projects/*/locations/*}/clusters
Lists all Redis clusters owned by a project in either the specified location (region) or all locations.
patch
PATCH /v1alpha1/{cluster.name=projects/*/locations/*/clusters/*}
Updates the metadata and configuration of a specific Redis cluster.
rescheduleClusterMaintenance
POST /v1alpha1/{name=projects/*/locations/*/clusters/*}:rescheduleClusterMaintenance
Reschedules upcoming maintenance event.
REST Resource: v1alpha1.projects.locations.operations
Methods
cancel
POST /v1alpha1/{name=projects/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v1alpha1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1alpha1/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1.projects.locations
Methods
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.backupCollections
Methods
get
GET /v1/{name=projects/*/locations/*/backupCollections/*}
Get a backup collection.
list
GET /v1/{parent=projects/*/locations/*}/backupCollections
Lists all backup collections owned by a consumer project in either the specified location (region) or all locations.
REST Resource: v1.projects.locations.backupCollections.backups
Methods
delete
DELETE /v1/{name=projects/*/locations/*/backupCollections/*/backups/*}
Deletes a specific backup.
export
POST /v1/{name=projects/*/locations/*/backupCollections/*/backups/*}:export
Exports a specific backup to a customer target Cloud Storage URI.
get
GET /v1/{name=projects/*/locations/*/backupCollections/*/backups/*}
Gets the details of a specific backup.
list
GET /v1/{parent=projects/*/locations/*/backupCollections/*}/backups
Lists all backups owned by a backup collection.
REST Resource: v1.projects.locations.clusters
Methods
backup
POST /v1/{name=projects/*/locations/*/clusters/*}:backup
Backup Redis Cluster.
create
POST /v1/{parent=projects/*/locations/*}/clusters
Creates a Redis cluster based on the specified properties.
delete
DELETE /v1/{name=projects/*/locations/*/clusters/*}
Deletes a specific Redis cluster.
get
GET /v1/{name=projects/*/locations/*/clusters/*}
Gets the details of a specific Redis cluster.
getCertificateAuthority
GET /v1/{name=projects/*/locations/*/clusters/*/certificateAuthority}
Gets the details of certificate authority information for Redis cluster.
list
GET /v1/{parent=projects/*/locations/*}/clusters
Lists all Redis clusters owned by a project in either the specified location (region) or all locations.
patch
PATCH /v1/{cluster.name=projects/*/locations/*/clusters/*}
Updates the metadata and configuration of a specific Redis cluster.
rescheduleClusterMaintenance
POST /v1/{name=projects/*/locations/*/clusters/*}:rescheduleClusterMaintenance
Reschedules upcoming maintenance event.
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
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
