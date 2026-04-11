---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.373Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Cloud SQL Proxy Operator"
feature_slug: "cloud-sql-proxy-operator"
latest_feature_date: "2023-05-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy"
  - "https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy"
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
keywords:
  - "sql"
  - "proxy"
  - "operator"
  - "the"
  - "is"
  - "generally"
  - "available"
  - "in"
---

# Cloud SQL Proxy Operator

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

The Cloud SQL Proxy Operator is generally available; The Cloud SQL Proxy Operator is available in public preview for automating GKE workload connections to Cloud SQL.

## Extended Definition

The Cloud SQL Proxy Operator is generally available; The Cloud SQL Proxy Operator is available in public preview for automating GKE workload connections to Cloud SQL.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)
- [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)
- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)

## Supporting Pages

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/mysql/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 240
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Linux On Linux or macOS, use a trailing & on the command line to launch the Cloud SQL Auth Proxy in a separate process: . / cloud - sql - proxy INSTANCE CONNECTION NAME --credentials-file PATH TO KEY FILE & Windows In Windows PowerShell, use the Start-Process command to launch the Cloud SQL Auth Proxy in a separate process: Start - Process --filepath "cloud-sql-proxy.exe" --ArgumentList " --credentials-file PATH TO KEY FILE INSTANCE CONNECTION NAME " Run the Cloud SQL Auth Proxy in a Docker container To run the Cloud SQL Auth Proxy in a Docker container, use the Cloud SQL Auth Proxy Docker image available from the Google Container Registry .
- On Linux, the length is usually defined as 108, and you can use the following command to check: cat /usr/include/linux/un.h grep "define UNIX PATH MAX" Docker To run the Cloud SQL Auth Proxy in a Docker container, use the Cloud SQL Auth Proxy Docker image available from the Google Container Registry .
- Unix sockets Note: The Cloud SQL Auth Proxy currently does not support Unix sockets on Windows, so this option is only available for Linux and macOS platforms.
- Error: googleapi: Error 429 : Quota exceeded for quota metric 'Queries' and limit 'Queries per minute per user' of service 'sqladmin.googleapis.com' for consumer ' project number: $PROJECT ID ., rateLimitExceeded Once an application connects to the proxy, the proxy reports the following error: failed to refresh the ephemeral certificate for $INSTANCE CONNECTION NAME : googleapi: Error 429 : Quota exceeded for quota metric 'Queries' and limit 'Queries per minute per user' of service 'sqladmin.googleapis.com' for consumer ' project number: $PROJECT ID ., rateLimitExceeded Solution: Either identify the source of the quota problem, for example, an application is misusing the connector and unnecessarily creating new connections, or contact support to request an increase to the Cloud SQL Admin API quota.

### "Connect using the Cloud SQL Auth Proxy \_|\_ Cloud SQL for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy](https://docs.cloud.google.com/sql/docs/postgres/connect-auth-proxy)
- Source ID: `site-iam-reference`
- Final score: 234
- Re-rank relevance: N/A

Evidence snippets:
- Linux On Linux or macOS, use a trailing & on the command line to launch the Cloud SQL Auth Proxy in a separate process: . / cloud - sql - proxy INSTANCE CONNECTION NAME --credentials-file PATH TO KEY FILE & Windows In Windows PowerShell, use the Start-Process command to launch the Cloud SQL Auth Proxy in a separate process: Start - Process --filepath "cloud-sql-proxy.exe" --ArgumentList " --credentials-file PATH TO KEY FILE INSTANCE CONNECTION NAME " Run the Cloud SQL Auth Proxy in a Docker container To run the Cloud SQL Auth Proxy in a Docker container, use the Cloud SQL Auth Proxy Docker image available from the Google Container Registry .
- On Linux, the length is usually defined as 108, and you can use the following command to check: cat /usr/include/linux/un.h grep "define UNIX PATH MAX" Docker To run the Cloud SQL Auth Proxy in a Docker container, use the Cloud SQL Auth Proxy Docker image available from the Google Container Registry .
- Unix sockets Note: The Cloud SQL Auth Proxy currently does not support Unix sockets on Windows, so this option is only available for Linux and macOS platforms.
- Error: googleapi: Error 429 : Quota exceeded for quota metric 'Queries' and limit 'Queries per minute per user' of service 'sqladmin.googleapis.com' for consumer ' project number: $PROJECT ID ., rateLimitExceeded Once an application connects to the proxy, the proxy reports the following error: failed to refresh the ephemeral certificate for $INSTANCE CONNECTION NAME : googleapi: Error 429 : Quota exceeded for quota metric 'Queries' and limit 'Queries per minute per user' of service 'sqladmin.googleapis.com' for consumer ' project number: $PROJECT ID ., rateLimitExceeded Solution: Either identify the source of the quota problem, for example, an application is misusing the connector and unnecessarily creating new connections, or contact support to request an increase to the Cloud SQL Admin API quota.

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: N/A

