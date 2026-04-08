---
title: "Overview \_|\_ AI Hypercomputer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/nccl/comma
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/nccl/comma
  title: "Overview \_|\_ AI Hypercomputer \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Overview | AI Hypercomputer | Google Cloud Documentation
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
Collective Communication Analyzer (Co MMA)
Enable, disable, and configure Co MMA
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
Images that have CoMMA enabled
Benefits
Understand how CoMMA works
What's next
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Overview
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Images that have CoMMA enabled
Benefits
Understand how CoMMA works
What's next
This document describes the Collective Communication Analyzer (CoMMA), a
library for collecting NCCL telemetry for Google Cloud services.
NCCL telemetry collects performance metrics and operational events
that NCCL generates during its execution. The
NVIDIA Collective Communication Library (NCCL)
accelerates high-performance communication between GPUs running in parallel and
distributed computing systems. This high-performance communication is especially
useful for deep learning and high performance computing (HPC).
For NCCL versions 2.23 and later, NVIDIA introduced the NCCL profiler plugin
API ,
which lets developers register function callbacks to collect telemetry during
NCCL collective operations. Google provides the
Collective Communication Analyzer (CoMMA) ,
which is a library that uses NVIDIA's NCCL profiler plugin API to collect NCCL
telemetry for Google Cloud services. CoMMA automatically installs and enables
for some images, but you can also disable, re-enable, or manually install and
enable CoMMA to control data collection.
Images that have Co MMA enabled
For A4X Max, A4X, A4, A3 Ultra, A3 Mega, and A3 High (8 GPUs) machine types, CoMMA is installed and
automatically enabled when you use any images that packages
the NCCL Google Infrastructure Bundle (gIB) plugin. The following images contain
the NCCL gIB plugin:
Container-Optimized OS with containerd (cos_containerd)
node images: Google Kubernetes Engine (GKE) uses these images for creating
GKE Autopilot clusters. The CoMMA binaries are
available in the
/home/kubernetes/bin/gib directory.
Deep learning Software Layer container images :
you use these images to deploy and configure AI and ML frameworks
and libraries on GKE clusters.
If you use any of images and want to disable CoMMA from
collecting NCCL telemetry, see Disable CoMMA .
However, CoMMA must be enabled for features such as
straggler detection to function.
If you don't use these images and want to enable CoMMA to
collect NCCL telemetry, see Install CoMMA .
Benefits
The NCCL telemetry that CoMMA collects helps identify
performance bottlenecks, specifically stragglers, in GPU communication. CoMMA
collects fine-grained data, such as latency histograms for collective
communication operations. A diagnostic service can then process and use this
data to pinpoint stragglers.
Using CoMMA to collect telemetry offers the following benefits:
Required for straggler detection : CoMMA collects the fine-grained
NCCL telemetry to identify performance bottlenecks or stragglers in
GPU-to-GPU communication. CoMMA provides detailed NCCL telemetry that helps
identify and resolve issues in large-scale AI and ML training workloads.
For example, CoMMA captures the algorithm used in NCCL operations. This
information is valuable for performance analysis and tuning because
different algorithms can have significantly varying performance
characteristics based on workload and system configuration.
CoMMA also helps with the troubleshooting of suboptimal performance and
errors. It traces errors originating in lower-level transport layers, such
as TCP, RDMA, or switch fabrics, back to specific NCCL collectives and
initiating nodes.
Low-overhead tracing : CoMMA uses minimal computational resources during
active NCCL telemetry collection, making it ideal for performance-sensitive
and long-running machine learning workloads like large language model (LLM)
training.
Broaden NCCL telemetry scope : CoMMA uses the NCCL profiler plugin API.
This API collects a broader scope of NCCL telemetry in comparison to
transport-based plugins. Transport-based plugins primarily collect telemetry
about the underlying network transport, including data transfers over
network hardware and network protocols. The profiler plugin collects
telemetry for NCCL's communication operations, including the timing of
collective communications, proxy operations, and data transfers.
Understand how Co MMA works
During application runtime, NCCL automatically loads the CoMMA libraries
that are installed in the location specified by the LD_LIBRARY_PATH
environment variable. CoMMA then collects NCCL telemetry, which other Google
services can then use. You can also optionally export this data to your local
file system.
What's next
Learn how to enable, disable, and configure CoMMA .
Learn how to troubleshoot issues with CoMMA .
Learn how to detect and resolve stragglers .
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
