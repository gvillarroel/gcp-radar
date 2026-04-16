---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:53:06.934Z"
product_name: "Certificate Manager"
product_slug: "certificate-manager"
feature_name: "Regional Application Load Balancer integration"
feature_slug: "regional-application-load-balancer-integration"
latest_feature_date: "2024-03-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas-cross-reg"
  - "https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-dns-auth-cross-reg"
keywords:
  - "regional internal Application Load Balancer"
  - "regional external Application Load Balancer"
  - "Application Load Balancer with Certificate Manager"
  - "regional app LB support"
  - "public preview regional ALB"
  - "regional ALB integration"
  - "regional application LB"
  - "regional ALB"
---

# Regional Application Load Balancer integration

Product: Certificate Manager
Coverage: LOW

## Step 02 Summary

Certificate Manager supports integration with both regional external and regional internal Application Load Balancers; Certificate Manager supports integration with regional external and regional internal Application Load Balancers in public preview.

## Extended Definition

Certificate Manager supports deployment of Google-managed certificates to regional Application Load Balancers, specifically both regional external and regional internal ALBs, with regional guides stating that certificates can be deployed to either target type. It also provides a separate cross-region deployment guide for cross-region internal ALBs, but the cited pages do not explicitly label these capabilities as being in public preview or GA.

## Evidence Summary

The cited Certificate Manager deployment docs identify supported load-balancer scopes (regional and cross-region) and explicitly mention regional external vs regional internal ALB targets in the regional workflow, while also documenting a cross-region internal ALB flow.

## Source Links

- [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas-cross-reg](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas-cross-reg)
- [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-dns-auth-cross-reg](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-dns-auth-cross-reg)

## Supporting Pages

### "Deploy a cross-region Google-managed certificate with Certificate Authority\

- URL: [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas-cross-reg](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-cas-cross-reg)
- Source ID: `site-iam-reference`
- Final score: 68
- Re-rank relevance: STRONG
- Re-rank rationale: The page is specifically a tutorial for deploying a Google-managed Certificate Authority Service certificate to a cross-region internal Application Load Balancer, providing concrete integration guidance.

### "Deploy a global Google-managed certificate with load balancer authorization\

- URL: [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-lb-auth](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-lb-auth)
- Source ID: `site-docs-root`
- Final score: 66
- Re-rank relevance: WEAK
- Re-rank rationale: It discusses load balancer authorization with Google-managed certificates but only for global external/proxy LBs, not regional ALB integration or preview status.

### "Deploy a cross-region Google-managed certificate with DNS authorization\

- URL: [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-dns-auth-cross-reg](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-dns-auth-cross-reg)
- Source ID: `site-iam-reference`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: The page is centered on deploying a Google-managed certificate to a cross-region internal Application Load Balancer, but it is focused on cross-region behavior rather than explicitly defining regional ALB support.

