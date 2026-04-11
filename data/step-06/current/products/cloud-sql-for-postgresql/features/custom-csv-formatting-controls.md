---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.406Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Custom CSV formatting controls"
feature_slug: "custom-csv-formatting-controls"
latest_feature_date: "2021-09-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances"
keywords:
  - "custom"
  - "csv"
  - "formatting"
  - "controls"
  - "sql"
  - "for"
  - "postgresql"
  - "supports"
---

# Custom CSV formatting controls

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for PostgreSQL supports custom CSV delimiters, quotes, escapes, and related formatting options for exports and imports.

## Extended Definition

Cloud SQL for PostgreSQL supports custom CSV delimiters, quotes, escapes, and related formatting options for exports and imports.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)

## Supporting Pages

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- Feature Cloud SQL for PostgreSQL now supports custom formatting controls for CSVs.
- February 08, 2022 Feature Cloud SQL supports the max parallel maintenance workers , max parallel workers , max parallel workers per gather , and max pred locks per transaction flags: max parallel maintenance workers sets the maximum number of parallel workers that can be started by a single utility command. max parallel workers sets the maximum number of workers that the system can support for parallel operations. max parallel workers per gather sets the maximum number of workers that can be started by a single Gather or Gather Merge node. max pred locks per transaction controls the average number of object locks allocated for each transaction.
- July 29, 2021 Feature Cloud SQL for PostgreSQL now supports the following flags: tcp keepalives count tcp keepalives idle tcp keepalives interval For more information about these flags, see the Cloud SQL for PostgreSQL flags documentation.
- December 17, 2019 Feature Cloud SQL now supports VPC Service Controls, which let you add a service perimeter around the Cloud SQL Admin API and host project for Cloud SQL instances to reduce the risk of data exfiltration.

### "Export and import using CSV files \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you need even more options than Cloud SQL provides, you can use the following statement in a psql client: \c opy [ table name ] TO '[csv file name].csv' WITH ( FORMAT csv, ESCAPE '[escape character]' , QUOTE '[quote character]' , DELIMITER '[delimiter character]' , ENCODING 'UTF8' , NULL '[null marker string]' ) ; Import data to Cloud SQL for PostgreSQL Required roles and permissions for importing to Cloud SQL for PostgreSQL To import data from Cloud Storage into Cloud SQL, the user initiating the import must have one of the following roles: The Cloud SQL Admin role A custom role , including the following permissions: cloudsql.instances.get cloudsql.instances.import Additionally, the service account for the Cloud SQL instance must have one of the following roles: The storage.objectAdmin IAM role A custom role, including the following permissions: storage.objects.get storage.objects.list (for importing files in parallel only) For help with IAM roles, see Identity and Access Management .
- Customize the format of a CSV file for Cloud SQL for PostgreSQL You can use gcloud or the REST API to customize your CSV file format.
- Export data from Cloud SQL for PostgreSQL Required roles and permissions for exporting from Cloud SQL for PostgreSQL To export data from Cloud SQL into Cloud Storage, the user initiating the export must have one of the following roles: The Cloud SQL Editor role A custom role , including the following permissions: cloudsql.instances.get cloudsql.instances.export Additionally, the service account for the Cloud SQL instance must have one of the following roles: The storage.objectAdmin Identity and Access Management (IAM) role A custom role, including the following permissions: storage.objects.create storage.objects.list (for exporting files in parallel only) storage.objects.delete (for exporting files in parallel only) For help with IAM roles, see Identity and Access Management .
- A sample gcloud command follows: gcloud sql import csv INSTANCE NAME gs:// BUCKET NAME / FILE NAME \ --database = DATABASE NAME \ --table = TABLE NAME \ --quote = "22" \ --escape = "5C" \ --fields-terminated-by = "2C" \ --lines-terminated-by = "0A" The equivalent REST API request body would look like this: { "importContext" : { "fileType" : "CSV" , "uri" : "gs://bucket name/path to csv file" , "database" : [ " DATABASE NAME " ] , "csvImportOptions" : { "table" : " TABLE NAME " , "escapeCharacter" : "5C" , "quoteCharacter" : "22" , "fieldsTerminatedBy" : "2C" , "linesTerminatedBy" : "0A" } } } Note: If you use custom format options in your import commands, make sure the exported file was created with the same options.

### "REST Resource: instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
- Source ID: `site-api-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- RotateServerCertificate Rotates the server certificate version to one previously added with the addServerCertificate method. addServerCa Adds a new trusted Certificate Authority (CA) version for the specified instance. addServerCertificate Add a new trusted server certificate version for the specified instance using Certificate Authority Service (CAS) server CA. clone Creates a Cloud SQL instance as a clone of the source instance. delete Deletes a Cloud SQL instance. demote Demotes an existing standalone instance to be a Cloud SQL read replica for an external database server. demoteMaster Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server. export Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file. failover Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. get Retrieves a resource containing information about a Cloud SQL instance. import Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage. insert Creates a new Cloud SQL instance. list Lists instances under a given project. listServerCas Lists all of the trusted Certificate Authorities (CAs) for the specified instance. patch Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. pointInTimeRestore Point in time restore for an instance managed by Google Cloud Backup and Disaster Recovery. preCheckMajorVersionUpgrade Execute MVU Pre-checks promoteReplica Promotes the read replica instance to be an independent Cloud SQL primary instance. reencrypt Reencrypt CMEK instance with latest key version. resetSslConfig Deletes all client certificates and generates a new server SSL certificate for the instance. restart Restarts a Cloud SQL instance. restoreBackup Restores a backup of a Cloud SQL instance. rotateServerCa Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method. startReplica Starts the replication in the read replica instance. stopReplica Stops the replication in the read replica instance. switchover Switches over from the primary instance to the DR replica instance. truncateLog Truncate MySQL general and slow query log tables MySQL only. update Updates settings of a Cloud SQL instance.
- JSON representation { "ipv4Enabled" : boolean , "privateNetwork" : string , "requireSsl" : boolean , "authorizedNetworks" : [ { object ( AclEntry ) } ] , "allocatedIpRange" : string , "enablePrivatePathForGoogleCloudServices" : boolean , "sslMode" : enum ( SslMode ) , "customSubjectAlternativeNames" : [ string ] , "pscConfig" : { object ( PscConfig ) } , "serverCaMode" : enum ( CaMode ) , "serverCaPool" : string , "serverCertificateRotationMode" : enum ( ServerCertificateRotationMode ) } Fields ipv4Enabled boolean Whether the instance is assigned a public IP address or not. privateNetwork string The resource link for the VPC network from which the Cloud SQL instance is accessible for private IP.
- If you must use the requireSsl flag for backward compatibility, then only the following value pairs are valid: For PostgreSQL and MySQL: sslMode=ALLOW UNENCRYPTED AND ENCRYPTED and requireSsl=false sslMode=ENCRYPTED ONLY and requireSsl=false sslMode=TRUSTED CLIENT CERTIFICATE REQUIRED and requireSsl=true For SQL Server: sslMode=ALLOW UNENCRYPTED AND ENCRYPTED and requireSsl=false sslMode=ENCRYPTED ONLY and requireSsl=true The value of sslMode has priority over the value of requireSsl .
- You must set root passwords before you can connect to PostgreSQL instances. scheduledMaintenance object ( SqlScheduledMaintenance ) The start time of any upcoming scheduled maintenance for this instance. satisfiesPzs boolean This status indicates whether the instance satisfies PZS.

