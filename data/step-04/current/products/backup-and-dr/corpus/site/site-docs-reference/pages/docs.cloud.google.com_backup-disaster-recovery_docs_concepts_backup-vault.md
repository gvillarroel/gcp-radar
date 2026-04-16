---
title: "Backup vault for immutable and indelible backups \_|\_ Backup and DR \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault
  title: "Backup vault for immutable and indelible backups \_|\_ Backup and DR \_\
    |\_ Google Cloud Documentation"
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
Backup vault for immutable and indelible backups
Stay organized with collections
Save and categorize content based on your preferences.
Set up a backup vault
This page describes the Backup and DR Service backup vault, including
supported backup models, available locations and resources, key features such
as enforced retention periods and access restrictions, and how to manage them.
Overview of the Backup and DR Service backup vault
A backup vault is a container that stores backups, similar to
self-managed storage , which lets you create a Cloud Storage bucket to
store your data in. However, a backup vault provides additional
benefits by protecting backups in isolated and specialized storage.
Backup vaults are designed to support resilience against malicious or
accidental deletion of backups by providing immutable and indelible backups.
This capability supports various data protection use cases, such as recovery
from user error and cyber recovery.
In the context of a backup vault, backups are designed to be
immutable and indelible:
Immutable: once a backup is created within a backup vault,
its contents cannot be modified. This ensures that the backup data remains
exactly as it was when it was created, protecting against unauthorized or
accidental changes.
Indelible: backups within a backup vault cannot be deleted
before the enforced retention period has elapsed. This protects against
accidental or malicious deletion, ensuring that backups are available when
needed.
How backup vaults work
When backups are stored in a backup vault, the Backup and DR Service handles
the storage and management of the backup data. You don't have direct visibility
or access to the underlying storage resources where the data is stored, which
safeguards those resources against direct attacks. Additionally,
backup vaults allow you to specify a minimum enforced retention period,
which mandates that a backup cannot expire until the specified timeframe has elapsed
and helps protect against accidental or malicious deletion.
Caution: A backup's enforced retention period cannot be removed or reduced.
When you store backups in a backup vault, you are preventing those backups
from ever being deleted before their enforced retention period has been
satisfied. You should be familiar with the cost and compliance implications of
the enforced retention period prior to using this feature. Important: To maintain the protection of your backup vault backups, you must
keep your current Google Cloud account active and in good standing. Before
discontinuing your account, you must transfer your data to another compliant
service to maintain compliance.
When using a properly-configured backup vault, Backup and DR Service has been
assessed as meeting key SEC "write once, read many" (WORM) requirements as
described in SEC (US) .
You create, access, and manage backup vaults using the
Google Cloud Backup and DR Service. Backup vaults can store backups in
the same region as the source workload, a different region (cross-region) than
the source workload, or across multi-regions.
Note: Cross-region backup vault support is in public
preview and is only supported for
Compute Engine instances and Compute Engine disks.
The backup vault resource model
Backup vaults have a three-level hierarchical resource model to
organize backup data:
Backup vault : a top-level, user-defined resource for storing
Backup and DR Service backup data.
Data source : the specific resource that is backed up, such
as a virtual machine (VM) or database instance or cluster. A single data source can
contain multiple backups. A data source is a child resource of a
backup vault.
Backup : a single backup for the resource specified by the
data source. A backup is a child resource of a data source.
The following diagram shows the backup vault resource model:
Figure 1. Backup vault resource model.
Supported resources
The following table helps you to understand the resources that
backup vaults support and what you use to manage them.
Workload
Managed by
Compute Engine instance
Google Cloud console
Compute Engine disk
Google Cloud console
Filestore instance (invitation only)
Google Cloud console
Cloud SQL instance
Google Cloud console
AlloyDB cluster
Google Cloud console
Google Cloud VMware Engine, Oracle database, and SQL Server database
appliance management console
Note: AlloyDB clusters and Filestore
instances in backup vaults are not supported for multi-regions.
Backup models for resources protected using the Google Cloud console
This section describes the two backup models for resources protected using the
Google Cloud console.
Centralized model : In the centralized model, organizations streamline
backup management by creating backup vaults and plans within a
designated central administrator project. This central repository consolidates
backups of various resources, like Compute Engine VMs running across
multiple service projects. Organizations then use these centrally managed
backup plans to protect their Compute Engine VMs residing in different
service projects.
Backup administrators can also grant access to backup plans to application
or platform owners within service projects through IAM
permissions. Granting access allows platform owners to take ownership of
backing up their applications.
Decentralized model : In the decentralized model, backup vaults
are created in various projects based on the organization's specific needs and
required isolation levels. This means a backup vault and backup plan
is created for each project with various resources, such as
Compute Engine VMs. This approach is crucial for decentralized organizations
where the responsibility for backing up VMs lies with the respective
application team.
Backup models for resources protected using the appliance management console
This section describes the two backup models for resources protected using the
appliance management console.
Centralized model : In the centralized model, organizations streamline
backup management by creating backup vaults and deploying the
appliance management console within a designated central administrator project. This
central repository consolidates backups of various resources, such as
Google Cloud VMware Engine VMs running across multiple service projects.
Organizations then configure policies within the appliance management console to
protect their resources residing in different service projects.
Decentralized model : In the decentralized model, appliance management consoles
and backup vaults are created in various projects based on the
organization's specific needs and required isolation levels. For example,
an organization might choose to have a separate appliance management console for each
line of business. This approach is useful for decentralized organizations
where the responsibility for managing and backing up resources is split
between multiple teams.
Backup vault supported locations
Backup vaults can be created in the same region as the source
workload, a different region (cross-region) than the source workload, or
across multi-regions.
Note: AlloyDB clusters and Filestore
instances in backup vaults are not supported for multi-regions. Note: Cross-region backup vault support is in public
preview and is only supported for
Compute Engine instances and Compute Engine disks.
Regional and cross-regional
Backup vaults can be created in the following regions.
The following regions are supported for cross-region backups as well
( Preview ):
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
Multi-regional
Backup vaults can be created in the following multi-regions:
Multi-Region Name
Multi-Region Description
ASIA
Data centers in Asia
EU
Data centers in the European Union
US
Data centers in the United States
Note: AlloyDB clusters and Filestore
instances in backup vaults are not supported for multi-regions.
Workload location compatibility
This table describes the compatible backup vault locations for each
supported workload, when using regional and cross-regional backup vaults.
Note that backup plans in the Google Cloud console must be created in the same region
as the source workload.
Workload
Does backup vault need to be in the same region as the source workload?
Supported backup vault regions
Compute Engine instance
No
All supported locations including multi-region and cross-region
Compute Engine disk
No
All supported locations including multi-region (and cross-region ( Preview ))
Cloud SQL instance
Yes
All supported regions including multi-region
AlloyDB cluster
Yes
Not multi-regions
Filestore instance
Yes
Not multi-regions
Google Cloud VMware Engine, Oracle database, and SQL Server database
No
Not multi-regions
If a workload supports use of multi-region backup vaults, the source
workload location must be compatible with the multi-region backup vault
location.
Multi-region compatibility is determined by the workload location prefix:
Resources in regions with the "asia" prefix are only allowed to be backed up
to the "asia" multi-region.
Resources in regions with the "us" prefix are only allowed to be backed up
to the "us" multi-region
Resources in regions with the "europe" prefix are only allowed to be backed
up to the "eu" multi-region.
This table describes the compatible backup vault locations for each
supported workload when using multi-region backup vaults.
Workload
Supports use of multi-region backup vaults?
Supported backup vault multi-regions
Compute Engine instance
Yes
asia, eu, us
Compute Engine disk
Yes
asia, eu, us
Filestore instance
No
N/A
Cloud SQL instance
Yes
asia, eu, us
AlloyDB cluster
No
N/A
Google Cloud VMware Engine, Oracle database, and SQL Server database
No
N/A
Note: Backup and DR Service does not impose any restriction on the compatible
destination locations when restoring a workload from a backup vault backup. Note: Depending on the locations of your backup vault and source workload,
there may be a network transfer fee. See
Backup and DR Service pricing
for more details.
Availability
Backup vaults created in regional and cross-regional
( preview ) locations provide resilience
against a single-zone outage. Backup data is stored redundantly in at least two
separate zones.
Backup vaults created in multi-region locations provide
resilience against a single-region outage. Backup data is stored redundantly
in at least two separate regions.
Backup vault names
Your backup vault names must meet the following requirements:
Backup vault names can only contain lowercase letters, numeric
characters, and hyphens ( - ). Spaces are not allowed.
Backup vault names must start and end with a number or letter.
Backup vault names must contain 3-63 characters. Names containing
periods can contain up to 222 characters, but each period-separated component
can be no longer than 63 characters.
Backup vault names cannot be represented as an IP address in
dotted-decimal notation. For example, 192.0.2.255 .
Prevent backup deletion
Backups will be kept for this minimum period before they can be deleted.
Data in the vault will incur storage charges for the duration of this period.
You should be familiar with the cost and compliance implications of the enforced
retention period prior to using this feature; see How backup vaults work .
Minimum enforced retention
The backup vault minimum enforced retention period lets you control
when a backup can be deleted in order to protect data from accidental or malicious
deletion. Backups inside backup vaults are only eligible for deletion
after reaching the end of the minimum enforced retention duration. When you
create a new backup vault you must specify a minimum enforced retention
period between 1 day and 99 years.
When you create a backup vault with a Minimum enforced retention of three days,
then any backup rule that stores backups in this vault must have a
Delete backups after value equal to or greater than three days.
Prevent deletion for duration specified in backup rule
This setting allows a backup vault to adopt the retention period defined in
an associated backup plan.
When you enable this option on a backup vault:
The retention period specified in the backup rule takes precedence and
acts as enforced retention. However, the vault's minimum enforced retention
must still be satisfied, so rule-specified retention durations cannot be
less than the vault-level minimum.
Manual deletion is prevented. Backups cannot be manually deleted during this
enforced retention period. They are automatically deleted only after the
duration specified in the backup plan's rule has expired.
When this setting is active, the Enforced retention column for the backup
vault will indicate Inherited from rule .
Example: Retention precedence
If you have the following configuration:
Backup vault Minimum enforced retention : 3 days
Backup vault Prevent deletion for duration specified in backup rule : Enabled
Backup plan Delete backups after : 7 days
Result:
The backup cannot be deleted for the 7-day period specified in the backup
plan's rule and will be automatically deleted only after 7 days have passed.
Note: This value can only be set when a backup vault is created. Note: For more information on how enforced retention compares with the
expiration period set in the backup plan, see
Overview of data retention in Backup and DR Service .
Lock the enforced retention period
You can prevent the shortening of a backup vault's minimum
enforced retention period by locking the backup vault. You can still
increase the minimum enforced retention period after it has been locked, see
Update the minimum enforced retention period .
When setting a lock, you must define the date when the lock takes effect. Until
the effective date is reached, you can increase or shorten the
backup vault's enforced retention period. However, after the lock's
effective date is reached, even the project owner cannot decrease the enforced
retention period for that backup vault.
For example, say that you've set the minimum enforced period to five days,
specified that the vault should be locked, and have set the lock effective
date to July 31, 2024, at 12 AM UTC. Until July 31, 2024, at 12 AM UTC, you
can increase or decrease the minimum enforced retention period. After that,
you can only increase the minimum enforced retention period.
Backup vault access restriction
A backup vault's access restrictions setting lets you control the
sources from which data can be backed up into or restored from a
backup vault. This setting determines the types of resources that you
can store in a backup vault.
You can select one of the following access restriction settings for a
backup vault. Note that this setting is permanent and can't be changed.
Restrict access to current organization : backup and restore operations
are only supported within your current organization. This selection makes
the backup vault compatible with resources managed through
Google Cloud console, such as Compute Engine VMs, but not with resources
managed through the appliance management console.
Restrict access to current project : backup and restore operations are
only supported within your current project. This selection makes the
backup vault compatible with resources managed through
Google Cloud console (for example, Compute Engine VMs), but not with resources
managed through the appliance management console.
Restrict access to current organization & unrestricted access for backup appliances :
for resources managed through Google Cloud console, backup and restore operations
are only supported within your current organization. Resources managed through
the appliance management console (for example, Google Cloud VMware Engine VMs) are also
supported, but backup and restore operations for those resources are not
restricted to your current organization. This selection makes the
backup vault compatible with resources managed through
Google Cloud console and with resources managed through the appliance management console.
Allow unrestricted access : allows backup and restore operations to or
from any project or organization. This selection makes the backup vault
compatible with resources managed through Google Cloud console and with
resources managed through the appliance management console.
Encryption
By default, Google Cloud automatically encrypts data when it is at rest
using Google-owned and Google-managed encryption keys .
If you have specific compliance or regulatory requirements related to the keys
that protect your data, you can use customer-managed encryption keys (CMEK)
for your backups. See Customer-managed encryption keys (CMEK) .
What's next
Create and manage a backup vault in the Google Cloud console
Manage data sources in the Google Cloud console
Manage backups in the Google Cloud console
Create and manage a backup vault in the Google Cloud console
Back up Compute Engine instances to a backup vault
Back up Cloud SQL instances to a backup vault
Back up AlloyDB clusters to a backup vault
Back up Filestore instances to a backup vault
Back up disks to a backup vault
Manage data sources in the Google Cloud console
Manage backups in the Google Cloud console
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
