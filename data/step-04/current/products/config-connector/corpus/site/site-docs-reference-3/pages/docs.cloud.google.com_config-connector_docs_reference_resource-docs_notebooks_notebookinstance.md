---
title: "NotebookInstance \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/notebooks/notebookinstance
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/notebooks/notebookinstance
  title: "NotebookInstance \_|\_ Config Connector \_|\_ Google Cloud Documentation"
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
NotebookInstance
Property
Value
Google Cloud Service Name
AccessContextManager
Google Cloud Service Documentation
/access-context-manager/docs/
Google Cloud REST Resource Name
accesscontextmanager/v1/accessPolicies
Google Cloud REST Resource Documentation
/access-context-manager/docs/reference/rest/v1/accessPolicies
Config Connector Resource Short Names
gcpnotebookinstance gcpnotebookinstances notebookinstance
Config Connector Service Name
accesscontextmanager.googleapis.com
Config Connector Resource Fully Qualified Name
notebookinstances.notebooks.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Spec
Schema
acceleratorConfig :
coreCount : integer
type : string
bootDiskSizeGB : integer
bootDiskType : string
canIPForward : boolean
containerImage :
repository : string
tag : string
customGpuDriverPath : string
dataDiskSizeGB : integer
dataDiskType : string
diskEncryption : string
installGpuDriver : boolean
instanceOwners :
- string
kmsKeyRef :
external : string
name : string
namespace : string
labels :
string : string
machineType : string
metadata :
string : string
networkRef :
external : string
name : string
namespace : string
nicType : string
noProxyAccess : boolean
noPublicIP : boolean
noRemoveDataDisk : boolean
postStartupScript : string
projectRef :
external : string
kind : string
name : string
namespace : string
reservationAffinity :
consumeReservationType : string
key : string
values :
- string
resourceID : string
serviceAccountRef :
external : string
name : string
namespace : string
serviceAccountScopes :
- string
shieldedInstanceConfig :
enableIntegrityMonitoring : boolean
enableSecureBoot : boolean
enableVTPM : boolean
subnetRef :
external : string
name : string
namespace : string
tags :
- string
upgradeHistory :
- action : string
containerImage : string
createTime : string
framework : string
snapshot : string
state : string
targetImage : string
targetVersion : string
version : string
vmImage : string
vmImage :
imageFamily : string
imageName : string
project : string
zone : string
Fields
acceleratorConfig
Optional
object
The hardware accelerator used on this instance. If you use accelerators, make sure that your configuration has [enough vCPUs and memory to support the `machine_type` you have selected](https://cloud.google.com/compute/docs/gpus/#gpus-list).
acceleratorConfig.coreCount
Optional
integer
Count of cores of this accelerator.
acceleratorConfig.type
Optional
string
Type of this accelerator.
bootDiskSizeGB
Optional
integer
Input only. The size of the boot disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). The minimum recommended value is 100 GB. If not specified, this defaults to 100.
bootDiskType
Optional
string
Input only. The type of the boot disk attached to this instance, defaults to standard persistent disk (`PD_STANDARD`).
canIPForward
Optional
boolean
Optional. Flag to enable ip forwarding or not, default false/off. https://cloud.google.com/vpc/docs/using-routes#canipforward
containerImage
Optional
object
Use a container image to start the notebook instance.
containerImage.repository
Optional
string
Required. The path to the container image repository. For example: `gcr.io/{project_id}/{image_name}`
containerImage.tag
Optional
string
The tag of the container image. If not specified, this defaults to the latest tag.
customGpuDriverPath
Optional
string
Specify a custom Cloud Storage path where the GPU driver is stored. If not specified, we'll automatically choose from official GPU drivers.
dataDiskSizeGB
Optional
integer
Input only. The size of the data disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). You can choose the size of the data disk based on how big your notebooks and data are. If not specified, this defaults to 100.
dataDiskType
Optional
string
Input only. The type of the data disk attached to this instance, defaults to standard persistent disk (`PD_STANDARD`).
diskEncryption
Optional
string
Input only. Disk encryption method used on the boot and data disks, defaults to GMEK.
installGpuDriver
Optional
boolean
Whether the end user authorizes Google Cloud to install GPU driver on this instance. If this field is empty or set to false, the GPU driver won't be installed. Only applicable to instances with GPUs.
instanceOwners
Optional
list (string)
Input only. The owner of this instance after creation. Format: `alias@example.com`
Currently supports one owner only. If not specified, all of the service
account users of your VM instance's service account can use
the instance.
instanceOwners[]
Optional
string
kmsKeyRef
Optional
object
Input only. The KMS key used to encrypt the disks, only applicable if disk_encryption is CMEK. Learn more about [using your own encryption keys](/kms/docs/quickstart).
kmsKeyRef.external
Optional
string
A reference to an externally managed KMSCryptoKey. Should be in the format `projects/[kms_project_id]/locations/[region]/keyRings/[key_ring_id]/cryptoKeys/[key]`.
kmsKeyRef.name
Optional
string
The `name` of a `KMSCryptoKey` resource.
kmsKeyRef.namespace
Optional
string
The `namespace` of a `KMSCryptoKey` resource.
labels
Optional
map (key: string, value: string)
Labels to apply to this instance. These can be later modified by the setLabels method.
machineType
Optional
string
Required. The [Compute Engine machine type](https://cloud.google.com/compute/docs/machine-types) of this instance.
metadata
Optional
map (key: string, value: string)
Custom metadata to apply to this instance.
networkRef
Optional
object
The name of the VPC that this instance is in.
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
nicType
Optional
string
Optional. The type of vNIC to be used on this interface. This may be gVNIC or VirtioNet.
noProxyAccess
Optional
boolean
If true, the notebook instance will not register with the proxy.
noPublicIP
Optional
boolean
If true, no public IP will be assigned to this instance.
noRemoveDataDisk
Optional
boolean
Input only. If true, the data disk will not be auto deleted when deleting the instance.
postStartupScript
Optional
string
Path to a Bash script that automatically runs after a notebook instance fully boots up. The path must be a URL or Cloud Storage path (`gs://path-to-file/file-name`).
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
reservationAffinity
Optional
object
Optional. The optional reservation affinity. Setting this field will apply the specified [Zonal Compute Reservation](https://cloud.google.com/compute/docs/instances/reserving-zonal-resources) to this notebook instance.
reservationAffinity.consumeReservationType
Optional
string
Optional. Type of reservation to consume
reservationAffinity.key
Optional
string
Optional. Corresponds to the label key of reservation resource.
reservationAffinity.values
Optional
list (string)
Optional. Corresponds to the label values of reservation resource.
reservationAffinity.values[]
Optional
string
resourceID
Optional
string
The NotebookInstance name. If not given, the metadata.name will be used.
serviceAccountRef
Optional
object
The service account on this instance, giving access to other Google
Cloud services.
You can use any service account within the same project, but you
must have the service account user permission to use the instance.
If not specified, the [Compute Engine default service
account](https://cloud.google.com/compute/docs/access/service-accounts#default_service_account)
is used.
serviceAccountRef.external
Optional
string
The `email` field of an `IAMServiceAccount` resource.
serviceAccountRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
serviceAccountRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
serviceAccountScopes
Optional
list (string)
Optional. The URIs of service account scopes to be included in
Compute Engine instances.
If not specified, the following
[scopes](https://cloud.google.com/compute/docs/access/service-accounts#accesscopesiam)
are defined:
- https://www.googleapis.com/auth/cloud-platform
- https://www.googleapis.com/auth/userinfo.email
If not using default scopes, you need at least:
https://www.googleapis.com/auth/compute
serviceAccountScopes[]
Optional
string
shieldedInstanceConfig
Optional
object
Optional. Shielded VM configuration. [Images using supported Shielded VM features](https://cloud.google.com/compute/docs/instances/modifying-shielded-vm).
shieldedInstanceConfig.enableIntegrityMonitoring
Optional
boolean
Defines whether the instance has integrity monitoring enabled.
Enables monitoring and attestation of the boot integrity of the instance.
The attestation is performed against the integrity policy baseline. This
baseline is initially derived from the implicitly trusted boot image when
the instance is created. Enabled by default.
shieldedInstanceConfig.enableSecureBoot
Optional
boolean
Defines whether the instance has Secure Boot enabled.
Secure Boot helps ensure that the system only runs authentic software by
verifying the digital signature of all boot components, and halting the
boot process if signature verification fails. Disabled by default.
shieldedInstanceConfig.enableVTPM
Optional
boolean
Defines whether the instance has the vTPM enabled. Enabled by default.
subnetRef
Optional
object
The name of the subnet that this instance is in.
subnetRef.external
Optional
string
The ComputeSubnetwork selflink of form "projects/{{project}}/regions/{{region}}/subnetworks/{{name}}", when not managed by Config Connector.
subnetRef.name
Optional
string
The `name` field of a `ComputeSubnetwork` resource.
subnetRef.namespace
Optional
string
The `namespace` field of a `ComputeSubnetwork` resource.
tags
Optional
list (string)
Optional. The Compute Engine tags to add to runtime (see [Tagging instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)).
tags[]
Optional
string
upgradeHistory
Optional
list (object)
The upgrade history of this instance.
upgradeHistory[]
Optional
object
upgradeHistory[].action
Optional
string
Action. Rolloback or Upgrade.
upgradeHistory[].containerImage
Optional
string
The container image before this instance upgrade.
upgradeHistory[].createTime
Optional
string
The time that this instance upgrade history entry is created.
upgradeHistory[].framework
Optional
string
The framework of this notebook instance.
upgradeHistory[].snapshot
Optional
string
The snapshot of the boot disk of this notebook instance before upgrade.
upgradeHistory[].state
Optional
string
The state of this instance upgrade history entry.
upgradeHistory[].targetImage
Optional
string
Target VM Image. Format: `ainotebooks-vm/project/image-name/name`.
upgradeHistory[].targetVersion
Optional
string
Target VM Version, like m63.
upgradeHistory[].version
Optional
string
The version of the notebook instance before this upgrade.
upgradeHistory[].vmImage
Optional
string
The VM image before this instance upgrade.
vmImage
Optional
object
Use a Compute Engine VM image to start the notebook instance.
vmImage.imageFamily
Optional
string
Use this VM image family to find the image; the newest image in this family will be used.
vmImage.imageName
Optional
string
Use VM image name to find the image.
vmImage.project
Optional
string
Required. The name of the Google Cloud project that this VM image belongs to. Format: `{project_id}`
zone
Required
string
Immutable. The location where the notebook instance should reside.
Status
Schema
conditions :
- lastTransitionTime : string
message : string
reason : string
status : string
type : string
externalRef : string
observedGeneration : integer
observedState :
createTime : string
creator : string
disks :
- autoDelete : boolean
boot : boolean
deviceName : string
diskSizeGB : integer
guestOSFeatures :
- type : string
index : integer
interface : string
kind : string
licenses :
- string
mode : string
source : string
type : string
proxyURI : string
state : string
updateTime : string
Fields
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
externalRef
string
A unique specifier for the NotebookInstance resource in Google Cloud.
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
observedState
object
ObservedState is the state of the resource as most recently observed in Google Cloud.
observedState.createTime
string
Output only. Instance creation time.
observedState.creator
string
Output only. Email address of entity that sent original CreateInstance request.
observedState.disks
list (object)
Output only. Attached disks to notebook instance.
observedState.disks[]
object
observedState.disks[].autoDelete
boolean
Indicates whether the disk will be auto-deleted when the instance is deleted (but not when the disk is detached from the instance).
observedState.disks[].boot
boolean
Indicates that this is a boot disk. The virtual machine will use the first partition of the disk for its root filesystem.
observedState.disks[].deviceName
string
Indicates a unique device name of your choice that is reflected into the
`/dev/disk/by-id/google-*` tree of a Linux operating system running
within the instance. This name can be used to reference the device for
mounting, resizing, and so on, from within the instance.
If not specified, the server chooses a default device name to apply to
this disk, in the form persistent-disk-x, where x is a number assigned by
Google Compute Engine.This field is only applicable for persistent disks.
observedState.disks[].diskSizeGB
integer
Indicates the size of the disk in base-2 GB.
observedState.disks[].guestOSFeatures
list (object)
Indicates a list of features to enable on the guest operating system. Applicable only for bootable images. Read Enabling guest operating system features to see a list of available options.
observedState.disks[].guestOSFeatures[]
object
observedState.disks[].guestOSFeatures[].type
string
The ID of a supported feature. Read Enabling guest operating system
features to see a list of available options.
Valid values:
* `FEATURE_TYPE_UNSPECIFIED`
* `MULTI_IP_SUBNET`
* `SECURE_BOOT`
* `UEFI_COMPATIBLE`
* `VIRTIO_SCSI_MULTIQUEUE`
* `WINDOWS`
observedState.disks[].index
integer
A zero-based index to this disk, where 0 is reserved for the boot disk. If you have many disks attached to an instance, each disk would have a unique index number.
observedState.disks[].interface
string
Indicates the disk interface to use for attaching this disk, which is
either SCSI or NVME. The default is SCSI. Persistent disks must always
use SCSI and the request will fail if you attempt to attach a persistent
disk in any other format than SCSI. Local SSDs can use either NVME or
SCSI. For performance characteristics of SCSI over NVMe, see Local SSD
performance.
Valid values:
* `NVME`
* `SCSI`
observedState.disks[].kind
string
Type of the resource. Always compute#attachedDisk for attached disks.
observedState.disks[].licenses
list (string)
A list of publicly visible licenses. Reserved for Google's use. A License represents billing and aggregate usage data for public and marketplace images.
observedState.disks[].licenses[]
string
observedState.disks[].mode
string
The mode in which to attach this disk, either `READ_WRITE` or
`READ_ONLY`. If not specified, the default is to attach the disk in
`READ_WRITE` mode. Valid values:
* `READ_ONLY`
* `READ_WRITE`
observedState.disks[].source
string
Indicates a valid partial or full URL to an existing Persistent Disk resource.
observedState.disks[].type
string
Indicates the type of the disk, either `SCRATCH` or `PERSISTENT`.
Valid values:
* `PERSISTENT`
* `SCRATCH`
observedState.proxyURI
string
Output only. The proxy endpoint that is used to access the Jupyter notebook.
observedState.state
string
Output only. The state of this instance.
observedState.updateTime
string
Output only. Instance update time.
Sample YAML(s)
Typical Use Case
# Copyright 2025 Google LLC
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
apiVersion : notebooks.cnrm.cloud.google.com/v1alpha1
kind : NotebookInstance
metadata :
name : notebookinstance-sample-shielded
spec :
projectRef :
external : projects/${PROJECT_ID?}
zone : us-central1-a
machineType : n1-standard-1
containerImage :
repository : gcr.io/deeplearning-platform-release/base-cpu
instanceOwners :
- ${PROJECT_NUMBER?}-compute@developer.gserviceaccount.com
kmsKeyRef :
external : "projects/${PROJECT_ID?}/locations/us-central1/keyRings/notebookinstance-dep-shielded/cryptoKeys/notebookinstance-dep-shielded"
installGpuDriver : true
bootDiskType : PD_SSD
bootDiskSizeGB : 100
dataDiskType : PD_SSD
dataDiskSizeGB : 200
noRemoveDataDisk : true
diskEncryption : GMEK
shieldedInstanceConfig :
enableSecureBoot : true
enableVTPM : true
enableIntegrityMonitoring : true
postStartupScript : gs://config-connector-samples/notebooks/notebook-instance.sh
noPublicIP : true
noProxyAccess : true
networkRef :
name : notebookinstance-dep-shielded
subnetRef :
name : notebookinstance-dep1-shielded
nicType : UNSPECIFIED_NIC_TYPE
serviceAccountRef :
name : notebookinstance-dep-shielded
serviceAccountScopes :
- https://www.googleapis.com/auth/devstorage.read_only
- https://www.googleapis.com/auth/logging.write
- https://www.googleapis.com/auth/monitoring.write
- https://www.googleapis.com/auth/service.management.readonly
- https://www.googleapis.com/auth/servicecontrol
- https://www.googleapis.com/auth/trace.append
labels :
environment : development
team : config-connector
metadata :
enable-os-config : "true"
tags :
- tag1
- tag2
reservationAffinity :
consumeReservationType : TYPE_UNSPECIFIED
---
apiVersion : compute.cnrm.cloud.google.com/v1beta1
kind : ComputeNetwork
metadata :
name : notebookinstance-dep-shielded
---
apiVersion : compute.cnrm.cloud.google.com/v1beta1
kind : ComputeSubnetwork
metadata :
name : notebookinstance-dep1-shielded
annotations :
cnrm.cloud.google.com/project-id : ${PROJECT_ID?}
spec :
ipCidrRange : 10.0.0.0/16
region : us-west3
networkRef :
name : notebookinstance-dep-shielded
---
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMPartialPolicy
metadata :
name : notebookinstance-dep-shielded
spec :
resourceRef :
apiVersion : kms.cnrm.cloud.google.com/v1beta1
kind : KMSCryptoKey
name : notebookinstance-dep-shielded
bindings :
- role : roles/cloudkms.cryptoKeyEncrypterDecrypter
members :
- member : serviceAccount:service-${PROJECT_NUMBER?}@gcp-sa-notebooks.iam.gserviceaccount.com
---
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMServiceAccount
metadata :
name : notebookinstance-dep-shielded
---
apiVersion : kms.cnrm.cloud.google.com/v1beta1
kind : KMSCryptoKey
metadata :
labels :
source : kcc-notebookinstance-sample
name : notebookinstance-dep-shielded
spec :
keyRingRef :
name : notebookinstance-dep-shielded
---
apiVersion : kms.cnrm.cloud.google.com/v1beta1
kind : KMSKeyRing
metadata :
name : notebookinstance-dep-shielded
spec :
location : us-central1
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
