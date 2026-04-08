---
title: "Networking best practices \_|\_ AI Hypercomputer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/networking-best-practices
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/networking-best-practices
  title: "Networking best practices \_|\_ AI Hypercomputer \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Networking best practices | AI Hypercomputer | Google Cloud Documentation
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
Manage how CoMMA collects NCCL telemetry
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
Establish clear and restricted IAM roles Use dedicated service accounts
Grant necessary IAM roles
Verify permissions before deployment
Restrict public network access and harden firewall configurations
Standardize internal networking defaults
Summary of best practices
What's next
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Networking best practices
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Establish clear and restricted IAM roles Use dedicated service accounts
Grant necessary IAM roles
Verify permissions before deployment
Restrict public network access and harden firewall configurations
Standardize internal networking defaults
Summary of best practices
What's next
This document describes best practices for creating a secure and resilient
networking environment for AI Hypercomputer workloads. These
recommendations are intended for network architects, network engineers, and developers
who want to configure and deploy artificial intelligence (AI) and
machine-learning (ML) workloads on AI Hypercomputer.
Establish clear and restricted IAM roles
Configuring IAM correctly helps to improve the security and
success of your AI Hypercomputer deployments. In production
environments, inadequate or misconfigured permissions can lead to deployment
failures. AI Hypercomputer deployments, especially those using
Cluster Toolkit , often fail in
environments with hardened security postures where the default Compute Engine
service account does not have the broad Editor role.
To help mitigate deployment issues that might occur due to permission issues,
follow best practices listed in this section.
Use dedicated service accounts
For better security and control, avoid using the default Compute Engine
service account. Instead, create a dedicated service account for your
AI Hypercomputer deployment.
Grant necessary IAM roles
Grant the following IAM roles to the dedicated service account
you created:
Compute Admin ( roles/compute.admin ): Provides full control of
Compute Engine resources.
Service Account User ( roles/iam.serviceAccountUser ): Allows the
service account to be attached to other resources, which is crucial for
tools like Packer when building custom images.
Storage Admin ( roles/storage.admin ): Requires access to and management
of Cloud Storage buckets, for example, to store Packer images or other
artifacts.
Logging Admin ( roles/logging.admin ): Allows the service account to
configure logging and view logs, which is essential for debugging.
Verify permissions before deployment
Before you start a deployment, verify that your service account has the
necessary permissions. Run the gcloud projects get-iam-policy
command :
See more code actions.
Light code theme
Dark code theme
gcloud projects get-iam-policy PROJECT_ID \
--flatten = "bindings[].members" \ format = 'table(bindings.role)' \
--filter = "bindings.members:serviceAccount: SERVICE_ACCOUNT_EMAIL "
Replace the following:
PROJECT_ID : The ID of your Google Cloud project.
SERVICE_ACCOUNT_EMAIL : The email address of the
service account you want to verify.
This command lists all the roles granted to your service account on the
specified project. Ensure that the roles listed in Grant necessary
IAM roles are shown in the output.
Restrict public network access and harden firewall configurations
Restrict public network access and harden firewall configurations to improve
security. This fundamental security practice mitigates the risk of overly
permissive default firewall rules.
Virtual machine (VM) setup failures can occur in production environments due to
restrictive firewall configurations not present in internal testing. Engineers
might have difficulty diagnosing these failures without knowledge of specific
firewall rules.
Review and update your firewall rules to minimize direct exposure to the
internet. For more information about VPC firewall rules, see VPC firewall
rules .
Standardize internal networking defaults
Standardize internal networking defaults to reduce risks and configuration
challenges. Default networking behaviors can create risks or configuration
challenges in complex or security-hardened environments. Google recommends the
following configurations:
Use Zonal DNS: For new projects, set the internal Domain Name System
(DNS) to Zonal DNS only. This approach helps reduce the impact of a potential global
DNS outage. For more information about using Zonal DNS, see Overview of
using Zonal DNS .
Disable external IP addresses: When possible, disable external IP
addresses. Before you disable the IP addresses, you must carefully plan and
test in a staging environment, as some services like managed instance groups
(MIGs) or GKE clusters with public nodes rely on them. For
more information about limiting public IP addresses, see Limiting public IP
addresses on Google
Cloud .
Summary of best practices
The following table summarizes the best practices recommended in this document:
Topic
Task
IAM
Establish clear and restricted IAM roles
Firewall
Restrict public network access and harden firewall configurations
Network Defaults
Standardize internal networking defaults
What's next
Learn more about the best practices for using service
accounts .
Learn more about VPC firewall rules .
Learn more about AI Hypercomputer network
architecture .
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
