---
title: "Cluster management capabilities \_|\_ AI Hypercomputer \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/cluster-capabilities
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/cluster-capabilities
  title: "Cluster management capabilities \_|\_ AI Hypercomputer \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Cluster management capabilities | AI Hypercomputer | Google Cloud Documentation
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
AI infrastructure resources colocation
Cluster topology-aware placement
Cluster operational mode
Cluster maintenance scheduling and controls Maintenance scheduling type
Manage host events
Cluster monitoring and diagnostic tooling
What's next?
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Cluster management capabilities
Stay organized with collections
Save and categorize content based on your preferences.
On this page
AI infrastructure resources colocation
Cluster topology-aware placement
Cluster operational mode
Cluster maintenance scheduling and controls Maintenance scheduling type
Manage host events
Cluster monitoring and diagnostic tooling
What's next?
The A4X Max ,
A4X , A4 ,
A3 Ultra , A3 Mega ,
and A3 High (8 GPUs) machine series are designed to enable you to
run large-scale artificial intelligence (AI) and machine learning (ML) clusters
and provide the following cluster management capabilities:
AI infrastructure resources colocation
Cluster topology-aware placement
Cluster operational mode
Cluster maintenance scheduling and controls
Cluster monitoring and diagnostic tooling
Note: Cluster management capabilities
aren't supported for A3 Mega or A3 High VMs that you created before October 1,
2025. To check if your A3 Mega or A3 High VMs have cluster management
capabilities, verify that the deploymentType field in the reservation that you
used to create the VMs is set to DENSE .
For more information about using A3 Mega or A3 High VMs in a cluster, contact
your account team.
AI infrastructure resources colocation
When you use A4X Max, A4X, A4, A3 Ultra, A3 Mega, and A3 High (8 GPUs), you can request
host machines that
Compute Engine provisions as close together as possible. These machines
offer the following features:
Compute Engine provisions the machines as
blocks of resources .
A
dynamic machine learning (ML) network fabric
interconnects the machines.
This resource arrangement minimizes network hops and optimizes for lowest
network latency. To learn more about how to obtain capacity to deploy densely
allocated blocks of accelerator-optimized machines, see
Capacity overview .
Cluster topology-aware placement
After you create compute instances by using
A4X Max, A4X, A4, A3 Ultra, A3 Mega, and A3 High (8 GPUs) machine types, you can get topology information at the node
and cluster levels. This information helps you do the following:
Adjust your application or workload design to further minimize network
latency.
Understand and troubleshoot network latency and performance issues for instances
that communicate frequently with each other. These issues can occur if the
instances are unexpectedly located far apart.
For more information, see
View compute instances topology .
Cluster operational mode
When you reserve capacity to create compute instances or clusters by using A4X Max, A4X, A4, A3 Ultra, A3 Mega, and A3 High (8 GPUs)
machine types, the machine type that you reserve determines the
cluster operational mode for the instances. This mode specifies how your
instances behave after
host errors or
faulty host reports. The available operational modes for an instance are
managed mode , where Compute Engine automatically replaces any faulty
machines but holds back part of your reserved capacity to help ensure that your
instances have the necessary resources to restart. Or all capacity mode , where you
have access to your full reserved capacity but are responsible for managing
failures and planned maintenance.
For more information, see
Reservation operational mode .
Cluster maintenance scheduling and controls
You control maintenance of A4X Max, A4X, A4, A3 Ultra, A3 Mega, and A3 High (8 GPUs) machines by using
topology-aware scheduling in a block of resources. This capability helps
synchronize upgrades so that your workloads are more resilient to host events
and minimize disruptions. This approach helps improve the
goodput of your workload .
To facilitate full control of maintenance events, you can use the following
features:
Maintenance scheduling type
Manage host events
Maintenance scheduling type
When you reserve capacity to create compute instances or clusters of A4X Max, A4X, A4, A3 Ultra, A3 Mega, and A3 High (8 GPUs)
machines, you can define how Compute Engine maintains the infrastructure
that your instances run on. Based on the machine type that you want to use for your
instances, you can choose between synchronized maintenance across instances ( grouped ), or
different maintenance schedules ( independent ).
For more information, see
Maintenance scheduling types .
Manage host events
After you create A4X Max, A4X, A4, A3 Ultra, A3 Mega, and A3 High (8 GPUs) instances and start your workload, you can set
up alerts and receive notifications when maintenance for your instances or reserved
blocks is scheduled, starts, or is completed. You can also view and, if needed,
manually start maintenance on an instance or reserved block before its scheduled time.
These options help you proactively control and minimize downtimes to your
workloads.
For more information, see the following:
Manage host events across instances
Manage host events across reservations
Cluster monitoring and diagnostic tooling
For monitoring and troubleshooting, A4X Max, A4X, A4, A3 Ultra, A3 Mega, and A3 High (8 GPUs) machines include the
following services:
VM health degradation prediction ,
which helps you identify VMs that are likely to degrade within the next five
hours.
Faulty host reporting ,
which you can use to flag issues with individual host machines.
Support for Cloud Monitoring metrics ,
which help you monitor networks and GPUs performance.
What's next?
Terminology
Choose a deployment strategy
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
