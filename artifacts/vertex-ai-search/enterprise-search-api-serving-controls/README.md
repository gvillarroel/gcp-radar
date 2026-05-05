# Enterprise Search API serving controls

Product: Vertex AI Search
Feature slug: `enterprise-search-api-serving-controls`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Enterprise Search now supports allowlisted GA serving controls (boost, filter, synonym, and redirect) through API calls to influence returned search results.

## Lifecycle

- Latest feature date: 2023-08-29
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search), [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer))
- allow (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search), [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer))
- auth (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search), [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer))
- authorization (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search), [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer))
- key (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search), [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer))
- token (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search), [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer))

## Official Evidence

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
