# Guest agent cleanup job

Product: Guest Environment
Feature slug: `guest-agent-cleanup-job`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The guest agent runs a daily cleanup job and another at service initialization to remove leftover plugin files and state.

## Lifecycle

- Latest feature date: 2026-03-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- authorization
- key
- logging
- permission
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/compute/docs/images/guest-agent](https://docs.cloud.google.com/compute/docs/images/guest-agent)
- [https://docs.cloud.google.com/compute/docs/images/guest-environment](https://docs.cloud.google.com/compute/docs/images/guest-environment)
- [https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes](https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes)
- [https://docs.cloud.google.com/compute/docs/tutorials/running-windows-server-failover-clustering](https://docs.cloud.google.com/compute/docs/tutorials/running-windows-server-failover-clustering)
