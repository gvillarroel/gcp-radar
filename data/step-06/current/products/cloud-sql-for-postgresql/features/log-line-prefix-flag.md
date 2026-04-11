---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.369Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "log_line_prefix flag"
feature_slug: "log-line-prefix-flag"
latest_feature_date: "2023-05-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy"
keywords:
  - "log"
  - "line"
  - "prefix"
  - "flag"
  - "the"
  - "database"
  - "is"
  - "generally"
---

# log_line_prefix flag

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

The log_line_prefix database flag is generally available for formatting the prefix of PostgreSQL log lines.

## Extended Definition

The log_line_prefix database flag is generally available for formatting the prefix of PostgreSQL log lines.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)

## Supporting Pages

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- September 28, 2023 Feature The following pg wait sampling and rdkit flags are generally available: pg wait sampling flags cloudsql.enable pg wait sampling: enable the pg wait sampling extension for Cloud SQL for PostgreSQL instances. pg wait sampling.history size: set the size of the in-memory ring buffer for history sampling, in terms of the number of samples. pg wait sampling.history period: set the time interval for history sampling, in milliseconds. pg wait sampling.profile period: set the time interval for profile sampling for wait events, in milliseconds. pg wait sampling.profile pid: specify whether the wait profile that accumulates samples for each process and waits event is collected for each process or for all processes. pg wait sampling.profile queries: specify whether the wait profile is collected for each query or for all queries. rdkit flags rdkit.tanimoto threshold: set the threshold value for the Tanimoto similarity operator. rdkit.dice threshold: set the threshold value for the Dice similarity operator. rdkit.do chiral sss: specify whether stereochemistry is used in substructure matching. rdkit.do enhanced stereo sss: specify whether enhanced stereo is used in substructure matching. rdkit.sss fp size: set the size of the fingerprint used for substructure screening, in bits. rdkit.morgan fp size: set the size of morgan fingerprints, in bits. rdkit.featmorgan fp size: set the size of featmorgan fingerprints, in bits. rdkit.layered fp size: set the size of layered fingerprints, in bits. rdkit.rdkit fp size: set the size of rdkit fingerprints, in bits. rdkit.hashed torsion fp size: set the size of topological torsion bit vector fingerprints, in bits. rdkit.hashed atompair fp size: set the size of atom pair bit vector fingerprints, in bits. rdkit.reaction sss fp size: set the size of the structural chemical reaction fingerprint, in bits. rdkit.reaction difference fp size: set the size of the difference chemical reaction fingerprint, in bits. rdkit.reaction sss fp type: specify the type of structural chemical reaction fingerprint. rdkit.reaction difference fp type: specify the type of difference chemical reaction fingerprint. rdkit.ignore reaction agents: specify whether agents of a chemical reaction are taken into account. rdkit.agent FP bit ratio: specify the weight of the impact of agents contained in a chemical reaction fingerprint. rdkit.move unmmapped reactants to agents: specify whether unmapped reactant agents of a chemical reaction are taken into account. rdkit.threshold unmapped reactant atoms: set the ratio of allowed unmapped reactant atoms. rdkit.init reaction: specify whether the reaction is ready for use. rdkit.difference FP weight agents: specify the weight factor for agents compared to reactants and products in reaction difference fingerprints. rdkit.difference FP weight nonagents: specify the weight factor for reactants and products compared to agents in reaction difference fingerprints. rdkit.avalon fp size: set the size of avalon fingerprints, in bits.
- Use this flag when you're deciding whether to run a VACUUM . autovacuum vacuum insert threshold : specify the minimum number of inserted records or rows (tuples) that you need to run a VACUUM in any database table. effective io concurrency : set the number of concurrent disk I/O operations that can run simultaneously. hash mem multiplier : compute the maximum amount of memory that hash-based operations can use. logical decoding work mem : specify the maximum amount of memory that logical decoding can use before some of the decoded changes are written to a local disk. maintenance io concurrency : set the number of concurrent disk I/O operations that can run simultaneously for maintenance work that's done for client sessions. vacuum failsafe age : specify the maximum age (in transactions) that a database table's pg class.relfrozenxid field can attain before a VACUUM takes extraordinary measures to avoid a system-wide wraparound failure for transaction IDs. vacuum multixact failsafe age : specify the maximum age (in multiple transactions) that a database table's pg class.relminmxid field can attain before a VACUUM takes extraordinary measures to avoid a system-wide wraparound failure for multiple transaction IDs.
- The following information applies to flags and extensions for PostgreSQL 18: Flags The following new flags are available for PostgreSQL 18 only: autovacuum vacuum max threshold autovacuum worker slots enable distinct reordering enable self join elimitation io max concurrency io method io workers log lock failures max active replecation origins track cost delay timing vacuum max eager freeze failure rate vacuum truncate For more information, see Configure database flags .
- Flags log line prefix: generate a printf-style string at the beginning of each line of a PostgreSQL log file.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- September 28, 2023 Cloud SQL for PostgreSQL Feature The following pg wait sampling and rdkit flags are generally available: pg wait sampling flags cloudsql.enable pg wait sampling: enable the pg wait sampling extension for Cloud SQL for PostgreSQL instances. pg wait sampling.history size: set the size of the in-memory ring buffer for history sampling, in terms of the number of samples. pg wait sampling.history period: set the time interval for history sampling, in milliseconds. pg wait sampling.profile period: set the time interval for profile sampling for wait events, in milliseconds. pg wait sampling.profile pid: specify whether the wait profile that accumulates samples for each process and waits event is collected for each process or for all processes. pg wait sampling.profile queries: specify whether the wait profile is collected for each query or for all queries. rdkit flags rdkit.tanimoto threshold: set the threshold value for the Tanimoto similarity operator. rdkit.dice threshold: set the threshold value for the Dice similarity operator. rdkit.do chiral sss: specify whether stereochemistry is used in substructure matching. rdkit.do enhanced stereo sss: specify whether enhanced stereo is used in substructure matching. rdkit.sss fp size: set the size of the fingerprint used for substructure screening, in bits. rdkit.morgan fp size: set the size of morgan fingerprints, in bits. rdkit.featmorgan fp size: set the size of featmorgan fingerprints, in bits. rdkit.layered fp size: set the size of layered fingerprints, in bits. rdkit.rdkit fp size: set the size of rdkit fingerprints, in bits. rdkit.hashed torsion fp size: set the size of topological torsion bit vector fingerprints, in bits. rdkit.hashed atompair fp size: set the size of atom pair bit vector fingerprints, in bits. rdkit.reaction sss fp size: set the size of the structural chemical reaction fingerprint, in bits. rdkit.reaction difference fp size: set the size of the difference chemical reaction fingerprint, in bits. rdkit.reaction sss fp type: specify the type of structural chemical reaction fingerprint. rdkit.reaction difference fp type: specify the type of difference chemical reaction fingerprint. rdkit.ignore reaction agents: specify whether agents of a chemical reaction are taken into account. rdkit.agent FP bit ratio: specify the weight of the impact of agents contained in a chemical reaction fingerprint. rdkit.move unmmapped reactants to agents: specify whether unmapped reactant agents of a chemical reaction are taken into account. rdkit.threshold unmapped reactant atoms: set the ratio of allowed unmapped reactant atoms. rdkit.init reaction: specify whether the reaction is ready for use. rdkit.difference FP weight agents: specify the weight factor for agents compared to reactants and products in reaction difference fingerprints. rdkit.difference FP weight nonagents: specify the weight factor for reactants and products compared to agents in reaction difference fingerprints. rdkit.avalon fp size: set the size of avalon fingerprints, in bits.
- Use this flag when you're deciding whether to run a VACUUM . autovacuum vacuum insert threshold : specify the minimum number of inserted records or rows (tuples) that you need to run a VACUUM in any database table. effective io concurrency : set the number of concurrent disk I/O operations that can run simultaneously. hash mem multiplier : compute the maximum amount of memory that hash-based operations can use. logical decoding work mem : specify the maximum amount of memory that logical decoding can use before some of the decoded changes are written to a local disk. maintenance io concurrency : set the number of concurrent disk I/O operations that can run simultaneously for maintenance work that's done for client sessions. vacuum failsafe age : specify the maximum age (in transactions) that a database table's pg class.relfrozenxid field can attain before a VACUUM takes extraordinary measures to avoid a system-wide wraparound failure for transaction IDs. vacuum multixact failsafe age : specify the maximum age (in multiple transactions) that a database table's pg class.relminmxid field can attain before a VACUUM takes extraordinary measures to avoid a system-wide wraparound failure for multiple transaction IDs.
- The following information applies to flags and extensions for PostgreSQL 18: Flags The following new flags are available for PostgreSQL 18 only: autovacuum vacuum max threshold autovacuum worker slots enable distinct reordering enable self join elimitation io max concurrency io method io workers log lock failures max active replecation origins track cost delay timing vacuum max eager freeze failure rate vacuum truncate For more information, see Configure database flags .
- Specifically, the user has the CONTROL permission on the tempdb database, and can do many operations, including (and not limited to) the following: ALTER DATABASE [ tempdb ] ADD FILE ALTER DATABASE [ tempdb ] REMOVE March 31, 2021 Cloud SQL for PostgreSQL Feature Cloud SQL for PostgreSQL flags are now generally available.

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Specify additional properties here. ... config , }; // Establish a connection to the database. return mysql . createPool ( dbConfig ); }; Go To see this snippet in the context of a web application, view the README on GitHub . package cloudsql import ( "crypto/tls" "crypto/x509" "database/sql" "errors" "fmt" "log" "os" "github.com/go-sql-driver/mysql" ) // connectTCPSocket initializes a TCP connection pool for a Cloud SQL // instance of MySQL. func connectTCPSocket () ( sql .
- Pooling = true ; // Specify additional properties here. return connectionString ; } } } Go To see this snippet in the context of a web application, view the README on GitHub . package cloudsql import ( "database/sql" "fmt" "log" "os" "github.com/go-sql-driver/mysql" ) // connectUnixSocket initializes a Unix socket connection pool for // a Cloud SQL instance of MySQL. func connectUnixSocket () ( sql .
- This option is similar to using the --credentials-file flag, except you specify the JSON credential file you set in the GOOGLE APPLICATION CREDENTIALS environment variable instead of using the --credentials-file command-line argument.
- To use this option on the command-line, invoke the cloud-sql-proxy command with the --credentials-file flag set to the path and filename of a JSON credential file.

