---
title: "Cloud SQL Admin API \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest
  title: "Cloud SQL Admin API \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Cloud SQL
PostgreSQL
Reference
Send feedback
Cloud SQL Admin API
Stay organized with collections
Save and categorize content based on your preferences.
API for Cloud SQL instance management.
REST Resource: v1beta4.backupRuns
REST Resource: v1beta4.backups
REST Resource: v1beta4.connect
REST Resource: v1beta4.databases
REST Resource: v1beta4.flags
REST Resource: v1beta4.instances
REST Resource: v1beta4.operations
REST Resource: v1beta4.projects.instances
REST Resource: v1beta4.sslCerts
REST Resource: v1beta4.tiers
REST Resource: v1beta4.users
REST Resource: v1.Backups
REST Resource: v1.backupRuns
REST Resource: v1.connect
REST Resource: v1.databases
REST Resource: v1.flags
REST Resource: v1.instances
REST Resource: v1.operations
REST Resource: v1.projects.instances
REST Resource: v1.sslCerts
REST Resource: v1.tiers
REST Resource: v1.users
Service: sqladmin.googleapis.com
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://sqladmin.googleapis.com
REST Resource: v1beta4.backupRuns
Methods
delete
DELETE /sql/v1beta4/projects/{project}/instances/{instance}/backupRuns/{id}
Deletes the backup taken by a backup run.
get
GET /sql/v1beta4/projects/{project}/instances/{instance}/backupRuns/{id}
Retrieves a resource containing information about a backup run.
insert
POST /sql/v1beta4/projects/{project}/instances/{instance}/backupRuns
Creates a new backup run on demand.
list
GET /sql/v1beta4/projects/{project}/instances/{instance}/backupRuns
Lists all backup runs associated with the project or a given instance and configuration in the reverse chronological order of the backup initiation time.
REST Resource: v1beta4.backups
Methods
createBackup
POST /sql/v1beta4/{parent=projects/*}/backups
Creates a backup for a Cloud SQL instance.
deleteBackup
DELETE /sql/v1beta4/{name=projects/*/backups/*}
Deletes the backup.
getBackup
GET /sql/v1beta4/{name=projects/*/backups/*}
Retrieves a resource containing information about a backup.
listBackups
GET /sql/v1beta4/{parent=projects/*}/backups
Lists all backups associated with the project.
updateBackup
PATCH /sql/v1beta4/{backup.name=projects/*/backups/*}
Updates the retention period and the description of the backup.
REST Resource: v1beta4.connect
Methods
generateEphemeralCert
POST /sql/v1beta4/projects/{project}/instances/{instance}:generateEphemeralCert
Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance.
get
GET /sql/v1beta4/projects/{project}/instances/{instance}/connectSettings
Retrieves connect settings about a Cloud SQL instance.
REST Resource: v1beta4.databases
Methods
delete
DELETE /sql/v1beta4/projects/{project}/instances/{instance}/databases/{database}
Deletes a database from a Cloud SQL instance.
get
GET /sql/v1beta4/projects/{project}/instances/{instance}/databases/{database}
Retrieves a resource containing information about a database inside a Cloud SQL instance.
insert
POST /sql/v1beta4/projects/{project}/instances/{instance}/databases
Inserts a resource containing information about a database inside a Cloud SQL instance.
list
GET /sql/v1beta4/projects/{project}/instances/{instance}/databases
Lists databases in the specified Cloud SQL instance.
patch
PATCH /sql/v1beta4/projects/{project}/instances/{instance}/databases/{database}
Partially updates a resource containing information about a database inside a Cloud SQL instance.
update
PUT /sql/v1beta4/projects/{project}/instances/{instance}/databases/{database}
Updates a resource containing information about a database inside a Cloud SQL instance.
REST Resource: v1beta4.flags
Methods
list
GET /sql/v1beta4/flags
Lists all available database flags for Cloud SQL instances.
REST Resource: v1beta4.instances
Methods
ListServerCertificates
GET /sql/v1beta4/projects/{project}/instances/{instance}/listServerCertificates
Lists all versions of server certificates and certificate authorities (CAs) for the specified instance.
RotateServerCertificate
POST /sql/v1beta4/projects/{project}/instances/{instance}/rotateServerCertificate
Rotates the server certificate version to one previously added with the addServerCertificate method.
addServerCa
POST /sql/v1beta4/projects/{project}/instances/{instance}/addServerCa
Add a new trusted Certificate Authority (CA) version for the specified instance.
addServerCertificate
POST /sql/v1beta4/projects/{project}/instances/{instance}/addServerCertificate
Add a new trusted server certificate version for the specified instance using Certificate Authority Service (CAS) server CA.
clone
POST /sql/v1beta4/projects/{project}/instances/{instance}/clone
Creates a Cloud SQL instance as a clone of the source instance.
delete
DELETE /sql/v1beta4/projects/{project}/instances/{instance}
Deletes a Cloud SQL instance.
demote
POST /sql/v1beta4/projects/{project}/instances/{instance}/demote
Demotes an existing standalone instance to be a Cloud SQL read replica for an external database server.
demoteMaster
POST /sql/v1beta4/projects/{project}/instances/{instance}/demoteMaster
Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server.
executeSql
POST /sql/v1beta4/projects/{project}/instances/{instance}/executeSql
Execute SQL statements.
export
POST /sql/v1beta4/projects/{project}/instances/{instance}/export
Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file.
failover
POST /sql/v1beta4/projects/{project}/instances/{instance}/failover
Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance.
get
GET /sql/v1beta4/projects/{project}/instances/{instance}
Retrieves a resource containing information about a Cloud SQL instance.
import
POST /sql/v1beta4/projects/{project}/instances/{instance}/import
Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage.
insert
POST /sql/v1beta4/projects/{project}/instances
Creates a new Cloud SQL instance.
list
GET /sql/v1beta4/projects/{project}/instances
Lists instances under a given project.
listServerCas
GET /sql/v1beta4/projects/{project}/instances/{instance}/listServerCas
Lists all of the trusted Certificate Authorities (CAs) for the specified instance.
patch
PATCH /sql/v1beta4/projects/{project}/instances/{instance}
Partially updates settings of a Cloud SQL instance by merging the request with the current configuration.
pointInTimeRestore
POST /sql/v1beta4/{parent=projects/*}:pointInTimeRestore
Point in time restore for an instance managed by Google Cloud Backup and Disaster Recovery.
preCheckMajorVersionUpgrade
POST /sql/v1beta4/projects/{project}/instances/{instance}/preCheckMajorVersionUpgrade
Execute MVU Pre-checks
promoteReplica
POST /sql/v1beta4/projects/{project}/instances/{instance}/promoteReplica
Promotes the read replica instance to be an independent Cloud SQL primary instance.
reencrypt
POST /sql/v1beta4/projects/{project}/instances/{instance}/reencrypt
Reencrypt CMEK instance with latest key version.
resetSslConfig
POST /sql/v1beta4/projects/{project}/instances/{instance}/resetSslConfig
Deletes all client certificates and generates a new server SSL certificate for the instance.
restart
POST /sql/v1beta4/projects/{project}/instances/{instance}/restart
Restarts a Cloud SQL instance.
restoreBackup
POST /sql/v1beta4/projects/{project}/instances/{instance}/restoreBackup
Restores a backup of a Cloud SQL instance.
rotateServerCa
POST /sql/v1beta4/projects/{project}/instances/{instance}/rotateServerCa
Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method.
startReplica
POST /sql/v1beta4/projects/{project}/instances/{instance}/startReplica
Starts the replication in the read replica instance.
stopReplica
POST /sql/v1beta4/projects/{project}/instances/{instance}/stopReplica
Stops the replication in the read replica instance.
switchover
POST /sql/v1beta4/projects/{project}/instances/{instance}/switchover
Switches over from the primary instance to the DR replica instance.
truncateLog
POST /sql/v1beta4/projects/{project}/instances/{instance}/truncateLog
Truncate MySQL general and slow query log tables MySQL only.
update
PUT /sql/v1beta4/projects/{project}/instances/{instance}
Updates settings of a Cloud SQL instance.
REST Resource: v1beta4.operations
Methods
cancel
POST /sql/v1beta4/projects/{project}/operations/{operation}/cancel
Cancels an instance operation that has been performed on an instance.
get
GET /sql/v1beta4/projects/{project}/operations/{operation}
Retrieves an instance operation that has been performed on an instance.
list
GET /sql/v1beta4/projects/{project}/operations
Lists all instance operations that have been performed on the given Cloud SQL instance in the reverse chronological order of the start time.
REST Resource: v1beta4.projects.instances
Methods
getDiskShrinkConfig
GET /sql/v1beta4/projects/{project}/instances/{instance}/getDiskShrinkConfig
Get Disk Shrink Config for a given instance.
getLatestRecoveryTime
GET /sql/v1beta4/projects/{project}/instances/{instance}/getLatestRecoveryTime
Get Latest Recovery Time for a given instance.
performDiskShrink
POST /sql/v1beta4/projects/{project}/instances/{instance}/performDiskShrink
Perform Disk Shrink on primary instance.
rescheduleMaintenance
POST /sql/v1beta4/projects/{project}/instances/{instance}/rescheduleMaintenance
Reschedules the maintenance on the given instance.
startExternalSync
POST /sql/v1beta4/projects/{project}/instances/{instance}/startExternalSync
Start External primary instance migration.
verifyExternalSyncSettings
POST /sql/v1beta4/projects/{project}/instances/{instance}/verifyExternalSyncSettings
Verify External primary instance external sync settings.
REST Resource: v1beta4.sslCerts
Methods
createEphemeral
POST /sql/v1beta4/projects/{project}/instances/{instance}/createEphemeral
Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance.
delete
DELETE /sql/v1beta4/projects/{project}/instances/{instance}/sslCerts/{sha1Fingerprint}
Deletes the SSL certificate.
get
GET /sql/v1beta4/projects/{project}/instances/{instance}/sslCerts/{sha1Fingerprint}
Retrieves a particular SSL certificate.
insert
POST /sql/v1beta4/projects/{project}/instances/{instance}/sslCerts
Creates an SSL certificate and returns it along with the private key and server certificate authority.
list
GET /sql/v1beta4/projects/{project}/instances/{instance}/sslCerts
Lists all of the current SSL certificates for the instance.
REST Resource: v1beta4.tiers
Methods
list
GET /sql/v1beta4/projects/{project}/tiers
Lists all available machine types (tiers) for Cloud SQL, for example, db-custom-1-3840 .
REST Resource: v1beta4.users
Methods
delete
DELETE /sql/v1beta4/projects/{project}/instances/{instance}/users
Deletes a user from a Cloud SQL instance.
get
GET /sql/v1beta4/projects/{project}/instances/{instance}/users/{name}
Retrieves a resource containing information about a user.
insert
POST /sql/v1beta4/projects/{project}/instances/{instance}/users
Creates a new user in a Cloud SQL instance.
list
GET /sql/v1beta4/projects/{project}/instances/{instance}/users
Lists users in the specified Cloud SQL instance.
update
PUT /sql/v1beta4/projects/{project}/instances/{instance}/users
Updates an existing user in a Cloud SQL instance.
REST Resource: v1.Backups
Methods
CreateBackup
POST /v1/{parent=projects/*}/backups
Creates a backup for a Cloud SQL instance.
DeleteBackup
DELETE /v1/{name=projects/*/backups/*}
Deletes the backup.
GetBackup
GET /v1/{name=projects/*/backups/*}
Retrieves a resource containing information about a backup.
ListBackups
GET /v1/{parent=projects/*}/backups
Lists all backups associated with the project.
UpdateBackup
PATCH /v1/{backup.name=projects/*/backups/*}
Updates the retention period and description of the backup.
REST Resource: v1.backupRuns
Methods
delete
DELETE /v1/projects/{project}/instances/{instance}/backupRuns/{id}
Deletes the backup taken by a backup run.
get
GET /v1/projects/{project}/instances/{instance}/backupRuns/{id}
Retrieves a resource containing information about a backup run.
insert
POST /v1/projects/{project}/instances/{instance}/backupRuns
Creates a new backup run on demand.
list
GET /v1/projects/{project}/instances/{instance}/backupRuns
Lists all backup runs associated with the project or a given instance and configuration in the reverse chronological order of the backup initiation time.
REST Resource: v1.connect
Methods
generateEphemeralCert
POST /v1/projects/{project}/instances/{instance}:generateEphemeralCert
Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance.
get
GET /v1/projects/{project}/instances/{instance}/connectSettings
Retrieves connect settings about a Cloud SQL instance.
REST Resource: v1.databases
Methods
delete
DELETE /v1/projects/{project}/instances/{instance}/databases/{database}
Deletes a database from a Cloud SQL instance.
get
GET /v1/projects/{project}/instances/{instance}/databases/{database}
Retrieves a resource containing information about a database inside a Cloud SQL instance.
insert
POST /v1/projects/{project}/instances/{instance}/databases
Inserts a resource containing information about a database inside a Cloud SQL instance.
list
GET /v1/projects/{project}/instances/{instance}/databases
Lists databases in the specified Cloud SQL instance.
patch
PATCH /v1/projects/{project}/instances/{instance}/databases/{database}
Partially updates a resource containing information about a database inside a Cloud SQL instance.
update
PUT /v1/projects/{project}/instances/{instance}/databases/{database}
Updates a resource containing information about a database inside a Cloud SQL instance.
REST Resource: v1.flags
Methods
list
GET /v1/flags
Lists all available database flags for Cloud SQL instances.
REST Resource: v1.instances
Methods
ListServerCertificates
GET /v1/projects/{project}/instances/{instance}/listServerCertificates
Lists all versions of server certificates and certificate authorities (CAs) for the specified instance.
RotateServerCertificate
POST /v1/projects/{project}/instances/{instance}/rotateServerCertificate
Rotates the server certificate version to one previously added with the addServerCertificate method.
addServerCa
POST /v1/projects/{project}/instances/{instance}/addServerCa
Adds a new trusted Certificate Authority (CA) version for the specified instance.
addServerCertificate
POST /v1/projects/{project}/instances/{instance}/addServerCertificate
Add a new trusted server certificate version for the specified instance using Certificate Authority Service (CAS) server CA.
clone
POST /v1/projects/{project}/instances/{instance}/clone
Creates a Cloud SQL instance as a clone of the source instance.
delete
DELETE /v1/projects/{project}/instances/{instance}
Deletes a Cloud SQL instance.
demote
POST /v1/projects/{project}/instances/{instance}/demote
Demotes an existing standalone instance to be a Cloud SQL read replica for an external database server.
demoteMaster
POST /v1/projects/{project}/instances/{instance}/demoteMaster
Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server.
executeSql
POST /v1/projects/{project}/instances/{instance}/executeSql
Execute SQL statements.
export
POST /v1/projects/{project}/instances/{instance}/export
Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file.
failover
POST /v1/projects/{project}/instances/{instance}/failover
Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance.
get
GET /v1/projects/{project}/instances/{instance}
Retrieves a resource containing information about a Cloud SQL instance.
import
POST /v1/projects/{project}/instances/{instance}/import
Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage.
insert
POST /v1/projects/{project}/instances
Creates a new Cloud SQL instance.
list
GET /v1/projects/{project}/instances
Lists instances under a given project.
listServerCas
GET /v1/projects/{project}/instances/{instance}/listServerCas
Lists all of the trusted Certificate Authorities (CAs) for the specified instance.
patch
PATCH /v1/projects/{project}/instances/{instance}
Partially updates settings of a Cloud SQL instance by merging the request with the current configuration.
pointInTimeRestore
POST /v1/{parent=projects/*}:pointInTimeRestore
Point in time restore for an instance managed by Google Cloud Backup and Disaster Recovery.
preCheckMajorVersionUpgrade
POST /v1/projects/{project}/instances/{instance}/preCheckMajorVersionUpgrade
Execute MVU Pre-checks
promoteReplica
POST /v1/projects/{project}/instances/{instance}/promoteReplica
Promotes the read replica instance to be an independent Cloud SQL primary instance.
reencrypt
POST /v1/projects/{project}/instances/{instance}/reencrypt
Reencrypt CMEK instance with latest key version.
resetSslConfig
POST /v1/projects/{project}/instances/{instance}/resetSslConfig
Deletes all client certificates and generates a new server SSL certificate for the instance.
restart
POST /v1/projects/{project}/instances/{instance}/restart
Restarts a Cloud SQL instance.
restoreBackup
POST /v1/projects/{project}/instances/{instance}/restoreBackup
Restores a backup of a Cloud SQL instance.
rotateServerCa
POST /v1/projects/{project}/instances/{instance}/rotateServerCa
Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method.
startReplica
POST /v1/projects/{project}/instances/{instance}/startReplica
Starts the replication in the read replica instance.
stopReplica
POST /v1/projects/{project}/instances/{instance}/stopReplica
Stops the replication in the read replica instance.
switchover
POST /v1/projects/{project}/instances/{instance}/switchover
Switches over from the primary instance to the DR replica instance.
truncateLog
POST /v1/projects/{project}/instances/{instance}/truncateLog
Truncate MySQL general and slow query log tables MySQL only.
update
PUT /v1/projects/{project}/instances/{instance}
Updates settings of a Cloud SQL instance.
REST Resource: v1.operations
Methods
cancel
POST /v1/projects/{project}/operations/{operation}/cancel
Cancels an instance operation that has been performed on an instance.
get
GET /v1/projects/{project}/operations/{operation}
Retrieves an instance operation that has been performed on an instance.
list
GET /v1/projects/{project}/operations
Lists all instance operations that have been performed on the given Cloud SQL instance in the reverse chronological order of the start time.
REST Resource: v1.projects.instances
Methods
getDiskShrinkConfig
GET /v1/projects/{project}/instances/{instance}/getDiskShrinkConfig
Get Disk Shrink Config for a given instance.
getLatestRecoveryTime
GET /v1/projects/{project}/instances/{instance}/getLatestRecoveryTime
Get Latest Recovery Time for a given instance.
performDiskShrink
POST /v1/projects/{project}/instances/{instance}/performDiskShrink
Perform Disk Shrink on primary instance.
rescheduleMaintenance
POST /v1/projects/{project}/instances/{instance}/rescheduleMaintenance
Reschedules the maintenance on the given instance.
startExternalSync
POST /v1/projects/{project}/instances/{instance}/startExternalSync
Start External primary instance migration.
verifyExternalSyncSettings
POST /v1/projects/{project}/instances/{instance}/verifyExternalSyncSettings
Verify External primary instance external sync settings.
REST Resource: v1.sslCerts
Methods
createEphemeral
POST /v1/projects/{project}/instances/{instance}/createEphemeral
Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance.
delete
DELETE /v1/projects/{project}/instances/{instance}/sslCerts/{sha1Fingerprint}
Deletes the SSL certificate.
get
GET /v1/projects/{project}/instances/{instance}/sslCerts/{sha1Fingerprint}
Retrieves a particular SSL certificate.
insert
POST /v1/projects/{project}/instances/{instance}/sslCerts
Creates an SSL certificate and returns it along with the private key and server certificate authority.
list
GET /v1/projects/{project}/instances/{instance}/sslCerts
Lists all of the current SSL certificates for the instance.
REST Resource: v1.tiers
Methods
list
GET /v1/projects/{project}/tiers
Lists all available machine types (tiers) for Cloud SQL, for example, db-custom-1-3840 .
REST Resource: v1.users
Methods
delete
DELETE /v1/projects/{project}/instances/{instance}/users
Deletes a user from a Cloud SQL instance.
get
GET /v1/projects/{project}/instances/{instance}/users/{name}
Retrieves a resource containing information about a user.
insert
POST /v1/projects/{project}/instances/{instance}/users
Creates a new user in a Cloud SQL instance.
list
GET /v1/projects/{project}/instances/{instance}/users
Lists users in the specified Cloud SQL instance.
update
PUT /v1/projects/{project}/instances/{instance}/users
Updates an existing user in a Cloud SQL instance.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
