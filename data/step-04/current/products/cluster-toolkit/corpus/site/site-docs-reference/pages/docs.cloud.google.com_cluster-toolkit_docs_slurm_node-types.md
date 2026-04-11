---
title: "About node types \_|\_ Cluster Toolkit \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/cluster-toolkit/docs/slurm/node-types
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-cluster-overview
source_metadata:
  url: https://docs.cloud.google.com/cluster-toolkit/docs/slurm/node-types
  title: "About node types \_|\_ Cluster Toolkit \_|\_ Google Cloud Documentation"
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
About node types
Stay organized with collections
Save and categorize content based on your preferences.
This document describes the different compute node types that are available for
a cluster that is running Slurm on Google Cloud.
Overview
In a cluster running Slurm, the following compute node types are available:
Autoscaling compute nodes : these use ephemeral virtual machines
(VMs) that are created and deleted by the Slurm controller based on demand.
To select autoscaling compute nodes, you would use the
node_count_dynamic_max
setting.
Static compute nodes : these use a fixed set of nodes that are created at
the time of cluster creation and are generally in an active state while the
cluster is running.
Static compute nodes more closely resemble an on-premise setup where
resources are fixed. To select static compute nodes, you would use the
node_count_static
setting.
In practice a cluster can have both static and autoscaling compute nodes.
For most use cases, autoscaling compute nodes are a good default selection.
Using autoscaling is ideal for running HPC workloads in the cloud, where you
only need to pay for the resources while they are in use, as your workloads
might grow and shrink over time.
However, in some scenarios the use of static compute nodes might prove more
beneficial. For example, when building a GPU cluster, static compute nodes are
often a preferred choice to avoid the impacts of limited resource availability
and longer startup time.
When to use static compute nodes
While autoscaling compute nodes is a good default selection for most use cases,
if you are concerned about any of the following factors then it is recommended
that you use static compute nodes.
Limited resource availability
When on-demand resources are scarce,
reservations
can be used to ensure that the VMs are always available. Once a reservation has
been obtained, the reservation owner is billed for the compute resources as if
the VMs were in use, whether or not the VMs have actually been created using the
reservation. When using a reservation, the resources are already paid for, so
there is no longer a cost benefit to autoscaling and using static compute nodes
is a good choice.
Startup time
Startup time is the time from when a VM creation request is sent to Google Cloud
and when the VM is available to do useful work. Some of this time is spent
waiting for Google Cloud to provision a VM but it also includes the time
required to boot the operating system, run startup scripts, install required
software, and configure the system.
In normal operation static compute nodes are always up. This means that startup
time occurs up front. In most cases when using autoscaling nodes, the startup
time occurs just before a job that is run.
Data staging
For workloads where significant staging to Local SSDs is needed, you can
benefit from using static compute nodes to amortize the transfer cost over more
than one job.
Considerations when using static compute nodes
It is often the combination of reserved resources and longer startup time that
makes the use of static compute nodes an attractive choice. This can be the
case for GPU clusters where both resource scarcity and longer startup time is
observed. However when using static compute nodes, keep the following in mind:
Because static compute nodes are always backed by VMs, you pay for the
resources even when they are idle.
Static compute nodes are not created on a per-job basis, so their topology
doesn't change to meet the needs of individual jobs.
Static compute nodes don't provide the same level of isolation between jobs
as autoscaling nodes because they are not created on a per-job basis. This
means that node-local issues from a previous job can potentially impact
future jobs running on the same node.
When using static compute nodes there are additional maintenance
considerations such as updating VM images for the compute nodes and
handling host maintenance events. For more information about managing
static compute nodes, see
Manage static compute node .
What's next
Review Best practices for static compute nodes
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
