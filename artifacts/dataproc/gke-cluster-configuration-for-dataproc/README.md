# GKE cluster configuration for Dataproc

Product: Dataproc
Feature slug: `gke-cluster-configuration-for-dataproc`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Dataproc supports creating clusters on GKE by specifying GkeClusterConfig instead of GceClusterConfig in the Beta API.

## Lifecycle

- Latest feature date: 2020-03-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- credential
- role

## Official Evidence

- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-diagnose-cluster](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-diagnose-cluster)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfig.AuthenticationType](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfig.AuthenticationType)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfigOrBuilder](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.AuthenticationConfigOrBuilder)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
