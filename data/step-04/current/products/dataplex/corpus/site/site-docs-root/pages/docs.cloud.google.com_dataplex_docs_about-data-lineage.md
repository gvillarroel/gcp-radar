---
title: "About data lineage \_|\_ Knowledge Catalog \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataplex/docs/about-data-lineage
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/dataplex/docs
source_metadata:
  url: https://docs.cloud.google.com/dataplex/docs/about-data-lineage
  title: "About data lineage \_|\_ Knowledge Catalog \_|\_ Google Cloud Documentation"
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
About data lineage
Stay organized with collections
Save and categorize content based on your preferences.
Data lineage is a visual map that tracks the entire lifecycle of your data. It
shows you where your data comes from (the origin), where it travels (the
destinations), and all the changes or transformations that happen along the way.
You can view this complete map of your data's journey directly in the
Google Cloud console for assets created in products such as
Knowledge Catalog (formerly Dataplex Universal Catalog), BigQuery, and Vertex AI.
Advanced users can also retrieve this information by using the
Data Lineage API.
Why you need data lineage
Modern companies move and change large amounts of data constantly. For example,
transforming raw customer purchases into reports, dashboards, and machine
learning models. This complexity creates critical challenges for your team:
Trust and verification: Data users often struggle to confirm that the reports
and numbers they see are accurate and come from a trusted source.
Troubleshooting: When an error appears in a final report, data teams might
find it difficult and time-consuming to trace the issue back through every
step to its root cause.
Change management: Before changing or deleting a piece of data (like a column
in a table), teams need to know every single downstream report or model that
relies on it to avoid breaking critical systems.
Compliance: Leaders need visibility into how sensitive data (like customer or
financial information) is used across the organization to meet regulatory
requirements.
Data lineage solves these problems by providing a clear, visual, and documented
journey of your data. This lets you quickly understand data sources, trace
errors, assess the impact of changes, and maintain compliance.
Data lineage workflow
The data lineage workflow includes the following steps:
Data sources and ingestion : lineage information from your data sources
initiates the entire process. For more information, see
Lineage sources .
Google Cloud services: when the Data Lineage API is enabled,
supported services such as BigQuery and
Dataflow automatically report lineage events whenever
data is moved or transformed.
Custom sources: for any systems not automatically supported by
Google Cloud integrations, you can use the Data Lineage API
to manually record lineage information. We recommend importing events
formatted according to the OpenLineage standard .
Lineage platform : this central platform ingests, models, and stores all
lineage data. For more information, see
Lineage information model and granularity .
Data Lineage API: this API acts as the single entry point for all
incoming lineage information. It uses a hierarchical data model
consisting of three core concepts: process, run, and event.
Processing and storage: the platform processes incoming data and stores
it in reliable, query-optimized databases.
User experience : you can interact with the stored lineage information in
two primary ways:
Visual exploration: in the Google Cloud console, a frontend service
fetches and renders the lineage data as an interactive graph or list. This
is supported for Knowledge Catalog, BigQuery, and
Vertex AI (for models, datasets, feature store views, and feature
groups). This is ideal for visually exploring your data's journey. For
more information, see
Lineage views in the Google Cloud console .
Programmatic access: using an API client, you can directly communicate
with the Data Lineage API to automate lineage management. This lets
you write lineage information from custom sources. It also lets you read and
query the stored lineage data for use in other applications or for building
custom reports.
Lineage sources
You can populate lineage information in Knowledge Catalog in the following ways:
Automatically from integrated Google Cloud services
Manually, by using the Data Lineage API for custom sources
By importing events from OpenLineage
BigQuery
When you enable data lineage in your BigQuery project,
Knowledge Catalog automatically records lineage information for the following:
Note: Data lineage is automatically recorded only for
BigQuery tables and views.
New tables created as a result of the following BigQuery jobs:
Copy jobs
Load jobs that use a
Cloud Storage URI
Query jobs that use the following data
definition language (DDL) in GoogleSQL:
CREATE TABLE
CREATE TABLE AS SELECT
CREATE TABLE COPY
CREATE TABLE CLONE
CREATE TABLE FUNCTION
CREATE TABLE LIKE
CREATE VIEW
CREATE MATERIALIZED VIEW
Existing tables when you use the following data manipulation
language (DML) statements in GoogleSQL:
SELECT
in relation to any of the listed table types:
BigQuery Views
BigQuery Materialized Views
BigQuery External Tables
INSERT SELECT
MERGE
UPDATE
DELETE
Note: Data lineage doesn't automatically record lineage information
for recurring load jobs from the BigQuery Data Transfer Service .
BigQuery copy, query, and load jobs are represented
as processes .
To view the process details, on the lineage graph, click the Process details icon .
Each process contains the BigQuery job_id
in the attributes
list for the most recent BigQuery job.
Note: BigQuery lineage appears within 24 hours after the
BigQuery job completes.
Other services
Data lineage supports integration with the following
Google Cloud services:
Cloud Composer
Cloud Data Fusion
Dataflow
Managed Service for Apache Spark for Apache Spark
Managed Service for Apache Spark for Apache Hive
Managed Service for Apache Spark Managed Service for Apache Spark
Looker (Google Cloud core) ( Preview )
Vertex AI
Vertex AI Feature Store
Data lineage for custom data sources
You can use the Data Lineage API
to manually record lineage information for any data source
that integrated systems don't support.
Knowledge Catalog can create lineage graphs for manually recorded
lineage if you use a
fullyQualifiedName that matches the fully
qualified names of existing Knowledge Catalog entries. If you want to record
lineage for a custom data source, you must first create a
custom entry .
Each process for a custom data source can contain a sql key in the attributes
list. The value of this key is used to render a code highlight in the details
panel of the data lineage graph. The SQL statement is displayed as it was
provided. You are responsible for filtering out sensitive information. The
key name sql is case-sensitive.
OpenLineage
If you already use OpenLineage to collect lineage information from other
data sources, you can import OpenLineage events into Knowledge Catalog and
view these events in the Google Cloud console. For more information, see
Integrate with OpenLineage .
Automated data lineage tracking
When you enable the Data Lineage API, Google Cloud systems that support
data lineage start reporting their data movement.
Each integrated system can submit lineage information for
a different range of data sources.
Caution: Data lineage is enabled on a per-project basis, not a
per-service basis.
After you enable the Data Lineage API, lineage information is automatically
reported for multiple Google Cloud services in the project, depending on their
product-level lineage control.
For more details, see Data lineage considerations .
Control lineage ingestion
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
You can control which Google Cloud services generate lineage data by enabling or
disabling lineage ingestion for specific integrations. You can control lineage
ingestion at the organization, folder, and project levels. During preview, this
feature supports configuring lineage ingestion only for Managed Service for Apache Spark. If
you disable lineage ingestion for Managed Service for Apache Spark, it also disables lineage
ingestion for Managed Service for Apache Spark Managed Service for Apache Spark.
Knowledge Catalog evaluates the resource hierarchy (project, then folders, then
organization) to determine the effective configuration. The first configuration
explicitly set at any level in this upward traversal takes effect.
If you set a configuration at the project level, Knowledge Catalog uses it.
If no configuration is set at the project level, Knowledge Catalog uses the
configuration from the nearest parent folder with an explicit configuration.
If no configuration is set at the project or folder level, Knowledge Catalog
uses the organization-level configuration.
If no configuration is set at any of these levels, Knowledge Catalog uses
the system default for the integration. The default for lineage enablement
configuration can be Enabled or Disabled . For Managed Service for Apache Spark,
lineage ingestion is Enabled by default where the Data Lineage API
is active.
For example, consider an organization test-org with the following
Managed Service for Apache Spark lineage configurations:
Organization test-org : Enabled
Folder folder-a : Disabled
Project project-a : No configuration set
Folder folder-b : Enabled
Project project-b : Disabled
In this scenario, the following settings are applicable:
For project-a , lineage ingestion is Disabled .
Knowledge Catalog starts evaluating from project-a , finds no
configuration, moves up to folder-a , and applies the
Disabled configuration from folder-a .
For project-b , lineage ingestion is Disabled .
Knowledge Catalog starts evaluating from project-b and applies
its Disabled configuration, overriding settings at
folder-b and test-org .
Controlling lineage data generation helps you manage costs and governance
policies. For example, you can disable lineage collection for development
projects or high-volume workloads that don't require lineage tracking.
For information on how to configure and control lineage ingestion, see
Control lineage ingestion for a service .
Limitations
Data lineage has the following limitations:
All lineage information is retained in the system for only 30 days.
Lineage information persists after you delete the related data source. For
example, if you delete a BigQuery table, you can still view
its lineage through the API and the console for up to 30 days.
Data lineage doesn't automatically record direct
lineage information for BigQuery routines. If a routine is used
in a query, data lineage records lineage between the tables
that the routine reads as dependencies of tables that the query writes.
Column-level lineage limitations
Column-level lineage has the following additional limitations:
Column-level lineage isn't collected for BigQuery load jobs
or for routines.
Upstream column-level lineage isn't collected for external tables.
Column-level lineage isn't collected if a job creates more than 1,500
column-level links. In these cases, only table-level lineage is collected.
There is no API to create, read, update, delete, or search for column-level
lineage.
Support for partitioned tables is limited, because partitioning columns like
_PARTITIONDATE and _PARTITIONTIME aren't recognized in the lineage graph.
Console limitations:
The lineage graph traversal is limited to a depth of 20 levels and
10,000 links in each direction.
Column-level lineage is only fetched from the region where the root
table is located. There is no support for cross-region lineage in the graph
view.
Pricing
Knowledge Catalog uses the premium processing SKU to charge for
data lineage. For more information, see
Pricing .
To separate data lineage charges from other charges in the
Knowledge Catalog premium processing SKU, on the
Cloud Billing report , use the label
goog-dataplex-workload-type with the value LINEAGE .
If you call the Data Lineage API
Origin
sourceType with a value other than CUSTOM , it causes additional costs.
What's next
Learn how to track data lineage for a BigQuery table copy and query jobs .
Learn how to use data lineage with Google Cloud systems .
Learn about lineage views in the Google Cloud console .
Explore the Data Lineage API .
For administrative information, see Lineage considerations and data lineage audit logging .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
