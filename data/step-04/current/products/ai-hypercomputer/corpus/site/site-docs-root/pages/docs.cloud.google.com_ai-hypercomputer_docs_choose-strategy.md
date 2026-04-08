---
title: "Recommended configurations \_|\_ AI Hypercomputer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/choose-strategy
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/choose-strategy
  title: "Recommended configurations \_|\_ AI Hypercomputer \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Recommended configurations | AI Hypercomputer | Google Cloud Documentation
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
Workloads overview
Recommendations for pre-training models Recommended accelerators
Recommended consumption type
Recommended storage services
Recommendations for fine-tuning models Recommended accelerators
Recommended consumption type
Recommended storage services
Recommendations for inference Recommended accelerators
Recommended consumption type
Recommended storage services
Recommendations for small to medium-sized model machine learning Recommended accelerators
Recommendations for HPC
Summary of recommendations
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Recommended configurations
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Workloads overview
Recommendations for pre-training models Recommended accelerators
Recommended consumption type
Recommended storage services
Recommendations for fine-tuning models Recommended accelerators
Recommended consumption type
Recommended storage services
Recommendations for inference Recommended accelerators
Recommended consumption type
Recommended storage services
Recommendations for small to medium-sized model machine learning Recommended accelerators
Recommendations for HPC
Summary of recommendations
This document provides recommendations of which accelerator, consumption type,
storage service, and deployment tool is best suited for different artificial
intelligence (AI), machine learning (ML), and high performance computing (HPC)
workloads. Use this document to help you identify the best deployment for your
workload.
Workloads overview
AI Hypercomputer architecture supports the following use cases:
Workloads
Description
Recommendation
Pre-training foundation models
This involves building a language model using a large dataset. The
result of pre-training foundation models is a new model that is good
at performing general tasks.
Models are categorized based on
their size as follows:
Frontier model : these are ML models that
span hundreds of billions to trillions of parameters or higher. These
include large language models (LLMs) such as Gemini.
Large model : these are models that span
tens to hundreds of billions of parameters or higher.
See
recommendations for pre-training models
Fine-tuning
This involves taking a trained model and adapting it to perform
specific tasks by using specialized data sets or other techniques.
Fine-tuning is generally performed on large models.
See
recommendations for fine-tuning models
Inference or serving
This involves taking a trained or fine-tuned model and making it
available for consumption by users or applications.
Inference workloads are categorized based on the size of the models
as follows:
Multi-host foundation model inference :
performing inference with trained ML models that span hundreds of billions
to trillions of parameters or higher. For these inference workloads the
computational load is shared across multiple host machines.
Single-host foundation model inference :
performing inference with trained ML models that span tens to hundreds of
billions of parameters. For these inference workloads the computational
load is confined to a single host machine.
Large model inference : performing
inference with trained or fine-tuned ML models that span tens to hundreds
of billions of parameters.
See
recommendations for inference
Small to medium-sized model machine learning
This involves training and serving ML models that are smaller in
size and complexity, typically for more specialized tasks.
See
recommendations for small to medium-sized model machine learning
HPC
This is the practice of aggregating computing resources to gain
performance greater than that of a single workstation, server, or
computer. HPC is used to solve problems in academic research,
science, design, simulation, and business intelligence.
See
recommendations for HPC
Recommendations for pre-training models
Pre-training foundation models involves large clusters of accelerators,
continuously reading large volumes of data, and adjusting weights through
forward and backward passes to learn from the data. These training jobs run for
weeks, or even months at a time.
The following sections outline the accelerators, recommended consumption type,
and storage service to use when pre-training models.
Recommended accelerators
To pre-train foundational models on Google Cloud, we recommend that you use
A4X Max , A4 , or A3 accelerator-optimized machine types and that
you use an orchestrator to deploy the cluster. To deploy these large clusters of
accelerators, we recommend that you use
Cluster Director or
Cluster Toolkit . For more
information, see the respective deployment guide for your cluster of choice in
the following table.
Workloads
Recommendations
Cluster deployment guide
Machine type
Orchestrator
Frontier model training
Large model training
A4X Max
A4X
A4
A3 Ultra
GKE
Create an AI-optimized GKE cluster with default configuration
Slurm
Create an AI-optimized cluster based on a template
Create an AI-optimized Slurm cluster
Frontier model training
Large model training
A3 Mega
GKE
Maximize GPU network bandwidth in Standard mode clusters
Slurm
Create an AI-optimized cluster based on a template
Deploy an A3 Mega Slurm cluster for ML training
Large model training
A3 High
GKE
Maximize GPU network bandwidth in Standard mode clusters
Slurm
Deploy an A3 High Slurm cluster
Recommended consumption type
For a high level of assurance in obtaining large clusters of accelerators at
minimum costs, we recommend using a reservation and requesting these reservation
for a long duration. For more information about consumption types, see
Choose a consumption option .
Recommended storage services
For pre-training, training data needs to be ready continuously and quickly. We
also recommend frequent and fast checkpointing of the model being trained. For
most of these needs, we recommend that you use Google Cloud Managed Lustre. You can
alternatively use Cloud Storage with Cloud Storage FUSE and
Rapid Cache enabled. For more information about storage options,
see Storage services .
Recommendations for fine-tuning models
Fine-tuning large foundational models involves smaller clusters of accelerators,
reading moderate volumes of data and adjusting the model to perform specific tasks.
These fine-tuning jobs run for days, or even weeks.
The following sections outline the accelerators, recommended consumption type,
and storage service to use when fine-tuning models.
Recommended accelerators
To fine-tune models on Google Cloud, we recommend that you use A4X Max ,
A4X , A4 or A3 accelerator-optimized machine types and that you
use an orchestrator to deploy the cluster.
To deploy these clusters of accelerators, we also recommend that you use
Cluster Director or
Cluster Toolkit . For more
information, see the respective cluster deployment guide for your machine type
of choice in the following table.
Workloads
Recommendations
Cluster deployment guide
Machine type
Orchestrator
Fine-tuning large models
A4X Max
A4X
A4
GKE
Create an AI-optimized GKE cluster with default configuration
Slurm
Create an AI-optimized cluster based on a template
Create an AI-optimized Slurm cluster
Fine-tuning large models
A3 Mega
GKE
Maximize GPU network bandwidth in Standard mode clusters
Slurm
Create an AI-optimized cluster based on a template
Deploy an A3 Mega Slurm cluster for ML training
Fine-tuning large models
A3 High
GKE
Maximize GPU network bandwidth in Standard mode clusters
Slurm
Deploy an A3 High Slurm cluster
Recommended consumption type
For fine-tuning workloads we recommend using
future reservation in calendar mode to provision resources. For more
information about consumption options, see
Choose a consumption option .
Recommended storage services
For fine tuning models, the amount of data needed can be significant especially
when it comes to read speeds for fine-tuning performance. We recommend
frequent and fast checkpointing of the model being fine-tuned.
Similar to pre-training, for most use cases we recommend Google Cloud Managed Lustre.
You can alternatively use Cloud Storage with Cloud Storage FUSE and
Rapid Cache enabled. For more information about storage
options, see Storage services .
Recommendations for inference
The following sections outline the accelerators, recommended consumption type,
and storage service to use when performing inference.
Recommended accelerators
The recommended accelerators for inference depend on whether you're performing
multi-host frontier or large model inference, or single-host frontier inference.
Recommended accelerators (multi-host)
To perform multi-host frontier or large model inference on Google Cloud, we
recommend that you use an A4X Max , A4X , A4 , or A3
accelerator-optimized machine type and deploying the machine by using an
orchestrator. To deploy these clusters of accelerators, we also recommend that
you use Cluster Director or
Cluster Toolkit . To get you started
with these clusters, a link to a cluster deployment guide for each recommended
machine type is provided.
Workloads
Recommendations
Cluster deployment guide
Machine type
Orchestrator
Multi-host frontier inference
A4X Max
A4X
A4
A3 Ultra
GKE
Create an AI-optimized GKE cluster with default configuration
Slurm
Create an AI-optimized cluster based on a template
Create an AI-optimized Slurm cluster
Multi-host frontier inference
A3 Mega
GKE
Maximize GPU network bandwidth in Standard mode clusters
Slurm
Create an AI-optimized cluster based on a template
Deploy an A3 Mega Slurm cluster for ML training
Large model inference
A3 High
GKE
Maximize GPU network bandwidth in Standard mode clusters
Slurm
Deploy an A3 High Slurm cluster
Recommended accelerators (single host)
The following table outlines the recommended accelerators to use when
performing single-host frontier inference. To get you started with these VMs,
a link to a VM deployment guide for each recommended machine type is provided.
Workloads
Recommendations
VM deployment guide
Machine type
Orchestrator
Single-host frontier inference
A4
A3 Ultra
N/A
Create an AI-optimized instance
Single-host frontier inference
A3 High
N/A
Create an A3 VM with GPUDirect-TCPX enabled
Recommended consumption type
For inferencing we recommend using either a
long running reservation or future reservation in calendar mode. For more
information about consumption options, see
Choose a consumption option .
Recommended storage services
For inference, quickly loading the inference binaries and weights across many
servers requires fast data reads. We recommend that you use Cloud Storage
with Cloud Storage FUSE and Rapid Cache enabled for model loading.
Rapid Cache provides a zonal data caching solution that accelerates
model load times and also reduces network egress fees. When paired with
Cloud Storage FUSE, Rapid Cache is particularly useful for loading models
across multiple zones and multi-regions. If you are using
Google Cloud Managed Lustre for training, we recommend that you also use
Google Cloud Managed Lustre for model loading as it enables fast data reads and is a
persistent zonal storage solution. For more information about storage options,
see Storage services .
Recommendations for small to medium-sized model machine learning
For machine learning workloads that involve small to medium-sized models,
achieving an optimal balance between price and performance is a primary
consideration.
Recommended accelerators
The following table outlines the recommended accelerators to use for small to
medium-sized model ML workloads.
Workloads
Recommendations
VM deployment guide
Machine type
Orchestrator
Small to medium-sized model machine learning
G4
G2
N/A
Create a G2 or G4 instance
Recommendations for HPC
For HPC workloads, any accelerator-optimized machine series or
compute-optimized machine series works well.
If using an accelerator-optimized machine series, the best fit depends on the
amount of computation that must be offloaded to the GPU. To get a detailed list
of recommendations for
HPC workloads, see
Best practices for running HPC workloads .
Summary of recommendations
The following is a summary of the recommendations for which accelerator,
consumption type, and storage service we recommend for different workloads.
Resource
Recommendation
Model pre-training
Machine family
Use one of the following accelerator-optimized machine types: A4X Max, A4X, A4, A3 Ultra, A3 Mega, or A3 High
Consumption type
Use reservations
Storage
Use a Google Cloud managed service such as Google Cloud Managed Lustre or Cloud Storage FUSE
Model fine-tuning
Machine family
Use A4X Max, A4X, A4, or A3 accelerator-optimized machine types
Consumption type
Use reservations
Storage
Use a Google Cloud managed service such as Google Cloud Managed Lustre
or Cloud Storage FUSE
Inference
Machine family
Use one of the following accelerator-optimized machine types: A4X Max, A4X, A4, A3 Ultra, A3 Mega, or A3 High
Consumption type
Use reservations
Storage
Use a Google Cloud managed service such as Google Cloud Managed Lustre or Cloud Storage FUSE
HPC
See the summary section of the best practices for running HPC workloads
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
