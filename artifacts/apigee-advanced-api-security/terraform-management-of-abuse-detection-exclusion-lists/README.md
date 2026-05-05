# Terraform management of Abuse Detection exclusion lists

Product: Apigee Advanced API Security
Feature slug: `terraform-management-of-abuse-detection-exclusion-lists`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Terraform support was added to create and manage Abuse Detection exclusion lists for excluding safe CIDR ranges or IP addresses from incident reporting.

## Lifecycle

- Latest feature date: 2026-01-12
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection](https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection), [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/terraform-overview](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/terraform-overview), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions))
- allow (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection](https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection), [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/terraform-overview](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/terraform-overview), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions))
- audit (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection](https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection), [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/terraform-overview](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/terraform-overview), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions))
- auth (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection](https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection), [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/terraform-overview](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/terraform-overview), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions))
- constraint (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection](https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection), [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/terraform-overview](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/terraform-overview), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions))
- iam (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection](https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection), [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/terraform-overview](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/terraform-overview), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions))
- identity (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection](https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection), [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/terraform-overview](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/terraform-overview), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions))
- key (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection](https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection), [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/terraform-overview](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/terraform-overview), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions))
- logging (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection](https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection), [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/terraform-overview](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/terraform-overview), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions))
- permission (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection](https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection), [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/terraform-overview](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/terraform-overview), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions))
- policy (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection](https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection), [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/terraform-overview](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/terraform-overview), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions))
- role (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection](https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection), [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/terraform-overview](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/terraform-overview), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions))
- security (evidence: [https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection](https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection), [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/terraform-overview](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/terraform-overview), [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions))

## Official Evidence

- [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/terraform-overview](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/terraform-overview)
- [https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection](https://docs.cloud.google.com/apigee/docs/api-security/abuse-detection)
- [https://docs.cloud.google.com/apigee/docs/api-security/security-actions](https://docs.cloud.google.com/apigee/docs/api-security/security-actions)
