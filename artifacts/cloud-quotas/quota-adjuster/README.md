# Quota adjuster

Product: Cloud Quotas
Feature slug: `quota-adjuster`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Quota adjuster automatically manages quota settings through the API, gcloud CLI, and client libraries; Quota adjuster automatically manages quota settings in Cloud Quotas.

## Lifecycle

- Latest feature date: 2025-01-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/docs/quotas/quota-adjuster](https://docs.cloud.google.com/docs/quotas/quota-adjuster), [https://docs.cloud.google.com/docs/quotas/api-overview](https://docs.cloud.google.com/docs/quotas/api-overview), [https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples](https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples), [https://docs.cloud.google.com/docs/quotas/terminology](https://docs.cloud.google.com/docs/quotas/terminology))
- audit (evidence: [https://docs.cloud.google.com/docs/quotas/quota-adjuster](https://docs.cloud.google.com/docs/quotas/quota-adjuster), [https://docs.cloud.google.com/docs/quotas/api-overview](https://docs.cloud.google.com/docs/quotas/api-overview), [https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples](https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples), [https://docs.cloud.google.com/docs/quotas/terminology](https://docs.cloud.google.com/docs/quotas/terminology))
- auth (evidence: [https://docs.cloud.google.com/docs/quotas/quota-adjuster](https://docs.cloud.google.com/docs/quotas/quota-adjuster), [https://docs.cloud.google.com/docs/quotas/api-overview](https://docs.cloud.google.com/docs/quotas/api-overview), [https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples](https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples), [https://docs.cloud.google.com/docs/quotas/terminology](https://docs.cloud.google.com/docs/quotas/terminology))
- certificate (evidence: [https://docs.cloud.google.com/docs/quotas/quota-adjuster](https://docs.cloud.google.com/docs/quotas/quota-adjuster), [https://docs.cloud.google.com/docs/quotas/api-overview](https://docs.cloud.google.com/docs/quotas/api-overview), [https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples](https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples), [https://docs.cloud.google.com/docs/quotas/terminology](https://docs.cloud.google.com/docs/quotas/terminology))
- firewall (evidence: [https://docs.cloud.google.com/docs/quotas/quota-adjuster](https://docs.cloud.google.com/docs/quotas/quota-adjuster), [https://docs.cloud.google.com/docs/quotas/api-overview](https://docs.cloud.google.com/docs/quotas/api-overview), [https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples](https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples), [https://docs.cloud.google.com/docs/quotas/terminology](https://docs.cloud.google.com/docs/quotas/terminology))
- iam (evidence: [https://docs.cloud.google.com/docs/quotas/quota-adjuster](https://docs.cloud.google.com/docs/quotas/quota-adjuster), [https://docs.cloud.google.com/docs/quotas/api-overview](https://docs.cloud.google.com/docs/quotas/api-overview), [https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples](https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples), [https://docs.cloud.google.com/docs/quotas/terminology](https://docs.cloud.google.com/docs/quotas/terminology))
- key (evidence: [https://docs.cloud.google.com/docs/quotas/quota-adjuster](https://docs.cloud.google.com/docs/quotas/quota-adjuster), [https://docs.cloud.google.com/docs/quotas/api-overview](https://docs.cloud.google.com/docs/quotas/api-overview), [https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples](https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples), [https://docs.cloud.google.com/docs/quotas/terminology](https://docs.cloud.google.com/docs/quotas/terminology))
- logging (evidence: [https://docs.cloud.google.com/docs/quotas/quota-adjuster](https://docs.cloud.google.com/docs/quotas/quota-adjuster), [https://docs.cloud.google.com/docs/quotas/api-overview](https://docs.cloud.google.com/docs/quotas/api-overview), [https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples](https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples), [https://docs.cloud.google.com/docs/quotas/terminology](https://docs.cloud.google.com/docs/quotas/terminology))
- permission (evidence: [https://docs.cloud.google.com/docs/quotas/quota-adjuster](https://docs.cloud.google.com/docs/quotas/quota-adjuster), [https://docs.cloud.google.com/docs/quotas/api-overview](https://docs.cloud.google.com/docs/quotas/api-overview), [https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples](https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples), [https://docs.cloud.google.com/docs/quotas/terminology](https://docs.cloud.google.com/docs/quotas/terminology))
- policy (evidence: [https://docs.cloud.google.com/docs/quotas/quota-adjuster](https://docs.cloud.google.com/docs/quotas/quota-adjuster), [https://docs.cloud.google.com/docs/quotas/api-overview](https://docs.cloud.google.com/docs/quotas/api-overview), [https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples](https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples), [https://docs.cloud.google.com/docs/quotas/terminology](https://docs.cloud.google.com/docs/quotas/terminology))
- role (evidence: [https://docs.cloud.google.com/docs/quotas/quota-adjuster](https://docs.cloud.google.com/docs/quotas/quota-adjuster), [https://docs.cloud.google.com/docs/quotas/api-overview](https://docs.cloud.google.com/docs/quotas/api-overview), [https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples](https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples), [https://docs.cloud.google.com/docs/quotas/terminology](https://docs.cloud.google.com/docs/quotas/terminology))
- security (evidence: [https://docs.cloud.google.com/docs/quotas/quota-adjuster](https://docs.cloud.google.com/docs/quotas/quota-adjuster), [https://docs.cloud.google.com/docs/quotas/api-overview](https://docs.cloud.google.com/docs/quotas/api-overview), [https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples](https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples), [https://docs.cloud.google.com/docs/quotas/terminology](https://docs.cloud.google.com/docs/quotas/terminology))

## Official Evidence

- [https://docs.cloud.google.com/docs/quotas/api-overview](https://docs.cloud.google.com/docs/quotas/api-overview)
- [https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples](https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples)
- [https://docs.cloud.google.com/docs/quotas/quota-adjuster](https://docs.cloud.google.com/docs/quotas/quota-adjuster)
- [https://docs.cloud.google.com/docs/quotas/terminology](https://docs.cloud.google.com/docs/quotas/terminology)
