---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.177Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "BigQuery support for Spanner external datasets"
feature_slug: "bigquery-support-for-spanner-external-datasets"
latest_feature_date: "2025-06-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/change-streams/details"
  - "https://docs.cloud.google.com/spanner/docs/free-trial-quickstart"
  - "https://docs.cloud.google.com/spanner/docs/access-with-fgac"
keywords:
  - "authorized"
  - "external"
  - "datasets"
  - "querying"
  - "supports"
---

# BigQuery support for Spanner external datasets

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

BigQuery now supports querying Spanner external datasets with authorized views, authorized routines, and Cloud Resource Connections.

## Extended Definition

BigQuery now supports querying Spanner external datasets with authorized views, authorized routines, and Cloud Resource Connections.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/change-streams/details](https://docs.cloud.google.com/spanner/docs/change-streams/details)
- [https://docs.cloud.google.com/spanner/docs/free-trial-quickstart](https://docs.cloud.google.com/spanner/docs/free-trial-quickstart)
- [https://docs.cloud.google.com/spanner/docs/access-with-fgac](https://docs.cloud.google.com/spanner/docs/access-with-fgac)

## Supporting Pages

### "Change stream partitions, records, and queries \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/details](https://docs.cloud.google.com/spanner/docs/change-streams/details)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- If NULL or not specified, this means the reader is querying the change stream for the first time, and has not obtained any specific partition tokens to query from. heartbeat milliseconds INT64 Required Determines how frequently a heartbeat ChangeRecord is returned in case there are no transactions committed in this partition.
- If NULL or not specified, this means the reader is querying the change stream for the first time, and has not obtained any specific partition tokens to query from. heartbeat milliseconds bigint Required Determines how frequently a heartbeat ChangeRecord is returned when there are no transactions committed in this partition.
- When querying a child partition, the query should specify the child partition token and a start timestamp greater than or equal to child partitions token.start timestamp .
- When querying a child partition, the query should specify the child partition token and a start timestamp greater than or equal to child partitions token.start timestamp .

### "Access a database with fine-grained access control \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/access-with-fgac](https://docs.cloud.google.com/spanner/docs/access-with-fgac)
- Source ID: `site-docs-root`
- Final score: 46
- Re-rank relevance: N/A

### "Create a Spanner free trial instance and sample application \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/free-trial-quickstart](https://docs.cloud.google.com/spanner/docs/free-trial-quickstart)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- Note: A Spanner free trial instance supports Standard edition features, and Enterprise edition features, such as KNN vector distance functions , full-text search , and Spanner Graph .
- If an authentication error is returned, and you are using an external identity provider (IdP), confirm that you have signed in to the gcloud CLI with your federated identity .
- If an authentication error is returned, and you are using an external identity provider (IdP), confirm that you have signed in to the gcloud CLI with your federated identity .
- If you're using an external identity provider (IdP), you must first sign in to the gcloud CLI with your federated identity .

