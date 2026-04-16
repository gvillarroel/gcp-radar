---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:26:55.415Z"
product_name: "Apigee Advanced API Security"
product_slug: "apigee-advanced-api-security"
feature_name: "Risk Assessment v2 security monitoring conditions"
feature_slug: "risk-assessment-v2-security-monitoring-conditions"
latest_feature_date: "2025-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-security/security-scores"
  - "https://docs.cloud.google.com/apigee/docs/api-security/enable-security"
  - "https://docs.cloud.google.com/apigee/docs/apihub/manage-monitoring-conditions-multi-gateway"
keywords:
  - "monitoring"
  - "conditions"
  - "assessment"
  - "adds"
  - "preview"
  - "risk"
---

# Risk Assessment v2 security monitoring conditions

Product: Apigee Advanced API Security
Coverage: MEDIUM

## Step 02 Summary

Risk Assessment v2 preview adds security monitoring conditions to map proxies or environments to security profiles for ongoing security score monitoring.

## Extended Definition

Risk Assessment v2 preview adds security monitoring conditions to map proxies or environments to security profiles for ongoing security score monitoring.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores)
- [https://docs.cloud.google.com/apigee/docs/api-security/enable-security](https://docs.cloud.google.com/apigee/docs/api-security/enable-security)
- [https://docs.cloud.google.com/apigee/docs/apihub/manage-monitoring-conditions-multi-gateway](https://docs.cloud.google.com/apigee/docs/apihub/manage-monitoring-conditions-multi-gateway)

## Supporting Pages

### Risk assessment overview and UI \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores)
- Source ID: `site-docs-reference-required-5`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Monitoring conditions and alerts Advanced API Security allows you to add monitoring conditions to Risk Assessment.
- Start by Viewing risk assessments in the Apigee UI and then selecting the Monitoring Conditions tab.
- Once you create a monitoring condition, Risk Assessment publishes security score metrics to Cloud Monitoring.
- See the example in Example: Create a risk assessment monitoring condition monitoring alert .

### "Manage monitoring conditions for multiple Apigee organizations and gateways\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/manage-monitoring-conditions-multi-gateway](https://docs.cloud.google.com/apigee/docs/apihub/manage-monitoring-conditions-multi-gateway)
- Source ID: `site-iam-reference`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST To view the list of configured monitoring conditions, make a GET request to the securityMonitoringConditions API. curl "https://apigee.googleapis.com/v1/organizations/ APIGEE ORG /securityMonitoringConditions?risk assessment type=API HUB" \ -X GET \ -H "Authorization: Bearer $TOKEN" To view the list of monitoring conditions for a specific gateway, send a GET request as follows: curl "https://apigee.googleapis.com/v1/organizations/ APIGEE ORG /securityMonitoringConditions?risk assessment type=API HUB&filter=api hub gateway%3D GATEWAY ID " \ -X GET \ -H "Authorization: Bearer $TOKEN" To view the list of monitoring conditions for a specific security profile, send a GET request as follows: curl "https://apigee.googleapis.com/v1/organizations/ APIGEE ORG /securityMonitoringConditions?risk assessment type=API HUB&filter=profile%3D PROFILE ID " \ -X GET \ -H "Authorization: Bearer $TOKEN" To see details on a specific monitoring condition, use the following GET request: curl "https://apigee.googleapis.com/v1/organizations/ APIGEE ORG /securityMonitoringConditions/ CONDITION ID ?risk assessment type=API HUB" \ -X GET \ -H "Authorization: Bearer $TOKEN" Replace the following: APIGEE ORG : Name of the Apigee organization provisioned in your Google Cloud project.
- This example uses an update mask to update a monitoring condition so that it includes specific deployments instead of all deployments. curl "https://apigee.googleapis.com/v1/organizations/ APIGEE ORG /securityMonitoringConditions/ CONDITION ID ?update mask=include" \ -X PATCH \ -H "Authorization: Bearer $TOKEN" \ -H "Content-Type: application/json" \ -d '{ "risk assessment type": "API HUB", "include": { "resources": [ { "type": "API HUB DEPLOYMENT", "name": " DEPLOYMENT ID 1 " }, { "type": "API HUB DEPLOYMENT", "name": " DEPLOYMENT ID 2 " } ] } }' Replace the following: APIGEE ORG : Name of the Apigee organization provisioned in your Google Cloud project.
- When creating a monitoring condition, you must set risk assessment type to API HUB . curl "https://apigee.googleapis.com/v1/organizations/ APIGEE ORG /securityMonitoringConditions?security monitoring condition id= CONDITION ID " \ -X POST \ -H "Authorization: Bearer $TOKEN" \ -H "Content-Type: application/json" \ -d '{ "profile": " PROFILE ID ", "risk assessment type": "API HUB", "api hub gateway": " GATEWAY NAME ", "include all resources": {} }' Replace the following: APIGEE ORG : Name of the Apigee organization provisioned in your Google Cloud project.
- REST To delete a monitoring condition, make a DELETE request to the securityMonitoringConditions API. curl "https://apigee.googleapis.com/v1/organizations/ APIGEE ORG /securityMonitoringConditions/ CONDITION ID ?risk assessment type=API HUB" \ -X DELETE \ -H "Authorization: Bearer $TOKEN" Replace the following: APIGEE ORG : Name of the Apigee organization provisioned in your Google Cloud project.

### Getting started \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/enable-security](https://docs.cloud.google.com/apigee/docs/api-security/enable-security)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Risk Assessment Task Required Role(s) Create, update, or delete a custom security profile Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Organization Admin ( roles/apigee.admin ) Attach or detach a security profile Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Organization Admin ( roles/apigee.admin ) View security scores Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Security Viewer ( roles/apigee.securityViewer ) Apigee Organization Admin ( roles/apigee.admin ) List all security profiles or get a profile Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Security Viewer ( roles/apigee.securityViewer ) Apigee Organization Admin ( roles/apigee.admin ) Create, update, or delete a security monitoring condition Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Organization Admin ( roles/apigee.admin ) List and view security monitoring conditions Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Security Viewer ( roles/apigee.securityViewer ) Apigee Organization Admin ( roles/apigee.admin ) List and view security monitoring condition metrics Monitoring Admin ( roles/monitoring.admin ) Monitoring Editor ( roles/monitoring.editor ) Create, update, or delete monitoring alerts See Required roles (for security alerts) View monitoring alerts See Incidents for metric-based alerting policies: Before you begin Required roles and permissions for abuse detection The table below shows the required roles and permissions to perform tasks related to abuse detection .
- For example, you can use Terraform to configure: Risk Assessment v2 security profiles Risk Assessment v2 security monitoring conditions Abuse detection exclusion lists Security actions For information on the currently supported functionality, see the Apigee section of the Terraform Registry .
- Security Report Task Required Role(s) Enable or disable Advanced API Security Apigee Organization Admin ( roles/apigee.admin ) Create reports Apigee Organization Admin ( roles/apigee.admin ) Apigee Security Admin ( roles/apigee.securityAdmin ) View reports Apigee Security Viewer ( roles/apigee.securityViewer ) Apigee Security Admin ( roles/apigee.securityAdmin ) Required roles for risk assessment The table below shows the required roles to perform tasks related to risk assessment .
- Next steps Once you have enabled Advanced API Security, see: Security reports Risk assessment Abuse detection Security alerts Security actions Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

