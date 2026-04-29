# Vertex AI custom job image build and submission via gcloud

Product: Vertex AI
Feature slug: `vertex-ai-custom-job-image-build-and-submission-via-gcloud`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The `gcloud beta ai custom-jobs create` command can now build a Docker image from local training code, push it to Container Registry, and create a CustomJob resource.

## Lifecycle

- Latest feature date: 2021-07-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- constraint

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/image-classification](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/image-classification)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/serving](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/serving)
