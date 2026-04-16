---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.195Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Graph QA chain for Spanner"
feature_slug: "graph-qa-chain-for-spanner"
latest_feature_date: "2025-03-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/graph/iso-standards"
  - "https://docs.cloud.google.com/spanner/docs/backup"
  - "https://docs.cloud.google.com/spanner/docs/query-operators-binary"
keywords:
  - "chain"
  - "langchain"
  - "integration"
  - "supports"
  - "graph"
---

# Graph QA chain for Spanner

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner Graph now supports a LangChain Graph QA chain integration that uses a graph to answer questions.

## Extended Definition

Spanner Graph now supports a LangChain Graph QA chain integration that uses a graph to answer questions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/graph/iso-standards](https://docs.cloud.google.com/spanner/docs/graph/iso-standards)
- [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)
- [https://docs.cloud.google.com/spanner/docs/query-operators-binary](https://docs.cloud.google.com/spanner/docs/query-operators-binary)

## Supporting Pages

### Spanner Graph and ISO standards \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/graph/iso-standards](https://docs.cloud.google.com/spanner/docs/graph/iso-standards)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Spanner Graph is based on two ISO standards: ISO/IEC 9075-16:2023 - Information technology — Database languages SQL Property Graph Queries (SQL/PGQ) , Edition 1, 2023 ISO/IEC 39075:2024 - Information technology — Database languages — GQL , Edition 1, 2024 The following tables describe the high-level relationship between SQL/PGQ, GQL, and how Spanner Graph supports these standards.
- The page describes how Spanner Graph supports the ISO international standard query language for graph databases.
- Supports using CREATE PROPERTY GRAPH with open types and closed types.
- Spanner Graph supports additional features in the ISO standards.

### Backups overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)
- Source ID: `site-docs-root`
- Final score: 53
- Re-rank relevance: N/A

Evidence snippets:
- The total retention duration for the full backup is at most the lower of the following values: retention duration + 28 days retention duration + ( creation interval 14) Backup copy : When you copy an incremental backup, Spanner also copies all the older backups in the chain required to restore the copied backup.
- This size represents the billable size of the backup. freeableSizeBytes : shows the number of bytes that are released if you delete the backup. oldestVersionTime : shows the versionTime of the oldest full backup in the chain, even if that backup has expired.
- This means that if a newer incremental backup exists, the data of all older backups in the chain cannot be deleted from the system and the freeableSizeBytes field for all older backups in the same chain is zero.
- While Spanner aims to avoid redundant copies, in rare situations, Spanner might need to copy all the older backups in the chain, even if previously copied backups already exist in the destination instance.

### Binary operators \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/query-operators-binary](https://docs.cloud.google.com/spanner/docs/query-operators-binary)
- Source ID: `site-docs-reference`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- CREATE TABLE Collaborations ( SingerId INT64 NOT NULL , FeaturingSingerId INT64 NOT NULL , AlbumTitle STRING ( MAX ) NOT NULL , ) PRIMARY KEY ( SingerId , FeaturingSingerId , AlbumTitle ); CREATE OR REPLACE PROPERTY GRAPH MusicGraph NODE TABLES ( Singers KEY ( SingerId ) LABEL Singers PROPERTIES ( BirthDate , FirstName , LastName , SingerId , SingerInfo ) ) EDGE TABLES ( Collaborations AS CollabWith KEY ( SingerId , FeaturingSingerId , AlbumTitle ) SOURCE KEY ( SingerId ) REFERENCES Singers ( SingerId ) DESTINATION KEY ( FeaturingSingerId ) REFERENCES Singers ( SingerId ) LABEL CollabWith PROPERTIES ( AlbumTitle , FeaturingSingerId , SingerId ), ); The following graph query finds singers who have collaborated with a given singer or collaborated with those collaborators.
- The query engine supports a Distributed Merge algorithm, which lets the sort occur locally instead of globally, distributing and parallelizing the CPU cost.
- GRAPH MusicGraph MATCH ( singer : Singers { singerId : 42 } ) -[ c : CollabWith ]->{ 1 , 2 } ( featured : Singers ) RETURN singer .
- In the following example, the Collaborations table is added to the schema, and a property graph called MusicGraph is created.

