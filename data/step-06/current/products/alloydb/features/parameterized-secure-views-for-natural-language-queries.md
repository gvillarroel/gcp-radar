---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.616Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Parameterized secure views for natural language queries"
feature_slug: "parameterized-secure-views-for-natural-language-queries"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
  - "https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language"
  - "https://docs.cloud.google.com/alloydb/docs/reference/database-flags"
keywords:
  - "query data scope control"
  - "secure views for NLQ"
  - "secure NLQ views"
  - "parameterized secure views"
  - "parameterized views"
  - "AlloyDB Omni secure views"
  - "natural language queries"
---

# Parameterized secure views for natural language queries

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

AlloyDB Omni adds parameterized secure views to limit data scope for natural-language queries.

## Extended Definition

AlloyDB Omni adds parameterized secure views to limit data scope for natural-language queries.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- [https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language](https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language)
- [https://docs.cloud.google.com/alloydb/docs/reference/database-flags](https://docs.cloud.google.com/alloydb/docs/reference/database-flags)

## Supporting Pages

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- QueryData also adds support for Parameterized secure views (PSVs) to help secure applications that use natural language queries.
- September 04, 2025 Feature Parameterized secure views in AlloyDB for PostgreSQL enhance data security and row access control while using SQL, providing a new secure interface for application developers.
- Feature AlloyDB for PostgreSQL supports parameterized secure views, which provide a secure interface for application developers by improving data security and row access control while using SQL.
- Also starting in version 15.7.0, the related function, google exec param query , has been renamed to execute parameterized query and is available in the parameterized views extension.

### "Generate SQL queries using natural language questions \_|\_ AlloyDB for\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language](https://docs.cloud.google.com/alloydb/docs/ai/generate-sql-queries-natural-language)
- Source ID: `site-docs-root-2`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You achieve this by providing param names and param values inputs, as shown in the following example: SELECT alloydb ai nl . get sql summary ( nl config id = > 'my app config' , nl question = > 'Give me the total number of accounts and the earliest opening date and other information for accounts who choose issuance after transaction are staying in east Bohemia region?' , param names = > ARRAY [ 'user id' ], param values = > ARRAY [ '123' ] ); Providing param names and param values arguments makes sure that, when the nl question is answerable by a SQL statement that is enforced by parameterized secure views, the designated security filters are applied when the result set is produced and the summary is generated.
- Manage application data security using AlloyDB parameterized secure views Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- SELECT alloydb ai nl . apply generated templates ( 'my app config' ); Configure security for natural language To configure security for AlloyDB AI natural language, see Manage data application security using parameterized secure views .
- Other information about these accounts is not provided in the result set." } You can secure the tables and views accessed by a query in alloydb ai nl.get sql summary using one or more parameterized secure views .

### "Supported database flags \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/database-flags](https://docs.cloud.google.com/alloydb/docs/reference/database-flags)
- Source ID: `site-api-reference`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- No No log statement stats Standard default No No log temp files 0 No No log timezone Standard default No No maintenance work mem Standard default No No max active replication origins (PostgreSQL 18) Standard default Yes No max connections 1000 Yes Yes max locks per transaction Standard default Yes Yes max logical replication workers Standard default Yes No max notify queue pages (PostgreSQL 17) 1048576 Yes Yes max parallel apply workers per subscription (PostgreSQL 16) 2 No No max parallel maintenance workers Standard default No No max parallel workers The instance CPU count or 8 , whichever is greater No No max parallel workers per gather Half of the instance CPU count or 2 , whichever is greater No No max pred locks per page Standard default Yes No max pred locks per relation Standard default Yes No max pred locks per transaction Standard default Yes No max prepared transactions Standard default Yes Yes max replication slots 50 Yes No max standby archive delay Standard default No No max standby streaming delay Standard default No No max sync workers per subscription Standard default No No max wal senders 50 Yes Yes max wal size 1504 No No max worker processes 64 Yes Yes md5 password warnings (PostgreSQL 18) Standard default No No min wal size Standard default No No multixact member buffers (PostgreSQL 17) 32 Yes No multixact offset buffers (PostgreSQL 17) 32 Yes No notify buffers (PostgreSQL 17) 16 Yes No parameterized views.enabled off Yes No parameterized views.json results max rows 1,000,000 No No parameterized views.json results max size 1,048,576 No No parameterized views.max parallel workers per gather -1 No No parameterized views.statement timeout 0 No No parameterized views.temp file limit -1 No No parameterized views.work mem 0 No No password encryption Standard default No No password.enforce password does not contain username OFF No No password.enforce expiration OFF No No password.enforce complexity OFF No No password.expiration in days 90 No No password.min uppercase letters 0 No No password.max uppercase letters 1000 No No password.min lowercase letters 0 No No password.max lowercase letters 1000 No No password.min numerical chars 0 No No password.max numerical chars 1000 No No password.min special chars 0 No No password.max special chars 1000 No No password.min pass length 0 No No password.max pass length 1000 No No password.notify expiration in days 30 No No perfsnap.interval 86400 No No perfsnap.retention 7 days No No pg bigm.enable recheck Standard default No No pg bigm.gin key limit Standard default No No pg bigm.similarity limit Standard default No No pg hint plan.debug print Standard default No No pg hint plan.enable hint Standard default No No pg hint plan.enable hint table Standard default No No pg hint plan.message level Standard default No No pg hint plan.parse messages Standard default No No pg stat statements.max Standard default Yes No pg stat statements.save Standard default No No pg stat statements.track Standard default No No pg stat statements.track utility Standard default No No pgaudit.log Standard default No No pgaudit.log catalog Standard default No No pgaudit.log client Standard default No No pgaudit.log level Standard default No No pgaudit.log parameter Standard default No No pgaudit.log relation Standard default No No pgaudit.log statement once Standard default No No pgaudit.role Standard default No No pglogical.batch inserts Standard default Yes No pglogical.conflict log level Standard default No No pglogical.conflict resolution Standard default No No pglogical.extra connection options Standard default No No pglogical.synchronous commit Standard default Yes No pglogical.use spi Standard default Yes No random page cost Standard default No No replacement sort tuples Standard default No No reserved connections (PostgreSQL 16) 0 Yes No scram iterations (PostgreSQL 16) 4096 No No send abort for crash (PostgreSQL 16) off No No send abort for kill (PostgreSQL 16) off No No serializable buffers (PostgreSQL 17) 32 Yes No shared buffers 80% of instance memory Yes No scann.enable preview features off Yes No scann.maintenance background naptime s 1 minute Yes No ssl groups (PostgreSQL 18) Standard default No No ssl max protocol version Standard default No No ssl min protocol version Standard default No No ssl tls13 ciphers (PostgreSQL 18) Standard default No No squeeze.worker autostart Standard default No No squeeze.worker role Standard default No No squeeze.workers per database Default value is 1 No No squeeze.max xlock time Default value is 1 .

