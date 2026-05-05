# Expanded monitored resource types

Product: Cloud Logging
Feature slug: `expanded-monitored-resource-types`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Logging adds new monitored resource types including Cloud Bigtable, Cloud Dataflow, and Cloud Container Engine.

## Lifecycle

- Latest feature date: 2017-04-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/MonitoredResource](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/MonitoredResource), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry))
- certificate (evidence: [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/MonitoredResource](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/MonitoredResource), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry))
- firewall (evidence: [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/MonitoredResource](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/MonitoredResource), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry))
- iam (evidence: [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/MonitoredResource](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/MonitoredResource), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry))
- key (evidence: [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/MonitoredResource](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/MonitoredResource), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry))
- kms (evidence: [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/MonitoredResource](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/MonitoredResource), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry))
- logging (evidence: [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/MonitoredResource](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/MonitoredResource), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry))
- policy (evidence: [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/MonitoredResource](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/MonitoredResource), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry))
- role (evidence: [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/MonitoredResource](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/MonitoredResource), [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry))

## Official Evidence

- [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list)
- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry)
- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/MonitoredResource](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/MonitoredResource)
