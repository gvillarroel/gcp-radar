---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.900Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Database minor version visibility"
feature_slug: "database-minor-version-visibility"
latest_feature_date: "2021-12-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/built-in-authentication"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest"
keywords:
  - "database"
  - "minor"
  - "version"
  - "visibility"
  - "sql"
  - "displays"
  - "the"
  - "in"
---

# Database minor version visibility

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Cloud SQL displays the database minor version in instance information.

## Extended Definition

Cloud SQL displays the database minor version in instance information.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion)
- [https://docs.cloud.google.com/sql/docs/sqlserver/built-in-authentication](https://docs.cloud.google.com/sql/docs/sqlserver/built-in-authentication)
- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest)

## Supporting Pages

### SqlDatabaseVersion \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest/v1/SqlDatabaseVersion)
- Source ID: `site-api-reference`
- Final score: 236
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- SQLSERVER 2017 ENTERPRISE The database version is SQL Server 2017 Enterprise.
- SQLSERVER 2019 ENTERPRISE The database version is SQL Server 2019 Enterprise.
- SQLSERVER 2022 ENTERPRISE The database version is SQL Server 2022 Enterprise.
- SQLSERVER 2017 STANDARD The database version is SQL Server 2017 Standard.

### "Cloud SQL built-in database authentication \_|\_ Cloud SQL for SQL Server\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/built-in-authentication](https://docs.cloud.google.com/sql/docs/sqlserver/built-in-authentication)
- Source ID: `site-iam-reference`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Limitations Cloud SQL for SQL Server doesn't support the following capabilities: Custom password policies IAM database authentication IAM authentication for database operations Cloud SQL for SQL Serversupports IAM authentication for instance and backup operations only.
- Home Documentation Databases Cloud SQL SQL Server Guides Send feedback Cloud SQL built-in database authentication Stay organized with collections Save and categorize content based on your preferences.
- Cloud SQL uses the following types of authentication for database users: The database's built-in authentication uses a username and a password to authenticate local database users.
- For more information, see the following resources: Create and manage users About SQL Server users Authentication using Managed Service for Microsoft Active Directory .

