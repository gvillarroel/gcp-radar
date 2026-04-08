---
title: "Optimize cluster networking by using NCCL/gIB \_|\_ AI Hypercomputer \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/nccl/overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/nccl/overview
  title: "Optimize cluster networking by using NCCL/gIB \_|\_ AI Hypercomputer \_\
    |\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Optimize cluster networking by using NCCL/gIB | AI Hypercomputer | Google Cloud Documentation
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
NCCL/gIB architecture
Benefits of using NCCL/gIB
Using NCCL/gIB
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Optimize cluster networking by using NCCL/ g IB
Stay organized with collections
Save and categorize content based on your preferences.
On this page
NCCL/gIB architecture
Benefits of using NCCL/gIB
Using NCCL/gIB
Modern machine learning frameworks often use the NVIDIA Collective Communications Library (NCCL) for GPU-to-GPU communication primitives.
Google's enhanced version of NCCL is called NCCL/gIB and is available on Google Cloud's A3 Ultra, A4, and A4X VMs. NCCL/gIB is often more performant than upstream NCCL on Google infrastructure. Because NCCL performance can impact overall workload performance, we recommend that you use NCCL/gIB.
NCCL/gIB contains Google-specific features and optimizations such as the following:
The gIB network plugin offers improved load balancing on Google's networks, leading to high throughput and low latency more consistently during collective operations.
A custom tuner plugin , which selects the best tuning options on Google Cloud VMs.
The CoMMA profiler plugin provides detailed performance metrics and diagnostic data for your workload.
NCCL/ g IB architecture
NCCL/gIB interacts with your machine learning framework and the NVIDIA GPUs on your clusters to optimize performance and gather telemetry, as shown in this diagram:
Benefits of using NCCL/ g IB
Although it's possible to use the upstream NVIDIA Collective Communications Library on Google Cloud VMs without stability problems, NCCL/gIB is better optimized for Google Cloud and the performance disparity can be very significant for certain communication patterns, even with the same NCCL parameters.
For example, the following graph shows a comparison of NCCL/gIB with upstream NCCL on AllReduce performance. NCCL/gIB outperforms upstream NCCL by as much as 12x on certain message sizes.
32-node NCCL AllReduce performance using A3 Ultra (H200) with no background traffic.
Similarly in a comparison of NCCL/gIB with upstream NCCL on AllGather performance with background traffic, NCCL/gIB outperforms upstream NCCL by approximately 50% on larger message sizes, as shown in this graph.
32-node NCCL AllGather performance using A3 Ultra (H200) on a shared fabric with a noisy background.
In addition, the CoMMA profiler plugin provides Google with improved custom telemetry, enabling us to better assist you should a workload-level issue arise.
Using NCCL/gIB
To run NCCL/gIB tests on your cluster, choose the page from the following list
that best meets your requirements:
Run NCCL tests on Compute Engine VMs
Run NCCL on GKE clusters that use default configuration
Run NCCL on custom GKE clusters that use A4X
Run NCCL on custom GKE clusters that use A4 or A3 Ultra
Run NCCL tests on Slurm clusters
Run NCCL tests in Cluster Director
To learn how to address any issues with your cluster after you have run your tests, see Collect and understand NCCL/gIB logs for troubleshooting .
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
