---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:26:55.415Z"
product_name: "Apigee Advanced API Security"
product_slug: "apigee-advanced-api-security"
feature_name: "Risk Assessment v2 monitoring alerts"
feature_slug: "risk-assessment-v2-monitoring-alerts"
latest_feature_date: "2025-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-security/security-alerts"
  - "https://docs.cloud.google.com/apigee/docs/api-security/security-scores"
  - "https://docs.cloud.google.com/apigee/docs/apihub/manage-monitoring-conditions-multi-gateway"
keywords:
  - "alerts"
  - "alerting"
  - "monitoring"
  - "assessment"
  - "adds"
  - "preview"
  - "risk"
---

# Risk Assessment v2 monitoring alerts

Product: Apigee Advanced API Security
Coverage: MEDIUM

## Step 02 Summary

Risk Assessment v2 preview adds alerting on security monitoring conditions so changes in security scores can trigger Cloud Monitoring alerts.

## Extended Definition

Risk Assessment v2 preview adds alerting on security monitoring conditions so changes in security scores can trigger Cloud Monitoring alerts.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-security/security-alerts](https://docs.cloud.google.com/apigee/docs/api-security/security-alerts)
- [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores)
- [https://docs.cloud.google.com/apigee/docs/apihub/manage-monitoring-conditions-multi-gateway](https://docs.cloud.google.com/apigee/docs/apihub/manage-monitoring-conditions-multi-gateway)

## Supporting Pages

### Risk assessment overview and UI \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores)
- Source ID: `site-docs-reference-required-5`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Monitoring conditions and alerts Advanced API Security allows you to add monitoring conditions to Risk Assessment.
- Once you create a monitoring condition, Risk Assessment publishes security score metrics to Cloud Monitoring.
- Start by Viewing risk assessments in the Apigee UI and then selecting the Monitoring Conditions tab.
- See the example in Example: Create a risk assessment monitoring condition monitoring alert .

### Security alerts \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/security-alerts](https://docs.cloud.google.com/apigee/docs/api-security/security-alerts)
- Source ID: `site-docs-reference-required-6`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Example: Create a risk assessment monitoring condition monitoring alert (Risk Assessment v2) This example creates a new Cloud Monitoring alerting policy for a Risk Assessment monitoring condition that alerts if the security score on any of its monitored proxies falls below a certain threshold.
- Required roles To set up alerts and notification channels in Cloud Monitoring, you need to be assigned the following roles: roles/monitoring.alertPolicyEditor roles/monitoring.notificationChannelEditor Limitations For alerting, the following limitations apply: The maximum number of alerting policies is 500 for all Apigee subscription levels.
- Note: You can configure security alerts for Risk Assessment v1 and Risk Assessment v2 security scores.
- Current security score of a deployed resource based on a security profile. location, org, scope, resource, security profile Filters Filter Label Description location Location of the resource: global always. org Apigee organization name env Apigee environment name profile Apigee API Security profile name proxy Apigee API proxy name target server Apigee target server name detection rule Apigee API security detection rule name scope For Risk Assessment v2, identifier of the scope associated with the assessed resource. resource For Risk Assessment v2, identifier of the assessed resource. security profile For Risk Assessment v2, identifier of the security profile used to assess the resource.

### "Manage monitoring conditions for multiple Apigee organizations and gateways\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/manage-monitoring-conditions-multi-gateway](https://docs.cloud.google.com/apigee/docs/apihub/manage-monitoring-conditions-multi-gateway)
- Source ID: `site-iam-reference`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In addition to the IAM roles and permissions, if you will be managing monitoring conditions and alerts, you must have the additional permissions or follow the steps for managing monitoring conditions and alerts described in Required roles for risk assessment Learn about Cloud Monitoring features and functionality.
- REST To view the list of configured monitoring conditions, make a GET request to the securityMonitoringConditions API. curl "https://apigee.googleapis.com/v1/organizations/ APIGEE ORG /securityMonitoringConditions?risk assessment type=API HUB" \ -X GET \ -H "Authorization: Bearer $TOKEN" To view the list of monitoring conditions for a specific gateway, send a GET request as follows: curl "https://apigee.googleapis.com/v1/organizations/ APIGEE ORG /securityMonitoringConditions?risk assessment type=API HUB&filter=api hub gateway%3D GATEWAY ID " \ -X GET \ -H "Authorization: Bearer $TOKEN" To view the list of monitoring conditions for a specific security profile, send a GET request as follows: curl "https://apigee.googleapis.com/v1/organizations/ APIGEE ORG /securityMonitoringConditions?risk assessment type=API HUB&filter=profile%3D PROFILE ID " \ -X GET \ -H "Authorization: Bearer $TOKEN" To see details on a specific monitoring condition, use the following GET request: curl "https://apigee.googleapis.com/v1/organizations/ APIGEE ORG /securityMonitoringConditions/ CONDITION ID ?risk assessment type=API HUB" \ -X GET \ -H "Authorization: Bearer $TOKEN" Replace the following: APIGEE ORG : Name of the Apigee organization provisioned in your Google Cloud project.
- This example uses an update mask to update a monitoring condition so that it includes specific deployments instead of all deployments. curl "https://apigee.googleapis.com/v1/organizations/ APIGEE ORG /securityMonitoringConditions/ CONDITION ID ?update mask=include" \ -X PATCH \ -H "Authorization: Bearer $TOKEN" \ -H "Content-Type: application/json" \ -d '{ "risk assessment type": "API HUB", "include": { "resources": [ { "type": "API HUB DEPLOYMENT", "name": " DEPLOYMENT ID 1 " }, { "type": "API HUB DEPLOYMENT", "name": " DEPLOYMENT ID 2 " } ] } }' Replace the following: APIGEE ORG : Name of the Apigee organization provisioned in your Google Cloud project.
- When creating a monitoring condition, you must set risk assessment type to API HUB . curl "https://apigee.googleapis.com/v1/organizations/ APIGEE ORG /securityMonitoringConditions?security monitoring condition id= CONDITION ID " \ -X POST \ -H "Authorization: Bearer $TOKEN" \ -H "Content-Type: application/json" \ -d '{ "profile": " PROFILE ID ", "risk assessment type": "API HUB", "api hub gateway": " GATEWAY NAME ", "include all resources": {} }' Replace the following: APIGEE ORG : Name of the Apigee organization provisioned in your Google Cloud project.

