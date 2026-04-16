---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:04.999Z"
product_name: "Oracle Database@Google Cloud"
product_slug: "oracle-database-google-cloud"
feature_name: "Oracle Base Database Service"
feature_slug: "oracle-base-database-service"
latest_feature_date: "2025-09-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/oracle/database/docs/create-base-db-system"
  - "https://docs.cloud.google.com/oracle/database/docs/create-databases"
  - "https://docs.cloud.google.com/oracle/database/docs/overview"
  - "https://docs.cloud.google.com/oracle/database/docs/create-odb-network"
keywords:
  - "oracle"
  - "base"
  - "database"
  - "lets"
  - "you"
  - "create"
  - "db"
  - "systems"
---

# Oracle Base Database Service

Product: Oracle Database@Google Cloud
Coverage: MEDIUM

## Step 02 Summary

Oracle Base Database Service lets you create DB systems through Google Cloud Console and the Google Cloud API.

## Extended Definition

Oracle Base Database Service lets you create DB systems through Google Cloud Console and the Google Cloud API.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/oracle/database/docs/create-base-db-system](https://docs.cloud.google.com/oracle/database/docs/create-base-db-system)
- [https://docs.cloud.google.com/oracle/database/docs/create-databases](https://docs.cloud.google.com/oracle/database/docs/create-databases)
- [https://docs.cloud.google.com/oracle/database/docs/overview](https://docs.cloud.google.com/oracle/database/docs/overview)
- [https://docs.cloud.google.com/oracle/database/docs/create-odb-network](https://docs.cloud.google.com/oracle/database/docs/create-odb-network)

## Supporting Pages

### "Create DB systems \_|\_ Oracle Database at Google Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/oracle/database/docs/create-base-db-system](https://docs.cloud.google.com/oracle/database/docs/create-base-db-system)
- Source ID: `site-docs-reference`
- Final score: 358
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Oracle Database@Google Cloud lets you create an DB systems in the Google Cloud using Google Cloud console and Oracle Database@Google Cloud API.
- API To create a DB system, run the following curl command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://oracledatabase.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /dbSystems/ DB SYSTEM ID " -d \ '{ "display name": " DB SYSTEM DISPLAY NAME ", "gcp oracle zone": " GCP ORACLE ZONE ", "name": "projects/ PROJECT ID /locations/ REGION /dbSystems/ DB SYSTEM NAME ", "entitlement id": " ENTITLEMENT ID ", "odb subnet": "projects/ ODB NETWORK PROJECT ID /locations/ REGION /odbNetworks/ ODB NETWORK ID /odbSubnets/ ODB SUBNET ID ", "properties": { "shape": "VM.Standard.X86", "computeCount": COMPUTE COUNT , "node count": NODE COUNT , "initial data storage size gb": INITIAL STORAGE SIZE , "database edition": " DATABASE EDITION ", "license model": " LICENSE TYPE ", "hostname prefix": " HOSTNAME PREFIX ", "db home": { "display name": " DB DISPLAY NAME ", "db version": " DB VERSION ", "database": { "db name": " DB NAME ", "admin password": " PASSWORD ", "character set": " CHARACTER SET ", "database id": " DB ID ", }, }, "ssh public keys": [" SSH PUBLIC KEY "], "data collection options": { "is diagnostics events enabled": EVENTS ENABLED , "is incident logs enabled": INCIDENT LOGS ENABLE }, "time zone": { "id": " TIMEZONE " }, } }' Replace the following: PROJECT ID : the ID of your Google Cloud project in which to create the DB system.
- Home Documentation Databases Oracle Database at Google Cloud Guides Send feedback Create DB systems Stay organized with collections Save and categorize content based on your preferences.
- Confirm that you have the required Identity and Access Management (IAM) roles and permissions to create a Base DB system: roles/oracledatabase.dbSystemAdmin For information on how to assign roles, see Apply IAM roles .

### "Create databases \_|\_ Oracle Database at Google Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/oracle/database/docs/create-databases](https://docs.cloud.google.com/oracle/database/docs/create-databases)
- Source ID: `site-docs-reference`
- Final score: 334
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- API To create an Autonomous AI Database, run the following curl command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://oracledatabase.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /autonomousDatabases/ DATABASE ID " -d \ '{ "database": " DATABASE NAME ", "displayName": " DISPLAY NAME ", "admin password": " PASSWORD ", "odb subnet": "projects/ ODB NETWORK PROJECT ID /locations/ REGION /odbNetworks/ ODB NETWORK ID /odbSubnets/ ODB SUBNET ID ", "properties": { "licenseType": " LICENSE TYPE ", "computeCount": COMPUTE COUNT , "dbVersion": " DATABASE VERSION ", "dbWorkload": " WORKLOAD TYPE ", "dataStorageSizeTb": STORAGE SIZE } }' Replace the following: PROJECT ID : the ID of your Google Cloud project in which to create the database.
- Click Create to create your database. gcloud Use the gcloud oracle-database autonomous-databases create command to create a database. gcloud oracle - database autonomous - databases create DATABASE ID \ -- project = PROJECT ID \ -- location = REGION \ -- display - name = DISPLAY NAME \ -- database = DATABASE NAME \ -- admin - password = ADMIN PASSWORD \ -- odb - subnet = projects / ODB NETWORK PROJECT ID / locations / REGION / odbNetworks / ODB NETWORK ID / odbSubnets / ODB SUBNET ID \ -- properties - compute - count = COMPUTE COUNT \ -- properties - db - version = DATABASE VERSION \ -- properties - license - type = LICENSE TYPE \ -- properties - db - workload = WORKLOAD TYPE \ -- properties - data - storage - size - gb = STORAGE SIZE Replace the following: DATABASE ID : a permanent identifier for your instance.
- Home Documentation Databases Oracle Database at Google Cloud Guides Send feedback Create databases Stay organized with collections Save and categorize content based on your preferences.
- Here is how to wait for a response. result . wait until done! timeout : 60 if result . response? p result . response else puts "No response received." end end When you create a Autonomous AI Database, the provisioning workflow automatically creates a Oracle-managed service account which you can use to enable Google Cloud CMEK on the database.

### "Oracle Database@Google Cloud overview \_|\_ Oracle Database at Google Cloud\

- URL: [https://docs.cloud.google.com/oracle/database/docs/overview](https://docs.cloud.google.com/oracle/database/docs/overview)
- Source ID: `site-docs-root`
- Final score: 330
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create and manage Base Database Service resources Oracle Database@Google Cloud lets you create and manage DB system resources using Google Cloud console, Google Cloud CLI, or the Oracle Database@Google Cloud API.
- Oracle Database@Google Cloud supports the following Oracle Cloud Infrastructure (OCI) products on Google Cloud: Exadata Database Service Autonomous AI Database Service Base Database Service Exadata Database Service on Exascale Infrastructure What Oracle Database@Google Cloud provides Oracle Database@Google Cloud offers many services to allow you to seamlessly integrate and manage your OCI resources in Google Cloud: ODB Network connectivity Manage access using Identity and Access Management (IAM) Create and manage Exadata Database Service resources Create and manage Exascale Infrastructure resources Create and manage Autonomous AI Database Service resources Create and manage Base Database Service resources Observe and Troubleshoot resources ODB Network connectivity Oracle Database@Google Cloud uses ODB Networks to manage connectivity to your resources.
- Create and manage Oracle Exadata Database Service resources Oracle Database@Google Cloud lets you create and manage Exadata Infrastructure instances and Exadata VM Clusters using Google Cloud console, Google Cloud CLI, or the Oracle Database@Google Cloud API.
- Create and manage Autonomous AI Database Service resources Oracle Database@Google Cloud lets you create and manage Autonomous AI Database resources using Google Cloud console, Google Cloud CLI, or the Oracle Database@Google Cloud API.

### "Create ODB Network and ODB Subnets \_|\_ Oracle Database at Google Cloud\

- URL: [https://docs.cloud.google.com/oracle/database/docs/create-odb-network](https://docs.cloud.google.com/oracle/database/docs/create-odb-network)
- Source ID: `site-docs-reference`
- Final score: 324
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Oracle Database@Google Cloud also lets you create up to five ODB Subnets within an ODB Network for the ease of network management.
- API To create an ODB Subnet, run the following curl command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://oracledatabase.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /odbNetworks/ ODB NETWORK ID /odbSubnets/ ODB SUBNET ID " -d \ '{ "cidr range": " CIDR RANGE ", "purpose": " PURPOSE " }' Replace the following: PROJECT ID : the ID of your Google Cloud project that contains your ODB Network for which you want to create an ODB Subnet.
- API To create an ODB Network, run the following curl command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://oracledatabase.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /odbNetworks/ ODB NETWORK ID " -d \ '{ "network": "projects/ PROJECT ID /global/networks/ VPC NETWORK ", "gcp oracle zone": " GCP ORACLE ZONE " }' Replace the following: PROJECT ID : the ID of your Google Cloud project in which to create the ODB Network.
- Click Create . gcloud Use the gcloud oracle-database odb-networks odb-subnets create command to create an ODB Subnet. gcloud oracle-database odb-networks odb-subnets create ODB SUBNET ID \ --project= PROJECT ID \ --location= REGION \ --odb-network= ODB NETWORK ID \ --cidr-range= CIDR RANGE \ --purpose= PURPOSE Replace the following: ODB SUBNET ID : a unique identifier for your ODB Subnet.

