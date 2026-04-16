---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.639Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Self Service Parser Management"
feature_slug: "self-service-parser-management"
latest_feature_date: "2023-07-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/deprecations"
keywords:
  - "self"
  - "parser"
  - "management"
  - "lets"
  - "customers"
  - "create"
  - "customize"
  - "parsers"
---

# Self Service Parser Management

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Self Service Parser Management lets customers create and customize parsers for log normalization.

## Extended Definition

Self Service Parser Management lets customers create and customize parsers for log normalization.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)

## Supporting Pages

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-api-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Google SecOps provides default parsers that parse and normalize raw logs from Google Cloud services to create UDM records with data required by these rule sets.
- See Exporting Security Command Center findings for more information about how Google SecOps default parsers map the data fields.
- For a list of all Google SecOps supported data sources, see Supported default parsers .
- For a list of all supported data sources, see Supported default parsers .

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference-required-1`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Use the Feed Management UI Supported in: Google secops SIEM This document explains how to create, troubleshoot, and manage feeds within the Feed Management UI, including instructions for modifying, enabling, and deleting them.
- Required actions for customers To ensure continuous data ingestion, you must manually re-create your feeds in the new environment.
- Send multiple events in a single webhook request The following code sample shows how to format a single request body with multiple, newline-separated JSON objects after the curl --location item: --header 'Content-Type: application/json' \ --header 'X-goog-api-key: API KEY' \ --header 'X-Webhook-Access-Key: SECRET' \ --data '{"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}} {"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}}' Create an HTTPS webhook feed In the Google SecOps menu, select Settings , and then click Feeds .
- Cloud Storage Pub/Sub Access Identity : serviceAccount: service- {unique project id} @gs-project-accounts.iam.gserviceaccount.com Service : pubsub.googleapis.com Operations : All ( ) Resources : All ( ) STS Pub/Sub Identity : serviceAccount: project- {unique project id} @storage-transfer-service.iam.gserviceaccount.com Service : pubsub.googleapis.com Operations : All ( ) Resources : All ( ) To obtain the unique-project-id, do the following: On the Feeds page, click Create Feed .

### "Feature deprecations \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- Source ID: `site-api-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- For existing parsers, in addition to these UDM fields, the logs fields are also mapped to key/value additional.fields UDM fields.
- For new parsers, the key/value settings in additional.fields UDM fields are used instead of the deprecated labels UDM fields.
- BigQuery data lake December 31, 2024 March 31, 2025 On December 31, 2024, the managed BigQuery data lake for export won't be accessible to Google SecOps customers except for customers in the Enterprise Plus Tier.
- Customers issuing queries against the udm events table through Cloud Console, API, or directly connecting to BQ should fully migrate queries to the new table by July 1 to avoid interruption.

