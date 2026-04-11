---
title: "Workload VM migration \_|\_ Google Cloud VMware Engine \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/vmware-engine/docs/concepts-migration-options
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vmware-engine/docs/create-private-cloud
source_metadata:
  url: https://docs.cloud.google.com/vmware-engine/docs/concepts-migration-options
  title: "Workload VM migration \_|\_ Google Cloud VMware Engine \_|\_ Google Cloud\
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
Workload VM migration
Using Google Cloud VMware Engine, you can migrate virtual machines (VMs) from an
on-premises data center to your private cloud. Your private cloud provides
native access to VMware vCenter, which supports a variety of tools for workload
migration.
Migration options
You can migrate workload VMs to your private cloud in multiple ways. Here are
some of the more common options to consider:
VMware HCX. Create a hybrid infrastructure by abstracting and presenting
vSphere-based on-premises and cloud resources to applications as one
continuous resource
Backup and disaster recovery tools. Use your private cloud as a target to
restore backups.
VMware PowerCLI. Migrate VMs from one vCenter to another using a
command-line interface.
ISO files and templates. Create new VMs by uploading an ISO file to your
private cloud and using a VM template from your published vSphere content
library.
NSX Layer 2 VPN. Live migrate workload VMs by making an on-premises subnet
available on your private cloud.
Migration requirements
Migration of VMs and data from your on-premises environment requires network
connectivity between it and your private cloud to establish a secure connection
before you can migrate workloads.
The network path from your on-premises vCenter environment to your private cloud
must support migration of VMs by using vMotion. The vMotion network on your
on-premises vCenter must have routing abilities. Verify that your firewall
allows all vMotion traffic between your on-premises vCenter and private cloud
vCenter. On the private cloud, routing on the vMotion network is configured by
default.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
