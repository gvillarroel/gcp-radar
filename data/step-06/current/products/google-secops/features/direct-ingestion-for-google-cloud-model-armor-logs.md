---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.706Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Direct ingestion for Google Cloud Model Armor logs"
feature_slug: "direct-ingestion-for-google-cloud-model-armor-logs"
latest_feature_date: "2026-01-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/reference/ingestion-api"
  - "https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
keywords:
  - "direct"
  - "ingestion"
  - "model"
  - "armor"
  - "logs"
  - "can"
  - "now"
  - "ingested"
---

# Direct ingestion for Google Cloud Model Armor logs

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Google Cloud Model Armor logs can now be ingested directly into Google SecOps through an export filter.

## Extended Definition

Google Cloud Model Armor logs can now be ingested directly into Google SecOps through an export filter.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/reference/ingestion-api](https://docs.cloud.google.com/chronicle/docs/reference/ingestion-api)
- [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)

## Supporting Pages

### Ingestion API \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/ingestion-api](https://docs.cloud.google.com/chronicle/docs/reference/ingestion-api)
- Source ID: `site-docs-reference-2`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Ingestion supports: UDM events Unstructured logs Log types retrieval You can forward your data to Google SecOps using either of the following types of Ingestion endpoints: Unified Data Model (UDM) event Unstructured log If you have formatted your log data using Google SecOps UDM, you can forward UDM events to your Google SecOps account using the UDM API endpoint.
- Ingestion API Supported in: Google secops SIEM This document explains how to use Backstory Ingestion to forward logs directly to your Google Security Operations instance, eliminating the need for additional hardware or software (for example, forwarders) in your environment.
- Managed Security Service Providers (MSSPs) and Technology Partners can develop systems to call Ingestion directly and forward logs to Google SecOps.
- This is especially important for logs ingested using the Ingestion API, Forwarder and Bindplane agents.

### "Google Unified Security \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- Source ID: `site-docs-reference-2`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- In order to enable the full complement of CDIR features, certain logs need to be ingested into Google SecOps, some directly from Google Cloud, and for multi-cloud capability, from AWS and Azure.
- See Install playbooks Ingest the Google Cloud logs into Google SecOps using direct ingestion: See Ingest Google Cloud logs Set up the Google Cloud Export Filter.
- Further Resources to get started: Model Armor Documentation AI Protection Overview Blog Post Security Command Center Documentation Sensitive Data Protection Documentation Continuous Security Validation: Stop Reacting, Start Preventing with Google SecOps Security teams in SOCs are constantly overwhelmed trying to keep up with the ever-changing threat landscape.
- SIEM Log Searching and Investigation : During a CDIR investigation, or on an ad-hoc basis, analysts can use either natural language syntax, Yara-L syntax, or raw log searching to surface information in various logs ingested into Google SecOps related to cloud infrastructure and services.

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- The following table outlines the different file sizes that Google SecOps feeds transformation supports: Operation Input type Recommended size Expected duration Max size Data Modeling CSV 10 GB Data Modeling CSV 30 min 10 GB Data Modeling CSV TBD TBD 2 GB Data Modeling XML / JSON 2 GB Data Modeling XLS / XLSX 1 min 50 MB Merge Files Any Varies on number of files 100 GB Decompress Files Non-ZIP Varies on number of files 10 GB (uncompressed) Decompress Files ZIP - Varies on number of files 4 GB (uncompressed) Log line limits and delimiters When ingesting text-based logs (JSON, CSV, or Syslog), ensure your data adheres to these specific ingestion limits: Maximum Line Size : A single log line cannot exceed 4MB .
- You can select from the following feed source types: Amazon Data Firehose Amazon S3 (Deprecated) Amazon S3 (V2) Amazon SQS (Deprecated) Amazon SQS (V2) Azure Blob Storage (Deprecated) Azure Blob Storage (V2) Google Cloud Pub/Sub Cloud Storage (Deprecated) Cloud Storage (V2) Cloud Storage Event Driven Third party API Webhook Important: When using Amazon S3 (Deprecated), Amazon SQS (Deprecated), Azure Blob Storage (Deprecated), and Google Cloud Cloud Storage (Deprecated) feeds, make sure that you have a valid directory path.
- Impact of changing your linked Cloud Project on data feeds If you are updating the Google Cloud project associated with your Google SecOps instance, all feeds ingesting data using the following connectors will stop, and must be re-created manually: AMAZON S3 V2 AMAZON SQS V2 GOOGLE CLOUD STORAGE V2 AZURE BLOBSTORE V2 GOOGLE CLOUD STORAGE EVENT DRIVEN For all other feeds that are not utilizing these connectors, ingestion continues without any interruption.
- Ingress rules The following Cloud Storage methods must be allowed in the ingress rule: google.storage.objects.list : Required for a single file feed. google.storage.objects.get : Required for feeds that require directory or subdirectory access. google.storage.objects.delete : Required for feeds that require deletion of the source file.

