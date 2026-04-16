---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:53.260Z"
product_name: "Memorystore for Valkey"
product_slug: "memorystore-for-valkey"
feature_name: "backup management"
feature_slug: "backup-management"
latest_feature_date: "2026-02-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/valkey/create-instances"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/about-cmek"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/backups"
keywords:
  - "backup"
  - "management"
  - "you"
  - "can"
  - "manage"
  - "memorystore"
  - "for"
  - "valkey"
---

# backup management

Product: Memorystore for Valkey
Coverage: MEDIUM

## Step 02 Summary

You can manage Memorystore for Valkey backups in the Google Cloud console.

## Extended Definition

You can manage Memorystore for Valkey backups in the Google Cloud console.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/valkey/create-instances](https://docs.cloud.google.com/memorystore/docs/valkey/create-instances)
- [https://docs.cloud.google.com/memorystore/docs/valkey/about-cmek](https://docs.cloud.google.com/memorystore/docs/valkey/about-cmek)
- [https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices](https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices)
- [https://docs.cloud.google.com/memorystore/docs/valkey/backups](https://docs.cloud.google.com/memorystore/docs/valkey/backups)

## Supporting Pages

### Create instances \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/create-instances](https://docs.cloud.google.com/memorystore/docs/valkey/create-instances)
- Source ID: `site-docs-root`
- Final score: 274
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable the Memorystore for Valkey API Memorystore for Valkey Enable the Network Connectivity API Network Connectivity API Enable the Service Consumer Management API Service Consumer Management API Other prerequisites You must have one of these IAM roles in the Google Cloud project you're using: roles/memorystore.admin (the Memorystore Admin predefined IAM role) roles/owner (the Owner basic IAM role) roles/editor (the Editor basic IAM role) Set up networking Read the Networking page to determine if you need to set up a service connection policy.
- Cloud KMS key : you want to manage the encryption of your data by using customer-managed encryption keys (CMEKs) in Cloud Key Management Service (Cloud KMS) with CMEK-integrated services, such as Memorystore for Valkey.
- Cloud KMS key : you want to manage the encryption of your data by using customer-managed encryption keys (CMEKs) in Cloud Key Management Service (Cloud KMS) with CMEK-integrated services, such as Memorystore for Valkey.
- Note: If you select this checkbox, then Memorystore for Valkey selects the Enable In-Transit Encryption (TLS) checkbox automatically and the Certificate authority management section is displayed.

### "About customer-managed encryption keys (CMEK) \_|\_ Memorystore for Valkey\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/about-cmek](https://docs.cloud.google.com/memorystore/docs/valkey/about-cmek)
- Source ID: `site-iam-reference`
- Final score: 272
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Memorystore for Valkey.
- If the Memorystore for Valkey API is in the Deny policy list of services for this constraint, then you can't create non-CMEK-protected instances. constraints/gcp.restrictCmekCryptoKeyProjects : use this constraint to limit which Cloud KMS keys you can use for CMEK protection.
- Home Documentation Databases Memorystore Memorystore for Valkey Guides Send feedback About customer-managed encryption keys (CMEK) Stay organized with collections Save and categorize content based on your preferences.
- Google-managed encryption versus customer-managed encryption The CMEK feature lets you use your own cryptographic keys for data at rest in Memorystore for Valkey.

### Best practices for Memorystore for Valkey \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices](https://docs.cloud.google.com/memorystore/docs/valkey/general-best-practices)
- Source ID: `site-docs-root`
- Final score: 263
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Memory management best practices This section describes strategies for managing instance memory so that Memorystore for Valkey works efficiently for your application.
- RDB persistence and adding replicas For best results of backing up your instance with RDB snapshots or adding replicas to your instance, use the following best practices: Memory management RDB snapshots use a process fork and 'copy-on-write' mechanism to take a snapshot of node data.
- Home Documentation Databases Memorystore Memorystore for Valkey Guides Send feedback Best practices for Memorystore for Valkey Stay organized with collections Save and categorize content based on your preferences.
- Monitor memory usage for an instance To monitor the memory usage for a Memorystore for Valkey instance, we recommend that you view the /instance/memory/maximum utilization metric.

### About backups \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/backups](https://docs.cloud.google.com/memorystore/docs/valkey/backups)
- Source ID: `site-iam-reference`
- Final score: 259
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can also restore backups from Memorystore for Valkey instances.
- Home Documentation Databases Memorystore Memorystore for Valkey Guides Send feedback About backups Stay organized with collections Save and categorize content based on your preferences.
- If you delete an instance, then Memorystore for Valkey doesn't delete the corresponding backup collection automatically.
- If a disaster occurs, then you can restore your data to a new Memorystore for Valkey instance.

