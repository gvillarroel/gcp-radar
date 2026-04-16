---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:14.601Z"
product_name: "Certificate Authority Service"
product_slug: "certificate-authority-service"
feature_name: "X.509 name constraints for CA resources"
feature_slug: "x-509-name-constraints-for-ca-resources"
latest_feature_date: "2023-03-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/certificate-authority-service/docs/reference/rpc/google.cloud.security.privateca.v1"
  - "https://docs.cloud.google.com/certificate-authority-service/docs/reference/rest/v1/X509Parameters"
  - "https://docs.cloud.google.com/certificate-authority-service/docs/custom-constraints"
keywords:
  - "name constraints on CertificateAuthority"
  - "CA pool name constraints"
  - "constrain subject names"
  - "X.509 name constraints"
  - "permittedSubtrees and excludedSubtrees"
  - "nameConstraints extension"
  - "name constraints"
  - "Name Constraints"
---

# X.509 name constraints for CA resources

Product: Certificate Authority Service
Coverage: MEDIUM

## Step 02 Summary

Certificate Authority Service introduced GA support for X.509 name constraints on certificate authorities and CA pools, enforced during certificate issuance.

## Extended Definition

Certificate Authority Service introduced GA support for X.509 name constraints on certificate authorities and CA pools, enforced during certificate issuance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/certificate-authority-service/docs/reference/rpc/google.cloud.security.privateca.v1](https://docs.cloud.google.com/certificate-authority-service/docs/reference/rpc/google.cloud.security.privateca.v1)
- [https://docs.cloud.google.com/certificate-authority-service/docs/reference/rest/v1/X509Parameters](https://docs.cloud.google.com/certificate-authority-service/docs/reference/rest/v1/X509Parameters)
- [https://docs.cloud.google.com/certificate-authority-service/docs/custom-constraints](https://docs.cloud.google.com/certificate-authority-service/docs/custom-constraints)

## Supporting Pages

### Package google.cloud.security.privateca.v1 | Certificate Authority Service | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/certificate-authority-service/docs/reference/rpc/google.cloud.security.privateca.v1](https://docs.cloud.google.com/certificate-authority-service/docs/reference/rpc/google.cloud.security.privateca.v1)
- Source ID: `feature-recovery-http`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- NameConstraints Describes the X.509 name constraints extension, per https://tools.ietf.org/html/rfc5280#section-4.2.1.10 Fields critical bool Indicates whether or not the name constraints are marked critical. permitted_dns_names[] string Contains permitted DNS names.
- Describes the X.509 name constraints extension. additional_extensions[] X509Extension Optional.
- NAME_CONSTRAINTS Refers to Name Constraints extension as described in RFC 5280 section 4.2.1.10 CertificateIdentityConstraints Describes constraints on a Certificate 's Subject and SubjectAltNames .
- Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the "Authority Information Access" extension in the certificate. name_constraints NameConstraints Optional.

### X509Parameters | Certificate Authority Service | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/certificate-authority-service/docs/reference/rest/v1/X509Parameters](https://docs.cloud.google.com/certificate-authority-service/docs/reference/rest/v1/X509Parameters)
- Source ID: `feature-recovery-http`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- NameConstraints Describes the X.509 name constraints extension, per https://tools.ietf.org/html/rfc5280#section-4.2.1.10 JSON representation { "critical" : boolean , "permittedDnsNames" : [ string ] , "excludedDnsNames" : [ string ] , "permittedIpRanges" : [ string ] , "excludedIpRanges" : [ string ] , "permittedEmailAddresses" : [ string ] , "excludedEmailAddresses" : [ string ] , "permittedUris" : [ string ] , "excludedUris" : [ string ] } Fields critical boolean Indicates whether or not the name constraints are marked critical. permittedDnsNames[] string Contains permitted DNS names.
- Describes the X.509 name constraints extension. additionalExtensions[] object ( X509Extension ) Optional.

### "Manage CA Service resources using custom constraints \_|\_ Certificate Authority\

- URL: [https://docs.cloud.google.com/certificate-authority-service/docs/custom-constraints](https://docs.cloud.google.com/certificate-authority-service/docs/custom-constraints)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

