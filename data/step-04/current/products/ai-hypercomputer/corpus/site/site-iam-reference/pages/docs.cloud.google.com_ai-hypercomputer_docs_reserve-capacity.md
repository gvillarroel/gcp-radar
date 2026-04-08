---
title: "Reserve capacity through your account team \_|\_ AI Hypercomputer \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/reserve-capacity
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/reserve-capacity
  title: "Reserve capacity through your account team \_|\_ AI Hypercomputer \_|\_\
    \ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Reserve capacity through your account team | AI Hypercomputer | Google Cloud Documentation
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
Limitations Limitations for future reservation requests
Limitations for auto-created reservations
Before you begin Required roles
Quota
Overview
Request capacity through your account team
Review and submit a draft reservation request
What's next
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Reserve capacity through your account team
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Limitations Limitations for future reservation requests
Limitations for auto-created reservations
Before you begin Required roles
Quota
Overview
Request capacity through your account team
Review and submit a draft reservation request
What's next
This document explains how to obtain capacity when you want to use the
future reservations in AI Hypercomputer consumption option.
To learn about all the capacity options in AI Hypercomputer, see
Capacity overview .
For a very high assurance that your workloads have the resources they need, request a future
reservation from Google. This action lets you reserve blocks of capacity for a defined duration,
starting on a specific date and time that you choose. Based on your request, Google creates a
draft future reservation request. After you review and submit this draft request, and Google Cloud
approves it, Compute Engine automatically creates ( auto-creates ) an empty reservation.
Then, at your chosen start time, Compute Engine provisions your requested capacity into
the auto-created reservation. You can then use the reservation to create
Compute Engine instances
until the reservation period ends.
Limitations
This section describes the limitations for future reservation requests, and for the auto-created
reservation for a request.
Limitations for future reservation requests
After Google creates a draft future reservation request for you, the following limitations
apply:
You can't modify the request details, including the share type.
After the request is submitted, approved, and its state changes to PROVISIONING ,
you can't cancel or delete it. You commit to pay for the requested capacity from the request's
start time, regardless of usage.
Limitations for auto-created reservations
After Compute Engine creates an on-demand reservation to fulfill your requested capacity,
the following limitations apply:
You can use or modify the reservation only after the request start time.
You can modify the reservation only as follows:
Enable or disable reservation usage in Vertex AI
Enable hardware emergency maintenance notifications
To modify other properties in a reservation, you must contact your account team.
You can't manually delete the reservation. If, when you reserve capacity, you specify that you
don't want to automatically delete the reservation at the end of its reservation period, then you
must contact your account team to delete the reservation.
Before you begin
If you haven't already, then
review the available VM and cluster configurations .
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
you need to create a future reservation request,
ask your administrator to grant you the
Compute Future Reservation User ( roles/compute.futureReservationUser )
IAM role on the project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains
the permissions required to create a future reservation request. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to create a future reservation request:
To allow Compute Engine to auto-create reservations:
compute.reservations.create
on the project
To create a future reservation request:
compute.futureReservations.create
on the project
To specify an instance template:
compute.instanceTemplates.useReadOnly
on the instance template
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Quota
As part of the future reservation request process, Google manages quota for your reserved
resources. You don't need to request quota. At the start time of your approved future reservation,
Google automatically increases your quota if your project doesn't have enough for the reserved
resources.
Overview
To reserve blocks of capacity, complete the following steps:
Request capacity through your account team . Contact your account team to specify the type
and number of resources that you want to reserve.
Review and submit a draft reservation request . After Google creates a draft future
reservation request, review it. If it looks correct, then submit the request for review.
Google Cloud immediately approves it.
Request capacity through your account team
Contact your account team and provide the following information for Google to create a draft
future reservation request:
Project number : the number of the project where your account team creates the request and
Compute Engine provisions the capacity.
Machine type : the machine type to reserve. You can specify one of the following:
A4X Max ( a4x-maxgpu-4g-metal )
A4X ( a4x-highgpu-4g )
A4 ( a4-highgpu-8g )
A3 Ultra ( a3-ultragpu-8g )
A3 Mega ( a3-megagpu-8g )
A3 High ( a3-highgpu-8g )
Zone : the zone where you want to reserve capacity.
To review the available regions and zones for a GPU machine type, see
Accelerator availability .
Total count : the total number of compute instances to reserve. You can only reserve
multiples of two compute instances. Block sizes and compute instance count per block vary based on
machine type and availability. Your account team can provide more details for your request.
Start time : the start time of the reservation period. You can start using the reserved
capacity at that time. Format the start time as a RFC 3339 timestamp as follows:
YYYY-MM-DD T HH:MM:SS OFFSET
Replace the following:
YYYY-MM-DD : a date formatted as a four-digit year, two-digit month,
and a two-digit day of the month, separated by hyphens ( - ).
HH:MM:SS : a time formatted as a two-digit hour by using a 24-hour
time, two-digit minutes, and two-digit seconds, separated by colons ( : ).
OFFSET : the time zone formatted as an offset of
Coordinated Universal Time
(UTC) . For example, to use the Pacific Standard Time (PST), specify -08:00 . To
use no offset, specify Z .
End time : the end time of the reservation period. Format it as an RFC 3339 timestamp. At
that time, Compute Engine does the following:
Compute Engine deletes the auto-created reservation.
Based on the
termination action that you specify for your
compute instances,
Compute Engine stops or deletes any
compute instances
that you created by using the auto-created reservation.
Reservation name : the name of the reservation that Compute Engine creates to
deliver your reserved capacity. Compute Engine can only create
specifically targeted reservations .
Reservation automatic deletion : whether you want Compute Engine to automatically
delete the auto-created reservation at the end of the reservation period. If you want to manually
delete the reservation, then you must contact your account team to delete the reservation.
Maintenance scheduling type : how Compute Engine schedules host maintenance for
the compute instances in your cluster. Specify
one of the following options:
To synchronize maintenance across all A4X Max, A4X, A4, or A3 Ultra instances in your reserved
blocks, use GROUPED .
To use different maintenance schedules for your A4 or A3 Ultra instances, use
INDEPENDENT .
Important: A3 Mega and A3 High instances support only standard Compute Engine host
maintenance. Maintenance is scheduled on an individual, per-instance basis rather than synchronized
across a cluster. Because GPU instances don't support live migration, Compute Engine stops
them to perform maintenance. Unless you specify otherwise, the instances automatically restart when
maintenance completes.
Reservation operational mode : whether you or Google Cloud manages the compute
instance recovery process after a host error or faulty host report. The mode that you use depends
on the machine type that you reserve:
All capacity mode ( ALL_CAPACITY ) . This mode is for A4X Max and A4X machine
types only. You must manually manage the maintenance and recovery process for a compute
instance. However, you have full access to all machines in your reservation, as well as more
granular control over your compute instance topology and maintenance.
Managed mode ( HIGHLY_AVAILABLE_CAPACITY ) . This mode is for A4, A3 Ultra,
A3 Mega, and A3 High machine types only. You let Google Cloud manage the maintenance and
recovery process for a compute instance by automatically replacing faulty machines. This
approach increases the availability of your compute instances and helps you quickly restart them
on new hosts. However, the topology of your compute instances might change after
Compute Engine replaces a machine.
Important: In the managed mode, calls to the report faulty host API may be rate-limited
per reservation.
Share type : whether only your project can use the auto-created
reservation ( LOCAL ), or other projects can use the reservation
( SPECIFIC_PROJECTS ). This property can't change after you submit
the request. To share reserved capacity with other projects in your
organization, do the following:
If you haven't already, then verify that the project where Google creates
the request is allowed
to create shared reservations .
Provide the numbers of the projects to share the reserved capacity with. You
can specify up to 100 projects in your organization.
Caution: When sharing this reservation, if you want your usage from the shared
projects to be eligible for resource-based committed use discounts (CUDs) from the current
project, then you must do the following:
You enable
CUD sharing on the current project's Cloud Billing account.
You share your reservation only with projects that are linked to the same
Cloud Billing account.
If you don't meet these conditions, then usage from those projects won't be eligible for
the shared CUDs and you might be charged the on-demand rates.
Commitment name : if your reservation period is one
year or longer, then you must purchase and attach a
resource-based commitment
to your reserved resources. For reservation periods from 1 year to under 3 years, the commitment
gives you the 1-year committed use discount (CUD) rate. For reservation periods from 3 years to
under 6 years, the commitment gives you the 3-year CUD rate.
If you share the reserved capacity with other projects, then those projects get discounts only
if they use the same Cloud Billing account as the project where you reserve capacity. For
details, see
Enable
CUD sharing for resource-based commitments .
The commitment has the same start and end dates as your reservation, but the activation times
might differ. If you specify the reservation start time as 12:00 AM US and Canadian Pacific Time,
then the commitment becomes active at 12:00 AM on your chosen start date. If you specify a
different start time, then the commitment becomes active at 12:00 AM on the following day of your
chosen start date.
Caution: To ensure that usage from your reservation is eligible for CUDs and to avoid
paying on-demand rates, wait until the commitment becomes active before you use your
reservation.
After Google creates the draft future reservation request, your account team contacts you.
Review and submit a draft reservation
request
After you provide the type and amount of resources to reserve to your account team, Google
creates a draft future reservation request. You can review the draft request and, if correct,
submit it for review. You must submit the request before the request start time.
Caution: When you submit a request, you confirm your commitment to reserve your requested
capacity. After Google Cloud approves the request, and the request state changes to
PROVISIONING , you can't cancel, modify, or delete the request. You commit to pay for
the requested capacity from the request's start time, whether you use the capacity or not.
To review and submit a draft future reservation request, select one of the following options:
Console gcloud REST
More
In the Google Cloud console, go to the Reservations page.
Go to Reservations
Click the Future reservations tab. The Future Reservations table lists each future
reservation request in your project, and each table column describes a property.
In the Name column, click the name of the draft request that Google created for you. A
page that gives the details of the future reservation request opens.
In the Basic information section, verify that the request details, such as Dates
and Share type , are correct. Also, if you requested a commitment, verify that it's
specified. If any of these details are incorrect, then contact your account team.
If everything looks accurate, then submit your request:
Click edit Edit draft . A page to modify the draft
request appears.
Click Create . The Reservation page appears. Google Cloud approves your
request within a few minutes, and then Compute Engine creates an empty reservation
with your requested resources.
To view a list of future reservation requests in your project, use the
gcloud compute future-reservations list command
with the --filter flag set to PROCUREMENT_STATUS=DRAFTING :
gcloud compute future-reservations list --filter=PROCUREMENT_STATUS=DRAFTING
In the command output, look for the reservation request that has the name that you provided to
your account team.
To view the details of the draft request, use the
gcloud compute future-reservations describe
command :
gcloud compute future-reservations describe FUTURE_RESERVATION_NAME \
--zone= ZONE
Replace the following:
FUTURE_RESERVATION_NAME : the name of the draft future reservation
request.
ZONE : the zone where Google created the request.
The output is similar to the following:
autoCreatedReservationsDeleteTime: '2026-02-10T19:20:00Z'
creationTimestamp: '2025-11-27T11:14:58.305-08:00'
deploymentType: DENSE
id: '7979651787097007552'
kind: compute#futureReservation
name: example-draft-request
planningStatus: DRAFT
reservationName: example-reservation
schedulingType: INDEPENDENT
selfLink: https://www.googleapis.com/compute/v1/projects/example-project/zones/europe-west1-b/futureReservations/example-draft-request
selfLinkWithId: https://www.googleapis.com/compute/v1/projects/example-project/zones/europe-west1-b/futureReservations/7979651787097007552
specificReservationRequired: true
specificSkuProperties:
instanceProperties:
guestAccelerators:
- acceleratorCount: 8
acceleratorType: nvidia-h200-141gb
localSsds:
- diskSizeGb: '375'
interface: NVME
...
machineType: a3-ultragpu-8g
totalCount: '2'
status:
autoCreatedReservations:
- https://www.googleapis.com/compute/v1/projects/example-project/zones/europe-west1-b/reservations/example-reservation
fulfilledCount: '2'
lockTime: '2026-01-27T19:15:00Z'
procurementStatus: DRAFTING
timeWindow:
endTime: '2026-02-10T19:20:00Z'
startTime: '2026-01-27T19:20:00Z'
zone: https://www.googleapis.com/compute/v1/projects/example-project/zones/europe-west1-b
In the command output, verify that the request details, such as the reservation period and share
type, are correct. Additionally, if you purchased a commitment, verify that it's specified. If the
details are incorrect, then contact your account team.
To submit the draft request for review, use the
gcloud compute future-reservations update
command with the --planning-status flag set to SUBMITTED :
gcloud compute future-reservations update FUTURE_RESERVATION_NAME \
--planning-status=SUBMITTED \
--zone= ZONE
Within a few minutes, Google Cloud approves your request, and then
Compute Engine creates an empty reservation with your requested resources.
To view a list of future reservation requests in your project, make a
GET request to the
futureReservations.list method .
In the request URL, include the filter query parameter and set it to
status.procurementStatus=DRAFTING :
GET https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /futureReservations?filter=status.procurementStatus=DRAFTING
Replace the following:
PROJECT_ID : the ID of the project where Google created the draft future
reservation request.
ZONE : the zone where request exists.
In the request output, look for the reservation request that has the name that you provided to
your account team.
To view the details of the draft request, make a GET request to the
beta futureReservations.get method :
GET https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /futureReservations/ FUTURE_RESERVATION_NAME
Replace FUTURE_RESERVATION_NAME with the name of the draft future
reservation request.
The output is similar to the following:
{
"specificSkuProperties": {
"instanceProperties": {
"machineType": "a3-ultragpu-8g",
"guestAccelerators": [
{
"acceleratorType": "nvidia-h200-141gb",
"acceleratorCount": 8
}
],
"localSsds": [
{
"diskSizeGb": "375",
"interface": "NVME"
},
...
]
},
"totalCount": "2"
},
"kind": "compute#futureReservation",
"id": "7979651787097007552",
"creationTimestamp": "2025-11-27T11:14:58.305-08:00",
"selfLink": "https://www.googleapis.com/compute/v1/projects/example-project/zones/europe-west1-b/futureReservations/example-draft-request",
"selfLinkWithId": "https://www.googleapis.com/compute/v1/projects/example-project/zones/europe-west1-b/futureReservations/7979651787097007552",
"zone": "https://www.googleapis.com/compute/v1/projects/example-project/zones/europe-west1-b",
"name": "example-draft-request",
"timeWindow": {
"startTime": "2026-01-27T19:20:00Z",
"endTime": "2026-02-10T19:20:00Z"
},
"status": {
"procurementStatus": "DRAFTING",
"lockTime": "2026-01-27T19:15:00Z"
},
"planningStatus": "DRAFT",
"specificReservationRequired": true,
"reservationName": "example-reservation",
"deploymentType": "DENSE",
"schedulingType": "INDEPENDENT",
"autoCreatedReservationsDeleteTime": "2026-02-10T19:20:00Z"
}
In the output, verify that the request details, such as the reservation period and share type,
are correct. Additionally, if you requested a commitment, verify that it's specified. If the
details are incorrect, then contact your account team.
To submit the draft request for review, make a PATCH request to the
beta futureReservations.update method .
In the request URL, include the updateMask query parameter and set it to
planningStatus :
PATCH https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /futureReservations/ FUTURE_RESERVATION_NAME ?updateMask=planningStatus
{
"name": " FUTURE_RESERVATION_NAME ",
"planningStatus": "SUBMITTED"
}
Within a few minutes, Google Cloud approves your request, and then Compute Engine
creates an empty reservation with your requested resources.
What's next
View reserved capacity
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
