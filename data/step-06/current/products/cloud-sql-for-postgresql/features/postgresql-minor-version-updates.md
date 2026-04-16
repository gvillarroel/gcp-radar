---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.755Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "PostgreSQL minor version updates"
feature_slug: "postgresql-minor-version-updates"
latest_feature_date: "2025-03-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/SqlDatabaseVersion"
keywords:
  - "rolled"
  - "minor"
  - "updates"
  - "newer"
  - "version"
---

# PostgreSQL minor version updates

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL rolled out newer supported PostgreSQL minor versions across versions 12 through 17; Cloud SQL rolled out newer supported PostgreSQL minor versions across versions 12 through 17.

## Extended Definition

Cloud SQL rolled out newer supported PostgreSQL minor versions across versions 12 through 17; Cloud SQL rolled out newer supported PostgreSQL minor versions across versions 12 through 17.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/SqlDatabaseVersion)

## Supporting Pages

### "REST Resource: instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
- Source ID: `site-api-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- RotateServerCertificate Rotates the server certificate version to one previously added with the addServerCertificate method. addServerCa Adds a new trusted Certificate Authority (CA) version for the specified instance. addServerCertificate Add a new trusted server certificate version for the specified instance using Certificate Authority Service (CAS) server CA. clone Creates a Cloud SQL instance as a clone of the source instance. delete Deletes a Cloud SQL instance. demote Demotes an existing standalone instance to be a Cloud SQL read replica for an external database server. demoteMaster Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server. export Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file. failover Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. get Retrieves a resource containing information about a Cloud SQL instance. import Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage. insert Creates a new Cloud SQL instance. list Lists instances under a given project. listServerCas Lists all of the trusted Certificate Authorities (CAs) for the specified instance. patch Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. pointInTimeRestore Point in time restore for an instance managed by Google Cloud Backup and Disaster Recovery. preCheckMajorVersionUpgrade Execute MVU Pre-checks promoteReplica Promotes the read replica instance to be an independent Cloud SQL primary instance. reencrypt Reencrypt CMEK instance with latest key version. resetSslConfig Deletes all client certificates and generates a new server SSL certificate for the instance. restart Restarts a Cloud SQL instance. restoreBackup Restores a backup of a Cloud SQL instance. rotateServerCa Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method. startReplica Starts the replication in the read replica instance. stopReplica Stops the replication in the read replica instance. switchover Switches over from the primary instance to the DR replica instance. truncateLog Truncate MySQL general and slow query log tables MySQL only. update Updates settings of a Cloud SQL instance.
- Stores the current database version running on the instance including minor version such as MYSQL 8 0 18 . createTime string ( Timestamp format) Output only.
- For MySQL 8.0, this string provides the database major and minor version. displayName string The database version's display name.
- When this parameter is set to true, auto-upgrade is enabled for MySQL 8.0 minor versions.

### REST Resource: instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances)
- Source ID: `site-iam-reference`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- RotateServerCertificate Rotates the server certificate version to one previously added with the addServerCertificate method. addServerCa Add a new trusted Certificate Authority (CA) version for the specified instance. addServerCertificate Add a new trusted server certificate version for the specified instance using Certificate Authority Service (CAS) server CA. clone Creates a Cloud SQL instance as a clone of the source instance. delete Deletes a Cloud SQL instance. demote Demotes an existing standalone instance to be a Cloud SQL read replica for an external database server. demoteMaster Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server. executeSql Execute SQL statements. export Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file. failover Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. get Retrieves a resource containing information about a Cloud SQL instance. import Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage. insert Creates a new Cloud SQL instance. list Lists instances under a given project. listServerCas Lists all of the trusted Certificate Authorities (CAs) for the specified instance. patch Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. pointInTimeRestore Point in time restore for an instance managed by Google Cloud Backup and Disaster Recovery. promoteReplica Promotes the read replica instance to be an independent Cloud SQL primary instance. reencrypt Reencrypt CMEK instance with latest key version. resetSslConfig Deletes all client certificates and generates a new server SSL certificate for the instance. restart Restarts a Cloud SQL instance. restoreBackup Restores a backup of a Cloud SQL instance. rotateServerCa Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method. startReplica Starts the replication in the read replica instance. stopReplica Stops the replication in the read replica instance. switchover Switches over from the primary instance to the DR replica instance. truncateLog Truncate MySQL general and slow query log tables MySQL only. update Updates settings of a Cloud SQL instance.
- Stores the current database version running on the instance including minor version such as MYSQL 8 0 18 . createTime string ( Timestamp format) Output only.
- For MySQL 8.0, this string provides the database major and minor version. displayName string The database version's display name.
- When this parameter is set to true, auto-upgrade is enabled for MySQL 8.0 minor versions.

### SqlDatabaseVersion \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/SqlDatabaseVersion)
- Source ID: `site-api-reference`
- Final score: 69
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Cloud SQL PostgreSQL Reference Send feedback SqlDatabaseVersion Stay organized with collections Save and categorize content based on your preferences.
- Enums SQL DATABASE VERSION UNSPECIFIED This is an unknown database version.
- POSTGRES 9 6 The database version is PostgreSQL 9.6.
- POSTGRES 10 The database version is PostgreSQL 10.

