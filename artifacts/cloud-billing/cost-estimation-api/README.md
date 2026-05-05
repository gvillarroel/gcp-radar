# Cost Estimation API

Product: Cloud Billing
Feature slug: `cost-estimation-api`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Cost Estimation API has been deprecated in favor of using the Google Cloud Pricing Calculator for workload cost estimates; A preview Cost Estimation API was introduced to return customer-specific workload cost estimates including negotiated discounts and committed-use pricing effects; deprecated on 2024-05-17.

## Lifecycle

- Latest feature date: 2022-09-12
- Deprecation date: 2024-05-17
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/billing/docs/how-to/estimate-costs](https://docs.cloud.google.com/billing/docs/how-to/estimate-costs), [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table), [https://docs.cloud.google.com/billing/docs/how-to/get-pricing-information-api](https://docs.cloud.google.com/billing/docs/how-to/get-pricing-information-api))
- iam (evidence: [https://docs.cloud.google.com/billing/docs/how-to/estimate-costs](https://docs.cloud.google.com/billing/docs/how-to/estimate-costs), [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table), [https://docs.cloud.google.com/billing/docs/how-to/get-pricing-information-api](https://docs.cloud.google.com/billing/docs/how-to/get-pricing-information-api))
- identity (evidence: [https://docs.cloud.google.com/billing/docs/how-to/estimate-costs](https://docs.cloud.google.com/billing/docs/how-to/estimate-costs), [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table), [https://docs.cloud.google.com/billing/docs/how-to/get-pricing-information-api](https://docs.cloud.google.com/billing/docs/how-to/get-pricing-information-api))
- permission (evidence: [https://docs.cloud.google.com/billing/docs/how-to/estimate-costs](https://docs.cloud.google.com/billing/docs/how-to/estimate-costs), [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table), [https://docs.cloud.google.com/billing/docs/how-to/get-pricing-information-api](https://docs.cloud.google.com/billing/docs/how-to/get-pricing-information-api))
- role (evidence: [https://docs.cloud.google.com/billing/docs/how-to/estimate-costs](https://docs.cloud.google.com/billing/docs/how-to/estimate-costs), [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table), [https://docs.cloud.google.com/billing/docs/how-to/get-pricing-information-api](https://docs.cloud.google.com/billing/docs/how-to/get-pricing-information-api))
- token (evidence: [https://docs.cloud.google.com/billing/docs/how-to/estimate-costs](https://docs.cloud.google.com/billing/docs/how-to/estimate-costs), [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table), [https://docs.cloud.google.com/billing/docs/how-to/get-pricing-information-api](https://docs.cloud.google.com/billing/docs/how-to/get-pricing-information-api))

## Official Evidence

- [https://docs.cloud.google.com/billing/docs/how-to/cost-table](https://docs.cloud.google.com/billing/docs/how-to/cost-table)
- [https://docs.cloud.google.com/billing/docs/how-to/estimate-costs](https://docs.cloud.google.com/billing/docs/how-to/estimate-costs)
- [https://docs.cloud.google.com/billing/docs/how-to/get-pricing-information-api](https://docs.cloud.google.com/billing/docs/how-to/get-pricing-information-api)
