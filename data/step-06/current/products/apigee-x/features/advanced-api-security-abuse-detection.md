---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.183Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Advanced API Security abuse detection"
feature_slug: "advanced-api-security-abuse-detection"
latest_feature_date: "2023-03-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/client-ip-resolution"
  - "https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview"
keywords:
  - "learning"
  - "identify"
  - "machine"
  - "abuse"
  - "detection"
  - "uses"
  - "advanced"
  - "security"
---

# Advanced API Security abuse detection

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Advanced API Security abuse detection uses machine learning to identify malicious API traffic patterns and security incidents.

## Extended Definition

Advanced API Security abuse detection uses machine learning to identify malicious API traffic patterns and security incidents.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway](https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway)
- [https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/client-ip-resolution](https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/client-ip-resolution)
- [https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview](https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview)

## Supporting Pages

### "Advanced API Security for multiple Apigee organizations and gateways \_\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway](https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway)
- Source ID: `site-docs-reference-2`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- IAM roles and permissions To use Advanced API Security, you must have the following IAM roles and permissions: IAM roles Permissions Description API Security Admin ( roles/apigee.securityAdmin ) apigee.securityProfilesV2.create apigee.securityProfilesV2.delete apigee.securityProfilesV2.update apigee.securityProfilesV2.get apigee.securityProfilesV2.list Provides permissions to create, update, delete, get, and list security profiles. apigee.securityAssessmentResult.compute Provides permissions to compute security assessment results. apigee.securityMonitoringConditions.create apigee.securityMonitoringConditions.delete apigee.securityMonitoringConditions.get apigee.securityMonitoringConditions.list apigee.securityMonitoringConditions.update Provides permissions to create, delete, get, list, and update security monitoring conditions.
- Key capabilities Advanced API Security offers the following capabilities when you enable it for your API hub instance: Risk assessment across multiple Apigee organizations, environments, and gateways: assess the security scores for a specific API or for all APIs across all of its deployments in multiple Apigee organizations, environments, and gateways to get a comprehensive understanding of its risk profile.
- Leveraging API hub's plugins and curation capabilities, Advanced API Security offers an unified view that lets you monitor risks, compare configurations, and ensure consistent security standards across your entire API ecosystem.
- Home Documentation Application development Apigee Guides Send feedback Advanced API Security for multiple Apigee organizations and gateways Stay organized with collections Save and categorize content based on your preferences.

### Client IP resolution \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/client-ip-resolution](https://docs.cloud.google.com/apigee/docs/api-platform/system-administration/client-ip-resolution)
- Source ID: `site-docs-reference-required-3`
- Final score: 97
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Accurately identifying the client IP address on API requests is important for some functionality within Apigee, including Analytics and Advanced API Security features such as abuse detection and security actions.
- When to set the client IP resolution for an environment Although it's not required to set client IP resolution, you might want to if the default client IP address resolution does not meet your needs and you want to override it to provide a specified client IP address resolution for Analytics, Advanced API Security, or performing any other function that requires consistent and reliable information on client IP addresses.
- Using this setting provides visibility, consistency, and control over how client IP addresses are determined for all requests in the environment and results in consistent client IP address identification across Advanced API Security, flow variables, and analytics variables in the environment.
- Once you've set the client IP resolution configuration for an environment, the changes might impact existing Advanced API Security configurations for security action rules.

### API observations in API hub \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview](https://docs.cloud.google.com/apigee/docs/apihub/api-observation-overview)
- Source ID: `site-docs-reference-2`
- Final score: 84
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Advanced API Security add-on is available for Google Cloud projects with or without Apigee provisioning: For subscription customers, the Advanced API Security add-on is available with the Apigee organization.
- However, since API observations in API hub leverages Shadow API discovery, which is part of the Apigee Advanced API Security add-on, you can incur charges related to your Apigee usage.
- Note: API observations in API hub relies on the Apigee Shadow API Discovery feature, which is included as part of the paid Apigee Advanced API Security add-on .
- API observations in API hub relies on the Apigee Shadow API Discovery feature, which is included as part of the paid Apigee Advanced API Security add-on .

