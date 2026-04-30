# Artifact Registry remote repositories for OS packages

Product: Artifact Registry
Feature slug: `artifact-registry-remote-repositories-for-os-packages`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Artifact Registry introduced remote repositories for operating-system packages as a preview feature, proxying external sources such as Docker Hub, Maven Central, and PyPI.

## Lifecycle

- Latest feature date: 2023-08-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- auth
- key
- kms
- policy
- private

## Official Evidence

- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1)
