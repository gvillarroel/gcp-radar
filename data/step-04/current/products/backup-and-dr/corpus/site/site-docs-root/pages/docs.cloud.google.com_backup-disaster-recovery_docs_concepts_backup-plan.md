---
title: "Backup plans in the appliance management console overview \_|\_ Backup and\
  \ DR \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/backup-disaster-recovery/docs
source_metadata:
  url: https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan
  title: "Backup plans in the appliance management console overview \_|\_ Backup and\
    \ DR \_|\_ Google Cloud Documentation"
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
Backup plans in the appliance management console overview
Stay organized with collections
Save and categorize content based on your preferences.
Backup plans are the rules that the appliance management console uses to define how often
to back up application data, how long to retain the application data backups,
and where and how to replicate the application's data backups. Use the backup
plans to create policy templates and resource profiles that each backup/recovery appliance
uses to manage data. A backup plans violation occurs when data is not
being backed up according to the boundaries you have set in a policy.
The Backup Plans tab provides two easy-to-use wizards to create a
data-handling policies that will be applied to your applications:
Templates. Use the Templates wizard to control the frequency and
retention of data. It also lets you perform data tiering and
replication. For more information, see the Backup template
section.
Profiles. Use the Profiles wizard to control the physical location
and storage pools where data is stored. For more information, see the
Resource profiles section.
Refer to the Backup plans best practices section to help you avoid some of
the more common mistakes users make when creating and modifying policy templates
and their associated policies.
Backup job retries
When a scheduled job fails, the scheduler automatically retries the job up
to three more times. The first time a job fails, the status of the first
attempt will be marked as Retried and the scheduler will wait 4 minutes before
queuing the job again. If it fails a second time, the next retry is
queued after 16 minutes. If it fails a third time, a final retry is
queued after a holdoff period of 64 minutes. After 3 failed retry attempts
(a total of four attempts), the final retry job status changes from Retried to Failed
and no further jobs are attempted for that application in that schedule period.
The scheduler treats a job retry like any other available job. If there
are more jobs queued than slots to accommodate them, then the queued retry job
will need to wait for a slot. If the policy window closes before a retry
job can start, then any queued retry jobs won't run and no further retries
will be attempted.
Job retries are reported in Monitor > Jobs . To identify job
retries all four jobs will have the same Job number in the following format
in this order:
Job_xxxxx (Status: Retried)
Job_xxxxxa (Status: Retried; queued after a 4 minute holdoff)
Job_xxxxxb (Status: Retried; queued after a 16 minute holdoff)
Job_xxxxxc (Status: Failed; queued after a 64 minute holdoff)
The next time a backup job for this application is attempted is
according to the policy's schedule. So, if the schedule calls for one snapshot
per day in a window starting at 01:00, the next attempt will be the
following day at 01:00.
Backup template
A backup template is a collection of policies defined in the backup plans. Each
policy defines how data is backed up, how often it is backed up, and how long it
is retained. Specifically, the policies define the following:
The types of data backup operation (e.g., snapshot, replication)
The frequency of the application data backup operation
How long to retain the application data backups
The advanced settings related to the application data backup operation
Whether to truncate logs. Updates to databases such as Microsoft SQL
Server and Oracle are accompanied by creation of logs and metadata. Logs
explain the modifications made to the databases.
Where the backup data is retained (local backup/recovery appliance,
remote backup/recovery appliance or OnVault storage location)
By mixing and matching policies within a template you can create a
single template that defines the shortterm and longterm retention of data,
as well as where the data will be retained and how long the replicated data
will be retained.
Resource profiles
A resource profile specifies the storage media for protected application and VM
data. The policy and the resource profile that make up the backup plan dictate
the type of application data backup to perform and where to store the
application data backups (which pool of disks can be used). Resource profiles define
which snapshot pool (if needed) is used or to which remote appliance data is
replicated.
In addition to policy templates and policies, you also create resource profiles
in the backup plans. Resource profiles define where to store data. Data can be
stored in the following ways:
Local. The backup/recovery appliance that the resource profile is
created for.
Remote. The backup/recovery appliance used for remote replication.
This remote appliance must be an appliance that is already paired to the
selected local appliance.
Note: You can configure the Remote field only when one or more remote
appliances are configured on the selected local appliance.
OnVault. The storage defined by an OnVault storage pool.
OnVault pools can be storage that you control or indelible, immutable,
Google Cloud managed backup vaults .
Note: You can use the OnVault Pool option only if the backup/recovery appliance
has defined OnVault storage pools.
Resource profiles are applied to applications in the App Manager and the
resource profiles work in tandem with policy templates:
A policy template that does not include a replication policy must be
applied to an application along with a resource profile that only stores
data locally.
A policy template that includes a replication policy must be applied
to an application along with a resource profile that stores data either
on another appliance or to storage defined by OnVault storage pool.
You define a resource profile for any backup/recovery appliance that has been
added to the appliance management console.
What's next
Create a backup template
Create a backup policy
Create a resource profile
Configure advanced policy settings of an application backed up by the policy
Apply a backup plan to an application
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
