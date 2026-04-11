---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.637Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB basic instances"
feature_slug: "alloydb-basic-instances"
latest_feature_date: "2023-09-21"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
  - "https://docs.cloud.google.com/alloydb/docs/overview"
keywords:
  - "basic instance type"
  - "single-node instance"
  - "AlloyDB basic instances"
  - "single-node AlloyDB"
  - "Basic instance"
  - "one-zone primary"
  - "non-HA instance"
---

# AlloyDB basic instances

Product: AlloyDB
Coverage: HIGH

## Step 02 Summary

AlloyDB basic instances provide single-node, one-zone primary instances as a lower-cost non-HA option.

## Extended Definition

AlloyDB basic instances are a primary instance type introduced on September 21, 2023 that consists of a single node in one zone with no standby node. They are a lower-cost option intended for non-production or other workloads that do not require high availability, effectively serving as a non-HA instance type.

## Evidence Summary

The release notes provide the launch date and one-zone single-node definition plus lower-cost non-HA positioning, while the overview confirms basic instances have only one node and no standby, targeted at non-production non-HA use cases.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)

## Supporting Pages

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- June 14, 2024 Change The maintenance downtime for a basic instance has been improved to match that of an HA primary instance , ensuring both instance types experience minimal downtime of less than a second.
- Basic instances provide a lower-cost alternative to highly available instances, and are appropriate for use in non-production environments that don't require high availability.
- September 21, 2023 Feature AlloyDB now offers basic instances , which are primary instances containing only one node, in one zone.

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Basic instance : contains a single node for non-production environments that don't require high availability.
- For more information, see Reduce costs using basic instances .
- A basic instance has only one node, with no standby node.

