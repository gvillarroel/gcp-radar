---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.528Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Server CA mode update"
feature_slug: "server-ca-mode-update"
latest_feature_date: "2026-02-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-instance"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/how-tos/performance"
keywords:
  - "server"
  - "ca"
  - "mode"
  - "update"
  - "lets"
  - "you"
  - "change"
  - "existing"
---

# Server CA mode update

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Server CA mode update lets you change an existing instance from per-instance CA to shared CA or customer-managed CA.

## Extended Definition

Server CA mode update lets you change an existing instance from per-instance CA to shared CA or customer-managed CA.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore)
- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/how-tos/performance](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/how-tos/performance)

## Supporting Pages

### Create instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Machine type vCPU/Memory Not applicable 1 vCPU, 3.75 GB 2 vCPUs, 8 GB 4 vCPUs, 16 GB 8 vCPUs, 32 GB Custom 1 to 32 vCPUs, 3.75 GB to 208 GB SQL Server 2017 Standard, SQL Server 2019 Standard, SQL Server 2022 Standard, and SQL Server 2025 Standard Machine type vCPU/Memory Not applicable 1 vCPU, 3.75 GB 2 vCPUs, 8 GB 4 vCPUs, 16 GB 8 vCPUs, 32 GB Custom 1 to 48 vCPUs, 3.75 GB to 312 GB SQL Server 2017 Enterprise, SQL Server 2019 Enterprise, SQL Server 2022 Enterprise, and SQL Server 2025 Enterprise Machine type vCPU/Memory Not applicable 1 vCPU, 3.75 GB 2 vCPUs, 8 GB 4 vCPUs, 16 GB 8 vCPUs, 32 GB Custom 2 to 96 vCPUs, 3.75 GB to 624 GB Performance-optimized (Cloud SQL Enterprise Plus only) 2 vCPUs, 16 GB 4 vCPUs, 32 GB 8 vCPUs, 64 GB 16 vCPUs, 128 GB 32 vCPUs, 256 GB 48 vCPUs, 384 GB 64 vCPUs, 512 GB 80 vCPUs, 640 GB 96 vCPUs, 768 GB 128 vCPUs, 864 GB Memory-optimized (Cloud SQL Enterprise Plus only) 4 vCPUs, 128 GB 8 vCPUs, 256 GB 16 vCPUs, 512 GB Simultaneous multithreading Simultaneous multithreading (SMT) on Cloud SQL for SQL Server lets you run two virtual CPUs (vCPUs) as independent, separate threads on one physical core.
- HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "rootPassword": " PASSWORD ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "backupConfiguration": { "enabled": true }, "dataCacheConfig": { "dataCacheEnabled": DATA CACHE ENABLED }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " } }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "rootPassword": " PASSWORD ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "backupConfiguration": { "enabled": true }, "dataCacheConfig": { "dataCacheEnabled": DATA CACHE ENABLED }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " } }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Set the password for the user: gcloud sql users set-password sqlserver no-host --instance =[ INSTANCE NAME ] \ --password =[ PASSWORD ] Terraform To create an instance, use a Terraform resource . resource "google sql database instance" "default" { name = "sqlserver-instance" region = "us-central1" database version = "SQLSERVER 2019 STANDARD" root password = "INSERT-PASSWORD-HERE" settings { tier = "db-custom-2-7680" } } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.

### "Restore an instance overview \_|\_ Cloud SQL for SQL Server \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore)
- Source ID: `site-docs-reference-required-4`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Database recovery model for PITR If you enable PITR on an instance, Cloud SQL automatically sets the recovery model of the existing and subsequent databases to the full recovery model.
- This lets you recover an instance to a specific period or time by either restoring the back to an existing instance, or restoring the backup to a new instance.
- MySQL PostgreSQL SQL Server Cloud SQL lets you restore your instances from a backup, or by performing point-in-time recovery (PITR).
- Caution: After enabling PITR on your instance, don't change the database recovery model to Simple.

### Performance tips \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/how-tos/performance](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/how-tos/performance)
- Source ID: `site-api-reference`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- As shown below, it also uses the fields parameter to limit the data returned in the patch response: PATCH https://www.googleapis.com/demo/v1/324?fields=etag,title,comment,characteristics Authorization: Bearer your auth token Content-Type: application/json If-Match: " ETagString " { "etag" : " ETagString " "title" : "" , / Clear the value of the title by setting it to the empty string. / "comment" : null , / Delete the comment by replacing its value with null. / "characteristics" : { "length" : "short" , "level" : "10" , / Modify the level value. / "followers" : [ "Jo" , "Liz" ], / Replace the followers array to delete Will and add Liz. / "accuracy" : "high" / Add a new characteristic. / } , } The server responds with a 200 OK HTTP status code, and the partial representation of the updated resource: 200 OK { "etag" : " newETagString " "title" : "" , / Title is cleared; deleted comment field is missing. / "characteristics" : { "length" : "short" , "level" : "10" , / Value is updated. / "followers" : [ "Jo" "Liz" ], / New follower Liz is present; deleted Will is missing. / "accuracy" : "high" / New characteristic is present. / } } Constructing a patch request directly For some patch requests, you need to base them on the data you previously retrieved.
- The resource also has a comment, a set of characteristics, status, and many other fields, but this request only sends the title field, since that's the only field being modified: PATCH https://www.googleapis.com/demo/v1/324 Authorization: Bearer your auth token Content-Type: application/json { "title": "New title" } Response: 200 OK { "title" : "New title" , "comment" : "First comment." , "characteristics" : { "length" : "short" , "accuracy" : "high" , "followers" : [ "Jo" , "Will" ], } , "status" : "active" , ... } The server returns a 200 OK status code, along with the full representation of the updated resource.
- Difference between patch and update In practice, when you send data for an update request that uses the HTTP PUT verb, you only need to send those fields which are either required or optional; if you send values for fields that are set by the server, they are ignored.
- If a patch request results in a new resource state that is syntactically or semantically invalid, the server returns a 400 Bad Request or 422 Unprocessable Entity HTTP status code, and the resource state remains unchanged.

