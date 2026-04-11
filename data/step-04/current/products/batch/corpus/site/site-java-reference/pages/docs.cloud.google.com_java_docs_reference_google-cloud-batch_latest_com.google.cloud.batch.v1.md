---
title: "Package com.google.cloud.batch.v1 (0.88.0) \_|\_ Java client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/com.google.cloud.batch.v1
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-batch/latest/com.google.cloud.batch.v1
  title: "Package com.google.cloud.batch.v1 (0.88.0) \_|\_ Java client libraries \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Java
Client libraries
Send feedback
Package com.google.cloud.batch.v1 (0.88.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.88.0 (latest)
0.87.0
0.85.0
0.83.0
0.82.0
0.81.0
0.80.0
0.78.0
0.76.0
0.75.0
0.74.0
0.73.0
0.72.0
0.70.0
0.68.0
0.67.0
0.64.0
0.63.0
0.62.0
0.60.0
0.59.0
0.58.0
0.57.0
0.56.0
0.55.0
0.54.0
0.53.0
0.52.0
0.51.0
0.49.0
0.48.0
0.47.0
0.46.0
0.45.0
0.44.0
0.43.0
0.42.0
0.41.0
0.40.0
0.39.0
0.37.0
0.36.0
0.35.0
0.34.0
0.33.0
0.32.0
0.31.0
0.30.0
0.29.0
0.28.0
0.27.0
0.24.0
0.23.0
0.22.0
0.21.0
0.20.0
0.19.0
0.18.0
0.17.0
0.16.0
0.15.0
0.14.0
0.13.0
0.12.0
0.11.0
0.10.0
0.9.0
0.8.0
0.7.0
0.6.0
0.5.0
0.4.0
0.3.2
0.2.2
0.1.1
GitHub Repository
Client Classes
Client classes are the main entry point to using a package.
They contain several variations of Java methods for each of the API's methods.
Client
Description
com. google. cloud. batch. v1. Batch Service Client
Service Description: Google Batch Service. The service manages user submitted batch jobs and
allocates Google Compute Engine VM instances to run the jobs.
This class provides the ability to make remote calls to the backing service through method
Settings Classes
Settings classes can be used to configure credentials, endpoints, and retry settings for a Client.
Settings
Description
com. google. cloud. batch. v1. Batch Service Settings
Settings class to configure an instance of BatchServiceClient .
The default instance has everything set to sensible defaults:
Classes
Class
Description
com. google. cloud. batch. v1. Allocation Policy
A Job's resource allocation policy describes when, where, and how compute
resources should be allocated for the Job.
com. google. cloud. batch. v1. Allocation Policy. Accelerator
Accelerator describes Compute Engine accelerators to be attached to the VM.
com. google. cloud. batch. v1. Allocation Policy. Accelerator. Builder
Accelerator describes Compute Engine accelerators to be attached to the VM.
com. google. cloud. batch. v1. Allocation Policy. Attached Disk
A new or an existing persistent disk (PD) or a local ssd attached to a VM
instance.
com. google. cloud. batch. v1. Allocation Policy. Attached Disk. Builder
A new or an existing persistent disk (PD) or a local ssd attached to a VM
instance.
com. google. cloud. batch. v1. Allocation Policy. Builder
A Job's resource allocation policy describes when, where, and how compute
resources should be allocated for the Job.
com. google. cloud. batch. v1. Allocation Policy. Disk
A new persistent disk or a local ssd.
A VM can only have one local SSD setting but multiple local SSD partitions.
See https://cloud.google.com/compute/docs/disks#pdspecs and
com. google. cloud. batch. v1. Allocation Policy. Disk. Builder
A new persistent disk or a local ssd.
A VM can only have one local SSD setting but multiple local SSD partitions.
See https://cloud.google.com/compute/docs/disks#pdspecs and
com. google. cloud. batch. v1. Allocation Policy. Instance Policy
InstancePolicy describes an instance type and resources attached to each VM
created by this InstancePolicy.
com. google. cloud. batch. v1. Allocation Policy. Instance Policy. Builder
InstancePolicy describes an instance type and resources attached to each VM
created by this InstancePolicy.
com. google. cloud. batch. v1. Allocation Policy. Instance Policy Or Template
InstancePolicyOrTemplate lets you define the type of resources to use for
this job either with an InstancePolicy or an instance template.
If undefined, Batch picks the type of VM to use and doesn't include
com. google. cloud. batch. v1. Allocation Policy. Instance Policy Or Template. Builder
InstancePolicyOrTemplate lets you define the type of resources to use for
this job either with an InstancePolicy or an instance template.
If undefined, Batch picks the type of VM to use and doesn't include
com. google. cloud. batch. v1. Allocation Policy. Location Policy
Protobuf type google.cloud.batch.v1.AllocationPolicy.LocationPolicy
com. google. cloud. batch. v1. Allocation Policy. Location Policy. Builder
Protobuf type google.cloud.batch.v1.AllocationPolicy.LocationPolicy
com. google. cloud. batch. v1. Allocation Policy. Network Interface
A network interface.
com. google. cloud. batch. v1. Allocation Policy. Network Interface. Builder
A network interface.
com. google. cloud. batch. v1. Allocation Policy. Network Policy
NetworkPolicy describes VM instance network configurations.
com. google. cloud. batch. v1. Allocation Policy. Network Policy. Builder
NetworkPolicy describes VM instance network configurations.
com. google. cloud. batch. v1. Allocation Policy. Placement Policy
PlacementPolicy describes a group placement policy for the VMs controlled
by this AllocationPolicy.
com. google. cloud. batch. v1. Allocation Policy. Placement Policy. Builder
PlacementPolicy describes a group placement policy for the VMs controlled
by this AllocationPolicy.
com. google. cloud. batch. v1. Batch Proto
com. google. cloud. batch. v1. Batch Service Client. List Jobs Fixed Size Collection
com. google. cloud. batch. v1. Batch Service Client. List Jobs Page
com. google. cloud. batch. v1. Batch Service Client. List Jobs Paged Response
com. google. cloud. batch. v1. Batch Service Client. List Locations Fixed Size Collection
com. google. cloud. batch. v1. Batch Service Client. List Locations Page
com. google. cloud. batch. v1. Batch Service Client. List Locations Paged Response
com. google. cloud. batch. v1. Batch Service Client. List Tasks Fixed Size Collection
com. google. cloud. batch. v1. Batch Service Client. List Tasks Page
com. google. cloud. batch. v1. Batch Service Client. List Tasks Paged Response
com. google. cloud. batch. v1. Batch Service Grpc
Google Batch Service.
The service manages user submitted batch jobs and allocates Google Compute
Engine VM instances to run the jobs.
com. google. cloud. batch. v1. Batch Service Grpc. Batch Service Impl Base
Base class for the server implementation of the service BatchService.
Google Batch Service.
com. google. cloud. batch. v1. Batch Service Settings. Builder
Builder for BatchServiceSettings.
com. google. cloud. batch. v1. Cancel Job Request
CancelJob Request.
com. google. cloud. batch. v1. Cancel Job Request. Builder
CancelJob Request.
com. google. cloud. batch. v1. Cancel Job Response
Response to the CancelJob request.
com. google. cloud. batch. v1. Cancel Job Response. Builder
Response to the CancelJob request.
com. google. cloud. batch. v1. Compute Resource
Compute resource requirements.
ComputeResource defines the amount of resources required for each task.
com. google. cloud. batch. v1. Compute Resource. Builder
Compute resource requirements.
ComputeResource defines the amount of resources required for each task.
com. google. cloud. batch. v1. Create Job Request
CreateJob Request.
com. google. cloud. batch. v1. Create Job Request. Builder
CreateJob Request.
com. google. cloud. batch. v1. Delete Job Request
DeleteJob Request.
com. google. cloud. batch. v1. Delete Job Request. Builder
DeleteJob Request.
com. google. cloud. batch. v1. Environment
An Environment describes a collection of environment variables to set when
executing Tasks.
com. google. cloud. batch. v1. Environment. Builder
An Environment describes a collection of environment variables to set when
executing Tasks.
com. google. cloud. batch. v1. Environment.KMS Env Map
Protobuf type google.cloud.batch.v1.Environment.KMSEnvMap
com. google. cloud. batch. v1. Environment.KMS Env Map. Builder
Protobuf type google.cloud.batch.v1.Environment.KMSEnvMap
com. google. cloud. batch. v1.
Represents a Google Cloud Storage volume.
com. google. cloud. batch. v1.GCS. Builder
Represents a Google Cloud Storage volume.
com. google. cloud. batch. v1. Get Job Request
GetJob Request.
com. google. cloud. batch. v1. Get Job Request. Builder
GetJob Request.
com. google. cloud. batch. v1. Get Task Request
Request for a single Task by name.
com. google. cloud. batch. v1. Get Task Request. Builder
Request for a single Task by name.
com. google. cloud. batch. v1. Job
The Cloud Batch Job description.
com. google. cloud. batch. v1. Job. Builder
The Cloud Batch Job description.
com. google. cloud. batch. v1. Job Name
com. google. cloud. batch. v1. Job Name. Builder
Builder for projects/{project}/locations/{location}/jobs/{job}.
com. google. cloud. batch. v1. Job Notification
Notification configurations.
com. google. cloud. batch. v1. Job Notification. Builder
Notification configurations.
com. google. cloud. batch. v1. Job Notification. Message
Message details.
Describe the conditions under which messages will be sent.
If no attribute is defined, no message will be sent by default.
com. google. cloud. batch. v1. Job Notification. Message. Builder
Message details.
Describe the conditions under which messages will be sent.
If no attribute is defined, no message will be sent by default.
com. google. cloud. batch. v1. Job Proto
com. google. cloud. batch. v1. Job Status
Job status.
com. google. cloud. batch. v1. Job Status. Builder
Job status.
com. google. cloud. batch. v1. Job Status. Instance Status
VM instance status.
com. google. cloud. batch. v1. Job Status. Instance Status. Builder
VM instance status.
com. google. cloud. batch. v1. Job Status. Task Group Status
Aggregated task status for a TaskGroup.
com. google. cloud. batch. v1. Job Status. Task Group Status. Builder
Aggregated task status for a TaskGroup.
com. google. cloud. batch. v1. Lifecycle Policy
LifecyclePolicy describes how to deal with task failures
based on different conditions.
com. google. cloud. batch. v1. Lifecycle Policy. Action Condition
Conditions for actions to deal with task failures.
com. google. cloud. batch. v1. Lifecycle Policy. Action Condition. Builder
Conditions for actions to deal with task failures.
com. google. cloud. batch. v1. Lifecycle Policy. Builder
LifecyclePolicy describes how to deal with task failures
based on different conditions.
com. google. cloud. batch. v1. List Jobs Request
ListJob Request.
com. google. cloud. batch. v1. List Jobs Request. Builder
ListJob Request.
com. google. cloud. batch. v1. List Jobs Response
ListJob Response.
com. google. cloud. batch. v1. List Jobs Response. Builder
ListJob Response.
com. google. cloud. batch. v1. List Tasks Request
ListTasks Request.
com. google. cloud. batch. v1. List Tasks Request. Builder
ListTasks Request.
com. google. cloud. batch. v1. List Tasks Response
ListTasks Response.
com. google. cloud. batch. v1. List Tasks Response. Builder
ListTasks Response.
com. google. cloud. batch. v1. Location Name
com. google. cloud. batch. v1. Location Name. Builder
Builder for projects/{project}/locations/{location}.
com. google. cloud. batch. v1. Logs Policy
LogsPolicy describes if and how a job's logs are preserved. Logs include
information that is automatically written by the Batch service agent and any
information that you configured the job's runnables to write to the stdout
com. google. cloud. batch. v1. Logs Policy. Builder
LogsPolicy describes if and how a job's logs are preserved. Logs include
information that is automatically written by the Batch service agent and any
information that you configured the job's runnables to write to the stdout
com. google. cloud. batch. v1. Logs Policy. Cloud Logging Option
CloudLoggingOption contains additional settings for Cloud Logging logs
generated by Batch job.
com. google. cloud. batch. v1. Logs Policy. Cloud Logging Option. Builder
CloudLoggingOption contains additional settings for Cloud Logging logs
generated by Batch job.
com. google. cloud. batch. v1.
Represents an NFS volume.
com. google. cloud. batch. v1.NFS. Builder
Represents an NFS volume.
com. google. cloud. batch. v1. Operation Metadata
Represents the metadata of the long-running operation.
com. google. cloud. batch. v1. Operation Metadata. Builder
Represents the metadata of the long-running operation.
com. google. cloud. batch. v1. Runnable
Runnable describes instructions for executing a specific script or container
as part of a Task.
com. google. cloud. batch. v1. Runnable. Barrier
A barrier runnable automatically blocks the execution of subsequent
runnables until all the tasks in the task group reach the barrier.
com. google. cloud. batch. v1. Runnable. Barrier. Builder
A barrier runnable automatically blocks the execution of subsequent
runnables until all the tasks in the task group reach the barrier.
com. google. cloud. batch. v1. Runnable. Builder
Runnable describes instructions for executing a specific script or container
as part of a Task.
com. google. cloud. batch. v1. Runnable. Container
Container runnable.
com. google. cloud. batch. v1. Runnable. Container. Builder
Container runnable.
com. google. cloud. batch. v1. Runnable. Script
Script runnable.
com. google. cloud. batch. v1. Runnable. Script. Builder
Script runnable.
com. google. cloud. batch. v1. Service Account
Carries information about a Google Cloud service account.
com. google. cloud. batch. v1. Service Account. Builder
Carries information about a Google Cloud service account.
com. google. cloud. batch. v1. Status Event
Status event.
com. google. cloud. batch. v1. Status Event. Builder
Status event.
com. google. cloud. batch. v1. Task
A Cloud Batch task.
com. google. cloud. batch. v1. Task. Builder
A Cloud Batch task.
com. google. cloud. batch. v1. Task Execution
This Task Execution field includes detail information for
task execution procedures, based on StatusEvent types.
com. google. cloud. batch. v1. Task Execution. Builder
This Task Execution field includes detail information for
task execution procedures, based on StatusEvent types.
com. google. cloud. batch. v1. Task Group
A TaskGroup defines one or more Tasks that all share the same TaskSpec.
com. google. cloud. batch. v1. Task Group. Builder
A TaskGroup defines one or more Tasks that all share the same TaskSpec.
com. google. cloud. batch. v1. Task Group Name
com. google. cloud. batch. v1. Task Group Name. Builder
Builder for projects/{project}/locations/{location}/jobs/{job}/taskGroups/{task_group}.
com. google. cloud. batch. v1. Task Name
com. google. cloud. batch. v1. Task Name. Builder
Builder for
projects/{project}/locations/{location}/jobs/{job}/taskGroups/{task_group}/tasks/{task}.
com. google. cloud. batch. v1. Task Proto
com. google. cloud. batch. v1. Task Spec
Spec of a task
com. google. cloud. batch. v1. Task Spec. Builder
Spec of a task
com. google. cloud. batch. v1. Task Status
Status of a task.
com. google. cloud. batch. v1. Task Status. Builder
Status of a task.
com. google. cloud. batch. v1. Volume
Volume describes a volume and parameters for it to be mounted to a VM.
com. google. cloud. batch. v1. Volume. Builder
Volume describes a volume and parameters for it to be mounted to a VM.
com. google. cloud. batch. v1. Volume Proto
Interfaces
Interface
Description
com. google. cloud. batch. v1. Allocation Policy. Accelerator Or Builder
com. google. cloud. batch. v1. Allocation Policy. Attached Disk Or Builder
com. google. cloud. batch. v1. Allocation Policy. Disk Or Builder
com. google. cloud. batch. v1. Allocation Policy. Instance Policy Or Builder
com. google. cloud. batch. v1. Allocation Policy. Instance Policy Or Template Or Builder
com. google. cloud. batch. v1. Allocation Policy. Location Policy Or Builder
com. google. cloud. batch. v1. Allocation Policy. Network Interface Or Builder
com. google. cloud. batch. v1. Allocation Policy. Network Policy Or Builder
com. google. cloud. batch. v1. Allocation Policy. Placement Policy Or Builder
com. google. cloud. batch. v1. Allocation Policy Or Builder
com. google. cloud. batch. v1. Batch Service Grpc. Async Service
Google Batch Service.
The service manages user submitted batch jobs and allocates Google Compute
Engine VM instances to run the jobs.
com. google. cloud. batch. v1. Cancel Job Request Or Builder
com. google. cloud. batch. v1. Cancel Job Response Or Builder
com. google. cloud. batch. v1. Compute Resource Or Builder
com. google. cloud. batch. v1. Create Job Request Or Builder
com. google. cloud. batch. v1. Delete Job Request Or Builder
com. google. cloud. batch. v1. Environment.KMS Env Map Or Builder
com. google. cloud. batch. v1. Environment Or Builder
com. google. cloud. batch. v1.GCS Or Builder
com. google. cloud. batch. v1. Get Job Request Or Builder
com. google. cloud. batch. v1. Get Task Request Or Builder
com. google. cloud. batch. v1. Job Notification. Message Or Builder
com. google. cloud. batch. v1. Job Notification Or Builder
com. google. cloud. batch. v1. Job Or Builder
com. google. cloud. batch. v1. Job Status. Instance Status Or Builder
com. google. cloud. batch. v1. Job Status. Task Group Status Or Builder
com. google. cloud. batch. v1. Job Status Or Builder
com. google. cloud. batch. v1. Lifecycle Policy. Action Condition Or Builder
com. google. cloud. batch. v1. Lifecycle Policy Or Builder
com. google. cloud. batch. v1. List Jobs Request Or Builder
com. google. cloud. batch. v1. List Jobs Response Or Builder
com. google. cloud. batch. v1. List Tasks Request Or Builder
com. google. cloud. batch. v1. List Tasks Response Or Builder
com. google. cloud. batch. v1. Logs Policy. Cloud Logging Option Or Builder
com. google. cloud. batch. v1. Logs Policy Or Builder
com. google. cloud. batch. v1.NFS Or Builder
com. google. cloud. batch. v1. Operation Metadata Or Builder
com. google. cloud. batch. v1. Runnable. Barrier Or Builder
com. google. cloud. batch. v1. Runnable. Container Or Builder
com. google. cloud. batch. v1. Runnable. Script Or Builder
com. google. cloud. batch. v1. Runnable Or Builder
com. google. cloud. batch. v1. Service Account Or Builder
com. google. cloud. batch. v1. Status Event Or Builder
com. google. cloud. batch. v1. Task Execution Or Builder
com. google. cloud. batch. v1. Task Group Or Builder
com. google. cloud. batch. v1. Task Or Builder
com. google. cloud. batch. v1. Task Spec Or Builder
com. google. cloud. batch. v1. Task Status Or Builder
com. google. cloud. batch. v1. Volume Or Builder
Enums
Enum
Description
com. google. cloud. batch. v1. Allocation Policy. Attached Disk. Attached Case
com. google. cloud. batch. v1. Allocation Policy. Disk. Data Source Case
com. google. cloud. batch. v1. Allocation Policy. Instance Policy Or Template. Policy Template Case
com. google. cloud. batch. v1. Allocation Policy. Provisioning Model
Compute Engine VM instance provisioning model.
com. google. cloud. batch. v1. Job Notification. Type
The message type.
com. google. cloud. batch. v1. Job Status. State
Valid Job states.
com. google. cloud. batch. v1. Lifecycle Policy. Action
Action on task failures based on different conditions.
com. google. cloud. batch. v1. Logs Policy. Destination
The destination (if any) for logs.
com. google. cloud. batch. v1. Runnable. Executable Case
com. google. cloud. batch. v1. Runnable. Script. Command Case
com. google. cloud. batch. v1. Task Group. Scheduling Policy
How Tasks in the TaskGroup should be scheduled relative to each other.
com. google. cloud. batch. v1. Task Status. State
Task states.
com. google. cloud. batch. v1. Volume. Source Case
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-29 UTC."],[],[]]
