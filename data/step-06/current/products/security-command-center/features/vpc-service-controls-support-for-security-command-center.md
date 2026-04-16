---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.837Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "VPC Service Controls support for Security Command Center"
feature_slug: "vpc-service-controls-support-for-security-command-center"
latest_feature_date: "2024-02-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/database-center/docs/configure-vpc-service-controls"
  - "https://docs.cloud.google.com/security-command-center/docs/asm-allow-access-vpcsc"
  - "https://docs.cloud.google.com/security-command-center/docs/compliance-manager-configure-vpc-sc"
keywords:
  - "vpc"
  - "controls"
  - "security"
  - "command"
  - "center"
  - "can"
  - "now"
  - "protected"
---

# VPC Service Controls support for Security Command Center

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Security Command Center can now be protected with VPC Service Controls perimeters; Security Command Center can be protected using VPC Service Controls perimeters.

## Extended Definition

Security Command Center can now be protected with VPC Service Controls perimeters; Security Command Center can be protected using VPC Service Controls perimeters.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/database-center/docs/configure-vpc-service-controls](https://docs.cloud.google.com/database-center/docs/configure-vpc-service-controls)
- [https://docs.cloud.google.com/security-command-center/docs/asm-allow-access-vpcsc](https://docs.cloud.google.com/security-command-center/docs/asm-allow-access-vpcsc)
- [https://docs.cloud.google.com/security-command-center/docs/compliance-manager-configure-vpc-sc](https://docs.cloud.google.com/security-command-center/docs/compliance-manager-configure-vpc-sc)

## Supporting Pages

### "Configure VPC Service Controls \_|\_ Database Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/database-center/docs/configure-vpc-service-controls](https://docs.cloud.google.com/database-center/docs/configure-vpc-service-controls)
- Source ID: `site-docs-reference-2`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- How to secure Database Center service using VPC Service Controls Configuring VPC Service Controls for Database Center project includes the following steps: Create and manage a service perimeter .
- Home Documentation Databases Database Center Guides Send feedback Configure VPC Service Controls Stay organized with collections Save and categorize content based on your preferences.
- For a general overview of VPC Service Controls, its security benefits, and its capabilities across supported products, see Overview of VPC Service Controls .
- Before you begin Before you begin, review Overview of VPC Service Controls and Database Center limitations when using VPC Service Controls .

### "Use Compliance Manager with VPC Service Controls \_|\_ Security Command\

- URL: [https://docs.cloud.google.com/security-command-center/docs/compliance-manager-configure-vpc-sc](https://docs.cloud.google.com/security-command-center/docs/compliance-manager-configure-vpc-sc)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Security Command Center Guides Send feedback Use Compliance Manager with VPC Service Controls Stay organized with collections Save and categorize content based on your preferences.
- Add ingress and egress rules Add the following ingress rule: - ingressFrom : identities : - user : USER EMAIL ADDRESS sources : - accessLevel : " " ingressTo : operations : - serviceName : securitycenter.googleapis.com methodSelectors : - method : " " resources : " " Replace USER EMAIL ADDRESS with the email address of the Compliance Manager user.
- Add the following ingress rule to permit Compliance Manager to monitor and audit the resources in your Google Cloud organization: - ingressFrom : identities : - user : USER EMAIL ADDRESS sources : - accessLevel : " " ingressTo : operations : - serviceName : cloudsecuritycompliance.googleapis.com methodSelectors : - method : " " resources : " " Replace USER EMAIL ADDRESS with the email address of the Compliance Manager user.
- Standard, Premium, and Enterprise service tiers (requires organization-level activation ) If you enable Compliance Manager within a VPC Service Controls service perimeter, you must configure egress and ingress rules .

### "Use Mandiant Attack Surface Management with VPC Service Controls \_|\_ Security\

- URL: [https://docs.cloud.google.com/security-command-center/docs/asm-allow-access-vpcsc](https://docs.cloud.google.com/security-command-center/docs/asm-allow-access-vpcsc)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Security Command Center Guides Send feedback Use Mandiant Attack Surface Management with VPC Service Controls Stay organized with collections Save and categorize content based on your preferences.
- Create the ingress rules To allow Mandiant Attack Surface Management in Security Command Center within VPC Service Controls perimeters, add the required ingress rules in those perimeters.
- Required roles To get the permissions that you need to use Mandiant Attack Surface Management within VPC Service Controls perimeters. , ask your administrator to grant you the Access Context Manager Editor ( roles/accesscontextmanager.policyEditor ) IAM role on your organization.
- Enterprise service tier (not available if data residency controls are enabled) This document describes how to add ingress rules to allow Mandiant Attack Surface Management within VPC Service Controls perimeters.

