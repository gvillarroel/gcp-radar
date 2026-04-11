---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.805Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Iterative filtering for ANN vector search"
feature_slug: "iterative-filtering-for-ann-vector-search"
latest_feature_date: "2025-11-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli"
keywords:
  - "iterative"
  - "filtering"
  - "for"
  - "ann"
  - "vector"
  - "search"
  - "this"
  - "improves"
---

# Iterative filtering for ANN vector search

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

This feature improves ANN vector search with filters by iteratively finding more results when selective WHERE clauses return too few matches.

## Extended Definition

This feature improves ANN vector search with filters by iteratively finding more results when selective WHERE clauses return too few matches.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli)

## Supporting Pages

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- To enable iterative filtering for your ANN search query, set the cloudsql vector iterative filtering flag to ON .
- This feature automates read pool scale in and scale out operations based on one or both of the following conditions: Allowed CPU usage of the read pool Allowed number of client connections to the read pool November 13, 2025 Feature Cloud SQL for MySQL now lets you have more control over the number of results that are returned when you perform an ANN vector search with filters.
- To enable and use iterative filtering for your ANN search query, you must have [MYSQL $VERSION].R20251004.01 07 or later installed on your MySQL instance.
- You can use iterative filtering when the selective filters of the WHERE clause in your ANN search query produce fewer results than the number of results specified in your LIMIT clause.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- To enable iterative filtering for your ANN search query, set the cloudsql vector iterative filtering flag to ON .
- This feature automates read pool scale in and scale out operations based on one or both of the following conditions: Allowed CPU usage of the read pool Allowed number of client connections to the read pool November 13, 2025 Cloud SQL for MySQL Feature Cloud SQL for MySQL now lets you have more control over the number of results that are returned when you perform an ANN vector search with filters.
- To enable and use iterative filtering for your ANN search query, you must have [MYSQL $VERSION].R20251004.01 07 or later installed on your MySQL instance.
- You can use iterative filtering when the selective filters of the WHERE clause in your ANN search query produce fewer results than the number of results specified in your LIMIT clause.

### "Build context sets using Gemini CLI \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli)
- Source ID: `site-iam-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Enable cloudsql vector flag. gcloud sql instances patch INSTANCE NAME --database-flags=cloudsql vector=on Enable enable-google-ml-integration flag to allow the Cloud SQL for MySQL instance to integrate with Vertex AI. gcloud sql instances patch INSTANCE NAME --enable-google-ml-integration Create a vector column to store city embeddings ALTER TABLE airports ADD COLUMN city embedding VECTOR ( 768 ); Generate and store vector embeddings for city names UPDATE airports SET city embedding = mysql . ml embedding ( 'text-embedding-005' , city ) WHERE city IS NOT NULL ; To enable the Cloud SQL for MySQL instance to perform trigram value searches, perform the following steps.
- Prepare the database for value searches To use semantic and trigram value searches, you must configure your Cloud SQL for MySQL instance to support vector embeddings and n-gram indexing.
- For more information about the context set file and facets, see Context sets overview Generate value search queries If you want to generate value searches that specify how the system should search for and match specific values within a concept type, then you can use the /generate targeted value searches command.
- MySQL PostgreSQL SQL Server Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms , and the Additional Terms for Generative AI Preview Products .

