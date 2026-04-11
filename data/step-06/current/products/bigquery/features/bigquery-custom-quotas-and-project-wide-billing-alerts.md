---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.944Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery custom quotas and project-wide billing alerts"
feature_slug: "bigquery-custom-quotas-and-project-wide-billing-alerts"
latest_feature_date: "2015-12-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/custom-quotas"
keywords:
  - "runaway spend prevention"
  - "quota limits by project"
  - "spending alerts"
  - "custom quota alerts"
  - "quota alerts"
  - "project-wide quotas"
  - "billing alerts"
  - "custom quotas"
---

# BigQuery custom quotas and project-wide billing alerts

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery introduced custom quotas with project-wide alerts to help prevent runaway spending.

## Extended Definition

BigQuery introduced custom quotas with project-wide alerts to help prevent runaway spending.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/custom-quotas](https://docs.cloud.google.com/bigquery/docs/custom-quotas)

## Supporting Pages

### Create custom query quotas \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/custom-quotas](https://docs.cloud.google.com/bigquery/docs/custom-quotas)
- Source ID: `site-docs-root`
- Final score: 52
- Re-rank relevance: STRONG
- Re-rank rationale: The page directly documents how to create and modify BigQuery custom query quotas, including project/user limits and role-based permissions, which is the core of this feature.

Evidence snippets:
- To learn about billing, alerts, and visualizing data, see the following topics: Create, edit, or delete budgets and budget alerts Export Cloud Billing data to BigQuery Visualize your costs with Looker Studio Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Example Suppose you set the following custom quotas for a project with 10 users, one of which is a service account: Project level: 50 TB per day User level: 10 TB per day Project-level custom quotas limit the aggregate usage of all users in that project.
- To set custom cost controls, you can update one or both of the following query quotas: QueryUsagePerDay : Project-level custom quotas limit the aggregate usage of all users in that project.
- Set or modify custom quotas You can set a custom quota or modify an existing custom quota for any quota displayed on the Quotas & System Limits page of the Google Cloud console.

