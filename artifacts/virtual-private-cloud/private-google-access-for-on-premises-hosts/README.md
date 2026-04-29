# Private Google Access for on-premises hosts

Product: Virtual Private Cloud
Feature slug: `private-google-access-for-on-premises-hosts`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Private Google Access for on-premises hosts now allows traffic from any internal IP address, including non-RFC 1918 addresses; Private Google Access for on-premises hosts was updated to allow traffic from any internal IP address range, rather than only RFC 1918 addresses.

## Lifecycle

- Latest feature date: 2020-04-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- firewall
- private

## Official Evidence

- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/state-tables](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/concepts/state-tables)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/states/reasons-dropped-packets)
- [https://docs.cloud.google.com/vpc/docs/configure-private-google-access](https://docs.cloud.google.com/vpc/docs/configure-private-google-access)
- [https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid](https://docs.cloud.google.com/vpc/docs/configure-private-google-access-hybrid)