### Cloud SQL Admin API \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest)
- Source ID: `site-api-reference`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- RotateServerCertificate POST /sql/v1beta4/projects/{project}/instances/{instance}/rotateServerCertificate Rotates the server certificate version to one previously added with the addServerCertificate method. acquireSsrsLease POST /sql/v1beta4/projects/{project}/instances/{instance}/acquireSsrsLease Acquire a lease for the setup of SQL Server Reporting Services (SSRS). addEntraIdCertificate POST /sql/v1beta4/projects/{project}/instances/{instance}/addEntraIdCertificate Adds a new Entra ID certificate for the specified instance. addServerCa POST /sql/v1beta4/projects/{project}/instances/{instance}/addServerCa Add a new trusted Certificate Authority (CA) version for the specified instance. addServerCertificate POST /sql/v1beta4/projects/{project}/instances/{instance}/addServerCertificate Add a new trusted server certificate version for the specified instance using Certificate Authority Service (CAS) server CA. clone POST /sql/v1beta4/projects/{project}/instances/{instance}/clone Creates a Cloud SQL instance as a clone of the source instance. delete DELETE /sql/v1beta4/projects/{project}/instances/{instance} Deletes a Cloud SQL instance. demoteMaster POST /sql/v1beta4/projects/{project}/instances/{instance}/demoteMaster Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server. export POST /sql/v1beta4/projects/{project}/instances/{instance}/export Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file. failover POST /sql/v1beta4/projects/{project}/instances/{instance}/failover Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. get GET /sql/v1beta4/projects/{project}/instances/{instance} Retrieves a resource containing information about a Cloud SQL instance. import POST /sql/v1beta4/projects/{project}/instances/{instance}/import Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage. insert POST /sql/v1beta4/projects/{project}/instances Creates a new Cloud SQL instance. list GET /sql/v1beta4/projects/{project}/instances Lists instances under a given project. listServerCas GET /sql/v1beta4/projects/{project}/instances/{instance}/listServerCas Lists all of the trusted Certificate Authorities (CAs) for the specified instance. patch PATCH /sql/v1beta4/projects/{project}/instances/{instance} Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. pointInTimeRestore POST /sql/v1beta4/{parent=projects/ }:pointInTimeRestore Point in time restore for an instance managed by Google Cloud Backup and Disaster Recovery. promoteReplica POST /sql/v1beta4/projects/{project}/instances/{instance}/promoteReplica Promotes the read replica instance to be an independent Cloud SQL primary instance. reencrypt POST /sql/v1beta4/projects/{project}/instances/{instance}/reencrypt Reencrypt CMEK instance with latest key version. releaseSsrsLease POST /sql/v1beta4/projects/{project}/instances/{instance}/releaseSsrsLease Release a lease for the setup of SQL Server Reporting Services (SSRS). resetSslConfig POST /sql/v1beta4/projects/{project}/instances/{instance}/resetSslConfig Deletes all client certificates and generates a new server SSL certificate for the instance. restart POST /sql/v1beta4/projects/{project}/instances/{instance}/restart Restarts a Cloud SQL instance. restoreBackup POST /sql/v1beta4/projects/{project}/instances/{instance}/restoreBackup Restores a backup of a Cloud SQL instance. rotateServerCa POST /sql/v1beta4/projects/{project}/instances/{instance}/rotateServerCa Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method. startReplica POST /sql/v1beta4/projects/{project}/instances/{instance}/startReplica Starts the replication in the read replica instance. stopReplica POST /sql/v1beta4/projects/{project}/instances/{instance}/stopReplica Stops the replication in the read replica instance. switchover POST /sql/v1beta4/projects/{project}/instances/{instance}/switchover Switches over from the primary instance to the DR replica instance. truncateLog POST /sql/v1beta4/projects/{project}/instances/{instance}/truncateLog Truncate MySQL general and slow query log tables MySQL only. update PUT /sql/v1beta4/projects/{project}/instances/{instance} Updates settings of a Cloud SQL instance.
- RotateServerCertificate POST /v1/projects/{project}/instances/{instance}/rotateServerCertificate Rotates the server certificate version to one previously added with the addServerCertificate method. acquireSsrsLease POST /v1/projects/{project}/instances/{instance}/acquireSsrsLease Acquire a lease for the setup of SQL Server Reporting Services (SSRS). addEntraIdCertificate POST /v1/projects/{project}/instances/{instance}/addEntraIdCertificate Adds a new Entra ID certificate for the specified instance. addServerCa POST /v1/projects/{project}/instances/{instance}/addServerCa Adds a new trusted Certificate Authority (CA) version for the specified instance. addServerCertificate POST /v1/projects/{project}/instances/{instance}/addServerCertificate Add a new trusted server certificate version for the specified instance using Certificate Authority Service (CAS) server CA. clone POST /v1/projects/{project}/instances/{instance}/clone Creates a Cloud SQL instance as a clone of the source instance. delete DELETE /v1/projects/{project}/instances/{instance} Deletes a Cloud SQL instance. demoteMaster POST /v1/projects/{project}/instances/{instance}/demoteMaster Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server. export POST /v1/projects/{project}/instances/{instance}/export Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file. failover POST /v1/projects/{project}/instances/{instance}/failover Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. get GET /v1/projects/{project}/instances/{instance} Retrieves a resource containing information about a Cloud SQL instance. import POST /v1/projects/{project}/instances/{instance}/import Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage. insert POST /v1/projects/{project}/instances Creates a new Cloud SQL instance. list GET /v1/projects/{project}/instances Lists instances under a given project. listServerCas GET /v1/projects/{project}/instances/{instance}/listServerCas Lists all of the trusted Certificate Authorities (CAs) for the specified instance. patch PATCH /v1/projects/{project}/instances/{instance} Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. pointInTimeRestore POST /v1/{parent=projects/ }:pointInTimeRestore Point in time restore for an instance managed by Google Cloud Backup and Disaster Recovery. promoteReplica POST /v1/projects/{project}/instances/{instance}/promoteReplica Promotes the read replica instance to be an independent Cloud SQL primary instance. reencrypt POST /v1/projects/{project}/instances/{instance}/reencrypt Reencrypt CMEK instance with latest key version. releaseSsrsLease POST /v1/projects/{project}/instances/{instance}/releaseSsrsLease Release a lease for the setup of SQL Server Reporting Services (SSRS). resetSslConfig POST /v1/projects/{project}/instances/{instance}/resetSslConfig Deletes all client certificates and generates a new server SSL certificate for the instance. restart POST /v1/projects/{project}/instances/{instance}/restart Restarts a Cloud SQL instance. restoreBackup POST /v1/projects/{project}/instances/{instance}/restoreBackup Restores a backup of a Cloud SQL instance. rotateServerCa POST /v1/projects/{project}/instances/{instance}/rotateServerCa Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method. startReplica POST /v1/projects/{project}/instances/{instance}/startReplica Starts the replication in the read replica instance. stopReplica POST /v1/projects/{project}/instances/{instance}/stopReplica Stops the replication in the read replica instance. switchover POST /v1/projects/{project}/instances/{instance}/switchover Switches over from the primary instance to the DR replica instance. truncateLog POST /v1/projects/{project}/instances/{instance}/truncateLog Truncate MySQL general and slow query log tables MySQL only. update PUT /v1/projects/{project}/instances/{instance} Updates settings of a Cloud SQL instance.
- REST Resource: v1beta4.databases Methods delete DELETE /sql/v1beta4/projects/{project}/instances/{instance}/databases/{database} Deletes a database from a Cloud SQL instance. get GET /sql/v1beta4/projects/{project}/instances/{instance}/databases/{database} Retrieves a resource containing information about a database inside a Cloud SQL instance. insert POST /sql/v1beta4/projects/{project}/instances/{instance}/databases Inserts a resource containing information about a database inside a Cloud SQL instance. list GET /sql/v1beta4/projects/{project}/instances/{instance}/databases Lists databases in the specified Cloud SQL instance. patch PATCH /sql/v1beta4/projects/{project}/instances/{instance}/databases/{database} Partially updates a resource containing information about a database inside a Cloud SQL instance. update PUT /sql/v1beta4/projects/{project}/instances/{instance}/databases/{database} Updates a resource containing information about a database inside a Cloud SQL instance.
- REST Resource: v1.databases Methods delete DELETE /v1/projects/{project}/instances/{instance}/databases/{database} Deletes a database from a Cloud SQL instance. get GET /v1/projects/{project}/instances/{instance}/databases/{database} Retrieves a resource containing information about a database inside a Cloud SQL instance. insert POST /v1/projects/{project}/instances/{instance}/databases Inserts a resource containing information about a database inside a Cloud SQL instance. list GET /v1/projects/{project}/instances/{instance}/databases Lists databases in the specified Cloud SQL instance. patch PATCH /v1/projects/{project}/instances/{instance}/databases/{database} Partially updates a resource containing information about a database inside a Cloud SQL instance. update PUT /v1/projects/{project}/instances/{instance}/databases/{database} Updates a resource containing information about a database inside a Cloud SQL instance.

