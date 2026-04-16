---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:26:55.408Z"
product_name: "Apigee Advanced API Security"
product_slug: "apigee-advanced-api-security"
feature_name: "Risk Assessment v2 general availability"
feature_slug: "risk-assessment-v2-general-availability"
latest_feature_date: "2025-12-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-security/security-scores"
  - "https://docs.cloud.google.com/apigee/docs/api-security/enable-security"
  - "https://docs.cloud.google.com/apigee/docs/api-security/security-scores-api"
keywords:
  - "reached"
  - "availability"
  - "assessment"
  - "risk"
---

# Risk Assessment v2 general availability

Product: Apigee Advanced API Security
Coverage: MEDIUM

## Step 02 Summary

Risk Assessment v2 reached general availability.

## Extended Definition

Risk Assessment v2 reached general availability.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores)
- [https://docs.cloud.google.com/apigee/docs/api-security/enable-security](https://docs.cloud.google.com/apigee/docs/api-security/enable-security)
- [https://docs.cloud.google.com/apigee/docs/api-security/security-scores-api](https://docs.cloud.google.com/apigee/docs/api-security/security-scores-api)

## Supporting Pages

### Risk assessment overview and UI \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores)
- Source ID: `site-docs-reference-required-5`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Risk Assessment v2 concepts and scoring methodology Risk assessment security scores assess the security risk of your APIs based on the scoring of security assessments and weights in a security profile.
- Limitations and known issues on Risk Assessment v2 Security scores have the following limitations and known issues: Security scores are only generated if an environment has deployed proxies.
- Home Documentation Application development Apigee Guides Send feedback Risk assessment overview and UI Stay organized with collections Save and categorize content based on your preferences.
- Overview Advanced API Security risk assessment continuously evaluates API proxy configurations and calculates security scores to help identify and address vulnerabilities in your APIs.

### Getting started \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/enable-security](https://docs.cloud.google.com/apigee/docs/api-security/enable-security)
- Source ID: `site-docs-reference`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- Risk Assessment Task Required Role(s) Create, update, or delete a custom security profile Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Organization Admin ( roles/apigee.admin ) Attach or detach a security profile Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Organization Admin ( roles/apigee.admin ) View security scores Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Security Viewer ( roles/apigee.securityViewer ) Apigee Organization Admin ( roles/apigee.admin ) List all security profiles or get a profile Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Security Viewer ( roles/apigee.securityViewer ) Apigee Organization Admin ( roles/apigee.admin ) Create, update, or delete a security monitoring condition Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Organization Admin ( roles/apigee.admin ) List and view security monitoring conditions Apigee Security Admin ( roles/apigee.securityAdmin ) Apigee Security Viewer ( roles/apigee.securityViewer ) Apigee Organization Admin ( roles/apigee.admin ) List and view security monitoring condition metrics Monitoring Admin ( roles/monitoring.admin ) Monitoring Editor ( roles/monitoring.editor ) Create, update, or delete monitoring alerts See Required roles (for security alerts) View monitoring alerts See Incidents for metric-based alerting policies: Before you begin Required roles and permissions for abuse detection The table below shows the required roles and permissions to perform tasks related to abuse detection .
- Security Report Task Required Role(s) Enable or disable Advanced API Security Apigee Organization Admin ( roles/apigee.admin ) Create reports Apigee Organization Admin ( roles/apigee.admin ) Apigee Security Admin ( roles/apigee.securityAdmin ) View reports Apigee Security Viewer ( roles/apigee.securityViewer ) Apigee Security Admin ( roles/apigee.securityAdmin ) Required roles for risk assessment The table below shows the required roles to perform tasks related to risk assessment .
- Next steps Once you have enabled Advanced API Security, see: Security reports Risk assessment Abuse detection Security alerts Security actions Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For example, you can use Terraform to configure: Risk Assessment v2 security profiles Risk Assessment v2 security monitoring conditions Abuse detection exclusion lists Security actions For information on the currently supported functionality, see the Apigee section of the Terraform Registry .

### Security scores and profiles API \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/security-scores-api](https://docs.cloud.google.com/apigee/docs/api-security/security-scores-api)
- Source ID: `site-api-reference-required-2`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- Get existing custom security profiles This command retrieves the information for all security profiles for your project: curl "https://apigee.googleapis.com/v1/organizations/ ORG /securityProfilesV2" \ -H "Authorization: Bearer $TOKEN" This command retrieves the metadata for a specific security profile and can be used to retrieve information on the google-default profile as well as custom profiles: curl "https://apigee.googleapis.com/v1/organizations/ ORG /securityProfilesV2/ PROFILE ID " \ -H "Authorization: Bearer $TOKEN" Create a new custom security profile To create a new custom security profile, use a command like this: curl "https://apigee.googleapis.com/v1/organizations/ ORG /securityProfilesV2?security profile v2 id= PROFILE ID " \ -X POST \ -H "Authorization: Bearer $TOKEN" \ -H 'Content-type: application/json' \ -d '{ "description": " PROFILE DESC ", "risk assessment type": "APIGEE", "profile assessment configs": { "auth-policies-check": {"weight": "MINOR"}, "threat-policies-check": {"weight": "MODERATE"} } }' Update an existing custom security profile To update an existing profile, use a command like: curl "https://apigee.googleapis.com/v1/organizations/ ORG /securityProfilesV2/ PROFILE ID ?update mask= UPDATE MASK " \ -X PATCH \ -H "Authorization: Bearer $TOKEN" \ -H 'Content-type: application/json' \ -d '{"description": " PROFILE DESC "}' where UPDATE MASK can be one of these values, if present: description , profile assessment configs , description,profile assessment configs , or (everything).
- See Disable collection of metrics for instructions on deleting the Cloud Monitoring metrics. curl -H "Authorization: Bearer $TOKEN" \ "https://apigee.googleapis.com/v1/organizations/ ORG /securityMonitoringConditions/ MONITORING CONDITION ID " \ -X DELETE Risk Assessment v1 This section shows information and examples for Risk Assessment v1 APIs.
- Risk Assessment v2 API Examples Preview — Risk Assessment v2 This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Retrieve batch security assessment results Users with the Security Admin or Security Viewer roles have permissions to perform an ad hoc risk assessment computation.

