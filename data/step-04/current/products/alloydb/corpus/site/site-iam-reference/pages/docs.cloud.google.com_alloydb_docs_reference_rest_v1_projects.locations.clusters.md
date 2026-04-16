---
title: "REST Resource: projects.locations.clusters \_|\_ AlloyDB for PostgreSQL \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters
  title: "REST Resource: projects.locations.clusters \_|\_ AlloyDB for PostgreSQL\
    \ \_|\_ Google Cloud Documentation"
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
REST Resource: projects.locations.clusters
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Cluster
A cluster is a collection of regional AlloyDB resources. It can include a primary instance and one or more read pool instances. All cluster resources share a storage layer, which scales as needed.
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
Output only. The name of the cluster resource with the format: * projects/{project}/locations/{region}/clusters/{clusterId} where the cluster ID segment should satisfy the regex expression [a-z0-9-]+ . For more details see https://google.aip.dev/122 . The prefix of the cluster resource name is the name of the parent resource: * projects/{project}/locations/{region}
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
Output only. The type of the cluster. This is an output-only field and it's populated at the Cluster creation time or the Cluster promotion time. The cluster type is determined by which RPC was used to create the cluster (i.e. clusters.create vs. clusters.createsecondary
databaseVersion
enum ( DatabaseVersion )
Optional. The database engine major version. This is an optional field and it is populated at the Cluster creation time. If a database version is not supplied at cluster creation time, then a default database version will be used.
networkConfig
object ( NetworkConfig )
network (deprecated)
string
This item is deprecated!
Required. The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster. It is specified in the form: projects/{project}/global/networks/{network_id} . This is required to create a cluster. Deprecated, use networkConfig.network instead.
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
Input only. Initial user to setup during cluster creation. Required. If used in clusters.restore this is ignored.
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
Message describing a BackupSource.
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
Required. The name of the backup resource with the format: * projects/{project}/locations/{region}/backups/{backupId}
MigrationSource
Subset of the source instance configuration that is available when reading the cluster resource.
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
MigrationSourceType
Denote the type of migration source that created this cluster.
Enums
MIGRATION_SOURCE_TYPE_UNSPECIFIED
Migration source is unknown.
DMS
DMS source means the cluster was created via DMS migration job.
CloudSQLBackupRunSource
The source CloudSQL backup resource.
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
Message describing a BackupDrBackupSource.
JSON representation
{
"backup" : string
}
Fields
backup
string
Required. The name of the backup resource with the format: * projects/{project}/locations/{location}/backupVaults/{backupvault_id}/dataSources/{datasource_id}/backups/{backupId}
MaintenanceVersionSelectionPolicy
Maintenance version selection policy defines the criteria to select the specific maintenance version to which to update the cluster's instances.
Enums
MAINTENANCE_VERSION_SELECTION_POLICY_UNSPECIFIED
The maintenance version selection policy is not specified.
MAINTENANCE_VERSION_SELECTION_POLICY_LATEST
Use the latest available maintenance version.
MAINTENANCE_VERSION_SELECTION_POLICY_DEFAULT
Use the current default maintenance version.
State
Cluster State
Enums
STATE_UNSPECIFIED
The state of the cluster is unknown.
READY
The cluster is active and running.
STOPPED
This is unused. Even when all instances in the cluster are stopped, the cluster remains in READY state.
EMPTY
The cluster is empty and has no associated resources. All instances, associated storage and backups have been deleted.
CREATING
The cluster is being created.
DELETING
The cluster is being deleted.
FAILED
The creation of the cluster failed.
BOOTSTRAPPING
The cluster is bootstrapping with data from some other source. Direct mutations to the cluster (e.g. adding read pool) are not allowed.
MAINTENANCE
The cluster is under maintenance. AlloyDB regularly performs maintenance and upgrades on customer clusters. Updates on the cluster are not allowed while the cluster is in this state.
PROMOTING
The cluster is being promoted.
SWITCHOVER
The cluster has entered switchover state. All updates on cluster and its associated instances are restricted while the cluster is in this state.
ClusterType
Type of Cluster
Enums
CLUSTER_TYPE_UNSPECIFIED
The type of the cluster is unknown.
PRIMARY
Primary cluster that support read and write operations.
SECONDARY
Secondary cluster that is replicating from another region. This only supports read.
NetworkConfig
Metadata related to network configuration.
JSON representation
{
"network" : string ,
"allocatedIpRange" : string
}
Fields
network
string
Optional. The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster. It is specified in the form: projects/{projectNumber}/global/networks/{network_id} . This is required to create a cluster.
allocatedIpRange
string
Optional. Name of the allocated IP range for the private IP AlloyDB cluster, for example: "google-managed-services-default". If set, the instance IPs for this cluster will be created in the allocated range. The range name must comply with RFC 1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? . Field name is intended to be consistent with Cloud SQL.
UserPassword
The username/password for a database user. Used for specifying initial users at cluster creation time.
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
Message describing the user-specified automated backup policy.
All fields in the automated backup policy are optional. Defaults for each field are provided if they are not set.
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
"enabled" : boolean
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
enabled
boolean
Whether automated automated backups are enabled. If not set, defaults to true.
WeeklySchedule
A weekly schedule starts a backup at prescribed start times within a day, for the specified days of the week.
The weekly schedule message is flexible and can be used to create many types of schedules. For example, to have a daily backup that starts at 22:00, configure the startTimes field to have one element "22:00" and the daysOfWeek field to have all seven days of the week.
JSON representation
{
"startTimes" : [
{
object ( TimeOfDay )
}
] ,
"daysOfWeek" : [
enum ( DayOfWeek )
]
}
Fields
startTimes[]
object ( TimeOfDay )
The times during the day to start a backup. The start times are assumed to be in UTC and to be an exact hour (e.g., 04:00:00).
If no start times are provided, a single fixed start time is chosen arbitrarily.
daysOfWeek[]
enum ( DayOfWeek )
The days of the week to perform a backup.
If this field is left empty, the default of every day of the week is used.
TimeBasedRetention
A time based retention policy specifies that all backups within a certain time period should be retained.
JSON representation
{
"retentionPeriod" : string
}
Fields
retentionPeriod
string ( Duration format)
The retention period.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
QuantityBasedRetention
A quantity based policy specifies that a certain number of the most recent successful backups should be retained.
JSON representation
{
"count" : integer
}
Fields
count
integer
The number of backups to retain.
ContinuousBackupConfig
ContinuousBackupConfig describes the continuous backups recovery configurations of a cluster.
JSON representation
{
"recoveryWindowDays" : integer ,
"encryptionConfig" : {
object ( EncryptionConfig )
} ,
"enabled" : boolean
}
Fields
recoveryWindowDays
integer
The number of days that are eligible to restore from using PITR. To support the entire recovery window, backups and logs are retained for one day more than the recovery window. If not set, defaults to 14 days.
encryptionConfig
object ( EncryptionConfig )
The encryption config can be specified to encrypt the backups with a customer-managed encryption key (CMEK). When this field is not specified, the backup will use the cluster's encryption config.
enabled
boolean
Whether ContinuousBackup is enabled.
ContinuousBackupInfo
ContinuousBackupInfo describes the continuous backup properties of a cluster.
JSON representation
{
"encryptionInfo" : {
object ( EncryptionInfo )
} ,
"enabledTime" : string ,
"schedule" : [
enum ( DayOfWeek )
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
enum ( DayOfWeek )
Output only. Days of the week on which a continuous backup is taken.
earliestRestorableTime
string ( Timestamp format)
Output only. The earliest restorable time that can be restored to. If continuous backups and recovery was recently enabled, the earliest restorable time is the creation time of the earliest eligible backup within this cluster's continuous backup recovery window. After a cluster has had continuous backups enabled for the duration of its recovery window, the earliest restorable time becomes "now minus the recovery window". For example, assuming a point in time recovery is attempted at 04/16/2025 3:23:00PM with a 14d recovery window, the earliest restorable time would be 04/02/2025 3:23:00PM. This field is only visible if the CLUSTER_VIEW_CONTINUOUS_BACKUP cluster view is provided.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
SecondaryConfig
Configuration information for the secondary cluster. This should be set if and only if the cluster is of type SECONDARY.
JSON representation
{
"primaryClusterName" : string
}
Fields
primaryClusterName
string
The name of the primary cluster name with the format: * projects/{project}/locations/{region}/clusters/{clusterId}
PrimaryConfig
Configuration for the primary cluster. It has the list of clusters that are replicating from this cluster. This should be set if and only if the cluster is of type PRIMARY.
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
PscConfig contains PSC related configuration at a cluster level.
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
MaintenanceUpdatePolicy defines the policy for system updates.
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
MaintenanceWindow specifies a preferred day and time for maintenance.
JSON representation
{
"day" : enum ( DayOfWeek ) ,
"startTime" : {
object ( TimeOfDay )
}
}
Fields
day
enum ( DayOfWeek )
Preferred day of the week for maintenance, e.g. MONDAY, TUESDAY, etc.
startTime
object ( TimeOfDay )
Preferred time to start the maintenance operation on the specified day. Maintenance will start within 1 hour of this time.
DenyMaintenancePeriod
DenyMaintenancePeriod definition. Excepting emergencies, maintenance will not be scheduled to start within this deny period. The startDate must be less than the endDate.
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
Time in UTC when the deny period starts on startDate and ends on endDate. This can be: * Full time OR * All zeros for 00:00:00 UTC
MaintenanceSchedule
MaintenanceSchedule stores the maintenance schedule generated from the MaintenanceUpdatePolicy, once a maintenance rollout is triggered, if MaintenanceWindow is set, and if there is no conflicting DenyPeriod. The schedule is cleared once the update takes place. This field cannot be manually changed; modify the MaintenanceUpdatePolicy instead.
JSON representation
{
"startTime" : string
}
Fields
startTime
string ( Timestamp format)
Output only. The scheduled start time for the maintenance.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
SubscriptionType
Subscription_type added to distinguish between Standard and Trial subscriptions. By default, a subscription type is considered STANDARD unless explicitly specified.
Enums
SUBSCRIPTION_TYPE_UNSPECIFIED
This is an unknown subscription type. By default, the subscription type is STANDARD.
STANDARD
Standard subscription.
TRIAL
Trial subscription.
TrialMetadata
Contains information and all metadata related to TRIAL clusters.
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
BackupDrInfo
Information about BackupDR protection for this cluster.
JSON representation
{
"previousWindows" : [
{
object ( BackupDrEnabledWindow )
}
] ,
"currentWindow" : {
object ( BackupDrEnabledWindow )
}
}
Fields
previousWindows[]
object ( BackupDrEnabledWindow )
Windows during which BackupDR was enabled for this cluster, along with associated configuration for that window. These are used to determine points-in-time for which restores can be performed.
The windows are ordered with the most recent window last. Windows are mutally exclusive.
Windows which closed more than 1 year ago will be removed from this list.
currentWindow
object ( BackupDrEnabledWindow )
The current BackupDR configuration for this cluster.
If BackupDR protection is not enabled for this cluster, this field will be empty.
BackupDrEnabledWindow
Information about a single window when BackupDR was enabled for this cluster.
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
"disabledTime" : string
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
disabledTime
string ( Timestamp format)
Time when the BackupDR protection for this cluster was disabled.
This field will be empty if this BackupDR window is the currentWindow .
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
DataplexConfig
Configuration for Dataplex integration.
JSON representation
{
"enabled" : boolean
}
Fields
enabled
boolean
This flag controls the integration of AlloyDB for PostgreSQL resources like databases, schemas, and tables with Dataplex. If DataplexConfig isn't specified when you create a cluster, this field defaults to true. Dataplex integration for cluster and instance resources is always enabled and isn't controlled by this flag.
Methods
create
Creates a new Cluster in a given project and location.
createsecondary
Creates a cluster of type SECONDARY in the given location using the primary cluster as the source.
delete
Deletes a single Cluster.
export
Exports data from the cluster.
get
Gets details of a single Cluster.
import
Imports data to the cluster.
list
Lists Clusters in a given project and location.
patch
Updates the parameters of a single Cluster.
promote
Promotes a SECONDARY cluster.
restore
Creates a new Cluster in a given project and location, with a volume restored from the provided source, either a backup ID or a point-in-time and a source cluster.
restoreFromCloudSQL
Restores an AlloyDB cluster from a CloudSQL resource.
switchover
Switches the roles of PRIMARY and SECONDARY clusters without any data loss.
upgrade
Upgrades a single Cluster.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-26 UTC."],[],[]]
