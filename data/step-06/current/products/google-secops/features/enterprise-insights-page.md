---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.829Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Enterprise Insights page"
feature_slug: "enterprise-insights-page"
latest_feature_date: "2025-01-23"
deprecation_date: "2025-01-23"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/deprecations"
  - "https://docs.cloud.google.com/chronicle/docs/detection/migrate-cbn-alerts"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
keywords:
  - "enterprise"
  - "insights"
  - "page"
  - "will"
  - "no"
  - "longer"
  - "available"
  - "deprecated"
---

# Enterprise Insights page

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

The Enterprise Insights page will no longer be available; deprecated on 2025-01-23.

## Extended Definition

The Enterprise Insights page will no longer be available; deprecated on 2025-01-23.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- [https://docs.cloud.google.com/chronicle/docs/detection/migrate-cbn-alerts](https://docs.cloud.google.com/chronicle/docs/detection/migrate-cbn-alerts)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)

## Supporting Pages

### "Feature deprecations \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- Source ID: `site-docs-reference-2`
- Final score: 197
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google Security Operations CBN alerts July 22, 2024 July 22, 2025 The Enterprise Insights page and the CBN alerts will no longer be available after July 2025.
- Google SecOps ingestion stats table in BigQuery April 18, 2024 May 15, 2024 The ingestion stats table in BigQuery has been deprecated and will no longer be updated after May 15, 2024.
- Mute an IoC January 18, 2026 January 18, 2026 The Mute an IoC feature is deprecated, and the IOC details page no longer displays the Mute indicator.
- Enterprise Plus Tier customers will retain access until a replacement is available.

### "Migrate CBN alerts to YARA-L detection rule alerts \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/migrate-cbn-alerts](https://docs.cloud.google.com/chronicle/docs/detection/migrate-cbn-alerts)
- Source ID: `site-api-reference`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Migrate CBN alerts to YARA-L detection rule alerts Caution: The Enterprise Insights page and CBN alerts are deprecated.
- Migrate Windows Defender antivirus alerts that were previously displayed in Enterprise Insights as CBN alerts The following example shows how you can migrate Windows Defender antivirus alerts that were previously displayed in Enterprise Insights as CBN alerts.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Migrate CBN alerts to the YARA-L detection engine To migrate CBN alerts, you can ensure that your prior CBN alerts are available as detection rule alerts using the following options.

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- You can also configure feeds for other available log types directly from this page.
- You can select from the following feed source types: Amazon Data Firehose Amazon S3 (Deprecated) Amazon S3 (V2) Amazon SQS (Deprecated) Amazon SQS (V2) Azure Blob Storage (Deprecated) Azure Blob Storage (V2) Google Cloud Pub/Sub Cloud Storage (Deprecated) Cloud Storage (V2) Cloud Storage Event Driven Third party API Webhook Important: When using Amazon S3 (Deprecated), Amazon SQS (Deprecated), Azure Blob Storage (Deprecated), and Google Cloud Cloud Storage (Deprecated) feeds, make sure that you have a valid directory path.
- Cloud Storage Pub/Sub Access Identity : serviceAccount: service- {unique project id} @gs-project-accounts.iam.gserviceaccount.com Service : pubsub.googleapis.com Operations : All ( ) Resources : All ( ) STS Pub/Sub Identity : serviceAccount: project- {unique project id} @storage-transfer-service.iam.gserviceaccount.com Service : pubsub.googleapis.com Operations : All ( ) Resources : All ( ) To obtain the unique-project-id, do the following: On the Feeds page, click Create Feed .
- Impact of changing your linked Cloud Project on data feeds If you are updating the Google Cloud project associated with your Google SecOps instance, all feeds ingesting data using the following connectors will stop, and must be re-created manually: AMAZON S3 V2 AMAZON SQS V2 GOOGLE CLOUD STORAGE V2 AZURE BLOBSTORE V2 GOOGLE CLOUD STORAGE EVENT DRIVEN For all other feeds that are not utilizing these connectors, ingestion continues without any interruption.

