# OCI v1.1 support for Docker repositories

Product: Artifact Registry
Feature slug: `oci-v1-1-support-for-docker-repositories`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Artifact Registry adds OCI specification v1.1 support in Docker format repositories, including support for image metadata attachments.

## Lifecycle

- Latest feature date: 2024-10-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/artifact-registry/docs/reference/docker-api](https://docs.cloud.google.com/artifact-registry/docs/reference/docker-api), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.dockerImages](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.dockerImages), [https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images](https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images))
- auth (evidence: [https://docs.cloud.google.com/artifact-registry/docs/reference/docker-api](https://docs.cloud.google.com/artifact-registry/docs/reference/docker-api), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.dockerImages](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.dockerImages), [https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images](https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images))
- authorization (evidence: [https://docs.cloud.google.com/artifact-registry/docs/reference/docker-api](https://docs.cloud.google.com/artifact-registry/docs/reference/docker-api), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.dockerImages](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.dockerImages), [https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images](https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images))
- key (evidence: [https://docs.cloud.google.com/artifact-registry/docs/reference/docker-api](https://docs.cloud.google.com/artifact-registry/docs/reference/docker-api), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.dockerImages](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.dockerImages), [https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images](https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images))
- permission (evidence: [https://docs.cloud.google.com/artifact-registry/docs/reference/docker-api](https://docs.cloud.google.com/artifact-registry/docs/reference/docker-api), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.dockerImages](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.dockerImages), [https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images](https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images))
- token (evidence: [https://docs.cloud.google.com/artifact-registry/docs/reference/docker-api](https://docs.cloud.google.com/artifact-registry/docs/reference/docker-api), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.dockerImages](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.dockerImages), [https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images](https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images))

## Official Evidence

- [https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images](https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images)
- [https://docs.cloud.google.com/artifact-registry/docs/reference/docker-api](https://docs.cloud.google.com/artifact-registry/docs/reference/docker-api)
- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.dockerImages](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories.dockerImages)
