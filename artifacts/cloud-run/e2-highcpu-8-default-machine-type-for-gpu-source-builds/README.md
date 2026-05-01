# e2-highcpu-8 default machine type for GPU source builds

Product: Cloud Run
Feature slug: `e2-highcpu-8-default-machine-type-for-gpu-source-builds`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Run uses Cloud Build e2-highcpu-8 by default for GPU-enabled source builds from the console or gcloud CLI; Cloud Run uses Cloud Build e2-highcpu-8 by default for GPU-enabled source builds with the gcloud beta run command.

## Lifecycle

- Latest feature date: 2025-10-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- certificate

## Official Evidence

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildsClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildsClient)
- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.builds.BuildsAsyncClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.builds.BuildsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.builds.BuildsClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.builds.BuildsClient)
