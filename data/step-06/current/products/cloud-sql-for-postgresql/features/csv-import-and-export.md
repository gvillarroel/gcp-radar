---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.445Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "CSV import and export"
feature_slug: "csv-import-and-export"
latest_feature_date: "2018-11-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv"
  - "https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest"
keywords:
  - "csv"
  - "import"
  - "and"
  - "export"
  - "sql"
  - "for"
  - "postgresql"
  - "added"
---

# CSV import and export

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for PostgreSQL added support for importing and exporting instances in CSV format.

## Extended Definition

Cloud SQL for PostgreSQL added support for importing and exporting instances in CSV format.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv)
- [https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp](https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest)

## Supporting Pages

### "Export and import using CSV files \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv)
- Source ID: `site-docs-root`
- Final score: 318
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you need even more options than Cloud SQL provides, you can use the following statement in a psql client: \c opy [ table name ] TO '[csv file name].csv' WITH ( FORMAT csv, ESCAPE '[escape character]' , QUOTE '[quote character]' , DELIMITER '[delimiter character]' , ENCODING 'UTF8' , NULL '[null marker string]' ) ; Import data to Cloud SQL for PostgreSQL Required roles and permissions for importing to Cloud SQL for PostgreSQL To import data from Cloud Storage into Cloud SQL, the user initiating the import must have one of the following roles: The Cloud SQL Admin role A custom role , including the following permissions: cloudsql.instances.get cloudsql.instances.import Additionally, the service account for the Cloud SQL instance must have one of the following roles: The storage.objectAdmin IAM role A custom role, including the following permissions: storage.objects.get storage.objects.list (for importing files in parallel only) For help with IAM roles, see Identity and Access Management .
- A sample gcloud command follows: gcloud sql import csv INSTANCE NAME gs:// BUCKET NAME / FILE NAME \ --database = DATABASE NAME \ --table = TABLE NAME \ --quote = "22" \ --escape = "5C" \ --fields-terminated-by = "2C" \ --lines-terminated-by = "0A" The equivalent REST API request body would look like this: { "importContext" : { "fileType" : "CSV" , "uri" : "gs://bucket name/path to csv file" , "database" : [ " DATABASE NAME " ] , "csvImportOptions" : { "table" : " TABLE NAME " , "escapeCharacter" : "5C" , "quoteCharacter" : "22" , "fieldsTerminatedBy" : "2C" , "linesTerminatedBy" : "0A" } } } Note: If you use custom format options in your import commands, make sure the exported file was created with the same options.
- Home Documentation Databases Cloud SQL PostgreSQL Guides Send feedback Export and import using CSV files Stay organized with collections Save and categorize content based on your preferences.
- Export data to a CSV file from Cloud SQL for PostgreSQL You can export your data in CSV format, which is usable by other tools and environments.

### "Export and import using pg_dump, pg_dumpall, and pg_restore \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp](https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Export data from an on-premises PostgreSQL server using pg dump To export a database that is not managed by Cloud SQL, for later import into Cloud SQL, use the pg dump utility with the following flags: --no-owner Ownership change commands must not be included in the dump file. --format The custom and directory formats are allowed if the dump file is intended for use with pg restore .
- Export data using the custom format from Cloud SQL for PostgreSQL To use the custom format, from a command line, run pg dump : pg dump \ -U USERNAME \ --format = custom \ --no-owner \ --no-acl \ DATABASE NAME > DATABASE NAME .dmp Export data from multiple files in parallel from Cloud SQL for PostgreSQL You can only use the directory output format to export data from multiple files in parallel .
- Home Documentation Databases Cloud SQL PostgreSQL Guides Send feedback Export and import using pg dump, pg dumpall, and pg restore Stay organized with collections Save and categorize content based on your preferences.
- Import from a dump file created with the custom format to Cloud SQL for PostgreSQL If the dump file was created with custom format, run the following command: pg restore \ --list DATABASE NAME .dmp sed -E 's/(.

