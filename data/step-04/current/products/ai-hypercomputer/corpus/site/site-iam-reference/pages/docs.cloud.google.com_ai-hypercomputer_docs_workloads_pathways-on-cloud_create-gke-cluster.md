---
title: "Create a GKE Cluster with Pathways \_|\_ AI Hypercomputer \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/workloads/pathways-on-cloud/create-gke-cluster
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/workloads/pathways-on-cloud/create-gke-cluster
  title: "Create a GKE Cluster with Pathways \_|\_ AI Hypercomputer \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Create a GKE Cluster with Pathways | AI Hypercomputer | Google Cloud Documentation
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
Before you begin
Set up your local environment Required variables
Create a GKE cluster
What's next
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Create a GKE Cluster with Pathways
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Set up your local environment Required variables
Create a GKE cluster
What's next
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
You can use the Accelerated Processing Kit (XPK)
to create pre-configured Google Kubernetes Engine (GKE) clusters for
Pathways-based workloads. You can also use gcloud to manually create
GKE clusters for Pathways-based workloads
Before you begin
Make sure you have:
Installed Kubernetes tools
Installed XPK
Enabled the TPU API
Enabled the Google Kubernetes Engine API
Set up your local environment
Log in with your Google Cloud credentials.
See more code actions.
Light code theme
Dark code theme
gcloud auth application-default login
Define the following environment variables with values appropriate to your
workload.
Required variables
Note: For more information about how to create a VPC network and subnet for XPK, see xpk-large-scale-guide.sh .
Create a GKE cluster
In the following example, you create a cluster with two v5e 2x4 node pools.
You can create a cluster using XPK or the gcloud command.
XPK gcloud
More
Set some environment variables
CLUSTER_NODEPOOL_COUNT = CLUSTER_NODEPOOL_COUNT
PROJECT = PROJECT_ID
ZONE = ZONE
CLUSTER = GKE_CLUSTER_NAME
TPU_TYPE = " v5litepod-8 "
PW_CPU_MACHINE_TYPE = " n2-standard-64 "
NETWORK = NETWORK
SUBNETWORK = SUB_NETWORK
Replace the following:
CLUSTER_NODEPOOL_COUNT : the maximum number of node pools a workload can use
PROJECT_ID : your Google Cloud project name
ZONE : the zone where you are creating resources
CLUSTER : the GKE cluster name
TPU_TYPE : the TPU type. For more information, see supported types in XPK
PW_CPU_MACHINE_TYPE : the CPU node type for the Pathways controller
NETWORK : [Optional] set a Virtual Private Cloud name if using XPK, this must be created before creating your cluster
SUBNETWORK : [Optional] set a subnetwork name if using XPK, this must be created before creating your cluster
Use XPK to create a GKE Pathways cluster. This command can take several
minutes to provision the capacity. Once completed, your capacity is
allocated and you will start incurring charges.
xpk cluster create-pathways \
--num-slices = ${ CLUSTER_NODEPOOL_COUNT } \
--tpu-type = ${ TPU_TYPE } \
--pathways-gce-machine-type = ${ PW_CPU_MACHINE_TYPE } \
--on-demand \
--project = ${ PROJECT } \
--zone = ${ ZONE } \
--cluster = ${ CLUSTER } \
--custom-cluster-arguments = "--network= ${ NETWORK } --subnetwork= ${ SUBNETWORK } --enable-ip-alias"
Once the cluster is created, you can create and delete workloads as needed. You
don't need to re-provision the TPU capacity.
Set some environment variables
CLUSTER = GKE_CLUSTER_NAME
PROJECT = PROJECT_ID
ZONE = ZONE
REGION = REGION
CLUSTER_VERSION = GKE_CLUSTER_VERSION
PW_CPU_MACHINE_TYPE = " n2-standard-64 "
NETWORK = NETWORK
SUBNETWORK = SUB_NETWORK
CLUSTER_NODEPOOL_COUNT = 3
TPU_MACHINE_TYPE = " ct5lp-hightpu-4t "
WORKERS_PER_SLICE = 2
TOPOLOGY = " 2x4 "
NUM_CPU_NODES = 1
Replace the following:
CLUSTER : the GKE cluster name
PROJECT_ID : your Google Cloud project name
ZONE : the zone where you are creating resources
REGION : the region where you are creating resources
CLUSTER_VERSION : [Optional] the GKE cluster version, use 1.32.2-gke.1475000 or later
PW_CPU_MACHINE_TYPE : the CPU node type for the Pathways controller
NETWORK : [Optional] set a Virtual Private Cloud name if using XPK, this must be created before creating your cluster
SUBNETWORK : [Optional] set a subnetwork name if using XPK, this must be created before creating your cluster
CLUSTER_NODEPOOL_COUNT : the maximum number of node pools a workload can use
TPU_MACHINE_TYPE : the TPU machine type you want to use
WORKERS_PER_SLICE : the number of nodes per node pool
GKE_ACCELERATOR_TYPE : the Google Kubernetes Engine accelerator type, see Choose a TPU version
TOPOLOGY : the TPU topology
NUM_CPU_NODES : the Pathways CPU node pool size
The following steps explain how to create a GKE cluster and
set it up for running Pathways workloads.
Create a GKE cluster:
gcloud beta container clusters create ${ CLUSTER } \
--project = ${ PROJECT } \
--zone = ${ ZONE } \
--cluster-version = ${ CLUSTER_VERSION } \
--scopes = storage-full,gke-default,cloud-platform \
--machine-type ${ PW_CPU_MACHINE_TYPE } \
--network = ${ NETWORK } \
--subnetwork = ${ SUBNETWORK }
Create TPU node pools:
for i in $( seq 1 ${ CLUSTER_NODEPOOL_COUNT } ) ; do
gcloud container node-pools create "tpu-np- ${ i } " \
--project = ${ PROJECT } \
--zone = ${ ZONE } \
--cluster = ${ CLUSTER } \
--machine-type = ${ TPU_MACHINE_TYPE } \
--num-nodes = ${ WORKERS_PER_SLICE } \
--placement-type = COMPACT \
--tpu-topology = ${ TOPOLOGY } \
--scopes = storage-full,gke-default,cloud-platform \
--workload-metadata = GCE_METADATA
done
Create a CPU node pool:
gcloud container node-pools create "cpu-pathways-np" \
--project ${ PROJECT } \
--zone ${ ZONE } \
--cluster ${ CLUSTER } \
--machine-type ${ PW_CPU_MACHINE_TYPE } \
--num-nodes ${ NUM_CPU_NODES } \
--scopes = storage-full,gke-default,cloud-platform \
--workload-metadata = GCE_METADATA
Install the JobSet and PathwaysJob APIs
Get credentials for the cluster and add them to your local kubectl context.
Note: in the following command, if you are using zonal clusters, specify
--zone , if you are using regional clusters, specify --region .
gcloud container clusters get-credentials ${ CLUSTER } \
[ --zone = ${ ZONE } | --region = ${ REGION } ] \
--project = ${ PROJECT } \
&& kubectl config set-context --current --namespace = default
To use the Pathways architecture on your GKE cluster, you need to install the
JobSet API and the PathwaysJob API.
kubectl apply --server-side -f https://github.com/kubernetes-sigs/jobset/releases/download/v0.8.0/manifests.yaml
kubectl apply --server-side -f https://github.com/google/pathways-job/releases/download/v0.1.2/install.yaml
What's next
Run a batch workload with Pathways
Pathways interactive mode
Multihost inference with Pathways
Resilient training with Pathways
Porting JAX workloads to Pathways
Troubleshoot Pathways
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
