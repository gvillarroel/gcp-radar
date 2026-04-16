---
title: "Choose a consumption option \_|\_ AI Hypercomputer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/consumption-models
knowledge_key: corpus
source_id: site-docs-root-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/choose-strategy
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/consumption-models
  title: "Choose a consumption option \_|\_ AI Hypercomputer \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
AI Hypercomputer
Guides
Send feedback
Choose a consumption option
Stay organized with collections
Save and categorize content based on your preferences.
This document explains the different ways, called consumption options , to get
and use compute resources on AI Hypercomputer. Choose the option that best fits
your workload, its duration, and your cost needs.
Each consumption option specifies the following:
How you access capacity to create VMs or clusters.
The underlying
provisioning model ,
which determines the obtainability, lifespan, and pricing of your VMs.
Comparison of consumption options
The following table summarizes the key differences between the consumption
options:
Consumption option
Future reservations in AI Hypercomputer
Future reservations for up to 90 days (in calendar mode)
Flex-start
Spot
Supported machines
A4X Max, A4X, A4, A3 Ultra, A3 Mega, or A3 High
A4, A3 Ultra, A3 Mega, or A3 High with 8 GPUs
Any GPU machine
except A4X Max and A4X
Any GPU machine
except A4X Max and A4X
Lifespan
Unlimited
Up to 90 days
Up to 7 days
Unlimited (but subject to preemption )
Preemptible
Capacity assurance
Very high . If Google Cloud approves your reservation request, then
you have very high assurance that Compute Engine provisions your requested capacity.
Very high . If Google Cloud approves your reservation request, then
you have very high assurance that Compute Engine provisions your requested capacity.
Best-effort . Compute Engine makes a best-effort attempt to
schedule the provisioning of your requested capacity.
Best-effort . Compute Engine makes a best-effort attempt to
provision your requested capacity.
Quota
Google Cloud automatically increases quota before
capacity is delivered.
No quota is consumed.
Consumes preemptible quota .
Consumes preemptible quota .
Pricing
Discounted (up to 53%). See
pricing for
accelerator-optimized VMs . If you reserve resources for a year or longer, then you
must purchase and attach a
resource-based commitment
to your reserved resources.
You're charged for the reservation period. See
reservations billing .
Discounted (up to 53%). See Dynamic Workload Scheduler
pricing .
You're charged for the reservation period. See
reservations billing .
Discounted (up to 53%). See Dynamic Workload Scheduler
pricing .
You pay as you go (PAYG).
Deeply discounted (up to 91%). See Spot VMs
pricing and pricing
for accelerator-optimized VMs .
You pay as you go (PAYG).
Resource allocation
Dense
Dense
For MIG resize requests :
Dense
For standalone Flex-start VMs : Standard
(
Compact policy optional)
Standard
( Compact
policy optional)
Provisioning model
Reservation-bound
Reservation-bound
Flex-start
Spot
Creation method
To create VMs, you must do the following:
Reserve capacity by contacting your
account team .
At your chosen date and time, you can use the reserved capacity to create VMs and
clusters by using any of the methods described in the
Deployment options overview .
To create VMs, you must do the following:
Create a
future reservation in calendar mode .
At your chosen date and time, you can use the reserved capacity to create VMs and
clusters by using any of the methods described in the
Deployments options overview .
When you request to create Flex-start VMs, Compute Engine
schedules VM creation based on availability. When capacity becomes available,
Compute Engine provisions the Flex-start VMs. To create
Flex-start VMs, use any of the methods described in the
Deployment options overview .
You can immediately create VMs by using any of the methods described in the
Deployment options overview .
Choose a consumption option
Use the following flowchart to choose the consumption option that best fits your
workload:
The questions in the preceding diagram are the following:
Do you need capacity for more than 90 days?
Yes : See
Use future reservations in AI Hypercomputer .
No : Go to question 2.
Do you want reserved capacity?
Yes : See Use future reservations in calendar mode .
No : Go to question 3.
Is your workload fault-tolerant?
No : See Use Flex-start .
Yes : See Use Spot .
Use future reservations in AI Hypercomputer
To run long-running, large-scale distributed workloads that require densely allocated resources,
you can request compute resources for a specific time in the future. You have exclusive access to
your reserved resources for that period of time, and you can use the resources to create VMs or
clusters. At the end of the reservation period, Compute Engine does the following:
Compute Engine deletes the reservation.
Based on the
termination action
that you specify for the VMs, Compute Engine stops or deletes any VMs that use the
reservation.
Ideal workloads for future reservations in AI Hypercomputer
Future reservations are ideal for the following workloads:
Pre-training foundation models
Multi-host foundation model inference
Key characteristics of future reservations in
AI Hypercomputer
Future reservations have the following characteristics:
You can reserve A4X Max, A4X, A4, A3 Ultra, A3 Mega, or A3 High (8 GPUs) machine types.
Machines are densely allocated to minimize network latency.
You can reserve any number of VMs for any duration starting at a future date. Use the
reserved resources to create and run VMs until the end of the reservation period. If you
reserve resources for one year or longer, then you must purchase and attach a
resource-based commitment .
After the reservation period starts, you can modify the auto-created reservations as follows:
Enable or disable hardware emergency maintenance notifications
Enable or
disable Vertex AI jobs usage
You use the reservation-bound provisioning model, which has the following benefits:
You have a higher chance of obtaining GPUs.
In addition to the commitment attached to your VMs, you get a discount up to 53% for
vCPUs and GPUs.
How to use future reservations in AI Hypercomputer
To use future reservations to create VMs or clusters, you must complete the following steps:
Request to reserve capacity . You contact your account team and specify the
resources to reserve. Based on availability, Google creates a draft reservation request for
you. If it looks correct, then you can submit it. Google Cloud immediately approves the
reservation request.
For instructions, see
Reserve capacity .
Consume reserved resources . At the start of your chosen reservation period,
you can use the reservation to create VMs or clusters.
For the different methods to create VMs or clusters, see
Deployment options overview .
Use future reservations in calendar mode
To run short-running distributed workloads that require densely allocated resources, you can
request compute resources for up to 90 days. You have exclusive access to your reserved resources
for that time, and you can use the resources to create VMs or clusters. At the end of the
reservation period, Compute Engine does the following:
Compute Engine deletes the reservation.
Based on the
termination action
that you specify for the VMs, Compute Engine stops or deletes any VMs that use the
reservation.
Ideal workloads for future reservations in calendar mode
Future reservations in calendar mode are ideal for the following workloads:
Model pre-training
Model fine-tuning
Simulations
Inference
Key characteristics of future reservations in calendar mode
Future reservations in calendar mode have the following characteristics:
You can reserve A4, A3 Ultra, A3 Mega, or A3 High (8 GPUs) machine types. These machines
are densely allocated to minimize network latency.
You can view future availability and reserve up to 80 VMs for up to 90 days. Then, you can
use the reserved resources to create VMs until the end of the reservation period.
After the reservation period starts, you can modify the auto-created reservations as follows:
Enable or disable hardware emergency maintenance notifications
Enable or
disable Vertex AI jobs usage
You use the reservation-bound provisioning model, which has the following benefits:
You have a higher chance of obtaining GPUs.
You get a discount up to 53% for vCPUs and GPUs.
How to use future reservations in calendar mode
To use future reservations in calendar mode to create VMs or clusters, you must complete the
following steps:
View resources availability . You can view the future availability of the
resources that you want to reserve. When you create a reservation request, you can specify the
number, type, and reservation duration for the resources that you confirmed as available. This
action increases the chances that Google Cloud approves your request.
For instructions, see
View resource future availability .
Reserve capacity . You create a reservation request for a future date and
time. Google Cloud approves the reservation request within two minutes. If approved,
then Compute Engine reserves the capacity. At your chosen delivery date, you can use the
reserved resources to create VMs or clusters.
For instructions, see
Create a reservation request for GPU VMs or TPUs .
Consume reserved resources . At the start of your chosen reservation period,
you can use the reservation to create VMs or clusters.
For the different methods to create VMs or clusters, see the following:
To create A4, A3 Ultra, A3 Mega, or A3 High (8 GPUs) VMs, see
Deployment options overview .
To create A3 Mega or A3 High (8 GPUs) VMs with GPUDirect-TCPX enabled, see
Create an A3 VM with GPUDirect-TCPX enabled .
Use Flex-start
To run short-duration workloads that require densely allocated resources, you can request compute
resources for up to seven days by using Flex-start. Whenever resources are available,
Compute Engine creates your requested number of VMs. You can stop standalone
Flex-start VMs, but you can't stop Flex-start VMs that a managed instance
group (MIG) creates through resize requests. The Flex-start VMs exist until you
delete them, or until Compute Engine deletes the VMs at the end of their run duration.
Ideal workloads for Flex-start
Flex-start is ideal for workloads that can start at any time, such as the following:
Small model pre-training
Model fine-tuning
Simulations
Batch inference
Key characteristics of Flex-start
Flex-start has the following characteristics:
You can request any GPU machine type, except A4X Max and A4X. Resource allocation varies
based on the creation method:
For standalone Flex-start VMs, machines use standard placement. This
placement allocates machines based on availability, which may result in VMs being far
apart within the same zone. To minimize network latency by placing
Flex-start VMs closer to each other, you can optionally apply a
compact placement policy to the VMs .
For all other creation methods, machines are densely allocated to minimize network
latency.
You use the flex-start provisioning model, which has the following benefits:
You have a higher chance of obtaining GPUs.
You get a discount up to 53% for vCPUs, memory, and GPUs.
How to use Flex-start
To use Flex-start to create VMs or clusters, you must complete the following steps:
Optional: Create a compact placement policy . If you want to create
standalone Flex-start VMs, then you can create a compact placement policy to
specify VM proximity. Your chosen minimum distance affects the machine types and the number of
VMs that the policy supports.
Create Flex-start VMs . After you request to create VMs,
Compute Engine schedules VM creation based on availability. When capacity becomes
available, Compute Engine provisions the Flex-start VMs. VMs run until
you stop or delete them, or until they reach the end of their run duration.
For instructions, see Deployment options
overview .
Use Spot
To run fault-tolerant workloads, you can obtain compute resources immediately based on
availability. You get resources at the lowest price possible. However, Compute Engine can
preempt VMs at any time to reclaim capacity.
Ideal workloads for Spot
Spot is ideal for workloads where interruptions are acceptable, such as the following:
Batch processing
High performance computing (HPC)
Continuous integration and continuous deployment (CI/CD)
Data analytics
Media encoding
Online inference
Key characteristics of Spot
Spot has the following characteristics:
You can create any GPU machine type, except A4X Max and A4X. Dense allocation depends on
resource availability. To help ensure a closer allocation, you can apply a
compact placement policy
to the VMs.
You can immediately create VMs. The VMs run until you stop or delete them, or until
Compute Engine preempts the VMs to reclaim capacity.
You use the spot provisioning model, which has the following benefits:
You have a higher chance of obtaining GPUs.
You get a discount of up to 91% off for many machine types, GPUs, TPUs, and Local
SSD disks.
How to use Spot
To use Spot to create VMs or clusters, you must complete the following steps:
Optional: Create a compact placement policy . You create a compact placement
policy to specify VM proximity. Your chosen minimum distance affects the machine types and
the number of VMs that the policy supports.
Create Spot VMs . You can create as many VMs as you like, based on
availability. The VMs run until you stop or delete them, or until Compute Engine
preempts the VMs to reclaim capacity.
For instructions, see Deployment options
overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
