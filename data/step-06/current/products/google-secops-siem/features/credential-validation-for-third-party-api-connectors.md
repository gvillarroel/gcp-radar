---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.488Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
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
  - "now"
  - "validate"
  - "credentials"
---

# Credential validation for third-party API connectors

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Third-party API connectors now validate credentials automatically when you create a feed.

## Extended Definition

Third-party API connectors now validate credentials automatically when you create a feed.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview](https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview)

## Supporting Pages

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference-required-1`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- You can select from the following feed source types: Amazon Data Firehose Amazon S3 (Deprecated) Amazon S3 (V2) Amazon SQS (Deprecated) Amazon SQS (V2) Azure Blob Storage (Deprecated) Azure Blob Storage (V2) Google Cloud Pub/Sub Cloud Storage (Deprecated) Cloud Storage (V2) Cloud Storage Event Driven Third party API Webhook Important: When using Amazon S3 (Deprecated), Amazon SQS (Deprecated), Azure Blob Storage (Deprecated), and Google Cloud Cloud Storage (Deprecated) feeds, make sure that you have a valid directory path.
- Create an API key for the Amazon Data Firehose feed To create an API key for the Amazon Data Firehose feed, do the following: Go to the Google Cloud console Credentials page.
- IP allowlisting Enable allowlisting and add the Google IP ranges for all log types that ingest data from third-party APIs.
- LOGIN FAILED A connection to the source was established, but credentials were incorrect or missing.

### "Google Unified Security \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- Source ID: `site-api-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- Model Armor is model-agnostic and supports a broad range of models across various clouds, including Google's models (like Gemini), open-source models (like Llama), and third-party proprietary models (like OpenAI and Anthropic Claude).
- In addition, the cascading of third-party security controls and complex group policy or IAM permissions have created environments ripe for misconfiguration.
- Continuous Emerging Threat Validation automates the conversion of intelligence reports into executable procedures to validate your real word response.
- The analyst uses this context to trigger a SOAR playbook to isolate the machine and reset user credentials.

### "Feed management overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview](https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview)
- Source ID: `site-docs-reference-required-1`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- As part of its security design, Google SecOps stores user credentials (for example, credentials that you provide so that a Google SecOps feed can ingest log data from a third-party API) in Secret Manager .
- You can use Google SecOps data feeds to ingest log data into your Google SecOps instance from the following sources: Cloud Storage services that are supported by Google SecOps, such as Google Cloud Storage and Amazon S3 Third-party data sources that are supported by Google SecOps and accessed through API, such as Microsoft 365 Files accessible directly using HTTP(S) requests Sources that support HTTPS push ingestion, such as webhooks, Pub/Sub, and Amazon Data Firehose.
- Note: The log types listed in third-party endpoints in the Feed UI are not listed in any other Cloud Storage options like AWS S3, AWS SQS, Google Cloud Storage, and Azure Blob Store.
- Google SecOps supports the following source types: Feed source type Description Third-party API Ingest data from a third-party API.

