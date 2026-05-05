# Jumbo frames for firewall endpoints

Product: Cloud NGFW
Feature slug: `jumbo-frames-for-firewall-endpoints`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Firewall endpoints support jumbo frames up to 8,500 bytes in size.

## Lifecycle

- Latest feature date: 2025-11-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- firewall (evidence: [https://docs.cloud.google.com/firewall/docs/configure-firewall-endpoints](https://docs.cloud.google.com/firewall/docs/configure-firewall-endpoints), [https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints](https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints), [https://docs.cloud.google.com/firewall/docs/configure-url-filtering](https://docs.cloud.google.com/firewall/docs/configure-url-filtering), [https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1/ListFirewallEndpointsResponse](https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1/ListFirewallEndpointsResponse))
- permission (evidence: [https://docs.cloud.google.com/firewall/docs/configure-firewall-endpoints](https://docs.cloud.google.com/firewall/docs/configure-firewall-endpoints), [https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints](https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints), [https://docs.cloud.google.com/firewall/docs/configure-url-filtering](https://docs.cloud.google.com/firewall/docs/configure-url-filtering), [https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1/ListFirewallEndpointsResponse](https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1/ListFirewallEndpointsResponse))
- policy (evidence: [https://docs.cloud.google.com/firewall/docs/configure-firewall-endpoints](https://docs.cloud.google.com/firewall/docs/configure-firewall-endpoints), [https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints](https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints), [https://docs.cloud.google.com/firewall/docs/configure-url-filtering](https://docs.cloud.google.com/firewall/docs/configure-url-filtering), [https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1/ListFirewallEndpointsResponse](https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1/ListFirewallEndpointsResponse))
- private (evidence: [https://docs.cloud.google.com/firewall/docs/configure-firewall-endpoints](https://docs.cloud.google.com/firewall/docs/configure-firewall-endpoints), [https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints](https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints), [https://docs.cloud.google.com/firewall/docs/configure-url-filtering](https://docs.cloud.google.com/firewall/docs/configure-url-filtering), [https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1/ListFirewallEndpointsResponse](https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1/ListFirewallEndpointsResponse))
- role (evidence: [https://docs.cloud.google.com/firewall/docs/configure-firewall-endpoints](https://docs.cloud.google.com/firewall/docs/configure-firewall-endpoints), [https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints](https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints), [https://docs.cloud.google.com/firewall/docs/configure-url-filtering](https://docs.cloud.google.com/firewall/docs/configure-url-filtering), [https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1/ListFirewallEndpointsResponse](https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1/ListFirewallEndpointsResponse))
- security (evidence: [https://docs.cloud.google.com/firewall/docs/configure-firewall-endpoints](https://docs.cloud.google.com/firewall/docs/configure-firewall-endpoints), [https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints](https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints), [https://docs.cloud.google.com/firewall/docs/configure-url-filtering](https://docs.cloud.google.com/firewall/docs/configure-url-filtering), [https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1/ListFirewallEndpointsResponse](https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1/ListFirewallEndpointsResponse))
- threat (evidence: [https://docs.cloud.google.com/firewall/docs/configure-firewall-endpoints](https://docs.cloud.google.com/firewall/docs/configure-firewall-endpoints), [https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints](https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints), [https://docs.cloud.google.com/firewall/docs/configure-url-filtering](https://docs.cloud.google.com/firewall/docs/configure-url-filtering), [https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1/ListFirewallEndpointsResponse](https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1/ListFirewallEndpointsResponse))
- token (evidence: [https://docs.cloud.google.com/firewall/docs/configure-firewall-endpoints](https://docs.cloud.google.com/firewall/docs/configure-firewall-endpoints), [https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints](https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints), [https://docs.cloud.google.com/firewall/docs/configure-url-filtering](https://docs.cloud.google.com/firewall/docs/configure-url-filtering), [https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1/ListFirewallEndpointsResponse](https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1/ListFirewallEndpointsResponse))

## Official Evidence

- [https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints](https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints)
- [https://docs.cloud.google.com/firewall/docs/configure-firewall-endpoints](https://docs.cloud.google.com/firewall/docs/configure-firewall-endpoints)
- [https://docs.cloud.google.com/firewall/docs/configure-url-filtering](https://docs.cloud.google.com/firewall/docs/configure-url-filtering)
- [https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1/ListFirewallEndpointsResponse](https://docs.cloud.google.com/firewall/docs/reference/network-security/rest/v1/ListFirewallEndpointsResponse)
