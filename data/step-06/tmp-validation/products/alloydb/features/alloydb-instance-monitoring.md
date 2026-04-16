---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.167Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB instance monitoring"
feature_slug: "alloydb-instance-monitoring"
latest_feature_date: "2023-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/monitor-health-clusters-instances"
  - "https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration"
  - "https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox"
keywords:
  - "monitored"
  - "system"
  - "monitoring"
  - "instances"
  - "instance"
  - "through"
---

# AlloyDB instance monitoring

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB instances can be monitored through System Insights, Cloud Monitoring, and cluster overview metrics.

## Extended Definition

AlloyDB instances can be monitored through System Insights, Cloud Monitoring, and cluster overview metrics.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/monitor-health-clusters-instances](https://docs.cloud.google.com/alloydb/docs/monitor-health-clusters-instances)
- [https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration](https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration)
- [https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox)

## Supporting Pages

### "Monitor the health of your clusters and instances \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/monitor-health-clusters-instances](https://docs.cloud.google.com/alloydb/docs/monitor-health-clusters-instances)
- Source ID: `site-docs-reference-2`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Before you begin To monitor AlloyDB health issues in the Google Cloud console, you must have the following (Identity and Access Management (IAM)) roles: AlloyDB Administrator ( roles/alloydb.admin ) alloydb.instances.list alloydb.clusters.get Monitoring Viewer ( roles/monitoring.viewer ) monitoring.timeSeries.list Note: This role is required to view insight charts in the Clusters page, but it isn't required to view Database Center health issues.
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Monitor the health of your clusters and instances Stay organized with collections Save and categorize content based on your preferences.
- Filter the cluster list by issue The Issues column in the AlloyDB cluster list displays the highest priority issue affecting that cluster or any of its primary and read pool instances.
- You can use this information to monitor and improve the health of your AlloyDB for PostgreSQL clusters and instances.

### "Use AlloyDB for PostgreSQL with MCP, Gemini CLI, and other agents \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox](https://docs.cloud.google.com/alloydb/docs/connect-ide-using-mcp-toolbox)
- Source ID: `site-docs-reference-2`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin To connect to your AlloyDB instance and use the available tools, you must have one of the following Identity and Access Management (IAM) roles, or a custom role with equivalent permissions: Task Role name Required Identity and Access Management (IAM) role Use read-only tools to list and get AlloyDB resources AlloyDB Viewer roles/alloydb.viewer Connect to an instance and run queries Cloud AlloyDB Client roles/alloydb.client Service Usage Consumer roles/serviceusage.serviceUsageConsumer Perform administrative tasks (such as creating or managing clusters, instances, and users) AlloyDB Admin roles/alloydb.admin Use the observability extension Monitoring Viewer roles/monitoring.viewer Before you can connect to your AlloyDB instance, complete the following steps to set up your project and database.
- Resource management clusters, instances, users create cluster Create an AlloyDB cluster named sales-quarterly-db in the us-east1 region. get cluster Get the details for the cluster sales-quarterly-db . list clusters List all of my AlloyDB clusters. create instance Create a new read instance in the sales-quarterly-db cluster. get instance Show me the information for the instance sales-quarterly-db-rp . list instances List all instances in the sales-quarterly-db cluster. create user Note: The create user tool can create two types of database users: Database users with built-in authentication : these users are managed within the database and authenticate with a password.
- Add the following configuration, replace the environment variables with your values, and save. { "mcpServers": { "alloydb": { "command": "./PATH/TO/toolbox", "args": ["--prebuilt","alloydb-postgres","--stdio"], "env": { "ALLOYDB POSTGRES PROJECT": " PROJECT ID ", "ALLOYDB POSTGRES REGION": " REGION ", "ALLOYDB POSTGRES CLUSTER": " CLUSTER NAME ", "ALLOYDB POSTGRES INSTANCE": " INSTANCE NAME ", "ALLOYDB POSTGRES DATABASE": " DATABASE NAME ", "ALLOYDB POSTGRES USER": " USERNAME ", "ALLOYDB POSTGRES PASSWORD": " PASSWORD " } } } } Note: To connect using a private IP address, add the following line to the env object: "ALLOYDB POSTGRES IP TYPE": "private" Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Add the following configuration, replace the environment variables with your values, and save. { "mcpServers": { "alloydb": { "command": "./PATH/TO/toolbox", "args": ["--prebuilt","alloydb-postgres","--stdio"], "env": { "ALLOYDB POSTGRES PROJECT": " PROJECT ID ", "ALLOYDB POSTGRES REGION": " REGION ", "ALLOYDB POSTGRES CLUSTER": " CLUSTER NAME ", "ALLOYDB POSTGRES INSTANCE": " INSTANCE NAME ", "ALLOYDB POSTGRES DATABASE": " DATABASE NAME ", "ALLOYDB POSTGRES USER": " USERNAME ", "ALLOYDB POSTGRES PASSWORD": " PASSWORD " } } } } Note: To connect using a private IP address, add the following line to the env object: "ALLOYDB POSTGRES IP TYPE": "private" Open Cursor and navigate to Settings > Cursor Settings > MCP .

### "Manage your AlloyDB resources using Knowledge Catalog \_|\_ AlloyDB for\

- URL: [https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration](https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration)
- Source ID: `site-iam-reference`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Knowledge Catalog automatically retrieves the following metadata from AlloyDB clusters, instances, databases, tables, columns, and views: Name Location (Region) Labels (for clusters and instances) Dataplex Integration Enabled (for clusters) Database Version Machine CPU Count (for instances) Availability Type (for instances) Charset (for databases) Collation (for databases) Owner Description (for table, views, columns, and foreign keys) Type (for clusters, instances, and machines) Columns Data Type Mode Primary Key Foreign Keys Referenced Table Column Mappings Creation Time Last modification Time Note: Knowledge Catalog refers to resources in AlloyDB and in other Google Cloud services as assets .
- Knowledge Catalog operation AlloyDB resource Roles or permissions required Search for AlloyDB resources Cluster alloydb.clusters.get Columns alloydb.databases.get Instance alloydb.instances.get Database alloydb.databases.get Tables alloydb.databases.get Views alloydb.databases.get Caution: If you grant the roles/alloydb.viewer role at the project level, principals with this role can view the metadata for all AlloyDB instances in the project.
- Because AlloyDB syncs in near real-time to Knowledge Catalog, the following resources are available: Clusters Columns Databases Instances Tables Views After discovery is complete, search for these assets— customers table and active users —in the Knowledge Catalog page of the Google Cloud console or by using the API.
- Don't include sensitive or personally identifiable information in your cluster ID because the cluster ID might be visible in various operational contexts, such as system logs, monitoring dashboards, and support communications.

