# Cloud Logging audit logs for Artifact Registry repositories

Product: Artifact Registry
Feature slug: `cloud-logging-audit-logs-for-artifact-registry-repositories`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Audit logs for Maven, npm, and Python repositories in Artifact Registry are now available in Cloud Logging.

## Lifecycle

- Latest feature date: 2022-06-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/artifact-registry/docs/audit-logging](https://docs.cloud.google.com/artifact-registry/docs/audit-logging), [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories))
- allow (evidence: [https://docs.cloud.google.com/artifact-registry/docs/audit-logging](https://docs.cloud.google.com/artifact-registry/docs/audit-logging), [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories))
- audit (evidence: [https://docs.cloud.google.com/artifact-registry/docs/audit-logging](https://docs.cloud.google.com/artifact-registry/docs/audit-logging), [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories))
- auth (evidence: [https://docs.cloud.google.com/artifact-registry/docs/audit-logging](https://docs.cloud.google.com/artifact-registry/docs/audit-logging), [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories))
- iam (evidence: [https://docs.cloud.google.com/artifact-registry/docs/audit-logging](https://docs.cloud.google.com/artifact-registry/docs/audit-logging), [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories))
- identity (evidence: [https://docs.cloud.google.com/artifact-registry/docs/audit-logging](https://docs.cloud.google.com/artifact-registry/docs/audit-logging), [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories))
- key (evidence: [https://docs.cloud.google.com/artifact-registry/docs/audit-logging](https://docs.cloud.google.com/artifact-registry/docs/audit-logging), [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories))
- kms (evidence: [https://docs.cloud.google.com/artifact-registry/docs/audit-logging](https://docs.cloud.google.com/artifact-registry/docs/audit-logging), [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories))
- logging (evidence: [https://docs.cloud.google.com/artifact-registry/docs/audit-logging](https://docs.cloud.google.com/artifact-registry/docs/audit-logging), [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories))
- permission (evidence: [https://docs.cloud.google.com/artifact-registry/docs/audit-logging](https://docs.cloud.google.com/artifact-registry/docs/audit-logging), [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories))
- policy (evidence: [https://docs.cloud.google.com/artifact-registry/docs/audit-logging](https://docs.cloud.google.com/artifact-registry/docs/audit-logging), [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr), [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories))

## Official Evidence

- [https://docs.cloud.google.com/artifact-registry/docs/audit-logging](https://docs.cloud.google.com/artifact-registry/docs/audit-logging)
- [https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories](https://docs.cloud.google.com/artifact-registry/docs/reference/rest/v1/projects.locations.repositories)
- [https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr](https://docs.cloud.google.com/artifact-registry/docs/transition/transition-from-gcr)
