# Classic Certificates tab migration for load-balancer SSL certificates

Product: Certificate Manager
Feature slug: `classic-certificates-tab-migration-for-load-balancer-ssl-certificates`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

In Certificate Manager, Google Cloud now provides a **Classic Certificates** tab that lists certificates provisioned through Cloud Load Balancing, allowing users to view configured classic certificates for the selected project. The documented behavior is that these classic certificates are displayed in this tab but are not managed by Certificate Manager itself.

## Lifecycle

- Latest feature date: 2022-12-15
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/certificate-manager/docs/certificates](https://docs.cloud.google.com/certificate-manager/docs/certificates))
- auth (evidence: [https://docs.cloud.google.com/certificate-manager/docs/certificates](https://docs.cloud.google.com/certificate-manager/docs/certificates))
- authorization (evidence: [https://docs.cloud.google.com/certificate-manager/docs/certificates](https://docs.cloud.google.com/certificate-manager/docs/certificates))
- certificate (evidence: [https://docs.cloud.google.com/certificate-manager/docs/certificates](https://docs.cloud.google.com/certificate-manager/docs/certificates))

## Official Evidence

- [https://docs.cloud.google.com/certificate-manager/docs/certificates](https://docs.cloud.google.com/certificate-manager/docs/certificates)
