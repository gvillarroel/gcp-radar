---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.942Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery long-term storage pricing"
feature_slug: "bigquery-long-term-storage-pricing"
latest_feature_date: "2016-03-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/controlling-costs"
keywords:
  - "active vs long-term storage"
  - "storage discount after 90 days"
  - "90-day storage threshold"
  - "long-term storage pricing"
  - "long-term storage"
  - "storage pricing tiers"
  - "LTS pricing"
  - "storage cost model"
---

# BigQuery long-term storage pricing

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery introduced long-term storage pricing.

## Extended Definition

BigQuery introduced long-term storage pricing.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)

## Supporting Pages

### Estimate and control costs \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: WEAK
- Re-rank rationale: The page is a general BigQuery pricing/cost-control guide, which mentions storage billing models but does not detail long-term storage pricing specifics.

Evidence snippets:
- As a best practice, consider long-term storage pricing and the physical storage billing model before exporting data out of BigQuery .
- Use long-term storage Best practice: Use long-term storage pricing to reduce cost of older data.
- For older data, you can automatically take advantage of BigQuery long-term storage pricing.
- Unexpected storage charges Scenarios that could lead to storage charge increases: Increases in the amount of data that is stored in your tables—use the INFORMATION SCHEMA.TABLE STORAGE USAGE TIMELINE view to monitor the change in bytes for your tables Changing dataset billing models Increasing the time-travel window for physical billing model datasets Modification of tables that have data in long-term storage , causing them to become active storage Deletion of table(s) or dataset(s) resulted in higher BigQuery storage costs The BigQuery time travel feature retains deleted data for duration of the configured time-travel window and an additional 7 days for fail-safe recovery.

