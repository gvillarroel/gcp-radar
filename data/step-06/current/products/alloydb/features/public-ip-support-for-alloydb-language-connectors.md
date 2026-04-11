---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.629Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Public IP support for AlloyDB Language Connectors"
feature_slug: "public-ip-support-for-alloydb-language-connectors"
latest_feature_date: "2024-02-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
keywords:
  - "connector public networking"
  - "Language Connector networking"
  - "cluster connections over public IP"
  - "connector public IP"
  - "external connector"
  - "public IP connectors"
  - "public endpoint"
  - "Language Connectors"
---

# Public IP support for AlloyDB Language Connectors

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

AlloyDB Language Connectors in preview now support use of public IP for cluster connections.

## Extended Definition

AlloyDB Language Connectors are client libraries for connecting to AlloyDB instances that provide automated mutual TLS, IAM-based authorization, and Automated IAM Authentication. The release notes confirm a February 09, 2026 update announcing support for AlloyDB language connectors (and Auth Proxy) with Auto IAM Authentication and managed connection pooling, but the provided excerpts do not explicitly state that this is specifically support for cluster connections over public IP.

## Evidence Summary

The cited release notes page provides evidence for connector security/authentication features and a Feb 2026 rollout, but does not directly document public IP cluster-connection capability in the provided snippets.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)

## Supporting Pages

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- These language connectors are libraries that provide automated mutual TLS connections, IAM-based authorization, and Automated IAM Authentication when connecting to an AlloyDB instance.
- These language connectors are libraries that provide automated mutual TLS connections, IAM-based authorization, and Automated IAM Authentication when connecting to an AlloyDB instance.
- February 09, 2026 Fixed We are announcing the release of support for the AlloyDB language connectors and Auth Proxy with Auto IAM Authentication and managed connection pooling.
- January 21, 2026 Issue Automatic IAM authentication is unavailable when you use managed connection pooling with the AlloyDB Auth Proxy and Language Connectors.

