# VPC Service Controls for Vertex AI

Product: Vertex AI
Feature slug: `vpc-service-controls-for-vertex-ai`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Vertex AI now supports integration with VPC Service Controls to help isolate and secure access to the service.

## Lifecycle

- Latest feature date: 2021-07-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials))
- armor (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials))
- auth (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials))
- iam (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials))
- identity (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials))
- key (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials))
- logging (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials))
- policy (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials))
- private (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials))
- security (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials))
- threat (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features), [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance), [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials))

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials)
- [https://docs.cloud.google.com/vertex-ai/docs/general/features](https://docs.cloud.google.com/vertex-ai/docs/general/features)
- [https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance](https://docs.cloud.google.com/vertex-ai/docs/general/vertexai-compliance)
