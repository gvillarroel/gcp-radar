---
title: "Backup plans in Google Cloud console \_|\_ Backup and DR \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/backup-disaster-recovery/docs/cloud-console/backup-plan
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/backup-disaster-recovery/docs/cloud-console/backup-plan
  title: "Backup plans in Google Cloud console \_|\_ Backup and DR \_|\_ Google Cloud\
    \ Documentation"
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
Backup plans in Google Cloud console
Stay organized with collections
Save and categorize content based on your preferences.
Setup
This page describes backup plans, which let you define advanced backup
strategies to back up your Cloud SQL and Compute Engine instances and
Compute Engine disks.
In a backup plan, you can define when and how to back up a resource. You can
include the backup frequency, the backup retention period,
and the backup vault location to store backups. When you associate
a backup plan to a resource, the Backup and DR automatically backs up and
retains backups for those resources according to the configuration in the
backup plan.
Before creating a backup plan, it is necessary to designate the storage
location for your backups. To do so, you must create a backup vault .
Note: The backup vault and backup plan must be in the same project and
in compatible locations .
A backup plan has backup rules, where the following applies:
One or more backup rules can be used.
You can define the frequency for backup creation: hourly, daily, weekly,
monthly, or yearly.
For weekly backups, you can choose a weekday for the rule.
For monthly backups, you can choose a specific day of the month for the
rule. For example, the 15th of the month.
You can use for both scheduled or on-demand backups.
Includes a backup window where you can define the specific timeframe of
when backup jobs can start. The backup window uses the following:
24-hour clock format, with start and end times between 00 and 24 hours.
A minimum of six hours for the window.
The backup plan always includes the boot disk even if Exclude boot disk is
checked in the Data protection section of Machine configuration , detailed
in Create an instance with additional non-boot disks .
Overview of data retention in Backup and DR Service
Backup and DR Service uses two types of retention to manage backup lifecycles and
security:
Every backup is retained for a period assigned in the backup plan, and then
expired at the end of that period. Backups can be deleted manually before the
expiration date set in the Delete backups after setting in the backup plan.
You can optionally ensure that some backups cannot be deleted for a certain
period by storing them in a
Backup vault with a
"Prevent deletion for" value set in the Enforced Retention Period section
of the backup vault configuration.
You can set the enforced retention period to be longer than the
Delete backups after setting in the backup plan. The backups won't be
deleted until the enforced retention period is over.
You can set the enforced retention period for an entire backup vault,
or you can have the backup vault enforce the Delete backups after
value in the backup plan for each data resource protected in the vault.
Backup storage consumption
In a backup plan, consider the following for backup storage.
Backups are automatically deleted after the defined backup retention period
is reached.
The default value for backup deletion is inherited from the minimum
retention period of the backup vault used to store those backups.
Backup retention periods cannot be less than the backup vault's
minimum retention period, it must be equal to or greater than it.
Backups created using a backup plan are always immutable and therefore
cannot be modified or deleted for the duration of the backup vault's
minimum enforced retention period.
Backing up workloads to a CMEK-enabled backup vault
Once a backup vault is configured with CMEK, backups stored in it are
protected using your specified key. The following rules apply when associating
a backup plan with a CMEK-enabled vault:
Workloads with CMEK : If a source workload is protected by CMEK (e.g., a
Compute Engine instance with CMEK-encrypted disks), it must be
backed up to a CMEK-enabled backup vault. You cannot back up a
CMEK-protected resource to a backup vault that uses
Google-owned and Google-managed encryption keys.
Workloads with Google-owned and Google-managed encryption keys : If a source
workload uses Google-owned and Google-managed encryption keys, it must be backed up
to a backup vault that uses Google-owned and Google-managed encryption keys.
Backup plan supported regions
Backup plans can be created only in regions where the Backup and DR
is available and where the resources to be backed up are located. To create a
backup plan, a backup vault must also be available in a
compatible location .
backup plan in the unsupported regions, use the
backup templates in the appliance management console.
Backup plan is supported in the following regions.
Geographic Area
Region Name
Region Description
North America
northamerica-northeast1 *
Montréal
Low CO 2
northamerica-northeast2
Toronto
Low CO 2
us-central1
Iowa
Low CO 2
us-east1
South Carolina
us-east4
Northern Virginia
us-east5
Columbus
us-south1
Dallas
Low CO 2
us-west1
Oregon
Low CO 2
us-west2
Los Angeles
us-west3
Salt Lake City
us-west4
Las Vegas
northamerica-south1 *
Querétaro
South America
southamerica-east1
São Paulo
Low CO 2
southamerica-west1
Santiago
Low CO 2
Europe
europe-central2
Warsaw
europe-north1
Finland
Low CO 2
europe-north2
Stockholm
Low CO 2
europe-southwest1
Madrid
Low CO 2
europe-west1
Belgium
Low CO 2
europe-west2
London
Low CO 2
europe-west3
Frankfurt
europe-west4
Netherlands
Low CO 2
europe-west6
Zürich
Low CO 2
europe-west8
Milan
europe-west9
Paris
Low CO 2
europe-west10
Berlin
europe-west12
Turin
Middle East
me-central1
Doha
me-central2
Dammam
me-west1
Israel
Africa
africa-south1
Johannesburg
Asia Pacific
asia-east1
Taiwan
asia-east2
Hong Kong
asia-northeast1
Tokyo
asia-northeast2 *
Osaka
asia-northeast3
Seoul
asia-southeast1
Singapore
asia-southeast2
Jakarta
australia-southeast1
Sydney
australia-southeast2
Melbourne
India
asia-south1
Mumbai
asia-south2
Delhi
* Querétaro (northamerica-south1), Montréal (northamerica-northeast1),
and Osaka (asia-northeast2) don't support zone separation. This means the multiple
zones within each of these regions may not be located in physically separate
data center campuses. Consequently, a single, localized physical disaster event
could potentially impact multiple zones within the same region, increasing the
risk of data loss compared to regions that support zone separation.
Backup plan and rule names
Your backup plan names and rule names must meet the following requirements:
Contain lowercase letters, numeric characters, dashes ( - ), underscores ( _ ),
and periods ( . ), spaces are not allowed
Start and end with a number or letter
Maximum of 63 characters
Cannot be represented as an IP address in dotted-decimal notation. For
example, 192.0.2.255
What's next
Create and manage a backup plan for vaulted backups
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
