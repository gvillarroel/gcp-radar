# Regional Application Load Balancer integration

Product: Certificate Manager
Feature slug: `regional-application-load-balancer-integration`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Certificate Manager supports deployment of Google-managed certificates to regional Application Load Balancers, specifically both regional external and regional internal ALBs, with regional guides stating that certificates can be deployed to either target type. It also provides a separate cross-region deployment guide for cross-region internal ALBs, but the cited pages do not explicitly label these capabilities as being in public preview or GA.

## Lifecycle

- Latest feature date: 2024-03-12
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- authorization
- certificate

## Official Evidence

- [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas-cross-reg](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas-cross-reg)
- [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-dns-auth-cross-reg](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-dns-auth-cross-reg)
