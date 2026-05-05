# Legacy Stackdriver support for GKE

Product: Cloud Logging
Feature slug: `legacy-stackdriver-support-for-gke`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Legacy Stackdriver support for Google Kubernetes Engine provided older monitoring and logging integration for GKE; deprecated on 2019-12-11.

## Lifecycle

- Latest feature date: 2019-12-11
- Deprecation date: 2019-12-11
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration), [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation))
- armor (evidence: [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration), [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation))
- auth (evidence: [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration), [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation))
- certificate (evidence: [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration), [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation))
- credential (evidence: [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration), [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation))
- firewall (evidence: [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration), [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation))
- key (evidence: [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration), [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation))
- logging (evidence: [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration), [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation))
- policy (evidence: [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration), [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation))
- private (evidence: [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration), [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation))
- role (evidence: [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration), [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation))
- security (evidence: [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list), [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration), [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation))

## Official Evidence

- [https://docs.cloud.google.com/logging/docs/agent/logging/configuration](https://docs.cloud.google.com/logging/docs/agent/logging/configuration)
- [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation)
- [https://docs.cloud.google.com/logging/docs/api/v2/resource-list](https://docs.cloud.google.com/logging/docs/api/v2/resource-list)
