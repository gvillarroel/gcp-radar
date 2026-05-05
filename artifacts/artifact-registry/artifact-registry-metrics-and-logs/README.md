# Artifact Registry metrics and logs

Product: Artifact Registry
Feature slug: `artifact-registry-metrics-and-logs`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Artifact Registry now records project-level metrics and logs that are viewable in Cloud Monitoring and Cloud Logging.

## Lifecycle

- Latest feature date: 2024-08-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/artifact-registry/docs/chart-request-counts](https://docs.cloud.google.com/artifact-registry/docs/chart-request-counts), [https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest](https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories))
- audit (evidence: [https://docs.cloud.google.com/artifact-registry/docs/chart-request-counts](https://docs.cloud.google.com/artifact-registry/docs/chart-request-counts), [https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest](https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories))
- iam (evidence: [https://docs.cloud.google.com/artifact-registry/docs/chart-request-counts](https://docs.cloud.google.com/artifact-registry/docs/chart-request-counts), [https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest](https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories))
- key (evidence: [https://docs.cloud.google.com/artifact-registry/docs/chart-request-counts](https://docs.cloud.google.com/artifact-registry/docs/chart-request-counts), [https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest](https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories))
- kms (evidence: [https://docs.cloud.google.com/artifact-registry/docs/chart-request-counts](https://docs.cloud.google.com/artifact-registry/docs/chart-request-counts), [https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest](https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories))
- logging (evidence: [https://docs.cloud.google.com/artifact-registry/docs/chart-request-counts](https://docs.cloud.google.com/artifact-registry/docs/chart-request-counts), [https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest](https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories))
- permission (evidence: [https://docs.cloud.google.com/artifact-registry/docs/chart-request-counts](https://docs.cloud.google.com/artifact-registry/docs/chart-request-counts), [https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest](https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories))
- policy (evidence: [https://docs.cloud.google.com/artifact-registry/docs/chart-request-counts](https://docs.cloud.google.com/artifact-registry/docs/chart-request-counts), [https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest](https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories))
- role (evidence: [https://docs.cloud.google.com/artifact-registry/docs/chart-request-counts](https://docs.cloud.google.com/artifact-registry/docs/chart-request-counts), [https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest](https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories))

## Official Evidence

- [https://docs.cloud.google.com/artifact-registry/docs/chart-request-counts](https://docs.cloud.google.com/artifact-registry/docs/chart-request-counts)
- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- [https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest](https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest)
