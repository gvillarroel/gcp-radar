---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:05.000Z"
product_name: "Oracle Database@Google Cloud"
product_slug: "oracle-database-google-cloud"
feature_name: "ODB Subnets"
feature_slug: "odb-subnets"
latest_feature_date: "2025-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/oracle/database/docs/create-odb-network"
  - "https://docs.cloud.google.com/oracle/database/docs/delete-odb-network"
  - "https://docs.cloud.google.com/oracle/database/docs/create-databases"
  - "https://docs.cloud.google.com/oracle/database/docs/reference/rest"
keywords:
  - "odb"
  - "subnets"
  - "define"
  - "for"
  - "oracle"
  - "database"
  - "resources"
  - "in"
---

# ODB Subnets

Product: Oracle Database@Google Cloud
Coverage: MEDIUM

## Step 02 Summary

ODB Subnets define subnets for Oracle Database@Google Cloud resources in an OCI child site that connect with a Google Cloud VPC network.

## Extended Definition

ODB Subnets define subnets for Oracle Database@Google Cloud resources in an OCI child site that connect with a Google Cloud VPC network.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/oracle/database/docs/create-odb-network](https://docs.cloud.google.com/oracle/database/docs/create-odb-network)
- [https://docs.cloud.google.com/oracle/database/docs/delete-odb-network](https://docs.cloud.google.com/oracle/database/docs/delete-odb-network)
- [https://docs.cloud.google.com/oracle/database/docs/create-databases](https://docs.cloud.google.com/oracle/database/docs/create-databases)
- [https://docs.cloud.google.com/oracle/database/docs/reference/rest](https://docs.cloud.google.com/oracle/database/docs/reference/rest)

## Supporting Pages

### "Create ODB Network and ODB Subnets \_|\_ Oracle Database at Google Cloud\

- URL: [https://docs.cloud.google.com/oracle/database/docs/create-odb-network](https://docs.cloud.google.com/oracle/database/docs/create-odb-network)
- Source ID: `site-docs-reference`
- Final score: 334
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- API To create an ODB Subnet, run the following curl command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://oracledatabase.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /odbNetworks/ ODB NETWORK ID /odbSubnets/ ODB SUBNET ID " -d \ '{ "cidr range": " CIDR RANGE ", "purpose": " PURPOSE " }' Replace the following: PROJECT ID : the ID of your Google Cloud project that contains your ODB Network for which you want to create an ODB Subnet.
- Click Create . gcloud Use the gcloud oracle-database odb-networks odb-subnets create command to create an ODB Subnet. gcloud oracle-database odb-networks odb-subnets create ODB SUBNET ID \ --project= PROJECT ID \ --location= REGION \ --odb-network= ODB NETWORK ID \ --cidr-range= CIDR RANGE \ --purpose= PURPOSE Replace the following: ODB SUBNET ID : a unique identifier for your ODB Subnet.
- Before you begin Make sure that you have the required Identity and Access Management (IAM) roles and permissions to create an ODB Network and ODB Subnets as described in Deploy Oracle Database@Google Cloud environment .
- Oracle Database@Google Cloud also lets you create up to five ODB Subnets within an ODB Network for the ease of network management.

### "Delete ODB Network and ODB Subnets \_|\_ Oracle Database at Google Cloud\

- URL: [https://docs.cloud.google.com/oracle/database/docs/delete-odb-network](https://docs.cloud.google.com/oracle/database/docs/delete-odb-network)
- Source ID: `site-docs-reference`
- Final score: 326
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin Make sure that you have the required Identity and Access Management (IAM) roles and permissions to delete an ODB Network and ODB Subnets as described in Deploy Oracle Database@Google Cloud environment .
- API To delete an ODB Subnet, run the following curl command: curl -X DELETE \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://oracledatabase.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /odbNetworks/ ODB NETWORK ID /odbSubnets/ ODB SUBNET ID " Replace the following: PROJECT ID : the ID of your Google Cloud project which contains the ODB Subnet to be deleted.
- Click Confirm . gcloud Use the gcloud oracle-database odb-networks odb-subnets delete command to delete an ODB Subnet. gcloud oracle-database odb-networks odb-subnets delete ODB SUBNET ID \ --project= PROJECT ID \ --location= REGION \ --odb-network= ODB NETWORK ID Replace the following: ODB SUBNET ID : the ID of the ODB Subnet.
- API To delete an ODB Network, run the following curl command: curl -X DELETE \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://oracledatabase.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /odbNetworks/ ODB NETWORK ID " Replace the following: PROJECT ID : the ID of your Google Cloud project which contains the ODB Network to be deleted.

### "Create databases \_|\_ Oracle Database at Google Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/oracle/database/docs/create-databases](https://docs.cloud.google.com/oracle/database/docs/create-databases)
- Source ID: `site-docs-reference`
- Final score: 270
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Create to create your database. gcloud Use the gcloud oracle-database autonomous-databases create command to create a database. gcloud oracle - database autonomous - databases create DATABASE ID \ -- project = PROJECT ID \ -- location = REGION \ -- display - name = DISPLAY NAME \ -- database = DATABASE NAME \ -- admin - password = ADMIN PASSWORD \ -- odb - subnet = projects / ODB NETWORK PROJECT ID / locations / REGION / odbNetworks / ODB NETWORK ID / odbSubnets / ODB SUBNET ID \ -- properties - compute - count = COMPUTE COUNT \ -- properties - db - version = DATABASE VERSION \ -- properties - license - type = LICENSE TYPE \ -- properties - db - workload = WORKLOAD TYPE \ -- properties - data - storage - size - gb = STORAGE SIZE Replace the following: DATABASE ID : a permanent identifier for your instance.
- API To create an Autonomous AI Database, run the following curl command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://oracledatabase.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /autonomousDatabases/ DATABASE ID " -d \ '{ "database": " DATABASE NAME ", "displayName": " DISPLAY NAME ", "admin password": " PASSWORD ", "odb subnet": "projects/ ODB NETWORK PROJECT ID /locations/ REGION /odbNetworks/ ODB NETWORK ID /odbSubnets/ ODB SUBNET ID ", "properties": { "licenseType": " LICENSE TYPE ", "computeCount": COMPUTE COUNT , "dbVersion": " DATABASE VERSION ", "dbWorkload": " WORKLOAD TYPE ", "dataStorageSizeTb": STORAGE SIZE } }' Replace the following: PROJECT ID : the ID of your Google Cloud project in which to create the database.
- The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). / // const requestId = 'abc123' // Imports the Oracledatabase library const { OracleDatabaseClient } = require ( ' @google-cloud/oracledatabase ' ). v1 ; // Instantiates a client const oracledatabaseClient = new OracleDatabaseClient (); async function callCreateAutonomousDatabase () { // Construct request const request = { parent , autonomousDatabaseId , autonomousDatabase , }; // Run request const [ operation ] = await oracledatabaseClient . createAutonomousDatabase ( request ); const [ response ] = await operation . promise (); console . log ( response ); } callCreateAutonomousDatabase (); PHP use Google\ApiCore\ApiException; use Google\ApiCore\OperationResponse; use Google\Cloud\OracleDatabase\V1\AutonomousDatabase; use Google\Cloud\OracleDatabase\V1\Client\OracleDatabaseClient; use Google\Cloud\OracleDatabase\V1\CreateAutonomousDatabaseRequest; use Google\Rpc\Status; / Creates a new Autonomous Database in a given project and location. @param string $formattedParent The name of the parent in the following format: projects/{project}/locations/{location}.
- Operation ; public class AsyncCreateAutonomousDatabase { public static void main ( String [] args ) throws Exception { asyncCreateAutonomousDatabase (); } public static void asyncCreateAutonomousDatabase () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( OracleDatabaseClient oracleDatabaseClient = OracleDatabaseClient . create ()) { CreateAutonomousDatabaseRequest request = CreateAutonomousDatabaseRequest . newBuilder () . setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ()) . setAutonomousDatabaseId ( "autonomousDatabaseId-1972693114" ) . setAutonomousDatabase ( AutonomousDatabase . newBuilder (). build ()) . setRequestId ( "requestId693933066" ) . build (); ApiFuture<Operation> future = oracleDatabaseClient . createAutonomousDatabaseCallable (). futureCall ( request ); // Do something.

### "Oracle Database@Google Cloud API \_|\_ Oracle Database at Google Cloud \_\

- URL: [https://docs.cloud.google.com/oracle/database/docs/reference/rest](https://docs.cloud.google.com/oracle/database/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 262
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1.projects.locations REST Resource: v1.projects.locations.autonomousDatabaseBackups REST Resource: v1.projects.locations.autonomousDatabaseCharacterSets REST Resource: v1.projects.locations.autonomousDatabases REST Resource: v1.projects.locations.autonomousDbVersions REST Resource: v1.projects.locations.cloudExadataInfrastructures REST Resource: v1.projects.locations.cloudExadataInfrastructures.dbServers REST Resource: v1.projects.locations.cloudVmClusters REST Resource: v1.projects.locations.cloudVmClusters.dbNodes REST Resource: v1.projects.locations.databaseCharacterSets REST Resource: v1.projects.locations.databases REST Resource: v1.projects.locations.dbSystemInitialStorageSizes REST Resource: v1.projects.locations.dbSystemShapes REST Resource: v1.projects.locations.dbSystems REST Resource: v1.projects.locations.dbVersions REST Resource: v1.projects.locations.entitlements REST Resource: v1.projects.locations.exadbVmClusters REST Resource: v1.projects.locations.exadbVmClusters.dbNodes REST Resource: v1.projects.locations.exascaleDbStorageVaults REST Resource: v1.projects.locations.giVersions REST Resource: v1.projects.locations.giVersions.minorVersions REST Resource: v1.projects.locations.odbNetworks REST Resource: v1.projects.locations.odbNetworks.odbSubnets REST Resource: v1.projects.locations.operations REST Resource: v1.projects.locations.pluggableDatabases Service: oracledatabase.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://oracledatabase.googleapis.com REST Resource: v1.projects.locations Methods get GET /v1/{name=projects/ /locations/ } Gets information about a location. list GET /v1/{name=projects/ }/locations Lists information about the supported locations for this service.
- REST Resource: v1.projects.locations.autonomousDatabases Methods create POST /v1/{parent=projects/ /locations/ }/autonomousDatabases Creates a new Autonomous Database in a given project and location. delete DELETE /v1/{name=projects/ /locations/ /autonomousDatabases/ } Deletes a single Autonomous Database. failover POST /v1/{name=projects/ /locations/ /autonomousDatabases/ }:failover Initiates a failover to target autonomous database from the associated primary database. generateWallet POST /v1/{name=projects/ /locations/ /autonomousDatabases/ }:generateWallet Generates a wallet for an Autonomous Database. get GET /v1/{name=projects/ /locations/ /autonomousDatabases/ } Gets the details of a single Autonomous Database. list GET /v1/{parent=projects/ /locations/ }/autonomousDatabases Lists the Autonomous Databases in a given project and location. patch PATCH /v1/{autonomousDatabase.name=projects/ /locations/ /autonomousDatabases/ } Updates the parameters of a single Autonomous Database. restart POST /v1/{name=projects/ /locations/ /autonomousDatabases/ }:restart Restarts an Autonomous Database. restore POST /v1/{name=projects/ /locations/ /autonomousDatabases/ }:restore Restores a single Autonomous Database. start POST /v1/{name=projects/ /locations/ /autonomousDatabases/ }:start Starts an Autonomous Database. stop POST /v1/{name=projects/ /locations/ /autonomousDatabases/ }:stop Stops an Autonomous Database. switchover POST /v1/{name=projects/ /locations/ /autonomousDatabases/ }:switchover Initiates a switchover of specified autonomous database to the associated peer database.
- REST Resource: v1.projects.locations.odbNetworks.odbSubnets Methods create POST /v1/{parent=projects/ /locations/ /odbNetworks/ }/odbSubnets Creates a new ODB Subnet in a given ODB Network. delete DELETE /v1/{name=projects/ /locations/ /odbNetworks/ /odbSubnets/ } Deletes a single ODB Subnet. get GET /v1/{name=projects/ /locations/ /odbNetworks/ /odbSubnets/ } Gets details of a single ODB Subnet. list GET /v1/{parent=projects/ /locations/ /odbNetworks/ }/odbSubnets Lists all the ODB Subnets in a given ODB Network.

