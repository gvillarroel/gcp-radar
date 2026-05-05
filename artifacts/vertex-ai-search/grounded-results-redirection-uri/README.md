# Grounded results redirection URI

Product: Vertex AI Search
Feature slug: `grounded-results-redirection-uri`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Grounded results now include a redirection URI to the publisher’s source when using Grounding with Google Search, and this link remains accessible for up to 30 days.

## Lifecycle

- Latest feature date: 2024-09-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer), [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search))
- allow (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer), [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search))
- audit (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer), [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search))
- auth (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer), [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search))
- authorization (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer), [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search))
- credential (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer), [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search))
- identity (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer), [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search))
- key (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer), [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search))
- logging (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer), [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search))
- token (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer), [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search))

## Official Evidence

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)
