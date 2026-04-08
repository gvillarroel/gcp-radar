---
title: "Review compute instance and cluster configurations \_|\_ AI Hypercomputer\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/create/review-configurations
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/create/review-configurations
  title: "Review compute instance and cluster configurations \_|\_ AI Hypercomputer\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Review compute instance and cluster configurations | AI Hypercomputer | Google Cloud Documentation
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
Configuration factors for compute instance and cluster creation
Provisioning models Reservation-bound provisioning model
Flex-start provisioning model
Spot provisioning model
Cluster deployment tools
Reservation block deployment types
Reservation operational mode Managed mode
All capacity mode
Maintenance scheduling types Grouped maintenance scheduling
Independent maintenance scheduling
What's next?
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Review compute instance and cluster configurations
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Configuration factors for compute instance and cluster creation
Provisioning models Reservation-bound provisioning model
Flex-start provisioning model
Spot provisioning model
Cluster deployment tools
Reservation block deployment types
Reservation operational mode Managed mode
All capacity mode
Maintenance scheduling types Grouped maintenance scheduling
Independent maintenance scheduling
What's next?
This document describes the configurations in AI Hypercomputer to
consider before you create Compute Engine instances and clusters.
Reviewing the available configurations helps ensure optimal performance for your
workloads, as well as minimize downtimes and performance issues.
Configuration factors for compute instance and cluster creation
Before you create compute instances and clusters to run your workloads, consider
which configuration to use:
The provisioning model
The cluster deployment tools
If you use the reservation-bound provisioning model, then you must also
consider the following factors:
The reservation block deployment type
The reservation operational mode
The maintenance scheduling type
Provisioning models
Based on the
consumption option that you choose
for creating compute instances or clusters, you can use one of the following provisioning
models to obtain the necessary resources for creating instances:
Reservation-bound : you can reserve resources at a discounted price for a
future date and duration. At the start of your reservation period, you can
use the reserved resources to create instances or clusters. You have exclusive
access to your reserved resources for the reservation period.
Flex-start : you can request discounted resources for up to seven days.
Compute Engine makes best-effort attempts to schedule the provisioning of
your requested resources as soon as they're available. You have exclusive
access to your obtained resources for your requested period.
Spot : based on availability, you can immediately obtain deeply
discounted resources. However, Compute Engine might stop or delete
instances at any time to reclaim capacity.
Reservation-bound provisioning model
The reservation-bound provisioning model links your created compute instances to
the capacity that you previously reserved. When you reserve capacity,
Compute Engine creates an empty reservation. Then, at the reservation
start time, the following occurs:
Compute Engine adds your reserved number of instances to the
reservation. You have exclusive access to the reserved capacity until the
reservation end time.
Google Cloud charges you for the reserved capacity until the end of your
reservation period, whether you use the capacity or not.
You can then use the reserved resources to create instances without
additional charges. You only pay for resources that aren't included in the
reservation, such as disks or IP addresses.
To specify the reservation-bound provisioning model when you create compute
instances or MIGs, do the following:
In the Google Cloud console, in the Provisioning model list, select
Reservation-bound .
In the Google Cloud CLI, include the
--provisioning-model=RESERVATION_BOUND flag in the command.
In the Compute Engine API, include the
"provisioningModel": "RESERVATION_BOUND" field in the request body.
For more information about setting these parameters when you create instances
or MIGs after you reserve capacity, see
Compute instance and cluster creation overview .
If you use Cluster Toolkit to deploy your clusters, then the cluster
blueprint sets the provisioning model for you.
Flex-start provisioning model
The flex-start provisioning model lets you create standalone
Flex-start VMs or add Flex-start VMs to a managed
instance group (MIG) when your requested capacity is available. When you add
Flex-start VMs to a MIG by using resize requests, the MIG creates
the instances all at once. This approach helps you avoid unnecessary charges for
partial capacity that Compute Engine might deliver while you wait for
the full capacity needed to start your workload. The flex-start provisioning
model provisions resources from a secure capacity pool, which helps to increase
your chances of obtaining high-demand resources like GPUs.
To specify the flex-start provisioning model when creating a standalone instance
or an instance template for a MIG, do the following:
In the Google Cloud console, in the Provisioning model list, select
Flex-start .
In the gcloud CLI, include the --provisioning-model=FLEX_START
flag in the command.
In the Compute Engine API, include the
"provisioningModel": "FLEX_START" field in the request body.
For more information about creating instances or clusters that use flex-start
provisioning model, see the following documents:
Create a standalone instance
Create MIGs with resize requests
Create Slurm clusters
Create GKE clusters:
Create a cluster with the default configuration
Create a custom cluster
Spot provisioning model
The spot provisioning model lets you create deeply-discounted compute instances
based on availability. However, Compute Engine might stop or delete the
created instances at any time to reclaim capacity. This process is called
preemption .
To specify the spot provisioning model when you create instances or MIGs,
do the following:
In the Google Cloud console, in the Provisioning model list, select
Spot .
In the gcloud CLI, include the --provisioning-model=SPOT flag
in the command.
In the Compute Engine API, include the "provisioningModel": "SPOT"
field in the request body.
For more information about setting these parameters when you create instances
or MIGs, see
Compute instance and cluster creation overview .
Cluster deployment tools
Cluster Toolkit is an open source
deployment tool that is recommended for creating GPU-accelerated clusters.
Cluster Toolkit can deploy both Google Kubernetes Engine (GKE)
or Slurm clusters.
Alternatively, you can choose to provision your groups of compute instances by
using one of the following methods, and then incorporate your own workload
scheduler as needed:
Create standalone instances
Create instances in bulk
Create a managed instance group (MIG)
Reservation block deployment types
If you use the reservation-bound provisioning model when
creating A4X Max, A4X, A4, A3 Ultra, A3 Mega, and A3 High (8 GPUs) compute instances or clusters, the machines you
receive are automatically deployed within blocks of densely allocated hosts.
This deployment offers the following benefits:
Non-blocking networking for consistent high-bandwidth, low-latency instance
connectivity by using dynamic machine learning (ML) network fabric
from Google.
Access to network topology that provides a hierarchical view of the relative
proximity among instances. This feature is useful for advanced job
scheduling use cases.
Fine-grained, topology-aware placement when you use orchestrators.
Fine-grained user control over maintenance schedules to maximize job
scheduling and uptime, and minimize downtimes.
Reservation operational mode
Important: Only A4X Max, A4X, A4, and A3 Ultra instances support reservation
operational mode.
If you use the reservation-bound provisioning model , then
the machine type that you reserve determines the reservation operational mode
for your reserved capacity. Each mode defines how to respond to host errors or
faulty host reports, as well as your level of visibility and control over the
reservation's infrastructure.
Each reservation operational mode defines the following:
Who manages recovery : you or Google Cloud.
What capacity you use for recovery : only your reserved capacity, or
capacity within or outside your reservations.
Your level of placement control : whether you can view and start
maintenance before the planned time for specific reservation sub-blocks for
fine-grained control.
When you reserve capacity to create compute instances or clusters, you must
choose between one of the following reservation operational modes:
managed mode or all capacity mode .
Managed mode
Important: Only A4 and A3 Ultra instances support managed mode.
In managed mode, Google Cloud automatically manages the maintenance and
recovery process of your compute instances after host errors or faulty host
reports. This approach is ideal when your workload requires high stability, and
you prefer an automated process to minimize downtimes.
The managed mode has the following features:
Only use reserved capacity for recovery : Compute Engine only
uses your reserved capacity to restart instances. If there's no
available capacity in your reservations, then Compute Engine only
restarts instances after you obtain more capacity.
Automated instance restarts : Google Cloud handles the entire recovery
process for an instance. When host maintenance is required, Compute Engine
automatically migrates your instances on other available machines
within your reservation and restarts the instances.
Block management and visibility : you can view the topology, health, and
maintenance status of individual reservations and reservation blocks. You
can also receive maintenance notifications, and optionally start maintenance
before the scheduled maintenance time, for these resources.
Potential API rate limits : calls to the report faulty host API may be
rate-limited per reservation.
All capacity mode
Important: Only A4X Max and A4X instances support all capacity mode.
In all capacity mode, you are responsible for managing a compute instance
recovery process. You must manually start maintenance after host errors or
faulty host reports. Unlike the managed mode, you can also view and start
maintenance for your reservation sub-blocks. These features give you full,
granular control over the maintenance and recovery process for your instances.
The all capacity mode has the following features:
Use reserved and unreserved capacity for recovery : you can use your
reserved resources, as well as any resources that are available outside of
your reservation, to help you migrate and restart an instance when
its host fails.
Manual instance restarts : you're responsible for the recovery process
of an instance.
When host maintenance is required because of an host error or faulty host
report, Compute Engine stops your instance. You can only restart
the instance after maintenance completes.
Block and sub-block management and visibility : you can view the
topology, health, and maintenance status of individual reservations,
reservation blocks, and reservation sub-blocks. You can also receive
maintenance notifications, and optionally start maintenance before the
scheduled maintenance time, for these resources.
No API rate limits : there are no rate limits when you make calls to the
report faulty host API.
Maintenance scheduling types
Important: Only A4X Max, A4X, A4, and A3 Ultra instances support maintenance
scheduling.
If you use the reservation-bound provisioning model , then
Cluster Director provides options for scheduling host maintenance for
the running compute instances in your cluster. When you reserve capacity, you
can specify whether to group instances and have synchronized maintenance
scheduling ( grouped ), or the instances can be loosely coupled and have
independent maintenance scheduling ( independent ).
Grouped maintenance scheduling
The grouped maintenance scheduling type helps ensure that, no matter when
Compute Engine provisions a compute instance, all instances running the
same workload have the same planned maintenance frequency. This tightly-coupled
maintenance lets you optimize your job's performance by giving you complete
control over your used and unused capacity.
A group maintenance scheduling type is useful in the following cases:
Your environment uses a job scheduler, such as Slurm or GKE.
You want to run training or other highly parallelized-computing workloads.
Independent maintenance scheduling
Important: Only A4 and A3 Ultra instances support independent
maintenance scheduling.
This independent maintenance scheduling type gives instances different
maintenance schedules. This configuration is ideal if you want to run inference
or limited-scale training where workloads run more efficiently when they have
separate maintenance schedules.
What's next?
Reserve capacity
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
