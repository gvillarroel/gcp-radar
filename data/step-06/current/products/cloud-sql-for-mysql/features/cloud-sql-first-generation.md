---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.946Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Cloud SQL First Generation"
feature_slug: "cloud-sql-first-generation"
latest_feature_date: "2020-05-04"
deprecation_date: "2020-03-25"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
keywords:
  - "sql"
  - "first"
  - "generation"
  - "was"
  - "deprecated"
  - "and"
  - "all"
  - "remaining"
---

# Cloud SQL First Generation

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL First Generation was deprecated and all remaining instances were migrated to Second Generation; Cloud SQL First Generation can no longer be created and has been replaced by Second Generation; deprecated on 2020-03-25.

## Extended Definition

Cloud SQL First Generation was deprecated and all remaining instances were migrated to Second Generation; Cloud SQL First Generation can no longer be created and has been replaced by Second Generation; deprecated on 2020-03-25.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)

## Supporting Pages

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- May 04, 2020 Deprecated As previously announced , Cloud SQL First Generation was deprecated on January 29, 2019.
- As previously announced , Cloud SQL First Generation was deprecated on January 29, 2019.
- October 01, 2018 Feature Upgrade to Second Generation generally available for eligible First Generation MySQL instances.
- To improve performance, availability, and storage capacity, Cloud SQL Second Generation has replaced First Generation.

### REST Resource: instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- Source ID: `site-iam-reference`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- The IPv6 address assigned to the instance. (Deprecated) This property was applicable only to First Generation instances. serviceAccountEmailAddress string The service account email address assigned to the instance.\This property is read-only. onPremisesConfiguration object ( OnPremisesConfiguration ) Configuration specific to on-premises instances. replicaConfiguration object ( ReplicaConfiguration ) Configuration specific to failover replicas and read replicas. backendType enum ( SqlBackendType ) The backend type.
- This can be either ASYNCHRONOUS or SYNCHRONOUS . (Deprecated) This property was only applicable to First Generation instances. storageAutoResizeLimit string ( Int64Value format) The maximum size to which storage capacity can be automatically increased.
- App Engine co-location was only applicable to First Generation instances. databaseFlags[] object ( DatabaseFlags ) The database flags passed to the instance at startup. dataDiskType enum ( SqlDataDiskType ) The type of data disk: PD SSD (default) or PD HDD .
- RotateServerCertificate Rotates the server certificate version to one previously added with the addServerCertificate method. addServerCa Adds a new trusted Certificate Authority (CA) version for the specified instance. addServerCertificate Add a new trusted server certificate version for the specified instance using Certificate Authority Service (CAS) server CA. clone Creates a Cloud SQL instance as a clone of the source instance. delete Deletes a Cloud SQL instance. demote Demotes an existing standalone instance to be a Cloud SQL read replica for an external database server. demoteMaster Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server. export Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file. failover Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. get Retrieves a resource containing information about a Cloud SQL instance. import Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage. insert Creates a new Cloud SQL instance. list Lists instances under a given project. listServerCas Lists all of the trusted Certificate Authorities (CAs) for the specified instance. patch Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. pointInTimeRestore Point in time restore for an instance managed by Google Cloud Backup and Disaster Recovery. promoteReplica Promotes the read replica instance to be an independent Cloud SQL primary instance. reencrypt Reencrypt CMEK instance with latest key version. resetSslConfig Deletes all client certificates and generates a new server SSL certificate for the instance. restart Restarts a Cloud SQL instance. restoreBackup Restores a backup of a Cloud SQL instance. rotateServerCa Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method. startReplica Starts the replication in the read replica instance. stopReplica Stops the replication in the read replica instance. switchover Switches over from the primary instance to the DR replica instance. truncateLog Truncate MySQL general and slow query log tables MySQL only. update Updates settings of a Cloud SQL instance.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- May 04, 2020 Cloud SQL for MySQL Deprecated As previously announced , Cloud SQL First Generation was deprecated on January 29, 2019.
- As previously announced , Cloud SQL First Generation was deprecated on January 29, 2019.
- Cloud SQL for SQL Server Security A vulnerability was recently discovered in Cloud SQL for SQL Server that allowed customer administrator accounts to create triggers in the tempdb database and use those to gain sysadmin privileges in the instance.
- October 01, 2018 Cloud SQL for MySQL Feature Upgrade to Second Generation generally available for eligible First Generation MySQL instances.

