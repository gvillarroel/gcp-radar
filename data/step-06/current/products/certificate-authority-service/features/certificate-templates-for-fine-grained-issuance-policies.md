---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:13:34.947Z"
product_name: "Certificate Authority Service"
product_slug: "certificate-authority-service"
feature_name: "Certificate templates for fine-grained issuance policies"
feature_slug: "certificate-templates-for-fine-grained-issuance-policies"
latest_feature_date: "2024-05-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/certificate-authority-service/docs/policy-controls"
  - "https://docs.cloud.google.com/certificate-authority-service/docs/tutorials/manage-policy-controls"
  - "https://docs.cloud.google.com/certificate-authority-service/docs/creating-certificate-template"
keywords:
  - "templates"
  - "grained"
  - "fine"
  - "policies"
  - "can"
  - "issuance"
  - "for"
  - "certificate"
---

# Certificate templates for fine-grained issuance policies

Product: Certificate Authority Service
Coverage: LOW

## Step 02 Summary

Certificate templates can be used with IAM conditions to apply fine-grained issuance controls and validate issuance conflicts in a test mode.

## Extended Definition

Certificate templates can be used with IAM conditions to apply fine-grained issuance controls and validate issuance conflicts in a test mode.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/certificate-authority-service/docs/policy-controls](https://docs.cloud.google.com/certificate-authority-service/docs/policy-controls)
- [https://docs.cloud.google.com/certificate-authority-service/docs/tutorials/manage-policy-controls](https://docs.cloud.google.com/certificate-authority-service/docs/tutorials/manage-policy-controls)
- [https://docs.cloud.google.com/certificate-authority-service/docs/creating-certificate-template](https://docs.cloud.google.com/certificate-authority-service/docs/creating-certificate-template)

## Supporting Pages

### "Overview of policy controls \_|\_ Certificate Authority Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/certificate-authority-service/docs/policy-controls](https://docs.cloud.google.com/certificate-authority-service/docs/policy-controls)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- In addition to the certificate issuance policies and certificate templates, you can also enforce specific policy controls such as name constraints to prevent a CA from issuing certificates for unauthorized domains or entities.
- Fine-grained policies such as certificate templates : Certificate templates let you define which certificate types can be issued and who has the authority to issue them, preventing misuse and maintaining security.
- In Certificate Authority Service, policy controls are one of two types: Coarse-grained policies such as certificate issuance policies : Certificate issuance policies apply to the entire CA pool and define high-level constraints such as permitted key types, allowed certificate lifetimes, and subject and Subject Alternative Name (SAN) constraints.
- Then, you can use certificate templates to define the specific variations for each certificate type on top of that baseline.

### "Manage policy controls \_|\_ Certificate Authority Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/certificate-authority-service/docs/tutorials/manage-policy-controls](https://docs.cloud.google.com/certificate-authority-service/docs/tutorials/manage-policy-controls)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- For more information about certificate templates, see Overview of certificate templates and issuance policies .
- For more information about certificate templates, see Overview of certificate templates and issuance policies .
- Use the following gcloud command to create the certificate template that contains the end-entity server TLS extensions, drops any subject specified in the certificate request, and limits allowed SANs. gcloud gcloud privateca templates create test - server - tls - template \ -- predefined - values - file . / leaf server tls predefined values . yaml \ -- no - copy - subject \ -- copy - sans \ -- identity - cel - expression "subject alt names.all(san, san.type == DNS && san.value.endsWith('.test.example.com'))" Where: --predefined-values-file flag is used to pass a YAML file that describes any predefined X.509 values set by the certificate template. --no-copy-subject flag drops all caller-specified subjects from the certificate request. --copy sans flag ensures that the SAN extension from the certificate request is copied into the signed certificate. --identity-cel-expression flag is used to pass a CEL expression that is evaluated against the identity in the certificate before it is issued.
- Create a certificate template prod-server-tls-template using the following gcloud command. gcloud gcloud privateca templates create prod - server - tls - template \ -- predefined - values - file . / leaf server tls predefined values . yaml \ -- no - copy - subject \ -- copy - sans \ -- identity - cel - expression "subject alt names.all(san, san.type == DNS && san.value.endsWith('.prod.example.com'))" Where: --predefined-values-file flag is used to pass a YAML file that describes any predefined X.509 values set by the certificate template. --no-copy-subject flag drops all caller-specified subjects from the certificate request. --copy sans flag ensures that the SAN extension from the certificate request is copied into the signed certificate. --identity-cel-expression flag is used to pass a CEL expression that is evaluated against the identity in the certificate before it is issued.

### "Create a certificate template \_|\_ Certificate Authority Service \_|\_\

- URL: [https://docs.cloud.google.com/certificate-authority-service/docs/creating-certificate-template](https://docs.cloud.google.com/certificate-authority-service/docs/creating-certificate-template)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Workload identity certificates To create a certificate template for issuing mutual TLS (mTLS) certificates, use the following instructions: Create a file with the name leaf mtls values.yaml and add the following end-entity mutual TLS configuration to it. leaf mtls values.yaml keyUsage : baseKeyUsage : digitalSignature : true keyEncipherment : true extendedKeyUsage : serverAuth : true clientAuth : true caOptions : isCa : false To only allow certificates with SPIFFE URI SANs, use the following gcloud command: gcloud gcloud privateca templates create workload - spiffe \ -- predefined - values - file leaf mtls values . yaml \ -- copy - sans -- no - copy - subject \ -- identity - cel - expression "subject alt names.all(san, san.type == URI && san.value.startsWith('spiffe://'))" For more information about the gcloud privateca templates create command, see gcloud privateca templates create .
- DNS server TLS certificates for any domain To create a certificate template for issuing server TLS certificates that allow any domain, use the following instructions: Create a file with the name leaf server tls values.yaml and add the following end-entity server TLS configuration to it: leaf server tls values.yaml keyUsage : baseKeyUsage : digitalSignature : true keyEncipherment : true extendedKeyUsage : serverAuth : true caOptions : isCa : false To only allow certificates with DNS -type SANs, execute following gcloud command: gcloud gcloud privateca templates create server - tls \ -- predefined - values - file leaf server tls values . yaml \ -- copy - sans -- no - copy - subject \ -- identity - cel - expression "subject alt names.all(san, san.type == DNS)" For more information about the gcloud privateca templates create command, see gcloud privateca templates create .
- DNS server TLS certificates with only test domains To create a certificate template for issuing server TLS certificates with DNS SANs limited to test domains, use the following gcloud command: gcloud gcloud privateca templates create server - tls \ -- predefined - values - file leaf server tls values . yaml \ -- copy - sans -- no - copy - subject \ -- identity - cel - expression "subject alt names.all(san, san.type == DNS && san.value.endsWith('.test.example.com'))" The contents of the leaf server tls values.yaml file must be the same as the previous example.
- This extension can include information about how identities are validated before certificate issuance, how certificates are revoked, and how the CA pool's integrity is ensured.

