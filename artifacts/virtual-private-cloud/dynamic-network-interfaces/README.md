# Dynamic Network Interfaces

Product: Virtual Private Cloud
Feature slug: `dynamic-network-interfaces`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Enables adding or removing network interfaces on a VM instance without restart or recreation, with support for up to 16 interfaces via Dynamic NICs; Dynamic Network Interfaces allow adding or removing VM network interfaces without restarting or recreating the instance, including support for additional interface capacity through Dynamic NICs.

## Lifecycle

- Latest feature date: 2025-10-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/vpc/docs/add-dynamic-nics](https://docs.cloud.google.com/vpc/docs/add-dynamic-nics), [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-between-networks](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-between-networks), [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview), [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests))
- allow (evidence: [https://docs.cloud.google.com/vpc/docs/add-dynamic-nics](https://docs.cloud.google.com/vpc/docs/add-dynamic-nics), [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-between-networks](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-between-networks), [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview), [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests))
- constraint (evidence: [https://docs.cloud.google.com/vpc/docs/add-dynamic-nics](https://docs.cloud.google.com/vpc/docs/add-dynamic-nics), [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-between-networks](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-between-networks), [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview), [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests))
- firewall (evidence: [https://docs.cloud.google.com/vpc/docs/add-dynamic-nics](https://docs.cloud.google.com/vpc/docs/add-dynamic-nics), [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-between-networks](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-between-networks), [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview), [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests))
- policy (evidence: [https://docs.cloud.google.com/vpc/docs/add-dynamic-nics](https://docs.cloud.google.com/vpc/docs/add-dynamic-nics), [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-between-networks](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-between-networks), [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview), [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests))
- private (evidence: [https://docs.cloud.google.com/vpc/docs/add-dynamic-nics](https://docs.cloud.google.com/vpc/docs/add-dynamic-nics), [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-between-networks](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-between-networks), [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview), [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests))

## Official Evidence

- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/overview)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-between-networks](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-between-networks)
- [https://docs.cloud.google.com/vpc/docs/add-dynamic-nics](https://docs.cloud.google.com/vpc/docs/add-dynamic-nics)
