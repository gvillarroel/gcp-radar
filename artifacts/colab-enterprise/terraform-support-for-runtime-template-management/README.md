# Terraform support for runtime template management

Product: Colab Enterprise
Feature slug: `terraform-support-for-runtime-template-management`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Terraform resources can create and manage Colab Enterprise runtime templates.

## Lifecycle

- Latest feature date: 2025-02-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template), [https://docs.cloud.google.com/colab/docs/create-runtime](https://docs.cloud.google.com/colab/docs/create-runtime), [https://docs.cloud.google.com/colab/docs/manage-access-runtime-template](https://docs.cloud.google.com/colab/docs/manage-access-runtime-template), [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes))
- auth (evidence: [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template), [https://docs.cloud.google.com/colab/docs/create-runtime](https://docs.cloud.google.com/colab/docs/create-runtime), [https://docs.cloud.google.com/colab/docs/manage-access-runtime-template](https://docs.cloud.google.com/colab/docs/manage-access-runtime-template), [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes))
- constraint (evidence: [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template), [https://docs.cloud.google.com/colab/docs/create-runtime](https://docs.cloud.google.com/colab/docs/create-runtime), [https://docs.cloud.google.com/colab/docs/manage-access-runtime-template](https://docs.cloud.google.com/colab/docs/manage-access-runtime-template), [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes))
- encrypt (evidence: [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template), [https://docs.cloud.google.com/colab/docs/create-runtime](https://docs.cloud.google.com/colab/docs/create-runtime), [https://docs.cloud.google.com/colab/docs/manage-access-runtime-template](https://docs.cloud.google.com/colab/docs/manage-access-runtime-template), [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes))
- iam (evidence: [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template), [https://docs.cloud.google.com/colab/docs/create-runtime](https://docs.cloud.google.com/colab/docs/create-runtime), [https://docs.cloud.google.com/colab/docs/manage-access-runtime-template](https://docs.cloud.google.com/colab/docs/manage-access-runtime-template), [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes))
- key (evidence: [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template), [https://docs.cloud.google.com/colab/docs/create-runtime](https://docs.cloud.google.com/colab/docs/create-runtime), [https://docs.cloud.google.com/colab/docs/manage-access-runtime-template](https://docs.cloud.google.com/colab/docs/manage-access-runtime-template), [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes))
- kms (evidence: [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template), [https://docs.cloud.google.com/colab/docs/create-runtime](https://docs.cloud.google.com/colab/docs/create-runtime), [https://docs.cloud.google.com/colab/docs/manage-access-runtime-template](https://docs.cloud.google.com/colab/docs/manage-access-runtime-template), [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes))
- permission (evidence: [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template), [https://docs.cloud.google.com/colab/docs/create-runtime](https://docs.cloud.google.com/colab/docs/create-runtime), [https://docs.cloud.google.com/colab/docs/manage-access-runtime-template](https://docs.cloud.google.com/colab/docs/manage-access-runtime-template), [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes))
- policy (evidence: [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template), [https://docs.cloud.google.com/colab/docs/create-runtime](https://docs.cloud.google.com/colab/docs/create-runtime), [https://docs.cloud.google.com/colab/docs/manage-access-runtime-template](https://docs.cloud.google.com/colab/docs/manage-access-runtime-template), [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes))
- role (evidence: [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template), [https://docs.cloud.google.com/colab/docs/create-runtime](https://docs.cloud.google.com/colab/docs/create-runtime), [https://docs.cloud.google.com/colab/docs/manage-access-runtime-template](https://docs.cloud.google.com/colab/docs/manage-access-runtime-template), [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes))

## Official Evidence

- [https://docs.cloud.google.com/colab/docs/create-runtime](https://docs.cloud.google.com/colab/docs/create-runtime)
- [https://docs.cloud.google.com/colab/docs/create-runtime-template](https://docs.cloud.google.com/colab/docs/create-runtime-template)
- [https://docs.cloud.google.com/colab/docs/manage-access-runtime-template](https://docs.cloud.google.com/colab/docs/manage-access-runtime-template)
- [https://docs.cloud.google.com/colab/docs/runtimes](https://docs.cloud.google.com/colab/docs/runtimes)
