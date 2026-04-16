---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.630Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Customer-managed encryption keys for Security Command Center"
feature_slug: "customer-managed-encryption-keys-for-security-command-center"
latest_feature_date: "2025-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/cmek"
  - "https://docs.cloud.google.com/security-command-center/docs/service-tiers"
keywords:
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
  - "security"
  - "command"
  - "center"
  - "rest"
---

# Customer-managed encryption keys for Security Command Center

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Security Command Center data at rest can be protected with customer-managed encryption keys.

## Extended Definition

Security Command Center data at rest can be protected with customer-managed encryption keys.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/cmek](https://docs.cloud.google.com/security-command-center/docs/cmek)
- [https://docs.cloud.google.com/security-command-center/docs/service-tiers](https://docs.cloud.google.com/security-command-center/docs/service-tiers)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- March 08, 2021 Change Security Health Analytics, a built-in service of Security Command Center, launched new detectors in general availability: Detects resources that are not using customer-managed encryption keys (CMEK) BUCKET CMEK DISABLED DISK CMEK DISABLED NODEPOOL BOOK CMEK DISABLED SQL CMEK DISABLED Detects vulnerabilities in Compute Engine instances DEFAULT SERVICE ACCOUNT USED SHIELDED VM DISABLED Detects publicly accessible Cloud KMS keys KMS PUBLIC KEY Detects out-of-region Compute Engine resources ORG POLICY LOCATION RESTRICTION Detects misconfiguration of SQL instances SQL CROSS DB OWNERSHIP CHAINING SQL CONTAINED DATABASE AUTHENTICATION SQL CROSS DB OWNERSHIP CHAINING SQL LOCAL INFILE SQL LOG CHECKPOINTS DISABLED SQL LOG CONNECTIONS DISABLED SQL LOG DISCONNECTIONS DISABLED SQL LOG LOCK WAITS DISABLED SQL LOG MIN DURATION STATEMENT ENABLED SQL LOG MIN ERROR STATEMENT SQL LOG TEMP FILES For more information on these and other Security Health Analytics detectors, see Vulnerabilities findings .
- August 14, 2025 Feature You can use customer-managed encryption keys (CMEKs) to protect data at rest in Security Command Center.
- The detector, available to Security Command Center Premium customers, detects BigQuery datasets that are not encrypted using customer-managed encryption keys (CMEK).
- The detector, available to Security Command Center Premium customers, identifies Pub/Sub topics that are not encrypted with customer-managed encryption keys (CMEK).

### Enable CMEK for Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/cmek](https://docs.cloud.google.com/security-command-center/docs/cmek)
- Source ID: `site-docs-reference`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Security Command Center.
- Resolve errors creating protected resources If you choose Google-owned and Google-managed encryption keys when you activate Security Command Center, and then you enforce a CMEK organization policy constraint within that organization, you won't be able to create new resources that support CMEK .
- If you plan to enable data residency, then choose the Cloud KMS location that corresponds to your Security Command Center location: Security Command Center location Cloud KMS key location eu europe sa me-central2 us us Changes to the CMEK key After you activate Security Command Center with CMEK, you can't change the Cloud KMS key or switch to a Google-owned and Google-managed encryption key.
- Standard-legacy, Standard, and Premium service tiers (requires organization-level activation ) By default, Security Command Center encrypts customer content at rest.

### Security Command Center service tiers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/service-tiers](https://docs.cloud.google.com/security-command-center/docs/service-tiers)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- By default, Security Command Center data is encrypted at rest with Google-owned and Google-managed encryption keys.
- Controls that restrict the storage and processing of Security Command Center findings, mute rules, continuous exports, and BigQuery exports to one of the data residency multi-regions that Security Command Center supports.
- Scan public web endpoints for vulnerabilities weekly, with scans configured and managed by Security Command Center.
- Use Cloud Key Management Service keys that you create to encrypt selected Security Command Center data.

