# Private Service Connect propagated connections

Product: Virtual Private Cloud
Feature slug: `private-service-connect-propagated-connections`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Private Service Connect propagated connections became generally available, enabling services in one consumer VPC spoke to be privately accessed from other spokes connected to the same Network Connectivity Center hub; Private Service Connect propagated connections allow services exposed through one consumer VPC spoke via Private Service Connect to be privately reached by other consumer VPC spokes connected to the same Network Connectivity Center hub.

## Lifecycle

- Latest feature date: 2025-02-26
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- private

## Official Evidence

- [https://docs.cloud.google.com/vpc/docs/about-peering-connections](https://docs.cloud.google.com/vpc/docs/about-peering-connections)
- [https://docs.cloud.google.com/vpc/docs/about-propagated-connections](https://docs.cloud.google.com/vpc/docs/about-propagated-connections)
- [https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer](https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-producer)
- [https://docs.cloud.google.com/vpc/docs/quota](https://docs.cloud.google.com/vpc/docs/quota)
