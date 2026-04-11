---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.399Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Query Insights query sampling rate"
feature_slug: "query-insights-query-sampling-rate"
latest_feature_date: "2022-02-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/create-instance"
keywords:
  - "query"
  - "insights"
  - "sampling"
  - "rate"
  - "lets"
  - "you"
  - "configure"
  - "the"
---

# Query Insights query sampling rate

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Query Insights lets you configure the sampling rate used for collected query data.

## Extended Definition

Query Insights lets you configure the sampling rate used for collected query data.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)

## Supporting Pages

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- February 01, 2022 Feature Query Insights lets you configure the query sampling rate.
- Feature The QueryData tool lets you to query the data in your database using conversational language and build data agents.
- You can now configure migrated replicas to have read replicas under them before promoting them to primary replica.
- September 28, 2023 Feature The following pg wait sampling and rdkit flags are generally available: pg wait sampling flags cloudsql.enable pg wait sampling: enable the pg wait sampling extension for Cloud SQL for PostgreSQL instances. pg wait sampling.history size: set the size of the in-memory ring buffer for history sampling, in terms of the number of samples. pg wait sampling.history period: set the time interval for history sampling, in milliseconds. pg wait sampling.profile period: set the time interval for profile sampling for wait events, in milliseconds. pg wait sampling.profile pid: specify whether the wait profile that accumulates samples for each process and waits event is collected for each process or for all processes. pg wait sampling.profile queries: specify whether the wait profile is collected for each query or for all queries. rdkit flags rdkit.tanimoto threshold: set the threshold value for the Tanimoto similarity operator. rdkit.dice threshold: set the threshold value for the Dice similarity operator. rdkit.do chiral sss: specify whether stereochemistry is used in substructure matching. rdkit.do enhanced stereo sss: specify whether enhanced stereo is used in substructure matching. rdkit.sss fp size: set the size of the fingerprint used for substructure screening, in bits. rdkit.morgan fp size: set the size of morgan fingerprints, in bits. rdkit.featmorgan fp size: set the size of featmorgan fingerprints, in bits. rdkit.layered fp size: set the size of layered fingerprints, in bits. rdkit.rdkit fp size: set the size of rdkit fingerprints, in bits. rdkit.hashed torsion fp size: set the size of topological torsion bit vector fingerprints, in bits. rdkit.hashed atompair fp size: set the size of atom pair bit vector fingerprints, in bits. rdkit.reaction sss fp size: set the size of the structural chemical reaction fingerprint, in bits. rdkit.reaction difference fp size: set the size of the difference chemical reaction fingerprint, in bits. rdkit.reaction sss fp type: specify the type of structural chemical reaction fingerprint. rdkit.reaction difference fp type: specify the type of difference chemical reaction fingerprint. rdkit.ignore reaction agents: specify whether agents of a chemical reaction are taken into account. rdkit.agent FP bit ratio: specify the weight of the impact of agents contained in a chemical reaction fingerprint. rdkit.move unmmapped reactants to agents: specify whether unmapped reactant agents of a chemical reaction are taken into account. rdkit.threshold unmapped reactant atoms: set the ratio of allowed unmapped reactant atoms. rdkit.init reaction: specify whether the reaction is ready for use. rdkit.difference FP weight agents: specify the weight factor for agents compared to reactants and products in reaction difference fingerprints. rdkit.difference FP weight nonagents: specify the weight factor for reactants and products compared to agents in reaction difference fingerprints. rdkit.avalon fp size: set the size of avalon fingerprints, in bits.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- February 01, 2022 Cloud SQL for PostgreSQL Feature Query Insights lets you configure the query sampling rate.
- Cloud SQL for SQL Server Feature You can use the following observability dashboards in Cloud SQL for SQL Server to monitor, analyze, and diagnose issues with your instances, databases, and queries: System insights Query insights Both of these dashboards are available to you in the Google Cloud Console.
- April 06, 2026 Cloud SQL for MySQL Feature The QueryData tool lets you to query the data in your database using conversational language and build data agents.
- Feature The QueryData tool lets you to query the data in your database using conversational language and build data agents.

### Create instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Set the following parameters, as required: enableGoogleMlIntegration : when this parameter is set to true , Cloud SQL instances can connect to Vertex AI to pass requests for real-time predictions and insights to the AI cloudsql.enable google ml integration : when this parameter is set to on , Cloud SQL can integrate with Vertex AI You can use the sqlNetworkArchitecture field to enforce the use of the new network architecture for the instance upon creation, even if the project isn't fully upgraded.
- Set the following parameters, as required: enableGoogleMlIntegration : when this parameter is set to true , Cloud SQL instances can connect to Vertex AI to pass requests for real-time predictions and insights to the AI cloudsql.enable google ml integration : when this parameter is set to on , Cloud SQL can integrate with Vertex AI You can use the sqlNetworkArchitecture field to enforce the use of the new network architecture for the instance upon creation, even if the project isn't fully upgraded.
- The range name should comply with RFC-1035 and be within 1-63 characters. ( gcloud alpha sql instances create ). --enable-google-private-path : If you use this parameter, then you allow other Google Cloud services, such as BigQuery, to access data in Cloud SQL and make queries against this data over a private connection.
- Integration with Vertex AI --enable-google-ml-integration Enables Cloud SQL instances to connect to Vertex AI to pass requests for real-time predictions and insights to the AI. --database-flags cloudsql.enable google ml integration=on By turning this flag on, Cloud SQL can integrate with Vertex AI.

