# Cloud Build SLSA provenance for standalone Maven and Python artifacts

Product: Cloud Build
Feature slug: `cloud-build-slsa-provenance-for-standalone-maven-and-python-artifacts`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Build can generate SLSA build provenance metadata for standalone Maven and Python packages via new config file fields.

## Lifecycle

- Latest feature date: 2023-04-04
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- auth
- key
- private

## Official Evidence

- [https://docs.cloud.google.com/build/docs/building/build-containerize-python](https://docs.cloud.google.com/build/docs/building/build-containerize-python)
- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types)
- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts)
