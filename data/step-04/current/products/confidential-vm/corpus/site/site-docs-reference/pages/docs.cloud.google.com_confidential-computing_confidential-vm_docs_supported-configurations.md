---
title: "Supported configurations \_|\_ Confidential VM \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/supported-configurations
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/create-a-confidential-vm-instance
source_metadata:
  url: https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/supported-configurations
  title: "Supported configurations \_|\_ Confidential VM \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Confidential VM
Guides
Send feedback
Supported configurations
Stay organized with collections
Save and categorize content based on your preferences.
To create a Confidential VM instance, you need a virtual machine that has the
following properties:
A supported Compute Engine machine type, CPU, and zone
A supported operating system
You can configure your own Confidential VM instance manually, or accept the
suggested settings when you enable the Confidential VM service in the
Google Cloud console.
Limitations
The following limitations apply depending on how you've configured your
Confidential VM instance.
All Confidential VM instances
You must create a new VM instance to enable Confidential VM. Existing
instances can't be converted to Confidential VM instances.
You can't attach TPUs to Confidential VM instances.
Confidential VM instances require an NVMe interface for disks. SCSI isn't
supported.
Only new disks can be formatted to XFS on Linux kernel versions earlier
than 5.10. To format existing disks to XFS, you need kernel version 5.10
or later.
You can't attach more than 40 disks to a Confidential VM instance.
You can request an exception through a
support channel , although instances with
more than 40 disks might fail silently.
Boot time is proportional to the amount of memory assigned to an instance.
You might notice longer boot times for Confidential VM instances with large
amounts of memory.
Establishing SSH connections takes longer on Confidential VM instances than
non-Confidential VM instances.
Live migration is only
supported on N2D and C3D machine types running AMD SEV.
Confidential VM instances might experience lower network bandwidth and higher
latency compared to non-Confidential VM instances.
Confidential VM instances with Hyperdisk Throughput have a restricted maximum data
transfer size (MDTS), which reduces performance. To minimize performance
degradation, avoid read-ahead requests exceeding the MDTS limit by setting
read_ahead_kb to 124 KiB when using buffered I/O.
AMD SEV
Debian 12 doesn't have attestation support for AMD SEV due to the missing
/dev/sev-guest package.
AMD SEV on C2D and N2D machine types has a maximum
vNIC queue count of 8 .
AMD SEV on the C4D and C3D machine type has the following limitations:
Confidential VM instances that use C4D and C3D machine types might
experience lower network bandwidth than equivalent non-confidential VMs,
even with
per VM Tier_1 networking performance
enabled.
VMs with more than 255 vCPUs and bare metal instances aren't supported.
The rhel-8-4-sap-ha image tagged SEV_CAPABLE doesn't work
with AMD SEV on C4D and C3D machines with more than 8 vCPUs.
This image is missing a required
patch
that increases the size of the SWIOTLB buffer for high networking
queues.
Confidential VM instances with AMD SEV on C3D machine types don't
support Hyperdisk Balanced and Hyperdisk Throughput.
AMD SEV-SNP
Debian 12 doesn't have attestation support for AMD SEV-SNP due to the
missing /dev/sev-guest package.
AMD SEV-SNP on N2D machine types has a maximum
vNIC queue count of 8 .
VM instances don't support kdump . Instead, use the guest console logs.
Confidential VM instances with AMD SEV-SNP don't support
reservations .
Intel TDX
Local SSD machine types
aren't supported.
VM instances take longer to shut down compared to standard VM instances.
This delay increases with VM memory size.
Only Balanced Persistent Disk volumes that use the NVMe interface are
supported.
VM instances can't be provisioned on sole-tenant node groups.
Due to additional security constraints, the CPUID instruction might return
limited or no CPU architecture details. This might impact the performance
of workloads that depend on those CPUID values.
VM instances don't support kdump . Instead, use the guest console logs.
Guest images without the
TDX halt fixes
might experience extended halt durations, resulting in performance
degradation. To avoid the performance degradation, verify that these
patches are installed in your guest kernel build.
Confidential VM instances with Intel TDX don't support
reservations .
NVIDIA Confidential Computing
Confidential VM instances running on the
A3 High machine types ,
which have attached NVIDIA H100 GPUs, have the following limitations:
These VM instances don't support the creation of clusters for multi-node
workloads.
These VM instances don't support reservations .
These VM instances don't support Hyperdisk Extreme .
All other A3 High machine types limitations
also apply to Confidential VM instances running on A3 High machine types.
Machine types, CPUs, and zones
Confidential VM is supported on the following machine types and configurations.
Machine type
CPU platform
Confidential Computing technology
Live migration support
GPU support
a3-highgpu-1g
View machine type names
Intel Sapphire Rapids
Intel TDX
See limitations
NVIDIA
See limitations
Not supported
Supported
C4D
View machine type names
AMD EPYC Turin
AMD SEV
See limitations
Not supported
Not supported
c3-standard-*
View machine type names
Intel Sapphire Rapids
Intel TDX
See limitations
Not supported
Not supported
C3D
View machine type names
AMD EPYC Genoa
AMD SEV
See limitations
Supported
Not supported
C2D
View machine type names
AMD EPYC Milan
AMD SEV
See limitations
Not supported
Not supported
N2D
View machine type names
AMD EPYC Milan
AMD SEV on Milan
See limitations
AMD SEV-SNP on Milan
See limitations
Supported on AMD SEV VM instances only
Not supported
View supported zones
You can view which zones support these machine types and Confidential Computing
technology with one of the following methods.
AMD SEV
Reference table
To view which zones support SEV on Confidential VM, complete the following
steps.
Go to
Available regions and zones .
Click Select a machine type , and then select N2D , C2D ,
C3D , and C4D .
Click Select a CPU , and then select AMD EPYC Milan ,
AMD EPYC Genoa , or AMD EPYC Turin .
gcloud
To list the zones available in Google Cloud, run the following command:
gcloud compute zones list \
--format = "value(NAME)"
To list the available CPU platforms for a specific zone, run the
following command and check for AMD Milan, AMD Genoa, or AMD Turin
support:
gcloud compute zones describe ZONE_NAME \
--format = "value(availableCpuPlatforms)"
AMD SEV-SNP
AMD SEV-SNP is supported in the following zones, on N2D machine types with
AMD Milan CPU platforms:
asia-southeast1-a
asia-southeast1-b
asia-southeast1-c
europe-west3-a
europe-west3-b
europe-west3-c
europe-west4-a
europe-west4-b
europe-west4-c
us-central1-a
us-central1-b
us-central1-c
Intel TDX
Intel TDX is supported in the following zones, on c3-standard-* machine
types.
asia-northeast1-b
asia-south1-b
asia-southeast1-a
asia-southeast1-b
asia-southeast1-c
europe-west4-a
europe-west4-b
europe-west4-c
europe-west9-a
europe-west9-b
us-central1-a
us-central1-b
us-central1-c
us-east1-c
us-east1-d
us-east4-a
us-east4-c
us-east5-b
us-east5-c
us-west1-a
us-west1-b
NVIDIA Confidential Computing
NVIDIA Confidential Computing is supported in the following zones, on Confidential VM instances
with an attached GPU on a3-highgpu-1g machine types.
europe-west4-c
us-central1-a
us-east5-a
Operating systems
For the available Confidential VM operating system images, see
Operating system details . Find your
distribution of choice, and then click the Security features tab to check if
Confidential VM is supported.
Alternatively, you can
view supported operating system images with a gcloud command ,
or
create your own Linux image .
View supported operating system images with gcloud
The operating system images you can use are determined by your
Confidential Computing technology choice.
You can list the operating system images, their image families, and their
versions that support AMD and Intel Confidential Computing technologies by
running the following command:
gcloud compute images list \
--filter = "guestOsFeatures[].type:( OS_FEATURE )"
Provide the following value:
OS_FEATURE : The type of Confidential Computing support you
want. Accepted values are:
SEV_CAPABLE : Operating systems that support AMD SEV.
SEV_LIVE_MIGRATABLE_V2 : Operating systems that support AMD SEV and live
migration.
SEV_SNP_CAPABLE : Operating systems that support AMD SEV-SNP isolation and
attestation.
TDX_CAPABLE : Operating systems that support Intel TDX isolation and
attestation.
To limit the results to a specific image family, project, or other text provided
in the previous command's response, use an AND operator, and replace
STRING with a partial text match, similar to the following example:
gcloud compute images list \
--filter = "guestOsFeatures[].type:( OS_FEATURE ) AND STRING "
To view details about a specific image, run the following command using details
from the responses of the previous commands:
gcloud compute images describe IMAGE_NAME \
--project = IMAGE_PROJECT
Supported images for a Confidential VM instance with GPU
For a Confidential VM instance on the A3 machine series that uses Intel TDX and
has an attached H100 GPU, we recommend using the following operating system
image families.
ubuntu-2204-lts
cos-tdx-113-lts
While other images might be tagged as TDX_CAPABLE , we don't provide official
support for them when used with GPUs.
What's next
Learn how to
create a Confidential VM instance .
Learn how to
create a Confidential VM instance with GPU .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
