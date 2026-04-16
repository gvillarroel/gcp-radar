---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.991Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Upcoming maintenance notifications"
feature_slug: "upcoming-maintenance-notifications"
latest_feature_date: "2019-12-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances"
  - "https://docs.cloud.google.com/sql/docs/mysql/create-instance"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-ssl-instance"
keywords:
  - "upcoming"
  - "maintenance"
  - "notifications"
  - "sql"
  - "offers"
  - "instances"
---

# Upcoming maintenance notifications

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL offers notifications for upcoming maintenance on instances.

## Extended Definition

Cloud SQL offers notifications for upcoming maintenance on instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-ssl-instance](https://docs.cloud.google.com/sql/docs/mysql/configure-ssl-instance)

## Supporting Pages

### REST Resource: instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/instances)
- Source ID: `site-docs-reference-3`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- You must set root passwords before you can connect to PostgreSQL instances. scheduledMaintenance object ( SqlScheduledMaintenance ) The start time of any upcoming scheduled maintenance for this instance. satisfiesPzs boolean This status indicates whether the instance satisfies PZS.
- JSON representation { "kind" : string , "state" : enum ( SqlInstanceState ) , "databaseVersion" : enum ( SqlDatabaseVersion ) , "settings" : { object ( Settings ) } , "etag" : string , "failoverReplica" : { "name" : string , "available" : boolean } , "masterInstanceName" : string , "replicaNames" : [ string ] , "maxDiskSize" : string , "currentDiskSize" : string , "ipAddresses" : [ { object ( IpMapping ) } ] , "serverCaCert" : { object ( SslCert ) } , "instanceType" : enum ( SqlInstanceType ) , "project" : string , "ipv6Address" : string , "serviceAccountEmailAddress" : string , "onPremisesConfiguration" : { object ( OnPremisesConfiguration ) } , "replicaConfiguration" : { object ( ReplicaConfiguration ) } , "backendType" : enum ( SqlBackendType ) , "selfLink" : string , "suspensionReason" : [ enum ( SqlSuspensionReason ) ] , "connectionName" : string , "name" : string , "region" : string , "gceZone" : string , "secondaryGceZone" : string , "diskEncryptionConfiguration" : { object ( DiskEncryptionConfiguration ) } , "diskEncryptionStatus" : { object ( DiskEncryptionStatus ) } , "rootPassword" : string , "scheduledMaintenance" : { object ( SqlScheduledMaintenance ) } , "satisfiesPzs" : boolean , "databaseInstalledVersion" : string , "createTime" : string , "availableMaintenanceVersions" : [ string ] , "maintenanceVersion" : string , "upgradableDatabaseVersions" : [ { object ( AvailableDatabaseVersion ) } ] , "replicationCluster" : { object ( ReplicationCluster ) } , "satisfiesPzi" : boolean , "tags" : { string : string , ... } , "nodes" : [ { object ( PoolNodeConfig ) } ] , "dnsNames" : [ { object ( DnsNameMapping ) } ] , "outOfDiskReport" : { object ( SqlOutOfDiskReport ) } , "sqlNetworkArchitecture" : enum ( SqlNetworkArchitecture ) , "pscServiceAttachmentLink" : string , "dnsName" : string , "primaryDnsName" : string , "writeEndpoint" : string , "geminiConfig" : { object ( GeminiInstanceConfig ) } , "switchTransactionLogsToCloudStorageEnabled" : boolean , "includeReplicasForMajorVersionUpgrade" : boolean , "nodeCount" : integer } Fields kind string This is always sql#instance . state enum ( SqlInstanceState ) The current serving state of the Cloud SQL instance. databaseVersion enum ( SqlDatabaseVersion ) The database engine type and version.
- Resource: DatabaseInstance JSON representation SqlInstanceState Settings JSON representation SqlAvailabilityType SqlPricingPlan SqlReplicationType SqlActivationPolicy IpConfiguration JSON representation AclEntry JSON representation SslMode PscConfig JSON representation PscAutoConnectionConfig JSON representation CaMode ServerCertificateRotationMode LocationPreference JSON representation DatabaseFlags JSON representation SqlDataDiskType MaintenanceWindow JSON representation SqlUpdateTrack BackupConfiguration JSON representation BackupRetentionSettings JSON representation RetentionUnit TransactionalLogStorageState BackupTier SqlActiveDirectoryConfig JSON representation ActiveDirectoryMode DenyMaintenancePeriod JSON representation InsightsConfig JSON representation PasswordValidationPolicy JSON representation Complexity SqlServerAuditConfig JSON representation Edition ConnectorEnforcement AdvancedMachineFeatures JSON representation DataCacheConfig JSON representation ConnectionPoolConfig JSON representation ConnectionPoolFlags JSON representation FinalBackupConfig JSON representation ReadPoolAutoScaleConfig JSON representation TargetMetric JSON representation DataApiAccess IpMapping JSON representation SqlIpAddressType SqlInstanceType OnPremisesConfiguration JSON representation InstanceReference JSON representation SelectedObjects JSON representation SslOption ReplicaConfiguration JSON representation MySqlReplicaConfiguration JSON representation SqlBackendType SqlSuspensionReason SqlScheduledMaintenance JSON representation SqlOutOfDiskReport JSON representation SqlOutOfDiskState AvailableDatabaseVersion JSON representation SqlNetworkArchitecture ReplicationCluster JSON representation GeminiInstanceConfig JSON representation PoolNodeConfig JSON representation DnsNameMapping JSON representation ConnectionType DnsScope RecordManager Methods Resource: DatabaseInstance A Cloud SQL instance resource.
- Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" . availableMaintenanceVersions[] string Output only. instances.list all maintenance versions applicable on the instance maintenanceVersion string The current software version on the instance. upgradableDatabaseVersions[] object ( AvailableDatabaseVersion ) Output only.

### Create instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
- Source ID: `site-docs-reference-3`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- For Cloud SQL Enterprise edition instances, Cloud SQL offers the general purpose shared core , general purpose dedicated core , and the N4 machine series.
- For Cloud SQL Enterprise Plus edition instances, Cloud SQL offers predefined machine types for your instances in the N2 and C4A machine series.
- Maintenance timing --maintenance-release-channel Your preferred timing for instance updates, relative to other instances in the same project.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PUT -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /users?host=%25&name=root" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ", "status": "DONE", "user": "user@example.com", "insertTime": "2019-09-26T14:32:30.592Z", "startTime": "2019-09-26T14:32:30.594Z", "endTime": "2019-09-26T14:32:33.518Z", "operationType": "UPDATE USER", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } Retrieve the IPv4 address Retrieve the automatically assigned IPv4 address for the new instance: Before using any of the request data, make the following replacements: project-id : your project ID instance-id : instance ID created in prior step HTTP method and URL: GET https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Configure SSL/TLS certificates \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-ssl-instance](https://docs.cloud.google.com/sql/docs/mysql/configure-ssl-instance)
- Source ID: `site-docs-reference-3`
- Final score: 78
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /sslCerts" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#sslCertsInsert", "operation": { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "operationType": "UPDATE", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": "doc-test-01", "insertTime": "2020-02-13T00:11:20.677Z" }, "serverCaCert": { "kind": "sql#sslCert", "certSerialNumber": " server-cert-serial-number ", "cert": " server-cert-value ", "commonName": " server-cert-name , "sha1Fingerprint": " server-cert-sha1Fingerprint ", "instance": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /sslCerts/ operation-id ", "createTime": "2019-11-25T20:12:06.764Z", "expirationTime": "2029-11-22T20:13:06.764Z" }, "clientCert": { "certInfo": { "kind": "sql#sslCert", "certSerialNumber": " client-cert-serial-number-2 ", "cert": " client-cert-value ", "commonName": " client-cert-name ", "sha1Fingerprint": " client-cert-sha1Fingerprint-2 ", "instance": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /sslCerts/ operation-id ", "createTime": "2020-02-13T00:10:20.595Z", "expirationTime": "2030-02-10T00:11:20.595Z" }, "certPrivateKey": " private-key-value " } } Copy all of the certificate contents within the quotation marks (but not the quotation marks themselves) from the response into local files as follows: Copy serverCaCert.cert into server-ca.pem .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /sslCerts" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#sslCertsInsert", "operation": { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "operationType": "UPDATE", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ", "targetProject": "doc-test-01", "insertTime": "2020-02-13T00:11:20.677Z" }, "serverCaCert": { "kind": "sql#sslCert", "certSerialNumber": " server-cert-serial-number ", "cert": " server-cert-value ", "commonName": " server-cert-name , "sha1Fingerprint": " server-cert-sha1Fingerprint ", "instance": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /sslCerts/ operation-id ", "createTime": "2019-11-25T20:12:06.764Z", "expirationTime": "2029-11-22T20:13:06.764Z" }, "clientCert": { "certInfo": { "kind": "sql#sslCert", "certSerialNumber": " client-cert-serial-number-2 ", "cert": " client-cert-value ", "commonName": " client-cert-name ", "sha1Fingerprint": " client-cert-sha1Fingerprint-2 ", "instance": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /sslCerts/ operation-id ", "createTime": "2020-02-13T00:10:20.595Z", "expirationTime": "2030-02-10T00:11:20.595Z" }, "certPrivateKey": " private-key-value " } } Copy all of the certificate contents within the quotation marks (but not the quotation marks themselves) from the response into local files as follows: Copy serverCaCert.cert into server-ca.pem .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /restart" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-20T21:30:35.667Z", "operationType": "RESTART", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } REST v1beta4 Create an SSL/TLS certificate, giving it a unique name for this instance: Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID client-cert-name : The client cert name HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /sslCerts Request JSON body: { "commonName" : " client-cert-name " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Retrieve the public key for the certificate you just created and copy it into the client-cert.pem file with the ssl client-certs describe command: gcloud sql ssl client-certs describe CERT NAME \ --instance = INSTANCE NAME \ --format = "value(cert)" > client-cert.pem Copy the server certificate into the server-ca.pem file using the instances describe command: gcloud sql instances describe INSTANCE NAME \ --format = "value(serverCaCert.cert)" > server-ca.pem Terraform To create a client certificate, use a Terraform resource : resource "google sql ssl cert" "mysql client cert" { common name = "mysql common name" instance = google sql database instance.mysql instance.name } REST v1 Create an SSL/TLS certificate, giving it a unique name for this instance: Before using any of the request data, make the following replacements: project-id : The project ID instance-id : The instance ID client-cert-name : The client cert name HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /sslCerts Request JSON body: { "commonName" : " client-cert-name " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

