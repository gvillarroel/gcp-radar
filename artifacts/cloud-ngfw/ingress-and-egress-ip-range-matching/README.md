# Ingress and egress IP range matching

Product: Cloud NGFW
Feature slug: `ingress-and-egress-ip-range-matching`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Firewall rules can specify source IP ranges for egress traffic and destination IP ranges for ingress traffic.

## Lifecycle

- Latest feature date: 2023-04-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- firewall
- iam
- logging
- permission
- policy
- private
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/firewall/docs/configure-global-fw-policies](https://docs.cloud.google.com/firewall/docs/configure-global-fw-policies)
- [https://docs.cloud.google.com/firewall/docs/quickstarts/configure-hfwpolicy-allow-egress-vpc](https://docs.cloud.google.com/firewall/docs/quickstarts/configure-hfwpolicy-allow-egress-vpc)
- [https://docs.cloud.google.com/firewall/docs/quickstarts/configure-nwfwpolicy-fqdn-egress](https://docs.cloud.google.com/firewall/docs/quickstarts/configure-nwfwpolicy-fqdn-egress)
- [https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation](https://docs.cloud.google.com/firewall/docs/tutorials/configure-fwpolicy-deny-egress-geolocation)
