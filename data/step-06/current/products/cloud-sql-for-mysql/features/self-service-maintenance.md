---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.960Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Self-service maintenance"
feature_slug: "self-service-maintenance"
latest_feature_date: "2022-04-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/create-instance"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances"
  - "https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users"
keywords:
  - "self"
  - "maintenance"
  - "sql"
  - "lets"
  - "you"
  - "apply"
  - "updates"
  - "instance"
---

# Self-service maintenance

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL lets you apply maintenance updates to an instance outside the normal scheduled maintenance flow.

## Extended Definition

Cloud SQL lets you apply maintenance updates to an instance outside the normal scheduled maintenance flow.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users)

## Supporting Pages

### Create instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- Source ID: `site-docs-reference-3`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AUTOMATIC ROTATION DURING MAINTENANCE : With this option, automatic server certificate rotation is enabled during Cloud SQL scheduled maintenance or self-service maintenance updates.
- Maintenance timing --maintenance-release-channel Your preferred timing for instance updates, relative to other instances in the same project.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PUT -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /users?host=%25&name=root" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ", "status": "DONE", "user": "user@example.com", "insertTime": "2019-09-26T14:32:30.592Z", "startTime": "2019-09-26T14:32:30.594Z", "endTime": "2019-09-26T14:32:33.518Z", "operationType": "UPDATE USER", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } Retrieve the IPv4 address Retrieve the automatically assigned IPv4 address for the new instance: Before using any of the request data, make the following replacements: project-id : your project ID instance-id : instance ID created in prior step HTTP method and URL: GET https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": "MYSQL 8 0 18", "settings": { "authorizedGaeApplications": [], "tier": "db-f1-micro", "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": "us-west1-a", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "backupConfiguration": { "startTime": "18:00", "kind": "sql#backupConfiguration", "enabled": true, "binaryLogEnabled": true }, "settingsVersion": "1", "storageAutoResizeLimit": "0", "storageAutoResize": true, "dataDiskSizeGb": "10" }, "etag": "--redacted--", "ipAddresses": [ { "type": "PRIMARY", "ipAddress": " 10.0.0.1 " } ], "serverCaCert": { ... }, "instanceType": "CLOUD SQL INSTANCE", "project": " project-id ", "serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com", "backendType": "SECOND GEN", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ", "connectionName": " project-id:region:instance-id ", "name": " instance-id ", "region": "us-west1", "gceZone": "us-west1-a" } Look for the ipAddress field in the response.

### REST Resource: instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- Source ID: `site-docs-reference-3`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "kind" : string , "state" : enum ( SqlInstanceState ) , "databaseVersion" : enum ( SqlDatabaseVersion ) , "settings" : { object ( Settings ) } , "etag" : string , "failoverReplica" : { "name" : string , "available" : boolean } , "masterInstanceName" : string , "replicaNames" : [ string ] , "maxDiskSize" : string , "currentDiskSize" : string , "ipAddresses" : [ { object ( IpMapping ) } ] , "serverCaCert" : { object ( SslCert ) } , "instanceType" : enum ( SqlInstanceType ) , "project" : string , "ipv6Address" : string , "serviceAccountEmailAddress" : string , "onPremisesConfiguration" : { object ( OnPremisesConfiguration ) } , "replicaConfiguration" : { object ( ReplicaConfiguration ) } , "backendType" : enum ( SqlBackendType ) , "selfLink" : string , "suspensionReason" : [ enum ( SqlSuspensionReason ) ] , "connectionName" : string , "name" : string , "region" : string , "gceZone" : string , "secondaryGceZone" : string , "diskEncryptionConfiguration" : { object ( DiskEncryptionConfiguration ) } , "diskEncryptionStatus" : { object ( DiskEncryptionStatus ) } , "rootPassword" : string , "scheduledMaintenance" : { object ( SqlScheduledMaintenance ) } , "satisfiesPzs" : boolean , "databaseInstalledVersion" : string , "createTime" : string , "availableMaintenanceVersions" : [ string ] , "maintenanceVersion" : string , "upgradableDatabaseVersions" : [ { object ( AvailableDatabaseVersion ) } ] , "replicationCluster" : { object ( ReplicationCluster ) } , "satisfiesPzi" : boolean , "tags" : { string : string , ... } , "nodes" : [ { object ( PoolNodeConfig ) } ] , "dnsNames" : [ { object ( DnsNameMapping ) } ] , "outOfDiskReport" : { object ( SqlOutOfDiskReport ) } , "sqlNetworkArchitecture" : enum ( SqlNetworkArchitecture ) , "pscServiceAttachmentLink" : string , "dnsName" : string , "primaryDnsName" : string , "writeEndpoint" : string , "geminiConfig" : { object ( GeminiInstanceConfig ) } , "switchTransactionLogsToCloudStorageEnabled" : boolean , "includeReplicasForMajorVersionUpgrade" : boolean , "nodeCount" : integer } Fields kind string This is always sql#instance . state enum ( SqlInstanceState ) The current serving state of the Cloud SQL instance. databaseVersion enum ( SqlDatabaseVersion ) The database engine type and version.
- When enabled, the server certificate will be automatically rotated during Cloud SQL scheduled maintenance or self-service maintenance updates up to six months before it expires.
- AUTOMATIC ROTATION DURING MAINTENANCE Automatic server certificate rotation during Cloud SQL scheduled maintenance or self-service maintenance updates.
- RotateServerCertificate Rotates the server certificate version to one previously added with the addServerCertificate method. addServerCa Adds a new trusted Certificate Authority (CA) version for the specified instance. addServerCertificate Add a new trusted server certificate version for the specified instance using Certificate Authority Service (CAS) server CA. clone Creates a Cloud SQL instance as a clone of the source instance. delete Deletes a Cloud SQL instance. demote Demotes an existing standalone instance to be a Cloud SQL read replica for an external database server. demoteMaster Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server. export Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file. failover Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. get Retrieves a resource containing information about a Cloud SQL instance. import Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage. insert Creates a new Cloud SQL instance. list Lists instances under a given project. listServerCas Lists all of the trusted Certificate Authorities (CAs) for the specified instance. patch Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. pointInTimeRestore Point in time restore for an instance managed by Google Cloud Backup and Disaster Recovery. promoteReplica Promotes the read replica instance to be an independent Cloud SQL primary instance. reencrypt Reencrypt CMEK instance with latest key version. resetSslConfig Deletes all client certificates and generates a new server SSL certificate for the instance. restart Restarts a Cloud SQL instance. restoreBackup Restores a backup of a Cloud SQL instance. rotateServerCa Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method. startReplica Starts the replication in the read replica instance. stopReplica Stops the replication in the read replica instance. switchover Switches over from the primary instance to the DR replica instance. truncateLog Truncate MySQL general and slow query log tables MySQL only. update Updates settings of a Cloud SQL instance.

