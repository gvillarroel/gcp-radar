---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.672Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery editions with Compute (analysis) GA"
feature_slug: "bigquery-editions-with-compute-analysis-ga"
latest_feature_date: "2023-03-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/controlling-costs"
  - "https://docs.cloud.google.com/bigquery/docs/admin-intro"
keywords:
  - "edition feature availability"
  - "Enterprise edition"
  - "Standard edition"
  - "autoscaling slots model"
  - "BigQuery editions"
  - "BigQuery Editions"
  - "Compute (analysis)"
  - "Enterprise Plus"
---

# BigQuery editions with Compute (analysis) GA

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Compute (analysis) is generally available in Standard, Enterprise, and Enterprise Plus editions that support the autoscaling slots model.

## Extended Definition

BigQuery Editions billing uses a slot-based compute model in which an organization allocates slots through autoscaling reservations, with optional capacity commitments for additional committed capacity. In official cost guidance, this is represented as capacity-based edition pricing (including examples for Standard and Enterprise editions), and usage/charges for on-demand slot-based workloads are tracked with edition- and feature-specific billing labels.

## Evidence Summary

The docs show that BigQuery editions are connected to autoscaling slot allocation for compute capacity and that edition-based capacity pricing/usage is documented via SKU and billing-label details.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)

## Supporting Pages

### Estimate and control costs \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Editions To estimate costs in the Google Cloud pricing calculator when using the capacity-based pricing model with BigQuery editions , follow these steps: Open the Google Cloud pricing calculator .
- After that, study the pricing for the corresponding SKUs in the SKU documentation page or the Pricing page in the Cloud Billing UI to understand which feature it is, for example, BigQuery Storage Read API, long-term storage, on-demand pricing, Standard edition.
- Unexpected charges for pay-as-you go (PAYG) slots for the BigQuery Standard edition In the Cloud Billing report, apply a filter with the label goog-bq-feature-type with the value BQ STUDIO NOTEBOOK .
- Unexpected charges for pay-as-you go (PAYG) slots for the BigQuery Enterprise edition In the Cloud Billing report, apply a filter with the label goog-bq-feature-type with the value SPARK PROCEDURE .

### Introduction to BigQuery administration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)
- Source ID: `site-docs-root-2`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- With BigQuery editions billing, you allocate slots for your organization through autoscaling reservations and optional, but cheaper, capacity commitments.
- For more information about BigQuery editions and the features that are associated with them, see Introduction to BigQuery editions .

