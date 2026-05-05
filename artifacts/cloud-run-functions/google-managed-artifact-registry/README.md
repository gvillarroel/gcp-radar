# Google-managed Artifact Registry

Product: Cloud Run functions
Feature slug: `google-managed-artifact-registry`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Run functions 1st gen supports Google-managed Artifact Registry.

## Lifecycle

- Latest feature date: 2022-04-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek), [https://docs.cloud.google.com/functions/docs/concepts/iam](https://docs.cloud.google.com/functions/docs/concepts/iam), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building))
- auth (evidence: [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek), [https://docs.cloud.google.com/functions/docs/concepts/iam](https://docs.cloud.google.com/functions/docs/concepts/iam), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building))
- constraint (evidence: [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek), [https://docs.cloud.google.com/functions/docs/concepts/iam](https://docs.cloud.google.com/functions/docs/concepts/iam), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building))
- credential (evidence: [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek), [https://docs.cloud.google.com/functions/docs/concepts/iam](https://docs.cloud.google.com/functions/docs/concepts/iam), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building))
- encrypt (evidence: [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek), [https://docs.cloud.google.com/functions/docs/concepts/iam](https://docs.cloud.google.com/functions/docs/concepts/iam), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building))
- iam (evidence: [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek), [https://docs.cloud.google.com/functions/docs/concepts/iam](https://docs.cloud.google.com/functions/docs/concepts/iam), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building))
- key (evidence: [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek), [https://docs.cloud.google.com/functions/docs/concepts/iam](https://docs.cloud.google.com/functions/docs/concepts/iam), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building))
- kms (evidence: [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek), [https://docs.cloud.google.com/functions/docs/concepts/iam](https://docs.cloud.google.com/functions/docs/concepts/iam), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building))
- logging (evidence: [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek), [https://docs.cloud.google.com/functions/docs/concepts/iam](https://docs.cloud.google.com/functions/docs/concepts/iam), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building))
- permission (evidence: [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek), [https://docs.cloud.google.com/functions/docs/concepts/iam](https://docs.cloud.google.com/functions/docs/concepts/iam), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building))
- policy (evidence: [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek), [https://docs.cloud.google.com/functions/docs/concepts/iam](https://docs.cloud.google.com/functions/docs/concepts/iam), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building))
- role (evidence: [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek), [https://docs.cloud.google.com/functions/docs/concepts/iam](https://docs.cloud.google.com/functions/docs/concepts/iam), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building))
- token (evidence: [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek), [https://docs.cloud.google.com/functions/docs/concepts/iam](https://docs.cloud.google.com/functions/docs/concepts/iam), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building))

## Official Evidence

- [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building)
- [https://docs.cloud.google.com/functions/docs/concepts/iam](https://docs.cloud.google.com/functions/docs/concepts/iam)
- [https://docs.cloud.google.com/functions/docs/securing/cmek](https://docs.cloud.google.com/functions/docs/securing/cmek)
