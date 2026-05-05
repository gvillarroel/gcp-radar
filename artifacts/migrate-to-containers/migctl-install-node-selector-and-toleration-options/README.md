# migctl install node selector and toleration options

Product: Migrate to Containers
Feature slug: `migctl-install-node-selector-and-toleration-options`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The migctl setup install command can target specific nodes or node pools using node selectors and tolerations.

## Lifecycle

- Latest feature date: 2020-07-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- armor (evidence: [https://docs.cloud.google.com/migrate/containers/docs/troubleshooting/app-armor-failure](https://docs.cloud.google.com/migrate/containers/docs/troubleshooting/app-armor-failure), [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli-reference-linux](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli-reference-linux))
- auth (evidence: [https://docs.cloud.google.com/migrate/containers/docs/troubleshooting/app-armor-failure](https://docs.cloud.google.com/migrate/containers/docs/troubleshooting/app-armor-failure), [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli-reference-linux](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli-reference-linux))
- credential (evidence: [https://docs.cloud.google.com/migrate/containers/docs/troubleshooting/app-armor-failure](https://docs.cloud.google.com/migrate/containers/docs/troubleshooting/app-armor-failure), [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli-reference-linux](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli-reference-linux))
- key (evidence: [https://docs.cloud.google.com/migrate/containers/docs/troubleshooting/app-armor-failure](https://docs.cloud.google.com/migrate/containers/docs/troubleshooting/app-armor-failure), [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm), [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli-reference-linux](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli-reference-linux))

## Official Evidence

- [https://docs.cloud.google.com/migrate/containers/docs/m2c-cli-reference-linux](https://docs.cloud.google.com/migrate/containers/docs/m2c-cli-reference-linux)
- [https://docs.cloud.google.com/migrate/containers/docs/migrate-vm](https://docs.cloud.google.com/migrate/containers/docs/migrate-vm)
- [https://docs.cloud.google.com/migrate/containers/docs/troubleshooting/app-armor-failure](https://docs.cloud.google.com/migrate/containers/docs/troubleshooting/app-armor-failure)