### "Manage users with IAM database authentication \_|\_ Cloud SQL for MySQL\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users](https://docs.cloud.google.com/sql/docs/mysql/add-manage-iam-users)
- Source ID: `site-docs-reference-3`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Then before you can use IAM group authentication, your Cloud SQL instance requires the following maintenance update: R20240514.00 04 or later You can apply the maintenance update to your instance by using self-service maintenance.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PUT -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID /users" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "DONE", "user": "user@example.com", "insertTime": "2025-10-07T22:44:16.656Z", "startTime": "2025-10-07T22:44:16.686Z", "endTime": "2025-10-07T22:44:20.437Z", "operationType": "CREATE USER", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } REST v1beta4 Before using any of the request data, make the following replacements: PROJECT ID : the project ID INSTANCE ID : the instance ID for the instance you are adding the user to USERNAME : the email address for the user USER TYPE : the Cloud SQL user type, which can be one of the following IAM user types: CLOUD IAM USER CLOUD IAM SERVICE ACCOUNT CLOUD IAM GROUP ROLE 1 , ROLE 2 ..., ROLE N : the database role or roles to assign to the IAM user, service account, or group REVOKE EXISTING ROLES : set to true to revoke the user's existing roles, set to false to keep the user's existing roles HTTP method and URL: PUT https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users Request JSON body: { "name": " USERNAME ", "type": " USER TYPE ", "databaseRoles": [ " ROLE 1 ", " ROLE 2 " ], "revokeExistingRoles": REVOKE EXISTING ROLES } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID /users" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "DONE", "user": "user@example.com", "insertTime": "2025-10-07T22:44:16.656Z", "startTime": "2025-10-07T22:44:16.686Z", "endTime": "2025-10-07T22:44:20.437Z", "operationType": "CREATE USER", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } REST v1beta4 Before using any of the request data, make the following replacements: PROJECT ID : the project ID INSTANCE ID : the instance ID for the instance you are adding the user to USERNAME : the email address for the user USER TYPE : the Cloud SQL user type, which is one of the following IAM user types: CLOUD IAM USER CLOUD IAM SERVICE ACCOUNT CLOUD IAM GROUP ROLE 1 , ROLE 2 ..., ROLE N : the database role or roles to assign to the IAM user, service account, or group HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users Request JSON body: { "name": " USERNAME ", "type": "CLOUD IAM USER", "databaseRoles": [ " ROLE 1 ", " ROLE 2 " ] } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "DONE", "user": "user@example.com", "insertTime": "2020-02-07T22:44:16.656Z", "startTime": "2020-02-07T22:44:16.686Z", "endTime": "2020-02-07T22:44:20.437Z", "operationType": "CREATE USER", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } Create a service account Before using any of the request data, make the following replacements: SERVICE ACCT : the service account email PROJECT ID : the project ID INSTANCE ID : the instance ID for the instance you are adding the service account to HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /users Request JSON body: { "name": " SERVICE ACCT ", "type": "CLOUD IAM SERVICE ACCOUNT" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

