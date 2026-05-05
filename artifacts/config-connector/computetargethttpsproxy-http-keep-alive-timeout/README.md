# ComputeTargetHTTPSProxy HTTP keep-alive timeout

Product: Config Connector
Feature slug: `computetargethttpsproxy-http-keep-alive-timeout`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports configuring HTTP keep-alive timeout on ComputeTargetHTTPSProxy resources.

## Lifecycle

- Latest feature date: 2023-08-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting), [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts), [https://docs.cloud.google.com/config-connector/docs/overview](https://docs.cloud.google.com/config-connector/docs/overview))
- auth (evidence: [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting), [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts), [https://docs.cloud.google.com/config-connector/docs/overview](https://docs.cloud.google.com/config-connector/docs/overview))
- iam (evidence: [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting), [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts), [https://docs.cloud.google.com/config-connector/docs/overview](https://docs.cloud.google.com/config-connector/docs/overview))
- identity (evidence: [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting), [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts), [https://docs.cloud.google.com/config-connector/docs/overview](https://docs.cloud.google.com/config-connector/docs/overview))
- permission (evidence: [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting), [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts), [https://docs.cloud.google.com/config-connector/docs/overview](https://docs.cloud.google.com/config-connector/docs/overview))
- policy (evidence: [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting), [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts), [https://docs.cloud.google.com/config-connector/docs/overview](https://docs.cloud.google.com/config-connector/docs/overview))
- security (evidence: [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting), [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts), [https://docs.cloud.google.com/config-connector/docs/overview](https://docs.cloud.google.com/config-connector/docs/overview))
- token (evidence: [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting), [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts), [https://docs.cloud.google.com/config-connector/docs/overview](https://docs.cloud.google.com/config-connector/docs/overview))

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts)
- [https://docs.cloud.google.com/config-connector/docs/overview](https://docs.cloud.google.com/config-connector/docs/overview)
- [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
