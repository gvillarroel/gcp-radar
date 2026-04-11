---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:05:29.876Z"
product_name: "Apigee Advanced API Security"
product_slug: "apigee-advanced-api-security"
feature_name: "Risk Assessment v2 SemanticCacheLookup policy support"
feature_slug: "risk-assessment-v2-semanticcachelookup-policy-support"
latest_feature_date: "2025-12-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies"
keywords:
  - "cache lookup policy"
  - "SemanticCacheLookup policy"
  - "SCL policy"
  - "SemanticCacheLookup"
  - "assessment policy"
  - "policy support"
  - "Risk Assessment v2"
---

# Risk Assessment v2 SemanticCacheLookup policy support

Product: Apigee Advanced API Security
Coverage: LOW

## Step 02 Summary

Risk Assessment v2 now supports the SemanticCacheLookup policy in assessments.

## Extended Definition

In Apigee, the SemanticCacheLookup policy is a request-flow policy that extracts the user prompt from incoming traffic and converts it into an embedding via the Text embeddings API to perform a semantic cache lookup. The policy can be used with default values and is documented as being attached to proxy request flows, while SemanticCachePopulate is attached to response flows for complementary semantic caching behavior. The provided excerpt does not directly confirm integration with Risk Assessment v2 assessments, so that specific feature linkage is only weakly supported.

## Evidence Summary

The page describes how SemanticCacheLookup works (prompt-to-embedding conversion and request-flow attachment) and how it is paired with SemanticCachePopulate, but it does not explicitly tie this to Risk Assessment v2.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)

## Supporting Pages

### "Get started with semantic caching policies \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- Source ID: `site-docs-root`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- When the proxy receives a request, the SemanticCacheLookup policy extracts the user prompt from the request and converts the prompt into a numerical representation using the Text embeddings API.
- Edit the policies: SemanticCacheLookup policy: Remove the <UserPromptSource> element to use the default value.
- SemanticCacheLookup and SemanticCachePopulate policies containing default values are already attached to the proxy request and response flows.
- The SemanticCacheLookup and SemanticCachePopulate policies attach to the request and response flows, respectively, of an Apigee API proxy.

