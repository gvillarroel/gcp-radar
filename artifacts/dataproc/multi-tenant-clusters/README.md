# Multi-tenant clusters

Product: Dataproc
Feature slug: `multi-tenant-clusters`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Dataproc supports multi-tenant clusters that let multiple users run isolated workloads on a shared cluster.

## Lifecycle

- Latest feature date: 2025-09-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-delete-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-delete-cluster), [https://docs.cloud.google.com/dataproc-metastore/docs/delete-service](https://docs.cloud.google.com/dataproc-metastore/docs/delete-service), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.operations/delete](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.operations/delete))
- audit (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-delete-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-delete-cluster), [https://docs.cloud.google.com/dataproc-metastore/docs/delete-service](https://docs.cloud.google.com/dataproc-metastore/docs/delete-service), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.operations/delete](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.operations/delete))
- iam (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-delete-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-delete-cluster), [https://docs.cloud.google.com/dataproc-metastore/docs/delete-service](https://docs.cloud.google.com/dataproc-metastore/docs/delete-service), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.operations/delete](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.operations/delete))
- logging (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-delete-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-delete-cluster), [https://docs.cloud.google.com/dataproc-metastore/docs/delete-service](https://docs.cloud.google.com/dataproc-metastore/docs/delete-service), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.operations/delete](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.operations/delete))
- permission (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-delete-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-delete-cluster), [https://docs.cloud.google.com/dataproc-metastore/docs/delete-service](https://docs.cloud.google.com/dataproc-metastore/docs/delete-service), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.operations/delete](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.operations/delete))
- policy (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-delete-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-delete-cluster), [https://docs.cloud.google.com/dataproc-metastore/docs/delete-service](https://docs.cloud.google.com/dataproc-metastore/docs/delete-service), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.operations/delete](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.operations/delete))
- role (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-delete-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-delete-cluster), [https://docs.cloud.google.com/dataproc-metastore/docs/delete-service](https://docs.cloud.google.com/dataproc-metastore/docs/delete-service), [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.operations/delete](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.operations/delete))

## Official Evidence

- [https://docs.cloud.google.com/dataproc-metastore/docs/delete-service](https://docs.cloud.google.com/dataproc-metastore/docs/delete-service)
- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-delete-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-delete-cluster)
- [https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.operations/delete](https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.operations/delete)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
