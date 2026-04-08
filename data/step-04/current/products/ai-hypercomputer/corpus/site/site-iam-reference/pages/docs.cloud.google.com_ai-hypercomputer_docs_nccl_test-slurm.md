---
title: "Run NCCL on Slurm clusters \_|\_ AI Hypercomputer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/nccl/test-slurm
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/nccl/test-slurm
  title: "Run NCCL on Slurm clusters \_|\_ AI Hypercomputer \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Run NCCL on Slurm clusters | AI Hypercomputer | Google Cloud Documentation
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
What's next
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Run NCCL on Slurm clusters
Stay organized with collections
Save and categorize content based on your preferences.
On this page
What's next
This page describes how to run NCCL
tests on a Slurm cluster. To use a managed Slurm environment that includes
built-in NCCL tests for verifying cluster health, see instead
Cluster Director .
Choose the steps for your machine type:
A4X Max, A4X, and A4 A3 Ultra A3 Mega A3 High
More
The following test uses
Ramble , which is an
open-source, multi-platform experimentation framework written in Python that
is used to coordinate the running of NCCL tests. Ramble and its dependencies
are compatible with the ARM64 architecture used by A4X Max and A4X machines.
The run scripts used for this test are staged in the
/opt/apps/system_benchmarks on the Slurm controller node and are
available to all nodes in the cluster. Running this test installs Ramble
to the /opt/apps/ramble directory.
From the login node in the ${HOME} directory, run the following command.
Because the test can take approximately 10 minutes, or longer if other
jobs are in the queue, the following command uses nohup and redirects the
stdout/err to a log file .
See more code actions.
Light code theme
Dark code theme
nohup bash /opt/apps/system_benchmarks/run-nccl-tests-via-ramble.sh >& nccl.log &
This command creates a folder called nccl-tests_$(date +%s) that stores
all of the test results. The date tag ensures that a unique folder
is created based on each current timestamp.
For example, if your cluster has 16 nodes then NCCL tests are ran for
all-gather , all-reduce , and reduce-scatter on 2, 4, 8, and 16 nodes.
Review the results. The nccl.log contains the logs from setting up and
running the test. To view these logs, run the following:
See more code actions.
Light code theme
Dark code theme
tail -f nccl.log
You can also use Ctrl+C to stop tailing the output at any time.
At the end of the nccl.log , your output should resemble the following:
See more code actions.
Light code theme
Dark code theme
...
---- SUMMARY for >1GB Message Sizes ----
workload n_nodes msg_size busbw
all-gather 2 1073741824 ###.##
all-gather 2 2147483648 ###.##
all-gather 2 4294967296 ###.##
all-gather 2 8589934592 ###.##
...
all-reduce 2 1073741824 ###.##
...
reduce-scatter 2 1073741824 ###.##
...
-------- Benchmarking Complete -------
All of the Slurm job scripts and nccl-tests output logs are
stored in the nccl-tests_$(date +%s)/experiments directory. A summary of the
NCCL test performance is also stored in the nccl-tests_${date +%s)/summary.tsv file.
Removing nccl-tests_$(date +%s)/ directory removes all of the files generated
during these tests.
From the shared directory of the login node (this node is usually located at ${HOME} ), download the script needed to build the NCCL test by running the following command:
wget -np -nd https://raw.githubusercontent.com/GoogleCloudPlatform/cluster-toolkit/refs/heads/main/examples/machine-learning/a3-ultragpu-8g/nccl-tests/build-nccl-tests.sh
After the script downloads, import a Pytorch image from the
NVIDIA container registry
and build the NCCL tests. To do this, run the following command:
sbatch build-nccl-tests.sh
The preceding script runs on one of your nodes. It uses
the --container-mounts switch to mount your current directory, $PWD ,
into the /nccl directory within the container.
Verify that the NCCL test is built. To verify this, run the following command:
sacct -a
If successfully completed, the output is similar to the following:
JobID JobName Partition Account AllocCPUS State ExitCode
------------ ---------- ---------- ---------- ---------- ---------- --------
1 build-ncc+ a3ultra 112 COMPLETED 0:0
If the build is successful you should also have a file
named nvidia+pytorch+24.09-py3.sqsh in the directory where you ran the
command along with a directory named nccl-tests .
Check that the nccl-tests/build folder contains several binaries,
including all_gather_perf , all_reduce_perf , reduce_scatter_perf ,
and alltoall_perf .
Download the NCCL test script.
wget -np -nd https://raw.githubusercontent.com/GoogleCloudPlatform/cluster-toolkit/refs/heads/main/examples/machine-learning/a3-ultragpu-8g/nccl-tests/run-nccl-tests.sh
To run any job run on an A3 Ultra cluster, several environment
variables must be set in order to enable high performance networking with
RDMA. Because you use enroot containers in this procedure to launch
workloads, these variables must be set in the container environment as opposed
to the host environment. These variables can be inspected in the
run-nccl-tests.sh script that you just downloaded.
Run the NCCL test script. The test can take approximately 15 minutes, or longer.
sbatch run-nccl-tests.sh
Review the results. The script outputs a slurm-XX.out file that contains the
result of the nccl all_gather_perf benchmark.
The output is similar to the following:
#
# out-of-place in-place
# size count type redop root time algbw busbw #wrong time algbw busbw #wrong
# (B) (elements) (us) (GB/s) (GB/s) (us) (GB/s) (GB/s)
268435456 4194304 float none -1 ##### ###.## ###.## N/A ###### ###.## ###.## 0
536870912 8388608 float none -1 ##### ###.## ###.## N/A ###### ###.## ###.## 0
1073741824 16777216 float none -1 ##### ###.## ###.## N/A ###### ###.## ###.## 0
2147483648 33554432 float none -1 ##### ###.## ###.## N/A ###### ###.## ###.## 0
4294967296 67108864 float none -1 ##### ###.## ###.## N/A ###### ###.## ###.## 0
8589934592 134217728 float none -1 ##### ###.## ###.## N/A ###### ###.## ###.## 0
# Out of bounds values : 0 OK
# Avg bus bandwidth : ###.##
#
From the shared directory of the login node (this node is usually
located at ${HOME} ), download the script needed to build the NCCL test by running the following command:
wget -np -nd https://raw.githubusercontent.com/GoogleCloudPlatform/cluster-toolkit/refs/heads/main/examples/machine-learning/a3-megagpu-8g/nccl-tests/build-nccl-tests.sh
After the script downloads, import a Pytorch image from the
NVIDIA container registry
and build the NCCL tests.
sbatch build-nccl-tests.sh
The preceding script runs on one of your nodes. It uses
the --container-mounts switch to mount your current directory, $PWD ,
into the /nccl directory within the container.
Verify that the NCCL test is built:
sacct -a
The output is similar to the following:
JobID JobName Partition Account AllocCPUS State ExitCode
------------ ---------- ---------- ---------- ---------- ---------- --------
1 build-ncc+ a3mega 112 COMPLETED 0:0
After the build completes, the nccl-tests directory is created.
This directory contains the nvidia+pytorch+24.09-py3.sqsh file. A .sqsh
file is a compressed, read-only file system image that serves as the
standard container format for AI workloads.
Check that the nccl-tests/build folder contains several binaries,
including all_gather_perf , all_reduce_perf , reduce_scatter_perf ,
and alltoall_perf .
Download the NCCL test script:
wget -np -nd https://raw.githubusercontent.com/GoogleCloudPlatform/cluster-toolkit/refs/heads/main/examples/machine-learning/a3-megagpu-8g/nccl-tests/run-nccl-tests.sh
To run any job run on an A3 Mega cluster, you must be set a number of
environment variables. This setting enables high performance networking
with GPUDirect-TCPXO protocol. Because you use enroot containers in this
procedure to launch workloads, these variables must be set in the
container environment as opposed to the host environment. You can inspect
these variables in the run-nccl-tests.sh script that you
downloaded in the previous step.
Run the NCCL test script. The test can take approximately 15 minutes, or
longer.
sbatch run-nccl-tests.sh
Review the results. The script outputs a slurm-XX.out file that contains the
result of the nccl all_gather_perf benchmark.
The output is similar to the following:
#
# out-of-place in-place
# size count type redop root time algbw busbw #wrong time algbw busbw #wrong
# (B) (elements) (us) (GB/s) (GB/s) (us) (GB/s) (GB/s)
268435456 4194304 float none -1 ##### ###.## ###.## N/A ###### ###.## ###.## 0
536870912 8388608 float none -1 ##### ###.## ###.## N/A ###### ###.## ###.## 0
1073741824 16777216 float none -1 ##### ###.## ###.## N/A ###### ###.## ###.## 0
2147483648 33554432 float none -1 ##### ###.## ###.## N/A ###### ###.## ###.## 0
4294967296 67108864 float none -1 ##### ###.## ###.## N/A ###### ###.## ###.## 0
8589934592 134217728 float none -1 ##### ###.## ###.## N/A ###### ###.## ###.## 0
# Out of bounds values : 0 OK
# Avg bus bandwidth : ###.##
#
From the shared directory of the login node (this node is usually located
at ${HOME} ), download the script needed to build the NCCL test
by running the following command:
wget -np -nd https://raw.githubusercontent.com/GoogleCloudPlatform/cluster-toolkit/refs/heads/main/examples/machine-learning/a3-highgpu-8g/nccl-tests/build-nccl-tests.sh
After the script downloads, import a Pytorch image from the
NVIDIA container registry
and build the NCCL tests. To do so, run the following command:
sbatch build-nccl-tests.sh
The preceding script runs on one of your nodes. It uses
the --container-mounts switch to mount your current directory, $PWD ,
into the /nccl directory within the container.
Verify that the NCCL test is built:
sacct -a
The output is similar to the following:
JobID JobName Partition Account AllocCPUS State ExitCode
------------ ---------- ---------- ---------- ---------- ---------- --------
1 build-ncc+ a3high 112 COMPLETED 0:0
If the build is successful, then the nccl-tests directory is created.
This directory contains the nvidia+pytorch+24.09-py3.sqsh file. A .sqsh
file is a compressed, read-only file system image that serves as the
standard container format for AI workloads.
Check that the nccl-tests/build folder contains several binaries,
including all_gather_perf , all_reduce_perf , reduce_scatter_perf ,
and alltoall_perf .
Download the NCCL test script:
wget -np -nd https://raw.githubusercontent.com/GoogleCloudPlatform/cluster-toolkit/refs/heads/main/examples/machine-learning/a3-highgpu-8g/nccl-tests/run-nccl-tests.sh
To run any job run on an A3 High cluster, several environment
variables must be set to enable high performance networking with
GPUDirect-TCPX. Because you use enroot containers in this procedure to launch
workloads, these variables must be set in the container environment as opposed
to the host environment. You can inspect these variables in the
run-nccl-tests.sh script that you just downloaded.
Run the NCCL test script. The test can take approximately 15 minutes, or longer.
sbatch run-nccl-tests.sh
Review the results. The script outputs a slurm-XX.out file that contains the
result of the nccl all_gather_perf benchmark.
The output is similar to the following:
#
# out-of-place in-place
# size count type redop root time algbw busbw #wrong time algbw busbw #wrong
# (B) (elements) (us) (GB/s) (GB/s) (us) (GB/s) (GB/s)
268435456 4194304 float none -1 ##### ###.## ###.## N/A ###### ###.## ###.## 0
536870912 8388608 float none -1 ##### ###.## ###.## N/A ###### ###.## ###.## 0
1073741824 16777216 float none -1 ##### ###.## ###.## N/A ###### ###.## ###.## 0
2147483648 33554432 float none -1 ##### ###.## ###.## N/A ###### ###.## ###.## 0
4294967296 67108864 float none -1 ##### ###.## ###.## N/A ###### ###.## ###.## 0
8589934592 134217728 float none -1 ##### ###.## ###.## N/A ###### ###.## ###.## 0
# Out of bounds values : 0 OK
# Avg bus bandwidth : ###.##
#
What's next
Collect and Understand NCCL Logs for Troubleshooting to understand the test outputs and troubleshoot issues.
Monitor Compute Engine instances and Slurm clusters .
Learn about troubleshooting slow performance .
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
