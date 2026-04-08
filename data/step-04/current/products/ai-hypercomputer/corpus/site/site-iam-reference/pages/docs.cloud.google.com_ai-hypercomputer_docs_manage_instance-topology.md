---
title: "View topology of a compute instance \_|\_ AI Hypercomputer \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/manage/instance-topology
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/manage/instance-topology
  title: "View topology of a compute instance \_|\_ AI Hypercomputer \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

View topology of a compute instance | AI Hypercomputer | Google Cloud Documentation
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
Manage how Co MMA collects NCCL telemetry
Collective Communication Analyzer (CoMMA)
Enable, disable, and configure CoMMA
Troubleshoot
Known issues
Troubleshoot slow performance
Troubleshoot reporting a faulty host
Troubleshoot Co MMA
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
Before you begin Required roles
Understand compute instance topology
View compute instance topology
View compute instance topology by querying metadata key
What's next
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
View topology of a compute instance
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin Required roles
Understand compute instance topology
View compute instance topology
View compute instance topology by querying metadata key
What's next
This document explains how to view the physical location of your
A4X Max, A4X, A4, A3 Ultra, A3 Mega, and A3 High (8 GPUs) Compute Engine instances that run on reserved
blocks of capacity.
After you
create A4X Max, A4X, A4, A3 Ultra, A3 Mega, and A3 High (8 GPUs) instances ,
you can view their arrangements to verify which instances are closest to each
other. By understanding instance proximity, you can do the following:
Adjust your application or workload design to further minimize network
latency.
Troubleshoot network latency or performance issues of
instances that communicate frequently, if they are unexpectedly located
far apart.
Before you begin
Review the terminology
that is used in Cluster Director features.
Select the tab for how you plan to use the samples on this page:
Console gcloud REST
More
When you use the Google Cloud console to access Google Cloud services and
APIs, you don't need to set up authentication.
In one of the following development environments, set up the gcloud CLI:
Cloud Shell : to use an online terminal with the gcloud CLI
already set up, activate Cloud Shell.
Activate Cloud Shell on this page
At the bottom of this page, a Cloud Shell session starts and displays a
command-line prompt. It can take a few seconds for the session to initialize.
Local shell : to use a local development environment,
install and
initialize the gcloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To use the REST API samples on this page in a local development environment, you use the
credentials you provide to the gcloud CLI.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
For more information, see
Authenticate for using REST
in the Google Cloud authentication documentation.
Required roles
To get the permissions that
you need to view compute instance topology,
ask your administrator to grant you the
Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 )
IAM role on your project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains
the permissions required to view compute instance topology. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to view compute instance topology:
To view the details of an instance:
compute.instances.get on the project
To view a list of instances:
compute.instances.list on the project
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Understand compute instance topology
When you view the details of a running compute instance, you can understand
its physical location in a cluster by checking the Physical host field
(for the Google Cloud console), or the physicalHostTopology field (for the
gcloud CLI, Compute Engine API, or by
querying the metadata key ). These fields contain the
following sub-fields:
cluster : the global name of the cluster.
block : the organization-specific ID of the reserved block where the
instance is located.
sub-block : the organization-specific ID of the sub-block where the
instance is located.
host : the organization-specific ID of the host where the instance runs
on.
To understand instance proximity, compare the values of the Physical host or
physicalHostTopology fields between instances. The more sub-fields the
instances share, the closer they are physically located.
You can also view the topology of a reservation in which the compute instances
are created. The physicalHostTopology fields of a reservation and an instance
show the same block and cluster fields. For example, when you view a
specific reserved block, you can view the name and sub-block of all the
instances that are deployed in the block. For more information about the
topology of a
reservation, see
View the topology of a reservation .
View compute instance topology
To view the physical location of multiple running compute instances at once,
use the REST API. Otherwise, select any of the following options:
Console gcloud REST
More
In the Google Cloud console, go to the VM instances page.
Go to VM instances
In the Name column, click the name of the instance that you want to
view the details of. A page that gives the details of the instance
appears and the Details tab is selected.
In the Basic information section, check the value of the
Physical host field.
To view the physical location of a running compute instance, use the
gcloud compute instances describe command
with the --flatten=resourceStatus.physicalHostTopology flag:
gcloud compute instances describe INSTANCE_NAME \
--flatten=resourceStatus.physicalHostTopology \
--zone= ZONE
Replace the following:
INSTANCE_NAME : the instance name.
ZONE : the zone where the instance exists.
The output is similar to the following:
---
cluster: europe-west1-cluster-jfhb
block: 3e3056e23cf91a5cb4a8621b6a52c100
subBlock: 0fc09525cbd5abd734342893ca1c083f
host: 1215168a4ecdfb434fd4d28056589059
To view the physical location of your running compute instances, make one of
the following GET requests. When you make a request, you must include the
fields query parameter and specify to only show the name , machineType ,
and physicalHostTopology fields of an instance. You must also include the
filter query parameter and specify to only list running instances.
To view a list of your instances across all zones:
instances.aggregatedList method
GET https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /aggregated/instances?fields=items.name,items.machineType,items.resourceStatus.physicalHostTopology&filter=status=RUNNING
To view a list of your instances in a specific zone:
instances.list method
GET https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /instances?fields=items.name,items.machineType,items.resourceStatus.physicalHostTopology&filter=status=RUNNING
Replace the following:
PROJECT_ID : the ID of the project where the instances
exist.
ZONE : the zone where the instances exist.
The output is similar to the following:
{
"items": [
{
"name": "vm-01",
"machineType": "https://www.googleapis.com/compute/v1/projects/example-project/zones/europe-west1-b/machineTypes/a3-ultragpu-8g",
"resourceStatus": {
"physicalHostTopology": {
"cluster": "europe-west1-cluster-jfhb",
"block": "3e3056e23cf91a5cb4a8621b6a52c100",
"subBlock": "0fc09525cbd5abd734342893ca1c083f",
"host": "1215168a4ecdfb434fd4d28056589059"
}
}
},
{
"name": "vm-02",
"machineType": "https://www.googleapis.com/compute/v1/projects/example-project/zones/europe-west1-b/machineTypes/a3-ultragpu-8g",
"resourceStatus": {
"physicalHostTopology": {
"cluster": "europe-west1-cluster-jfhb",
"block": "3e3056e23cf91a5cb4a8621b6a52c100",
"subBlock": "1fc18636cbd4abd623553784ca2c174e",
"host": "2326279b5ecdfc545fd5e39167698168"
}
}
},
...
]
}
If you want to refine your list of instances, then edit the filter
expression in the
filter query parameter .
View compute instance topology by querying metadata key
To view the physical location of a running compute instance by querying the
physical_host_topology metadata key, select one of the following options:
Linux instances Windows instances
More
Connect to your Linux compute instance.
From your Linux instance, create a query by using the
curl tool . To query the physical_host_topology
metadata key on Linux instances, run the following command:
user@myinst:~$ curl -s -H "Metadata-Flavor: Google" http://metadata.google.internal/computeMetadata/v1/instance/attributes/physical_host_topology
The output is similar to the following:
{
"cluster": "europe-west1-cluster-jfhb",
"block": "3e3056e23cf91a5cb4a8621b6a52c100",
"subBlock": "1fc18636cbd4abd623553784ca2c174e",
"host": "2326279b5ecdfc545fd5e39167698168"
}
Connect to your Windows compute instance.
From your Windows instance, create a query by using the
Invoke-RestMethod command .
To query the physical_host_topology metadata key on Windows instances,
run the following command:
PS C:\>
$value = (Invoke-RestMethod `
-Headers @{'Metadata-Flavor' = 'Google'} `
-Uri "http://metadata.google.internal/computeMetadata/v1/instance/attributes/physical_host_topology")
$value
The output is similar to the following:
{
"cluster": "europe-west1-cluster-jfhb",
"block": "3e3056e23cf91a5cb4a8621b6a52c100",
"subBlock": "1fc18636cbd4abd623553784ca2c174e",
"host": "2326279b5ecdfc545fd5e39167698168"
}
What's next
Learn how to manage host events:
Manage host events across compute instances
Manage host events across reservations
Monitor compute instances and clusters
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
