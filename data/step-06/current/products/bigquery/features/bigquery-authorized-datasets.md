---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.758Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery authorized datasets"
feature_slug: "bigquery-authorized-datasets"
latest_feature_date: "2021-11-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas"
  - "https://docs.cloud.google.com/bigquery/docs/admin-intro"
keywords:
  - "BigQuery authorized datasets"
  - "authorized dataset access"
  - "authorized datasets"
  - "dataset access control"
  - "authorized dataset"
  - "dataset-level access"
  - "authorized views"
---

# BigQuery authorized datasets

Product: BigQuery
Coverage: LOW

## Step 02 Summary

Authorized datasets in BigQuery allow controlled dataset-level access to authorized views and datasets.

## Extended Definition

Authorized datasets in BigQuery allow controlled dataset-level access to authorized views and datasets.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)

## Supporting Pages

### Troubleshoot quota and limit errors \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- Source ID: `site-docs-root`
- Final score: 42
- Re-rank relevance: WEAK
- Re-rank rationale: It gives general quota/limit guidance and has no feature-specific discussion of authorized datasets or dataset-level access controls.

Evidence snippets:
- Resolution A dataset's access control list can have up to 2,500 total authorized resources, including authorized views , authorized datasets , and authorized functions .
- If you exceed this limit due to a large number of authorized views, consider grouping the views into authorized datasets.
- As a best practice, group related views into authorized datasets when you design new BigQuery architectures, especially multi-tenant architectures.
- Error message Quota exceeded for quota metric 'Authorized Views per dataset' and limit '2500'.

### Introduction to BigQuery administration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)
- Source ID: `site-docs-root-2`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- For more information about dataset-level access control, see Controlling access to datasets and Authorized datasets .

