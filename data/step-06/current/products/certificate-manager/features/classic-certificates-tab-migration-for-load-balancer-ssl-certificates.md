---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:16:01.493Z"
product_name: "Certificate Manager"
product_slug: "certificate-manager"
feature_name: "Classic Certificates tab migration for load-balancer SSL certificates"
feature_slug: "classic-certificates-tab-migration-for-load-balancer-ssl-certificates"
latest_feature_date: "2022-12-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-lb-auth"
  - "https://docs.cloud.google.com/certificate-manager/docs/certificates"
  - "https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas"
keywords:
  - "migration"
  - "classic"
  - "tab"
  - "ssl"
  - "certificates"
  - "balancer"
  - "load"
  - "for"
---

# Classic Certificates tab migration for load-balancer SSL certificates

Product: Certificate Manager
Coverage: LOW

## Step 02 Summary

Load Balancing SSL certificates are now available in the Certificate Manager page under the Classic Certificates tab.

## Extended Definition

Load Balancing SSL certificates are now available in the Certificate Manager page under the Classic Certificates tab.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-lb-auth](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-lb-auth)
- [https://docs.cloud.google.com/certificate-manager/docs/certificates](https://docs.cloud.google.com/certificate-manager/docs/certificates)
- [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas)

## Supporting Pages

### "Deploy a global Google-managed certificate with load balancer authorization\

- URL: [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-lb-auth](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-lb-auth)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following load balancers support Google-managed certificates with load balancer authorization: Global external Application Load Balancer Classic Application Load Balancer Global external proxy Network Load Balancer Classic proxy Network Load Balancer Objectives This tutorial shows you how to complete the following tasks: Create a Google-managed certificate issued by a publicly trusted Certificate Authority (CA) with load balancer authorization by using Certificate Manager.
- To create a Classic proxy Network Load Balancer (SSL proxy), see Set up a classic proxy Network Load Balancer (SSL proxy) with VM instance group backends .
- The new certificate appears in the list of certificates. gcloud To create a global Google-managed certificate with load balancer authorization, use the certificate-manager certificates create command : gcloud certificate-manager certificates create CERTIFICATE NAME \ --domains=" DOMAIN NAMES " Replace the following: CERTIFICATE NAME : the name of the certificate.
- Go to Certificate Manager On the Certificates tab, check the Status column for the certificate. gcloud To verify the status of the certificate, run the following command: gcloud certificate-manager certificates describe CERTIFICATE NAME Replace CERTIFICATE NAME with the name of the target Google-managed certificate.

### Manage certificates \_|\_ Certificate Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/certificate-manager/docs/certificates](https://docs.cloud.google.com/certificate-manager/docs/certificates)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a Google-managed certificate Certificate Manager lets you create Google-managed certificates in the following ways: Google-managed certificates with load balancer authorization (global) Google-managed certificates with DNS authorization (global, regional, and cross-region) Google-managed certificates with Certificate Authority Service (CA Service) (global, regional, and cross-region) Load balancer authorization Load balancer authorization lets you obtain a Google-managed certificate for your domain when traffic is served by the load balancer.
- For information about when to use load balancer authorization with a Google-managed certificate, see Domain authorization types for Google-managed certificates .
- To see certificates provisioned through Cloud Load Balancing: In the Google Cloud console, go to the Classic Certificates tab on the Certificate Manager page.
- The new certificate appears in the list of certificates. gcloud To create a global Google-managed certificate with load balancer authorization, use the certificate-manager certificates create command : gcloud certificate-manager certificates create CERTIFICATE NAME \ --domains=" DOMAIN NAMES " \ [--scope= SCOPE ] Replace the following: CERTIFICATE NAME : the name of the certificate.

### "Deploy a global Google-managed certificate with Certificate Authority Service\

- URL: [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following global load balancers support Google-managed certificates with Certificate Authority Service: Global external Application Load Balancer Classic Application Load Balancer Global external proxy Network Load Balancer Classic proxy Network Load Balancer If you want to deploy to cross-region load balancers or regional load balancers, see the following: Deploy a cross-region Google-managed certificate with Certificate Authority Service Deploy a regional Google-managed certificate with Certificate Authority Service Objectives This tutorial shows you how to complete the following tasks: Create a Google-managed certificate with CA Service by using Certificate Manager.
- To create a Classic proxy Network Load Balancer (SSL proxy), see Set up a classic proxy Network Load Balancer (SSL proxy) with VM instance group backends .
- Go to Certificate Manager On the Certificates tab, check the Status column for the certificate. gcloud To verify the status of the certificate, run the following command: gcloud certificate-manager certificates describe CERTIFICATE NAME Replace CERTIFICATE NAME with the name of the target Google-managed certificate.
- To create a Global external proxy Network Load Balancer (SSL proxy), see Set up a global external proxy Network Load Balancer (SSL proxy) with VM instance group backends .

