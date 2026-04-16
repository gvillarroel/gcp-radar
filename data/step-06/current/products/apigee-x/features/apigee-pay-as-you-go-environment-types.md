---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T18:40:29.754Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Apigee Pay-as-you-go environment types"
feature_slug: "apigee-pay-as-you-go-environment-types"
latest_feature_date: "2023-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials"
  - "https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure"
keywords:
  - "introduces"
  - "environment"
  - "base"
  - "types"
---

# Apigee Pay-as-you-go environment types

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Introduces the Base, Intermediate, and Comprehensive Pay-as-you-go environment types with different capability and cost profiles.

## Extended Definition

Introduces the Base, Intermediate, and Comprehensive Pay-as-you-go environment types with different capability and cost profiles.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials)
- [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure)

## Supporting Pages

### Manage attributes \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes](https://docs.cloud.google.com/apigee/docs/apihub/manage-attributes)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- The following example shows the API call to filter resources based on a user defined attribute value of String data type. curl -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-type: application/json" \ -X GET \ https://apihub.googleapis.com/v1/projects/test-project-1/locations/us-central1/apis?filter=attributes.projects/test-project-1/locations/us-central1/attributes/cdcb1260-ed63-4e5b-935d-4394f178da4f.string values.values:helloworld Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- REST API To filter APIs based on attributes, issue a GET request to the following API: https://apihub.googleapis.com/v1/projects/ PROJECT /locations/ LOCATION /apis You can use system or user-defined attributes in the filter query parameter.
- Home Documentation Application development Apigee Guides Send feedback Manage attributes Stay organized with collections Save and categorize content based on your preferences.
- Filter resources based on attributes Filtering APIs based on system and user attributes provides greater flexibility and control when searching and managing your APIs.

### Secure an API with OAuth 2.0 \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/secure-calls-your-api-through-oauth-20-client-credentials)
- Source ID: `site-docs-reference-2`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Click the GenerateAccessTokenClient policy in the Request pane: The following XML configuration is displayed: < OAuthV2 name = "GenerateAccessTokenClient" > < ! -- This policy generates an OAuth 2.0 access token using the client credentials grant type -- > < Operation>GenerateAccessToken < / Operation > < ! -- This is in milliseconds , so expire in an hour -- > < ExpiresIn>3600000 < / ExpiresIn > < SupportedGrantTypes > < ! -- This part is very important : most real OAuth 2.0 apps will want to use other grant types .
- In this case it is important to NOT include the "client credentials" type because it allows a client to get access to a token with no user authentication -- > < GrantType>client credentials < / GrantType > < / SupportedGrantTypes > < GrantType>request . queryparam . grant type < / GrantType > < GenerateResponse / > < / OAuthV2 > The configuration includes the following: The <Operation> , which can be one of several predefined values, defines what the policy is going to do.
- Before you begin To complete this tutorial, you must have access to an Apigee organization where you have permission to: Create and deploy API proxies Create API products Create developer apps You must also have a properly configured environment group hostname with which you can make Apigee API proxy calls.
- Configure the proxy with the following: In this field do this Proxy Name Enter: helloworld oauth2 Base Path Change to: /hellooauth2 The Project Base Path is part of the URL used to make requests to the API proxy.

### Understanding organizations \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure)
- Source ID: `site-docs-reference-2`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- Go to Apigee Entitlements and billing Whether the paid organization uses a Subscription or Pay-as-you-go pricing model, the items that are metered for billing purposes are: environments, API calls, and proxy deployments.
- Subscription plans make sense at higher consumption volumes - where there are larger numbers of environments, a high volume of API calls, or a large number of API proxies under management by Apigee.
- Home Documentation Application development Apigee Guides Send feedback Understanding organizations Stay organized with collections Save and categorize content based on your preferences.
- Apigee Organizations within the Google Cloud hierarchy The following diagram shows the relationship between Apigee organizations and environments, and Google Cloud projects and folders.

