---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.158Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner managed autoscaling by total CPU utilization"
feature_slug: "spanner-managed-autoscaling-by-total-cpu-utilization"
latest_feature_date: "2026-02-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/autoscaling-overview"
  - "https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview"
  - "https://docs.cloud.google.com/spanner/docs/cmek"
keywords:
  - "autoscaling"
  - "total"
  - "utilization"
  - "automatically"
  - "managed"
---

# Spanner managed autoscaling by total CPU utilization

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner managed autoscaling can automatically add or remove compute capacity when an instance's total CPU utilization exceeds or falls below a configured target.

## Extended Definition

Spanner managed autoscaling can automatically add or remove compute capacity when an instance's total CPU utilization exceeds or falls below a configured target.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/autoscaling-overview](https://docs.cloud.google.com/spanner/docs/autoscaling-overview)
- [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview)
- [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)

## Supporting Pages

### Autoscaling overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/autoscaling-overview](https://docs.cloud.google.com/spanner/docs/autoscaling-overview)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- What's next Learn more about Managed autoscaler for Spanner Learn how to create an instance with the managed autoscaler enabled Learn how to modify an instance to add autoscaling or change autoscaling settings Learn how to change an instance from using autoscaling to manual scaling Learn more about the Autoscaler tool for Spanner Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Performance: Autoscaling lets Spanner automatically add compute capacity to an instance when a workload changes or there is an increase in data storage requirements.
- With managed autoscaling, you don't write an application to do these tasks, because the Spanner service handles them for you.
- Configure autoscaling on your instance so that compute capacity automatically scales up or down to meet workload levels.

### Autoscaler tool overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview)
- Source ID: `site-docs-root`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- To help you to balance cost control with performance needs, the Autoscaler tool monitors your instances and automatically adds or removes nodes or processing units to help ensure that they stay within the following parameters: The recommended maximums for CPU utilization .
- Once the batch workload has completed and utilization returns to normal levels, depending on your configuration, either linear or stepwise scaling is applied to scale the instance down automatically.
- The Autoscaler tool uses the ratio of the observed utilization over the utilization threshold to calculate whether to add or subtract nodes or processing units from the current total number.
- Autoscaling Spanner deployments enables your infrastructure to automatically adapt and scale to meet load requirements with little to no intervention.

### "Customer-managed encryption keys (CMEK) overview \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Spanner is able to access the key on your behalf after you grant the Cloud KMS CryptoKey Encrypter/Decrypter ( roles/cloudkms.cryptoKeyEncrypterDecrypter ) role to a Google-managed Spanner service account .
- Spanner's data access APIs , such as those that are used to manage sessions and execute transactions on data, are exactly the same for both CMEK and Google-owned and Google-managed encryption keys.
- Home Documentation Databases Spanner Guides Send feedback Customer-managed encryption keys (CMEK) overview Stay organized with collections Save and categorize content based on your preferences.
- Create alert for disabling a subset of CMEK You can use the Spanner CMEK Keys ( /instance/replica/cmek/total keys ) metric to trigger an alert if a subset of CMEK are disabled or destroyed.

