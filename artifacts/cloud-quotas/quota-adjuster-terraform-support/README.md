# Quota adjuster Terraform support

Product: Cloud Quotas
Feature slug: `quota-adjuster-terraform-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Quota adjuster can be managed with Terraform.

## Lifecycle

- Latest feature date: 2025-02-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/docs/quotas/quota-adjuster](https://docs.cloud.google.com/docs/quotas/quota-adjuster), [https://docs.cloud.google.com/docs/quotas/terraform-support-for-cloud-quotas](https://docs.cloud.google.com/docs/quotas/terraform-support-for-cloud-quotas), [https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples](https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples), [https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest/google.cloud.cloudquotas_v1.services.cloud_quotas.CloudQuotasAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest/google.cloud.cloudquotas_v1.services.cloud_quotas.CloudQuotasAsyncClient))
- auth (evidence: [https://docs.cloud.google.com/docs/quotas/quota-adjuster](https://docs.cloud.google.com/docs/quotas/quota-adjuster), [https://docs.cloud.google.com/docs/quotas/terraform-support-for-cloud-quotas](https://docs.cloud.google.com/docs/quotas/terraform-support-for-cloud-quotas), [https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples](https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples), [https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest/google.cloud.cloudquotas_v1.services.cloud_quotas.CloudQuotasAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest/google.cloud.cloudquotas_v1.services.cloud_quotas.CloudQuotasAsyncClient))
- certificate (evidence: [https://docs.cloud.google.com/docs/quotas/quota-adjuster](https://docs.cloud.google.com/docs/quotas/quota-adjuster), [https://docs.cloud.google.com/docs/quotas/terraform-support-for-cloud-quotas](https://docs.cloud.google.com/docs/quotas/terraform-support-for-cloud-quotas), [https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples](https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples), [https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest/google.cloud.cloudquotas_v1.services.cloud_quotas.CloudQuotasAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest/google.cloud.cloudquotas_v1.services.cloud_quotas.CloudQuotasAsyncClient))
- firewall (evidence: [https://docs.cloud.google.com/docs/quotas/quota-adjuster](https://docs.cloud.google.com/docs/quotas/quota-adjuster), [https://docs.cloud.google.com/docs/quotas/terraform-support-for-cloud-quotas](https://docs.cloud.google.com/docs/quotas/terraform-support-for-cloud-quotas), [https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples](https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples), [https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest/google.cloud.cloudquotas_v1.services.cloud_quotas.CloudQuotasAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest/google.cloud.cloudquotas_v1.services.cloud_quotas.CloudQuotasAsyncClient))
- key (evidence: [https://docs.cloud.google.com/docs/quotas/quota-adjuster](https://docs.cloud.google.com/docs/quotas/quota-adjuster), [https://docs.cloud.google.com/docs/quotas/terraform-support-for-cloud-quotas](https://docs.cloud.google.com/docs/quotas/terraform-support-for-cloud-quotas), [https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples](https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples), [https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest/google.cloud.cloudquotas_v1.services.cloud_quotas.CloudQuotasAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest/google.cloud.cloudquotas_v1.services.cloud_quotas.CloudQuotasAsyncClient))
- logging (evidence: [https://docs.cloud.google.com/docs/quotas/quota-adjuster](https://docs.cloud.google.com/docs/quotas/quota-adjuster), [https://docs.cloud.google.com/docs/quotas/terraform-support-for-cloud-quotas](https://docs.cloud.google.com/docs/quotas/terraform-support-for-cloud-quotas), [https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples](https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples), [https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest/google.cloud.cloudquotas_v1.services.cloud_quotas.CloudQuotasAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest/google.cloud.cloudquotas_v1.services.cloud_quotas.CloudQuotasAsyncClient))
- policy (evidence: [https://docs.cloud.google.com/docs/quotas/quota-adjuster](https://docs.cloud.google.com/docs/quotas/quota-adjuster), [https://docs.cloud.google.com/docs/quotas/terraform-support-for-cloud-quotas](https://docs.cloud.google.com/docs/quotas/terraform-support-for-cloud-quotas), [https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples](https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples), [https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest/google.cloud.cloudquotas_v1.services.cloud_quotas.CloudQuotasAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest/google.cloud.cloudquotas_v1.services.cloud_quotas.CloudQuotasAsyncClient))
- security (evidence: [https://docs.cloud.google.com/docs/quotas/quota-adjuster](https://docs.cloud.google.com/docs/quotas/quota-adjuster), [https://docs.cloud.google.com/docs/quotas/terraform-support-for-cloud-quotas](https://docs.cloud.google.com/docs/quotas/terraform-support-for-cloud-quotas), [https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples](https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples), [https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest/google.cloud.cloudquotas_v1.services.cloud_quotas.CloudQuotasAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest/google.cloud.cloudquotas_v1.services.cloud_quotas.CloudQuotasAsyncClient))

## Official Evidence

- [https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples](https://docs.cloud.google.com/docs/quotas/gcloud-cli-examples)
- [https://docs.cloud.google.com/docs/quotas/quota-adjuster](https://docs.cloud.google.com/docs/quotas/quota-adjuster)
- [https://docs.cloud.google.com/docs/quotas/terraform-support-for-cloud-quotas](https://docs.cloud.google.com/docs/quotas/terraform-support-for-cloud-quotas)
- [https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest/google.cloud.cloudquotas_v1.services.cloud_quotas.CloudQuotasAsyncClient](https://docs.cloud.google.com/python/docs/reference/google-cloud-cloudquotas/latest/google.cloud.cloudquotas_v1.services.cloud_quotas.CloudQuotasAsyncClient)
