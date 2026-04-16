---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.504Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Mute an IoC"
feature_slug: "mute-an-ioc"
latest_feature_date: "2026-02-03"
deprecation_date: "2026-02-03"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/deprecations"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/detection/ati-view-ioc-page"
keywords:
  - "mute"
  - "ioc"
  - "capability"
  - "was"
  - "removed"
  - "details"
  - "page"
  - "deprecated"
---

# Mute an IoC

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

The Mute an IoC capability was removed from the IoC details page; deprecated on 2026-02-03.

## Extended Definition

The Mute an IoC capability was removed from the IoC details page; deprecated on 2026-02-03.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/detection/ati-view-ioc-page](https://docs.cloud.google.com/chronicle/docs/detection/ati-view-ioc-page)

## Supporting Pages

### "Feature deprecations \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- Source ID: `site-api-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Mute an IoC January 18, 2026 January 18, 2026 The Mute an IoC feature is deprecated, and the IOC details page no longer displays the Mute indicator.
- Feature Deprecated date Shutdown date Details v1 Cloud Storage Connectors April 15, 2026 March 15, 2027 Google SecOps is deprecating the v1 connector framework for GOOGLE CLOUD STORAGE , AMAZON S3 , AMAZON SQS , and AZURE BLOBSTORE .
- NETSKOPE ALERT log type October 15, 2025 November 30, 2025 As of October 15, 2025, the Netskope Alerts v1 connector (for the NETSKOPE ALERT log type) has been deprecated and will be removed on November 30, 2025.
- SOAR IAM Roles February 23, 2026 August 23, 2026 The chronicle.soarAnalyst , chronicle.soarViewer , and chronicle.soarEngineer roles in Cloud IAM are deprecated and will be removed.

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference-required-1`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Troubleshoot failed feeds On the Feeds page, you can view details such as source type, log type, feed ID, and status of the existing feeds, as follows: Hold the pointer over an existing feed and click more vert in the right column.
- You can select from the following feed source types: Amazon Data Firehose Amazon S3 (Deprecated) Amazon S3 (V2) Amazon SQS (Deprecated) Amazon SQS (V2) Azure Blob Storage (Deprecated) Azure Blob Storage (V2) Google Cloud Pub/Sub Cloud Storage (Deprecated) Cloud Storage (V2) Cloud Storage Event Driven Third party API Webhook Important: When using Amazon S3 (Deprecated), Amazon SQS (Deprecated), Azure Blob Storage (Deprecated), and Google Cloud Cloud Storage (Deprecated) feeds, make sure that you have a valid directory path.
- Cloud Storage Pub/Sub Access Identity : serviceAccount: service- {unique project id} @gs-project-accounts.iam.gserviceaccount.com Service : pubsub.googleapis.com Operations : All ( ) Resources : All ( ) STS Pub/Sub Identity : serviceAccount: project- {unique project id} @storage-transfer-service.iam.gserviceaccount.com Service : pubsub.googleapis.com Operations : All ( ) Resources : All ( ) To obtain the unique-project-id, do the following: On the Feeds page, click Create Feed .
- Monitor the feed status You can monitor the status of the feed on the initial Feeds page, where feeds can have the following statuses: Active : Feed is configured and ready to ingest data into your Google SecOps account.

### "View IOCs using Applied Threat Intelligence \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/ati-view-ioc-page](https://docs.cloud.google.com/chronicle/docs/detection/ati-view-ioc-page)
- Source ID: `site-api-reference`
- Final score: 79
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For a selected indicator, on the IOC details page, you can do the following: View event prioritization View associations Event viewer On the Events tab, on a selected indicator, you can view how an event is prioritized and the details for an event.
- View the IOCs View data Filter IOCs View IOC details View IOCs The IOC matches page displays all the IOCs and their details, such as type, priority, status, categories, assets, campaigns, sources, IOC ingest time, first seen, and last seen.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- View IOC details You can click an IOC to view details such as priority, type, source, IC-Score, and category.

