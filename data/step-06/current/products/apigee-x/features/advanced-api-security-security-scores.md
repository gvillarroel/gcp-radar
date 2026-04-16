---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.189Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Advanced API Security security scores"
feature_slug: "advanced-api-security-security-scores"
latest_feature_date: "2022-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy"
  - "https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery"
keywords:
  - "improvement"
  - "posture"
  - "recommendations"
  - "provide"
  - "scores"
  - "rate"
  - "advanced"
  - "security"
---

# Advanced API Security security scores

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Security scores rate API security posture and provide recommendations for improvement.

## Extended Definition

Security scores rate API security posture and provide recommendations for improvement.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway](https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy)
- [https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery](https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery)

## Supporting Pages

### "Advanced API Security for multiple Apigee organizations and gateways \_\

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway](https://docs.cloud.google.com/apigee/docs/apihub/advanced-api-security-multi-gateway)
- Source ID: `site-docs-reference-2`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- IAM roles and permissions To use Advanced API Security, you must have the following IAM roles and permissions: IAM roles Permissions Description API Security Admin ( roles/apigee.securityAdmin ) apigee.securityProfilesV2.create apigee.securityProfilesV2.delete apigee.securityProfilesV2.update apigee.securityProfilesV2.get apigee.securityProfilesV2.list Provides permissions to create, update, delete, get, and list security profiles. apigee.securityAssessmentResult.compute Provides permissions to compute security assessment results. apigee.securityMonitoringConditions.create apigee.securityMonitoringConditions.delete apigee.securityMonitoringConditions.get apigee.securityMonitoringConditions.list apigee.securityMonitoringConditions.update Provides permissions to create, delete, get, list, and update security monitoring conditions.
- Key capabilities Advanced API Security offers the following capabilities when you enable it for your API hub instance: Risk assessment across multiple Apigee organizations, environments, and gateways: assess the security scores for a specific API or for all APIs across all of its deployments in multiple Apigee organizations, environments, and gateways to get a comprehensive understanding of its risk profile.
- Apigee Advanced API Security is available as an additional add-on for your API hub instance to help you manage and govern the security posture of your APIs across multiple Apigee organizations, environments, and gateways.
- API Security Viewer ( roles/apigee.securityViewer ) apigee.securityProfilesV2.get apigee.securityProfilesV2.list Provides permissions to get, list, and view security profiles. apigee.securityAssessmentResult.compute Provides permissions to compute security assessment results. apigee.securityMonitoringConditions.get apigee.securityMonitoringConditions.list Provides permissions to get and list security monitoring conditions.

### AssignMessage policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/assign-message-policy)
- Source ID: `site-api-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Optional Type Complex type Parent Element <Set> Child Elements <HeaderName> <GoogleAccessToken> <GoogleIdToken> The Authentication element uses the following syntax: Syntax <AssignMessage> ... <Set> <Authentication> <HeaderName> HEADER NAME </HeaderName> --EITHER-- <GoogleAccessToken> <Scopes> <Scope> SCOPE </Scope> ... </Scopes> <GoogleAccessToken> --OR-- <GoogleIDToken> <Audience ref=" FLOW VARIABLE "> TARGET URL </Audience> </GoogleIDToken> </Authentication> </Set> ... </AssignMessage> Using Access Token The following example shows the GoogleAccessToken element: <Authentication> <GoogleAccessToken> <Scopes> <Scope>https://www.googleapis.com/auth/cloud-platform</Scope> </Scopes> </GoogleAccessToken> </Authentication> Using ID Token The following example shows the GoogleIDToken element: <Authentication> <GoogleIDToken> <Audience>https://httpserver0-bar.run.app</Audience> </GoogleIDToken> </Authentication> Using HeaderName The following example shows the HeaderName element: <Authentication> <HeaderName>Authorization</HeaderName> <GoogleAccessToken> <Scopes> <Scope>https://www.googleapis.com/auth/cloud-platform</Scopes> </Scopes> </GoogleAccessToken> </Authentication> <HeaderName> (child of <Authentication> ) By default, when an Authentication configuration is present, Apigee generates a bearer token and injects it into the Authorization header in the message sent to the target system.
- Optional Type Array of <Header> elements Parent Element <Set> Child Elements <Header> The <Headers> element uses the following syntax: Syntax <AssignMessage continueOnError="[false true]" enabled="[true false]" name=" POLICY NAME " > <Set> <Headers> <Header name=" HEADER NAME "> HEADER VALUE </Header> ... </Headers> </Set> </AssignMessage> Example 1 The following example sets the x-ratelimit-remaining header to the value of the ratelimit.Quota-1.available.count variable: <AssignMessage name="AM-Set-RateLimit-Header"> <Set> <Headers> <Header name="X-RateLimit-Remaining">{ratelimit.Quota-1.available.count}</Header> </Headers> </Set> <AssignTo>response</AssignTo> </AssignMessage> If you define empty headers in your policy ( <Set><Headers/></Set> ), the policy does not set any headers.
- In this case, the property set name is obtained from the header propset name , the key is provided in the header propset key , and the value assigned to the key is stored in the variable flow variable . < AssignMessage async = "false" continueOnError = "false" enabled = "true" name = "assignMessage" > < DisplayName>Assign Message - 1 < / DisplayName > < Properties / > < AssignVariable > < Name>flow variable < / Name > < PropertySetRef > { request . header . propset name } . { request . header . propset key } < / PropertySetRef > < / AssignVariable > < / AssignMessage > You can use any combination of flow variables and literal strings in the <PropertySetRef> element.
- Type String Parent Element <Authentication> Child Elements <Audience> The GoogleIDToken element uses the following syntax: Syntax <AssignMessage> ... <Authentication> <GoogleIDToken> <Audience ref=" FLOW VARIABLE NAME "> TARGET URL </Audience> </GoogleIDToken> </Authentication> </AssignMessage> Example 1 The following example shows the GoogleIDToken element: <Authentication> <GoogleIDToken> <Audience>https://httpserver0-bar.run.app</Audience> </GoogleIDToken> </Authentication> <Audience> (child of <GoogleAccessToken> ) The audience for the generated authentication token, such as the API or account that the token grants access to.

### Shadow API Discovery overview \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery](https://docs.cloud.google.com/apigee/docs/api-observation/shadow-api-discovery)
- Source ID: `site-docs-reference-2`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Task Required Role(s) Enable or disable Advanced API Security Apigee Organization Admin (roles/apigee.admin) Create observation sources and jobs API Management Admin (roles/apim.admin) View observations API Management Viewer (roles/apim.viewer) Access Shadow API Discovery in the Apigee UI This section describes how to access Shadow API Discovery in the Apigee UI.
- Enable Shadow API Discovery Shadow API Discovery is part of the Advanced API Security add-on and is available for Google Cloud projects with or without Apigee provisioning.
- See Manage Advanced API Security for Subscription organizations Pay-as-you-go customers must enable the add-on for at least one environment.
- See Manage Advanced API Security for Pay-as-you-go organizations Shadow API Discovery is not available for Apigee eval environments.

