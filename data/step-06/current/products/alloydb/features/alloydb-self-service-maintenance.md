---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.569Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB self-service maintenance"
feature_slug: "alloydb-self-service-maintenance"
latest_feature_date: "2025-11-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
keywords:
  - "self-service patching"
  - "install patches"
  - "self-service maintenance"
  - "configure deny periods"
  - "maintenance window"
  - "user-managed maintenance"
  - "apply updates"
  - "maintenance workflows"
---

# AlloyDB self-service maintenance

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB now offers self-service maintenance workflows to apply updates earlier, install patches, and configure deny periods.

## Extended Definition

AlloyDB self-service maintenance is a user-triggered maintenance workflow that lets you initiate update application on clusters even when they are behind the latest software due to an existing maintenance window. The feature is intended to apply latest AlloyDB updates as soon as needed, and can be used with maintenance policy/setting changes (such as database flag adjustments) to speed update application, with a cited target of about 1–2 minutes.

## Evidence Summary

The AlloyDB release notes page explicitly states the feature enables user-initiated earlier updates via self-service maintenance and notes behavior for clusters with unsynced maintenance windows plus faster update execution.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)

## Supporting Pages

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Clusters with a maintenance window that may not have received this release can use self-service maintenance to perform a maintenance update.
- November 19, 2025 Feature You can now perform self-service maintenance if you need to apply the latest AlloyDB updates to your clusters as soon as possible.
- If you have a maintenance window set for your AlloyDB cluster, you might not have the latest software version.
- Use this policy to modify database flags and apply updates faster (within 1-2 minutes) to an instance.

