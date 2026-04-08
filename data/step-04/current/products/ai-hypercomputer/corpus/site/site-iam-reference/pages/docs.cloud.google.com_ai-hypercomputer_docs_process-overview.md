---
title: "Cluster creation overview \_|\_ AI Hypercomputer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/process-overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/process-overview
  title: "Cluster creation overview \_|\_ AI Hypercomputer \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Cluster creation overview | AI Hypercomputer | Google Cloud Documentation
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
Before you begin
Start a cluster Determine your workload and choose a machine type
Choose a consumption option and obtain capacity
Choose a deployment option
Choose an orchestrator
Choose the operating system image
Create your cluster
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Cluster creation overview
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Start a cluster Determine your workload and choose a machine type
Choose a consumption option and obtain capacity
Choose a deployment option
Choose an orchestrator
Choose the operating system image
Create your cluster
This document summarizes how you create a cluster for your AI workloads on
AI Hypercomputer. Specifically, this document guides you through
the process and choices to make when starting a cluster.
Tip: For a quick end-to-end tutorial that deploys an A4 machine type
on Slurm, see instead
Create an AI-optimized Slurm cluster with an A4 machine type .
Before you begin
You must have a pre-existing workload that you want to support.
You must be familiar with commonly used terminology for AI and ML
workloads, such as model training and inference.
Start a cluster
Starting a cluster involves the following steps:
Determine your workload and choose a machine type
Choose a consumption option and obtain capacity
Choose a deployment option
Choose an orchestrator
Choose the operating system and cluster image
Create your cluster
Determine your workload and choose a machine type
Select a machine type for your AI workload. AI Hypercomputer
supports cluster creation by using the A4X Max, A4X, A4, and A3 machine series.
Consider the following recommendations for machine usage:
For foundational model training and inference : A4X Max or A4X
Caution: The Compute Engine Service Level Agreement (SLA)
doesn't apply to the A4X Max and A4X machine series.
For large model training, fine-tuning, and inference : A4 or A3 Ultra
For mainstream model inference and fine tuning : A3 Mega or A3 High (8 GPUs)
For serving inference : A3 Edge
For detailed information about each machine series, see GPU machine
types . For detailed information about workload
recommendations for each machine, see Recommended
configurations .
Choose a consumption option and obtain capacity
Select a consumption option for
your GPU resources based on your workload availability and chosen machine type.
For example, to use the A4X Max or A4X machine types, you must reserve capacity
for a specific date and time by using the future reservations consumption
model. The following options summarize the consumption models:
Future reservations : Available for A4X Max, A4X, A4, and A3 Ultra machine types,
with dense resource allocation and up to 53% discount for vCPUs and GPUs.
Future reservations are ideal for workloads that require stability for an
extended period of time, such as pre-training foundation models or
multi-host foundation model inference. To use this consumption option, you
must request capacity through your account team for a future start date and
time.
Future reservations in calendar mode : Available for A4, A3 Ultra,
A3 Mega, and A3 High (8-GPU VMs only) machine types, with dense resource
allocation and up to 53% discount for vCPUs and GPUs. Future reservations in calendar mode help
you reserve resources for workloads that run for up to 90 days and require
stability, such as pre-training or fine-tuning models. However, to use this
consumption option, you must create a reservation request to reserve
resources at a future date and time, and Google Cloud must approve your
request.
Flex-start : Available for all GPU machine types, except A4X Max and A4X.
Flex-start lets you create short-lived, dense clusters that last up to seven
days and have discounts of up to 53% for vCPUs and GPUs for A2 machine types
and later. You can create Flex-start clusters directly through
Compute Engine, Cluster Director, Cluster Toolkit, or
GKE. However, clusters aren't available immediately; Google
creates them as soon as resources are available.
Spot : Available for all GPU machine types, except A4X Max and A4X.
Spot VMs lets you create compute resources immediately based on
availability; however, Compute Engine can
preempt virtual machine (VM) instances
at any time. Spot VMs are priced at the largest possible
discount on Compute Engine (between 61% and 90%).
For more information about consumption options, see Comparison of consumption
options .
Choose a deployment option
Depending on the level of control that you need over your cluster deployment,
choose between a highly managed or a less managed deployment that gives you more
control over your infrastructure.
Highly managed
If you want Google to deploy and set up your infrastructure, then use
Cluster Director, Cluster Toolkit, or
GKE.
Cluster Director : a
Google Cloud product that automates the complex setup and
configuration of clusters, helping you configure compute, networking, and
storage resources for your clusters to maximize performance and minimize
downtimes. Cluster Director is designed for IT administrators and
AI researchers who want to avoid the overhead of managing a cluster, and
instead focus on running their workloads.
Cluster Toolkit : an
open source tool offered by Google that simplifies cluster configuration and
deployment for GKE or Compute Engine. You use
predefined blueprints to deploy common configurations, such as A4 machine
types with Slurm. You can modify blueprints to customize deployments and
your software stack.
GKE :
a managed Kubernetes service and open source container orchestration
platform. GKE offers features like autoscaling and high
availability. It's also able to orchestrate containerized applications,
support specialized hardware, and is compatible with the Google Cloud
ecosystem, making it well-suited for deploying and managing AI or ML
workloads. You can deploy GKE clusters by using GKE
directly or by using Cluster Toolkit. You can choose between
GKE Standard or Autopilot mode.
Less managed, more control
For more granular control over your clusters and the software installed on them,
create a Compute Engine cluster by using managed Compute Engine
instance groups (MIGs) or by creating instances in bulk. Then, manually
install any key software you need on the instances.
Choose an orchestrator
An orchestrator automates the management of your clusters. With an orchestrator,
you don't have to manage each compute instance in the cluster. An orchestrator,
such as Slurm or GKE, handles tasks like job queueing, resource allocation,
auto scaling (in case of GKE), and other day-to-day cluster
management tasks.
Slurm : Slurm is an open source orchestrator commonly used for HPC, AI,
or ML workloads. To use Slurm, you can use Cluster Toolkit (which
offers cluster blueprints that automatically install Slurm on your
clusters), or you can manually install Slurm on a Compute Engine cluster.
GKE : GKE is a managed service built on top
of Kubernetes, an open-source container orchestration platform.
GKE is ideal for deploying and managing AI or ML workloads,
because of its ability to orchestrate containerized applications, its
support of specialized hardware, and its place in the Google Cloud
ecosystem. You can deploy GKE clusters by using
GKE directly or by using Cluster Toolkit.
Bring your own orchestrator : If you want to use other orchestrators,
then you must use them on your Compute Engine clusters. However, creating
a Compute Engine cluster is the least managed option offered on
Google Cloud. This choice means that you're responsible for setting up,
maintaining, and updating your instances.
Choose the operating system image
Depending on whether you use GKE or Compute Engine, select an
image that contains your selected operating system, such as
Container-Optimized OS for GKE clusters, or an accelerator
OS image for Compute Engine clusters. In addition, you can also select a Deep
Learning Software Layer (DSLS) image for your containers.
For detailed information, review AI Hypercomputer
images .
Images for GKE clusters
To create GKE clusters, we recommend that you use the default
container OS images for both Standard and Autopilot modes. However, in
Standard mode, you can also choose to use other available images, like Ubuntu.
If you use Cluster Toolkit to deploy your cluster, then you can only
use container OS images, as these are the images built into the cluster
blueprints. For more information about each node image, see Node
images in the GKE
documentation.
GKE also offers Deep Learning Software Layer (DLSL) container
images that install packages like NVIDIA CUDA, and NCCL, as well as ML
frameworks like PyTorch, providing a ready-to-use environment for deep learning
workloads. These prebuilt DLSL container images are tested and verified to work
seamlessly on GKE clusters.
OS images for Compute Engine clusters
AI Hypercomputer offers images optimized for running AI and ML
workloads using Compute Engine. Choose the OS you are most familiar with:
Rocky Linux 9 accelerator
Rocky Linux 8 accelerator
Ubuntu 24.04 LTS accelerator
Ubuntu 22.04 LTS accelerator
If you use Cluster Toolkit, then these accelerator images are already
bundled into Cluster Toolkit blueprints, because
Cluster Toolkit creates custom images that extend the Ubuntu LTS
Accelerator OS images.
For more information about each OS image, see Operating system
details in the Compute Engine documentation.
Create your cluster
After you review the cluster creation process and make preliminary decisions
for your workload, create your cluster by using one of the following options:
Create a GKE cluster:
Create a GKE cluster by using Cluster Toolkit
Create a custom GKE cluster
Create a Slurm cluster by using Cluster Toolkit
Create a cluster with Compute Engine:
Create a single instance
Create instances in bulk
Create a managed instance group
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
