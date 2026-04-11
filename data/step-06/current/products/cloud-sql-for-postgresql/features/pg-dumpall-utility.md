---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.371Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "pg_dumpall utility"
feature_slug: "pg-dumpall-utility"
latest_feature_date: "2023-05-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp"
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
keywords:
  - "pg"
  - "dumpall"
  - "utility"
  - "the"
  - "is"
  - "generally"
  - "available"
  - "for"
---

# pg_dumpall utility

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

The pg_dumpall utility is generally available for extracting all PostgreSQL databases in a cluster into a single script file.

## Extended Definition

The pg_dumpall utility is generally available for extracting all PostgreSQL databases in a cluster into a single script file.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp](https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp)
- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)

## Supporting Pages

### "Export and import using pg_dump, pg_dumpall, and pg_restore \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp](https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Export data from an on-premises PostgreSQL server using pg dump To export a database that is not managed by Cloud SQL, for later import into Cloud SQL, use the pg dump utility with the following flags: --no-owner Ownership change commands must not be included in the dump file. --format The custom and directory formats are allowed if the dump file is intended for use with pg restore .
- This format is not compatible with pg restore , and must be imported using the Google Cloud console import command or psql client. --no-acl This flag is required if your dump would otherwise contain statements to grant or revoke membership in a SUPERUSER role. --clean This optional flag enables you to include the DROP <object> SQL statement that's required to drop (clean) database objects before you import them. --if-exists This optional flag enables you to include the IF EXISTS SQL statement with each DROP statement that's produced by the clean flag.
- To export all PostgreSQL databases in a Cloud SQL instance, use the pg dumpall utility with the following mandatory flags: exclude-database=cloudsqladmin exclude-database=template The pg dumpall utility doesn't have access to the cloudsqladmin or template databases.
- Import from a dump file created with the custom format to Cloud SQL for PostgreSQL If the dump file was created with custom format, run the following command: pg restore \ --list DATABASE NAME .dmp sed -E 's/(.

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- September 28, 2023 Feature The following pg wait sampling and rdkit flags are generally available: pg wait sampling flags cloudsql.enable pg wait sampling: enable the pg wait sampling extension for Cloud SQL for PostgreSQL instances. pg wait sampling.history size: set the size of the in-memory ring buffer for history sampling, in terms of the number of samples. pg wait sampling.history period: set the time interval for history sampling, in milliseconds. pg wait sampling.profile period: set the time interval for profile sampling for wait events, in milliseconds. pg wait sampling.profile pid: specify whether the wait profile that accumulates samples for each process and waits event is collected for each process or for all processes. pg wait sampling.profile queries: specify whether the wait profile is collected for each query or for all queries. rdkit flags rdkit.tanimoto threshold: set the threshold value for the Tanimoto similarity operator. rdkit.dice threshold: set the threshold value for the Dice similarity operator. rdkit.do chiral sss: specify whether stereochemistry is used in substructure matching. rdkit.do enhanced stereo sss: specify whether enhanced stereo is used in substructure matching. rdkit.sss fp size: set the size of the fingerprint used for substructure screening, in bits. rdkit.morgan fp size: set the size of morgan fingerprints, in bits. rdkit.featmorgan fp size: set the size of featmorgan fingerprints, in bits. rdkit.layered fp size: set the size of layered fingerprints, in bits. rdkit.rdkit fp size: set the size of rdkit fingerprints, in bits. rdkit.hashed torsion fp size: set the size of topological torsion bit vector fingerprints, in bits. rdkit.hashed atompair fp size: set the size of atom pair bit vector fingerprints, in bits. rdkit.reaction sss fp size: set the size of the structural chemical reaction fingerprint, in bits. rdkit.reaction difference fp size: set the size of the difference chemical reaction fingerprint, in bits. rdkit.reaction sss fp type: specify the type of structural chemical reaction fingerprint. rdkit.reaction difference fp type: specify the type of difference chemical reaction fingerprint. rdkit.ignore reaction agents: specify whether agents of a chemical reaction are taken into account. rdkit.agent FP bit ratio: specify the weight of the impact of agents contained in a chemical reaction fingerprint. rdkit.move unmmapped reactants to agents: specify whether unmapped reactant agents of a chemical reaction are taken into account. rdkit.threshold unmapped reactant atoms: set the ratio of allowed unmapped reactant atoms. rdkit.init reaction: specify whether the reaction is ready for use. rdkit.difference FP weight agents: specify the weight factor for agents compared to reactants and products in reaction difference fingerprints. rdkit.difference FP weight nonagents: specify the weight factor for reactants and products compared to agents in reaction difference fingerprints. rdkit.avalon fp size: set the size of avalon fingerprints, in bits.
- January 19, 2021 Feature Database auditing in Cloud SQL for PostgreSQL is generally available , through the open-source pgAudit extension.
- Please use this table to find the name of the maintenance version to apply, and use that version or the latest version available: PostgreSQL version Maintenance version PostgreSQL 9.6 POSTGRES 9 6 24.R20220710.01 02 PostgreSQL 10 POSTGRES 10 21.R20220710.01 02 PostgreSQL 11 POSTGRES 11 16.R20220710.01 02 PostgreSQL 12 POSTGRES 12 11.R20220710.01 02 PostgreSQL 13 POSTGRES 13 7.R20220710.01 02 After you have identified the name of the maintenance version, please upgrade to the target maintenance version , performing the corresponding update of your instances (to the latest maintenance version).
- May 19, 2023 Feature The following extensions , views , utilities , and flags are generally available: Extensions postgresql anonymizer: mask or replace personally identifiable information (PII) or sensitive data from a PostgreSQL database. pgtt: create, manage and use Oracle-style global temporary tables. rdkit: compare, manipulate, and identify molecular structures.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- September 28, 2023 Cloud SQL for PostgreSQL Feature The following pg wait sampling and rdkit flags are generally available: pg wait sampling flags cloudsql.enable pg wait sampling: enable the pg wait sampling extension for Cloud SQL for PostgreSQL instances. pg wait sampling.history size: set the size of the in-memory ring buffer for history sampling, in terms of the number of samples. pg wait sampling.history period: set the time interval for history sampling, in milliseconds. pg wait sampling.profile period: set the time interval for profile sampling for wait events, in milliseconds. pg wait sampling.profile pid: specify whether the wait profile that accumulates samples for each process and waits event is collected for each process or for all processes. pg wait sampling.profile queries: specify whether the wait profile is collected for each query or for all queries. rdkit flags rdkit.tanimoto threshold: set the threshold value for the Tanimoto similarity operator. rdkit.dice threshold: set the threshold value for the Dice similarity operator. rdkit.do chiral sss: specify whether stereochemistry is used in substructure matching. rdkit.do enhanced stereo sss: specify whether enhanced stereo is used in substructure matching. rdkit.sss fp size: set the size of the fingerprint used for substructure screening, in bits. rdkit.morgan fp size: set the size of morgan fingerprints, in bits. rdkit.featmorgan fp size: set the size of featmorgan fingerprints, in bits. rdkit.layered fp size: set the size of layered fingerprints, in bits. rdkit.rdkit fp size: set the size of rdkit fingerprints, in bits. rdkit.hashed torsion fp size: set the size of topological torsion bit vector fingerprints, in bits. rdkit.hashed atompair fp size: set the size of atom pair bit vector fingerprints, in bits. rdkit.reaction sss fp size: set the size of the structural chemical reaction fingerprint, in bits. rdkit.reaction difference fp size: set the size of the difference chemical reaction fingerprint, in bits. rdkit.reaction sss fp type: specify the type of structural chemical reaction fingerprint. rdkit.reaction difference fp type: specify the type of difference chemical reaction fingerprint. rdkit.ignore reaction agents: specify whether agents of a chemical reaction are taken into account. rdkit.agent FP bit ratio: specify the weight of the impact of agents contained in a chemical reaction fingerprint. rdkit.move unmmapped reactants to agents: specify whether unmapped reactant agents of a chemical reaction are taken into account. rdkit.threshold unmapped reactant atoms: set the ratio of allowed unmapped reactant atoms. rdkit.init reaction: specify whether the reaction is ready for use. rdkit.difference FP weight agents: specify the weight factor for agents compared to reactants and products in reaction difference fingerprints. rdkit.difference FP weight nonagents: specify the weight factor for reactants and products compared to agents in reaction difference fingerprints. rdkit.avalon fp size: set the size of avalon fingerprints, in bits.
- January 19, 2021 Cloud SQL for PostgreSQL Feature Database auditing in Cloud SQL for PostgreSQL is generally available , through the open-source pgAudit extension.
- Cloud SQL for SQL Server Feature The database major version upgrade feature of Cloud SQL for SQL Server is generally available.
- December 11, 2023 Cloud SQL for PostgreSQL Feature The pgvector extension, version 0.5.1 is generally available.

