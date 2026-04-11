---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:16:01.494Z"
product_name: "Certificate Manager"
product_slug: "certificate-manager"
feature_name: "Global external HTTP(S) Load Balancer support"
feature_slug: "global-external-http-s-load-balancer-support"
latest_feature_date: "2022-04-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-lb-auth"
  - "https://docs.cloud.google.com/certificate-manager/docs/deploy-self-managed"
  - "https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas"
keywords:
  - "global"
  - "http"
  - "external"
  - "balancer"
  - "load"
  - "adds"
  - "certificate"
  - "manager"
---

# Global external HTTP(S) Load Balancer support

Product: Certificate Manager
Coverage: LOW

## Step 02 Summary

Certificate Manager adds support for the global external HTTP(S) load balancer.

## Extended Definition

Certificate Manager adds support for the global external HTTP(S) load balancer.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-lb-auth](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-lb-auth)
- [https://docs.cloud.google.com/certificate-manager/docs/deploy-self-managed](https://docs.cloud.google.com/certificate-manager/docs/deploy-self-managed)
- [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas)

## Supporting Pages

### "Deploy a global Google-managed certificate with load balancer authorization\

- URL: [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-lb-auth](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-lb-auth)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following load balancers support Google-managed certificates with load balancer authorization: Global external Application Load Balancer Classic Application Load Balancer Global external proxy Network Load Balancer Classic proxy Network Load Balancer Objectives This tutorial shows you how to complete the following tasks: Create a Google-managed certificate issued by a publicly trusted Certificate Authority (CA) with load balancer authorization by using Certificate Manager.
- The new certificate appears in the list of certificates. gcloud To create a global Google-managed certificate with load balancer authorization, use the certificate-manager certificates create command : gcloud certificate-manager certificates create CERTIFICATE NAME \ --domains=" DOMAIN NAMES " Replace the following: CERTIFICATE NAME : the name of the certificate.
- Home Documentation Security Certificate Manager Guides Send feedback Deploy a global Google-managed certificate with load balancer authorization Stay organized with collections Save and categorize content based on your preferences.
- This tutorial shows you how to use Certificate Manager to deploy a global Google-managed certificate with load balancer authorization .

### "Deploy a global self-managed certificate \_|\_ Certificate Manager \_|\_\

- URL: [https://docs.cloud.google.com/certificate-manager/docs/deploy-self-managed](https://docs.cloud.google.com/certificate-manager/docs/deploy-self-managed)
- Source ID: `site-docs-root`
- Final score: 232
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following load balancers support global self-managed certificates: Global external Application Load Balancer Classic Application Load Balancer Global external proxy Network Load Balancer Classic proxy Network Load Balancer If you want to deploy to regional or cross-region load balancers, see the following: Deploy a regional self-managed certificate Deploy a cross-region self-managed certificate Objectives This tutorial shows you how to complete the following tasks: Upload a self-managed certificate to Certificate Manager.
- If you haven't created the load balancer, see the following pages to create one: To create a global external Application Load Balancer, see Set up a global external Application Load Balancer with VM instance group backends .
- To create a Global external proxy Network Load Balancer (SSL proxy), see Set up a global external proxy Network Load Balancer (SSL proxy) with VM instance group backends .
- Deploy the self-managed certificate to a load balancer To deploy the global self-managed certificate, use a certificate map.

### "Deploy a global Google-managed certificate with Certificate Authority Service\

- URL: [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following global load balancers support Google-managed certificates with Certificate Authority Service: Global external Application Load Balancer Classic Application Load Balancer Global external proxy Network Load Balancer Classic proxy Network Load Balancer If you want to deploy to cross-region load balancers or regional load balancers, see the following: Deploy a cross-region Google-managed certificate with Certificate Authority Service Deploy a regional Google-managed certificate with Certificate Authority Service Objectives This tutorial shows you how to complete the following tasks: Create a Google-managed certificate with CA Service by using Certificate Manager.
- If you haven't created the load balancer, see the following pages to create one: To create a global external Application Load Balancer, see Set up a global external Application Load Balancer with VM instance group backends .
- To create a Global external proxy Network Load Balancer (SSL proxy), see Set up a global external proxy Network Load Balancer (SSL proxy) with VM instance group backends .
- Deploy the certificate to a load balancer To deploy the global Google-managed certificate, use a certificate map.

