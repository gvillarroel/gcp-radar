---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:42.594Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Customer-managed encryption keys"
feature_slug: "customer-managed-encryption-keys"
latest_feature_date: "2025-04-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataplex/docs/cmek"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1"
  - "https://docs.cloud.google.com/dataplex/docs/release-notes"
keywords:
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
  - "dataplex"
  - "supports"
  - "for"
  - "encrypting"
---

# Customer-managed encryption keys

Product: Dataplex
Coverage: LOW

## Step 02 Summary

Dataplex supports customer-managed encryption keys for encrypting Dataplex data.

## Extended Definition

Dataplex supports customer-managed encryption keys for encrypting Dataplex data.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataplex/docs/cmek](https://docs.cloud.google.com/dataplex/docs/cmek)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)
- [https://docs.cloud.google.com/dataplex/docs/release-notes](https://docs.cloud.google.com/dataplex/docs/release-notes)

## Supporting Pages

### "Enable customer-managed encryption keys \_|\_ Knowledge Catalog \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataplex/docs/cmek](https://docs.cloud.google.com/dataplex/docs/cmek)
- Source ID: `site-docs-root-2`
- Final score: 246
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This document describes how to encrypt Knowledge Catalog (formerly Dataplex Universal Catalog) data with customer-managed encryption keys (CMEK).
- For more information about CMEK in general, including when and why to enable it, see Customer-managed encryption keys (CMEKs) .
- For more information about your encryption options, see Customer-managed encryption keys (CMEK) .
- Supported features Knowledge Catalog supports CMEK encryption for the following features: Auto data quality Data profiling Data discovery Data insights Knowledge Catalog Business Glossary Knowledge Catalog search Data Lineage doesn't store customer core content or sensitive data, and therefore doesn't require CMEK encryption.

### "Package com.google.cloud.dataplex.v1 (1.86.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)
- Source ID: `site-java-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Encryption Config A Resource designed to manage encryption configurations for customers to support Customer Managed Encryption Keys (CMEK). com. google. cloud. dataplex. v1.
- Builder A Resource designed to manage encryption configurations for customers to support Customer Managed Encryption Keys (CMEK). com. google. cloud. dataplex. v1.
- Cmek Service Client Service Description: Dataplex Universal Catalog Customer Managed Encryption Keys (CMEK) Service This class provides the ability to make remote calls to the backing service through method calls that map to API methods.
- Cmek Service Grpc Dataplex Universal Catalog Customer Managed Encryption Keys (CMEK) Service com. google. cloud. dataplex. v1.

### Knowledge Catalog release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/release-notes](https://docs.cloud.google.com/dataplex/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- April 14, 2025 Feature Encrypting Dataplex data with customer-managed encryption keys (CMEK) is now available.
- May 28, 2024 Feature Dataplex automatic data quality supports the following capabilities: Email notifications to alert people about the status and results of a data quality job Data quality scores that indicate the percentage of rules that passed API support for rule recommendations based on data profiling scans For more information, see Use auto data quality and Auto data quality overview .
- April 25, 2024 Feature Dataplex automatic data quality supports the following capabilities: The SQL assertion rule type for custom SQL rules lets you check for an invalid state of a dataset.
- August 01, 2023 Feature Dataplex is available in the following regions: Los Angeles ( us-west2 ) Salt Lake City ( us-west3 ) Las Vegas ( us-west4 ) Columbus ( us-east5 ) Santiago ( southamerica-west1 ) Finland ( europe-north1 ) Warsaw ( europe-central2 ) Madrid ( europe-southwest1 ) Milan ( europe-west8 ) Paris ( europe-west9 ) Jakarta ( asia-southeast2 ) For more information, see Locations and Pricing .

