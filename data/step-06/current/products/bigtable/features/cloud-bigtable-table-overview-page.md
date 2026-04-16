---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.021Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable table overview page"
feature_slug: "cloud-bigtable-table-overview-page"
latest_feature_date: "2022-05-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient"
  - "https://docs.cloud.google.com/bigtable/docs/managing-tables"
keywords:
  - "overview"
  - "page"
  - "showing"
  - "offers"
  - "console"
  - "table"
---

# Cloud Bigtable table overview page

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Cloud Bigtable now offers a table overview page in the Cloud Console showing monitoring metrics and replication details.

## Extended Definition

Cloud Bigtable now offers a table overview page in the Cloud Console showing monitoring metrics and replication details.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient)
- [https://docs.cloud.google.com/bigtable/docs/managing-tables](https://docs.cloud.google.com/bigtable/docs/managing-tables)

## Supporting Pages

### "Class BigtableTableAdminAsyncClient (2.35.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient)
- Source ID: `site-python-reference`
- Final score: 169
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Returns Type Description google.cloud.bigtable admin v2.services.bigtable table admin.pagers.ListAuthorizedViewsAsyncPager Response message for google.bigtable.admin.v2.BigtableTableAdmin.ListAuthorizedViews][google.bigtable.admin.v2.BigtableTableAdmin.ListAuthorizedViews] Iterating over this object will yield results and resolve additional pages automatically. list backups list backups ( request : typing .
- Returns Type Description google.cloud.bigtable admin v2.services.bigtable table admin.pagers.ListTablesAsyncPager Response message for google.bigtable.admin.v2.BigtableTableAdmin.ListTables][google.bigtable.admin.v2.BigtableTableAdmin.ListTables] Iterating over this object will yield results and resolve additional pages automatically. modify column families modify column families ( request : typing .
- ListAuthorizedViewsRequest ( parent="parent value", ) Make the request page result = client. list authorized views (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.bigtable admin v2.types.ListAuthorizedViewsRequest , dict]] The request object.
- ListSchemaBundlesRequest ( parent="parent value", ) Make the request page result = client. list schema bundles (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.bigtable admin v2.types.ListSchemaBundlesRequest , dict]] The request object.

### "Class BigtableTableAdminClient (2.35.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient)
- Source ID: `site-python-reference`
- Final score: 169
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Returns Type Description google.cloud.bigtable admin v2.services.bigtable table admin.pagers.ListAuthorizedViewsPager Response message for google.bigtable.admin.v2.BigtableTableAdmin.ListAuthorizedViews][google.bigtable.admin.v2.BigtableTableAdmin.ListAuthorizedViews] Iterating over this object will yield results and resolve additional pages automatically. list backups list backups ( request : typing .
- Returns Type Description google.cloud.bigtable admin v2.services.bigtable table admin.pagers.ListTablesPager Response message for google.bigtable.admin.v2.BigtableTableAdmin.ListTables][google.bigtable.admin.v2.BigtableTableAdmin.ListTables] Iterating over this object will yield results and resolve additional pages automatically. modify column families modify column families ( request : typing .
- ListAuthorizedViewsRequest ( parent="parent value", ) Make the request page result = client. list authorized views (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.bigtable admin v2.types.ListAuthorizedViewsRequest , dict] The request object.
- ListSchemaBundlesRequest ( parent="parent value", ) Make the request page result = client. list schema bundles (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.bigtable admin v2.types.ListSchemaBundlesRequest , dict] The request object.

### Create and manage tables \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/managing-tables](https://docs.cloud.google.com/bigtable/docs/managing-tables)
- Source ID: `site-docs-root`
- Final score: 153
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create and manage tables This page explains how to create and perform operations on Bigtable tables using the Google Cloud console, the Google Cloud CLI, or the cbt CLI .
- Click Confirm . gcloud You can't use the gcloud CLI to delete column families from a table. cbt To delete a column family from a table, use the following command, replacing [TABLE NAME] with the table name and [FAMILY NAME] with the column family name: cbt deletefamily [ TABLE NAME ] [ FAMILY NAME ] For example, to delete the column family cf2 from the table my-table : cbt deletefamily my-table cf2 View a list of tables Console To view a list of tables in an instance: Open the list of Bigtable instances in the Google Cloud console.
- For more information, see Set up authentication for a local development environment . // List tables in current project const [ tables ] = await adminClient . listTables ({ parent : instance . name }); tables . forEach ( table = > { console . log ( table . name ); }); PHP To learn how to install and use the client library for Bigtable, see Bigtable client libraries .
- For more information, see Set up authentication for a local development environment . instance id = "my-instance" bigtable . tables ( instance id ) . all . each do t puts "Table: #{ t . name } " end View information about a table Console To view information about a table: Open the list of Bigtable instances in the Google Cloud console.

