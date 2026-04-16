---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.188Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Advanced API Security Abuse page"
feature_slug: "advanced-api-security-abuse-page"
latest_feature_date: "2022-08-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway"
  - "https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview"
  - "https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery"
keywords:
  - "displays"
  - "detected"
  - "abuse"
  - "page"
  - "bots"
  - "advanced"
  - "security"
---

# Advanced API Security Abuse page

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

The Abuse page in Advanced API Security displays detected bots, their IP addresses, locations, and matching bot rules.

## Extended Definition

The Abuse page in Advanced API Security displays detected bots, their IP addresses, locations, and matching bot rules.

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
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- IAM roles and permissions To use Advanced API Security, you must have the following IAM roles and permissions: IAM roles Permissions Description API Security Admin ( roles/apigee.securityAdmin ) apigee.securityProfilesV2.create apigee.securityProfilesV2.delete apigee.securityProfilesV2.update apigee.securityProfilesV2.get apigee.securityProfilesV2.list Provides permissions to create, update, delete, get, and list security profiles. apigee.securityAssessmentResult.compute Provides permissions to compute security assessment results. apigee.securityMonitoringConditions.create apigee.securityMonitoringConditions.delete apigee.securityMonitoringConditions.get apigee.securityMonitoringConditions.list apigee.securityMonitoringConditions.update Provides permissions to create, delete, get, list, and update security monitoring conditions.
- Key capabilities Advanced API Security offers the following capabilities when you enable it for your API hub instance: Risk assessment across multiple Apigee organizations, environments, and gateways: assess the security scores for a specific API or for all APIs across all of its deployments in multiple Apigee organizations, environments, and gateways to get a comprehensive understanding of its risk profile.
- Leveraging API hub's plugins and curation capabilities, Advanced API Security offers an unified view that lets you monitor risks, compare configurations, and ensure consistent security standards across your entire API ecosystem.
- Home Documentation Application development Apigee Guides Send feedback Advanced API Security for multiple Apigee organizations and gateways Stay organized with collections Save and categorize content based on your preferences.

### API observations in API hub \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview](https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview)
- Source ID: `site-docs-reference-2`
- Final score: 116
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Discovered API observations The API observations page in API hub displays a list of all detected APIs from all associated data sources, including both known and unknown APIs.
- The Advanced API Security add-on is available for Google Cloud projects with or without Apigee provisioning: For subscription customers, the Advanced API Security add-on is available with the Apigee organization.
- However, since API observations in API hub leverages Shadow API discovery, which is part of the Apigee Advanced API Security add-on, you can incur charges related to your Apigee usage.
- Note: API observations in API hub relies on the Apigee Shadow API Discovery feature, which is included as part of the paid Apigee Advanced API Security add-on .

### Shadow API Discovery overview \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery](https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery)
- Source ID: `site-docs-reference-2`
- Final score: 112
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Task Required Role(s) Enable or disable Advanced API Security Apigee Organization Admin (roles/apigee.admin) Create observation sources and jobs API Management Admin (roles/apim.admin) View observations API Management Viewer (roles/apim.viewer) Access Shadow API Discovery in the Apigee UI This section describes how to access Shadow API Discovery in the Apigee UI.
- Enable Shadow API Discovery Shadow API Discovery is part of the Advanced API Security add-on and is available for Google Cloud projects with or without Apigee provisioning.
- See Manage Advanced API Security for Subscription organizations Pay-as-you-go customers must enable the add-on for at least one environment.
- See Manage Advanced API Security for Pay-as-you-go organizations Shadow API Discovery is not available for Apigee eval environments.

