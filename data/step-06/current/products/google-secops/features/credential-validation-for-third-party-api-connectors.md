---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.669Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Credential validation for third-party API connectors"
feature_slug: "credential-validation-for-third-party-api-connectors"
latest_feature_date: "2026-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview"
keywords:
  - "credential"
  - "validation"
  - "third"
  - "party"
  - "connectors"
  - "secops"
  - "automatically"
  - "validates"
---

# Credential validation for third-party API connectors

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Google SecOps automatically validates credentials when you create feeds with third-party API connectors.

## Extended Definition

Google SecOps automatically validates credentials when you create feeds with third-party API connectors.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview](https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview)

## Supporting Pages

### "Google Unified Security \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- Source ID: `site-docs-reference-2`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Further Resources to get started: Model Armor Documentation AI Protection Overview Blog Post Security Command Center Documentation Sensitive Data Protection Documentation Continuous Security Validation: Stop Reacting, Start Preventing with Google SecOps Security teams in SOCs are constantly overwhelmed trying to keep up with the ever-changing threat landscape.
- Cloud Asset Inventory Collection : Once the various connectors between Google SecOps and Security Command Center are established, asset inventory information about multi-cloud environments regularly flows into the Google SecOps Entity Graph.
- Model Armor is model-agnostic and supports a broad range of models across various clouds, including Google's models (like Gemini), open-source models (like Llama), and third-party proprietary models (like OpenAI and Anthropic Claude).
- See Curated Detections Examples CDIR : An analyst receives a high priority CDIR SCC Enhanced Privilege Escalation alert (one of many driven by Cloud Threat Curated Detections ) that gets automatically mapped to a Google SecOps case.

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- InProgress : Google SecOps attempts to pull data from the configured third party.
- You can select from the following feed source types: Amazon Data Firehose Amazon S3 (Deprecated) Amazon S3 (V2) Amazon SQS (Deprecated) Amazon SQS (V2) Azure Blob Storage (Deprecated) Azure Blob Storage (V2) Google Cloud Pub/Sub Cloud Storage (Deprecated) Cloud Storage (V2) Cloud Storage Event Driven Third party API Webhook Important: When using Amazon S3 (Deprecated), Amazon SQS (Deprecated), Azure Blob Storage (Deprecated), and Google Cloud Cloud Storage (Deprecated) feeds, make sure that you have a valid directory path.
- Impact of changing your linked Cloud Project on data feeds If you are updating the Google Cloud project associated with your Google SecOps instance, all feeds ingesting data using the following connectors will stop, and must be re-created manually: AMAZON S3 V2 AMAZON SQS V2 GOOGLE CLOUD STORAGE V2 AZURE BLOBSTORE V2 GOOGLE CLOUD STORAGE EVENT DRIVEN For all other feeds that are not utilizing these connectors, ingestion continues without any interruption.
- Existing Data : Any data that was already transferred to Google SecOps before the migration will be ingested automatically; no data will be lost.

### "Feed management overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview](https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview)
- Source ID: `site-docs-reference`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- As part of its security design, Google SecOps stores user credentials (for example, credentials that you provide so that a Google SecOps feed can ingest log data from a third-party API) in Secret Manager .
- You can use Google SecOps data feeds to ingest log data into your Google SecOps instance from the following sources: Cloud Storage services that are supported by Google SecOps, such as Google Cloud Storage and Amazon S3 Third-party data sources that are supported by Google SecOps and accessed through API, such as Microsoft 365 Files accessible directly using HTTP(S) requests Sources that support HTTPS push ingestion, such as webhooks, Pub/Sub, and Amazon Data Firehose.
- Google SecOps supports the following source types: Feed source type Description Third-party API Ingest data from a third-party API.
- Use the API feed source type for third-party APIs supported by Google SecOps.

