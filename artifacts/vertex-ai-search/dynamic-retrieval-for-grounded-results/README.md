# Dynamic retrieval for grounded results

Product: Vertex AI Search
Feature slug: `dynamic-retrieval-for-grounded-results`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Dynamic retrieval for grounded results in Vertex AI Agent Builder allows selectively disabling grounding with Google Search so supported models can answer from their own knowledge.

## Lifecycle

- Latest feature date: 2024-10-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search), [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging))
- allow (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search), [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging))
- audit (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search), [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging))
- auth (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search), [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging))
- authorization (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search), [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging))
- iam (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search), [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging))
- identity (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search), [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging))
- logging (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search), [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging))
- permission (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search), [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging))
- policy (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search), [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging))
- secret (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search), [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging))
- token (evidence: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer), [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search), [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging))

## Official Evidence

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging](https://docs.cloud.google.com/generative-ai-app-builder/docs/audit-logging)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
