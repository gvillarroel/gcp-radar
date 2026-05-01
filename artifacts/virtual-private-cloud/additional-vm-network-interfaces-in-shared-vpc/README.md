# Additional VM network interfaces in Shared VPC

Product: Virtual Private Cloud
Feature slug: `additional-vm-network-interfaces-in-shared-vpc`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

VPC now supports connecting VM network interfaces other than nic0 in Shared VPC, with this capability generally available for individual VM instances while template- and instance-group-based workflows remain in preview.

## Lifecycle

- Latest feature date: 2021-02-23
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- firewall
- permission
- policy
- private
- security

## Official Evidence

- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-within-vpc-networks](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/test-within-vpc-networks)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/tutorials/tutorial-troubleshooting-workflow](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/tutorials/tutorial-troubleshooting-workflow)
- [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- [https://docs.cloud.google.com/vpc/docs/add-dynamic-nics](https://docs.cloud.google.com/vpc/docs/add-dynamic-nics)
