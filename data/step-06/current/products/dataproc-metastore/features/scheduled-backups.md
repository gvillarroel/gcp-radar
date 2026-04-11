---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:49:01.297Z"
product_name: "Dataproc Metastore"
product_slug: "dataproc-metastore"
feature_name: "Scheduled backups"
feature_slug: "scheduled-backups"
latest_feature_date: "2024-03-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/backup-metadata"
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationClient"
keywords:
  - "scheduled"
  - "backups"
  - "let"
  - "users"
  - "run"
  - "at"
  - "specified"
  - "cron"
---

# Scheduled backups

Product: Dataproc Metastore
Coverage: LOW

## Step 02 Summary

Scheduled backups let users run backups at specified cron-based daily, weekly, or monthly intervals.

## Extended Definition

Scheduled backups let users run backups at specified cron-based daily, weekly, or monthly intervals.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/backup-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/backup-metadata)
- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationClient)

## Supporting Pages

### Back up a Dataproc Metastore service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/backup-metadata](https://docs.cloud.google.com/dataproc-metastore/docs/backup-metadata)
- Source ID: `site-iam-reference`
- Final score: 204
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Schedule a backup Backups can be scheduled to run at user-specified cron job intervals , including running daily, weekly, or monthly.
- For Timezone , select the appropriate time zone, such as UTC-8 . gcloud CLI To schedule a backup of a Dataproc Metastore service, run the following gcloud metastore services backups update command: gcloud metastore services update SERVICE \ --location= LOCATION \ --enable-scheduled-backup \ --scheduled-backup-cron= SCHEDULED BACKUP CRON \ --scheduled-backup-location= SCHEDULED BACKUP LOCATION \ Replace the following: SERVICE : the ID or fully qualified identifier for the scheduled backup.
- Click Submit . gcloud CLI To schedule a backup of a Dataproc Metastore service, run the following gcloud metastore services backups create command: gcloud metastore services create SERVICE \ --location= LOCATION \ --enable-scheduled-backup \ --scheduled-backup-cron= SCHEDULED BACKUP CRON \ --scheduled-backup-location= SCHEDULED BACKUP LOCATION Replace the following: SERVICE : the ID or fully qualified identifier for the backup.
- You can create scheduled backups that run at various cron intervals, such as every day.

### "Class DataprocMetastoreFederationAsyncClient (1.22.0) \_|\_ Python client\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationAsyncClient)
- Source ID: `site-python-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Union [ str , bytes ]]] = () ) - > None Deletes a long-running operation.
- CreateFederationRequest ( parent="parent value", federation id="federation id value", ) Make the request operation = client. create federation (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.metastore v1.types.CreateFederationRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import metastore v1 async def sample delete federation(): Create a client client = metastore v1.
- DeleteFederationRequest ( name="name value", ) Make the request operation = client. delete federation (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.metastore v1.types.DeleteFederationRequest , dict]] The request object.

### "Class DataprocMetastoreFederationClient (1.22.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore_federation.DataprocMetastoreFederationClient)
- Source ID: `site-python-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Union [ str , bytes ]]] = () ) - > None Deletes a long-running operation.
- CreateFederationRequest ( parent="parent value", federation id="federation id value", ) Make the request operation = client. create federation (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.metastore v1.types.CreateFederationRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import metastore v1 def sample delete federation(): Create a client client = metastore v1.
- DeleteFederationRequest ( name="name value", ) Make the request operation = client. delete federation (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.metastore v1.types.DeleteFederationRequest , dict] The request object.

