# Ops Agent IIS integration

Product: Cloud Logging
Feature slug: `ops-agent-iis-integration`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Ops Agent can collect IIS logs and additional metrics.

## Lifecycle

- Latest feature date: 2022-05-26
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis))
- audit (evidence: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis))
- auth (evidence: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis))
- certificate (evidence: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis))
- iam (evidence: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis))
- identity (evidence: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis))
- key (evidence: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis))
- logging (evidence: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis))
- permission (evidence: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis))
- policy (evidence: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis))
- role (evidence: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis))
- security (evidence: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies), [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis))

## Official Evidence

- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration](https://docs.cloud.google.com/logging/docs/agent/ops-agent/configuration)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies](https://docs.cloud.google.com/logging/docs/agent/ops-agent/managing-agent-policies)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/iis)
