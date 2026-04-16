---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.882Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Iterative filtering for ANN vector search"
feature_slug: "iterative-filtering-for-ann-vector-search"
latest_feature_date: "2025-11-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli"
  - "https://docs.cloud.google.com/sql/docs/feature_support"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-tools"
keywords:
  - "iterative"
  - "filtering"
  - "ann"
  - "vector"
  - "search"
  - "feature"
  - "improves"
  - "filters"
---

# Iterative filtering for ANN vector search

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

This feature improves ANN vector search with filters by iteratively finding more results when selective WHERE clauses return too few matches.

## Extended Definition

This feature improves ANN vector search with filters by iteratively finding more results when selective WHERE clauses return too few matches.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli)
- [https://docs.cloud.google.com/sql/docs/feature_support](https://docs.cloud.google.com/sql/docs/feature_support)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-tools](https://docs.cloud.google.com/sql/docs/mysql/admin-tools)

## Supporting Pages

### "Build context sets using Gemini CLI \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli)
- Source ID: `site-docs-reference-required-5`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- Enable cloudsql vector flag. gcloud sql instances patch INSTANCE NAME --database-flags=cloudsql vector=on Enable enable-google-ml-integration flag to allow the Cloud SQL for MySQL instance to integrate with Vertex AI. gcloud sql instances patch INSTANCE NAME --enable-google-ml-integration Create a vector column to store city embeddings ALTER TABLE airports ADD COLUMN city embedding VECTOR ( 768 ); Generate and store vector embeddings for city names UPDATE airports SET city embedding = mysql . ml embedding ( 'text-embedding-005' , city ) WHERE city IS NOT NULL ; To enable the Cloud SQL for MySQL instance to perform trigram value searches, perform the following steps.
- Prepare the database for value searches To use semantic and trigram value searches, you must configure your Cloud SQL for MySQL instance to support vector embeddings and n-gram indexing.
- For more information about the context set file and facets, see Context sets overview Generate value search queries If you want to generate value searches that specify how the system should search for and match specific values within a concept type, then you can use the /generate targeted value searches command.
- Enter the value search configuration as follows: Table name: TABLE NAME Column name: COLUMN NAME Concept type: CONCEPT TYPE Match function: MATCH FUNCTION Description: DESCRIPTION Replace the following: TABLE NAME : The table where the column associated with the concept type exists.

### Cloud SQL feature support by database engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/feature_support](https://docs.cloud.google.com/sql/docs/feature_support)
- Source ID: `site-docs-root`
- Final score: 61
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud SQL features MySQL PostgreSQL SQL Server Data protection Backups ✓ ✓ ✓ Point-in-time recovery (PITR) ✓ ✓ ✓ High availability ✓ ✓ ✓ Cloning ✓ ✓ ✓ Disaster recovery ✓ ✓ ✓ Data migration Data migration to external servers ✓ Logs Instance logging ✓ ✓ ✓ Planned maintenance Maintenance windows ✓ ✓ ✓ Maintenance controls ✓ ✓ ✓ Self service maintenance ✓ ✓ ✓ Replication Read replicas ✓ ✓ ✓ Cross-region read replicas ✓ ✓ ✓ External read replicas ✓ ✓ ✓ Binary logging on read replicas ✓ Replication from an external server ✓ ✓ Read replica indexes stored procedures ✓ Logical replication ✓ Security Customer-managed encryption keys (CMEK) ✓ ✓ ✓ Cloud SQL Auth Proxy support ✓ ✓ ✓ Audit logging ✓ ✓ ✓ Connection organization policies ✓ ✓ ✓ IAM database authentication ✓ ✓ Access Transparency (AXT) ✓ ✓ ✓ Key Access Justification ✓ ✓ ✓ Private Service Connect ✓ ✓ ✓ Cloud Security Command Center Monitoring ✓ ✓ ✓ Cloud External Key Manager (EKM) ✓ ✓ ✓ VPC Service Controls ✓ ✓ ✓ Insights Query Insights ✓ ✓ Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Databases Cloud SQL Guides Send feedback Cloud SQL feature support by database engine Stay organized with collections Save and categorize content based on your preferences.
- This page lists the main features of Cloud SQL and indicates which database engines support these features.

### "Connect from other MySQL tools \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-tools](https://docs.cloud.google.com/sql/docs/mysql/admin-tools)
- Source ID: `site-docs-reference-required-5`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

