---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.866Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Get user details API"
feature_slug: "get-user-details-api"
latest_feature_date: "2023-02-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-instance"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/release-notes"
keywords:
  - "get"
  - "user"
  - "details"
  - "api"
  - "sql"
  - "lets"
  - "you"
  - "retrieve"
---

# Get user details API

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Cloud SQL lets you retrieve details for a Cloud SQL user on a database instance by using the API or gcloud.

## Extended Definition

Cloud SQL lets you retrieve details for a Cloud SQL user on a database instance by using the API or gcloud.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest)
- [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)

## Supporting Pages

### Create instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-01T19:13:21.834Z", "operationType": "CREATE", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } After the instance is created, you can further configure the default user account .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-01T19:13:21.834Z", "operationType": "CREATE", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } After the instance is created, you can further configure the default user account .
- Before using any of the request data, make the following replacements: PROJECT ID : your project ID INSTANCE ID : your instance ID, created in the previous step HTTP method and URL: GET https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Before using any of the request data, make the following replacements: PROJECT ID : your project ID INSTANCE ID : your instance ID, created in the previous step HTTP method and URL: GET https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### Cloud SQL Admin API \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/rest)
- Source ID: `site-api-reference`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://sqladmin.googleapis.com REST Resource: v1beta4.backupRuns Methods delete DELETE /sql/v1beta4/projects/{project}/instances/{instance}/backupRuns/{id} Deletes the backup taken by a backup run. get GET /sql/v1beta4/projects/{project}/instances/{instance}/backupRuns/{id} Retrieves a resource containing information about a backup run. insert POST /sql/v1beta4/projects/{project}/instances/{instance}/backupRuns Creates a new backup run on demand. list GET /sql/v1beta4/projects/{project}/instances/{instance}/backupRuns Lists all backup runs associated with the project or a given instance and configuration in the reverse chronological order of the backup initiation time.
- REST Resource: v1beta4.users Methods delete DELETE /sql/v1beta4/projects/{project}/instances/{instance}/users Deletes a user from a Cloud SQL instance. get GET /sql/v1beta4/projects/{project}/instances/{instance}/users/{name} Retrieves a resource containing information about a user. insert POST /sql/v1beta4/projects/{project}/instances/{instance}/users Creates a new user in a Cloud SQL instance. list GET /sql/v1beta4/projects/{project}/instances/{instance}/users Lists users in the specified Cloud SQL instance. update PUT /sql/v1beta4/projects/{project}/instances/{instance}/users Updates an existing user in a Cloud SQL instance.
- REST Resource: v1.users Methods delete DELETE /v1/projects/{project}/instances/{instance}/users Deletes a user from a Cloud SQL instance. get GET /v1/projects/{project}/instances/{instance}/users/{name} Retrieves a resource containing information about a user. insert POST /v1/projects/{project}/instances/{instance}/users Creates a new user in a Cloud SQL instance. list GET /v1/projects/{project}/instances/{instance}/users Lists users in the specified Cloud SQL instance. update PUT /v1/projects/{project}/instances/{instance}/users Updates an existing user in a Cloud SQL instance.
- RotateServerCertificate POST /sql/v1beta4/projects/{project}/instances/{instance}/rotateServerCertificate Rotates the server certificate version to one previously added with the addServerCertificate method. acquireSsrsLease POST /sql/v1beta4/projects/{project}/instances/{instance}/acquireSsrsLease Acquire a lease for the setup of SQL Server Reporting Services (SSRS). addEntraIdCertificate POST /sql/v1beta4/projects/{project}/instances/{instance}/addEntraIdCertificate Adds a new Entra ID certificate for the specified instance. addServerCa POST /sql/v1beta4/projects/{project}/instances/{instance}/addServerCa Add a new trusted Certificate Authority (CA) version for the specified instance. addServerCertificate POST /sql/v1beta4/projects/{project}/instances/{instance}/addServerCertificate Add a new trusted server certificate version for the specified instance using Certificate Authority Service (CAS) server CA. clone POST /sql/v1beta4/projects/{project}/instances/{instance}/clone Creates a Cloud SQL instance as a clone of the source instance. delete DELETE /sql/v1beta4/projects/{project}/instances/{instance} Deletes a Cloud SQL instance. demoteMaster POST /sql/v1beta4/projects/{project}/instances/{instance}/demoteMaster Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server. export POST /sql/v1beta4/projects/{project}/instances/{instance}/export Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file. failover POST /sql/v1beta4/projects/{project}/instances/{instance}/failover Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. get GET /sql/v1beta4/projects/{project}/instances/{instance} Retrieves a resource containing information about a Cloud SQL instance. import POST /sql/v1beta4/projects/{project}/instances/{instance}/import Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage. insert POST /sql/v1beta4/projects/{project}/instances Creates a new Cloud SQL instance. list GET /sql/v1beta4/projects/{project}/instances Lists instances under a given project. listServerCas GET /sql/v1beta4/projects/{project}/instances/{instance}/listServerCas Lists all of the trusted Certificate Authorities (CAs) for the specified instance. patch PATCH /sql/v1beta4/projects/{project}/instances/{instance} Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. pointInTimeRestore POST /sql/v1beta4/{parent=projects/ }:pointInTimeRestore Point in time restore for an instance managed by Google Cloud Backup and Disaster Recovery. promoteReplica POST /sql/v1beta4/projects/{project}/instances/{instance}/promoteReplica Promotes the read replica instance to be an independent Cloud SQL primary instance. reencrypt POST /sql/v1beta4/projects/{project}/instances/{instance}/reencrypt Reencrypt CMEK instance with latest key version. releaseSsrsLease POST /sql/v1beta4/projects/{project}/instances/{instance}/releaseSsrsLease Release a lease for the setup of SQL Server Reporting Services (SSRS). resetSslConfig POST /sql/v1beta4/projects/{project}/instances/{instance}/resetSslConfig Deletes all client certificates and generates a new server SSL certificate for the instance. restart POST /sql/v1beta4/projects/{project}/instances/{instance}/restart Restarts a Cloud SQL instance. restoreBackup POST /sql/v1beta4/projects/{project}/instances/{instance}/restoreBackup Restores a backup of a Cloud SQL instance. rotateServerCa POST /sql/v1beta4/projects/{project}/instances/{instance}/rotateServerCa Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method. startReplica POST /sql/v1beta4/projects/{project}/instances/{instance}/startReplica Starts the replication in the read replica instance. stopReplica POST /sql/v1beta4/projects/{project}/instances/{instance}/stopReplica Stops the replication in the read replica instance. switchover POST /sql/v1beta4/projects/{project}/instances/{instance}/switchover Switches over from the primary instance to the DR replica instance. truncateLog POST /sql/v1beta4/projects/{project}/instances/{instance}/truncateLog Truncate MySQL general and slow query log tables MySQL only. update PUT /sql/v1beta4/projects/{project}/instances/{instance} Updates settings of a Cloud SQL instance.

### Cloud SQL for SQL Server release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- February 28, 2023 Feature Cloud SQL now supports the ability to get details for a Cloud SQL user for a database instance using the API or gcloud.
- June 20, 2024 Feature You can now use the gcloud sql instances describe command or the SQL Admin API to retrieve a list of database versions that are available to your SQL Server instance for upgrade.
- October 25, 2024 Feature When you run the backupRuns.GET API or the gcloud sql backups describe command, the maxChargeableBytes parameter now appears in the response.
- The functions include (and are not limited to) the following: cdc.fn cdc get all changes <capture instance> Sys.fn cdc get max lsn To turn on this feature for a database, run this command: exec msdb .[ dbo ].[ gcloudsql cdc enable db ] 'demo' To turn off this feature for a database, run this command: exec msdb.[dbo].[gcloudsql cdc disable db] 'demo' Feature Cloud SQL for SQL Server enables you to perform common operations on a tempdb database .

