---
title: "Find unprotected resources with Protection Summary \_|\_ Backup and DR \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/backup-disaster-recovery/docs/backup-admin/protection-summary
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/backup-disaster-recovery/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/backup-disaster-recovery/docs/backup-admin/protection-summary
  title: "Find unprotected resources with Protection Summary \_|\_ Backup and DR \_\
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
Find unprotected resources with Protection Summary
Stay organized with collections
Save and categorize content based on your preferences.
The protection summary dashboard helps you manage and verify the data protection
status of your Google Cloud resources. It provides a centralized, at-a-glance
view of backup configurations for your Compute Engine instances and disks,
Cloud SQL instances and Filestore instances across all supported
regions. You can use Protection Summary to view the backup configurations at a
project, folder as well as organization level.
This centralized dashboard is essential for your data protection strategy because
you can find unprotected resources that lack a backup or have misconfigured
protection policies. By highlighting these gaps, Protection summary helps you make
informed decisions to prevent data loss and ensure business continuity.
Some of the key benefits of protection summary include the following:
Holistic protection visibility: Get a centralized overview of your
entire backup configuration across all your supported workloads in one place.
Readily find protection gaps: Quickly pinpoint resources with missing or
misconfigured backups, allowing you to address deviations from your data
protection policies.
Seamless integration: Protection summary works with your existing
Google Cloud environment and running workloads, providing immediate value without
requiring complex configurations or impacting performance.
Protection summary is supported for the following resource types:
Compute Engine instance
Compute Engine disk
Cloud SQL instance
Filestore instance
What 'configured for backup' means
Protection summary reports a resource as "configured for backup" based on its
association with built-in Google Cloud data protection tools. This view does not
include data from any third-party backup tools.
A resource is considered configured in the following cases:
Compute Engine instance: The instance has a
backup plan OR at least
one of its attached disks has a Google Cloud snapshot schedule.
Compute Engine disk: The disk meets any of the following conditions:
It has a Google Cloud snapshot schedule.
It is associated with a backup plan .
It is attached to a VM that has a backup plan which covers the disk.
Cloud SQL instance: The instance has a
backup plan or built-in
Cloud SQL automated backups.
Filestore instance: The instance has a
backup plan or built-in
Filestore automated backups.
Before you begin
Enable the Backup and DR API in the project where you are viewing the
protection summary.
Enable the API
For information about protection summary in the Backup and DR API see
API Reference .
Required IAM permissions
The following permissions are required to view protection summary:
IAM Role: Backup and DR Backup Config Viewer
IAM permissions:
backupdr.resourceBackupConfigs.list
backupdr.resourceBackupConfigs.get
backupdr.locations.list
View protection summary across a project, a folder or an organization
To view the protection summary for your data resources, do the following:
In the Google Cloud console, go to the Backup and DR protection
summary page.
Go to Protection summary unprotected resources page
The Unprotected Resources tab is the quickest way to identify unprotected
resources.
Resources with Protected Resources are categorized into two statuses:
Vaulted : shows a list of resources being backed up in a backup vault.
Not vaulted : shows a list of all resources that are backed up without a
backup vault.
To see only the resources of a particular resource type, use the
Resource type drop-down to select the resource type.
The following fields are displayed for the selected project:
Resource name : the display name of the resource.
Resource type : the type of resource. It can be a Compute Engine
instance, Compute Engine disk, Compute Engine regional disk, Cloud SQL
instance, or Filestore instance.
Backup schedule type : the type of backup schedule applied to a resource.
For example backup template or snapshot schedules.
Backup plan name : the name of the resource that is providing backup
scheduling configuration. For automated, unnamed backup schedules, this
field is empty.
Configuration state : values are Not configured , Not vaulted , and
Vaulted .
Backup schedule state : the status of the backup schedule. It can be
Active or Inactive .
Backup scope : the scope of the specific resource considered for backup,
either Full instance or Disk name .
Backup location : the zonal regional or multi-regional locations where
the backups are located.
Latest successful backup : for example, mediumLongdate Mar 1, 2026, 8:45:18 PM .
Backup vault : the name of the backup vault used for backups.
PITR Configuration : the name of the point-in-time-recovery configuration
used for backups.
Public IP address : the public IP address assigned to a resource.
Private IP address : the private IP address assigned to a resource.
Note: Most data is refreshed within an hour, but it can take up to 24 hours.
The protection summary displays backup configuration data from
Backup and DR and from workload backups. This doesn't include data
from third-party backup providers.
Protection summary supported regions
Protection summary is supported in the following regions.
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
Limitations
The limitations of the protection summary view are as follows:
It is only compatible with resources located in regions that have support for
the Backup and DR appliance management console. See
Supported regions
for a list of supported regions.
Data is periodically refreshed every couple of hours, but in some cases it can
take around 24 hours.
Sort and filter protection summary backup configuration information
This section describes how you can sort and filter the backup configurations that
are returned by the ListResourceBackupConfigs API call in the protection
summary service.
Sorting support
Sort (ASC, DESC) is supported only for target_resource_display_name .
By default, the ListResourceBackupConfigs API call returns the resource backup
configurations ordered alphabetically by the resource name.
Filtering support
The following fields can be used for filtering the resource backup configurations
returned by the ListResourceBackupConfigs API call:
Field Name
Field Type
Supported Filtering operators
target_resource_display_name
string
both : and =
target_resource_type
string
:
backup_configs_details.backup_config_source_display_name
string
:
backup_configs_details.type
string
:
backup_configured
bool
=
vaulted
bool
=
Wildcard matching (using *) is supported only for the
target_resource_display_name field.
Filtering syntax
The filtering syntax is following the API filtering guidance set in
AIP 160 with the following limitations:
Only the AND operator and nesting are supported. Everything else is not
supported (including OR, NOT and any combination of these operators).
Examples
Valid: Filter uses AND operator:
target_resource_display_name=\"vm-instance1\" AND target_resource_type=CLOUDSQL_INSTANCE
Valid: Filter uses nesting and only AND operator:
(target_resource_display_name=\"vm-instance1\" AND target_resource_type=CLOUDSQL_INSTANCE) AND backup_configured=true
Invalid: Filter uses OR operator:
target_resource_display_name=\"vm-instance1\" OR target_resource_type=CLOUDSQL_INSTANCE
Prefix match is supported only for target_resource_display_name
Examples
Valid: Filter using prefix match:
target_resource_display_name:\"vm-instance1*\"
Invalid: Filter compares a suffix match:
target_resource_display_name:\"*vm-instance1\"
Invalid: Filter compares a suffix match:
target_resource_display_name=\"vm-instance1*\"
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
