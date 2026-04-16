---
title: "Configure Dataflow worker VMs \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/dataflow/docs/resources/locations
source_metadata:
  url: https://docs.cloud.google.com/dataflow/docs/guides/configure-worker-vm
  title: "Configure Dataflow worker VMs \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Cloud Dataflow
Guides
Send feedback
Configure Dataflow worker VMs
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to configure the worker VMs for a Dataflow
job.
By default, Dataflow selects the machine type for the worker VMs that
run your job, along with the size and type of Persistent Disk. To configure the
worker VMs, set the following
pipeline options
when you create the job.
Machine type
The Compute Engine machine type that
Dataflow uses when starting worker VMs. You can use x86 or Arm
machine types, including custom machine types.
Note: Dataflow Prime doesn't support designating specific VM types. For more
information, see Unsupported features .
Java
Set the workerMachineType pipeline option.
Python
Set the machine_type pipeline option.
Go
Set the worker_machine_type pipeline option.
For Arm, the
Tau T2A machine series
is supported. For more information about using Arm VMs, see
Use Arm VMs in Dataflow .
Shared-core machine types (for example, f1-micro , g1-small , e2-micro ,
e2-small , and e2-medium ) are not recommended for Dataflow
jobs and are not supported under the
Dataflow Service Level Agreement .
Billing is independent of the machine type family. For more information, see
Dataflow pricing .
For f1-micro and g1-small machine types, Dataflow bills as if
they have 1 vCPU, and for e2-micro , e2-small , and e2-medium machine
types, Dataflow bills as if they have 2 vCPUs. These rates are
billed even though shared-core machine types provide less than their billed
vCPUs of sustained CPU time.
Custom machine types
To specify a custom machine type, use the following format:
FAMILY - vCPU - MEMORY . Replace the
following:
FAMILY . Use one of the following values:
Machine series Value
N1 custom
N2 n2-custom
N2D n2d-custom
N4
For streaming jobs, Streaming Engine must be enabled.
For batch jobs, Dataflow shuffle must be enabled (default).
n4-custom
E2 e2-custom
vCPU . The number of vCPUs.
MEMORY . The memory, in MB.
To enable
extended memory ,
append -ext to the machine type. Examples: n2-custom-6-3072 ,
n2-custom-2-32768-ext .
For more information about valid custom machine types, see
Custom machine types
in the Compute Engine documentation.
Disk type
The type of Persistent Disk to use.
Don't specify a Persistent Disk when using either
Streaming Engine or the N4
machine type .
Java
Set the workerDiskType pipeline option.
Python
Set the worker_disk_type pipeline option.
Go
Set the disk_type pipeline option.
To specify the disk type, use the following format:
compute.googleapis.com/projects/ PROJECT_ID /zones/ ZONE /diskTypes/ DISK_TYPE .
Replace the following:
PROJECT_ID : your project ID
ZONE : the zone for the Persistent Disk, for example us-central1-b
DISK_TYPE : the disk type, either pd-ssd or pd-standard
For more information, see the Compute Engine API reference page for
diskTypes .
Disk size
The Persistent Disk size.
Java
Set the diskSizeGb pipeline option.
Python
Set the disk_size_gb pipeline option.
Go
Set the disk_size_gb pipeline option.
If you set this option, specify at least 30 GB to account for the worker
boot image and local logs.
Lowering the disk size reduces available shuffle I/O. Shuffle-bound jobs
not using Dataflow Shuffle or Streaming Engine may result in
increased runtime and job cost.
Batch jobs
For batch jobs using
Dataflow Shuffle , this option
sets the size of a worker VM boot disk. For batch jobs not using
Dataflow Shuffle, this option sets the size of the disks used to
store shuffled data; the boot disk size is not affected.
If a batch job uses Dataflow Shuffle, then the default disk size
is 25 GB. Otherwise, the default is 250 GB.
Streaming jobs
For streaming jobs using Streaming Engine ,
this option sets size of the boot disks. For streaming jobs not using
Streaming Engine, this option sets the size of each additional Persistent Disk
created by the Dataflow service; the boot disk is not affected.
If a streaming job doesn't use Streaming Engine, you can set the boot disk size
with the experiment flag streaming_boot_disk_size_gb . For example, specify
--experiments=streaming_boot_disk_size_gb=80 to create boot disks of 80 GB.
If a streaming job uses Streaming Engine, then the default disk size is
30 GB. Otherwise, the default is 400 GB.
Minimum CPU platform
If you have performance-sensitive workloads that depend on specific CPU
features, you can specify a minimum CPU platform for worker VMs. This option
ensures that Dataflow workers use a processor that meets or exceeds the
specified CPU generation.
Note: Dataflow Prime doesn't support specifying a minimum CPU platform. For
more information, see Unsupported features .
To specify the minimum CPU platform, set the min_cpu_platform
experimental pipeline option .
The value must be the exact name of the selected CPU platform, such as
AMD Milan or Intel Ice Lake . For example, specify
--experiments=min_cpu_platform='AMD Milan' to set the minimum CPU platform to
AMD Milan. For a list of supported minimum CPU platforms, see
Availability of CPU platforms .
For information about limitations, see
limitations when specifying a minimum CPU platform .
To verify that the Dataflow worker VMs are created with the specified
minimum CPU platform, check the Cloud Logging entries for the job as follows:
Navigate to the Cloud Logging console in the Google Cloud console.
Use the following filter and replace the example CPU platform and
Dataflow job ID with the information for your job.
resource.type="gce_instance"
protoPayload.request.minCpuPlatform="AMD Milan"
"dataflow_job_id"
Look at the resulting logs to confirm that Dataflow successfully
specified the minimum CPU platform during the VM creation process.
Use Cloud Storage FUSE to mount your Cloud Storage buckets onto Dataflow VMs
Cloud Storage FUSE lets you mount your Cloud Storage buckets directly
with Dataflow VMs, allowing software to access files as if they
are local. This integration eliminates the need for pre-downloading data,
streamlining data access for your workloads. For more information, see Process
ML data using Dataflow and
Cloud Storage FUSE .
What's next
Set Dataflow pipeline options
Use Arm VMs on Dataflow
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
