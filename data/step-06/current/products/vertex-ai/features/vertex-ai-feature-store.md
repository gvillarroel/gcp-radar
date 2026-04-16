---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.106Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI Feature Store"
feature_slug: "vertex-ai-feature-store"
latest_feature_date: "2023-10-04"
deprecation_date: "2026-02-17"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/overview"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores"
keywords:
  - "vertex"
  - "ai"
  - "feature"
  - "store"
  - "legacy"
  - "v1"
  - "version"
  - "managed"
---

# Vertex AI Feature Store

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Feature Store (Legacy/V1) is the legacy version of Vertex AI's managed feature store for storing and serving ML features; Vertex AI Feature Store is now available in preview and uses BigQuery as the offline store while enabling feature groups, feature views, and online serving options for low-latency and high-volume workloads; deprecated on 2026-02-17.

## Extended Definition

Vertex AI Feature Store (Legacy/V1) is the legacy version of Vertex AI's managed feature store for storing and serving ML features; Vertex AI Feature Store is now available in preview and uses BigQuery as the offline store while enabling feature groups, feature views, and online serving options for low-latency and high-volume workloads; deprecated on 2026-02-17.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/overview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/overview)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores)

## Supporting Pages

### Introduction to Vertex AI Feature Store (Legacy) \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/overview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/overview)
- Source ID: `site-docs-reference-3`
- Final score: 273
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Managed solution for online serving at scale Vertex AI Feature Store (Legacy) provides a managed solution for online feature serving (low-latency serving), which is critical for making timely online predictions.
- Vertex AI Feature Store (Legacy) is a fully managed solution, which manages and scales the underlying infrastructure such as storage and compute resources.
- The following examples describe how Vertex AI Feature Store (Legacy) can address potential sources of training-serving skew: Vertex AI Feature Store (Legacy) ensures that a feature value is imported once into a featurestore and that same value is reused for both training and serving.
- Quotas and limits Vertex AI Feature Store (Legacy) enforces quotas and limits to help you manage resources by setting your own usage limits and to protect the community of Google Cloud users by preventing unforeseen spikes in usage.

### "Control access to Vertex AI Feature Store (Legacy) resources \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy](https://docs.cloud.google.com/vertex-ai/docs/featurestore/resource-policy)
- Source ID: `site-docs-reference-3`
- Final score: 259
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can set resource-level Identity and Access Management (IAM) policies on the following Vertex AI Feature Store (Legacy) resources: Featurestore : When you set an Identity and Access Management policy on a featurestore, the policy applies to the featurestore and all entity types created in that featurestore.
- Home Documentation AI and ML Vertex AI Send feedback Control access to Vertex AI Feature Store (Legacy) resources Stay organized with collections Save and categorize content based on your preferences.
- You can control access to Vertex AI Feature Store (Legacy) resources by setting IAM policies at different levels of the resource hierarchy .
- Vertex AI Feature Store (Legacy) is deprecated .

### Manage featurestores \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores](https://docs.cloud.google.com/vertex-ai/docs/featurestore/managing-featurestores)
- Source ID: `site-docs-reference-3`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, if you set the online serving node count for your featurestore to 0 and then provision online serving nodes by setting the node count to 1 or higher, Vertex AI Feature Store (Legacy) doesn't migrate the deleted feature data to the online store.
- For guidelines and best practices to test the performance of online serving nodes, see Test the performance of online serving nodes for real-time serving in Best practices for Vertex AI Feature Store (Legacy) .
- Allocating a fixed node count If you allocate a fixed node count, Vertex AI Feature Store (Legacy) maintains a consistent number of nodes regardless of the traffic patterns.
- Online and offline storage Vertex AI Feature Store (Legacy) uses two storage methods classified as online storage and offline storage , which are priced differently.

