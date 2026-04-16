---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.621Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "AWS Identity and Access Management"
feature_slug: "aws-identity-and-access-management"
latest_feature_date: "2024-02-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview"
  - "https://docs.cloud.google.com/chronicle/docs/ingestion/default-parsers/ingest-bce"
keywords:
  - "aws"
  - "identity"
  - "access"
  - "management"
  - "chronicle"
  - "feed"
  - "supports"
  - "log"
---

# AWS Identity and Access Management

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Chronicle feed management API supports the AWS Identity and Access Management log type for creating AWS data feeds.

## Extended Definition

Chronicle feed management API supports the AWS Identity and Access Management log type for creating AWS data feeds.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview](https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview)
- [https://docs.cloud.google.com/chronicle/docs/ingestion/default-parsers/ingest-bce](https://docs.cloud.google.com/chronicle/docs/ingestion/default-parsers/ingest-bce)

## Supporting Pages

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference-required-1`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Storage Pub/Sub Access Identity : serviceAccount: service- {unique project id} @gs-project-accounts.iam.gserviceaccount.com Service : pubsub.googleapis.com Operations : All ( ) Resources : All ( ) STS Pub/Sub Identity : serviceAccount: project- {unique project id} @storage-transfer-service.iam.gserviceaccount.com Service : pubsub.googleapis.com Operations : All ( ) Resources : All ( ) To obtain the unique-project-id, do the following: On the Feeds page, click Create Feed .
- Sample egress rule "egressPolicies" : [ { "egressFrom": { "identities": [ "serviceAccount:service-{replace with project id}@gs-project-accounts.iam.gserviceaccount.com" ] } , "egressTo" : { "operations" : [ { "methodSelectors": [ { "method": " " } ] , "serviceName" : "pubsub.googleapis.com" } ] , "resources" : [ " " ] } , "title" : "GCS pubsub access" } , { "egressFrom" : { "identities" : [ "serviceAccount:project-{replace with project id}@storage-transfer-service.iam.gserviceaccount.com" ] } , "egressTo" : { "operations" : [ { "methodSelectors": [ { "method": " " } ] , "serviceName" : "pubsub.googleapis.com" } ] , "resources" : [ " " ] } , "title" : "STS pubsub" } ] Enable STS access for Amazon S3 and Azure Storage The STS is used by the following Google Cloud Storage feeds to transfer data from Amazon S3 and Azure Storage blobstores to Google SecOps: Amazon S3 (V2) Amazon SQS (V2) Azure Blob Storage (V2) STS sends data transfer requests to the Amazon S3 and Azure storage services from a set of defined STS IP address ranges.
- The following table outlines the different file sizes that Google SecOps feeds transformation supports: Operation Input type Recommended size Expected duration Max size Data Modeling CSV 10 GB Data Modeling CSV 30 min 10 GB Data Modeling CSV TBD TBD 2 GB Data Modeling XML / JSON 2 GB Data Modeling XLS / XLSX 1 min 50 MB Merge Files Any Varies on number of files 100 GB Decompress Files Non-ZIP Varies on number of files 10 GB (uncompressed) Decompress Files ZIP - Varies on number of files 4 GB (uncompressed) Log line limits and delimiters When ingesting text-based logs (JSON, CSV, or Syslog), ensure your data adheres to these specific ingestion limits: Maximum Line Size : A single log line cannot exceed 4MB .
- Send multiple events in a single webhook request The following code sample shows how to format a single request body with multiple, newline-separated JSON objects after the curl --location item: --header 'Content-Type: application/json' \ --header 'X-goog-api-key: API KEY' \ --header 'X-Webhook-Access-Key: SECRET' \ --data '{"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}} {"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}}' Create an HTTPS webhook feed In the Google SecOps menu, select Settings , and then click Feeds .

### "Feed management overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview](https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview)
- Source ID: `site-docs-reference-required-1`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use Google SecOps data feeds to ingest log data into your Google SecOps instance from the following sources: Cloud Storage services that are supported by Google SecOps, such as Google Cloud Storage and Amazon S3 Third-party data sources that are supported by Google SecOps and accessed through API, such as Microsoft 365 Files accessible directly using HTTP(S) requests Sources that support HTTPS push ingestion, such as webhooks, Pub/Sub, and Amazon Data Firehose.
- Google SecOps supports the following source types: Feed source type Description Third-party API Ingest data from a third-party API.
- Feed management overview Supported in: Google secops SIEM This page provides an overview of Google SecOps feed management.
- You can create and manage feeds using the feed management UI or the feed management API.

### "Collect Chrome Enterprise Premium Context Access Aware Data \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/ingestion/default-parsers/ingest-bce](https://docs.cloud.google.com/chronicle/docs/ingestion/default-parsers/ingest-bce)
- Source ID: `site-api-reference`
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Collect Chrome Enterprise Premium Context Access Aware Data Supported in: Google secops SIEM This document explains how you can connect your organization to Google Security Operations, enable the Identity-Aware Proxy (IAP) API, and set up feeds to ingest the following data to Google Security Operations.
- Google Cloud Logs Cloud Identity Devices Cloud Identity Device Users Before you begin Before you set up feeds to ingest Chrome Enterprise Premium data, complete the following tasks: Connect your Google Cloud organization to Google Security Operations by completing the following sections: Enable telemetry ingestion to Google Security Operations .
- The feeds include Chrome Enterprise Premium content specific to IAP and context access aware data.
- Enable the Cloud Identity API and create a service account In the Google Cloud console, select the Google Cloud project for which you want to enable the API, and then go to the APIs & Services page: Go to APIs & Services Click Enable APIs and Services .

