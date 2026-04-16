---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.686Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Feed Management"
feature_slug: "feed-management"
latest_feature_date: "2022-08-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview"
  - "https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs"
keywords:
  - "feed"
  - "management"
  - "lets"
  - "chronicle"
  - "users"
  - "configure"
  - "manage"
  - "feeds"
---

# Feed Management

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Lets Chronicle users configure and manage data feeds without assistance from support personnel.

## Extended Definition

Lets Chronicle users configure and manage data feeds without assistance from support personnel.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview](https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview)
- [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs)

## Supporting Pages

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference-required-1`
- Final score: 300
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Manage feeds After you configure your data feeds, use the management tools to monitor ingestion health, modify existing parameters, and manage the feed lifecycle.
- Use the Feed Management UI Supported in: Google secops SIEM This document explains how to create, troubleshoot, and manage feeds within the Feed Management UI, including instructions for modifying, enabling, and deleting them.
- When finished, go to the Feed Management page to view a detailed summary of all configured log types.
- Monitor the feed status You can monitor the status of the feed on the initial Feeds page, where feeds can have the following statuses: Active : Feed is configured and ready to ingest data into your Google SecOps account.

### "Feed management overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview](https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview)
- Source ID: `site-docs-reference-required-1`
- Final score: 254
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can create and manage feeds using the feed management UI or the feed management API.
- What's next Learn how to create and manage feeds using the feed management UI .
- Learn how to create and manage feeds using the Feed management API .
- Feed management overview Supported in: Google secops SIEM This page provides an overview of Google SecOps feed management.

### "Ingest Google Cloud data \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs)
- Source ID: `site-api-reference`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For details about how to configure Cloud Storage for Google SecOps, see Feed Management: Cloud Storage .
- Before you begin Before you can ingest Google Cloud data into a Google SecOps instance, you must complete the following steps: Grant the following Identity and Access Management (IAM) roles at an organizational level to access the Google SecOps section: Chronicle Service Admin ( roles/chroniclesm.admin ): IAM role for performing all activities.
- Control the rate of ingestion When the data ingestion rate for a tenant reaches a certain threshold, Google Security Operations restricts the rate of ingestion for new data feeds to prevent a source with a high ingestion rate from affecting the ingestion rate of another data source.
- Configure ingestion for a Google managed project If Google Cloud owns the project, do the following to configure direct ingestion from your Google Cloud organization into your Google SecOps instance: Go to the Google SecOps > Overview > Ingestion tab in the Google Cloud console.

