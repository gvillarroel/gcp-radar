# Plugin connection type configuration

Product: Guest Environment
Feature slug: `plugin-connection-type-configuration`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The guest agent adds a PluginConfig connection_type flag that forces extension connections to use UDS or TCP.

## Lifecycle

- Latest feature date: 2026-03-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- auth
- firewall
- key
- logging
- private
- role

## Official Evidence

- [https://docs.cloud.google.com/compute/docs/images/guest-agent](https://docs.cloud.google.com/compute/docs/images/guest-agent)
- [https://docs.cloud.google.com/compute/docs/images/guest-environment](https://docs.cloud.google.com/compute/docs/images/guest-environment)
- [https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker](https://docs.cloud.google.com/compute/docs/tutorials/high-availability-linux-pacemaker)
- [https://docs.cloud.google.com/compute/docs/tutorials/running-windows-server-failover-clustering](https://docs.cloud.google.com/compute/docs/tutorials/running-windows-server-failover-clustering)
