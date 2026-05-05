# Identity-Aware Proxy TCP forwarding for non-Google Cloud environments

Product: Chrome Enterprise Premium
Feature slug: `identity-aware-proxy-tcp-forwarding-for-non-google-cloud-environments`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

IAP TCP forwarding for non-Google Cloud environments is available to extend Identity-Aware Proxy access capabilities beyond Google Cloud.

## Lifecycle

- Latest feature date: 2022-07-29
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine](https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine))
- auth (evidence: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine](https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine))
- authorization (evidence: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine](https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine))
- certificate (evidence: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine](https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine))
- iam (evidence: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine](https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine))
- identity (evidence: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine](https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine))
- policy (evidence: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine](https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine))
- private (evidence: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine](https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine))
- role (evidence: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine](https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine))
- security (evidence: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine](https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine))
- token (evidence: [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps), [https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine](https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine))

## Official Evidence

- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector](https://docs.cloud.google.com/chrome-enterprise-premium/docs/enable-app-connector)
- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine](https://docs.cloud.google.com/chrome-enterprise-premium/docs/securing-compute-engine)
- [https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps](https://docs.cloud.google.com/chrome-enterprise-premium/docs/security-gateway-private-web-apps)
