---
title: "REST Resource: projects.locations.jobs \_|\_ Batch \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/batch/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/batch/docs/reference/rest/v1/projects.locations.jobs
  title: "REST Resource: projects.locations.jobs \_|\_ Batch \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Batch
Reference
Send feedback
REST Resource: projects.locations.jobs
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Job
JSON representation
TaskGroup
JSON representation
TaskSpec
JSON representation
Runnable
JSON representation
Container
JSON representation
Script
JSON representation
Barrier
JSON representation
Environment
JSON representation
KMSEnvMap
JSON representation
ComputeResource
JSON representation
LifecyclePolicy
JSON representation
Action
ActionCondition
JSON representation
Volume
JSON representation
NFS
JSON representation
GCS
JSON representation
SchedulingPolicy
AllocationPolicy
JSON representation
LocationPolicy
JSON representation
InstancePolicyOrTemplate
JSON representation
InstancePolicy
JSON representation
ProvisioningModel
Accelerator
JSON representation
Disk
JSON representation
AttachedDisk
JSON representation
ServiceAccount
JSON representation
NetworkPolicy
JSON representation
NetworkInterface
JSON representation
PlacementPolicy
JSON representation
JobStatus
JSON representation
State
TaskGroupStatus
JSON representation
InstanceStatus
JSON representation
LogsPolicy
JSON representation
Destination
CloudLoggingOption
JSON representation
JobNotification
JSON representation
Message
JSON representation
Type
Methods
Resource: Job
The Cloud Batch Job description.
JSON representation
{
"name" : string ,
"uid" : string ,
"priority" : string ,
"taskGroups" : [
{
object ( TaskGroup )
}
] ,
"allocationPolicy" : {
object ( AllocationPolicy )
} ,
"labels" : {
string : string ,
...
} ,
"status" : {
object ( JobStatus )
} ,
"createTime" : string ,
"updateTime" : string ,
"logsPolicy" : {
object ( LogsPolicy )
} ,
"notifications" : [
{
object ( JobNotification )
}
]
}
Fields
name
string
Output only. Job name. For example: "projects/123456/locations/us-central1/jobs/job01".
uid
string
Output only. A system generated unique ID for the Job.
priority
string ( int64 format)
Priority of the Job. The valid value range is [0, 100). Default value is 0. Higher value indicates higher priority. A job with higher priority value is more likely to run earlier if all other requirements are satisfied.
taskGroups[]
object ( TaskGroup )
Required. TaskGroups in the Job. Only one TaskGroup is supported now.
allocationPolicy
object ( AllocationPolicy )
Compute resource allocation for all TaskGroups in the Job.
labels
map (key: string, value: string)
Custom labels to apply to the job and any Cloud Logging LogEntry that it generates.
Use labels to group and describe the resources they are applied to. Batch automatically applies predefined labels and supports multiple labels fields for each job, which each let you apply custom labels to various resources. Label names that start with "goog-" or "google-" are reserved for predefined labels. For more information about labels with Batch, see Organize resources using labels .
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
status
object ( JobStatus )
Output only. Job status. It is read only for users.
createTime
string ( Timestamp format)
Output only. When the Job was created.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. The last time the Job was updated.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
logsPolicy
object ( LogsPolicy )
Log preservation policy for the Job.
notifications[]
object ( JobNotification )
Notification configurations.
TaskGroup
A TaskGroup defines one or more Tasks that all share the same TaskSpec.
JSON representation
{
"name" : string ,
"taskSpec" : {
object ( TaskSpec )
} ,
"taskCount" : string ,
"parallelism" : string ,
"schedulingPolicy" : enum ( SchedulingPolicy ) ,
"taskEnvironments" : [
{
object ( Environment )
}
] ,
"taskCountPerNode" : string ,
"requireHostsFile" : boolean ,
"permissiveSsh" : boolean ,
"runAsNonRoot" : boolean
}
Fields
name
string
Output only. TaskGroup name. The system generates this field based on parent Job name. For example: "projects/123456/locations/us-west1/jobs/job01/taskGroups/group01".
taskSpec
object ( TaskSpec )
Required. Tasks in the group share the same task spec.
taskCount
string ( int64 format)
Number of Tasks in the TaskGroup. Default is 1.
parallelism
string ( int64 format)
Max number of tasks that can run in parallel. Default to min(taskCount, parallel tasks per job limit). See: Job Limits . Field parallelism must be 1 if the schedulingPolicy is IN_ORDER.
schedulingPolicy
enum ( SchedulingPolicy )
Scheduling policy for Tasks in the TaskGroup. The default value is AS_SOON_AS_POSSIBLE.
taskEnvironments[]
object ( Environment )
An array of environment variable mappings, which are passed to Tasks with matching indices. If taskEnvironments is used then taskCount should not be specified in the request (and will be ignored). Task count will be the length of taskEnvironments.
Tasks get a BATCH_TASK_INDEX and BATCH_TASK_COUNT environment variable, in addition to any environment variables set in taskEnvironments, specifying the number of Tasks in the Task's parent TaskGroup, and the specific Task's index in the TaskGroup (0 through BATCH_TASK_COUNT - 1).
taskCountPerNode
string ( int64 format)
Max number of tasks that can be run on a VM at the same time. If not specified, the system will decide a value based on available compute resources on a VM and task requirements.
requireHostsFile
boolean
When true, Batch will populate a file with a list of all VMs assigned to the TaskGroup and set the BATCH_HOSTS_FILE environment variable to the path of that file. Defaults to false. The host file supports up to 1000 VMs.
permissiveSsh
boolean
When true, Batch will configure SSH to allow passwordless login between VMs running the Batch tasks in the same TaskGroup.
runAsNonRoot
boolean
Optional. If not set or set to false, Batch uses the root user to execute runnables. If set to true, Batch runs the runnables using a non-root user. Currently, the non-root user Batch used is generated by OS Login. For more information, see About OS Login .
TaskSpec
Spec of a task
JSON representation
{
"runnables" : [
{
object ( Runnable )
}
] ,
"computeResource" : {
object ( ComputeResource )
} ,
"maxRunDuration" : string ,
"maxRetryCount" : integer ,
"lifecyclePolicies" : [
{
object ( LifecyclePolicy )
}
] ,
"environments" : {
string : string ,
...
} ,
"volumes" : [
{
object ( Volume )
}
] ,
"environment" : {
object ( Environment )
}
}
Fields
runnables[]
object ( Runnable )
Required. The sequence of one or more runnables (executable scripts, executable containers, and/or barriers) for each task in this task group to run. Each task runs this list of runnables in order. For a task to succeed, all of its script and container runnables each must meet at least one of the following conditions:
The runnable exited with a zero status.
The runnable didn't finish, but you enabled its background subfield.
The runnable exited with a non-zero status, but you enabled its ignoreExitStatus subfield.
computeResource
object ( ComputeResource )
ComputeResource requirements.
maxRunDuration
string ( Duration format)
Maximum duration the task should run before being automatically retried (if enabled) or automatically failed. Format the value of this field as a time limit in seconds followed by s —for example, 3600s for 1 hour. The field accepts any value between 0 and the maximum listed for the Duration field type at https://protobuf.dev/reference/protobuf/google.protobuf/#duration ; however, the actual maximum run time for a job will be limited to the maximum run time for a job listed at https://cloud.google.com/batch/quotas#max-job-duration .
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
maxRetryCount
integer
Maximum number of retries on failures. The default, 0, which means never retry. The valid value range is [0, 10].
lifecyclePolicies[]
object ( LifecyclePolicy )
Lifecycle management schema when any task in a task group is failed. Currently we only support one lifecycle policy. When the lifecycle policy condition is met, the action in the policy will execute. If task execution result does not meet with the defined lifecycle policy, we consider it as the default policy. Default policy means if the exit code is 0, exit task. If task ends with non-zero exit code, retry the task with maxRetryCount.
environments (deprecated)
map (key: string, value: string)
This item is deprecated!
Deprecated: please use environment(non-plural) instead.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
volumes[]
object ( Volume )
Volumes to mount before running Tasks using this TaskSpec.
environment
object ( Environment )
Environment variables to set before running the Task.
Runnable
Runnable describes instructions for executing a specific script or container as part of a Task.
JSON representation
{
"displayName" : string ,
"ignoreExitStatus" : boolean ,
"background" : boolean ,
"alwaysRun" : boolean ,
"environment" : {
object ( Environment )
} ,
"timeout" : string ,
"labels" : {
string : string ,
...
} ,
// Union field executable can be only one of the following:
"container" : {
object ( Container )
} ,
"script" : {
object ( Script )
} ,
"barrier" : {
object ( Barrier )
}
// End of list of possible types for union field executable .
}
Fields
displayName
string
Optional. DisplayName is an optional field that can be provided by the caller. If provided, it will be used in logs and other outputs to identify the script, making it easier for users to understand the logs. If not provided the index of the runnable will be used for outputs.
ignoreExitStatus
boolean
Normally, a runnable that returns a non-zero exit status fails and causes the task to fail. However, you can set this field to true to allow the task to continue executing its other runnables even if this runnable fails.
background
boolean
Normally, a runnable that doesn't exit causes its task to fail. However, you can set this field to true to configure a background runnable. Background runnables are allowed continue running in the background while the task executes subsequent runnables. For example, background runnables are useful for providing services to other runnables or providing debugging-support tools like SSH servers.
Specifically, background runnables are killed automatically (if they have not already exited) a short time after all foreground runnables have completed. Even though this is likely to result in a non-zero exit status for the background runnable, these automatic kills are not treated as task failures.
alwaysRun
boolean
By default, after a Runnable fails, no further Runnable are executed. This flag indicates that this Runnable must be run even if the Task has already failed. This is useful for Runnables that copy output files off of the VM or for debugging.
The alwaysRun flag does not override the Task's overall maxRunDuration. If the maxRunDuration has expired then no further Runnables will execute, not even alwaysRun Runnables.
environment
object ( Environment )
Environment variables for this Runnable (overrides variables set for the whole Task or TaskGroup).
timeout
string ( Duration format)
Timeout for this Runnable.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
labels
map (key: string, value: string)
Labels for this Runnable.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
Union field executable . Required. The script, container, or barrier for this runnable to execute. executable can be only one of the following:
container
object ( Container )
Container runnable.
script
object ( Script )
Script runnable.
barrier
object ( Barrier )
Barrier runnable.
Container
Container runnable.
JSON representation
{
"imageUri" : string ,
"commands" : [
string
] ,
"entrypoint" : string ,
"volumes" : [
string
] ,
"options" : string ,
"blockExternalNetwork" : boolean ,
"username" : string ,
"password" : string ,
"enableImageStreaming" : boolean
}
Fields
imageUri
string
Required. The URI to pull the container image from.
commands[]
string
Required for some container images. Overrides the CMD specified in the container. If there is an ENTRYPOINT (either in the container image or with the entrypoint field below) then these commands are appended as arguments to the ENTRYPOINT .
entrypoint
string
Required for some container images. Overrides the ENTRYPOINT specified in the container.
volumes[]
string
Volumes to mount (bind mount) from the host machine files or directories into the container, formatted to match --volume option for the docker run command—for example, /foo:/bar or /foo:/bar:ro .
If the TaskSpec.Volumes field is specified but this field is not, Batch will mount each volume from the host machine to the container with the same mount path by default. In this case, the default mount option for containers will be read-only ( ro ) for existing persistent disks and read-write ( rw ) for other volume types, regardless of the original mount options specified in TaskSpec.Volumes . If you need different mount settings, you can explicitly configure them in this field.
options
string
Required for some container images. Arbitrary additional options to include in the docker run command when running this container—for example, --network host . For the --volume option, use the volumes field for the container.
blockExternalNetwork
boolean
If set to true, external network access to and from container will be blocked, containers that are with blockExternalNetwork as true can still communicate with each other, network cannot be specified in the container.options field.
username
string
Required if the container image is from a private Docker registry. The username to login to the Docker registry that contains the image.
You can either specify the username directly by using plain text or specify an encrypted username by using a Secret Manager secret: projects/*/secrets/*/versions/* . However, using a secret is recommended for enhanced security.
Caution: If you specify the username using plain text, you risk the username being exposed to any users who can view the job or its logs. To avoid this risk, specify a secret that contains the username instead.
Learn more about Secret Manager and using Secret Manager with Batch .
password
string
Required if the container image is from a private Docker registry. The password to login to the Docker registry that contains the image.
For security, it is strongly recommended to specify an encrypted password by using a Secret Manager secret: projects/*/secrets/*/versions/* .
Warning: If you specify the password using plain text, you risk the password being exposed to any users who can view the job or its logs. To avoid this risk, specify a secret that contains the password instead.
Learn more about Secret Manager and using Secret Manager with Batch .
enableImageStreaming
boolean
Optional. If set to true, this container runnable uses Image streaming.
Use Image streaming to allow the runnable to initialize without waiting for the entire container image to download, which can significantly reduce startup time for large container images.
When enableImageStreaming is set to true, the container runtime is containerd instead of Docker. Additionally, this container runnable only supports the following container subfields: imageUri , commands[] , entrypoint , and volumes[] ; any other container subfields are ignored.
For more information about the requirements and limitations for using Image streaming with Batch, see the image-streaming sample on GitHub .
Script
Script runnable.
JSON representation
{
// Union field command can be only one of the following:
"path" : string ,
"text" : string
// End of list of possible types for union field command .
}
Fields
Union field command . Required. The source code for this script runnable. command can be only one of the following:
path
string
The path to a script file that is accessible from the host VM(s).
Unless the script file supports the default #!/bin/sh shell interpreter, you must specify an interpreter by including a [shebang line]( https://en.wikipedia.org/wiki/Shebang_(Unix ) as the first line of the file. For example, to execute the script using bash, include #!/bin/bash as the first line of the file. Alternatively, to execute the script using Python3, include #!/usr/bin/env python3 as the first line of the file.
text
string
The text for a script.
Unless the script text supports the default #!/bin/sh shell interpreter, you must specify an interpreter by including a [shebang line]( https://en.wikipedia.org/wiki/Shebang_(Unix ) at the beginning of the text. For example, to execute the script using bash, include #!/bin/bash\n at the beginning of the text. Alternatively, to execute the script using Python3, include #!/usr/bin/env python3\n at the beginning of the text.
Barrier
A barrier runnable automatically blocks the execution of subsequent runnables until all the tasks in the task group reach the barrier.
JSON representation
{
"name" : string
}
Fields
name
string
Barriers are identified by their index in runnable list. Names are not required, but if present should be an identifier.
Environment
An Environment describes a collection of environment variables to set when executing Tasks.
JSON representation
{
"variables" : {
string : string ,
...
} ,
"secretVariables" : {
string : string ,
...
} ,
"encryptedVariables" : {
object ( KMSEnvMap )
}
}
Fields
variables
map (key: string, value: string)
A map of environment variable names to values.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
secretVariables
map (key: string, value: string)
A map of environment variable names to Secret Manager secret names. The VM will access the named secrets to set the value of each environment variable.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
encryptedVariables
object ( KMSEnvMap )
An encrypted JSON dictionary where the key/value pairs correspond to environment variable names and their values.
KMSEnvMap
JSON representation
{
"keyName" : string ,
"cipherText" : string
}
Fields
keyName
string
The name of the KMS key that will be used to decrypt the cipher text.
cipherText
string
The value of the cipherText response from the encrypt method.
ComputeResource
Compute resource requirements.
ComputeResource defines the amount of resources required for each task. Make sure your tasks have enough resources to successfully run. If you also define the types of resources for a job to use with the InstancePolicyOrTemplate field, make sure both fields are compatible with each other.
JSON representation
{
"cpuMilli" : string ,
"memoryMib" : string ,
"bootDiskMib" : string
}
Fields
cpuMilli
string ( int64 format)
The milliCPU count.
cpuMilli defines the amount of CPU resources per task in milliCPU units. For example, 1000 corresponds to 1 vCPU per task. If undefined, the default value is 2000 .
If you also define the VM's machine type using the machineType in InstancePolicy field or inside the instanceTemplate in the InstancePolicyOrTemplate field, make sure the CPU resources for both fields are compatible with each other and with how many tasks you want to allow to run on the same VM at the same time.
For example, if you specify the n2-standard-2 machine type, which has 2 vCPUs each, you are recommended to set cpuMilli no more than 2000 , or you are recommended to run two tasks on the same VM if you set cpuMilli to 1000 or less.
memoryMib
string ( int64 format)
Memory in MiB.
memoryMib defines the amount of memory per task in MiB units. If undefined, the default value is 2000 . If you also define the VM's machine type using the machineType in InstancePolicy field or inside the instanceTemplate in the InstancePolicyOrTemplate field, make sure the memory resources for both fields are compatible with each other and with how many tasks you want to allow to run on the same VM at the same time.
For example, if you specify the n2-standard-2 machine type, which has 8 GiB each, you are recommended to set memoryMib to no more than 8192 , or you are recommended to run two tasks on the same VM if you set memoryMib to 4096 or less.
bootDiskMib
string ( int64 format)
Extra boot disk size in MiB for each task.
LifecyclePolicy
LifecyclePolicy describes how to deal with task failures based on different conditions.
JSON representation
{
"action" : enum ( Action ) ,
"actionCondition" : {
object ( ActionCondition )
}
}
Fields
action
enum ( Action )
Action to execute when ActionCondition is true. When RETRY_TASK is specified, we will retry failed tasks if we notice any exit code match and fail tasks if no match is found. Likewise, when FAIL_TASK is specified, we will fail tasks if we notice any exit code match and retry tasks if no match is found.
actionCondition
object ( ActionCondition )
Conditions that decide why a task failure is dealt with a specific action.
Action
Action on task failures based on different conditions.
Enums
ACTION_UNSPECIFIED
Action unspecified.
RETRY_TASK
Action that tasks in the group will be scheduled to re-execute.
FAIL_TASK
Action that tasks in the group will be stopped immediately.
ActionCondition
Conditions for actions to deal with task failures.
JSON representation
{
"exitCodes" : [
integer
]
}
Fields
exitCodes[]
integer
Exit codes of a task execution. If there are more than 1 exit codes, when task executes with any of the exit code in the list, the condition is met and the action will be executed.
Volume
Volume describes a volume and parameters for it to be mounted to a VM.
JSON representation
{
"mountPath" : string ,
"mountOptions" : [
string
] ,
// Union field source can be only one of the following:
"nfs" : {
object ( NFS )
} ,
"gcs" : {
object ( GCS )
} ,
"deviceName" : string
// End of list of possible types for union field source .
}
Fields
mountPath
string
The mount path for the volume, e.g. /mnt/disks/share.
mountOptions[]
string
Mount options vary based on the type of storage volume:
For a Cloud Storage bucket, all the mount options provided by the gcsfuse tool are supported.
For an existing persistent disk, all mount options provided by the mount command except writing are supported. This is due to restrictions of multi-writer mode .
For any other disk or a Network File System (NFS), all the mount options provided by the mount command are supported.
Union field source . The source for the volume. source can be only one of the following:
nfs
object ( NFS )
A Network File System (NFS) volume. For example, a Filestore file share.
gcs
object ( GCS )
A Google Cloud Storage (GCS) volume.
deviceName
string
Device name of an attached disk volume, which should align with a deviceName specified by job.allocation_policy.instances[0].policy.disks[i].device_name or defined by the given instance template in job.allocation_policy.instances[0].instance_template.
NFS
Represents an NFS volume.
JSON representation
{
"server" : string ,
"remotePath" : string
}
Fields
server
string
The IP address of the NFS.
remotePath
string
Remote source path exported from the NFS, e.g., "/share".
GCS
Represents a Google Cloud Storage volume.
JSON representation
{
"remotePath" : string
}
Fields
remotePath
string
Remote path, either a bucket name or a subdirectory of a bucket, e.g.: bucket_name, bucket_name/subdirectory/
SchedulingPolicy
How Tasks in the TaskGroup should be scheduled relative to each other.
Enums
SCHEDULING_POLICY_UNSPECIFIED
Unspecified.
AS_SOON_AS_POSSIBLE
Run Tasks as soon as resources are available.
Tasks might be executed in parallel depending on parallelism and taskCount values.
IN_ORDER
Run Tasks sequentially with increased task index.
AllocationPolicy
A Job's resource allocation policy describes when, where, and how compute resources should be allocated for the Job.
JSON representation
{
"location" : {
object ( LocationPolicy )
} ,
"instances" : [
{
object ( InstancePolicyOrTemplate )
}
] ,
"serviceAccount" : {
object ( ServiceAccount )
} ,
"labels" : {
string : string ,
...
} ,
"network" : {
object ( NetworkPolicy )
} ,
"placement" : {
object ( PlacementPolicy )
} ,
"tags" : [
string
]
}
Fields
location
object ( LocationPolicy )
Location where compute resources should be allocated for the Job.
instances[]
object ( InstancePolicyOrTemplate )
Describe instances that can be created by this AllocationPolicy. Only instances[0] is supported now.
serviceAccount
object ( ServiceAccount )
Defines the service account for Batch-created VMs. If omitted, the default Compute Engine service account is used. Must match the service account specified in any used instance template configured in the Batch job.
Includes the following fields: * email: The service account's email address. If not set, the default Compute Engine service account is used. * scopes: Additional OAuth scopes to grant the service account, beyond the default cloud-platform scope. (list of strings)
labels
map (key: string, value: string)
Custom labels to apply to the job and all the Compute Engine resources that both are created by this allocation policy and support labels.
Use labels to group and describe the resources they are applied to. Batch automatically applies predefined labels and supports multiple labels fields for each job, which each let you apply custom labels to various resources. Label names that start with "goog-" or "google-" are reserved for predefined labels. For more information about labels with Batch, see Organize resources using labels .
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
network
object ( NetworkPolicy )
The network policy.
If you define an instance template in the InstancePolicyOrTemplate field, Batch will use the network settings in the instance template instead of this field.
placement
object ( PlacementPolicy )
The placement policy.
tags[]
string
Optional. Tags applied to the VM instances.
The tags identify valid sources or targets for network firewalls. Each tag must be 1-63 characters long, and comply with RFC1035 .
LocationPolicy
JSON representation
{
"allowedLocations" : [
string
]
}
Fields
allowedLocations[]
string
A list of allowed location names represented by internal URLs.
Each location can be a region or a zone. Only one region or multiple zones in one region is supported now. For example, ["regions/us-central1"] allow VMs in any zones in region us-central1. ["zones/us-central1-a", "zones/us-central1-c"] only allow VMs in zones us-central1-a and us-central1-c.
Mixing locations from different regions would cause errors. For example, ["regions/us-central1", "zones/us-central1-a", "zones/us-central1-b", "zones/us-west1-a"] contains locations from two distinct regions: us-central1 and us-west1. This combination will trigger an error.
InstancePolicyOrTemplate
InstancePolicyOrTemplate lets you define the type of resources to use for this job either with an InstancePolicy or an instance template. If undefined, Batch picks the type of VM to use and doesn't include optional VM resources such as GPUs and extra disks.
JSON representation
{
"installGpuDrivers" : boolean ,
"installOpsAgent" : boolean ,
"blockProjectSshKeys" : boolean ,
// Union field policy_template can be only one of the following:
"policy" : {
object ( InstancePolicy )
} ,
"instanceTemplate" : string
// End of list of possible types for union field policy_template .
}
Fields
installGpuDrivers
boolean
Set this field true if you want Batch to help fetch drivers from a third party location and install them for GPUs specified in policy.accelerators or instanceTemplate on your behalf. Default is false.
For Container-Optimized Image cases, Batch will install the accelerator driver following milestones of https://cloud.google.com/container-optimized-os/docs/release-notes . For non Container-Optimized Image cases, following https://github.com/GoogleCloudPlatform/compute-gpu-installation/blob/main/linux/install_gpu_driver.py .
installOpsAgent
boolean
Optional. Set this field true if you want Batch to install Ops Agent on your behalf. Default is false.
blockProjectSshKeys
boolean
Optional. Set this field to true if you want Batch to block project-level SSH keys from accessing this job's VMs. Alternatively, you can configure the job to specify a VM instance template that blocks project-level SSH keys. In either case, Batch blocks project-level SSH keys while creating the VMs for this job.
Batch allows project-level SSH keys for a job's VMs only if all the following are true:
This field is undefined or set to false .
The job's VM instance template (if any) doesn't block project-level SSH keys.
Notably, you can override this behavior by manually updating a VM to block or allow project-level SSH keys. For more information about blocking project-level SSH keys, see the Compute Engine documentation: https://cloud.google.com/compute/docs/connect/restrict-ssh-keys#block-keys
Union field policy_template .
policy_template can be only one of the following:
policy
object ( InstancePolicy )
InstancePolicy.
instanceTemplate
string
Name of an instance template used to create VMs. Named the field as 'instanceTemplate' instead of 'template' to avoid C++ keyword conflict.
Batch only supports global instance templates from the same project as the job. You can specify the global instance template as a full or partial URL.
InstancePolicy
InstancePolicy describes an instance type and resources attached to each VM created by this InstancePolicy.
JSON representation
{
"machineType" : string ,
"minCpuPlatform" : string ,
"provisioningModel" : enum ( ProvisioningModel ) ,
"accelerators" : [
{
object ( Accelerator )
}
] ,
"bootDisk" : {
object ( Disk )
} ,
"disks" : [
{
object ( AttachedDisk )
}
] ,
"reservation" : string
}
Fields
machineType
string
The Compute Engine machine type.
minCpuPlatform
string
The minimum CPU platform. See https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform .
provisioningModel
enum ( ProvisioningModel )
The provisioning model.
accelerators[]
object ( Accelerator )
The accelerators attached to each VM instance.
bootDisk
object ( Disk )
Boot disk to be created and attached to each VM by this InstancePolicy. Boot disk will be deleted when the VM is deleted. Batch API now only supports booting from image.
disks[]
object ( AttachedDisk )
Non-boot disks to be attached for each VM created by this InstancePolicy. New disks will be deleted when the VM is deleted. A non-boot disk is a disk that can be of a device with a file system or a raw storage drive that is not ready for data storage and accessing.
reservation
string
Optional. If not specified (default), VMs will consume any applicable reservation. If "NO_RESERVATION" is specified, VMs will not consume any reservation. Otherwise, if specified, VMs will consume only the specified reservation.
ProvisioningModel
Compute Engine VM instance provisioning model.
Enums
PROVISIONING_MODEL_UNSPECIFIED
Unspecified.
STANDARD
Standard VM.
SPOT
SPOT VM.
PREEMPTIBLE
Preemptible VM (PVM).
Above SPOT VM is the preferable model for preemptible VM instances: the old preemptible VM model (indicated by this field) is the older model, and has been migrated to use the SPOT model as the underlying technology. This old model will still be supported.
This item is deprecated!
RESERVATION_BOUND
Bound to the lifecycle of the reservation in which it is provisioned.
FLEX_START
Instance is provisioned with DWS Flex Start and has limited max run duration.
Accelerator
Accelerator describes Compute Engine accelerators to be attached to the VM.
JSON representation
{
"type" : string ,
"count" : string ,
"installGpuDrivers" : boolean ,
"driverVersion" : string
}
Fields
type
string
The accelerator type. For example, "nvidia-tesla-t4". See gcloud compute accelerator-types list .
count
string ( int64 format)
The number of accelerators of this type.
installGpuDrivers (deprecated)
boolean
This item is deprecated!
Deprecated: please use instances[0].install_gpu_drivers instead.
driverVersion
string
Optional. The NVIDIA GPU driver version that should be installed for this type.
You can define the specific driver version such as "470.103.01", following the driver version requirements in https://cloud.google.com/compute/docs/gpus/install-drivers-gpu#minimum-driver . Batch will install the specific accelerator driver if qualified.
Disk
A new persistent disk or a local ssd. A VM can only have one local SSD setting but multiple local SSD partitions. See https://cloud.google.com/compute/docs/disks#pdspecs and https://cloud.google.com/compute/docs/disks#localssds .
JSON representation
{
"type" : string ,
"sizeGb" : string ,
"diskInterface" : string ,
// Union field data_source can be only one of the following:
"image" : string ,
"snapshot" : string
// End of list of possible types for union field data_source .
}
Fields
type
string
Disk type as shown in gcloud compute disk-types list . For example, local SSD uses type "local-ssd". Persistent disks and boot disks use "pd-balanced", "pd-extreme", "pd-ssd" or "pd-standard". If not specified, "pd-standard" will be used as the default type for non-boot disks, "pd-balanced" will be used as the default type for boot disks.
sizeGb
string ( int64 format)
Disk size in GB.
Non-Boot Disk : If the type specifies a persistent disk, this field is ignored if data_source is set as image or snapshot . If the type specifies a local SSD, this field should be a multiple of 375 GB, otherwise, the final size will be the next greater multiple of 375 GB.
Boot Disk : Batch will calculate the boot disk size based on source image and task requirements if you do not speicify the size. If both this field and the bootDiskMib field in task spec's computeResource are defined, Batch will only honor this field. Also, this field should be no smaller than the source disk's size when the data_source is set as snapshot or image . For example, if you set an image as the data_source field and the image's default disk size 30 GB, you can only use this field to make the disk larger or equal to 30 GB.
diskInterface
string
Local SSDs are available through both "SCSI" and "NVMe" interfaces. If not indicated, "NVMe" will be the default one for local ssds. This field is ignored for persistent disks as the interface is chosen automatically. See https://cloud.google.com/compute/docs/disks/persistent-disks#choose_an_interface .
Union field data_source . A data source from which a PD will be created. data_source can be only one of the following:
image
string
URL for a VM image to use as the data source for this disk. For example, the following are all valid URLs:
Specify the image by its family name: projects/{project}/global/images/family/{image_family}
Specify the image version: projects/{project}/global/images/{imageVersion}
You can also use Batch customized image in short names. The following image values are supported for a boot disk:
batch-debian : use Batch Debian images.
batch-cos : use Batch Container-Optimized images.
batch-hpc-rocky : use Batch HPC Rocky Linux images.
snapshot
string
Name of a snapshot used as the data source. Snapshot is not supported as boot disk now.
AttachedDisk
A new or an existing persistent disk (PD) or a local ssd attached to a VM instance.
JSON representation
{
"deviceName" : string ,
// Union field attached can be only one of the following:
"newDisk" : {
object ( Disk )
} ,
"existingDisk" : string
// End of list of possible types for union field attached .
}
Fields
deviceName
string
Device name that the guest operating system will see. It is used by Runnable.volumes field to mount disks. So please specify the deviceName if you want Batch to help mount the disk, and it should match the deviceName field in volumes.
Union field attached .
attached can be only one of the following:
newDisk
object ( Disk )
existingDisk
string
Name of an existing PD.
ServiceAccount
Carries information about a Google Cloud service account.
JSON representation
{
"email" : string ,
"scopes" : [
string
]
}
Fields
email
string
Email address of the service account.
scopes[]
string
List of scopes to be enabled for this service account.
NetworkPolicy
NetworkPolicy describes VM instance network configurations.
JSON representation
{
"networkInterfaces" : [
{
object ( NetworkInterface )
}
]
}
Fields
networkInterfaces[]
object ( NetworkInterface )
Network configurations.
NetworkInterface
A network interface.
JSON representation
{
"network" : string ,
"subnetwork" : string ,
"noExternalIpAddress" : boolean
}
Fields
network
string
The URL of an existing network resource. You can specify the network as a full or partial URL.
For example, the following are all valid URLs:
https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network }
projects/{project}/global/networks/{network}
global/networks/{network}
subnetwork
string
The URL of an existing subnetwork resource in the network. You can specify the subnetwork as a full or partial URL.
For example, the following are all valid URLs:
https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/subnetworks/{subnetwork }
projects/{project}/regions/{region}/subnetworks/{subnetwork}
regions/{region}/subnetworks/{subnetwork}
noExternalIpAddress
boolean
Default is false (with an external IP address). Required if no external public IP address is attached to the VM. If no external public IP address, additional configuration is required to allow the VM to access Google Services. See https://cloud.google.com/vpc/docs/configure-private-google-access and https://cloud.google.com/nat/docs/gce-example#create-nat for more information.
PlacementPolicy
PlacementPolicy describes a group placement policy for the VMs controlled by this AllocationPolicy.
JSON representation
{
"collocation" : string ,
"maxDistance" : string
}
Fields
collocation
string
UNSPECIFIED vs. COLLOCATED (default UNSPECIFIED). Use COLLOCATED when you want VMs to be located close to each other for low network latency between the VMs. No placement policy will be generated when collocation is UNSPECIFIED.
maxDistance
string ( int64 format)
When specified, causes the job to fail if more than maxDistance logical switches are required between VMs. Batch uses the most compact possible placement of VMs even when maxDistance is not specified. An explicit maxDistance makes that level of compactness a strict requirement. Not yet implemented
JobStatus
Job status.
JSON representation
{
"state" : enum ( State ) ,
"statusEvents" : [
{
object ( StatusEvent )
}
] ,
"taskGroups" : {
string : {
object ( TaskGroupStatus )
} ,
...
} ,
"runDuration" : string
}
Fields
state
enum ( State )
Job state
statusEvents[]
object ( StatusEvent )
Job status events
taskGroups
map (key: string, value: object ( TaskGroupStatus ))
Aggregated task status for each TaskGroup in the Job. The map key is TaskGroup ID.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
runDuration
string ( Duration format)
The duration of time that the Job spent in status RUNNING.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
State
Valid Job states.
Enums
STATE_UNSPECIFIED
Job state unspecified.
QUEUED
Job is admitted (validated and persisted) and waiting for resources.
SCHEDULED
Job is scheduled to run as soon as resource allocation is ready. The resource allocation may happen at a later time but with a high chance to succeed.
RUNNING
Resource allocation has been successful. At least one Task in the Job is RUNNING.
SUCCEEDED
All Tasks in the Job have finished successfully.
FAILED
At least one Task in the Job has failed.
DELETION_IN_PROGRESS
The Job will be deleted, but has not been deleted yet. Typically this is because resources used by the Job are still being cleaned up.
CANCELLATION_IN_PROGRESS
The Job cancellation is in progress, this is because the resources used by the Job are still being cleaned up.
CANCELLED
The Job has been cancelled, the task executions were stopped and the resources were cleaned up.
TaskGroupStatus
Aggregated task status for a TaskGroup.
JSON representation
{
"counts" : {
string : string ,
...
} ,
"instances" : [
{
object ( InstanceStatus )
}
]
}
Fields
counts
map (key: string, value: string ( int64 format))
Count of task in each state in the TaskGroup. The map key is task state name.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
instances[]
object ( InstanceStatus )
Status of instances allocated for the TaskGroup.
InstanceStatus
VM instance status.
JSON representation
{
"machineType" : string ,
"provisioningModel" : enum ( ProvisioningModel ) ,
"taskPack" : string ,
"bootDisk" : {
object ( Disk )
}
}
Fields
machineType
string
The Compute Engine machine type.
provisioningModel
enum ( ProvisioningModel )
The VM instance provisioning model.
taskPack
string ( int64 format)
The max number of tasks can be assigned to this instance type.
bootDisk
object ( Disk )
The VM boot disk.
LogsPolicy
LogsPolicy describes if and how a job's logs are preserved. Logs include information that is automatically written by the Batch service agent and any information that you configured the job's runnables to write to the stdout or stderr streams.
JSON representation
{
"destination" : enum ( Destination ) ,
"logsPath" : string ,
"cloudLoggingOption" : {
object ( CloudLoggingOption )
}
}
Fields
destination
enum ( Destination )
If and where logs should be saved.
logsPath
string
When destination is set to PATH , you must set this field to the path where you want logs to be saved. This path can point to a local directory on the VM or (if congifured) a directory under the mount path of any Cloud Storage bucket, network file system (NFS), or writable persistent disk that is mounted to the job. For example, if the job has a bucket with mountPath set to /mnt/disks/my-bucket , you can write logs to the root directory of the remotePath of that bucket by setting this field to /mnt/disks/my-bucket/ .
cloudLoggingOption
object ( CloudLoggingOption )
Optional. When destination is set to CLOUD_LOGGING , you can optionally set this field to configure additional settings for Cloud Logging.
Destination
The destination (if any) for logs.
Enums
DESTINATION_UNSPECIFIED
(Default) Logs are not preserved.
CLOUD_LOGGING
Logs are streamed to Cloud Logging. Optionally, you can configure additional settings in the cloudLoggingOption field.
PATH
Logs are saved to the file path specified in the logsPath field.
CloudLoggingOption
CloudLoggingOption contains additional settings for Cloud Logging logs generated by Batch job.
JSON representation
{
"useGenericTaskMonitoredResource" : boolean
}
Fields
useGenericTaskMonitoredResource
boolean
Optional. Set this field to true to change the monitored resource type for Cloud Logging logs generated by this Batch job from the batch.googleapis.com/Job type to the formerly used generic_task type.
JobNotification
Notification configurations.
JSON representation
{
"pubsubTopic" : string ,
"message" : {
object ( Message )
}
}
Fields
pubsubTopic
string
The Pub/Sub topic where notifications for the job, like state changes, will be published. If undefined, no Pub/Sub notifications are sent for this job.
Specify the topic using the following format: projects/{project}/topics/{topic} . Notably, if you want to specify a Pub/Sub topic that is in a different project than the job, your administrator must grant your project's Batch service agent permission to publish to that topic.
For more information about configuring Pub/Sub notifications for a job, see https://cloud.google.com/batch/docs/enable-notifications .
message
object ( Message )
The attribute requirements of messages to be sent to this Pub/Sub topic. Without this field, no message will be sent.
Message
Message details. Describe the conditions under which messages will be sent. If no attribute is defined, no message will be sent by default. One message should specify either the job or the task level attributes, but not both. For example, job level: JOB_STATE_CHANGED and/or a specified newJobState; task level: TASK_STATE_CHANGED and/or a specified newTaskState.
JSON representation
{
"type" : enum ( Type ) ,
"newJobState" : enum ( State ) ,
"newTaskState" : enum ( State )
}
Fields
type
enum ( Type )
The message type.
newJobState
enum ( State )
The new job state.
newTaskState
enum ( State )
The new task state.
Type
The message type.
Enums
TYPE_UNSPECIFIED
Unspecified.
JOB_STATE_CHANGED
Notify users that the job state has changed.
TASK_STATE_CHANGED
Notify users that the task state has changed.
Methods
cancel
Cancel a Job.
create
Create a Job.
delete
Delete a Job.
get
Get a Job specified by its resource name.
list
List all Jobs for a project within a region.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-19 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-19 UTC."],[],[]]
