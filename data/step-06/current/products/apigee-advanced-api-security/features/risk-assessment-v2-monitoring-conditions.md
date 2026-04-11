---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:05:29.870Z"
product_name: "Apigee Advanced API Security"
product_slug: "apigee-advanced-api-security"
feature_name: "Risk Assessment v2 monitoring conditions"
feature_slug: "risk-assessment-v2-monitoring-conditions"
latest_feature_date: "2026-03-10"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/manage-monitoring-conditions-multi-gateway"
  - "https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway"
  - "https://docs.cloud.google.com/apigee/docs/api-security/enable-security"
keywords:
  - "monitoring condition setup"
  - "RA v2 monitoring"
  - "RA v2 conditions"
  - "condition configuration"
  - "monitoring conditions"
  - "risk assessment conditions"
  - "Risk Assessment v2"
---

# Risk Assessment v2 monitoring conditions

Product: Apigee Advanced API Security
Coverage: HIGH

## Step 02 Summary

Monitoring conditions in Risk Assessment v2 are now generally available.

## Extended Definition

In Apigee Advanced API Security, Risk Assessment v2 monitoring conditions are configurable security monitoring entries in the API Hub Risk assessment area that define what security conditions to evaluate. They can be managed across multiple Apigee organizations and gateways, and can be listed, viewed, and managed by scope (organization, gateway, security profile) via the API Hub console and the securityMonitoringConditions REST API. The operations and dependencies documented for this feature include creating, updating, deleting, and listing conditions, plus viewing condition metrics and integrating with Cloud Monitoring alerts.

## Evidence Summary

