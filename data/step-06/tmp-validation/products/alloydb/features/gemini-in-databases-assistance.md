---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.136Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Gemini in Databases assistance"
feature_slug: "gemini-in-databases-assistance"
latest_feature_date: "2024-07-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox"
  - "https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration"
  - "https://docs.cloud.google.com/alloydb/docs/monitor-health-clusters-instances"
keywords:
  - "assistance"
  - "troubleshoot"
  - "monitor"
  - "resources"
  - "databases"
  - "gemini"
  - "helps"
---

# Gemini in Databases assistance

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Gemini in Databases assistance helps monitor and troubleshoot AlloyDB resources across insights and advisor surfaces.

## Extended Definition

Gemini in Databases assistance helps monitor and troubleshoot AlloyDB resources across insights and advisor surfaces.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox)
- [https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration](https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration)
- [https://docs.cloud.google.com/alloydb/docs/monitor-health-clusters-instances](https://docs.cloud.google.com/alloydb/docs/monitor-health-clusters-instances)

## Supporting Pages

### "Use AlloyDB for PostgreSQL with MCP, Gemini CLI, and other agents \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox)
- Source ID: `site-docs-reference-2`
- Final score: 122
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Before you begin To connect to your AlloyDB instance and use the available tools, you must have one of the following Identity and Access Management (IAM) roles, or a custom role with equivalent permissions: Task Role name Required Identity and Access Management (IAM) role Use read-only tools to list and get AlloyDB resources AlloyDB Viewer roles/alloydb.viewer Connect to an instance and run queries Cloud AlloyDB Client roles/alloydb.client Service Usage Consumer roles/serviceusage.serviceUsageConsumer Perform administrative tasks (such as creating or managing clusters, instances, and users) AlloyDB Admin roles/alloydb.admin Use the observability extension Monitoring Viewer roles/monitoring.viewer Before you can connect to your AlloyDB instance, complete the following steps to set up your project and database.
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Use AlloyDB for PostgreSQL with MCP, Gemini CLI, and other agents Stay organized with collections Save and categorize content based on your preferences.
- AlloyDB Observability extension The alloydb-observability extension provides a unified interface for managing and monitoring database performance and health directly from the Gemini CLI.
- AlloyDB extension The alloydb extension includes tools for querying the database, managing AlloyDB resources, and monitoring database health.

### "Manage your AlloyDB resources using Knowledge Catalog \_|\_ AlloyDB for\

- URL: [https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration](https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration)
- Source ID: `site-iam-reference`
- Final score: 109
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Knowledge Catalog automatically retrieves the following metadata from AlloyDB clusters, instances, databases, tables, columns, and views: Name Location (Region) Labels (for clusters and instances) Dataplex Integration Enabled (for clusters) Database Version Machine CPU Count (for instances) Availability Type (for instances) Charset (for databases) Collation (for databases) Owner Description (for table, views, columns, and foreign keys) Type (for clusters, instances, and machines) Columns Data Type Mode Primary Key Foreign Keys Referenced Table Column Mappings Creation Time Last modification Time Note: Knowledge Catalog refers to resources in AlloyDB and in other Google Cloud services as assets .
- Knowledge Catalog operation AlloyDB resource Roles or permissions required Search for AlloyDB resources Cluster alloydb.clusters.get Columns alloydb.databases.get Instance alloydb.instances.get Database alloydb.databases.get Tables alloydb.databases.get Views alloydb.databases.get Caution: If you grant the roles/alloydb.viewer role at the project level, principals with this role can view the metadata for all AlloyDB instances in the project.
- Because AlloyDB syncs in near real-time to Knowledge Catalog, the following resources are available: Clusters Columns Databases Instances Tables Views After discovery is complete, search for these assets— customers table and active users —in the Knowledge Catalog page of the Google Cloud console or by using the API.
- Home Documentation Databases AlloyDB for PostgreSQL Send feedback Manage your AlloyDB resources using Knowledge Catalog Stay organized with collections Save and categorize content based on your preferences.

### "Monitor the health of your clusters and instances \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/monitor-health-clusters-instances](https://docs.cloud.google.com/alloydb/docs/monitor-health-clusters-instances)
- Source ID: `site-docs-reference-2`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Monitor the health of your clusters and instances Stay organized with collections Save and categorize content based on your preferences.
- Before you begin To monitor AlloyDB health issues in the Google Cloud console, you must have the following (Identity and Access Management (IAM)) roles: AlloyDB Administrator ( roles/alloydb.admin ) alloydb.instances.list alloydb.clusters.get Monitoring Viewer ( roles/monitoring.viewer ) monitoring.timeSeries.list Note: This role is required to view insight charts in the Clusters page, but it isn't required to view Database Center health issues.
- Database Center Viewer ( roles/databasecenter.viewer ) or Database Center Administrator ( roles/databasecenter.admin ) databasecenter.databaseGroups.list databasecenter.fleetHealthStats.list Monitor AlloyDB cluster health The AlloyDB Clusters page in the Google Cloud includes a Health issues section, which displays the most critical cluster issues across your project.
- You can use this information to monitor and improve the health of your AlloyDB for PostgreSQL clusters and instances.

