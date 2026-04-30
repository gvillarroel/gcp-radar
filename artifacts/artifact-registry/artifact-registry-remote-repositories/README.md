# Artifact Registry remote repositories

Product: Artifact Registry
Feature slug: `artifact-registry-remote-repositories`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Artifact Registry remote repositories are available for proxying external package sources and caching requested package versions; Artifact Registry added remote repositories in preview, which cache artifacts from external sources such as Docker Hub, Maven Central, PyPI, and the npm registry.

## Lifecycle

- Latest feature date: 2023-10-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- constraint
- credential
- iam
- permission
- policy
- private
- role
- secret
- token

## Official Evidence

- [https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub](https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub)
- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)
