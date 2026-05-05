# Google-managed encryption keys as default encryption

Product: Application Integration
Feature slug: `google-managed-encryption-keys-as-default-encryption`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Application Integration now uses Google-managed encryption keys by default for provisioned regions.

## Lifecycle

- Latest feature date: 2023-05-22
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/application-integration/docs/cmek](https://docs.cloud.google.com/application-integration/docs/cmek), [https://docs.cloud.google.com/application-integration/docs/setup-application-integration](https://docs.cloud.google.com/application-integration/docs/setup-application-integration), [https://docs.cloud.google.com/application-integration/docs/access-control](https://docs.cloud.google.com/application-integration/docs/access-control))
- allow (evidence: [https://docs.cloud.google.com/application-integration/docs/cmek](https://docs.cloud.google.com/application-integration/docs/cmek), [https://docs.cloud.google.com/application-integration/docs/setup-application-integration](https://docs.cloud.google.com/application-integration/docs/setup-application-integration), [https://docs.cloud.google.com/application-integration/docs/access-control](https://docs.cloud.google.com/application-integration/docs/access-control))
- auth (evidence: [https://docs.cloud.google.com/application-integration/docs/cmek](https://docs.cloud.google.com/application-integration/docs/cmek), [https://docs.cloud.google.com/application-integration/docs/setup-application-integration](https://docs.cloud.google.com/application-integration/docs/setup-application-integration), [https://docs.cloud.google.com/application-integration/docs/access-control](https://docs.cloud.google.com/application-integration/docs/access-control))
- credential (evidence: [https://docs.cloud.google.com/application-integration/docs/cmek](https://docs.cloud.google.com/application-integration/docs/cmek), [https://docs.cloud.google.com/application-integration/docs/setup-application-integration](https://docs.cloud.google.com/application-integration/docs/setup-application-integration), [https://docs.cloud.google.com/application-integration/docs/access-control](https://docs.cloud.google.com/application-integration/docs/access-control))
- encrypt (evidence: [https://docs.cloud.google.com/application-integration/docs/cmek](https://docs.cloud.google.com/application-integration/docs/cmek), [https://docs.cloud.google.com/application-integration/docs/setup-application-integration](https://docs.cloud.google.com/application-integration/docs/setup-application-integration), [https://docs.cloud.google.com/application-integration/docs/access-control](https://docs.cloud.google.com/application-integration/docs/access-control))
- iam (evidence: [https://docs.cloud.google.com/application-integration/docs/cmek](https://docs.cloud.google.com/application-integration/docs/cmek), [https://docs.cloud.google.com/application-integration/docs/setup-application-integration](https://docs.cloud.google.com/application-integration/docs/setup-application-integration), [https://docs.cloud.google.com/application-integration/docs/access-control](https://docs.cloud.google.com/application-integration/docs/access-control))
- key (evidence: [https://docs.cloud.google.com/application-integration/docs/cmek](https://docs.cloud.google.com/application-integration/docs/cmek), [https://docs.cloud.google.com/application-integration/docs/setup-application-integration](https://docs.cloud.google.com/application-integration/docs/setup-application-integration), [https://docs.cloud.google.com/application-integration/docs/access-control](https://docs.cloud.google.com/application-integration/docs/access-control))
- kms (evidence: [https://docs.cloud.google.com/application-integration/docs/cmek](https://docs.cloud.google.com/application-integration/docs/cmek), [https://docs.cloud.google.com/application-integration/docs/setup-application-integration](https://docs.cloud.google.com/application-integration/docs/setup-application-integration), [https://docs.cloud.google.com/application-integration/docs/access-control](https://docs.cloud.google.com/application-integration/docs/access-control))
- permission (evidence: [https://docs.cloud.google.com/application-integration/docs/cmek](https://docs.cloud.google.com/application-integration/docs/cmek), [https://docs.cloud.google.com/application-integration/docs/setup-application-integration](https://docs.cloud.google.com/application-integration/docs/setup-application-integration), [https://docs.cloud.google.com/application-integration/docs/access-control](https://docs.cloud.google.com/application-integration/docs/access-control))
- role (evidence: [https://docs.cloud.google.com/application-integration/docs/cmek](https://docs.cloud.google.com/application-integration/docs/cmek), [https://docs.cloud.google.com/application-integration/docs/setup-application-integration](https://docs.cloud.google.com/application-integration/docs/setup-application-integration), [https://docs.cloud.google.com/application-integration/docs/access-control](https://docs.cloud.google.com/application-integration/docs/access-control))
- secret (evidence: [https://docs.cloud.google.com/application-integration/docs/cmek](https://docs.cloud.google.com/application-integration/docs/cmek), [https://docs.cloud.google.com/application-integration/docs/setup-application-integration](https://docs.cloud.google.com/application-integration/docs/setup-application-integration), [https://docs.cloud.google.com/application-integration/docs/access-control](https://docs.cloud.google.com/application-integration/docs/access-control))

## Official Evidence

- [https://docs.cloud.google.com/application-integration/docs/access-control](https://docs.cloud.google.com/application-integration/docs/access-control)
- [https://docs.cloud.google.com/application-integration/docs/cmek](https://docs.cloud.google.com/application-integration/docs/cmek)
- [https://docs.cloud.google.com/application-integration/docs/setup-application-integration](https://docs.cloud.google.com/application-integration/docs/setup-application-integration)
