# HealthcareFHIRStore delete notification previous resource

Product: Config Connector
Feature slug: `healthcarefhirstore-delete-notification-previous-resource`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports sending the previous resource on delete notifications from HealthcareFHIRStore resources.

## Lifecycle

- Latest feature date: 2023-09-06
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/config-connector/docs/how-to/getting-started](https://docs.cloud.google.com/config-connector/docs/how-to/getting-started), [https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources](https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources), [https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall](https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall))
- firewall (evidence: [https://docs.cloud.google.com/config-connector/docs/how-to/getting-started](https://docs.cloud.google.com/config-connector/docs/how-to/getting-started), [https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources](https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources), [https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall](https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall))
- iam (evidence: [https://docs.cloud.google.com/config-connector/docs/how-to/getting-started](https://docs.cloud.google.com/config-connector/docs/how-to/getting-started), [https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources](https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources), [https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall](https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall))
- identity (evidence: [https://docs.cloud.google.com/config-connector/docs/how-to/getting-started](https://docs.cloud.google.com/config-connector/docs/how-to/getting-started), [https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources](https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources), [https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall](https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall))
- key (evidence: [https://docs.cloud.google.com/config-connector/docs/how-to/getting-started](https://docs.cloud.google.com/config-connector/docs/how-to/getting-started), [https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources](https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources), [https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall](https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall))
- policy (evidence: [https://docs.cloud.google.com/config-connector/docs/how-to/getting-started](https://docs.cloud.google.com/config-connector/docs/how-to/getting-started), [https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources](https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources), [https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall](https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall))
- role (evidence: [https://docs.cloud.google.com/config-connector/docs/how-to/getting-started](https://docs.cloud.google.com/config-connector/docs/how-to/getting-started), [https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources](https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources), [https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall](https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall))
- secret (evidence: [https://docs.cloud.google.com/config-connector/docs/how-to/getting-started](https://docs.cloud.google.com/config-connector/docs/how-to/getting-started), [https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources](https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources), [https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall](https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall))

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/how-to/getting-started](https://docs.cloud.google.com/config-connector/docs/how-to/getting-started)
- [https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall](https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall)
- [https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources](https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
