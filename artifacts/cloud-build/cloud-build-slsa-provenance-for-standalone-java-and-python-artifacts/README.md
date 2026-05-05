# Cloud Build SLSA provenance for standalone Java and Python artifacts

Product: Cloud Build
Feature slug: `cloud-build-slsa-provenance-for-standalone-java-and-python-artifacts`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Build can generate SLSA build provenance metadata for standalone Java and Python packages using new config file fields when publishing to Artifact Registry.

## Lifecycle

- Latest feature date: 2022-11-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/build/docs/building/build-containerize-python](https://docs.cloud.google.com/build/docs/building/build-containerize-python), [https://docs.cloud.google.com/build/docs/building/build-java](https://docs.cloud.google.com/build/docs/building/build-java), [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts))
- auth (evidence: [https://docs.cloud.google.com/build/docs/building/build-containerize-python](https://docs.cloud.google.com/build/docs/building/build-containerize-python), [https://docs.cloud.google.com/build/docs/building/build-java](https://docs.cloud.google.com/build/docs/building/build-java), [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts))
- key (evidence: [https://docs.cloud.google.com/build/docs/building/build-containerize-python](https://docs.cloud.google.com/build/docs/building/build-containerize-python), [https://docs.cloud.google.com/build/docs/building/build-java](https://docs.cloud.google.com/build/docs/building/build-java), [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts))

## Official Evidence

- [https://docs.cloud.google.com/build/docs/building/build-containerize-python](https://docs.cloud.google.com/build/docs/building/build-containerize-python)
- [https://docs.cloud.google.com/build/docs/building/build-java](https://docs.cloud.google.com/build/docs/building/build-java)
- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.types.Artifacts)
