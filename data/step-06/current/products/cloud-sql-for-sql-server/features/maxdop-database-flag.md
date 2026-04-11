---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.589Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "MAXDOP database flag"
feature_slug: "maxdop-database-flag"
latest_feature_date: "2025-08-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/flags"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/quotas"
keywords:
  - "maxdop"
  - "database"
  - "flag"
  - "the"
  - "limits"
  - "maximum"
  - "number"
  - "of"
---

# MAXDOP database flag

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

The MAXDOP database flag limits the maximum number of threads used to run a single query in a parallel plan.

## Extended Definition

The MAXDOP database flag limits the maximum number of threads used to run a single query in a parallel plan.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/flags](https://docs.cloud.google.com/sql/docs/sqlserver/flags)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/quotas](https://docs.cloud.google.com/sql/docs/sqlserver/quotas)

## Supporting Pages

### "Configure database flags \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/flags](https://docs.cloud.google.com/sql/docs/sqlserver/flags)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Using the max degree of parallelism (MAXDOP) flag, you can control the number of threads at three levels: Instance level, using database flags Database scope, using TSQL Query level, using query hints Note that if the instance is resized, then the flag value remains unchanged. max server memory (mb) The max server memory (mb) flag limits the amount of memory that Cloud SQL can allocate for its internal pools.
- To check the numa node configuration, use a code snippet similar to the following: SELECT socket count,cores per socket,numa node count FROM sys.dm os sys info While you can use MAXDOP to limit the maximum number of processors you want to allow for parallel plan execution, you can also use the cost threshold for parallelism feature to indicate the minimum cost you want to set for a single processor before expanding parallel operations to another processor.
- For help determining the best MAXDOP and cost threshold for parallelism values for your servers, see the following resources: Server configuration: max degree of parallelism Best practices: Database settings to modify Changing the default value helps address the following potential issues: If the max degree of parallelism (MAXDOP) flag is set to 0 , then instances or client applications that require SharePoint downloads fail.
- This flag lets you limit the maximum number of threads used when running a single query in a parallel plan.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Use this flag when you're deciding whether to run a VACUUM . autovacuum vacuum insert threshold : specify the minimum number of inserted records or rows (tuples) that you need to run a VACUUM in any database table. effective io concurrency : set the number of concurrent disk I/O operations that can run simultaneously. hash mem multiplier : compute the maximum amount of memory that hash-based operations can use. logical decoding work mem : specify the maximum amount of memory that logical decoding can use before some of the decoded changes are written to a local disk. maintenance io concurrency : set the number of concurrent disk I/O operations that can run simultaneously for maintenance work that's done for client sessions. vacuum failsafe age : specify the maximum age (in transactions) that a database table's pg class.relfrozenxid field can attain before a VACUUM takes extraordinary measures to avoid a system-wide wraparound failure for transaction IDs. vacuum multixact failsafe age : specify the maximum age (in multiple transactions) that a database table's pg class.relminmxid field can attain before a VACUUM takes extraordinary measures to avoid a system-wide wraparound failure for multiple transaction IDs.
- February 08, 2022 Cloud SQL for PostgreSQL Feature Cloud SQL supports the max parallel maintenance workers , max parallel workers , max parallel workers per gather , and max pred locks per transaction flags: max parallel maintenance workers sets the maximum number of parallel workers that can be started by a single utility command. max parallel workers sets the maximum number of workers that the system can support for parallel operations. max parallel workers per gather sets the maximum number of workers that can be started by a single Gather or Gather Merge node. max pred locks per transaction controls the average number of object locks allocated for each transaction.
- This flag lets you limit the maximum number of threads used when running a single query in a parallel plan.
- September 28, 2023 Cloud SQL for PostgreSQL Feature The following pg wait sampling and rdkit flags are generally available: pg wait sampling flags cloudsql.enable pg wait sampling: enable the pg wait sampling extension for Cloud SQL for PostgreSQL instances. pg wait sampling.history size: set the size of the in-memory ring buffer for history sampling, in terms of the number of samples. pg wait sampling.history period: set the time interval for history sampling, in milliseconds. pg wait sampling.profile period: set the time interval for profile sampling for wait events, in milliseconds. pg wait sampling.profile pid: specify whether the wait profile that accumulates samples for each process and waits event is collected for each process or for all processes. pg wait sampling.profile queries: specify whether the wait profile is collected for each query or for all queries. rdkit flags rdkit.tanimoto threshold: set the threshold value for the Tanimoto similarity operator. rdkit.dice threshold: set the threshold value for the Dice similarity operator. rdkit.do chiral sss: specify whether stereochemistry is used in substructure matching. rdkit.do enhanced stereo sss: specify whether enhanced stereo is used in substructure matching. rdkit.sss fp size: set the size of the fingerprint used for substructure screening, in bits. rdkit.morgan fp size: set the size of morgan fingerprints, in bits. rdkit.featmorgan fp size: set the size of featmorgan fingerprints, in bits. rdkit.layered fp size: set the size of layered fingerprints, in bits. rdkit.rdkit fp size: set the size of rdkit fingerprints, in bits. rdkit.hashed torsion fp size: set the size of topological torsion bit vector fingerprints, in bits. rdkit.hashed atompair fp size: set the size of atom pair bit vector fingerprints, in bits. rdkit.reaction sss fp size: set the size of the structural chemical reaction fingerprint, in bits. rdkit.reaction difference fp size: set the size of the difference chemical reaction fingerprint, in bits. rdkit.reaction sss fp type: specify the type of structural chemical reaction fingerprint. rdkit.reaction difference fp type: specify the type of difference chemical reaction fingerprint. rdkit.ignore reaction agents: specify whether agents of a chemical reaction are taken into account. rdkit.agent FP bit ratio: specify the weight of the impact of agents contained in a chemical reaction fingerprint. rdkit.move unmmapped reactants to agents: specify whether unmapped reactant agents of a chemical reaction are taken into account. rdkit.threshold unmapped reactant atoms: set the ratio of allowed unmapped reactant atoms. rdkit.init reaction: specify whether the reaction is ready for use. rdkit.difference FP weight agents: specify the weight factor for agents compared to reactants and products in reaction difference fingerprints. rdkit.difference FP weight nonagents: specify the weight factor for reactants and products compared to agents in reaction difference fingerprints. rdkit.avalon fp size: set the size of avalon fingerprints, in bits.

### Quotas and limits \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/quotas](https://docs.cloud.google.com/sql/docs/sqlserver/quotas)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Configurable limits Instances per project The maximum number of instances you can have in a single project depends on the network architecture of those instances: New SQL network architecture: You can have up to 1000 instances per project.
- Value Limit Maximum number of saved queries per project (including saved queries for other Google Cloud products) 10,000 Maximum size for each query 1 MiB Cloud SQL storage limits Dedicated core: Up to 64 TB.
- Maximum concurrent connections The actual number of user connections allowed depends on the version of SQL Server that you are using, and also the limits of your application or applications and hardware.
- SqlBackupRunsService.Get SqlDatabasesService.Get SqlInstancesService.Get SqlOperationsService.Get SqlSslCertsService.Get SqlUsersService.Get 500 List sqladmin.googleapis.com/list The number of requests that are made per minute per user per region to use the APIs in this category.

