---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:26:55.420Z"
product_name: "Apigee Advanced API Security"
product_slug: "apigee-advanced-api-security"
feature_name: "Risk Assessment v2 public preview"
feature_slug: "risk-assessment-v2-public-preview"
latest_feature_date: "2024-08-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-security/security-scores"
  - "https://docs.cloud.google.com/apigee/docs/api-security/security-scores-api"
  - "https://docs.cloud.google.com/apigee/docs/api-security/security-alerts"
keywords:
  - "introduced"
  - "public"
  - "assessment"
  - "preview"
  - "risk"
---

# Risk Assessment v2 public preview

Product: Apigee Advanced API Security
Coverage: MEDIUM

## Step 02 Summary

Risk Assessment v2 is introduced in public preview for Apigee Advanced API Security.

## Extended Definition

Risk Assessment v2 is introduced in public preview for Apigee Advanced API Security.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores)
- [https://docs.cloud.google.com/apigee/docs/api-security/security-scores-api](https://docs.cloud.google.com/apigee/docs/api-security/security-scores-api)
- [https://docs.cloud.google.com/apigee/docs/api-security/security-alerts](https://docs.cloud.google.com/apigee/docs/api-security/security-alerts)

## Supporting Pages

### Risk assessment overview and UI \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores)
- Source ID: `site-docs-reference-required-5`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Risk Assessment v2 concepts and scoring methodology Risk assessment security scores assess the security risk of your APIs based on the scoring of security assessments and weights in a security profile.
- Limitations and known issues on Risk Assessment v2 Security scores have the following limitations and known issues: Security scores are only generated if an environment has deployed proxies.
- Home Documentation Application development Apigee Guides Send feedback Risk assessment overview and UI Stay organized with collections Save and categorize content based on your preferences.
- Overview Advanced API Security risk assessment continuously evaluates API proxy configurations and calculates security scores to help identify and address vulnerabilities in your APIs.

### Security scores and profiles API \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/security-scores-api](https://docs.cloud.google.com/apigee/docs/api-security/security-scores-api)
- Source ID: `site-api-reference-required-2`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Risk Assessment v2 API Examples Preview — Risk Assessment v2 This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Get existing custom security profiles This command retrieves the information for all security profiles for your project: curl "https://apigee.googleapis.com/v1/organizations/ ORG /securityProfilesV2" \ -H "Authorization: Bearer $TOKEN" This command retrieves the metadata for a specific security profile and can be used to retrieve information on the google-default profile as well as custom profiles: curl "https://apigee.googleapis.com/v1/organizations/ ORG /securityProfilesV2/ PROFILE ID " \ -H "Authorization: Bearer $TOKEN" Create a new custom security profile To create a new custom security profile, use a command like this: curl "https://apigee.googleapis.com/v1/organizations/ ORG /securityProfilesV2?security profile v2 id= PROFILE ID " \ -X POST \ -H "Authorization: Bearer $TOKEN" \ -H 'Content-type: application/json' \ -d '{ "description": " PROFILE DESC ", "risk assessment type": "APIGEE", "profile assessment configs": { "auth-policies-check": {"weight": "MINOR"}, "threat-policies-check": {"weight": "MODERATE"} } }' Update an existing custom security profile To update an existing profile, use a command like: curl "https://apigee.googleapis.com/v1/organizations/ ORG /securityProfilesV2/ PROFILE ID ?update mask= UPDATE MASK " \ -X PATCH \ -H "Authorization: Bearer $TOKEN" \ -H 'Content-type: application/json' \ -d '{"description": " PROFILE DESC "}' where UPDATE MASK can be one of these values, if present: description , profile assessment configs , description,profile assessment configs , or (everything).
- See Disable collection of metrics for instructions on deleting the Cloud Monitoring metrics. curl -H "Authorization: Bearer $TOKEN" \ "https://apigee.googleapis.com/v1/organizations/ ORG /securityMonitoringConditions/ MONITORING CONDITION ID " \ -X DELETE Risk Assessment v1 This section shows information and examples for Risk Assessment v1 APIs.
- Retrieve batch security assessment results Users with the Security Admin or Security Viewer roles have permissions to perform an ad hoc risk assessment computation.

### Security alerts \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/security-alerts](https://docs.cloud.google.com/apigee/docs/api-security/security-alerts)
- Source ID: `site-docs-reference-required-6`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- Current security score of a deployed resource based on a security profile. location, org, scope, resource, security profile Filters Filter Label Description location Location of the resource: global always. org Apigee organization name env Apigee environment name profile Apigee API Security profile name proxy Apigee API proxy name target server Apigee target server name detection rule Apigee API security detection rule name scope For Risk Assessment v2, identifier of the scope associated with the assessed resource. resource For Risk Assessment v2, identifier of the assessed resource. security profile For Risk Assessment v2, identifier of the security profile used to assess the resource.
- Example: Create a risk assessment monitoring condition monitoring alert (Risk Assessment v2) This example creates a new Cloud Monitoring alerting policy for a Risk Assessment monitoring condition that alerts if the security score on any of its monitored proxies falls below a certain threshold.
- This value is measured at least once every 3 hours. location, org, env, profile, target server Apigee API Security Profile Environment Association Security score of Apigee environment: apigee.googleapis.com/security/environment score Applies to Risk Assessment v1.
- This value is measured once every hour. location, org, env, incident id, detection rule Apigee API Security Profile Environment Association Security score of Apigee API sources: apigee.googleapis.com/security/source score Applies to Risk Assessment v1.

