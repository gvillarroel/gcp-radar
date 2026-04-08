---
title: "Troubleshoot slow performance \_|\_ AI Hypercomputer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/troubleshooting/troubleshoot-slow-performance
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/troubleshooting/troubleshoot-slow-performance
  title: "Troubleshoot slow performance \_|\_ AI Hypercomputer \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Troubleshoot slow performance | AI Hypercomputer | Google Cloud Documentation
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
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Troubleshoot slow performance
Stay organized with collections
Save and categorize content based on your preferences.
This document explains how to troubleshoot slow performance that you've
identified for workloads that run on AI-optimized VMs or clusters.
To learn how to identify slow performance, see
Monitor Compute Engine instances and Slurm clusters .
Identify and address any suspected stragglers for your workload :
Complete the following steps:
Check if you can use straggler detection for your workload. To review
the limitations and requirements for using straggler detection,
see
Monitor Compute Engine instances and Slurm clusters .
If you can't use straggler detection, then
use other options for troubleshooting slow-performance .
To check if any VMs for your workload are suspected stragglers, view
straggler detection metrics.
For example, to visualize all the suspected stragglers for your project
in Cloud Monitoring, complete the following steps:
Tip: Alternatively, if you want to filter the suspected stragglers for
your project, follow the instructions to
view straggler detection logs
and specify the
query for logs with suspected stragglers for specific VMs .
In the Google Cloud console, go to the dashboard Dashboards page:
Go to Dashboards
If you use the search bar to find this page, then select the result whose subheading is
Monitoring .
In the Type arrow_right
section of the filters pane, click Google Services .
In the Name column, click
Cluster Director Health Monitoring .
The details page for the dashboard opens.
Use the time-range selector in the toolbar to select the time range
of the slow performance. Straggler detection typically takes up to
10 minutes to report a straggler.
To check if any VMs for your workload are suspected stragglers,
review the Straggler Detection section. Use this query to
see if the Suspected Straggler Instances table lists any VMs
for your workload.
Based on the number of VMs for your workload that are suspected
stragglers, proceed as follows:
If no VMs are suspected stragglers, then verify if straggler
detection is running correctly. To verify if the straggler detection
service is running for your project, follow the instructions to
view straggler detection logs
and specify the
query for all straggler detection logs in your project .
Then, proceed as follows:
If your project doesn't have straggler detection logs while VMs
are running for at least 10 minutes, then the straggler
detection service is not running for your project. To resolve
this, contact Cloud Customer Care or try
again later.
Otherwise, if you've verified that straggler detection is running
for your project and your workload supports straggler detection,
then the slow performance might be caused by a different issue.
Use other options for troubleshooting slow-performance .
If a small number of VMs in your workload are reported as
suspected stragglers, test migrating your workload off of the
suspected VMs. Then, proceed as follows:
If migration does restore performance for your workload, then
the suspected VMs might be faulty. For each of these VMs,
follow steps to
report a faulty host ,
and set FAULT_REASON to
PERFORMANCE and set DESCRIPTION to
straggler node .
If migration doesn't restore performance, then there might be
more suspected straggler VMs or the slow performance might be
caused by a different issue. You can
check if more VMs for your workload are suspected stragglers
or
use other options for troubleshooting slow-performance .
If a large number of VMs in your workload are reported as
suspected stragglers, then
use other options for troubleshooting slow-performance .
Use other options for troubleshooting slow performance : If the reported
list of suspected straggler VMs is large or if removing reported straggler
VMs doesn't restore performance, use other options to troubleshoot slow
performance, such as the following:
Test clusters using cluster health scanner .
Review other metrics for performance .
Review other troubleshooting documentation. For example, see
Troubleshoot GPU VMs
in the Compute Engine documentation.
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
