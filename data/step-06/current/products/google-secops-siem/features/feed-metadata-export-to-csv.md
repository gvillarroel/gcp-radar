---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.498Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Feed metadata export to CSV"
feature_slug: "feed-metadata-export-to-csv"
latest_feature_date: "2026-02-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview"
keywords:
  - "feed"
  - "metadata"
  - "export"
  - "csv"
  - "feeds"
  - "page"
  - "now"
  - "supports"
---

# Feed metadata export to CSV

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

The Feeds page now supports exporting feed metadata to CSV.

## Extended Definition

The Feeds page now supports exporting feed metadata to CSV.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview](https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview)

## Supporting Pages

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference-required-1`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table outlines the different file sizes that Google SecOps feeds transformation supports: Operation Input type Recommended size Expected duration Max size Data Modeling CSV 10 GB Data Modeling CSV 30 min 10 GB Data Modeling CSV TBD TBD 2 GB Data Modeling XML / JSON 2 GB Data Modeling XLS / XLSX 1 min 50 MB Merge Files Any Varies on number of files 100 GB Decompress Files Non-ZIP Varies on number of files 10 GB (uncompressed) Decompress Files ZIP - Varies on number of files 4 GB (uncompressed) Log line limits and delimiters When ingesting text-based logs (JSON, CSV, or Syslog), ensure your data adheres to these specific ingestion limits: Maximum Line Size : A single log line cannot exceed 4MB .
- Send multiple events in a single webhook request The following code sample shows how to format a single request body with multiple, newline-separated JSON objects after the curl --location item: --header 'Content-Type: application/json' \ --header 'X-goog-api-key: API KEY' \ --header 'X-Webhook-Access-Key: SECRET' \ --data '{"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}} {"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}}' Create an HTTPS webhook feed In the Google SecOps menu, select Settings , and then click Feeds .
- Cloud Storage Pub/Sub Access Identity : serviceAccount: service- {unique project id} @gs-project-accounts.iam.gserviceaccount.com Service : pubsub.googleapis.com Operations : All ( ) Resources : All ( ) STS Pub/Sub Identity : serviceAccount: project- {unique project id} @storage-transfer-service.iam.gserviceaccount.com Service : pubsub.googleapis.com Operations : All ( ) Resources : All ( ) To obtain the unique-project-id, do the following: On the Feeds page, click Create Feed .
- Troubleshoot failed feeds On the Feeds page, you can view details such as source type, log type, feed ID, and status of the existing feeds, as follows: Hold the pointer over an existing feed and click more vert in the right column.

### "Ingest Google Cloud data \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs)
- Source ID: `site-api-reference`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Export filter example: Include additional log types The following export filter exports access transparency logs in addition to the default logs: log id("dns.googleapis.com/dns queries") OR log id("cloudaudit.googleapis.com/activity") OR log id("cloudaudit.googleapis.com/system event") OR log id("cloudaudit.googleapis.com/access transparency") Export filter example: Include additional logs from a specific project The following export filter exports access transparency logs from a specific project, in addition to the default logs: log id("dns.googleapis.com/dns queries") OR log id("cloudaudit.googleapis.com/activity") OR log id("cloudaudit.googleapis.com/system event") OR logName = "projects/my-project-id/logs/cloudaudit.googleapis.com%2Faccess transparency" Export filter example: Include additional logs from a specific folder The following export filter exports access transparency logs from a specific folder, in addition to the default logs: log id("dns.googleapis.com/dns queries") OR log id("cloudaudit.googleapis.com/activity") OR log id("cloudaudit.googleapis.com/system event") OR logName = "folders/my-folder-id/logs/cloudaudit.googleapis.com%2Faccess transparency" Export filter example: Exclude logs from a specific project The following export filter exports the default logs from the entire Google Cloud organization with the exception of a specific project: (log id("dns.googleapis.com/dns queries") OR log id("cloudaudit.googleapis.com/activity") OR log id("cloudaudit.googleapis.com/system event")) AND (NOT logName = "^projects/my-project-id/logs/. $") Export Google Cloud asset metadata You can export your Google Cloud asset metadata from Cloud Asset Inventory to Google SecOps.
- This asset metadata is drawn from your Cloud Asset Inventory and consists of information about your assets, resources, and identities including the following: Environment Location Zone Hardware models Access control relationships between resources and identities The following types of Google Cloud asset metadata will be exported to your Google SecOps instance: GCP BIGQUERY CONTEXT GCP COMPUTE CONTEXT GCP IAM CONTEXT GCP IAM ANALYSIS GCP STORAGE CONTEXT GCP CLOUD FUNCTIONS CONTEXT GCP SQL CONTEXT GCP NETWORK CONNECTIVITY CONTEXT GCP RESOURCE MANAGER CONTEXT The following are examples of Google Cloud asset metadata: Application name— Google-iamSample/0.1 Project name— projects/my-project Note: You need to have either Security Command Center Standard or Security Command Center Premium enabled to export Google Cloud asset metadata to Google SecOps.
- Control the rate of ingestion When the data ingestion rate for a tenant reaches a certain threshold, Google Security Operations restricts the rate of ingestion for new data feeds to prevent a source with a high ingestion rate from affecting the ingestion rate of another data source.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Feed management overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview](https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview)
- Source ID: `site-docs-reference-required-1`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use Google SecOps data feeds to ingest log data into your Google SecOps instance from the following sources: Cloud Storage services that are supported by Google SecOps, such as Google Cloud Storage and Amazon S3 Third-party data sources that are supported by Google SecOps and accessed through API, such as Microsoft 365 Files accessible directly using HTTP(S) requests Sources that support HTTPS push ingestion, such as webhooks, Pub/Sub, and Amazon Data Firehose.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Google SecOps supports the following source types: Feed source type Description Third-party API Ingest data from a third-party API.
- API reference documentation : To view a list of supported log types for third-party API feeds, see Configuration by log type .

