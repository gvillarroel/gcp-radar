# Monitoring API v2

Product: Cloud Monitoring
Feature slug: `monitoring-api-v2`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Monitoring API v2 is deprecated in favor of newer API versions; deprecated on 2016-09-11.

## Lifecycle

- Latest feature date: 2016-09-11
- Deprecation date: 2016-09-11
- Status: deprecation_noted

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- certificate
- credential
- iam
- key
- logging
- permission
- policy
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/monitoring/agent/monitoring](https://docs.cloud.google.com/monitoring/agent/monitoring)
- [https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies](https://docs.cloud.google.com/monitoring/agent/ops-agent/agent-vmem-policies)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog)

## Validation Findings

- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
