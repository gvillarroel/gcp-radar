---
title: "Monitor Compute Engine instances and Slurm clusters \_|\_ AI Hypercomputer\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/monitor
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/monitor
  title: "Monitor Compute Engine instances and Slurm clusters \_|\_ AI Hypercomputer\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Monitor Compute Engine instances and Slurm clusters | AI Hypercomputer | Google Cloud Documentation
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
Before you begin Limitations
Required roles
Available metrics Infrastructure metrics
ML workload metrics
Straggler detection metrics
View metrics Use prebuilt dashboards
Create custom dashboards
View straggler detection logs
What's next
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Monitor Compute Engine instances and Slurm clusters
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin Limitations
Required roles
Available metrics Infrastructure metrics
ML workload metrics
Straggler detection metrics
View metrics Use prebuilt dashboards
Create custom dashboards
View straggler detection logs
What's next
This document explains how to monitor A4X Max, A4X, A4, A3 Ultra, or A3 Mega
Compute Engine instances that you created by using reserved capacity.
Specifically, this document explains how to use
Cloud Monitoring dashboards to identify and
troubleshoot performance bottlenecks in your standalone compute instances or
Slurm clusters. Using these dashboards helps you minimize downtime and
performance issues in your workloads.
When you create or use prebuilt Monitoring dashboards to monitor
standalone compute instances or Slurm clusters, you can monitor the following:
Compute instance health
GPU performance
Network transmission efficiency
Network efficiency among blocks and sub-blocks
Machine learning (ML) workload efficiency
Straggler detection
Before you begin
Before monitoring your workload, if you haven't already done so, complete the
following steps:
Deploy a workload that you can monitor . To learn which workloads are
supported, see the limitations in this document. To learn how
to deploy a workload, see
Deployment options overview .
Learn about the Google Cloud services for monitoring workloads :
The metrics in this document use Monitoring dashboards. Learn
about Monitoring dashboards ,
Monitoring retention periods ,
and
Monitoring pricing .
Straggler detection also provides log entries in Cloud Logging. Learn
about
Logging interfaces ,
Logging retention periods ,
and
Logging pricing .
When you use the Google Cloud console to access Google Cloud services and
APIs, you don't need to set up authentication.
Limitations
The metrics in this document are only supported for workloads that run on
compute instances that meet all the following criteria:
The compute instances must be created as either standalone
Compute Engine instances or as part of a Slurm cluster.
The compute instances must have been created by using reserved capacity.
The compute instances must use the A4X Max, A4X, A4, A3 Ultra, or A3 Mega
machine series .
However, straggler detection also supports virtual machine (VM) instances
that use the A3 Mega machine series.
Caution: Although metrics might appear for other machine series than A4X Max,
A4X, A4, A3 Ultra, or A3 Mega, those metrics might be incorrect.
Known issues for infrastructure metrics:
Some compute instances might not display
GPU Power Consumption metrics.
Some compute instances might not display GPU Temperature or
GPU Thermal Margin metrics, or they might display
NaN instead of metrics.
Metrics might not appear in the Google Cloud console for up to seven
minutes after they're collected.
To monitor ML workload metrics, you must
set up monitoring for your workload .
Straggler detection metrics have the following additional limitations:
For supported machine series other than
A3 Mega, straggler detection only supports compute instances that enable the
Collective Communication Analyzer (CoMMA) library to export NCCL telemetry
to Google Cloud services. For more information, see
CoMMA overview .
Caution : You might see false positives or false negatives when
using straggler detection such as, but not limited to, the following:
Straggler detection logs report that running compute instances that
don't support straggler detection aren't suspected stragglers.
Although straggler detection is accurate for many ML workloads,
inaccuracies are more likely for workloads with complex communication
patterns.
Consequently, we recommend that you act on suspected stragglers
only when other metrics indicate that the workload is experiencing issues.
Otherwise, if the overall performance of the workload is satisfactory,
then no action is recommended.
Straggler detection typically takes up to 10 minutes to report a straggler.
Unlike the other metrics in this document, you can't filter
straggler detection metrics for your projects by cluster, block, sub-block,
or compute instance. However, you can filter queries for straggler detection
logs by the ID of one or more compute instances that are suspected
stragglers.
Required roles
To get the permissions that
you need to monitor metrics for AI Hypercomputer workloads,
ask your administrator to grant you the
following IAM roles:
To view metrics in Cloud Monitoring:
Monitoring Editor ( roles/monitoring.editor )
on the project
To view straggler detection logs in Logging:
Logs Viewer ( roles/logging.viewer )
on the project
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to monitor metrics for AI Hypercomputer workloads. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to monitor metrics for AI Hypercomputer workloads:
To view dashboards:
monitoring.dashboards.get
on the project
To create dashboards:
monitoring.dashboards.create
on the project
To view log entries:
logging.logEntries.list
on the project
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Available metrics
Depending on your use case, the following metrics are available for monitoring
your compute instances and Slurm clusters:
To monitor the health, performance, and network performance of the GPUs
attached to your compute instances, see Infrastructure metrics .
To monitor the efficiency of the GPUs in your ML workloads, see
ML workload metrics .
To monitor suspected straggler compute instances in ML workloads with slow
performance, see Straggler detection metrics .
To learn how to view these metrics, see Visualize metrics in
this document.
Infrastructure metrics
To monitor the health, performance, and network performance of the GPUs attached
to your compute instances, you can use the following metrics:
GPU health metrics
GPU performance metrics
GPU network performance metrics
GPU fatal errors metrics
For an overview of available metrics in Compute Engine, see
Google Cloud metrics .
GPU health metrics
To monitor the health of your GPUs, use the following metrics:
Name
Metric type
Supported machine series
Description
Machine Status
machine/machine_status
A4X Max, A4X, A4, A3 Ultra, or A3 Mega
Whether the machine that compute instance uses is healthy, or
the machine is unhealthy and requires repair.
NVSwitch Status
instance/gpu/nvswitch_status
A4X Max, A4X, A4, A3 Ultra, or A3 Mega
Whether an
NVLink
Switch on an NVIDIA GPU attached to a compute instance is
encountering issues.
VM Infra Health
instance/gpu/infra_health
A4X, A4, A3 Ultra, or A3 Mega
The health of the cluster, block, sub-block, and host on which
your compute instances are running. If this metric shows that a
compute instance's infrastructure is unhealthy, then the metric also
describes the issue.
VM Failure Prediction Score
instance/gpu/failure_prediction_score
A4X, A4, A3 Ultra, or A3 Mega
The likelihood that the host on which the compute instance runs
degrades in the next five hours. The value can be between
0.0 and 1.0 . The closer the value remains
to 1.0 for a consistent period of time, the more likely
the compute instance will degrade. In that case, we recommend that
you move the job to a different compute instance and, if you
encounter issues with the compute instance, report its host as
faulty.
GPU performance metrics
To monitor the performance of your GPUs, use the following metrics:
Name
Metric type
Supported machine series
Description
Accumulated Context Utilization
instance/gpu/accumulated_context_utilization_seconds
A4X Max, A4X, A4, A3 Ultra, or A3 Mega
The total time, in seconds, that the GPU is busy processing a
workload.
GPU Power Consumption
instance/gpu/power_consumption
A4X Max, A4X, A4, A3 Ultra, or A3 Mega
The power in watts (W) and in decimal values that is consumed on
individual GPUs on the host. For compute instances with multiple
GPUs attached, the metric provides the power consumption separately
for each GPU on the host.
SM Utilization
instance/gpu/sm_utilization
A4X Max, A4X, A4, A3 Ultra, or A3 Mega
A non-zero value indicates that the streaming multiprocessors
(SMs) on your GPUs are actively being used.
GPU Temperature
instance/gpu/temperature
A4X Max, A4X, A4, A3 Ultra, or A3 Mega
The temperature in Celsius (℃) and in decimal values of
individual GPUs on the host. For compute instances with multiple
GPUs attached, the metric provides the temperature separately for
each GPU on the host.
GPU Thermal Margin
instance/gpu/tlimit
A4X Max, A4X, A4, A3 Ultra, or A3 Mega
The thermal headroom in Celsius (℃) and in decimal values
that individual GPUs have before they need to slow down due to high
temperature. For compute instances with multiple GPUs attached, the
metric provides the thermal headroom separately for each GPU on the
host.
GPU network performance metrics
To monitor the network performance of your GPUs, use the following metrics:
Name
Metric type
Supported machine series
Description
Link Carrier Changes
instance/gpu/link_carrier_changes
A4X, A4, A3 Ultra, or A3 Mega
How often the network link carrier changes in a minute.
Network RTT
instance/gpu/network_rtt
A4X, A4, A3 Ultra, or A3 Mega
The round-trip time, measured in microseconds, for network data
to travel between a source and destination.
Network Traffic at Inter-Block
instance/gpu/network/inter_block_tx
A4X, A4, A3 Ultra, or A3 Mega
The number of bytes of network traffic among blocks.
Network Traffic at Inter-Sub-block
instance/gpu/network/inter_subblock_tx
A4X, A4, A3 Ultra, or A3 Mega
The number of bytes of network traffic among sub-blocks.
Network Traffic at Intra-Sub-block
instance/gpu/network/intra_subblock_tx
A4X, A4, A3 Ultra, or A3 Mega
The number of bytes of network traffic within a single
sub-block.
NVLink Active Speed
instance/gpu/nvlink_active_speed
A4X Max, A4X, A4, A3 Ultra, or A3 Mega
The current access link port speed, in GBps.
Throughput Rx Bytes
instance/gpu/throughput_rx_bytes
A4X, A4, A3 Ultra, or A3 Mega
The number of bytes received from network traffic.
Throughput TX Bytes
instance/gpu/throughput_tx_bytes
A4X, A4, A3 Ultra, or A3 Mega
The number of bytes transmitted to network traffic.
GPU fatal errors metrics
To monitor the errors that your GPUs encounter and that might force your compute
instances to stop, or negatively impact their performance, use the following
metrics:
Name
Metric type
Supported machine series
Description
NVLink runtime error
instance/gpu/nvlink_runtime_error
A4X Max or A4X
Whether an NVLink runtime error occurred.
Uncorrectable DRAM ECC errors
instance/gpu/dram_uncorrectable_ecc_error_count
A4X Max or A4X
The number of uncorrectable error-correcting codes (ECCs) in a
GPU dynamic random access memory (DRAM).
Uncorrectable DRAM row remapping count
instance/gpu/dram_uncorrectable_row_remapping_count
A4X Max or A4X
The number of row remappings from uncorrectable errors in GPU
DRAMs.
Uncorrectable DRAM row remapping failed
instance/gpu/dram_row_remapping_failed
A4X Max or A4X
Whether a row remapping in GPU DRAMs has failed due to one of
the following issues:
A remapping attempt on a memory bank failed because the
memory bank already has eight uncorrectable error rows remapped.
A remapping attempt on a row failed because the row was
already remapped.
A remapping attempt failed because 512 total remappings have
occurred.
Uncorrectable PCIe errors
instance/gpu/pcie_fatal_error_count
A4X Max or A4X
The number of uncorrectable peripheral component interconnect
express (PCIe) errors.
Uncorrectable cache ECC errors
instance/gpu/cache_uncorrectable_ecc_error_count
A4X Max or A4X
The number of uncorrectable ECCs in cache memory.
ML workload metrics
To monitor the productivity—specifically, the
goodput —of
your ML workloads, use the following metrics:
Name
Metric type
Supported machine series
Description
Productive time
workload/goodput_time
A4X, A4, A3 Ultra, or A3 Mega
The time, in seconds, the workload spends on goodput
activities. These activities are core, useful tasks, such as a forward or
backward pass during model training.
Non-productive time
workload/badput_time
A4X, A4, A3 Ultra, or A3 Mega
The time, in seconds, the workload spends on badput activities.
These activities are overhead tasks, such as loading or preprocessing data
for training.
Straggler detection metrics
Straggler detection metrics help you notice and pinpoint suspected stragglers.
Stragglers are single-point, non-crashing failures that eventually
slow down the entire workload.
To monitor straggler detection for your VMs, use the following metric:
Name
Metric type
Supported machine series
Description
Suspected Stragglers
instance/gpu/straggler_status
A4X, A4, A3 Ultra, or A3 Mega
Whether a VM is suspected as a straggler that is affecting the
performance of the workload. We recommend that you act on suspected
stragglers only when other metrics indicate that the workload is
experiencing issues.
You can also view straggler detection metrics in the log entries for an A4X, A4,
A3 Ultra or A3 Mega instance. For example, you can use the following queries:
Description
Query
Logs with suspected
stragglers for specific VMs . Use this query to check if there are any
suspected stragglers for a specific workload in your project.
logName=~ "/logs/compute.googleapis.com%2Fworkload_diagnostic" AND jsonPayload.suspectedStragglersDetection.numNodes > 0 AND jsonPayload.suspectedStragglersDetection.nodes.instanceId=" INSTANCE_ID "
Replace INSTANCE_ID with the
ID of a VM .
For each additional VM that you want to specify, add the following condition
to the query:
OR jsonPayload.suspectedStragglersDetection.nodes.instanceId=" INSTANCE_ID "
All logs from straggler detection for
your project . Use this query to verify if the straggler detection service
is running when no suspected stragglers are detected. (Due to the
limitations, you can't filter the logs without suspected stragglers by
specific VMs.)
logName=~ "/logs/compute.googleapis.com%2Fworkload_diagnostic"
Straggler detection metrics are particularly helpful for large-scale ML
workloads for the following reasons:
Large-scale ML workloads are very susceptible to stragglers . Large-scale
ML workloads use synchronous and massively distributed computing. (In other
words, they have many, highly interdependent components that run
simultaneously.) This architecture makes large-scale ML workloads very
susceptible to single-point failures like stragglers.
Noticing and pinpointing stragglers in large-scale ML workloads is very difficult .
For reference, consider that there are two types of single-point failures:
stopping failures : Failures that cause the entire system to halt; for
example
host errors and maintenance events .
They are relatively straightforward to detect and resolve.
slow failures : Failures that cause severe performance degradation without
crashes. They are very difficult to pinpoint and debug.
Due to their slow-failure nature, stragglers are inherently difficult to
notice and pinpoint, especially in large-scale synchronous workloads.
View metrics
To view metrics for your compute instances and Slurm clusters, use
Monitoring dashboards as follows:
To view infrastructure metrics and straggler detection metrics, you can do
the following:
For a quick overview of your infrastructure health and performance, or
to customize an existing dashboard,
use prebuilt dashboards .
For specific monitoring needs,
create custom dashboards .
To view ML workload metrics, see the documentation for how to
set up monitoring for your workload .
To view logs from straggler detection,
view straggler detection logs .
If you encounter issues when you use a dashboard, then see
Troubleshoot slow performance .
Use prebuilt dashboards
You can use Monitoring dashboards that are prebuilt for
AI Hypercomputer to view metrics for your compute instances and Slurm
clusters. You can also create a copy of a prebuilt dashboard and modify it to
fit your needs.
To use a prebuilt dashboard for AI Hypercomputer, do the following:
In the Google Cloud console, go to the dashboard Dashboards page:
Go to Dashboards
If you use the search bar to find this page, then select the result whose subheading is
Monitoring .
In the Name column, click the name of one of the following dashboards
based on which metrics you want to view:
To monitor compute instance health, GPU performance, and straggler
detection, use the Cluster Director Health Monitoring dashboard.
For more information about how to use these metrics to identify and
analyze issues, also use the
GCE Interactive Playbook - Cluster Director Health Monitoring
playbook dashboard.
To monitor network transmission efficiency, use the
Cluster Director Transmission Efficiency dashboard.
To monitor network efficiency among blocks and sub-blocks, use the
Cluster Director Block Network dashboard.
For more information about how to use these metrics to identify and
analyze issues, also use the
GCE Interactive Playbook - Cluster Director Block Network
playbook dashboard.
The details page of your chosen dashboard opens. You can use the
time-range selector in the toolbar to change the time range of the data.
Optional: To create a copy of a dashboard and customize it to fit your
needs, click edit Copy dashboard .
Create custom dashboards
To create a custom Monitoring dashboard, do the following:
Choose the metrics to monitor. If you haven't already, then see
Available metrics in this document.
Create and manage custom dashboards .
View straggler detection logs
To view straggler detection logs by using the
Logs Explorer , complete the
following steps:
In the Google Cloud console, go to the
segment
Logs Explorer page:
Go to Logs Explorer
If you use the search bar to find this page, then select the result whose subheading is
Logging .
The page queries all logs in your project by default. Click Stop query .
Use the time-range selector in the toolbar to select the time range that you
want to analyze.
In the Query pane, enter
a query for straggler detection logs .
Click Run Query .
The following is an example of a straggler detection log entry.
{
...
"jsonPayload": {
...
"@type": "type.googleapis.com/ml.aitelemetry.performancedebugging.output.NetworkStragglersOutput",
"suspectedStragglersDetection": {
"numNodes": 4,
"nodes": [
{
"latencyMs": 9,
"instanceId": " INSTANCE_ID_1 "
},
{
"latencyMs": 9,
"instanceId": " INSTANCE_ID_2 "
},
{
"instanceId": " INSTANCE_ID_3 ",
"latencyMs": 4
},
{
"instanceId": " INSTANCE_ID_4 ",
"latencyMs": 0
}
],
"message": "Suspected stragglers detected."
}
},
"resource": {
"type": "project",
"labels": {
"project_id": " PROJECT_NUMBER "
}
},
...
"severity": "INFO",
"logName": "projects/ PROJECT_ID /logs/compute.googleapis.com%2Fworkload_diagnostic",
...
}
The log entry includes the following fields:
numNodes : The number of suspected straggler compute instances that are
detected in the project. In the example, four suspected straggler compute
instances have been detected.
instanceId : The ID of a compute instance that was detected as a suspected
straggler.
What's next
Observe and monitor VMs
Test clusters using cluster health scanner
Customize dashboards for Google Cloud services
Troubleshoot slow performance
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