The cited pages provide API-level and console guidance for monitoring-condition lifecycle operations and role requirements for Risk Assessment v2 security monitoring conditions in Apigee.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/manage-monitoring-conditions-multi-gateway](https://docs.cloud.google.com/apigee/docs/apihub/manage-monitoring-conditions-multi-gateway)
- [https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway](https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway)
- [https://docs.cloud.google.com/apigee/docs/api-security/enable-security](https://docs.cloud.google.com/apigee/docs/api-security/enable-security)

## Supporting Pages

### "Manage monitoring conditions for multiple Apigee organizations and gateways\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/manage-monitoring-conditions-multi-gateway](https://docs.cloud.google.com/apigee/docs/apihub/manage-monitoring-conditions-multi-gateway)
- Source ID: `site-iam-reference`
- Final score: 66
- Re-rank relevance: STRONG
- Re-rank rationale: The page is explicitly about creating, listing, and managing monitoring conditions for Apigee Advanced API Security in API Hub and includes required roles and Cloud Monitoring integration relevant to risk assessment.

Evidence snippets:
- Console To view the list of existing monitoring condition configurations, go to the API hub > Risk assessment page and select the Monitoring conditions tab.
- REST To view the list of configured monitoring conditions, make a GET request to the securityMonitoringConditions API. curl "https://apigee.googleapis.com/v1/organizations/ APIGEE ORG /securityMonitoringConditions?risk assessment type=API HUB" \ -X GET \ -H "Authorization: Bearer $TOKEN" To view the list of monitoring conditions for a specific gateway, send a GET request as follows: curl "https://apigee.googleapis.com/v1/organizations/ APIGEE ORG /securityMonitoringConditions?risk assessment type=API HUB&filter=api hub gateway%3D GATEWAY ID " \ -X GET \ -H "Authorization: Bearer $TOKEN" To view the list of monitoring conditions for a specific security profile, send a GET request as follows: curl "https://apigee.googleapis.com/v1/organizations/ APIGEE ORG /securityMonitoringConditions?risk assessment type=API HUB&filter=profile%3D PROFILE ID " \ -X GET \ -H "Authorization: Bearer $TOKEN" To see details on a specific monitoring condition, use the following GET request: curl "https://apigee.googleapis.com/v1/organizations/ APIGEE ORG /securityMonitoringConditions/ CONDITION ID ?risk assessment type=API HUB" \ -X GET \ -H "Authorization: Bearer $TOKEN" Replace the following: APIGEE ORG : Name of the Apigee organization provisioned in your Google Cloud project.
- In addition to the IAM roles and permissions, if you will be managing monitoring conditions and alerts, you must have the additional permissions or follow the steps for managing monitoring conditions and alerts described in Required roles for risk assessment Learn about Cloud Monitoring features and functionality.
- Home Documentation Application development Apigee Guides Send feedback Manage monitoring conditions for multiple Apigee organizations and gateways Stay organized with collections Save and categorize content based on your preferences.

### "Advanced API Security for multiple Apigee organizations and gateways \_\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway](https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway)
- Source ID: `site-docs-reference`
- Final score: 32
- Re-rank relevance: MODERATE
- Re-rank rationale: The page includes guidance for managing monitoring conditions and security posture over time, supporting the monitoring-conditions concept though it does not explicitly confirm GA status.

Evidence snippets:
- IAM roles and permissions To use Advanced API Security, you must have the following IAM roles and permissions: IAM roles Permissions Description API Security Admin ( roles/apigee.securityAdmin ) apigee.securityProfilesV2.create apigee.securityProfilesV2.delete apigee.securityProfilesV2.update apigee.securityProfilesV2.get apigee.securityProfilesV2.list Provides permissions to create, update, delete, get, and list security profiles. apigee.securityAssessmentResult.compute Provides permissions to compute security assessment results. apigee.securityMonitoringConditions.create apigee.securityMonitoringConditions.delete apigee.securityMonitoringConditions.get apigee.securityMonitoringConditions.list apigee.securityMonitoringConditions.update Provides permissions to create, delete, get, list, and update security monitoring conditions.
- To configure and use security monitoring conditions and alerts in Cloud Monitoring: Action(s) Required roles or steps List and view security monitoring condition metrics Monitoring Admin ( roles/monitoring.admin ) Monitoring Editor ( roles/monitoring.editor ) Create, update, or delete monitoring alerts See Required roles (for security alerts) View monitoring alerts See Incidents for metric-based alerting policies: Before you begin For information about granting IAM roles, see Grant or revoke multiple IAM roles using the Google Cloud console .
- API Security Viewer ( roles/apigee.securityViewer ) apigee.securityProfilesV2.get apigee.securityProfilesV2.list Provides permissions to get, list, and view security profiles. apigee.securityAssessmentResult.compute Provides permissions to compute security assessment results. apigee.securityMonitoringConditions.get apigee.securityMonitoringConditions.list Provides permissions to get and list security monitoring conditions.
- To learn about managing security monitoring conditions and alerts, see Manage monitoring conditions for multiple Apigee organizations and gateways .

### Getting started \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/enable-security](https://docs.cloud.google.com/apigee/docs/api-security/enable-security)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- For example, you can use Terraform to configure: Risk Assessment v2 security profiles Risk Assessment v2 security monitoring conditions Abuse detection exclusion lists Security actions For information on the currently supported functionality, see the Apigee section of the Terraform Registry .
- Risk Assessment Task Required Role(s) Create, update, or delete a custom security profile Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Organization Admin ( roles/apigee.admin ) Attach or detach a security profile Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Organization Admin ( roles/apigee.admin ) View security scores Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Security Viewer ( roles/apigee.securityViewer ) Apigee Organization Admin ( roles/apigee.admin ) List all security profiles or get a profile Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Security Viewer ( roles/apigee.securityViewer ) Apigee Organization Admin ( roles/apigee.admin ) Create, update, or delete a security monitoring condition Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Organization Admin ( roles/apigee.admin ) List and view security monitoring conditions Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Security Viewer ( roles/apigee.securityViewer ) Apigee Organization Admin ( roles/apigee.admin ) List and view security monitoring condition metrics Monitoring Admin ( roles/monitoring.admin ) Monitoring Editor ( roles/monitoring.editor ) Create, update, or delete monitoring alerts See Required roles (for security alerts) View monitoring alerts See Incidents for metric-based alerting policies: Before you begin Required roles and permissions for abuse detection The table below shows the required roles and permissions to perform tasks related to abuse detection .

