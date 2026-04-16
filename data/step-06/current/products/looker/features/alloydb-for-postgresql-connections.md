---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.379Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "AlloyDB for PostgreSQL connections"
feature_slug: "alloydb-for-postgresql-connections"
latest_feature_date: "2026-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-database-queries"
  - "https://docs.cloud.google.com/bigquery/docs/editions-intro"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features"
keywords:
  - "alloydb"
  - "postgresql"
  - "connections"
  - "feature"
  - "adds"
  - "full"
  - "looker"
  - "now"
---

# AlloyDB for PostgreSQL connections

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

This feature adds full Looker support for connections to Google Cloud AlloyDB for PostgreSQL; Looker now supports full connections to Google Cloud AlloyDB for PostgreSQL in preview through the Dialect menu.

## Extended Definition

This feature adds full Looker support for connections to Google Cloud AlloyDB for PostgreSQL; Looker now supports full connections to Google Cloud AlloyDB for PostgreSQL in preview through the Dialect menu.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-database-queries](https://docs.cloud.google.com/looker/docs/admin-panel-database-queries)
- [https://docs.cloud.google.com/bigquery/docs/editions-intro](https://docs.cloud.google.com/bigquery/docs/editions-intro)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features](https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features)

## Supporting Pages

### Admin settings - Queries \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-database-queries](https://docs.cloud.google.com/looker/docs/admin-panel-database-queries)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Actian Avalanche Amazon Athena Amazon Aurora MySQL Amazon Redshift Amazon Redshift 2.1+ Amazon Redshift Serverless 2.1+ Apache Druid Apache Druid 0.13.x - 0.17.x Apache Druid 0.18+ Apache Hive 2.3+ Apache Hive 3.1.2+ Apache Spark 3+ ClickHouse Cloudera Impala 3.1+ Cloudera Impala 3.1+ with Native Driver Cloudera Impala with Native Driver DataVirtuality Databricks Denodo 7 Denodo 8 & 9 Dremio Dremio 11+ Exasol Google BigQuery Legacy SQL Google BigQuery Standard SQL Google Cloud AlloyDB for PostgreSQL Google Cloud PostgreSQL Google Cloud SQL Google Spanner Greenplum HyperSQL IBM Netezza MariaDB Microsoft Azure PostgreSQL Microsoft Azure SQL Database Microsoft Azure Synapse Analytics Microsoft SQL Server 2008+ Microsoft SQL Server 2012+ Microsoft SQL Server 2016 Microsoft SQL Server 2017+ MongoBI MySQL MySQL 8.0.12+ Oracle Oracle ADWC PostgreSQL 9.5+ PostgreSQL pre-9.5 PrestoDB PrestoSQL SAP HANA SAP HANA 2+ SingleStore SingleStore 7+ Snowflake Teradata Trino Vector Vertica Query timeouts and queueing Looker kills queries that have been waiting in queue for too long.
- Looker admins can stop a running query from the Queries admin page by clicking the Stop button for the query. (Users with the see queries permission can view the Queries page, but only Looker admins can stop a running query.) Note: Google BigQuery connections that are configured for OAuth authentication don't support query killing.
- There are two ways you can define the maximum number of per-user concurrent queries for connections on your Looker instance: The per-user-query-limit startup option .
- To prevent comments from affecting query caching, Looker adds the context comments to outgoing SQL commands right before the SQL is sent to the database.

### Understand BigQuery editions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/editions-intro](https://docs.cloud.google.com/bigquery/docs/editions-intro)
- Source ID: `site-docs-reference-required-6`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Analysis features Standard Enterprise Enterprise Plus On-demand pricing Data sharing Entity resolution framework Publish and subscribe to datasets Data clean room subscriptions Egress controls Entity resolution framework Publish and subscribe to datasets Data clean room subscriptions Egress controls Entity resolution framework Publish and subscribe to datasets Data clean room subscriptions Egress controls Entity resolution framework Publish and subscribe to datasets Data clean room subscriptions Egress controls Materialized views Query existing materialized views directly Create materialized views Automatic refresh of materialized views Manual refresh of materialized views Direct query of materialized views Smart tuning Create materialized views Automatic refresh of materialized views Manual refresh of materialized views Direct query of materialized views Smart tuning Create materialized views Automatic refresh of materialized views Manual refresh of materialized views Direct query of materialized views Smart tuning Cached results Single-user caching Cross-user caching Cross-user caching Single-user caching Continuous queries No access to continuous queries Continuous queries Continuous queries No access to continuous queries Search Access to the SEARCH function without access to search indexes Query acceleration with search indexes Query acceleration with search indexes Query acceleration with search indexes Vector search Access to the VECTOR SEARCH function without access to vector indexes Query acceleration with vector indexes Query acceleration with vector indexes Query acceleration with vector indexes Unstructured data Run SQL queries on object tables Perform ML inference on object tables using remote models: Google models hosted in Vertex AI Cloud AI services Custom models deployed to Vertex AI Perform ML inference on object tables using remote models: Google models hosted in Vertex AI Cloud AI services Custom models deployed to Vertex AI Perform ML inference on object tables using remote models: Google models hosted in Vertex AI Cloud AI services Custom models deployed to Vertex AI Multi-cloud analytics Not available BigQuery Omni support Not available BigQuery Omni support Integrated machine learning No access to BigQuery ML BigQuery ML BigQuery ML BigQuery ML Workload management Users cannot set the maximum concurrency target Advanced workload management ( idle capacity sharing , target concurrency ) Advanced workload management ( idle capacity sharing , target concurrency ) On-demand users don't have access to Advanced workload management Supported assignment types QUERY , PIPELINE QUERY , CONTINUOUS , PIPELINE , ML EXTERNAL , BACKGROUND , BACKGROUND COLUMN METADATA INDEX , BACKGROUND CHANGE DATA CAPTURE , BACKGROUND SEARCH INDEX REFRESH QUERY , CONTINUOUS , PIPELINE , ML EXTERNAL , BACKGROUND , BACKGROUND COLUMN METADATA INDEX , BACKGROUND CHANGE DATA CAPTURE , BACKGROUND SEARCH INDEX REFRESH On-demand pricing doesn't support assignments VPC Service Controls No VPC Service Controls Support VPC Service Controls Support VPC Service Controls Support VPC Service Controls Support Data export No access to exporting data to Bigtable , exporting data to Spanner , or exporting data to AlloyDB for PostgreSQL Exporting data to Bigtable , exporting data to Spanner , or exporting data to AlloyDB for PostgreSQL Exporting data to Bigtable , exporting data to Spanner , or exporting data to AlloyDB for PostgreSQL No access to exporting data to Bigtable , exporting data to Spanner , or exporting data to AlloyDB for PostgreSQL Storage encryption Google-owned and Google-managed encryption keys Customer-managed keys (CMEK) Google-owned and Google-managed encryption keys Customer-managed keys (CMEK) Google-owned and Google-managed encryption keys Customer-managed keys (CMEK) Google-owned and Google-managed encryption keys Fine-grained security controls No access to fine-grained security controls Column-level access control Row-level security Dynamic data masking Custom data masking Column-level access control Row-level security Dynamic data masking Custom data masking Column-level access control Row-level security Dynamic data masking Custom data masking BigQuery Graph No access to BigQuery Graph BigQuery Graph BigQuery Graph No access to BigQuery Graph Note: BigQuery automatically encrypts all data at rest.
- Administration features Standard Enterprise Enterprise Plus On-demand pricing Pricing model Slot-hours (1 minute minimum) Slot-hours (1 minute minimum) Slot-hours (1 minute minimum) Pay per query with free tier Monthly Service Level Objective (SLO) =99.9% =99.99% =99.99% =99.99% Compliance controls No access to compliance controls through Assured Workloads No access to compliance controls through Assured Workloads Compliance controls through Assured Workloads Compliance controls through Assured Workloads Business Intelligence acceleration No access to query acceleration through BI Engine Query acceleration through BI Engine Query acceleration through BI Engine Query acceleration through BI Engine Workload management Users cannot set the maximum concurrency target Advanced workload management ( idle capacity sharing , target concurrency ) Advanced workload management ( idle capacity sharing , target concurrency ) On-demand users don't have access to Advanced workload management Compute model Autoscaling Autoscaling + Baseline Autoscaling + Baseline On-demand Maximum reservation size 1,600 slots Quota Quota Quota Maximum reservations per administration project 10 reservations per administration project, up to 16,000 slots per organization 200 200 No access to reservations Commitment plans No access to capacity commitments 1-year commitment at 20% discount or 3-year commitment at 40% discount 1-year commitment at 20% discount or 3-year commitment at 40% discount No access to capacity commitments Assignments Project assignments Project, folder, or organization assignments Project, folder, or organization assignments No assignments Supported assignment types QUERY , PIPELINE QUERY , CONTINUOUS , PIPELINE , ML EXTERNAL , BACKGROUND , BACKGROUND COLUMN METADATA INDEX , BACKGROUND CHANGE DATA CAPTURE , BACKGROUND SEARCH INDEX REFRESH QUERY , CONTINUOUS , PIPELINE , ML EXTERNAL , BACKGROUND , BACKGROUND COLUMN METADATA INDEX , BACKGROUND CHANGE DATA CAPTURE , BACKGROUND SEARCH INDEX REFRESH On-demand pricing doesn't support assignments Managed disaster recovery No access to managed disaster recovery No access to managed disaster recovery Managed disaster recovery No access to managed disaster recovery Data export No access to exporting data to Bigtable , Spanner , or AlloyDB Exporting data to Bigtable , Spanner or AlloyDB Exporting data to Bigtable , Spanner or AlloyDB No access to exporting data to Bigtable , Spanner or AlloyDB Note: BigQuery Enterprise Plus edition supports Assured Workloads platform controls for regulatory compliance regimes, including FedRAMP, CJIS, IL4, and ITAR.
- Understand BigQuery editions BigQuery provides three editions which support different types of workloads and the features associated with them.
- Don't use edition tiers to restrict access to specific features, because the features assigned to each edition can change over time.

### Admin settings - Preview Features \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features](https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- The Preview Features page lists each feature with a short description underneath it explaining the functionality that it adds to or changes in Looker.
- The Enhanced Content Cleanup preview feature provides the following capabilities: Lets admins and users access a new Unused content folder to quickly identify and manage the unused content on a Looker instance.
- When this preview feature is enabled, the new Enhanced search experience lets you search for Looker content using filters for specific content types, special characters, and more metadata options.
- When the BI Engine Symmetric Aggregates feature is enabled, for queries that use symmetric aggregates , Looker generates experimental SQL patterns that execute faster on the BigQuery BI Engine.

