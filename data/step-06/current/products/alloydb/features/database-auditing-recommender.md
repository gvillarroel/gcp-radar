---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.485Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Database auditing recommender"
feature_slug: "database-auditing-recommender"
latest_feature_date: "2025-04-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots"
  - "https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners"
  - "https://docs.cloud.google.com/alloydb/docs/ai/secure-agent-interactions-mcp"
keywords:
  - "database"
  - "auditing"
  - "recommender"
  - "helps"
  - "identify"
  - "opportunities"
  - "enable"
  - "alloydb"
---

# Database auditing recommender

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

The Database auditing recommender helps identify opportunities to enable database auditing in AlloyDB.

## Extended Definition

The Database auditing recommender helps identify opportunities to enable database auditing in AlloyDB.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots](https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots)
- [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- [https://docs.cloud.google.com/alloydb/docs/ai/secure-agent-interactions-mcp](https://docs.cloud.google.com/alloydb/docs/ai/secure-agent-interactions-mcp)

## Supporting Pages

### "Optimize database performance by comparing performance snapshots \_|\_ AlloyDB\

- URL: [https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots](https://docs.cloud.google.com/alloydb/docs/optimize-database-performance-compare-snapshots)
- Source ID: `site-docs-reference-2`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- To identify and mitigate AlloyDB for PostgreSQL database performance issues, you can compare snapshots of system metrics between two points in time by manually generating performance snapshot reports.
- Example report The following is an abridged example of a generated performance snapshot report: Example performance snapshot report $ psql -d postgres -U alloydbsuperuser postgres=> select perfsnap.report(22, 23); report -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- PGSNAP DB Report for: Snapshot details -------------------------------------- Host i841-sr-primary-2a34f46e-06bc Release 14.12 Startup Time 2024-10-08 03:23:15+00 Snap Id Snap Time ------------ ---------- ------------------------ Begin Snap: 22 24.10.2024 04:33:56 (UTC) Automatic snapshot End Snap: 23 25.10.2024 04:38:56 (UTC) Automatic snapshot Elapsed: 1 day 00:04:59.979321 Database Cache sizes Shared Buffers: 31 GB Block Size: 8192 Effective Cache Size: 25 GB WAL Buffers: 16384 Host CPU %User %Nice %System %Idle %WIO %IRQ %SIRQ %Steal %Guest ------- ------- ------- ------- ------- ------- ------- ------- ------- 1.07 0.22 0.91 97.40 0.09 0.00 0.31 0.00 0.00 Host Memory Total Memory: 63 GB Available Memory: 11 GB Free Memory: 726 MB Buffers Memory: 3706 MB Load profile (in bytes) Per Second Per Transaction ------------ --------------- Redo size: 63083.64 4489.93 Logical reads: 1961.21 139.59 ...
- You can use the performance snapshot report information to identify performance issues with your performance snapshot report instance, like decreased database performance during certain times of the day or decreased performance over a certain time period.
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Optimize database performance by comparing performance snapshots Stay organized with collections Save and categorize content based on your preferences.

### "Google Cloud Ready - AlloyDB Partners \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- Source ID: `site-docs-reference-2`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Vaultree and AlloyDB: the world's first Fully Homomorphic and Searchable Cloud Encryption Solution Vaultree launches support for Google's AlloyDB Partner Advantage page Direct link Data integration, optimization, and migration Airbyte Solution Airbyte Cloud Category Data integration and migration Description Airbyte is an open-source data integration engine that helps you consolidate your data in your data warehouses, lakes, and databases.
- Partner references AlloyDB ODBC Driver Connect to live Google AlloyDB databases through bi-directional data drivers Partner Advantage page Direct link CData JDBC Driver Solution CData JDBC Driver for AlloyDB Category Data integration and migration Description CData AlloyDB JDBC Driver enables users to connect with live AlloyDB data, directly from any applications that support JDBC connectivity.
- Partner references Collibra JDBC driver for AlloyDB Collibra catalogue connector for AlloyDB Partner Advantage page Direct link Liquibase Solution Liquibase Secure Category CI/CD automation with security and governance Description Liquibase helps forward-thinking companies harness the power of Database DevOps to accelerate, secure, and manage their organization.
- Partner references Connecting Hasura to an AlloyDB Database Faster reads with AlloyDB and Hasura GraphQL API Partner Advantage page Direct link Hightouch Solution Hightouch Reverse ETL Category Reverse ETL Description Hightouch is a reverse ETL SaaS platform that helps sync customer data from your warehouse to any SaaS tool.

### "Best practices for securing agent interactions with Model Context Protocol\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/secure-agent-interactions-mcp](https://docs.cloud.google.com/alloydb/docs/ai/secure-agent-interactions-mcp)
- Source ID: `site-docs-reference-2`
- Final score: 96
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following is a conceptual example for configuration: Example: Apply a DeidentifyTemplate to filter PII gcloud ai endpoints update ENDPOINT ID \ --region=REGION \ --model-armor-config-file=model armor config.json In the following example, model armor config.json might reference a DLP template: { "safety thresholds": { "injection": "HIGH", "harmful content": "MEDIUM" }, "data protection config": { "dlp deidentify template": "projects/PROJECT NUMBER/locations/LOCATION/deidentifyTemplates/DLP TEMPLATE ID" } } Auditing and observability Visibility into agent actions is crucial for post-incident analysis and detection of compromised agents.
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Best practices for securing agent interactions with Model Context Protocol Stay organized with collections Save and categorize content based on your preferences.
- Enable Cloud Audit Logs Make sure that Data Access audit logs are enabled for MCP as well as all relevant Google Cloud services like BigQuery, Cloud SQL, AlloyDB, Firestore, and Spanner.
- Product Granular Control Mechanism Focus Cloud SQL and AlloyDB Database-level roles like CREATE ROLE in PostgreSQL and MySQL.

