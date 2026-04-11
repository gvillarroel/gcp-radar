---
title: "Best practices for static compute nodes \_|\_ Cluster Toolkit \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/cluster-toolkit/docs/slurm/static-nodes-best-practices
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-cluster-overview
source_metadata:
  url: https://docs.cloud.google.com/cluster-toolkit/docs/slurm/static-nodes-best-practices
  title: "Best practices for static compute nodes \_|\_ Cluster Toolkit \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Cluster Toolkit
Guides
Send feedback
Best practices for static compute nodes
Stay organized with collections
Save and categorize content based on your preferences.
To achieve optimal usability and performance for high performance computing
(HPC) and artificial intelligence (AI) workloads, use the best practices in this
document to configure your static compute nodes. These practices help you
achieve better resource availability and reduced network latency for the virtual
machine (VM) instances that you create. For more information about static
compute nodes, see About node types .
Reservations
Use reservations to help
ensure that Compute Engine resources are available. Reservations
help you obtain capacity for
Compute Engine zonal resources.
For static clusters, use reservations. A reservation is an effective method to
obtain resources for these clusters because it helps ensure that
Compute Engine resources are available when you need them. You must create
your reservation manually before you deploy your cluster. Note that after you
create a reservation,
Google Cloud bills you for the compute resources as if the VMs are running,
even if they haven't yet been created or used. You can monitor the consumption
trends of your reservations to reduce unnecessary costs from wasted or unused
resources. For more information, see Monitor reservations
consumption .
Compact placement policies
Use a compact placement policy to place your static compute nodes physically
closer to each other, which reduces network latency between nodes.
Unlike autoscaling nodes, which might create a new compact placement policy for
each job, the placement of static compute nodes is based on the nodeset
lifecycle, not the job lifecycle.
However, the topology of static compute nodes might change when you restart,
recreate, or migrate nodes. These topology changes can happen because of
explicit actions, such as when you update
images , or
during maintenance
events .
Configure the static compute nodes with a reservation and a compact placement policy
Create the placement policy before you create the reservation. When you create
the reservation, specify the placement policy. If you provide Slurm with a
reservation that includes a placement policy, then Slurm automatically uses the
placement policy that is attached to the reservation.
To configure static compute nodes to use a compact placement policy and
reservation, complete the following steps by using the Google Cloud CLI:
Create a compact placement policy by using the
gcloud compute resource-policies create group-placement command with the --collocation=COLLOCATED flag.
gcloud compute resource-policies create group-placement PLACEMENT_POLICY_NAME \
--collocation=COLLOCATED \
--project= PROJECT_ID \
--region= REGION
Create a reservation for a set of VM instances by using the gcloud compute reservations create command and specify the compact placement policy that you created in step 1.
gcloud compute reservations create RESERVATION_NAME \
--vm-count= VM_COUNT \
--machine-type= MACHINE_TYPE \
--require-specific-reservation \
--project= PROJECT_ID \
--zone= ZONE \
--resource-policies=compact-placement= PLACEMENT_POLICY_NAME
Update the cluster blueprint to use the reservation for your static compute
nodes before you deploy the
cluster . Set the
enable_placement flag to false . Setting the enable_placement flag
indicates that the placement comes from a reservation, and Slurm does not
create the placement policy.
‐ id: static_nodeset
source: community/modules/compute/schedmd-slurm-gcp-v6-nodeset
use: [network]
settings:
node_count_static: VM_COUNT
node_count_dynamic_max: 0
enable_placement: false
reservation_name: RESERVATION_NAME
machine_type: MACHINE_TYPE
‐ id: static_partition
source: community/modules/compute/schedmd-slurm-gcp-v6-partition
use: [static_nodeset]
settings:
partition_name: static
exclusive: false
Replace the following:
RESERVATION_NAME : Your reservation's name.
VM_COUNT : The number of VMs in the reservation.
MACHINE_TYPE : A machine type from the
compute-optimized
or accelerator-optimized
machine family.
PLACEMENT_POLICY_NAME : Your placement policy's name.
PROJECT_ID : Your project ID.
REGION : The region where your VMs are located.
ZONE : The zone where your VMs are located.
Summary of best practices
This table summarizes the recommended best practices for clusters that
use static compute nodes.
Requirement
Recommendation
VM availability
Use a reservation
Reduce network latency
Use compact placement policy
What's next
Learn how to manage static compute nodes .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
