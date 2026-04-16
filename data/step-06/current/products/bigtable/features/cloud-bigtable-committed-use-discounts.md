---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.008Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable committed use discounts"
feature_slug: "cloud-bigtable-committed-use-discounts"
latest_feature_date: "2023-07-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/cuds"
  - "https://docs.cloud.google.com/bigtable/docs/resources"
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient"
keywords:
  - "committed"
  - "discounts"
  - "year"
  - "generally"
  - "available"
---

# Cloud Bigtable committed use discounts

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Committed use discounts are generally available for Cloud Bigtable with one-year or three-year node spend commitments.

## Extended Definition

Committed use discounts are generally available for Cloud Bigtable with one-year or three-year node spend commitments.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/cuds](https://docs.cloud.google.com/bigtable/docs/cuds)
- [https://docs.cloud.google.com/bigtable/docs/resources](https://docs.cloud.google.com/bigtable/docs/resources)
- [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)

## Supporting Pages

### Committed use discounts \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/cuds](https://docs.cloud.google.com/bigtable/docs/cuds)
- Source ID: `site-docs-reference-2`
- Final score: 125
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- From the pricing page , see the price in the column labeled Cost per node with 1-year committed use discounts to calculate the approximate hourly commitment cost: Expenditure in us-central1 : 10 nodes $0.52 per node per hour = $5.20 per hour Expenditure in us-west2 : 20 nodes $0.624 per node per hour = $12.48 per hour Total expenditure across all regions: $6.50 + $15.60 = $17.68 per hour ($12,906.40 per month or $154,876.80 per year).
- Committed use discounts (CUDs) for Bigtable provide discounted prices in exchange for your commitment to continuously spend a minimum hourly amount on Bigtable capacity for a year or longer.
- Important: This page explains the new and improved committed use discounts (CUDs) program, which applies to any customers who purchase their first CUDs on or after July 15, 2025 .
- Bigtable CUD pricing Bigtable offers two levels of discounts, depending on the commitment period: 20% discount : You get this by committing to a 1-year term.

### Resources \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/resources](https://docs.cloud.google.com/bigtable/docs/resources)
- Source ID: `site-docs-reference`
- Final score: 59
- Re-rank relevance: N/A

Evidence snippets:
- Committed use discounts Discounts for Bigtable nodes when you make a commitment to continuously spend a certain amount for one year or three years.
- Locations Locations where Bigtable is available.

### "Class BigtableTableAdminAsyncClient (2.35.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)
- Source ID: `site-python-reference`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- Union [ str , bytes ]]] = () ) - > bool Blocks until the mutations for the specified Table that have been made before the call have been replicated or reads using an app profile with DataBoostIsolationReadOnly can see all writes committed before the token was created.
- If the data boost read local writes mode is specified in the request object, returns True after reads using an app profile with DataBoostIsolationReadOnly can see all writes committed before the token was created.
- Generally, you only need to set this if you're developing your own client library.
- This feature is not currently available to most Cloud Bigtable customers.

