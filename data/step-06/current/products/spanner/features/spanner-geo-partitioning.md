---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.223Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner Geo-partitioning"
feature_slug: "spanner-geo-partitioning"
latest_feature_date: "2024-07-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/backup/restore-backup-overview"
  - "https://docs.cloud.google.com/spanner/docs/cmek"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient"
keywords:
  - "partitioning"
  - "segment"
  - "store"
  - "preview"
  - "supports"
---

# Spanner Geo-partitioning

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner now supports Geo-partitioning in Preview to segment and store table rows across different geographic configurations.

## Extended Definition

Spanner now supports Geo-partitioning in Preview to segment and store table rows across different geographic configurations.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/backup/restore-backup-overview](https://docs.cloud.google.com/spanner/docs/backup/restore-backup-overview)
- [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient)

## Supporting Pages

### Restore overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup/restore-backup-overview](https://docs.cloud.google.com/spanner/docs/backup/restore-backup-overview)
- Source ID: `site-docs-root`
- Final score: 74
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, if your instance uses geo-partitioning , then you can't restore it to the Enterprise edition or Standard edition.
- You can use restore from a backup in the following ways: In the Google Cloud console Using the Google Cloud CLI Using the client libraries Using the REST or RPC APIs How database restoration from a backup works When you restore a Spanner database, you must specify a source backup and a new target database.
- If you need to restore from a backup in a different region or project for compliance or business continuity reasons, you can copy the backup to an instance in a separate region or project, then restore from the copied backup.
- Note the following caveats regarding the CREATING state: If you are restoring to a different instance, the restore operation belongs to the instance containing the restored database, not the instance containing the backup.

### "Customer-managed encryption keys (CMEK) overview \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- Source ID: `site-docs-root`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- Note: After you enable CMEK in your Spanner database, you can't change its encryption configuration unless you back up and restore the database, or export then import the database back to Spanner.
- When using geo-partitioning, you must use a regional Cloud KMS key for each instance replica locatoin, including those in the instance partition configuration.
- If Spanner's calls to Cloud KMS detect that a formerly disabled key has been re-enabled, Cloud KMS restores access to the Spanner database automatically.
- Because of the high volume of keys at Google, and the need for low latency and high availability, these keys are stored near the data that they encrypt.

### "Class DatabaseAdminAsyncClient (3.63.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient)
- Source ID: `site-python-reference`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- Dict [ str , str ] Parses a instance path into its component segments. restore database restore database ( request : typing .
- RestoreDatabaseRequest ( backup="backup value", parent="parent value", database id="database id value", ) Make the request operation = client. restore database (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.spanner admin database v1.types.RestoreDatabaseRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import spanner admin database v1 async def sample restore database(): Create a client client = spanner admin database v1.
- ClientInfo ) Cloud Spanner Database Admin API The Cloud Spanner Database Admin API can be used to: create, drop, and list databases update the schema of pre-existing databases create, delete, copy and list backups for a database restore a database from an existing backup Properties api endpoint Return the API endpoint used by the client instance.

