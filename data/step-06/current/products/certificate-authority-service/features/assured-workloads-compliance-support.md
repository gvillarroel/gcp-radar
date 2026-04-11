---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:13:34.952Z"
product_name: "Certificate Authority Service"
product_slug: "certificate-authority-service"
feature_name: "Assured Workloads compliance support"
feature_slug: "assured-workloads-compliance-support"
latest_feature_date: "2023-07-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-compliance"
  - "https://docs.cloud.google.com/certificate-authority-service/docs/creating-certificate-template"
  - "https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-settings"
keywords:
  - "compliance"
  - "supporting"
  - "additional"
  - "workloads"
  - "assured"
  - "began"
  - "certificate"
  - "authority"
---

# Assured Workloads compliance support

Product: Certificate Authority Service
Coverage: LOW

## Step 02 Summary

Certificate Authority Service began supporting additional Assured Workloads compliance programs across applicable regions.

## Extended Definition

Certificate Authority Service began supporting additional Assured Workloads compliance programs across applicable regions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-compliance](https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-compliance)
- [https://docs.cloud.google.com/certificate-authority-service/docs/creating-certificate-template](https://docs.cloud.google.com/certificate-authority-service/docs/creating-certificate-template)
- [https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-settings](https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-settings)

## Supporting Pages

### "Certificate Authority Service security and compliance \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-compliance](https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-compliance)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Certificate Authority Service security and compliance Security Certificate Authority Service supports the following Google Cloud security products: VPC Service Controls (VPC-SC) Access Transparency Access Approval Workforce identity federation Data residency For information about the security measures in place for Google Cloud services, see Google Cloud Security .
- Compliance Certificate Authority Service meets the following compliance standards: ISO 27001 ISO 27017 ISO 27018 SOC1 SOC2 SOC3 VPAT PCI DSS Cloud Computing Compliance Controls Catalog (C5) FedRAMP Moderate and FedRAMP High IRAP HIPAA CJIS ITAR ISMAP You can read more about Google Cloud compliance on the Compliance resource center .
- Home Documentation Security Certificate Authority Service Resources Send feedback Stay organized with collections Save and categorize content based on your preferences.

### "Create a certificate template \_|\_ Certificate Authority Service \_|\_\

- URL: [https://docs.cloud.google.com/certificate-authority-service/docs/creating-certificate-template](https://docs.cloud.google.com/certificate-authority-service/docs/creating-certificate-template)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Here's a sample certificate template configuration: keyUsage : baseKeyUsage : digitalSignature : true keyEncipherment : true contentCommitment : false dataEncipherment : false keyAgreement : false certSign : false crlSign : false encipherOnly : false decipherOnly : false extendedKeyUsage : serverAuth : true clientAuth : false codeSigning : false emailProtection : false timeStamping : false ocspSigning : false caOptions : isCa : true maxIssuerPathLength : 1 policyIds : - objectIdPath : - 1 - 2 - 3 additionalExtensions : - objectId : objectIdPath : - 1 - 2 - 3 critical : false value : "base64 encoded extension value" Values not specified in the YAML are either omitted or defaulted to false .
- The following extensions are omitted if a value isn't specified: keyUsage policyIds additionalExtensions maxIssuerPathLength field in the caOptions extension The following extensions default to false if a value isn't specified: isCa field in the caOptions extension Create a certificate template for common scenarios This section provides gcloud commands for creating a certificate template for common use cases.
- Add Authority information access (AIA) OCSP servers The AIA extension in a certificate provides the following information: Address of the OCSP servers from where you can check the revocation status of the certificate.
- Create a certificate template To create a certificate template, use one of the following methods: Console Go to the Certificate Authority Service page in the Google Cloud console.

### "Determine certificate authority settings \_|\_ Certificate Authority Service\

- URL: [https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-settings](https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-settings)
- Source ID: `site-iam-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Security Certificate Authority Service Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Determine certificate authority settings This page provides information about the various settings of a certificate authority (CA).
- The subordinate CA can be trusted only if the relying party is able to cryptographically validate the certificate chain that forms a path to the root CA certificate.
- CA certificate settings The following settings are directly reflected in the CA's own certificate: Setting Description Lifetime Specifies a CA's lifetime.

