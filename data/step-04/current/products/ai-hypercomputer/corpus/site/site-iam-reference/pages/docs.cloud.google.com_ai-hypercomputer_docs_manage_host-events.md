---
title: "Manage host events across compute instances \_|\_ AI Hypercomputer \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/manage/host-events
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/manage/host-events
  title: "Manage host events across compute instances \_|\_ AI Hypercomputer \_|\_\
    \ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Manage host events across compute instances | AI Hypercomputer | Google Cloud Documentation
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
Before you begin Required roles
Overview
Understand and handle host maintenance
Set up notification alerts for compute instances
Manage maintenance across compute instances View the maintenance state of compute instances
Manually start maintenance on compute instances
What's next
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Manage host events across compute instances
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin Required roles
Overview
Understand and handle host maintenance
Set up notification alerts for compute instances
Manage maintenance across compute instances View the maintenance state of compute instances
Manually start maintenance on compute instances
What's next
This document explains how to use the host maintenance features that are available
from the Cluster Director suite. It explains how to monitor, plan for,
and perform scheduled maintenance on Compute Engine instances.
To manage maintenance on your reserved blocks of capacity, whether or not compute instances
are running on them, see instead
Manage host events across reservations .
When you proactively manage upcoming
maintenance host events on
your instances, you can minimize disruptions and maintain optimal performance.
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
you need to manage host maintenance events across compute instances,
ask your administrator to grant you the
following IAM roles:
Compute Admin ( roles/compute.admin )
on the project
For read-only access to System Event audit logs:
Logs Viewer ( roles/logging.viewer )
on the project
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to manage host maintenance events across compute instances. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to manage host maintenance events across compute instances:
To view the details of an instance:
compute.instances.get
on the project
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Overview
To optimize the maintenance of your compute instances, complete the following steps:
Understand and handle host maintenance . Learn about the frequency and
maintenance behavior of your instances based on their machine series, and learn
how to prepare your workload to handle host maintenance. This information
helps you minimize disruptions and prevent data loss.
Set up notification alerts . Create log-based alerts to receive
notifications when maintenance for your instances is scheduled, started, or
completed. This approach helps you proactively plan your activities and
avoid unexpected downtime.
Manage maintenance across instances . View if maintenance is scheduled for your
instances. If needed, you can manually start maintenance across your instances. This
process helps you increase the resilience of your workloads to host events,
prevent downtime, and maximize the availability of your applications.
Understand and handle host maintenance
During the lifecycle of a
Compute Engine instance , the host machine that your instance runs on undergoes multiple
host events .
A host event can include the following:
Planned maintenance of Compute Engine infrastructure.
Unplanned, emergency maintenance to repair Compute Engine infrastructure after a host
error or a faulty host report.
The following table describes the host maintenance features for accelerator-optimized machine
types:
Machine type
Typical scheduled maintenance event frequency
Maintenance behavior
Advanced notification for scheduled maintenance
Advanced notifications for emergency maintenance
On-demand maintenance
Simulate maintenance
A4X Max and A4X
Minimum of 90 days
Terminates with
Local SSD data persistence
90 days
If you
enable emergency notifications , then 7 days. Otherwise, a few hours.
Yes
No
A4
Minimum of 90 days
Terminates with
Local SSD data persistence
90 days
If you
enable emergency notifications , then 7 days. Otherwise, a few hours.
Yes
No
A3 Ultra
Minimum of 90 days
Terminates with
Local SSD data persistence
90 days
If you
enable emergency notifications , then 7 days. Otherwise, a few hours.
Yes
No
A3 Mega and A3 High (8 GPUs)
Minimum of 90 days
Terminates with
Local SSD data persistence
90 days
If you
enable emergency notifications , then 7 days. Otherwise, a few hours.
Yes
Yes
The maintenance frequencies shown in the previous table are approximations, not guarantees.
Compute Engine might occasionally perform maintenance more frequently.
To help prevent losing data or progress, configure your workloads to
handle host maintenance. For example, use the following techniques to
save your temporary data and progress before your workload is stopped:
Migrate your temporary data off of Local SSD disks
Use training check points
Set up notification alerts for compute instances
You can get notified about scheduled, started, or completed maintenance events
for your instances by
creating log-based alerting policies .
To create an alert for the maintenance events of your instances, complete the
following procedure. Repeat this procedure for each alert
that you want to create.
In the Google Cloud console, go to the
segment
Logs Explorer page:
Go to Logs Explorer
If you use the search bar to find this page, then select the result whose subheading is
Logging .
Click the Show query toggle to the on position.
In the Query pane, build one of the following queries. These queries
filter log entries to identify specific maintenance events. If you want to
use multiple queries, repeat this procedure to create an unique alert for
each query.
To receive alerts when maintenance for an instance is scheduled:
protoPayload.methodName="compute.instances.upcomingMaintenance" severity>=DEFAULT
protoPayload.status.message =~ "scheduled"
To receive alerts when the maintenance window for an instance has opened:
protoPayload.methodName="compute.instances.upcomingMaintenance" severity>=DEFAULT
protoPayload.status.message =~ "ongoing"
To receive alerts when maintenance for an instance has started:
protoPayload.methodName="compute.instance.terminateOnHostMaintenance" severity>=DEFAULT
To receive alerts when maintenance for an instance has completed:
protoPayload.methodName="compute.instances.upcomingMaintenance" severity>=DEFAULT
protoPayload.status.message =~ "completed"
To validate the query, click Run query . If the query is valid, then the
Query results pane displays log entries that match the query.
In the Query results toolbar, click the Actions list, and then
select add_alert Create log alert .
The Create logs-based alert policy pane appears.
In the Alert details section, do the following:
In the Alert Policy Name field, enter a name for the policy.
In the Policy severity level list, select Warning (or a higher
severity).
Click Next .
In the Choose logs to include in the alert section, click Next .
In the Set notification frequency and autoclose duration section,
specify the following:
In the Time between notifications list, select how often you want to
be notified.
In the Incident autoclose duration list, select after how long
Cloud Logging stops sending notifications and automatically closes
the incident.
Click Next .
In the Who should be notified? section, specify a
notification channel for
Logging to send notifications to.
Click Save .
To view examples of maintenance event notifications in the Logs Explorer,
see
Examples of maintenance notifications
in the Compute Engine documentation.
Manage maintenance across compute instances
You can view and control maintenance for your instances by doing one or more of the
following:
To check the state and scheduled time of upcoming maintenance for your instances,
view the maintenance state of instances .
To immediately start maintenance on your instances, rather than waiting for their
scheduled maintenance time,
manually start maintenance on instances .
View the maintenance state of compute instances
You can view the state and scheduled time of upcoming maintenance for your instances
by checking the value of the upcomingMaintenance field in the instance's
metadata. If an instance doesn't contain the upcomingMaintenance field, then no host
maintenance event is scheduled for the instance. For more information about the fields
in upcomingMaintenance , see
Maintenance status definitions
in the Compute Engine documentation.
Additionally, if maintenance is scheduled for an instance, the
upcomingGroupMaintenance field contains the maintenanceReasons field. This
field describes why maintenance was scheduled for your instance, as described in the
following table:
Maintenance type
Maintenance reason
Compute instance state
Planned maintenance after faulty host report
FAILURE_GPU_CUSTOMER_REPORTED
Applies only to instances that are running on the host that you reported as
faulty.
Planned maintenance for regular maintenance
PLANNED_UPDATE : planned
infrastructure maintenance
PLANNED_NETWORK_UPDATE : planned
network maintenance
Applies to running, stopped, or suspended instances.
Unplanned, emergency maintenance
FAILURE_DISK : unplanned
maintenance scheduled due to an error with a disk attached to an instance.
FAILURE_GPU : unplanned maintenance
scheduled due to a GPU-related error.
FAILURE_GPU_TEMPERATURE : unplanned
maintenance scheduled due to a GPU-related error after the GPU
reached a high temperature.
FAILURE_GPU_XID : unplanned
maintenance after you received an
Xid message due to a GPU-related error.
FAILURE_INFRA : unplanned maintenance
scheduled due to an error with the infrastructure.
FAILURE_INTERFACE : unplanned
maintenance scheduled due to an error with the NIC.
FAILURE_MEMORY : unplanned
maintenance scheduled due to an error with an instance's memory.
FAILURE_NETWORK : unplanned
maintenance scheduled due to an error with the network.
FAILURE_NVLINK : unplanned
maintenance scheduled due to an error with the NVLink.
Applies only to running instances.
To view the maintenanceReasons field in an instance, you must use the
gcloud CLI or REST API. To view the maintenance state for
multiple compute instances simultaneously, you must use the Google Cloud console or REST
API. Otherwise, select one of the following options:
Console gcloud REST Metadata server
More
In the Google Cloud console, go to the VM instances page.
Go to VM instances
In the Maintenance status column, Compute Engine displays
the maintenance state of your instances. If you don't see this column in the
VM instances table, then click
view_column
Column display options , select the Maintenance status checkbox,
and then click OK .
To view the maintenance state of an instance, use the
gcloud compute instances describe command
with the --flatten=resourceStatus.upcomingMaintenance flag:
gcloud compute instances describe INSTANCE_NAME \
--flatten=resourceStatus.upcomingMaintenance \
--zone= ZONE
Replace the following:
INSTANCE_NAME : the instance name.
ZONE : the zone where the instance exists.
The output is similar to one of the following:
If a host maintenance event is scheduled for your instance, then the output is
similar to the following:
---
canReschedule: true
latestWindowStartTime: '2025-11-01T19:00:00Z'
maintenanceReasons:
- 'PLANNED_UPDATE'
- 'PLANNED_NETWORK_UPDATE'
maintenanceStatus: 'PENDING'
type: 'SCHEDULED'
windowEndTime: '2025-11-01T22:00:00Z'
windowStartTime: '2025-11-01T19:00:00Z'
If a host maintenance event isn't scheduled for your instance, then the output
is similar to the following:
---
null
To view the maintenance state of your instances, make one of the following GET
requests. When you make a request, you must include the fields query
parameter to only show the name, machine type, and upcoming maintenance for
an instance. You must also include the filter query parameter to only filter instances
by a specific machine type.
To view instances across all zones:
instances.aggregatedList method .
GET https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /aggregated/instances?fields=items.name,items.machineType,items.upcomingMaintenance&filter=machineType%3A MACHINE_TYPE
To view instances in a specific zone:
instances.list method .
GET https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /instances?fields=items.name,items.machineType,items.upcomingMaintenance&filter=machineType%3A MACHINE_TYPE
Replace the following:
PROJECT_ID : the ID of the project where you created
instances.
ZONE : the zone where the instances exist.
MACHINE_TYPE : the machine type that you want to
filter the instances by.
If a host maintenance event is scheduled for an instance, then the instance contains the
upcomingMaintenance field:
{
"items": [
{
"name": "vm-01",
"machineType": "https://www.googleapis.com/compute/v1/projects/example-project/zones/europe-west1-b/machineTypes/a3-ultragpu-8g",
"resourceStatus": {
"upcomingMaintenance": {
"canReschedule": true,
"latestWindowStartTime": "2024-11-01T19:00:00Z",
"maintenanceStatus": "PENDING",
"maintenanceReasons": [
"PLANNED_UPDATE",
"PLANNED_NETWORK_UPDATE"
],
"type": "SCHEDULED",
"windowEndTime": "2024-11-01T22:00:00Z",
"windowStartTime": "2024-11-01T19:00:00Z"
}
}
},
...
]
}
Optionally, to further narrow down a list of instances, set the filter query
parameter to a different
filter expression .
To view the maintenance state of an instance, do the following:
If you haven't already, then connect to your
Linux or
Windows instance .
To view the upcoming maintenance schedule, query the
upcoming-maintenance endpoint:
curl http://metadata.google.internal/computeMetadata/v1/instance/upcoming-maintenance?alt=json -H "Metadata-Flavor: Google"
If a host maintenance event is scheduled for your instance, then the output is
similar to the following:
"Upcoming maintenance": {
"can_reschedule": "true",
"latest_window_start_time": "2024-12-01T19:00:01Z",
"maintenance_reasons": [
"PLANNED_UPDATE",
"PLANNED_NETWORK_UPDATE"
],
"maintenance_status": "PENDING",
"type": "SCHEDULED",
"window_end_time": "2024-12-01T21:00:01Z",
"window_start_time": "2024-12-01T19:00:01Z"
}
If a host maintenance event isn't scheduled, then the output is similar
to the following:
{ }
To view the current maintenance state of a VM, query the maintenance-event endpoint:
curl http://metadata.google.internal/computeMetadata/v1/instance/maintenance-event -H "Metadata-Flavor: Google"
For more information about the output of these queries, see Review the
outputs .
Manually start maintenance on compute instances
You can manually start maintenance for your instances instead of waiting for the
scheduled time.
Depending on the maintenance state of an instance, the following occurs:
Maintenance state
Description
What you see
Scheduled
Compute Engine has scheduled maintenance for the instance. You can
manually start maintenance before the scheduled time.
In the Google Cloud console, the maintenance state shows as
Ready to run - will run on DATE .
In the gcloud CLI or REST API,
Compute Engine sets the maintenanceStatus field
to PENDING .
In progress
Maintenance is underway. You can't reschedule it.
In the Google Cloud console, the maintenance state shows as
Running .
In the gcloud CLI or REST API,
Compute Engine sets the maintenanceStatus field
to ONGOING .
Complete
Maintenance is finished. Compute Engine has removed all
maintenance notifications from the instance.
In the Google Cloud console, the maintenance state shows as
Up-to-date .
In the gcloud CLI or REST API,
Compute Engine sets the maintenanceStatus field
to COMPLETE .
You can manually start maintenance for multiple instances simultaneously or for
individual instances. For multiple instances, use the Google Cloud console or, for instances
located in the same zone, the gcloud CLI. For individual instances, select
any of the following options:
Console gcloud REST
More
In the Google Cloud console, go to the VM instances page.
Go to VM instances
Select the rows for the instances where you want to start maintenance.
Click add Run maintenance .
To confirm, click Run maintenance .
To manually start maintenance for one or more instances within the same zone, use
the
gcloud compute instances perform-maintenance command :
gcloud compute instances perform-maintenance INSTANCE_NAMES \
--zone= ZONE
Replace the following:
INSTANCE_NAMES : a list of instance names separated by spaces; for
example, vm-01 vm-02 vm-03 .
ZONE : the zone where the instances exist.
To manually start maintenance for an instance, make a POST request to the
instances.performMaintenance method :
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /instances/ INSTANCE_NAME /performMaintenance
Replace the following:
PROJECT_ID : the ID of the project where you created
the instance.
ZONE : the zone where the instance exists.
INSTANCE_NAME : the instance name.
What's next
To test your workload after a host event, see Benchmarking
recipes .
To learn more about monitoring VMs, see Monitor VMs and Slurm
clusters .
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
