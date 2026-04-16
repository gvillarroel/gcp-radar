---
title: "AlloyDBCluster \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/reference/overview
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster
  title: "AlloyDBCluster \_|\_ Config Connector \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Config Connector
API and reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
AlloyDBCluster
Property
Value
Google Cloud Service Name
AlloyDB for PostgreSQL
Google Cloud Service Documentation
/alloydb/docs/
Google Cloud REST Resource Name
v1.projects.locations.clusters
Google Cloud REST Resource Documentation
/alloydb/docs/reference/rest/v1/projects.locations.clusters
Config Connector Resource Short Names
gcpalloydbcluster gcpalloydbclusters alloydbcluster
Config Connector Service Name
alloydb.googleapis.com
Config Connector Resource Fully Qualified Name
alloydbclusters.alloydb.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Spec
Schema
automatedBackupPolicy :
backupWindow : string
enabled : boolean
encryptionConfig :
kmsKeyNameRef :
external : string
name : string
namespace : string
labels :
string : string
location : string
quantityBasedRetention :
count : integer
timeBasedRetention :
retentionPeriod : string
weeklySchedule :
daysOfWeek :
- string
startTimes :
- hours : integer
minutes : integer
nanos : integer
seconds : integer
clusterType : string
continuousBackupConfig :
enabled : boolean
encryptionConfig :
kmsKeyNameRef :
external : string
name : string
namespace : string
recoveryWindowDays : integer
databaseVersion : string
deletionPolicy : string
displayName : string
encryptionConfig :
kmsKeyNameRef :
external : string
name : string
namespace : string
initialUser :
password :
value : string
valueFrom :
secretKeyRef :
key : string
name : string
user : string
location : string
maintenanceUpdatePolicy :
maintenanceWindows :
- day : string
startTime :
hours : integer
minutes : integer
nanos : integer
seconds : integer
networkConfig :
allocatedIpRange : string
networkRef :
external : string
name : string
namespace : string
networkRef :
external : string
name : string
namespace : string
projectRef :
external : string
kind : string
name : string
namespace : string
resourceID : string
restoreBackupSource :
backupNameRef :
external : string
name : string
namespace : string
restoreContinuousBackupSource :
clusterRef :
external : string
name : string
namespace : string
pointInTime : string
secondaryConfig :
primaryClusterNameRef :
external : string
name : string
namespace : string
Fields
automatedBackupPolicy
Optional
object
The automated backup policy for this cluster.
If no policy is provided then the default policy will be used. If backups
are supported for the cluster, the default policy takes one backup a day,
has a backup window of 1 hour, and retains backups for 14 days.
For more information on the defaults, consult the
documentation for the message type.
automatedBackupPolicy.backupWindow
Optional
string
The length of the time window during which a backup can be
taken. If a backup does not succeed within this time window, it will be
canceled and considered failed.
The backup window must be at least 5 minutes long. There is no upper bound
on the window. If not set, it defaults to 1 hour.
automatedBackupPolicy.enabled
Optional
boolean
Whether automated automated backups are enabled. If not set, defaults to true.
automatedBackupPolicy.encryptionConfig
Optional
object
Optional. The encryption config can be specified to encrypt the backups with a customer-managed encryption key (CMEK). When this field is not specified, the backup will use the cluster's encryption config.
automatedBackupPolicy.encryptionConfig.kmsKeyNameRef
Optional
object
The fully-qualified resource name of the KMS key. Each Cloud KMS key is regionalized and has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME]
automatedBackupPolicy.encryptionConfig.kmsKeyNameRef.external
Optional
string
A reference to an externally managed KMSCryptoKey. Should be in the format `projects/[kms_project_id]/locations/[region]/keyRings/[key_ring_id]/cryptoKeys/[key]`.
automatedBackupPolicy.encryptionConfig.kmsKeyNameRef.name
Optional
string
The `name` of a `KMSCryptoKey` resource.
automatedBackupPolicy.encryptionConfig.kmsKeyNameRef.namespace
Optional
string
The `namespace` of a `KMSCryptoKey` resource.
automatedBackupPolicy.labels
Optional
map (key: string, value: string)
Labels to apply to backups created using this configuration.
automatedBackupPolicy.location
Optional
string
The location where the backup will be stored. Currently, the only supported
option is to store the backup in the same region as the cluster.
If empty, defaults to the region of the cluster.
automatedBackupPolicy.quantityBasedRetention
Optional
object
Quantity-based Backup retention policy to retain recent backups.
automatedBackupPolicy.quantityBasedRetention.count
Optional
integer
The number of backups to retain.
automatedBackupPolicy.timeBasedRetention
Optional
object
Time-based Backup retention policy.
automatedBackupPolicy.timeBasedRetention.retentionPeriod
Optional
string
The retention period.
automatedBackupPolicy.weeklySchedule
Optional
object
Weekly schedule for the Backup.
automatedBackupPolicy.weeklySchedule.daysOfWeek
Optional
list (string)
The days of the week to perform a backup.
If this field is left empty, the default of every day of the week is
used.
automatedBackupPolicy.weeklySchedule.daysOfWeek[]
Optional
string
automatedBackupPolicy.weeklySchedule.startTimes
Required*
list (object)
The times during the day to start a backup. The start times are assumed
to be in UTC and to be an exact hour (e.g., 04:00:00).
If no start times are provided, a single fixed start time is chosen
arbitrarily.
automatedBackupPolicy.weeklySchedule.startTimes[]
Required*
object
automatedBackupPolicy.weeklySchedule.startTimes[].hours
Optional
integer
Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
automatedBackupPolicy.weeklySchedule.startTimes[].minutes
Optional
integer
Minutes of hour of day. Must be from 0 to 59.
automatedBackupPolicy.weeklySchedule.startTimes[].nanos
Optional
integer
Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
automatedBackupPolicy.weeklySchedule.startTimes[].seconds
Optional
integer
Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
clusterType
Optional
string
The type of cluster. If not set, defaults to PRIMARY. Default value: "PRIMARY" Possible values: ["PRIMARY", "SECONDARY"].
continuousBackupConfig
Optional
object
Optional. Continuous backup configuration for this cluster.
continuousBackupConfig.enabled
Optional
boolean
Whether ContinuousBackup is enabled.
continuousBackupConfig.encryptionConfig
Optional
object
The encryption config can be specified to encrypt the backups with a customer-managed encryption key (CMEK). When this field is not specified, the backup will use the cluster's encryption config.
continuousBackupConfig.encryptionConfig.kmsKeyNameRef
Optional
object
The fully-qualified resource name of the KMS key. Each Cloud KMS key is regionalized and has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME]
continuousBackupConfig.encryptionConfig.kmsKeyNameRef.external
Optional
string
A reference to an externally managed KMSCryptoKey. Should be in the format `projects/[kms_project_id]/locations/[region]/keyRings/[key_ring_id]/cryptoKeys/[key]`.
continuousBackupConfig.encryptionConfig.kmsKeyNameRef.name
Optional
string
The `name` of a `KMSCryptoKey` resource.
continuousBackupConfig.encryptionConfig.kmsKeyNameRef.namespace
Optional
string
The `namespace` of a `KMSCryptoKey` resource.
continuousBackupConfig.recoveryWindowDays
Optional
integer
The number of days that are eligible to restore from using PITR. To support the entire recovery window, backups and logs are retained for one day more than the recovery window. If not set, defaults to 14 days.
databaseVersion
Optional
string
Optional. The database engine major version. This is an optional field and it is populated at the Cluster creation time. If a database version is not supplied at cluster creation time, then a default database version will be used.
deletionPolicy
Optional
string
Policy to determine if the cluster should be deleted forcefully. Deleting a cluster forcefully, deletes the cluster and all its associated instances within the cluster. Deleting a Secondary cluster with a secondary instance REQUIRES setting deletion_policy = "FORCE" otherwise an error is returned. This is needed as there is no support to delete just the secondary instance, and the only way to delete secondary instance is to delete the associated secondary cluster forcefully which also deletes the secondary instance.
displayName
Optional
string
User-settable and human-readable display name for the Cluster.
encryptionConfig
Optional
object
Optional. The encryption config can be specified to encrypt the data disks and other persistent data resources of a cluster with a customer-managed encryption key (CMEK). When this field is not specified, the cluster will then use default encryption scheme to protect the user data.
encryptionConfig.kmsKeyNameRef
Optional
object
The fully-qualified resource name of the KMS key. Each Cloud KMS key is regionalized and has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME]
encryptionConfig.kmsKeyNameRef.external
Optional
string
A reference to an externally managed KMSCryptoKey. Should be in the format `projects/[kms_project_id]/locations/[region]/keyRings/[key_ring_id]/cryptoKeys/[key]`.
encryptionConfig.kmsKeyNameRef.name
Optional
string
The `name` of a `KMSCryptoKey` resource.
encryptionConfig.kmsKeyNameRef.namespace
Optional
string
The `namespace` of a `KMSCryptoKey` resource.
initialUser
Optional
object
Input only. Initial user to setup during cluster creation. Required. If used in `RestoreCluster` this is ignored.
initialUser.password
Required*
object
The initial password for the user.
initialUser.password.value
Optional
string
Value of the field. Cannot be used if 'valueFrom' is specified.
initialUser.password.valueFrom
Optional
object
Source for the field's value. Cannot be used if 'value' is specified.
initialUser.password.valueFrom.secretKeyRef
Optional
object
Reference to a value with the given key in the given Secret in the resource's namespace.
initialUser.password.valueFrom.secretKeyRef.key
Required*
string
Key that identifies the value to be extracted.
initialUser.password.valueFrom.secretKeyRef.name
Required*
string
Name of the Secret to extract a value from.
initialUser.user
Optional
string
The database username.
location
Required
string
Immutable. The location where the alloydb cluster should reside.
maintenanceUpdatePolicy
Optional
object
Optional. The maintenance update policy determines when to allow or deny updates.
maintenanceUpdatePolicy.maintenanceWindows
Optional
list (object)
Preferred windows to perform maintenance. Currently limited to 1.
maintenanceUpdatePolicy.maintenanceWindows[]
Optional
object
maintenanceUpdatePolicy.maintenanceWindows[].day
Required*
string
Preferred day of the week for maintenance, e.g. MONDAY, TUESDAY, etc.
maintenanceUpdatePolicy.maintenanceWindows[].startTime
Required*
object
Preferred time to start the maintenance operation on the specified day. Maintenance will start within 1 hour of this time.
maintenanceUpdatePolicy.maintenanceWindows[].startTime.hours
Optional
integer
Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
maintenanceUpdatePolicy.maintenanceWindows[].startTime.minutes
Optional
integer
Minutes of hour of day. Must be from 0 to 59.
maintenanceUpdatePolicy.maintenanceWindows[].startTime.nanos
Optional
integer
Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
maintenanceUpdatePolicy.maintenanceWindows[].startTime.seconds
Optional
integer
Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
networkConfig
Optional
object
networkConfig.allocatedIpRange
Optional
string
Optional. Name of the allocated IP range for the private IP AlloyDB cluster, for example: "google-managed-services-default". If set, the instance IPs for this cluster will be created in the allocated range. The range name must comply with RFC 1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?`. Field name is intended to be consistent with Cloud SQL.
networkConfig.networkRef
Optional
object
The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster. It is specified in the form: `projects/{project_number}/global/networks/{network_id}`. This is required to create a cluster.
networkConfig.networkRef.external
Optional
string
The value of an externally managed ComputeNetwork resource. Should be in the format "https://www.googleapis.com/compute/{{version}}/projects/{{projectId}}/global/networks/{{networkId}}" or "projects/{{projectId}}/global/networks/{{networkId}}"
networkConfig.networkRef.name
Optional
string
The name of a ComputeNetwork resource.
networkConfig.networkRef.namespace
Optional
string
The namespace of a ComputeNetwork resource.
networkRef
Optional
object
The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster. It is specified in the form: `projects/{project}/global/networks/{network_id}`. This is required to create a cluster. Deprecated, use network_config.network instead.
networkRef.external
Optional
string
The value of an externally managed ComputeNetwork resource. Should be in the format "https://www.googleapis.com/compute/{{version}}/projects/{{projectId}}/global/networks/{{networkId}}" or "projects/{{projectId}}/global/networks/{{networkId}}"
networkRef.name
Optional
string
The name of a ComputeNetwork resource.
networkRef.namespace
Optional
string
The namespace of a ComputeNetwork resource.
projectRef
Required
object
The project that this resource belongs to.
projectRef.external
Optional
string
The `projectID` field of a project, when not managed by Config Connector.
projectRef.kind
Optional
string
The kind of the Project resource; optional but must be `Project` if provided.
projectRef.name
Optional
string
The `name` field of a `Project` resource.
projectRef.namespace
Optional
string
The `namespace` field of a `Project` resource.
resourceID
Optional
string
The AlloyDBCluster name. If not given, the metadata.name will be used.
restoreBackupSource
Optional
object
Immutable. The source when restoring from a backup. Conflicts with 'restoreContinuousBackupSource', both can't be set together.
restoreBackupSource.backupNameRef
Required*
object
Required. The name of the backup resource with the format: * projects/{project}/locations/{region}/backups/{backup_id}
restoreBackupSource.backupNameRef.external
Optional
string
If provided must be in the format `projects/[projectId]/locations/[location]/backups/[backupId]`.
restoreBackupSource.backupNameRef.name
Optional
string
The `metadata.name` field of a `AlloyDBBackup` resource.
restoreBackupSource.backupNameRef.namespace
Optional
string
The `metadata.namespace` field of a `AlloyDBBackup` resource.
restoreContinuousBackupSource
Optional
object
Immutable. The source when restoring via point in time recovery (PITR). Conflicts with 'restoreBackupSource', both can't be set together.
restoreContinuousBackupSource.clusterRef
Required*
object
(Required) The name of the source cluster that this cluster is restored from.
restoreContinuousBackupSource.clusterRef.external
Optional
string
A reference to an externally managed AlloyDBCluster resource. Should be in the format "projects/{{projectID}}/locations/{{location}}/clusters/{{clusterID}}".
restoreContinuousBackupSource.clusterRef.name
Optional
string
The name of a AlloyDBCluster resource.
restoreContinuousBackupSource.clusterRef.namespace
Optional
string
The namespace of a AlloyDBCluster resource.
restoreContinuousBackupSource.pointInTime
Required*
string
Immutable. The point in time that this cluster is restored to, in RFC 3339 format.
secondaryConfig
Optional
object
Cross Region replication config specific to SECONDARY cluster.
secondaryConfig.primaryClusterNameRef
Required*
object
The name of the primary cluster name with the format: * projects/{project}/locations/{region}/clusters/{cluster_id}
secondaryConfig.primaryClusterNameRef.external
Optional
string
A reference to an externally managed AlloyDBCluster resource. Should be in the format "projects/{{projectID}}/locations/{{location}}/clusters/{{clusterID}}".
secondaryConfig.primaryClusterNameRef.name
Optional
string
The name of a AlloyDBCluster resource.
secondaryConfig.primaryClusterNameRef.namespace
Optional
string
The namespace of a AlloyDBCluster resource.
* Field is required when parent field is specified
Status
Schema
backupSource :
- backupName : string
conditions :
- lastTransitionTime : string
message : string
reason : string
status : string
type : string
continuousBackupInfo :
- earliestRestorableTime : string
enabledTime : string
encryptionInfo :
- encryptionType : string
kmsKeyVersions :
- string
schedule :
- string
databaseVersion : string
encryptionInfo :
- encryptionType : string
kmsKeyVersions :
- string
externalRef : string
migrationSource :
- hostPort : string
referenceId : string
sourceType : string
name : string
observedGeneration : integer
observedState :
clusterType : string
databaseVersion : string
uid : string
Fields
backupSource
list (object)
Output only. Cluster created from backup.
backupSource[]
object
backupSource[].backupName
string
The name of the backup resource.
conditions
list (object)
Conditions represent the latest available observations of the object's current state.
conditions[]
object
conditions[].lastTransitionTime
string
Last time the condition transitioned from one status to another.
conditions[].message
string
Human-readable message indicating details about last transition.
conditions[].reason
string
Unique, one-word, CamelCase reason for the condition's last transition.
conditions[].status
string
Status is the status of the condition. Can be True, False, Unknown.
conditions[].type
string
Type is the type of the condition.
continuousBackupInfo
list (object)
Output only. Continuous backup properties for this cluster.
continuousBackupInfo[]
object
continuousBackupInfo[].earliestRestorableTime
string
Output only. The earliest restorable time that can be restored to. Output only field.
continuousBackupInfo[].enabledTime
string
Output only. When ContinuousBackup was most recently enabled. Set to null if ContinuousBackup is not enabled.
continuousBackupInfo[].encryptionInfo
list (object)
Output only. The encryption information for the WALs and backups required for ContinuousBackup.
continuousBackupInfo[].encryptionInfo[]
object
continuousBackupInfo[].encryptionInfo[].encryptionType
string
Output only. Type of encryption.
continuousBackupInfo[].encryptionInfo[].kmsKeyVersions
list (string)
Output only. Cloud KMS key versions that are being used to protect the database or the backup.
continuousBackupInfo[].encryptionInfo[].kmsKeyVersions[]
string
continuousBackupInfo[].schedule
list (string)
Output only. Days of the week on which a continuous backup is taken. Output only field. Ignored if passed into the request.
continuousBackupInfo[].schedule[]
string
databaseVersion
string
The database engine major version. This is an output-only field and it's populated at the Cluster creation time. This field cannot be changed after cluster creation.
encryptionInfo
list (object)
Output only. The encryption information for the cluster.
encryptionInfo[]
object
encryptionInfo[].encryptionType
string
Output only. Type of encryption.
encryptionInfo[].kmsKeyVersions
list (string)
Output only. Cloud KMS key versions that are being used to protect the database or the backup.
encryptionInfo[].kmsKeyVersions[]
string
externalRef
string
A unique specifier for the AlloyDBCluster resource in GCP.
migrationSource
list (object)
Output only. Cluster created via DMS migration.
migrationSource[]
object
migrationSource[].hostPort
string
Output only. The host and port of the on-premises instance in host:port format
migrationSource[].referenceId
string
Output only. Place holder for the external source identifier(e.g DMS job name) that created the cluster.
migrationSource[].sourceType
string
Output only. Type of migration source.
name
string
Output only. The name of the cluster resource with the format: * projects/{project}/locations/{region}/clusters/{cluster_id} where the cluster ID segment should satisfy the regex expression `[a-z0-9-]+`. For more details see https://google.aip.dev/122. The prefix of the cluster resource name is the name of the parent resource: * projects/{project}/locations/{region}
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
observedState
object
ObservedState is the state of the resource as most recently observed in GCP.
observedState.clusterType
string
Output only. The type of the cluster. This is an output-only field and it's populated at the Cluster creation time or the Cluster promotion time. The cluster type is determined by which RPC was used to create the cluster (i.e. `CreateCluster` vs. `CreateSecondaryCluster`
observedState.databaseVersion
string
The database engine major version. This is an output-only field and it's populated at the Cluster creation time. This field cannot be changed after cluster creation.
uid
string
Output only. The system-generated UID of the resource. The UID is assigned when the resource is created, and it is retained until it is deleted.
Sample YAML(s)
Regular Cluster
# Copyright 2023 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
apiVersion : alloydb.cnrm.cloud.google.com/v1beta1
kind : AlloyDBCluster
metadata :
name : alloydbcluster-sample-regular
spec :
location : asia-south2
networkConfig :
networkRef :
name : alloydbcluster-dep-regular
projectRef :
external : ${PROJECT_ID?}
automatedBackupPolicy :
backupWindow : 3600s
encryptionConfig :
kmsKeyNameRef :
name : alloydbcluster-dep-regular
enabled : true
labels :
source : kcc
location : asia-south2
timeBasedRetention :
retentionPeriod : 43200s
weeklySchedule :
daysOfWeek : [ MONDAY ]
startTimes :
- hours : 4
minutes : 0
seconds : 0
nanos : 0
encryptionConfig :
kmsKeyNameRef :
name : alloydbcluster-dep-regular
maintenanceUpdatePolicy :
maintenanceWindows :
- day : WEDNESDAY
startTime :
hours : 12
minutes : 0
seconds : 0
nanos : 0
initialUser :
user : "postgres"
password :
value : "Postgres123"
---
apiVersion : compute.cnrm.cloud.google.com/v1beta1
kind : ComputeAddress
metadata :
name : alloydbcluster-dep-regular
spec :
location : global
addressType : INTERNAL
networkRef :
name : alloydbcluster-dep-regular
prefixLength : 16
purpose : VPC_PEERING
---
apiVersion : compute.cnrm.cloud.google.com/v1beta1
kind : ComputeNetwork
metadata :
name : alloydbcluster-dep-regular
---
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMPartialPolicy
metadata :
name : alloydbcluster-dep-regular
spec :
resourceRef :
apiVersion : kms.cnrm.cloud.google.com/v1beta1
kind : KMSCryptoKey
name : alloydbcluster-dep-regular
bindings :
- role : roles/cloudkms.cryptoKeyEncrypterDecrypter
members :
- memberFrom :
serviceIdentityRef :
name : alloydbcluster-dep-regular
---
apiVersion : kms.cnrm.cloud.google.com/v1beta1
kind : KMSCryptoKey
metadata :
labels :
source : kcc-alloydbcluster-sample
name : alloydbcluster-dep-regular
spec :
keyRingRef :
name : alloydbcluster-dep-regular
---
apiVersion : kms.cnrm.cloud.google.com/v1beta1
kind : KMSKeyRing
metadata :
name : alloydbcluster-dep-regular
spec :
location : asia-south2
---
apiVersion : servicenetworking.cnrm.cloud.google.com/v1beta1
kind : ServiceNetworkingConnection
metadata :
name : alloydbcluster-dep-regular
spec :
networkRef :
name : alloydbcluster-dep-regular
reservedPeeringRanges :
- external : alloydbcluster-dep-regular
service : servicenetworking.googleapis.com
---
apiVersion : serviceusage.cnrm.cloud.google.com/v1beta1
kind : ServiceIdentity
metadata :
name : alloydbcluster-dep-regular
spec :
projectRef :
external : ${PROJECT_ID?}
resourceID : alloydb.googleapis.com
Restored From Backup Cluster
# Copyright 2023 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
apiVersion : alloydb.cnrm.cloud.google.com/v1beta1
kind : AlloyDBCluster
metadata :
name : alloydbcluster-dep-restoredfrombackup
spec :
location : asia-south1
networkConfig :
networkRef :
name : alloydbcluster-dep-restoredfrombackup
projectRef :
external : ${PROJECT_ID?}
---
apiVersion : alloydb.cnrm.cloud.google.com/v1beta1
kind : AlloyDBCluster
metadata :
name : alloydbcluster-sample-restoredfrombackup
spec :
location : asia-south1
networkConfig :
networkRef :
name : alloydbcluster-dep-restoredfrombackup
projectRef :
external : ${PROJECT_ID?}
restoreBackupSource :
backupNameRef :
name : alloydbcluster-dep-restoredfrombackup
---
apiVersion : alloydb.cnrm.cloud.google.com/v1beta1
kind : AlloyDBBackup
metadata :
name : alloydbcluster-dep-restoredfrombackup
spec :
clusterNameRef :
name : alloydbcluster-dep-restoredfrombackup
location : asia-south1
projectRef :
external : ${PROJECT_ID?}
---
apiVersion : alloydb.cnrm.cloud.google.com/v1beta1
kind : AlloyDBInstance
metadata :
name : alloydbcluster-dep-restoredfrombackup
spec :
clusterRef :
name : alloydbcluster-dep-restoredfrombackup
instanceTypeRef :
name : alloydbbackup-dep-restoredfrombackup
---
apiVersion : compute.cnrm.cloud.google.com/v1beta1
kind : ComputeAddress
metadata :
name : alloydbcluster-dep-restoredfrombackup
spec :
location : global
addressType : INTERNAL
networkRef :
name : alloydbcluster-dep-restoredfrombackup
prefixLength : 16
purpose : VPC_PEERING
---
apiVersion : compute.cnrm.cloud.google.com/v1beta1
kind : ComputeNetwork
metadata :
name : alloydbcluster-dep-restoredfrombackup
---
apiVersion : servicenetworking.cnrm.cloud.google.com/v1beta1
kind : ServiceNetworkingConnection
metadata :
name : alloydbcluster-dep-restoredfrombackup
spec :
networkRef :
name : alloydbcluster-dep-restoredfrombackup
reservedPeeringRanges :
- external : alloydbcluster-dep-restoredfrombackup
service : servicenetworking.googleapis.com
Secondary Cluster
# Copyright 2024 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
apiVersion : alloydb.cnrm.cloud.google.com/v1beta1
kind : AlloyDBCluster
metadata :
name : alloydbcluster-dep-secondary
spec :
location : australia-southeast1
networkConfig :
networkRef :
name : alloydbcluster-dep-secondary
projectRef :
external : ${PROJECT_ID?}
encryptionConfig :
kmsKeyNameRef :
name : alloydbcluster-dep1-secondary
initialUser :
user : "postgres"
password :
value : "postgres"
---
apiVersion : alloydb.cnrm.cloud.google.com/v1beta1
kind : AlloyDBCluster
metadata :
name : alloydbcluster-sample-secondary
spec :
location : australia-southeast2
networkConfig :
networkRef :
name : alloydbcluster-dep-secondary
projectRef :
external : ${PROJECT_ID?}
encryptionConfig :
kmsKeyNameRef :
name : alloydbcluster-dep2-secondary
clusterType : "SECONDARY"
secondaryConfig :
primaryClusterNameRef :
name : alloydbcluster-dep-secondary
deletionPolicy : "FORCE"
---
apiVersion : compute.cnrm.cloud.google.com/v1beta1
kind : ComputeAddress
metadata :
name : alloydbcluster-dep-secondary
spec :
location : global
addressType : INTERNAL
networkRef :
name : alloydbcluster-dep-secondary
prefixLength : 16
purpose : VPC_PEERING
---
apiVersion : compute.cnrm.cloud.google.com/v1beta1
kind : ComputeNetwork
metadata :
name : alloydbcluster-dep-secondary
---
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMPartialPolicy
metadata :
name : alloydbcluster-dep1-secondary
spec :
resourceRef :
apiVersion : kms.cnrm.cloud.google.com/v1beta1
kind : KMSCryptoKey
name : alloydbcluster-dep1-secondary
bindings :
- role : roles/cloudkms.cryptoKeyEncrypterDecrypter
members :
- memberFrom :
serviceIdentityRef :
name : alloydbcluster-dep1-secondary
---
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMPartialPolicy
metadata :
name : alloydbcluster-dep2-secondary
spec :
resourceRef :
apiVersion : kms.cnrm.cloud.google.com/v1beta1
kind : KMSCryptoKey
name : alloydbcluster-dep2-secondary
bindings :
- role : roles/cloudkms.cryptoKeyEncrypterDecrypter
members :
- memberFrom :
serviceIdentityRef :
name : alloydbcluster-dep2-secondary
---
apiVersion : kms.cnrm.cloud.google.com/v1beta1
kind : KMSCryptoKey
metadata :
name : alloydbcluster-dep1-secondary
spec :
keyRingRef :
name : alloydbcluster-dep1-secondary
---
apiVersion : kms.cnrm.cloud.google.com/v1beta1
kind : KMSCryptoKey
metadata :
name : alloydbcluster-dep2-secondary
spec :
keyRingRef :
name : alloydbcluster-dep2-secondary
---
apiVersion : kms.cnrm.cloud.google.com/v1beta1
kind : KMSKeyRing
metadata :
name : alloydbcluster-dep1-secondary
spec :
location : australia-southeast1
---
apiVersion : kms.cnrm.cloud.google.com/v1beta1
kind : KMSKeyRing
metadata :
name : alloydbcluster-dep2-secondary
spec :
location : australia-southeast2
---
apiVersion : servicenetworking.cnrm.cloud.google.com/v1beta1
kind : ServiceNetworkingConnection
metadata :
name : alloydbcluster-dep-secondary
spec :
networkRef :
name : alloydbcluster-dep-secondary
reservedPeeringRanges :
- external : alloydbcluster-dep-secondary
service : servicenetworking.googleapis.com
---
apiVersion : serviceusage.cnrm.cloud.google.com/v1beta1
kind : ServiceIdentity
metadata :
name : alloydbcluster-dep1-secondary
spec :
projectRef :
external : ${PROJECT_ID?}
resourceID : alloydb.googleapis.com
---
apiVersion : serviceusage.cnrm.cloud.google.com/v1beta1
kind : ServiceIdentity
metadata :
name : alloydbcluster-dep2-secondary
spec :
projectRef :
external : ${PROJECT_ID?}
resourceID : alloydb.googleapis.com
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
