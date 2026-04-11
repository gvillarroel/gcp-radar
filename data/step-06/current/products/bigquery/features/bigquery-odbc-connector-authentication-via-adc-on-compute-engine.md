---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.473Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ODBC connector authentication via ADC on Compute Engine"
feature_slug: "bigquery-odbc-connector-authentication-via-adc-on-compute-engine"
latest_feature_date: "2024-10-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-default-credentials"
  - "https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model"
  - "https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial"
keywords:
  - "ADC token exchange"
  - "GCE metadata auth"
  - "ODBC connector ADC authentication"
  - "ADC auth"
  - "ODBC driver on VM"
  - "Application Default Credentials"
  - "ODBC ADC"
  - "service account default credentials"
---

# BigQuery ODBC connector authentication via ADC on Compute Engine

Product: BigQuery
Coverage: LOW

## Step 02 Summary

Enables BigQuery ODBC connector authentication on Google Cloud VMs through Application Default Credentials using the Google internal metadata server.

## Extended Definition

The provided Google Cloud documentation indicates that BigQuery authentication is performed by setting up Application Default Credentials (ADC) when creating clients. The evidence does not explicitly document ODBC connector behavior, Compute Engine metadata-server token exchange, or VM-specific ODBC setup, so any broader claim about the connector path should be treated as unverified from the given excerpts.

## Evidence Summary

The cited Google Cloud docs confirm that ADC is used to authenticate to BigQuery, but they do not provide explicit evidence for ODBC connector authentication on Compute Engine.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-default-credentials](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-default-credentials)
- [https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model](https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model)
- [https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial](https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial)

## Supporting Pages

### "Create a client with application default credentials \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-default-credentials](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-client-default-credentials)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics BigQuery Samples Create a client with application default credentials Stay organized with collections Save and categorize content based on your preferences.
- To authenticate to BigQuery, set up Application Default Credentials.
- To authenticate to BigQuery, set up Application Default Credentials.
- To authenticate to BigQuery, set up Application Default Credentials.

### Create an ML model in BigQuery ML by using SQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model](https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- To authenticate to BigQuery, set up Application Default Credentials.
- To authenticate to BigQuery, set up Application Default Credentials.
- To authenticate to BigQuery, set up Application Default Credentials.
- To authenticate to BigQuery, set up Application Default Credentials.

### "Create recommendations based on explicit feedback with a matrix factorization\

- URL: [https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial](https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- To authenticate to BigQuery, set up Application Default Credentials.
- To authenticate to BigQuery, set up Application Default Credentials.
- To authenticate to BigQuery, set up Application Default Credentials.
- To authenticate to BigQuery, set up Application Default Credentials.

