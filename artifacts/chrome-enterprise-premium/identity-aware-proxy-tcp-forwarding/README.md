# Identity-Aware Proxy TCP forwarding

Product: Chrome Enterprise Premium
Feature slug: `identity-aware-proxy-tcp-forwarding`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

IAP TCP forwarding enables secure tunnel access to endpoints using private IPs or hostnames, including resources connected through Interconnect or VPN.

## Lifecycle

- Latest feature date: 2022-06-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine](https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps))
- auth (evidence: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine](https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps))
- authorization (evidence: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine](https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps))
- certificate (evidence: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine](https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps))
- identity (evidence: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine](https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps))
- private (evidence: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine](https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps))
- security (evidence: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine](https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps))
- token (evidence: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine](https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps))

## Official Evidence

- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector)
- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine](https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine)
- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps)
