---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:53:06.938Z"
product_name: "Certificate Manager"
product_slug: "certificate-manager"
feature_name: "Mutual TLS authentication"
feature_slug: "mutual-tls-authentication"
latest_feature_date: "2023-09-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/certificate-manager/docs/core-components"
  - "https://docs.cloud.google.com/certificate-manager/docs/deploy"
  - "https://docs.cloud.google.com/certificate-manager/docs/audit-logging-publicca"
keywords:
  - "mutual TLS in public preview"
  - "mutual TLS auth"
  - "client certificate authentication"
  - "mTLS authentication"
  - "Mutual TLS"
  - "Certificate Manager mTLS"
  - "mTLS"
---

# Mutual TLS authentication

Product: Certificate Manager
Coverage: LOW

## Step 02 Summary

Certificate Manager supports Mutual TLS (mTLS) authentication; Certificate Manager supports Mutual TLS (mTLS) authentication in public preview.

## Extended Definition

Certificate Manager provides mTLS-related security resources including trust configs, trust stores, and trust anchors that are described specifically for use in mutual TLS (mTLS) authentication scenarios. Its deployment and core-component documentation points to Cloud Load Balancing for the mTLS workflow, indicating the feature is implemented as part of Certificate Manager assets used in mTLS setups.

## Evidence Summary

The cited docs confirm that Certificate Manager defines trust-oriented resources for mTLS and references mTLS setup guidance through Cloud Load Balancing.

## Source Links

- [https://docs.cloud.google.com/certificate-manager/docs/core-components](https://docs.cloud.google.com/certificate-manager/docs/core-components)
- [https://docs.cloud.google.com/certificate-manager/docs/deploy](https://docs.cloud.google.com/certificate-manager/docs/deploy)
- [https://docs.cloud.google.com/certificate-manager/docs/audit-logging-publicca](https://docs.cloud.google.com/certificate-manager/docs/audit-logging-publicca)

## Supporting Pages

### Deployment overview \_|\_ Certificate Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/certificate-manager/docs/deploy](https://docs.cloud.google.com/certificate-manager/docs/deploy)
- Source ID: `site-docs-root`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- If you want to use mutual TLS authentication (mTLS), see Mutual TLS authentication in the Cloud Load Balancing documentation.

### Core components of Certificate Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/certificate-manager/docs/core-components](https://docs.cloud.google.com/certificate-manager/docs/core-components)
- Source ID: `site-iam-reference`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- To learn more about mutual TLS (mTLS) authentication, see Mutual TLS overview in the Cloud Load Balancing documentation.
- Trust configs A trust config is a resource that represents your public key infrastructure (PKI) configuration in Certificate Manager for use in mutual TLS authentication scenarios.
- Trust stores A trust store represents the trust secret configuration in Certificate Manager for use in mutual TLS authentication scenarios.
- Trust anchors A trust anchor represents a single root certificate for use in mutual TLS authentication scenarios.

### "Public Certificate Authority audit logging \_|\_ Certificate Manager \_\

- URL: [https://docs.cloud.google.com/certificate-manager/docs/audit-logging-publicca](https://docs.cloud.google.com/certificate-manager/docs/audit-logging-publicca)
- Source ID: `site-iam-reference`
- Final score: 30
- Re-rank relevance: N/A

