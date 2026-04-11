---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.558Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Log Bucket Copy to Cloud Storage"
feature_slug: "log-bucket-copy-to-cloud-storage"
latest_feature_date: "2021-06-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/central-log-storage"
  - "https://docs.cloud.google.com/logging/docs/buckets"
keywords:
  - "log"
  - "bucket"
  - "copy"
  - "to"
  - "storage"
  - "logging"
  - "can"
  - "entries"
---

# Log Bucket Copy to Cloud Storage

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Cloud Logging can copy log entries from a Logging bucket to a Cloud Storage bucket.

## Extended Definition

Cloud Logging can copy log entries from a Logging bucket to a Cloud Storage bucket.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/central-log-storage](https://docs.cloud.google.com/logging/docs/central-log-storage)
- [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 242
- Re-rank relevance: N/A

Evidence snippets:
- To get an exact count of the number of log entries received in a time interval, use Observability Analytics or copy logs to a Cloud Storage bucket.
- To get an exact count of the number of log entries received in a time interval, use Observability Analytics or copy logs to a Cloud Storage bucket.
- You can copy logs in bulk to a Cloud Storage bucket.
- You can copy logs to a Cloud Storage bucket.

### "Aggregate and store your organization's logs \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/central-log-storage](https://docs.cloud.google.com/logging/docs/central-log-storage)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, the following command extends the retention of log entries stored in the log bucket to 365 days: gcloud logging buckets update BUCKET NAME \ --location= LOCATION --project= PROJECT ID \ --retention-days= 365 For more information about options, see gcloud logging buckets update .
- View log entries in the Logs Explorer page To view the log entries in your log bucket, do the following: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- If you want to set the retention period of the log entries in your log bucket, then use the gcloud logging buckets update command.
- To create a sink that routes log entries to the log bucket you just created, run the gcloud logging sinks create command.

### Configure log buckets \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, if you want to create a bucket with the BUCKET ID my-bucket in the global region, your command would look like the following: gcloud logging buckets create my-bucket --location global --description "My first bucket" For example, to create a bucket with the BUCKET ID my-upgraded-bucket in the global location, and then upgrade the log bucket to use Observability Analytics, your command would look like the following: gcloud logging buckets create my-upgraded-bucket --location global \ --description "My first upgraded bucket" \ --enable-analytics --retention-days=45 Note: After you create your log bucket, you can't change your bucket's region.
- After Logging displays the linked dataset name on the Logs Storage page, it might take several minutes before BigQuery recognizes the dataset. gcloud To create a linked dataset for a log bucket that is upgraded to use Observability Analytics, run the gcloud logging links create command: gcloud logging links create LINK ID --bucket= BUCKET ID --location= LOCATION The LINK ID that you provide is used as the name of the BigQuery dataset, and the value of this field must be unique for your Google Cloud project.
- The bucket, including all the logs in it, is deleted after 7 days. gcloud To delete a log bucket, run the gcloud logging buckets delete command: gcloud logging buckets delete BUCKET ID --location= LOCATION You can't delete a log bucket when that bucket has a linked BigQuery dataset: To list the links associated with a log bucket, run the gcloud logging links list command.
- Update a bucket To update the properties of your bucket, such as the description or retention period, do the following: Google Cloud console To update your bucket's properties, do the following: In the Google Cloud console, go to the Logs Storage page: Go to Logs Storage If you use the search bar to find this page, then select the result whose subheading is Logging .

