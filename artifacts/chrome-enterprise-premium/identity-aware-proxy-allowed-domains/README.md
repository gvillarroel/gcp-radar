# Identity-Aware Proxy allowed domains

Product: Chrome Enterprise Premium
Feature slug: `identity-aware-proxy-allowed-domains`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

IAP allowed domains allows administrators to specify permitted domains for Identity-Aware Proxy usage.

## Lifecycle

- Latest feature date: 2022-07-29
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector))
- allow (evidence: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector))
- auth (evidence: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector))
- authorization (evidence: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector))
- certificate (evidence: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector))
- firewall (evidence: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector))
- iam (evidence: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector))
- identity (evidence: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector))
- policy (evidence: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector))
- private (evidence: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector))
- role (evidence: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector))
- security (evidence: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector))
- token (evidence: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector))

## Official Evidence

- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector)
- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps)
- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-saas-apps)
