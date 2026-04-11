---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:16:01.490Z"
product_name: "Certificate Manager"
product_slug: "certificate-manager"
feature_name: "Mutual TLS authentication"
feature_slug: "mutual-tls-authentication"
latest_feature_date: "2023-09-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerClient"
  - "https://docs.cloud.google.com/certificate-manager/docs/core-components"
keywords:
  - "authentication"
  - "mutual"
  - "mtls"
  - "tls"
  - "supports"
  - "certificate"
  - "in"
  - "manager"
---

# Mutual TLS authentication

Product: Certificate Manager
Coverage: LOW

## Step 02 Summary

Certificate Manager supports Mutual TLS (mTLS) authentication; Certificate Manager supports Mutual TLS (mTLS) authentication in public preview.

## Extended Definition

Certificate Manager supports Mutual TLS (mTLS) authentication; Certificate Manager supports Mutual TLS (mTLS) authentication in public preview.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerAsyncClient](https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerClient](https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerClient)
- [https://docs.cloud.google.com/certificate-manager/docs/core-components](https://docs.cloud.google.com/certificate-manager/docs/core-components)

## Supporting Pages

### "Class CertificateManagerAsyncClient (1.12.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerAsyncClient](https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 230
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Only if this property is not set and transport was not explicitly provided, the endpoint is determined by the GOOGLE API USE MTLS ENDPOINT environment variable, which have one of the following values: "always" (always use the default mTLS endpoint), "never" (always use the default regular endpoint) and "auto" (auto-switch to the default mTLS endpoint if client certificate is present; this is the default value).
- The API endpoint is determined in the following order: (1) if client options.api endpoint if provided, use the provided one. (2) if GOOGLE API USE CLIENT CERTIFICATE environment variable is "always", use the default mTLS endpoint; if the environment variable is "never", use the default API endpoint; otherwise if client cert source exists, use the default mTLS endpoint, otherwise use the default API endpoint.
- Returns Type Description google.cloud.certificate manager v1.types.Certificate Defines TLS certificate. get certificate issuance config get certificate issuance config ( request : typing .
- Data Model The Certificates Manager service exposes the following resources: Certificate that describes a single TLS certificate.

### "Class CertificateManagerClient (1.12.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerClient](https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerClient)
- Source ID: `site-python-reference`
- Final score: 230
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Only if this property is not set and transport was not explicitly provided, the endpoint is determined by the GOOGLE API USE MTLS ENDPOINT environment variable, which have one of the following values: "always" (always use the default mTLS endpoint), "never" (always use the default regular endpoint) and "auto" (auto-switch to the default mTLS endpoint if client certificate is present; this is the default value).
- The API endpoint is determined in the following order: (1) if client options.api endpoint if provided, use the provided one. (2) if GOOGLE API USE CLIENT CERTIFICATE environment variable is "always", use the default mTLS endpoint; if the environment variable is "never", use the default API endpoint; otherwise if client cert source exists, use the default mTLS endpoint, otherwise use the default API endpoint.
- Returns Type Description google.cloud.certificate manager v1.types.Certificate Defines TLS certificate. get certificate issuance config get certificate issuance config ( request : typing .
- Data Model The Certificates Manager service exposes the following resources: Certificate that describes a single TLS certificate.

### Core components of Certificate Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/certificate-manager/docs/core-components](https://docs.cloud.google.com/certificate-manager/docs/core-components)
- Source ID: `site-iam-reference`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- Trust configs A trust config is a resource that represents your public key infrastructure (PKI) configuration in Certificate Manager for use in mutual TLS authentication scenarios.
- Trust stores A trust store represents the trust secret configuration in Certificate Manager for use in mutual TLS authentication scenarios.
- To learn more about mutual TLS (mTLS) authentication, see Mutual TLS overview in the Cloud Load Balancing documentation.
- Trust anchors A trust anchor represents a single root certificate for use in mutual TLS authentication scenarios.

