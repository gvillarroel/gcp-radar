---
title: "Test clusters \_|\_ AI Hypercomputer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/troubleshooting/test-clusters
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/troubleshooting/test-clusters
  title: "Test clusters \_|\_ AI Hypercomputer \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Test clusters | AI Hypercomputer | Google Cloud Documentation
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
Install CHS
Perform a health check
Check your configuration
What's next
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Test clusters
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Install CHS
Perform a health check
Check your configuration
What's next
This document explains how to test for issues with your
GPU clusters by using the cluster health scanner
(CHS) tool. If you want to test a cluster that you created in
Cluster Director, then see instead
Monitor cluster health .
The
CHS
tool checks the health of your GPU clusters, running
tests to verify that the clusters are ready to run your workloads. You can
use CHS to perform proactive health checks, or as a diagnostic tool when you
encounter problems with a workload. In addition to checking the configuration
of your cluster, you can perform the following tests:
NCCL check : validates the network communication between GPUs using the
NVIDIA Collective Communications Library (NCCL).
GPU check : utilizes NVIDIA's Data Center GPU Manager (DCGM) tool to
check the health of individual GPUs.
Neper check : uses the Neper tool to assess network performance within
the cluster.
Straggler detection : runs a network traffic pattern between nodes that
closely resemble patterns seen during LLM training workload pipeline
parallelism. Learn more about straggler detection .
Tinymax check : uses
Maxtext , an
open source LLM framework, to assess ML training within the cluster.
You can only run CHS checks and tests on nodes that aren't running any jobs or
workloads. If you try to run a check or a test on a busy node, the check or
test fails.
The CHS tool is available for GPU clusters that are orchestrated by
Google Kubernetes Engine (GKE) or Slurm, regardless of what provisioning model that
you used to create the clusters. However, CHS is only available for the
following machine types:
A4X Max
A4X
A4
A3 Ultra
A3 Mega
A3 High
The following sections describe how to install CHS, and then
how to use it to perform health checks and check your configuration.
Install CHS
Use the following procedure to install CHS:
Go to the Compute Engine > VM instances page.
Go to the VM instances page
Locate the login node. It might have a name with the pattern
DEPLOYMENT_NAME + login-001 .
From the Connect column of the login node, click SSH .
Use the following command to clone the repository and move to the root
directory for the repository:
git clone https://github.com/GoogleCloudPlatform/cluster-health-scanner && cd cluster-health-scanner
Use the following command to install dependencies for Google Cloud CLI:
pip3 install -r cli/requirements.txt
Optional: to let the configcheck command fetch configuration values from
your cluster without needing to reauthenticate for each machine, use the
following command to add your Google Cloud CLI SSH key to your local SSH agent:
ssh-add ~/.ssh/google_compute_engine
Use the following command to add the alias cluster_diag for
cluster_diag.py :
alias cluster_diag="python3 cli/cluster_diag.py"
Perform a health check
After you've installed CHS, do the following to check the health of your
GPU cluster:
Go to the Compute Engine > VM instances page.
Go to the VM instances page
Locate the login node. It might have a name with the pattern
DEPLOYMENT_NAME + login-001 .
From the Connect column of the login node, click SSH .
Verify that you're in the root directory for the repository.
Use the following command to check the current status of your
cluster:
cluster_diag -o ORCHESTRATOR healthscan GPU_TYPE status
Replace the following:
ORCHESTRATOR : either gke or slurm , depending on
which orchestrator you're using.
GPU_TYPE : the GPU machine type that you're using, which
can be one of the following values:
a4x-maxgpu-4g-metal
a4x-highgpu-4g
a4-highgpu-8g
a3-ultragpu-8g
a3-megagpu-8g
a3-highgpu-8g
a3-highgpu-4g
a3-highgpu-2g
a3-highgpu-1g
Use the following command to check the health of individual GPUs within your
cluster:
cluster_diag -o ORCHESTRATOR healthscan GPU_TYPE gpu
Replace the following:
ORCHESTRATOR : either gke or slurm , depending on
which orchestrator you're using.
GPU_TYPE : the GPU machine type that you're using, which
can be one of the following values:
a4x-maxgpu-4g-metal
a4x-highgpu-4g
a4-highgpu-8g
a3-ultragpu-8g
a3-megagpu-8g
a3-highgpu-8g
a3-highgpu-4g
a3-highgpu-2g
a3-highgpu-1g
Optional: use the following template command to run additional checks.
Consider adding the --run_only_on_available_nodes flag to skip unavailable
nodes:
cluster_diag -o ORCHESTRATOR healthscan GPU_TYPE CHECK
Replace the following:
ORCHESTRATOR : either gke or slurm , depending on
which orchestrator you're using.
GPU_TYPE : the GPU machine type that you're using, which
can be one of the following values:
a4x-maxgpu-4g-metal
a4x-highgpu-4g
a4-highgpu-8g
a3-ultragpu-8g
a3-megagpu-8g
a3-highgpu-8g
a3-highgpu-4g
a3-highgpu-2g
a3-highgpu-1g
CHECK : the check that you want to run. Use one of the
following options:
status
nccl
gpu
straggler
neper
tinymax
Check your configuration
After you've installed CHS, do the following to check the configuration of your
cluster:
Verify that you're in the root directory for the repository.
Use the following command to check the configuration of your cluster. By
default, this command produces a diff; to skip the diff and just print the
configuration, add the --no-diff flag:
cluster_diag -o ORCHESTRATOR configcheck GPU_TYPE
Replace the following:
ORCHESTRATOR : either gke or slurm , depending on
which orchestrator you're using.
GPU_TYPE : the GPU machine type that you're using, which
can be one of the following values:
a4x-maxgpu-4g-metal
a3-ultragpu-8g
a3-megagpu-8g
a3-highgpu-8g
a3-highgpu-4g
a3-highgpu-2g
a3-highgpu-1g
The following screenshot shows the result from a successful configuration check:
A successful configuration check result (click to enlarge).
What's next
Monitor Compute Engine instances and Slurm clusters
Troubleshoot slow performance
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
