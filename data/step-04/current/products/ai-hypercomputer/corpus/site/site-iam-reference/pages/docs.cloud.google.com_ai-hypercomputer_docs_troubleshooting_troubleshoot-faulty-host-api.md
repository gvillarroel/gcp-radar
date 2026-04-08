---
title: "Troubleshoot report faulty host API errors \_|\_ AI Hypercomputer \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/troubleshooting/troubleshoot-faulty-host-api
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/troubleshooting/troubleshoot-faulty-host-api
  title: "Troubleshoot report faulty host API errors \_|\_ AI Hypercomputer \_|\_\
    \ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Troubleshoot report faulty host API errors | AI Hypercomputer | Google Cloud Documentation
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
Error messages Compute instance deleted during a running operation
Compute instance not part of a reservation
Duplicate faulty host report operations
Fault reason is missing
Incorrect machine type
Rate limit exceeded
Unsupported compute instance state
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Troubleshoot report faulty host API errors
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Error messages Compute instance deleted during a running operation
Compute instance not part of a reservation
Duplicate faulty host report operations
Fault reason is missing
Incorrect machine type
Rate limit exceeded
Unsupported compute instance state
This document explains how to resolve errors that you might encounter when using
the report faulty host API .
Error messages
When you use the report fault host API, you might encounter one of the following
errors.
Compute instance deleted during a running operation
This error occurs when you delete a compute instance while a faulty host report
operation is still in progress.
Error messages :
See more code actions.
Light code theme
Dark code theme
INTERNAL_ERROR
Resolution : Before you delete a compute instance, verify that the
reportHostAsFaulty operation has completed .
Otherwise, the report faulty host operation fails.
Compute instance not part of a reservation
This error occurs when you report a compute instance that was created without
using a reservation.
Error message :
See more code actions.
Light code theme
Dark code theme
INSTANCES_WITHOUT_RESERVATION_NOT_SUPPORTED
Resolution : Verify that you created the compute instance by using the
reservation-bound provisioning model .
To report a faulty host for an A4X Max, A4X, A4, A3 Ultra, A3 Mega, and A3 High (8 GPUs) instance that uses the
flex-start or spot provisioning model, contact your account team.
Duplicate faulty host report operations
This error occur when you send a request to the repair faulty host API while
another request is already in progress for the same compute instance.
Additionally, your compute instance may remain in the REPAIRING state.
Error message :
FAILED_WITH_UNEXPECTED_STATUS
Resolution : Wait until the
first report faulty host operation completes
before you send another request to the API. If the compute instance is
unresponsive, then restart the compute instance before you send another request
to the API.
Fault reason is missing
This error occurs when you don't specify the faultReasons field in a report
faulty host request.
Error message :
FAULT_REASONS_EMPTY_SHOULD_BE_SPECIFIED
Resolution : The faultReasons field is required. To resolve this issue,
specify the
faultReasons field
in your request.
Incorrect machine type
This error occurs when the compute instance uses an unsupported machine type.
Error message :
MACHINE_TYPE_NOT_SUPPORTED
Resolution : The report faulty host API supports only A4X Max, A4X, A4, A3 Ultra, A3 Mega, and A3 High (8 GPUs)
machine types.
Rate limit exceeded
Error message :
RATE_LIMIT_EXCEEDED
Reason : You exceeded the request limit for the
instances.reportHostAsFaulty method, or Google lacks sufficient capacity to
fulfill your request.
Unsupported compute instance state
This error occurs when the compute instance is in an unsupported state.
Error message :
INSTANCE_SHOULD_BE_RUNNING
Resolution : Before you send a request to the report faulty host API, verify
that the compute instance is in the
RUNNING state .
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
