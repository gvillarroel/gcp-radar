---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.424Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "database/memory/total_usage metric"
feature_slug: "database-memory-total-usage-metric"
latest_feature_date: "2021-01-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
keywords:
  - "database"
  - "memory"
  - "total"
  - "usage"
  - "metric"
  - "sql"
  - "exposes"
  - "the"
---

# database/memory/total_usage metric

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL exposes the database/memory/total_usage metric to show database working set memory usage including buffer cache.

## Extended Definition

Cloud SQL exposes the database/memory/total_usage metric to show database working set memory usage including buffer cache.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)

## Supporting Pages

### Cloud SQL metrics \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics)
- Source ID: `site-api-reference`
- Final score: 220
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- After sampling, data is not visible for up to 165 seconds. event type : Kind of Mysql event, one of [innodb hash0hash,innodb memory,innodb row0sel,sql table,sql thd main,sql dd,sql string,mysys iocache] database/mysql/memory/global GA (project) Global memory allocated GAUGE , DOUBLE , By cloudsql database The total allocated memory, reported by performance schema.
- After sampling, data is not visible for up to 165 seconds. database/sqlserver/memory/checkpoint page count GA (project) Checkpoint pages DELTA , INT64 , 1 cloudsql database Total number of pages flushed to disk by a checkpoint or other operation that requires all dirty pages to be flushed.
- After sampling, data is not visible for up to 165 seconds. state : The state of the instance. database/memory/components BETA (project) Memory components GAUGE , DOUBLE , 1 cloudsql database Memory stats components in percentage as usage, cache and free memory for the database.
- After sampling, data is not visible for up to 165 seconds. component : Name of the component, one of [usage, cache and free]. database/memory/quota GA (project) Memory quota GAUGE , INT64 , By cloudsql database Maximum RAM size in bytes.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- January 13, 2021 Cloud SQL for MySQL Feature Cloud SQL now exposes the metric database/memory/total usage .
- Cloud SQL for PostgreSQL Feature Cloud SQL now exposes the metric database/memory/total usage .
- Cloud SQL for SQL Server Feature Cloud SQL now exposes the metric database/memory/total usage .
- For more information about database/memory/total usage , see Cloud SQL Metrics .

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- January 13, 2021 Feature Cloud SQL now exposes the metric database/memory/total usage .
- For more information about database/memory/total usage , see Cloud SQL Metrics .
- September 28, 2023 Feature The following pg wait sampling and rdkit flags are generally available: pg wait sampling flags cloudsql.enable pg wait sampling: enable the pg wait sampling extension for Cloud SQL for PostgreSQL instances. pg wait sampling.history size: set the size of the in-memory ring buffer for history sampling, in terms of the number of samples. pg wait sampling.history period: set the time interval for history sampling, in milliseconds. pg wait sampling.profile period: set the time interval for profile sampling for wait events, in milliseconds. pg wait sampling.profile pid: specify whether the wait profile that accumulates samples for each process and waits event is collected for each process or for all processes. pg wait sampling.profile queries: specify whether the wait profile is collected for each query or for all queries. rdkit flags rdkit.tanimoto threshold: set the threshold value for the Tanimoto similarity operator. rdkit.dice threshold: set the threshold value for the Dice similarity operator. rdkit.do chiral sss: specify whether stereochemistry is used in substructure matching. rdkit.do enhanced stereo sss: specify whether enhanced stereo is used in substructure matching. rdkit.sss fp size: set the size of the fingerprint used for substructure screening, in bits. rdkit.morgan fp size: set the size of morgan fingerprints, in bits. rdkit.featmorgan fp size: set the size of featmorgan fingerprints, in bits. rdkit.layered fp size: set the size of layered fingerprints, in bits. rdkit.rdkit fp size: set the size of rdkit fingerprints, in bits. rdkit.hashed torsion fp size: set the size of topological torsion bit vector fingerprints, in bits. rdkit.hashed atompair fp size: set the size of atom pair bit vector fingerprints, in bits. rdkit.reaction sss fp size: set the size of the structural chemical reaction fingerprint, in bits. rdkit.reaction difference fp size: set the size of the difference chemical reaction fingerprint, in bits. rdkit.reaction sss fp type: specify the type of structural chemical reaction fingerprint. rdkit.reaction difference fp type: specify the type of difference chemical reaction fingerprint. rdkit.ignore reaction agents: specify whether agents of a chemical reaction are taken into account. rdkit.agent FP bit ratio: specify the weight of the impact of agents contained in a chemical reaction fingerprint. rdkit.move unmmapped reactants to agents: specify whether unmapped reactant agents of a chemical reaction are taken into account. rdkit.threshold unmapped reactant atoms: set the ratio of allowed unmapped reactant atoms. rdkit.init reaction: specify whether the reaction is ready for use. rdkit.difference FP weight agents: specify the weight factor for agents compared to reactants and products in reaction difference fingerprints. rdkit.difference FP weight nonagents: specify the weight factor for reactants and products compared to agents in reaction difference fingerprints. rdkit.avalon fp size: set the size of avalon fingerprints, in bits.
- Use this flag when you're deciding whether to run a VACUUM . autovacuum vacuum insert threshold : specify the minimum number of inserted records or rows (tuples) that you need to run a VACUUM in any database table. effective io concurrency : set the number of concurrent disk I/O operations that can run simultaneously. hash mem multiplier : compute the maximum amount of memory that hash-based operations can use. logical decoding work mem : specify the maximum amount of memory that logical decoding can use before some of the decoded changes are written to a local disk. maintenance io concurrency : set the number of concurrent disk I/O operations that can run simultaneously for maintenance work that's done for client sessions. vacuum failsafe age : specify the maximum age (in transactions) that a database table's pg class.relfrozenxid field can attain before a VACUUM takes extraordinary measures to avoid a system-wide wraparound failure for transaction IDs. vacuum multixact failsafe age : specify the maximum age (in multiple transactions) that a database table's pg class.relminmxid field can attain before a VACUUM takes extraordinary measures to avoid a system-wide wraparound failure for multiple transaction IDs.

