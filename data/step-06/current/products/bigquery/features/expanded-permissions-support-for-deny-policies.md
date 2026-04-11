---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.560Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Expanded permissions support for deny policies"
feature_slug: "expanded-permissions-support-for-deny-policies"
latest_feature_date: "2024-04-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "additional deny actions"
  - "Deny policy permissions"
  - "deny policy statements"
  - "BigQuery IAM deny"
  - "deny policies"
  - "deny policy"
  - "IAM deny"
---

# Expanded permissions support for deny policies

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery added support for additional permissions in deny policies.

## Extended Definition

According to the provided BigQuery release-notes excerpt, organization-level control for MCP usage can be done using IAM deny policies, specifically as an alternative when `gcp.managed.allowedMCPServices` organization policies are no longer usable after March 17, 2026. The excerpt therefore supports that BigQuery documentation describes deny-policy-based access control for MCP, but it does not specify which exact permissions were added or expanded in those deny policies.

## Evidence Summary

The release notes page shows MCP control being shifted to IAM deny policies but does not provide direct evidence for newly added or expanded deny-policy permissions for BigQuery beyond MCP usage control.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- After March 17, 2026, organization policies that use the gcp.managed.allowedMCPServices constraint won't work, and you can control MCP use with IAM deny policies.
- For more information about controlling MCP use, see Control MCP use with IAM deny policies .

