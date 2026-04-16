---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:02.777Z"
product_name: "Datastore"
product_slug: "datastore"
feature_name: "Point-in-time recovery (PITR)"
feature_slug: "point-in-time-recovery-pitr"
latest_feature_date: "2023-11-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/datastore/docs/export-import-entities"
  - "https://docs.cloud.google.com/datastore/docs/cmek"
  - "https://docs.cloud.google.com/python/docs/reference/datastore/latest/admin_client"
  - "https://docs.cloud.google.com/datastore/docs/articles/fast-and-reliable-ranking-in-datastore"
keywords:
  - "point"
  - "in"
  - "time"
  - "recovery"
  - "pitr"
  - "protects"
  - "against"
  - "accidental"
---

# Point-in-time recovery (PITR)

Product: Datastore
Coverage: MEDIUM

## Step 02 Summary

Point-in-time recovery protects against accidental deletion or writes by enabling recovery to an earlier point in time; Point-in-time recovery protects against accidental deletion or writes by enabling recovery to an earlier point in time.

## Extended Definition

Point-in-time recovery protects against accidental deletion or writes by enabling recovery to an earlier point in time; Point-in-time recovery protects against accidental deletion or writes by enabling recovery to an earlier point in time.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
- [https://docs.cloud.google.com/datastore/docs/cmek](https://docs.cloud.google.com/datastore/docs/cmek)
- [https://docs.cloud.google.com/python/docs/reference/datastore/latest/admin_client](https://docs.cloud.google.com/python/docs/reference/datastore/latest/admin_client)
- [https://docs.cloud.google.com/datastore/docs/articles/fast-and-reliable-ranking-in-datastore](https://docs.cloud.google.com/datastore/docs/articles/fast-and-reliable-ranking-in-datastore)

## Supporting Pages

### Exporting and Importing Entities \_|\_ Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/export-import-entities](https://docs.cloud.google.com/datastore/docs/export-import-entities)
- Source ID: `site-docs-root`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- Note the following points before exporting PITR data: Specify the timestamp in RFC 3339 format .
- Run the following command to export the database to your bucket. gcloud firestore export gs : //[ BUCKET NAME PATH ] \ --snapshot-time=[ PITR TIMESTAMP ] \ --collection-ids=[ COLLECTION IDS ] \ --namespace-ids=[ NAMESPACE IDS ] Where PITR TIMESTAMP is a PITR timestamp at the minute granularity, for example, 2023-05-26T10:20:00.00Z .
- You can export PITR data where the timestamp is a whole minute timestamp within the past seven days, but not earlier than the earliestVersionTime .
- In the Choose the state of your database to export section, select Export from an earlier point in time .

### "Customer-managed encryption keys (CMEK) \_|\_ Datastore \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/datastore/docs/cmek](https://docs.cloud.google.com/datastore/docs/cmek)
- Source ID: `site-iam-reference`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- CMEK and key availability When keys are unavailable or disabled, be aware of the following behaviors that can occur in CMEK-enabled databases: You can change Datastore mode point-in-time recovery (PITR) settings on a CMEK-enabled database even if the key is unavailable because PITR settings are database metadata, which isn't encrypted by CMEK.
- If the database has time-to-live (TTL) policies , and if any expiration times get exceeded while the key is unavailable, data deletion by TTL will be delayed until the key gets reinstated.
- Key tracking You can use key tracking to view resources, for example, Datastore mode databases, that a key protects.
- To avoid permanent data loss, don't leave external keys in an inaccessible state for an extended time.

### "Datastore Admin Client \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/datastore/latest/admin_client](https://docs.cloud.google.com/python/docs/reference/datastore/latest/admin_client)
- Source ID: `site-python-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Only if this property is not set and transport was not explicitly provided, the endpoint is determined by the GOOGLE API USE MTLS ENDPOINT environment variable, which have one of the following values: “always” (always use the default mTLS endpoint), “never” (always use the default regular endpoint) and “auto” (auto-switch to the default mTLS endpoint if client certificate is present; this is the default value).
- The API endpoint is determined in the following order: (1) if client options.api endpoint if provided, use the provided one. (2) if GOOGLE API USE CLIENT CERTIFICATE environment variable is “always”, use the default mTLS endpoint; if the environment variable is “never”, use the default API endpoint; otherwise if client cert source exists, use the default mTLS endpoint, otherwise use the default API endpoint.
- The request for [google.datastore.admin.v1.DatastoreAdmin.CreateIndex][google.datastore.admin.v1.DatastoreAdmin.CreateIndex]. retry ( google.api core.retry.Retry ) – Designation of what errors, if any, should be retried. timeout ( float ) – The timeout for this request. metadata ( Sequence Tuple [ str , Union [ str , [ bytes ] ] ] ) – Key/value pairs which should be sent along with the request as metadata.
- The request for [google.datastore.admin.v1.DatastoreAdmin.DeleteIndex][google.datastore.admin.v1.DatastoreAdmin.DeleteIndex]. retry ( google.api core.retry.Retry ) – Designation of what errors, if any, should be retried. timeout ( float ) – The timeout for this request. metadata ( Sequence Tuple [ str , Union [ str , [ bytes ] ] ] ) – Key/value pairs which should be sent along with the request as metadata.

### Fast and Reliable Ranking in Google Datastore \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/articles/fast-and-reliable-ranking-in-datastore](https://docs.cloud.google.com/datastore/docs/articles/fast-and-reliable-ranking-in-datastore)
- Source ID: `site-iam-reference`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- If you ever took a computer science course, you may remember that tree algorithms , such as binary trees, red-black trees, or B-Trees, can perform at O(log n) time complexity for finding an element.
- This alternative approach periodically obtains the count of all the scores, computes the rank of selected scores, and provides those data points for use in computing ranks for particular players.
- For example, if you want to have a real-time dashboard that shows the top 100 keywords typed into a social networking stream, these algorithms would help.
- Both SetScore and FindRank can finish their jobs within hundreds of milliseconds using the N-ary tree algorithm that works at O(log n) time complexity.

