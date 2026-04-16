---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:53:06.942Z"
product_name: "Certificate Manager"
product_slug: "certificate-manager"
feature_name: "Global external HTTP(S) Load Balancer support"
feature_slug: "global-external-http-s-load-balancer-support"
latest_feature_date: "2022-04-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-lb-auth"
  - "https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas"
  - "https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-dns-auth"
keywords:
  - "global external LB integration"
  - "Certificate Manager and global external LB"
  - "global external HTTP(S) Load Balancer"
  - "global external HTTPS load balancer"
  - "global HTTPS LB"
  - "global external ALB"
  - "HTTP(S) LB support"
---

# Global external HTTP(S) Load Balancer support

Product: Certificate Manager
Coverage: MEDIUM

## Step 02 Summary

Certificate Manager adds support for the global external HTTP(S) load balancer.

## Extended Definition

Certificate Manager provides deployment for **global Google-managed certificates** on Google Cloud global load balancers. The guides state that a global Google-managed certificate is deployed via a certificate map/entry and attached to a supported load balancer using a target HTTPS proxy, with the supported global targets including global external Application Load Balancer and global external proxy Network Load Balancer, indicating HTTPS-capable global external LB integration. In the load balancer authorization method, certificate issuance is tied to traffic served by the load balancer and does not require additional DNS records.

## Evidence Summary

These three official Google Cloud Certificate Manager deployment pages document global Google-managed certificate deployment workflows and explicitly list supported global external LB types, along with certificate map/target HTTPS proxy attachment guidance.

## Source Links

- [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-lb-auth](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-lb-auth)
- [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas)
- [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-dns-auth](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-dns-auth)

## Supporting Pages

### "Deploy a global Google-managed certificate with load balancer authorization\

- URL: [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-lb-auth](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-lb-auth)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: STRONG
- Re-rank rationale: The page is explicitly about deploying a global Google-managed certificate and deploying it to supported load balancers, including global external Application/Network Load Balancer variants.

### "Deploy a global Google-managed certificate with Certificate Authority Service\

- URL: [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas)
- Source ID: `site-docs-root`
- Final score: 72
- Re-rank relevance: STRONG
- Re-rank rationale: The page is a tutorial for deploying a global Google-managed certificate and explicitly identifies supported global load balancer types, including global external Application Load Balancer variants.

### "Deploy a global Google-managed certificate with DNS authorization \_|\_\

- URL: [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-dns-auth](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-dns-auth)
- Source ID: `site-docs-root`
- Final score: 72
- Re-rank relevance: STRONG
- Re-rank rationale: It explicitly documents deploying global Google-managed certificates with DNS authorization to supported global load balancers, including global external Application Load Balancer and target HTTPS proxy.

