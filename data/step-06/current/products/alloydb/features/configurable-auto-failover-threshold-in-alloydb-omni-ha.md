---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.603Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Configurable auto-failover threshold in AlloyDB Omni HA"
feature_slug: "configurable-auto-failover-threshold-in-alloydb-omni-ha"
latest_feature_date: "2024-08-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/overview"
keywords:
  - "health check failure count"
  - "health check threshold"
  - "failover trigger count"
  - "failed health checks"
  - "auto-failover threshold"
  - "failover threshold"
  - "auto-failover configuration"
  - "automatic failover"
---

# Configurable auto-failover threshold in AlloyDB Omni HA

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

AlloyDB Omni HA now lets users set the number of failed health checks that trigger automatic failover.

## Extended Definition

The provided Google Cloud AlloyDB documentation excerpt only confirms that AlloyDB high availability uses redundant nodes across two zones with automatic failover between them. It does not provide evidence that users can configure an auto-failover threshold or set a specific failed-health-check count in AlloyDB Omni HA, so this specific configurability is not verifiable from the cited source.

## Evidence Summary

The cited AlloyDB overview page confirms automatic failover in HA, but it does not mention configurable failover thresholds or health-check failure trigger settings.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)

## Supporting Pages

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- High availability By default, an AlloyDB cluster offers availability (HA) through its primary instance's redundant nodes, located in two different zones, with automatic failover.
- High availability: ensure service continuity through redundant nodes located in different zones, with automatic failover between them.
- Highly available : contains two nodes, an active node and a standby node, located in different zones for automatic failover.

