---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:45:01.532Z"
product_name: "Apigee API hub"
product_slug: "apigee-api-hub"
feature_name: "Security monitoring conditions in Advanced API Security for multi-gateway projects"
feature_slug: "security-monitoring-conditions-in-advanced-api-security-for-multi-gateway-projects"
latest_feature_date: "2026-03-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway"
  - "https://docs.cloud.google.com/apigee/docs/api-security"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/manage-security-add-on"
keywords:
  - "monitoring"
  - "conditions"
  - "security"
  - "advanced"
  - "multi"
  - "projects"
  - "gateway"
  - "adds"
---

# Security monitoring conditions in Advanced API Security for multi-gateway projects

Product: Apigee API hub
Coverage: MEDIUM

## Step 02 Summary

Adds support in Advanced API Security multi-gateway risk assessment for mapping gateways to security profiles and generating monitoring conditions and alerts in Cloud Monitoring.

## Extended Definition

Adds support in Advanced API Security multi-gateway risk assessment for mapping gateways to security profiles and generating monitoring conditions and alerts in Cloud Monitoring.

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
- Final score: 271
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To learn about managing security monitoring conditions and alerts, see Manage monitoring conditions for multiple Apigee organizations and gateways .
- IAM roles and permissions To use Advanced API Security, you must have the following IAM roles and permissions: IAM roles Permissions Description API Security Admin ( roles/apigee.securityAdmin ) apigee.securityProfilesV2.create apigee.securityProfilesV2.delete apigee.securityProfilesV2.update apigee.securityProfilesV2.get apigee.securityProfilesV2.list Provides permissions to create, update, delete, get, and list security profiles. apigee.securityAssessmentResult.compute Provides permissions to compute security assessment results. apigee.securityMonitoringConditions.create apigee.securityMonitoringConditions.delete apigee.securityMonitoringConditions.get apigee.securityMonitoringConditions.list apigee.securityMonitoringConditions.update Provides permissions to create, delete, get, list, and update security monitoring conditions.
- To configure and use security monitoring conditions and alerts in Cloud Monitoring: Action(s) Required roles or steps List and view security monitoring condition metrics Monitoring Admin ( roles/monitoring.admin ) Monitoring Editor ( roles/monitoring.editor ) Create, update, or delete monitoring alerts See Required roles (for security alerts) View monitoring alerts See Incidents for metric-based alerting policies: Before you begin For information about granting IAM roles, see Grant or revoke multiple IAM roles using the Google Cloud console .
- Key capabilities Advanced API Security offers the following capabilities when you enable it for your API hub instance: Risk assessment across multiple Apigee organizations, environments, and gateways: assess the security scores for a specific API or for all APIs across all of its deployments in multiple Apigee organizations, environments, and gateways to get a comprehensive understanding of its risk profile.

### Overview of Advanced API Security \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security](https://docs.cloud.google.com/apigee/docs/api-security)
- Source ID: `site-docs-reference`
- Final score: 187
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For enablement and usage instructions, see Advanced API Security for multi-gateway projects .
- Choose the right Advanced API Security features for your needs If you want the multi-gateway risk assessment functionality that you can apply to multiple Apigee gateways, including on Apigee Edge, enable the Advanced API Security add-on from your API hub instance.
- Use Advanced API Security to perform risk assessments on multiple Apigee organizations and gateways You can use Advanced API Security to perform risk assessments across multiple Apigee organizations and gateways, including Apigee, Apigee hybrid, and Apigee Edge.
- For details, see Use Advanced API Security to perform risk assessments on multiple Apigee organizations and gateways .

### "Manage the Advanced API Security add-on \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/manage-security-add-on](https://docs.cloud.google.com/apigee/docs/api-platform/reference/manage-security-add-on)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Tip: Advanced API Security is also available in Apigee API hub for multiple gateway types, including Apigee Edge.
- See Advanced API Security for multiple Apigee organizations and gateways for information.
- To disable the Advanced API Security add-on using the Apigee API, enter the following command: curl -X POST \ https://apigee.googleapis.com/v1/organizations/ ORG NAME /environments/ ENV NAME /addonsConfig:setAddonEnablement \ -H "Authorization: Bearer $token" \ -H "Content-type: application/json" \ -d '{"apiSecurityEnabled":false}' Where: ORG NAME is the name of the Apigee Pay-as-you-go organization where you want to disable Advanced API Security in eligible environments.
- To enable the Advanced API Security add-on using the Apigee API, enter the following command: curl -X POST \ https://apigee.googleapis.com/v1/organizations/ ORG NAME /environments/ ENV NAME /addonsConfig:setAddonEnablement \ -H "Authorization: Bearer $token" \ -H "Content-type: application/json" \ -d '{"apiSecurityEnabled":true}' Where: ORG NAME is the name of the Apigee Pay-as-you-go organization where you want to add Advanced API Security to eligible environments.

