---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.808Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Automatic instance stop on low storage"
feature_slug: "automatic-instance-stop-on-low-storage"
latest_feature_date: "2021-09-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances"
  - "https://docs.cloud.google.com/sql/docs/postgres/clone-instance"
keywords:
  - "stops"
  - "stop"
  - "automatically"
  - "automatic"
  - "storage"
  - "instance"
---

# Automatic instance stop on low storage

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL automatically stops an instance that is nearly out of storage to prevent data loss.

## Extended Definition

Cloud SQL automatically stops an instance that is nearly out of storage to prevent data loss.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/clone-instance](https://docs.cloud.google.com/sql/docs/postgres/clone-instance)

## Supporting Pages

### "REST Resource: instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
- Source ID: `site-api-reference`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- RotateServerCertificate Rotates the server certificate version to one previously added with the addServerCertificate method. addServerCa Adds a new trusted Certificate Authority (CA) version for the specified instance. addServerCertificate Add a new trusted server certificate version for the specified instance using Certificate Authority Service (CAS) server CA. clone Creates a Cloud SQL instance as a clone of the source instance. delete Deletes a Cloud SQL instance. demote Demotes an existing standalone instance to be a Cloud SQL read replica for an external database server. demoteMaster Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server. export Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file. failover Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. get Retrieves a resource containing information about a Cloud SQL instance. import Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage. insert Creates a new Cloud SQL instance. list Lists instances under a given project. listServerCas Lists all of the trusted Certificate Authorities (CAs) for the specified instance. patch Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. pointInTimeRestore Point in time restore for an instance managed by Google Cloud Backup and Disaster Recovery. preCheckMajorVersionUpgrade Execute MVU Pre-checks promoteReplica Promotes the read replica instance to be an independent Cloud SQL primary instance. reencrypt Reencrypt CMEK instance with latest key version. resetSslConfig Deletes all client certificates and generates a new server SSL certificate for the instance. restart Restarts a Cloud SQL instance. restoreBackup Restores a backup of a Cloud SQL instance. rotateServerCa Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method. startReplica Starts the replication in the read replica instance. stopReplica Stops the replication in the read replica instance. switchover Switches over from the primary instance to the DR replica instance. truncateLog Truncate MySQL general and slow query log tables MySQL only. update Updates settings of a Cloud SQL instance.
- This can be either ASYNCHRONOUS or SYNCHRONOUS . (Deprecated) This property was only applicable to First Generation instances. storageAutoResizeLimit string ( Int64Value format) The maximum size to which storage capacity can be automatically increased.
- The IPv4 address cannot be disabled for Second Generation instances. storageAutoResize boolean Configuration to increase storage size automatically.
- CLOUD SQL AUTOMATION The record is managed by Cloud SQL, which will create, update, and delete the DNS records for the zone automatically when the Cloud SQL database instance is created or updated.

### REST Resource: instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances)
- Source ID: `site-iam-reference`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- RotateServerCertificate Rotates the server certificate version to one previously added with the addServerCertificate method. addServerCa Add a new trusted Certificate Authority (CA) version for the specified instance. addServerCertificate Add a new trusted server certificate version for the specified instance using Certificate Authority Service (CAS) server CA. clone Creates a Cloud SQL instance as a clone of the source instance. delete Deletes a Cloud SQL instance. demote Demotes an existing standalone instance to be a Cloud SQL read replica for an external database server. demoteMaster Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server. executeSql Execute SQL statements. export Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file. failover Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. get Retrieves a resource containing information about a Cloud SQL instance. import Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage. insert Creates a new Cloud SQL instance. list Lists instances under a given project. listServerCas Lists all of the trusted Certificate Authorities (CAs) for the specified instance. patch Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. pointInTimeRestore Point in time restore for an instance managed by Google Cloud Backup and Disaster Recovery. promoteReplica Promotes the read replica instance to be an independent Cloud SQL primary instance. reencrypt Reencrypt CMEK instance with latest key version. resetSslConfig Deletes all client certificates and generates a new server SSL certificate for the instance. restart Restarts a Cloud SQL instance. restoreBackup Restores a backup of a Cloud SQL instance. rotateServerCa Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method. startReplica Starts the replication in the read replica instance. stopReplica Stops the replication in the read replica instance. switchover Switches over from the primary instance to the DR replica instance. truncateLog Truncate MySQL general and slow query log tables MySQL only. update Updates settings of a Cloud SQL instance.
- This can be either ASYNCHRONOUS or SYNCHRONOUS . (Deprecated) This property was only applicable to First Generation instances. storageAutoResizeLimit string ( Int64Value format) The maximum size to which storage capacity can be automatically increased.
- The IPv4 address cannot be disabled for Second Generation instances. storageAutoResize boolean Configuration to increase storage size automatically.
- CLOUD SQL AUTOMATION The record is managed by Cloud SQL, which will create, update, and delete the DNS records for the zone automatically when the Cloud SQL database instance is created or updated.

### Clone instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/clone-instance](https://docs.cloud.google.com/sql/docs/postgres/clone-instance)
- Source ID: `site-iam-reference`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST v1beta4 Clone the instance, optionally specifying the allocated IP range you want to use: Before using any of the request data, make the following replacements: project-id : the project ID source-instance-id : the source instance ID target-instance-id : the target instance ID allocated-ip-range-name : the name of an allocated IP range HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ source-instance-id /clone Request JSON body: { "cloneContext": { "destinationInstanceName": " target-instance-id ", "allocatedIpRange": " allocated-ip-range-name " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- REST v1 Clone the instance, optionally specifying the allocated IP range you want to use: Before using any of the request data, make the following replacements: project-id : the project ID source-instance-id : the source instance ID target-instance-id : the target instance ID allocated-ip-range-name : the name of an allocated IP range HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ source-instance-id /clone Request JSON body: { "cloneContext": { "destinationInstanceName": " target-instance-id ", "allocatedIpRange": " allocated-ip-range-name " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ SOURCE INSTANCE NAME /clone Request JSON body: { "cloneContext": { "destinationInstanceName": " DESTINATION INSTANCE NAME ", "preferredZone": " ZONE NAME ", "preferredSecondaryZone": " SECONDARY ZONE NAME " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ SOURCE INSTANCE NAME /clone Request JSON body: { "cloneContext": { "destinationInstanceName": " DESTINATION INSTANCE NAME ", "preferredZone": " ZONE NAME ", "preferredSecondaryZone": " SECONDARY ZONE NAME " } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

