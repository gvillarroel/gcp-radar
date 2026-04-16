---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:53:06.937Z"
product_name: "Certificate Manager"
product_slug: "certificate-manager"
feature_name: "Regional managed certificate issuance"
feature_slug: "regional-managed-certificate-issuance"
latest_feature_date: "2024-02-22"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/certificate-manager/docs/domain-authorization"
  - "https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas-regional"
  - "https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-regional"
keywords:
  - "region-based managed issuance"
  - "region-scoped managed certificates"
  - "managed certificates by region"
  - "regional managed certs"
  - "regional managed certificate issuance"
  - "regional managed cert"
  - "regional issuance option"
---

# Regional managed certificate issuance

Product: Certificate Manager
Coverage: HIGH

## Step 02 Summary

Certificate Manager adds support for issuing regional managed certificates.

## Extended Definition

Certificate Manager provides regional issuance for Google-managed certificates, allowing you to create a certificate with a Regional location (and selected region) and deploy it to a regional external or internal Application Load Balancer. For Google-managed certificates using DNS authorization, regional issuance requires a regional DNS authorization in the same region, and regional certificates cannot use global DNS authorizations; only the per-project DNS authorization type is supported. For CA Service-backed issuance, the regional certificate’s region must be aligned with the selected CA pool (same region) when creating the certificate issuance configuration.

## Evidence Summary

The cited pages document how to deploy regional Google-managed certificates, the required regional configuration (location/region and matching CA pool or regional DNS authorization), and the restriction that regional certificates cannot use global DNS authorization.

## Source Links

- [https://docs.cloud.google.com/certificate-manager/docs/domain-authorization](https://docs.cloud.google.com/certificate-manager/docs/domain-authorization)
- [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas-regional](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas-regional)
- [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-regional](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-regional)

## Supporting Pages

### "Domain authorization types for Google-managed certificates \_|\_ Certificate\

- URL: [https://docs.cloud.google.com/certificate-manager/docs/domain-authorization](https://docs.cloud.google.com/certificate-manager/docs/domain-authorization)
- Source ID: `site-docs-root`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: The page states that load balancer authorization does not support regional certificates, which is useful context about regional managed certificate availability and limitations.

### "Deploy a regional Google-managed certificate with Certificate Authority\

- URL: [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas-regional](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas-regional)
- Source ID: `site-iam-reference`
- Final score: 64
- Re-rank relevance: N/A

### "Deploy a regional Google-managed certificate with DNS authorization \_|\_\

- URL: [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-regional](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-regional)
- Source ID: `site-iam-reference`
- Final score: 64
- Re-rank relevance: N/A

