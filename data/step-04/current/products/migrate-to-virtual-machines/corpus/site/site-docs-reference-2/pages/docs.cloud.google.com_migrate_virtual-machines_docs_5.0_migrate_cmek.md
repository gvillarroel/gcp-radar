---
title: "Use Customer-managed encryption keys (CMEK) with Migrate to Virtual Machines\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/cmek
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/migrating-vms
source_metadata:
  url: https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/migrate/cmek
  title: "Use Customer-managed encryption keys (CMEK) with Migrate to Virtual Machines\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Migrate to Virtual Machines
Guides
Send feedback
Use Customer-managed encryption keys (CMEK) with Migrate to Virtual Machines
Stay organized with collections
Save and categorize content based on your preferences.
By default, Migrate to Virtual Machines encrypts customer content at
rest. Migrate to Virtual Machines handles encryption for you without any
additional actions on your part. This option is called Google default encryption .
If you want to control your encryption keys, then you can use customer-managed encryption keys
(CMEKs) in Cloud KMS with CMEK-integrated services including
Migrate to Virtual Machines. Using Cloud KMS keys gives you control over their protection
level, location, rotation schedule, usage and access permissions, and cryptographic boundaries.
Using Cloud KMS also lets
you track key usage , view audit logs, and
control key lifecycles.
Instead of Google owning and managing the symmetric
key encryption keys (KEKs) that protect your data, you control and
manage these keys in Cloud KMS.
After you set up your resources with CMEKs, the experience of accessing your
Migrate to Virtual Machines resources is similar to using Google default encryption.
For more information about your encryption
options, see Customer-managed encryption keys (CMEK) .
Migrate to Virtual Machines uses CMEK to encrypt the following data:
Data stored internally during a migration
Data on target Virtual Machine (VM) instances and VM disks
Data on target disks and machine images
The following sections describe these scenarios is more detail.
Use CMEK to encrypt data stored during a migration
To encrypt data stored during a migration or import using CMEK, you must provide
a reference to a Cloud KMS key when creating a migration source or
import resource respectively. For instructions on using CMEK to encrypt data
during a migration from various migration sources, see the following topics:
Migration from an AWS source
Migration from an Azure source
Migration from a VMware source
Import virtual disk images
Import machine images
Use CMEK to encrypt data on target VM instances and VM disks
To encrypt data on target VM instances and VM disks using CMEK, you must provide
a reference to a Cloud KMS key in the target details. For instructions
on setting CMEK in the target details, see setting CMEK for VM instances and setting CMEK for VM disks .
Use CMEK to encrypt data on target disks and machine images
To encrypt data on target disks and machine images using CMEK, you must provide
a reference to a Cloud KMS key in the target details. For instructions
on setting CMEK in the target details, see Import a virtual disk image to Compute Engine and Import a machine image to Compute Engine .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
