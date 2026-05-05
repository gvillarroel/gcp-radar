# Cloud Billing detailed export Cloud Logging log bucket granularity

Product: Cloud Billing
Feature slug: `cloud-billing-detailed-export-cloud-logging-log-bucket-granularity`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Billing detailed export now includes granular Cloud Logging log bucket cost data that can be filtered by the resource.global_name field.

## Lifecycle

- Latest feature date: 2024-06-04
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/billing/docs/how-to/gemini/ai-cost-summary](https://docs.cloud.google.com/billing/docs/how-to/gemini/ai-cost-summary), [https://docs.cloud.google.com/billing/docs/authentication](https://docs.cloud.google.com/billing/docs/authentication), [https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_catalog.CloudCatalogClient](https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_catalog.CloudCatalogClient))
- auth (evidence: [https://docs.cloud.google.com/billing/docs/how-to/gemini/ai-cost-summary](https://docs.cloud.google.com/billing/docs/how-to/gemini/ai-cost-summary), [https://docs.cloud.google.com/billing/docs/authentication](https://docs.cloud.google.com/billing/docs/authentication), [https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_catalog.CloudCatalogClient](https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_catalog.CloudCatalogClient))
- credential (evidence: [https://docs.cloud.google.com/billing/docs/how-to/gemini/ai-cost-summary](https://docs.cloud.google.com/billing/docs/how-to/gemini/ai-cost-summary), [https://docs.cloud.google.com/billing/docs/authentication](https://docs.cloud.google.com/billing/docs/authentication), [https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_catalog.CloudCatalogClient](https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_catalog.CloudCatalogClient))
- iam (evidence: [https://docs.cloud.google.com/billing/docs/how-to/gemini/ai-cost-summary](https://docs.cloud.google.com/billing/docs/how-to/gemini/ai-cost-summary), [https://docs.cloud.google.com/billing/docs/authentication](https://docs.cloud.google.com/billing/docs/authentication), [https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_catalog.CloudCatalogClient](https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_catalog.CloudCatalogClient))
- identity (evidence: [https://docs.cloud.google.com/billing/docs/how-to/gemini/ai-cost-summary](https://docs.cloud.google.com/billing/docs/how-to/gemini/ai-cost-summary), [https://docs.cloud.google.com/billing/docs/authentication](https://docs.cloud.google.com/billing/docs/authentication), [https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_catalog.CloudCatalogClient](https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_catalog.CloudCatalogClient))
- logging (evidence: [https://docs.cloud.google.com/billing/docs/how-to/gemini/ai-cost-summary](https://docs.cloud.google.com/billing/docs/how-to/gemini/ai-cost-summary), [https://docs.cloud.google.com/billing/docs/authentication](https://docs.cloud.google.com/billing/docs/authentication), [https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_catalog.CloudCatalogClient](https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_catalog.CloudCatalogClient))
- permission (evidence: [https://docs.cloud.google.com/billing/docs/how-to/gemini/ai-cost-summary](https://docs.cloud.google.com/billing/docs/how-to/gemini/ai-cost-summary), [https://docs.cloud.google.com/billing/docs/authentication](https://docs.cloud.google.com/billing/docs/authentication), [https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_catalog.CloudCatalogClient](https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_catalog.CloudCatalogClient))
- role (evidence: [https://docs.cloud.google.com/billing/docs/how-to/gemini/ai-cost-summary](https://docs.cloud.google.com/billing/docs/how-to/gemini/ai-cost-summary), [https://docs.cloud.google.com/billing/docs/authentication](https://docs.cloud.google.com/billing/docs/authentication), [https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_catalog.CloudCatalogClient](https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_catalog.CloudCatalogClient))

## Official Evidence

- [https://docs.cloud.google.com/billing/docs/authentication](https://docs.cloud.google.com/billing/docs/authentication)
- [https://docs.cloud.google.com/billing/docs/how-to/gemini/ai-cost-summary](https://docs.cloud.google.com/billing/docs/how-to/gemini/ai-cost-summary)
- [https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_catalog.CloudCatalogClient](https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.services.cloud_catalog.CloudCatalogClient)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:missing_exact_identifier_page` No supporting page directly names the exact identifier(s): resource.global_name.
