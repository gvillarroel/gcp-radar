---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.198Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Spanner managed autoscaler"
feature_slug: "spanner-managed-autoscaler"
latest_feature_date: "2025-02-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview"
  - "https://docs.cloud.google.com/spanner/docs/cmek"
  - "https://docs.cloud.google.com/spanner/docs/autoscaling-overview"
keywords:
  - "independent"
  - "autoscaler"
  - "managed"
  - "generally"
  - "available"
  - "supports"
---

# Spanner managed autoscaler

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner managed autoscaler is now generally available and supports independent autoscaling configuration for read-only replicas separate from read-write replicas using capacity and CPU utilization targets; Spanner managed autoscaler automatically increases or decreases instance compute capacity based on workload, storage needs, and user-defined goals.

## Extended Definition

Spanner managed autoscaler is now generally available and supports independent autoscaling configuration for read-only replicas separate from read-write replicas using capacity and CPU utilization targets; Spanner managed autoscaler automatically increases or decreases instance compute capacity based on workload, storage needs, and user-defined goals.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview)
- [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- [https://docs.cloud.google.com/spanner/docs/autoscaling-overview](https://docs.cloud.google.com/spanner/docs/autoscaling-overview)

## Supporting Pages

### Autoscaler tool overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Advanced configuration The Autoscaler tool has advanced configuration options that let you more finely control when and how your Spanner instances are managed.
- Note: This analysis doesn't include incurred charges for the Spanner instances that are managed by the Autoscaler.
- Custom thresholds The Autoscaler tool determines the number of nodes or processing units to be added or subtracted to an instance using the recommended Spanner thresholds for the following load metrics: High priority CPU 24-hour rolling average CPU Storage utilization We recommend that you use the default thresholds as described in Creating alerts for Spanner metrics .
- To help you to balance cost control with performance needs, the Autoscaler tool monitors your instances and automatically adds or removes nodes or processing units to help ensure that they stay within the following parameters: The recommended maximums for CPU utilization .

### "Customer-managed encryption keys (CMEK) overview \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- Source ID: `site-docs-root`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- If an externally-managed key is unavailable, Spanner continues to support full database operations on a best-effort basis for up to one hour.
- Spanner is able to access the key on your behalf after you grant the Cloud KMS CryptoKey Encrypter/Decrypter ( roles/cloudkms.cryptoKeyEncrypterDecrypter ) role to a Google-managed Spanner service account .
- If you're using multiple regional keys to protect a Spanner database, only those replicas that are protected by a key residing in the unavailable regional Cloud KMS are affected by the unavailability.
- Spanner's data access APIs , such as those that are used to manage sessions and execute transactions on data, are exactly the same for both CMEK and Google-owned and Google-managed encryption keys.

### Autoscaling overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/autoscaling-overview](https://docs.cloud.google.com/spanner/docs/autoscaling-overview)
- Source ID: `site-docs-root`
- Final score: 70
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- What's next Learn more about Managed autoscaler for Spanner Learn how to create an instance with the managed autoscaler enabled Learn how to modify an instance to add autoscaling or change autoscaling settings Learn how to change an instance from using autoscaling to manual scaling Learn more about the Autoscaler tool for Spanner Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Requirements on this page apply to both the managed autoscaling feature and the open source Autoscaler tool.
- With managed autoscaling, you don't write an application to do these tasks, because the Spanner service handles them for you.
- For autoscaling, you have the following options: Configure Spanner managed autoscaling .

