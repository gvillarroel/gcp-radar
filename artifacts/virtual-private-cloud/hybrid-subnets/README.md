# Hybrid subnets

Product: Virtual Private Cloud
Feature slug: `hybrid-subnets`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Hybrid Subnets allows a VPC network to share a CIDR block with a connected on-premises network so workloads can migrate to Google Cloud without changing IP addresses; Hybrid subnets allow an on-premises subnet and a VPC subnet to function as a single logical subnet so workloads can be moved gradually from on-premises to VPC while preserving IP addresses.

## Lifecycle

- Latest feature date: 2026-04-03
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- iam
- permission
- private
- role

## Official Evidence

- [https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview](https://docs.cloud.google.com/network-intelligence-center/docs/network-topology/concepts/overview)
- [https://docs.cloud.google.com/vpc/docs/overview](https://docs.cloud.google.com/vpc/docs/overview)
- [https://docs.cloud.google.com/vpc/docs/shared-vpc](https://docs.cloud.google.com/vpc/docs/shared-vpc)
- [https://docs.cloud.google.com/vpc/docs/subnets](https://docs.cloud.google.com/vpc/docs/subnets)
