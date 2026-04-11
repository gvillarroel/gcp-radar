---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.600Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery slot estimator project-level recommendations"
feature_slug: "bigquery-slot-estimator-project-level-recommendations"
latest_feature_date: "2023-11-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/controlling-costs"
keywords:
  - "autoscale advice"
  - "autoscale recommendation"
  - "slot estimator project-level recommendations"
  - "commitment recommendation"
  - "project-level slot recommendation"
  - "cost-optimal commitment"
  - "on-demand workload recommendations"
  - "slot estimator"
---

# BigQuery slot estimator project-level recommendations

Product: BigQuery
Coverage: LOW

## Step 02 Summary

The slot estimator now provides project-level cost-optimal commitment and autoscale recommendations for on-demand workloads.

## Extended Definition

In the cited BigQuery documentation, the slot estimator is described as a capability to estimate the number of slots needed for workloads and to help manage slot capacity. It is explicitly said to use historical performance metrics for that purpose. The provided excerpts do not explicitly document project-level commitment or autoscale recommendation behavior.

## Evidence Summary

The page confirms slot estimation and slot-capacity management using historical metrics, but does not provide direct evidence for project-level commitment or autoscaling recommendations.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)

## Supporting Pages

### Estimate and control costs \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Use the slot estimator Best practice: Use slot estimator to estimate the number of slots required for your workloads.
- The BigQuery slot estimator helps you to manage slot capacity based on historical performance metrics.

