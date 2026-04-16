---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:53.260Z"
product_name: "Memorystore for Valkey"
product_slug: "memorystore-for-valkey"
feature_name: "organization policy constraints for CMEK"
feature_slug: "organization-policy-constraints-for-cmek"
latest_feature_date: "2025-12-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/valkey/about-cmek"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/audit-logging"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/networking"
  - "https://docs.cloud.google.com/memorystore/docs/valkey/create-instances"
keywords:
  - "organization"
  - "policy"
  - "constraints"
  - "for"
  - "cmek"
  - "memorystore"
  - "valkey"
  - "supports"
---

# organization policy constraints for CMEK

Product: Memorystore for Valkey
Coverage: MEDIUM

## Step 02 Summary

Memorystore for Valkey supports organization policy constraints that enforce CMEK protection and limit which Cloud KMS keys can be used.

## Extended Definition

Memorystore for Valkey supports organization policy constraints that enforce CMEK protection and limit which Cloud KMS keys can be used.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/valkey/about-cmek](https://docs.cloud.google.com/memorystore/docs/valkey/about-cmek)
- [https://docs.cloud.google.com/memorystore/docs/valkey/audit-logging](https://docs.cloud.google.com/memorystore/docs/valkey/audit-logging)
- [https://docs.cloud.google.com/memorystore/docs/valkey/networking](https://docs.cloud.google.com/memorystore/docs/valkey/networking)
- [https://docs.cloud.google.com/memorystore/docs/valkey/create-instances](https://docs.cloud.google.com/memorystore/docs/valkey/create-instances)

## Supporting Pages

### "About customer-managed encryption keys (CMEK) \_|\_ Memorystore for Valkey\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/about-cmek](https://docs.cloud.google.com/memorystore/docs/valkey/about-cmek)
- Source ID: `site-iam-reference`
- Final score: 337
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- About CMEK organization policy constraints Memorystore for Valkey supports organization policy constraints for CMEK.
- If the Memorystore for Valkey API is in the Deny policy list of services for this constraint, then you can't create non-CMEK-protected instances. constraints/gcp.restrictCmekCryptoKeyProjects : use this constraint to limit which Cloud KMS keys you can use for CMEK protection.
- You can configure the following organization policy constraints: constraints/gcp.restrictNonCmekServices : use this constraint to enforce CMEK protection for your instances.
- About service accounts When creating an instance with CMEK, you must grant the cloudkms.cryptoKeyEncrypterDecrypter role to the Memorystore for Valkey service account that has the following format: service- PROJECT NUMBER @gcp-sa-memorystore.iam.gserviceaccount.com Granting this permission allows the service account to request key access from Cloud KMS.

### "Monitor access using audit logs \_|\_ Memorystore for Valkey \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/audit-logging](https://docs.cloud.google.com/memorystore/docs/valkey/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 211
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following are the audit log names, including variables for the resource identifiers: projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Factivity projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fdata access projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fsystem event projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fpolicy folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Factivity folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Fdata access folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Fsystem event folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Fpolicy billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Factivity billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Fdata access billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Fsystem event billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Fpolicy organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Factivity organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Fdata access organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Fsystem event organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Fpolicy Note: The part of the log name following /logs/ must be URL-encoded.
- Audited operations The following table summarizes which API operations correspond to each audit log type in Memorystore for Valkey: Audit logs category Memorystore for Valkey operations Admin Activity Instance operations: CreateInstance DeleteInstance UpdateInstance Token-Based Authentication Operations: AddTokenAuthUser DeleteTokenAuthUser AddAuthToken DeleteAuthToken Data Access (ADMIN READ) Instance operations: GetInstance ListInstances Token-Based Authentication Operations: ListTokenAuthUsers GetTokenAuthUser ListAuthTokens GetAuthToken Audit log format Audit log entries include the following objects: The log entry itself, which is an object of type LogEntry .
- Available audit logs The following types of audit logs are available for Memorystore for Valkey: Admin Activity audit logs Includes "admin write" operations that write metadata or configuration information.
- Home Documentation Databases Memorystore Memorystore for Valkey Guides Send feedback Monitor access using audit logs Stay organized with collections Save and categorize content based on your preferences.

### Networking \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/networking](https://docs.cloud.google.com/memorystore/docs/valkey/networking)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The page also describes the following information about networking: Networking setup guidance Supported networking architectures Frequently asked questions Note: Memorystore for Valkey also supports networking for multiple VPCs.
- Communicate networking requirements If you're a Valkey Admin, then ask your Network Admin if a service connection policy exists for the region, network, and gcp-memorystore service class where you want to create your instance .
- Role 2: Network Admin Your goal is to find out if a service connection policy is created for the network and if it's located in the region where the Valkey Admin wants to deploy a Memorystore for Valkey instance.
- Shared VPC In addition to standard Virtual Private Cloud (VPC) networks , Memorystore for Valkey supports Shared VPC networks.

### Create instances \_|\_ Memorystore for Valkey \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/valkey/create-instances](https://docs.cloud.google.com/memorystore/docs/valkey/create-instances)
- Source ID: `site-docs-root`
- Final score: 203
- Re-rank relevance: N/A

Evidence snippets:
- Enable the Memorystore for Valkey API Memorystore for Valkey Enable the Network Connectivity API Network Connectivity API Enable the Service Consumer Management API Service Consumer Management API Other prerequisites You must have one of these IAM roles in the Google Cloud project you're using: roles/memorystore.admin (the Memorystore Admin predefined IAM role) roles/owner (the Owner basic IAM role) roles/editor (the Editor basic IAM role) Set up networking Read the Networking page to determine if you need to set up a service connection policy.
- Cloud KMS key : you want to manage the encryption of your data by using customer-managed encryption keys (CMEKs) in Cloud Key Management Service (Cloud KMS) with CMEK-integrated services, such as Memorystore for Valkey.
- Cloud KMS key : you want to manage the encryption of your data by using customer-managed encryption keys (CMEKs) in Cloud Key Management Service (Cloud KMS) with CMEK-integrated services, such as Memorystore for Valkey.
- Click Create instance . gcloud To create a single-zone instance, run the create command: gcloud memorystore instances create INSTANCE \ --location= REGION ID \ --endpoints='[{"connections": [{"pscAutoConnection": {"network": "projects/ PROJECT ID /global/networks/ NETWORK ID ", "projectId": " PROJECT ID "}}]}]' \ --replica-count= REPLICA COUNT \ --node-type= NODE TYPE \ --engine-version= ENGINE VERSION \ --shard-count= SHARD COUNT \ --zone-distribution-config-mode= ZONE DISTRIBUTION CONFIG MODE \ --zone-distribution-config= ZONE \ --mode= MODE Replace the following: INSTANCE is the ID of the Memorystore for Valkey instance you're creating.

