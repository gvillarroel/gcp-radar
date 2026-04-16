---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:26:55.418Z"
product_name: "Apigee Advanced API Security"
product_slug: "apigee-advanced-api-security"
feature_name: "Risk Assessment v2 multi-profile proxy assessment"
feature_slug: "risk-assessment-v2-multi-profile-proxy-assessment"
latest_feature_date: "2024-10-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-security/security-scores"
  - "https://docs.cloud.google.com/apigee/docs/api-security/security-scores-api"
  - "https://docs.cloud.google.com/apigee/docs/apihub/manage-monitoring-conditions-multi-gateway"
keywords:
  - "enables"
  - "multi"
  - "profile"
  - "scoring"
  - "proxy"
  - "assessment"
  - "risk"
---

# Risk Assessment v2 multi-profile proxy assessment

Product: Apigee Advanced API Security
Coverage: MEDIUM

## Step 02 Summary

Risk Assessment v2 enables proxy risk scoring across multiple security profiles.

## Extended Definition

Risk Assessment v2 enables proxy risk scoring across multiple security profiles.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores)
- [https://docs.cloud.google.com/apigee/docs/api-security/security-scores-api](https://docs.cloud.google.com/apigee/docs/api-security/security-scores-api)
- [https://docs.cloud.google.com/apigee/docs/apihub/manage-monitoring-conditions-multi-gateway](https://docs.cloud.google.com/apigee/docs/apihub/manage-monitoring-conditions-multi-gateway)

## Supporting Pages

### Risk assessment overview and UI \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/security-scores](https://docs.cloud.google.com/apigee/docs/api-security/security-scores)
- Source ID: `site-docs-reference-required-5`
- Final score: 187
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Risk Assessment v2 concepts and scoring methodology Risk assessment security scores assess the security risk of your APIs based on the scoring of security assessments and weights in a security profile.
- The main feature differences between v1 and v2 are: v2 includes: Improved reliability, including faster score calculations with recent proxy data Score calculation without the need to first attach a security profile to an environment Simplified score presentation, based on a 0% to 100% scale The concept of assessment check weights, which v1 does not support.
- For example, if there are three authentication policy checks in a security profile and the assessed proxy includes one of the three, the assessment score will include full points for the one found policy and zero points for the other two policies which are not present.
- Overview Advanced API Security risk assessment continuously evaluates API proxy configurations and calculates security scores to help identify and address vulnerabilities in your APIs.

### Security scores and profiles API \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-security/security-scores-api](https://docs.cloud.google.com/apigee/docs/api-security/security-scores-api)
- Source ID: `site-api-reference-required-2`
- Final score: 151
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See securityAssessmentResults.batchCompute in the Apigee Management API reference documentation for more information on this functionality. curl "https://apigee.googleapis.com/v1/organizations/ ORG /securityAssessmentResults:batchCompute" \ -X POST \ -H "Authorization: Bearer $TOKEN" \ -H 'Content-type: application/json' \ -d '{ "profile": " PROFILE ID ", "scope": " ENV ", RESOURCES }' This is a potential response for the request: { "securityAssessmentResults": [ { "resource": { "type": "API PROXY", "name": "my-proxy-1", "resourceRevisionId": "1" }, "createTime": "2023-11-22T04:49:29.418166Z", "scoringResult": { "severity": "HIGH", "failedAssessmentPerWeight": { "MINOR": 1 }, "assessmentRecommendations": { "cors-policies-check": { "displayName": "CORS policies check", "weight": "MAJOR", "recommendations": [ { "description": "Check whether a CORS policy or CORS header in AssignMessage policy are present.", "link": { "text": "Learn more", "uri": "https://cloud.google.com/apigee/docs/api-platform/reference/policies/reference-overview-policy" } } ], "verdict": "FAIL", "scoreImpact": 100 } }, "dataUpdateTime": "2023-11-22T04:49:29.418166Z" } } ], "assessmentTime": "2023-11-22T04:49:29.418166Z" } Manage security profiles This section provides examples for managing security profiles using the APIs and is not exhaustive.
- This can be any subset of the following security categories : abuse authorization cors mtls mediation threat Define the profile in the body of an API call To define a custom profile in the body of an API call, enter a command similar to the following: curl "https://apigee.googleapis.com/v1/organizations/ ORG /securityProfiles?security profile id= PROFILE ID " \ -X POST \ -H "Authorization: Bearer $TOKEN" \ -H "Content-Type: application/json" \ -d '{ "description":"test custom profile", "profileConfig" : { "categories":[ {"cors":{}}, {"threat":{}} ] } }' This creates a custom profile that includes the categories cors and threat, and returns a response like this: { "name": " PROFILE ID ", "revisionId": "1", "revisionCreateTime": "2023-07-17T18:47:08Z", "revisionUpdateTime": "2023-07-17T18:47:08Z", "scoringConfigs": [ { "title": "json", "scorePath": "/org@ ORG /envgroup@ ENVGROUP /env@ ENV /proxies/proxy@$proxy/policies/individual/security/threat/json", "description": "Check if JSONThreatProtection policy is configured." }, { "title": "xml", "scorePath": "/org@ ORG /envgroup@ ENVGROUP /env@ ENV /proxies/proxy@$proxy/policies/individual/security/threat/xml", "description": "Check if XMLThreatProtection policy is configured." }, { "title": "cors", "scorePath": "/org@ ORG /envgroup@ ENVGROUP /env@ ENV /proxies/proxy@$proxy/policies/individual/security/cors", "description": "Check if CORS policy is configured." } ], "maxScore": 1200, "minScore": 200, "profileConfig": { "categories": [ { "cors": {} }, { "threat": {} } ] }, "description": "test custom profile" } Define the profile by attaching a JSON file to an API call You can also define a custom security profile by attaching a JSON file that defines the profile to an API call.
- Get existing custom security profiles This command retrieves the information for all security profiles for your project: curl "https://apigee.googleapis.com/v1/organizations/ ORG /securityProfilesV2" \ -H "Authorization: Bearer $TOKEN" This command retrieves the metadata for a specific security profile and can be used to retrieve information on the google-default profile as well as custom profiles: curl "https://apigee.googleapis.com/v1/organizations/ ORG /securityProfilesV2/ PROFILE ID " \ -H "Authorization: Bearer $TOKEN" Create a new custom security profile To create a new custom security profile, use a command like this: curl "https://apigee.googleapis.com/v1/organizations/ ORG /securityProfilesV2?security profile v2 id= PROFILE ID " \ -X POST \ -H "Authorization: Bearer $TOKEN" \ -H 'Content-type: application/json' \ -d '{ "description": " PROFILE DESC ", "risk assessment type": "APIGEE", "profile assessment configs": { "auth-policies-check": {"weight": "MINOR"}, "threat-policies-check": {"weight": "MODERATE"} } }' Update an existing custom security profile To update an existing profile, use a command like: curl "https://apigee.googleapis.com/v1/organizations/ ORG /securityProfilesV2/ PROFILE ID ?update mask= UPDATE MASK " \ -X PATCH \ -H "Authorization: Bearer $TOKEN" \ -H 'Content-type: application/json' \ -d '{"description": " PROFILE DESC "}' where UPDATE MASK can be one of these values, if present: description , profile assessment configs , description,profile assessment configs , or (everything).
- Overview This page describes how to manage Risk Assessment security scores and security profiles (also referred to simply as "profiles") using APIs.

### "Manage monitoring conditions for multiple Apigee organizations and gateways\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/manage-monitoring-conditions-multi-gateway](https://docs.cloud.google.com/apigee/docs/apihub/manage-monitoring-conditions-multi-gateway)
- Source ID: `site-iam-reference`
- Final score: 143
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- REST To view the list of configured monitoring conditions, make a GET request to the securityMonitoringConditions API. curl "https://apigee.googleapis.com/v1/organizations/ APIGEE ORG /securityMonitoringConditions?risk assessment type=API HUB" \ -X GET \ -H "Authorization: Bearer $TOKEN" To view the list of monitoring conditions for a specific gateway, send a GET request as follows: curl "https://apigee.googleapis.com/v1/organizations/ APIGEE ORG /securityMonitoringConditions?risk assessment type=API HUB&filter=api hub gateway%3D GATEWAY ID " \ -X GET \ -H "Authorization: Bearer $TOKEN" To view the list of monitoring conditions for a specific security profile, send a GET request as follows: curl "https://apigee.googleapis.com/v1/organizations/ APIGEE ORG /securityMonitoringConditions?risk assessment type=API HUB&filter=profile%3D PROFILE ID " \ -X GET \ -H "Authorization: Bearer $TOKEN" To see details on a specific monitoring condition, use the following GET request: curl "https://apigee.googleapis.com/v1/organizations/ APIGEE ORG /securityMonitoringConditions/ CONDITION ID ?risk assessment type=API HUB" \ -X GET \ -H "Authorization: Bearer $TOKEN" Replace the following: APIGEE ORG : Name of the Apigee organization provisioned in your Google Cloud project.
- When creating a monitoring condition, you must set risk assessment type to API HUB . curl "https://apigee.googleapis.com/v1/organizations/ APIGEE ORG /securityMonitoringConditions?security monitoring condition id= CONDITION ID " \ -X POST \ -H "Authorization: Bearer $TOKEN" \ -H "Content-Type: application/json" \ -d '{ "profile": " PROFILE ID ", "risk assessment type": "API HUB", "api hub gateway": " GATEWAY NAME ", "include all resources": {} }' Replace the following: APIGEE ORG : Name of the Apigee organization provisioned in your Google Cloud project.
- This example uses an update mask to update a monitoring condition so that it includes specific deployments instead of all deployments. curl "https://apigee.googleapis.com/v1/organizations/ APIGEE ORG /securityMonitoringConditions/ CONDITION ID ?update mask=include" \ -X PATCH \ -H "Authorization: Bearer $TOKEN" \ -H "Content-Type: application/json" \ -d '{ "risk assessment type": "API HUB", "include": { "resources": [ { "type": "API HUB DEPLOYMENT", "name": " DEPLOYMENT ID 1 " }, { "type": "API HUB DEPLOYMENT", "name": " DEPLOYMENT ID 2 " } ] } }' Replace the following: APIGEE ORG : Name of the Apigee organization provisioned in your Google Cloud project.
- REST To delete a monitoring condition, make a DELETE request to the securityMonitoringConditions API. curl "https://apigee.googleapis.com/v1/organizations/ APIGEE ORG /securityMonitoringConditions/ CONDITION ID ?risk assessment type=API HUB" \ -X DELETE \ -H "Authorization: Bearer $TOKEN" Replace the following: APIGEE ORG : Name of the Apigee organization provisioned in your Google Cloud project.

