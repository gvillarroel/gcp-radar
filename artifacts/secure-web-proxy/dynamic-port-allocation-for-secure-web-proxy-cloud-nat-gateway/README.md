# Dynamic port allocation for Secure Web Proxy Cloud NAT gateway

Product: Secure Web Proxy
Feature slug: `dynamic-port-allocation-for-secure-web-proxy-cloud-nat-gateway`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The auto-provisioned Cloud NAT gateway for Secure Web Proxy now uses dynamic port allocation to reduce IP address consumption.

## Lifecycle

- Latest feature date: 2025-01-20
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/secure-web-proxy/docs/assign-static-ip-addresses-for-egress-traffic](https://docs.cloud.google.com/secure-web-proxy/docs/assign-static-ip-addresses-for-egress-traffic), [https://docs.cloud.google.com/secure-web-proxy/docs/overview](https://docs.cloud.google.com/secure-web-proxy/docs/overview), [https://docs.cloud.google.com/secure-web-proxy/docs/configure-rules](https://docs.cloud.google.com/secure-web-proxy/docs/configure-rules), [https://docs.cloud.google.com/secure-web-proxy/docs/deploy-next-hop](https://docs.cloud.google.com/secure-web-proxy/docs/deploy-next-hop))
- allow (evidence: [https://docs.cloud.google.com/secure-web-proxy/docs/assign-static-ip-addresses-for-egress-traffic](https://docs.cloud.google.com/secure-web-proxy/docs/assign-static-ip-addresses-for-egress-traffic), [https://docs.cloud.google.com/secure-web-proxy/docs/overview](https://docs.cloud.google.com/secure-web-proxy/docs/overview), [https://docs.cloud.google.com/secure-web-proxy/docs/configure-rules](https://docs.cloud.google.com/secure-web-proxy/docs/configure-rules), [https://docs.cloud.google.com/secure-web-proxy/docs/deploy-next-hop](https://docs.cloud.google.com/secure-web-proxy/docs/deploy-next-hop))
- audit (evidence: [https://docs.cloud.google.com/secure-web-proxy/docs/assign-static-ip-addresses-for-egress-traffic](https://docs.cloud.google.com/secure-web-proxy/docs/assign-static-ip-addresses-for-egress-traffic), [https://docs.cloud.google.com/secure-web-proxy/docs/overview](https://docs.cloud.google.com/secure-web-proxy/docs/overview), [https://docs.cloud.google.com/secure-web-proxy/docs/configure-rules](https://docs.cloud.google.com/secure-web-proxy/docs/configure-rules), [https://docs.cloud.google.com/secure-web-proxy/docs/deploy-next-hop](https://docs.cloud.google.com/secure-web-proxy/docs/deploy-next-hop))
- encrypt (evidence: [https://docs.cloud.google.com/secure-web-proxy/docs/assign-static-ip-addresses-for-egress-traffic](https://docs.cloud.google.com/secure-web-proxy/docs/assign-static-ip-addresses-for-egress-traffic), [https://docs.cloud.google.com/secure-web-proxy/docs/overview](https://docs.cloud.google.com/secure-web-proxy/docs/overview), [https://docs.cloud.google.com/secure-web-proxy/docs/configure-rules](https://docs.cloud.google.com/secure-web-proxy/docs/configure-rules), [https://docs.cloud.google.com/secure-web-proxy/docs/deploy-next-hop](https://docs.cloud.google.com/secure-web-proxy/docs/deploy-next-hop))
- identity (evidence: [https://docs.cloud.google.com/secure-web-proxy/docs/assign-static-ip-addresses-for-egress-traffic](https://docs.cloud.google.com/secure-web-proxy/docs/assign-static-ip-addresses-for-egress-traffic), [https://docs.cloud.google.com/secure-web-proxy/docs/overview](https://docs.cloud.google.com/secure-web-proxy/docs/overview), [https://docs.cloud.google.com/secure-web-proxy/docs/configure-rules](https://docs.cloud.google.com/secure-web-proxy/docs/configure-rules), [https://docs.cloud.google.com/secure-web-proxy/docs/deploy-next-hop](https://docs.cloud.google.com/secure-web-proxy/docs/deploy-next-hop))
- key (evidence: [https://docs.cloud.google.com/secure-web-proxy/docs/assign-static-ip-addresses-for-egress-traffic](https://docs.cloud.google.com/secure-web-proxy/docs/assign-static-ip-addresses-for-egress-traffic), [https://docs.cloud.google.com/secure-web-proxy/docs/overview](https://docs.cloud.google.com/secure-web-proxy/docs/overview), [https://docs.cloud.google.com/secure-web-proxy/docs/configure-rules](https://docs.cloud.google.com/secure-web-proxy/docs/configure-rules), [https://docs.cloud.google.com/secure-web-proxy/docs/deploy-next-hop](https://docs.cloud.google.com/secure-web-proxy/docs/deploy-next-hop))
- policy (evidence: [https://docs.cloud.google.com/secure-web-proxy/docs/assign-static-ip-addresses-for-egress-traffic](https://docs.cloud.google.com/secure-web-proxy/docs/assign-static-ip-addresses-for-egress-traffic), [https://docs.cloud.google.com/secure-web-proxy/docs/overview](https://docs.cloud.google.com/secure-web-proxy/docs/overview), [https://docs.cloud.google.com/secure-web-proxy/docs/configure-rules](https://docs.cloud.google.com/secure-web-proxy/docs/configure-rules), [https://docs.cloud.google.com/secure-web-proxy/docs/deploy-next-hop](https://docs.cloud.google.com/secure-web-proxy/docs/deploy-next-hop))
- private (evidence: [https://docs.cloud.google.com/secure-web-proxy/docs/assign-static-ip-addresses-for-egress-traffic](https://docs.cloud.google.com/secure-web-proxy/docs/assign-static-ip-addresses-for-egress-traffic), [https://docs.cloud.google.com/secure-web-proxy/docs/overview](https://docs.cloud.google.com/secure-web-proxy/docs/overview), [https://docs.cloud.google.com/secure-web-proxy/docs/configure-rules](https://docs.cloud.google.com/secure-web-proxy/docs/configure-rules), [https://docs.cloud.google.com/secure-web-proxy/docs/deploy-next-hop](https://docs.cloud.google.com/secure-web-proxy/docs/deploy-next-hop))
- security (evidence: [https://docs.cloud.google.com/secure-web-proxy/docs/assign-static-ip-addresses-for-egress-traffic](https://docs.cloud.google.com/secure-web-proxy/docs/assign-static-ip-addresses-for-egress-traffic), [https://docs.cloud.google.com/secure-web-proxy/docs/overview](https://docs.cloud.google.com/secure-web-proxy/docs/overview), [https://docs.cloud.google.com/secure-web-proxy/docs/configure-rules](https://docs.cloud.google.com/secure-web-proxy/docs/configure-rules), [https://docs.cloud.google.com/secure-web-proxy/docs/deploy-next-hop](https://docs.cloud.google.com/secure-web-proxy/docs/deploy-next-hop))

## Official Evidence

- [https://docs.cloud.google.com/secure-web-proxy/docs/assign-static-ip-addresses-for-egress-traffic](https://docs.cloud.google.com/secure-web-proxy/docs/assign-static-ip-addresses-for-egress-traffic)
- [https://docs.cloud.google.com/secure-web-proxy/docs/configure-rules](https://docs.cloud.google.com/secure-web-proxy/docs/configure-rules)
- [https://docs.cloud.google.com/secure-web-proxy/docs/deploy-next-hop](https://docs.cloud.google.com/secure-web-proxy/docs/deploy-next-hop)
- [https://docs.cloud.google.com/secure-web-proxy/docs/overview](https://docs.cloud.google.com/secure-web-proxy/docs/overview)
