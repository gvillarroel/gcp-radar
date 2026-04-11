---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:33:10.242Z"
product_name: "Apigee hybrid"
product_slug: "apigee-hybrid"
feature_name: "SemanticCachePopulate policy"
feature_slug: "semanticcachepopulate-policy"
latest_feature_date: "2025-10-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies"
keywords:
  - "semantic cache populate"
  - "semantic cache write"
  - "cache store response"
  - "LLM response persistence"
  - "cache writeback policy"
  - "SemanticCachePopulate policy"
  - "SCP policy"
---

# SemanticCachePopulate policy

Product: Apigee hybrid
Coverage: MEDIUM

## Step 02 Summary

Apigee Hybrid adds support for the SemanticCachePopulate policy for LLM/GenAI workloads to store responses in the semantic cache.

## Extended Definition

The SemanticCachePopulate policy is an Apigee semantic-caching policy that exposes a <TTLInSeconds> element to define how long a cache entry remains valid in seconds. The provided evidence confirms its role in managing cache expiration behavior, but does not fully document all policy operations or workflow details.

## Evidence Summary

The cited Google Cloud tutorial page identifies the SemanticCachePopulate policy and specifies that <TTLInSeconds> controls cache expiry timing.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)

## Supporting Pages

### "Get started with semantic caching policies \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: STRONG
- Re-rank rationale: The page focuses on configuring and using semantic caching policies and therefore materially covers policy usage patterns that define how populate policy behavior is set up in Apigee hybrid.

Evidence snippets:
- SemanticCachePopulate policy: Set the <TTLInSeconds> element to specify the number of seconds until the cache expires, in seconds.
- For more information on using TTL in the SemanticCachePopulate policy, see <TTLInSeconds> .

