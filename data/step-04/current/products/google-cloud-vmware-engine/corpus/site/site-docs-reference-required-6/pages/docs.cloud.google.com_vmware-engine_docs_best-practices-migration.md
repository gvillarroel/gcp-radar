---
title: "Migration best practices \_|\_ Google Cloud VMware Engine \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/vmware-engine/docs/best-practices-migration
knowledge_key: corpus
source_id: site-docs-reference-required-6
source_type: site
entrypoint: https://docs.cloud.google.com/vmware-engine/docs/best-practices-security
source_metadata:
  url: https://docs.cloud.google.com/vmware-engine/docs/best-practices-migration
  title: "Migration best practices \_|\_ Google Cloud VMware Engine \_|\_ Google Cloud\
    \ Documentation"
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
Migration best practices
This page presents some best practices for migrating VMware virtual machine (VM)
instances to your private cloud by using Google Cloud VMware Engine.
Plan the migration project
Before migrating VMware VMs to your private cloud, plan the migration as follows:
Identify the personnel, including the following:
Customer stakeholders
Program sponsor and owner
The technical team responsible for the migration
The stakeholders for in-scope systems and applications
The relevant Google Technical Account Manager (TAM), Partner Engineering
Manager (PEM), or Customer Engineer (CE)
Assess the source environment .
Create a plan that defines the following:
the migration strategy
the architecture of the new environment
the goals and success criteria, including the UAT and QA scripts
the roles and responsibilities
the communication model, including daily standups, status reporting,
escalation paths, chat rooms
the data that cannot be migrated and related strategies
milestones and timings
Ensure alignment with all stakeholders.
Evaluate migration options
To evaluate the different migration options for VMware Engine,
consider the following options:
Consider planning the migration in waves.
Factor in application dependencies and mappings.
Group VMs based on their maintenance schedule.
To avoid multiple power cycles, identify the VMs with pending system
updates and align the schedule with the migration switchover reboots.
Establish a backup and DR strategy for VMs. Consider using
Google Cloud Backup and DR and
VMware Engine Protected .
Ensure that vSphere, vCenter, HCX, and, if applicable, NSX-T on-premises
meet the minimum versioning compatibility with
VMware Engine component versions .
Identify VMs with memory, CPU, or storage requirements that exceed the
specification of the current node type or that might cause contention if
combined with other large VMs.
For example, database servers might require large amounts of memory or
file storage servers might require large datastores.
Develop pre- and post-migration strategies for content that cannot be
migrated due to persistent hardware or tagging, such as mounted ISOs, NSX-T
tags, passthrough devices that use
DirectPath I/O ,
multi-writer disks ,
and physical RDMs. An example strategy might be to consider converting
physical RDMs to
virtual compatibility mode .
Assess and evaluate migration methods .
Prefer bulk migration .
Consider the related requirements and restrictions.
Use VMware HCX for migrations
When using HCX for migration ,
consider the following recommendations:
Although a flat network topology is supported for HCX Connector and HCX
Service Mesh deployments, to avoid routing problems and connectivity
errors, set up HCX Management and the HCX Uplink network profiles
on separate networks and VLANs.
Ensure that your VMware environment has the latest HCX versions. For more
information, see
HCX Service Update Procedures .
Be sure to configure
HCX backups and restore operations ,
as required.
The SRE team manages HCX Manager backups, but not HCX Connector backups.
HCX service appliances, including HCX-IX and HCX-NE, don't require
individual backups. A restored HCX Manager reconnects to existing service
appliances that were created within the backup duration. If the service
appliances are no longer functional, the HCX Manager deploys new appliance
VMs based on the backed-up configuration.
When stretching a Layer 2 network by using HCX network extensions, enable
TCP Flow Conditioning. For related information, see
Traffic engineering features provided in HCX .
For VMs that communicate to or from a private cloud over an HCX L2
extension, configure the best MTU setting based on VPN endpoint
configurations. This is especially important in cases where an application
isn't able to control the maximum payload size.
Google recommends an MTU setting of 1350 bytes to 1390 bytes or lower for VM
interfaces that allow data transfer in the following ways:
From an on-premises endpoint to a private cloud and conversely
From a VM in one private cloud to a VM in another private cloud over an
L2 extension
For additional guidance on calculating encapsulation overhead, see
MTU considerations
and VMware NSX-T VPNs .
What's next
Read about best practices for compute ,
networking ,
security ,
storage , and
costs .
Try out VMware Engine. Visit features, benefits, and use
cases for more information.
Explore reference architectures, diagrams, tutorials, and best practices
about Google Cloud. Visit Cloud Architecture Center for
more information.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
