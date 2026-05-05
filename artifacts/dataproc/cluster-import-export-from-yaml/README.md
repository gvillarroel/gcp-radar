# Cluster import/export from YAML

Product: Dataproc
Feature slug: `cluster-import-export-from-yaml`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cluster import and export from YAML lets users export a cluster configuration to YAML and create a cluster by importing that YAML file.

## Lifecycle

- Latest feature date: 2018-09-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/recreate-cluster), [https://docs.cloud.google.com/dataproc/docs/guides/create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/create-cluster), [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster))
- allow (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/recreate-cluster), [https://docs.cloud.google.com/dataproc/docs/guides/create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/create-cluster), [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster))
- auth (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/recreate-cluster), [https://docs.cloud.google.com/dataproc/docs/guides/create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/create-cluster), [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster))
- authorization (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/recreate-cluster), [https://docs.cloud.google.com/dataproc/docs/guides/create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/create-cluster), [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster))
- token (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/recreate-cluster), [https://docs.cloud.google.com/dataproc/docs/guides/create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/create-cluster), [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster))

## Official Evidence

- [https://docs.cloud.google.com/dataproc/docs/guides/create-cluster](https://docs.cloud.google.com/dataproc/docs/guides/create-cluster)
- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-recreate-cluster)
- [https://docs.cloud.google.com/dataproc/docs/guides/recreate-cluster](https://docs.cloud.google.com/dataproc/docs/guides/recreate-cluster)
