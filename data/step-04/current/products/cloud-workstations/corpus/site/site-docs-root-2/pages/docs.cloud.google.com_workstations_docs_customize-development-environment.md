---
title: "Customize your development environment \_|\_ Cloud Workstations \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/workstations/docs/customize-development-environment
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/workstations/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/workstations/docs/customize-development-environment
  title: "Customize your development environment \_|\_ Cloud Workstations \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Workstations
Guides
Send feedback
Customize your development environment
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the workstation configuration parameters that allow you to
customize the Cloud Workstations environment, including the VM
type
, home disk size, base container image, and more. In the API, these workstation
configuration parameters are collectively referred to as the
WorkstationConfig .
Before you use these workstation configuration parameters, familiarize yourself
with the following:
How to create an initial workstation configuration
in the Google Cloud console.
The list of preconfigured base
images .
How to customize your base image
and automate container image
rebuilds .
How to boost your workstation .
How to reserve capacity for your
workstation .
REST Resource: projects.locations.workstationClusters.workstationConfigs
Resource: WorkstationConfig
JSON representation
Host
JSON representation
GceInstance
JSON representation
GceShieldedInstanceConfig
JSON representation
GceConfidentialInstanceConfig
JSON representation
Accelerator
JSON representation
BoostConfig
JSON representation
PersistentDirectory
JSON representation
GceRegionalPersistentDisk
JSON representation
ReclaimPolicy
GceHyperdiskBalancedHighAvailability
JSON representation
ReclaimPolicy
EphemeralDirectory
JSON representation
GcePersistentDisk
JSON representation
Container
JSON representation
CustomerEncryptionKey
JSON representation
ReadinessCheck
JSON representation
PortRange
JSON representation
Methods
Resource: WorkstationConfig
A workstation configuration resource in the Cloud Workstations API.
Workstation configurations act as templates for workstations. The workstation configuration defines details such as the workstation virtual machine (VM) instance type, persistent storage, container image defining environment, which IDE or Code Editor to use, and more. Administrators and platform teams can also use Identity and Access Management (IAM) rules to grant access to teams or to individual developers.
JSON representation
{
"name" : string ,
"displayName" : string ,
"uid" : string ,
"reconciling" : boolean ,
"annotations" : {
string : string ,
...
} ,
"labels" : {
string : string ,
...
} ,
"createTime" : string ,
"updateTime" : string ,
"deleteTime" : string ,
"etag" : string ,
"idleTimeout" : string ,
"runningTimeout" : string ,
"maxUsableWorkstations" : integer ,
"host" : {
object ( Host )
} ,
"persistentDirectories" : [
{
object ( PersistentDirectory )
}
] ,
"ephemeralDirectories" : [
{
object ( EphemeralDirectory )
}
] ,
"container" : {
object ( Container )
} ,
"encryptionKey" : {
object ( CustomerEncryptionKey )
} ,
"readinessChecks" : [
{
object ( ReadinessCheck )
}
] ,
"replicaZones" : [
string
] ,
"degraded" : boolean ,
"conditions" : [
{
object ( Status )
}
] ,
"enableAuditAgent" : boolean ,
"disableTcpConnections" : boolean ,
"allowedPorts" : [
{
object ( PortRange )
}
] ,
"grantWorkstationAdminRoleOnCreate" : boolean
}
Fields
name
string
Identifier. Full name of this workstation configuration.
displayName
string
Optional. Human-readable name for this workstation configuration.
uid
string
Output only. A system-assigned unique identifier for this workstation configuration.
reconciling
boolean
Output only. Indicates whether this workstation configuration is currently being updated to match its intended state.
annotations
map (key: string, value: string)
Optional. Client-specified annotations.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
labels
map (key: string, value: string)
Optional. Labels that are applied to the workstation configuration and that are also propagated to the underlying Compute Engine resources.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
createTime
string ( Timestamp format)
Output only. Time when this workstation configuration was created.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. Time when this workstation configuration was most recently updated.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
deleteTime
string ( Timestamp format)
Output only. Time when this workstation configuration was soft-deleted.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
etag
string
Optional. Checksum computed by the server. May be sent on update and delete requests to make sure that the client has an up-to-date value before proceeding.
idleTimeout
string ( Duration format)
Optional. Number of seconds to wait before automatically stopping a workstation after it last received user traffic.
A value of "0s" indicates that Cloud Workstations VMs created with this configuration should never time out due to idleness. Provide duration terminated by s for seconds—for example, "7200s" (2 hours). The default is "1200s" (20 minutes).
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
runningTimeout
string ( Duration format)
Optional. Number of seconds that a workstation can run until it is automatically shut down. We recommend that workstations be shut down daily to reduce costs and so that security updates can be applied upon restart. The idleTimeout and runningTimeout fields are independent of each other. Note that the runningTimeout field shuts down VMs after the specified time, regardless of whether or not the VMs are idle.
Provide duration terminated by s for seconds—for example, "54000s" (15 hours). Defaults to "43200s" (12 hours). A value of "0s" indicates that workstations using this configuration should never time out. If encryptionKey is set, it must be greater than "0s" and less than "86400s" (24 hours).
Warning: A value of "0s" indicates that Cloud Workstations VMs created with this configuration have no maximum running time. This is strongly discouraged because you incur costs and will not pick up security updates.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
maxUsableWorkstations
integer
Optional. Maximum number of workstations under this configuration a user can have workstations.workstation.use permission on.
Only enforced on CreateWorkstation API calls on the user issuing the API request. Can be overridden by:
granting a user workstations.workstationConfigs.exemptMaxUsableWorkstationLimit permission, or
having a user with that permission create a workstation and granting another user workstations.workstation.use permission on that workstation.
If not specified, defaults to 0 , which indicates unlimited.
host
object ( Host )
Optional. Runtime host for the workstation.
persistentDirectories[]
object ( PersistentDirectory )
Optional. Directories to persist across workstation sessions.
ephemeralDirectories[]
object ( EphemeralDirectory )
Optional. Ephemeral directories which won't persist across workstation sessions.
container
object ( Container )
Optional. Container that runs upon startup for each workstation using this workstation configuration.
encryptionKey
object ( CustomerEncryptionKey )
Immutable. Encrypts resources of this workstation configuration using a customer-managed encryption key (CMEK).
If specified, the boot disk of the Compute Engine instance and the persistent disk are encrypted using this encryption key. If this field is not set, the disks are encrypted using a generated key. Customer-managed encryption keys do not protect disk metadata.
If the customer-managed encryption key is rotated, when the workstation instance is stopped, the system attempts to recreate the persistent disk with the new version of the key. Be sure to keep older versions of the key until the persistent disk is recreated. Otherwise, data on the persistent disk might be lost.
If the encryption key is revoked, the workstation session automatically stops within 7 hours.
Immutable after the workstation configuration is created.
readinessChecks[]
object ( ReadinessCheck )
Optional. Readiness checks to perform when starting a workstation using this workstation configuration. Mark a workstation as running only after all specified readiness checks return 200 status codes.
replicaZones[]
string
Optional. Immutable. Specifies the zones used to replicate the VM and disk resources within the region. If set, exactly two zones within the workstation cluster's region must be specified—for example, ['us-central1-a', 'us-central1-f'] . If this field is empty, two default zones within the region are used.
Immutable after the workstation configuration is created.
degraded
boolean
Output only. Whether this workstation configuration is in degraded mode, in which case it may require user action to restore full functionality. The conditions field contains detailed information about the status of the configuration.
conditions[]
object ( Status )
Output only. Status conditions describing the workstation configuration's current state.
enableAuditAgent
boolean
Optional. Whether to enable Linux auditd logging on the workstation. When enabled, a serviceAccount must also be specified that has roles/logging.logWriter and roles/monitoring.metricWriter on the project. Operating system audit logging is distinct from Cloud Audit Logs and Container output logging . Operating system audit logs are available in the Cloud Logging console by querying:
resource.type="gceInstance"
logName:"/logs/linux-auditd"
disableTcpConnections
boolean
Optional. Disables support for plain TCP connections in the workstation. By default the service supports TCP connections through a websocket relay. Setting this option to true disables that relay, which prevents the usage of services that require plain TCP connections, such as SSH. When enabled, all communication must occur over HTTPS or WSS.
allowedPorts[]
object ( PortRange )
Optional. A list of PortRange s specifying single ports or ranges of ports that are externally accessible in the workstation. Allowed ports must be one of 22, 80, or within range 1024-65535. If not specified defaults to ports 22, 80, and ports 1024-65535.
grantWorkstationAdminRoleOnCreate
boolean
Optional. Grant creator of a workstation roles/workstations.policyAdmin role along with roles/workstations.user role on the workstation created by them. This allows workstation users to share access to either their entire workstation, or individual ports. Defaults to false.
Host
Runtime host for a workstation.
JSON representation
{
// Union field config can be only one of the following:
"gceInstance" : {
object ( GceInstance )
}
// End of list of possible types for union field config .
}
Fields
Union field config . Type of host to be used for the workstation's runtime. config can be only one of the following:
gceInstance
object ( GceInstance )
Specifies a Compute Engine instance as the host.
GceInstance
A runtime using a Compute Engine instance.
JSON representation
{
"machineType" : string ,
"serviceAccount" : string ,
"serviceAccountScopes" : [
string
] ,
"tags" : [
string
] ,
"poolSize" : integer ,
"pooledInstances" : integer ,
"disablePublicIpAddresses" : boolean ,
"enableNestedVirtualization" : boolean ,
"shieldedInstanceConfig" : {
object ( GceShieldedInstanceConfig )
} ,
"confidentialInstanceConfig" : {
object ( GceConfidentialInstanceConfig )
} ,
"bootDiskSizeGb" : integer ,
"accelerators" : [
{
object ( Accelerator )
}
] ,
"boostConfigs" : [
{
object ( BoostConfig )
}
] ,
"disableSsh" : boolean ,
"vmTags" : {
string : string ,
...
} ,
"startupScriptUri" : string ,
"instanceMetadata" : {
string : string ,
...
}
}
Fields
machineType
string
Optional. The type of machine to use for VM instances—for example, "e2-standard-4" . For more information about machine types that Cloud Workstations supports, see the list of available machine types .
serviceAccount
string
Optional. The email address of the service account for Cloud Workstations VMs created with this configuration. When specified, be sure that the service account has logging.logEntries.create and monitoring.timeSeries.create permissions on the project so it can write logs out to Cloud Logging. If using a custom container image, the service account must have Artifact Registry Reader permission to pull the specified image.
If you as the administrator want to be able to ssh into the underlying VM, you need to set this value to a service account for which you have the iam.serviceAccounts.actAs permission. Conversely, if you don't want anyone to be able to ssh into the underlying VM, use a service account where no one has that permission.
If not set, VMs run with a service account provided by the Cloud Workstations service, and the image must be publicly accessible.
serviceAccountScopes[]
string
Optional. Scopes to grant to the serviceAccount . When specified, users of workstations under this configuration must have iam.serviceAccounts.actAs on the service account.
tags[]
string
Optional. Network tags to add to the Compute Engine VMs backing the workstations. This option applies network tags to VMs created with this configuration. These network tags enable the creation of firewall rules .
poolSize
integer
Optional. The number of VMs that the system should keep idle so that new workstations can be started quickly for new users. Defaults to 0 in the API.
pooledInstances
integer
Output only. Number of instances currently available in the pool for faster workstation startup.
disablePublicIpAddresses
boolean
Optional. When set to true, disables public IP addresses for VMs. If you disable public IP addresses, you must set up Private Google Access or Cloud NAT on your network. If you use Private Google Access and you use private.googleapis.com or restricted.googleapis.com for Container Registry and Artifact Registry, make sure that you set up DNS records for domains *.gcr.io and *.pkg.dev . Defaults to false (VMs have public IP addresses).
enableNestedVirtualization
boolean
Optional. Whether to enable nested virtualization on Cloud Workstations VMs created using this workstation configuration.
Defaults to false.
Nested virtualization lets you run virtual machine (VM) instances inside your workstation. Before enabling nested virtualization, consider the following important considerations. Cloud Workstations instances are subject to the same restrictions as Compute Engine instances :
Organization policy : projects, folders, or organizations may be restricted from creating nested VMs if the Disable VM nested virtualization constraint is enforced in the organization policy. For more information, see the Compute Engine section, Checking whether nested virtualization is allowed .
Performance : nested VMs might experience a 10% or greater decrease in performance for workloads that are CPU-bound and possibly greater than a 10% decrease for workloads that are input/output bound.
Machine Type : nested virtualization can only be enabled on workstation configurations that specify a machineType in the N1 or N2 machine series.
shieldedInstanceConfig
object ( GceShieldedInstanceConfig )
Optional. A set of Compute Engine Shielded instance options.
confidentialInstanceConfig
object ( GceConfidentialInstanceConfig )
Optional. A set of Compute Engine Confidential VM instance options.
bootDiskSizeGb
integer
Optional. The size of the boot disk for the VM in gigabytes (GB). The minimum boot disk size is 30 GB. Defaults to 50 GB.
accelerators[]
object ( Accelerator )
Optional. A list of the type and count of accelerator cards attached to the instance.
boostConfigs[]
object ( BoostConfig )
Optional. A list of the boost configurations that workstations created using this workstation configuration are allowed to use. If specified, users will have the option to choose from the list of boost configs when starting a workstation.
disableSsh
boolean
Optional. Whether to disable SSH access to the VM.
vmTags
map (key: string, value: string)
Optional. Resource manager tags to be bound to this instance. Tag keys and values have the same definition as resource manager tags . Keys must be in the format tagKeys/{tag_key_id} , and values are in the format tagValues/456 .
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
startupScriptUri
string
Optional. Link to the startup script stored in Cloud Storage. This script will be run on the host workstation VM when the VM is created. The URI must be of the form gs://{bucket-name}/{object-name}. If specifying a startup script, the service account must have Permission to access the bucket and script file in Cloud Storage . Otherwise, the script must be publicly accessible. Note that the service regularly updates the OS version of the host VM, and it is the responsibility of the user to ensure the script stays compatible with the OS version.
instanceMetadata
map (key: string, value: string)
Optional. Custom metadata to apply to Compute Engine instances.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
GceShieldedInstanceConfig
A set of Compute Engine Shielded instance options.
JSON representation
{
"enableSecureBoot" : boolean ,
"enableVtpm" : boolean ,
"enableIntegrityMonitoring" : boolean
}
Fields
enableSecureBoot
boolean
Optional. Whether the instance has Secure Boot enabled.
enableVtpm
boolean
Optional. Whether the instance has the vTPM enabled.
enableIntegrityMonitoring
boolean
Optional. Whether the instance has integrity monitoring enabled.
GceConfidentialInstanceConfig
A set of Compute Engine Confidential VM instance options.
JSON representation
{
"enableConfidentialCompute" : boolean
}
Fields
enableConfidentialCompute
boolean
Optional. Whether the instance has confidential compute enabled.
Accelerator
An accelerator card attached to the instance.
JSON representation
{
"type" : string ,
"count" : integer
}
Fields
type
string
Optional. Type of accelerator resource to attach to the instance, for example, "nvidia-tesla-p100" .
count
integer
Optional. Number of accelerator cards exposed to the instance.
BoostConfig
A boost configuration is a set of resources that a workstation can use to increase its performance. If you specify a boost configuration, upon startup, workstation users can choose to use a VM provisioned under the boost config by passing the boost config ID in the start request. If the workstation user does not provide a boost config ID in the start request, the system will choose a VM from the pool provisioned under the default config.
JSON representation
{
"id" : string ,
"machineType" : string ,
"accelerators" : [
{
object ( Accelerator )
}
] ,
"bootDiskSizeGb" : integer ,
"enableNestedVirtualization" : boolean ,
"poolSize" : integer
}
Fields
id
string
Required. The ID to be used for the boost configuration.
machineType
string
Optional. The type of machine that boosted VM instances will use—for example, e2-standard-4 . For more information about machine types that Cloud Workstations supports, see the list of available machine types . Defaults to e2-standard-4 .
accelerators[]
object ( Accelerator )
Optional. A list of the type and count of accelerator cards attached to the boost instance. Defaults to none .
bootDiskSizeGb
integer
Optional. The size of the boot disk for the VM in gigabytes (GB). The minimum boot disk size is 30 GB. Defaults to 50 GB.
enableNestedVirtualization
boolean
Optional. Whether to enable nested virtualization on boosted Cloud Workstations VMs running using this boost configuration.
Defaults to false.
Nested virtualization lets you run virtual machine (VM) instances inside your workstation. Before enabling nested virtualization, consider the following important considerations. Cloud Workstations instances are subject to the same restrictions as Compute Engine instances :
Organization policy : projects, folders, or organizations may be restricted from creating nested VMs if the Disable VM nested virtualization constraint is enforced in the organization policy. For more information, see the Compute Engine section, Checking whether nested virtualization is allowed .
Performance : nested VMs might experience a 10% or greater decrease in performance for workloads that are CPU-bound and possibly greater than a 10% decrease for workloads that are input/output bound.
Machine Type : nested virtualization can only be enabled on boost configurations that specify a machineType in the N1 or N2 machine series.
poolSize
integer
Optional. The number of boost VMs that the system should keep idle so that workstations can be boosted quickly. Defaults to 0 .
PersistentDirectory
A directory to persist across workstation sessions. Updates to this field will not update existing workstations and will only take effect on new workstations.
JSON representation
{
"mountPath" : string ,
// Union field directory_type can be only one of the following:
"gcePd" : {
object ( GceRegionalPersistentDisk )
} ,
"gceHd" : {
object ( GceHyperdiskBalancedHighAvailability )
}
// End of list of possible types for union field directory_type .
}
Fields
mountPath
string
Optional. Location of this directory in the running workstation.
Union field directory_type . How a persistent directory should be implemented. directory_type can be only one of the following:
gcePd
object ( GceRegionalPersistentDisk )
A PersistentDirectory backed by a Compute Engine persistent disk.
gceHd
object ( GceHyperdiskBalancedHighAvailability )
A PersistentDirectory backed by a Compute Engine hyperdisk high availability disk.
GceRegionalPersistentDisk
A Persistent Directory backed by a Compute Engine regional persistent disk. The persistentDirectories field is repeated, but it may contain only one entry. It creates a persistent disk that mounts to the workstation VM at /home when the session starts and detaches when the session ends. If this field is empty, workstations created with this configuration do not have a persistent home directory.
JSON representation
{
"sizeGb" : integer ,
"fsType" : string ,
"diskType" : string ,
"sourceSnapshot" : string ,
"reclaimPolicy" : enum ( ReclaimPolicy )
}
Fields
sizeGb
integer
Optional. The GB capacity of a persistent home directory for each workstation created with this configuration. Must be empty if sourceSnapshot is set.
Valid values are 10 , 50 , 100 , 200 , 500 , or 1000 . Defaults to 200 . If less than 200 GB, the diskType must be "pd-balanced" or "pd-ssd" .
fsType
string
Optional. Type of file system that the disk should be formatted with. The workstation image must support this file system type. Must be empty if sourceSnapshot is set. Defaults to "ext4" .
diskType
string
Optional. The type of the persistent disk for the home directory. Defaults to "pd-standard" .
sourceSnapshot
string
Optional. Name of the snapshot to use as the source for the disk. If set, sizeGb and fsType must be empty. Must be formatted as ext4 file system with no partitions.
reclaimPolicy
enum ( ReclaimPolicy )
Optional. Whether the persistent disk should be deleted when the workstation is deleted. Valid values are DELETE and RETAIN . Defaults to DELETE .
ReclaimPolicy
Value representing what should happen to the disk after the workstation is deleted.
Enums
RECLAIM_POLICY_UNSPECIFIED
Do not use.
DELETE
Delete the persistent disk when deleting the workstation.
RETAIN
Keep the persistent disk when deleting the workstation. An administrator must manually delete the disk.
GceHyperdiskBalancedHighAvailability
A Persistent Directory backed by a Compute Engine Hyperdisk Balanced High Availability Disk . This is a high-availability block storage solution that offers a balance between performance and cost for most general-purpose workloads.
JSON representation
{
"sizeGb" : integer ,
"sourceSnapshot" : string ,
"reclaimPolicy" : enum ( ReclaimPolicy ) ,
"archiveTimeout" : string
}
Fields
sizeGb
integer
Optional. The GB capacity of a persistent home directory for each workstation created with this configuration. Must be empty if sourceSnapshot is set.
Valid values are 10 , 50 , 100 , 200 , 500 , or 1000 . Defaults to 200 .
sourceSnapshot
string
Optional. Name of the snapshot to use as the source for the disk. If set, sizeGb must be empty. Must be formatted as ext4 file system with no partitions.
reclaimPolicy
enum ( ReclaimPolicy )
Optional. Whether the persistent disk should be deleted when the workstation is deleted. Valid values are DELETE and RETAIN . Defaults to DELETE .
archiveTimeout
string ( Duration format)
Optional. Number of seconds to wait after initially creating or subsequently shutting down the workstation before converting its disk into a snapshot. This generally saves costs at the expense of greater startup time on next workstation start, as the service will need to create a disk from the archival snapshot.
A value of "0s" indicates that the disk will never be archived.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
ReclaimPolicy
Value representing what should happen to the disk after the workstation is deleted.
Enums
RECLAIM_POLICY_UNSPECIFIED
Do not use.
DELETE
Delete the persistent disk when deleting the workstation.
RETAIN
Keep the persistent disk when deleting the workstation. An administrator must manually delete the disk.
EphemeralDirectory
An ephemeral directory which won't persist across workstation sessions. It is freshly created on every workstation start operation.
JSON representation
{
"mountPath" : string ,
// Union field directory_type can be only one of the following:
"gcePd" : {
object ( GcePersistentDisk )
}
// End of list of possible types for union field directory_type .
}
Fields
mountPath
string
Required. Location of this directory in the running workstation.
Union field directory_type . How an ephemeral directory should be implemented. directory_type can be only one of the following:
gcePd
object ( GcePersistentDisk )
An EphemeralDirectory backed by a Compute Engine persistent disk.
GcePersistentDisk
An EphemeralDirectory is backed by a Compute Engine persistent disk.
JSON representation
{
"diskType" : string ,
"sourceSnapshot" : string ,
"sourceImage" : string ,
"readOnly" : boolean
}
Fields
diskType
string
Optional. Type of the disk to use. Defaults to "pd-standard" .
sourceSnapshot
string
Optional. Name of the snapshot to use as the source for the disk. Must be empty if sourceImage is set. Must be empty if readOnly is false. Updating sourceSnapshot will update content in the ephemeral directory after the workstation is restarted.
Only file systems supported by Container-Optimized OS (COS) are explicitly supported. For a list of supported file systems, see the filesystems available in Container-Optimized OS .
This field is mutable.
sourceImage
string
Optional. Name of the disk image to use as the source for the disk. Must be empty if sourceSnapshot is set. Updating sourceImage will update content in the ephemeral directory after the workstation is restarted.
Only file systems supported by Container-Optimized OS (COS) are explicitly supported. For a list of supported file systems, please refer to the COS documentation .
This field is mutable.
readOnly
boolean
Optional. Whether the disk is read only. If true, the disk may be shared by multiple VMs and sourceSnapshot must be set.
Container
A Docker container.
JSON representation
{
"image" : string ,
"command" : [
string
] ,
"args" : [
string
] ,
"env" : {
string : string ,
...
} ,
"workingDir" : string ,
"runAsUser" : integer
}
Fields
image
string
Optional. A Docker container image that defines a custom environment.
Cloud Workstations provides a number of preconfigured images , but you can create your own custom container images . If using a private image, the host.gceInstance.serviceAccount field must be specified in the workstation configuration. If using a custom container image, the service account must have Artifact Registry Reader permission to pull the specified image. Otherwise, the image must be publicly accessible.
command[]
string
Optional. If set, overrides the default ENTRYPOINT specified by the image.
args[]
string
Optional. Arguments passed to the entrypoint.
env
map (key: string, value: string)
Optional. Environment variables passed to the container's entrypoint.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
workingDir
string
Optional. If set, overrides the default DIR specified by the image.
runAsUser
integer
Optional. If set, overrides the USER specified in the image with the given uid.
CustomerEncryptionKey
A customer-managed encryption key (CMEK) for the Compute Engine resources of the associated workstation configuration. Specify the name of your Cloud KMS encryption key and the default service account. We recommend that you use a separate service account and follow Cloud KMS best practices .
JSON representation
{
"kmsKey" : string ,
"kmsKeyServiceAccount" : string
}
Fields
kmsKey
string
Immutable. The name of the Google Cloud KMS encryption key. For example, "projects/PROJECT_ID/locations/REGION/keyRings/KEY_RING/cryptoKeys/KEY_NAME" . The key must be in the same region as the workstation configuration.
kmsKeyServiceAccount
string
Immutable. The service account to use with the specified KMS key. We recommend that you use a separate service account and follow KMS best practices. For more information, see Separation of duties and gcloud kms keys add-iam-policy-binding --member .
ReadinessCheck
A readiness check to be performed on a workstation.
JSON representation
{
"path" : string ,
"port" : integer
}
Fields
path
string
Optional. Path to which the request should be sent.
port
integer
Optional. Port to which the request should be sent.
PortRange
A PortRange defines a range of ports. Both first and last are inclusive. To specify a single port, both first and last should be the same.
JSON representation
{
"first" : integer ,
"last" : integer
}
Fields
first
integer
Required. Starting port number for the current range of ports. Valid ports are 22, 80, and ports within the range 1024-65535.
last
integer
Required. Ending port number for the current range of ports. Valid ports are 22, 80, and ports within the range 1024-65535.
Methods
create
Creates a new workstation configuration.
delete
Deletes the specified workstation configuration.
get
Returns the requested workstation configuration.
getIamPolicy
Gets the access control policy for a resource.
list
Returns all workstation configurations in the specified cluster.
listUsable
Returns all workstation configurations in the specified cluster on which the caller has the "workstations.workstation.create" permission.
patch
Updates an existing workstation configuration.
setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
Returns permissions that a caller has on the specified resource.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
