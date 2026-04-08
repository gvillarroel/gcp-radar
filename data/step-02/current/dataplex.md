# Dataplex

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 66
Unique features: 54

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-03-30 | Automated cataloging of Looker metadata |  | Dataplex can automatically ingest and catalog metadata from Looker (Google Cloud core). |
| 2026-03-30 | Data lineage ingestion from BigQuery sources |  | Dataplex can ingest data lineage information from BigQuery sources. |
| 2026-02-24 | Data profile aspect size increase |  | Dataplex Universal Catalog supports saving data profile aspects up to 1 MB in size. |
| 2026-02-19 | Debug queries for data quality rules |  | Dataplex data quality rules can include an optional SQL debug query to help diagnose rule failures. |
| 2026-02-11 | Metadata change feeds |  | Dataplex can publish near real-time metadata change notifications to a Pub/Sub topic. |
| 2026-01-29 | Dataproc lineage ingestion controls |  | Dataplex lets you control Dataproc data lineage ingestion at the organization, folder, or project level. |
| 2025-12-08 | Natural language search |  | Dataplex Universal Catalog supports natural language queries for finding resources without complex search syntax; Dataplex Universal Catalog supports natural language queries for finding resources without complex search syntax. |
| 2025-11-21 | Data products |  | Dataplex Universal Catalog supports curated data products that package data assets for specific business use cases. |
| 2025-11-17 | Data profile scan result publishing to Universal Catalog |  | Dataplex can publish data profile scan results as Dataplex Universal Catalog metadata on source table entries. |
| 2025-09-29 | Column-level lineage |  | Dataplex provides lineage tracking between individual columns in BigQuery tables; Dataplex provides lineage tracking between individual columns in BigQuery tables. |
| 2025-09-23 | Developer tool integration for Universal Catalog |  | Dataplex Universal Catalog can connect to developer tools such as Gemini CLI and IDEs for AI-driven data discovery and asset management. |
| 2025-06-18 | Data quality scan result publishing to Universal Catalog |  | Dataplex can publish data quality scan results as Dataplex Universal Catalog metadata on source table entries. |
| 2025-05-19 | Expanded data profile scan column limit |  | Dataplex data profile scans can profile up to 10,000 columns in a BigQuery table. |
| 2025-05-13 | Bulk export of Universal Catalog metadata |  | Dataplex can export Universal Catalog metadata to Cloud Storage for downstream analysis and retrieval. |
| 2025-05-07 | Custom connectors for managed connectivity pipelines |  | Managed connectivity pipelines support community-contributed custom connectors for third-party data sources. |
| 2025-05-05 | Custom constraints for Dataplex and data lineage resources |  | Organization Policy custom constraints can enforce granular controls on selected Dataplex and data lineage resource fields. |
| 2025-04-28 | Automatic discovery |  | Dataplex can scan Cloud Storage data to extract and catalog metadata and create BigLake, external, or object tables; Dataplex can scan Cloud Storage data to extract and catalog metadata and create BigLake, external, or object tables. |
| 2025-04-14 | Customer-managed encryption keys |  | Dataplex supports customer-managed encryption keys for encrypting Dataplex data. |
| 2025-03-13 | Data lineage for Dataflow |  | Dataplex provides data lineage capture for Dataflow pipelines. |
| 2025-02-18 | Dataplex Attribute Store | 2026-02-18 | Dataplex Attribute Store provides attribute-based metadata capabilities that are being retired in favor of tags, policy tags, and IAM conditions; deprecated on 2026-02-18. |
| 2025-02-11 | Data lineage for Dataproc Hive jobs |  | Dataplex provides data lineage capture for Hive jobs running in Dataproc. |
| 2025-02-03 | Dataplex entity ingestion | 2025-09-30 | Dataplex entity ingestion imports Dataplex entities, including entities created by Dataplex Discovery, into the catalog; deprecated on 2025-09-30. |
| 2025-01-28 | Aspect-only metadata import |  | Dataplex Catalog supports metadata import jobs that update aspects without modifying other entry metadata. |
| 2025-01-20 | Data lineage path visualization |  | Dataplex can visualize lineage paths between two selected resources. |
| 2024-12-09 | Data Catalog transition to Dataplex Catalog |  | Dataplex provides a transition path for moving Data Catalog content and usage to Dataplex Catalog. |
| 2024-11-04 | Semantic search |  | Dataplex Search supports Gemini-powered natural language semantic search within a project. |
| 2024-10-10 | Lineage occurrence time filter |  | The data lineage list view can filter lineage records by the time the lineage occurred. |
| 2024-09-30 | Managed connectivity pipelines |  | Managed connectivity pipelines import metadata from third-party sources into Dataplex Catalog using custom connectors and Workflows orchestration. |
| 2024-08-28 | Data insights |  | Dataplex uses Gemini-generated queries to help users explore table data, identify patterns, and assess quality; Dataplex uses Gemini-generated queries to help users explore table data, identify patterns, and assess quality. |
| 2024-08-12 | Data lineage list view |  | Dataplex provides a table-based lineage list view that shows full lineage information in one place. |
| 2024-07-29 | Metadata import |  | Dataplex Catalog supports importing entries and their aspects as metadata. |
| 2024-07-22 | Dataplex Explore | 2024-07-22 | Dataplex Explore is an exploration capability being retired in favor of BigQuery Studio; deprecated on 2024-07-22. |
| 2024-07-08 | Dataplex Catalog |  | Dataplex Catalog is a platform for storing, managing, and accessing metadata. |
| 2024-07-03 | Location organization policy support for Data Lineage |  | Data Lineage supports organization policy constraints for controlling allowed resource locations. |
| 2024-05-28 | Data quality scores |  | Dataplex automatic data quality provides scores that show the percentage of rules that passed. |
| 2024-05-28 | Email notifications for automatic data quality |  | Dataplex automatic data quality can send email notifications about data quality job status and results. |
| 2024-05-28 | Rule recommendation API for automatic data quality |  | Dataplex automatic data quality supports API-based rule recommendations derived from data profiling scans. |
| 2024-04-25 | Data reference parameter for custom SQL rules |  | Dataplex automatic data quality custom SQL rules can use a data reference parameter to refer to the source table and its precondition filters. |
| 2024-04-25 | SQL assertion rule type |  | Dataplex automatic data quality supports a SQL assertion rule type for detecting invalid dataset states with custom SQL. |
| 2024-03-25 | Automated cataloging of Vertex AI Feature Store |  | Dataplex can automatically ingest and catalog metadata for Vertex AI feature groups and features across projects and regions. |
| 2023-12-17 | Automated cataloging of Spanner |  | Dataplex can automatically ingest and catalog metadata for Spanner instances, databases, and tables. |
| 2023-12-01 | Automated cataloging of Vertex AI models and datasets |  | Dataplex can automatically ingest and catalog metadata for Vertex AI models and datasets. |
| 2023-10-06 | Automated cataloging of Bigtable |  | Dataplex can automatically ingest and catalog metadata for Bigtable tables and instances. |
| 2023-08-14 | Entry-level data lineage for Dataproc Spark jobs |  | Dataplex provides entry-level data lineage for Spark jobs executed in Dataproc. |
| 2023-05-18 | Auto data quality (AutoDQ) |  | Auto data quality evaluates BigQuery data quality without requiring a Dataplex lake and supports tables, views, external tables, BigLake tables, and sampling; Auto data quality provides automated, turnkey data quality evaluation to help users build trust in their data. |
| 2023-05-18 | Data profiling |  | Data profiling analyzes BigQuery data characteristics without requiring a Dataplex lake and supports tables, views, external tables, BigLake tables, and sampling; Data profiling helps users understand data by identifying common characteristics and recommending data quality rules. |
| 2023-03-13 | Data lineage |  | Data lineage tracks how data moves through systems, including its sources, destinations, and transformations; Data lineage tracks how data moves through systems, including its sources, destinations, and transformations. |
| 2023-01-30 | Attribute Store |  | Attribute Store associates attributes and behavior specifications such as resource and column access with tables and columns. |
| 2023-01-30 | Business glossary |  | Business glossary manages business terminology and definitions for describing and discovering data entries across an organization. |
| 2022-12-16 | BigLake integration |  | BigLake integration lets Dataplex upgrade Cloud Storage buckets to managed storage and create BigLake tables with fine-grained policy controls. |
| 2022-12-01 | Source and Sink plugins |  | Source and Sink plugins for Cloud Data Fusion support ingesting and processing data with Dataplex integrations; Source and Sink plugins for Cloud Data Fusion support ingesting and processing data with Dataplex integrations. |
| 2022-10-20 | Data exploration workbench (Explore) |  | Data exploration workbench provides a fully managed, serverless environment for governed collaboration, scheduling, and interactive querying with Spark SQL and Jupyter notebooks; Data exploration workbench provides a fully managed, serverless environment for querying data with Spark SQL and Jupyter notebooks. |
| 2022-05-02 | Dataflow template scheduling |  | Dataflow template scheduling lets users schedule and monitor Google-provided and custom Dataflow templates from the Dataplex page in the Cloud Console. |
| 2022-04-15 | Data Quality tasks |  | Data Quality tasks run data quality validations on BigQuery tables, including tables outside a Dataplex lake and GCS data exposed as BigQuery external tables. |

Source file slug: `dataplex.md`

