---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.321Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Secondary index backfill progress tracking"
feature_slug: "secondary-index-backfill-progress-tracking"
latest_feature_date: "2021-04-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database"
  - "https://docs.cloud.google.com/spanner/docs/information-schema-pg"
  - "https://docs.cloud.google.com/spanner/docs/information-schema"
keywords:
  - "tracking"
  - "backfill"
  - "secondary"
  - "progress"
  - "allows"
  - "index"
---

# Secondary index backfill progress tracking

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Cloud Spanner now allows you to track the progress of long-running secondary index backfill operations via the gcloud CLI, REST API, and RPC API.

## Extended Definition

Cloud Spanner now allows you to track the progress of long-running secondary index backfill operations via the gcloud CLI, REST API, and RPC API.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)

## Supporting Pages

### "Best practices for using Spanner as a gaming database \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database](https://docs.cloud.google.com/spanner/docs/best-practices-gaming-database)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- In load tests, this model does an acceptable job of distributing the secondary index read and write load across multiple Spanner splits, as illustrated in the following diagram: Although the synthetic data used in the load test is similar to the eventual steady state of the game where Attribute values are well distributed, the game design dictates that all players start with Attribute=50 .
- If your game allows players to have separate saved progress for multiple characters, like many large persistent massively multiplayer games, then this table typically contains a row for each character instead.
- Tracking valuable in-game items or critical player progress typically requires transactions and is challenging to work around in many types of distributed databases.
- Because each new player starts with Attribute=50 , when new players join they are inserted in the same part of the idx attribute secondary index.

### "Information schema for GoogleSQL-dialect databases \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema](https://docs.cloud.google.com/spanner/docs/information-schema)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Tables with a PRIMARY KEY specification have a pseudo-index entry generated with the name PRIMARY KEY , which allows the fields of the primary key to be determined.
- PARENT TABLE NAME STRING Secondary indexes can be interleaved in a parent table, as discussed in Creating a secondary index .
- Spanner does not begin enforcing the constraint until the foreign key's backing indexes are created and backfilled.
- Possible values and the states they represent are: BACKFILLING INDEXES : indexes are being backfilled.

### "Information schema for PostgreSQL-dialect databases \_|\_ Spanner \_|\_\

- URL: [https://docs.cloud.google.com/spanner/docs/information-schema-pg](https://docs.cloud.google.com/spanner/docs/information-schema-pg)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Possible values and the states they represent are: NULL : the index type is PRIMARY KEY PREPARE : creating empty tables for a new index WRITE ONLY : backfilling data for a new index WRITE ONLY CLEANUP : cleaning up a new index WRITE ONLY VALIDATE UNIQUE : checking uniqueness of data in a new index READ WRITE : normal index operation spanner is managed character varying Whether the index is managed by Spanner.
- Tables created with a PRIMARY KEY clause have a pseudo-index entry generated with the name PRIMARY KEY , which allows the fields of the primary key to be identified. index type character varying The type of the index.
- A table can go through multiple states during creation, if bulk operations are involved, for example, when the table is created with a foreign key that requires backfilling of its referenced index.
- The values include PRIMARY KEY , LOCAL , or GLOBAL . parent table name character varying Secondary indexes can be interleaved in a parent table, as discussed in Creating a secondary index .