Evidence snippets:
- This rollout also introduces the following: PostGIS GDAL driver support LZ4 TOAST compression for PostgreSQL versions 14 and later May 16, 2023 Feature The Cloud SQL Proxy Operator is now generally available.
- September 28, 2023 Feature The following pg wait sampling and rdkit flags are generally available: pg wait sampling flags cloudsql.enable pg wait sampling: enable the pg wait sampling extension for Cloud SQL for PostgreSQL instances. pg wait sampling.history size: set the size of the in-memory ring buffer for history sampling, in terms of the number of samples. pg wait sampling.history period: set the time interval for history sampling, in milliseconds. pg wait sampling.profile period: set the time interval for profile sampling for wait events, in milliseconds. pg wait sampling.profile pid: specify whether the wait profile that accumulates samples for each process and waits event is collected for each process or for all processes. pg wait sampling.profile queries: specify whether the wait profile is collected for each query or for all queries. rdkit flags rdkit.tanimoto threshold: set the threshold value for the Tanimoto similarity operator. rdkit.dice threshold: set the threshold value for the Dice similarity operator. rdkit.do chiral sss: specify whether stereochemistry is used in substructure matching. rdkit.do enhanced stereo sss: specify whether enhanced stereo is used in substructure matching. rdkit.sss fp size: set the size of the fingerprint used for substructure screening, in bits. rdkit.morgan fp size: set the size of morgan fingerprints, in bits. rdkit.featmorgan fp size: set the size of featmorgan fingerprints, in bits. rdkit.layered fp size: set the size of layered fingerprints, in bits. rdkit.rdkit fp size: set the size of rdkit fingerprints, in bits. rdkit.hashed torsion fp size: set the size of topological torsion bit vector fingerprints, in bits. rdkit.hashed atompair fp size: set the size of atom pair bit vector fingerprints, in bits. rdkit.reaction sss fp size: set the size of the structural chemical reaction fingerprint, in bits. rdkit.reaction difference fp size: set the size of the difference chemical reaction fingerprint, in bits. rdkit.reaction sss fp type: specify the type of structural chemical reaction fingerprint. rdkit.reaction difference fp type: specify the type of difference chemical reaction fingerprint. rdkit.ignore reaction agents: specify whether agents of a chemical reaction are taken into account. rdkit.agent FP bit ratio: specify the weight of the impact of agents contained in a chemical reaction fingerprint. rdkit.move unmmapped reactants to agents: specify whether unmapped reactant agents of a chemical reaction are taken into account. rdkit.threshold unmapped reactant atoms: set the ratio of allowed unmapped reactant atoms. rdkit.init reaction: specify whether the reaction is ready for use. rdkit.difference FP weight agents: specify the weight factor for agents compared to reactants and products in reaction difference fingerprints. rdkit.difference FP weight nonagents: specify the weight factor for reactants and products compared to agents in reaction difference fingerprints. rdkit.avalon fp size: set the size of avalon fingerprints, in bits.
- February 24, 2023 Feature The Cloud SQL Proxy Operator is now available in public preview.
- Eight additional PostgreSQL extensions are now available: pageinspect pgfincore pg freespacemap pg repack pg visibility PL/Proxy postgres fdw postgresql-hll For information about these newly-added extensions, see PostgreSQL extensions .

