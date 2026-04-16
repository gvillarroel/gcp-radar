---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.464Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Amazon Redshift 2.1+ SQL dialect"
feature_slug: "amazon-redshift-2-1-sql-dialect"
latest_feature_date: "2025-05-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-database-queries"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-database-connections"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
keywords:
  - "amazon"
  - "redshift"
  - "sql"
  - "dialect"
  - "adds"
  - "creating"
  - "connections"
  - "jdbc"
---

# Amazon Redshift 2.1+ SQL dialect

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Adds support for creating connections with the Amazon Redshift 2.1+ SQL dialect using the Redshift JDBC driver.

## Extended Definition

Adds support for creating connections with the Amazon Redshift 2.1+ SQL dialect using the Redshift JDBC driver.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-database-queries](https://docs.cloud.google.com/looker/docs/admin-panel-database-queries)
- [https://docs.cloud.google.com/looker/docs/admin-panel-database-connections](https://docs.cloud.google.com/looker/docs/admin-panel-database-connections)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)

## Supporting Pages

### Admin settings - Queries \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-database-queries](https://docs.cloud.google.com/looker/docs/admin-panel-database-queries)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Actian Avalanche Amazon Athena Amazon Aurora MySQL Amazon Redshift Amazon Redshift 2.1+ Amazon Redshift Serverless 2.1+ Apache Druid Apache Druid 0.13.x - 0.17.x Apache Druid 0.18+ Apache Hive 2.3+ Apache Hive 3.1.2+ Apache Spark 3+ ClickHouse Cloudera Impala 3.1+ Cloudera Impala 3.1+ with Native Driver Cloudera Impala with Native Driver DataVirtuality Databricks Denodo 7 Denodo 8 & 9 Dremio Dremio 11+ Exasol Google BigQuery Legacy SQL Google BigQuery Standard SQL Google Cloud AlloyDB for PostgreSQL Google Cloud PostgreSQL Google Cloud SQL Google Spanner Greenplum HyperSQL IBM Netezza MariaDB Microsoft Azure PostgreSQL Microsoft Azure SQL Database Microsoft Azure Synapse Analytics Microsoft SQL Server 2008+ Microsoft SQL Server 2012+ Microsoft SQL Server 2016 Microsoft SQL Server 2017+ MongoBI MySQL MySQL 8.0.12+ Oracle Oracle ADWC PostgreSQL 9.5+ PostgreSQL pre-9.5 PrestoDB PrestoSQL SAP HANA SAP HANA 2+ SingleStore SingleStore 7+ Snowflake Teradata Trino Vector Vertica Query timeouts and queueing Looker kills queries that have been waiting in queue for too long.
- Looker admins can stop a running query from the Queries admin page by clicking the Stop button for the query. (Users with the see queries permission can view the Queries page, but only Looker admins can stop a running query.) Note: Google BigQuery connections that are configured for OAuth authentication don't support query killing.
- Query killing For dialects that support query killing, Looker can stop a running query in two ways: Looker automatically stops a query if the user closes the browser tab in which the query is running.
- For Looker to kill queries, either by closing the browser tab in which a query is running or by stopping the query in the Queries page, your database dialect must support query killing.

### Admin settings - Connections \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-database-connections](https://docs.cloud.google.com/looker/docs/admin-panel-database-connections)
- Source ID: `site-docs-reference-required-4`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- Actions available for some connections Depending on the connection dialect, the gear drop-down menu to the right of the connection may offer the following additional options: Option Description Show Tables This option brings you to a Looker Explore page that lets you create Looker Explore queries based on the metadata of your connection.
- You can check the status of: A single connection by clicking Test to the far right of that connection All connections by clicking the Test All Connections button at the top of the page Two checks are common cause for confusion: Can find temp schema Can use persistent derived tables These checks don't need to pass for Looker to function.
- Actions available for all connections All connections offer these options from the gear drop-down menu to the far right of each connection: Option Description SQL Runner This option brings you to Looker's SQL Runner, with the proper connection and schema already selected.
- If you are using a Looker (Google Cloud core) instance that is set up for public secure connections or for hybrid connections, use the IP address listed in the Egress Public IP field on the Details tab of the Instances page in the Google Cloud console.

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- Gemini gemini in looker Conversational Analytics Agent Manager access data , gemini in looker , chat with agent , chat with explore , save agents Conversational Analytics User access data , gemini in looker , chat with agent Customer Engineer Advanced Editor access data , can create forecast , can override vis config , chat with agent , chat with explore , clear cache refresh , create custom fields , create table calculations , deploy , develop , explore , follow alerts , gemini in looker , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , save agents , save content , save dashboards , save looks , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Customer Engineer Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- This permission is applied to individual models or model sets, rather than across the entire Looker instance or to connections. see system activity None Instance Wide CM Users can access the System Activity Explores and dashboards to view usage, history, and other metadata about a Looker instance. see admin None Instance Wide CM Users can have read-only access to admin resources, including pages in the Admin panel , with the exception of the following pages: Support Access Preview Features Legacy Features Export Content Access Actions (if the page displays only the enabled or disabled states of actions) This permission doesn't provide access to System Activity pages. mobile app access None Instance Wide NN Users can sign in to your instance on a mobile device using the Looker mobile app .
- Support Advanced Editor access data , clear cache refresh , create custom fields , create table calculations , develop , explore , follow alerts , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Support Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- However, they will still not be able to query models that you have not allowed. manage models — If you assign the manage models permission to a user, the user will be able to access all models in all projects in the instance. manage modelsets restricted — If you assign the manage modelsets restricted permission to a user, they can assign any model in a project to which they have access. manage project connections — If you assign the manage project connections restricted or manage project connections permissions to a user, the user will be able to see, edit, and create project-scoped connections for any projects that are included in the model set.

