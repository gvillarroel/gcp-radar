---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.279Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Vector assist"
feature_slug: "vector-assist"
latest_feature_date: "2025-11-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/ai-overview"
  - "https://docs.cloud.google.com/sql/docs/postgres/launch-checklist"
keywords:
  - "vector"
  - "assist"
  - "is"
  - "sql"
  - "for"
  - "postgresql"
  - "extension"
  - "that"
---

# Vector assist

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Vector assist is a Cloud SQL for PostgreSQL extension that simplifies deployment and management of vector search workloads.

## Extended Definition

Vector assist is a Cloud SQL for PostgreSQL extension that simplifies deployment and management of vector search workloads.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/ai-overview](https://docs.cloud.google.com/sql/docs/postgres/ai-overview)
- [https://docs.cloud.google.com/sql/docs/postgres/launch-checklist](https://docs.cloud.google.com/sql/docs/postgres/launch-checklist)

## Supporting Pages

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 252
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Vector assist is a Cloud SQL for PostgreSQL extension that simplifies the deployment and management of your Cloud SQL vector workloads.
- September 28, 2023 Feature The following pg wait sampling and rdkit flags are generally available: pg wait sampling flags cloudsql.enable pg wait sampling: enable the pg wait sampling extension for Cloud SQL for PostgreSQL instances. pg wait sampling.history size: set the size of the in-memory ring buffer for history sampling, in terms of the number of samples. pg wait sampling.history period: set the time interval for history sampling, in milliseconds. pg wait sampling.profile period: set the time interval for profile sampling for wait events, in milliseconds. pg wait sampling.profile pid: specify whether the wait profile that accumulates samples for each process and waits event is collected for each process or for all processes. pg wait sampling.profile queries: specify whether the wait profile is collected for each query or for all queries. rdkit flags rdkit.tanimoto threshold: set the threshold value for the Tanimoto similarity operator. rdkit.dice threshold: set the threshold value for the Dice similarity operator. rdkit.do chiral sss: specify whether stereochemistry is used in substructure matching. rdkit.do enhanced stereo sss: specify whether enhanced stereo is used in substructure matching. rdkit.sss fp size: set the size of the fingerprint used for substructure screening, in bits. rdkit.morgan fp size: set the size of morgan fingerprints, in bits. rdkit.featmorgan fp size: set the size of featmorgan fingerprints, in bits. rdkit.layered fp size: set the size of layered fingerprints, in bits. rdkit.rdkit fp size: set the size of rdkit fingerprints, in bits. rdkit.hashed torsion fp size: set the size of topological torsion bit vector fingerprints, in bits. rdkit.hashed atompair fp size: set the size of atom pair bit vector fingerprints, in bits. rdkit.reaction sss fp size: set the size of the structural chemical reaction fingerprint, in bits. rdkit.reaction difference fp size: set the size of the difference chemical reaction fingerprint, in bits. rdkit.reaction sss fp type: specify the type of structural chemical reaction fingerprint. rdkit.reaction difference fp type: specify the type of difference chemical reaction fingerprint. rdkit.ignore reaction agents: specify whether agents of a chemical reaction are taken into account. rdkit.agent FP bit ratio: specify the weight of the impact of agents contained in a chemical reaction fingerprint. rdkit.move unmmapped reactants to agents: specify whether unmapped reactant agents of a chemical reaction are taken into account. rdkit.threshold unmapped reactant atoms: set the ratio of allowed unmapped reactant atoms. rdkit.init reaction: specify whether the reaction is ready for use. rdkit.difference FP weight agents: specify the weight factor for agents compared to reactants and products in reaction difference fingerprints. rdkit.difference FP weight nonagents: specify the weight factor for reactants and products compared to agents in reaction difference fingerprints. rdkit.avalon fp size: set the size of avalon fingerprints, in bits.
- Extension and plugin versions pg cron is upgraded from 1.4.1 to 1.5. pg partman is upgraded from 4.7.0 to 4.7.3. postgresql-hll is upgraded from 2.16 to 2.17. pg repack is upgraded from 1.4.7 to 1.4.8. wal2json is upgraded from 2.4 to 2.5. pg hint plan is upgraded, as follows: from 1.3.7 to 1.3.8 (for PostgreSQL versions 11-13) from 1.4.0 to 1.4.1 (for PostgreSQL version 14) from 1.4.0 to 1.5.0 (for PostgreSQL version 15) If you use a maintenance window, then the updates to the minor, extension, and plugin versions happen according to the timeframe that you set in the window.
- Flags cloudsql.enable pg squeeze : enables the pg squeeze extension for Cloud SQL for PostgreSQL squeeze.max xlock time : sets the time (in milliseconds) that the extension uses to finalize the processing for modifying a table squeeze.worker autostart : starts a background worker automatically squeeze.worker role : specifies the role for the background worker The rollout of the following minor versions, extension versions, and plugin versions is underway : Minor versions 11.21 is upgraded to 11.22.

### "Build generative AI applications using Cloud SQL \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/ai-overview](https://docs.cloud.google.com/sql/docs/postgres/ai-overview)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can use the app to build a basic chatbot API that: Integrates GKE or Cloud Run with Cloud SQL, Vertex AI, and pgvector Demonstrates connectivity to Cloud SQL using Private Service Connect in a Virtual Private Cloud (VPC) Uses Terraform to configure your infrastructure Uses Python with asyncpg and FastAPI Supports setting up Cloud SQL and an app that runs on either GKE or Cloud Run in separate Google Cloud projects The solution contains the following contents: Terraform templates to set up your infrastructure with best practices for security A sample app for an LLM-powered Chatbot that you can deploy to GKE or Cloud Run What's next Integrate Cloud SQL with Vertex AI Work with vector embeddings Invoke online predictions from Cloud SQL instances Understand an example of an embedding workflow Build LLM-powered applications using LangChain Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Cloud SQL provides the following metrics in the Metrics Explorer in Cloud Monitoring: Metric Description Metric label Data cache used The data cache usage (in bytes) database/data cache/bytes used Data cache quota The maximum data cache size (in bytes) database/data cache/quota Data cache hit count The total number of data cache hit read operations for an instance database/postgresql/data cache/hit count Data cache miss count The total number of data cache miss read operations for an instance database/postgresql/data cache/miss count Data cache hit ratio The ratio of data cache hit read operations to data cache miss read operations for an instance database/postgresql/data cache/hit ratio System Insights : provide system metrics such as CPU utilization, disk utilization, and throughput to help you monitor the health of instances and troubleshoot issues that affect the performance of your generative AI applications.
- For more information about configuring this extension, see Configure PostgreSQL extensions .
- Store, index, and query vector embeddings with pgvector You can store, index, and query vector embeddings in Cloud SQL by using the pgvector PostgreSQL extension.

### "Launch checklist for Cloud SQL \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/launch-checklist](https://docs.cloud.google.com/sql/docs/postgres/launch-checklist)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- MySQL PostgreSQL SQL Server Introduction This Launch Checklist for Cloud SQL provides recommended activities to complete for launching a commercial application that uses Cloud SQL.
- Activity ❑ Carefully assess the performance characteristics of Cloud SQL, a managed and replicated database service, and the service’s limitations and restrictions (for example, no SUPER privilege). ❑ Ensure that your DevOps team is familiar with the Google Cloud console , the SDK , and the gcloud CLI .
- Home Documentation Databases Cloud SQL PostgreSQL Reference Send feedback Launch checklist for Cloud SQL Stay organized with collections Save and categorize content based on your preferences.
- For example, start with the Architecture Design and Development Checklist ; it contains activities that we recommend you do early in your app's development lifecycle.

