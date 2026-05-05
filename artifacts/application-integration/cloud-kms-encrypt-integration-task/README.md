# Cloud KMS - encrypt integration task

Product: Application Integration
Feature slug: `cloud-kms-encrypt-integration-task`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Application Integration added a Cloud KMS encrypt integration task in preview.

## Lifecycle

- Latest feature date: 2023-05-23
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/application-integration/docs/cmek](https://docs.cloud.google.com/application-integration/docs/cmek), [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task), [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks))
- auth (evidence: [https://docs.cloud.google.com/application-integration/docs/cmek](https://docs.cloud.google.com/application-integration/docs/cmek), [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task), [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks))
- authorization (evidence: [https://docs.cloud.google.com/application-integration/docs/cmek](https://docs.cloud.google.com/application-integration/docs/cmek), [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task), [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks))
- certificate (evidence: [https://docs.cloud.google.com/application-integration/docs/cmek](https://docs.cloud.google.com/application-integration/docs/cmek), [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task), [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks))
- credential (evidence: [https://docs.cloud.google.com/application-integration/docs/cmek](https://docs.cloud.google.com/application-integration/docs/cmek), [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task), [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks))
- encrypt (evidence: [https://docs.cloud.google.com/application-integration/docs/cmek](https://docs.cloud.google.com/application-integration/docs/cmek), [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task), [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks))
- iam (evidence: [https://docs.cloud.google.com/application-integration/docs/cmek](https://docs.cloud.google.com/application-integration/docs/cmek), [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task), [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks))
- key (evidence: [https://docs.cloud.google.com/application-integration/docs/cmek](https://docs.cloud.google.com/application-integration/docs/cmek), [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task), [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks))
- kms (evidence: [https://docs.cloud.google.com/application-integration/docs/cmek](https://docs.cloud.google.com/application-integration/docs/cmek), [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task), [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks))
- private (evidence: [https://docs.cloud.google.com/application-integration/docs/cmek](https://docs.cloud.google.com/application-integration/docs/cmek), [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task), [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks))
- role (evidence: [https://docs.cloud.google.com/application-integration/docs/cmek](https://docs.cloud.google.com/application-integration/docs/cmek), [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task), [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks))
- secret (evidence: [https://docs.cloud.google.com/application-integration/docs/cmek](https://docs.cloud.google.com/application-integration/docs/cmek), [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task), [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks))
- token (evidence: [https://docs.cloud.google.com/application-integration/docs/cmek](https://docs.cloud.google.com/application-integration/docs/cmek), [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task), [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks))

## Official Evidence

- [https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks](https://docs.cloud.google.com/application-integration/docs/all-triggers-tasks)
- [https://docs.cloud.google.com/application-integration/docs/cmek](https://docs.cloud.google.com/application-integration/docs/cmek)
- [https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task](https://docs.cloud.google.com/application-integration/docs/configure-data-transformer-script-task)
