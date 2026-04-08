---
title: "Create an AI-optimized Slurm cluster \_|\_ AI Hypercomputer \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-slurm-cluster
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-slurm-cluster
  title: "Create an AI-optimized Slurm cluster \_|\_ AI Hypercomputer \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Create an AI-optimized Slurm cluster | AI Hypercomputer | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español – América Latina
Français
Indonesia
Italiano
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
AI Hypercomputer
Start free
Overview
Guides
Resources
More
Technology areas
More
Overview
Guides
Resources
Cross-product tools
More
Console
Discover
Overview
Performance-optimized infrastructure
GPU machines
Networking services
GPU networking overview
Network services for deployments
Networking best practices
Storage services
Open software
OS and Docker images
Choose a consumption option
Cluster management
Overview
Configurations
Terminology
Get started
Cluster creation overview
Recommended configurations
Obtain capacity and quota
Overview
Reserve capacity
View reserved capacity
Quickstart: Create a Slurm cluster with A4 machine type
Deploy infrastructure
Deployment options overview
Compact placement policy and workload policy overview
Deploy AI-optimized VMs and clusters
Create GKE clusters
Create an AI-optimized GKE cluster with default configuration
Create a custom AI-optimized GKE cluster which uses A4X Max
Create a custom AI-optimized GKE cluster which uses A4X
Create a custom AI-optimized GKE cluster which uses A4 or A3 Ultra
Create Slurm clusters
Create an instance
Create A4X Max
Create A4X
Create A4 or A3 Ultra
Create A3 High or A3 Mega
Create instances in bulk
Create A4X Max
Create A4X
Create A4 or A3 Ultra
Create A3 High or A3 Mega
Create a managed instance group (MIG)
Create A4X Max
Create A4X
Create A4 or A3 Ultra
Create A3 High or A3 Mega
Run workloads
Run workloads with Pathways on Cloud
Introduction to Pathways on Cloud
Create a GKE cluster with Pathways
Run a batch workload with Pathways
Run an interactive workload with Pathways
Perform multihost inference using Pathways
Resilient training with Pathways
Port JAX workloads to Pathways
Troubleshoot Pathways on Cloud
Schedule GKE workloads
Schedule workloads with Topology Aware Scheduling (TAS)
Enable node health prediction
AI workload tutorials
Overview
GPU
Run inference with vLLM on GKE
DeepSeek V3.1
DeepSeek V3.2-Speciale
Gemma 3
GPT-OSS
Llama 4
Qwen3
Run fine-tuning
Gemma 3 on a GKE cluster
Gemma 3 on a Slurm cluster
Gemma 3 for vision tasks on GKE
Llama 4 on a Slurm cluster
Mixtral-8x7b on a Slurm cluster
Run training
Qwen2 on a Slurm cluster
TPU
Serve Qwen2-7B with vLLM on TPUs
Serve Qwen2-7B-Instruct with vLLM on TPUs
Serve Qwen3-8B-Base with vLLM on TPUs
Serve Llama-3.1-8B with vLLM on TPUs
Manage infrastructure
Manage GKE clusters
Manage instances and Slurm clusters
View topology of an instance
Manage host events
Host events in instances
Host events in reservations
Report faulty host
Test and optimize
Optimize cluster networking by using NCCL/ g IB
Run NCCL tests
Run NCCL on Compute Engine instances
Run NCCL on GKE clusters that use default configuration
Run NCCL on custom GKE clusters that use A4X Max
Run NCCL on custom GKE clusters that use A4X
Run NCCL on custom GKE clusters that use A4 or A3 Ultra
Run NCCL on Slurm clusters
Collect and understand NCCL logs for troubleshooting
Test workloads with recipes
Benchmarking recipes
Goodput optimization recipes
Test clusters
Monitor
Monitor VMs and Slurm clusters
Manage how CoMMA collects NCCL telemetry
Collective Communication Analyzer (CoMMA)
Enable, disable, and configure CoMMA
Troubleshoot
Known issues
Troubleshoot slow performance
Troubleshoot reporting a faulty host
Troubleshoot CoMMA
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
Limitations
Before you begin Required roles
Set up a storage bucket
Install Cluster Toolkit
Create a deployment file
Provision a Slurm cluster
Connect to the Slurm cluster
Test network performance on the Slurm cluster
Redeploy the Slurm cluster
Destroy the Slurm cluster
What's next
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Create an AI-optimized Slurm cluster
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Limitations
Before you begin Required roles
Set up a storage bucket
Install Cluster Toolkit
Create a deployment file
Provision a Slurm cluster
Connect to the Slurm cluster
Test network performance on the Slurm cluster
Redeploy the Slurm cluster
Destroy the Slurm cluster
What's next
This document outlines the steps to configure and deploy Slurm clusters that use
A4X Max, A4X, A4, A3 Ultra, A3 Mega, or A3 High machine types. To learn more about these
accelerator-optimized machine types, see
GPU machine types .
For other methods to create an AI-optimized Slurm cluster in Google Cloud, see
the following:
To use a managed Slurm environment that simplifies cluster setup and
management, see Cluster Director .
To deploy two A4 virtual machine (VM) instances on Slurm, see the
quickstart for creating an AI-optimized Slurm cluster .
Limitations
Depending on the machine series that the VMs in your Slurm cluster use, the
following limitations apply:
A4X Max A4X A4 A3 Ultra A3 Mega A3 High
More
Caution: The
Compute Engine Service Level Agreement (SLA) doesn't apply to the A4X Max machine series.
You don't receive sustained
use discounts or flexible committed use
discounts for instances that use this machine type.
You can only create instances in certain regions and zones .
You can't use Persistent Disk (regional or zonal). You can only use
Google Cloud Hyperdisk .
This machine type is only available on the NVIDIA Grace platform .
Machine type changes aren't supported for A4X Max. To switch to or from this
machine type, you must create a new instance.
You can't run Windows operating systems on this machine type. For a list of
supported Linux operating systems, review the
supported operating systems for GPU instances .
A4X Max instances don't support the following:
Sole-tenancy
Spot VMs
Flex-start VMs
You can't attach Hyperdisk ML disks created before February 4, 2026 to A4X Max machine types.
Caution: The
Compute Engine Service Level Agreement (SLA) doesn't apply to the A4X machine series.
You don't receive sustained
use discounts or flexible committed use
discounts for instances that use this machine type.
You can only create instances in certain regions and zones .
You can't use Persistent Disk (regional or zonal). You can only use
Google Cloud Hyperdisk .
This machine type is only available on the NVIDIA Grace platform .
Machine type changes aren't supported for A4X. To switch to or from this
machine type, you must create a new instance.
You can't run Windows operating systems on this machine type. For a list of
supported Linux operating systems, review the
supported operating systems for GPU instances .
For A4X instances, when you use ethtool -S to monitor GPU networking,
the physical port counters that end in _phy don't update. This is expected behavior for
instances that use the MRDMA Virtual Function (VF) architecture.
For more information, see
MRDMA functions and network monitoring tools .
A4X instances don't support the following:
Sole-tenancy
Spot VMs
Flex-start VMs
You can't attach Hyperdisk ML disks created before February 4, 2026 to A4X machine types.
You don't receive sustained
use discounts and
flexible committed use
discounts for instances that use an A4 machine type.
You can only use an A4 machine type in certain regions
and zones .
You can't use Persistent Disk (regional or zonal). You can only use
Google Cloud Hyperdisk .
The A4 machine type is only available on the Emerald Rapids CPU platform .
You can't change the machine type of an instance to or from A4 machine type. You must create a
new instance with this machine type.
A4 machine types don't support
sole-tenancy .
You can't run Windows operating systems on an A4 machine type.
For A4 instances, when you use ethtool -S to monitor GPU networking, physical port
counters that end in _phy don't update. This is expected behavior for instances that use
the MRDMA Virtual Function (VF) architecture.
For more information, see
MRDMA functions and network monitoring tools .
You can't attach Hyperdisk ML disks that were created before February 4, 2026 to A4 machine types.
You don't receive sustained
use discounts and
flexible committed use
discounts for instances that use an A3 Ultra machine type.
You can only use an A3 Ultra machine type in certain regions
and zones .
You can't use Persistent Disk (regional or zonal). You can only use
Google Cloud Hyperdisk .
The A3 Ultra machine type is only available on the Emerald Rapids CPU platform .
Machine type changes aren't supported for A3 Ultra machine type. To switch to or from this machine
type, you must create a new instance.
You can't run Windows operating systems on an A3 Ultra machine type.
A3 Ultra machine types don't support
sole-tenancy .
For A3 Ultra instances, when you use ethtool -S to monitor GPU networking,
physical port counters that end in _phy don't update. This is expected behavior for
instances that use the MRDMA Virtual Function (VF) architecture.
For more information, see
MRDMA functions and network monitoring tools .
You don't receive sustained
use discounts and
flexible committed use
discounts for instances that use an A3 Mega machine type.
You can only use an A3 Mega machine type in certain regions
and zones .
You can't use regional
Persistent Disk on an instance that uses an A3 Mega machine type.
The A3 Mega machine type is only available on the Sapphire Rapids CPU platform .
Machine type changes aren't supported for A3 Mega machine type. To switch to or from this machine
type, you must create a new instance.
You can't run Windows operating systems on an A3 Mega machine type.
You don't receive sustained
use discounts and
flexible committed use
discounts for instances that use an A3 High machine type.
You can only use an A3 High machine type in certain regions
and zones .
You can't use regional
Persistent Disk on an instance that uses an A3 High machine type.
The A3 High machine type is only available on the Sapphire Rapids CPU platform .
Machine type changes aren't supported for A3 High machine type. To switch to or from this machine
type, you must create a new instance.
You can't run Windows operating systems on an A3 High machine type.
For a3-highgpu-1g , a3-highgpu-2g , and a3-highgpu-4g
machine types,
you must create instances by using Spot VMs or
Flex-start VMs. For detailed instructions on these options, review the following:
To create Spot VMs, set the provisioning model to SPOT when you
create an accelerator-optimized
VM .
To create Flex-start VMs, you can use one of the following methods:
Create a standalone VM and set the provisioning model to FLEX_START when you
create an
accelerator-optimized VM .
Create a resize request in a managed instance group (MIG). For instructions, see
Create a MIG with GPU
VMs .
You can only use a
Confidential VM
with an a3-highgpu-1g machine type in limited regions and zones ,
and all the
limitations for Confidential VM running on the A3 High machine type
apply.
Before you begin
Before creating a Slurm cluster, if you haven't already done so, complete the following
steps:
Choose a consumption option : your choice of consumption option determines how you get
and use GPU resources.
To learn more, see Choose a consumption option .
Obtain capacity : the process to obtain capacity differs for each consumption option.
To learn about the process to obtain capacity for your chosen consumption option, see
Capacity overview .
Ensure that you have enough Filestore capacity quota : you need to have enough
Filestore quota in your target region before deploying. The required minimum
capacity depends on the machine types in your cluster:
A4, A4X, A3 Ultra, and A3 Mega : requires a minimum of 10 TiB
(10,240 GiB) of HIGH_SCALE_SSD (zonal) capacity.
A3 High : requires a minimum of 2.5 TiB (2,560 GiB) of
BASIC_SSD (standard) capacity.
To check quota or request a quota increase, see the following:
To check quota, see View API-specific quota .
If you don't have enough quota,
request a quota increase .
Install Cluster Toolkit : to provision Slurm clusters, you must use
Cluster Toolkit version
v1.62.0 or later.
To install Cluster Toolkit, see
Set up Cluster Toolkit .
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
Required roles
To ensure that the Compute Engine default service account has the necessary
permissions to deploy a Slurm cluster,
ask your administrator to grant the
following IAM roles to the Compute Engine default service account:
Important: You must grant these roles
to the Compute Engine default service account, not to your user account. Failure to grant the roles to the correct principal might result in permission errors.
Storage Object Viewer ( roles/storage.objectViewer )
on your project
Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 )
on your project
Service Account User ( roles/iam.serviceAccountUser )
on the service account itself
For more information about granting roles, see Manage access to projects, folders, and organizations .
Your administrator might also be able to give the Compute Engine default service account
the required permissions through custom
roles or other predefined
roles .
Set up a storage bucket
Cluster blueprints use Terraform modules to provision Cloud infrastructure. A
best practice when working with Terraform is to
store the state remotely
in a version enabled file. On Google Cloud, you can create a Cloud Storage
bucket that has versioning enabled.
To create this bucket and enable versioning from the CLI, run the following commands:
gcloud storage buckets create gs:// BUCKET_NAME \
--project= PROJECT_ID \
--default-storage-class=STANDARD --location= BUCKET_REGION \
--uniform-bucket-level-access
gcloud storage buckets update gs:// BUCKET_NAME --versioning
Replace the following:
BUCKET_NAME : a name for your Cloud Storage bucket
that meets the bucket naming requirements .
PROJECT_ID : your project ID.
BUCKET_REGION : any available location .
Install Cluster Toolkit
To use Slurm with Google Cloud, you must install
Cluster Toolkit . For Linux and
macOS, we recommend that you install the prebuilt
bundle .
After you install Cluster Toolkit, go to the directory that contains
the gcluster binary:
If you installed the prebuilt bundle, change into the gcluster-bundle
directory:
cd gcluster-bundle
If you built the binary from source, change into the cluster-toolkit :
cd cluster-toolkit
This cluster deployment requires Cluster Toolkit v1.62.0 or later.
Check the current installed version:
./gcluster --version
Create a deployment file
Create a deployment file that you can use to specify the
Cloud Storage bucket, set names for your network and subnetwork, and set
deployment variables such as project ID, region, and zone.
To create a deployment file, follow the steps for your required machine type
and consumption option.
A4X Max A4X A4 A3 Ultra A3 Mega A3 High
More
To create your deployment file, use a text editor to create a YAML file named
a4xmax-bm-slurm-deployment.yaml and add the following content.
Tip: For a more detailed example, copy and paste the contents of
examples/machine-learning/a4x-maxgpu-4g-metal/a4xmax-bm-slurm-deployment.yaml
into a file in your workspace and edit it.
terraform_backend_defaults:
type: gcs
configuration:
bucket: BUCKET_NAME
vars:
deployment_name: DEPLOYMENT_NAME
project_id: PROJECT_ID
region: REGION
zone: ZONE
a4x_max_cluster_size: NUMBER_OF_INSTANCES
a4x_max_reservation_name: RESERVATION_NAME
Replace the following:
BUCKET_NAME : the name of your Cloud Storage
bucket, which you created in the previous section.
DEPLOYMENT_NAME : a name for your deployment. If
creating multiple clusters, ensure that you select a unique name for each one.
PROJECT_ID : your project ID.
REGION : the region that has the reserved machines.
ZONE : the zone where you want to provision the cluster. If you're using a
reservation-based consumption option, the region and zone information was provided by your
account team when the
capacity was delivered .
NUMBER_OF_INSTANCES : the number of A4X Max bare metal instances in your cluster. You can specify
any number of instances. However, A4X Max instances are physically interconnected by a
multi-node NVLink system
in groups of 18 instances (72 GPUs) to form an NVLink domain.
For optimal network performance, we recommend that you specify a value that is a multiple
of 18 instances (for example, 18, 36, or 54). When you create an A4X Max cluster, the A4X Max blueprint automatically
creates and applies a compact placement policy with a GPU topology of 1x72 for
each group of 18 instances.
RESERVATION_NAME : the name of your
reservation .
To create your deployment file, use a text editor to create a YAML file named
a4xhigh-slurm-deployment.yaml and add the following content.
Tip: For a more detailed example, copy and paste the contents of
examples/machine-learning/a4x-highgpu-4g/a4xhigh-slurm-deployment.yaml
into a file in your workspace and edit it.
terraform_backend_defaults:
type: gcs
configuration:
bucket: BUCKET_NAME
vars:
deployment_name: DEPLOYMENT_NAME
project_id: PROJECT_ID
region: REGION
zone: ZONE
a4x_cluster_size: NUMBER_OF_VMS
a4x_reservation_name: RESERVATION_NAME
Replace the following:
BUCKET_NAME : the name of your Cloud Storage
bucket, which you created in the previous section.
DEPLOYMENT_NAME : a name for your deployment. If
creating multiple clusters, ensure that you select a unique name for each one.
PROJECT_ID : your project ID.
REGION : the region that has the reserved machines.
ZONE : the zone where you want to provision the cluster. If you're using a
reservation-based consumption option, the region and zone information was provided by your
account team when the
capacity was delivered .
NUMBER_OF_VMS : the number of A4X VMs in your cluster. You can specify
any number of VMs. However, A4X VMs are physically interconnected by a
multi-node NVLink system
in groups of 18 VMs (72 GPUs) to form an NVLink domain.
For optimal network performance, we recommend that you specify a value that is a multiple
of 18 VMs (for example, 18, 36, or 54). When you create an A4X cluster, the A4X blueprint automatically
creates and applies a compact placement policy with a GPU topology of 1x72 for
each group of 18 VMs.
For more information about A4X topology, see A4X fundamentals .
RESERVATION_NAME : the name of your
reservation .
The parameters that you need to add to your deployment file depend on the
consumption option that
you're using for your deployment. Select the tab that corresponds to your consumption option's
provisioning model.
Reservation-bound Flex-start Spot
More
To create your deployment file, use a text editor to create a YAML file named
a4high-slurm-deployment.yaml and add the following content.
Tip: For a more detailed example, copy and paste the contents of
examples/machine-learning/a4-highgpu-8g/a4high-slurm-deployment.yaml
into a file in your workspace and edit it.
terraform_backend_defaults:
type: gcs
configuration:
bucket: BUCKET_NAME
vars:
deployment_name: DEPLOYMENT_NAME
project_id: PROJECT_ID
region: REGION
zone: ZONE
a4h_cluster_size: NUMBER_OF_VMS
a4h_reservation_name: RESERVATION_NAME
Replace the following:
BUCKET_NAME : the name of your Cloud Storage
bucket, which you created in the previous section.
DEPLOYMENT_NAME : a name for your deployment. If
creating multiple clusters, ensure that you select a unique name for each one.
PROJECT_ID : your project ID.
REGION : the region that has the reserved machines.
ZONE : the zone where you want to provision the cluster. If you're using a
reservation-based consumption option, the region and zone information was provided by your
account team when the
capacity was delivered .
NUMBER_OF_VMS : the number of VMs that you want for the
cluster.
RESERVATION_NAME : the name of your
reservation .
To create your deployment file, use a text editor to create a YAML file named
a4high-slurm-deployment.yaml and add the following content.
Tip: For a more detailed example, copy and paste the contents of
examples/machine-learning/a4-highgpu-8g/a4high-slurm-deployment.yaml
into a file in your workspace and edit it.
terraform_backend_defaults:
type: gcs
configuration:
bucket: BUCKET_NAME
vars:
deployment_name: DEPLOYMENT_NAME
project_id: PROJECT_ID
region: REGION
zone: ZONE
a4h_cluster_size: NUMBER_OF_VMS
a4h_dws_flex_enabled: true
Replace the following:
BUCKET_NAME : the name of your Cloud Storage
bucket, which you created in the previous section.
DEPLOYMENT_NAME : a name for your deployment. If
creating multiple clusters, ensure that you select a unique name for each one.
PROJECT_ID : your project ID.
REGION : the region where you want to provision your cluster.
ZONE : the zone where you want to provision
your cluster.
NUMBER_OF_VMS : the number of VMs that you want for the
cluster.
This deployment provisions static compute nodes ,
which means that the cluster has a set number of nodes at all times. If you want to enable your
cluster to autoscale instead, use examples/machine-learning/a4-highgpu-8g/a4high-slurm-blueprint.yaml file and edit the values of
node_count_static and node_count_dynamic_max to match the following:
node_count_static: 0
node_count_dynamic_max: $(vars.a4h_cluster_size)
To create your deployment file, use a text editor to create a YAML file named
a4high-slurm-deployment.yaml and add the following content.
Tip: For a more detailed example, copy and paste the contents of
examples/machine-learning/a4-highgpu-8g/a4high-slurm-deployment.yaml
into a file in your workspace and edit it.
terraform_backend_defaults:
type: gcs
configuration:
bucket: BUCKET_NAME
vars:
deployment_name: DEPLOYMENT_NAME
project_id: PROJECT_ID
region: REGION
zone: ZONE
a4h_cluster_size: NUMBER_OF_VMS
a4h_enable_spot_vm: true
Replace the following:
BUCKET_NAME : the name of your Cloud Storage
bucket, which you created in the previous section.
DEPLOYMENT_NAME : a name for your deployment. If
creating multiple clusters, ensure that you select a unique name for each one.
PROJECT_ID : your project ID.
REGION : the region where you want to provision your cluster.
ZONE : the zone where you want to provision
your cluster.
NUMBER_OF_VMS : the number of VMs that you want for the
cluster.
The parameters that you need to add to your deployment file depend on the
consumption option that
you're using for your deployment. Select the tab that corresponds to your consumption option's
provisioning model.
Reservation-bound Flex-start Spot
More
To create your deployment file, use a text editor to create a YAML file named
a3ultra-slurm-deployment.yaml and add the following content.
Tip: For a more detailed example, copy and paste the contents of
examples/machine-learning/a3-ultragpu-8g/a3ultra-slurm-deployment.yaml
into a file in your workspace and edit it.
terraform_backend_defaults:
type: gcs
configuration:
bucket: BUCKET_NAME
vars:
deployment_name: DEPLOYMENT_NAME
project_id: PROJECT_ID
region: REGION
zone: ZONE
a3u_cluster_size: NUMBER_OF_VMS
a3u_reservation_name: RESERVATION_NAME
Replace the following:
BUCKET_NAME : the name of your Cloud Storage
bucket, which you created in the previous section.
DEPLOYMENT_NAME : a name for your deployment. If
creating multiple clusters, ensure that you select a unique name for each one.
PROJECT_ID : your project ID.
REGION : the region that has the reserved machines.
ZONE : the zone where you want to provision the cluster. If you're using a
reservation-based consumption option, the region and zone information was provided by your
account team when the
capacity was delivered .
NUMBER_OF_VMS : the number of VMs that you want for the
cluster.
RESERVATION_NAME : the name of your
reservation .
To create your deployment file, use a text editor to create a YAML file named
a3ultra-slurm-deployment.yaml and add the following content.
Tip: For a more detailed example, copy and paste the contents of
examples/machine-learning/a3-ultragpu-8g/a3ultra-slurm-deployment.yaml
into a file in your workspace and edit it.
terraform_backend_defaults:
type: gcs
configuration:
bucket: BUCKET_NAME
vars:
deployment_name: DEPLOYMENT_NAME
project_id: PROJECT_ID
region: REGION
zone: ZONE
a3u_cluster_size: NUMBER_OF_VMS
a3u_dws_flex_enabled: true
Replace the following:
BUCKET_NAME : the name of your Cloud Storage
bucket, which you created in the previous section.
DEPLOYMENT_NAME : a name for your deployment. If
creating multiple clusters, ensure that you select a unique name for each one.
PROJECT_ID : your project ID.
REGION : the region where you want to provision your cluster.
ZONE : the zone where you want to provision
your cluster.
NUMBER_OF_VMS : the number of VMs that you want for the
cluster.
This deployment provisions static compute nodes ,
which means that the cluster has a set number of nodes at all times. If you want to enable your
cluster to autoscale instead, use examples/machine-learning/a3-ultragpu-8g/a3ultra-slurm-blueprint.yaml file and edit the values of
node_count_static and node_count_dynamic_max to match the following:
node_count_static: 0
node_count_dynamic_max: $(vars.a3u_cluster_size)
To create your deployment file, use a text editor to create a YAML file named
a3ultra-slurm-deployment.yaml and add the following content.
Tip: For a more detailed example, copy and paste the contents of
examples/machine-learning/a3-ultragpu-8g/a3ultra-slurm-deployment.yaml
into a file in your workspace and edit it.
terraform_backend_defaults:
type: gcs
configuration:
bucket: BUCKET_NAME
vars:
deployment_name: DEPLOYMENT_NAME
project_id: PROJECT_ID
region: REGION
zone: ZONE
a3u_cluster_size: NUMBER_OF_VMS
a3u_enable_spot_vm: true
Replace the following:
BUCKET_NAME : the name of your Cloud Storage
bucket, which you created in the previous section.
DEPLOYMENT_NAME : a name for your deployment. If
creating multiple clusters, ensure that you select a unique name for each one.
PROJECT_ID : your project ID.
REGION : the region where you want to provision your cluster.
ZONE : the zone where you want to provision
your cluster.
NUMBER_OF_VMS : the number of VMs that you want for the
cluster.
The parameters that you need to add to your deployment file depend on the
consumption option that
you're using for your deployment. Select the tab that corresponds to your consumption option's
provisioning model.
Reservation-bound Flex-start Spot
More
To create your deployment file, create a YAML file named
a3mega-slurm-deployment.yaml and add the following content.
Tip: For a more detailed example, copy and paste the contents of
examples/machine-learning/a3-megagpu-8g/a3mega-slurm-deployment.yaml
into a file in your workspace and edit it.
terraform_backend_defaults:
type: gcs
configuration:
bucket: BUCKET_NAME
vars:
deployment_name: DEPLOYMENT_NAME
project_id: PROJECT_ID
region: REGION
zone: ZONE
a3m_cluster_size: NUMBER_OF_VMS
a3m_reservation_name: RESERVATION_NAME
Replace the following:
BUCKET_NAME : the name of your Cloud Storage
bucket, which you created in the previous section.
DEPLOYMENT_NAME : a name for your deployment. If
creating multiple clusters, ensure that you select a unique name for each one.
PROJECT_ID : your project ID.
REGION : the region that has the reserved machines.
ZONE : the zone where you want to provision the cluster. If you're using a
reservation-based consumption option, the region and zone information was provided by your
account team when the
capacity was delivered .
NUMBER_OF_VMS : the number of VMs that you want for the
cluster.
RESERVATION_NAME : the name of your
reservation .
To create your deployment file, create a YAML file named
a3mega-slurm-deployment.yaml and add the following content.
Tip: For a more detailed example, copy and paste the contents of
examples/machine-learning/a3-megagpu-8g/a3mega-slurm-deployment.yaml
into a file in your workspace and edit it.
terraform_backend_defaults:
type: gcs
configuration:
bucket: BUCKET_NAME
vars:
deployment_name: DEPLOYMENT_NAME
project_id: PROJECT_ID
region: REGION
zone: ZONE
a3m_cluster_size: NUMBER_OF_VMS
a3m_dws_flex_enabled: true
Replace the following:
BUCKET_NAME : the name of your Cloud Storage
bucket, which you created in the previous section.
DEPLOYMENT_NAME : a name for your deployment. If
creating multiple clusters, ensure that you select a unique name for each one.
PROJECT_ID : your project ID.
REGION : the region where you want to provision your cluster.
ZONE : the zone where you want to provision
your cluster.
NUMBER_OF_VMS : the number of VMs that you want for the
cluster.
This deployment provisions static compute nodes ,
which means that the cluster has a set number of nodes at all times. If you want to enable your
cluster to autoscale instead, use examples/machine-learning/a3-megagpu-8g/a3mega-slurm-blueprint.yaml file and edit the values of
node_count_static and node_count_dynamic_max to match the following:
node_count_static: 0
node_count_dynamic_max: $(vars.a3m_cluster_size)
To create your deployment file, create a YAML file named
a3mega-slurm-deployment.yaml and add the following content.
Tip: For a more detailed example, copy and paste the contents of
examples/machine-learning/a3-megagpu-8g/a3mega-slurm-deployment.yaml
into a file in your workspace and edit it.
terraform_backend_defaults:
type: gcs
configuration:
bucket: BUCKET_NAME
vars:
deployment_name: DEPLOYMENT_NAME
project_id: PROJECT_ID
region: REGION
zone: ZONE
a3m_cluster_size: NUMBER_OF_VMS
a3m_enable_spot_vm: true
Replace the following:
BUCKET_NAME : the name of your Cloud Storage
bucket, which you created in the previous section.
DEPLOYMENT_NAME : a name for your deployment. If
creating multiple clusters, ensure that you select a unique name for each one.
PROJECT_ID : your project ID.
REGION : the region where you want to provision your cluster.
ZONE : the zone where you want to provision
your cluster.
NUMBER_OF_VMS : the number of VMs that you want for the
cluster.
The parameters that you need to add to your deployment file depend on the
consumption option that
you're using for your deployment. Select the tab that corresponds to your consumption option's
provisioning model.
Reservation-bound Flex-start Spot
More
To create your deployment file, create a YAML file named
a3high-slurm-deployment.yaml and add the following content.
Tip: For a more detailed example, copy and paste the contents of
examples/machine-learning/a3-highgpu-8g/a3high-slurm-deployment.yaml
into a file in your workspace and edit it.
terraform_backend_defaults:
type: gcs
configuration:
bucket: BUCKET_NAME
vars:
deployment_name: DEPLOYMENT_NAME
project_id: PROJECT_ID
region: REGION
zone: ZONE
a3h_cluster_size: NUMBER_OF_VMS
a3h_reservation_name: RESERVATION_NAME
Replace the following:
BUCKET_NAME : the name of your Cloud Storage
bucket, which you created in the previous section.
DEPLOYMENT_NAME : a name for your deployment. If
creating multiple clusters, ensure that you select a unique name for each one.
PROJECT_ID : your project ID.
REGION : the region that has the reserved machines.
ZONE : the zone where you want to provision the cluster. If you're using a
reservation-based consumption option, the region and zone information was provided by your
account team when the
capacity was delivered .
NUMBER_OF_VMS : the number of VMs that you want for the
cluster.
RESERVATION_NAME : the name of your
reservation .
To create your deployment file, create a YAML file named
a3high-slurm-deployment.yaml and add the following content.
Tip: For a more detailed example, copy and paste the contents of
examples/machine-learning/a3-highgpu-8g/a3high-slurm-deployment.yaml
into a file in your workspace and edit it.
terraform_backend_defaults:
type: gcs
configuration:
bucket: BUCKET_NAME
vars:
deployment_name: DEPLOYMENT_NAME
project_id: PROJECT_ID
region: REGION
zone: ZONE
a3h_cluster_size: NUMBER_OF_VMS
a3h_dws_flex_enabled: true
Replace the following:
BUCKET_NAME : the name of your Cloud Storage
bucket, which you created in the previous section.
DEPLOYMENT_NAME : a name for your deployment. If
creating multiple clusters, ensure that you select a unique name for each one.
PROJECT_ID : your project ID.
REGION : the region where you want to provision your cluster.
ZONE : the zone where you want to provision
your cluster.
NUMBER_OF_VMS : the number of VMs that you want for the
cluster.
This deployment provisions static compute nodes ,
which means that the cluster has a set number of nodes at all times. If you want to enable your
cluster to autoscale instead, use examples/machine-learning/a3-highgpu-8g/a3high-slurm-blueprint.yaml file and edit the values of
node_count_static and node_count_dynamic_max to match the following:
node_count_static: 0
node_count_dynamic_max: $(vars.a3h_cluster_size)
To create your deployment file, create a YAML file named
a3high-slurm-deployment.yaml and add the following content.
Tip: For a more detailed example, copy and paste the contents of
examples/machine-learning/a3-highgpu-8g/a3high-slurm-deployment.yaml
into a file in your workspace and edit it.
terraform_backend_defaults:
type: gcs
configuration:
bucket: BUCKET_NAME
vars:
deployment_name: DEPLOYMENT_NAME
project_id: PROJECT_ID
region: REGION
zone: ZONE
a3h_cluster_size: NUMBER_OF_VMS
a3h_enable_spot_vm: true
Replace the following:
BUCKET_NAME : the name of your Cloud Storage
bucket, which you created in the previous section.
DEPLOYMENT_NAME : a name for your deployment. If
creating multiple clusters, ensure that you select a unique name for each one.
PROJECT_ID : your project ID.
REGION : the region where you want to provision your cluster.
ZONE : the zone where you want to provision
your cluster.
NUMBER_OF_VMS : the number of VMs that you want for the
cluster.
Provision a Slurm cluster
Cluster Toolkit provisions the cluster based on the deployment file you
created in the previous step and the default cluster blueprint. For more
information about the software that is installed by the blueprint, including
NVIDIA drivers and CUDA,
learn more about Slurm custom images .
To provision the cluster, run the command for your machine type from the
Cluster Toolkit directory. This step takes approximately 20-30 minutes.
A4X Max A4X A4 A3 Ultra A3 Mega A3 High
More
./gcluster deploy -d a4xmax-bm-slurm-deployment.yaml examples/machine-learning/a4x-maxgpu-4g-metal/a4xmax-bm-slurm-blueprint.yaml --auto-approve
Note: A4X Max uses the ARM64 architecture and runs on bare metal instances, so any software installed on these nodes must be compatible with that architecture.
./gcluster deploy -d a4xhigh-slurm-deployment.yaml examples/machine-learning/a4x-highgpu-4g/a4xhigh-slurm-blueprint.yaml --auto-approve
Note: A4X uses the ARM64 architecture, so any software installed on these VMs
must be compatible with that architecture.
./gcluster deploy -d a4high-slurm-deployment.yaml examples/machine-learning/a4-highgpu-8g/a4high-slurm-blueprint.yaml --auto-approve
./gcluster deploy -d a3ultra-slurm-deployment.yaml examples/machine-learning/a3-ultragpu-8g/a3ultra-slurm-blueprint.yaml --auto-approve
./gcluster deploy -d a3mega-slurm-deployment.yaml examples/machine-learning/a3-megagpu-8g/a3mega-slurm-blueprint.yaml --auto-approve
./gcluster deploy -d a3high-slurm-deployment.yaml examples/machine-learning/a3-highgpu-8g/a3high-slurm-blueprint.yaml --auto-approve
Connect to the Slurm cluster
To access your cluster, you must login to the Slurm login node. To login, you
can use either Google Cloud console or Google Cloud CLI.
Console gcloud
More
Go to the Compute Engine > VM instances page.
Go to the VM instances page
Locate the login node. It should have a name with the pattern
DEPLOYMENT_NAME + login-001 .
From the Connect column of the login node, click SSH .
To connect to the login node, complete the following steps:
Identify the login node by using the
gcloud compute instances list command .
gcloud compute instances list \
--zones= ZONE \
--filter="name ~ login" --format "value(name)"
If the output lists multiple Slurm clusters, you can identify your login
node by the DEPLOYMENT_NAME that you specified.
Use the gcloud compute ssh command
to connect to the login node.
gcloud compute ssh LOGIN_NODE \
--zone= ZONE --tunnel-through-iap
Replace the following:
ZONE : the zone where the VMs for your cluster
are located.
LOGIN_NODE : the name of the login node, which
you identified in the previous step.
Test network performance on the Slurm cluster
We recommended that you validate the functionality of provisioned clusters. To do so, use NCCL tests , which are NVIDIA Collective Communications Library (NCCL) tests that are optimized for the Google environment.
Redeploy the Slurm cluster
If you need to increase the number of compute nodes or add new partitions to
your cluster, you might need to update configurations for your Slurm cluster by
redeploying. Redeployment can be sped up by using an existing image from a
previous deployment. To avoid creating new images during a redeploy, specify the
--only flag.
To redeploy the cluster using an existing image do the following:
Connect to the cluster
Run the command for your required machine type:
A4X Max A4X A4 A3 Ultra A3 Mega A3 High
More
./gcluster deploy -d a4xmax-bm-slurm-deployment.yaml examples/machine-learning/a4x-maxgpu-4g-metal/a4xmax-bm-slurm-blueprint.yaml --only cluster-env,cluster --auto-approve -w
./gcluster deploy -d a4xhigh-slurm-deployment.yaml examples/machine-learning/a4x-highgpu-4g/a4xhigh-slurm-blueprint.yaml --only cluster-env,cluster --auto-approve -w
./gcluster deploy -d a4high-slurm-deployment.yaml examples/machine-learning/a4-highgpu-8g/a4high-slurm-blueprint.yaml --only cluster-env,cluster -w --auto-approve
./gcluster deploy -d a3ultra-slurm-deployment.yaml examples/machine-learning/a3-ultragpu-8g/a3ultra-slurm-blueprint.yaml --only cluster-env,cluster -w --auto-approve
./gcluster deploy -d a3mega-slurm-deployment.yaml examples/machine-learning/a3-megagpu-8g/a3mega-slurm-blueprint.yaml --only cluster-env,cluster -w --auto-approve
./gcluster deploy -d a3high-slurm-deployment.yaml examples/machine-learning/a3-highgpu-8g/a3high-slurm-blueprint.yaml --only cluster-env,cluster -w --auto-approve
This command is only for redeployments where an image already exists, it only
redeploys the cluster and its infrastructure.
Destroy the Slurm cluster
By default, the A4X Max, A4X, A4, and A3 Ultra blueprints enable deletion
protection on the Filestore instance. To delete the Filestore
instance when you destroy the Slurm cluster, disable deletion protection before
running the destroy command. For instructions, see set or remove deletion
protection on an existing
instance .
Disconnect from the cluster if you haven't already.
Before running the destroy command, navigate to the root of the Cluster Toolkit directory. By default, DEPLOYMENT_FOLDER is located at the root of the Cluster Toolkit directory.
To destroy the cluster, run:
./gcluster destroy DEPLOYMENT_FOLDER --auto-approve
Replace the following:
DEPLOYMENT_FOLDER : the name of the deployment folder. It's typically the same as DEPLOYMENT_NAME .
When destruction is complete you should see a message similar to the following:
Destroy complete! Resources: xx destroyed.
To learn how to cleanly destroy infrastructure and for advanced manual
deployment instructions, see the deployment folder located at the root of
the Cluster Toolkit directory: DEPLOYMENT_FOLDER /instructions.txt
What's next
Verify reservation consumption
View the topology of a compute instance
Learn how to manage host events:
Manage host events across compute instances
Manage host events across reservations
Monitor Compute Engine instances and Slurm clusters
Test and optimize with NCCL/gIB
Report faulty host
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-06 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español – América Latina
Français
Indonesia
Italiano
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
