---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T01:24:42.837Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Apigee SemanticCacheLookup policy"
feature_slug: "apigee-semanticcachelookup-policy"
latest_feature_date: "2025-05-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies"
keywords:
  - "LLM semantic lookup cache"
  - "semantic cache lookup policy"
  - "semantic cache lookup"
  - "Semantic Cache Lookup"
  - "SCL policy"
  - "SemanticCacheLookup policy"
  - "SemanticCacheLookup"
  - "public preview policy"
---

# Apigee SemanticCacheLookup policy

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

The SemanticCacheLookup policy is available in public preview for semantic lookup-based response reuse in Apigee proxies.

## Extended Definition

The Apigee SemanticCacheLookup policy is attached in the API proxy request flow to support semantic caching by extracting the user prompt and converting it into a numerical representation using the Text embeddings API for lookup-based response reuse. In the documented setup, it is commonly used alongside SemanticCachePopulate (on the response flow), and default behavior can be used by removing the <UserPromptSource> element. The provided source material does not explicitly confirm public-preview status or a launch date, so that part is not verified from these excerpts.

## Evidence Summary

The cited Apigee tutorial page provides direct usage and configuration details for SemanticCacheLookup within request/response flows and its interaction with SemanticCachePopulate.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)

## Supporting Pages

### "Get started with semantic caching policies \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- Source ID: `site-docs-reference`
- Final score: 56
- Re-rank relevance: STRONG
- Re-rank rationale: This documentation explains semantic caching behavior for Apigee API proxies, including policy-based lookup/reuse flow, making it directly relevant to the lookup policy feature.

Evidence snippets:
- When the proxy receives a request, the SemanticCacheLookup policy extracts the user prompt from the request and converts the prompt into a numerical representation using the Text embeddings API.
- Edit the policies: SemanticCacheLookup policy: Remove the <UserPromptSource> element to use the default value.
- SemanticCacheLookup and SemanticCachePopulate policies containing default values are already attached to the proxy request and response flows.
- The SemanticCacheLookup and SemanticCachePopulate policies attach to the request and response flows, respectively, of an Apigee API proxy.

