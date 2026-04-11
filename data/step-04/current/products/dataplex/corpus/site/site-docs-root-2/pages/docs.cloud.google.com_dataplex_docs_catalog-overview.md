---
title: "About metadata management in Knowledge Catalog \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataplex/docs/catalog-overview
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataplex/docs/introduction
source_metadata:
  url: https://docs.cloud.google.com/dataplex/docs/catalog-overview
  title: "About metadata management in Knowledge Catalog \_|\_ Google Cloud Documentation"
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
About metadata management in Knowledge Catalog
Stay organized with collections
Save and categorize content based on your preferences.
Knowledge Catalog (formerly Dataplex Universal Catalog) is a fully managed service that automates the discovery and
inventory of your distributed data and AI assets. It creates a unified,
searchable knowledge base that governs data across Google Cloud and other
environments, ensuring your analytics and AI models are built on trusted,
compliant information.
Note: You can set your default catalog experience to Knowledge Catalog. If
you're using Data Catalog, transition your standalone
Data Catalog content and usage to Knowledge Catalog. For more
information, see Transition from Data Catalog to
Knowledge Catalog .
Use cases
Accelerate self-service analytics: Solves the "cold start" problem by letting
analysts find, understand, and verify data quality without waiting on
engineering support.
Govern AI & data products: Manages the lifecycle of AI models and datasets
together, ensuring downstream AI applications rely on secure, approved inputs.
Streamline compliance: Automates data lineage tracking to map how sensitive
information, including personally identifiable information (PII), flows across
your organization.
How Knowledge Catalog works
Think of Knowledge Catalog as an automated smart library for your
enterprise. Instead of manually entering, the system automatically ingests
technical metadata from your storage systems such as BigQuery.
It then lets you enrich this metadata with business context—such as data quality
scores or ownership—and organize it into logical groups. This ensures that when
users search the catalog, they find assets that are discoverable and governed by
active security policies.
Additionally, Knowledge Catalog can stream metadata changes in near
real-time using metadata change feeds. A metadata change feed sends
notifications about metadata creation, updates, or deletion to a Pub/Sub
topic that you specify. Pub/Sub is an asynchronous and scalable
messaging service. You can then use a subscriber client to subscribe to the
Pub/Sub topic to receive these notifications. You can programmatically
process metadata changes, trigger workflows, or integrate with other systems to
act on these notifications. For example, you can use these notifications to
automatically trigger data quality checks when a table schema changes. For more
information, see Metadata change
feeds .
Terminology
The metadata management features in Knowledge Catalog are based on the
following concepts:
Entry
An entry represents a data asset. This is similar to entries in
Data Catalog .
Example: A BigQuery table named
test-project.sales_data.customer_orders is represented as an entry.
A column of an entry represents a specific subsection of a data asset, such as
a single column in a BigQuery table or a field in a JSON file.
Columns let you attach metadata to individual fields within an entry, not
just the entry as a whole. You don't define columns directly; they are
created when you attach an aspect of type schema to an entry. Columns are
also called paths.
Example: To describe the email_address field within the customer_orders
entry as containing personally identifiable information (PII), you can
attach an aspect to the email_address column.
For more information about entries, see
Entries .
Entry link
An entry link establishes a relationship between two data assets
(entries) within Knowledge Catalog. Links can be symmetric
(non-directional) such as synonym , related items , or schema-join ,
or asymmetric (directional) such as definition with an explicit source and
target. Links can reference an entire entry or a specific path (for example,
a single column within a schema), except for schema-join entry link.
Example: A synonym entry link associates the business term profit as a
synonym for earnings .
For more information about entry links, see
EntryLinks .
Entry link type
An entry link type is a reusable template for entry links
that describes the meaning of the relationship between two entries. Every
entry link is an instance of an entry link type. Directionality of entry
links is defined at the entry link type level.
Example: To indicate that the data in the linked entries can be joined based
on their schema, you can use a schema-join entry link type. To explain
the meaning of columns in a table, you can use a definition entry link
type for linking between these columns and business glossary terms.
Knowledge Catalog supports the following entry link types:
synonym , related , definition , and schema-join .
Aspect
An aspect is a set of related metadata fields. You can attach an aspect to
an entry to describe the entry or entry link as a whole. Most of the metadata
is described by aspects within an entry. This is similar to tags in
Data Catalog .
However, aspects are stored within entries, or entry links, and not as standalone resources.
Example: To define all of the columns of the customer_orders entry, such
as order_id , order_date , and email_address , you can attach a schema
aspect to the customer_orders entry. To specify that the email_address
column contains an email address, you can attach a schema aspect to the
email_address column.
For more information about aspects, see
Aspects .
Entry type
An entry type is a template for creating entries. It establishes the
essential metadata elements, outlined as a list of required aspects for
entries of this type. An entry type specifies which aspect types are
required for a specific data asset.
Example: To ensure that all entries have the required metadata, you can
create an entry type called StandardOperationalTable that requires an
OwnerInfo aspect to be attached to any new entry of this type.
For more information about entry types, see Entry
types .
Aspect type
An aspect type is a reusable template for aspects. Every aspect is an
instance of an aspect type. This is similar to tag templates in
Data Catalog .
Example: To define a reusable template for contact information, you can
define an aspect type named ContactInfo with fields for owner_name ,
email , and support_team . Then, you can create ContactInfo aspects from
this template and attach them to entries or columns.
For more information about aspect types, see Aspect
types .
Entry group
An entry group is a container for entries and entry links that serves as a
unit of management for these entries and entry links. For example, use an
entry group to configure Identity and Access Management access control, project attribution,
or location for the entries and entry links in the entry group. This is
similar to entry groups in
Data Catalog .
Example: A finance team wants to manage permissions for all their tables at
once. They can create an entry group named production_finance_data and
include the entries for the customer_orders table, the quarterly_revenue
table, and the employee_salaries table in it.
For more information about entry groups, see Entry
groups .
Figure 1. Entry groups, entries, and entry links
Figure 2. Aspect types and entry types
Figure 3. Entry link with linked entries, aspects, and their types
Knowledge Catalog versus Data Catalog
Knowledge Catalog provides integrated capabilities to manage your
metadata. The metadata storage and API methods are integrated into the
Dataplex API.
The main metadata management features in Knowledge Catalog include the
following:
More robust metamodel
Typed entries. You can enforce minimal metadata standards by defining
the required metadata content for custom entries
User-configurable metamodel for custom entries, which helps to make
custom ingestion more robust and improves custom metadata consistency
and comprehensiveness.
Support for a wider variety and complexity of metadata, including
support for nesting structures such as lists, maps, and arrays.
Improved scalability, including the ability to interact with all metadata
that is associated with an entry through single atomic CRUD operations and
the ability to fetch multiple metadata annotations associated in search or
list responses.
The following table compares the metadata management features of
Knowledge Catalog and Data Catalog:
Comparison between Knowledge Catalog and Data Catalog
Feature
Knowledge Catalog
Data Catalog
Supported Google Cloud sources
All sources as described in the
Supported Google Cloud sources
section of this document.
All sources described in Entries and entry groups .
Custom sources ingestion
Ingestion into custom entries with governed structure, defined by
entry types.
Data Catalog custom entries and entry groups are made available in
Knowledge Catalog under the generic entry type.
Ingestion into generic custom entries.
Metadata enrichment
Metadata context for entries is captured using business glossaries,
aspects, and aspect types.
Entry links are supported. You can attach aspects to an entry link.
Metadata context for entries is captured using business glossaries, tags,
and tag templates.
Entry links aren't supported.
Entry links
Entry links are supported. Entry link types such as schema-join
let you attach aspects to entry links.
Not available.
Metadata change feeds
Near real-time metadata change notifications are streamed to Pub/Sub.
Not available.
Search
Search is performed over the following:
All Google Cloud sources described in
Supported Google Cloud sources
Custom entries that are created in Knowledge Catalog
Aspects that are created in Knowledge Catalog except for those
attached to the entry links.
Custom entries that are created in Data Catalog and are
brought into Knowledge Catalog
The search results include only those resources that belong to the same
organization and the same VPC Service Controls perimeter as the project under
which search is performed. When using the Google Cloud console, this is the
project that is selected in the console.
Note that, to search for entries, you need at least one of the following
IAM roles
on the project that is used for search: Dataplex Catalog Admin, Dataplex
Catalog Editor, or Dataplex Catalog Viewer. Permissions on search results are
checked independently of the selected project.
Search is performed over the following:
All Google Cloud sources described in
Entries and entry groups
Custom entries that are created in Data Catalog
Tags that are created in Data Catalog
Data lineage
Data lineage retrieves entry details for asset nodes
by using the Dataplex API.
The Google Cloud console displays attached aspects.
Data lineage retrieves entry details for asset nodes
by using the Data Catalog API.
Business glossaries
Business glossary lets you build a taxonomy for business terms, and
associate them with data assets and columns. You can use search to discover
assets linked to a term.
Business glossary lets you build a taxonomy for business terms, and
associate them with columns. You can use search to discover assets linked to
a term.
The following table describes how resources in Knowledge Catalog
correspond to Data Catalog resources:
Mapping between Knowledge Catalog and Data Catalog
resources
Knowledge Catalog resource
Data Catalog resource
Description
Aspect type ( global )
Public tag template
Tag templates are regional resources. However, you can use them to create
tags across regions. Tag templates correspond to global aspect
types in Knowledge Catalog.
Optional aspect
Public tag
Public tags in Data Catalog correspond to optional aspects in
Knowledge Catalog.
Entry group
Entry group
For Google Cloud sources, system entry groups such as @bigquery
are established per-project in Knowledge Catalog.
Custom entry required aspects
Custom entry
Data Catalog and Knowledge Catalog share
similar concepts for custom entries.
Standard entry properties are modeled as required aspects in
Knowledge Catalog.
System entry required aspects
System (Google Cloud) entry
Metadata describing built-in entities, such as Schema for
BigQuery tables, is captured in required aspects of the
system-defined aspect types.
Business glossaries
Business glossaries
Use glossaries to build a taxonomy of business terms standardizing
business context across the enterprise.
For more information about the features that are available in
Data Catalog but are not supported in Knowledge Catalog, see the
Metadata management features that aren't supported in Knowledge Catalog
section in this document.
For existing Data Catalog users
If you're already using Data Catalog, note the following:
Custom entries, overview context, glossaries, and entry groups that you
created in Data Catalog are made available in
Knowledge Catalog.
As an administrator, you can choose to make the content of
Data Catalog tag templates and tags simultaneously available in
Knowledge Catalog. For more information, see Transition from
Data Catalog to
Knowledge Catalog .
When you search for data assets in Knowledge Catalog, both the
metadata that was created in Knowledge Catalog directly and the
metadata that was brought from Data Catalog into
Knowledge Catalog are included.
When you search for data assets in Data Catalog, only the metadata
that was created in Data Catalog is included.
The entry group descriptions in Data Catalog that exceed 1024
characters are truncated to 1024 characters in Knowledge Catalog.
As an administrator, to make glossaries and associated links between
business terms and columns that you created in Data Catalog
available in Knowledge Catalog, see Migrate glossaries to
Knowledge Catalog .
For more information about how to transition your standalone
Data Catalog content and usage to Knowledge Catalog, see
Transition from Data Catalog to
Knowledge Catalog .
Map Data Catalog API methods to Knowledge Catalog
If you're migrating from Data Catalog to Knowledge Catalog, you
must update your programmatic workflows to use the Dataplex API. This
section provides a mapping between the Data Catalog API and the
Dataplex API.
For more information about the Dataplex API methods, see the
documentation for Dataplex API for REST
methods and the
documentation for Dataplex API for RPC
methods .
The following tables provide a mapping of Data Catalog API methods to
their equivalents in the Dataplex API.
Entry groups
The concept of entry groups is the same in both Knowledge Catalog and
Data Catalog.
Data Catalog API method
Dataplex API method
projects.locations.entryGroups.create (REST) CreateEntryGroup (RPC)
projects.locations.entryGroups.create (REST) CreateEntryGroup (RPC)
projects.locations.entryGroups.get (REST) GetEntryGroup (RPC)
projects.locations.entryGroups.get (REST) GetEntryGroup (RPC)
projects.locations.entryGroups.patch (REST) UpdateEntryGroup (RPC)
projects.locations.entryGroups.patch (REST) UpdateEntryGroup (RPC)
projects.locations.entryGroups.delete (REST) DeleteEntryGroup (RPC)
projects.locations.entryGroups.delete (REST) DeleteEntryGroup (RPC)
projects.locations.entryGroups.list (REST) ListEntryGroups (RPC)
projects.locations.entryGroups.list (REST) ListEntryGroups (RPC)
Entries
The concept of entries, which represent data assets, is similar in both
Knowledge Catalog and Data Catalog.
Data Catalog API method
Dataplex API method
projects.locations.entryGroups.entries.create (REST) CreateEntry (RPC)
projects.locations.entryGroups.entries.create (REST) CreateEntry (RPC)
projects.locations.entryGroups.entries.get (REST) GetEntry (RPC)
projects.locations.entryGroups.entries.get (REST) GetEntry (RPC)
projects.locations.entryGroups.entries.patch (REST) UpdateEntry (RPC)
projects.locations.entryGroups.entries.patch (REST) UpdateEntry (RPC)
Note: You can also use the projects.locations.modifyEntry (REST) and ModifyEntry (RPC) methods to update system entries using source-system permissions instead of Knowledge Catalog permissions.
projects.locations.entryGroups.entries.delete (REST) DeleteEntry (RPC)
projects.locations.entryGroups.entries.delete (REST) DeleteEntry (RPC)
projects.locations.entryGroups.entries.list (REST) ListEntries (RPC)
projects.locations.entryGroups.entries.list (REST) ListEntries (RPC)
entries.lookup (REST) LookupEntry (RPC)
projects.locations.lookupEntry (REST) LookupEntry (RPC)
Note: To use the projects.locations.lookupEntry (REST) and LookupEntry (RPC) methods, you must provide the Knowledge Catalog entry name. To translate a BigQuery SQL name, fully qualified name, or linked resource name to a Knowledge Catalog entry name, first call the projects.locations.searchEntries (REST) or SearchEntries (RPC) method.
projects.locations.entryGroups.entries.modifyEntryContacts (REST) ModifyEntryContacts (RPC)
projects.locations.entryGroups.entries.patch (REST) UpdateEntry (RPC)
Note: When you migrate from the Data Catalog entries.modifyEntryContacts method, use update_mask to modify only the contacts aspect.
projects.locations.entryGroups.entries.modifyEntryOverview (REST) ModifyEntryOverview (RPC)
projects.locations.entryGroups.entries.patch (REST) UpdateEntry (RPC)
Note: When you migrate from the Data Catalog entries.modifyEntryOverview method, use update_mask to modify only the overview aspect.
projects.locations.entryGroups.entries.tags.reconcile (REST) ReconcileTags (RPC)
projects.locations.metadataJobs.create (REST) CreateMetadataJob (RPC), projects.locations.entryGroups.entries.patch (REST) UpdateEntry (RPC)
Note: When you migrate from the Data Catalog projects.locations.entryGroups.entries.reconcileTags method, use the projects.locations.metadataJobs.create (REST) or CreateMetadataJob (RPC) method with the import job type to import Catalog content for multiple entries. To update all aspects for a single entry, use the projects.locations.entryGroups.entries.patch (REST) or UpdateEntry (RPC) method.
catalog.search (REST) SearchCatalog (RPC)
projects.locations.searchEntries (REST) SearchEntries (RPC)
Note: The Knowledge Catalog projects.locations.searchEntries (REST) and SearchEntries (RPC) methods don't support searching across multiple organizations. You must issue separate API calls for each of your organizations.
Tag templates and tags
In Knowledge Catalog, aspect types are the successor to
Data Catalog tag templates, and aspects are the successor to
Data Catalog tags.
Data Catalog API method
Dataplex API method
projects.locations.tagTemplates.create (REST) CreateTagTemplate (RPC)
projects.locations.aspectTypes.create (REST) CreateAspectType (RPC)
projects.locations.tagTemplates.get (REST) GetTagTemplate (RPC)
projects.locations.aspectTypes.get (REST) GetAspectType (RPC)
projects.locations.tagTemplates.patch (REST) UpdateTagTemplate (RPC)
projects.locations.aspectTypes.patch (REST) UpdateAspectType (RPC)
projects.locations.tagTemplates.delete (REST) DeleteTagTemplate (RPC)
projects.locations.aspectTypes.delete (REST) DeleteAspectType (RPC)
catalog.search (REST) with type=tag_template predicate SearchCatalog (RPC) with type=tag_template predicate
projects.locations.aspectTypes.list (REST) ListAspectTypes (RPC)
Tag template fields
Tag template fields correspond to the contents of the metadata_template field
in an aspect type. To migrate a Data Catalog field-level operation, use
the UpdateAspectType operation with the corresponding payload in
Knowledge Catalog.
Data Catalog API method
Dataplex API method
projects.locations.tagTemplates.fields.create (REST) CreateTagTemplateField (RPC)
projects.locations.aspectTypes.patch (REST) UpdateAspectType (RPC)
projects.locations.tagTemplates.fields.patch (REST) UpdateTagTemplateField (RPC)
projects.locations.aspectTypes.patch (REST) UpdateAspectType (RPC)
projects.locations.tagTemplates.fields.rename (REST) RenameTagTemplateField (RPC)
projects.locations.aspectTypes.patch (REST) UpdateAspectType (RPC)
projects.locations.tagTemplates.fields.delete (REST) DeleteTagTemplateField (RPC)
projects.locations.aspectTypes.patch (REST) UpdateAspectType (RPC)
Tag template field enum values
Similar to tag template fields, you can edit enum values in the Dataplex API
by modifying the metadata_template field in the corresponding aspect type.
Data Catalog API method
Dataplex API method
projects.locations.tagTemplates.fields.enumValues.rename (REST) RenameTagTemplateFieldEnumValue (RPC)
projects.locations.aspectTypes.patch (REST) UpdateAspectType (RPC)
Tags
Aspects are the successor to Data Catalog tags. Aspects are not
standalone resources and are encapsulated in their parent entries. The
field_mask parameter can be used to selectively update a single aspect on an
entry.
Data Catalog API method
Dataplex API method
projects.locations.entryGroups.entries.tags.create (REST) CreateTag (RPC)
projects.locations.entryGroups.entries.patch (REST) UpdateEntry (RPC)
projects.locations.entryGroups.entries.tags.list (REST) ListTags (RPC)
projects.locations.entryGroups.entries.get (REST) GetEntry (RPC)
Note: To limit the response to only the required aspects, use the views , aspect_types , and paths parameters.
projects.locations.entryGroups.entries.tags.patch (REST) UpdateTag (RPC)
projects.locations.entryGroups.entries.patch (REST) UpdateEntry (RPC)
projects.locations.entryGroups.entries.tags.delete (REST) DeleteTag (RPC)
projects.locations.entryGroups.entries.patch (REST) UpdateEntry (RPC)
Policy tags and taxonomies
These APIs are not changing and therefore don't need to be migrated.
Supported sources
Automatic discovery of Cloud Storage data
Metadata from the following Google Cloud sources is automatically ingested
into Knowledge Catalog:
BigQuery sharing (formerly Analytics Hub) exchanges and listings
BigQuery datasets, tables, views, models, routines,
connections, and linked datasets
Bigtable instances, clusters, and tables (including column
family details)
Dataform repositories and code assets
Dataproc Metastore services, databases, and tables
Looker (Google Cloud core) instances, dashboards, dashboard elements, Looks, LookML projects, models, Explores, and views ( Preview )
Pub/Sub topics
Spanner instances, databases, tables, and views
Vertex AI models, datasets, feature groups, feature views, and
online store instances
If Knowledge Catalog integration is enabled, then metadata from the
following Google Cloud sources is automatically ingested into
Knowledge Catalog:
AlloyDB for PostgreSQL clusters, instances, databases, schemas, tables,
views—see
Enable the AlloyDB for PostgreSQL integration
( Preview )
Cloud SQL instances, databases, schemas, tables, views—see
Enable the Cloud SQL integration
To import metadata from a third-party source into Knowledge Catalog, you
can use a managed connectivity pipeline. For more information, see Managed
connectivity overview .
Project and location constraints
Catalog resources in Knowledge Catalog are housed within various projects
and locations. The following limitations apply:
Location:
Entries:
The location of an entry must either match the location of the entry
type, or the entry type must be global .
An aspect added to an entry must be based on an aspect type that is
stored in the same location as the entry or the aspect type must be
global .
An entry type must be composed of aspect types that are stored in the
same location as the entry type.
Entry links:
The location of an entry link must either match the location of the
entry link type, or the entry link type must be global .
An aspect added to an entry link must be based on an aspect type
that is stored in the same location as the entry link or the aspect
type must be global .
An entry link type must be composed of aspect types that are stored
in the same location as the entry link type.
Project:
If an entry type references custom aspect types, then the aspect types
must be in the same location and project as the entry type.
Metadata management features that aren't supported in Knowledge Catalog
The following features that are available in Data Catalog are not
supported in Knowledge Catalog:
The concept of private aspects and private aspect types (counterparts to
private tags and private tag templates in Data Catalog)
doesn't exist in Knowledge Catalog.
Search for policy tags isn't supported in Knowledge Catalog search;
consequently, the predicates policytag and policytagid don't work in the
Knowledge Catalog search.
When you bring Data Catalog custom entry groups, custom entries,
tag templates, and tags into Knowledge Catalog, their original
permissions don't carry over. You must explicitly configure
IAM permissions for the copied metadata before using it.
Sending Sensitive Data Protection inspection results directly to the
catalog in Knowledge Catalog isn't supported. Instead, you can send
Sensitive Data Protection inspection results to
Data Catalog ,
and then transition the results to
Knowledge Catalog .
You can't list entry types, entry link types, and aspect types across
projects using the API. You can scope the list request to a project only.
Registering lakes, zones, assets, and entities as Knowledge Catalog
entries isn't supported. This means that Data Catalog
metadata that is attached to lakes, zones, assets, and entities doesn't
carry over to the catalog in Knowledge Catalog. In addition, when
using Knowledge Catalog search, searching for zones and entities isn't
supported, and filtering by lakes and zones isn't supported. You can use
lakes and zones independently from the catalog in Knowledge Catalog.
Administrator search, which ensures full recall, isn't supported. Instead,
you can export metadata to
Cloud Storage and then query it from BigQuery.
For a comparison of features and resources that are supported in both
Knowledge Catalog and Data Catalog, see the
Knowledge Catalog versus
Data Catalog section in this
document.
Pricing
Knowledge Catalog uses the metadata storage SKU to charge for metadata storage.
For more information, see Knowledge Catalog
pricing .
There are no charges to use the following:
Creating and managing catalog resources in Knowledge Catalog
Search API calls for Knowledge Catalog
Search queries performed on the Knowledge Catalog page in the
Google Cloud console
What's next
Learn how to search for resources in
Knowledge Catalog .
Learn how to manage aspects and enrich
metadata .
Learn how to manage entries and ingest custom
sources .
Learn more about transitioning from Data Catalog to
Knowledge Catalog .
Learn more about transitioning glossaries to
Knowledge Catalog .
Follow the codelab: Build the data foundation with Knowledge Catalog metadata .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
