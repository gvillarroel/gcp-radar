---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:28.019Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Cloud Bigtable table undelete"
feature_slug: "cloud-bigtable-table-undelete"
latest_feature_date: "2022-06-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient"
  - "https://docs.cloud.google.com/bigtable/docs/managing-tables"
keywords:
  - "undeleting"
  - "undelete"
  - "seven"
  - "allows"
  - "table"
---

# Cloud Bigtable table undelete

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Cloud Bigtable now allows undeleting a table for up to seven days using the gcloud CLI.

## Extended Definition

Cloud Bigtable now allows undeleting a table for up to seven days using the gcloud CLI.

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
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import bigtable admin v2 async def sample undelete table(): Create a client client = bigtable admin v2.
- UndeleteTableRequest ( name="name value", ) Make the request operation = client. undelete table (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.bigtable admin v2.types.UndeleteTableRequest , dict]] The request object.
- Returns Type Description google.iam.v1.iam policy pb2.TestIamPermissionsResponse Response message for TestIamPermissions method. undelete table undelete table ( request : typing .
- Request message for google.bigtable.admin.v2.BigtableTableAdmin.UndeleteTable][google.bigtable.admin.v2.BigtableTableAdmin.UndeleteTable] name str Required.

### "Class BigtableTableAdminClient (2.35.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient](https://docs.cloud.google.com/python/docs/reference/bigtable/latest/google.cloud.bigtable_admin_v2.overlay.services.bigtable_table_admin.BigtableTableAdminClient)
- Source ID: `site-python-reference`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import bigtable admin v2 def sample undelete table(): Create a client client = bigtable admin v2.
- UndeleteTableRequest ( name="name value", ) Make the request operation = client. undelete table (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.bigtable admin v2.types.UndeleteTableRequest , dict] The request object.
- Returns Type Description google.iam.v1.iam policy pb2.TestIamPermissionsResponse Response message for TestIamPermissions method. undelete table undelete table ( request : typing .
- Request message for google.bigtable.admin.v2.BigtableTableAdmin.UndeleteTable][google.bigtable.admin.v2.BigtableTableAdmin.UndeleteTable] name str Required.

### Create and manage tables \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/managing-tables](https://docs.cloud.google.com/bigtable/docs/managing-tables)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To confirm that you acknowledge that this action will delete the table from all clusters in the instance and that you have only seven days to undelete the table, type the table ID in the Delete table box.
- The following limitations apply: The ability to undelete a table is available for approximately seven days from the time of table deletion.
- Examples: 48h or 6d To let Bigtable create a daily backup of your table and retain each backup for the default retention period of seven days, use the --enable-automated-backup flag when you create your table. gcloud bigtable instances tables create TABLE ID \ --instance = INSTANCE ID \ --project = PROJECT ID \ --column-families = COLUMN-FAMILIES \ --enable-automated-backup To configure a different retention period, use the --automated-backup-retention-period flag instead of the --enable-automated-backup flag and provide a value up to 90 days, expressed as a number with a unit of m , h , or d (minutes, hours, or days), such as 15d for 15 days.
- Click Delete . gcloud To delete tables, run the gcloud bigtable instances tables delete command. gcloud bigtable instances tables delete TABLE ID --instance = INSTANCE ID Replace the following: TABLE ID : the unique ID of the table INSTANCE ID : the ID of the instance In the terminal, enter y to confirm table deletion. cbt To delete a table, use the following command, replacing [TABLE NAME] with the table name: cbt deletetable [ TABLE NAME ] Undelete a table If you accidentally delete a table, you can use the gcloud CLI command bigtable instances tables undelete to undelete , or recover, the table.

