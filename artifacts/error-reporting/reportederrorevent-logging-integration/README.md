# ReportedErrorEvent logging integration

Product: Error Reporting
Feature slug: `reportederrorevent-logging-integration`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

API error events written as ReportedErrorEvent instances generate properly formatted error messages in Stackdriver Logging.

## Lifecycle

- Latest feature date: 2019-05-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- audit (evidence: [https://docs.cloud.google.com/error-reporting/docs/formatting-error-messages](https://docs.cloud.google.com/error-reporting/docs/formatting-error-messages), [https://docs.cloud.google.com/error-reporting/docs/setup/java](https://docs.cloud.google.com/error-reporting/docs/setup/java), [https://docs.cloud.google.com/error-reporting/docs/troubleshooting](https://docs.cloud.google.com/error-reporting/docs/troubleshooting))
- logging (evidence: [https://docs.cloud.google.com/error-reporting/docs/formatting-error-messages](https://docs.cloud.google.com/error-reporting/docs/formatting-error-messages), [https://docs.cloud.google.com/error-reporting/docs/setup/java](https://docs.cloud.google.com/error-reporting/docs/setup/java), [https://docs.cloud.google.com/error-reporting/docs/troubleshooting](https://docs.cloud.google.com/error-reporting/docs/troubleshooting))
- private (evidence: [https://docs.cloud.google.com/error-reporting/docs/formatting-error-messages](https://docs.cloud.google.com/error-reporting/docs/formatting-error-messages), [https://docs.cloud.google.com/error-reporting/docs/setup/java](https://docs.cloud.google.com/error-reporting/docs/setup/java), [https://docs.cloud.google.com/error-reporting/docs/troubleshooting](https://docs.cloud.google.com/error-reporting/docs/troubleshooting))

## Official Evidence

- [https://docs.cloud.google.com/error-reporting/docs/formatting-error-messages](https://docs.cloud.google.com/error-reporting/docs/formatting-error-messages)
- [https://docs.cloud.google.com/error-reporting/docs/setup/java](https://docs.cloud.google.com/error-reporting/docs/setup/java)
- [https://docs.cloud.google.com/error-reporting/docs/troubleshooting](https://docs.cloud.google.com/error-reporting/docs/troubleshooting)
