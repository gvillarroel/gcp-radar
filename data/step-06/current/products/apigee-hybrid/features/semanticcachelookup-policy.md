---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:33:10.242Z"
product_name: "Apigee hybrid"
product_slug: "apigee-hybrid"
feature_name: "SemanticCacheLookup policy"
feature_slug: "semanticcachelookup-policy"
latest_feature_date: "2025-10-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies"
keywords:
  - "cache policy response lookup"
  - "semantic similarity search"
  - "semantic cache lookup"
  - "semantic cache read"
  - "LLM cache lookup"
  - "SemanticCacheLookup policy"
  - "SCL policy"
---

# SemanticCacheLookup policy

Product: Apigee hybrid
Coverage: MEDIUM

## Step 02 Summary

Apigee Hybrid adds support for the SemanticCacheLookup policy for LLM/GenAI workloads to look up semantically similar cached responses.

## Extended Definition

SemanticCacheLookup is an Apigee policy used to perform semantic cache lookup for request prompts by extracting the user prompt from incoming traffic, converting it into a numerical representation with the Text embeddings API, and running a semantic similarity search via Vector Search. This enables matching of semantically similar prompts (instead of exact string matches) when retrieving cached responses. The policy behavior can be influenced by the optional <UserPromptSource> configuration, and removing that element applies its default value.

## Evidence Summary

The provided Apigee tutorial page documents the SemanticCacheLookup policy flow, including prompt extraction/embedding, semantic similarity lookup via Vector Search, and <UserPromptSource> configuration behavior.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)

## Supporting Pages

### "Get started with semantic caching policies \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: STRONG
- Re-rank rationale: This is a getting-started guide specifically for semantic caching policies in Apigee and Apigee hybrid, directly relevant to how a lookup policy is configured and used.

Evidence snippets:
- When the proxy receives a request, the SemanticCacheLookup policy extracts the user prompt from the request and converts the prompt into a numerical representation using the Text embeddings API.
- Edit the policies: SemanticCacheLookup policy: Remove the <UserPromptSource> element to use the default value.
- A semantic similarity search performs using Vector Search to find similar prompts.

