---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.703Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery slot estimator"
feature_slug: "bigquery-slot-estimator"
latest_feature_date: "2022-11-14"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://cloud.google.com/bigquery/docs/controlling-costs"
keywords:
  - "slot capacity estimate"
  - "slot capacity planning"
  - "BigQuery Slot Estimator"
  - "historical performance data"
  - "slot planning"
  - "slot estimator"
  - "Slot Estimator"
  - "slot utilization"
---

# BigQuery slot estimator

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery introduced a slot estimator to help manage slot capacity using historical performance data; Introduces the BigQuery Slot Estimator to analyze slot utilization and estimate slot capacity needs.

## Extended Definition

The BigQuery Slot Estimator is a feature for slot capacity management that uses historical performance metrics to estimate required BigQuery slots. It is intended to help users plan and manage slot capacity for their workloads as part of cost control best practices.

## Evidence Summary

The BigQuery controlling costs documentation explicitly says the Slot Estimator helps manage slot capacity from historical performance metrics and is used to estimate the number of slots required for workloads.

## Source Links

- [https://cloud.google.com/bigquery/docs/controlling-costs](https://cloud.google.com/bigquery/docs/controlling-costs)

## Supporting Pages

### Estimate and control costs \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- The BigQuery slot estimator helps you to manage slot capacity based on historical performance metrics.
- Use the slot estimator Best practice: Use slot estimator to estimate the number of slots required for your workloads.

