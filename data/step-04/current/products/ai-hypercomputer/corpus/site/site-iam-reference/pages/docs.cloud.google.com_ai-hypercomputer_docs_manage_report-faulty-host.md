---
title: "Report faulty host \_|\_ AI Hypercomputer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/manage/report-faulty-host
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/manage/report-faulty-host
  title: "Report faulty host \_|\_ AI Hypercomputer \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Report faulty host | AI Hypercomputer | Google Cloud Documentation
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
Limitations
Before you begin Required roles
Understand the faulty host report process
Report a faulty host
Review report faulty host operations
What's next?
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Report faulty host
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Limitations
Before you begin Required roles
Understand the faulty host report process
Report a faulty host
Review report faulty host operations
What's next?
If you notice an issue on an A4X Max, A4X, A4, A3 Ultra, A3 Mega, and A3 High (8 GPUs) instance that you
can't resolve on your own, then you can report its host as faulty. An example
of such an issue could be slower performance within a cluster, or consistently
high GPU temperatures.
When you report a host as faulty, Compute Engine automatically repairs the
compute instance by running host maintenance.
For A4 and A3 Ultra instances, Compute Engine attempts to migrate the
instance to a different host when maintenance starts, if you have unused
reserved capacity or capacity is available in the instance's zone. Reporting
a host as faulty helps you minimize downtime for your workload.
For A3 Mega and A3 High instances, Compute Engine stops the instance,
performs the necessary host repairs, and then restarts the instance on the
same host.
This document explains how to report and repair faulty host instances that are
part of a Slurm cluster or other compute instance-based clusters. To report
faulty hosts in a Google Kubernetes Engine (GKE) cluster, see
Report faulty hosts through GKE .
Caution : Reporting a faulty host is a disruptive action that stops your VM.
Before you report a host, thoroughly investigate your environment by using tools like the
cluster health scanner (CHS) to
identify the root cause of the issue. Only report the host as faulty if you have no alternatives
to resolve your issue.
Limitations
When you report a faulty host, the following limitations apply:
You can only report a faulty host if the compute instance that runs on the
host meets all of the following conditions:
The compute instance is running.
The compute instance uses an A4X Max, A4X, A4, A3 Ultra, A3 Mega, and A3 High (8 GPUs) machine type.
The compute instance uses the
reservation-bound provisioning model .
Note: If a running A4X Max, A4X, A4, A3 Ultra, A3 Mega, and A3 High (8 GPUs) instance uses a different
provisioning model, but you still want to report its host as faulty,
then contact your account team.
If you delete a compute instance while the reportHostAsFaulty operation is
in progress, then the reportHostAsFaulty operation fails.
Google Cloud makes best-effort attempts to fulfill all your report faulty
host requests. However, due to capacity constraints or rate limits, a
request might not always be fulfilled.
Before you begin
Select the tab for how you plan to use the samples on this page:
Console gcloud REST
More
When you use the Google Cloud console to access Google Cloud services and
APIs, you don't need to set up authentication.
In one of the following development environments, set up the gcloud CLI:
Cloud Shell : to use an online terminal with the gcloud CLI
already set up, activate Cloud Shell.
Activate Cloud Shell on this page
At the bottom of this page, a Cloud Shell session starts and displays a
command-line prompt. It can take a few seconds for the session to initialize.
Local shell : to use a local development environment,
install and
initialize the gcloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To use the REST API samples on this page in a local development environment, you use the
credentials you provide to the gcloud CLI.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
For more information, see
Authenticate for using REST
in the Google Cloud authentication documentation.
Required roles
To get the permissions that
you need to report a faulty host,
ask your administrator to grant you the
following IAM roles:
Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 )
on the compute instance or the project
To view the state of a faulty host report operation by using Cloud Logging:
Logs Viewer ( roles/logging.viewer )
on the project
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to report a faulty host. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to report a faulty host:
To create a faulty host report:
compute.instances.update
on the compute instance
To view a list of operations by using Logging:
logging.operations.list
on the project
To view the details of an operation by using Logging:
logging.operations.get
on the project
To view a list of operations in Compute Engine:
compute.zoneOperations.list
on the project
To view the details of an operation in Compute Engine:
compute.zoneOperations.describe
on the project
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Understand the faulty host report process
After you report a faulty host for a compute instance, the time when the compute instance restarts
varies based on the
reservation operational mode that is specified in the reservation that the compute instance uses.
To verify the reservation operational mode for a reservation,
view the
reservationOperationalMode field in the reservation .
The following table summarizes the faulty host process for the two available reservation operational
modes: all capacity mode and managed mode .
All capacity mode ( ALL_ CAPACITY )
Managed mode ( HIGHLY_ AVAILABLE_ CAPACITY )
Supported machine types
A4X Max and A4X
A4, A3 Ultra, A3 Mega, and A3 High
Faulty host report API rate limiting
No rate limits apply.
Calls to the API may be rate-limited.
Faulty host report process
When you report a faulty host for a compute instance that runs in the all capacity mode, the
following occurs:
Report the faulty host : The instance remains in the RUNNING state
throughout the report faulty host operation, which usually takes 10-12 minutes to
complete. To review the operation state, see
Review report faulty host operations in this document.
Repair the host : After the report faulty host operation completes, the host
repair operation starts
within a minute.
When the repair host operation starts, the instance stops and its state changes depending
on the automatic restart
( automaticRestart ) setting that is specified for the instance:
If automatic restart is enabled for the instance, the instance state changes to
REPAIRING . The instance automatically restarts when its host is
healthy unless you stop the instance before then.
If automatic restart is disabled for the instance, the instance state changes to
TERMINATED . You need to manually restart the instance after its host
is healthy.
Repairing the faulty host can take 3-14 days, or even longer at
times.
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
When you report a faulty host for a compute instance that runs in the managed mode, the
following occurs:
Report the faulty host : The instance remains in the RUNNING state throughout
the report faulty host
operation, which usually takes 10-12 minutes to complete. To review the operation
state, see
Review report faulty host operations in this document.
Start repairing the host : After the report faulty host operation completes,
the host repair operation starts within a minute.
When the repair host operation starts, the instance stops and its state changes depending
on the automatic restart
( automaticRestart ) setting that is specified for the instance:
If automatic restart is enabled for the instance, the instance state changes to
REPAIRING . The instance automatically restarts when its host is
healthy unless you stop the instance before then.
If automatic restart is disabled for the instance, the instance state changes to
TERMINATED . You need to manually restart the instance after its host
is healthy.
Repairing the faulty host can take 3-14 days, or even longer at times.
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
Report a faulty host
To report a faulty host, complete the following steps:
Review the host on which your compute instance runs .
For instructions, see
View topology of a compute instance .
Optional: Back up Local SSD data . When the instance stops,
Compute Engine automatically discards the data of any Local SSD
disks that are attached to the instance. You can't recover Local SSD data
after Compute Engine discards it.
For instructions on how to preserve Local SSD data, see
Local SSD data backup .
Report the faulty host . To report a faulty host, select one of the
following options. The host repair operation starts immediately, within a
minute after the report faulty host operation completes. If the instance
becomes unresponsive after you start the faulty host report operation, then,
after you wait for at least 15 minutes, we recommend that you restart the
compute instance.
Important: After you report a host as faulty, don't send additional requests
until the operation completes . Compute Engine
rejects additional requests while the operation is in progress.
gcloud REST
More
To report a faulty host, use the following
gcloud compute instances report-host-as-faulty command :
gcloud compute instances report-host-as-faulty INSTANCE_NAME \
--async \
--disruption-schedule=IMMEDIATE \
--fault-reasons=behavior= FAULT_REASON ,description= DESCRIPTION \
--zone= ZONE
Replace the following:
INSTANCE_NAME : the name of the compute instance.
FAULT_REASON : a list of host issues that your
compute instance encountered, separated by commas—for example,
ISSUE_1,ISSUE_2 . You can specify the following values:
PERFORMANCE : that GPUs that are attached to the compute
instance have performance issues compared to other GPUs in the
cluster, you see no XID errors in the logs, and the
Compute Engine detects no other usual failure patterns,
such as silent data corruption.
SILENT_DATA_CORRUPTION : you see data corruption in your
compute instance, but the compute instance keeps running. Silent
data corruption can be due to issues like vCPUs defects,
software bugs, or kernel issues.
UNRECOVERABLE_GPU_ERROR : you identified an unrecoverable
GPU error with an XID.
BEHAVIOR_UNSPECIFIED : you aren't sure about what the issue
to your compute instance is.
DESCRIPTION : a description of the issue that is
affecting your compute instance, such as XID information or
suspected performance problems.
ZONE : the zone where the compute instance exists.
To report a faulty host, make the following POST request to the
instances.reportHostAsFaulty method .
When you report a faulty host, you can specify multiple fault reasons
at once. For example, to specify two fault reasons, make a request as
follows:
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /instances/ INSTANCE_NAME /reportHostAsFaulty
{
"disruptionSchedule": "IMMEDIATE",
"faultReasons": [
{
"behavior": " FAULT_REASON_1 ",
"description": " DESCRIPTION_1 "
},
{
"behavior": " FAULT_REASON_2 ",
"description": " DESCRIPTION_2 "
}
]
}
Replace the following:
PROJECT_ID : the ID of the project where the
compute instance exists.
ZONE : the zone where the compute instance exists.
INSTANCE_NAME : the name of the compute instance.
FAULT_REASON_1 and
FAULT_REASON_2 : each host issue that your compute
instance encountered. You can specify the following values:
PERFORMANCE : that GPUs that are attached to the compute
instance have performance issues compared to other GPUs in the
cluster, you see no XID errors in the logs, and the
Compute Engine detects no other usual failure patterns,
such as silent data corruption.
SILENT_DATA_CORRUPTION : you see data corruption in your
compute instance, but the compute instance keeps running. Silent
data corruption can be due to issues like vCPUs defects,
software bugs, or kernel issues.
UNRECOVERABLE_GPU_ERROR : you identified an unrecoverable
GPU error with an XID.
BEHAVIOR_UNSPECIFIED : you aren't sure about what the issue
to your compute instance is.
DESCRIPTION_1 and
DESCRIPTION_2 : a description for each host issue
that you specified, such as XID information or suspected performance
problems.
Review report faulty host operations
After you report a faulty host, Compute Engine starts a series of
operations to mark the host as faulty and prepares the host for repair.
Specifically, during a report faulty host operation, the following process
happens:
Mark the host as faulty . Compute Engine creates the report
faulty host operation. The report faulty host operation then
creates a sequence of sub-operations. These sub-operations mark the
underlying host as faulty.
Prepare the host for repairs . After all sub-operations complete, the
report faulty host operation starts. Compute Engine stops the
compute instance and starts the repair faulty host operation. Based on the
reservation operational mode that is specified in the
reservation that the compute instance uses, and if healthy hosts are
available, Compute Engine either keeps the compute instance stopped
or attempts to automatically migrate and restart the compute instance.
Report completion and repair the host . Compute Engine completes
the report faulty host operation, and the host repair operation runs.
To track the status of the report faulty host
( compute.instances.reportHostAsFaulty ) operations in your project, select one
of the following options. For more information about other operations that you
can use to track repairs, migration, and automatic restart, see
Maintenance and restart behaviors
and
Monitor and plan for a host maintenance event
in the Compute Engine documentation.
Console (Instance operations) Console (Compute instance logs) gcloud REST
More
In the Google Cloud console, go to the Operations page.
Go to Operations
In the table that appears, locate the compute instance that you
reported.
In the row that contains the compute instance, in the Status column,
you can see the status of the report faulty host operation. When the
operation completes, the value is Done .
Optional: To verify if Compute Engine has restarted the compute
instance,
view the details of the instance .
In the Google Cloud console, go to the Logs Explorer page.
Go to Logs Explorer
Verify that the Show query toggle is set to the on position.
In the query editor, enter the following query:
resource.type="gce_instance" AND protoPayload.methodName=~"compute\.instances\.reportHostAsFaulty"
Click Run query . The Query results pane displays the query
results.
To view the status of the report faulty host operations in your project,
use the
gcloud compute operations list command
with the --filter flag set to operationType:reportHostAsFaulty :
gcloud compute operations list --filter="operationType:reportHostAsFaulty"
If you want to view the details of a specific faulty host operation,
then use the
gcloud compute operations describe command :
gcloud compute operations describe OPERATION_NAME \
--zone=" ZONE "
Replace the following:
OPERATION_NAME : the name of the operation.
ZONE : the zone where the operation exists.
To view the status of the report faulty host operations in your project,
make a GET request to the
zoneOperations.list method .
In the request URL, include the filter query parameter set to
items.operationType:reportHostAsFaulty .
GET https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /operations&filter=items.operationType:reportHostAsFaulty
Replace the following:
PROJECT_ID : the name of the operation.
ZONE : the zone where the operations exist.
What's next?
If you encounter issues when reporting a faulty host, then see
Troubleshoot faulty host API .
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
