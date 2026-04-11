---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T01:24:42.837Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Apigee SemanticCachePopulate policy"
feature_slug: "apigee-semanticcachepopulate-policy"
latest_feature_date: "2025-05-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies"
  - "https://cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies"
keywords:
  - "semantic cache populate"
  - "Semantic Cache Populate"
  - "semantic similarity cache"
  - "LLM response reuse"
  - "populate policy"
  - "SCP policy"
  - "SemanticCachePopulate policy"
  - "SemanticCachePopulate"
---

# Apigee SemanticCachePopulate policy

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

The SemanticCachePopulate policy is available in public preview for storing and reusing LLM responses based on semantic similarity.

## Extended Definition

SemanticCachePopulate is an Apigee semantic caching policy that works with SemanticCacheLookup to reuse responses based on semantic similarity in API proxy traffic. The policy is part of the proxy response flow (paired with SemanticCacheLookup in the request flow), and it exposes `<TTLInSeconds>` to control cache entry expiry, with a documented default of 60 seconds.

## Evidence Summary

The cited documentation page explains semantic caching usage (intelligent response reuse based on semantic similarity) and provides direct configuration details for SemanticCachePopulate, including default flow attachment and TTL behavior.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- [https://cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)

## Supporting Pages

### "Get started with semantic caching policies \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- Source ID: `site-docs-reference`
- Final score: 62
- Re-rank relevance: STRONG
- Re-rank rationale: The page is dedicated to getting started with semantic caching policies in Apigee and describes how to configure and use them for response reuse, which directly covers the populate policy use case.

Evidence snippets:
- SemanticCachePopulate policy: Set the <TTLInSeconds> element to specify the number of seconds until the cache expires, in seconds.
- For more information on using TTL in the SemanticCachePopulate policy, see <TTLInSeconds> .
- SemanticCacheLookup and SemanticCachePopulate policies containing default values are already attached to the proxy request and response flows.
- The SemanticCacheLookup and SemanticCachePopulate policies attach to the request and response flows, respectively, of an Apigee API proxy.

