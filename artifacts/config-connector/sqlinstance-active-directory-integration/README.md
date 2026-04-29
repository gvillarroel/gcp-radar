# SQLInstance Active Directory integration

Product: Config Connector
Feature slug: `sqlinstance-active-directory-integration`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports the settings.activeDirectoryConfig field for SQLInstance resources.

## Lifecycle

- Latest feature date: 2022-06-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- iam

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources)
- [https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources](https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources)
- [https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview](https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
