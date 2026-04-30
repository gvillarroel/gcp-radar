# VPC subnet jumbo frame MTU support

Product: Virtual Private Cloud
Feature slug: `vpc-subnet-jumbo-frame-mtu-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

VPC networks now support jumbo frames by allowing MTUs between 1300 and 8896 bytes for resources within the same subnet.

## Lifecycle

- Latest feature date: 2022-06-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- firewall
- private

## Official Evidence

- [https://docs.cloud.google.com/vpc/docs/change-mtu-vpc-network](https://docs.cloud.google.com/vpc/docs/change-mtu-vpc-network)
- [https://docs.cloud.google.com/vpc/docs/configure-jumbo-frame-mtu-vpc](https://docs.cloud.google.com/vpc/docs/configure-jumbo-frame-mtu-vpc)
- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/vpc/docs/vpc](https://docs.cloud.google.com/vpc/docs/vpc)
