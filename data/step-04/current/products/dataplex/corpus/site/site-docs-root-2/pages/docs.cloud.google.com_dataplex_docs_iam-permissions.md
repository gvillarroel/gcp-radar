---
title: "Knowledge Catalog IAM permissions \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataplex/docs/iam-permissions
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataplex/docs/introduction
source_metadata:
  url: https://docs.cloud.google.com/dataplex/docs/iam-permissions
  title: "Knowledge Catalog IAM permissions \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

As of April 10, 2026, Dataplex Universal Catalog is now called Knowledge Catalog. The API, client library, CLI, and IAM names remain unchanged.
Home
Documentation
Data analytics
Knowledge Catalog
Guides
Send feedback
Knowledge Catalog IAM permissions
Stay organized with collections
Save and categorize content based on your preferences.
This document provides a reference of Identity and Access Management (IAM) permissions for
Knowledge Catalog (formerly Dataplex Universal Catalog) resources. Use these permissions to create custom roles
or to verify the granular access required for metadata
management, data scans, lake operations, tasks, and environments.
Permissions and roles
You don't directly give users permissions. Instead, you grant them roles,
which have one or more permissions bundled within them. This approach aligns
with the principle of least privilege, encouraging you to grant only the
necessary access required for a user or service account to perform its tasks.
IAM offers predefined roles for common use cases.
If these predefined roles don't meet your specific needs, you can create your
own custom roles containing only the specific permissions required.
For more information about predefined
Knowledge Catalog roles and the permissions that they contain, see
Knowledge Catalog IAM roles .
For a detailed description of IAM and its features, see the
IAM documentation .
IAM policy Set and Get permissions
The following table lists the permissions that are required to get and set
IAM permissions:
Resource
API method
IAM permission
Aspect types
GetIamPolicy
dataplex.aspectTypes.getIamPolicy
Aspect types
SetIamPolicy
dataplex.aspectTypes.setIamPolicy
Entry groups
GetIamPolicy
dataplex.entryGroups.getIamPolicy
Entry groups
SetIamPolicy
dataplex.entryGroups.setIamPolicy
Entry types
GetIamPolicy
dataplex.entryTypes.getIamPolicy
Entry types
SetIamPolicy
dataplex.entryTypes.setIamPolicy
Lakes
GetIamPolicy
dataplex.lakes.getIamPolicy
Lakes
SetIamPolicy
dataplex.lakes.setIamPolicy
Metadata management permissions
The set of permissions that is required to perform operations on entry types,
entry link types, aspect types, entry groups, entries, and entry links depends
on whether the resources are
system resources or custom resources. System resources are defined by
Knowledge Catalog, and custom resources are defined by you or your
organization.
Note: Only system entry link types are supported.
To enrich entries and entry links with additional information, you can attach aspects.
To perform operations that are related to multiple resources (for example,
creating an entry of a particular entry type, or adding an aspect of a
particular aspect type to an entry or entry link), you might need multiple
permissions associated with the resources.
Entry types
To create and manage entry types, you must be granted at least the standard
create , get , list , update , and delete permissions.
When you create an entry type, you must be granted permissions to use each
aspect type that you want to mark as required for that entry type.
To use an entry type (for example, to create entries of an entry type), you must
be granted the use permission on the entry type.
The following table lists the permissions that are required for operating on
entry types:
Operation
IAM permission
Create entry types
dataplex.entryTypes.create
dataplex.aspectTypes.use (for every required aspect type in the entry type)
dataplex.entryGroups.use ASPECT_TYPE (for
every required system aspect type in the entry type). See the
permissions for system aspect types .
Delete entry types
dataplex.entryTypes.delete
dataplex.aspectTypes.use (for required aspect types in the entry types)
dataplex.entryGroups.use ASPECT_TYPE (for
every required system aspect type in the entry type). See the
permissions for system aspect types .
Get entry types
dataplex.entryTypes.get
List entry types
dataplex.entryTypes.list
Update entry types
dataplex.entryTypes.update
dataplex.aspectTypes.use (for every required aspect type in the entry type)
dataplex.entryGroups.use ASPECT_TYPE (for
every required system aspect type in the entry type). See the
permissions for system aspect types .
Use entry types
(when creating entries, updating top-level entry fields and required aspect type values)
dataplex.entryTypes.use
dataplex.entries.create or dataplex.entries.update
dataplex.aspectTypes.use (for every aspect created or updated)
Aspect types
To create and manage aspect types, you must be granted the standard create ,
get , list , update , and delete permissions.
To use an aspect type (for example, to attach it as an optional aspect on an
entry or update required aspect on the entry link), you must be granted the
use permission on the aspect type.
Aspect types are categorized into system aspect types and custom aspect types.
System aspect types are created by Knowledge Catalog and custom aspect
types are created by you or your organization. System aspect types are further
categorized into usable and read-only. For more information, see
Categories of aspect types .
The following table lists the permissions that are required for operating on
custom and system aspect types:
Operation
Permissions required for custom aspect types
Permissions required for usable system aspect types
Permissions required for read-only system aspect types
Create aspect types
dataplex.aspectTypes.create
N/A
N/A
Delete aspect types
dataplex.aspectTypes.delete
N/A
N/A
Get aspect types
dataplex.aspectTypes.get
Granted to allUsers
Granted to allUsers
List aspect types
dataplex.aspectTypes.list
Not applicable (N/A)
N/A
Set optional aspect type values when creating or updating entries
dataplex.aspectTypes.use
dataplex.entries.create or dataplex.entries.update
dataplex.entryGroups.use ASPECT_TYPE . See the
permissions for system aspect types .
dataplex.entries.create or dataplex.entries.update
N/A
Set required aspect type values when creating or updating entries
dataplex.aspectTypes.use
dataplex.entryTypes.use
dataplex.entries.create or dataplex.entries.update
dataplex.entryGroups.use ASPECT_TYPE . See the
permissions for system aspect types .
dataplex.entryTypes.use
dataplex.entries.create or dataplex.entries.update
N/A
Update aspect types
dataplex.aspectTypes.update
N/A
N/A
Set required aspect type values when creating or updating entry link
N/A
dataplex.entryGroups.use ASPECT_TYPE . See the
permissions for system aspect types .
dataplex.entryLinkTypes.use ENTRY_LINK_TYPE . See the
permissions for system entry link types .
dataplex.entries.link Granted on entry group(s) containing linked entries. Only checked during entry link creation.
dataplex.entryLinks.create or dataplex.entryLinks.update
N/A
Entry groups
To create and manage entry groups, you must be granted the standard create ,
get , list , update , and delete permissions.
Note: You can't modify or delete the system entry groups whose names start with
the @ symbol, such as @bigquery . You can only add optional aspects to the
entries in such entry groups.
Entry groups are categorized into system entry groups, which are created by
Knowledge Catalog, and custom entry groups, which are created by you or
your organization. For more information, see
Categories of entry groups .
The following table lists the permissions that are required for operating on
entry groups:
Operation
Permissions required for custom entry groups
Permissions required for system entry groups (starting with @)
Create entry groups
dataplex.entryGroups.create
N/A
Delete entry groups
dataplex.entryGroups.delete
N/A
Get entry groups
dataplex.entryGroups.get
dataplex.entryGroups.get
List entry groups
dataplex.entryGroups.list
dataplex.entryGroups.list
Update entry groups
dataplex.entryGroups.update
N/A
Entries
To create and manage entries, you must be granted the standard create ,
get , list , update , and delete permissions.
Note the following:
For lookup ( LookupEntry ), search ( SearchEntries ), and modify
( ModifyEntry ) methods, the permission from the original source system
is required on the entry. For example, if the source is a
BigQuery table, you need bigquery.tables.get permission
to view metadata, bigquery.tables.getData to view
data aspects , and
bigquery.tables.update to modify the entry's metadata.
If permission to view data aspects
is not present, entries are still be visible, but contents of data aspects
is hidden.
When you create an entry or update the top-level fields of an entry, you
must be granted the use permission on the entry type.
When you create or update a required aspect, you must be granted
the use permission on the entry type of an entry, as well as on the
underlying aspect type. This is because the required aspects are enforced by
the entry type.
When you create, update, or delete an optional aspect, you must be granted
the use permission on the aspect type of an aspect.
When you upsert an entry ( UpdateEntry with allow_missing = True ), you
must be granted the create permission.
For more information about the entry types that entries are based on, see
Categories of entry types .
The following table lists the permissions that are required for operating on
entries:
Operation
Entry based on custom entry type
Entry based on usable system entry type
Entry based on read-only system entry type
Create entries
dataplex.entries.create
dataplex.entryTypes.use
dataplex.aspectTypes.use (for every custom aspect created)
dataplex.entryGroups.use ASPECT_TYPE (for
every aspect of a usable system aspect type created). See the
permissions for system aspect types .
dataplex.entries.create
dataplex.entryGroups.use ENTRY_TYPE . See the
permissions for system entry types .
dataplex.entryGroups.use ASPECT_TYPE (for every system aspect created). See the
permissions for system aspect types .
dataplex.aspectTypes.use (for every custom aspect created)
N/A
Get entries
dataplex.entries.get
To view data aspects ,
dataplex.entries.getData is also required.
dataplex.entries.get
To view data aspects ,
dataplex.entries.getData is also required.
dataplex.entries.get
To view data aspects ,
dataplex.entries.getData is also required.
List entries
dataplex.entries.list
dataplex.entries.list
dataplex.entries.list
Lookup entries
Requires metadata read permission of the source system. Permission to read data from the source system is required to view data aspects .
For custom entries, where Knowledge Catalog is treated as the source system, these permissions are dataplex.entries.get and dataplex.entries.getData , respectively.
Requires metadata read permission of the source system. Permission to read data from the source system is required to view data aspects .
For custom entries, where Knowledge Catalog is treated as the source system, these permissions are dataplex.entries.get and dataplex.entries.getData , respectively.
Requires metadata read permission of the source system. Permission to read data from the source system is required to view data aspects .
For custom entries, where Knowledge Catalog is treated as the source system, these permissions are dataplex.entries.get and dataplex.entries.getData , respectively.
Modify entries
dataplex.entries.update
dataplex.entryTypes.use (for updating top-level fields or required aspects)
dataplex.aspectTypes.use (for every custom aspect modified)
dataplex.entryGroups.use ASPECT_TYPE (for every system aspect modified). See the permissions for system aspect types .
Requires metadata update permission of the original source system.
For custom entries, this is dataplex.entries.update , because Knowledge Catalog is treated as the original source system.
dataplex.aspectTypes.use (for every custom aspect modified)
dataplex.entryGroups.use ASPECT_TYPE (for every system aspect modified). See the
permissions for system aspect types .
Requires metadata update permission of the original source system.
dataplex.aspectTypes.use (for every custom aspect modified)
dataplex.entryGroups.use ASPECT_TYPE (for every aspect of a usable system aspect type modified). See the
permissions for system aspect types .
Search entries
Read permission of the original source system.
For custom entries, this is dataplex.entries.get , because
Knowledge Catalog is treated as the original source system.
Read permission of the original source system.
For custom entries, this is dataplex.entries.get , because
Knowledge Catalog is treated as the original source system.
Read permission of the original source system.
For custom entries, this is dataplex.entries.get , because
Knowledge Catalog is treated as the original source system.
Update entries
dataplex.entries.update
dataplex.entryTypes.use (for updating top-level fields or required aspects)
dataplex.aspectTypes.use (for every aspect updated)
dataplex.entryGroups.use ASPECT_TYPE (for every system aspect updated). See the
permissions for system aspect types .
dataplex.entries.create (if allow_missing is True )
dataplex.entries.update
dataplex.entryGroups.use ENTRY_TYPE (for updating
top-level fields or required aspects). See the
permissions for system entry types .
dataplex.aspectTypes.use (for every custom aspect updated)
dataplex.entryGroups.use ASPECT_TYPE (for every aspect
that belongs to system aspect types). See the
permissions for system aspect types .
dataplex.entries.create (if allow_missing is True )
dataplex.entries.update
dataplex.aspectTypes.use (for every custom aspect updated)
dataplex.entryGroups.use ASPECT_TYPE (for
every aspect of a usable system aspect type updated). See the
permissions for system aspect types .
Top-level fields and required aspects can't be edited.
Entry Links
To create and manage entry links, you must be granted create , get , list , and delete permissions on dataplex.entryLinks .
Note the following:
Creating entry links ( CreateEntryLink ) also requires permissions on the entry link type and permissions to the link specific entries.
When creating an entry link with a required aspect, you need the permissions to use the aspect type.
When upserting an entry link ( UpdateEntryLink with allow_missing = True ), you must also have the same permissions required for CreateEntryLink .
The following table lists the permissions required for operating on entry links:
Operation
IAM permission
Create entry links
dataplex.entryLinks.create (on the entry group)
Permissions required based on Entry Link Type :
Synonym: dataplex.glossaryTerms.use (on both term entries)
Definition: dataplex.glossaryTerms.use (on the term entry) and dataplex.entries.link (on the target entry)
Other: dataplex.entries.link (on both entries)
Permission to use the entry link type:
For system types: dataplex.entryGroups.use ENTRY_LINK_TYPE (on the entry group). See the
permissions for system entry link types .
Permissions for any required aspects specified by the entry link type:
For system types: dataplex.entryGroups.use ASPECT_TYPE (on the entry group). See the
permissions for system aspect types .
Delete entry links
dataplex.entryLinks.delete (on the entry group)
Get entry links
dataplex.entryLinks.get (on the entry group)
Lookup entry links
Requires metadata read permission of the source system on the entry for which entry links are looked up for.
For linked custom entries, where Knowledge Catalog is treated as the source system, the permissions is dataplex.entries.get .
For linked system entries, the permission is read permission of the source system of the linked entry.
Update entry link
dataplex.entryLinks.update (on the entry group)
Permission to use the entry link type:
For system types: dataplex.entryGroups.use ENTRY_LINK_TYPE (on the entry group). See the
permissions for system entry link types .
Permissions for any required aspects specified by the entry link type:
For system types: dataplex.entryGroups.use ASPECT_TYPE (on the entry group). See the
permissions for system aspect types .
If allow_missing is True , additionally, all permissions from Create entry link apply.
Limitations for Aspects on Entry Links
The following limitations apply to using aspects with entry links.
Metadata job permissions
The following table lists the permissions that are required for working with
metadata import jobs and
metadata export jobs .
Operation
IAM permission
Access the exported results from metadata export jobs
storage.objects.get
Cancel metadata jobs
dataplex.metadataJobs.cancel
Create metadata export jobs
dataplex.metadataJobs.create
dataplex.entryGroups.export
dataplex.entryGroups.get
resourcemanager.projects.get
resourcemanager.projects.list
Create metadata import jobs
dataplex.metadataJobs.create
dataplex.entryTypes.use (for custom entry types in the
job's scope)
dataplex.entryTypes.use ENTRY_TYPE (for every
system entry type in the job's scope).
See the
permissions for system entry types .
However, this permission isn't needed to modify optional aspects when
running an aspect-only metadata import job.
dataplex.aspectTypes.use (for custom aspect types in the
job's scope)
dataplex.aspectTypes.use ASPECT_TYPE (for every
system aspect type in the job's scope).
See the
permissions for system aspect types .
dataplex.entryGroups.import (for entry groups in the
job's scope)
Get metadata jobs
dataplex.metadataJobs.get
List metadata jobs
dataplex.metadataJobs.list
System aspect types, entry types, and entry link types
Each system-defined aspect type, system-defined entry type and system-defined
entry link type has its own IAM permissions. These permissions
use a format like
dataplex.entryGroups.use ASPECT_TYPE ,
dataplex.entryGroups.use ENTRY_TYPE or
dataplex.entryGroups.use ENTRY_LINK_TYPE . For example,
the permission for the overview system aspect type is
dataplex.entryGroups.useOverviewAspect .
The following table lists the permissions that apply to system-defined aspect
types, entry types and entry link types.
Resource
IAM permission
contacts (system aspect type)
dataplex.entryGroups.useContactsAspect
data-profile (system aspect type)
dataplex.entryGroups.useDataProfileAspect
data-quality-scorecard (system aspect type)
dataplex.entryGroups.useDataQualityScorecardAspect
generic (system aspect type)
dataplex.entryGroups.useGenericAspect
overview (system aspect type)
dataplex.entryGroups.useOverviewAspect
schema (system aspect type)
dataplex.entryGroups.useSchemaAspect
schema-join (system aspect type)
dataplex.entryGroups.useSchemaJoinAspect
generic (system entry type)
dataplex.entryGroups.useGenericEntry
definition (system entry link type)
dataplex.entryGroups.useDefinitionEntryLink
related (system entry link type)
dataplex.entryGroups.useRelatedEntryLink
synonym (system entry link type)
dataplex.entryGroups.useSynonymEntryLink
schema-join (system entry link type)
dataplex.entryGroups.useSchemaJoinEntryLink
Lake, zone, and asset permissions
The following table lists the permissions that are required for operating on
lakes, zones, and assets:
API method
IAM permission
CreateAsset
dataplex.assets.create
CreateLake
dataplex.lakes.create
CreateZone
dataplex.zones.create
DeleteAsset
dataplex.assets.delete
DeleteLake
dataplex.lakes.delete
DeleteZone
dataplex.zones.delete
GetAsset
dataplex.assets.get
GetLake
dataplex.lakes.get
GetZone
dataplex.zones.get
ListAssetActions
dataplex.assetActions.list
ListAssets
dataplex.assets.list
ListLakeActions
dataplex.lakeActions.list
ListLakes
dataplex.lakes.list
ListZoneActions
dataplex.zoneActions.list
ListZones
dataplex.zones.list
UpdateAsset
dataplex.assets.update
UpdateLake
dataplex.lakes.update
UpdateZone
dataplex.zones.update
Task permissions
The following table lists the permissions that are required for operating on
tasks:
API method
IAM permission
CancelJob
dataplex.tasks.cancel
CreateTask
dataplex.tasks.create
DeleteTask
dataplex.tasks.delete
GetJob
dataplex.tasks.get
GetTask
dataplex.tasks.get
ListJobs
dataplex.tasks.get
ListTasks
dataplex.tasks.list
UpdateTask
dataplex.tasks.update
Environment permissions
The following table lists the permissions that are required for operating on
environments:
API method
IAM permission
CreateContent
dataplex.content.create
CreateEnvironment
dataplex.environments.create
DeleteContent
dataplex.content.delete
DeleteEnvironment
dataplex.environments.delete
GetContent
dataplex.content.get
GetEnvironment
dataplex.environments.get
ListContent
dataplex.content.list
ListEnvironments
dataplex.environments.list
ListSessions
dataplex.environments.get
UpdateContent
dataplex.content.update
UpdateEnvironment
dataplex.environments.update
Metadata permissions
The following table lists the permissions that are required for operating on
entities and partitions:
API method
IAM permission
CreateEntity
dataplex.entities.create
CreatePartition
dataplex.partitions.create
DeleteEntity
dataplex.entities.delete
DeletePartition
dataplex.partitions.delete
GetEntity
dataplex.entities.get
GetPartition
dataplex.partitions.get
ListEntities
dataplex.entities.list
ListPartitions
dataplex.partitions.list
Data scan permissions
The following table lists the permissions that are required for operating on
data scans:
API method
IAM permission
CreateDataScan
dataplex.datascans.create
DeleteDataScan
dataplex.datascans.delete
GetDataScan (basic view)
dataplex.datascans.get
GetDataScan (full view)
dataplex.datascans.getData
GetDataScanJob (basic view)
dataplex.datascans.get
GetDataScanJob (full view)
dataplex.datascans.getData
ListDataScanJobs
dataplex.datascans.get
ListDataScans
dataplex.datascans.list
RunDataScan
dataplex.datascans.run
UpdateDataScan
dataplex.datascans.update
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
