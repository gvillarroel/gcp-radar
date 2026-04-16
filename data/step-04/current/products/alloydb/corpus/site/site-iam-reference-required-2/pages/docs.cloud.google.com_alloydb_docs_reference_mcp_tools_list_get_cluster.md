---
title: "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_cluster
knowledge_key: corpus
source_id: site-iam-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/reference/iam-roles-permissions
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_cluster
  title: "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
AlloyDB for PostgreSQL
Reference
Send feedback
MCP Tools Reference: alloydb
Stay organized with collections
Save and categorize content based on your preferences.
Tool: get_cluster
Get a cluster
The following sample demonstrate how to use curl to invoke the get_cluster MCP tool.
Curl Request
curl --location 'https://alloydb.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "get_cluster",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
Message for getting a Cluster
GetClusterRequest
JSON representation
{
"name" : string ,
"view" : enum ( ClusterView )
}
Fields
name
string
Required. The name of the resource. For the required format, see the comment on the Cluster.name field.
view
enum ( ClusterView )
Optional. The view of the cluster to return. Returns all default fields if not set.
Output Schema
A cluster is a collection of regional AlloyDB resources. It can include a primary instance and one or more read pool instances. All cluster resources share a storage layer, which scales as needed.
Cluster
JSON representation
{
"name" : string ,
"displayName" : string ,
"uid" : string ,
"createTime" : string ,
"updateTime" : string ,
"deleteTime" : string ,
"labels" : {
string : string ,
...
} ,
"state" : enum ( State ) ,
"clusterType" : enum ( ClusterType ) ,
"databaseVersion" : enum ( DatabaseVersion ) ,
"networkConfig" : {
object ( NetworkConfig )
} ,
"network" : string ,
"etag" : string ,
"annotations" : {
string : string ,
...
} ,
"reconciling" : boolean ,
"initialUser" : {
object ( UserPassword )
} ,
"automatedBackupPolicy" : {
object ( AutomatedBackupPolicy )
} ,
"sslConfig" : {
object ( SslConfig )
} ,
"encryptionConfig" : {
object ( EncryptionConfig )
} ,
"encryptionInfo" : {
object ( EncryptionInfo )
} ,
"continuousBackupConfig" : {
object ( ContinuousBackupConfig )
} ,
"continuousBackupInfo" : {
object ( ContinuousBackupInfo )
} ,
"secondaryConfig" : {
object ( SecondaryConfig )
} ,
"primaryConfig" : {
object ( PrimaryConfig )
} ,
"satisfiesPzs" : boolean ,
"pscConfig" : {
object ( PscConfig )
} ,
"maintenanceUpdatePolicy" : {
object ( MaintenanceUpdatePolicy )
} ,
"maintenanceSchedule" : {
object ( MaintenanceSchedule )
} ,
"subscriptionType" : enum ( SubscriptionType ) ,
"trialMetadata" : {
object ( TrialMetadata )
} ,
"tags" : {
string : string ,
...
} ,
"backupdrInfo" : {
object ( BackupDrInfo )
} ,
"dataplexConfig" : {
object ( DataplexConfig )
} ,
// Union field source can be only one of the following:
"backupSource" : {
object ( BackupSource )
} ,
"migrationSource" : {
object ( MigrationSource )
} ,
"cloudsqlBackupRunSource" : {
object ( CloudSQLBackupRunSource )
} ,
"backupdrBackupSource" : {
object ( BackupDrBackupSource )
}
// End of list of possible types for union field source .
// Union field maintenance_version can be only one of the following:
"maintenanceVersionSelectionPolicy" : enum ( MaintenanceVersionSelectionPolicy )
// End of list of possible types for union field maintenance_version .
}
Fields
name
string
Output only. The name of the cluster resource with the format: * projects/{project}/locations/{region}/clusters/{cluster_id} where the cluster ID segment should satisfy the regex expression [a-z0-9-]+ . For more details see https://google.aip.dev/122 . The prefix of the cluster resource name is the name of the parent resource: * projects/{project}/locations/{region}
displayName
string
User-settable and human-readable display name for the Cluster.
uid
string
Output only. The system-generated UID of the resource. The UID is assigned when the resource is created, and it is retained until it is deleted.
createTime
string ( Timestamp format)
Output only. Create time stamp
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. Update time stamp
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
deleteTime
string ( Timestamp format)
Output only. Delete time stamp
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
labels
map (key: string, value: string)
Labels as key value pairs
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
state
enum ( State )
Output only. The current serving state of the cluster.
clusterType
enum ( ClusterType )
Output only. The type of the cluster. This is an output-only field and it's populated at the Cluster creation time or the Cluster promotion time. The cluster type is determined by which RPC was used to create the cluster (i.e. CreateCluster vs. CreateSecondaryCluster
databaseVersion
enum ( DatabaseVersion )
Optional. The database engine major version. This is an optional field and it is populated at the Cluster creation time. If a database version is not supplied at cluster creation time, then a default database version will be used.
networkConfig
object ( NetworkConfig )
network (deprecated)
string
This item is deprecated!
Required. The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster. It is specified in the form: projects/{project}/global/networks/{network_id} . This is required to create a cluster. Deprecated, use network_config.network instead.
etag
string
For Resource freshness validation ( https://google.aip.dev/154 )
annotations
map (key: string, value: string)
Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. https://google.aip.dev/128
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
reconciling
boolean
Output only. Reconciling ( https://google.aip.dev/128#reconciliation) . Set to true if the current state of Cluster does not match the user's intended state, and the service is actively updating the resource to reconcile them. This can happen due to user-triggered updates or system actions like failover or maintenance.
initialUser
object ( UserPassword )
Input only. Initial user to setup during cluster creation. Required. If used in RestoreCluster this is ignored.
automatedBackupPolicy
object ( AutomatedBackupPolicy )
The automated backup policy for this cluster.
If no policy is provided then the default policy will be used. If backups are supported for the cluster, the default policy takes one backup a day, has a backup window of 1 hour, and retains backups for 14 days. For more information on the defaults, consult the documentation for the message type.
sslConfig (deprecated)
object ( SslConfig )
This item is deprecated!
SSL configuration for this AlloyDB cluster.
encryptionConfig
object ( EncryptionConfig )
Optional. The encryption config can be specified to encrypt the data disks and other persistent data resources of a cluster with a customer-managed encryption key (CMEK). When this field is not specified, the cluster will then use default encryption scheme to protect the user data.
encryptionInfo
object ( EncryptionInfo )
Output only. The encryption information for the cluster.
continuousBackupConfig
object ( ContinuousBackupConfig )
Optional. Continuous backup configuration for this cluster.
continuousBackupInfo
object ( ContinuousBackupInfo )
Output only. Continuous backup properties for this cluster.
secondaryConfig
object ( SecondaryConfig )
Cross Region replication config specific to SECONDARY cluster.
primaryConfig
object ( PrimaryConfig )
Output only. Cross Region replication config specific to PRIMARY cluster.
satisfiesPzs
boolean
Output only. Reserved for future use.
pscConfig
object ( PscConfig )
Optional. The configuration for Private Service Connect (PSC) for the cluster.
maintenanceUpdatePolicy
object ( MaintenanceUpdatePolicy )
Optional. The maintenance update policy determines when to allow or deny updates.
maintenanceSchedule
object ( MaintenanceSchedule )
Output only. The maintenance schedule for the cluster, generated for a specific rollout if a maintenance window is set.
subscriptionType
enum ( SubscriptionType )
Optional. Subscription type of the cluster.
trialMetadata
object ( TrialMetadata )
Output only. Metadata for free trial clusters
tags
map (key: string, value: string)
Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example:
"123/environment": "production",
"123/costCenter": "marketing"
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
backupdrInfo
object ( BackupDrInfo )
Output only. Output only information about BackupDR protection for this cluster.
dataplexConfig
object ( DataplexConfig )
Optional. Configuration for Dataplex integration.
Union field source . In case of an imported cluster, this field contains information about the source this cluster was imported from. source can be only one of the following:
backupSource
object ( BackupSource )
Output only. Cluster created from backup.
migrationSource
object ( MigrationSource )
Output only. Cluster created via DMS migration.
cloudsqlBackupRunSource
object ( CloudSQLBackupRunSource )
Output only. Cluster created from CloudSQL snapshot.
backupdrBackupSource
object ( BackupDrBackupSource )
Output only. Cluster created from a BackupDR backup.
Union field maintenance_version . Input only. The maintenance version to which to update the instances belonging to the cluster. maintenance_version can be only one of the following:
maintenanceVersionSelectionPolicy
enum ( MaintenanceVersionSelectionPolicy )
Input only. Policy to use to automatically select the maintenance version to which to update the cluster's instances.
BackupSource
JSON representation
{
"backupUid" : string ,
"backupName" : string
}
Fields
backupUid
string
Output only. The system-generated UID of the backup which was used to create this resource. The UID is generated when the backup is created, and it is retained until the backup is deleted.
backupName
string
Required. The name of the backup resource with the format: * projects/{project}/locations/{region}/backups/{backup_id}
MigrationSource
JSON representation
{
"hostPort" : string ,
"referenceId" : string ,
"sourceType" : enum ( MigrationSourceType )
}
Fields
hostPort
string
Output only. The host and port of the on-premises instance in host:port format
referenceId
string
Output only. Place holder for the external source identifier(e.g DMS job name) that created the cluster.
sourceType
enum ( MigrationSourceType )
Output only. Type of migration source.
CloudSQLBackupRunSource
JSON representation
{
"project" : string ,
"instanceId" : string ,
"backupRunId" : string
}
Fields
project
string
The project ID of the source CloudSQL instance. This should be the same as the AlloyDB cluster's project.
instanceId
string
Required. The CloudSQL instance ID.
backupRunId
string ( int64 format)
Required. The CloudSQL backup run ID.
BackupDrBackupSource
JSON representation
{
"backup" : string
}
Fields
backup
string
Required. The name of the backup resource with the format: * projects/{project}/locations/{location}/backupVaults/{backupvault_id}/dataSources/{datasource_id}/backups/{backup_id}
Timestamp
JSON representation
{
"seconds" : string ,
"nanos" : integer
}
Fields
seconds
string ( int64 format)
Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be between -62135596800 and 253402300799 inclusive (which corresponds to 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z).
nanos
integer
Non-negative fractions of a second at nanosecond resolution. This field is the nanosecond portion of the duration, not an alternative to seconds. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be between 0 and 999,999,999 inclusive.
LabelsEntry
JSON representation
{
"key" : string ,
"value" : string
}
Fields
key
string
value
string
NetworkConfig
JSON representation
{
"network" : string ,
"allocatedIpRange" : string
}
Fields
network
string
Optional. The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster. It is specified in the form: projects/{project_number}/global/networks/{network_id} . This is required to create a cluster.
allocatedIpRange
string
Optional. Name of the allocated IP range for the private IP AlloyDB cluster, for example: "google-managed-services-default". If set, the instance IPs for this cluster will be created in the allocated range. The range name must comply with RFC 1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? . Field name is intended to be consistent with Cloud SQL.
AnnotationsEntry
JSON representation
{
"key" : string ,
"value" : string
}
Fields
key
string
value
string
UserPassword
JSON representation
{
"user" : string ,
"password" : string
}
Fields
user
string
The database username.
password
string
The initial password for the user.
AutomatedBackupPolicy
JSON representation
{
"backupWindow" : string ,
"encryptionConfig" : {
object ( EncryptionConfig )
} ,
"location" : string ,
"labels" : {
string : string ,
...
} ,
// Union field schedule can be only one of the following:
"weeklySchedule" : {
object ( WeeklySchedule )
}
// End of list of possible types for union field schedule .
// Union field retention can be only one of the following:
"timeBasedRetention" : {
object ( TimeBasedRetention )
} ,
"quantityBasedRetention" : {
object ( QuantityBasedRetention )
}
// End of list of possible types for union field retention .
// Union field _enabled can be only one of the following:
"enabled" : boolean
// End of list of possible types for union field _enabled .
}
Fields
backupWindow
string ( Duration format)
The length of the time window during which a backup can be taken. If a backup does not succeed within this time window, it will be canceled and considered failed.
The backup window must be at least 5 minutes long. There is no upper bound on the window. If not set, it defaults to 1 hour.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
encryptionConfig
object ( EncryptionConfig )
Optional. The encryption config can be specified to encrypt the backups with a customer-managed encryption key (CMEK). When this field is not specified, the backup will use the cluster's encryption config.
location
string
The location where the backup will be stored. Currently, the only supported option is to store the backup in the same region as the cluster.
If empty, defaults to the region of the cluster.
labels
map (key: string, value: string)
Labels to apply to backups created using this configuration.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
Union field schedule . The schedule for this automated backup policy.
A schedule specifies times at which to start a backup. If a backup window is also provided, the backup is guaranteed to be started and completed within the start time plus the backup window. If the backup is not completed within the backup window it is marked as failed.
If not set, the schedule defaults to a weekly schedule with one backup per day and a start time chosen arbitrarily. schedule can be only one of the following:
weeklySchedule
object ( WeeklySchedule )
Weekly schedule for the Backup.
Union field retention . The retention policy for automated backups.
The retention policy for a backup is fixed at the time the backup is created. Changes to this field only apply to new backups taken with the policy; the retentions of existing backups remain unchanged.
If no retention policy is set, a default of 14 days is used. retention can be only one of the following:
timeBasedRetention
object ( TimeBasedRetention )
Time-based Backup retention policy.
quantityBasedRetention
object ( QuantityBasedRetention )
Quantity-based Backup retention policy to retain recent backups.
Union field _enabled .
_enabled can be only one of the following:
enabled
boolean
Whether automated automated backups are enabled. If not set, defaults to true.
WeeklySchedule
JSON representation
{
"startTimes" : [
{
object ( TimeOfDay )
}
] ,
"daysOfWeek" : [
enum ( google.type.DayOfWeek )
]
}
Fields
startTimes[]
object ( TimeOfDay )
The times during the day to start a backup. The start times are assumed to be in UTC and to be an exact hour (e.g., 04:00:00).
If no start times are provided, a single fixed start time is chosen arbitrarily.
daysOfWeek[]
enum ( google.type.DayOfWeek )
The days of the week to perform a backup.
If this field is left empty, the default of every day of the week is used.
TimeOfDay
JSON representation
{
"hours" : integer ,
"minutes" : integer ,
"seconds" : integer ,
"nanos" : integer
}
Fields
hours
integer
Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
minutes
integer
Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59.
seconds
integer
Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds.
nanos
integer
Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999.
TimeBasedRetention
JSON representation
{
"retentionPeriod" : string
}
Fields
retentionPeriod
string ( Duration format)
The retention period.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
Duration
JSON representation
{
"seconds" : string ,
"nanos" : integer
}
Fields
seconds
string ( int64 format)
Signed seconds of the span of time. Must be from -315,576,000,000 to +315,576,000,000 inclusive. Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
nanos
integer
Signed fractions of a second at nanosecond resolution of the span of time. Durations less than one second are represented with a 0 seconds field and a positive or negative nanos field. For durations of one second or more, a non-zero value for the nanos field must be of the same sign as the seconds field. Must be from -999,999,999 to +999,999,999 inclusive.
QuantityBasedRetention
JSON representation
{
"count" : integer
}
Fields
count
integer
The number of backups to retain.
EncryptionConfig
JSON representation
{
"kmsKeyName" : string
}
Fields
kmsKeyName
string
The fully-qualified resource name of the KMS key. Each Cloud KMS key is regionalized and has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME]
LabelsEntry
JSON representation
{
"key" : string ,
"value" : string
}
Fields
key
string
value
string
SslConfig
JSON representation
{
"sslMode" : enum ( SslMode ) ,
"caSource" : enum ( CaSource )
}
Fields
sslMode
enum ( SslMode )
Optional. SSL mode. Specifies client-server SSL/TLS connection behavior.
caSource
enum ( CaSource )
Optional. Certificate Authority (CA) source. Only CA_SOURCE_MANAGED is supported currently, and is the default value.
EncryptionInfo
JSON representation
{
"encryptionType" : enum ( Type ) ,
"kmsKeyVersions" : [
string
]
}
Fields
encryptionType
enum ( Type )
Output only. Type of encryption.
kmsKeyVersions[]
string
Output only. Cloud KMS key versions that are being used to protect the database or the backup.
ContinuousBackupConfig
JSON representation
{
"recoveryWindowDays" : integer ,
"encryptionConfig" : {
object ( EncryptionConfig )
} ,
// Union field _enabled can be only one of the following:
"enabled" : boolean
// End of list of possible types for union field _enabled .
}
Fields
recoveryWindowDays
integer
The number of days that are eligible to restore from using PITR. To support the entire recovery window, backups and logs are retained for one day more than the recovery window. If not set, defaults to 14 days.
encryptionConfig
object ( EncryptionConfig )
The encryption config can be specified to encrypt the backups with a customer-managed encryption key (CMEK). When this field is not specified, the backup will use the cluster's encryption config.
Union field _enabled .
_enabled can be only one of the following:
enabled
boolean
Whether ContinuousBackup is enabled.
ContinuousBackupInfo
JSON representation
{
"encryptionInfo" : {
object ( EncryptionInfo )
} ,
"enabledTime" : string ,
"schedule" : [
enum ( google.type.DayOfWeek )
] ,
"earliestRestorableTime" : string
}
Fields
encryptionInfo
object ( EncryptionInfo )
Output only. The encryption information for the WALs and backups required for ContinuousBackup.
enabledTime
string ( Timestamp format)
Output only. When ContinuousBackup was most recently enabled. Set to null if ContinuousBackup is not enabled.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
schedule[]
enum ( google.type.DayOfWeek )
Output only. Days of the week on which a continuous backup is taken.
earliestRestorableTime
string ( Timestamp format)
Output only. The earliest restorable time that can be restored to. If continuous backups and recovery was recently enabled, the earliest restorable time is the creation time of the earliest eligible backup within this cluster's continuous backup recovery window. After a cluster has had continuous backups enabled for the duration of its recovery window, the earliest restorable time becomes "now minus the recovery window". For example, assuming a point in time recovery is attempted at 04/16/2025 3:23:00PM with a 14d recovery window, the earliest restorable time would be 04/02/2025 3:23:00PM. This field is only visible if the CLUSTER_VIEW_CONTINUOUS_BACKUP cluster view is provided.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
SecondaryConfig
JSON representation
{
"primaryClusterName" : string
}
Fields
primaryClusterName
string
The name of the primary cluster name with the format: * projects/{project}/locations/{region}/clusters/{cluster_id}
PrimaryConfig
JSON representation
{
"secondaryClusterNames" : [
string
]
}
Fields
secondaryClusterNames[]
string
Output only. Names of the clusters that are replicating from this cluster.
PscConfig
JSON representation
{
"pscEnabled" : boolean ,
"serviceOwnedProjectNumber" : string
}
Fields
pscEnabled
boolean
Optional. Create an instance that allows connections from Private Service Connect endpoints to the instance.
serviceOwnedProjectNumber
string ( int64 format)
Output only. The project number that needs to be allowlisted on the network attachment to enable outbound connectivity.
MaintenanceUpdatePolicy
JSON representation
{
"maintenanceWindows" : [
{
object ( MaintenanceWindow )
}
] ,
"denyMaintenancePeriods" : [
{
object ( DenyMaintenancePeriod )
}
]
}
Fields
maintenanceWindows[]
object ( MaintenanceWindow )
Preferred windows to perform maintenance. Currently limited to 1.
denyMaintenancePeriods[]
object ( DenyMaintenancePeriod )
Periods to deny maintenance. Currently limited to 1.
MaintenanceWindow
JSON representation
{
"day" : enum ( google.type.DayOfWeek ) ,
"startTime" : {
object ( TimeOfDay )
}
}
Fields
day
enum ( google.type.DayOfWeek )
Preferred day of the week for maintenance, e.g. MONDAY, TUESDAY, etc.
startTime
object ( TimeOfDay )
Preferred time to start the maintenance operation on the specified day. Maintenance will start within 1 hour of this time.
DenyMaintenancePeriod
JSON representation
{
"startDate" : {
object ( Date )
} ,
"endDate" : {
object ( Date )
} ,
"time" : {
object ( TimeOfDay )
}
}
Fields
startDate
object ( Date )
Deny period start date. This can be: * A full date, with non-zero year, month and day values OR * A month and day value, with a zero year for recurring
endDate
object ( Date )
Deny period end date. This can be: * A full date, with non-zero year, month and day values OR * A month and day value, with a zero year for recurring
time
object ( TimeOfDay )
Time in UTC when the deny period starts on start_date and ends on end_date. This can be: * Full time OR * All zeros for 00:00:00 UTC
Date
JSON representation
{
"year" : integer ,
"month" : integer ,
"day" : integer
}
Fields
year
integer
Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
month
integer
Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
day
integer
Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
MaintenanceSchedule
JSON representation
{
"startTime" : string
}
Fields
startTime
string ( Timestamp format)
Output only. The scheduled start time for the maintenance.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
TrialMetadata
JSON representation
{
"startTime" : string ,
"endTime" : string ,
"upgradeTime" : string ,
"graceEndTime" : string
}
Fields
startTime
string ( Timestamp format)
start time of the trial cluster.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
endTime
string ( Timestamp format)
End time of the trial cluster.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
upgradeTime
string ( Timestamp format)
Upgrade time of trial cluster to Standard cluster.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
graceEndTime
string ( Timestamp format)
grace end time of the cluster.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
TagsEntry
JSON representation
{
"key" : string ,
"value" : string
}
Fields
key
string
value
string
BackupDrInfo
JSON representation
{
"previousWindows" : [
{
object ( BackupDrEnabledWindow )
}
] ,
// Union field _current_window can be only one of the following:
"currentWindow" : {
object ( BackupDrEnabledWindow )
}
// End of list of possible types for union field _current_window .
}
Fields
previousWindows[]
object ( BackupDrEnabledWindow )
Windows during which BackupDR was enabled for this cluster, along with associated configuration for that window. These are used to determine points-in-time for which restores can be performed.
The windows are ordered with the most recent window last. Windows are mutally exclusive.
Windows which closed more than 1 year ago will be removed from this list.
Union field _current_window .
_current_window can be only one of the following:
currentWindow
object ( BackupDrEnabledWindow )
The current BackupDR configuration for this cluster.
If BackupDR protection is not enabled for this cluster, this field will be empty.
BackupDrEnabledWindow
JSON representation
{
"enabledTime" : string ,
"backupPlanAssociation" : string ,
"dataSource" : string ,
"continuousBackupPreviouslyEnabled" : boolean ,
"continuousBackupPreviouslyEnabledTime" : string ,
"continuousBackupPreviousRecoveryWindowDays" : integer ,
"automatedBackupPreviouslyEnabled" : boolean ,
"logRetentionPeriod" : string ,
// Union field _disabled_time can be only one of the following:
"disabledTime" : string
// End of list of possible types for union field _disabled_time .
}
Fields
enabledTime
string ( Timestamp format)
Time when the BackupDR protection for this cluster was enabled.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
backupPlanAssociation
string
The BackupPlanAssociation resource that was used to enable BackupDR protection for this cluster.
dataSource
string
The DataSource resource that represents the cluster in BackupDR.
continuousBackupPreviouslyEnabled
boolean
Whether continuous backup was previously enabled prior to enabling BackupDR protection for this cluster.
continuousBackupPreviouslyEnabledTime
string ( Timestamp format)
The time when continuous backup was previously enabled prior to enabling BackupDR protection for this cluster.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
continuousBackupPreviousRecoveryWindowDays
integer
The retention set for the continuous backup that was previously enabled prior to enabling BackupDR protection for this cluster.
automatedBackupPreviouslyEnabled
boolean
Whether automated backup was previously enabled prior to enabling BackupDR protection for this cluster.
logRetentionPeriod
string ( Duration format)
The retention period for logs generated by BackupDR for this cluster.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
Union field _disabled_time .
_disabled_time can be only one of the following:
disabledTime
string ( Timestamp format)
Time when the BackupDR protection for this cluster was disabled.
This field will be empty if this BackupDR window is the current_window .
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
DataplexConfig
JSON representation
{
"enabled" : boolean
}
Fields
enabled
boolean
Dataplex is enabled by default for resources such as clusters and instances. This flag controls the integration of AlloyDB PG resources (like databases, schemas, and tables) with Dataplex."
Tool Annotations
Destructive Hint: ❌ | Idempotent Hint: ✅ | Read Only Hint: ✅ | Open World Hint: ✅
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-17 UTC."],[],[]]
