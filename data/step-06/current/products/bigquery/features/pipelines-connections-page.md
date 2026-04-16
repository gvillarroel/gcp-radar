---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.210Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Pipelines & Connections page"
feature_slug: "pipelines-connections-page"
latest_feature_date: "2026-03-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery"
keywords:
  - "pipelines"
  - "connections"
  - "page"
  - "provides"
  - "guided"
  - "bigquery"
  - "specific"
  - "configuration"
---

# Pipelines & Connections page

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The Pipelines & Connections page provides guided BigQuery-specific configuration workflows for data integration services.

## Extended Definition

The Pipelines & Connections page provides guided BigQuery-specific configuration workflows for data integration services.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)

## Supporting Pages

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Move your data to BigQuery with millisecond latency BigQuery materialization connector BigQuery Batch Query Connector Partner Advantage page Direct link Fivetran Fivetran Data Pipelines Solution Fivetran Data Pipelines Category ETL & Data Integration Description Fivetran is a leader in automated data integration and delivers ready-to-use connectors that automatically adapt as schemas and APIs change, ensuring consistent, reliable access to data.
- Partner references Incorta unified data & analytics platform Incorta Google BigQuery Connector Partner Advantage page Direct link Informatica Solution Informatica IICS Category ETL & Data Integration Description Informatica Intelligent Cloud Services (IICS) is a cloud-based data integration platform that provides a variety of features such as business data integration, application integration, and API management between cloud and local applications.
- Partner references Configuring BigQuery Data Transformation in BigQuery Partner Advantage page Direct link Databricks Solution Databricks Lakehouse Category BI, ML, & Advanced Analytics Description Databricks SQL provides an easy-to-use platform for analysts who want to run SQL queries on their data lake, create multiple visualization types to explore query results from different perspectives, and build and share dashboards.
- Partner references Integrate with BigQuery Accessing Google BigQuery dataset using Xplenty Partner Advantage page Direct link Keboola Solution Keboola Platform Category ETL & Data Integration Description Keboola's Data Stack as a Service provides the first complete solution for gathering, combining and enhancing data for analytics and is deployed by, and partners with, some of the world's leading brands.

### "Best practices for multi-tenant workloads on BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)
- Source ID: `site-docs-reference-5`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Configure VPC Service Controls perimeters In this configuration, we recommend VPC Service Controls perimeters to share data externally and to prevent accidental exposure of BigQuery datasets outside of your internal projects.
- The project configuration in figure 2 includes the following projects: Data pipelines project : the core infrastructure components that receive, process, and distribute tenant data are all packaged into a single project.
- Copy datasets for multiregional configurations Because BigQuery disallows cross-regional queries, you can't use the strategy of segmenting data with authorized views when data marts must exist across multiple regions.
- Configure VPC Service Controls perimeters In this configuration, we recommend VPC Service Controls perimeters to prevent accidental exposure of BigQuery datasets outside of your Google Cloud organization.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- You can use DDL commands to create, alter, and delete resources, such as the following: Datasets Tables Table schemas Table clones Table snapshots Views Connections User-defined functions (UDFs) Indexes Capacity commitments and reservations Row-level access policies Default configuration settings Required permissions To create a job that runs a DDL statement, you must have the bigquery.jobs.create permission for the project where you are running the job.
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.datasets.create The project where you create the federated dataset. bigquery.connections.use The project where you create the federated dataset. bigquery.connections.delegate The project where you create the federated dataset.
- Equivalent to ExternalDataConfiguration.decimal target types Example: ["NUMERIC", "BIGNUMERIC"] . description STRING A description of this table. enable list inference BOOL If true , use schema inference specifically for Parquet LIST logical type.
- BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); QueryJobConfiguration config = QueryJobConfiguration . newBuilder ( ddl ). build (); // create a view using query and it will wait to complete job.

