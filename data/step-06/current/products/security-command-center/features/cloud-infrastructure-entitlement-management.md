---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.800Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Cloud Infrastructure Entitlement Management"
feature_slug: "cloud-infrastructure-entitlement-management"
latest_feature_date: "2024-08-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/ciem-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/activate-enterprise-tier"
keywords:
  - "infrastructure"
  - "entitlement"
  - "management"
  - "ciem"
  - "provides"
  - "visibility"
  - "into"
  - "identity"
---

# Cloud Infrastructure Entitlement Management

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

CIEM provides visibility into identity and access configurations to help enforce least privilege; CIEM analyzes identity and access configurations across AWS and supported identity providers to identify excessive permissions and remediation steps.

## Extended Definition

CIEM provides visibility into identity and access configurations to help enforce least privilege; CIEM analyzes identity and access configurations across AWS and supported identity providers to identify excessive permissions and remediation steps.

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
- Final score: 277
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enterprise service tier With Security Command Center's Cloud Infrastructure Entitlement Management (CIEM) capabilities, you can manage which identities have access to which resources in your deployments on multiple cloud platforms and mitigate potential vulnerabilities that result from misconfigurations.
- Cloud Infrastructure Entitlement Management can also be used with AWS IAM Identity Center to expose vulnerabilities in federated identities on AWS resources.
- Discovery of federated identities' permissions CIEM helps to provide a more granular view of the security of your identity and access configurations by providing insight into the Google Cloud and AWS permissions of federated identities from other identity providers, such as Entra ID (Azure AD), Okta, and on-premises Active Directory.
- Home Documentation Security Security Command Center Guides Send feedback Overview of Cloud Infrastructure Entitlement Management Stay organized with collections Save and categorize content based on your preferences.

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 243
- Re-rank relevance: N/A

Evidence snippets:
- November 21, 2024 Feature As of November 13, 2024, Security Command Center can produce Cloud Entitlement Infrastructure Management (CIEM) findings for the following identity and access issues in AWS environments: Users, groups, or assumed IAM roles that are inactive and have one or more permissions.
- June 13, 2024 Feature Preview of Cloud Infrastructure Entitlement Management capabilities Cloud Infrastructure Entitlement Management (CIEM) for Amazon Web Services (AWS) and other identity providers on Google Cloud, such as Entra ID (Azure AD) and Okta, is now in preview.
- December 16, 2024 Feature Security Command Center can now produce Cloud Infrastructure Entitlement Management (CIEM) misconfiguration findings for federated identities that are connected to your AWS environment through the AWS IAM Identity Center.
- Feature Cloud Infrastructure Entitlement Management (CIEM) is generally available CIEM helps you adhere to the principle of least privilege by providing a comprehensive look at the security of your identity and access configuration.

### "Activate the Security Command Center Enterprise tier \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/security-command-center/docs/activate-enterprise-tier](https://docs.cloud.google.com/security-command-center/docs/activate-enterprise-tier)
- Source ID: `site-docs-reference`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud threat detection Container Threat Detection overview Overview of Event Threat Detection Virtual Machine Threat Detection overview Connect to AWS for configuration and resource data collection Identity and access security Overview of the IAM recommender integrated service Overview of Cloud Infrastructure Entitlement Management (CIEM) Data security Review and customize data security frameworks Enable Event Threat Detection Enable Sensitive Data Protection Enable discovery Compliance Apply a framework Grant roles in IAM Posture and compliance Manage a security posture Overview of Security Health Analytics Overview of Web Security Scanner Response platform Map and authenticate users to enable SOAR-related features Integrate Security Command Center Enterprise with ticketing systems Update the Enterprise use case Work with playbooks Vulnerability assessment Assess software vulnerabilities overview Configure permissions for ongoing Security Command Center Enterprise use To change the configuration of your organization, you need both of the following roles at the organization level: Organization Administrator ( roles/resourcemanager.organizationAdmin ) Security Center Admin ( roles/securitycenter.admin ) If a user doesn't require edit permissions, consider granting them viewer roles.
- Enterprise service tier The Security Command Center Enterprise tier provides security enhancements, including the following: Advanced security operations using Google Security Operations Integrations with other Google Cloud products, such as Mandiant Attack Surface Management, Sensitive Data Protection, and Assured OSS Multi-cloud support Risk analysis Compliance support ( Preview ) For a description of the Enterprise tier features, see Service tiers .
- For instructions on activating Security Command Center with a different service tier, see the following: Activate Security Command Center Standard tier Activate Security Command Center Premium tier Before you begin Before you activate Security Command Center for the first time, complete the following: Plan for the activation Create an organization Create the management project Configure permissions and APIs Configure notification contacts Plan for the activation This section describes decisions and information you need to prepare for the activation.
- Verify organization policies If your organization policies are set to restrict resource usage , verify that the following APIs are permitted: chronicle.googleapis.com cloudsecuritycompliance.googleapis.com securitycenter.googleapis.com securitycentermanagement.googleapis.com Create a management project Security Command Center Enterprise requires a project, which is called the management project , to enable Google SecOps and Mandiant Attack Surface Management integration.

