---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:45:01.533Z"
product_name: "Apigee API hub"
product_slug: "apigee-api-hub"
feature_name: "Advanced API Security for multiple Apigee organizations and gateways"
feature_slug: "advanced-api-security-for-multiple-apigee-organizations-and-gateways"
latest_feature_date: "2025-12-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/manage-security-add-on"
  - "https://docs.cloud.google.com/apigee/docs/api-security"
keywords:
  - "centralized"
  - "organizations"
  - "advanced"
  - "security"
  - "gateways"
  - "multiple"
  - "introduces"
---

# Advanced API Security for multiple Apigee organizations and gateways

Product: Apigee API hub
Coverage: MEDIUM

## Step 02 Summary

Introduces centralized multi-gateway API security governance with unified risk assessment, shared security profiles, and cross-project visibility in API hub.

## Extended Definition

Introduces centralized multi-gateway API security governance with unified risk assessment, shared security profiles, and cross-project visibility in API hub.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway](https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/manage-security-add-on](https://docs.cloud.google.com/apigee/docs/api-platform/reference/manage-security-add-on)
- [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security)

## Supporting Pages

### "Advanced API Security for multiple Apigee organizations and gateways \_\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway](https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway)
- Source ID: `site-docs-reference`
- Final score: 319
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Key capabilities Advanced API Security offers the following capabilities when you enable it for your API hub instance: Risk assessment across multiple Apigee organizations, environments, and gateways: assess the security scores for a specific API or for all APIs across all of its deployments in multiple Apigee organizations, environments, and gateways to get a comprehensive understanding of its risk profile.
- Home Documentation Application development Apigee Guides Send feedback Advanced API Security for multiple Apigee organizations and gateways Stay organized with collections Save and categorize content based on your preferences.
- Apigee Advanced API Security is available as an additional add-on for your API hub instance to help you manage and govern the security posture of your APIs across multiple Apigee organizations, environments, and gateways.
- Enable Advanced API Security for your API hub instance To enable and configure Advanced API Security for your API hub instance, see Configure Advanced API Security for multiple Apigee organizations and gateways .

### "Manage the Advanced API Security add-on \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/manage-security-add-on](https://docs.cloud.google.com/apigee/docs/api-platform/reference/manage-security-add-on)
- Source ID: `site-docs-reference`
- Final score: 213
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See Advanced API Security for multiple Apigee organizations and gateways for information.
- To disable the Advanced API Security add-on using the Apigee API, enter the following command: curl -X POST \ https://apigee.googleapis.com/v1/organizations/ ORG NAME /environments/ ENV NAME /addonsConfig:setAddonEnablement \ -H "Authorization: Bearer $token" \ -H "Content-type: application/json" \ -d '{"apiSecurityEnabled":false}' Where: ORG NAME is the name of the Apigee Pay-as-you-go organization where you want to disable Advanced API Security in eligible environments.
- To enable the Advanced API Security add-on using the Apigee API, enter the following command: curl -X POST \ https://apigee.googleapis.com/v1/organizations/ ORG NAME /environments/ ENV NAME /addonsConfig:setAddonEnablement \ -H "Authorization: Bearer $token" \ -H "Content-type: application/json" \ -d '{"apiSecurityEnabled":true}' Where: ORG NAME is the name of the Apigee Pay-as-you-go organization where you want to add Advanced API Security to eligible environments.
- To view the status of the Advanced API Security add-on in an environment using the Apigee API, enter the following command: curl -X GET \ https://apigee.googleapis.com/v1/organizations/ ORG NAME /environments/ ENV NAME /addonsConfig \ -H "Authorization: Bearer $token" \ -H "Content-type: application/json" Where: ORG NAME is the name of the Apigee Pay-as-you-go organization.

### Overview of Advanced API Security \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security)
- Source ID: `site-docs-reference`
- Final score: 171
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use Advanced API Security to perform risk assessments on multiple Apigee organizations and gateways You can use Advanced API Security to perform risk assessments across multiple Apigee organizations and gateways, including Apigee, Apigee hybrid, and Apigee Edge.
- For details, see Use Advanced API Security to perform risk assessments on multiple Apigee organizations and gateways .
- Choose the right Advanced API Security features for your needs If you want the multi-gateway risk assessment functionality that you can apply to multiple Apigee gateways, including on Apigee Edge, enable the Advanced API Security add-on from your API hub instance.
- Use Advanced API Security for assessment, monitoring, and actions on your Apigee and Apigee hybrid instances When used with your Apigee or Apigee hybrid instance, Advanced API Security provides comprehensive protection by continuously monitoring for security threats like malicious client attacks and API abuse.

