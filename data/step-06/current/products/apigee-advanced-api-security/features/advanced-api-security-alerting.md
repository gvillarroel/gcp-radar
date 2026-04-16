---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:26:55.427Z"
product_name: "Apigee Advanced API Security"
product_slug: "apigee-advanced-api-security"
feature_name: "Advanced API Security alerting"
feature_slug: "advanced-api-security-alerting"
latest_feature_date: "2023-09-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-security/security-alerts"
  - "https://docs.cloud.google.com/apigee/docs/api-security/security-scores"
  - "https://docs.cloud.google.com/apigee/docs/api-security/enable-security"
keywords:
  - "notifications"
  - "alerting"
  - "enables"
  - "related"
  - "score"
  - "incident"
---

# Advanced API Security alerting

Product: Apigee Advanced API Security
Coverage: MEDIUM

## Step 02 Summary

Advanced API Security alerting enables incident and score-related notifications through Google Cloud Monitoring channels such as email.

## Extended Definition

Advanced API Security alerting enables incident and score-related notifications through Google Cloud Monitoring channels such as email.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-security/security-alerts](https://docs.cloud.google.com/apigee/docs/api-security/security-alerts)
- [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores)
- [https://docs.cloud.google.com/apigee/docs/api-security/enable-security](https://docs.cloud.google.com/apigee/docs/api-security/enable-security)

## Supporting Pages

### Security alerts \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/security-alerts](https://docs.cloud.google.com/apigee/docs/api-security/security-alerts)
- Source ID: `site-docs-reference-required-6`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- Advanced API Security Alerts lets you create alerts for events related to API security, such as changes to your security scores or incidents of detected API abuse.
- Example: Create a risk assessment monitoring condition monitoring alert (Risk Assessment v2) This example creates a new Cloud Monitoring alerting policy for a Risk Assessment monitoring condition that alerts if the security score on any of its monitored proxies falls below a certain threshold.
- This value is measured once every hour. location, org, env, incident id, detection rule Apigee API Security Profile Environment Association Security score of Apigee API sources: apigee.googleapis.com/security/source score Applies to Risk Assessment v1.
- See Create metric-threshold alerting policies for more information on creating alerts and Incidents for metric-based alertings policies for information on managing generated alerts.

### Risk assessment overview and UI \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores)
- Source ID: `site-docs-reference-required-5`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- New events related to proxies (deployment and undeployment) and targets (create, update, delete) in an environment take at least 60 seconds and up to 5 minutes (for very large environments) to reflect in the environment's score.
- New events related to proxies (deployment and undeployment) and targets (create, update, delete) in an environment can take up to 6 hours to reflect in the environment's score.
- For example: Create a custom profile with the following checks and weights: OAuthV2 policy check: Major VerifyAPIKey policy check: Minor With this configuration, the scores are: 100% if both policies are present 94% if only the OAuthV2 policy is present 6% if only the VerifyAPIKey policy is present 0% if neither policy is present Use the scores to determine which policies are configured in the proxies.
- The main feature differences between v1 and v2 are: v2 includes: Improved reliability, including faster score calculations with recent proxy data Score calculation without the need to first attach a security profile to an environment Simplified score presentation, based on a 0% to 100% scale The concept of assessment check weights, which v1 does not support.

### Getting started \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/enable-security](https://docs.cloud.google.com/apigee/docs/api-security/enable-security)
- Source ID: `site-docs-reference`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- Risk Assessment Task Required Role(s) Create, update, or delete a custom security profile Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Organization Admin ( roles/apigee.admin ) Attach or detach a security profile Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Organization Admin ( roles/apigee.admin ) View security scores Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Security Viewer ( roles/apigee.securityViewer ) Apigee Organization Admin ( roles/apigee.admin ) List all security profiles or get a profile Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Security Viewer ( roles/apigee.securityViewer ) Apigee Organization Admin ( roles/apigee.admin ) Create, update, or delete a security monitoring condition Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Organization Admin ( roles/apigee.admin ) List and view security monitoring conditions Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Security Viewer ( roles/apigee.securityViewer ) Apigee Organization Admin ( roles/apigee.admin ) List and view security monitoring condition metrics Monitoring Admin ( roles/monitoring.admin ) Monitoring Editor ( roles/monitoring.editor ) Create, update, or delete monitoring alerts See Required roles (for security alerts) View monitoring alerts See Incidents for metric-based alerting policies: Before you begin Required roles and permissions for abuse detection The table below shows the required roles and permissions to perform tasks related to abuse detection .
- Abuse Detection Task Required Role(s) and Permission(s) View incidents in the Abuse detection UI Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Security Viewer ( roles/apigee.securityViewer ) Apigee Organization Admin ( roles/apigee.admin ) View incident generative AI Insights cloudaicompanion.instances.generateText permission Opt an organization in or out of machine learning models for abuse detection apigee.securitySettings.update permission Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Organization Admin ( roles/apigee.admin ) Required roles for security actions The table below shows the required roles to perform tasks related to security actions .
- For example, if the current add-ons configuration is "addonsConfig": { "integrationConfig": { "enabled":true }, "monetizationConfig": { "enabled":true } }, the command to enable Advanced API Security would be curl "https://apigee.googleapis.com/v1/organizations/ ORG :setAddons" \ -X POST \ -H "Authorization: Bearer $TOKEN" \ -H "Content-type: application/json" \ -d '{ "addonsConfig": { "apiSecurityConfig": { "enabled": true }, "integrationConfig": { "enabled": true }, "monetizationConfig": { "enabled": true } } }' After you send the request, you will see a response like the following: { "name": "organizations/apigee-docs-d/operations/0718a945-76e0-4393-a456-f9929603b32c", "metadata": { "@type": "type.googleapis.com/google.cloud.apigee.v1.OperationMetadata", "operationType": "UPDATE", "targetResourceName": "organizations/apigee-docs-d", "state": "IN PROGRESS" } } Note: When you enable Advanced API Security in an organization, it can take up to a day for the scores for existing proxies and targets to be reflected in an environment.
- Security Report Task Required Role(s) Enable or disable Advanced API Security Apigee Organization Admin ( roles/apigee.admin ) Create reports Apigee Organization Admin ( roles/apigee.admin ) Apigee Security Admin ( roles/apigee.securityAdmin ) View reports Apigee Security Viewer ( roles/apigee.securityViewer ) Apigee Security Admin ( roles/apigee.securityAdmin ) Required roles for risk assessment The table below shows the required roles to perform tasks related to risk assessment .

