# Autoscaling logs in Cloud Logging

Product: Dataproc
Feature slug: `autoscaling-logs-in-cloud-logging`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Dataproc autoscaling logs appear in Cloud Logging under cluster logs.

## Lifecycle

- Latest feature date: 2018-12-10
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/audit-logging](https://docs.cloud.google.com/dataproc/docs/guides/audit-logging), [https://docs.cloud.google.com/dataproc/docs/guides/logging](https://docs.cloud.google.com/dataproc/docs/guides/logging), [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging))
- audit (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/audit-logging](https://docs.cloud.google.com/dataproc/docs/guides/audit-logging), [https://docs.cloud.google.com/dataproc/docs/guides/logging](https://docs.cloud.google.com/dataproc/docs/guides/logging), [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging))
- auth (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/audit-logging](https://docs.cloud.google.com/dataproc/docs/guides/audit-logging), [https://docs.cloud.google.com/dataproc/docs/guides/logging](https://docs.cloud.google.com/dataproc/docs/guides/logging), [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging))
- authorization (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/audit-logging](https://docs.cloud.google.com/dataproc/docs/guides/audit-logging), [https://docs.cloud.google.com/dataproc/docs/guides/logging](https://docs.cloud.google.com/dataproc/docs/guides/logging), [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging))
- credential (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/audit-logging](https://docs.cloud.google.com/dataproc/docs/guides/audit-logging), [https://docs.cloud.google.com/dataproc/docs/guides/logging](https://docs.cloud.google.com/dataproc/docs/guides/logging), [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging))
- iam (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/audit-logging](https://docs.cloud.google.com/dataproc/docs/guides/audit-logging), [https://docs.cloud.google.com/dataproc/docs/guides/logging](https://docs.cloud.google.com/dataproc/docs/guides/logging), [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging))
- identity (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/audit-logging](https://docs.cloud.google.com/dataproc/docs/guides/audit-logging), [https://docs.cloud.google.com/dataproc/docs/guides/logging](https://docs.cloud.google.com/dataproc/docs/guides/logging), [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging))
- logging (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/audit-logging](https://docs.cloud.google.com/dataproc/docs/guides/audit-logging), [https://docs.cloud.google.com/dataproc/docs/guides/logging](https://docs.cloud.google.com/dataproc/docs/guides/logging), [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging))
- permission (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/audit-logging](https://docs.cloud.google.com/dataproc/docs/guides/audit-logging), [https://docs.cloud.google.com/dataproc/docs/guides/logging](https://docs.cloud.google.com/dataproc/docs/guides/logging), [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging))
- policy (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/audit-logging](https://docs.cloud.google.com/dataproc/docs/guides/audit-logging), [https://docs.cloud.google.com/dataproc/docs/guides/logging](https://docs.cloud.google.com/dataproc/docs/guides/logging), [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging))
- role (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/audit-logging](https://docs.cloud.google.com/dataproc/docs/guides/audit-logging), [https://docs.cloud.google.com/dataproc/docs/guides/logging](https://docs.cloud.google.com/dataproc/docs/guides/logging), [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging))
- security (evidence: [https://docs.cloud.google.com/dataproc/docs/guides/audit-logging](https://docs.cloud.google.com/dataproc/docs/guides/audit-logging), [https://docs.cloud.google.com/dataproc/docs/guides/logging](https://docs.cloud.google.com/dataproc/docs/guides/logging), [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging))

## Official Evidence

- [https://docs.cloud.google.com/dataproc/docs/guides/audit-logging](https://docs.cloud.google.com/dataproc/docs/guides/audit-logging)
- [https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging](https://docs.cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-logging)
- [https://docs.cloud.google.com/dataproc/docs/guides/logging](https://docs.cloud.google.com/dataproc/docs/guides/logging)
