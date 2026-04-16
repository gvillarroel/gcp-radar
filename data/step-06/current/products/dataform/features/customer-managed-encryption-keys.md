---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:45.739Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Customer-managed encryption keys"
feature_slug: "customer-managed-encryption-keys"
latest_feature_date: "2024-08-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/cmek"
  - "https://docs.cloud.google.com/dataform/docs/repositories"
  - "https://docs.cloud.google.com/dataform/docs/create-repository"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform.v1"
keywords:
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
  - "let"
  - "dataform"
  - "protect"
  - "repositories"
---

# Customer-managed encryption keys

Product: Dataform
Coverage: MEDIUM

## Step 02 Summary

Customer-managed encryption keys let Dataform protect repositories with user-managed encryption keys; Customer-managed encryption keys let Dataform protect repositories with user-managed encryption keys.

## Extended Definition

Customer-managed encryption keys let Dataform protect repositories with user-managed encryption keys; Customer-managed encryption keys let Dataform protect repositories with user-managed encryption keys.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/cmek](https://docs.cloud.google.com/dataform/docs/cmek)
- [https://docs.cloud.google.com/dataform/docs/repositories](https://docs.cloud.google.com/dataform/docs/repositories)
- [https://docs.cloud.google.com/dataform/docs/create-repository](https://docs.cloud.google.com/dataform/docs/create-repository)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform.v1)

## Supporting Pages

### Use customer-managed encryption keys \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/cmek](https://docs.cloud.google.com/dataform/docs/cmek)
- Source ID: `site-docs-root-2`
- Final score: 354
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This integration lets you specify the following encryption compliance requirements for Dataform repositories in your organization: Require CMEKs for all new Dataform repositories Restrict Cloud KMS keys for a Dataform project Considerations when applying organization policies Before applying any CMEK organization policies, you should be aware of the following.
- CMEK encryption of repository data When you apply CMEK encryption to a Dataform repository, all Dataform-managed customer data in that repository is encrypted at rest using the CMEK protection key set for the repository.
- Home Documentation Data analytics Dataform Guides Send feedback Use customer-managed encryption keys Stay organized with collections Save and categorize content based on your preferences.
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Dataform.

### Create a repository \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/repositories](https://docs.cloud.google.com/dataform/docs/repositories)
- Source ID: `site-docs-root-2`
- Final score: 268
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about using customer-managed encryption keys (CMEK) in Dataform, see Use customer-managed encryption keys .
- You can use the default encryption , a unique customer-managed Cloud KMS encryption key, or a default Dataform CMEK key.
- In the Encryption section, select the Customer-managed encryption keys (CMEK) option.
- Use customer-managed encryption keys .

### Create a repository \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/create-repository](https://docs.cloud.google.com/dataform/docs/create-repository)
- Source ID: `site-docs-root`
- Final score: 258
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about using customer-managed encryption keys (CMEK) in Dataform, see Use customer-managed encryption keys .
- You can use the default encryption , a unique customer-managed Cloud KMS encryption key, or a default Dataform CMEK key.
- In the Encryption section, select the Customer-managed encryption keys (CMEK) option.
- Use customer-managed encryption keys .

### "Package com.google.cloud.dataform.v1 (0.87.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform.v1)
- Source ID: `site-java-reference`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Builder Builder for projects/{project}/locations/{location}/repositories/{repository}/workflowInvocations/{workflow invocation}. com. google. cloud. dataform. v1.
- Builder Builder for projects/{project}/locations/{location}/repositories/{repository}/compilationResults/{compilation result}. com. google. cloud. dataform. v1.
- Builder Builder for projects/{project}/locations/{location}/repositories/{repository}/workflowConfigs/{workflow config}. com. google. cloud. dataform. v1.
- Builder Builder for projects/{project}/locations/{location}/repositories/{repository}/releaseConfigs/{release config}. com. google. cloud. dataform. v1.

