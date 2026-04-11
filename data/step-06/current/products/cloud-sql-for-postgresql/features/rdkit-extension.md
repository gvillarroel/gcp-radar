---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.301Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "rdkit extension"
feature_slug: "rdkit-extension"
latest_feature_date: "2025-02-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli"
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex"
keywords:
  - "rdkit"
  - "extension"
  - "the"
  - "postgresql"
  - "is"
  - "rolling"
  - "out"
  - "in"
---

# rdkit extension

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

The rdkit PostgreSQL extension is rolling out in Cloud SQL with support updated to version 4.6.1; The rdkit extension is generally available for comparing, manipulating, and identifying molecular structures.

## Extended Definition

The rdkit PostgreSQL extension is rolling out in Cloud SQL with support updated to version 4.6.1; The rdkit extension is generally available for comparing, manipulating, and identifying molecular structures.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli)
- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex](https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex)

## Supporting Pages

### "Build context sets using Gemini CLI \_|\_ Cloud SQL for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/postgres/build-context-gemini-cli)
- Source ID: `site-iam-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- Run the following commands in your terminal to authenticate: gcloud auth application-default login Configure the tools.yaml file The extension requires a database connection for context generation, which is supported by the MCP Toolbox and defined within the tools.yaml configuration file.
- MySQL PostgreSQL SQL Server Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms , and the Additional Terms for Generative AI Preview Products .
- Note: If this connection is not established, the extension will return error messages, such as "Error Discovering tools from mcp toolbox" and context generation won't work.
- To verify the installed version of the extension, run the following command: gemini extensions list Make sure that the version is 0.4.2 or higher.

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- October 27, 2025 Feature The rollout of the following extension versions and plugin versions is underway: Extensions and plugins pg squeeze is upgraded from 1.8 to 1.9 for PostgreSQL version 13 and later. pg cron is upgraded from 1.6.4 to 1.6.7 for PostgreSQL version 10 and later. postgis is upgraded from 3.5.2 to 3.6.0 for PostgreSQL version 13 and later. rdkit is upgraded from 4.6.1 to 4.7.0.
- September 28, 2023 Feature The following pg wait sampling and rdkit flags are generally available: pg wait sampling flags cloudsql.enable pg wait sampling: enable the pg wait sampling extension for Cloud SQL for PostgreSQL instances. pg wait sampling.history size: set the size of the in-memory ring buffer for history sampling, in terms of the number of samples. pg wait sampling.history period: set the time interval for history sampling, in milliseconds. pg wait sampling.profile period: set the time interval for profile sampling for wait events, in milliseconds. pg wait sampling.profile pid: specify whether the wait profile that accumulates samples for each process and waits event is collected for each process or for all processes. pg wait sampling.profile queries: specify whether the wait profile is collected for each query or for all queries. rdkit flags rdkit.tanimoto threshold: set the threshold value for the Tanimoto similarity operator. rdkit.dice threshold: set the threshold value for the Dice similarity operator. rdkit.do chiral sss: specify whether stereochemistry is used in substructure matching. rdkit.do enhanced stereo sss: specify whether enhanced stereo is used in substructure matching. rdkit.sss fp size: set the size of the fingerprint used for substructure screening, in bits. rdkit.morgan fp size: set the size of morgan fingerprints, in bits. rdkit.featmorgan fp size: set the size of featmorgan fingerprints, in bits. rdkit.layered fp size: set the size of layered fingerprints, in bits. rdkit.rdkit fp size: set the size of rdkit fingerprints, in bits. rdkit.hashed torsion fp size: set the size of topological torsion bit vector fingerprints, in bits. rdkit.hashed atompair fp size: set the size of atom pair bit vector fingerprints, in bits. rdkit.reaction sss fp size: set the size of the structural chemical reaction fingerprint, in bits. rdkit.reaction difference fp size: set the size of the difference chemical reaction fingerprint, in bits. rdkit.reaction sss fp type: specify the type of structural chemical reaction fingerprint. rdkit.reaction difference fp type: specify the type of difference chemical reaction fingerprint. rdkit.ignore reaction agents: specify whether agents of a chemical reaction are taken into account. rdkit.agent FP bit ratio: specify the weight of the impact of agents contained in a chemical reaction fingerprint. rdkit.move unmmapped reactants to agents: specify whether unmapped reactant agents of a chemical reaction are taken into account. rdkit.threshold unmapped reactant atoms: set the ratio of allowed unmapped reactant atoms. rdkit.init reaction: specify whether the reaction is ready for use. rdkit.difference FP weight agents: specify the weight factor for agents compared to reactants and products in reaction difference fingerprints. rdkit.difference FP weight nonagents: specify the weight factor for reactants and products compared to agents in reaction difference fingerprints. rdkit.avalon fp size: set the size of avalon fingerprints, in bits.
- January 17, 2025 Feature Cloud SQL for PostgreSQL version 17 adds support for the following extensions and plugins: Extensions and plugins ip4r oracle fdw orafce pg background pg bigm pgfincore pg hint plan pg partman pg proctab pgrouting pg similarity pgtap pgtt pg wait sampling PL/Proxy plv8 postgresql anonymizer postgresql hll prefix temporal tables Cloud SQL for PostgreSQL version 17 doesn't support: rdkit pg squeeze To use these extensions and plugins in your PostgreSQL 17 instance, update your instance to the POSTGRES 17 2.R20241011.00 11 maintenance version.
- This feature automates read pool scale in and scale out operations based on one or both of the following conditions: Allowed CPU usage of the read pool Allowed number of client connections to the read pool November 05, 2025 Feature The rollout of the following extension versions, plugin versions, and extension support is underway: Extensions and plugins plpgsql check is upgraded from 2.8.1 to 2.8.3 for PostgreSQL versions 14 and later. pg wait sampling is upgraded from 1.1.6 to 1.1.9 for PostgreSQL versions 13 and later. tds fdw is upgraded from 2.0.4 to 2.0.5.

### "Build LLM-powered applications using LlamaIndex \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex](https://docs.cloud.google.com/sql/docs/postgres/build-llm-powered-applications-using-llamaindex)
- Source ID: `site-iam-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- You can process personal data for this feature as outlined in the Cloud Data Processing Addendum , subject to the obligations and restrictions described in the agreement under which you access Google Cloud.
- Store chat history The Cloud SQL for PostgreSQL notebook for Chat Stores shows you how to use Cloud SQL for PostgreSQL to store chat history using the PostgresChatStore class.
- Preview — Cloud SQL for PostgreSQL This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Vector Store This LlamaIndex integration lets you use the robust and scalable nature of Cloud SQL for PostgreSQL to store and manage your LlamaIndex data.

