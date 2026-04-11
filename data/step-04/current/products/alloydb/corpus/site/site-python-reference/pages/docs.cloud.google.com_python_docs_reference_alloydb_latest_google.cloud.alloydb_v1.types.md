---
title: "Package types (0.7.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.types
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/alloydb/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.types
  title: "Package types (0.7.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Package types (0.7.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
0.7.0 (latest)
0.6.0
0.5.0
0.4.9
0.3.16
0.2.1
0.1.1
API documentation for alloydb_v1.types package.
Classes
AutomatedBackupPolicy
Message describing the user-specified automated backup
policy.
All fields in the automated backup policy are optional. Defaults
for each field are provided if they are not set.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Backup
Message describing Backup object
BackupSource
Message describing a BackupSource.
BatchCreateInstanceStatus
Message for current status of an instance in the
BatchCreateInstances operation. For example, lets say a
BatchCreateInstances workflow has 4 instances, Instance1 through
Instance4. Lets also assume that 2 instances succeeded but the third
failed to create and the 4th was never picked up for creation
because of failure of the previous one. Then, resulting states would
look something like:
Instance1 = ROLLED_BACK
Instance2 = ROLLED_BACK
Instance3 = FAILED
Instance4 = FAILED
However, while the operation is running, the instance might be in
other states including PENDING_CREATE, ACTIVE, DELETING and
CREATING. The states / do not get further updated once the operation
is done.
BatchCreateInstancesMetadata
Message for metadata that is specific to BatchCreateInstances API.
NEXT_ID: 3
BatchCreateInstancesRequest
Message for creating a batch of instances under the specified
cluster.
BatchCreateInstancesResponse
Message for creating batches of instances in a cluster.
CloudSQLBackupRunSource
The source CloudSQL backup resource.
Cluster
A cluster is a collection of regional AlloyDB resources. It
can include a primary instance and one or more read pool
instances. All cluster resources share a storage layer, which
scales as needed.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
ClusterView
View on Cluster. Pass this enum to rpcs that returns a
cluster message to control which subsets of fields to get.
ConnectionInfo
ConnectionInfo singleton resource.
https://google.aip.dev/156
ContinuousBackupConfig
ContinuousBackupConfig describes the continuous backups
recovery configurations of a cluster.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
ContinuousBackupInfo
ContinuousBackupInfo describes the continuous backup
properties of a cluster.
ContinuousBackupSource
Message describing a ContinuousBackupSource.
CreateBackupRequest
Message for creating a Backup
CreateClusterRequest
Message for creating a Cluster
CreateInstanceRequest
Message for creating a Instance
CreateInstanceRequests
See usage below for notes.
CreateSecondaryClusterRequest
CreateSecondaryInstanceRequest
Message for creating a Secondary Instance
CreateUserRequest
Message for creating a User
Database
Message describing Database object.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
DatabaseVersion
The supported database engine versions.
DeleteBackupRequest
Message for deleting a Backup
DeleteClusterRequest
Message for deleting a Cluster
DeleteInstanceRequest
Message for deleting a Instance
DeleteUserRequest
Message for deleting a User
EncryptionConfig
EncryptionConfig describes the encryption config of a cluster
or a backup that is encrypted with a CMEK (customer-managed
encryption key).
EncryptionInfo
EncryptionInfo describes the encryption information of a
cluster or a backup.
ExecuteSqlMetadata
Any additional metadata information regarding the execution
of the SQL
ExecuteSqlRequest
Request for ExecuteSql rpc.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
ExecuteSqlResponse
Execute a SQL statement response.
ExportClusterRequest
Export cluster request.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
ExportClusterResponse
Response of export cluster rpc.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
FailoverInstanceRequest
Message for triggering failover on an Instance
GcsDestination
Destination for Export. Export will be done to cloud storage.
GenerateClientCertificateRequest
Message for requests to generate a client certificate signed
by the Cluster CA.
GenerateClientCertificateResponse
Message returned by a GenerateClientCertificate operation.
GetBackupRequest
Message for getting a Backup
GetClusterRequest
Message for getting a Cluster
GetConnectionInfoRequest
Request message for GetConnectionInfo.
GetInstanceRequest
Message for getting a Instance
GetUserRequest
Message for getting a User
ImportClusterRequest
Import cluster request.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
ImportClusterResponse
Response of import rpc.
InjectFaultRequest
Message for triggering fault injection on an instance
Instance
An Instance is a computing unit that an end customer can
connect to. It's the main unit of computing resources in
AlloyDB.
InstanceView
View on Instance. Pass this enum to rpcs that returns an
Instance message to control which subsets of fields to get.
ListBackupsRequest
Message for requesting list of Backups
ListBackupsResponse
Message for response to listing Backups
ListClustersRequest
Message for requesting list of Clusters
ListClustersResponse
Message for response to listing Clusters
ListDatabasesRequest
Message for ListDatabases request.
ListDatabasesResponse
Message for ListDatabases response.
ListInstancesRequest
Message for requesting list of Instances
ListInstancesResponse
Message for response to listing Instances
ListSupportedDatabaseFlagsRequest
Message for listing the information about the supported
Database flags.
ListSupportedDatabaseFlagsResponse
Message for response to listing SupportedDatabaseFlags.
ListUsersRequest
Message for requesting list of Users
ListUsersResponse
Message for response to listing Users
MaintenanceSchedule
MaintenanceSchedule stores the maintenance schedule generated
from the MaintenanceUpdatePolicy, once a maintenance rollout is
triggered, if MaintenanceWindow is set, and if there is no
conflicting DenyPeriod. The schedule is cleared once the update
takes place. This field cannot be manually changed; modify the
MaintenanceUpdatePolicy instead.
MaintenanceUpdatePolicy
MaintenanceUpdatePolicy defines the policy for system
updates.
MigrationSource
Subset of the source instance configuration that is available
when reading the cluster resource.
OperationMetadata
Represents the metadata of the long-running operation.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
PromoteClusterRequest
Message for promoting a Cluster
RestartInstanceRequest
RestoreClusterRequest
Message for restoring a Cluster from a backup or another cluster at
a given point in time. NEXT_ID: 11
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
RestoreFromCloudSQLRequest
Message for registering Restoring from CloudSQL resource.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
SqlResult
SqlResult represents the result for the execution of a sql
statement.
SqlResultColumn
Contains the name and datatype of a column in a SQL Result.
SqlResultRow
A single row from a sql result.
SqlResultValue
A single value in a row from a sql result.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
SslConfig
SSL configuration.
SubscriptionType
Subscription_type added to distinguish between Standard and Trial
subscriptions. By default, a subscription type is considered
STANDARD unless explicitly specified.
SupportedDatabaseFlag
SupportedDatabaseFlag gives general information about a database
flag, like type and allowed values. This is a static value that is
defined on the server side, and it cannot be modified by callers. To
set the Database flags on a particular Instance, a caller should
modify the Instance.database_flags field.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
SwitchoverClusterRequest
Message for switching over to a cluster
UpdateBackupRequest
Message for updating a Backup
UpdateClusterRequest
Message for updating a Cluster
UpdateInstanceRequest
Message for updating a Instance
UpdateUserRequest
Message for updating a User
UpgradeClusterRequest
Upgrades a cluster.
UpgradeClusterResponse
UpgradeClusterResponse contains the response for upgrade
cluster operation.
UpgradeClusterStatus
Message for current status of the Major Version Upgrade
operation.
User
Message describing User object.
UserPassword
The username/password for a database user. Used for
specifying initial users at cluster creation time.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
