---
title: "Oracle Database@Google Cloud API \_|\_ Oracle Database at Google Cloud \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/oracle/database/docs/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/oracle/database/docs/reference/libraries
source_metadata:
  url: https://docs.cloud.google.com/oracle/database/docs/reference/rest
  title: "Oracle Database@Google Cloud API \_|\_ Oracle Database at Google Cloud \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Oracle Database at Google Cloud
Reference
Send feedback
Oracle Database@Google Cloud API
Stay organized with collections
Save and categorize content based on your preferences.
The Oracle Database@Google Cloud API provides a set of APIs to manage Oracle database services, such as Exadata and Autonomous Databases.
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.autonomousDatabaseBackups
REST Resource: v1.projects.locations.autonomousDatabaseCharacterSets
REST Resource: v1.projects.locations.autonomousDatabases
REST Resource: v1.projects.locations.autonomousDbVersions
REST Resource: v1.projects.locations.cloudExadataInfrastructures
REST Resource: v1.projects.locations.cloudExadataInfrastructures.dbServers
REST Resource: v1.projects.locations.cloudVmClusters
REST Resource: v1.projects.locations.cloudVmClusters.dbNodes
REST Resource: v1.projects.locations.databaseCharacterSets
REST Resource: v1.projects.locations.databases
REST Resource: v1.projects.locations.dbSystemInitialStorageSizes
REST Resource: v1.projects.locations.dbSystemShapes
REST Resource: v1.projects.locations.dbSystems
REST Resource: v1.projects.locations.dbVersions
REST Resource: v1.projects.locations.entitlements
REST Resource: v1.projects.locations.exadbVmClusters
REST Resource: v1.projects.locations.exadbVmClusters.dbNodes
REST Resource: v1.projects.locations.exascaleDbStorageVaults
REST Resource: v1.projects.locations.giVersions
REST Resource: v1.projects.locations.giVersions.minorVersions
REST Resource: v1.projects.locations.odbNetworks
REST Resource: v1.projects.locations.odbNetworks.odbSubnets
REST Resource: v1.projects.locations.operations
REST Resource: v1.projects.locations.pluggableDatabases
Service: oracledatabase.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://oracledatabase.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://oracledatabase.googleapis.com
REST Resource: v1.projects.locations
Methods
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.autonomousDatabaseBackups
Methods
list
GET /v1/{parent=projects/*/locations/*}/autonomousDatabaseBackups
Lists the long-term and automatic backups of an Autonomous Database.
REST Resource: v1.projects.locations.autonomousDatabaseCharacterSets
Methods
list
GET /v1/{parent=projects/*/locations/*}/autonomousDatabaseCharacterSets
Lists Autonomous Database Character Sets in a given project and location.
REST Resource: v1.projects.locations.autonomousDatabases
Methods
create
POST /v1/{parent=projects/*/locations/*}/autonomousDatabases
Creates a new Autonomous Database in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/autonomousDatabases/*}
Deletes a single Autonomous Database.
failover
POST /v1/{name=projects/*/locations/*/autonomousDatabases/*}:failover
Initiates a failover to target autonomous database from the associated primary database.
generateWallet
POST /v1/{name=projects/*/locations/*/autonomousDatabases/*}:generateWallet
Generates a wallet for an Autonomous Database.
get
GET /v1/{name=projects/*/locations/*/autonomousDatabases/*}
Gets the details of a single Autonomous Database.
list
GET /v1/{parent=projects/*/locations/*}/autonomousDatabases
Lists the Autonomous Databases in a given project and location.
patch
PATCH /v1/{autonomousDatabase.name=projects/*/locations/*/autonomousDatabases/*}
Updates the parameters of a single Autonomous Database.
restart
POST /v1/{name=projects/*/locations/*/autonomousDatabases/*}:restart
Restarts an Autonomous Database.
restore
POST /v1/{name=projects/*/locations/*/autonomousDatabases/*}:restore
Restores a single Autonomous Database.
start
POST /v1/{name=projects/*/locations/*/autonomousDatabases/*}:start
Starts an Autonomous Database.
stop
POST /v1/{name=projects/*/locations/*/autonomousDatabases/*}:stop
Stops an Autonomous Database.
switchover
POST /v1/{name=projects/*/locations/*/autonomousDatabases/*}:switchover
Initiates a switchover of specified autonomous database to the associated peer database.
REST Resource: v1.projects.locations.autonomousDbVersions
Methods
list
GET /v1/{parent=projects/*/locations/*}/autonomousDbVersions
Lists all the available Autonomous Database versions for a project and location.
REST Resource: v1.projects.locations.cloudExadataInfrastructures
Methods
create
POST /v1/{parent=projects/*/locations/*}/cloudExadataInfrastructures
Creates a new Exadata Infrastructure in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/cloudExadataInfrastructures/*}
Deletes a single Exadata Infrastructure.
get
GET /v1/{name=projects/*/locations/*/cloudExadataInfrastructures/*}
Gets details of a single Exadata Infrastructure.
list
GET /v1/{parent=projects/*/locations/*}/cloudExadataInfrastructures
Lists Exadata Infrastructures in a given project and location.
REST Resource: v1.projects.locations.cloudExadataInfrastructures.dbServers
Methods
list
GET /v1/{parent=projects/*/locations/*/cloudExadataInfrastructures/*}/dbServers
Lists the database servers of an Exadata Infrastructure instance.
REST Resource: v1.projects.locations.cloudVmClusters
Methods
create
POST /v1/{parent=projects/*/locations/*}/cloudVmClusters
Creates a new VM Cluster in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/cloudVmClusters/*}
Deletes a single VM Cluster.
get
GET /v1/{name=projects/*/locations/*/cloudVmClusters/*}
Gets details of a single VM Cluster.
list
GET /v1/{parent=projects/*/locations/*}/cloudVmClusters
Lists the VM Clusters in a given project and location.
REST Resource: v1.projects.locations.cloudVmClusters.dbNodes
Methods
list
GET /v1/{parent=projects/*/locations/*/cloudVmClusters/*}/dbNodes
Lists the database nodes of a VM Cluster.
REST Resource: v1.projects.locations.databaseCharacterSets
Methods
list
GET /v1/{parent=projects/*/locations/*}/databaseCharacterSets
List DatabaseCharacterSets for the given project and location.
REST Resource: v1.projects.locations.databases
Methods
get
GET /v1/{name=projects/*/locations/*/databases/*}
Gets details of a single Database.
list
GET /v1/{parent=projects/*/locations/*}/databases
Lists all the Databases for the given project, location and DbSystem.
REST Resource: v1.projects.locations.dbSystemInitialStorageSizes
Methods
list
GET /v1/{parent=projects/*/locations/*}/dbSystemInitialStorageSizes
Lists all the DbSystemInitialStorageSizes for the given project and location.
REST Resource: v1.projects.locations.dbSystemShapes
Methods
list
GET /v1/{parent=projects/*/locations/*}/dbSystemShapes
Lists the database system shapes available for the project and location.
REST Resource: v1.projects.locations.dbSystems
Methods
create
POST /v1/{parent=projects/*/locations/*}/dbSystems
Creates a new DbSystem in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/dbSystems/*}
Deletes a single DbSystem.
get
GET /v1/{name=projects/*/locations/*/dbSystems/*}
Gets details of a single DbSystem.
list
GET /v1/{parent=projects/*/locations/*}/dbSystems
Lists all the DbSystems for the given project and location.
REST Resource: v1.projects.locations.dbVersions
Methods
list
GET /v1/{parent=projects/*/locations/*}/dbVersions
List DbVersions for the given project and location.
REST Resource: v1.projects.locations.entitlements
Methods
list
GET /v1/{parent=projects/*/locations/*}/entitlements
Lists the entitlements in a given project.
REST Resource: v1.projects.locations.exadbVmClusters
Methods
create
POST /v1/{parent=projects/*/locations/*}/exadbVmClusters
Creates a new Exadb (Exascale) VM Cluster resource.
delete
DELETE /v1/{name=projects/*/locations/*/exadbVmClusters/*}
Deletes a single Exadb (Exascale) VM Cluster.
get
GET /v1/{name=projects/*/locations/*/exadbVmClusters/*}
Gets details of a single Exadb (Exascale) VM Cluster.
list
GET /v1/{parent=projects/*/locations/*}/exadbVmClusters
Lists all the Exadb (Exascale) VM Clusters for the given project and location.
patch
PATCH /v1/{exadbVmCluster.name=projects/*/locations/*/exadbVmClusters/*}
Updates a single Exadb (Exascale) VM Cluster.
removeVirtualMachine
POST /v1/{name=projects/*/locations/*/exadbVmClusters/*}:removeVirtualMachine
Removes virtual machines from an existing exadb vm cluster.
REST Resource: v1.projects.locations.exadbVmClusters.dbNodes
Methods
list
GET /v1/{parent=projects/*/locations/*/exadbVmClusters/*}/dbNodes
Lists the database nodes of a VM Cluster.
REST Resource: v1.projects.locations.exascaleDbStorageVaults
Methods
create
POST /v1/{parent=projects/*/locations/*}/exascaleDbStorageVaults
Creates a new ExascaleDB Storage Vault resource.
delete
DELETE /v1/{name=projects/*/locations/*/exascaleDbStorageVaults/*}
Deletes a single ExascaleDB Storage Vault.
get
GET /v1/{name=projects/*/locations/*/exascaleDbStorageVaults/*}
Gets details of a single ExascaleDB Storage Vault.
list
GET /v1/{parent=projects/*/locations/*}/exascaleDbStorageVaults
Lists all the ExascaleDB Storage Vaults for the given project and location.
REST Resource: v1.projects.locations.giVersions
Methods
list
GET /v1/{parent=projects/*/locations/*}/giVersions
Lists all the valid Oracle Grid Infrastructure (GI) versions for the given project and location.
REST Resource: v1.projects.locations.giVersions.minorVersions
Methods
list
GET /v1/{parent=projects/*/locations/*/giVersions/*}/minorVersions
Lists all the valid minor versions for the given project, location, gi version and shape family.
REST Resource: v1.projects.locations.odbNetworks
Methods
create
POST /v1/{parent=projects/*/locations/*}/odbNetworks
Creates a new ODB Network in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/odbNetworks/*}
Deletes a single ODB Network.
get
GET /v1/{name=projects/*/locations/*/odbNetworks/*}
Gets details of a single ODB Network.
list
GET /v1/{parent=projects/*/locations/*}/odbNetworks
Lists the ODB Networks in a given project and location.
REST Resource: v1.projects.locations.odbNetworks.odbSubnets
Methods
create
POST /v1/{parent=projects/*/locations/*/odbNetworks/*}/odbSubnets
Creates a new ODB Subnet in a given ODB Network.
delete
DELETE /v1/{name=projects/*/locations/*/odbNetworks/*/odbSubnets/*}
Deletes a single ODB Subnet.
get
GET /v1/{name=projects/*/locations/*/odbNetworks/*/odbSubnets/*}
Gets details of a single ODB Subnet.
list
GET /v1/{parent=projects/*/locations/*/odbNetworks/*}/odbSubnets
Lists all the ODB Subnets in a given ODB Network.
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
REST Resource: v1.projects.locations.pluggableDatabases
Methods
get
GET /v1/{name=projects/*/locations/*/pluggableDatabases/*}
Gets details of a single PluggableDatabase.
list
GET /v1/{parent=projects/*/locations/*}/pluggableDatabases
Lists all the PluggableDatabases for the given project, location and Container Database.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-01-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-01-02 UTC."],[],[]]
