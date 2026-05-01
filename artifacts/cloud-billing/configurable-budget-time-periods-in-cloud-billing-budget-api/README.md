# Configurable budget time periods in Cloud Billing Budget API

Product: Cloud Billing
Feature slug: `configurable-budget-time-periods-in-cloud-billing-budget-api`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Adds support in the Budget API for non-monthly budget periods using usage_period with CalendarPeriod or CustomPeriod values.

## Lifecycle

- Latest feature date: 2021-04-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- credential
- iam
- key
- permission
- role

## Official Evidence

- [https://docs.cloud.google.com/billing/docs/how-to/budgets](https://docs.cloud.google.com/billing/docs/how-to/budgets)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceGrpc.BudgetServiceBlockingStub](https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceGrpc.BudgetServiceBlockingStub)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceGrpc.BudgetServiceBlockingV2Stub](https://docs.cloud.google.com/java/docs/reference/google-cloud-billingbudgets/latest/com.google.cloud.billing.budgets.v1.BudgetServiceGrpc.BudgetServiceBlockingV2Stub)
