---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.323Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery DCL support for connection user and PROJECT resource types"
feature_slug: "bigquery-dcl-support-for-connection-user-and-project-resource-types"
latest_feature_date: "2026-04-02"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "GRANT/REVOKE connection"
  - "REVOKE connection user"
  - "GRANT connection user"
  - "DCL connection user"
  - "connection and project access"
  - "connection user type"
  - "PROJECT resource type"
  - "PROJECT resource"
---

# BigQuery DCL support for connection user and PROJECT resource types

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery now allows GRANT and REVOKE statements to use the connection user type and PROJECT resource type for connection and project access control.

## Extended Definition

BigQuery supports Data Control Language (DCL) statements that can now use the **connection user** type and the **PROJECT** resource type with `GRANT` and `REVOKE`. This allows administrators to control access to connections and projects directly through these DCL operations.

## Evidence Summary

The BigQuery release notes explicitly state that `GRANT`/`REVOKE` DCL can now use connection user and PROJECT resource types to manage connection and project access.

## Source Links

- [https://cloud.google.com/bigquery/docs/release-notes](https://cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Additionally, you can now use the connection user type and PROJECT resource type with GRANT and REVOKE data control language (DCL) statements to manage connection and project access.

