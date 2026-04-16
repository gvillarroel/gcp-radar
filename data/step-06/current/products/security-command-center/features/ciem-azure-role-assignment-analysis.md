---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.712Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "CIEM Azure role-assignment analysis"
feature_slug: "ciem-azure-role-assignment-analysis"
latest_feature_date: "2025-04-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/ciem-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/activate-enterprise-tier"
keywords:
  - "ciem"
  - "azure"
  - "role"
  - "assignment"
  - "analysis"
  - "infrastructure"
  - "entitlement"
  - "management"
---

# CIEM Azure role-assignment analysis

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Cloud Infrastructure Entitlement Management can analyze Azure role assignments and generate misconfiguration findings for excessive privileges.

## Extended Definition

Cloud Infrastructure Entitlement Management can analyze Azure role assignments and generate misconfiguration findings for excessive privileges.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/ciem-overview](https://docs.cloud.google.com/security-command-center/docs/ciem-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/activate-enterprise-tier](https://docs.cloud.google.com/security-command-center/docs/activate-enterprise-tier)

## Supporting Pages

### "Overview of Cloud Infrastructure Entitlement Management \_|\_ Security Command\

- URL: [https://docs.cloud.google.com/security-command-center/docs/ciem-overview](https://docs.cloud.google.com/security-command-center/docs/ciem-overview)
- Source ID: `site-docs-reference`
- Final score: 205
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enterprise service tier With Security Command Center's Cloud Infrastructure Entitlement Management (CIEM) capabilities, you can manage which identities have access to which resources in your deployments on multiple cloud platforms and mitigate potential vulnerabilities that result from misconfigurations.
- Home Documentation Security Security Command Center Guides Send feedback Overview of Cloud Infrastructure Entitlement Management Stay organized with collections Save and categorize content based on your preferences.
- For example, the CIEM detection service itself produces a subset of identity and access findings for AWS and Microsoft Azure ( Preview ) that alert you to highly privileged roles, groups, and users.
- Cloud Infrastructure Entitlement Management can also be used with AWS IAM Identity Center to expose vulnerabilities in federated identities on AWS resources.

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 201
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Infrastructure Entitlement Management (CIEM) can analyze and generate misconfiguration findings for Azure role-assignments that grant principals excessive privileges beyond what they use.
- November 21, 2024 Feature As of November 13, 2024, Security Command Center can produce Cloud Entitlement Infrastructure Management (CIEM) findings for the following identity and access issues in AWS environments: Users, groups, or assumed IAM roles that are inactive and have one or more permissions.
- June 13, 2024 Feature Preview of Cloud Infrastructure Entitlement Management capabilities Cloud Infrastructure Entitlement Management (CIEM) for Amazon Web Services (AWS) and other identity providers on Google Cloud, such as Entra ID (Azure AD) and Okta, is now in preview.
- July 25, 2025 Change Cloud Infrastructure Entitlement Management (CIEM) has launched support for log ingestion from Microsoft Azure management groups.

### "Activate the Security Command Center Enterprise tier \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/security-command-center/docs/activate-enterprise-tier](https://docs.cloud.google.com/security-command-center/docs/activate-enterprise-tier)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Cloud threat detection Container Threat Detection overview Overview of Event Threat Detection Virtual Machine Threat Detection overview Connect to AWS for configuration and resource data collection Identity and access security Overview of the IAM recommender integrated service Overview of Cloud Infrastructure Entitlement Management (CIEM) Data security Review and customize data security frameworks Enable Event Threat Detection Enable Sensitive Data Protection Enable discovery Compliance Apply a framework Grant roles in IAM Posture and compliance Manage a security posture Overview of Security Health Analytics Overview of Web Security Scanner Response platform Map and authenticate users to enable SOAR-related features Integrate Security Command Center Enterprise with ticketing systems Update the Enterprise use case Work with playbooks Vulnerability assessment Assess software vulnerabilities overview Configure permissions for ongoing Security Command Center Enterprise use To change the configuration of your organization, you need both of the following roles at the organization level: Organization Administrator ( roles/resourcemanager.organizationAdmin ) Security Center Admin ( roles/securitycenter.admin ) If a user doesn't require edit permissions, consider granting them viewer roles.
- Enterprise service tier The Security Command Center Enterprise tier provides security enhancements, including the following: Advanced security operations using Google Security Operations Integrations with other Google Cloud products, such as Mandiant Attack Surface Management, Sensitive Data Protection, and Assured OSS Multi-cloud support Risk analysis Compliance support ( Preview ) For a description of the Enterprise tier features, see Service tiers .
- Configure permissions and APIs Use information in this section to configure permissions required to activate Security Command Center Enterprise: Configure permissions on the organization Configure permissions and enable APIs on the management project Create a service account if you plan to connect to an existing Google SecOps instance Learn more about Security Command Center roles and Google Cloud APIs .
- You need at least the Chronicle API Restricted Data Access Viewer ( roles/chronicle.restrictedDataAccessViewer ) role on the management project to sign in to the instance.

