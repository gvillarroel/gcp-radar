---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:07:33.855Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB maintenance windows"
feature_slug: "alloydb-maintenance-windows"
latest_feature_date: "2024-05-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/maintenance"
  - "https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.types.AutomatedBackupPolicy.WeeklySchedule"
  - "https://docs.cloud.google.com/alloydb/docs/reference/ai/scann-index-reference"
  - "https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index"
keywords:
  - "planned maintenance window"
  - "weekly maintenance window"
  - "maintenance schedule settings"
  - "maintenance window schedule"
  - "non-emergency maintenance"
  - "scheduled maintenance"
  - "maintenance windows"
  - "maintenance window"
---

# AlloyDB maintenance windows

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB users can schedule maintenance windows so non-emergency maintenance runs only during selected weekly periods.

## Extended Definition

AlloyDB users can schedule maintenance windows so non-emergency maintenance runs only during selected weekly periods.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/maintenance](https://docs.cloud.google.com/alloydb/docs/maintenance)
- [https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.types.AutomatedBackupPolicy.WeeklySchedule](https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.types.AutomatedBackupPolicy.WeeklySchedule)
- [https://docs.cloud.google.com/alloydb/docs/reference/ai/scann-index-reference](https://docs.cloud.google.com/alloydb/docs/reference/ai/scann-index-reference)
- [https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index](https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index)

## Supporting Pages

### Maintenance overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/maintenance](https://docs.cloud.google.com/alloydb/docs/maintenance)
- Source ID: `site-docs-reference-2`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Non-emergency maintenance for an AlloyDB cluster with no configured maintenance windows can occur any time except for the hours between 6 AM and 10 PM on weekdays, in the local time of the region where the cluster is located.
- If you set a maintenance window, then AlloyDB schedules future non-emergency maintenance events to begin no later than one hour after the specified time.
- Emergency maintenance events, such as urgent security patches, might occur outside default maintenance times or configured maintenance windows.
- Clusters with maintenance windows typically receive updates after the changelog and release notes are updated.

### "Class WeeklySchedule (0.7.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.types.AutomatedBackupPolicy.WeeklySchedule](https://docs.cloud.google.com/python/docs/reference/alloydb/latest/google.cloud.alloydb_v1.types.AutomatedBackupPolicy.WeeklySchedule)
- Source ID: `site-python-reference`
- Final score: 72
- Re-rank relevance: N/A

### "AlloyDB ScaNN Index reference \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/ai/scann-index-reference](https://docs.cloud.google.com/alloydb/docs/reference/ai/scann-index-reference)
- Source ID: `site-api-reference`
- Final score: 64
- Re-rank relevance: N/A

### Create a ScaNN index \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index](https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index)
- Source ID: `site-docs-reference-2`
- Final score: 64
- Re-rank relevance: N/A

