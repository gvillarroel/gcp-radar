---
title: "Compact placement policy and workload policy overview \_|\_ AI Hypercomputer\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/placement-policy-and-workload-policy
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/placement-policy-and-workload-policy
  title: "Compact placement policy and workload policy overview \_|\_ AI Hypercomputer\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Compact placement policy and workload policy overview | AI Hypercomputer | Google Cloud Documentation
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
Compact placement policy for VMs
Workload policy for MIGs
Comparison of compact placement policy and workload policy Comparison of maximum distance values
What's next
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Compact placement policy and workload policy overview
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Compact placement policy for VMs
Workload policy for MIGs
Comparison of compact placement policy and workload policy Comparison of maximum distance values
What's next
This document provides an overview and comparison of compact placement policies
and workload policies. Both policies let you configure the placement of virtual
machine (VM) instances to minimize network latency. Use compact placement
policies for instances that are created individually or in bulk, and use
workload policies for managed instance groups (MIGs).
By default, you manage the location of your VMs only by specifying their zones.
When you use future reservations or Flex-start with MIG resize requests to
obtain A4X, A4, A3 Ultra, A3 Mega, and A3 High (8 GPUs) machines, the VM resources that you receive are
densely colocated
by default. However, you might want to place specific VMs more closely together
to optimize inter-VM performance in each application. To place VMs closer
together, you can apply compact placement policies to VMs or high-throughput
workload policies to MIGs.
Compact placement policy for VMs
When you apply compact placement policies to your VMs, Compute Engine
makes best-effort attempts to create VMs as close to each other as possible. If
your application is latency-sensitive and you want the VMs to be as close
together as possible (maximum compactness), then specify the maxDistance field
( Preview ) when
creating a compact placement policy.
For more information, see
About compact placement policies
in the Compute Engine documentation.
Workload policy for MIGs
A workload policy lets you specify the type of the workload that you want
to run on your infrastructure. You can also specify the physical properties
of the underlying infrastructure, such as the VM placement, to best match
the specified type.
You make the following configuration settings for a workload policy:
Workload type ( type ): for high throughput ( high-throughput ) workloads,
Compute Engine makes best-effort attempts to place VMs as close as
possible to each other. The VM placement depends on the machine type and zone
availability of the VMs.
Additional requirement for using strict colocation or accelerator topology of
VMs. You can specify one of the following:
Strict colocation of VMs ( maxTopologyDistance ): to achieve granular,
low-latency network performance. A strict colocation means that, in addition
to the best-effort to place your VMs as close to each other as possible, you
can further specify the maximum distance between the VMs. If the strict
colocation requirement is not met due to capacity constraints, the MIG
doesn't create the VMs.
Accelerator topology of VMs ( acceleratorTopology ): to achieve high
performance for distributed workloads which run across multiple VMs that use
a specialized inter-accelerator network configuration—for example,
A4X VMs that use NVLink Domains for GPUs.
Comparison of compact placement policy and workload policy
The following table summarizes the differences between compact placement
policies and workload policies:
Compact placement policy
Workload policy
Use with these resources
Standalone instances
Instances deployed using Bulk API
Managed instance groups (MIGs)
Supported machine types
All GPU families
A4X, A4, A3 Ultra, A3 Mega, and A3 High (8 GPUs)
Grouping semantics
Compute Engine places the instances that use the same
compact placement policy closer together.
We recommend that you use a different placement policy for each
workload. Reusing a placement policy across instances that run different
workloads causes all those instances to be placed together.
This colocation can make it difficult to create instances that are close
together when you scale out a specific workload.
Compute Engine places the instances in a MIG that uses a
workload policy closer together.
Reusing a workload policy across multiple MIGs that run different
workloads places the instances in individual MIGs together. Reusing is
ideal for large training models in which each group of
instances has to be isolated from each other.
VM colocation configuration
For best-effort VM colocation, set the
groupPlacementPolicy.collocation field to
COLLOCATED .
For best-effort VM colocation, set the
workloadPolicy.type field to HIGH_THROUGHPUT .
Additional configurations
For strict VM placement, specify the maxDistance
field.
For GPU families supporting partitioning,
such as A4X, specify the
gpuTopology field.
For strict VM placement, specify the maxTopologyDistance
field.
For GPU families supporting partitioning,
such as A4X, specify the
acceleratorTopology field.
Comparison of maximum distance values
A lower maximum distance value ensures closer VM placement, but it also
increases the chance that some VMs won't be created.
The following table shows the machine series and number of VMs that each
maximum distance value supports:
max Distance in a compact placement policy
max Topology Distance in a workload policy
Description
Supported machine series
Maximum number of VMs
Unspecified (Not recommended)
Unspecified (Not recommended)
Compute Engine makes best-effort attempts to place the VMs as close to each
other as possible, but with no maximum distance between VMs.
A4, A3 Ultra, A3 Mega, A3 High (8 GPUs)
1500
3
cluster
Compute Engine creates VMs in adjacent blocks.
A4
1,500
2
block
Compute Engine creates VMs in the same block.
A4 and A3 Ultra
For A4 VMs: 150
For A3 Ultra, A3 Mega, and A3 High (8 GPUs) VMs: 256
What's next
Create an instance
Create instances in bulk
Create a MIG
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
