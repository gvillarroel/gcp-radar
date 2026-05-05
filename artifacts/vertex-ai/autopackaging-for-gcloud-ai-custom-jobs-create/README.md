# Autopackaging for gcloud ai custom-jobs create

Product: Vertex AI
Feature slug: `autopackaging-for-gcloud-ai-custom-jobs-create`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The autopackaging option in the `gcloud ai custom-jobs create` command enables running code from a local machine as a Vertex AI custom training job.

## Lifecycle

- Latest feature date: 2021-11-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account](https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account), [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create), [https://docs.cloud.google.com/vertex-ai/docs/general/cmek](https://docs.cloud.google.com/vertex-ai/docs/general/cmek))
- encrypt (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account](https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account), [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create), [https://docs.cloud.google.com/vertex-ai/docs/general/cmek](https://docs.cloud.google.com/vertex-ai/docs/general/cmek))
- iam (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account](https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account), [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create), [https://docs.cloud.google.com/vertex-ai/docs/general/cmek](https://docs.cloud.google.com/vertex-ai/docs/general/cmek))
- identity (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account](https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account), [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create), [https://docs.cloud.google.com/vertex-ai/docs/general/cmek](https://docs.cloud.google.com/vertex-ai/docs/general/cmek))
- key (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account](https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account), [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create), [https://docs.cloud.google.com/vertex-ai/docs/general/cmek](https://docs.cloud.google.com/vertex-ai/docs/general/cmek))
- kms (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account](https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account), [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create), [https://docs.cloud.google.com/vertex-ai/docs/general/cmek](https://docs.cloud.google.com/vertex-ai/docs/general/cmek))
- permission (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account](https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account), [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create), [https://docs.cloud.google.com/vertex-ai/docs/general/cmek](https://docs.cloud.google.com/vertex-ai/docs/general/cmek))
- policy (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account](https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account), [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create), [https://docs.cloud.google.com/vertex-ai/docs/general/cmek](https://docs.cloud.google.com/vertex-ai/docs/general/cmek))
- private (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account](https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account), [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create), [https://docs.cloud.google.com/vertex-ai/docs/general/cmek](https://docs.cloud.google.com/vertex-ai/docs/general/cmek))
- role (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account](https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account), [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create), [https://docs.cloud.google.com/vertex-ai/docs/general/cmek](https://docs.cloud.google.com/vertex-ai/docs/general/cmek))
- token (evidence: [https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account](https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account), [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create), [https://docs.cloud.google.com/vertex-ai/docs/general/cmek](https://docs.cloud.google.com/vertex-ai/docs/general/cmek))

## Official Evidence

- [https://docs.cloud.google.com/vertex-ai/docs/general/cmek](https://docs.cloud.google.com/vertex-ai/docs/general/cmek)
- [https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account](https://docs.cloud.google.com/vertex-ai/docs/general/custom-service-account)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/create)
