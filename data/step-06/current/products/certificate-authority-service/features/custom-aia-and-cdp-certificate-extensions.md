---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:14.588Z"
product_name: "Certificate Authority Service"
product_slug: "certificate-authority-service"
feature_name: "Custom AIA and CDP certificate extensions"
feature_slug: "custom-aia-and-cdp-certificate-extensions"
latest_feature_date: "2025-02-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/certificate-authority-service/docs/creating-ca-pool"
  - "https://docs.cloud.google.com/certificate-authority-service/docs/access-control"
  - "https://docs.cloud.google.com/certificate-authority-service/docs/tutorials/using-3pi-with-reflection"
keywords:
  - "CRL Distribution Point"
  - "custom cert extensions"
  - "custom AIA extension"
  - "custom CDP extension"
  - "embedded certificate extensions"
  - "issued certificate extensions"
  - "Authority Information Access"
  - "AIA extension"
---

# Custom AIA and CDP certificate extensions

Product: Certificate Authority Service
Coverage: MEDIUM

## Step 02 Summary

Certificate authorities can now be configured with custom Authority Information Access (AIA) and CRL Distribution Point (CDP) extensions embedded in issued certificates.

## Extended Definition

Certificate authorities can now be configured with custom Authority Information Access (AIA) and CRL Distribution Point (CDP) extensions embedded in issued certificates.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/certificate-authority-service/docs/creating-ca-pool](https://docs.cloud.google.com/certificate-authority-service/docs/creating-ca-pool)
- [https://docs.cloud.google.com/certificate-authority-service/docs/access-control](https://docs.cloud.google.com/certificate-authority-service/docs/access-control)
- [https://docs.cloud.google.com/certificate-authority-service/docs/tutorials/using-3pi-with-reflection](https://docs.cloud.google.com/certificate-authority-service/docs/tutorials/using-3pi-with-reflection)

## Supporting Pages

### "Create a CA pool \_|\_ Certificate Authority Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/certificate-authority-service/docs/creating-ca-pool](https://docs.cloud.google.com/certificate-authority-service/docs/creating-ca-pool)
- Source ID: `site-docs-root`
- Final score: 79
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Add Authority information access (AIA) OCSP servers The AIA extension in a certificate provides the following information: Address of the OCSP servers from where you can check the revocation status of the certificate.
- When issuing a certificate, the URL to this CA certificate is included in the certificate as an authority information access (AIA) extension.
- You can also specify custom AIA and CRL Distribution Point (CDP) URLs if you want to point to your own OCSP servers or CRL locations.
- When issuing a certificate, a URL to this CRL is included in the certificate as the CRL Distribution Point (CDP) extension.

### "Access control with IAM \_|\_ Certificate Authority Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/certificate-authority-service/docs/access-control](https://docs.cloud.google.com/certificate-authority-service/docs/access-control)
- Source ID: `site-iam-reference`
- Final score: 68
- Re-rank relevance: N/A

### "Issue certificates that attest to third-party identity \_|\_ Certificate\

- URL: [https://docs.cloud.google.com/certificate-authority-service/docs/tutorials/using-3pi-with-reflection](https://docs.cloud.google.com/certificate-authority-service/docs/tutorials/using-3pi-with-reflection)
- Source ID: `site-iam-reference`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

