---
title: "Workload VM backup solutions \_|\_ Google Cloud VMware Engine \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/vmware-engine/docs/concepts-backup-vms
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/vmware-engine/docs/private-clouds/howto-elevate-privilege
source_metadata:
  url: https://docs.cloud.google.com/vmware-engine/docs/concepts-backup-vms
  title: "Workload VM backup solutions \_|\_ Google Cloud VMware Engine \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
VMware Engine
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Workload VM backup solutions
Protecting application data in virtual machines (VMs) is a key requirement for
business-critical applications running on Google Cloud VMware Engine.
This page provides different options and considerations for deploying backup
infrastructure that protects your VMs and data in VMware Engine.
You can continue to use the same backup tools that you use on-premises to back
up your VMware VMs and data in VMware Engine.
Note: You are responsible for any required licenses for the backup software.
Supported backup solutions
Google provides Backup and DR Service as a backup solution for workloads on
Google Cloud. Third-party agent-based backup solutions can interoperate with
VMware Engine if they provide application-level backups and are
certified by application vendors (for example, RMAN for Oracle).
Backup solutions that can interoperate with VMware Engine must comply
with the VMware vStorage API for Data Protection (VADP) protocol standard and be
certified by VMware for vSAN. VMware Engine has validated the
following backup solutions for compliance:
Cohesity DataPlatform
Dell EMC Data Protection Solution
Veeam Backup & Replication
Commvault Backup & Recovery
Rubrik Cloud Data Management
Backup solution considerations
Consider the following questions before you design your backup solution and
implement a deployment model in VMware Engine.
Deciding on a backup technology
You can use either an agent-based or a VADP-based backup approach. We recommend
using a VADP-based approach when migrating workloads from on-premises
environments because it requires fewer changes. It also provides flexibility in
the choice of location for backup repositories.
An agent-based backup approach for migrated VMs requires additional
configuration if a Layer 2 network is stretched from an on-premises environment
to VMware Engine or if you want to change the location of the primary
backup repository during migration.
Determining the number of data copies to store
You must assess the overall backup requirements, objectives, and your enterprise
policies. Include the requirements for storing backups in specific locations
like on premises, off premises, your recovery time objective (RTO), and recovery
point objective (RPO).
Determining where to store backup data
There are several places where you can store backup data (backup repository).
Each location offers a different combination of storage cost, recovery time
objective (RTO), number of copies, and network outbound data transfer charges.
Base your choice on the application requirements, costs, and capabilities of
your backup software.
Consider the following main choices and their key aspects relevant for storing
backups of VMs and data:
Use persistent disks as backend storage of a
Compute Engine instance. The Compute Engine instance
exports an NFS mount to the backup server. A benefit of this approach is
that the persistent disks are regional and can also be replicated across
regions.
Use Filestore to export NFS volumes for use as
backup repositories. This approach provides lower management overhead
because Filestore instances are managed instances. It also
delivers a consistent performance. Filestore instances are
zonal, and data is not replicated across zones or regions.
Use Cloud Storage to store backup files. Cloud Storage
stores data across zones and regions for higher redundancy. Data is stored
and moved between storage tiers based on user-defined triggers.
Cloud Storage helps to optimize costs by keeping frequently used data in
faster storage tiers and older data in lower-cost storage tiers. Refer to
your backup solution vendor documentation for Cloud Storage integration.
Use Google Cloud NetApp Volumes to export NFS and SMB volumes for use as
backup repositories. This fully managed service eliminates operational
overhead of network-attached storage (NAS), like Filestore.
Google Cloud NetApp Volumes are regional, and data is not replicated across
zones or regions. For more information, see Regions where Google Cloud NetApp Volumes is available .
You can also store backups in a different cluster of the same private cloud, in
a different VMware Engine private cloud, or in on-premises storage.
Using a different cluster on the same private cloud or a different private cloud
in VMware Engine provides the lowest RTO, but it can potentially have
high storage costs. Cloud Storage offers higher RTO at a lower price than using
different clusters. Compute Engine with persistent disk and
Filestore provides an RTO and costs that are between the two options.
The performance tiers of Google Cloud NetApp Volumes are dynamic and a volume can be
upgraded to a higher tier during recovery to meet your RTO and then changed to a
lower tier to optimize costs. On-premises storage incurs network outbound data
transfer charges, but it preserves existing backup storage.
IAM and vSphere permissions
Backup administrators and users must have the required permissions to do the
following:
Deploy Compute Engine instances in a project and
VPC network
Connect the VPC network to VMware Engine
Configure firewall rules on the VPC network
For more information about Google Cloud roles and permissions, see [IAM][].
vSphere users with the default Cloud-Owner-Role
role have the required privileges to deploy backup solution components (virtual
machines and appliances) in VMware Engine. If a backup software
component requires additional vCenter privileges that are not available to the
default Cloud-Owner-Role role, use a
solution user account .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
