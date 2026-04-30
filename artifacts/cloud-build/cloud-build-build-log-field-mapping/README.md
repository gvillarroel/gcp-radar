# Cloud Build build log field mapping

Product: Cloud Build
Feature slug: `cloud-build-build-log-field-mapping`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Build now supports mapping selected build log fields to Cloud Logging entry fields when logs are sent.

## Lifecycle

- Latest feature date: 2025-01-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- key
- logging

## Official Evidence

- [https://docs.cloud.google.com/build/docs/build-config](https://docs.cloud.google.com/build/docs/build-config)
- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts)
- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Build](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Build)
