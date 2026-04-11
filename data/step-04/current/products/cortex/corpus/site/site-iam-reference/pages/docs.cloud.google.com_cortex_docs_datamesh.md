---
title: "(Deprecated) Data Mesh User Guide \_|\_ Google Cloud Cortex Framework \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/cortex/docs/datamesh
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/cortex/docs/deployment-step-four
source_metadata:
  url: https://docs.cloud.google.com/cortex/docs/datamesh
  title: "(Deprecated) Data Mesh User Guide \_|\_ Google Cloud Cortex Framework \_\
    |\_ Google Cloud Documentation"
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
(Deprecated) Data Mesh User Guide
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
Data Mesh for Cortex Framework extends the data foundation to enable
data governance, discoverability, and access control through BigQuery
metadata and Dataplex Universal Catalog . This is
implemented by providing a base set of metadata resources and
BigQuery asset annotations that can be customized and
optionally deployed alongside the data foundation. These base specifications
provide a customized configuration that are the metadata foundation
to complement Cortex Framework Data Foundation. See Data Mesh concepts before proceeding with this guide.
The steps outlined in this page are specifically designed for configuring
Data Mesh for Cortex Framework. Find the Data Mesh configuration files
within the folders specific to each workload in the Data Mesh directories section .
Warning: This Data Mesh guide might change over time. Reach
out to the Cortex team for any
feedback or issue related.
Figure 1 . Data Mesh architecture for Cortex Framework.
Design
Cortex's Data Mesh is designed similarly to the overall data foundation and
consists of three phases with different subcomponents managed by Cortex or users:
Base resource specs update : With each release, Cortex updates the base
resource specifications, providing a standardized metadata foundation for the Data Mesh.
Resource specs Customization : Before deployment, users can tailor the
resource specifications to align with their specific use cases and requirements.
Data Mesh Deployment and updates: Users can enable the Data Mesh in the
Cortex config file. It's deployed after the data assets during the Cortex
deployment. Additionally, users have the flexibility to deploy the Data Mesh
independently for further updates.
Figure 2 . Data Mesh design for Cortex Framework.
Data Mesh directories
Find the Data Mesh base configuration files for each workload and data source
in the following locations. Consider that directories contain different file
structure, but all specs are similarly located under the config
folder.
Workload
Data source
Directory path
Operational
SAP ECC
src/SAP/SAP_REPORTING/config/ecc
SAP S/4 HANA
src/SAP/SAP_REPORTING/config/s4
Salesforce Sales Cloud (SFDC)
src/SFDC/config
Oracle EBS
src/OracleEBS/config
Marketing
CM360
src/marketing/src/CM360/config
Google Ads
src/marketing/src/GoogleAds/config
Meta
src/marketing/src/Meta/config
Salesforce Marketing Cloud (SFMC)
src/marketing/src/SFMC/config
TikTok
src/marketing/src/TikTok/config
YouTube (with DV360)
src/marketing/src/DV360/config
Google Analytics 4
src/marketing/src/GA4/config
Note: Data Mesh doesn't support LiveRamp, or Dun & Bradstreet (ESG) data.
Metadata resources
are defined at the data source level with a
single YAML file per Google Cloud project and contain a list of all the resources.
Users can extend the existing file or create additional YAML files containing
additional resource specs within that directory if needed.
Asset Annotations are defined at the
asset level and contain many YAML files in the directory with a single
annotation per file.
Enable APIs and verify permissions
Modifying default values for Data Mesh lets you implement features beyond
descriptions. If you need to modify default values for Data Mesh in
config.json
for implementing features beyond descriptions, ensure that the necessary
APIs and confirm permissions are set as outlined in the following table.
When deploying Data Mesh with the data foundation, grant permissions to the
deploying user or the Cloud Build account. If the deployment involves
different source and target projects, ensure that these APIs and permissions
are enabled in both projects wherever those features are employed.
Feature
Permission roles
Documentation
BigQuery asset and row access
BigQuery Data Owner
For more information, see Required roles for the asset roles, and Required permissions for row roles.
BigQuery column access
Policy Tag Admin
For more information, see Roles used with column-level access control and
Restrict access with column-level access control documentation.
Catalog Tags
Data Catalog TagTemplate Owner
For more information, see Tag a BigQuery table by using Data Catalog and Data Catalog IAM documentation.
Dataplex Universal Catalog Lakes
Dataplex Editor
For more information, see Create a lake documentation.
Note: Cortex Data Mesh doesn't require the integration of Managed Service for Apache Spark
and Managed Service for Apache Spark Metastore APIs.
Understanding the base resource specs
The primary interface for configuring the Data Mesh for Cortex is through
the base resource specs , which are a set of YAML files provided out of the
box that define the metadata resources and annotations that are deployed.
The base specs provide initial recommendations and syntax examples,
but are intended to be customized further to suit user needs. These specs fall
into two categories:
Metadata Resources that can be applied across various data assets. For example,
Catalog Tag Templates that define how assets can be tagged with business domains.
Annotations that specify how the metadata resources are applied to a
particular data asset. For example, a Catalog Tag that associates a specific
table to the Sales domain.
The following sections guide you through basic examples of each spec
type and explain how to customize them. The base specs are tagged with
## CORTEX-CUSTOMER where they should be modified to fit a deployment if the
associated deployment option is enabled.
For advanced uses, see the canonical
definition of these spec schemas in src/common/data_mesh/src/data_mesh_types.py .
Metadata resources
The metadata resources are shared entities that exist within a project that
can be applied to many data assets. Most of the specs include a display_name
field subject to the following criteria:
Contains only unicode letters, numbers (0-9), underscores (_), dashes (-), and spaces ( ).
Can't start or end with spaces.
Maximum length of 200 characters.
In some cases the display_name is also used as an ID, which might introduce
additional requirements. In those cases links to canonical documentation are
included.
If the deployment references metadata resources in different source and
target projects, there must be a spec defined for each project. For example,
Cortex Salesforce (SFDC)
contains two Lake specs. One for the raw and CDC zones, and another for reporting.
Dataplex Universal Catalog Lakes
Dataplex Universal Catalog Lakes, Zones, and Assets are used to organize the data from
an engineering perspective. Lakes have a region and zones have a
location_type , both of these are related to the Cortex location
( config.json > location ). The Cortex location defines where the BigQuery
Datasets are stored and can be a single or multi-region. The zone
location_type should be set to SINGLE_REGION | MULTI_REGION to match that.
However Lake regions must always be a single region. If the Cortex location
and zone location_type are multi-region, select a single region within that
group for the Lake region.
Requirements
The lake display_name is used as the lake_id and must comply with
official requirements . This is also the case with the zone and asset display_name . Zone IDs must be unique across all Lakes in the project.
Lake specs must be associated with a single region.
The asset_name should match the ID of the BigQuery dataset,
but the display_name can be a more user-friendly label.
Limitations
Dataplex Universal Catalog only supports registration of BigQuery
datasets rather than individual tables as Dataplex Universal Catalog assets.
An asset might only be registered in a single zone.
Dataplex Universal Catalog is only supported in certain locations. For more
information, see Dataplex Universal Catalog locations .
See the following example in
lakes.yaml .
These resources are defined in YAML files that specify
data_mesh_types.Lakes .
Catalog Tag Templates
Data Catalog Tag Templates can be used to add context to
BigQuery tables or individual columns. They help you categorize
and understand your data from both a technical and business perspective in
a way that is integrated with Dataplex Universal Catalog search tooling. They define the
specific fields you can use to label your data and the type of
information each field can hold (for example, text, number, date).
Catalog Tags are instances of the templates with actual field values.
Template field display_name is used as the field ID and must follow the
requirements for TagTemplate.fields specified in
Class TagTemplate .
For more information about supported field types, See Data Catalog field types .
Cortex Data Mesh creates all tag templates as publicly readable. It also
introduces an additional level concept to tag template specs, which defines
whether a tag should be applied to an entire asset, individual fields within an
asset, or both, with the possible values: ASSET | FIELD | ANY . While this
isn't strictly enforced now, future validation checks might ensure tags
are applied at the appropriate level during deployment.
See the following
example .
Templates are defined in YAML files that specify
data_mesh_types.CatalogTagTemplates .
Catalog Tags are instances of the templates, and are discussed
below within the Asset Annotations.
Asset and Column Level Access Control with Tag Templates
Cortex Framework provides the ability to enable asset
or column level
access control on all artifacts that are associated with a Catalog Tag Template.
For example, if users would like to grant access to assets based on line of
business, they can create asset_policies for the line_of_business Catalog
Tag Template with different principals specified for each business domain.
Each policy accepts filters that can be used to only match tags with specific
values. In this case we could match the domain values. Note that these
filters only support matching for equality and no other operators. If
multiple filters are listed, the results must satisfy all filters
(for example, filter_a AND filter_b ). The final set of asset policies is
the union of those defined directly in the annotations, and those from the
template policies.
Column level access control with Catalog Tags behaves similarly by applying
Policy Tags on matching
fields. However, because only one Policy Tag can be applied to a column, the
precedence is:
Direct Policy Tag: If a Policy Tag is defined directly on the column
annotation, it takes priority.
Matching Tag Template Policy : Otherwise, access is determined by the
first matching policy defined on a field within the associated Catalog Tag Template.
When using this feature, we strongly recommended to enable or disable the
deployment of Catalog Tags and Access Control Lists (ACLs)
together. This ensures the ACLs are properly deployed.
To understand the specs for this advanced feature, see the definitions of
asset_policies and field_policies parameters in data_mesh_types.CatalogTagTemplate .
Catalog Glossary
The glossary is a tool that can be used to provide a dictionary of terms
used by specific columns within data assets that might not be universally
understood. Users can add terms manually in the console, but there isn't
support through the resource specs.
Policy Taxonomies and Tags
Policy taxonomies and tags allow column level access control over
sensitive data assets in a standardized way. For example, there could be a
taxonomy for tags controlling PII data on a particular line of business, where
only certain groups can read masked data, unmasked data, or have no read
access at all.
For more details about the policy taxonomies and tags, see the Column data masking intro documentation. The following sections are
particularly relevant:
Roles interact
Authorization inheritance
Masking rules and hierarchy
Policy tag best practices
Cortex Framework provides sample policy tags to demonstrate how they are
specified and potential uses, however resources that affect access control are not
enabled in the Data Mesh deployment by default.
See the following
example .
Policy Taxonomies are defined in YAML files that specify
data_mesh_types.PolicyTaxonomies .
Asset Annotations
Annotations specify metadata applicable to a particular asset and may
reference the shared metadata resources that were defined. Annotations include:
Asset descriptions
Field descriptions
Catalog Tags
Asset, row, and column level access control
Note: If you modify an annotation file, consider that the console only renders new
lines in descriptions as a whitespace.
Cortex Framework Data foundation offers pre-configured annotations
(descriptions) for the following workloads.
SAP ECC (raw, CDC, and reporting)
SAP S4 HANA (raw, CDC, and reporting)
SFDC (reporting only)
Oracle EBS (reporting only)
CM360 (reporting only)
Google Ads (reporting only)
Meta (reporting only)
SFMC (reporting only)
TikTok (reporting only)
YouTube (with DV360) (reporting only)
Google Analytics 4 (reporting only)
See the following
example .
Annotations are defined in YAML files that specify
data_mesh_types.BqAssetAnnotation .
Catalog Tags
Catalog Tags are instances of the defined templates
where field values are assigned that apply to the specific asset. Be sure to assign values that match the field types declared in the associated template.
TIMESTAMP values should be in one of the following formats :
"%Y-%m-%d %H:%M:%S%z"
"%Y-%m-%d %H:%M:%S"
"%Y-%m-%d"
See the following
example .
See Spec definition in
data_mesh_types.CatalogTag .
Specifying Access Policy Readers and Principals
Control access to your BigQuery data in Cortex Framework
using access policies. These policies define who (principals) can access
specific data assets, rows within an asset, or even individual columns.
Principals must follow a specific format defined by IAM Policy Binding member .
Asset Level Access
You can grant access to entire BigQuery assets with
various permissions:
READER : View data in the asset.
WRITER : Modify and add data to the asset.
OWNER : Full control over the asset, including managing access.
These permissions are equivalent to the GRANT DCL statement in SQL.
Unlike the behavior for most resources and annotations, the
overwrite flag doesn't remove existing
principals with the OWNERS role.
When adding new owners with overwrite enabled, they are only appended to the
existing owners. This is a safeguard to prevent unintended loss of access.
To remove asset owners, use the console. Overwriting removes existing
principals with the READER or WRITER role.
See the following
example .
See Spec definition in
data_mesh_types.BqAssetPolicy .
Row Level Access
You can grant access on sets of rows based on certain column value filters.
When specifying the row access policy, the provided filter string will be inserted into a
CREATE DDL statement . If the overwrite flag is enabled, it drops all existing row access policies
before applying new ones.
Consider the following about Row Level Access:
Adding any row access policies means that any users not specified in
those policies wouldn't have access to see any rows.
Row policies only works with tables, not views.
Avoid using partitioned columns in your row access policy filters. See the
associated reporting settings YAML file for information on the asset type and
partitioned columns.
For more information about row level access policies, see
row level security best practices .
See the following
example .
See Spec definition in
data_mesh_types.BqRowPolicy .
Column Level Access
To enable column level access, annotate individual fields with a Policy Tag identified by the Policy Tag name and
Taxonomy name. Update the policy tag metadata resource to configure access control.
See the following
example .
See Spec definition in
data_mesh_types.PolicyTagId .
Deploying the Data Mesh
The Data Mesh can either be deployed as part of the data foundation deployment,
or on its own. In either case, it uses the Cortex config.json
file to determine relevant variables, such as BigQuery dataset names
and deployment options. By default, deploying the Data Mesh won't remove
or overwrite any existing resources or annotations to prevent any unintentional
losses. However, there is also an ability to overwrite
existing resources when deployed on its own.
Deployment Options
The following deployment options can be enabled or disabled based on the user's
needs and spend constraints in config.json > DataMesh .
Note: We highly recommended that access control is done solely through these
resource specs if deployACLs is enabled. This prevents unintentional
addition or removal of access.
Option
Notes
deployDescriptions
This is the only option enabled by
default and it deploys BigQuery annotations with asset
and column descriptions. It doesn't require enabling any additional APIs or
permissions.
deployLakes
Deploys Lakes and Zones.
deployCatalog
Deploys Catalog Template resources
and their associated Tags in asset annotations.
deployACLs
Deploys Policy Taxonomy resources
and asset, row, and column level access control policies through asset
annotations. The logs contain messages indicating how the access
policies have changed.
Deploying with the Data Foundation
By default, config.json > deployDataMesh enables deploying the
Data Mesh asset descriptions at the end of each workload build step. This
default configuration doesn't require enabling any additional APIs or roles.
Additional features of the Data Mesh can be deployed with the data foundation
by enabling the deployment options, the required APIs and roles, and
modifying the associated resource specs.
Deploying alone
To deploy the Data mesh alone, users can use the common/data_mesh/deploy_data_mesh.py
file. This utility is used during the build processes to deploy the data mesh
one workload at a time, but when called directly it might also be used to
deploy multiple workloads at once. The workloads for the specs to be
deployed should be enabled in config.json file. For example, ensure that
deploySAP=true if deploying the Data Mesh for SAP.
To ensure that you are deploying with required packages and versions, you can
run the utility from the same image used by the Cortex deployment process
with the following commands:
# Run container interactively
docker container run -it gcr.io/kittycorn-public/deploy-kittycorn:v2.0
# Clone the repo
git clone https://github.com/GoogleCloudPlatform/cortex-data-foundation
# Navigate into the repo
cd cortex-data-foundation
For help with the available parameters and their usage, run the following command:
python src/common/data_mesh/deploy_data_mesh.py -h
The following is an example for invocation for SAP ECC:
python src/common/data_mesh/deploy_data_mesh.py \
--config-file config/config.json \
--lake-directories \
src/SAP/SAP_REPORTING/config/ecc/lakes \
--tag-template-directories \
src/SAP/SAP_REPORTING/config/ecc/tag_templates \
--policy-directories \
src/SAP/SAP_REPORTING/config/ecc/policy_taxonomies \
--annotation-directories \
src/SAP/SAP_REPORTING/config/ecc/annotations
See the Data Mesh directories
section for information about directory locations.
Overwrite
Warning: Read this section thoroughly before using the overwrite option.
By default, deploying Data Mesh won't overwrite any existing resources or
annotations. However, the --overwrite flag can be enabled when deploying the
Data Mesh alone to change the deployment in the following ways.
Overwriting metadata resources like Lakes, Catalog Tag Templates, and Policy
Tags delete any existing resources that share the same names, however it
won't modify existing resources with different names. This means that
if a resource spec is removed entirely from the YAML file and then the Data
Mesh is redeployed with overwrite enabled, that resource spec won't be deleted
because there won't be name collision. This is so the Cortex Data Mesh
deployment doesn't impact existing resources that might be in use.
For nested resources like Lakes and Zones, overwriting a resource
removes all of its children. For example overwriting a Lake also
removes its existing zones and asset references. For Catalog Tag Templates and
Policy Tags that are overwritten, the existing associated annotation references
are removed from the assets as well. Overwriting Catalog Tags on an
asset annotation only overwrites existing instances of Catalog Tags that
share the same template.
Asset and field description overwrites only take effect if there is a
valid non-empty new description provided that conflicts with the existing
description.
On the other hand, ACLs behave differently. Overwriting ACLs remove
all existing principals (with the exception of asset level owners). This is
because the principals being omitted from access policies are equally
important to principals being granted access.
Exploring the Data Mesh
After deploying the Data Mesh, users can
search and view the data assets with Data Catalog .
This includes the ability to discover assets based on Catalog Tag values that
were applied. Users can also manually create and apply Catalog Glossary
terms if needed.
Access policies that were deployed can be viewed on the
BigQuery Schema page to see the policies applied on a
particular asset at each level.
Data Lineage
Users might find it useful to enable
and visualize the lineage between BigQuery assets. Lineage can
also be accessed programmatically through the API .
Data Lineage only supports asset level lineage. Data Lineage is not
intertwined with the Cortex Data Mesh, however new features might be
introduced in the future that utilize Lineage.
For any Cortex Data Mesh or Cortex Framework requests, go to the
support section.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
