---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:16:01.488Z"
product_name: "Certificate Manager"
product_slug: "certificate-manager"
feature_name: "Project-isolated certificate management"
feature_slug: "project-isolated-certificate-management"
latest_feature_date: "2024-02-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/certificate-manager/docs/certificates"
  - "https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerClient"
keywords:
  - "management"
  - "isolated"
  - "managing"
  - "project"
  - "certificates"
  - "supports"
  - "certificate"
  - "manager"
---

# Project-isolated certificate management

Product: Certificate Manager
Coverage: LOW

## Step 02 Summary

Certificate Manager supports managing certificates independently per project with separate authorization.

## Extended Definition

Certificate Manager supports managing certificates independently per project with separate authorization.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/certificate-manager/docs/certificates](https://docs.cloud.google.com/certificate-manager/docs/certificates)
- [https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerAsyncClient](https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerClient](https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerClient)

## Supporting Pages

### Manage certificates \_|\_ Certificate Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/certificate-manager/docs/certificates](https://docs.cloud.google.com/certificate-manager/docs/certificates)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Terraform Use a google certificate manager certificate resource . resource "google certificate manager certificate" "root cert" { name = "${local.name}-rootcert-${random id.tf prefix.hex}" description = "The wildcard cert" managed { domains = [local.domain, " .${local.domain}"] dns authorizations = [ google certificate manager dns authorization.default.id ] } labels = { "terraform" : true } } API Create the certificate by making a POST request to the certificates. create method as follows: POST /v1/projects/ PROJECT ID /locations/ LOCATION /certificates?certificate id= CERTIFICATE NAME { "managed": { "domains": [" DOMAIN NAME "], "issuanceConfig": " ISSUANCE CONFIG NAME ", "scope": " SCOPE " //optional } } Replace the following: PROJECT ID : the ID of the Google Cloud project.
- Console If your project contains more than 10,000 certificates that are managed by Certificate Manager, the Certificate Manager page in the Google Cloud console won't list them.
- Go to Certificate Manager On the Classic Certificates tab, you can view a list of all the configured classic certificates in the selected project.
- If your project contains more than 10,000 certificates that are managed by Certificate Manager, use the gcloud CLI command.

### "Class CertificateManagerAsyncClient (1.12.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerAsyncClient](https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import certificate manager v1 async def sample list certificates(): Create a client client = certificate manager v1 .
- ListCertificatesRequest ( parent="parent value", ) Make the request page result = client. list certificates (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.certificate manager v1.types.ListCertificatesRequest , dict]] The request object.
- Certificates Manager API service provides methods to manage certificates, group them into collections, and create serving configuration that can be easily applied to other Cloud resources e.g.
- Returns Type Description google.cloud.certificate manager v1.services.certificate manager.pagers.ListCertificatesAsyncPager Response for the ListCertificates method.

### "Class CertificateManagerClient (1.12.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerClient](https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.services.certificate_manager.CertificateManagerClient)
- Source ID: `site-python-reference`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import certificate manager v1 def sample list certificates(): Create a client client = certificate manager v1 .
- ListCertificatesRequest ( parent="parent value", ) Make the request page result = client. list certificates (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.certificate manager v1.types.ListCertificatesRequest , dict] The request object.
- Certificates Manager API service provides methods to manage certificates, group them into collections, and create serving configuration that can be easily applied to other Cloud resources e.g.
- Returns Type Description google.cloud.certificate manager v1.services.certificate manager.pagers.ListCertificatesPager Response for the ListCertificates method.

