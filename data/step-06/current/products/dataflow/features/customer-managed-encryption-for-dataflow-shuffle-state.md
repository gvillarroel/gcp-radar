---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.846Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Customer-managed encryption for Dataflow Shuffle state"
feature_slug: "customer-managed-encryption-for-dataflow-shuffle-state"
latest_feature_date: "2019-10-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys"
  - "https://docs.cloud.google.com/dataflow/docs/guides/notebook-advanced"
  - "https://docs.cloud.google.com/dataflow/docs/guides/sql/dataflow-sql-intro"
keywords:
  - "customer"
  - "managed"
  - "encryption"
  - "dataflow"
  - "shuffle"
  - "state"
  - "can"
  - "protected"
---

# Customer-managed encryption for Dataflow Shuffle state

Product: Dataflow
Coverage: MEDIUM

## Step 02 Summary

Dataflow Shuffle state can be protected with a customer-managed encryption key.

## Extended Definition

Dataflow Shuffle state can be protected with a customer-managed encryption key.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys](https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys)
- [https://docs.cloud.google.com/dataflow/docs/guides/notebook-advanced](https://docs.cloud.google.com/dataflow/docs/guides/notebook-advanced)
- [https://docs.cloud.google.com/dataflow/docs/guides/sql/dataflow-sql-intro](https://docs.cloud.google.com/dataflow/docs/guides/sql/dataflow-sql-intro)

## Supporting Pages

### "Use customer-managed encryption keys \_|\_ Cloud Dataflow \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys](https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys)
- Source ID: `site-docs-reference-2`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Job metadata includes the following: User-supplied data, such as Job Names, Job Parameter values, and Pipeline Graph System-generated data, such as Job IDs and IP addresses of workers Encryption of pipeline state locations The following storage locations are protected with Cloud KMS keys: Persistent Disks attached to Dataflow workers and used for Persistent Disk-based shuffle and streaming state storage.
- For Encryption type: "Google-Managed key" For Encryption type: "Customer-Managed key" CLI Run the describe command using the gcloud CLI: gcloud dataflow jobs describe JOB ID Search for the line that contains serviceKmsKeyName .
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Use customer-managed encryption keys Stay organized with collections Save and categorize content based on your preferences.
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Dataflow.

### "Use Apache Beam notebook advanced features \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/notebook-advanced](https://docs.cloud.google.com/dataflow/docs/guides/notebook-advanced)
- Source ID: `site-docs-reference-2`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- All repository content is encrypted using either Google-owned and Google-managed encryption keys or customer-managed encryption keys.
- When instantiating a new pipeline that uses a project, region, and provisioning configuration that map to an existing Managed Service for Apache Spark cluster, Dataflow also reuses the cluster, though it might not use the most recently used cluster.
- When a Flink master url is specified, if it belongs to a cluster that is managed by the notebook session, Dataflow reuses the managed cluster.
- Artifact Registry uses Google-owned and Google-managed encryption keys by default and no configuration is required for this option.

### "Use Apache Beam notebook advanced features \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/sql/dataflow-sql-intro](https://docs.cloud.google.com/dataflow/docs/guides/sql/dataflow-sql-intro)
- Source ID: `site-docs-reference-2`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- All repository content is encrypted using either Google-owned and Google-managed encryption keys or customer-managed encryption keys.
- When instantiating a new pipeline that uses a project, region, and provisioning configuration that map to an existing Managed Service for Apache Spark cluster, Dataflow also reuses the cluster, though it might not use the most recently used cluster.
- When a Flink master url is specified, if it belongs to a cluster that is managed by the notebook session, Dataflow reuses the managed cluster.
- Artifact Registry uses Google-owned and Google-managed encryption keys by default and no configuration is required for this option.

