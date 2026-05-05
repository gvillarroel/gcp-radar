# Access control

Product: Cloud Run functions
Feature slug: `access-control`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run functions supports access control for managing permissions.

## Lifecycle

- Latest feature date: 2017-03-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/functions/docs/concepts/iam](https://docs.cloud.google.com/functions/docs/concepts/iam), [https://docs.cloud.google.com/functions/docs/securing/managing-access-iam](https://docs.cloud.google.com/functions/docs/securing/managing-access-iam), [https://docs.cloud.google.com/functions/docs/reference/iam/permissions](https://docs.cloud.google.com/functions/docs/reference/iam/permissions))
- allow (evidence: [https://docs.cloud.google.com/functions/docs/concepts/iam](https://docs.cloud.google.com/functions/docs/concepts/iam), [https://docs.cloud.google.com/functions/docs/securing/managing-access-iam](https://docs.cloud.google.com/functions/docs/securing/managing-access-iam), [https://docs.cloud.google.com/functions/docs/reference/iam/permissions](https://docs.cloud.google.com/functions/docs/reference/iam/permissions))
- auth (evidence: [https://docs.cloud.google.com/functions/docs/concepts/iam](https://docs.cloud.google.com/functions/docs/concepts/iam), [https://docs.cloud.google.com/functions/docs/securing/managing-access-iam](https://docs.cloud.google.com/functions/docs/securing/managing-access-iam), [https://docs.cloud.google.com/functions/docs/reference/iam/permissions](https://docs.cloud.google.com/functions/docs/reference/iam/permissions))
- credential (evidence: [https://docs.cloud.google.com/functions/docs/concepts/iam](https://docs.cloud.google.com/functions/docs/concepts/iam), [https://docs.cloud.google.com/functions/docs/securing/managing-access-iam](https://docs.cloud.google.com/functions/docs/securing/managing-access-iam), [https://docs.cloud.google.com/functions/docs/reference/iam/permissions](https://docs.cloud.google.com/functions/docs/reference/iam/permissions))
- iam (evidence: [https://docs.cloud.google.com/functions/docs/concepts/iam](https://docs.cloud.google.com/functions/docs/concepts/iam), [https://docs.cloud.google.com/functions/docs/securing/managing-access-iam](https://docs.cloud.google.com/functions/docs/securing/managing-access-iam), [https://docs.cloud.google.com/functions/docs/reference/iam/permissions](https://docs.cloud.google.com/functions/docs/reference/iam/permissions))
- identity (evidence: [https://docs.cloud.google.com/functions/docs/concepts/iam](https://docs.cloud.google.com/functions/docs/concepts/iam), [https://docs.cloud.google.com/functions/docs/securing/managing-access-iam](https://docs.cloud.google.com/functions/docs/securing/managing-access-iam), [https://docs.cloud.google.com/functions/docs/reference/iam/permissions](https://docs.cloud.google.com/functions/docs/reference/iam/permissions))
- permission (evidence: [https://docs.cloud.google.com/functions/docs/concepts/iam](https://docs.cloud.google.com/functions/docs/concepts/iam), [https://docs.cloud.google.com/functions/docs/securing/managing-access-iam](https://docs.cloud.google.com/functions/docs/securing/managing-access-iam), [https://docs.cloud.google.com/functions/docs/reference/iam/permissions](https://docs.cloud.google.com/functions/docs/reference/iam/permissions))
- policy (evidence: [https://docs.cloud.google.com/functions/docs/concepts/iam](https://docs.cloud.google.com/functions/docs/concepts/iam), [https://docs.cloud.google.com/functions/docs/securing/managing-access-iam](https://docs.cloud.google.com/functions/docs/securing/managing-access-iam), [https://docs.cloud.google.com/functions/docs/reference/iam/permissions](https://docs.cloud.google.com/functions/docs/reference/iam/permissions))
- role (evidence: [https://docs.cloud.google.com/functions/docs/concepts/iam](https://docs.cloud.google.com/functions/docs/concepts/iam), [https://docs.cloud.google.com/functions/docs/securing/managing-access-iam](https://docs.cloud.google.com/functions/docs/securing/managing-access-iam), [https://docs.cloud.google.com/functions/docs/reference/iam/permissions](https://docs.cloud.google.com/functions/docs/reference/iam/permissions))
- token (evidence: [https://docs.cloud.google.com/functions/docs/concepts/iam](https://docs.cloud.google.com/functions/docs/concepts/iam), [https://docs.cloud.google.com/functions/docs/securing/managing-access-iam](https://docs.cloud.google.com/functions/docs/securing/managing-access-iam), [https://docs.cloud.google.com/functions/docs/reference/iam/permissions](https://docs.cloud.google.com/functions/docs/reference/iam/permissions))

## Official Evidence

- [https://docs.cloud.google.com/functions/docs/concepts/iam](https://docs.cloud.google.com/functions/docs/concepts/iam)
- [https://docs.cloud.google.com/functions/docs/reference/iam/permissions](https://docs.cloud.google.com/functions/docs/reference/iam/permissions)
- [https://docs.cloud.google.com/functions/docs/securing/managing-access-iam](https://docs.cloud.google.com/functions/docs/securing/managing-access-iam)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
