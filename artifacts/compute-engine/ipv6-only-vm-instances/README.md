# IPv6-only VM instances

Product: Compute Engine
Feature slug: `ipv6-only-vm-instances`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Compute Engine can create VM instances that use only IPv6 addresses without IPv4 addresses.

## Lifecycle

- Latest feature date: 2024-12-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://developers.google.com/compute/docs/instances/create-start-instance](https://developers.google.com/compute/docs/instances/create-start-instance), [https://docs.cloud.google.com/compute/docs/instances/create-start-instance](https://docs.cloud.google.com/compute/docs/instances/create-start-instance), [https://docs.cloud.google.com/network-connectivity/docs/vpn/tutorials/configure-vpn-between-onprem-cloud](https://docs.cloud.google.com/network-connectivity/docs/vpn/tutorials/configure-vpn-between-onprem-cloud))
- iam (evidence: [https://developers.google.com/compute/docs/instances/create-start-instance](https://developers.google.com/compute/docs/instances/create-start-instance), [https://docs.cloud.google.com/compute/docs/instances/create-start-instance](https://docs.cloud.google.com/compute/docs/instances/create-start-instance), [https://docs.cloud.google.com/network-connectivity/docs/vpn/tutorials/configure-vpn-between-onprem-cloud](https://docs.cloud.google.com/network-connectivity/docs/vpn/tutorials/configure-vpn-between-onprem-cloud))
- logging (evidence: [https://developers.google.com/compute/docs/instances/create-start-instance](https://developers.google.com/compute/docs/instances/create-start-instance), [https://docs.cloud.google.com/compute/docs/instances/create-start-instance](https://docs.cloud.google.com/compute/docs/instances/create-start-instance), [https://docs.cloud.google.com/network-connectivity/docs/vpn/tutorials/configure-vpn-between-onprem-cloud](https://docs.cloud.google.com/network-connectivity/docs/vpn/tutorials/configure-vpn-between-onprem-cloud))
- permission (evidence: [https://developers.google.com/compute/docs/instances/create-start-instance](https://developers.google.com/compute/docs/instances/create-start-instance), [https://docs.cloud.google.com/compute/docs/instances/create-start-instance](https://docs.cloud.google.com/compute/docs/instances/create-start-instance), [https://docs.cloud.google.com/network-connectivity/docs/vpn/tutorials/configure-vpn-between-onprem-cloud](https://docs.cloud.google.com/network-connectivity/docs/vpn/tutorials/configure-vpn-between-onprem-cloud))
- role (evidence: [https://developers.google.com/compute/docs/instances/create-start-instance](https://developers.google.com/compute/docs/instances/create-start-instance), [https://docs.cloud.google.com/compute/docs/instances/create-start-instance](https://docs.cloud.google.com/compute/docs/instances/create-start-instance), [https://docs.cloud.google.com/network-connectivity/docs/vpn/tutorials/configure-vpn-between-onprem-cloud](https://docs.cloud.google.com/network-connectivity/docs/vpn/tutorials/configure-vpn-between-onprem-cloud))
- security (evidence: [https://developers.google.com/compute/docs/instances/create-start-instance](https://developers.google.com/compute/docs/instances/create-start-instance), [https://docs.cloud.google.com/compute/docs/instances/create-start-instance](https://docs.cloud.google.com/compute/docs/instances/create-start-instance), [https://docs.cloud.google.com/network-connectivity/docs/vpn/tutorials/configure-vpn-between-onprem-cloud](https://docs.cloud.google.com/network-connectivity/docs/vpn/tutorials/configure-vpn-between-onprem-cloud))

## Official Evidence

- [https://developers.google.com/compute/docs/instances/create-start-instance](https://developers.google.com/compute/docs/instances/create-start-instance)
- [https://docs.cloud.google.com/compute/docs/instances/create-start-instance](https://docs.cloud.google.com/compute/docs/instances/create-start-instance)
- [https://docs.cloud.google.com/network-connectivity/docs/vpn/tutorials/configure-vpn-between-onprem-cloud](https://docs.cloud.google.com/network-connectivity/docs/vpn/tutorials/configure-vpn-between-onprem-cloud)
