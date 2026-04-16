---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.178Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Efficient incremental backup copy chains in Spanner"
feature_slug: "efficient-incremental-backup-copy-chains-in-spanner"
latest_feature_date: "2025-05-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.BatchReadOnlyTransaction"
  - "https://docs.cloud.google.com/spanner/docs/change-streams/manage"
  - "https://docs.cloud.google.com/spanner/docs/compute-capacity"
keywords:
  - "efficient"
  - "chains"
  - "incremental"
  - "copying"
  - "copy"
  - "backup"
  - "supports"
---

# Efficient incremental backup copy chains in Spanner

Product: Spanner
Coverage: LOW

## Step 02 Summary

Spanner supports copying incremental backups by transferring only the incremental backup and any missing older backups in the chain, reusing existing chain segments at the destination to reduce redundant storage and network costs.

## Extended Definition

Spanner supports copying incremental backups by transferring only the incremental backup and any missing older backups in the chain, reusing existing chain segments at the destination to reduce redundant storage and network costs.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.BatchReadOnlyTransaction](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.BatchReadOnlyTransaction)
- [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage)
- [https://docs.cloud.google.com/spanner/docs/compute-capacity](https://docs.cloud.google.com/spanner/docs/compute-capacity)

## Supporting Pages

### "Compute capacity, nodes and processing units \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/compute-capacity](https://docs.cloud.google.com/spanner/docs/compute-capacity)
- Source ID: `site-docs-root`
- Final score: 46
- Re-rank relevance: N/A

### "Interface BatchReadOnlyTransaction (6.111.1) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.BatchReadOnlyTransaction](https://docs.cloud.google.com/java/docs/reference/google-cloud-spanner/latest/com.google.cloud.spanner.BatchReadOnlyTransaction)
- Source ID: `site-java-reference`
- Final score: 46
- Re-rank relevance: N/A

### Create and manage change streams \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/change-streams/manage](https://docs.cloud.google.com/spanner/docs/change-streams/manage)
- Source ID: `site-docs-root`
- Final score: 46
- Re-rank relevance: N/A

