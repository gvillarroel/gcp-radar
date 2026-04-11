---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.817Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery scheduled queries with service account credentials"
feature_slug: "bigquery-scheduled-queries-with-service-account-credentials"
latest_feature_date: "2020-08-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.client.Client"
keywords:
  - "query scheduler credentials"
  - "SA-based scheduled queries"
  - "run scheduled query as service account"
  - "scheduled query service account"
  - "service account credentials"
  - "service account email"
  - "scheduled queries"
---

# BigQuery scheduled queries with service account credentials

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now supports using service account credentials for scheduled queries.

## Extended Definition

BigQuery now supports using service account credentials for scheduled queries.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.client.Client](https://docs.cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.client.Client)

## Supporting Pages

### Class Client (3.40.1) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.client.Client](https://docs.cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.client.Client)
- Source ID: `site-python-reference`
- Final score: 20
- Re-rank relevance: WEAK
- Re-rank rationale: It mentions credentials handling for the BigQuery client, but does not document scheduled query behavior or service-account-specific scheduling.

Evidence snippets:
- Client () client. get service account email () returns an email similar to: my service account@my-project.iam.gserviceaccount.com Note: This is the service account that BigQuery uses to manage tables encrypted by a key in KMS.
- Returns Type Description google.cloud.bigquery.routine.Routine A Routine instance. get service account email get service account email ( project : typing .
- Parameters Name Description project Optional[str] Project ID to use for retreiving service account email.
- Returns Type Description str service account email address get table get table ( table : typing .

