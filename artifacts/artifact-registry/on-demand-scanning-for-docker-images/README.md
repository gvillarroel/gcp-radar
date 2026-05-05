# On-Demand Scanning for Docker images

Product: Artifact Registry
Feature slug: `on-demand-scanning-for-docker-images`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Artifact Registry makes On-Demand Scanning available in Preview for manual scanning of Docker container images.

## Lifecycle

- Latest feature date: 2021-02-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr), [https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images](https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images), [https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListDockerImagesAsyncPager](https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListDockerImagesAsyncPager))
- key (evidence: [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr), [https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images](https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images), [https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListDockerImagesAsyncPager](https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListDockerImagesAsyncPager))
- private (evidence: [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr), [https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images](https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images), [https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListDockerImagesAsyncPager](https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListDockerImagesAsyncPager))

## Official Evidence

- [https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images](https://docs.cloud.google.com/artifact-registry/docs/docker/store-docker-container-images)
- [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)
- [https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListDockerImagesAsyncPager](https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListDockerImagesAsyncPager)
