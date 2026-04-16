---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.766Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "CIEM account-level findings in AWS"
feature_slug: "ciem-account-level-findings-in-aws"
latest_feature_date: "2025-02-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/ciem-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/activate-enterprise-tier"
keywords:
  - "ciem"
  - "account"
  - "level"
  - "findings"
  - "aws"
  - "infrastructure"
  - "entitlement"
  - "management"
---

# CIEM account-level findings in AWS

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Cloud Infrastructure Entitlement Management can generate findings at the individual AWS account level using account-scoped audit logs.

## Extended Definition

Cloud Infrastructure Entitlement Management can generate findings at the individual AWS account level using account-scoped audit logs.

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
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enterprise service tier With Security Command Center's Cloud Infrastructure Entitlement Management (CIEM) capabilities, you can manage which identities have access to which resources in your deployments on multiple cloud platforms and mitigate potential vulnerabilities that result from misconfigurations.
- Home Documentation Security Security Command Center Guides Send feedback Overview of Cloud Infrastructure Entitlement Management Stay organized with collections Save and categorize content based on your preferences.
- Cloud Infrastructure Entitlement Management can also be used with AWS IAM Identity Center to expose vulnerabilities in federated identities on AWS resources.
- Quick access to identity and access findings Security issues often arise due to undetected identity and access misconfigurations such as highly privileged principals, dormant identities, unrotated service account keys, and a lack of multifactor authentication.

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- November 21, 2024 Feature As of November 13, 2024, Security Command Center can produce Cloud Entitlement Infrastructure Management (CIEM) findings for the following identity and access issues in AWS environments: Users, groups, or assumed IAM roles that are inactive and have one or more permissions.
- The query presets support cloud infrastructure entitlement management (CIEM) by filtering vulnerability finding categories to those that are related to principal accounts that are misconfigured or that have excessive permissions to Google Cloud resources.
- December 16, 2024 Feature Security Command Center can now produce Cloud Infrastructure Entitlement Management (CIEM) misconfiguration findings for federated identities that are connected to your AWS environment through the AWS IAM Identity Center.
- Cloud Infrastructure Entitlement Management (CIEM) can analyze and generate misconfiguration findings for Azure role-assignments that grant principals excessive privileges beyond what they use.

### "Activate the Security Command Center Enterprise tier \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/security-command-center/docs/activate-enterprise-tier](https://docs.cloud.google.com/security-command-center/docs/activate-enterprise-tier)
- Source ID: `site-docs-reference`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud threat detection Container Threat Detection overview Overview of Event Threat Detection Virtual Machine Threat Detection overview Connect to AWS for configuration and resource data collection Identity and access security Overview of the IAM recommender integrated service Overview of Cloud Infrastructure Entitlement Management (CIEM) Data security Review and customize data security frameworks Enable Event Threat Detection Enable Sensitive Data Protection Enable discovery Compliance Apply a framework Grant roles in IAM Posture and compliance Manage a security posture Overview of Security Health Analytics Overview of Web Security Scanner Response platform Map and authenticate users to enable SOAR-related features Integrate Security Command Center Enterprise with ticketing systems Update the Enterprise use case Work with playbooks Vulnerability assessment Assess software vulnerabilities overview Configure permissions for ongoing Security Command Center Enterprise use To change the configuration of your organization, you need both of the following roles at the organization level: Organization Administrator ( roles/resourcemanager.organizationAdmin ) Security Center Admin ( roles/securitycenter.admin ) If a user doesn't require edit permissions, consider granting them viewer roles.
- Enable the APIs Create a service account when using an existing Google SecOps instance If you plan to connect to an existing Google SecOps instance , create a user-managed service account and grant the service account the following roles: Chronicle SOAR Service Agent ( roles/chronicle.soarServiceAgent ) and Pub/Sub Admin ( roles/pubsub.admin ) on the organization level where you plan to activate Security Command Center.
- Configure permissions and APIs Use information in this section to configure permissions required to activate Security Command Center Enterprise: Configure permissions on the organization Configure permissions and enable APIs on the management project Create a service account if you plan to connect to an existing Google SecOps instance Learn more about Security Command Center roles and Google Cloud APIs .
- Instead, grant the following roles at the folder or project level: Security Center Assets Viewer ( roles/securitycenter.assetsViewer ) Security Center Findings Viewer ( roles/securitycenter.findingsViewer ) Each detection service may require additional permissions to enable or configure it.

