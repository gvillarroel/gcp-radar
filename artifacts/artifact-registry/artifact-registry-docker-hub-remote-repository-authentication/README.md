# Artifact Registry Docker Hub remote repository authentication

Product: Artifact Registry
Feature slug: `artifact-registry-docker-hub-remote-repository-authentication`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Artifact Registry remote repositories support authentication when using Docker Hub as an upstream source.

## Lifecycle

- Latest feature date: 2023-10-31
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub](https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub), [https://docs.cloud.google.com/artifact-registry/docs/docker/authentication](https://docs.cloud.google.com/artifact-registry/docs/docker/authentication), [https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images](https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images))
- auth (evidence: [https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub](https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub), [https://docs.cloud.google.com/artifact-registry/docs/docker/authentication](https://docs.cloud.google.com/artifact-registry/docs/docker/authentication), [https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images](https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images))
- credential (evidence: [https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub](https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub), [https://docs.cloud.google.com/artifact-registry/docs/docker/authentication](https://docs.cloud.google.com/artifact-registry/docs/docker/authentication), [https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images](https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images))
- iam (evidence: [https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub](https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub), [https://docs.cloud.google.com/artifact-registry/docs/docker/authentication](https://docs.cloud.google.com/artifact-registry/docs/docker/authentication), [https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images](https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images))
- key (evidence: [https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub](https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub), [https://docs.cloud.google.com/artifact-registry/docs/docker/authentication](https://docs.cloud.google.com/artifact-registry/docs/docker/authentication), [https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images](https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images))
- permission (evidence: [https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub](https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub), [https://docs.cloud.google.com/artifact-registry/docs/docker/authentication](https://docs.cloud.google.com/artifact-registry/docs/docker/authentication), [https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images](https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images))
- private (evidence: [https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub](https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub), [https://docs.cloud.google.com/artifact-registry/docs/docker/authentication](https://docs.cloud.google.com/artifact-registry/docs/docker/authentication), [https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images](https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images))
- role (evidence: [https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub](https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub), [https://docs.cloud.google.com/artifact-registry/docs/docker/authentication](https://docs.cloud.google.com/artifact-registry/docs/docker/authentication), [https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images](https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images))
- secret (evidence: [https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub](https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub), [https://docs.cloud.google.com/artifact-registry/docs/docker/authentication](https://docs.cloud.google.com/artifact-registry/docs/docker/authentication), [https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images](https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images))
- token (evidence: [https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub](https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub), [https://docs.cloud.google.com/artifact-registry/docs/docker/authentication](https://docs.cloud.google.com/artifact-registry/docs/docker/authentication), [https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images](https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images))

## Official Evidence

- [https://docs.cloud.google.com/artifact-registry/docs/docker/authentication](https://docs.cloud.google.com/artifact-registry/docs/docker/authentication)
- [https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub](https://docs.cloud.google.com/artifact-registry/docs/docker/configure-remote-auth-docker-hub)
- [https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images](https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images)
