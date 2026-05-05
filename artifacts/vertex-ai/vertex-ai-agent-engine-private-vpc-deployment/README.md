# Vertex AI Agent Engine private VPC deployment

Product: Vertex AI
Feature slug: `vertex-ai-agent-engine-private-vpc-deployment`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Vertex AI Agent Engine now supports deploying agents in private VPC environments using a Private Service Connect interface for improved data privacy and compliance.

## Lifecycle

- Latest feature date: 2025-08-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials))
- armor (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials))
- encrypt (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials))
- iam (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials))
- identity (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials))
- key (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials))
- logging (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials))
- private (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials))
- security (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials))
- threat (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials))

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials)
- [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features)
- [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance)
