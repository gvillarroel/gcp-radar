---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.776Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "autovacuum_vacuum_insert_threshold flag"
feature_slug: "autovacuum-vacuum-insert-threshold-flag"
latest_feature_date: "2023-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/flags"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances"
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances"
keywords:
  - "autovacuum"
  - "minimum"
  - "insert"
  - "threshold"
  - "vacuum"
  - "number"
  - "sets"
  - "flag"
---

# autovacuum_vacuum_insert_threshold flag

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

The autovacuum_vacuum_insert_threshold flag sets the minimum number of inserted tuples needed before VACUUM runs on a table.

## Extended Definition

The autovacuum_vacuum_insert_threshold flag sets the minimum number of inserted tuples needed before VACUUM runs on a table.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)

## Supporting Pages

### Configure database flags | Cloud SQL for PostgreSQL | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags)
- Source ID: `feature-recovery-direct-http`
- Final score: 323
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- No autovacuum_vacuum_insert_threshold integer -1 ...
- This calculation is the sum of the values for max_connections (maximum number of client connections), autovacuum_max_workers (maximum number of autovacuum processes), and max_worker_processes .
- This calculation is the sum of the values for max_connections (maximum number of client connections), autovacuum_max_workers (maximum number of autovacuum processes), and max_worker_processes .
- No autovacuum_vacuum_insert_scale_factor float 0 ...

### REST Resource: instances \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances)
- Source ID: `site-iam-reference`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- RotateServerCertificate Rotates the server certificate version to one previously added with the addServerCertificate method. addServerCa Add a new trusted Certificate Authority (CA) version for the specified instance. addServerCertificate Add a new trusted server certificate version for the specified instance using Certificate Authority Service (CAS) server CA. clone Creates a Cloud SQL instance as a clone of the source instance. delete Deletes a Cloud SQL instance. demote Demotes an existing standalone instance to be a Cloud SQL read replica for an external database server. demoteMaster Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server. executeSql Execute SQL statements. export Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file. failover Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. get Retrieves a resource containing information about a Cloud SQL instance. import Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage. insert Creates a new Cloud SQL instance. list Lists instances under a given project. listServerCas Lists all of the trusted Certificate Authorities (CAs) for the specified instance. patch Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. pointInTimeRestore Point in time restore for an instance managed by Google Cloud Backup and Disaster Recovery. promoteReplica Promotes the read replica instance to be an independent Cloud SQL primary instance. reencrypt Reencrypt CMEK instance with latest key version. resetSslConfig Deletes all client certificates and generates a new server SSL certificate for the instance. restart Restarts a Cloud SQL instance. restoreBackup Restores a backup of a Cloud SQL instance. rotateServerCa Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method. startReplica Starts the replication in the read replica instance. stopReplica Stops the replication in the read replica instance. switchover Switches over from the primary instance to the DR replica instance. truncateLog Truncate MySQL general and slow query log tables MySQL only. update Updates settings of a Cloud SQL instance.
- JSON representation { "minLength" : integer , "complexity" : enum ( Complexity ) , "reuseInterval" : integer , "disallowUsernameSubstring" : boolean , "passwordChangeInterval" : string , "enablePasswordPolicy" : boolean , "disallowCompromisedCredentials" : boolean } Fields minLength integer Minimum number of characters allowed. complexity enum ( Complexity ) The complexity of the password. reuseInterval integer Number of previous passwords that cannot be reused. disallowUsernameSubstring boolean Disallow username as a part of the password. passwordChangeInterval string ( Duration format) Minimum interval after which the password can be changed.
- Target metrics for read pool auto scaling. enabled boolean Indicates whether read pool auto scaling is enabled. minNodeCount integer Minimum number of read pool nodes to be maintained. maxNodeCount integer Maximum number of read pool nodes to be maintained. disableScaleIn boolean Indicates whether read pool auto scaling supports scale in operations (removing nodes). scaleInCooldownSeconds integer The cooldown period for scale in operations. scaleOutCooldownSeconds integer The cooldown period for scale out operations.
- JSON representation { "entitled" : boolean , "googleVacuumMgmtEnabled" : boolean , "oomSessionCancelEnabled" : boolean , "activeQueryEnabled" : boolean , "indexAdvisorEnabled" : boolean , "flagRecommenderEnabled" : boolean } Fields entitled boolean Output only.

### "REST Resource: instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
- Source ID: `site-api-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- RotateServerCertificate Rotates the server certificate version to one previously added with the addServerCertificate method. addServerCa Adds a new trusted Certificate Authority (CA) version for the specified instance. addServerCertificate Add a new trusted server certificate version for the specified instance using Certificate Authority Service (CAS) server CA. clone Creates a Cloud SQL instance as a clone of the source instance. delete Deletes a Cloud SQL instance. demote Demotes an existing standalone instance to be a Cloud SQL read replica for an external database server. demoteMaster Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server. export Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file. failover Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. get Retrieves a resource containing information about a Cloud SQL instance. import Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage. insert Creates a new Cloud SQL instance. list Lists instances under a given project. listServerCas Lists all of the trusted Certificate Authorities (CAs) for the specified instance. patch Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. pointInTimeRestore Point in time restore for an instance managed by Google Cloud Backup and Disaster Recovery. preCheckMajorVersionUpgrade Execute MVU Pre-checks promoteReplica Promotes the read replica instance to be an independent Cloud SQL primary instance. reencrypt Reencrypt CMEK instance with latest key version. resetSslConfig Deletes all client certificates and generates a new server SSL certificate for the instance. restart Restarts a Cloud SQL instance. restoreBackup Restores a backup of a Cloud SQL instance. rotateServerCa Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method. startReplica Starts the replication in the read replica instance. stopReplica Stops the replication in the read replica instance. switchover Switches over from the primary instance to the DR replica instance. truncateLog Truncate MySQL general and slow query log tables MySQL only. update Updates settings of a Cloud SQL instance.
- JSON representation { "minLength" : integer , "complexity" : enum ( Complexity ) , "reuseInterval" : integer , "disallowUsernameSubstring" : boolean , "passwordChangeInterval" : string , "enablePasswordPolicy" : boolean , "disallowCompromisedCredentials" : boolean } Fields minLength integer Minimum number of characters allowed. complexity enum ( Complexity ) The complexity of the password. reuseInterval integer Number of previous passwords that cannot be reused. disallowUsernameSubstring boolean Disallow username as a part of the password. passwordChangeInterval string ( Duration format) Minimum interval after which the password can be changed.
- Target metrics for read pool auto scaling. enabled boolean Indicates whether read pool auto scaling is enabled. minNodeCount integer Minimum number of read pool nodes to be maintained. maxNodeCount integer Maximum number of read pool nodes to be maintained. disableScaleIn boolean Indicates whether read pool auto scaling supports scale in operations (removing nodes). scaleInCooldownSeconds integer The cooldown period for scale-in operations. scaleOutCooldownSeconds integer The cooldown period for scale-out operations.
- JSON representation { "entitled" : boolean , "googleVacuumMgmtEnabled" : boolean , "oomSessionCancelEnabled" : boolean , "activeQueryEnabled" : boolean , "indexAdvisorEnabled" : boolean , "flagRecommenderEnabled" : boolean } Fields entitled boolean Output only.

