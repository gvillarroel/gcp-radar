# Detach v2 functions to Cloud Run Admin API

Product: Cloud Run functions
Feature slug: `detach-v2-functions-to-cloud-run-admin-api`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Run functions created with the Cloud Functions v2 API can be detached for management only through the Cloud Run Admin API.

## Lifecycle

- Latest feature date: 2025-02-11
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/functions/docs/managing](https://docs.cloud.google.com/functions/docs/managing), [https://docs.cloud.google.com/functions/docs/monitoring/audit-logging](https://docs.cloud.google.com/functions/docs/monitoring/audit-logging), [https://docs.cloud.google.com/functions/docs/securing/managing-access-iam](https://docs.cloud.google.com/functions/docs/securing/managing-access-iam))
- allow (evidence: [https://docs.cloud.google.com/functions/docs/managing](https://docs.cloud.google.com/functions/docs/managing), [https://docs.cloud.google.com/functions/docs/monitoring/audit-logging](https://docs.cloud.google.com/functions/docs/monitoring/audit-logging), [https://docs.cloud.google.com/functions/docs/securing/managing-access-iam](https://docs.cloud.google.com/functions/docs/securing/managing-access-iam))
- audit (evidence: [https://docs.cloud.google.com/functions/docs/managing](https://docs.cloud.google.com/functions/docs/managing), [https://docs.cloud.google.com/functions/docs/monitoring/audit-logging](https://docs.cloud.google.com/functions/docs/monitoring/audit-logging), [https://docs.cloud.google.com/functions/docs/securing/managing-access-iam](https://docs.cloud.google.com/functions/docs/securing/managing-access-iam))
- auth (evidence: [https://docs.cloud.google.com/functions/docs/managing](https://docs.cloud.google.com/functions/docs/managing), [https://docs.cloud.google.com/functions/docs/monitoring/audit-logging](https://docs.cloud.google.com/functions/docs/monitoring/audit-logging), [https://docs.cloud.google.com/functions/docs/securing/managing-access-iam](https://docs.cloud.google.com/functions/docs/securing/managing-access-iam))
- iam (evidence: [https://docs.cloud.google.com/functions/docs/managing](https://docs.cloud.google.com/functions/docs/managing), [https://docs.cloud.google.com/functions/docs/monitoring/audit-logging](https://docs.cloud.google.com/functions/docs/monitoring/audit-logging), [https://docs.cloud.google.com/functions/docs/securing/managing-access-iam](https://docs.cloud.google.com/functions/docs/securing/managing-access-iam))
- identity (evidence: [https://docs.cloud.google.com/functions/docs/managing](https://docs.cloud.google.com/functions/docs/managing), [https://docs.cloud.google.com/functions/docs/monitoring/audit-logging](https://docs.cloud.google.com/functions/docs/monitoring/audit-logging), [https://docs.cloud.google.com/functions/docs/securing/managing-access-iam](https://docs.cloud.google.com/functions/docs/securing/managing-access-iam))
- logging (evidence: [https://docs.cloud.google.com/functions/docs/managing](https://docs.cloud.google.com/functions/docs/managing), [https://docs.cloud.google.com/functions/docs/monitoring/audit-logging](https://docs.cloud.google.com/functions/docs/monitoring/audit-logging), [https://docs.cloud.google.com/functions/docs/securing/managing-access-iam](https://docs.cloud.google.com/functions/docs/securing/managing-access-iam))
- permission (evidence: [https://docs.cloud.google.com/functions/docs/managing](https://docs.cloud.google.com/functions/docs/managing), [https://docs.cloud.google.com/functions/docs/monitoring/audit-logging](https://docs.cloud.google.com/functions/docs/monitoring/audit-logging), [https://docs.cloud.google.com/functions/docs/securing/managing-access-iam](https://docs.cloud.google.com/functions/docs/securing/managing-access-iam))
- policy (evidence: [https://docs.cloud.google.com/functions/docs/managing](https://docs.cloud.google.com/functions/docs/managing), [https://docs.cloud.google.com/functions/docs/monitoring/audit-logging](https://docs.cloud.google.com/functions/docs/monitoring/audit-logging), [https://docs.cloud.google.com/functions/docs/securing/managing-access-iam](https://docs.cloud.google.com/functions/docs/securing/managing-access-iam))
- role (evidence: [https://docs.cloud.google.com/functions/docs/managing](https://docs.cloud.google.com/functions/docs/managing), [https://docs.cloud.google.com/functions/docs/monitoring/audit-logging](https://docs.cloud.google.com/functions/docs/monitoring/audit-logging), [https://docs.cloud.google.com/functions/docs/securing/managing-access-iam](https://docs.cloud.google.com/functions/docs/securing/managing-access-iam))

## Official Evidence

- [https://docs.cloud.google.com/functions/docs/managing](https://docs.cloud.google.com/functions/docs/managing)
- [https://docs.cloud.google.com/functions/docs/monitoring/audit-logging](https://docs.cloud.google.com/functions/docs/monitoring/audit-logging)
- [https://docs.cloud.google.com/functions/docs/securing/managing-access-iam](https://docs.cloud.google.com/functions/docs/securing/managing-access-iam)
