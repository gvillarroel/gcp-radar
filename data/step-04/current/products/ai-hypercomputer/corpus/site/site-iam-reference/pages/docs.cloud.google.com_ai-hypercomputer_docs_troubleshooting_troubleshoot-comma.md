---
title: "Troubleshoot the Collective Communication Analyzer (CoMMA) \_|\_ AI Hypercomputer\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/troubleshooting/troubleshoot-comma
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/troubleshooting/troubleshoot-comma
  title: "Troubleshoot the Collective Communication Analyzer (CoMMA) \_|\_ AI Hypercomputer\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Troubleshoot the Collective Communication Analyzer (CoMMA) | AI Hypercomputer | Google Cloud Documentation
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
Troubleshoot CoMMA loading issues
Troubleshoot missing output files
Troubleshoot unexpected data or missing events
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Troubleshoot the Collective Communication Analyzer (Co MMA)
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Troubleshoot CoMMA loading issues
Troubleshoot missing output files
Troubleshoot unexpected data or missing events
This page shows you how to resolve common issues that you might encounter when
using the Collective Communication Analyzer (CoMMA). CoMMA is a
library that collects telemetry data for Google Cloud services.
For more information, see Collective Communication Analyzer (CoMMA) .
Troubleshoot Co MMA loading issues
CoMMA might not load correctly.
To verify that the binaries load correctly, complete these steps:
Enable NCCL debug logging. To enable logging, set the environment variable
NCCL_DEBUG=INFO . You might also use a more detailed debug level.
For options, see the
NCCL_DEBUG
section in the NVIDIA documentation.
Specify the INIT subsystem for debugging. To specify INIT , set
NCCL_DEBUG_SUBSYS=INIT . You might also add other subsystems.
For more subsystem options, see the NCCL_DEBUG_SUBSYS section.
Look for a line in the NCCL log that is similar to the following:
NCCL INFO PROFILER/Plugin: Plugin name set by env to PATH_TO_PROFILER_PLUGIN
If the NCCL_PROFILER_PLUGIN environment variable is unset, NCCL might
attempt to load the libnccl-profiler.so binary from the path specified in
the LD_LIBRARY_PATH environment variable.
To resolve this issue, consider the following solutions:
Verify that the plugin shared library ( libnccl-profiler.so ) is correctly
named.
Check that it is located in a directory specified in LD_LIBRARY_PATH
environment variable. Alternatively, check that the NCCL_PROFILER_PLUGIN
environment variable points directly to the location of the libnccl-profiler.so
binary.
Check that your NCCL version is 2.23 or later, as the NCCL profiler API
requires this version.
Troubleshoot missing output files
If you configured your environment to send data collected by CoMMA
to a local file, but the output file is missing, check the NCCL logs
or application logs for messages that are similar to the following:
See more code actions.
Light code theme
Dark code theme
Failed to open file
Failed to log <telemetry type> to file
These errors indicate an underlying file system issue, such as a missing directory or insufficient free space. CoMMA ceases to export telemetry to
files after these errors occur.
To resolve this issue, consider these solutions:
Check that the NCCL_PROFILER_LATENCY_FILE or NCCL_PROFILER_SUMMARY_FILE
environment variables are set correctly. Provide a valid path and filename
template, such as /tmp/latency-%p.txt .
Check that the process has write permissions to the specified output
directory.
If you modified the NCCL_TELEMETRY_MODE environment variable, check that
you set it to a value that enables local file output (for example, 1 or 4 ).
Troubleshoot unexpected data or missing events
CoMMA might capture unexpected
data or miss expected events.
To resolve this issue, check that the required
level of granularity is set .
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
