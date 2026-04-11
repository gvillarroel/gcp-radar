---
title: "(Deprecated) Data Mesh concepts \_|\_ Google Cloud Cortex Framework \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/cortex/docs/datamesh-concepts
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/cortex/docs/deployment-step-four
source_metadata:
  url: https://docs.cloud.google.com/cortex/docs/datamesh-concepts
  title: "(Deprecated) Data Mesh concepts \_|\_ Google Cloud Cortex Framework \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Google Cloud Cortex Framework
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
(Deprecated) Data Mesh concepts
Warning: The Data Mesh feature within
the Google Cloud Cortex Framework is now deprecated and disabled. This change is
prompted by the evolution of Google Cloud's data management services. The Data Mesh
solution was built using Data Catalog for metadata management, which is
now being replaced by the more advanced
Dataplex Universal Catalog .
Dataplex Universal Catalog provides a unified API, enhanced metadata capabilities, and
new features for a more comprehensive data governance experience.
For existing Cortex Framework users who have implemented
the Data Mesh feature, we recommend transitioning to Dataplex Universal Catalog to
ensure continued support and access to the latest features. For a detailed
migration guide, see
Transition to Dataplex Universal Catalog .
Before diving into the detailed guide on deploying Data Mesh with
Google Cloud Cortex Framework, this page provides a foundation for how relevant Data Mesh
concepts are generally implemented within a Google Cloud product and
specifically with the Cortex Framework context. After
understanding the Data Mesh concepts, see the Data Mesh User Guide
for Cortex Framework Data Foundation.
Note: For a deeper understanding of general Data Mesh concepts, see
Build a modern, distributed Data Mesh with Google Cloud .
Dataplex Universal Catalog
The following table defines Data Mesh concepts within Dataplex Universal Catalog:
Concept
Description
Cortex Framework context
Lake
Top level unit for organizing data within
a Data Mesh. Manage Dataplex Universal Catalog - Lakes .
A data source, for example, SAP ECC , Salesforce , Google Ads .
Zone
Second level unit for organizing data
within a Lake.
Specific processing layers within a data
source, like raw versus CDC.
Dataplex Universal Catalog Asset
Reference to data that is stored in
Cloud Storage or BigQuery that is associated with a zone. This
is a reference to the data asset and not the data itself.
Reference to BigQuery
datasets registered in zones.
Label
Arbitrary key value pairs that can be
applied to lakes or zones.
Label entire lakes or zones (rather than
tables or columns) with metadata that can be viewed in Dataplex Universal Catalog or
used for custom applications.
Data Catalog
Technical business metadata that can be
used to help discover, understand, or manage data assets within a warehouse.
Annotate tables or columns (rather than
lakes or zones) with rich metadata tags that can be used in Dataplex Universal Catalog
search or custom applications.
Catalog Tag Templates
A template defining the available fields
and their types in a tag. Manage Dataplex Universal Catalog - Tag Templates
Define a set of templates for uses like
tagging data assets with lines of business.
Catalog Tag
A set of fields and their values that
contain metadata applicable to a table or column. An instance of a tag template.
Annotate a table or column with metadata
values relevant to that asset, such as a particular line of business.
Catalog Glossary
A dictionary of terms that can be defined
and associated with BigQuery columns. Manage Dataplex Universal Catalog - Glossaries .
Define terms or acronyms used in
BigQuery Assets. Note that this is planned for the future and is not supported.
Data Lineage
A graph representing BigQuery
Asset dependencies.
These are not defined by the Cortex Data
Mesh, however it is a relevant Dataplex Universal Catalog tool to help users discover
BigQuery Asset data sources.
Lineage Event
A point in time when an operation
occurred to move data between BigQuery Assets. Contains a
list of Links.
Automatically created for supported
BigQuery and Composer operations.
Lineage Link
An edge representing data flowing from a
source to target asset as part of a Lineage Event.
It can be analyzed to support use cases
beyond the lineage visualization graphs that are presented in the console.
BigQuery
The following table defines Data Mesh concepts within BigQuery:
Concept
Description
Cortex Framework context
Policy Taxonomy
A hierarchy of policy tags. Manage BigQuery - Policy Tags .
Organize related policy tags that can be
used for access control into a hierarchy with inherited permissions .
Policy Tag
A tag that is applied to specific columns
within a BigQuery table or view. Policy tags at any level in
the hierarchy can be applied. Only one policy tag can be applied to a
particular column.
Annotate columns with tags that are used
for column-level access control. Principals on the policy tag define
'Fine-Grained' or 'Unmasked' Readers who can see the raw column data.
Data Policy
Policies applied to a Policy Tag that
define how and who can view the masked column data .
Principals on the Data Policy define the
'Masked readers' who can see the masked column data. Anyone who doesn't
have masked or unmasked reader privileges won't be able to query the column.
Masking Rule
Rules applied to a Data Policy that
define how the data is masked,
for example, hashing, showing a default value, last four characters, and
others.
Applied situationally to sensitive columns.
Row Access Policy
SQL statements that define which groups
can query rows within tables based on specific column values.
Used for row-level access control when
asset and column level control is insufficient.
Cortex Data Mesh concept
The following table defines specific Data Mesh concepts within Cortex Framework:
Concept
Description
Cortex Framework context
Metadata Resource
Metadata entities that can be re-used
across multiple BigQuery assets. Examples are Lakes, Catalog
Tag Templates, and Policy Taxonomies. This is specifically the metadata and
not the data in BigQuery itself.
Defines re-usable resources to enable
consistent management of the Cortex Data Mesh.
BigQuery Asset
BigQuery table or view.
Existing Cortex BigQuery
objects that are governed with the Data Mesh.
BigQuery Asset Annotation
Metadata applied to a specific
BigQuery table or view. This includes descriptions, access policies,
and mappings to Metadata Resources.
Associate metadata with
BigQuery Assets to enable discovery and access control.
Resource Specification (spec)
A YAML file defining a Metadata Resource
or BigQuery Asset Annotation.
The full set of resource specs codifies
the Data Mesh configuration to be deployed.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
