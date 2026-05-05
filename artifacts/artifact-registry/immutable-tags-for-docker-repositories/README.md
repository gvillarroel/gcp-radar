# Immutable tags for Docker repositories

Product: Artifact Registry
Feature slug: `immutable-tags-for-docker-repositories`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Docker repositories gained a preview immutable tags setting that prevents changing the digest referenced by an image tag.

## Lifecycle

- Latest feature date: 2023-03-23
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories), [https://docs.cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling](https://docs.cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling), [https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient))
- allow (evidence: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories), [https://docs.cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling](https://docs.cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling), [https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient))
- auth (evidence: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories), [https://docs.cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling](https://docs.cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling), [https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient))
- credential (evidence: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories), [https://docs.cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling](https://docs.cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling), [https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient))
- key (evidence: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories), [https://docs.cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling](https://docs.cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling), [https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient))
- kms (evidence: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories), [https://docs.cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling](https://docs.cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling), [https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient))
- policy (evidence: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories), [https://docs.cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling](https://docs.cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling), [https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient))
- token (evidence: [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories), [https://docs.cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling](https://docs.cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling), [https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient))

## Official Evidence

- [https://docs.cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling](https://docs.cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling)
- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-artifact-registry/latest/com.google.devtools.artifactregistry.v1.ArtifactRegistryClient)
