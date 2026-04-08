---
title: "GPU machine types \_|\_ AI Hypercomputer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/gpu
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/gpu
  title: "GPU machine types \_|\_ AI Hypercomputer \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

GPU machine types | AI Hypercomputer | Google Cloud Documentation
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
A4X Max and A4X series A4X Max (Bare metal)
A4X
A4 series A4
A3 series A3 Ultra
A3 Mega
A3 High
A3 Edge
What's next?
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
GPU machine types
Stay organized with collections
Save and categorize content based on your preferences.
On this page
A4X Max and A4X series A4X Max (Bare metal)
A4X
A4 series A4
A3 series A3 Ultra
A3 Mega
A3 High
A3 Edge
What's next?
This document describes the GPU machine series that AI Hypercomputer supports.
You can create Compute Engine instances and clusters that use these
machine series for running your artificial intelligence (AI), machine learning
(ML), and high performance computing (HPC) workloads.
To use GPUs on AI Hypercomputer, you can use most of the machine series from the
accelerator-optimized machine family. Each machine series in the
accelerator-optimized machine family uses a specific GPU model. For
more information about the accelerator-optimized machine family, see
Accelerator-optimized machine family .
The following section describes the accelerator-optimized machine series that
AI Hypercomputer supports.
A4X Max and A4X series
Caution: The Compute Engine Service Level Agreement (SLA)
doesn't apply to the A4X Max and A4X machine series.
This section outlines the available configurations for the A4X Max and A4X
machine series.
For more information about these machine series, see
A4X and A4X Max accelerator-optimized machine series
in the Compute Engine documentation.
A4X Max (Bare metal)
A4X Max
machine types use NVIDIA GB300 Grace Blackwell Ultra Superchips ( nvidia-gb300 ) and
are ideal for foundation model training and serving. A4X Max machine types are available
as bare metal instances .
A4X Max is an exascale platform based on
NVIDIA GB300
NVL72 . Each machine has two sockets with NVIDIA Grace CPUs with Arm
Neoverse V2 cores. These CPUs are connected to four NVIDIA B300 Blackwell GPUs with fast
chip-to-chip ( NVLink-C2C )
communication.
Note: When provisioning A4X Max instances, you
must reserve capacity to create instances
and clusters. You can then create instances that use the features and services available from
AI Hypercomputer. For more information, see
Deployment options overview .
Attached NVIDIA GB300 Grace Blackwell Ultra Superchips
Machine type
vCPU count 1
Instance memory (GB)
Attached Local SSD (GiB)
Physical NIC count
Maximum network bandwidth (Gbps) 2
GPU count
GPU memory 3 (GB HBM3e)
a4x-maxgpu-4g-metal
144
960
12,000
6
3,600
4
1,116
1 A vCPU is implemented as a single hardware hyper-thread on one of
the available CPU platforms .
2 Maximum egress bandwidth cannot exceed the number given. Actual
egress bandwidth depends on the destination IP address and other factors.
For more information about network bandwidth,
see Network bandwidth .
3 GPU memory is the memory on a GPU device that can be used for
temporary storage of data. It is separate from the instance's memory and is
specifically designed to handle the higher bandwidth demands of your
graphics-intensive workloads.
A4X
A4X
machine types use NVIDIA GB200 Grace Blackwell Superchips ( nvidia-gb200 ) and
are ideal for foundation model training and serving.
A4X is an exascale platform based on
NVIDIA GB200
NVL72 . Each machine has two sockets with NVIDIA Grace CPUs with Arm
Neoverse V2 cores. These CPUs are connected to four NVIDIA B200 Blackwell GPUs with fast
chip-to-chip ( NVLink-C2C )
communication.
Note: When provisioning A4X instances, you
must reserve capacity to create instances
and clusters. You can then create instances that use the features and services available from
AI Hypercomputer. For more information, see
Deployment options overview .
Attached NVIDIA GB200 Grace Blackwell Superchips
Machine type
vCPU count 1
Instance memory (GB)
Attached Local SSD (GiB)
Physical NIC count
Maximum network bandwidth (Gbps) 2
GPU count
GPU memory 3 (GB HBM3e)
a4x-highgpu-4g
140
884
12,000
6
2,000
4
744
1 A vCPU is implemented as a single hardware hyper-thread on one of
the available CPU platforms .
2 Maximum egress bandwidth cannot exceed the number given. Actual
egress bandwidth depends on the destination IP address and other factors.
For more information about network bandwidth,
see Network bandwidth .
3 GPU memory is the memory on a GPU device that can be used for
temporary storage of data. It is separate from the instance's memory and is
specifically designed to handle the higher bandwidth demands of your
graphics-intensive workloads.
A4 series
Note: You can use the Cluster Health Scanner (CHS) tool to troubleshoot your A4
machine series GPU clusters. For more information, see
Troubleshoot GPU clusters .
This section outlines the available configurations for the A4 machine series. For
more information about this machine series, see
A4 accelerator-optimized machine series
in the Compute Engine documentation.
A4
A4
machine types have
NVIDIA B200 Blackwell GPUs
( nvidia-b200 ) attached and are ideal for foundation model
training and serving.
Note: When provisioning A4 machine types, you must
reserve capacity to create instances or clusters, use Spot VMs, use
Flex-start VMs, or create a resize request in a MIG. For instructions on how to create A4
instances, see
Create VMs and clusters overview .
.
Attached NVIDIA B200 Blackwell GPUs
Machine type
vCPU count 1
Instance memory (GB)
Attached Local SSD (GiB)
Physical NIC count
Maximum network bandwidth (Gbps) 2
GPU count
GPU memory 3 (GB HBM3e)
a4-highgpu-8g
224
3,968
12,000
10
3,600
8
1,440
1 A vCPU is implemented as a single hardware hyper-thread on one of
the available CPU platforms .
2 Maximum egress bandwidth cannot exceed the number given. Actual
egress bandwidth depends on the destination IP address and other factors.
For more information about network bandwidth, see
Network bandwidth .
3 GPU memory is the memory on a GPU device that can be used for
temporary storage of data. It is separate from the instance's memory and is
specifically designed to handle the higher bandwidth demands of your
graphics-intensive workloads.
A3 series
Note: You can use the CHS tool to troubleshoot your A3 Ultra,
A3 Mega, and A3 High GPU clusters. For more information, see
Troubleshoot GPU clusters .
This section outlines the available configurations for the A3 machine series. For
more information about this machine series, see
A3 accelerator-optimized machine series
in the Compute Engine documentation.
A3 Ultra
A3 Ultra
machine types have NVIDIA H200 SXM GPUs
( nvidia-h200-141gb ) attached and provides the highest network
performance in the A3 series. A3 Ultra machine types are ideal for foundation model training and
serving.
Note: When provisioning A3 Ultra machine
types, you must reserve capacity to create instances or clusters, use Spot VMs, use
Flex-start VMs, or create a resize request in a MIG. For more information about the
parameters to set when creating an A3 Ultra instance, see
Create VMs and clusters overview .
Attached NVIDIA H200 GPUs
Machine type
vCPU count 1
Instance memory (GB)
Attached Local SSD (GiB)
Physical NIC count
Maximum network bandwidth (Gbps) 2
GPU count
GPU memory 3 (GB HBM3e)
a3-ultragpu-8g
224
2,952
12,000
10
3,600
8
1128
1 A vCPU is implemented as a single hardware hyper-thread on one of
the available CPU platforms .
2 Maximum egress bandwidth cannot exceed the number given. Actual
egress bandwidth depends on the destination IP address and other factors.
For more information about network bandwidth,
see Network bandwidth .
3 GPU memory is the memory on a GPU device that can be used for
temporary storage of data. It is separate from the instance's memory and is
specifically designed to handle the higher bandwidth demands of your
graphics-intensive workloads.
A3 Mega
A3 Mega
machine types have NVIDIA H100 SXM GPUs
and are ideal for large model training and multi-host inference.
Note: When provisioning
a3-megagpu-8g machine types, we recommend using a cluster of these instances and deploying
with a scheduler such as Google Kubernetes Engine (GKE) or Slurm. For detailed instructions on either of
these options, review the following:
To create Google Kubernetes Engine cluster, see
Deploy an A3 Mega cluster
with GKE .
To create a Slurm cluster, see
Deploy an A3 Mega Slurm cluster .
Attached NVIDIA H100 GPUs
Machine type
vCPU count 1
Instance memory (GB)
Attached Local SSD (GiB)
Physical NIC count
Maximum network bandwidth (Gbps) 2
GPU count
GPU memory 3 (GB HBM3)
a3-megagpu-8g
208
1,872
6,000
9
1,800
8
640
1 A vCPU is implemented as a single hardware hyper-thread on one of
the available CPU platforms .
2 Maximum egress bandwidth cannot exceed the number given. Actual
egress bandwidth depends on the destination IP address and other factors.
For more information about network bandwidth,
see Network bandwidth .
3 GPU memory is the memory on a GPU device that can be used for
temporary storage of data. It is separate from the instance's memory and is
specifically designed to handle the higher bandwidth demands of your
graphics-intensive workloads.
A3 High
A3 High
machine types have NVIDIA H100 SXM GPUs
and are well-suited for both large model inference and model fine tuning.
Note: When provisioning
a3-highgpu-1g , a3-highgpu-2g , or a3-highgpu-4g machine types,
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
Attached NVIDIA H100 GPUs
Machine type
vCPU count 1
Instance memory (GB)
Attached Local SSD (GiB)
Physical NIC count
Maximum network bandwidth (Gbps) 2
GPU count
GPU memory 3 (GB HBM3)
a3-highgpu-1g
26
234
750
1
25
1
80
a3-highgpu-2g
52
468
1,500
1
50
2
160
a3-highgpu-4g
104
936
3,000
1
100
4
320
a3-highgpu-8g
208
1,872
6,000
5
1,000
8
640
1 A vCPU is implemented as a single hardware hyper-thread on one of
the available CPU platforms .
2 Maximum egress bandwidth cannot exceed the number given. Actual
egress bandwidth depends on the destination IP address and other factors.
For more information about network bandwidth,
see Network bandwidth .
3 GPU memory is the memory on a GPU device that can be used for
temporary storage of data. It is separate from the instance's memory and is
specifically designed to handle the higher bandwidth demands of your
graphics-intensive workloads.
A3 Edge
A3 Edge
machine types have NVIDIA H100 SXM GPUs
and are designed specifically for serving and are available in
a limited set of regions .
Note: To get started with A3 Edge instances, see
Create an A3 VM with GPUDirect-TCPX enabled .
Attached NVIDIA H100 GPUs
Machine type
vCPU count 1
Instance memory (GB)
Attached Local SSD (GiB)
Physical NIC count
Maximum network bandwidth (Gbps) 2
GPU count
GPU memory 3 (GB HBM3)
a3-edgegpu-8g
208
1,872
6,000
5
600: for asia-south1 and northamerica-northeast2
400: for all other A3 Edge regions
8
640
1 A vCPU is implemented as a single hardware hyper-thread on one of
the available CPU platforms .
2 Maximum egress bandwidth cannot exceed the number given. Actual
egress bandwidth depends on the destination IP address and other factors.
For more information about network bandwidth,
see Network bandwidth .
3 GPU memory is the memory on a GPU device that can be used for
temporary storage of data. It is separate from the instance's memory and is
specifically designed to handle the higher bandwidth demands of your
graphics-intensive workloads.
What's next?
For more information about GPUs, see the following pages
in the Compute Engine documentation:
Learn about GPUs on Compute Engine .
Review the GPU regions and zones availability .
Learn about GPU pricing .
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
