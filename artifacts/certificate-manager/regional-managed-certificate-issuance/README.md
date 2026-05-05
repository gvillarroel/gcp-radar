# Regional managed certificate issuance

Product: Certificate Manager
Feature slug: `regional-managed-certificate-issuance`
Coverage: `HIGH`
IAM mapping: `unknown`

## Technical Summary

Certificate Manager provides regional issuance for Google-managed certificates, allowing you to create a certificate with a Regional location (and selected region) and deploy it to a regional external or internal Application Load Balancer. For Google-managed certificates using DNS authorization, regional issuance requires a regional DNS authorization in the same region, and regional certificates cannot use global DNS authorizations; only the per-project DNS authorization type is supported. For CA Service-backed issuance, the regional certificate’s region must be aligned with the selected CA pool (same region) when creating the certificate issuance configuration.

## Lifecycle

- Latest feature date: 2024-02-22
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/certificate-manager/docs/domain-authorization](https://docs.cloud.google.com/certificate-manager/docs/domain-authorization), [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas-regional](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas-regional), [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-regional](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-regional))
- auth (evidence: [https://docs.cloud.google.com/certificate-manager/docs/domain-authorization](https://docs.cloud.google.com/certificate-manager/docs/domain-authorization), [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas-regional](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas-regional), [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-regional](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-regional))
- authorization (evidence: [https://docs.cloud.google.com/certificate-manager/docs/domain-authorization](https://docs.cloud.google.com/certificate-manager/docs/domain-authorization), [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas-regional](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas-regional), [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-regional](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-regional))
- certificate (evidence: [https://docs.cloud.google.com/certificate-manager/docs/domain-authorization](https://docs.cloud.google.com/certificate-manager/docs/domain-authorization), [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas-regional](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas-regional), [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-regional](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-regional))

## Official Evidence

- [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas-regional](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas-regional)
- [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-regional](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-regional)
- [https://docs.cloud.google.com/certificate-manager/docs/domain-authorization](https://docs.cloud.google.com/certificate-manager/docs/domain-authorization)
