---
title: "Collect and understand NCCL/gIB logs for troubleshooting \_|\_ AI Hypercomputer\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/nccl/collect-and-understand
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/nccl/collect-and-understand
  title: "Collect and understand NCCL/gIB logs for troubleshooting \_|\_ AI Hypercomputer\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Collect and understand NCCL/gIB logs for troubleshooting | AI Hypercomputer | Google Cloud Documentation
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
Collect NCCL logs
NCCL log format
Verify that the NCCL/gIB plugins are correctly loaded Network plugin (libnccl-net.so)
Tuner plugin (libnccl-tuner.so)
CollNet plugin
Check NCCL and gIB version
Verify NCCL/gIB environment variables
Check GKE workload manifest
Check the GID table
NCCL warnings A shared object cannot be loaded
Failed to map segment from shared object
Guest Config Checker cannot find a config file
Guest Config Checker enforced or recommended a setting
Tuner cannot find a config file
Insufficient glibc version
Message truncated
libibverbs cannot load the provider config
ibv_modify_qp errors
QP Got Completion with Error
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Collect and understand NCCL/ g IB logs for troubleshooting
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Collect NCCL logs
NCCL log format
Verify that the NCCL/gIB plugins are correctly loaded Network plugin (libnccl-net.so)
Tuner plugin (libnccl-tuner.so)
CollNet plugin
Check NCCL and gIB version
Verify NCCL/gIB environment variables
Check GKE workload manifest
Check the GID table
NCCL warnings A shared object cannot be loaded
Failed to map segment from shared object
Guest Config Checker cannot find a config file
Guest Config Checker enforced or recommended a setting
Tuner cannot find a config file
Insufficient glibc version
Message truncated
libibverbs cannot load the provider config
ibv_modify_qp errors
QP Got Completion with Error
This document describes how you can collect and interpret NCCL/gIB logs to troubleshoot stability and performance issues on AI Hypercomputer, including guidance on how to achieve the following:
Collect NCCL logs.
Understand the structure of NCCL log entries.
Verify that NCCL/gIB plugins are loaded correctly.
Check that NCCL and gIB versions are correct.
Troubleshoot common NCCL warnings and errors.
Collect NCCL logs
You can use NVIDIA Collective Communications Library (NCCL) logs to debug NCCL failures. For any stability or performance debugging, collect NCCL logs from all logging levels while you run the problematic workload. Avoid dumping log entries to the console, because the sheer volume of the logs may prevent the job from continuing.
To collect NCCL logs, set the following environment variables:
See more code actions.
Light code theme
Dark code theme
NCCL_DEBUG = INFO
NCCL_DEBUG_SUBSYS = INIT,ENV,GRAPH,NET,COLL,TUNING
NCCL_DEBUG_FILE = DESIRED_PATH /nccl_logs. VM_NAME . RANK_PROCESS_ID
Replace the following:
DESIRED_PATH : the path where you want to store your log files
VM_NAME : the VM Name
RANK_PROCESS_ID : the process ID of the rank
NCCL log format
NCCL logs are similar to the following:
See more code actions.
Light code theme
Dark code theme
# A sample log entry from NCCL core.
a3ultra-vm-0:606:642 [ 6 ] NCCL INFO Using network gIB
# A sample log entry from the gIB network plugin.
a3ultra-vm-0:606:642 [ 6 ] NCCL INFO NET/gIB : Initializing gIB v1.0.2
Regardless of their source, NCCL logs have a prefix that resembles the following:
<VM name>:<pid>:<tid> [<GPU device ID>] <log level> <log content>
Verify that the NCCL/ g IB plugins are correctly loaded
NCCL/gIB is made up of multiple Google-developed plugins. Failure to load any of the plugins can result in poor performance, and in some cases, fatal errors.
Network plugin (libnccl-net. so)
If the gIB network plugin is correctly loaded, you should see NCCL log entries that are similar to the following:
... NCCL INFO Using network gIB
If you see log entries similar to any of the following, then use the steps in the A shared object cannot be loaded section to fix the issue.
# Cannot find the gIB network plugin.
... NCCL INFO NET/Plugin: Could not find: libnccl-net.so. Using internal network plugin.
# Using the built-in TCP plugin.
... NCCL INFO Using network Socket
# Using the built-in IB plugin.
... NCCL INFO Using network IB
Tuner plugin (libnccl-tuner. so)
If the gIB tuner plugin is correctly loaded, you should see NCCL log entries that are similar to the following:
NCCL INFO TUNER/Plugin: Failed to find ncclTunerPlugin_v3 symbol.
NCCL INFO TUNER/Plugin: Using tuner plugin A3xTunerPlugin_v2
If you see a log entry similar to the following, then use the steps in the A shared object cannot be loaded section to fix the issue.
NCCL INFO TUNER/Plugin: Failed to find ncclTunerPlugin_v2 symbol, using internal tuner instead.
CollNet plugin
Although these log entries indicate a failure, they are expected and are not a cause for concern:
NCCL INFO NET/Plugin: Failed to find ncclCollNetPlugin_v8 symbol.
NCCL INFO NET/Plugin: Failed to find ncclCollNetPlugin symbol (>= v5 ) . ncclCollNetPlugin symbols v4 and lower are not supported.
Check NCCL and gIB version
We recommend that you use the NCCL bundled with the gIB installer to ensure the latest features, best performance, and most stability. However, you can choose to use a custom NCCL version for testing, such as an NCCL version that's bundled with your machine learning framework of choice.
To check the NCCL and gIB version used, look for the following NCCL log entries:
# NCCL version.
... NCCL INFO NCCL version 2 .23.4+cuda12.2
# gIB version.
... NCCL INFO NET/gIB : Initializing gIB v1.0.2
Verify NCCL/gIB environment variables
To achieve good NCCL performance, we provide a script that you can use to set the recommended NCCL environment variables. Before you run your workload, source the script in the same environment as the workload. Within the NCCL/gIB installer, the script is at /usr/local/gib/set_nccl_env.sh . If you don't use this script, and as a result NCCL environment variables are set incorrectly, it's possible that the gIB NCCL Config Checker will terminate the workload, NCCL will crash, or NCCL performance will be poor.
To check that the NCCL/gIB environment variables are applied correctly, look for NCCL log entries similar to the following:
# Explicitly set values.
... NCCL INFO NCCL_P2P_PCI_CHUNKSIZE set by environment to 131072 .
# Using default values because the set value is invalid.
... NCCL INFO Invalid value INVALID_VALUE for NCCL_P2P_PCI_CHUNKSIZE, using default 131072 .
Compare the following values with the recommended NCCL environment variables.
Check GKE workload manifest
On GKE, your Kubernetes workload manifest has several required setups to smoothly consume NCCL/gIB:
The manifest must mount the NCCL/gIB binaries from /home/kubernetes/bin/gib on the VM to /usr/local/gib in your workload container. Note that /home/kubernetes/bin/nvidia on the VM is automatically mounted to /usr/local/nvidia in your workload container.
Your workload container must set LD_LIBRARY_PATH to /usr/local/gib/lib64:/usr/local/nvidia/lib64 .
Your cluster and node-pools must have GKE multi-networking set up, and your workload manifest must include the multi-networking annotations to avoid the need for setting hostNetwork: true .
An actual Kubernetes workload manifest on GKE is similar to the following:
...
metadata :
annotations :
networking.gke.io/default-interface : 'eth0'
networking.gke.io/interfaces : |
[
{"interfaceName":"eth0","network":"default"},
{"interfaceName":"eth1","network":"gvnic-1"},
{"interfaceName":"gpu0rdma0","network":"rdma-0"},
{"interfaceName":"gpu1rdma0","network":"rdma-1"},
{"interfaceName":"gpu2rdma0","network":"rdma-2"},
{"interfaceName":"gpu3rdma0","network":"rdma-3"},
{"interfaceName":"gpu4rdma0","network":"rdma-4"},
{"interfaceName":"gpu5rdma0","network":"rdma-5"},
{"interfaceName":"gpu6rdma0","network":"rdma-6"},
{"interfaceName":"gpu7rdma0","network":"rdma-7"}
]
spec :
volumes :
- name : gib
hostPath :
path : /home/kubernetes/bin/gib
...
containers :
- name : my-container
volumeMounts :
- name : gib
mountPath : /usr/local/gib
env :
- name : LD_LIBRARY_PATH
value : /usr/local/gib/lib64:/usr/local/nvidia/lib64
resources :
limits :
nvidia.com/gpu : 8
Check the GID table
In RoCE, the global identifier (GID) table is used to uniquely address RDMA traffic. If the GID table is broken, no RDMA traffic can pass.
We provide a script show_gids.sh to show the GID table. In the installer, it is located at /usr/local/gib/scripts . If you used our installer with no modifications, it is installed to /var/lib/gib/scripts on the VM.
As you run the script in the VM, you should see an output similar to the following:
DEV PORT INDEX GID IPv4 VER DEV
--- ---- ----- --- ---- --- ---
mlx5_0 1 0 fe80:0000:0000:0000:689c:b8ff:fedf:3b01 v1 gp0rdma0
mlx5_0 1 1 fe80:0000:0000:0000:689c:b8ff:fedf:3b01 v2 gp0rdma0
mlx5_0 1 2 0000:0000:0000:0000:0000:ffff:c0a8:0202 192.168.2.2 v1 gp0rdma0
mlx5_0 1 3 0000:0000:0000:0000:0000:ffff:c0a8:0202 192.168.2.2 v2 gp0rdma0
...
Review the output and confirm the following:
The GID table has the proper number of entries:
For A3 Ultra or A4, 32 entries with 4 entries per CX-7.
For A3 Mega, 32 entries with 4 entries per CX-7.
For A3 High (8 GPUs), 16 entries with 4 entries per CX-7.
For A4X, 16 entries with 4 entries per CX-7.
The GID entries of each CX-7 have indexes 0, 1, 2, and 3.
For each CX-7, the indexes 2 and 3 have an IPv4 address, and that IP address matches the IPv4 of that device (for example from ip a ).
If any of these items are false, then the GID table is broken. Consider rebooting your VM or restarting the network manager in your guest OS.
NCCL warnings
NCCL logs have several levels, with NCCL warnings ( NCCL WARN ) being the most severe. NCCL warnings usually indicate failures, which may or may not be fatal. NCCL does not have a log level that automatically stops the workload.
A shared object cannot be loaded
The following error occurs when a shared object cannot be loaded due to your setup.
error while loading shared libraries: libnccl.so.2: cannot open shared object file: No such file or directory
To resolve the issue:
Make sure the shared object is installed in your environment.
Make sure the directory of the shared object is in the $LD_LIBRARY_PATH environment variable.
Failed to map segment from shared object
The following error occurs when the directory of the shared object is not executable.
error while loading shared libraries: libnccl.so.2: failed to map segment from shared object: Operation not permitted
To resolve the issue, run the following commands (these examples assume that the gIB binaries are installed in /var/lib/gib on the VMs):
sudo mount --bind /var/lib/gib /var/lib/gib
sudo mount -o remount,exec /var/lib/gib
Guest Config Checker cannot find a config file
Log entries like these appear when the guest Config Checker cannot find a configuration file to use.
... NCCL WARN cannot find config file at default paths ; you must specify NCCL_SHIMNET_GUEST_CONFIG_CHECKER_CONFIG_FILE
... NCCL WARN NCCL_SHIMNET_GUEST_CONFIG_CHECKER_CONFIG_FILE does not exist: /path/to/guest_config.txtpb
To resolve the issue, you can set the environment variable NCCL_SHIMNET_GUEST_CONFIG_CHECKER_CONFIG_FILE to point to the location of guest_config.txtpb . The NCCL/gIB installer's default location for the configuration file is /usr/local/gib/configs/guest_config.txtpb .
We don't recommend that you disable the guest Config Checker because it helps to ensure best practices and proper configuration. However, if necessary, you can disable the guest Config Checker by setting the environment variable NCCL_SHIMNET_SHIM_LAYERS to UNUSED .
Guest Config Checker enforced or recommended a setting
The following errors occur when the NCCL/gIB environment variables are not set as recommended.
# The guest Config Checker enforcing an environment variable.
# This ends the workload.
... NCCL WARN NCCL/NET ( shim ) mismatch enforced: NCCL_P2P_NVL_CHUNKSIZE = 524288 ( expected 262144 )
# The guest Config Checker recommending an environment variable.
# This does not end the workload.
... NCCL WARN NCCL/NET ( shim ) mismatch recommended: NCCL_MAX_P2P_NCHANNELS = 8 ( expected unset )
To resolve the issue:
Follow the guidance of the guest Config Checker logs.
Verify NCCL/gIB environment variables.
Tuner cannot find a config file
The following error occurs when the tuner plugin cannot find a configuration file to use.
... NCCL WARN No NCCL_TUNER_CONFIG_PATH provided. Please populate NCCL_TUNER_CONFIG_PATH to use config-based tuner plugin.
To resolve the issue:
Set the environment variable NCCL_TUNER_CONFIG_PATH to point to the location of tuner_config.txtpb . The NCCL/gIB installer's default location for the configuration file is /usr/local/gib/configs/guest_config.txtpb .
Verify NCCL/gIB environment variables.
Insufficient glibc version
The following error occurs when your distribution-local glibc version is too old, most likely because the Linux distribution in your local environment is too old. The NCCL/gIB binaries require glibc version 2.29.
/usr/lib/x86_64-linux-gnu/libc.so.6: version ` GLIBC_2.34 ' not found ( required by /usr/local/gib/lib64/libnccl.so.2 )
To resolve the issue, upgrade your image distribution (for example Ubuntu 20.04 or newer, RockyLinux 9 or newer).
Message truncated
The following error occurs when you are using mixed NCCL versions across ranks.
... NCCL WARN Message truncated : received ### bytes instead of ###
To resolve the issue, check your NCCL and gIB Version . If you are using GKE, check or reinstall your NCCL/gIB installer daemonset (see instructions for A3U and A4 or instructions for A4X ).
libibverbs cannot load the provider config
The following error occurs when you did not mount the directory containing gIB binaries to /usr/local/gib . This won't cause a workload failure. However, NCCL falls back to using TCP and can cause poor performance.
libibverbs: Warning: couldn 't open config directory ' /usr/local/gib/rdma-core/build/etc/libibverbs.d ' .
To resolve the issue, if you are using GKE, check your workload manifest .
ibv_modify_qp errors
There are a number of errors you could run into as the gIB network plugin prepares QPs for actual network transactions.
Invalid argument (errno 22)
The following error occurs for one of the following reasons:
The other end of the QP has a broken GID table.
NCCL/gIB environment variables are misconfigured, especially NCCL_IB_GID_INDEX , NCCL_IB_TC , and NCCL_IB_FIFO_TC .
... NCCL WARN Call to ibv_modify_qp failed with error Invalid argument errno 22
To resolve the issue:
Look for other ibv_modify_qp errors with the signature No data available error 61 , and follow the mitigation instructions for error 61 .
Verify NCCL/gIB environment variables.
No data available (errno 61)
The following error occurs for one of the following reasons:
This VM has a broken GID table.
NCCL/gIB environment variables are misconfigured, especially NCCL_IB_GID_INDEX , NCCL_IB_TC , and NCCL_IB_FIFO_TC .
... NCCL WARN Call to ibv_modify_qp failed with error No data available errno 61
To resolve the issue, first check for the cause:
Check the GID table .
Verify NCCL/gIB environment variables .
If the GID table is broken, try the following mitigations:
(Short term) Restart the network manager (for example networkd ) on the VM until the IP address of the problematic interface gets refreshed.
You can restart networkd on the VM using sudo systemctl restart systemd-networkd .
You can see the IP address of all interfaces using ip a .
Check that the GID table has recovered.
Contact Google Support for assistance with a long term solution.
Connection timed out (errno 110)
The following error occurs when there is a basic connectivity issue between the VMs.
... NCCL WARN Call to ibv_modify_qp failed with error Connection timed out errno 110
To resolve the issue, contact Google Support for assistance.
QP Got Completion with Error
The following error occurs for one of the following reasons:
Underlying RDMA connection issues (link flaps, etc).
NCCL/gIB environment variables are misconfigured, especially NCCL_IB_TIMEOUT and NCCL_IB_RETRY_CNT .
... NCCL WARN NET/gIB : Got completion from peer 192 .168.0.9<55224> with status = 12 opcode = 0 len = 0 vendor err 129 ( Recv ) localGid ::ffff:192.168.3.6 remoteGids::ffff:192.168.3.9
To resolve the issue, contact Google Support for assistance.
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
