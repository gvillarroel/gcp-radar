# RoCE VPC networks

Product: Cloud NGFW
Feature slug: `roce-vpc-networks`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

RoCE VPC networks support creating RDMA over converged ethernet networks and applying firewall rules to them; RoCE VPC networks support creating RDMA over converged ethernet networks and applying firewall rules to them.

## Lifecycle

- Latest feature date: 2025-11-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs](https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs), [https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints](https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints), [https://docs.cloud.google.com/firewall/docs/about-security-profiles](https://docs.cloud.google.com/firewall/docs/about-security-profiles), [https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation](https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation))
- allow (evidence: [https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs](https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs), [https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints](https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints), [https://docs.cloud.google.com/firewall/docs/about-security-profiles](https://docs.cloud.google.com/firewall/docs/about-security-profiles), [https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation](https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation))
- firewall (evidence: [https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs](https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs), [https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints](https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints), [https://docs.cloud.google.com/firewall/docs/about-security-profiles](https://docs.cloud.google.com/firewall/docs/about-security-profiles), [https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation](https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation))
- iam (evidence: [https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs](https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs), [https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints](https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints), [https://docs.cloud.google.com/firewall/docs/about-security-profiles](https://docs.cloud.google.com/firewall/docs/about-security-profiles), [https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation](https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation))
- identity (evidence: [https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs](https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs), [https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints](https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints), [https://docs.cloud.google.com/firewall/docs/about-security-profiles](https://docs.cloud.google.com/firewall/docs/about-security-profiles), [https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation](https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation))
- policy (evidence: [https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs](https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs), [https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints](https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints), [https://docs.cloud.google.com/firewall/docs/about-security-profiles](https://docs.cloud.google.com/firewall/docs/about-security-profiles), [https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation](https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation))
- private (evidence: [https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs](https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs), [https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints](https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints), [https://docs.cloud.google.com/firewall/docs/about-security-profiles](https://docs.cloud.google.com/firewall/docs/about-security-profiles), [https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation](https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation))
- role (evidence: [https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs](https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs), [https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints](https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints), [https://docs.cloud.google.com/firewall/docs/about-security-profiles](https://docs.cloud.google.com/firewall/docs/about-security-profiles), [https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation](https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation))
- security (evidence: [https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs](https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs), [https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints](https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints), [https://docs.cloud.google.com/firewall/docs/about-security-profiles](https://docs.cloud.google.com/firewall/docs/about-security-profiles), [https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation](https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation))
- threat (evidence: [https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs](https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs), [https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints](https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints), [https://docs.cloud.google.com/firewall/docs/about-security-profiles](https://docs.cloud.google.com/firewall/docs/about-security-profiles), [https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation](https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation))

## Official Evidence

- [https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints](https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints)
- [https://docs.cloud.google.com/firewall/docs/about-security-profiles](https://docs.cloud.google.com/firewall/docs/about-security-profiles)
- [https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs](https://docs.cloud.google.com/firewall/docs/create-manage-roce-vpcs)
- [https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation](https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation)
