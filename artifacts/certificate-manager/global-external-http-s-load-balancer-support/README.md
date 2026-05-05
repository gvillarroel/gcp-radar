# Global external HTTP(S) Load Balancer support

Product: Certificate Manager
Feature slug: `global-external-http-s-load-balancer-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Certificate Manager provides deployment for **global Google-managed certificates** on Google Cloud global load balancers. The guides state that a global Google-managed certificate is deployed via a certificate map/entry and attached to a supported load balancer using a target HTTPS proxy, with the supported global targets including global external Application Load Balancer and global external proxy Network Load Balancer, indicating HTTPS-capable global external LB integration. In the load balancer authorization method, certificate issuance is tied to traffic served by the load balancer and does not require additional DNS records.

## Lifecycle

- Latest feature date: 2022-04-05
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-lb-auth](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-lb-auth), [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas), [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-dns-auth](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-dns-auth))
- authorization (evidence: [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-lb-auth](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-lb-auth), [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas), [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-dns-auth](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-dns-auth))
- certificate (evidence: [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-lb-auth](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-lb-auth), [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas), [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-dns-auth](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-dns-auth))

## Official Evidence

- [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas)
- [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-dns-auth](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-dns-auth)
- [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-lb-auth](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-lb-auth)
