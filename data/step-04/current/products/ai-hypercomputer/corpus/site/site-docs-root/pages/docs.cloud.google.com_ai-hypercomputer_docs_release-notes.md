---
title: "AI Hypercomputer release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/release-notes
  title: "AI Hypercomputer release notes \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

AI Hypercomputer release notes | Google Cloud Documentation
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
Português – Brasil
中文 – 简体
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
AI Hypercomputer
Release notes
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
March 02, 2026
December 12, 2025
December 09, 2025
October 21, 2025
September 10, 2025
July 18, 2025
July 10, 2025
July 07, 2025
June 11, 2025
May 22, 2025
May 15, 2025
March 18, 2025
December 31, 2024
Home
Documentation
Compute
AI Hypercomputer
Resources
Was this helpful?
Send feedback
AI Hypercomputer release notes
Stay organized with collections
Save and categorize content based on your preferences.
On this page
March 02, 2026
December 12, 2025
December 09, 2025
October 21, 2025
September 10, 2025
July 18, 2025
July 10, 2025
July 07, 2025
June 11, 2025
May 22, 2025
May 15, 2025
March 18, 2025
December 31, 2024
This page documents production updates to AI Hypercomputer.
Check this page for announcements about new or updated features, bug fixes,
known issues, and deprecated functionality.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
March 02, 2026
Feature
Generally available : You can apply compact placement policies to standalone
Flex-start VMs. These policies let you colocate your standalone
Flex-start VMs in adjacent blocks or in the same block. Applying
a compact placement policy gives you more control over VM placement and helps
minimize network latency for AI/ML workloads. For more information, see
Use Flex-start .
December 12, 2025
Issue
Workloads on A4 VMs might experience interruptions due to a firmware issue
for NVIDIA B200 GPUs. To help prevent the issue, we recommend resetting the GPUs
on A4 VMs at least once every 60 days. For more information, see the
known issue .
December 09, 2025
Feature
Generally available : You can enable node health prediction in an
AI-optimized GKE cluster to help the cluster avoid scheduling workloads on nodes
that are likely to degrade within the next five hours. This approach helps
minimize interruptions for critical and interruption-sensitive workloads, such
as large-scale training. For more information, see
Enable node health prediction in a GKE cluster .
October 21, 2025
Feature
Generally available : You can use future reservations in
AI Hypercomputer to request to reserve capacity starting on a specific
date up to one year in the future. For more information, see
Reserve capacity .
September 10, 2025
Feature
Generally available : When you reserve capacity for creating VMs, you can specify a maintenance scheduling type for your reservations. This feature helps you minimize downtimes by letting you specify whether you want to group VMs and have synchronized maintenance scheduling ( grouped ), or loosely couple VMs have independent maintenance scheduling ( independent ). For more information, see Maintenance scheduling types .
Feature
Generally available : When you reserve capacity for creating VMs, you can specify the reservation operational mode for your reserved capacity. A reservation operational mode defines how your VMs behave after a host error or faulty host report, and it determines your level of visibility and control over the reservation's infrastructure. For more information, see Reservation operational mode .
Feature
Generally available : You can receive a notification when maintenance for an A4X reservation sub-block is scheduled, starts, or is completed. Additionally, you can now view and trigger maintenance for an A4X reservation sub-block. These features give you more control over maintenance for your A4X reservations, helping you minimize downtimes for your workloads. For more information, see Manage host events across reservations .
Feature
Generally available : You can view and manage the topology of your A4X reservations, including sub-blocks. This feature helps you better understand the topology of the VMs in your workload to further minimize network latency, as well as understand the health of your reservation blocks or sub-blocks. For more information, see
View reserved capacity .
Feature
Generally available : You can use the following Cloud Monitoring metrics to monitor your A4X VMs, and help you identify and troubleshoot issues with your GPUs:
NVLink runtime error
Uncorrectable DRAM ECC errors
Uncorrectable DRAM row remapping count
Uncorrectable DRAM row remapping failed
Uncorrectable PCIe errors
Uncorrectable cache ECC errors
For more information, see Monitor VMs and Slurm clusters .
Feature
Generally available : The accelerator-optimized A4X machine type , the first GPU VM to run on Arm, is available on AI Hypercomputer. The A4X machine series has the NVIDIA GB200 Grace Blackwell Superchips attached and runs on the NVIDIA GB200 NVL72 platform. Use this machine type to run your large artificial intelligence (AI) models and machine learning (ML) workloads. The A4X machine type is currently available in the us-central1-a zone.
Feature
You can receive at least seven days of advance notice for unplanned hardware maintenance for a reservation. This feature helps you more proactively control disruptions to your workloads when unplanned maintenance is scheduled after a host error or faulty host report. For more information, see Manage hardware emergency maintenance notifications .
July 18, 2025
Feature
Generally available : You can troubleshoot workloads with slow performance by using straggler detection metrics and logs.
Stragglers are single-point, non-crashing failures that eventually
slow down your entire workload. Large-scale ML workloads are very susceptible to stragglers, and VMs with stragglers are often very difficult to notice and pinpoint without straggler detection.
For more information, see Monitor VMs and Slurm clusters and Troubleshoot slow performance .
July 10, 2025
Feature
Generally available : You can now manage the Collective Communication Analyzer (CoMMA) , a library that uses the NVIDIA Collective Communication Library (NCCL) profiler plugin to collect detailed NCCL telemetry for GPU machine types. The collected performance metrics and operational events are used for analyzing and optimizing large-scale AI and ML training workloads.
CoMMA is automatically installed and enabled on A4X, A4 High, and A3 Ultra machine types when using specific images. You can manage this data collection by disabling the plugin, adjusting its data granularity levels, or manually installing it on other GPU machine types. For more information, see Enable, disable, and configure CoMMA .
July 07, 2025
Feature
Preview : You can use future reservations in calendar mode to obtain resources for up to 90 days. By creating a request in calendar mode, you can reserve up to 80 GPU VMs for a future date and time. Then, you can use that capacity to run the following workloads:
Model pre-training
Model fine-tuning
Simulations
Inference
For more information, see Choose a consumption option .
June 11, 2025
Feature
Generally available : You can apply a workload policy in a managed instance group (MIG) to specify the type of the workload to run on the MIG. Workload policies help improve the workload performance by optimizing the underlying infrastructure. The supported type, high-throughput , is ideal for workloads that require high networking performance. For more information, see Workload policy for MIGs .
May 22, 2025
Feature
Generally available : You can proactively manage upcoming maintenance host events on your reserved blocks of capacity, whether VMs are running on them or not. This approach helps you minimize disruptions and maintain optimal performance. For more information, see Manage host events across reservations .
May 15, 2025
Feature
Preview: You can use the Flex-start consumption option to obtain resources for up to seven days. Flex-start provisions capacity from a secured resource pool. Using this feature increases your chance to obtain high-demand resources like GPUs. For more information, see Choose a consumption option .
March 18, 2025
Feature
Generally available : The A4 accelerator-optimized machine type is now generally available. A4 VMs are powered by NVIDIA B200 GPUs and provide up to 3x performance of previous GPU machine types for most GPU accelerated workloads. A4 is especially recommended for ML training workloads at large scales. A4 is available in the following region and zone:
Council Bluffs, Iowa: us-central1-b
When provisioning A4 machine types, you can use Hypercompute Cluster to request capacity and create VMs or clusters. To get started see Overview of creating VMs and clusters .
Software stack updates
The following new Docker images are also released to support workloads running on your A4 GKE clusters that are deployed using Hypercompute Cluster .
NeMo docker image: nemo25.02-gib1.0.5-A4
MaxText docker image: jax-maxtext-gpu:jax0.5.1-cuda_dl25.02-rev1-maxtext-20150317
For more information, see AI Hypercomputer images .
December 31, 2024
Feature
Preview : Hypercompute Cluster is now available in preview. With Hypercompute Cluster, you can streamline the provisioning of up to tens of thousands of A3 Ultra accelerator-optimized machines.
With features such as dense co-location of resources, ultra-low latency networking, targeted workload placement, and advanced maintenance controls to minimize workload disruptions, Hypercompute Cluster is built to deliver exceptional performance and resilience, so you can run your most demanding AI, ML, and HPC workloads with confidence.
To get started, review the overview for VM and cluster creation .
Feature
Generally available : The A3 Ultra accelerator-optimized machine type is now generally available. A3 Ultra VMs are powered by NVIDIA H200 Tensor Core GPUs and support the new Titanium ML network adapter, which delivers non-blocking 3.2 Tbps of GPU-to-GPU traffic with RDMA over Converged Ethernet (RoCE). A3 Ultra VMs are ideal for foundation ML model training and serving. The A3 Ultra machine type is available in the following region and zone:
St. Ghislain, Belgium, Europe - europe-west1-b
When provisioning A3 Ultra machine types, you must use Hypercompute Cluster to request capacity and create VMs or clusters. To get started see Overview of creating VMs and clusters in the AI Hypercomputer documentation.
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
Português – Brasil
中文 – 简体
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
