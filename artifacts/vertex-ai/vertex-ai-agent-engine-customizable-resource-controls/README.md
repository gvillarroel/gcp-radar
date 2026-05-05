# Vertex AI Agent Engine customizable resource controls

Product: Vertex AI
Feature slug: `vertex-ai-agent-engine-customizable-resource-controls`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Vertex AI Agent Engine now allows customized runtime controls, including minimum and maximum application instances, container resource limits, and container concurrency settings.

## Lifecycle

- Latest feature date: 2025-08-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/ai-agent-ecosystem-overview](https://docs.cloud.google.com/vertex-ai/docs/ai-agent-ecosystem-overview))
- allow (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/ai-agent-ecosystem-overview](https://docs.cloud.google.com/vertex-ai/docs/ai-agent-ecosystem-overview))
- armor (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/ai-agent-ecosystem-overview](https://docs.cloud.google.com/vertex-ai/docs/ai-agent-ecosystem-overview))
- auth (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/ai-agent-ecosystem-overview](https://docs.cloud.google.com/vertex-ai/docs/ai-agent-ecosystem-overview))
- iam (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/ai-agent-ecosystem-overview](https://docs.cloud.google.com/vertex-ai/docs/ai-agent-ecosystem-overview))
- identity (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/ai-agent-ecosystem-overview](https://docs.cloud.google.com/vertex-ai/docs/ai-agent-ecosystem-overview))
- key (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/ai-agent-ecosystem-overview](https://docs.cloud.google.com/vertex-ai/docs/ai-agent-ecosystem-overview))
- logging (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/ai-agent-ecosystem-overview](https://docs.cloud.google.com/vertex-ai/docs/ai-agent-ecosystem-overview))
- policy (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/ai-agent-ecosystem-overview](https://docs.cloud.google.com/vertex-ai/docs/ai-agent-ecosystem-overview))
- private (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/ai-agent-ecosystem-overview](https://docs.cloud.google.com/vertex-ai/docs/ai-agent-ecosystem-overview))
- security (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/ai-agent-ecosystem-overview](https://docs.cloud.google.com/vertex-ai/docs/ai-agent-ecosystem-overview))
- threat (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/ai-agent-ecosystem-overview](https://docs.cloud.google.com/vertex-ai/docs/ai-agent-ecosystem-overview))
- token (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/ai-agent-ecosystem-overview](https://docs.cloud.google.com/vertex-ai/docs/ai-agent-ecosystem-overview))

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/ai-agent-ecosystem-overview](https://docs.cloud.google.com/vertex-ai/docs/ai-agent-ecosystem-overview)
- [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features)
- [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance)
