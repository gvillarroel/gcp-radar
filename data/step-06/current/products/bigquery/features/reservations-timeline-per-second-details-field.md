---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.398Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "RESERVATIONS_TIMELINE per_second_details field"
feature_slug: "reservations-timeline-per-second-details-field"
latest_feature_date: "2025-09-03"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "per-second reservation capacity details"
  - "per-second reservation usage details"
  - "per_second_details field"
  - "capacity and usage by second"
  - "per_second_details"
  - "INFORMATION_SCHEMA.RESERVATIONS_TIMELINE"
  - "reservations_timeline view"
  - "RESERVATIONS_TIMELINE"
---

# RESERVATIONS_TIMELINE per_second_details field

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

The INFORMATION_SCHEMA.RESERVATIONS_TIMELINE view now includes the per_second_details field for per-second reservation capacity and usage details.

## Extended Definition

In BigQuery, the feature adds a new schema field named `per_second_details` to `INFORMATION_SCHEMA.RESERVATIONS_TIMELINE`, indicating the view now includes per-second reservation timeline detail data. The release-note evidence does not specify the exact structure or semantics of the field contents beyond that it is a per-second details field.

## Evidence Summary

The cited BigQuery release notes entry dated September 3, 2025 states that `INFORMATION_SCHEMA.RESERVATIONS_TIMELINE` was updated to include the `per_second_details` schema field.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- September 03, 2025 Feature The INFORMATION SCHEMA.RESERVATIONS TIMELINE view now includes the per second details schema field .

