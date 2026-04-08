---
title: "Benchmarking recipes \_|\_ AI Hypercomputer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/workloads/overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/workloads/overview
  title: "Benchmarking recipes \_|\_ AI Hypercomputer \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Benchmarking recipes | AI Hypercomputer | Google Cloud Documentation
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
Overview
Recipes
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Benchmarking recipes
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Overview
Recipes
To support you with running your workloads, we have curated a set of
reproducible benchmark recipes that use some of the most common machine learning
(ML) frameworks and models. These are stored in GitHub repositories. To access
these repositories, see
AI Hypercomputer GitHub organization .
These benchmark recipes were tested on clusters created using
Cluster Toolkit.
Important: Benchmark recipes are only supported for VMs that use
future reservations .
Overview
Before you get started with these recipes, ensure that you have completed the
following steps:
Choose an accelerator that best suits your workload. See
Choose a deployment strategy .
Select a consumption method based on your accelerator of choice, see
Consumption options .
Create your cluster based on the type of accelerator selected. See
Cluster deployment guides .
Recipes
The following reproducible benchmark recipes are available for pre-training
and inference on GKE clusters.
To search the catalog, you can filter by a combination of your framework,
model, and accelerator.
NeMo
MaxText
SGLang
TensorRT-LLM
vLLM
Select one or more options Select framework NeMo
MaxText
SGLang
TensorRT-LLM
vLLM
DeepSeek R1 671B
GPT3-175B
Llama3 70B
Llama3.1 70B
Llama-3.1-405B
Mixtral-8-7B
Select one or more options Select model DeepSeek R1 671B
GPT3-175B
Llama3 70B
Llama3.1 70B
Llama-3.1-405B
Mixtral-8-7B
A3 Ultra
A3 Mega
Select one or more options Select accelerator A3 Ultra
A3 Mega
Inference
Pre-training
Select one or more options Select workload Inference
Pre-training
Clear all
Recipe name
Accelerator
Model
Framework
Workload type
DeepSeek R1 671B
A3 Mega
DeepSeek R1 671B
SGLang
Inference on GKE
DeepSeek R1 671B
A3 Mega
DeepSeek R1 671B
vLLM
Inference on GKE
DeepSeek R1 671B
A3 Ultra
DeepSeek R1 671B
SGLang
Inference on GKE
DeepSeek R1 671B
A3 Ultra
DeepSeek R1 671B
vLLM
Inference on GKE
GPT3-175B
- A3 Mega
A3 Mega
GPT3-175B
NeMo
Pre-training on GKE
Llama-3.1-405B - A3 Ultra
A3 Ultra
Llama-3.1-405B
MaxText
Pre-training on GKE
Llama-3.1-405B - A3 Ultra
A3 Ultra
Llama-3.1-405B
NeMo
Pre-training on GKE
Llama-3.1-405B - A3 Ultra (Resiliency)
A3 Ultra
Llama-3.1-405B
NeMo
Pre-training on GKE
Llama3
70B - A3 Mega
A3 Mega
Llama3 70B
NeMo
Pre-training on GKE
Llama3.1
70B A3 Mega
A3 Mega
Llama3.1 70B
NeMo
Pre-training on GKE
Llama3.1 70B - A3 Ultra
A3 Ultra
Llama3.1 70B
MaxText
Pre-training on GKE
Llama3.1 70B - A3 Ultra
A3 Ultra
Llama3.1 70B
NeMo
Pre-training on GKE
Mixtral
8x7B - A3 Mega
A3 Mega
Mixtral 8x7B
NeMo
Pre-training on GKE
Mixtral-8-7B - A3 Ultra
A3 Ultra
Mixtral-8-7B
NeMo
Pre-training on GKE
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
