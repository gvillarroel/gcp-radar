---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:16:01.487Z"
product_name: "Certificate Manager"
product_slug: "certificate-manager"
feature_name: "Regional Application Load Balancer integration"
feature_slug: "regional-application-load-balancer-integration"
latest_feature_date: "2024-03-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/certificate-manager/docs/certificates"
  - "https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas-regional"
  - "https://docs.cloud.google.com/certificate-manager/docs/deploy"
keywords:
  - "application"
  - "integration"
  - "regional"
  - "balancer"
  - "supports"
  - "load"
  - "certificate"
  - "manager"
---

# Regional Application Load Balancer integration

Product: Certificate Manager
Coverage: LOW

## Step 02 Summary

Certificate Manager supports integration with both regional external and regional internal Application Load Balancers; Certificate Manager supports integration with regional external and regional internal Application Load Balancers in public preview.

## Extended Definition

Certificate Manager supports integration with both regional external and regional internal Application Load Balancers; Certificate Manager supports integration with regional external and regional internal Application Load Balancers in public preview.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/certificate-manager/docs/certificates](https://docs.cloud.google.com/certificate-manager/docs/certificates)
- [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas-regional](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas-regional)
- [https://docs.cloud.google.com/certificate-manager/docs/deploy](https://docs.cloud.google.com/certificate-manager/docs/deploy)

## Supporting Pages

### Manage certificates \_|\_ Certificate Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/certificate-manager/docs/certificates](https://docs.cloud.google.com/certificate-manager/docs/certificates)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a Google-managed certificate Certificate Manager lets you create Google-managed certificates in the following ways: Google-managed certificates with load balancer authorization (global) Google-managed certificates with DNS authorization (global, regional, and cross-region) Google-managed certificates with Certificate Authority Service (CA Service) (global, regional, and cross-region) Load balancer authorization Load balancer authorization lets you obtain a Google-managed certificate for your domain when traffic is served by the load balancer.
- SCOPE : enter one of the following options: default : if you plan to use the certificate with global external Application Load Balancer or global external proxy Network Load Balancer. all-regions : if you plan to use the certificate with cross-region internal Application Load Balancer. edge-cache : if you plan to use the certificate with Media CDN and specify multiple domains in the certificate.
- SCOPE : enter one of the following options: default : if you plan to use the certificate with global external Application Load Balancer or global external proxy Network Load Balancer. all-regions : if you plan to use the certificate with cross-region internal Application Load Balancer. edge-cache : if you plan to use the certificate with Media CDN and specify multiple domains in the certificate.
- SCOPE : enter one of the following options: default : if you plan to use the certificate with global external Application Load Balancer or global external proxy Network Load Balancer. all-regions : if you plan to use the certificate with cross-region internal Application Load Balancer. edge-cache : if you plan to use the certificate with Media CDN and specify multiple domains in the certificate.

### "Deploy a regional Google-managed certificate with Certificate Authority\

- URL: [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas-regional](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas-regional)
- Source ID: `site-iam-reference`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This tutorial shows you how to use Certificate Manager to deploy a regional Google-managed certificate with Certificate Authority Service to a regional external Application Load Balancer or to a regional internal Application Load Balancer.
- If you want to deploy to global external load balancers or cross-region load balancers, see the following: Deploy a global Google-managed certificate with Certificate Authority Service Deploy a cross-region Google-managed certificate with Certificate Authority Service Objectives This tutorial shows you how to complete the following tasks: Create a Google-managed certificate with CA Service by using Certificate Manager.
- Deploy the regional Google-managed certificate to a load balancer To deploy the regional Google-managed certificate, attach it directly to the target proxy.
- To create a regional external Application Load Balancer, see Set up a regional external Application Load Balancer with VM instance group backends .

### Deployment overview \_|\_ Certificate Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/certificate-manager/docs/deploy](https://docs.cloud.google.com/certificate-manager/docs/deploy)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This method is used by the following Application Load Balancers that are powered by managed open-source Envoy proxy software: Regional external Application Load Balancers Regional internal Application Load Balancers Cross-region internal Application Load Balancers Certificate Manager also supports the following products, which reference Certificate Manager certificates as part of their configuration: Secure Web Proxy gateway references Certificate Manager certificates : before you can configure a Secure Web Proxy gateway, you create one or more Certificate Manager certificates for the gateway to use.
- Product Google-managed certificates Self-managed certificates Load balancer authorization DNS authorization Certificate Authority Service (CA Service) Global external Application Load Balancers and proxy Network Load Balancers Global external Application Load Balancer Classic Application Load Balancer Global external proxy Network Load Balancer Classic proxy Network Load Balancer Deployment guide Deployment guide Deployment guide Deployment guide Regional external and internal Application Load Balancers: Regional external Application Load Balancer Regional internal Application Load Balancer Deployment guide Deployment guide Deployment guide Cross-region internal Application Load Balancers Deployment guide Deployment guide Deployment guide Secure Web Proxy gateways Deployment guide Deployment guide Deployment guide Media CDN edge cache services What's next If you want to migrate an existing certificate from your load balancer to Certificate Manager, follow the instructions in Migrate a certificate to Certificate Manager .
- This method is used by external Application Load Balancers and external proxy Network Load Balancers that are powered by Google Front Ends (GFEs): Global external Application Load Balancers Classic Application Load Balancers Global external proxy Network Load Balancers Classic proxy Network Load Balancers Load balancer's target proxy references Certificate Manager certificates directly : the load balancer's target proxy can reference up to 100 Certificate Manager certificates .
- Certificate Manager configuration methods Certificate Manager offers two certificate configuration methods for Application Load Balancers using target HTTPS proxies and proxy Network Load Balancers using target SSL proxies.