### Cloud SQL Admin API \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest)
- Source ID: `site-api-reference`
- Final score: 222
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- RotateServerCertificate POST /sql/v1beta4/projects/{project}/instances/{instance}/rotateServerCertificate Rotates the server certificate version to one previously added with the addServerCertificate method. addServerCa POST /sql/v1beta4/projects/{project}/instances/{instance}/addServerCa Add a new trusted Certificate Authority (CA) version for the specified instance. addServerCertificate POST /sql/v1beta4/projects/{project}/instances/{instance}/addServerCertificate Add a new trusted server certificate version for the specified instance using Certificate Authority Service (CAS) server CA. clone POST /sql/v1beta4/projects/{project}/instances/{instance}/clone Creates a Cloud SQL instance as a clone of the source instance. delete DELETE /sql/v1beta4/projects/{project}/instances/{instance} Deletes a Cloud SQL instance. demote POST /sql/v1beta4/projects/{project}/instances/{instance}/demote Demotes an existing standalone instance to be a Cloud SQL read replica for an external database server. demoteMaster POST /sql/v1beta4/projects/{project}/instances/{instance}/demoteMaster Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server. executeSql POST /sql/v1beta4/projects/{project}/instances/{instance}/executeSql Execute SQL statements. export POST /sql/v1beta4/projects/{project}/instances/{instance}/export Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file. failover POST /sql/v1beta4/projects/{project}/instances/{instance}/failover Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. get GET /sql/v1beta4/projects/{project}/instances/{instance} Retrieves a resource containing information about a Cloud SQL instance. import POST /sql/v1beta4/projects/{project}/instances/{instance}/import Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage. insert POST /sql/v1beta4/projects/{project}/instances Creates a new Cloud SQL instance. list GET /sql/v1beta4/projects/{project}/instances Lists instances under a given project. listServerCas GET /sql/v1beta4/projects/{project}/instances/{instance}/listServerCas Lists all of the trusted Certificate Authorities (CAs) for the specified instance. patch PATCH /sql/v1beta4/projects/{project}/instances/{instance} Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. pointInTimeRestore POST /sql/v1beta4/{parent=projects/ }:pointInTimeRestore Point in time restore for an instance managed by Google Cloud Backup and Disaster Recovery. preCheckMajorVersionUpgrade POST /sql/v1beta4/projects/{project}/instances/{instance}/preCheckMajorVersionUpgrade Execute MVU Pre-checks promoteReplica POST /sql/v1beta4/projects/{project}/instances/{instance}/promoteReplica Promotes the read replica instance to be an independent Cloud SQL primary instance. reencrypt POST /sql/v1beta4/projects/{project}/instances/{instance}/reencrypt Reencrypt CMEK instance with latest key version. resetSslConfig POST /sql/v1beta4/projects/{project}/instances/{instance}/resetSslConfig Deletes all client certificates and generates a new server SSL certificate for the instance. restart POST /sql/v1beta4/projects/{project}/instances/{instance}/restart Restarts a Cloud SQL instance. restoreBackup POST /sql/v1beta4/projects/{project}/instances/{instance}/restoreBackup Restores a backup of a Cloud SQL instance. rotateServerCa POST /sql/v1beta4/projects/{project}/instances/{instance}/rotateServerCa Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method. startReplica POST /sql/v1beta4/projects/{project}/instances/{instance}/startReplica Starts the replication in the read replica instance. stopReplica POST /sql/v1beta4/projects/{project}/instances/{instance}/stopReplica Stops the replication in the read replica instance. switchover POST /sql/v1beta4/projects/{project}/instances/{instance}/switchover Switches over from the primary instance to the DR replica instance. truncateLog POST /sql/v1beta4/projects/{project}/instances/{instance}/truncateLog Truncate MySQL general and slow query log tables MySQL only. update PUT /sql/v1beta4/projects/{project}/instances/{instance} Updates settings of a Cloud SQL instance.
- RotateServerCertificate POST /v1/projects/{project}/instances/{instance}/rotateServerCertificate Rotates the server certificate version to one previously added with the addServerCertificate method. addServerCa POST /v1/projects/{project}/instances/{instance}/addServerCa Adds a new trusted Certificate Authority (CA) version for the specified instance. addServerCertificate POST /v1/projects/{project}/instances/{instance}/addServerCertificate Add a new trusted server certificate version for the specified instance using Certificate Authority Service (CAS) server CA. clone POST /v1/projects/{project}/instances/{instance}/clone Creates a Cloud SQL instance as a clone of the source instance. delete DELETE /v1/projects/{project}/instances/{instance} Deletes a Cloud SQL instance. demote POST /v1/projects/{project}/instances/{instance}/demote Demotes an existing standalone instance to be a Cloud SQL read replica for an external database server. demoteMaster POST /v1/projects/{project}/instances/{instance}/demoteMaster Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server. executeSql POST /v1/projects/{project}/instances/{instance}/executeSql Execute SQL statements. export POST /v1/projects/{project}/instances/{instance}/export Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file. failover POST /v1/projects/{project}/instances/{instance}/failover Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. get GET /v1/projects/{project}/instances/{instance} Retrieves a resource containing information about a Cloud SQL instance. import POST /v1/projects/{project}/instances/{instance}/import Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage. insert POST /v1/projects/{project}/instances Creates a new Cloud SQL instance. list GET /v1/projects/{project}/instances Lists instances under a given project. listServerCas GET /v1/projects/{project}/instances/{instance}/listServerCas Lists all of the trusted Certificate Authorities (CAs) for the specified instance. patch PATCH /v1/projects/{project}/instances/{instance} Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. pointInTimeRestore POST /v1/{parent=projects/ }:pointInTimeRestore Point in time restore for an instance managed by Google Cloud Backup and Disaster Recovery. preCheckMajorVersionUpgrade POST /v1/projects/{project}/instances/{instance}/preCheckMajorVersionUpgrade Execute MVU Pre-checks promoteReplica POST /v1/projects/{project}/instances/{instance}/promoteReplica Promotes the read replica instance to be an independent Cloud SQL primary instance. reencrypt POST /v1/projects/{project}/instances/{instance}/reencrypt Reencrypt CMEK instance with latest key version. resetSslConfig POST /v1/projects/{project}/instances/{instance}/resetSslConfig Deletes all client certificates and generates a new server SSL certificate for the instance. restart POST /v1/projects/{project}/instances/{instance}/restart Restarts a Cloud SQL instance. restoreBackup POST /v1/projects/{project}/instances/{instance}/restoreBackup Restores a backup of a Cloud SQL instance. rotateServerCa POST /v1/projects/{project}/instances/{instance}/rotateServerCa Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method. startReplica POST /v1/projects/{project}/instances/{instance}/startReplica Starts the replication in the read replica instance. stopReplica POST /v1/projects/{project}/instances/{instance}/stopReplica Stops the replication in the read replica instance. switchover POST /v1/projects/{project}/instances/{instance}/switchover Switches over from the primary instance to the DR replica instance. truncateLog POST /v1/projects/{project}/instances/{instance}/truncateLog Truncate MySQL general and slow query log tables MySQL only. update PUT /v1/projects/{project}/instances/{instance} Updates settings of a Cloud SQL instance.
- REST Resource: v1beta4.sslCerts Methods createEphemeral POST /sql/v1beta4/projects/{project}/instances/{instance}/createEphemeral Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. delete DELETE /sql/v1beta4/projects/{project}/instances/{instance}/sslCerts/{sha1Fingerprint} Deletes the SSL certificate. get GET /sql/v1beta4/projects/{project}/instances/{instance}/sslCerts/{sha1Fingerprint} Retrieves a particular SSL certificate. insert POST /sql/v1beta4/projects/{project}/instances/{instance}/sslCerts Creates an SSL certificate and returns it along with the private key and server certificate authority. list GET /sql/v1beta4/projects/{project}/instances/{instance}/sslCerts Lists all of the current SSL certificates for the instance.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://sqladmin.googleapis.com REST Resource: v1beta4.backupRuns Methods delete DELETE /sql/v1beta4/projects/{project}/instances/{instance}/backupRuns/{id} Deletes the backup taken by a backup run. get GET /sql/v1beta4/projects/{project}/instances/{instance}/backupRuns/{id} Retrieves a resource containing information about a backup run. insert POST /sql/v1beta4/projects/{project}/instances/{instance}/backupRuns Creates a new backup run on demand. list GET /sql/v1beta4/projects/{project}/instances/{instance}/backupRuns Lists all backup runs associated with the project or a given instance and configuration in the reverse chronological order of the backup initiation time.

