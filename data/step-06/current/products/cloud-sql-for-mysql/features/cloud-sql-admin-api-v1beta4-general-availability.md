---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.938Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Cloud SQL Admin API v1beta4 general availability"
feature_slug: "cloud-sql-admin-api-v1beta4-general-availability"
latest_feature_date: "2021-02-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-ha"
keywords:
  - "sql"
  - "admin"
  - "api"
  - "v1beta4"
  - "general"
  - "availability"
  - "the"
  - "is"
---

# Cloud SQL Admin API v1beta4 general availability

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

The Cloud SQL Admin API v1beta4 is generally available for managing Cloud SQL resources.

## Extended Definition

The Cloud SQL Admin API v1beta4 is generally available for managing Cloud SQL resources.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-ha](https://docs.cloud.google.com/sql/docs/mysql/configure-ha)

## Supporting Pages

### "Use the Cloud SQL Admin API \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api)
- Source ID: `site-api-reference`
- Final score: 254
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the Discovery Service, Cloud SQL is represented as "sqladmin" (for example: https://www.googleapis.com/discovery/v1/apis/ sqladmin /v1beta4/sql.operation).
- Important: The Cloud SQL Admin API v1 is now generally available.
- At the command line, provide the path to the file, preceded by the @ character, as the --data parameter: --data @<path-to-file>/<filename> For example, to create a database user, you could create a file named data.json with the following content: {"host": "%", "name": "user1", "password": "abc123"} Then you would use the following cURL command at the command line: curl --header "Authorization: Bearer ${ ACCESS TOKEN } " \ --header 'Content-Type: application/json' \ --data @./data.json \ -X POST \ https://www.googleapis.com/sql/v1beta4/projects/myProject/instances/myInstance/users Work with long-running API calls Some API calls, such as object creation, can take some time to complete.
- Select Continue . gcloud Enter the following to display the project IDs for your Google Cloud projects: gcloud projects list Set your default project: gcloud config set project YOUR PROJECT ID Enable the Cloud SQL Admin API: gcloud services enable sqladmin.googleapis.com Authorize requests Your application needs to identify itself every time it sends a request to the Cloud SQL Admin API, by including an API key with each request.

### Cloud SQL Admin API \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest)
- Source ID: `site-api-reference`
- Final score: 244
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- RotateServerCertificate POST /sql/v1beta4/projects/{project}/instances/{instance}/rotateServerCertificate Rotates the server certificate version to one previously added with the addServerCertificate method. addServerCa POST /sql/v1beta4/projects/{project}/instances/{instance}/addServerCa Add a new trusted Certificate Authority (CA) version for the specified instance. addServerCertificate POST /sql/v1beta4/projects/{project}/instances/{instance}/addServerCertificate Add a new trusted server certificate version for the specified instance using Certificate Authority Service (CAS) server CA. clone POST /sql/v1beta4/projects/{project}/instances/{instance}/clone Creates a Cloud SQL instance as a clone of the source instance. delete DELETE /sql/v1beta4/projects/{project}/instances/{instance} Deletes a Cloud SQL instance. demote POST /sql/v1beta4/projects/{project}/instances/{instance}/demote Demotes an existing standalone instance to be a Cloud SQL read replica for an external database server. demoteMaster POST /sql/v1beta4/projects/{project}/instances/{instance}/demoteMaster Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server. executeSql POST /sql/v1beta4/projects/{project}/instances/{instance}/executeSql Execute SQL statements. export POST /sql/v1beta4/projects/{project}/instances/{instance}/export Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file. failover POST /sql/v1beta4/projects/{project}/instances/{instance}/failover Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. get GET /sql/v1beta4/projects/{project}/instances/{instance} Retrieves a resource containing information about a Cloud SQL instance. import POST /sql/v1beta4/projects/{project}/instances/{instance}/import Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage. insert POST /sql/v1beta4/projects/{project}/instances Creates a new Cloud SQL instance. list GET /sql/v1beta4/projects/{project}/instances Lists instances under a given project. listServerCas GET /sql/v1beta4/projects/{project}/instances/{instance}/listServerCas Lists all of the trusted Certificate Authorities (CAs) for the specified instance. patch PATCH /sql/v1beta4/projects/{project}/instances/{instance} Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. pointInTimeRestore POST /sql/v1beta4/{parent=projects/ }:pointInTimeRestore Point in time restore for an instance managed by Google Cloud Backup and Disaster Recovery. promoteReplica POST /sql/v1beta4/projects/{project}/instances/{instance}/promoteReplica Promotes the read replica instance to be an independent Cloud SQL primary instance. reencrypt POST /sql/v1beta4/projects/{project}/instances/{instance}/reencrypt Reencrypt CMEK instance with latest key version. resetSslConfig POST /sql/v1beta4/projects/{project}/instances/{instance}/resetSslConfig Deletes all client certificates and generates a new server SSL certificate for the instance. restart POST /sql/v1beta4/projects/{project}/instances/{instance}/restart Restarts a Cloud SQL instance. restoreBackup POST /sql/v1beta4/projects/{project}/instances/{instance}/restoreBackup Restores a backup of a Cloud SQL instance. rotateServerCa POST /sql/v1beta4/projects/{project}/instances/{instance}/rotateServerCa Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method. startReplica POST /sql/v1beta4/projects/{project}/instances/{instance}/startReplica Starts the replication in the read replica instance. stopReplica POST /sql/v1beta4/projects/{project}/instances/{instance}/stopReplica Stops the replication in the read replica instance. switchover POST /sql/v1beta4/projects/{project}/instances/{instance}/switchover Switches over from the primary instance to the DR replica instance. truncateLog POST /sql/v1beta4/projects/{project}/instances/{instance}/truncateLog Truncate MySQL general and slow query log tables MySQL only. update PUT /sql/v1beta4/projects/{project}/instances/{instance} Updates settings of a Cloud SQL instance.
- REST Resource: v1beta4.backupRuns REST Resource: v1beta4.backups REST Resource: v1beta4.connect REST Resource: v1beta4.databases REST Resource: v1beta4.flags REST Resource: v1beta4.instances REST Resource: v1beta4.operations REST Resource: v1beta4.projects.instances REST Resource: v1beta4.sslCerts REST Resource: v1beta4.tiers REST Resource: v1beta4.users REST Resource: v1.Backups REST Resource: v1.backupRuns REST Resource: v1.connect REST Resource: v1.databases REST Resource: v1.flags REST Resource: v1.instances REST Resource: v1.operations REST Resource: v1.projects.instances REST Resource: v1.sslCerts REST Resource: v1.tiers REST Resource: v1.users Service: sqladmin.googleapis.com Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://sqladmin.googleapis.com REST Resource: v1beta4.backupRuns Methods delete DELETE /sql/v1beta4/projects/{project}/instances/{instance}/backupRuns/{id} Deletes the backup taken by a backup run. get GET /sql/v1beta4/projects/{project}/instances/{instance}/backupRuns/{id} Retrieves a resource containing information about a backup run. insert POST /sql/v1beta4/projects/{project}/instances/{instance}/backupRuns Creates a new backup run on demand. list GET /sql/v1beta4/projects/{project}/instances/{instance}/backupRuns Lists all backup runs associated with the project or a given instance and configuration in the reverse chronological order of the backup initiation time.
- RotateServerCertificate POST /v1/projects/{project}/instances/{instance}/rotateServerCertificate Rotates the server certificate version to one previously added with the addServerCertificate method. addServerCa POST /v1/projects/{project}/instances/{instance}/addServerCa Adds a new trusted Certificate Authority (CA) version for the specified instance. addServerCertificate POST /v1/projects/{project}/instances/{instance}/addServerCertificate Add a new trusted server certificate version for the specified instance using Certificate Authority Service (CAS) server CA. clone POST /v1/projects/{project}/instances/{instance}/clone Creates a Cloud SQL instance as a clone of the source instance. delete DELETE /v1/projects/{project}/instances/{instance} Deletes a Cloud SQL instance. demote POST /v1/projects/{project}/instances/{instance}/demote Demotes an existing standalone instance to be a Cloud SQL read replica for an external database server. demoteMaster POST /v1/projects/{project}/instances/{instance}/demoteMaster Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server. executeSql POST /v1/projects/{project}/instances/{instance}/executeSql Execute SQL statements. export POST /v1/projects/{project}/instances/{instance}/export Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file. failover POST /v1/projects/{project}/instances/{instance}/failover Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. get GET /v1/projects/{project}/instances/{instance} Retrieves a resource containing information about a Cloud SQL instance. import POST /v1/projects/{project}/instances/{instance}/import Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage. insert POST /v1/projects/{project}/instances Creates a new Cloud SQL instance. list GET /v1/projects/{project}/instances Lists instances under a given project. listServerCas GET /v1/projects/{project}/instances/{instance}/listServerCas Lists all of the trusted Certificate Authorities (CAs) for the specified instance. patch PATCH /v1/projects/{project}/instances/{instance} Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. pointInTimeRestore POST /v1/{parent=projects/ }:pointInTimeRestore Point in time restore for an instance managed by Google Cloud Backup and Disaster Recovery. promoteReplica POST /v1/projects/{project}/instances/{instance}/promoteReplica Promotes the read replica instance to be an independent Cloud SQL primary instance. reencrypt POST /v1/projects/{project}/instances/{instance}/reencrypt Reencrypt CMEK instance with latest key version. resetSslConfig POST /v1/projects/{project}/instances/{instance}/resetSslConfig Deletes all client certificates and generates a new server SSL certificate for the instance. restart POST /v1/projects/{project}/instances/{instance}/restart Restarts a Cloud SQL instance. restoreBackup POST /v1/projects/{project}/instances/{instance}/restoreBackup Restores a backup of a Cloud SQL instance. rotateServerCa POST /v1/projects/{project}/instances/{instance}/rotateServerCa Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method. startReplica POST /v1/projects/{project}/instances/{instance}/startReplica Starts the replication in the read replica instance. stopReplica POST /v1/projects/{project}/instances/{instance}/stopReplica Stops the replication in the read replica instance. switchover POST /v1/projects/{project}/instances/{instance}/switchover Switches over from the primary instance to the DR replica instance. truncateLog POST /v1/projects/{project}/instances/{instance}/truncateLog Truncate MySQL general and slow query log tables MySQL only. update PUT /v1/projects/{project}/instances/{instance} Updates settings of a Cloud SQL instance.

### "Enable and disable high availability \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-ha](https://docs.cloud.google.com/sql/docs/mysql/configure-ha)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1beta4/projects/ PROJECT ID /instances/ INSTANCE NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1beta4/projects/ PROJECT ID /instances/ INSTANCE NAME ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "UPDATE", "name": " OPERATION ID ", "targetId": " INSTANCE NAME ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Configure the instance to be a regional, high availability instance: Before using any of the request data, make the following replacements: PROJECT ID : the ID or project number of the Google Cloud project that contains the instance INSTANCE NAME : the name of the instance that you're configuring for high availability HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE NAME Request JSON body: { "settings": {"availabilityType": "REGIONAL" } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Before using any of the request data, make the following replacements: project-id : The project ID instance-name : The instance name database-version : The database version enum string region The GCP region machine-type The machine type HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances Request JSON body: { "name": " instance-name ", "region": " region ", "databaseVersion": " database-version ", "settings": { "tier": " machine-type ", "backupConfiguration": { "binaryLogEnabled": true, "enabled": true }, "availabilityType": "REGIONAL" } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Before using any of the request data, make the following replacements: PROJECT ID : the ID or project number of the Google Cloud project that contains the instance INSTANCE NAME : the name of the primary or read replica instance that you're configuring for high availability START TIME : the time (in hours and minutes) HTTP method and URL: PATCH https://sqladmin.googleapis.com/v1beta4/projects/ PROJECT ID /instances/ INSTANCE NAME Request JSON body: { "settings": { "backupConfiguration": { "startTime": " START TIME ", "enabled": true, "binaryLogEnabled": true } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Before using any of the request data, make the following replacements: PROJECT ID : the ID or project number of the Google Cloud project that contains the instance INSTANCE NAME : the name of the instance for which you're deactivating high availability HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE NAME Request JSON body: { "settings": {"availabilityType": "ZONAL" } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

