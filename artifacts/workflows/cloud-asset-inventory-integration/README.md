# Cloud Asset Inventory integration

Product: Workflows
Feature slug: `cloud-asset-inventory-integration`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Workflows resources are supported in Cloud Asset Inventory.

## Lifecycle

- Latest feature date: 2023-06-15
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/workflows/docs/resources](https://docs.cloud.google.com/workflows/docs/resources), [https://docs.cloud.google.com/workflows/docs/choose-app-integ-or-workflows](https://docs.cloud.google.com/workflows/docs/choose-app-integ-or-workflows), [https://docs.cloud.google.com/iam/docs/resources](https://docs.cloud.google.com/iam/docs/resources))
- auth (evidence: [https://docs.cloud.google.com/workflows/docs/resources](https://docs.cloud.google.com/workflows/docs/resources), [https://docs.cloud.google.com/workflows/docs/choose-app-integ-or-workflows](https://docs.cloud.google.com/workflows/docs/choose-app-integ-or-workflows), [https://docs.cloud.google.com/iam/docs/resources](https://docs.cloud.google.com/iam/docs/resources))
- iam (evidence: [https://docs.cloud.google.com/workflows/docs/resources](https://docs.cloud.google.com/workflows/docs/resources), [https://docs.cloud.google.com/workflows/docs/choose-app-integ-or-workflows](https://docs.cloud.google.com/workflows/docs/choose-app-integ-or-workflows), [https://docs.cloud.google.com/iam/docs/resources](https://docs.cloud.google.com/iam/docs/resources))
- identity (evidence: [https://docs.cloud.google.com/workflows/docs/resources](https://docs.cloud.google.com/workflows/docs/resources), [https://docs.cloud.google.com/workflows/docs/choose-app-integ-or-workflows](https://docs.cloud.google.com/workflows/docs/choose-app-integ-or-workflows), [https://docs.cloud.google.com/iam/docs/resources](https://docs.cloud.google.com/iam/docs/resources))
- permission (evidence: [https://docs.cloud.google.com/workflows/docs/resources](https://docs.cloud.google.com/workflows/docs/resources), [https://docs.cloud.google.com/workflows/docs/choose-app-integ-or-workflows](https://docs.cloud.google.com/workflows/docs/choose-app-integ-or-workflows), [https://docs.cloud.google.com/iam/docs/resources](https://docs.cloud.google.com/iam/docs/resources))
- security (evidence: [https://docs.cloud.google.com/workflows/docs/resources](https://docs.cloud.google.com/workflows/docs/resources), [https://docs.cloud.google.com/workflows/docs/choose-app-integ-or-workflows](https://docs.cloud.google.com/workflows/docs/choose-app-integ-or-workflows), [https://docs.cloud.google.com/iam/docs/resources](https://docs.cloud.google.com/iam/docs/resources))

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/resources](https://docs.cloud.google.com/iam/docs/resources)
- [https://docs.cloud.google.com/workflows/docs/choose-app-integ-or-workflows](https://docs.cloud.google.com/workflows/docs/choose-app-integ-or-workflows)
- [https://docs.cloud.google.com/workflows/docs/resources](https://docs.cloud.google.com/workflows/docs/resources)

## Validation Findings

- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
