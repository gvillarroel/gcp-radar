---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.818Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Reservations on-demand pricing project assignment"
feature_slug: "bigquery-reservations-on-demand-pricing-project-assignment"
latest_feature_date: "2020-08-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/controlling-costs"
  - "https://docs.cloud.google.com/bigquery/docs/data-manipulation-language"
keywords:
  - "assign project to on-demand"
  - "project-level reservation assignment"
  - "on-demand assignment"
  - "reservations assignment"
  - "on-demand reservations"
  - "project assignment"
  - "on-demand pricing"
---

# BigQuery Reservations on-demand pricing project assignment

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now allows explicit assignment of projects to use on-demand pricing within Reservations.

## Extended Definition

BigQuery now allows explicit assignment of projects to use on-demand pricing within Reservations.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- [https://docs.cloud.google.com/bigquery/docs/data-manipulation-language](https://docs.cloud.google.com/bigquery/docs/data-manipulation-language)

## Supporting Pages

### Estimate and control costs \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- A dry run query completes immediately. print ( "This query will process {} bytes." . format ( query job . total bytes processed )) Estimate query costs When using the on-demand pricing model , you can estimate the cost of running a query by calculating the number of bytes processed.
- After that, study the pricing for the corresponding SKUs in the SKU documentation page or the Pricing page in the Cloud Billing UI to understand which feature it is, for example, BigQuery Storage Read API, long-term storage, on-demand pricing, Standard edition.
- Therefore, if you just add up all of the total billed bytes for the project and use the standard on-demand pricing per-TB rate, this won't be a correct pricing aggregation—you need to account for the pricing difference per-TB.
- In addition, customers using the on-demand pricing model can view sizing recommendations for commitments and autoscaling reservations with similar performance when moving to capacity-based pricing.

### "Transform data with data manipulation language (DML) \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/data-manipulation-language](https://docs.cloud.google.com/bigquery/docs/data-manipulation-language)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Projects that perform fine-grained DML operations by using on-demand pricing , or without a BACKGROUND assignment, process offloaded garbage collection tasks using internal BigQuery resources and are charged at on-demand pricing rates.
- Operation On-demand pricing Capacity-based pricing Mutating DML statements Use standard DML sizing to determine on-demand bytes scanned calculations.
- Projects that perform fine-grained DML operations without a BACKGROUND assignment use on-demand pricing to process the offloaded deleted data jobs.

