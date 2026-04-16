---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.188Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner Graph visualizations"
feature_slug: "spanner-graph-visualizations"
latest_feature_date: "2025-04-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/graph/iso-standards"
  - "https://docs.cloud.google.com/spanner/docs/create-query-database-console"
  - "https://docs.cloud.google.com/spanner/docs/query-operators-binary"
keywords:
  - "visualizing"
  - "visualizations"
  - "result"
  - "supports"
  - "graph"
  - "query"
---

# Spanner Graph visualizations

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner Graph now supports visualizing query result graphs and schema graphs to help identify patterns, dependencies, and anomalies.

## Extended Definition

Spanner Graph now supports visualizing query result graphs and schema graphs to help identify patterns, dependencies, and anomalies.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/graph/iso-standards](https://docs.cloud.google.com/spanner/docs/graph/iso-standards)
- [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)
- [https://docs.cloud.google.com/spanner/docs/query-operators-binary](https://docs.cloud.google.com/spanner/docs/query-operators-binary)

## Supporting Pages

### Spanner Graph and ISO standards \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/graph/iso-standards](https://docs.cloud.google.com/spanner/docs/graph/iso-standards)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The page describes how Spanner Graph supports the ISO international standard query language for graph databases.
- Spanner Graph is based on two ISO standards: ISO/IEC 9075-16:2023 - Information technology — Database languages SQL Property Graph Queries (SQL/PGQ) , Edition 1, 2023 ISO/IEC 39075:2024 - Information technology — Database languages — GQL , Edition 1, 2024 The following tables describe the high-level relationship between SQL/PGQ, GQL, and how Spanner Graph supports these standards.
- Standard SQL/PGQ GQL Spanner Graph Query Graph pattern matching capabilities Shares the core Graph Pattern Matching Language (GPML) functionalities with GQL.
- Standard SQL/PGQ feature ID Spanner Graph Query (Graph and table interoperability) Feature G900: GRAPH TABLE Supported.

### "Create and query a database in the Google Cloud console \_|\_ Spanner \_\

- URL: [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- The Google Cloud console displays the Singers table's Spanner Studio page with a new query tab that contains the INSERT statement that you edit to insert a row in the Singers table and view the result of that insertion: GoogleSQL -- Add new values in the VALUES clause in order of the column list. -- Each value must be type compatible with its associated column.
- Create a schema for your database Note: Spanner Studio (formerly labeled Query in the Google Cloud console) supports SQL, DML, and DDL operations in a single editor.
- When finished, the Results tab displays the result of your query: GoogleSQL PostgreSQL Congratulations!
- Home Documentation Databases Spanner Guides Send feedback Create and query a database in the Google Cloud console Stay organized with collections Save and categorize content based on your preferences.

### Binary operators \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/query-operators-binary](https://docs.cloud.google.com/spanner/docs/query-operators-binary)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- CREATE TABLE Collaborations ( SingerId INT64 NOT NULL , FeaturingSingerId INT64 NOT NULL , AlbumTitle STRING ( MAX ) NOT NULL , ) PRIMARY KEY ( SingerId , FeaturingSingerId , AlbumTitle ); CREATE OR REPLACE PROPERTY GRAPH MusicGraph NODE TABLES ( Singers KEY ( SingerId ) LABEL Singers PROPERTIES ( BirthDate , FirstName , LastName , SingerId , SingerInfo ) ) EDGE TABLES ( Collaborations AS CollabWith KEY ( SingerId , FeaturingSingerId , AlbumTitle ) SOURCE KEY ( SingerId ) REFERENCES Singers ( SingerId ) DESTINATION KEY ( FeaturingSingerId ) REFERENCES Singers ( SingerId ) LABEL CollabWith PROPERTIES ( AlbumTitle , FeaturingSingerId , SingerId ), ); The following graph query finds singers who have collaborated with a given singer or collaborated with those collaborators.
- The cross apply operator output is the FirstName value from the input row, and the SongName value from the map row. (The SongName value is NULL if there is no map row that matches on SingerId .) The distributed union operator at the top of the execution plan then combines all of the output rows from the remote servers and returns them as the query results.
- The query engine supports a Distributed Merge algorithm, which lets the sort occur locally instead of globally, distributing and parallelizing the CPU cost.
- Execution time The total amount of time taken to run the query and process results.

