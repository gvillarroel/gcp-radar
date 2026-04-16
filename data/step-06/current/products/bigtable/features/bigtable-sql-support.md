---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:27.984Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Bigtable SQL support"
feature_slug: "bigtable-sql-support"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/cmek"
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient"
keywords:
  - "generally"
  - "available"
---

# Bigtable SQL support

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Bigtable SQL support is now generally available.

## Extended Definition

Bigtable SQL support is now generally available.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/cmek](https://docs.cloud.google.com/bigtable/docs/cmek)
- [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient)

## Supporting Pages

### "Customer-managed encryption keys (CMEK) \_|\_ Bigtable \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigtable/docs/cmek](https://docs.cloud.google.com/bigtable/docs/cmek)
- Source ID: `site-docs-reference-2`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- Google Cloud console Google Cloud CLI All generally available (GA) client libraries that call the Cloud Bigtable APIs.
- How an unavailable key status is handled In rare scenarios, such as during periods when Cloud KMS is unavailable, Bigtable may be unable to retrieve the status of a key from Cloud KMS.
- Because Bigtable uses envelope encryption , these costs per table are generally low, given the small number of expected cryptographic operations.
- If the externally managed key is unavailable, Bigtable continues to support cluster operations on a best-effort basis for up to one hour.

### "Class BigtableTableAdminAsyncClient (2.35.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)
- Source ID: `site-python-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Generally, you only need to set this if you're developing your own client library.
- This feature is not currently available to most Cloud Bigtable customers.
- This feature is not currently available to most Cloud Bigtable customers.
- This feature is not currently available to most Cloud Bigtable customers.

### "Class BigtableTableAdminClient (2.35.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient)
- Source ID: `site-python-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Generally, you only need to set this if you're developing your own client library.
- This feature is not currently available to most Cloud Bigtable customers.
- This feature is not currently available to most Cloud Bigtable customers.
- This feature is not currently available to most Cloud Bigtable customers.

