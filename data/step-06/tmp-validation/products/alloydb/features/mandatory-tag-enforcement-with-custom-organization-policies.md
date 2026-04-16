---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.111Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Mandatory tag enforcement with custom organization policies"
feature_slug: "mandatory-tag-enforcement-with-custom-organization-policies"
latest_feature_date: "2025-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp"
  - "https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners"
  - "https://docs.cloud.google.com/alloydb/docs/db-version-policies"
keywords:
  - "mandatory"
  - "organization"
  - "enforcement"
  - "policies"
  - "custom"
---

# Mandatory tag enforcement with custom organization policies

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB can enforce required tags on cluster and backup resources through custom organization policies.

## Extended Definition

AlloyDB can enforce required tags on cluster and backup resources through custom organization policies.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp](https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp)
- [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- [https://docs.cloud.google.com/alloydb/docs/db-version-policies](https://docs.cloud.google.com/alloydb/docs/db-version-policies)

## Supporting Pages

### "Use the AlloyDB remote MCP server \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp](https://docs.cloud.google.com/alloydb/docs/ai/use-alloydb-mcp)
- Source ID: `site-docs-reference-2`
- Final score: 98
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To minimize and manage these risks, Google Cloud offers defaults and customizable policies to control the use of MCP tools in your Google Cloud organization or project.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to use the AlloyDB for PostgreSQL MCP server: Make MCP tool calls: mcp.tools.call Create an AlloyDB cluster: alloydb.cluster.create Create an AlloyDB user: alloydb.users.create Clone an AlloyDB instance: alloydb.instances.create Execute SQL queries on an AlloyDB instance: alloydb.instances.executeSql alloydb.instances.login Get an AlloyDB cluster: alloydb.instances.get Get an AlloyDB cluster operation: alloydb.clusters.get Import data to an AlloyDB instance: alloydb.clusters.import List AlloyDB clusters in a project: alloydb.clusters.list List AlloyDB users: alloydb.users.list Update an AlloyDB cluster: alloydb.clusters.update Update an AlloyDB user: alloydb.users.update You might also be able to get these permissions with custom roles or other predefined roles .
- To initialize the gcloud CLI, run the following command: gcloud init Required roles To get the permissions that you need to use the AlloyDB for PostgreSQL MCP server, ask your administrator to grant you the following IAM roles on the project where you want to use the AlloyDB for PostgreSQL MCP server: Make MCP tool calls: MCP Tool User ( roles/mcp.toolUser ) Create an AlloyDB instance: AlloyDB Admin ( roles/alloydb.admin ) Create an AlloyDB user: AlloyDB Admin ( roles/alloydb.admin ) Execute SQL queries in AlloyDB: AlloyDB Admin ( roles/alloydb.admin ) Studio Query User ( roles/databasesconsole.studioQueryUser ) Get a AlloyDB instance or list all AlloyDB instances in a project: AlloyDB Viewer ( roles/alloydb.viewer ) List AlloyDB users: AlloyDB Viewer ( roles/alloydb.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- See the following example command: gcloud model-armor floorsettings update \ --full-uri = 'projects/ PROJECT ID /locations/global/floorSetting' \ --enable-floor-setting-enforcement = TRUE \ --add-integrated-services = GOOGLE MCP SERVER \ --google-mcp-server-enforcement-type = INSPECT AND BLOCK \ --enable-google-mcp-server-cloud-logging \ --malicious-uri-filter-settings-enforcement = ENABLED \ --add-rai-settings-filters = '[{"confidenceLevel": "MEDIUM AND ABOVE", "filterType": "DANGEROUS"}]' Replace PROJECT ID with your Google Cloud project ID.

### "Google Cloud Ready - AlloyDB Partners \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- Source ID: `site-docs-reference-2`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- The company's self-service, AI-powered integration platform helps organizations connect applications and data sources, automate common workflows and business processes, and deliver exceptional experiences for customers, partners, and employees.
- Our generative AI provides organizations with an unparalleled, holistic insight into customer context.
- Partner references Consolidate Your Data on AlloyDB With Integrate.io in Minutes Connect AlloyDB to Your Data Sources using Integrate.io ETL Integrate.io + AlloyDB demo Partner Advantage page Direct link Integrate.io DreamFactory Solution DreamFactory Category Data integration and migration Description Integrate.io ETL platform lets organizations integrate, process, and prepare data for analytics on the cloud.
- Partner references AlloyDB integration with Hightouch Sync data to AlloyDB with Hightouch Sync data from PostgreSQL to AlloyDB Partner Advantage page Direct link Integrate.io Integrate.io ETL Solution Integrate.io ETL Category Data integration and migration Description Integrate.io ETL platform lets organizations integrate, process, and prepare data for analytics on the cloud.

### "Database version policies \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/db-version-policies](https://docs.cloud.google.com/alloydb/docs/db-version-policies)
- Source ID: `site-docs-reference-2`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- AlloyDB and AlloyDB Omni version policies AlloyDB for PostgreSQL , which runs in Google Cloud, and AlloyDB Omni , which you install and run on your own computing environment, have related but distinct versioning policies as described in this section.
- Home Documentation Databases AlloyDB for PostgreSQL Resources Send feedback Database version policies Stay organized with collections Save and categorize content based on your preferences.
- AlloyDB Omni version policies Every version of AlloyDB Omni has compatibility with a specific version of PostgreSQL, as detailed in Major version compatibility release policy .
- AlloyDB version policies AlloyDB instances run a database server created and maintained by Google that is fully compatible with PostgreSQL.

