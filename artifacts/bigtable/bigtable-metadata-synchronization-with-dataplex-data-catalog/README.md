# Bigtable metadata synchronization with Dataplex Data Catalog

Product: Bigtable
Feature slug: `bigtable-metadata-synchronization-with-dataplex-data-catalog`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Bigtable instance, cluster, and table metadata is automatically synced to Data Catalog for improved discovery and governance.

## Lifecycle

- Latest feature date: 2023-10-06
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- iam
- key
- role

## Official Evidence

- [https://docs.cloud.google.com/bigtable/docs/reference/admin/rest/v2/CreateClusterMetadata](https://docs.cloud.google.com/bigtable/docs/reference/admin/rest/v2/CreateClusterMetadata)
- [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient)
