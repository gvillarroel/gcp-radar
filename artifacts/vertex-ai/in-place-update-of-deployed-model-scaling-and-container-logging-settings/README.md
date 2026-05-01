# In-place update of deployed model scaling and container logging settings

Product: Vertex AI
Feature slug: `in-place-update-of-deployed-model-scaling-and-container-logging-settings`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Vertex AI Prediction now allows updating certain scaling and container logging configuration settings on a DeployedModel without undeploying and redeploying it to an endpoint.

## Lifecycle

- Latest feature date: 2023-04-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- encrypt
- iam
- logging
- permission
- private

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- [https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)
