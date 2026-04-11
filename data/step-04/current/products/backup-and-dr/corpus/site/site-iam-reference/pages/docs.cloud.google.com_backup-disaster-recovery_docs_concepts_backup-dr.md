---
title: "Product overview \_|\_ Backup and DR \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-dr
  title: "Product overview \_|\_ Backup and DR \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Backup and DR
Guides
Send feedback
Product overview
Stay organized with collections
Save and categorize content based on your preferences.
This page describes Google Cloud Backup and DR Service
capabilities, key benefits, what you can back up, and how it works.
Note: Enable 30-day introductory trial for
Backup and DR Service
to explore a unified, centralized backup solution featuring immutable backup vaults.
What is Backup and DR Service?
Backup and DR Service is a managed service that provides backup and recovery of
workloads running in Google Cloud. Backup and DR Service provides centralized management,
monitoring, and reporting of day to day backup operations all from one place.
The service supports seamless integration with existing automation using
Terraform and APIs.
Backup and DR Service provides the following capabilities:
Centralized backup management
Policy-based backup management
Comprehensive monitoring and reporting
Incremental backups for faster recovery point objective (RPO) and lower total cost of ownership (TCO)
Backup storage: the service supports two types of storage for backups:
A backup vault is a Google-managed secured and isolated storage
resource, managed by Backup and DR Service. Backup vault provides the
following features:
Immutability : your data cannot be changed
Indelibility : your data cannot be deleted
Backup vault storage is supported for Compute Engine instances,
Cloud SQL, Google Cloud VMware Engine VMs, and self-managed Oracle and
Microsoft SQL Server databases running inside VMs or Bare Metal Solution.
Self-managed storage refers to storage resources, excluding backup vaults,
that you can directly access and manage yourself. Because you manage the
storage, it can be deleted prematurely by any user who has sufficient
storage permissions.
Capability
Backup vault storage
Self-managed storage
Immutable and indelible backups
Yes
No
Multi-region backups
Yes
Yes
CMEK-encrypted backups
Yes*
Yes
Note: CMEK-encrypted backups (Backup vault storage) are only supported for Persistent Disk and for Compute Engine.
Whether using backup vaults or self-managed storage, you create backup plans for your data resources that you have to
protect. A backup plan defines when to back up a resource, where to store the
backup, and how long to retain the backups.
Backup vaults
A backup vault is secured and isolated storage, managed by
Backup and DR Service.
A backup vault can store backups in a region or in a multi-region,
as long as the selected location is
compatible with the workload location .
Backup vaults can be created in these
supported locations .
The minimum enforced retention period, a property of backup vault,
ensures that backups are strongly secured against modification and deletion for
the timeframe you define. You can specify the minimum enforced retention period
up to 99 years.
You create, access, and manage backup vaults using Backup and DR Service in
the Google Cloud console.
For full details on backup vaults, see
Backup and DR Service backup vault storage .
Self-managed storage
Self-managed storage includes Persistent Disk snapshots and backups in
Cloud Storage buckets that are created to store backup data in your Google Cloud projects.
The Backup and DR appliance management console is an interface for managing
backup to self-managed storage.
Note: To store backups on immutable, indelible storage managed by Backup and DR Service,
see backup vault .
Backup plans
There are some important differences between backup plans created in the
Google Cloud console and backup plans created in the appliance management console, as described
in the following table.
Supported workload
Backup plan in Google Cloud console
Backup plan in appliance management console
Compute Engine VMs
Yes
Yes
Compute Engine disks
Yes
Yes
Cloud SQL instances
Yes
No
AlloyDB clusters
Yes
No
Google Cloud VMware Engine VMs
No
Yes
File systems and self-managed databases, such as Oracle, SQL Server, SAP HANA, IBM Db2, PostgreSQL, SAP ASE, SAP IQ, and SAP MaxDB, can run on virtual machines (VMs) or on Bare Metal Solution.
No
Yes
Minimum RPO
4 hours
15 mins
Backup plans created in the Google Cloud console use backup vault storage.
Backup plans created in the Google Cloud console
When you create a backup plan in the Google Cloud console, it consists of the following:
A backup vault storage destination for the backups.
One or more backup rules. Backup rules define the following:
The frequency of backup creation: hourly, daily, weekly, monthly, or yearly.
The backup window, the specific day and time of day for the backup job to
start and the time by which it must be finished.
How long to retain the backup before automatically expiring it.
Backups automatically expire and are deleted after the backup retention period
is reached. Backups stored in backup vaults are immutable and indelible;
they cannot be modified or deleted for the duration of the
backup vault's minimum enforced retention period.
You create a backup plan with backup vault storage from the
Backup and DR product in the Google Cloud console.
When you create a backup plan with backup vault storage, you must select
an existing backup vault as the storage location for your backups.
The backup plan must exist in a
location that the workload is compatible with .
Also, the backup vault must exist when you create the backup plan.
Backup plans created in the appliance management console
Backup plans are created in the appliance management console and
the backup jobs are run on specialized Google Cloud VMs called
backup/recovery appliances that you deploy in your own Google Cloud projects.
The appliance management console Backup Plans tab provides two easy-to-use wizards to
create data-handling policies that will be applied to your applications:
Templates: Use the Templates wizard to control the frequency and retention of
data. You can also perform data tiering and replication using the Templates
wizard, for more information see Create a backup template .
Profiles: Use the Profiles wizard to control the physical location and storage
pools where data is stored. For more information, see
Create a resource profile .
Backups automatically expire and are deleted after the backup retention period is reached.
Back up Compute Engine instances using the appliance management console
Compute Engine instances can be backed up using the appliance management console
into self-managed storage, and using the Google Cloud console into backup vaults.
Note: You can also back up Compute Engine instances and disks into
backup vaults directly from the Google Cloud console, which is better in
most cases. See
Back up Compute Engine instances .
Back up Google Cloud VMware Engine VMs
Google Cloud VMware Engine VMs are fully supported in the appliance management console
for both backup vault and self-managed storage.
Back up self-managed Oracle and SQL Server databases
Self-managed Oracle and SQL Server databases are the following databases running
inside a VM or Bare Metal Solution in your project:
Oracle databases running on Bare Metal Solution, Compute Engine VMs, or Google Cloud VMware Engine VMs
SQL Server databases running on Compute Engine or Google Cloud VMware Engine VMs
These self-managed databases can be backed up from the appliance management console
into backup vaults or into self-managed storage.
Restore your data
After you have backed up your data, you can restore it to its original location
or to a different location. You can restore entire virtual machines, specific
disks, or individual files. To learn more about how to restore your data, see
the Restore data overview .
Pricing
Refer to Backup and DR Service pricing for pricing details.
What's next
The following quickstart guides can help you begin a backup and recovery workflow for your application:
Protect and recover Compute Engine instances .
Protect and recover VMware VMs .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
