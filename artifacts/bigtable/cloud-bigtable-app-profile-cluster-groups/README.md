# Cloud Bigtable app profile cluster groups

Product: Bigtable
Feature slug: `cloud-bigtable-app-profile-cluster-groups`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Introduces app profile cluster groups so app profile traffic can be routed to a subset of clusters in a Cloud Bigtable instance.

## Lifecycle

- Latest feature date: 2021-10-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- iam
- identity
- permission
- policy
- role

## Official Evidence

- [https://docs.cloud.google.com/bigtable/docs/app-profiles](https://docs.cloud.google.com/bigtable/docs/app-profiles)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.AppProfile.MultiClusterRoutingPolicy](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.AppProfile.MultiClusterRoutingPolicy)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.AppProfile.SingleClusterRoutingPolicy](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigtable/latest/com.google.cloud.bigtable.admin.v2.models.AppProfile.SingleClusterRoutingPolicy)
