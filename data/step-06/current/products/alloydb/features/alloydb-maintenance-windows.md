---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.612Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB maintenance windows"
feature_slug: "alloydb-maintenance-windows"
latest_feature_date: "2024-05-01"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
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
Coverage: HIGH

## Step 02 Summary

AlloyDB users can schedule maintenance windows so non-emergency maintenance runs only during selected weekly periods.

## Extended Definition

AlloyDB supports setting maintenance windows for clusters so that non-emergency maintenance is scheduled only during a specified weekly period. This lets users control when planned maintenance can run rather than allowing it at arbitrary times. Release-note text also states that clusters that have not received that release may use self-service maintenance for updates.

## Evidence Summary

The AlloyDB release notes introduce the maintenance window feature and explicitly state that configured weekly windows limit non-emergency maintenance events to those periods.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)

## Supporting Pages

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- May 01, 2024 Feature You can now set maintenance windows for your AlloyDB clusters .
- For more information, see Maintenance timing and maintenance windows .
- Clusters with a maintenance window that may not have received this release can use self-service maintenance to perform a maintenance update.
- If you do, then AlloyDB schedules non-emergency maintenance events to begin only during the weekly period that you specify.

