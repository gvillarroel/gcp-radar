# Logging API v1

Product: Cloud Logging
Feature slug: `logging-api-v1`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Stackdriver Logging API v1 is deprecated and users should migrate to the v2 API; deprecated on March 30, 2017.

## Lifecycle

- Latest feature date: 2016-10-20
- Deprecation date: March 30, 2017
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting](https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting), [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation), [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list))
- armor (evidence: [https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting](https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting), [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation), [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list))
- auth (evidence: [https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting](https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting), [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation), [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list))
- certificate (evidence: [https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting](https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting), [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation), [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list))
- firewall (evidence: [https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting](https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting), [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation), [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list))
- iam (evidence: [https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting](https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting), [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation), [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list))
- key (evidence: [https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting](https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting), [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation), [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list))
- kms (evidence: [https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting](https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting), [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation), [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list))
- logging (evidence: [https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting](https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting), [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation), [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list))
- policy (evidence: [https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting](https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting), [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation), [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list))
- role (evidence: [https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting](https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting), [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation), [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list))
- secret (evidence: [https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting](https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting), [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation), [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list))
- security (evidence: [https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting](https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting), [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation), [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list))

## Official Evidence

- [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation)
- [https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting](https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting)
- [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list)
