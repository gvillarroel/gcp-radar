---
title: "GPU networking overview \_|\_ AI Hypercomputer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/networking-overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/networking-overview
  title: "GPU networking overview \_|\_ AI Hypercomputer \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

GPU networking overview | AI Hypercomputer | Google Cloud Documentation
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
GPU network architecture
Technologies for GPU-to-GPU communication
GPU networking stacks
Host and storage data plane network
Multi-VPC environment
Networking libraries and components
What's next
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
GPU networking overview
Stay organized with collections
Save and categorize content based on your preferences.
On this page
GPU network architecture
Technologies for GPU-to-GPU communication
GPU networking stacks
Host and storage data plane network
Multi-VPC environment
Networking libraries and components
What's next
AI Hypercomputer is a supercomputing system that helps
you deploy multi-host artificial intelligence (AI) and machine learning (ML)
workloads using GPU machines. The underlying network services you use in the
deployment are determined by the GPU machine type
that you choose.
This document is intended to help architects, network engineers, and developers
understand the underlying network services that relate to the GPU machines. This
document assumes you have basic familiarity with cloud networking and
distributed computing concepts.
Understanding the GPU machine networking services is the first step to
successfully deploying and managing your workloads, and is essential for
optimizing performance and goodput . Goodput, or good throughput, measures the
effective progress a system makes on an ML training task. This metric offers
additional insights when compared to metrics such as total time elapsed or raw
throughput rate.
Some GPU machine types feature a distinct, layered hierarchy
that optimizes communication at every level. This hierarchy ranges from the data
center fabric to AI-optimized clusters and Compute Engine instances. The following sections
explain these hierarchical components.
GPU network architecture
AI Hypercomputer helps you deploy GPU
machines that use a hierarchical, rail-aligned
network architecture. This design's predictable, high-performance
connectivity minimizes communication overhead, which directly improves goodput
by allowing GPUs to spend more time on computation rather than waiting for data.
The rail-aligned arrangement of GPUs consists of three main components:
Sub-blocks: These are foundational units, which are made up of a group
of hosts that are physically co-located on a single rack. A top-of-rack (ToR)
switch connects these hosts, enabling extremely efficient, single-hop
communication between any two GPUs within the sub-block. RDMA over Converged
Ethernet (RoCE) facilitates this direct communication. An enhanced NCCL
library that's optimized for Google's rail-aligned topology handles GPU
communication collectives.
Blocks: These are made up of multiple sub-blocks that are interconnected
with non-blocking fabric, which enables a high-bandwidth interconnect. Any
GPU within a block is reachable in a maximum of two network hops. The system
exposes block and sub-block metadata to enable optimal job placement.
Clusters: These are formed by multiple interconnected blocks, which can
scale to thousands of GPUs, and enable you to run large-scale training
workloads. Communication across different blocks adds only one additional
hop, maintaining high performance and predictability even at massive scale.
To enable intelligent, large-scale job placement, cluster-level metadata is
also available to orchestrators.
Technologies for GPU-to-GPU communication
GPU machines use a combination of technologies to provide high performance, high
throughput, and low latency for workloads. These technologies include RDMA over
Converged Ethernet (RoCE), NVIDIA NICs, and Google's datacenter-wide
rail-aligned network topology.
These machine types use NVIDIA's NVLink technology to create ultra-high-speed,
direct data paths between the NVIDIA NICs on each machine. Additionally, RoCE
enables efficient RDMA between GPUs on different machines.
GPU networking stacks
A networking stack is a collection of software protocols, drivers, and layers
that work together to implement GPU-to-GPU communication. Different GPU machine
types use different networking stacks. The following table defines the
networking stacks and their associated machine types:
Networking stack
Description
GPU machine type
GPUDirect RDMA GPUDirect RDMA enables a direct path for data
exchange between a GPU and another device. For A4X Max and A4X instances,
this networking stack uses RDMA over Converged Ethernet (RoCE). This technology
lets peer devices directly read from and write to the GPU's memory,
bypassing the CPU to create a more efficient connection for high-performance
data exchange. For more information, see Cluster
configuration options with GPUDirect RDMA .
A4X Max (with attached GB300 Ultra superchips)
A4X (with attached GB200 superchips)
A4 (with attached NVIDIA B200 GPUs)
A3 Ultra machine types (with attached NVIDIA H200 GPUs)
GPUDirect-TCPXO GPUDirect-TCPXO improves on GPUDirect-TCPX by
offloading the TCP protocol. Using GPUDirect-TCPXO, the A3 Mega machine type
doubles the network bandwidth compared to the A3 High and A3 Edge machine
types. For information on maximizing network bandwidth on GKE clusters
that use GPUDirect-TCPXO, see Maximize
GPU network bandwidth in Standard mode clusters and select the
GPUDirect-TCPXO tab.
A3 Mega (with attached H100 GPUs)
GPUDirect-TCPX
GPUDirect-TCPX increases network performance by
allowing data packet payloads to transfer directly from GPU memory to the
network interface. For information on maximizing network bandwidth on GKE clusters that use GPUDirect-TCPX, see Maximize
GPU network bandwidth in Standard mode clusters and select the
GPUDirect-TCPX tab.
A3 High (with attached NVIDIA H100 GPUs)
Host and storage data plane network
A separate network path handles all traffic that is not direct GPU-to-GPU
communication. This traffic includes access to Cloud Storage, host-level
management, and communication with other Google Cloud services. To manage this
traffic, the GPU machine types use Google
Titanium NICs .
Titanium NICs offload network processing tasks from the CPU,
freeing the CPU to focus on your workloads. This separation ensures that
general-purpose traffic and dedicated GPU-to-GPU traffic use different physical
interfaces, preventing them from competing for the same system resources.
Multi-VPC environment
All workloads operate within Google Cloud's
Virtual Private Cloud (VPC).
High-performance accelerator machines feature a specialized hardware design that
uses multiple physical network interfaces to handle different types of traffic.
To handle this specialized hardware design, a multi-VPC environment is required,
regardless of whether you whether you use Slurm, GKE, or
Compute Engine to run your workloads.
The specific multi-VPC configuration depends on the GPU machine type and its
networking stack:
A4X Max, A4X, A4, and A3 Ultra with GPUDirect RDMA: These machines use the
default VPC network for general-purpose host traffic (gVNIC) and require
one additional VPC network for general-purpose host traffic, and
one shared VPC network for all GPU-to-GPU traffic. The GPU-traffic VPC
must have the RDMA network profile enabled. For more information on this
configuration for A4 VMs and A3 Ultra VMs, see Create VPC and
subnets .
A3 Mega with GPUDirect-TCPXO: These machines require eight separate VPCs
for the GPU NICs, which are dedicated to high-bandwidth communication. For detailed
steps on how to complete this configuration, see Create VPCs and
subnets .
A3 High with GPUDirect-TCPX: These machines require four separate VPCs
for the GPU NICs, which are dedicated to high-bandwidth communication. For detailed
steps on how to complete this configuration, see Create VPCs and
subnets .
This multi-VPC configuration ensures that storage operations and other system
tasks don't compete for bandwidth with critical GPU-to-GPU communications.
The required multi-VPC network configuration that you need to set up differs
based on your GPU machine type. For a detailed guide on network arrangement,
bandwidth speeds, and NICs for all supported GPU machine types, see Networking
and GPU machines .
The following diagram shows the network architecture for a
GPU machine, highlighting the separation of
general-purpose traffic and dedicated GPU-to-GPU traffic onto different network
planes.
As shown in the preceding diagram, the GPU machines use dedicated network paths
for different types of traffic. General-purpose traffic, including management
and storage access, flows through Google Titanium NICs which are
connected to a
VPC. High-performance GPU-to-GPU communication uses separate
network interfaces and VPCs, optimized with technologies like RDMA, ensuring
high bandwidth and low latency for AI and ML workloads.
Networking libraries and components
To maximize network bandwidth and
performance, the following networking libraries and components enable you
to use GPUs with Google's networking stack:
gVNIC: The Google Virtual NIC (gVNIC) is a virtual network interface
designed specifically for Compute Engine. gVNIC enhances
performance, increases consistency, and reduces noisy neighbor problems. It
is supported and recommended on all machine families, machine types, and
generations, and is the recommended vNIC for host-to-host communication. For
more information, see Using Google Virtual
NIC .
NCCL: The NVIDIA Collective Communications Library (NCCL) provides optimized
primitives for collective communication operations. It is specifically
designed for multi-GPU and multi-node environments, using NVIDIA GPUs and
networking. Run NCCL tests to evaluate the performance of deployed clusters.
For more information, see Deploy and run NCCCL
test .
GKE multi-networking: Multi-network support for Pods
enables multiple interfaces on nodes and Pods in a
GKE cluster. For details on how to set up multi-networking in
the context of GPUDirect, see Maximize GPU network bandwidth in Standard
mode clusters
and Cluster configuration options with GPUDirect
RDMA .
For more details on the software stacks that are available, see OS and Docker images .
What's next
Learn about network services for cluster and VM
deployments .
Learn about the best practices for networking in
AI Hypercomputer
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
