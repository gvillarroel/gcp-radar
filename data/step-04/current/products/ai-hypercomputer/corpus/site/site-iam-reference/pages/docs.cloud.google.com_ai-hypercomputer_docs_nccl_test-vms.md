---
title: "Run NCCL on Compute Engine instances \_|\_ AI Hypercomputer \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/nccl/test-vms
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/nccl/test-vms
  title: "Run NCCL on Compute Engine instances \_|\_ AI Hypercomputer \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Run NCCL on Compute Engine instances | AI Hypercomputer | Google Cloud Documentation
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
Install NCCL/gIB
Enable NCCL/gIB
Run NCCL tests
What's next
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Run NCCL on Compute Engine instances
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Install NCCL/gIB
Enable NCCL/gIB
Run NCCL tests
What's next
This page describes how to install
NCCL/gIB with either Debian Software
Packages ( .deb ) or the Red Hat Package Manager ( .rpm ). This installation
lets you run NCCL tests on A4X Max, A4X, A4, and A3 Ultra instances. The
examples that follow are for two node tests.
To run NCCL tests on A3 Mega and A3 High, see
Create an A3 Mega or A3 High instance with GPUDirect enabled .
If you use schedulers such as Cluster Director, Cluster Toolkit, or
GKE, you don't need to follow the steps on this page. Instead,
see the following:
Run NCCL on GKE clusters
that use default configuration
Run NCCL on
custom GKE clusters that use A4X Max
Run NCCL on custom
GKE clusters that use A4X
Run NCCL on custom
GKE clusters that use A4 or A3 Ultra
Run NCCL tests on Slurm
clusters
Run
NCCL tests on Slurm clusters in Cluster Director
Note: Don't install older NCCL implementations like NCCL/FastSocket (A2),
NCCL/TCPX (A3), NCCL/TCPXO (A3 Mega) or RxDM packages or their related
environment variables on your A4X Max, A4X, A4, or A3 Ultra instances.
Install NCCL/ g IB
Depending on where you run your workloads, you install NCCL/gIB in either the
compute instance or the container image.
The nccl-gib package is bundled with an unmodified NVidia NCCL library
( libnccl2.so ) and headers. All NCCL/gIB content is installed to the
/usr/local/gib directory. Some dependencies are also fetched through the
distribution's repository.
Debian 12+/Ubuntu 20.04+ (.deb package) RockyLinux/CentOS/RHEL 9+ (.rpm package)
More
See more code actions.
Light code theme
Dark code theme
# If you're not using an image from Google, trust the Google Cloud signing key
curl http://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/cloud.google.gpg
# Add gpudirect-gib-apt repo
echo 'deb https://packages.cloud.google.com/apt gpudirect-gib-apt main' | sudo tee /etc/apt/sources.list.d/nccl-gib.list
sudo apt update
sudo apt install nccl-gib
# Add gpudirect-gib-rpm repo
sudo tee -a /etc/yum.repos.d/nccl-gib.repo << EOL
[ gpudirect-gib-rpm ]
name = NCCL/gIB
baseurl = https://packages.cloud.google.com/yum/repos/gpudirect-gib-rpm
enabled = 1
repo_gpgcheck = 0
gpgcheck = 0
sudo dnf makecache
sudo dnf install nccl-gib
If you are using standard OS images, you must also install the latest
NVIDIA DOCA-OFED driver .
You don't need to install this driver if you are using Google's accelerator
optimized images, such as Container OS or
accelerator optimized Ubuntu or Rocky Linux OS images .
To avoid compute instances running different versions of the nccl-gib package,
we recommend that you update nccl-gib before you run your NCCL workloads or
disable unattended-upgrades.
Enable NCCL/ g IB
To enable NCCL/gIB in your workloads, ensure the following:
/usr/local/gib/scripts/set_nccl_env.sh is sourced in your runtime
environment. The source file includes all the necessary environment
variables for NCCL/gIB and Google expects to update them in future NCCL/gIB
releases.
The /usr/local/gib/lib64 directory is in your LD_LIBRARY_PATH .
To verify NCCL/gIB is enabled check that the following NCCL INFO level log
entries are present:
# A sample log entry from NCCL core
vm-0:606:642 [ 6 ] NCCL INFO Using network gIB
# A sample log entry from the gIB network plugin
vm-0:606:642 [ 6 ] NCCL INFO NET/gIB : Initializing gIB v1.0.5
Run NCCL tests
To learn how to run NCCL tests in a scheduled environment, see the following:
Run NCCL on GKE clusters
that use default configuration
Run NCCL on
custom GKE clusters that use A4X Max
Run NCCL on custom
GKE clusters that use A4X
Run NCCL on custom
GKE clusters that use A4 or A3 Ultra
Run NCCL tests on Slurm
clusters
Run
NCCL tests on Slurm clusters in Cluster Director
We also publish a diagnostic container image with everything included at http://us-docker.pkg.dev/gce-ai-infra/gpudirect-gib/nccl-plugin-gib-diagnostic:latest .
To run NCCL tests in a non-scheduled environment:
Install CUDA 12.8 or later.
Install Open MPI.
Set up non-interactive ssh logins among the compute instances.
Build nccl-tests with MPI enabled.
When building nccl-tests, set NCCL_HOME=/usr/local/gib .
To run the script shipped with the NCCL/gIB package:
# The script assumes binaries at /opt/nccl-tests/build/
$ /usr/local/gib/scripts/run_nccl_tests.sh -d /opt/nccl-tests/build/ -p 22 -t all_gather -m 0x0 -b 4K -e 16G a4-vm-1 a4-vm-2
The following example shows output on two A4 instances:
NCCL version 2.25.1+cuda12.8
#
# out-of-place in-place
# size count type redop root time algbw busbw #wrong time algbw busbw #wrong
# (B) (elements) (us) (GB/s) (GB/s) (us) (GB/s) (GB/s)
4096 64 float none -1 59.97 0.07 0.06 0 57.49 0.07 0.07 0
8192 128 float none -1 58.17 0.14 0.13 0 58.36 0.14 0.13 0
16384 256 float none -1 59.07 0.28 0.26 0 59.03 0.28 0.26 0
32768 512 float none -1 60.93 0.54 0.50 0 60.79 0.54 0.51 0
65536 1024 float none -1 61.93 1.06 0.99 0 62.17 1.05 0.99 0
131072 2048 float none -1 64.62 2.03 1.90 0 64.48 2.03 1.91 0
262144 4096 float none -1 66.50 3.94 3.70 0 67.05 3.91 3.67 0
524288 8192 float none -1 69.37 7.56 7.09 0 67.83 7.73 7.25 0
1048576 16384 float none -1 117.2 8.95 8.39 0 113.7 9.22 8.64 0
2097152 32768 float none -1 118.8 17.65 16.55 0 118.1 17.75 16.64 0
4194304 65536 float none -1 122.2 34.32 32.17 0 122.6 34.22 32.08 0
8388608 131072 float none -1 132.2 63.44 59.48 0 130.7 64.20 60.18 0
16777216 262144 float none -1 139.2 120.49 112.96 0 139.7 120.07 112.56 0
33554432 524288 float none -1 152.0 220.81 207.01 0 152.1 220.59 206.81 0
67108864 1048576 float none -1 227.6 294.87 276.44 0 225.9 297.08 278.51 0
134217728 2097152 float none -1 431.7 310.87 291.44 0 438.0 306.41 287.26 0
268435456 4194304 float none -1 728.6 368.44 345.41 0 735.9 364.79 341.99 0
536870912 8388608 float none -1 1404.2 382.33 358.44 0 1418.4 378.51 354.85 0
1073741824 16777216 float none -1 2795.8 384.06 360.05 0 2768.9 387.79 363.55 0
2147483648 33554432 float none -1 5440.1 394.75 370.08 0 5418.7 396.31 371.54 0
4294967296 67108864 float none -1 10754 399.40 374.43 0 10746 399.67 374.69 0
8589934592 134217728 float none -1 21434 400.77 375.72 0 21421 401.01 375.95 0
17179869184 268435456 float none -1 42679 402.53 377.38 0 42792 401.48 376.38 0
What's next
Collect and understand NCCL Logs for troubleshooting .
Monitor compute instances and Slurm clusters .
Troubleshoot slow performance .
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
