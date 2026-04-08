---
title: "Network services for deployments \_|\_ AI Hypercomputer \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/networking-services
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/networking-services
  title: "Network services for deployments \_|\_ AI Hypercomputer \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Network services for deployments | AI Hypercomputer | Google Cloud Documentation
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
Configure networking for default GKE deployments
Networking for GKE deployments with custom configuration
Networking for Slurm cluster deployments
Networking for Compute Engine instances
What's next
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Network services for deployments
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Configure networking for default GKE deployments
Networking for GKE deployments with custom configuration
Networking for Slurm cluster deployments
Networking for Compute Engine instances
What's next
This document describes the network services you configure for
AI Hypercomputer cluster and VM deployments. The specific network
services you configure for AI Hypercomputer depend on the deployment
option you choose for your VMs or clusters.
This document is intended for architects, network engineers, and developers who want to
understand the network services for their
AI Hypercomputer deployments. This document assumes you have a basic
familiarity with cloud networking and distributed computing concepts. For more
information about deployment options, see VM and cluster creation
overview .
This document details the network services you configure for the following
deployment options:
Networking for a GKE deployment with a default
configuration
Networking for a GKE deployment using a custom
configuration
Networking for Slurm cluster deployment
Networking for Compute Engine instances
Configure networking for default GKE deployments
When you create an AI-optimized GKE cluster with default
settings , you define your
network settings in the Cluster Toolkit blueprint. The blueprint
changes based on the machine type you select. For example, the Cluster Toolkit
blueprint deploys a GKE cluster with an A4 machine.
The blueprint sets up the network in the following ways:
Uses the default VPC: The blueprint uses the default Virtual Private Cloud
network for the main GKE cluster.
Creates two additional VPCs: The blueprint sets up two distinct
Virtual Private Cloud networks. One is for a second host Network Interface Card (NIC),
and the other is for Graphics Processing Unit (GPU)-to-GPU Remote Direct
Memory Access (RDMA) traffic. By using this multiple VPC setup, you can improve network isolation. For more information, see Multi-VPC
environment .
Defines IP address ranges: The blueprint sets the private IP address
space for your GKE nodes. It configures secondary IP ranges
for Pods and Services. GKE uses IP address aliasing to
prevent IP address conflicts.
Applies an RDMA-optimized network profile: The blueprint applies a
pre-set, Google-managed network profile to the VPC used for GPU traffic.
This profile automatically configures the network for the high-speed and
low-delay performance that RDMA needs. For more information, see Network
profiles for specific use cases .
Automates subnet creation for RDMA: To ensure the best performance, the
blueprint automatically creates eight dedicated subnets within the RDMA VPC.
It creates one subnet for each of the eight RDMA NICs on an accelerator VM.
Configures firewall rules: The blueprint sets up firewall rules that
allow all Transmission Control Protocol (TCP), User Datagram Protocol (UDP),
and Internet Control Message Protocol (ICMP) traffic between nodes within
the cluster. This allows nodes to communicate freely. It also configures an
authorized Classless Inter-Domain Routing (CIDR) range to limit access to
the GKE cluster's control plane for security reasons.
Networking for GKE deployments with custom configuration
When you require more granular control than the default
Cluster Toolkit blueprints provide, manually configure the
network objects for an AI-optimized GKE cluster. This approach
lets you tailor the network setup to your workload-specific needs.
The configuration that you use depends
on whether you plan to run distributed AI workloads:
For non-distributed workloads: Create a GKE cluster
without GPUDirect RDMA. This method uses a single VPC network for all
communication.
For distributed workloads: Create a GKE cluster with
GPUDirect RDMA enabled. Enabling GPUDirect RDMA is essential for achieving optimal performance
at scale. This configuration involves a multi-VPC environment that separates
general-purpose traffic from high-bandwidth, low-latency GPU-to-GPU
communication.
For detailed, step-by-step instructions on creating a custom AI-optimized
GKE cluster for both scenarios, see Create a custom AI-optimized
GKE
cluster .
Networking for Slurm cluster deployments
You can use Cluster Toolkit to deploy high performance computing (HPC), AI, and ML workloads on Google Cloud through highly customizable and extensible blueprints. For example, when you create an AI-optimized
Slurm cluster with an A4 machine
type . This
section explains the network services configured in the
A4 blueprint ,
which helps you understand the network settings you can change when creating
Slurm clusters.
During deployment, the Cluster Toolkit blueprint uses
Packer
to automatically build a custom operating system (OS) image. Packer creates the
image by launching a temporary VM and running scripts to customize the boot
disk. You can customize the image using startup scripts, shell scripts, or
Ansible playbooks. The blueprint then uses this custom image to install the
required system software for cluster and workload management on the Slurm nodes.
The network components the blueprint configures are as follows:
Creates three distinct VPCs: The blueprint creates a primary VPC for the
Slurm control plane, a secondary VPC for general host-level traffic, and a
dedicated high-performance VPC for GPU-to-GPU communication. This separation
prevents management traffic from interfering with the workload data plane.
For more information, see Multi-VPC
environment .
Applies an RDMA-optimized network profile: For the GPU data plane, the
blueprint applies a pre-configured, Google-managed network profile optimized
for RoCE. It automatically creates eight subnets, one for each RDMA NIC on
the accelerator VMs. For more information, see Network profiles for
specific use cases .
Reserves an IP address range for shared storage: The blueprint sets a dedicated IP
address range required by the Filestore service.
Filestore provides the shared /home directory for the
cluster.
Provides an isolated image-build network: The blueprint creates a
temporary VPC used only during the process of building the custom VM image
for the cluster nodes. This provides an isolated network environment for
Packer operations.
For more deployment options, see the Cluster
Toolkit documentation.
Networking for Compute Engine instances
With Compute Engine, you can create standalone VMs, VM instances in bulk, and managed instance groups (MIGs) for various accelerator-optimized machine types.
These machine types require a multi-VPC network configuration to handle different kinds of traffic. This configuration separates general host-to-host traffic from high-bandwidth GPU-to-GPU communication. The specific network requirements vary depending on the machine type.
For detailed information about the NICs and network configuration for your machine type, see Review network bandwidth and NIC arrangement .
For step-by-step instructions on how to create these VPC networks, see Create VPC networks .
What's next
To identify the best deployment for your workload, see Recommended
configurations .
To understand the use case for each deployment option, see VM and cluster
creation overview .
To create an AI-optimized GKE cluster with default
configuration, see Create an AI-optimized GKE cluster with
default configuration .
To create a custom AI-optimized GKE cluster, see Create a
custom AI-optimized GKE
cluster .
To create an AI-optimized Slurm cluster with an A4 machine type, see Create
an AI-optimized Slurm cluster with an A4 machine
type .
To create an AI-optimized instance with A4 or A3 Ultra, see Create an
AI-optimized instance with A4 or A3
Ultra .
To create an AI-optimized instance with A3 Mega or A3 High, see Create an
AI-optimized instance with A3 Mega or A3 High .
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
