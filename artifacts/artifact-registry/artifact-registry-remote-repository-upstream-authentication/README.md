# Artifact Registry remote repository upstream authentication

Product: Artifact Registry
Feature slug: `artifact-registry-remote-repository-upstream-authentication`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Artifact Registry remote repositories support basic authentication to user-defined and preset upstream sources for Docker, Maven, npm, and Python repositories.

## Lifecycle

- Latest feature date: 2024-03-15
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub](https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub), [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories))
- auth (evidence: [https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub](https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub), [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories))
- constraint (evidence: [https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub](https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub), [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories))
- credential (evidence: [https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub](https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub), [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories))
- iam (evidence: [https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub](https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub), [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories))
- permission (evidence: [https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub](https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub), [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories))
- policy (evidence: [https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub](https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub), [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories))
- private (evidence: [https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub](https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub), [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories))
- role (evidence: [https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub](https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub), [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories))
- secret (evidence: [https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub](https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub), [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories))
- token (evidence: [https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub](https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub), [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories))

## Official Evidence

- [https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub](https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub)
- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)
