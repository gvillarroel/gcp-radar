---
title: "AlloyDB API \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/alloydb/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-reference-required-10
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/reference/rest
  title: "AlloyDB API \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
AlloyDB for PostgreSQL
Reference
Send feedback
AlloyDB API
Stay organized with collections
Save and categorize content based on your preferences.
AlloyDB for PostgreSQL is an open source-compatible database service that provides a powerful option for migrating, modernizing, or building commercial-grade applications. It offers full compatibility with standard PostgreSQL, and is more than 4x faster for transactional workloads and up to 100x faster for analytical queries than standard PostgreSQL in our performance tests. AlloyDB for PostgreSQL offers a 99.99 percent availability SLA inclusive of maintenance. AlloyDB is optimized for the most demanding use cases, allowing you to build new applications that require high transaction throughput, large database sizes, or multiple read resources; scale existing PostgreSQL workloads with no application changes; and modernize legacy proprietary databases.
Service: alloydb.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://alloydb.googleapis.com/$discovery/rest?version=v1
https://alloydb.googleapis.com/$discovery/rest?version=v1beta
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://alloydb.googleapis.com
REST Resource: v1beta.projects.locations
Methods
get
GET /v1beta/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1beta/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1beta.projects.locations.backups
Methods
create
POST /v1beta/{parent=projects/*/locations/*}/backups
Creates a new Backup in a given project and location.
delete
DELETE /v1beta/{name=projects/*/locations/*/backups/*}
Deletes a single Backup.
get
GET /v1beta/{name=projects/*/locations/*/backups/*}
Gets details of a single Backup.
list
GET /v1beta/{parent=projects/*/locations/*}/backups
Lists Backups in a given project and location.
patch
PATCH /v1beta/{backup.name=projects/*/locations/*/backups/*}
Updates the parameters of a single Backup.
REST Resource: v1beta.projects.locations.clusters
Methods
create
POST /v1beta/{parent=projects/*/locations/*}/clusters
Creates a new Cluster in a given project and location.
createsecondary
POST /v1beta/{parent=projects/*/locations/*}/clusters:createsecondary
Creates a cluster of type SECONDARY in the given location using the primary cluster as the source.
delete
DELETE /v1beta/{name=projects/*/locations/*/clusters/*}
Deletes a single Cluster.
export
POST /v1beta/{name=projects/*/locations/*/clusters/*}:export
Exports data from the cluster.
get
GET /v1beta/{name=projects/*/locations/*/clusters/*}
Gets details of a single Cluster.
import
POST /v1beta/{name=projects/*/locations/*/clusters/*}:import
Imports data to the cluster.
list
GET /v1beta/{parent=projects/*/locations/*}/clusters
Lists Clusters in a given project and location.
patch
PATCH /v1beta/{cluster.name=projects/*/locations/*/clusters/*}
Updates the parameters of a single Cluster.
promote
POST /v1beta/{name=projects/*/locations/*/clusters/*}:promote
Promotes a SECONDARY cluster.
restore
POST /v1beta/{parent=projects/*/locations/*}/clusters:restore
Creates a new Cluster in a given project and location, with a volume restored from the provided source, either a backup ID or a point-in-time and a source cluster.
restoreFromCloudSQL
POST /v1beta/{parent=projects/*/locations/*}/clusters:restoreFromCloudSQL
Restores an AlloyDB cluster from a CloudSQL resource.
switchover
POST /v1beta/{name=projects/*/locations/*/clusters/*}:switchover
Switches the roles of PRIMARY and SECONDARY clusters without any data loss.
upgrade
PATCH /v1beta/{name=projects/*/locations/*/clusters/*}:upgrade
Upgrades a single Cluster.
REST Resource: v1beta.projects.locations.clusters.instances
Methods
create
POST /v1beta/{parent=projects/*/locations/*/clusters/*}/instances
Creates a new Instance in a given project and location.
createsecondary
POST /v1beta/{parent=projects/*/locations/*/clusters/*}/instances:createsecondary
Creates a new SECONDARY Instance in a given project and location.
delete
DELETE /v1beta/{name=projects/*/locations/*/clusters/*/instances/*}
Deletes a single Instance.
failover
POST /v1beta/{name=projects/*/locations/*/clusters/*/instances/*}:failover
Forces a Failover for a highly available instance.
get
GET /v1beta/{name=projects/*/locations/*/clusters/*/instances/*}
Gets details of a single Instance.
getConnectionInfo
GET /v1beta/{parent=projects/*/locations/*/clusters/*/instances/*}/connectionInfo
Get instance metadata used for a connection.
injectFault
POST /v1beta/{name=projects/*/locations/*/clusters/*/instances/*}:injectFault
Injects fault in an instance.
list
GET /v1beta/{parent=projects/*/locations/*/clusters/*}/instances
Lists Instances in a given project and location.
patch
PATCH /v1beta/{instance.name=projects/*/locations/*/clusters/*/instances/*}
Updates the parameters of a single Instance.
restart
POST /v1beta/{name=projects/*/locations/*/clusters/*/instances/*}:restart
Restart an Instance in a cluster.
REST Resource: v1beta.projects.locations.clusters.users
Methods
create
POST /v1beta/{parent=projects/*/locations/*/clusters/*}/users
Creates a new User in a given project, location, and cluster.
delete
DELETE /v1beta/{name=projects/*/locations/*/clusters/*/users/*}
Deletes a single User.
get
GET /v1beta/{name=projects/*/locations/*/clusters/*/users/*}
Gets details of a single User.
list
GET /v1beta/{parent=projects/*/locations/*/clusters/*}/users
Lists Users in a given project and location.
patch
PATCH /v1beta/{user.name=projects/*/locations/*/clusters/*/users/*}
Updates the parameters of a single User.
REST Resource: v1beta.projects.locations.operations
Methods
cancel
POST /v1beta/{name=projects/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1beta/{name=projects/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v1beta/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1beta/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1beta.projects.locations.supportedDatabaseFlags
Methods
list
GET /v1beta/{parent=projects/*/locations/*}/supportedDatabaseFlags
Lists SupportedDatabaseFlags for a given project and location.
REST Resource: v1.projects.locations
Methods
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.backups
Methods
create
POST /v1/{parent=projects/*/locations/*}/backups
Creates a new Backup in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/backups/*}
Deletes a single Backup.
get
GET /v1/{name=projects/*/locations/*/backups/*}
Gets details of a single Backup.
list
GET /v1/{parent=projects/*/locations/*}/backups
Lists Backups in a given project and location.
patch
PATCH /v1/{backup.name=projects/*/locations/*/backups/*}
Updates the parameters of a single Backup.
REST Resource: v1.projects.locations.clusters
Methods
create
POST /v1/{parent=projects/*/locations/*}/clusters
Creates a new Cluster in a given project and location.
createsecondary
POST /v1/{parent=projects/*/locations/*}/clusters:createsecondary
Creates a cluster of type SECONDARY in the given location using the primary cluster as the source.
delete
DELETE /v1/{name=projects/*/locations/*/clusters/*}
Deletes a single Cluster.
export
POST /v1/{name=projects/*/locations/*/clusters/*}:export
Exports data from the cluster.
get
GET /v1/{name=projects/*/locations/*/clusters/*}
Gets details of a single Cluster.
import
POST /v1/{name=projects/*/locations/*/clusters/*}:import
Imports data to the cluster.
list
GET /v1/{parent=projects/*/locations/*}/clusters
Lists Clusters in a given project and location.
patch
PATCH /v1/{cluster.name=projects/*/locations/*/clusters/*}
Updates the parameters of a single Cluster.
promote
POST /v1/{name=projects/*/locations/*/clusters/*}:promote
Promotes a SECONDARY cluster.
restore
POST /v1/{parent=projects/*/locations/*}/clusters:restore
Creates a new Cluster in a given project and location, with a volume restored from the provided source, either a backup ID or a point-in-time and a source cluster.
restoreFromCloudSQL
POST /v1/{parent=projects/*/locations/*}/clusters:restoreFromCloudSQL
Restores an AlloyDB cluster from a CloudSQL resource.
switchover
POST /v1/{name=projects/*/locations/*/clusters/*}:switchover
Switches the roles of PRIMARY and SECONDARY clusters without any data loss.
upgrade
PATCH /v1/{name=projects/*/locations/*/clusters/*}:upgrade
Upgrades a single Cluster.
REST Resource: v1.projects.locations.clusters.instances
Methods
create
POST /v1/{parent=projects/*/locations/*/clusters/*}/instances
Creates a new Instance in a given project and location.
createsecondary
POST /v1/{parent=projects/*/locations/*/clusters/*}/instances:createsecondary
Creates a new SECONDARY Instance in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/clusters/*/instances/*}
Deletes a single Instance.
failover
POST /v1/{name=projects/*/locations/*/clusters/*/instances/*}:failover
Forces a Failover for a highly available instance.
get
GET /v1/{name=projects/*/locations/*/clusters/*/instances/*}
Gets details of a single Instance.
getConnectionInfo
GET /v1/{parent=projects/*/locations/*/clusters/*/instances/*}/connectionInfo
Get instance metadata used for a connection.
injectFault
POST /v1/{name=projects/*/locations/*/clusters/*/instances/*}:injectFault
Injects fault in an instance.
list
GET /v1/{parent=projects/*/locations/*/clusters/*}/instances
Lists Instances in a given project and location.
patch
PATCH /v1/{instance.name=projects/*/locations/*/clusters/*/instances/*}
Updates the parameters of a single Instance.
restart
POST /v1/{name=projects/*/locations/*/clusters/*/instances/*}:restart
Restart an Instance in a cluster.
REST Resource: v1.projects.locations.clusters.users
Methods
create
POST /v1/{parent=projects/*/locations/*/clusters/*}/users
Creates a new User in a given project, location, and cluster.
delete
DELETE /v1/{name=projects/*/locations/*/clusters/*/users/*}
Deletes a single User.
get
GET /v1/{name=projects/*/locations/*/clusters/*/users/*}
Gets details of a single User.
list
GET /v1/{parent=projects/*/locations/*/clusters/*}/users
Lists Users in a given project and location.
patch
PATCH /v1/{user.name=projects/*/locations/*/clusters/*/users/*}
Updates the parameters of a single User.
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
REST Resource: v1.projects.locations.supportedDatabaseFlags
Methods
list
GET /v1/{parent=projects/*/locations/*}/supportedDatabaseFlags
Lists SupportedDatabaseFlags for a given project and location.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-15 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-15 UTC."],[],[]]
