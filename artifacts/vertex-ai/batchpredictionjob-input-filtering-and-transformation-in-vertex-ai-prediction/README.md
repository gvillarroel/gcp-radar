# BatchPredictionJob input filtering and transformation in Vertex AI Prediction

Product: Vertex AI
Feature slug: `batchpredictionjob-input-filtering-and-transformation-in-vertex-ai-prediction`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Vertex AI Prediction supports simple filtering and transformation of batch input data directly in BatchPredictionJob requests without custom prediction container code.

## Lifecycle

- Latest feature date: 2022-11-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component), [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/configuring-explanations-feature-based](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/configuring-explanations-feature-based), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint))
- auth (evidence: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component), [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/configuring-explanations-feature-based](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/configuring-explanations-feature-based), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint))
- authorization (evidence: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component), [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/configuring-explanations-feature-based](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/configuring-explanations-feature-based), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint))
- iam (evidence: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component), [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/configuring-explanations-feature-based](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/configuring-explanations-feature-based), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint))
- token (evidence: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component), [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/configuring-explanations-feature-based](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/configuring-explanations-feature-based), [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint))

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/configuring-explanations-feature-based](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/configuring-explanations-feature-based)
- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/batchprediction-component)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)
