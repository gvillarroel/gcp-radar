---
title: "Enable, disable, and configure CoMMA \_|\_ AI Hypercomputer \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/nccl/configure-comma
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/nccl/configure-comma
  title: "Enable, disable, and configure CoMMA \_|\_ AI Hypercomputer \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Enable, disable, and configure CoMMA | AI Hypercomputer | Google Cloud Documentation
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
Collective Communication Analyzer (Co MMA)
Enable, disable, and configure Co MMA
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
Enable CoMMA Installation options
Install CoMMA
Verify installation or enablement
Disable CoMMA
Configure and view CoMMA NCCL telemetry Set data granularity
Export data to a local file
Configuration options
What's next
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Enable, disable, and configure Co MMA
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Enable CoMMA Installation options
Install CoMMA
Verify installation or enablement
Disable CoMMA
Configure and view CoMMA NCCL telemetry Set data granularity
Export data to a local file
Configuration options
What's next
This guide describes how to enable, disable, and manage the Collective
Communication Analyzer (CoMMA) library. CoMMA collects NCCL telemetry for
Google Cloud services. For more information about CoMMA, see
Collective Communication Analyzer (CoMMA) .
Enable Co MMA
CoMMA is pre-installed and enabled if you use images that contain the NCCL gIB
plugin. For a list of these images, see
Images that have CoMMA enabled .
Installation options
If you don't use any of these images and want to install CoMMA, use one of the
following methods.
Installation method
Supported machine types
NCCL Google Infrastructure Bundle (gIB) image
(Recommended for newer machine types)
A4X Max, A4X, A4 High, and A3 Ultra
CoMMA installer image
A4X, A4 High, and A3 Ultra
Build from source (Required for older machine types)
A3 Mega, A3 High, A3 Edge, A2 Ultra, A2 Standard, and N1 with attached
GPUs
Install Co MMA
To install CoMMA, select one of the following options:
NCCL gIB image CoMMA installer image Build from source
More
To install CoMMA by using the NCCL gIB image, run the following command.
See more code actions.
Light code theme
Dark code theme
docker run --rm --name nccl-gib-installer
--volume /usr/local/gib:/var/lib/gib \
us-docker.pkg.dev/gce-ai-infra/gpudirect-gib/nccl-plugin-gib install \
--install-nccl
You can get CoMMA binaries in a standalone Docker image. You can use the
CoMMA Docker image, us-docker.pkg.dev/gce-ai-infra/gpudirect-gib/comma-installer ,
as initContainers to install CoMMA binaries into your workload container.
The container stores the binaries in the /artifacts directory.
To use the CoMMA installer image, complete the following steps:
Install NCCL 2.23 or later .
Install CoMMA into your workload by adding the following snippet to
your initContainers :
- name : profiler-plugin-installer
image : us-docker.pkg.dev/gce-ai-infra/gpudirect-gib/comma-installer:latest
imagePullPolicy : Always
volumeMounts :
- name : nccl-plugin-volume
mountPath : /usr/local/nccl-plugin
command :
- /bin/sh
- -c
- |
set -ex
rm -rf /usr/local/nccl-plugin/lib64/libnccl-profiler.so
cp /artifacts/libnccl_profiler.so /usr/local/nccl-plugin/lib64/libnccl-profiler.so
# GPUViz is a dependency of telemetry insights such as straggler detection
rm -rf /usr/local/nccl-plugin/lib64/libGPUViz.so
cp /artifacts/libGPUViz.so /usr/local/nccl-plugin/lib64/
The YAML configuration snippet specifies a container for installing CoMMA.
The snippet specifies the installer container image, its pull policy,
and a volume mount for the plugin.
The same volume mount should be mounted to your workload container with
<mount-path>/lib64 added to LD_LIBRARY_PATH .
The command section runs a shell script to remove any existing profiler
library. It then copies the new
profiler library into the designated plugin directory.
The script ensures that
the correct version of the profiler plugin is installed and ready for use.
To build the CoMMA library from source, install the following software:
Rust Programming Language, which the compiler and Cargo require.
This could be installed with rustup
or system packages
Libclang-dev , which bindgen requires.
CMake version 3.10 or later
To build from source, complete the following steps:
Clone the repository and its submodules.
git clone --recurse-submodules https://github.com/google/CoMMA
Compile the binaries by using Cargo.
cargo build --release
Cargo saves the binary in target/release/libnccl_profiler.so .
Enable NCCL to load the CoMMA libraries by using one of the
following methods:
Copy the compiled libnccl_profiler.so to a directory in your
LD_LIBRARY_PATH . Rename it to libnccl-profiler.so
(use a hyphen instead of an underscore).
Alternatively, set the NCCL_PROFILER_PLUGIN environment variable to
specify the path of the .so file.
Verify installation or enablement
To verify that NCCL loads the CoMMA libraries, review the NCCL logs:
Enable NCCL debug logging. Enable logging by setting the NCCL_DEBUG=INFO
environment variable. You can also specify a more detailed debug level.
For more debug options, see the
NCCL_DEBUG
section in the NVIDIA documentation.
Specify the INIT subsystem for debugging. Specify INIT by setting the
NCCL_DEBUG_SUBSYS=INIT environment variable. You can also specify other
subsystems. For more subsystem options, see the
NCCL_DEBUG_SUBSYS
section.
Find a line in the NCCL log that is similar to the following:
NCCL INFO PROFILER/Plugin: Plugin name set by env to PATH_TO_PROFILER_PLUGIN
Disable Co MMA
Caution: For features such as
straggler detection to function, CoMMA must
be enabled to export data to Google Cloud services.
If CoMMA is already installed, prevent it from collecting
NCCL telemetry by setting the NCCL_TELEMETRY_MODE=0 CoMMA environment variable
before running your workloads. To set CoMMA environment
variables, see Set environment variables .
To re-enable CoMMA after disabling it, follow these steps:
Set the NCCL_TELEMETRY_MODE environment variable to a non-zero value; for
example, to use the default mode, specify NCCL_TELEMETRY_MODE=3 .
To review the full list of options, see
NCCL_TELEMETRY_MODE in the Configuration options
table.
Verify that CoMMA is working .
Configure and view Co MMA NCCL telemetry
If CoMMA is enabled in your environment, you can configure the type of telemetry
data that it collects by setting the level of data granularity. This section
explains how to set data granularity and the available options.
You can also review the data that CoMMA collects to verify that it
aligns with your organization's security policies or to analyze it with your own
NCCL telemetry analysis tools. To do so, export the raw data to a
local file.
Set data granularity
CoMMA collects NCCL telemetry at different granularity levels.
Configure the granularity level by using environment variables.
To set CoMMA environment
variables, see Set environment variables .
Default behavior : By default, CoMMA tracks NCCL operations,
including both collective and peer-to-peer, the metadata of those
operations, and completion
times. It uses the following environment variables:
NCCL_PROFILER_TRACK_NCCLOP=true
NCCL_PROFILER_AGGREGATE_STEPS=true
NCCL_PROFILER_TRACK_INTERPROCESS_PROXYOP=true
To enable more granular levels of data collection,
set the following environment variables:
Track completion time for proxy operations by setting
NCCL_PROFILER_TRACK_PROXYOP=true .
Track the time spent on each networking I/O operation by setting
NCCL_PROFILER_TRACK_STEPS=true . This setting provides the highest
level of granularity.
To review the full list of environment variables, see
Configuration options .
Export data to a local file
Note: CoMMA primarily collects NCCL telemetry for other features, such as
straggler detection. However, you can also view the raw data by completing the
steps in this section.
Export the raw data to a local file to view it. To export
the data to a local file and view the output, follow the steps:
Set the NCCL_TELEMETRY_MODE to either 1 or 4 . To learn about
the NCCL_TELEMETRY_MODE environment variable, see
Configuration options .
Set one of the following export paths:
Set NCCL_PROFILER_LATENCY_FILE= PATH to export
detailed event traces to a local file. Replace
PATH with a path such as /tmp/latency-%p.txt .
Set NCCL_PROFILER_SUMMARY_FILE= PATH to export
aggregated summary statistics. Replace
PATH with a path such as /tmp/summary-%p.txt .
The system replaces %p with the process ID.
Review the output. The raw output is a JSON file.
Configuration options
The following sections summarize all the environment variables that you
can configure for CoMMA. They also explain how to set any environment variable.
Set CoMMA environment variables
To set a CoMMA environment variable to a non-default value, set environment
variables. You can set environment variables on the command-line for the
compute instance or add them to a startup script. If you set the environment variables
at the command-line, the value only persists per session. To make the
environment variables permanent, place them into the ~/.bashrc file, ~/.profile ,
or whichever startup file your operating system uses. For more information,
review your operating system's documentation.
You need to set CoMMA environment variables before your workload starts as the
workload reads the variables during NCCL initialization. You can set environment
variables as follows:
export ENVIRONMENT_VARIABLE = VALUE
Replace the following:
ENVIRONMENT_VARIABLE : the environment variable you
want to set; for example, NCCL_TELEMETRY_MODE .
VALUE : the value for the environment variable; for
example, 0 .
CoMMA environment variables
This section lists the environment variables that you can set for CoMMA
and their default values.
Name
Description
Default
NCCL_PROFILER_AGGREGATE_STEPS
Enables ( true ) or disables ( false )
aggregating network chunk operations.
true
NCCL_PROFILER_GPUVIZ_LIB
Specifies the path to libGPUViz.so , a library that uploads
NCCL telemetry to Google Cloud services. This library wraps the
agent communication API .
The agent communication API is the interface that agents, such as processes
running within your guest operating system, use to initiate secure and
reliable connections with Google Cloud services.
If you use a NCCL gIB image as an
installer or use any of the images that bundle
the NCCL gIB plugin ,
you don't need to set this environment variable.
NCCL_PROFILER_LATENCY_FILE
Specifies the path template for the latency trace file. For example,
/tmp/latency-%p.txt .
The system replaces %p in the name with the process ID (pid).
To disable file-based export, unset this variable.
NCCL_PROFILER_PLUGIN
Specifies the path to the profiler plugin binary.
If you don't specify this setting, NCCL looks for
libnccl-profiler.so in the
LD_LIBRARY_PATH .
NCCL_PROFILER_SUMMARY_FILE
Specifies the path for the aggregated summary file. For example,
/tmp/summary-%p.txt .
The system replaces %p in the name with the process ID (pid).
To disable file-based export, unset this variable.
NCCL_PROFILER_SUMMARY_INTERVAL
Specifies the interval for summary reporting. For example,
10s , 1m .
Supports d , h , m , s ,
ms , us , ns
1m
NCCL_PROFILER_TRACK_INTERPROCESS_PROXYOP
Enables ( true ) or disables ( false )
monitoring inter-process NCCL proxy operations.
true
NCCL_PROFILER_TRACK_NCCLOP
Enables ( true ) or disables ( false )
tracking and reporting for NCCL operations,
including both collective and point-to-point communications.
true
NCCL_PROFILER_TRACK_PROXYOP
Enables ( true ) or disables ( false ) proxy
operation tracking and reporting.
false
NCCL_PROFILER_TRACK_STEPS
Enables ( true ) or disables ( false )
tracking and reporting network chunk operations.
false
NCCL_TELEMETRY_MODE
Controls the export location of the NCCL telemetry data.
The options include the following:
Value
Description
0
Disables NCCL telemetry collection.
1
Exports NCCL telemetry to a local file. With this method, NCCL
telemetry is unavailable to Google.
3
Exports NCCL telemetry to Google services.
4
Exports NCCL telemetry to both local file and Google services.
3
What's next
Learn how to troubleshoot issues with CoMMA .
Learn how to detect and resolve stragglers .
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
