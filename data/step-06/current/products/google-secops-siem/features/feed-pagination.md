---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.499Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Feed pagination"
feature_slug: "feed-pagination"
latest_feature_date: "2026-02-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview"
  - "https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed"
keywords:
  - "feed"
  - "pagination"
  - "feeds"
  - "page"
  - "now"
  - "supports"
---

# Feed pagination

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

The Feeds page now supports pagination.

## Extended Definition

The Feeds page now supports pagination.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview](https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview)
- [https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed](https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed)

## Supporting Pages

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference-required-1`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- The following table outlines the different file sizes that Google SecOps feeds transformation supports: Operation Input type Recommended size Expected duration Max size Data Modeling CSV 10 GB Data Modeling CSV 30 min 10 GB Data Modeling CSV TBD TBD 2 GB Data Modeling XML / JSON 2 GB Data Modeling XLS / XLSX 1 min 50 MB Merge Files Any Varies on number of files 100 GB Decompress Files Non-ZIP Varies on number of files 10 GB (uncompressed) Decompress Files ZIP - Varies on number of files 4 GB (uncompressed) Log line limits and delimiters When ingesting text-based logs (JSON, CSV, or Syslog), ensure your data adheres to these specific ingestion limits: Maximum Line Size : A single log line cannot exceed 4MB .
- Cloud Storage Pub/Sub Access Identity : serviceAccount: service- {unique project id} @gs-project-accounts.iam.gserviceaccount.com Service : pubsub.googleapis.com Operations : All ( ) Resources : All ( ) STS Pub/Sub Identity : serviceAccount: project- {unique project id} @storage-transfer-service.iam.gserviceaccount.com Service : pubsub.googleapis.com Operations : All ( ) Resources : All ( ) To obtain the unique-project-id, do the following: On the Feeds page, click Create Feed .
- Troubleshoot failed feeds On the Feeds page, you can view details such as source type, log type, feed ID, and status of the existing feeds, as follows: Hold the pointer over an existing feed and click more vert in the right column.
- Monitor the feed status You can monitor the status of the feed on the initial Feeds page, where feeds can have the following statuses: Active : Feed is configured and ready to ingest data into your Google SecOps account.

### "Feed management overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview](https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview)
- Source ID: `site-docs-reference-required-1`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- You can use Google SecOps data feeds to ingest log data into your Google SecOps instance from the following sources: Cloud Storage services that are supported by Google SecOps, such as Google Cloud Storage and Amazon S3 Third-party data sources that are supported by Google SecOps and accessed through API, such as Microsoft 365 Files accessible directly using HTTP(S) requests Sources that support HTTPS push ingestion, such as webhooks, Pub/Sub, and Amazon Data Firehose.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Google SecOps supports the following source types: Feed source type Description Third-party API Ingest data from a third-party API.
- API reference documentation : To view a list of supported log types for third-party API feeds, see Configuration by log type .

### "Create an Azure Event Hub feed \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed](https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed)
- Source ID: `site-docs-reference-required-1`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Configure the Azure feed To configure the Azure feed in Google SecOps, do the following: In the Google SecOps menu, select SIEM Settings , and then click Feeds .
- You can create up to 10 Azure Event Hub feeds, which includes both active and inactive feeds.
- As a result, Google SecOps does not populate the LAST SUCCEEDED ON column for these feeds.

