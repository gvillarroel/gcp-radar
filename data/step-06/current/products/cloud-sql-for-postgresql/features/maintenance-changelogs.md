---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.802Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Maintenance changelogs"
feature_slug: "maintenance-changelogs"
latest_feature_date: "2022-04-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/create-instance"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest"
  - "https://docs.cloud.google.com/sql/docs/introduction"
keywords:
  - "changelogs"
  - "included"
  - "about"
  - "information"
  - "updates"
  - "maintenance"
  - "provide"
---

# Maintenance changelogs

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Maintenance changelogs provide information about updates included in new Cloud SQL maintenance versions.

## Extended Definition

Maintenance changelogs provide information about updates included in new Cloud SQL maintenance versions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest)
- [https://docs.cloud.google.com/sql/docs/introduction](https://docs.cloud.google.com/sql/docs/introduction)

## Supporting Pages

### Create instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- Memory must be: 0.9 to 6.5 GB per vCPU A multiple of 256 MB At least 3.75 GB (3840 MB) For example, the following command creates a Cloud SQL Enterprise edition instance with two vCPUs and 7,680 MB of memory: gcloud sql instances create myinstance \ --database-version = POSTGRES 16 \ --cpu = 2 \ --memory = 7680MB \ --region = us-central1 The following command creates a Cloud SQL Enterprise Plus edition instance with four cores: gcloud sql instances create myinstance \ --database-version = POSTGRES 16 \ --tier = db-perf-optimized-N-4 \ --edition = ENTERPRISE PLUS \ --region = us-central1 See Custom instance configuration for more information about how to size --cpu and --memory .
- For information about instance settings, including valid values for region, see Instance settings Don't include sensitive or personally identifiable information in your instance ID; it is externally visible.
- However, you can view information about the instance while it's being created. gcloud For information about installing and getting started with the gcloud CLI , see Installing gcloud CLI .
- AUTOMATIC ROTATION DURING MAINTENANCE : With this option, automatic server certificate rotation is enabled during Cloud SQL scheduled maintenance or self-service maintenance updates.

### Cloud SQL Admin API \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest)
- Source ID: `site-api-reference`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- RotateServerCertificate POST /sql/v1beta4/projects/{project}/instances/{instance}/rotateServerCertificate Rotates the server certificate version to one previously added with the addServerCertificate method. addServerCa POST /sql/v1beta4/projects/{project}/instances/{instance}/addServerCa Add a new trusted Certificate Authority (CA) version for the specified instance. addServerCertificate POST /sql/v1beta4/projects/{project}/instances/{instance}/addServerCertificate Add a new trusted server certificate version for the specified instance using Certificate Authority Service (CAS) server CA. clone POST /sql/v1beta4/projects/{project}/instances/{instance}/clone Creates a Cloud SQL instance as a clone of the source instance. delete DELETE /sql/v1beta4/projects/{project}/instances/{instance} Deletes a Cloud SQL instance. demote POST /sql/v1beta4/projects/{project}/instances/{instance}/demote Demotes an existing standalone instance to be a Cloud SQL read replica for an external database server. demoteMaster POST /sql/v1beta4/projects/{project}/instances/{instance}/demoteMaster Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server. executeSql POST /sql/v1beta4/projects/{project}/instances/{instance}/executeSql Execute SQL statements. export POST /sql/v1beta4/projects/{project}/instances/{instance}/export Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file. failover POST /sql/v1beta4/projects/{project}/instances/{instance}/failover Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. get GET /sql/v1beta4/projects/{project}/instances/{instance} Retrieves a resource containing information about a Cloud SQL instance. import POST /sql/v1beta4/projects/{project}/instances/{instance}/import Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage. insert POST /sql/v1beta4/projects/{project}/instances Creates a new Cloud SQL instance. list GET /sql/v1beta4/projects/{project}/instances Lists instances under a given project. listServerCas GET /sql/v1beta4/projects/{project}/instances/{instance}/listServerCas Lists all of the trusted Certificate Authorities (CAs) for the specified instance. patch PATCH /sql/v1beta4/projects/{project}/instances/{instance} Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. pointInTimeRestore POST /sql/v1beta4/{parent=projects/ }:pointInTimeRestore Point in time restore for an instance managed by Google Cloud Backup and Disaster Recovery. preCheckMajorVersionUpgrade POST /sql/v1beta4/projects/{project}/instances/{instance}/preCheckMajorVersionUpgrade Execute MVU Pre-checks promoteReplica POST /sql/v1beta4/projects/{project}/instances/{instance}/promoteReplica Promotes the read replica instance to be an independent Cloud SQL primary instance. reencrypt POST /sql/v1beta4/projects/{project}/instances/{instance}/reencrypt Reencrypt CMEK instance with latest key version. resetSslConfig POST /sql/v1beta4/projects/{project}/instances/{instance}/resetSslConfig Deletes all client certificates and generates a new server SSL certificate for the instance. restart POST /sql/v1beta4/projects/{project}/instances/{instance}/restart Restarts a Cloud SQL instance. restoreBackup POST /sql/v1beta4/projects/{project}/instances/{instance}/restoreBackup Restores a backup of a Cloud SQL instance. rotateServerCa POST /sql/v1beta4/projects/{project}/instances/{instance}/rotateServerCa Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method. startReplica POST /sql/v1beta4/projects/{project}/instances/{instance}/startReplica Starts the replication in the read replica instance. stopReplica POST /sql/v1beta4/projects/{project}/instances/{instance}/stopReplica Stops the replication in the read replica instance. switchover POST /sql/v1beta4/projects/{project}/instances/{instance}/switchover Switches over from the primary instance to the DR replica instance. truncateLog POST /sql/v1beta4/projects/{project}/instances/{instance}/truncateLog Truncate MySQL general and slow query log tables MySQL only. update PUT /sql/v1beta4/projects/{project}/instances/{instance} Updates settings of a Cloud SQL instance.
- RotateServerCertificate POST /v1/projects/{project}/instances/{instance}/rotateServerCertificate Rotates the server certificate version to one previously added with the addServerCertificate method. addServerCa POST /v1/projects/{project}/instances/{instance}/addServerCa Adds a new trusted Certificate Authority (CA) version for the specified instance. addServerCertificate POST /v1/projects/{project}/instances/{instance}/addServerCertificate Add a new trusted server certificate version for the specified instance using Certificate Authority Service (CAS) server CA. clone POST /v1/projects/{project}/instances/{instance}/clone Creates a Cloud SQL instance as a clone of the source instance. delete DELETE /v1/projects/{project}/instances/{instance} Deletes a Cloud SQL instance. demote POST /v1/projects/{project}/instances/{instance}/demote Demotes an existing standalone instance to be a Cloud SQL read replica for an external database server. demoteMaster POST /v1/projects/{project}/instances/{instance}/demoteMaster Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server. executeSql POST /v1/projects/{project}/instances/{instance}/executeSql Execute SQL statements. export POST /v1/projects/{project}/instances/{instance}/export Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file. failover POST /v1/projects/{project}/instances/{instance}/failover Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. get GET /v1/projects/{project}/instances/{instance} Retrieves a resource containing information about a Cloud SQL instance. import POST /v1/projects/{project}/instances/{instance}/import Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage. insert POST /v1/projects/{project}/instances Creates a new Cloud SQL instance. list GET /v1/projects/{project}/instances Lists instances under a given project. listServerCas GET /v1/projects/{project}/instances/{instance}/listServerCas Lists all of the trusted Certificate Authorities (CAs) for the specified instance. patch PATCH /v1/projects/{project}/instances/{instance} Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. pointInTimeRestore POST /v1/{parent=projects/ }:pointInTimeRestore Point in time restore for an instance managed by Google Cloud Backup and Disaster Recovery. preCheckMajorVersionUpgrade POST /v1/projects/{project}/instances/{instance}/preCheckMajorVersionUpgrade Execute MVU Pre-checks promoteReplica POST /v1/projects/{project}/instances/{instance}/promoteReplica Promotes the read replica instance to be an independent Cloud SQL primary instance. reencrypt POST /v1/projects/{project}/instances/{instance}/reencrypt Reencrypt CMEK instance with latest key version. resetSslConfig POST /v1/projects/{project}/instances/{instance}/resetSslConfig Deletes all client certificates and generates a new server SSL certificate for the instance. restart POST /v1/projects/{project}/instances/{instance}/restart Restarts a Cloud SQL instance. restoreBackup POST /v1/projects/{project}/instances/{instance}/restoreBackup Restores a backup of a Cloud SQL instance. rotateServerCa POST /v1/projects/{project}/instances/{instance}/rotateServerCa Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method. startReplica POST /v1/projects/{project}/instances/{instance}/startReplica Starts the replication in the read replica instance. stopReplica POST /v1/projects/{project}/instances/{instance}/stopReplica Stops the replication in the read replica instance. switchover POST /v1/projects/{project}/instances/{instance}/switchover Switches over from the primary instance to the DR replica instance. truncateLog POST /v1/projects/{project}/instances/{instance}/truncateLog Truncate MySQL general and slow query log tables MySQL only. update PUT /v1/projects/{project}/instances/{instance} Updates settings of a Cloud SQL instance.
- REST Resource: v1beta4.databases Methods delete DELETE /sql/v1beta4/projects/{project}/instances/{instance}/databases/{database} Deletes a database from a Cloud SQL instance. get GET /sql/v1beta4/projects/{project}/instances/{instance}/databases/{database} Retrieves a resource containing information about a database inside a Cloud SQL instance. insert POST /sql/v1beta4/projects/{project}/instances/{instance}/databases Inserts a resource containing information about a database inside a Cloud SQL instance. list GET /sql/v1beta4/projects/{project}/instances/{instance}/databases Lists databases in the specified Cloud SQL instance. patch PATCH /sql/v1beta4/projects/{project}/instances/{instance}/databases/{database} Partially updates a resource containing information about a database inside a Cloud SQL instance. update PUT /sql/v1beta4/projects/{project}/instances/{instance}/databases/{database} Updates a resource containing information about a database inside a Cloud SQL instance.
- REST Resource: v1.databases Methods delete DELETE /v1/projects/{project}/instances/{instance}/databases/{database} Deletes a database from a Cloud SQL instance. get GET /v1/projects/{project}/instances/{instance}/databases/{database} Retrieves a resource containing information about a database inside a Cloud SQL instance. insert POST /v1/projects/{project}/instances/{instance}/databases Inserts a resource containing information about a database inside a Cloud SQL instance. list GET /v1/projects/{project}/instances/{instance}/databases Lists databases in the specified Cloud SQL instance. patch PATCH /v1/projects/{project}/instances/{instance}/databases/{database} Partially updates a resource containing information about a database inside a Cloud SQL instance. update PUT /v1/projects/{project}/instances/{instance}/databases/{database} Updates a resource containing information about a database inside a Cloud SQL instance.

### Cloud SQL overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/introduction](https://docs.cloud.google.com/sql/docs/introduction)
- Source ID: `site-docs-root`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can focus on your data and let Cloud SQL handle the following operations: Backups High availability and failover Network connectivity Export and import Maintenance and updates Monitoring Logging What is a Cloud SQL instance?
- For information about how Cloud SQL databases compare with one another, see Cloud SQL feature support by database engine .
- In general, Cloud SQL system updates are divided into three categories: hardware updates, online updates, and maintenance.
- Maintenance updates apply upgrades to the operating system and the database program.

