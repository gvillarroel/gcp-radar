# Vertex AI custom jobs local-run CLI command

Product: Vertex AI
Feature slug: `vertex-ai-custom-jobs-local-run-cli-command`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Vertex AI now supports running containerized training code locally with the `gcloud beta ai custom-jobs local-run` command.

## Lifecycle

- Latest feature date: 2021-07-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks), [https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account](https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account), [https://docs.cloud.google.com/vertex-ai/docs/general/cmek](https://docs.cloud.google.com/vertex-ai/docs/general/cmek))
- encrypt (evidence: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks), [https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account](https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account), [https://docs.cloud.google.com/vertex-ai/docs/general/cmek](https://docs.cloud.google.com/vertex-ai/docs/general/cmek))
- iam (evidence: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks), [https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account](https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account), [https://docs.cloud.google.com/vertex-ai/docs/general/cmek](https://docs.cloud.google.com/vertex-ai/docs/general/cmek))
- key (evidence: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks), [https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account](https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account), [https://docs.cloud.google.com/vertex-ai/docs/general/cmek](https://docs.cloud.google.com/vertex-ai/docs/general/cmek))
- kms (evidence: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks), [https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account](https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account), [https://docs.cloud.google.com/vertex-ai/docs/general/cmek](https://docs.cloud.google.com/vertex-ai/docs/general/cmek))
- logging (evidence: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks), [https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account](https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account), [https://docs.cloud.google.com/vertex-ai/docs/general/cmek](https://docs.cloud.google.com/vertex-ai/docs/general/cmek))
- permission (evidence: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks), [https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account](https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account), [https://docs.cloud.google.com/vertex-ai/docs/general/cmek](https://docs.cloud.google.com/vertex-ai/docs/general/cmek))
- policy (evidence: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks), [https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account](https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account), [https://docs.cloud.google.com/vertex-ai/docs/general/cmek](https://docs.cloud.google.com/vertex-ai/docs/general/cmek))
- private (evidence: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks), [https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account](https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account), [https://docs.cloud.google.com/vertex-ai/docs/general/cmek](https://docs.cloud.google.com/vertex-ai/docs/general/cmek))
- role (evidence: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks), [https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account](https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account), [https://docs.cloud.google.com/vertex-ai/docs/general/cmek](https://docs.cloud.google.com/vertex-ai/docs/general/cmek))
- token (evidence: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks), [https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account](https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account), [https://docs.cloud.google.com/vertex-ai/docs/general/cmek](https://docs.cloud.google.com/vertex-ai/docs/general/cmek))

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/general/cmek](https://docs.cloud.google.com/vertex-ai/docs/general/cmek)
- [https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account](https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
