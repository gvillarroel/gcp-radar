---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:13.842Z"
product_name: "Dataflow"
product_slug: "dataflow"
feature_name: "Customer-managed encryption keys"
feature_slug: "customer-managed-encryption-keys"
latest_feature_date: "2020-02-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys"
  - "https://docs.cloud.google.com/dataflow/docs/resources/shared-responsibility"
  - "https://docs.cloud.google.com/dataflow/docs/guides/data-sampling"
keywords:
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
  - "dataflow"
  - "supports"
  - "through"
  - "key"
---

# Customer-managed encryption keys

Product: Dataflow
Coverage: LOW

## Step 02 Summary

Dataflow supports customer-managed encryption keys through Cloud Key Management Service; Dataflow supports customer-managed encryption keys through Cloud Key Management Service.

## Extended Definition

Dataflow supports customer-managed encryption keys through Cloud Key Management Service; Dataflow supports customer-managed encryption keys through Cloud Key Management Service.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys](https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys)
- [https://docs.cloud.google.com/dataflow/docs/resources/shared-responsibility](https://docs.cloud.google.com/dataflow/docs/resources/shared-responsibility)
- [https://docs.cloud.google.com/dataflow/docs/guides/data-sampling](https://docs.cloud.google.com/dataflow/docs/guides/data-sampling)

## Supporting Pages

### "Use customer-managed encryption keys \_|\_ Cloud Dataflow \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys](https://docs.cloud.google.com/dataflow/docs/guides/customer-managed-encryption-keys)
- Source ID: `site-docs-reference-2`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics Cloud Dataflow Guides Send feedback Use customer-managed encryption keys Stay organized with collections Save and categorize content based on your preferences.
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Dataflow.
- For Encryption type: "Google-Managed key" For Encryption type: "Customer-Managed key" CLI Run the describe command using the gcloud CLI: gcloud dataflow jobs describe JOB ID Search for the line that contains serviceKmsKeyName .
- For more information about your encryption options, see Customer-managed encryption keys (CMEK) .

### "Use data sampling to observe pipeline data \_|\_ Cloud Dataflow \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataflow/docs/guides/data-sampling](https://docs.cloud.google.com/dataflow/docs/guides/data-sampling)
- Source ID: `site-docs-reference-2`
- Final score: 40
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In particular, consider the following additional security measures: Use a customer-managed encryption key (CMEK) to encrypt the Cloud Storage bucket.
- What's next Develop and test Dataflow pipelines Use the Dataflow monitoring interface Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- When running a Dataflow template, use the additional-experiments flag to disable exception sampling: --additional-experiments=disable always on exception sampling Security considerations Dataflow writes the sampled data to a Cloud Storage bucket that you create and manage.
- When running a Dataflow template, use the additional-experiments flag to enable data sampling: --additional-experiments=enable data sampling When periodic sampling is enabled, Dataflow collects samples from each PCollection in the job graph.

### Dataflow shared responsibility \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataflow/docs/resources/shared-responsibility](https://docs.cloud.google.com/dataflow/docs/resources/shared-responsibility)
- Source ID: `site-docs-reference-required-4`
- Final score: 40
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Learn more about Customer-managed encryption keys , networks and VPC Service Controls , and permissions best practices .
- Customer's responsibilities Use and update your environment to the latest versions of Dataflow containers and VM images : Dataflow provides prebuilt containers and VM images to simplify the use of its services.
- Home Documentation Data analytics Cloud Dataflow Resources Send feedback Dataflow shared responsibility Stay organized with collections Save and categorize content based on your preferences.
- Secure applications : You are responsible for securing your own applications running on Dataflow, including implementing secure coding practices and regularly testing for vulnerabilities.

