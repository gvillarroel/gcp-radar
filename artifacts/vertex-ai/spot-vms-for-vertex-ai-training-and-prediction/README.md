# Spot VMs for Vertex AI training and prediction

Product: Vertex AI
Feature slug: `spot-vms-for-vertex-ai-training-and-prediction`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Vertex AI introduced GA support for running training and prediction jobs on Spot VMs to lower compute costs; Vertex AI added Spot VM support for training and prediction jobs, offering discounted Compute Engine capacity with the possibility of preemption.

## Lifecycle

- Latest feature date: 2025-03-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- audit
- auth
- logging

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial](https://docs.cloud.google.com/vertex-ai/docs/pipelines/continuous-training-tutorial)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/training](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/training)
