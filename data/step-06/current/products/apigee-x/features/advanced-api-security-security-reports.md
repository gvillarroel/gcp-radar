---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.189Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Advanced API Security security reports"
feature_slug: "advanced-api-security-security-reports"
latest_feature_date: "2022-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway"
  - "https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview"
  - "https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery"
keywords:
  - "threats"
  - "detect"
  - "help"
  - "reports"
  - "other"
  - "bots"
  - "advanced"
  - "security"
---

# Advanced API Security security reports

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Security reports help detect bots and other threats in API traffic.

## Extended Definition

Security reports help detect bots and other threats in API traffic.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway](https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway)
- [https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview](https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview)
- [https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery](https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery)

## Supporting Pages

### "Advanced API Security for multiple Apigee organizations and gateways \_\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway](https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway)
- Source ID: `site-docs-reference-2`
- Final score: 149
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Apigee Advanced API Security is available as an additional add-on for your API hub instance to help you manage and govern the security posture of your APIs across multiple Apigee organizations, environments, and gateways.
- IAM roles and permissions To use Advanced API Security, you must have the following IAM roles and permissions: IAM roles Permissions Description API Security Admin ( roles/apigee.securityAdmin ) apigee.securityProfilesV2.create apigee.securityProfilesV2.delete apigee.securityProfilesV2.update apigee.securityProfilesV2.get apigee.securityProfilesV2.list Provides permissions to create, update, delete, get, and list security profiles. apigee.securityAssessmentResult.compute Provides permissions to compute security assessment results. apigee.securityMonitoringConditions.create apigee.securityMonitoringConditions.delete apigee.securityMonitoringConditions.get apigee.securityMonitoringConditions.list apigee.securityMonitoringConditions.update Provides permissions to create, delete, get, list, and update security monitoring conditions.
- Key capabilities Advanced API Security offers the following capabilities when you enable it for your API hub instance: Risk assessment across multiple Apigee organizations, environments, and gateways: assess the security scores for a specific API or for all APIs across all of its deployments in multiple Apigee organizations, environments, and gateways to get a comprehensive understanding of its risk profile.
- Leveraging API hub's plugins and curation capabilities, Advanced API Security offers an unified view that lets you monitor risks, compare configurations, and ensure consistent security standards across your entire API ecosystem.

### API observations in API hub \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview](https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview)
- Source ID: `site-docs-reference-2`
- Final score: 119
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The API observations feature in API hub helps you address the challenges of undocumented and unmanaged APIs, also known as shadow APIs , which can introduce significant security and governance risks in your API infrastructure.
- The Advanced API Security add-on is available for Google Cloud projects with or without Apigee provisioning: For subscription customers, the Advanced API Security add-on is available with the Apigee organization.
- However, since API observations in API hub leverages Shadow API discovery, which is part of the Apigee Advanced API Security add-on, you can incur charges related to your Apigee usage.
- Note: API observations in API hub relies on the Apigee Shadow API Discovery feature, which is included as part of the paid Apigee Advanced API Security add-on .

### Shadow API Discovery overview \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery](https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery)
- Source ID: `site-docs-reference-2`
- Final score: 111
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Task Required Role(s) Enable or disable Advanced API Security Apigee Organization Admin (roles/apigee.admin) Create observation sources and jobs API Management Admin (roles/apim.admin) View observations API Management Viewer (roles/apim.viewer) Access Shadow API Discovery in the Apigee UI This section describes how to access Shadow API Discovery in the Apigee UI.
- Enable Shadow API Discovery Shadow API Discovery is part of the Advanced API Security add-on and is available for Google Cloud projects with or without Apigee provisioning.
- See Manage Advanced API Security for Subscription organizations Pay-as-you-go customers must enable the add-on for at least one environment.
- See Manage Advanced API Security for Pay-as-you-go organizations Shadow API Discovery is not available for Apigee eval environments.

