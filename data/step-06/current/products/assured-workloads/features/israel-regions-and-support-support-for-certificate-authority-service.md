---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:27:30.771Z"
product_name: "Assured Workloads"
product_slug: "assured-workloads"
feature_name: "Israel Regions and Support support for Certificate Authority Service"
feature_slug: "israel-regions-and-support-support-for-certificate-authority-service"
latest_feature_date: "2023-07-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-compliance"
  - "https://docs.cloud.google.com/certificate-authority-service/docs/faqs"
  - "https://docs.cloud.google.com/certificate-authority-service/docs/issue-certificate-using-template"
keywords:
  - "israel"
  - "regions"
  - "certificate"
  - "authority"
  - "compliance"
  - "program"
  - "supports"
  - "assured"
---

# Israel Regions and Support support for Certificate Authority Service

Product: Assured Workloads
Coverage: MEDIUM

## Step 02 Summary

The Israel Regions and Support compliance program supports Certificate Authority Service in Assured Workloads.

## Extended Definition

The Israel Regions and Support compliance program supports Certificate Authority Service in Assured Workloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-compliance](https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-compliance)
- [https://docs.cloud.google.com/certificate-authority-service/docs/faqs](https://docs.cloud.google.com/certificate-authority-service/docs/faqs)
- [https://docs.cloud.google.com/certificate-authority-service/docs/issue-certificate-using-template](https://docs.cloud.google.com/certificate-authority-service/docs/issue-certificate-using-template)

## Supporting Pages

### "Certificate Authority Service security and compliance \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-compliance](https://docs.cloud.google.com/certificate-authority-service/docs/certificate-authority-compliance)
- Source ID: `site-docs-reference-3`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Certificate Authority Service security and compliance Security Certificate Authority Service supports the following Google Cloud security products: VPC Service Controls (VPC-SC) Access Transparency Access Approval Workforce identity federation Data residency For information about the security measures in place for Google Cloud services, see Google Cloud Security .
- Compliance Certificate Authority Service meets the following compliance standards: ISO 27001 ISO 27017 ISO 27018 SOC1 SOC2 SOC3 VPAT PCI DSS Cloud Computing Compliance Controls Catalog (C5) FedRAMP Moderate and FedRAMP High IRAP HIPAA CJIS ITAR ISMAP You can read more about Google Cloud compliance on the Compliance resource center .
- Home Documentation Security Certificate Authority Service Resources Send feedback Stay organized with collections Save and categorize content based on your preferences.

### "Frequently asked questions \_|\_ Certificate Authority Service \_|\_ Google\

- URL: [https://docs.cloud.google.com/certificate-authority-service/docs/faqs](https://docs.cloud.google.com/certificate-authority-service/docs/faqs)
- Source ID: `site-docs-reference-3`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Supported products and limitations > Certificate Authority Service and Security and Compliance .
- Certificate Authority Service is a highly available, scalable Google Cloud service that enables customers to simplify, automate, and customize the deployment, management, and security of private certificate authorities (CAs) while staying in control of their private keys.
- Home Documentation Security Certificate Authority Service Resources Send feedback Stay organized with collections Save and categorize content based on your preferences.
- CA Service supports CMEK for encrypting certain fields in certificates, such as the certificate subject and Subject Alternative Names (SANs).

### "Request a certificate using a certificate template \_|\_ Certificate Authority\

- URL: [https://docs.cloud.google.com/certificate-authority-service/docs/issue-certificate-using-template](https://docs.cloud.google.com/certificate-authority-service/docs/issue-certificate-using-template)
- Source ID: `site-docs-reference-3`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License. / resource "google privateca certificate template" "template" { location = "us-central1" name = "my-certificate-template" description = "An updated sample certificate template" identity constraints { allow subject alt names passthrough = true allow subject passthrough = true cel expression { description = "Always true" expression = "true" location = "any.file.anywhere" title = "Sample expression" } } passthrough extensions { additional extensions { object id path = [1, 6] } known extensions = ["EXTENDED KEY USAGE"] } predefined values { additional extensions { object id { object id path = [1, 6] } value = "c3RyaW5nCg==" critical = true } aia ocsp servers = ["string"] ca options { is ca = false max issuer path length = 6 } key usage { base key usage { cert sign = false content commitment = true crl sign = false data encipherment = true decipher only = true digital signature = true encipher only = true key agreement = true key encipherment = true } extended key usage { client auth = true code signing = true email protection = true ocsp signing = true server auth = true time stamping = true } unknown extended key usages { object id path = [1, 6] } } policy ids { object id path = [1, 6] } } } resource "google privateca certificate authority" "test ca" { pool = "my-pool" certificate authority id = "my-certificate-authority-test-ca" location = "us-central1" deletion protection = false # set to true to prevent destruction of the resource config { subject config { subject { organization = "HashiCorp" common name = "my-certificate-authority" } subject alt name { dns names = ["hashicorp.com"] } } x509 config { ca options { is ca MUST be true for certificate authorities is ca = true } key usage { base key usage { cert sign and crl sign MUST be true for certificate authorities cert sign = true crl sign = true } extended key usage { server auth = false } } } } key spec { algorithm = "RSA PKCS1 4096 SHA256" } } resource "google privateca certificate" "default" { pool = "my-pool" location = "us-central1" certificate authority = google privateca certificate authority.test ca.certificate authority id lifetime = "860s" name = "my-certificate-from-template" pem csr = tls cert request.example.cert request pem certificate template = google privateca certificate template.template.id } resource "tls private key" "example" { algorithm = "RSA" } resource "tls cert request" "example" { private key pem = tls private key.example.private key pem subject { common name = "example.com" organization = "ACME Examples, Inc" } } To learn how to apply or remove a Terraform configuration, see Basic Terraform commands .
- Issue certificates using a certificate template To issue a signed certificate using a certificate template, do the following: Console Go to the Certificate Authority Service page on the Google Cloud console.
- Home Documentation Security Certificate Authority Service Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- To test certificate issuance using a certificate template, follow these steps: Console Go to the Certificate Authority Service page on the Google Cloud console.

