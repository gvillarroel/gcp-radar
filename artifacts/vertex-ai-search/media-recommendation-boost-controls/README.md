# Media recommendation boost controls

Product: Vertex AI Search
Feature slug: `media-recommendation-boost-controls`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Allows tuning recommendation ranking for media content by applying string and boolean schema filters with boost values from -1 to 1 to lower or raise results in API recommendation responses.

## Lifecycle

- Latest feature date: 2024-12-04
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search), [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search))
- allow (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search), [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search))
- auth (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search), [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search))
- authorization (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search), [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search))
- token (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search), [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search))

## Official Evidence

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
