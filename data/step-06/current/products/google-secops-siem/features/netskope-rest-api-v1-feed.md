---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.527Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Netskope REST API v1 feed"
feature_slug: "netskope-rest-api-v1-feed"
latest_feature_date: "2025-10-15"
deprecation_date: "2025-10-15"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/deprecations"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview"
keywords:
  - "netskope"
  - "rest"
  - "v1"
  - "feed"
  - "secops"
  - "deprecated"
  - "2025"
  - "10"
---

# Netskope REST API v1 feed

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

The Netskope REST API v1 feed for Google SecOps is deprecated; deprecated on 2025-10-15.

## Extended Definition

The Netskope REST API v1 feed for Google SecOps is deprecated; deprecated on 2025-10-15.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview](https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview)

## Supporting Pages

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference-required-1`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Google Cloud Storage feed setup example Note: If you use the Domain Restricted Sharing organization policy in Google Cloud, make sure you add the Google SecOps customer ID C02h8e9nw to the allowlist.
- Sample egress rule "egressPolicies" : [ { "egressFrom": { "identities": [ "serviceAccount:service-{replace with project id}@gs-project-accounts.iam.gserviceaccount.com" ] } , "egressTo" : { "operations" : [ { "methodSelectors": [ { "method": " " } ] , "serviceName" : "pubsub.googleapis.com" } ] , "resources" : [ " " ] } , "title" : "GCS pubsub access" } , { "egressFrom" : { "identities" : [ "serviceAccount:project-{replace with project id}@storage-transfer-service.iam.gserviceaccount.com" ] } , "egressTo" : { "operations" : [ { "methodSelectors": [ { "method": " " } ] , "serviceName" : "pubsub.googleapis.com" } ] , "resources" : [ " " ] } , "title" : "STS pubsub" } ] Enable STS access for Amazon S3 and Azure Storage The STS is used by the following Google Cloud Storage feeds to transfer data from Amazon S3 and Azure Storage blobstores to Google SecOps: Amazon S3 (V2) Amazon SQS (V2) Azure Blob Storage (V2) STS sends data transfer requests to the Amazon S3 and Azure storage services from a set of defined STS IP address ranges.
- The following table outlines the different file sizes that Google SecOps feeds transformation supports: Operation Input type Recommended size Expected duration Max size Data Modeling CSV 10 GB Data Modeling CSV 30 min 10 GB Data Modeling CSV TBD TBD 2 GB Data Modeling XML / JSON 2 GB Data Modeling XLS / XLSX 1 min 50 MB Merge Files Any Varies on number of files 100 GB Decompress Files Non-ZIP Varies on number of files 10 GB (uncompressed) Decompress Files ZIP - Varies on number of files 4 GB (uncompressed) Log line limits and delimiters When ingesting text-based logs (JSON, CSV, or Syslog), ensure your data adheres to these specific ingestion limits: Maximum Line Size : A single log line cannot exceed 4MB .
- Send multiple events in a single webhook request The following code sample shows how to format a single request body with multiple, newline-separated JSON objects after the curl --location item: --header 'Content-Type: application/json' \ --header 'X-goog-api-key: API KEY' \ --header 'X-Webhook-Access-Key: SECRET' \ --data '{"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}} {"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}}' Create an HTTPS webhook feed In the Google SecOps menu, select Settings , and then click Feeds .

### "Feature deprecations \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- Source ID: `site-api-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- NETSKOPE ALERT log type October 15, 2025 November 30, 2025 As of October 15, 2025, the Netskope Alerts v1 connector (for the NETSKOPE ALERT log type) has been deprecated and will be removed on November 30, 2025.
- UDM alert metadata fields July 22, 2024 June 22, 2025 The Google SecOps alert metadata fields for UDM idm.is significant and idm.is alert have been deprecated.
- Feature Deprecated date Shutdown date Details v1 Cloud Storage Connectors April 15, 2026 March 15, 2027 Google SecOps is deprecating the v1 connector framework for GOOGLE CLOUD STORAGE , AMAZON S3 , AMAZON SQS , and AZURE BLOBSTORE .
- BigQuery data lake December 31, 2024 March 31, 2025 On December 31, 2024, the managed BigQuery data lake for export won't be accessible to Google SecOps customers except for customers in the Enterprise Plus Tier.

### "Feed management overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview](https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview)
- Source ID: `site-docs-reference-required-1`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- You can use Google SecOps data feeds to ingest log data into your Google SecOps instance from the following sources: Cloud Storage services that are supported by Google SecOps, such as Google Cloud Storage and Amazon S3 Third-party data sources that are supported by Google SecOps and accessed through API, such as Microsoft 365 Files accessible directly using HTTP(S) requests Sources that support HTTPS push ingestion, such as webhooks, Pub/Sub, and Amazon Data Firehose.
- As part of its security design, Google SecOps stores user credentials (for example, credentials that you provide so that a Google SecOps feed can ingest log data from a third-party API) in Secret Manager .
- There are several ways to view a list of supported log types: Google SecOps UI : For information about how to view the list of supported log types for each source type, see Add a feed .
- Google SecOps supports the following source types: Feed source type Description Third-party API Ingest data from a third-party API.

