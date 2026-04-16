---
title: "Basic scenarios for creating managed instance groups (MIGs) \_|\_ Compute\
  \ Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances
knowledge_key: corpus
source_id: site-docs-reference-required-7
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances
  title: "Basic scenarios for creating managed instance groups (MIGs) \_|\_ Compute\
    \ Engine \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Guides
Send feedback
Basic scenarios for creating managed instance groups (MIGs)
Stay organized with collections
Save and categorize content based on your preferences.
A managed instance group (MIG)
is a group of virtual machine (VM) instances that you treat as a single entity.
Each VM in a MIG is based on an
instance template .
If you only need to create multiple VMs, but don't want them grouped together in
a MIG, see the bulk instance API .
To learn about other Compute Engine options, see
Choose a Compute Engine deployment strategy for your workload .
To get started with creating a MIG, read this document to find a basic
configuration that works for you.
Basic scenarios for creating a MIG
MIGs have many configuration options. See the following guides to quickly get a
MIG up and running for various scenarios:
Guide
Scenario
Create a MIG with VMs in a single zone ( zonal MIG )
Your VMs can be deployed to a single zone.
Create a MIG with VMs in multiple zones in a region ( regional MIG )
You want to distribute your VMs across multiple zones in a region in order to protect against zonal failure or to automatically find zones with limited resource like Spot VMs .
Create a MIG with multiple machine types ( instance flexibility )
Your application is compatible with multiple machine types. You want the MIG to automatically use one of the compatible machine types based on real-time availability.
Create a MIG from an existing VM
You want to scale out a VM into a group of VMs and deploy them in a single zone or across multiple zones.
Create a MIG with autoscaling
You want your MIG to automatically create VMs in the group when demand increases and delete VMs when demand drops.
Create a MIG that uses preemptible VMs
Your workload can tolerate disruptions and you want to take advantage of the cost-savings associated with preemptible VMs.
Create a MIG with GPU VMs
Your workload needs a group of GPU VMs all at once—for example, you want to run batch workloads, such as training machine learning models or high performance computing workloads, on GPU VMs.
Create a MIG with stateful configuration
Your workload needs stateful configuration—for example, you need disks that must retain their data whenever VMs are autohealed, updated, or recreated.
Note: By default, Compute Engine creates–and when necessary
recreates–each VM in a MIG based on the configuration that you set in the MIG's
instance template. The default behavior for all persistent disks in a MIG is to
delete or recreate them when the corresponding VM is deleted or recreated, so
you shouldn't rely on attached disks as persistent data. To retain your data in
a MIG, you can back up the data in another centralized location, such as
Cloud Storage, or add configuration for stateful disks.
Limitations
MIGs have different limitations depending on which features you use. The
following lists show general MIG limitations as well as additional limitations
if you use regional or stateful features.
By default, you can create up to 1,000 VMs in a zonal MIG. If you need more,
use one of the following options:
Increase the size limit of your MIG.
Create a regional MIG ,
which allows twice as many VMs as a zonal MIG.
Create multiple MIGs and split your workload across them.
Contact support to make a request.
When updating a MIG, you can specify up to 1,000 VMs in a single request.
Once the MIG is created, you cannot change its networks or subnetworks.
All VMs in the MIG are assigned to the same subnetworks.
Shared VPC on interfaces other than nic0 for managed instance
groups is supported in gcloud CLI and the API, but not in
Google Cloud console.
A MIG that is spread across multiple zones—a regional MIG —has the following
limitations:
By default, you can create up to 2,000 VMs. If you need more,
increase the size limit of your MIG
or contact support .
You must select which zones
are associated with a regional MIG when you create the MIG. After you choose
specific zones during creation, you cannot change or update the zones later.
But you can set the MIG's
target distribution shape
to specify how the group distributes its managed instances across the zones
that you selected.
If you set the group's target distribution shape to BALANCED , ANY ,
or ANY_SINGLE_ZONE , review the
target distribution shape limitations .
Load balancing
with a regional MIG doesn't support the max-rate target capacity in RATE
and UTILIZATION balancing modes. To learn more about the usage guidelines
for each load balancer, see
Balancing modes and target capacity settings .
A MIG with
stateful configuration —a
stateful MIG —has the following limitations:
You cannot use autoscaling if your MIG has stateful configuration.
If you want to use automated rolling updates, you must set the
replacement method
to RECREATE .
For stateful regional MIGs, you must
disable proactive redistribution
(set the redistribution type to NONE ) to prevent deletion of stateful
instances by automatic cross-zone redistribution.
If you use an all-instances configuration
to override instance template properties, you cannot specify those properties
in any per-instance configuration and at the same time in the group's
all-instances configuration.
If you want to configure an autoscaler for your MIG, review the
autoscaler specifications , too.
IPv6 support
If you want your MIG to include VM instances that use IPv6
addressing, you must use either the IPv6-only or the dual-stack setting
when you create your instance template
Including instances with IPv6 addresses in a MIG has the following limitations:
While you can use autohealing with dual-stack instances in a MIG, the health checking endpoint supports only IPv4.
When using IPv6-only instances in a MIG, the following features aren't
supported:
Health checking and autohealing
Stateful IP addresses
Target pools
For more information, see
Create an instance template with IPv6 addresses .
Additional MIG tasks
After you've created a MIG, you might want to do the following:
Learn about the group and its VMs
View info
about your MIG and its managed VM instances
Learn what a managed instance is
and how to work with managed instances
Resize the group
Add or remove VMs
from the group
Automatically resize a MIG
based on increases or decreases in load by configuring an autoscaler
Manually set the size of a MIG
Disable creation retries mode during resize
Create instances with specific names in a MIG
Delete specific instances from a group
Abandon instances from a group
Increase the group's size limit
Delete the group
Change the group's VM configuration
Change the instance template for the group
Apply configuration updates to the VMs in a MIG
Automatically apply configuration updates to VMs in a MIG
Selectively apply configuration updates to specific VMs
Understand the instanceTemplate and versions fields
Recreate instances in the group
Canary test a new instance template in a MIG
Learn how to add stateful configuration
in order to preserve disks, IP addresses, and metadata when VMs are recreated
Add MIG features
Set up an application-based health check
to automatically recreate VMs if your application does not respond as
expected
Set up a load balancer
to distribute user traffic across multiple instances of your application
Tutorials
Try a tutorial:
Use autohealing for highly available applications
Use load balancing for highly available applications
Use autoscaling for highly scalable applications
Migrate an existing workload to a stateful managed instance group
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
