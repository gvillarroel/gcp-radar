---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:45:01.531Z"
product_name: "Apigee API hub"
product_slug: "apigee-api-hub"
feature_name: "APigee Edge Private Cloud (OPDK) support in Advanced API Security multi-gateway risk assessment"
feature_slug: "apigee-edge-private-cloud-opdk-support-in-advanced-api-security-multi-gateway-risk-assessment"
latest_feature_date: "2026-03-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway"
  - "https://docs.cloud.google.com/apigee/docs/api-security"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/manage-security-add-on"
keywords:
  - "private"
  - "edge"
  - "opdk"
  - "advanced"
  - "security"
  - "multi"
  - "gateway"
---

# APigee Edge Private Cloud (OPDK) support in Advanced API Security multi-gateway risk assessment

Product: Apigee API hub
Coverage: MEDIUM

## Step 02 Summary

Adds OPDK as a supported gateway type for risk assessment security profiles in Advanced API Security for multi-gateway projects.

## Extended Definition

Adds OPDK as a supported gateway type for risk assessment security profiles in Advanced API Security for multi-gateway projects.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway](https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway)
- [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/manage-security-add-on](https://docs.cloud.google.com/apigee/docs/api-platform/reference/manage-security-add-on)

## Supporting Pages

### "Advanced API Security for multiple Apigee organizations and gateways \_\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway](https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway)
- Source ID: `site-docs-reference`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Key capabilities Advanced API Security offers the following capabilities when you enable it for your API hub instance: Risk assessment across multiple Apigee organizations, environments, and gateways: assess the security scores for a specific API or for all APIs across all of its deployments in multiple Apigee organizations, environments, and gateways to get a comprehensive understanding of its risk profile.
- Home Documentation Application development Apigee Guides Send feedback Advanced API Security for multiple Apigee organizations and gateways Stay organized with collections Save and categorize content based on your preferences.
- Apigee Advanced API Security is available as an additional add-on for your API hub instance to help you manage and govern the security posture of your APIs across multiple Apigee organizations, environments, and gateways.
- Enable Advanced API Security for your API hub instance To enable and configure Advanced API Security for your API hub instance, see Configure Advanced API Security for multiple Apigee organizations and gateways .

### Overview of Advanced API Security \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security)
- Source ID: `site-docs-reference`
- Final score: 175
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Choose the right Advanced API Security features for your needs If you want the multi-gateway risk assessment functionality that you can apply to multiple Apigee gateways, including on Apigee Edge, enable the Advanced API Security add-on from your API hub instance.
- Use Advanced API Security to perform risk assessments on multiple Apigee organizations and gateways You can use Advanced API Security to perform risk assessments across multiple Apigee organizations and gateways, including Apigee, Apigee hybrid, and Apigee Edge.
- For details, see Use Advanced API Security to perform risk assessments on multiple Apigee organizations and gateways .
- For enablement and usage instructions, see Advanced API Security for multi-gateway projects .

### "Manage the Advanced API Security add-on \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/manage-security-add-on](https://docs.cloud.google.com/apigee/docs/api-platform/reference/manage-security-add-on)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Tip: Advanced API Security is also available in Apigee API hub for multiple gateway types, including Apigee Edge.
- See Advanced API Security for multiple Apigee organizations and gateways for information.
- To disable the Advanced API Security add-on using the Apigee API, enter the following command: curl -X POST \ https://apigee.googleapis.com/v1/organizations/ ORG NAME /environments/ ENV NAME /addonsConfig:setAddonEnablement \ -H "Authorization: Bearer $token" \ -H "Content-type: application/json" \ -d '{"apiSecurityEnabled":false}' Where: ORG NAME is the name of the Apigee Pay-as-you-go organization where you want to disable Advanced API Security in eligible environments.
- To enable the Advanced API Security add-on using the Apigee API, enter the following command: curl -X POST \ https://apigee.googleapis.com/v1/organizations/ ORG NAME /environments/ ENV NAME /addonsConfig:setAddonEnablement \ -H "Authorization: Bearer $token" \ -H "Content-type: application/json" \ -d '{"apiSecurityEnabled":true}' Where: ORG NAME is the name of the Apigee Pay-as-you-go organization where you want to add Advanced API Security to eligible environments.

