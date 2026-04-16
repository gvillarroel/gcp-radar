---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.538Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Database Migration Service support"
feature_slug: "database-migration-service-support"
latest_feature_date: "2022-09-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters"
  - "https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb"
  - "https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners"
keywords:
  - "database"
  - "migration"
  - "supports"
  - "migrations"
  - "alloydb"
---

# Database Migration Service support

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Google Cloud Database Migration Service supports migrations to AlloyDB.

## Extended Definition

Google Cloud Database Migration Service supports migrations to AlloyDB.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)
- [https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb](https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb)
- [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)

## Supporting Pages

### "REST Resource: projects.locations.clusters \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)
- Source ID: `site-iam-reference`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "name" : string , "displayName" : string , "uid" : string , "createTime" : string , "updateTime" : string , "deleteTime" : string , "labels" : { string : string , ... } , "state" : enum ( State ) , "clusterType" : enum ( ClusterType ) , "databaseVersion" : enum ( DatabaseVersion ) , "networkConfig" : { object ( NetworkConfig ) } , "network" : string , "etag" : string , "annotations" : { string : string , ... } , "reconciling" : boolean , "initialUser" : { object ( UserPassword ) } , "automatedBackupPolicy" : { object ( AutomatedBackupPolicy ) } , "sslConfig" : { object ( SslConfig ) } , "encryptionConfig" : { object ( EncryptionConfig ) } , "encryptionInfo" : { object ( EncryptionInfo ) } , "continuousBackupConfig" : { object ( ContinuousBackupConfig ) } , "continuousBackupInfo" : { object ( ContinuousBackupInfo ) } , "secondaryConfig" : { object ( SecondaryConfig ) } , "primaryConfig" : { object ( PrimaryConfig ) } , "satisfiesPzs" : boolean , "pscConfig" : { object ( PscConfig ) } , "maintenanceUpdatePolicy" : { object ( MaintenanceUpdatePolicy ) } , "maintenanceSchedule" : { object ( MaintenanceSchedule ) } , "subscriptionType" : enum ( SubscriptionType ) , "trialMetadata" : { object ( TrialMetadata ) } , "tags" : { string : string , ... } , "backupdrInfo" : { object ( BackupDrInfo ) } , "dataplexConfig" : { object ( DataplexConfig ) } , // Union field source can be only one of the following: "backupSource" : { object ( BackupSource ) } , "migrationSource" : { object ( MigrationSource ) } , "cloudsqlBackupRunSource" : { object ( CloudSQLBackupRunSource ) } , "backupdrBackupSource" : { object ( BackupDrBackupSource ) } // End of list of possible types for union field source . // Union field maintenance version can be only one of the following: "maintenanceVersionSelectionPolicy" : enum ( MaintenanceVersionSelectionPolicy ) // End of list of possible types for union field maintenance version . } Fields name string Output only.
- The name of the backup resource with the format: projects/{project}/locations/{region}/backups/{backupId} MigrationSource Subset of the source instance configuration that is available when reading the cluster resource.
- Home Documentation Databases AlloyDB for PostgreSQL Reference Send feedback REST Resource: projects.locations.clusters Stay organized with collections Save and categorize content based on your preferences.
- JSON representation { "enabled" : boolean } Fields enabled boolean This flag controls the integration of AlloyDB for PostgreSQL resources like databases, schemas, and tables with Dataplex.

### "Google Cloud Ready - AlloyDB Partners \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- Source ID: `site-docs-reference-2`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Vaultree and AlloyDB: the world's first Fully Homomorphic and Searchable Cloud Encryption Solution Vaultree launches support for Google's AlloyDB Partner Advantage page Direct link Data integration, optimization, and migration Airbyte Solution Airbyte Cloud Category Data integration and migration Description Airbyte is an open-source data integration engine that helps you consolidate your data in your data warehouses, lakes, and databases.
- For advanced database users, DBeaver suggests a powerful SQL editor, plenty of administration features, abilities of data and schema migration, monitoring database connection sessions, and a lot more Partner references Database driver AlloyDB for PostgreSQL Powering AlloyDB with DBeaver Partner Advantage page Direct link Hex Solution Hex Category Advanced Analytics Description Hex is a platform for collaborative analytics and data science.
- Partner references Consolidate Your Data on AlloyDB With Integrate.io in Minutes Connect AlloyDB to Your Data Sources using Integrate.io ETL Integrate.io + AlloyDB demo Partner Advantage page Direct link Kingswaysoft Solution KingswaySoft Category Data integration and migration Description KingswaySoft is easy to use, and it offers codeless integration of Google's AlloyDB with any virtual application or database system.
- Partner references AlloyDB ODBC Driver Connect to live Google AlloyDB databases through bi-directional data drivers Partner Advantage page Direct link CData JDBC Driver Solution CData JDBC Driver for AlloyDB Category Data integration and migration Description CData AlloyDB JDBC Driver enables users to connect with live AlloyDB data, directly from any applications that support JDBC connectivity.

### "Migrate data from a vector database to AlloyDB \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb](https://docs.cloud.google.com/alloydb/docs/ai/migrate-data-from-langchain-vector-stores-to-alloydb)
- Source ID: `site-docs-root-2`
- Final score: 95
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Retrieve the code sample Copy the code sample from GitHub by cloning the repository: git clone https://github.com/googleapis/langchain-google-alloydb-pg-python.git Navigate to the migrations directory: cd langchain-google-alloydb-pg-python/samples/migrations Extract data from an existing vector database Note: You might need to modify the code examples in this section based on your use case.
- In the Enable APIs step, click Enable to enable the following: AlloyDB API Compute Engine API Service Networking API Required roles To get the permissions that you need to complete the tasks in this tutorial, have the following Identity and Access Management (IAM) roles which allow for table creation and data insertion: Owner ( roles/owner ) or Editor ( roles/editor ) If the user is not an owner or editor, the following IAM roles and PostgreSQL privileges are required: AlloyDB Instance Client ( roles/alloydb.client ) Cloud AlloyDB Admin ( roles/alloydb.admin ) Compute Network User ( roles/compute.networkUser ) If you want to authenticate to your database using IAM authentication instead of using the built-in authentication in this tutorial, use the notebook that shows how to use AlloyDB for PostgreSQL to store vector embeddings with the AlloyDBVectorStore class .
- PUBLIC , # Optionally use IPTypes.PRIVATE ) Weaviate from langchain google alloydb pg import AlloyDBEngine alloydb engine = await AlloyDBEngine . afrom instance ( project id = project id , region = region , cluster = cluster , instance = instance , database = db name , user = db user , password = db pwd , ip type = IPTypes .
- PUBLIC , ) Chroma from langchain google alloydb pg import AlloyDBEngine alloydb engine = await AlloyDBEngine . afrom instance ( project id = project id , region = region , cluster = cluster , instance = instance , database = db name , user = db user , password = db pwd , ip type = IPTypes .

