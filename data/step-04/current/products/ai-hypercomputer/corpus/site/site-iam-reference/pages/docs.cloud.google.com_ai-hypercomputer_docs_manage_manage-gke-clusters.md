---
title: "Manage AI-optimized GKE clusters \_|\_ AI Hypercomputer \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/manage/manage-gke-clusters
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/manage/manage-gke-clusters
  title: "Manage AI-optimized GKE clusters \_|\_ AI Hypercomputer \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Manage AI-optimized GKE clusters | AI Hypercomputer | Google Cloud Documentation
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
Manage host maintenance for AI workloads Monitor host maintenance events
Manually start a host maintenance event
Use host maintenance information while scheduling your workloads
Manage GKE cluster upgrades for AI workloads
Report faulty hosts through GKE Requirements
Report a faulty host
Monitor the operation progress
What's next
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Manage AI-optimized GKE clusters
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Manage host maintenance for AI workloads Monitor host maintenance events
Manually start a host maintenance event
Use host maintenance information while scheduling your workloads
Manage GKE cluster upgrades for AI workloads
Report faulty hosts through GKE Requirements
Report a faulty host
Monitor the operation progress
What's next
This page shows you how to manage AI-optimized Google Kubernetes Engine (GKE)
clusters of A4X Max, A4X, A4, A3 Ultra, A3 Mega, and A3 High (8 GPUs) machines, including the following common
events relevant to GKE clusters and AI workloads:
Host maintenance
Cluster upgrades
Faulty host reporting
Manage host maintenance for AI workloads
GKE nodes run on Compute Engine instances that periodically
experience host events that
can be disruptive to AI workloads. Since host events occur on the underlying
Google Cloud infrastructure, they bypass GKE
maintenance windows and exclusions .
While most compute instances have their host maintenance policy set to live
migrate , which
minimizes the disruption of workloads, GPUs and TPUs
don't support live migration .
When these host events affect your GKE nodes running AI
workloads, GKE has to terminate the node and the Pods running on
the node. If the Pods are deployed as part of a larger workload like a
Job or
Deployment ,
GKE attempts to restart the Pods on the affected node.
To learn more about managing host maintenance of the underlying compute
instances, see
Manage GKE node disruption for GPUs and TPUs .
Monitor host maintenance events
For clusters running GKE version 1.31.1-gke.2008000 or later, you
can view the scheduled start time of the host maintenance event in the following
way. The start time is represented by Kubernetes node labels on the
corresponding GKE
node for all GPUs and TPUs.
For details, see Monitor maintenance
notifications .
With these node labels, you can do the following:
Manually start a host maintenance event
Use host maintenance event information while scheduling your workloads
Manually start a host maintenance event
After Compute Engine issues a notification about a scheduled maintenance
event, you can manually start maintenance at a time that aligns with your
schedule. For example, you can choose to perform maintenance during periods of
reduced activity.
If you don't manually start a host maintenance event, then Compute Engine
will automatically complete regularly scheduled maintenance.
Follow the instructions to Manually start a host maintenance event . Also, continue
reading this section to learn the following:
Configure GKE to terminate your workloads gracefully
Process of graceful termination
Monitor the progress of an active graceful termination
Use host maintenance information while scheduling your workloads
You can use the maintenance information surfaced through GKE node
labels along with node affinity and
anti-affinity
to minimize disruption to your workloads.
See the following sections for examples of how to use this information.
Schedule Pods to nodes that have no future scheduled maintenance events
You can instruct GKE to only schedule Pods to nodes that have no
future scheduled maintenance events, such as with the following snippet:
spec :
affinity :
nodeAffinity :
requiredDuringSchedulingIgnoredDuringExecution :
nodeSelectorTerms :
- matchExpressions :
- key : cloud.google.com/scheduled-maintenance-time
operator : DoesNotExist
Schedule Pods to nodes that have maintenance scheduled after a certain date
You can instruct GKE to only schedule Pods to nodes that have
maintenance scheduled after a certain date by providing the Unix epoch time:
spec :
affinity :
nodeAffinity :
requiredDuringSchedulingIgnoredDuringExecution :
nodeSelectorTerms :
- matchExpressions :
- key : cloud.google.com/scheduled-maintenance-time
operator : Gt
values :
- 1733296000
Manage GKE cluster upgrades for AI workloads
AI workloads are sensitive to disruption.
During the lifecycle of a GKE cluster, AI workloads must be
prepared for disruption to both the underlying compute instances, as well as the
GKE cluster itself:
Host maintenance : To manage host maintenance of the underlying compute
instances, see
Manage GKE node disruption for GPUs and TPUs .
This is also described in the previous sections.
Cluster upgrades : To manage disruption from
cluster upgrades , you can use the following
tools:
Maintenance windows :
Schedule when GKE can perform cluster upgrades and
other types of cluster
operations .
Maintenance exclusions :
Prevent cluster upgrades and other types of cluster operations during
a specific time period.
We recommend that you keep your cluster enrolled in a release channel.
GKE clusters, by default, are enrolled in the Regular release
channel. To learn more about the benefits of release channels, see the
Comparison between clusters enrolled and not enrolled in a release
channel .
With release channels, you get access to more features, including additional
maintenance exclusion
scopes .
We recommend the "no minor or node upgrades" scope for AI workloads.
Report faulty hosts through GKE
This section outlines how, through GKE, you can report a faulty
host that has compute instances provisioned by using the
reservation-bound provisioning model .
If you want to report a faulty host for a node that was provisioned by using the
flex-start provisioning model ( Preview ), then
contact your account team instead.
Caution : Reporting a faulty host is a disruptive action that stops your VM.
Before you report a host, thoroughly investigate your environment by using tools like the
cluster health scanner (CHS) to
identify the root cause of the issue. Only report the host as faulty if you have no alternatives
to resolve your issue.
A host is a single physical server
machine in the data center running a compute instance which hosts your
GKE node. You can report faulty hosts by applying a
fault-behavior node label to the affected GKE node. After you
apply the node label to a particular GKE node, GKE
does the following steps:
Gracefully evicts workloads from the node.
Prevents new Pods from being scheduled on the node.
Calls the API on the compute instance to mark the host as faulty.
Waits for the compute instance to be brought back up on a healthy host
machine. For reservations that use the
all capacity reservation operational mode ,
Compute Engine brings back the compute instance on the same node
after the repair operation completes.
Removes the taint and the fault-behavior label from the node.
After this, the node will be ready to serve workloads again.
Requirements
To report a faulty host, your GKE node must meet the following
requirements:
You must be running GKE patch version 1.32.3-gke.1057001 or
later.
You must be running one of the following
GPU machine types : A4X Max, A4X, A4, A3 Ultra, A3 Mega, and A3 High (8 GPUs).
You must be running your GKE nodes on a compute instance that
is reservation-bound .
Your GKE node must be in a RUNNING state. If you try to
report a faulty host after deleting the compute instance, an error message
is returned, and the host machine won't be marked as faulty.
You might be rate-limited on the number of calls to this API per reservation
per month based on an evaluation of the health of your blocks. Rate-limits
don't apply if your reservation uses the
all capacity reservation operational mode .
Report a faulty host
Note: The local SSD data will be deleted on successful invocation of the API as
the compute instance moves hosts. We recommend that you back up your local SSD
data prior to reporting a faulty node through GKE.
To report a faulty host:
Use the
GKE observability tools ,
your own monitoring tools, or logs to identify the GKE nodes
that are experiencing performance issues. Save the
NODE_NAME .
Report the node as faulty:
Important: After you report a host as faulty, don't send additional requests
until the operation completes .
GKE rejects additional requests while the operation is in
progress.
kubectl label nodes NODE_NAME cloud.google.com/fault-behavior = FAULT_REASON
Replace the following:
NODE_NAME : the name of the faulty node.
FAULT_REASON : the appropriate fault reason
using one or more of the following values:
PERFORMANCE : use this value if GPUs on a compute instance are
performing slower than other GPUs in the cluster and you don't see
any XID errors in the logs, and none of the other usual failure
patterns such as silent data corruption are detected.
SDC : use this value for silent data corruption, if you see data
corruption but no system crash. This data corruption can be caused
by CPU defects, software bugs such as use-after-free or memory
stomping, kernel issues, or other defects. Most often, this term
is used to refer to hardware-induced defects.
XID : use this value if you identified an unrecoverable GPU error
with an XID for a compute instance.
unspecified : use this value if you are not sure what behavior is
causing the issue with your compute instance. This is the default
value. However, we recommend specifying one of the other values,
if applicable.
After you report a faulty host for a node, the time when the node restarts
varies based on the
reservation operational mode that is specified in the reservation that the node uses.
To verify the reservation operational mode for a reservation,
view the
reservationOperationalMode field in the reservation .
The following table summarizes the faulty host process for the two available reservation operational
modes: all capacity mode and managed mode .
All capacity mode ( ALL_CAPACITY )
Managed mode ( HIGHLY_AVAILABLE_CAPACITY )
Supported machine types
A4X Max and A4X
A4, A3 Ultra, A3 Mega, and A3 High
Faulty host report API rate limiting
No rate limits apply.
Calls to the API may be rate-limited.
Faulty host report process
When you report a faulty host for a node that runs in the all capacity mode, the
following occurs:
Evict Pods : After the label is applied to the faulty node, GKE
taints the node to
block scheduling new Pods. GKE also starts to gracefully evict the
running Pods on the node. GKE respects the
Pod Disruption
Budgets (PDBs) and the spec.terminationGracePeriodSeconds field of
your Pod manifests. For more details, see
Configure GKE to terminate your workloads gracefully .
Report and repair the faulty host : GKE automatically reports
and repairs the faulty host by calling the Compute Engine API, which results in a
sequence
of operations that usually takes 10-12 minutes to report the faulty host and then
can take 3-14 days, or even longer at times, to repair the host.
Restart the instance : After the host repair operation completes (usually
3-14 days), one of the following occurs:
If the instance is in the REPAIRING state and the resources are available
when the repair completes, then Compute Engine automatically restarts the instance
on the repaired host.
Otherwise, if the instance is in the TERMINATED state or if resources
aren't available when the repair completes, then the instance state stays in or changes to
TERMINATED . You must
manually restart the instance
when you want it to run. However, restarting the instance might fail if resources aren't
available when you restart the instance; for example, this can happen if other instances are
already using the repaired host.
When you report a faulty host for a node that runs in the managed mode, the
following occurs:
Evict Pods : After the label is applied to the faulty node, GKE
taints the node to
block scheduling new Pods. GKE also starts to gracefully evict the running
Pods on the node. GKE respects the
Pod Disruption
Budgets (PDBs) and the spec.terminationGracePeriodSeconds field of
your Pod manifests. For more details, see
Configure GKE to terminate your workloads gracefully .
Report and start repairing the faulty host : GKE automatically reports
and repairs the faulty host by calling the Compute Engine API, which results in a
sequence
of operations that usually takes 10-12 minutes to report the faulty host and then
can take 3-14 days, or even longer at times, to repair the host.
Migrate and restart the instance : After the host repair operation starts
(usually 10-12 minutes), Compute Engine attempts to reserve one more host to
replace your reported faulty host in your reserved capacity. If Compute Engine
finds a healthy host—if it successfully replaces the faulty host or otherwise
finds a matching healthy host in your reserved capacity—then Compute Engine
migrates the instance to that host. Then, restarting the instance happens through one of the
following:
If the instance is in the REPAIRING state and resources are available
before or when the repair completes, then Compute Engine automatically
restarts the instance on a healthy host.
Otherwise, if the instance is in the TERMINATED state or if resources
aren't available before or when the repair completes, then the instance state stays in or
changes to TERMINATED . You must
manually restart the instance
when you want it to run. However, restarting the instance might fail if resources aren't
available when you restart the instance; for example, this can happen if other instances are
already using the repaired host.
Monitor the operation progress
You can monitor the progress of GKE's operation using the
cloud.google.com/report-and-replace-status node label on your
GKE node, which has one of the following values:
PodsEvicted : GKE has finished evicting Pods from the
affected node.
OperationRUNNING : the operation to report the fault host is running.
OperationDone : the underlying host has been reported as faulty and the
GKE node is ready to be moved to a new host
Error : API call failed, for reasons including one of the
requirements described in the previous
section.
You can also view the cloud.google.com/report-and-replace-operation node label
to view the Compute Engine operation ID to monitor the status of the
operation .
You can view both these node labels using the following command:
kubectl get nodes NODE_NAME \
-L cloud.google.com/report-and-replace-status,cloud.google.com/report-and-replace-operation
In case of any API errors, GKE sets the node label
cloud.google.com/report-and-replace-status=ERROR . GKE clears
the node taints and remove the cloud.google.com/fault-behavior node label.
To learn how to track the detailed status of a report faulty host operation, see Review report faulty host operations .
To retry the operation for transient errors like rate limits, re-apply the cloud.google.com/fault-behavior label to the node.
What's next
Learn how to
schedule GKE workloads with Topology Aware Scheduling .
Learn how to
optimize cluster networking by using NCCL/gIB .
Learn how to
troubleshoot report faulty host API errors .
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
