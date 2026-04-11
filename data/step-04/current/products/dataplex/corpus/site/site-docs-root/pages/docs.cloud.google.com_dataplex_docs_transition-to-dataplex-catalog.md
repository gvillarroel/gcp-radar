---
title: "Transition from Data Catalog to Knowledge Catalog \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataplex/docs/transition-to-dataplex-catalog
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/dataplex/docs
source_metadata:
  url: https://docs.cloud.google.com/dataplex/docs/transition-to-dataplex-catalog
  title: "Transition from Data Catalog to Knowledge Catalog \_|\_ Google Cloud Documentation"
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
Transition from Data Catalog to Knowledge Catalog
Stay organized with collections
Save and categorize content based on your preferences.
Knowledge Catalog (formerly Dataplex Universal Catalog) replaces Data Catalog, providing more complex
metadata management, advanced data governance features, more powerful data
search, less complex access control, and a unified API to ease development.
This document shows you how to transition your Data Catalog content and
usage to Knowledge Catalog.
If you're new to using catalog, start with Knowledge Catalog by
configuring it as your default catalog experience .
Knowledge Catalog has a unified web interface and API. Transitioning to
Knowledge Catalog lets your existing and future workloads and users
benefit from its enhanced features and capabilities. For more information, see
About metadata management in Knowledge Catalog .
For a comparison of Knowledge Catalog and Data Catalog, refer to
Knowledge Catalog versus Data Catalog .
Before you begin
Before you start the transition, review the
metadata management features that aren't supported in Knowledge Catalog .
Note: Policy tags and policy tag taxonomies, which are used for
column-level access control in
BigQuery, aren't deprecated.
Transition overview
The Manage transition to Knowledge Catalog page in the Google Cloud console
provides a single point of access for managing transition.
This section describes the various transition scenarios and outlines the
transition process for each of the scenarios.
If you don't have custom metadata in Data Catalog or if you have never used Data Catalog
If you're using Data Catalog and don't have custom metadata,
such as tags, tag templates, custom entries, or entry groups,
or if you have never used Data Catalog, then complete the
transition by
setting your default catalog UI experience to Knowledge Catalog .
Note: If you don't have custom metadata in Data Catalog or if
you have never used Data Catalog, skip all other tasks described
in this document.
If you have Data Catalog custom metadata or programmatic workloads
If you're using Data Catalog with custom metadata (such as tags,
tag templates, custom entries, or entry groups), Knowledge Catalog can
automatically import this custom metadata
as read-only . To enable this capability, configuration changes are required
as outlined in the preparatory phase .
The second phase is the upgrade phase , where the active state ( read-write )
of your custom metadata is moved to Knowledge Catalog. During
this phase, you must also update any programmatic workloads (such as API,
client libraries, Terraform modules, and Google Cloud CLI commands) to interact
with Knowledge Catalog.
The following provides further detail on each phase of the
transition process:
Preparatory phase : perform necessary configuration tasks to make the
Data Catalog content simultaneously available in
Knowledge Catalog as read-only . During this phase,
Data Catalog remains the authoritative source for your metadata
content.
The preparatory phase includes the following tasks:
Update the Data Catalog private tag templates to public.
If your project is in Assured Workloads, opt in tag templates
and tags for simultaneous availability of metadata in Knowledge Catalog.
Configure Knowledge Catalog IAM permissions
for your custom metadata.
For more information, see Preparatory phase .
Upgrade phase : move your catalog usage and the active state ( read-write )
of your custom metadata to Knowledge Catalog.
The upgrade phase includes the following tasks:
Set the default catalog UI experience to Knowledge Catalog.
Upgrade the Data Catalog custom metadata to
Knowledge Catalog.
You must wait at least 48 hours after you opt in tag templates and tags
and after making the tag templates public before you can upgrade the
custom metadata. This time is necessary for internal processing.
Update programmatic workloads.
When you complete the upgrade phase, Knowledge Catalog
becomes the authoritative source for all your metadata and you don't need to
use Data Catalog.
For more information, see Upgrade phase .
Required roles
To get the permissions that you need to transition from
Data Catalog to Knowledge Catalog, grant the
following IAM roles on the resource:
Update private tag templates to public:
Data Catalog TagTemplate Owner
( roles/datacatalog.tagTemplateOwner )
This predefined role contains the datacatalog.tagTemplates.update permission,
which is required to update private tag templates to public.
Opt in public tag templates and tags for simultaneous availability of metadata
in Knowledge Catalog:
DataCatalog Migration Config Admin
( roles/datacatalog.migrationConfigAdmin )
This predefined role contains the datacatalog.migrationConfig.set permission,
which is required to opt in tag templates and tags.
Set the default catalog UI experience to Knowledge Catalog:
DataCatalog Migration Config Admin
( roles/datacatalog.migrationConfigAdmin )
This predefined role contains the datacatalog.migrationConfig.set permission,
which is required to set the default catalog UI experience.
Upgrade Data Catalog public tag templates to Knowledge Catalog:
Data Catalog TagTemplate Owner
( roles/datacatalog.tagTemplateOwner )
This predefined role contains the datacatalog.tagTemplates.update permission,
which is required to upgrade public tag templates.
Upgrade Data Catalog entry groups to Knowledge Catalog:
DataCatalog EntryGroup Owner
( roles/datacatalog.entryGroupOwner )
This predefined role contains the datacatalog.entryGroups.update permission,
which is required to upgrade entry groups.
For more information about granting roles, see
Manage access to projects, folders, and organizations .
You might also be able to get the required permissions with
custom roles or other
predefined roles .
Preparatory phase
Note: Perform the tasks described in this section only if you have
Data Catalog custom metadata or programmatic workloads.
This phase involves tasks to make the Data Catalog metadata
content simultaneously available in Knowledge Catalog, in the
read-only mode.
The following are the key points to remember during the preparatory phase:
Data Catalog remains the authoritative source for your custom
metadata.
The Knowledge Catalog Search page points to Data Catalog
search by default, which includes only Data Catalog metadata and
not Knowledge Catalog metadata.
Knowledge Catalog search might not include all
Data Catalog public tag templates and tags until you complete the
preparatory phase.
Learn more about simultaneous availability of Data Catalog
metadata in Knowledge Catalog
Data Catalog custom entry groups and their entries are already made
simultaneously available in Knowledge Catalog as
read-only . When you
opt-in public tag templates and tags
in the preparatory phase, their content will be made simultaneously available in
Knowledge Catalog as read-only .
The following table shows mapping between Data Catalog
and Knowledge Catalog resources when the
Data Catalog resources are made simultaneously available in
Knowledge Catalog:
Mapping between Data Catalog and Knowledge Catalog
Data Catalog resource
Corresponding Knowledge Catalog resource
Description
Tag template
Aspect type (global)
Tag templates in Data Catalog are regional resources.
When you opt in tag templates , their content is made
simultaneously available as global aspect types in
Knowledge Catalog. This is to preserve the cross-regional
references between tags and tag templates. Definitions of global aspect types
are replicated to all Google Cloud regions.
Standard concepts such as Schema are represented by system
aspect types, which Knowledge Catalog provides. For more information, see
Categories of aspect types .
Tag
Optional aspect
When you opt in tag templates , their tags are made
simultaneously available as optional aspects in
Knowledge Catalog. For more information, see
Categories of aspects .
Entry group
Entry group
Entry groups for system entries are established per-project per-region in
Knowledge Catalog. Entry groups created in
Data Catalog are made simultaneously available in
Knowledge Catalog.
Custom entry
Custom entry
All custom entries in Data Catalog are made simultaneously
available as entries of GenericEntryType in
Knowledge Catalog.
For more information, see
Categories of entry types .
System entry (Google Cloud)
System entry required aspect
Metadata describing system entries, such as Schema for
BigQuery tables, is captured in required aspects of the
system-defined aspect types.
Note: Typically, updates to the Data Catalog content are
propagated to Knowledge Catalog within 10 minutes. In some
cases, it might take longer. To verify data consistency, we recommend
you to stop all writes to Data Catalog, and verify
Knowledge Catalog resources against Data Catalog
resources or the original source system before use.
Update Data Catalog private tag templates to public
Note: Perform this task only if you're using private tag templates and
tags in Data Catalog. Data stewards or data administrators must
perform this task.
Knowledge Catalog doesn't support the concept of private
aspects (counterparts to private tags). Therefore, private tag templates and tags
aren't made simultaneously available in Knowledge Catalog. To
propagate private tag templates and tags in Knowledge Catalog,
you must update them to public.
Before you proceed, review the structure of private tag templates to verify that
their structure and metadata are consistent with the visibility of public tags.
To update private tag templates and tags to public, follow these steps:
Console
In the Google Cloud console, go to the Tag templates page.
Go to Tag templates
Click Manage transition to Knowledge Catalog .
Click the Private tag templates tab.
Click Manage tag templates .
On the Tag templates page, click the private tag template that you
want to update.
On the Template details page, click Edit .
In the Visibility section, select Public .
Click Update .
REST
To update the private tag templates to public, use the
tagTemplates.patch
method.
Opt in public tag templates and tags for simultaneous availability of metadata in Knowledge Catalog
Note: Perform this task only if your projects are in Assured Workloads
and have public tag templates and tags in Data Catalog.
If you have a Google Cloud organization, the organization administrator
can configure this setting at the organizational level, so that it applies
to all tag templates within the organization.
To migrate the tag templates only within a specific project, you can
configure this setting for individual projects, without affecting settings for
the whole organization.
For projects without an organization, the project administrator must
configure this setting for individual projects, and it applies to all
tag templates within the project.
When you provide opt-in, the content of Data Catalog public tag
templates and tags is automatically and continuously propagated to
Knowledge Catalog across your Google Cloud organization
or project. The Data Catalog public tag
templates and tags are propagated to Knowledge Catalog
as public aspect types and aspects respectively. Definitions of global aspect
types are replicated to all Google Cloud regions.
To opt in public tag templates and tags, follow these steps:
Console
In the Google Cloud console, go to the Tag templates page.
Go to Tag templates
Click Manage transition to Knowledge Catalog .
Click the Opt-in tab.
Click Provide opt-in .
In the confirmation dialog, enter the text displayed, and click Confirm .
REST
To opt-in tag templates and tags, use the
setConfig
method.
For both Google Cloud organizations and for projects, you can revoke the
originally provided opt-in, by clicking Revoke opt-in . When you revoke
opt-in, the process of propagation of Data Catalog tag templates and
tags to Knowledge Catalog stops. The
Knowledge Catalog aspect types and aspects that are created by
the opt-in process but aren't upgraded to Knowledge Catalog,
are deleted. The deletion process might take up to 12 hours.
Note: If you revoke opt-in for your project, but the organization administrator
provides opt-in on the organization level, the organization's configuration takes
precedence and the tag templates in all projects under the organization are migrated.
Configure Knowledge Catalog IAM permissions for your custom metadata
Knowledge Catalog aspect types and custom entry groups that
represent tag templates and entry groups from Data Catalog
don't inherit the original Data Catalog IAM
permissions. The specific IAM permissions required also differ
between Knowledge Catalog and Data Catalog.
For example, if you want to create aspects using a propagated aspect type (that
represents a Data Catalog tag template), you must configure
necessary IAM permissions for that aspect type. Similarly, when
you ingest custom metadata, to create custom entries within a propagated
custom entry group, you must configure necessary IAM permissions
for that entry group.
If you're using Data Catalog IAM roles to manage
access in Data Catalog at a project level or higher, then the
necessary Knowledge Catalog permissions are automatically included.
However, if you're using custom roles or assigning IAM roles
directly to specific resources, you must manually configure the
Knowledge Catalog permissions for those specific aspects and custom
entry groups.
For more information on how IAM permissions in
Data Catalog correspond to those in Knowledge Catalog,
see
IAM permissions mapping between Data Catalog and Knowledge Catalog .
To configure necessary Knowledge Catalog IAM permissions for
aspect types and custom entry groups, follow these steps:
Console
In the Google Cloud console, go to the Tag templates page.
Go to Tag templates
Click Manage transition to Knowledge Catalog .
Click the Dataplex IAM permissions tab.
To configure Knowledge Catalog IAM permissions for
aspect types, click Aspect types and tag templates .
For the tag template propagated from Data Catalog, click
more_vert > Permissions .
Click Add principals .
Add a new principal, and assign the required roles.
Click Save .
To configure Knowledge Catalog IAM permissions for
entry groups, click Entry groups .
For the entry group propagated from Data Catalog, click
more_vert > Permissions .
Click Add principals .
Add a new principal, and assign the required roles.
Click Save .
REST
To configure Knowledge Catalog IAM permissions for
aspect types, use the
aspectTypes.setIamPolicy
method.
To configure Knowledge Catalog IAM permissions for
entry groups, use the
entryGroups.setIamPolicy
method.
Upgrade phase
Note: Perform the tasks described in this section only if you have
Data Catalog custom metadata or programmatic workloads.
This phase involves tasks to move the active state ( read-write ) of your
Data Catalog custom metadata to Knowledge Catalog.
The following are the key points to remember during the upgrade phase:
The Knowledge Catalog Search page points to
Knowledge Catalog search by default.
You can discover and read both the Data Catalog and
Knowledge Catalog metadata in
Knowledge Catalog.
To update metadata in the Google Cloud console, you will be redirected to
its source. For example, if you're updating Data Catalog tag
templates, you will be redirected to the tag templates page in
Data Catalog.
Set the default catalog UI experience to Knowledge Catalog
Note: For a Google Cloud organization, the organization administrator must
configure this setting at the organizational level. You can also configure it
for your own project, without affecting settings for the whole organization. For
projects without an organization, the project administrator must configure this
setting for individual projects.
Setting the default catalog UI experience to Knowledge Catalog
means the following:
When you go to the Knowledge Catalog Search page in the
Google Cloud console, Knowledge Catalog search is displayed
by default. Knowledge Catalog search operates over
Knowledge Catalog and finds all your metadata content,
including content created in Knowledge Catalog and content
brought in from Data Catalog.
Data Catalog search finds only Data Catalog
content, not Knowledge Catalog content. Therefore, we
recommend using Knowledge Catalog search.
The web interface encourages you to create new resources in
Knowledge Catalog. For example, it defaults to
Create Aspect Types instead of Create Tag Templates , and
Create Entry Group (Knowledge Catalog) instead of
Create Entry Group (Data Catalog) .
Setting the default catalog UI experience to Knowledge Catalog
is typically a one-way operation. However, Knowledge Catalog lets you
revert changes in exceptional cases, for example, when you want to switch
the default Catalog UI experience back to Data Catalog.
If you revert the changes, you can't access any content created in
Knowledge Catalog, in the Data Catalog web
interface.
To set the default catalog UI experience to Knowledge Catalog,
follow these steps:
Console
In the Google Cloud console, go to the Tag templates page.
Go to Tag templates
Click Manage transition to Knowledge Catalog .
Click the Default catalog UI experience tab.
Click Set the default catalog UI experience to Knowledge Catalog .
REST
To set the default catalog UI experience to Knowledge Catalog,
use the
setConfig
method.
Upgrade Data Catalog custom metadata to Knowledge Catalog
Note: Data administrators, data stewards, or data engineers must perform this
task.
You can upgrade the Data Catalog public tag templates (that you
opted in for ) and custom entry groups to
Knowledge Catalog. Make sure that you upgrade each tag template
and custom entry group separately.
Warning: The upgrade action is irreversible. After you upgrade your existing
Data Catalog tag templates and entry groups to
Knowledge Catalog, you can't update them in
Data Catalog. However, you can delete them in
Data Catalog because it has no impact on the version upgraded
to Knowledge Catalog.
The following summarizes the upgrade process:
Effect
Transfers the active state for resources from Data Catalog to
Knowledge Catalog. After upgrade, to modify the resource
or access its current state, you must use Knowledge Catalog.
Changes to the data content and flow
Marks the resource as read-only in Data Catalog.
Marks the resource as read-write in Knowledge Catalog.
Stops simultaneous availability of this resource.
Dependencies
Upgrading a tag template also upgrades all of the tags that use that
template.
Upgrading entry groups also upgrades all of the entries within that
group.
Upgrading entries doesn't affect the upgrade status of their
tags and respective tag templates.
Before upgrade, to modify the business context of an entry (for example,
overview , contacts ), you can use both the Data Catalog API
and the Dataplex API. After upgrade, you must use only the
Dataplex API.
The following describes what operations are allowed for a custom
Data Catalog entry that is tagged, depending on the upgrade
status of the related custom entry group and tag template:
When a tag template is active in Data Catalog, you can use
that tag template to create tags. After you upgrade the tag template to
Knowledge Catalog, you can't use it to create tags in
Data Catalog.
You can create aspects using aspect types that are propagated from
Data Catalog tag templates, only after you upgrade the tag
templates.
To upgrade the Data Catalog tag templates and custom entry groups
to Knowledge Catalog, follow these steps:
Console
Make sure that at least 48 hours have passed after the opt in
and after the tag templates were made public before upgrading the Data Catalog tag templates to
Knowledge Catalog. This time is necessary for internal
processing.
In the Google Cloud console, go to the Tag templates page.
Go to Tag templates
Click Manage transition to Knowledge Catalog .
Click the Upgrade to Knowledge Catalog tab.
To upgrade Data Catalog tag templates to
Knowledge Catalog, click View aspect types and tag templates .
Select the tag templates that you want to upgrade.
Click Upgrade .
In the confirmation dialog, click Confirm .
To upgrade Data Catalog custom entry groups to
Knowledge Catalog, click View entry groups .
Select the entry groups that you want to upgrade.
Click Upgrade .
In the confirmation dialog, click Confirm .
REST
Make sure that at least 48 hours have passed after the opt in
and making the tag templates public before upgrading the Data Catalog
tag templates to Knowledge Catalog. This time is necessary for internal
processing.
Then, to upgrade Data Catalog tag templates and custom entry groups
to Knowledge Catalog, use the
tagTemplates.patch
method.
When you complete the upgrade phase, Knowledge Catalog becomes
the authoritative source for all your metadata, and you don't need to use
Data Catalog.
Note: There might be a short delay after the upgrade, before all
Data Catalog changes are reflected in
Knowledge Catalog. To verify data consistency in
time-critical workloads, we recommend verifying the
Knowledge Catalog resources against the
Data Catalog resources or the original source system before use.
Update programmatic workloads
Knowledge Catalog comes with a new
API, client libraries, Terraform modules , and Google Cloud CLI commands.
Therefore, you must update any existing workloads with programmatic usage of
Data Catalog to Knowledge Catalog.
See code samples for Knowledge Catalog .
Make sure that you align updating programmatic workloads with upgrading the
dependent resources, such as tag templates and custom entry groups. This is
necessary because upgrading moves the active ( read-write ) state of a
resource from Data Catalog to Knowledge Catalog.
The following is an example sequence of updating programmatic workloads to
interact with Knowledge Catalog, coordinated with upgrading
the dependent resources:
If your workloads can tolerate eventual consistency, move read operations
of workloads to Knowledge Catalog.
Move workloads performing tagging write operations to
Knowledge Catalog coordinated with upgrading their
corresponding tag templates.
Move workloads performing custom ingestion write operations to
Knowledge Catalog coordinated with upgrading the
respective custom entry groups.
If you need to decouple updating workloads and upgrading corresponding
resources, consider implementing logic within the workloads to route
read-write to Data Catalog or Knowledge Catalog
on the resource upgrade status. Thus, workloads will operate independently of
the related resource's upgrade status.
Note: Knowledge Catalog doesn't support managing custom entries
and aspects using Terraform. Instead, you can programmatically manage your
custom metadata at scale by using a
managed connectivity pipeline
or the
metadata import API methods .
What's next
Learn more about metadata management in Knowledge Catalog .
Learn how to search for resources in Knowledge Catalog .
Learn how to manage aspects and enrich metadata .
Learn how to manage entries and ingest custom sources .
See the Dataplex API reference .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
