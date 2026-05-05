# Terraform support

Product: Managed Service for Microsoft Active Directory
Feature slug: `terraform-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Managed Microsoft AD supports creating instances with Terraform.

## Lifecycle

- Latest feature date: 2020-08-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory](https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory), [https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust](https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- allow (evidence: [https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory](https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory), [https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust](https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- auth (evidence: [https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory](https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory), [https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust](https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- authorization (evidence: [https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory](https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory), [https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust](https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- firewall (evidence: [https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory](https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory), [https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust](https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- iam (evidence: [https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory](https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory), [https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust](https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- identity (evidence: [https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory](https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory), [https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust](https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- key (evidence: [https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory](https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory), [https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust](https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- kms (evidence: [https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory](https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory), [https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust](https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- logging (evidence: [https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory](https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory), [https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust](https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- policy (evidence: [https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory](https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory), [https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust](https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- secret (evidence: [https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory](https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory), [https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust](https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))
- security (evidence: [https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory](https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory), [https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust](https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust), [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes))

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/conditions-resource-attributes](https://docs.cloud.google.com/iam/docs/conditions-resource-attributes)
- [https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust](https://docs.cloud.google.com/managed-microsoft-ad/docs/create-trust)
- [https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory](https://docs.cloud.google.com/managed-microsoft-ad/docs/part-1-deploy-active-directory)
