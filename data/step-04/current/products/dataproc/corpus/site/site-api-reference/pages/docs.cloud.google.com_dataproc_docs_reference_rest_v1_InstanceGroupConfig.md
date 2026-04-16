---
title: "InstanceGroupConfig \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/InstanceGroupConfig
  title: "InstanceGroupConfig \_|\_ Managed Service for Apache Spark \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

"Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
Home
Documentation
Data analytics
Managed Service for Apache Spark
Reference
Send feedback
InstanceGroupConfig
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
DiskConfig
JSON representation
AttachedDiskConfig
JSON representation
DiskType
Preemptibility
ManagedGroupConfig
JSON representation
AcceleratorConfig
JSON representation
InstanceFlexibilityPolicy
JSON representation
ProvisioningModelMix
JSON representation
InstanceSelection
JSON representation
InstanceSelectionResult
JSON representation
StartupConfig
JSON representation
The config settings for Compute Engine resources in an instance group, such as a master or worker group.
JSON representation
{
"numInstances" : integer ,
"instanceNames" : [
string
] ,
"imageUri" : string ,
"machineTypeUri" : string ,
"diskConfig" : {
object ( DiskConfig )
} ,
"isPreemptible" : boolean ,
"preemptibility" : enum ( Preemptibility ) ,
"managedGroupConfig" : {
object ( ManagedGroupConfig )
} ,
"accelerators" : [
{
object ( AcceleratorConfig )
}
] ,
"minCpuPlatform" : string ,
"minNumInstances" : integer ,
"instanceFlexibilityPolicy" : {
object ( InstanceFlexibilityPolicy )
} ,
"startupConfig" : {
object ( StartupConfig )
}
}
Fields
numInstances
integer
Optional. The number of VM instances in the instance group. For HA cluster masterConfig groups, must be set to 3 . For standard cluster masterConfig groups, must be set to 1 .
instanceNames[]
string
Output only. The list of instance names. Dataproc derives the names from clusterName , numInstances , and the instance group.
imageUri
string
Optional. The Compute Engine image resource used for cluster instances.
The URI can represent an image or image family.
Image examples:
https://www.googleapis.com/compute/v1/projects/[projectId]/global/images/[image-id]
projects/[projectId]/global/images/[image-id]
image-id
Image family examples. Dataproc will use the most recent image from the family:
https://www.googleapis.com/compute/v1/projects/[projectId]/global/images/family/[custom-image-family-name]
projects/[projectId]/global/images/family/[custom-image-family-name]
If the URI is unspecified, it will be inferred from SoftwareConfig.image_version or the system default.
machineTypeUri
string
Optional. The Compute Engine machine type used for cluster instances.
A full URL, partial URI, or short name are valid. Examples:
https://www.googleapis.com/compute/v1/projects/[projectId]/zones/[zone]/machineTypes/n1-standard-2
projects/[projectId]/zones/[zone]/machineTypes/n1-standard-2
n1-standard-2
Auto Zone Exception : If you are using the Dataproc Auto Zone Placement feature, you must use the short name of the machine type resource, for example, n1-standard-2 .
diskConfig
object ( DiskConfig )
Optional. Disk option config settings.
isPreemptible
boolean
Output only. Specifies that this instance group contains preemptible instances.
preemptibility
enum ( Preemptibility )
Optional. Specifies the preemptibility of the instance group.
The default value for master and worker groups is NON_PREEMPTIBLE . This default cannot be changed.
The default value for secondary instances is PREEMPTIBLE .
managedGroupConfig
object ( ManagedGroupConfig )
Output only. The config for Compute Engine Instance Group Manager that manages this group. This is only used for preemptible instance groups.
accelerators[]
object ( AcceleratorConfig )
Optional. The Compute Engine accelerator configuration for these instances.
minCpuPlatform
string
Optional. Specifies the minimum cpu platform for the Instance Group. See Dataproc -> Minimum CPU Platform .
minNumInstances
integer
Optional. The minimum number of primary worker instances to create. If minNumInstances is set, cluster creation will succeed if the number of primary workers created is at least equal to the minNumInstances number.
Example: Cluster creation request with numInstances = 5 and minNumInstances = 3 :
If 4 VMs are created and 1 instance fails, the failed VM is deleted. The cluster is resized to 4 instances and placed in a RUNNING state.
If 2 instances are created and 3 instances fail, the cluster in placed in an ERROR state. The failed VMs are not deleted.
instanceFlexibilityPolicy
object ( InstanceFlexibilityPolicy )
Optional. Instance flexibility Policy allowing a mixture of VM shapes and provisioning models.
startupConfig
object ( StartupConfig )
Optional. Configuration to handle the startup of instances during cluster create and update process.
DiskConfig
Specifies the config of boot disk and attached disk options for a group of VM instances.
JSON representation
{
"bootDiskType" : string ,
"bootDiskSizeGb" : integer ,
"numLocalSsds" : integer ,
"localSsdInterface" : string ,
"attachedDiskConfigs" : [
{
object ( AttachedDiskConfig )
}
] ,
"bootDiskProvisionedIops" : string ,
"bootDiskProvisionedThroughput" : string
}
Fields
bootDiskType
string
Optional. Type of the boot disk (default is "pd-standard"). Valid values: "pd-balanced" (Persistent Disk Balanced Solid State Drive), "pd-ssd" (Persistent Disk Solid State Drive), or "pd-standard" (Persistent Disk Hard Disk Drive). See Disk types .
bootDiskSizeGb
integer
Optional. Size in GB of the boot disk (default is 500GB).
numLocalSsds
integer
Optional. Number of attached SSDs, from 0 to 8 (default is 0). If SSDs are not attached, the boot disk is used to store runtime logs and HDFS data. If one or more SSDs are attached, this runtime bulk data is spread across them, and the boot disk contains only basic config and installed binaries.
Note: Local SSD options may vary by machine type and number of vCPUs selected.
localSsdInterface
string
Optional. Interface type of local SSDs (default is "scsi"). Valid values: "scsi" (Small Computer System Interface), "nvme" (Non-Volatile Memory Express). See local SSD performance .
attachedDiskConfigs[]
object ( AttachedDiskConfig )
Optional. A list of attached disk configs for a group of VM instances.
bootDiskProvisionedIops
string ( int64 format)
Optional. Indicates how many IOPS to provision for the disk. This sets the number of I/O operations per second that the disk can handle. This field is supported only if bootDiskType is hyperdisk-balanced.
bootDiskProvisionedThroughput
string ( int64 format)
Optional. Indicates how much throughput to provision for the disk. This sets the number of throughput mb per second that the disk can handle. Values must be greater than or equal to 1. This field is supported only if bootDiskType is hyperdisk-balanced.
AttachedDiskConfig
Specifies the config of attached disk options for single VM instance.
JSON representation
{
"diskType" : enum ( DiskType ) ,
"diskSizeGb" : integer ,
"provisionedIops" : string ,
"provisionedThroughput" : string
}
Fields
diskType
enum ( DiskType )
Optional. Disk type.
diskSizeGb
integer
Optional. Disk size in GB.
provisionedIops
string ( int64 format)
Optional. Indicates how many IOPS to provision for the attached disk. This sets the number of I/O operations per second that the disk can handle. See https://cloud.google.com/compute/docs/disks/hyperdisks#hyperdisk-features
provisionedThroughput
string ( int64 format)
Optional. Indicates how much throughput to provision for the attached disk. This sets the number of throughput mb per second that the disk can handle. See https://cloud.google.com/compute/docs/disks/hyperdisks#hyperdisk-features
DiskType
Attached disk type. Currently only supports Hyperdisks. See https://cloud.google.com/compute/docs/disks/hyperdisks . Hyperdisk Balanced High Availability is not supported because that's for cross-zone usages, which is not supported in Dataproc.
Enums
DISK_TYPE_UNSPECIFIED
Required unspecified disk type.
HYPERDISK_BALANCED
Hyperdisk Balanced disk type.
HYPERDISK_EXTREME
Hyperdisk Extreme disk type.
HYPERDISK_ML
Hyperdisk ML disk type.
HYPERDISK_THROUGHPUT
Hyperdisk Throughput disk type.
Preemptibility
Controls the use of preemptible instances within the group.
Enums
PREEMPTIBILITY_UNSPECIFIED
Preemptibility is unspecified, the system will choose the appropriate setting for each instance group.
NON_PREEMPTIBLE
Instances are non-preemptible.
This option is allowed for all instance groups and is the only valid value for Master and Worker instance groups.
PREEMPTIBLE
Instances are preemptible .
This option is allowed only for secondary worker groups.
SPOT
Instances are Spot VMs .
This option is allowed only for secondary worker groups. Spot VMs are the latest version of preemptible VMs , and provide additional features.
ManagedGroupConfig
Specifies the resources used to actively manage an instance group.
JSON representation
{
"instanceTemplateName" : string ,
"instanceGroupManagerName" : string ,
"instanceGroupManagerUri" : string
}
Fields
instanceTemplateName
string
Output only. The name of the Instance Template used for the Managed Instance Group.
instanceGroupManagerName
string
Output only. The name of the Instance Group Manager for this group.
instanceGroupManagerUri
string
Output only. The partial URI to the instance group manager for this group. E.g. projects/my-project/regions/us-central1/instanceGroupManagers/my-igm.
AcceleratorConfig
Specifies the type and number of accelerator cards attached to the instances of an instance. See GPUs on Compute Engine .
JSON representation
{
"acceleratorTypeUri" : string ,
"acceleratorCount" : integer
}
Fields
acceleratorTypeUri
string
Full URL, partial URI, or short name of the accelerator type resource to expose to this instance. See Compute Engine AcceleratorTypes .
Examples:
https://www.googleapis.com/compute/v1/projects/[projectId]/zones/[zone]/acceleratorTypes/nvidia-tesla-t4
projects/[projectId]/zones/[zone]/acceleratorTypes/nvidia-tesla-t4
nvidia-tesla-t4
Auto Zone Exception : If you are using the Dataproc Auto Zone Placement feature, you must use the short name of the accelerator type resource, for example, nvidia-tesla-t4 .
acceleratorCount
integer
The number of the accelerator cards of this type exposed to this instance.
InstanceFlexibilityPolicy
Instance flexibility Policy allowing a mixture of VM shapes and provisioning models.
JSON representation
{
"provisioningModelMix" : {
object ( ProvisioningModelMix )
} ,
"instanceSelectionList" : [
{
object ( InstanceSelection )
}
] ,
"instanceSelectionResults" : [
{
object ( InstanceSelectionResult )
}
] ,
"instanceMachineTypes" : {
string : string ,
...
}
}
Fields
provisioningModelMix
object ( ProvisioningModelMix )
Optional. Defines how the Group selects the provisioning model to ensure required reliability.
instanceSelectionList[]
object ( InstanceSelection )
Optional. List of instance selection options that the group will use when creating new VMs.
instanceSelectionResults[]
object ( InstanceSelectionResult )
Output only. A list of instance selection results in the group.
instanceMachineTypes
map (key: string, value: string)
Output only. A map of instance short name to machine type. The key is the short name of the Compute Engine instance, and the value is the full machine-type name (e.g., 'n1-standard-16'). See Machine types for more information on valid machine type strings.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
ProvisioningModelMix
Defines how Dataproc should create VMs with a mixture of provisioning models.
JSON representation
{
"standardCapacityBase" : integer ,
"standardCapacityPercentAboveBase" : integer
}
Fields
standardCapacityBase
integer
Optional. The base capacity that will always use Standard VMs to avoid risk of more preemption than the minimum capacity you need. Dataproc will create only standard VMs until it reaches standardCapacityBase, then it will start using standardCapacityPercentAboveBase to mix Spot with Standard VMs. eg. If 15 instances are requested and standardCapacityBase is 5, Dataproc will create 5 standard VMs and then start mixing spot and standard VMs for remaining 10 instances.
standardCapacityPercentAboveBase
integer
Optional. The percentage of target capacity that should use Standard VM. The remaining percentage will use Spot VMs. The percentage applies only to the capacity above standardCapacityBase. eg. If 15 instances are requested and standardCapacityBase is 5 and standardCapacityPercentAboveBase is 30, Dataproc will create 5 standard VMs and then start mixing spot and standard VMs for remaining 10 instances. The mix will be 30% standard and 70% spot.
InstanceSelection
Defines machines types and a rank to which the machines types belong.
JSON representation
{
"machineTypes" : [
string
] ,
"rank" : integer
}
Fields
machineTypes[]
string
Optional. Full machine-type names, e.g. "n1-standard-16".
rank
integer
Optional. Preference of this instance selection. Lower number means higher preference. Dataproc will first try to create a VM based on the machine-type with priority rank and fallback to next rank based on availability. Machine types and instance selections with the same priority have the same preference.
InstanceSelectionResult
Defines a mapping from machine types to the number of VMs that are created with each machine type.
JSON representation
{
"machineType" : string ,
"vmCount" : integer
}
Fields
machineType
string
Output only. Full machine-type names, e.g. "n1-standard-16".
vmCount
integer
Output only. Number of VM provisioned with the machineType.
StartupConfig
Configuration to handle the startup of instances during cluster create and update process.
JSON representation
{
"requiredRegistrationFraction" : number
}
Fields
requiredRegistrationFraction
number
Optional. The config setting to enable cluster creation/ updation to be successful only after requiredRegistrationFraction of instances are up and running. This configuration is applicable to only secondary workers for now. The cluster will fail if requiredRegistrationFraction of instances are not available. This will include instance creation, agent registration, and service registration (if enabled).
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
