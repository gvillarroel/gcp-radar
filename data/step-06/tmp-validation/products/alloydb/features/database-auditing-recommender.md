---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.105Z"
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
  - "auditing"
  - "opportunities"
  - "recommender"
  - "identify"
  - "enable"
  - "database"
  - "helps"
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
- You can use the performance snapshot report information to identify performance issues with your performance snapshot report instance, like decreased database performance during certain times of the day or decreased performance over a certain time period.
- To identify and mitigate AlloyDB for PostgreSQL database performance issues, you can compare snapshots of system metrics between two points in time by manually generating performance snapshot reports.
- When used on a read pool node, the report helps identify if replication lag is caused by system resource constraints, such as CPU or memory, or specific query conflicts, such as buffer pins.
- Response Time Profile (in s) CPU time: 5399 ( 0.39%) Wait time: 1386906 ( 99.61%) Total time: 1392306 Backend Processes Wait Class Breakdown (in s) IO 119.300 ( 98.91%) LWLock 1.305 ( 1.08%) IPC .010 ( 0.01%) Lock .000 ( 0.00%) Backend Processes Wait Information Event Class Waits Time (us) Avg (us) -------------------------------------- ------------- ------------- -------------- ------------- CPU 1995948632 WALInsert LWLock 1 6656 6656 Vacuum Information Num Analyze operations: 1976 Num Vacuum operations: 3435 Per Database Information Name Commits Rollbacks BlkRds Blkhits TempFiles TempBytes ------------------------- ------------- ------------- ------------- ------------- ------------- ------------- bench 27939 0 0 7823038 0 0 bytes postgres 39792 0 7 11089243 0 0 bytes Per Database DML & DQL Information Name Tuples returned Tuples fetched Tuples inserted Tuples updated Tuples deleted Index splits Index Only heap fetches HOT updates ------------------------- ---------------- ---------------- ---------------- ---------------- ---------------- ---------------- ------------------------- ---------------- bench 16119481 4843262 0 0 0 0 16 0 postgres 25415473 6327188 0 10 0 0 0 8 Per Database Conflict Information Name Lock Timeout Old Snapshot Buffer Pins Deadlock ------------------------- ------------- ------------- ------------- ------------- bench 0 0 0 0 postgres 0 0 0 0 Per Database Vacuum Information Name Frozen XID % Consumed Aggregate Vacuum Gap ------------------------- ------------- ------------- -------------------- bench 179460916 9.00% 20539084 postgres 179339239 9.00% 20660761 Per Database Sizing Information Conn.

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
- The Logs Explorer query identifies service accounts performing data write operations in Firestore, for example, which is a common target for exfiltration or destructive attacks: resource.type="firestore database" Filter for data write operations AND protoPayload.methodName="google.firestore.v1.Firestore.Commit" Ensure the caller is an agent service account (modify regex as needed) AND protoPayload.authenticationInfo.principalEmail= ". @. .gserviceaccount.com" Exclude expected system calls to reduce noise AND NOT protoPayload.authenticationInfo.principalEmail= "system-managed-service-account" Use agent-specific logging In addition to Cloud Audit Logs, make sure that your application code logs the following data for every agent decision: Tool execution: the MCP tool that was called.
- Home Documentation Databases AlloyDB for PostgreSQL Guides Send feedback Best practices for securing agent interactions with Model Context Protocol Stay organized with collections Save and categorize content based on your preferences.
- Example: Enable Model Armor on a Vertex AI endpoint gcloud ai endpoints update ENDPOINT ID \ --region=REGION \ --enable-model-armor For more information and examples, see Configure Model Armor protection for MCP on Google Cloud .

