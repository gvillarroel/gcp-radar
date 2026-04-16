---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:14.585Z"
product_name: "Certificate Authority Service"
product_slug: "certificate-authority-service"
feature_name: "Certificate issuance backdating"
feature_slug: "certificate-issuance-backdating"
latest_feature_date: "2025-06-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/certificate-authority-service/docs/use-issuance-policy"
  - "https://docs.cloud.google.com/certificate-authority-service/docs/tutorials/using-3pi-with-reflection"
  - "https://docs.cloud.google.com/certificate-authority-service/docs/known-limitations"
keywords:
  - "earlier effective start time"
  - "not_before_time"
  - "preserve certificate lifetime"
  - "backdate_duration"
  - "backdate duration"
  - "backdated issuance"
  - "issuance policy"
  - "certificate backdating"
---

# Certificate issuance backdating

Product: Certificate Authority Service
Coverage: MEDIUM

## Step 02 Summary

Issuance policies now support a backdate_duration field that sets certificate not_before_time to an earlier time relative to issuance while preserving requested lifetime.

## Extended Definition

Issuance policies now support a backdate_duration field that sets certificate not_before_time to an earlier time relative to issuance while preserving requested lifetime.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/certificate-authority-service/docs/use-issuance-policy](https://docs.cloud.google.com/certificate-authority-service/docs/use-issuance-policy)
- [https://docs.cloud.google.com/certificate-authority-service/docs/tutorials/using-3pi-with-reflection](https://docs.cloud.google.com/certificate-authority-service/docs/tutorials/using-3pi-with-reflection)
- [https://docs.cloud.google.com/certificate-authority-service/docs/known-limitations](https://docs.cloud.google.com/certificate-authority-service/docs/known-limitations)

## Supporting Pages

### Add certificate issuance policies | Certificate Authority Service | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/certificate-authority-service/docs/use-issuance-policy](https://docs.cloud.google.com/certificate-authority-service/docs/use-issuance-policy)
- Source ID: `feature-recovery-http`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- Example : Allow only SANs having DNS Names as us.google.org or ending in .google.com . policy.yaml identityConstraints : allowSubjectPassthrough : false allowSubjectAltNamesPassthrough : true celExpression : expression : 'subject_alt_names.all(san, san.type == DNS && (san.value == "us.google.org" || san.value.endsWith(".google.com")) )' Example : Allow only SANs having URIs https://google.com/webhp or starting with spiffe://example-trust-domain-1/ns/namespace1/sa/ . policy.yaml identityConstraints : allowSubjectPassthrough : false allowSubjectAltNamesPassthrough : true celExpression : expression : 'subject_alt_names.all(san, san.type == URI && (san.value == "https://google.com/webhp" || san.value.startsWith("spiffe://example-trust-domain-1/ns/namespace1/sa/")) )' Example : Allow only SANs having email addresses example@google.com or ending with @google.org . policy.yaml identityConstraints : allowSubjectPassthrough : false allowSubjectAltNamesPassthrough : true celExpression : expression : 'subject_alt_names.all(san, san.type == EMAIL && (san.value == "example@google.com" || san.value.endsWith("@google.org")) )' Example : Allow only custom SANs having a specific OID and a custom value. policy.yaml identityConstraints : allowSubjectPassthrough : false allowSubjectAltNamesPassthrough : true celExpression : expression : 'subject_alt_names.all(san, san.type == CUSTOM && san.oid == [1, 2, 3, 4] && san.value == "custom-data" )' Restrict backdate duration of the issued certificates To set a past not_before_time for issued certificates, use the backdate_duration field.
- The backdate_duration must be less than or equal to 48 hours.
- Example : Allow only CSR issuance. policy.yaml allowedIssuanceModes : allowCsrBasedIssuance : True allowConfigBasedIssuance : False Restrict the public key algorithms of the certificate request To restrict the minimum key length and the public key algorithms that certificates can use, you can use the allowedKeyTypes field in the certificate issuance policy YAML file.
- To update a CA pool's certificate issuance policy using the file created in the previous step, run the following command: gcloud privateca pools update POOL_NAME --location LOCATION --issuance-policy FILE_PATH Replace the following: POOL_NAME : the name of the CA pool.

### "Issue certificates that attest to third-party identity \_|\_ Certificate\

- URL: [https://docs.cloud.google.com/certificate-authority-service/docs/tutorials/using-3pi-with-reflection](https://docs.cloud.google.com/certificate-authority-service/docs/tutorials/using-3pi-with-reflection)
- Source ID: `site-iam-reference`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### "Known limitations \_|\_ Certificate Authority Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/certificate-authority-service/docs/known-limitations](https://docs.cloud.google.com/certificate-authority-service/docs/known-limitations)
- Source ID: `site-docs-root`
- Final score: 54
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

